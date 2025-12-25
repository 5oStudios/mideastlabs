import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { toast } from 'sonner';
import { Image, Upload, Loader2, X } from 'lucide-react';

interface PageHeroImage {
  id: string;
  page_slug: string;
  page_name_en: string;
  page_name_ar: string | null;
  image_url: string;
  created_at: string;
  updated_at: string;
}

const PagesHeroImagesPage = () => {
  const [pages, setPages] = useState<PageHeroImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingPage, setEditingPage] = useState<PageHeroImage | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const fetchPages = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from('page_hero_images')
      .select('*')
      .order('page_name_en');

    if (error) {
      console.error('Error fetching page hero images:', error);
      toast.error('Failed to load page hero images');
    } else {
      setPages(data || []);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPages();
  }, []);

  const handleEdit = (page: PageHeroImage) => {
    setEditingPage(page);
    setPreviewUrl(page.image_url);
    setSelectedFile(null);
    setDialogOpen(true);
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
    const fileName = `hero/${editingPage?.page_slug}-${Date.now()}.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from('uploads')
      .upload(fileName, file, { upsert: true });

    if (uploadError) {
      console.error('Upload error:', uploadError);
      return null;
    }

    const { data: { publicUrl } } = supabase.storage
      .from('uploads')
      .getPublicUrl(fileName);

    return publicUrl;
  };

  const deleteOldImage = async (imageUrl: string) => {
    if (!imageUrl.includes('supabase.co/storage')) return;
    
    try {
      const urlParts = imageUrl.split('/uploads/');
      if (urlParts.length > 1) {
        const filePath = urlParts[1];
        await supabase.storage.from('uploads').remove([filePath]);
      }
    } catch (error) {
      console.error('Error deleting old image:', error);
    }
  };

  const handleSave = async () => {
    if (!editingPage) return;

    setIsSaving(true);

    try {
      let newImageUrl = editingPage.image_url;

      if (selectedFile) {
        const uploadedUrl = await uploadImage(selectedFile);
        if (!uploadedUrl) {
          toast.error('Failed to upload image');
          setIsSaving(false);
          return;
        }
        
        // Delete old image if it exists in storage
        if (editingPage.image_url) {
          await deleteOldImage(editingPage.image_url);
        }
        
        newImageUrl = uploadedUrl;
      }

      const { error } = await supabase
        .from('page_hero_images')
        .update({ image_url: newImageUrl })
        .eq('id', editingPage.id);

      if (error) {
        console.error('Update error:', error);
        toast.error('Failed to update hero image');
      } else {
        toast.success('Hero image updated successfully');
        setDialogOpen(false);
        fetchPages();
      }
    } catch (error) {
      console.error('Save error:', error);
      toast.error('An error occurred while saving');
    }

    setIsSaving(false);
  };

  const clearSelectedFile = () => {
    setSelectedFile(null);
    setPreviewUrl(editingPage?.image_url || null);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Pages Hero Images</h1>
          <p className="text-muted-foreground">
            Manage hero banner images for each page
          </p>
        </div>
      </div>

      {/* Pages Grid */}
      {isLoading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : pages.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
          <Image className="h-16 w-16 mb-4" />
          <p className="text-lg">No pages found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {pages.map((page) => (
            <Card 
              key={page.id} 
              className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleEdit(page)}
            >
              <div className="aspect-video relative bg-muted">
                {page.image_url ? (
                  <img
                    src={page.image_url}
                    alt={page.page_name_en}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/placeholder.svg';
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Image className="h-12 w-12 text-muted-foreground" />
                  </div>
                )}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button variant="secondary" size="sm">
                    <Upload className="h-4 w-4 mr-2" />
                    Change Image
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground">{page.page_name_en}</h3>
                {page.page_name_ar && (
                  <p className="text-sm text-muted-foreground" dir="rtl">{page.page_name_ar}</p>
                )}
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Edit Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>
              Change Hero Image - {editingPage?.page_name_en}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Current/Preview Image */}
            <div className="aspect-video relative bg-muted rounded-lg overflow-hidden">
              {previewUrl ? (
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Image className="h-16 w-16 text-muted-foreground" />
                </div>
              )}
            </div>

            {/* File Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Upload New Image</label>
              <div className="flex items-center gap-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="flex-1 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                />
                {selectedFile && (
                  <Button variant="ghost" size="icon" onClick={clearSelectedFile}>
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
              {selectedFile && (
                <p className="text-sm text-muted-foreground">
                  Selected: {selectedFile.name}
                </p>
              )}
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave} disabled={isSaving || !selectedFile}>
              {isSaving && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PagesHeroImagesPage;
