import React, { useState } from 'react';
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
import { Plus, Pencil, Trash2, Image, X } from 'lucide-react';

interface GalleryImage {
  id: string;
  image_url: string;
  title_en: string;
  title_ar: string;
  subtitle_en: string;
  subtitle_ar: string;
  category_en: string;
  category_ar: string;
  order: number;
  is_active: boolean;
}

// Mock data
const mockImages: GalleryImage[] = [
  {
    id: '1',
    image_url: '/assets/gallery/lab-equipment-soxhlet.jpg',
    title_en: 'Laboratory Equipment',
    title_ar: 'معدات المختبر',
    subtitle_en: 'Advanced soxhlet extraction system',
    subtitle_ar: 'نظام استخلاص سوكسليت المتقدم',
    category_en: 'Equipment',
    category_ar: 'معدات',
    order: 1,
    is_active: true,
  },
  {
    id: '2',
    image_url: '/assets/gallery/microscope-analysis.jpg',
    title_en: 'Microscope Analysis',
    title_ar: 'تحليل المجهر',
    subtitle_en: 'High-precision microscopy',
    subtitle_ar: 'فحص مجهري عالي الدقة',
    category_en: 'Analysis',
    category_ar: 'تحليل',
    order: 2,
    is_active: true,
  },
];

const GalleryManagementPage = () => {
  const [images, setImages] = useState<GalleryImage[]>(mockImages);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingImage, setEditingImage] = useState<GalleryImage | null>(null);
  const [formData, setFormData] = useState<Partial<GalleryImage>>({});
  const { toast } = useToast();

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
    });
    setIsDialogOpen(true);
  };

  const handleEdit = (image: GalleryImage) => {
    setEditingImage(image);
    setFormData(image);
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    setImages(images.filter(i => i.id !== id));
    toast({
      title: "Image deleted",
      description: "The image has been removed from the gallery.",
    });
  };

  const handleSave = () => {
    if (editingImage) {
      setImages(images.map(i => 
        i.id === editingImage.id ? { ...i, ...formData } as GalleryImage : i
      ));
      toast({
        title: "Image updated",
        description: "The gallery image has been updated successfully.",
      });
    } else {
      const newImage: GalleryImage = {
        id: Date.now().toString(),
        image_url: formData.image_url || '',
        title_en: formData.title_en || '',
        title_ar: formData.title_ar || '',
        subtitle_en: formData.subtitle_en || '',
        subtitle_ar: formData.subtitle_ar || '',
        category_en: formData.category_en || '',
        category_ar: formData.category_ar || '',
        order: images.length + 1,
        is_active: formData.is_active ?? true,
      };
      setImages([...images, newImage]);
      toast({
        title: "Image added",
        description: "The new image has been added to the gallery.",
      });
    }
    setIsDialogOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Gallery</h1>
          <p className="text-muted-foreground mt-1">Manage gallery images with titles and categories</p>
        </div>
        <Button onClick={handleAdd}>
          <Plus className="h-4 w-4 mr-2" />
          Add Image
        </Button>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {images.map((image) => (
          <Card key={image.id} className={`overflow-hidden ${!image.is_active ? 'opacity-50' : ''}`}>
            <div className="relative aspect-[4/3] bg-muted">
              {image.image_url ? (
                <img
                  src={image.image_url}
                  alt={image.title_en}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Image className="h-12 w-12 text-muted-foreground" />
                </div>
              )}
              {/* Overlay Actions */}
              <div className="absolute inset-0 bg-background/80 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <Button size="sm" variant="secondary" onClick={() => handleEdit(image)}>
                  <Pencil className="h-4 w-4 mr-1" />
                  Edit
                </Button>
                <Button size="sm" variant="destructive" onClick={() => handleDelete(image.id)}>
                  <Trash2 className="h-4 w-4 mr-1" />
                  Delete
                </Button>
              </div>
              {/* Status Badge */}
              {!image.is_active && (
                <div className="absolute top-2 right-2 bg-destructive text-destructive-foreground px-2 py-1 rounded text-xs">
                  Hidden
                </div>
              )}
            </div>
            <CardContent className="p-4">
              <h3 className="font-medium text-foreground truncate">{image.title_en}</h3>
              <p className="text-sm text-muted-foreground truncate">{image.subtitle_en}</p>
              <p className="text-xs text-primary mt-1">{image.category_en}</p>
            </CardContent>
          </Card>
        ))}
      </div>

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
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                <Image className="h-10 w-10 mx-auto text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground mb-2">
                  Click to upload or drag and drop
                </p>
                <Input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="gallery-image"
                />
                <Button variant="outline" asChild>
                  <label htmlFor="gallery-image" className="cursor-pointer">
                    Choose Image
                  </label>
                </Button>
              </div>
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

            {/* Active Status */}
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
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave}>
              {editingImage ? 'Save Changes' : 'Add Image'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GalleryManagementPage;
