import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
import { Plus, Pencil, Trash2, Layers, Loader2, X } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import type { Tables } from '@/integrations/supabase/types';
import { getIconByName } from '@/hooks/useServices';
import ArrayInput from '@/components/admin/ArrayInput';

type Service = Tables<'services'>;

const ServicesManagementPage = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [formData, setFormData] = useState<Partial<Service>>({});
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const fetchServices = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .order('display_order', { ascending: true });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch services",
        variant: "destructive",
      });
    } else {
      setServices(data || []);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleAdd = () => {
    setEditingService(null);
    setFormData({
      title_en: '',
      title_ar: '',
      category_en: '',
      category_ar: '',
      short_description_en: '',
      short_description_ar: '',
      full_description_en: '',
      full_description_ar: '',
      sub_services_en: [],
      sub_services_ar: [],
      features_en: [],
      features_ar: [],
      testing_parameters_en: [],
      testing_parameters_ar: [],
      turnaround_time_en: '',
      turnaround_time_ar: '',
      sample_requirements_en: '',
      sample_requirements_ar: '',
      certifications: [],
      related_service_slugs: [],
      icon_name: 'Beaker',
      is_active: true,
    });
    setSelectedFile(null);
    setPreviewUrl(null);
    setIsDialogOpen(true);
  };

  const handleEdit = (service: Service) => {
    setEditingService(service);
    setFormData({
      ...service,
      sub_services_en: service.sub_services_en || [],
      sub_services_ar: service.sub_services_ar || [],
      features_en: service.features_en || [],
      features_ar: service.features_ar || [],
      testing_parameters_en: service.testing_parameters_en || [],
      testing_parameters_ar: service.testing_parameters_ar || [],
      certifications: service.certifications || [],
      related_service_slugs: service.related_service_slugs || [],
    });
    setSelectedFile(null);
    setPreviewUrl(service.image_url);
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string, imageUrl: string | null) => {
    if (imageUrl?.includes('uploads')) {
      const path = imageUrl.split('/uploads/')[1];
      if (path) {
        await supabase.storage.from('uploads').remove([path]);
      }
    }

    const { error } = await supabase
      .from('services')
      .delete()
      .eq('id', id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to delete service",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Service deleted",
        description: "The service has been removed successfully.",
      });
      fetchServices();
    }
  };

  const handleToggleActive = async (id: string, currentStatus: boolean) => {
    const { error } = await supabase
      .from('services')
      .update({ is_active: !currentStatus })
      .eq('id', id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to update service status",
        variant: "destructive",
      });
    } else {
      fetchServices();
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
    const fileName = `services/${Date.now()}.${fileExt}`;

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

  const generateSlug = (title: string) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  const handleSave = async () => {
    if (!formData.title_en || !formData.category_en) {
      toast({
        title: "Error",
        description: "Title and category are required",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);

    try {
      let imageUrl = editingService?.image_url || null;

      if (selectedFile) {
        const uploadedUrl = await uploadImage(selectedFile);
        if (!uploadedUrl) {
          setIsUploading(false);
          return;
        }
        imageUrl = uploadedUrl;

        if (editingService?.image_url?.includes('uploads')) {
          const oldPath = editingService.image_url.split('/uploads/')[1];
          if (oldPath) {
            await supabase.storage.from('uploads').remove([oldPath]);
          }
        }
      }

      const serviceData = {
        title_en: formData.title_en,
        title_ar: formData.title_ar,
        category_en: formData.category_en,
        category_ar: formData.category_ar,
        short_description_en: formData.short_description_en,
        short_description_ar: formData.short_description_ar,
        full_description_en: formData.full_description_en,
        full_description_ar: formData.full_description_ar,
        sub_services_en: formData.sub_services_en?.filter(s => s.trim()) || [],
        sub_services_ar: formData.sub_services_ar?.filter(s => s.trim()) || [],
        features_en: formData.features_en?.filter(s => s.trim()) || [],
        features_ar: formData.features_ar?.filter(s => s.trim()) || [],
        testing_parameters_en: formData.testing_parameters_en?.filter(s => s.trim()) || [],
        testing_parameters_ar: formData.testing_parameters_ar?.filter(s => s.trim()) || [],
        turnaround_time_en: formData.turnaround_time_en,
        turnaround_time_ar: formData.turnaround_time_ar,
        sample_requirements_en: formData.sample_requirements_en,
        sample_requirements_ar: formData.sample_requirements_ar,
        certifications: formData.certifications?.filter(s => s.trim()) || [],
        related_service_slugs: formData.related_service_slugs?.filter(s => s.trim()) || [],
        icon_name: formData.icon_name || 'Beaker',
        image_url: imageUrl,
      };

      if (editingService) {
        const { error } = await supabase
          .from('services')
          .update(serviceData)
          .eq('id', editingService.id);

        if (error) throw error;

        toast({
          title: "Service updated",
          description: "The service has been updated successfully.",
        });
      } else {
        const maxOrder = services.length > 0 
          ? Math.max(...services.map(s => s.display_order || 0)) 
          : 0;

        const { error } = await supabase
          .from('services')
          .insert({
            ...serviceData,
            slug: generateSlug(formData.title_en || ''),
            display_order: maxOrder + 1,
            is_active: true,
          });

        if (error) throw error;

        toast({
          title: "Service added",
          description: "The new service has been added successfully.",
        });
      }

      setIsDialogOpen(false);
      fetchServices();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to save service",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const clearSelectedFile = () => {
    setSelectedFile(null);
    setPreviewUrl(editingService?.image_url || null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const MAX_SERVICES = 20;
  const isAtLimit = services.length >= MAX_SERVICES;

  // Get available services for related services selection (exclude current)
  const availableRelatedServices = services.filter(s => s.id !== editingService?.id);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Services</h1>
          <p className="text-muted-foreground mt-1">
            Manage your company services
            <span className={`ml-2 font-medium ${isAtLimit ? 'text-destructive' : 'text-primary'}`}>
              ({services.length}/{MAX_SERVICES})
            </span>
          </p>
        </div>
        <Button onClick={handleAdd} disabled={isAtLimit}>
          <Plus className="h-4 w-4 mr-2" />
          Add Service
        </Button>
      </div>

      {/* Services Table */}
      <Card>
        <CardContent className="p-0">
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
            </div>
          ) : services.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
              <Layers className="h-12 w-12 mb-4" />
              <p>No services yet. Add your first service.</p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-20">Image</TableHead>
                  <TableHead>Title (EN)</TableHead>
                  <TableHead>Title (AR)</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead className="w-24">Status</TableHead>
                  <TableHead className="w-32 text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {services.map((service) => {
                  const ServiceIcon = getIconByName(service.icon_name);
                  return (
                    <TableRow key={service.id}>
                      <TableCell>
                        <div className="w-16 h-10 bg-muted rounded overflow-hidden">
                          {service.image_url ? (
                            <img
                              src={service.image_url}
                              alt={service.title_en}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <ServiceIcon className="h-4 w-4 text-muted-foreground" />
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{service.title_en}</TableCell>
                      <TableCell dir="rtl">{service.title_ar}</TableCell>
                      <TableCell>{service.category_en}</TableCell>
                      <TableCell>
                        <Switch
                          checked={service.is_active ?? false}
                          onCheckedChange={() => handleToggleActive(service.id, service.is_active ?? false)}
                        />
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleEdit(service)}
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDelete(service.id, service.image_url)}
                          >
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      {/* Add/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingService ? 'Edit Service' : 'Add New Service'}</DialogTitle>
            <DialogDescription>
              Fill in all service details. Use the tabs to manage English and Arabic content.
            </DialogDescription>
          </DialogHeader>
          
          <Tabs defaultValue="basic" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="basic">Basic Info</TabsTrigger>
              <TabsTrigger value="english">English</TabsTrigger>
              <TabsTrigger value="arabic">العربية</TabsTrigger>
              <TabsTrigger value="additional">Additional</TabsTrigger>
            </TabsList>

            {/* Basic Info Tab */}
            <TabsContent value="basic" className="space-y-4 mt-4">
              {/* Image Upload */}
              <div className="space-y-2">
                <Label>Service Image</Label>
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
                    <Layers className="h-10 w-10 mx-auto text-muted-foreground mb-2" />
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

              {/* Icon Name */}
              <div className="space-y-2">
                <Label htmlFor="icon_name">Icon Name</Label>
                <Input
                  id="icon_name"
                  value={formData.icon_name || 'Beaker'}
                  onChange={(e) => setFormData({ ...formData, icon_name: e.target.value })}
                  placeholder="e.g., Wind, Droplets, TestTube"
                />
                <p className="text-xs text-muted-foreground">
                  Available: Wind, Droplets, TreePine, Factory, Shield, TestTube, Fuel, Droplet, Utensils, FileCheck, Microscope, Beaker, Gauge, MapPin, HardHat, Users
                </p>
              </div>

              {/* Active Status */}
              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div>
                  <Label>Active Status</Label>
                  <p className="text-sm text-muted-foreground">Enable to show this service on the website</p>
                </div>
                <Switch
                  checked={formData.is_active ?? true}
                  onCheckedChange={(checked) => setFormData({ ...formData, is_active: checked })}
                />
              </div>
            </TabsContent>

            {/* English Content Tab */}
            <TabsContent value="english" className="space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title_en">Title *</Label>
                  <Input
                    id="title_en"
                    value={formData.title_en || ''}
                    onChange={(e) => setFormData({ ...formData, title_en: e.target.value })}
                    placeholder="Service title"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category_en">Category *</Label>
                  <Input
                    id="category_en"
                    value={formData.category_en || ''}
                    onChange={(e) => setFormData({ ...formData, category_en: e.target.value })}
                    placeholder="e.g., Environmental"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="short_description_en">Short Description</Label>
                <Textarea
                  id="short_description_en"
                  value={formData.short_description_en || ''}
                  onChange={(e) => setFormData({ ...formData, short_description_en: e.target.value })}
                  placeholder="Brief description for service cards"
                  rows={2}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="full_description_en">Full Description</Label>
                <Textarea
                  id="full_description_en"
                  value={formData.full_description_en || ''}
                  onChange={(e) => setFormData({ ...formData, full_description_en: e.target.value })}
                  placeholder="Detailed description for service detail page"
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label>Sub-Services</Label>
                <ArrayInput
                  values={(formData.sub_services_en as string[]) || []}
                  onChange={(values) => setFormData({ ...formData, sub_services_en: values })}
                  placeholder="Enter a sub-service"
                />
              </div>

              <div className="space-y-2">
                <Label>Features</Label>
                <ArrayInput
                  values={(formData.features_en as string[]) || []}
                  onChange={(values) => setFormData({ ...formData, features_en: values })}
                  placeholder="Enter a feature"
                />
              </div>

              <div className="space-y-2">
                <Label>Testing Parameters</Label>
                <ArrayInput
                  values={(formData.testing_parameters_en as string[]) || []}
                  onChange={(values) => setFormData({ ...formData, testing_parameters_en: values })}
                  placeholder="Enter a testing parameter"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="turnaround_time_en">Turnaround Time</Label>
                  <Input
                    id="turnaround_time_en"
                    value={formData.turnaround_time_en || ''}
                    onChange={(e) => setFormData({ ...formData, turnaround_time_en: e.target.value })}
                    placeholder="e.g., 3-5 business days"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sample_requirements_en">Sample Requirements</Label>
                  <Input
                    id="sample_requirements_en"
                    value={formData.sample_requirements_en || ''}
                    onChange={(e) => setFormData({ ...formData, sample_requirements_en: e.target.value })}
                    placeholder="e.g., Minimum 500ml in clean container"
                  />
                </div>
              </div>
            </TabsContent>

            {/* Arabic Content Tab */}
            <TabsContent value="arabic" className="space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title_ar">العنوان *</Label>
                  <Input
                    id="title_ar"
                    dir="rtl"
                    value={formData.title_ar || ''}
                    onChange={(e) => setFormData({ ...formData, title_ar: e.target.value })}
                    placeholder="عنوان الخدمة"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category_ar">الفئة *</Label>
                  <Input
                    id="category_ar"
                    dir="rtl"
                    value={formData.category_ar || ''}
                    onChange={(e) => setFormData({ ...formData, category_ar: e.target.value })}
                    placeholder="مثال: بيئي"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="short_description_ar">الوصف المختصر</Label>
                <Textarea
                  id="short_description_ar"
                  dir="rtl"
                  value={formData.short_description_ar || ''}
                  onChange={(e) => setFormData({ ...formData, short_description_ar: e.target.value })}
                  placeholder="وصف مختصر لبطاقات الخدمة"
                  rows={2}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="full_description_ar">الوصف الكامل</Label>
                <Textarea
                  id="full_description_ar"
                  dir="rtl"
                  value={formData.full_description_ar || ''}
                  onChange={(e) => setFormData({ ...formData, full_description_ar: e.target.value })}
                  placeholder="وصف تفصيلي لصفحة تفاصيل الخدمة"
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label>الخدمات الفرعية</Label>
                <ArrayInput
                  values={(formData.sub_services_ar as string[]) || []}
                  onChange={(values) => setFormData({ ...formData, sub_services_ar: values })}
                  placeholder="أدخل خدمة فرعية"
                  dir="rtl"
                />
              </div>

              <div className="space-y-2">
                <Label>المميزات</Label>
                <ArrayInput
                  values={(formData.features_ar as string[]) || []}
                  onChange={(values) => setFormData({ ...formData, features_ar: values })}
                  placeholder="أدخل ميزة"
                  dir="rtl"
                />
              </div>

              <div className="space-y-2">
                <Label>معايير الاختبار</Label>
                <ArrayInput
                  values={(formData.testing_parameters_ar as string[]) || []}
                  onChange={(values) => setFormData({ ...formData, testing_parameters_ar: values })}
                  placeholder="أدخل معيار اختبار"
                  dir="rtl"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="turnaround_time_ar">وقت التسليم</Label>
                  <Input
                    id="turnaround_time_ar"
                    dir="rtl"
                    value={formData.turnaround_time_ar || ''}
                    onChange={(e) => setFormData({ ...formData, turnaround_time_ar: e.target.value })}
                    placeholder="مثال: 3-5 أيام عمل"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sample_requirements_ar">متطلبات العينة</Label>
                  <Input
                    id="sample_requirements_ar"
                    dir="rtl"
                    value={formData.sample_requirements_ar || ''}
                    onChange={(e) => setFormData({ ...formData, sample_requirements_ar: e.target.value })}
                    placeholder="مثال: 500 مل على الأقل في حاوية نظيفة"
                  />
                </div>
              </div>
            </TabsContent>

            {/* Additional Info Tab */}
            <TabsContent value="additional" className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label>Certifications</Label>
                <ArrayInput
                  values={(formData.certifications as string[]) || []}
                  onChange={(values) => setFormData({ ...formData, certifications: values })}
                  placeholder="e.g., ISO 17025, SASO"
                />
              </div>

              <div className="space-y-2">
                <Label>Related Services</Label>
                <p className="text-xs text-muted-foreground mb-2">
                  Select services that are related to this one (shown on detail page)
                </p>
                <div className="border rounded-lg p-3 max-h-48 overflow-y-auto space-y-2">
                  {availableRelatedServices.map((service) => (
                    <label key={service.slug} className="flex items-center gap-2 cursor-pointer hover:bg-muted/50 p-2 rounded">
                      <input
                        type="checkbox"
                        checked={(formData.related_service_slugs as string[] || []).includes(service.slug)}
                        onChange={(e) => {
                          const currentSlugs = (formData.related_service_slugs as string[]) || [];
                          if (e.target.checked) {
                            setFormData({ ...formData, related_service_slugs: [...currentSlugs, service.slug] });
                          } else {
                            setFormData({ ...formData, related_service_slugs: currentSlugs.filter(s => s !== service.slug) });
                          }
                        }}
                        className="rounded"
                      />
                      <span className="text-sm">{service.title_en}</span>
                    </label>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <DialogFooter className="mt-6">
            <Button variant="outline" onClick={() => setIsDialogOpen(false)} disabled={isUploading}>
              Cancel
            </Button>
            <Button onClick={handleSave} disabled={isUploading}>
              {isUploading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                editingService ? 'Save Changes' : 'Add Service'
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ServicesManagementPage;
