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
import { Plus, Pencil, Trash2, GripVertical, Award, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useQueryClient } from '@tanstack/react-query';
import { useAllCertificates, Certificate } from '@/hooks/useCertificates';

const AccreditationsPage = () => {
  const { data: certificates, isLoading, error } = useAllCertificates();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingCertificate, setEditingCertificate] = useState<Certificate | null>(null);
  const [formData, setFormData] = useState<Partial<Certificate>>({});
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const handleAdd = () => {
    setEditingCertificate(null);
    setFormData({
      title_en: '',
      title_ar: '',
      is_active: true,
    });
    setImageFile(null);
    setImagePreview(null);
    setIsDialogOpen(true);
  };

  const handleEdit = (certificate: Certificate) => {
    setEditingCertificate(certificate);
    setFormData(certificate);
    setImageFile(null);
    setImagePreview(certificate.image_url);
    setIsDialogOpen(true);
  };

  const handleDelete = async (certificate: Certificate) => {
    try {
      // Delete image from storage if it exists
      if (certificate.image_url) {
        const urlParts = certificate.image_url.split('/');
        const fileName = urlParts[urlParts.length - 1];
        const folder = urlParts[urlParts.length - 2];
        if (folder === 'certificates') {
          await supabase.storage.from('uploads').remove([`certificates/${fileName}`]);
        }
      }

      const { error } = await supabase
        .from('certificates')
        .delete()
        .eq('id', certificate.id);

      if (error) throw error;

      queryClient.invalidateQueries({ queryKey: ['certificates'] });
      toast({
        title: "Certificate deleted",
        description: "The certificate has been removed successfully.",
      });
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to delete certificate.",
        variant: "destructive",
      });
    }
  };

  const handleToggleActive = async (certificate: Certificate) => {
    try {
      const { error } = await supabase
        .from('certificates')
        .update({ is_active: !certificate.is_active })
        .eq('id', certificate.id);

      if (error) throw error;

      queryClient.invalidateQueries({ queryKey: ['certificates'] });
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to update status.",
        variant: "destructive",
      });
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadImage = async (file: File): Promise<string> => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
    const filePath = `certificates/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('uploads')
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    const { data: { publicUrl } } = supabase.storage
      .from('uploads')
      .getPublicUrl(filePath);

    return publicUrl;
  };

  const handleSave = async () => {
    if (!formData.title_en) {
      toast({
        title: "Validation Error",
        description: "English title is required.",
        variant: "destructive",
      });
      return;
    }

    if (!editingCertificate && !imageFile) {
      toast({
        title: "Validation Error",
        description: "Please upload a certificate image.",
        variant: "destructive",
      });
      return;
    }

    setIsSaving(true);

    try {
      let imageUrl = editingCertificate?.image_url || '';

      // Upload new image if selected
      if (imageFile) {
        // Delete old image if editing
        if (editingCertificate?.image_url) {
          const urlParts = editingCertificate.image_url.split('/');
          const fileName = urlParts[urlParts.length - 1];
          const folder = urlParts[urlParts.length - 2];
          if (folder === 'certificates') {
            await supabase.storage.from('uploads').remove([`certificates/${fileName}`]);
          }
        }
        imageUrl = await uploadImage(imageFile);
      }

      if (editingCertificate) {
        const { error } = await supabase
          .from('certificates')
          .update({
            title_en: formData.title_en,
            title_ar: formData.title_ar || null,
            image_url: imageUrl,
            is_active: formData.is_active ?? true,
          })
          .eq('id', editingCertificate.id);

        if (error) throw error;

        toast({
          title: "Certificate updated",
          description: "The certificate has been updated successfully.",
        });
      } else {
        const maxOrder = certificates?.reduce((max, c) => Math.max(max, c.display_order || 0), 0) || 0;

        const { error } = await supabase
          .from('certificates')
          .insert({
            title_en: formData.title_en,
            title_ar: formData.title_ar || null,
            image_url: imageUrl,
            display_order: maxOrder + 1,
            is_active: formData.is_active ?? true,
          });

        if (error) throw error;

        toast({
          title: "Certificate added",
          description: "The new certificate has been added successfully.",
        });
      }

      queryClient.invalidateQueries({ queryKey: ['certificates'] });
      setIsDialogOpen(false);
    } catch (err) {
      console.error('Save error:', err);
      toast({
        title: "Error",
        description: "Failed to save certificate.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 text-destructive">
        Failed to load certificates.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Accreditations</h1>
          <p className="text-muted-foreground mt-1">Manage accreditation certificates and logos</p>
        </div>
        <Button onClick={handleAdd}>
          <Plus className="h-4 w-4 mr-2" />
          Add Certificate
        </Button>
      </div>

      {/* Certificates Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12"></TableHead>
                <TableHead className="w-24">Image</TableHead>
                <TableHead>Title (EN)</TableHead>
                <TableHead>Title (AR)</TableHead>
                <TableHead className="w-24">Status</TableHead>
                <TableHead className="w-32 text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {certificates?.map((certificate) => (
                <TableRow key={certificate.id}>
                  <TableCell>
                    <GripVertical className="h-4 w-4 text-muted-foreground cursor-grab" />
                  </TableCell>
                  <TableCell>
                    <div className="w-16 h-16 bg-muted rounded overflow-hidden">
                      {certificate.image_url ? (
                        <img
                          src={certificate.image_url}
                          alt={certificate.title_en}
                          className="w-full h-full object-contain p-1"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Award className="h-6 w-6 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{certificate.title_en}</TableCell>
                  <TableCell dir="rtl">{certificate.title_ar}</TableCell>
                  <TableCell>
                    <Switch
                      checked={certificate.is_active}
                      onCheckedChange={() => handleToggleActive(certificate)}
                    />
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEdit(certificate)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(certificate)}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {(!certificates || certificates.length === 0) && (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                    No certificates found. Add your first certificate.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Add/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{editingCertificate ? 'Edit Certificate' : 'Add New Certificate'}</DialogTitle>
            <DialogDescription>
              Upload a certificate image and add titles in both languages.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            {/* Image Upload */}
            <div className="space-y-2">
              <Label>Certificate Image</Label>
              <div 
                className="border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:border-primary/50 transition-colors"
                onClick={() => fileInputRef.current?.click()}
              >
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="max-h-40 mx-auto object-contain"
                  />
                ) : (
                  <>
                    <Award className="h-10 w-10 mx-auto text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Click to upload certificate image
                    </p>
                  </>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
                <Button variant="outline" type="button" className="mt-2">
                  {imagePreview ? 'Change Image' : 'Choose Image'}
                </Button>
              </div>
            </div>

            {/* Title English */}
            <div className="space-y-2">
              <Label htmlFor="title_en">Title (English) *</Label>
              <Input
                id="title_en"
                value={formData.title_en || ''}
                onChange={(e) => setFormData({ ...formData, title_en: e.target.value })}
                placeholder="e.g., ISO 9001:2015"
              />
            </div>

            {/* Title Arabic */}
            <div className="space-y-2">
              <Label htmlFor="title_ar">Title (العنوان بالعربية)</Label>
              <Input
                id="title_ar"
                dir="rtl"
                value={formData.title_ar || ''}
                onChange={(e) => setFormData({ ...formData, title_ar: e.target.value })}
                placeholder="أيزو 9001:2015"
              />
            </div>

            {/* Active Status */}
            <div className="flex items-center justify-between">
              <div>
                <Label>Active Status</Label>
                <p className="text-sm text-muted-foreground">Show this certificate</p>
              </div>
              <Switch
                checked={formData.is_active ?? true}
                onCheckedChange={(checked) => setFormData({ ...formData, is_active: checked })}
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)} disabled={isSaving}>
              Cancel
            </Button>
            <Button onClick={handleSave} disabled={isSaving}>
              {isSaving && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
              {editingCertificate ? 'Save Changes' : 'Add Certificate'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AccreditationsPage;
