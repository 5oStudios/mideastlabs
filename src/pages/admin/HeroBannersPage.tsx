import React, { useState, useRef } from 'react';
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';
import { Plus, Pencil, Trash2, GripVertical, Image, Loader2, X } from 'lucide-react';
import { 
  useHeroBanners, 
  useCreateHeroBanner, 
  useUpdateHeroBanner, 
  useDeleteHeroBanner,
  uploadHeroBannerImage,
  deleteHeroBannerImage
} from '@/hooks/useHeroBanners';
import type { Tables } from '@/integrations/supabase/types';

type HeroBanner = Tables<'hero_banners'>;

interface BannerFormState {
  title_en: string;
  title_ar: string;
  subtitle_en: string;
  subtitle_ar: string;
  cta_text_en: string;
  cta_text_ar: string;
  cta_link: string;
}

const HeroBannersPage = () => {
  const { data: banners = [], isLoading } = useHeroBanners();
  const createBanner = useCreateHeroBanner();
  const updateBanner = useUpdateHeroBanner();
  const deleteBanner = useDeleteHeroBanner();
  
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingBanner, setEditingBanner] = useState<HeroBanner | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [formState, setFormState] = useState<BannerFormState>({
    title_en: '',
    title_ar: '',
    subtitle_en: '',
    subtitle_ar: '',
    cta_text_en: '',
    cta_text_ar: '',
    cta_link: '',
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const resetForm = () => {
    setFormState({
      title_en: '',
      title_ar: '',
      subtitle_en: '',
      subtitle_ar: '',
      cta_text_en: '',
      cta_text_ar: '',
      cta_link: '',
    });
    setSelectedFile(null);
    setPreviewUrl(null);
  };

  const handleAdd = () => {
    setEditingBanner(null);
    resetForm();
    setIsDialogOpen(true);
  };

  const handleEdit = (banner: HeroBanner) => {
    setEditingBanner(banner);
    setFormState({
      title_en: banner.title_en || '',
      title_ar: banner.title_ar || '',
      subtitle_en: banner.subtitle_en || '',
      subtitle_ar: banner.subtitle_ar || '',
      cta_text_en: banner.cta_text_en || '',
      cta_text_ar: banner.cta_text_ar || '',
      cta_link: banner.cta_link || '',
    });
    setSelectedFile(null);
    setPreviewUrl(banner.image_url);
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string, imageUrl: string) => {
    try {
      await deleteBanner.mutateAsync({ id, imageUrl });
      toast({
        title: "Banner deleted",
        description: "The banner has been removed successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete banner",
        variant: "destructive",
      });
    }
  };

  const handleToggleActive = async (id: string, currentStatus: boolean) => {
    try {
      await updateBanner.mutateAsync({
        id,
        updates: { is_active: !currentStatus },
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update banner status",
        variant: "destructive",
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSave = async () => {
    setIsUploading(true);

    try {
      let imageUrl = editingBanner?.image_url || '';

      // Upload new image if selected
      if (selectedFile) {
        imageUrl = await uploadHeroBannerImage(selectedFile);

        // Delete old image if editing and had a previous image
        if (editingBanner?.image_url) {
          await deleteHeroBannerImage(editingBanner.image_url);
        }
      }

      if (editingBanner) {
        // Update existing banner
        await updateBanner.mutateAsync({
          id: editingBanner.id,
          updates: {
            image_url: imageUrl,
            title_en: formState.title_en || null,
            title_ar: formState.title_ar || null,
            subtitle_en: formState.subtitle_en || null,
            subtitle_ar: formState.subtitle_ar || null,
            cta_text_en: formState.cta_text_en || null,
            cta_text_ar: formState.cta_text_ar || null,
            cta_link: formState.cta_link || null,
          },
        });

        toast({
          title: "Banner updated",
          description: "The banner has been updated successfully.",
        });
      } else {
        // Create new banner
        if (!imageUrl) {
          toast({
            title: "Error",
            description: "Please select an image",
            variant: "destructive",
          });
          setIsUploading(false);
          return;
        }

        const maxOrder = banners.length > 0 
          ? Math.max(...banners.map(b => b.display_order || 0)) 
          : 0;

        await createBanner.mutateAsync({
          image_url: imageUrl,
          display_order: maxOrder + 1,
          is_active: true,
          title_en: formState.title_en || null,
          title_ar: formState.title_ar || null,
          subtitle_en: formState.subtitle_en || null,
          subtitle_ar: formState.subtitle_ar || null,
          cta_text_en: formState.cta_text_en || null,
          cta_text_ar: formState.cta_text_ar || null,
          cta_link: formState.cta_link || null,
        });

        toast({
          title: "Banner added",
          description: "The new banner has been added successfully.",
        });
      }

      setIsDialogOpen(false);
      resetForm();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to save banner",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const clearSelectedFile = () => {
    setSelectedFile(null);
    setPreviewUrl(editingBanner?.image_url || null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Hero Banners</h1>
          <p className="text-muted-foreground mt-1">Manage carousel banners on the homepage</p>
        </div>
        <Button onClick={handleAdd}>
          <Plus className="h-4 w-4 mr-2" />
          Add Banner
        </Button>
      </div>

      {/* Banners Table */}
      <Card>
        <CardContent className="p-0">
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
            </div>
          ) : banners.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
              <Image className="h-12 w-12 mb-4" />
              <p>No banners yet. Add your first banner.</p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12"></TableHead>
                  <TableHead>Image</TableHead>
                  <TableHead>Title (EN)</TableHead>
                  <TableHead className="w-24">Status</TableHead>
                  <TableHead className="w-32 text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {banners.map((banner) => (
                  <TableRow key={banner.id}>
                    <TableCell>
                      <GripVertical className="h-4 w-4 text-muted-foreground cursor-grab" />
                    </TableCell>
                    <TableCell>
                      <div className="w-32 h-20 bg-muted rounded overflow-hidden">
                        {banner.image_url ? (
                          <img
                            src={banner.image_url}
                            alt="Banner"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <Image className="h-6 w-6 text-muted-foreground" />
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm text-muted-foreground">
                        {banner.title_en || 'No title'}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Switch
                        checked={banner.is_active ?? false}
                        onCheckedChange={() => handleToggleActive(banner.id, banner.is_active ?? false)}
                      />
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleEdit(banner)}
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDelete(banner.id, banner.image_url)}
                        >
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      {/* Add/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingBanner ? 'Edit Banner' : 'Add New Banner'}</DialogTitle>
            <DialogDescription>
              Upload an image and configure the banner details.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            {/* Image Upload */}
            <div className="space-y-2">
              <Label>Banner Image *</Label>
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

            {/* Title Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title_en">Title (English)</Label>
                <Input
                  id="title_en"
                  value={formState.title_en}
                  onChange={(e) => setFormState(prev => ({ ...prev, title_en: e.target.value }))}
                  placeholder="Banner title in English"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="title_ar">Title (العربية)</Label>
                <Input
                  id="title_ar"
                  dir="rtl"
                  value={formState.title_ar}
                  onChange={(e) => setFormState(prev => ({ ...prev, title_ar: e.target.value }))}
                  placeholder="عنوان البانر بالعربية"
                />
              </div>
            </div>

            {/* Subtitle Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="subtitle_en">Subtitle (English)</Label>
                <Input
                  id="subtitle_en"
                  value={formState.subtitle_en}
                  onChange={(e) => setFormState(prev => ({ ...prev, subtitle_en: e.target.value }))}
                  placeholder="Banner subtitle in English"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subtitle_ar">Subtitle (العربية)</Label>
                <Input
                  id="subtitle_ar"
                  dir="rtl"
                  value={formState.subtitle_ar}
                  onChange={(e) => setFormState(prev => ({ ...prev, subtitle_ar: e.target.value }))}
                  placeholder="العنوان الفرعي بالعربية"
                />
              </div>
            </div>

            {/* CTA Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cta_text_en">Button Text (English)</Label>
                <Input
                  id="cta_text_en"
                  value={formState.cta_text_en}
                  onChange={(e) => setFormState(prev => ({ ...prev, cta_text_en: e.target.value }))}
                  placeholder="e.g., Learn More"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cta_text_ar">Button Text (العربية)</Label>
                <Input
                  id="cta_text_ar"
                  dir="rtl"
                  value={formState.cta_text_ar}
                  onChange={(e) => setFormState(prev => ({ ...prev, cta_text_ar: e.target.value }))}
                  placeholder="مثال: اعرف المزيد"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cta_link">Button Link</Label>
              <Input
                id="cta_link"
                value={formState.cta_link}
                onChange={(e) => setFormState(prev => ({ ...prev, cta_link: e.target.value }))}
                placeholder="/services or https://example.com"
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)} disabled={isUploading}>
              Cancel
            </Button>
            <Button onClick={handleSave} disabled={isUploading || (!selectedFile && !editingBanner)}>
              {isUploading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Uploading...
                </>
              ) : (
                editingBanner ? 'Save Changes' : 'Add Banner'
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HeroBannersPage;
