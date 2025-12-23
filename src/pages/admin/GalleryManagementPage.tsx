import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { Plus, Pencil, Trash2, Image, Loader2, X } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import type { Tables } from '@/integrations/supabase/types';

type GalleryImage = Tables<'gallery_images'>;

const GalleryManagementPage = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingImage, setEditingImage] = useState<GalleryImage | null>(null);
  const [formData, setFormData] = useState<Partial<GalleryImage>>({});
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const fetchImages = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from('gallery_images')
      .select('*')
      .order('display_order', { ascending: true });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch gallery images",
        variant: "destructive",
      });
    } else {
      setImages(data || []);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleAdd = () => {
    setEditingImage(null);
    setFormData({
      title_en: '',
      title_ar: '',
      subtitle_en: '',
      subtitle_ar: '',
      category_en: '',
      category_ar: '',
      is_active: true,
      show_on_homepage: false,
    });
    setSelectedFile(null);
    setPreviewUrl(null);
    setIsDialogOpen(true);
  };

  const handleEdit = (image: GalleryImage) => {
    setEditingImage(image);
    setFormData(image);
    setSelectedFile(null);
    setPreviewUrl(image.image_url);
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string, imageUrl: string) => {
    if (imageUrl.includes('uploads')) {
      const path = imageUrl.split('/uploads/')[1];
      if (path) {
        await supabase.storage.from('uploads').remove([path]);
      }
    }

    const { error } = await supabase
      .from('gallery_images')
      .delete()
      .eq('id', id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to delete image",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Image deleted",
        description: "The image has been removed from the gallery.",
      });
      fetchImages();
    }
  };

  const handleToggleActive = async (id: string, currentStatus: boolean) => {
    const { error } = await supabase
      .from('gallery_images')
      .update({ is_active: !currentStatus })
      .eq('id', id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to update image status",
        variant: "destructive",
      });
    } else {
      fetchImages();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const uploadImage = async (file: File): Promise<string | null> => {
    const fileExt = file.name.split('.').pop();
    const fileName = `gallery/${Date.now()}.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from('uploads')
      .upload(fileName, file);

    if (uploadError) {
      toast({
        title: "Upload Error",
        description: uploadError.message,
        variant: "destructive",
      });
      return null;
    }

    const { data: urlData } = supabase.storage
      .from('uploads')
      .getPublicUrl(fileName);

    return urlData.publicUrl;
  };

  const handleSave = async () => {
    setIsUploading(true);

    try {
      let imageUrl = editingImage?.image_url || '';

      if (selectedFile) {
        const uploadedUrl = await uploadImage(selectedFile);
        if (!uploadedUrl) {
          setIsUploading(false);
          return;
        }
        imageUrl = uploadedUrl;

        if (editingImage?.image_url?.includes('uploads')) {
          const oldPath = editingImage.image_url.split('/uploads/')[1];
          if (oldPath) {
            await supabase.storage.from('uploads').remove([oldPath]);
          }
        }
      }

      if (!imageUrl && !editingImage) {
        toast({
          title: "Error",
          description: "Please select an image",
          variant: "destructive",
        });
        setIsUploading(false);
        return;
      }

      if (editingImage) {
        const { error } = await supabase
          .from('gallery_images')
          .update({
            image_url: imageUrl,
            title_en: formData.title_en,
            title_ar: formData.title_ar,
            subtitle_en: formData.subtitle_en,
            subtitle_ar: formData.subtitle_ar,
            category_en: formData.category_en,
            category_ar: formData.category_ar,
            is_active: formData.is_active,
            show_on_homepage: formData.show_on_homepage,
          })
          .eq('id', editingImage.id);

        if (error) throw error;

        toast({
          title: "Image updated",
          description: "The gallery image has been updated successfully.",
        });
      } else {
        const maxOrder = images.length > 0 
          ? Math.max(...images.map(i => i.display_order || 0)) 
          : 0;

        const { error } = await supabase
          .from('gallery_images')
          .insert({
            image_url: imageUrl,
            title_en: formData.title_en,
            title_ar: formData.title_ar,
            subtitle_en: formData.subtitle_en,
            subtitle_ar: formData.subtitle_ar,
            category_en: formData.category_en,
            category_ar: formData.category_ar,
            display_order: maxOrder + 1,
            is_active: formData.is_active ?? true,
            show_on_homepage: formData.show_on_homepage ?? false,
          });

        if (error) throw error;

        toast({
          title: "Image added",
          description: "The new image has been added to the gallery.",
        });
      }

      setIsDialogOpen(false);
      fetchImages();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to save image",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const clearSelectedFile = () => {
    setSelectedFile(null);
    setPreviewUrl(editingImage?.image_url || null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const MAX_IMAGES = 25;
  const isAtLimit = images.length >= MAX_IMAGES;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Gallery</h1>
          <p className="text-muted-foreground mt-1">
            Manage gallery images with titles and categories
            <span className={`ml-2 font-medium ${isAtLimit ? 'text-destructive' : 'text-primary'}`}>
              ({images.length}/{MAX_IMAGES})
            </span>
          </p>
        </div>
        <Button onClick={handleAdd} disabled={isAtLimit}>
          <Plus className="h-4 w-4 mr-2" />
          Add Image
        </Button>
      </div>

      {/* Gallery Grid */}
      {isLoading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      ) : images.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
          <Image className="h-16 w-16 mb-4" />
          <p>No gallery images yet. Add your first image.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image) => (
            <Card key={image.id} className={`overflow-hidden ${!image.is_active ? 'opacity-50' : ''}`}>
              <div className="relative aspect-[4/3] bg-muted">
                <img
                  src={image.image_url}
                  alt={image.title_en || 'Gallery image'}
                  className="w-full h-full object-cover"
                />
                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-background/80 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <Button size="sm" variant="secondary" onClick={() => handleEdit(image)}>
                    <Pencil className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => handleDelete(image.id, image.image_url)}>
                    <Trash2 className="h-4 w-4 mr-1" />
                    Delete
                  </Button>
                </div>
                {/* Status Badges */}
                <div className="absolute top-2 right-2 flex gap-1">
                  {!image.is_active && (
                    <div className="bg-destructive text-destructive-foreground px-2 py-1 rounded text-xs">
                      Hidden
                    </div>
                  )}
                  {image.show_on_homepage && (
                    <div className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs">
                      Homepage
                    </div>
                  )}
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium text-foreground truncate">{image.title_en || 'Untitled'}</h3>
                <p className="text-sm text-muted-foreground truncate">{image.subtitle_en}</p>
                {image.category_en && (
                  <p className="text-xs text-primary mt-1">{image.category_en}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Add/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingImage ? 'Edit Image' : 'Add New Image'}</DialogTitle>
            <DialogDescription>
              Add an image with title, subtitle, and category in both languages.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            {/* Image Upload */}
            <div className="space-y-2">
              <Label>Gallery Image</Label>
              {previewUrl ? (
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="w-full h-48 object-cover"
                  />
                  <Button
                    variant="destructive"
                    size="icon"
                    className="absolute top-2 right-2"
                    onClick={clearSelectedFile}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <div 
                  className="border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:border-primary/50 transition-colors"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Image className="h-10 w-10 mx-auto text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Click to upload or drag and drop
                  </p>
                  <Button variant="outline" type="button">
                    Choose Image
                  </Button>
                </div>
              )}
              <Input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
              {previewUrl && (
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => fileInputRef.current?.click()}
                >
                  Change Image
                </Button>
              )}
            </div>

            {/* English Content */}
            <div className="space-y-4">
              <h3 className="font-medium text-foreground">English Content</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title_en">Title</Label>
                  <Input
                    id="title_en"
                    value={formData.title_en || ''}
                    onChange={(e) => setFormData({ ...formData, title_en: e.target.value })}
                    placeholder="Image title"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subtitle_en">Subtitle</Label>
                  <Input
                    id="subtitle_en"
                    value={formData.subtitle_en || ''}
                    onChange={(e) => setFormData({ ...formData, subtitle_en: e.target.value })}
                    placeholder="Brief description"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category_en">Category</Label>
                  <Input
                    id="category_en"
                    value={formData.category_en || ''}
                    onChange={(e) => setFormData({ ...formData, category_en: e.target.value })}
                    placeholder="e.g., Equipment, Analysis"
                  />
                </div>
              </div>
            </div>

            {/* Arabic Content */}
            <div className="space-y-4">
              <h3 className="font-medium text-foreground">Arabic Content</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title_ar">Title (العنوان)</Label>
                  <Input
                    id="title_ar"
                    dir="rtl"
                    value={formData.title_ar || ''}
                    onChange={(e) => setFormData({ ...formData, title_ar: e.target.value })}
                    placeholder="عنوان الصورة"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subtitle_ar">Subtitle (العنوان الفرعي)</Label>
                  <Input
                    id="subtitle_ar"
                    dir="rtl"
                    value={formData.subtitle_ar || ''}
                    onChange={(e) => setFormData({ ...formData, subtitle_ar: e.target.value })}
                    placeholder="وصف مختصر"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category_ar">Category (الفئة)</Label>
                  <Input
                    id="category_ar"
                    dir="rtl"
                    value={formData.category_ar || ''}
                    onChange={(e) => setFormData({ ...formData, category_ar: e.target.value })}
                    placeholder="مثال: معدات، تحليل"
                  />
                </div>
              </div>
            </div>

            {/* Settings */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Active Status</Label>
                  <p className="text-sm text-muted-foreground">Enable to show this image</p>
                </div>
                <Switch
                  checked={formData.is_active ?? true}
                  onCheckedChange={(checked) => setFormData({ ...formData, is_active: checked })}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Show on Homepage</Label>
                  <p className="text-sm text-muted-foreground">Display in homepage gallery carousel</p>
                </div>
                <Switch
                  checked={formData.show_on_homepage ?? false}
                  onCheckedChange={(checked) => setFormData({ ...formData, show_on_homepage: checked })}
                />
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)} disabled={isUploading}>
              Cancel
            </Button>
            <Button onClick={handleSave} disabled={isUploading}>
              {isUploading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Uploading...
                </>
              ) : (
                editingImage ? 'Save Changes' : 'Add Image'
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GalleryManagementPage;
