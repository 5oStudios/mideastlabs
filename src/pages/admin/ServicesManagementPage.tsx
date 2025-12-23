import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
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
import { Plus, Pencil, Trash2, Image, Layers } from 'lucide-react';

interface Service {
  id: string;
  slug: string;
  image_url: string;
  title_en: string;
  title_ar: string;
  category_en: string;
  category_ar: string;
  short_description_en: string;
  short_description_ar: string;
  order: number;
  is_active: boolean;
}

// Mock data
const mockServices: Service[] = [
  {
    id: '1',
    slug: 'water-testing',
    image_url: '/assets/water-testing.jpg',
    title_en: 'Water Testing',
    title_ar: 'اختبار المياه',
    category_en: 'Environmental',
    category_ar: 'بيئي',
    short_description_en: 'Comprehensive water quality analysis',
    short_description_ar: 'تحليل شامل لجودة المياه',
    order: 1,
    is_active: true,
  },
  {
    id: '2',
    slug: 'soil-testing',
    image_url: '/assets/soil-testing.jpg',
    title_en: 'Soil Testing',
    title_ar: 'اختبار التربة',
    category_en: 'Environmental',
    category_ar: 'بيئي',
    short_description_en: 'Soil contamination and fertility testing',
    short_description_ar: 'اختبار تلوث التربة والخصوبة',
    order: 2,
    is_active: true,
  },
];

const ServicesManagementPage = () => {
  const [services, setServices] = useState<Service[]>(mockServices);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [formData, setFormData] = useState<Partial<Service>>({});
  const { toast } = useToast();

  const handleAdd = () => {
    setEditingService(null);
    setFormData({
      title_en: '',
      title_ar: '',
      category_en: '',
      category_ar: '',
      short_description_en: '',
      short_description_ar: '',
      is_active: true,
    });
    setIsDialogOpen(true);
  };

  const handleEdit = (service: Service) => {
    setEditingService(service);
    setFormData(service);
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    setServices(services.filter(s => s.id !== id));
    toast({
      title: "Service deleted",
      description: "The service has been removed successfully.",
    });
  };

  const handleToggleActive = (id: string) => {
    setServices(services.map(s => 
      s.id === id ? { ...s, is_active: !s.is_active } : s
    ));
  };

  const generateSlug = (title: string) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  const handleSave = () => {
    if (editingService) {
      setServices(services.map(s => 
        s.id === editingService.id ? { ...s, ...formData } as Service : s
      ));
      toast({
        title: "Service updated",
        description: "The service has been updated successfully.",
      });
    } else {
      const newService: Service = {
        id: Date.now().toString(),
        slug: generateSlug(formData.title_en || ''),
        image_url: formData.image_url || '',
        title_en: formData.title_en || '',
        title_ar: formData.title_ar || '',
        category_en: formData.category_en || '',
        category_ar: formData.category_ar || '',
        short_description_en: formData.short_description_en || '',
        short_description_ar: formData.short_description_ar || '',
        order: services.length + 1,
        is_active: formData.is_active ?? true,
      };
      setServices([...services, newService]);
      toast({
        title: "Service added",
        description: "The new service has been added successfully.",
      });
    }
    setIsDialogOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Services</h1>
          <p className="text-muted-foreground mt-1">Manage your company services</p>
        </div>
        <Button onClick={handleAdd}>
          <Plus className="h-4 w-4 mr-2" />
          Add Service
        </Button>
      </div>

      {/* Services Table */}
      <Card>
        <CardContent className="p-0">
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
              {services.map((service) => (
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
                          <Layers className="h-4 w-4 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{service.title_en}</TableCell>
                  <TableCell dir="rtl">{service.title_ar}</TableCell>
                  <TableCell>{service.category_en}</TableCell>
                  <TableCell>
                    <Switch
                      checked={service.is_active}
                      onCheckedChange={() => handleToggleActive(service.id)}
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
                        onClick={() => handleDelete(service.id)}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Add/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingService ? 'Edit Service' : 'Add New Service'}</DialogTitle>
            <DialogDescription>
              Fill in the service details. Both English and Arabic content is required.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            {/* Image Upload */}
            <div className="space-y-2">
              <Label>Service Image</Label>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                <Image className="h-10 w-10 mx-auto text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground mb-2">
                  Click to upload or drag and drop
                </p>
                <Input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="service-image"
                />
                <Button variant="outline" asChild>
                  <label htmlFor="service-image" className="cursor-pointer">
                    Choose Image
                  </label>
                </Button>
              </div>
            </div>

            {/* English Content */}
            <div className="space-y-4">
              <h3 className="font-medium text-foreground">English Content</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title_en">Title</Label>
                  <Input
                    id="title_en"
                    value={formData.title_en || ''}
                    onChange={(e) => setFormData({ ...formData, title_en: e.target.value })}
                    placeholder="Service title"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category_en">Category</Label>
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
                  placeholder="Brief description of the service"
                  rows={3}
                />
              </div>
            </div>

            {/* Arabic Content */}
            <div className="space-y-4">
              <h3 className="font-medium text-foreground">Arabic Content</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title_ar">Title (العنوان)</Label>
                  <Input
                    id="title_ar"
                    dir="rtl"
                    value={formData.title_ar || ''}
                    onChange={(e) => setFormData({ ...formData, title_ar: e.target.value })}
                    placeholder="عنوان الخدمة"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category_ar">Category (الفئة)</Label>
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
                <Label htmlFor="short_description_ar">Short Description (الوصف المختصر)</Label>
                <Textarea
                  id="short_description_ar"
                  dir="rtl"
                  value={formData.short_description_ar || ''}
                  onChange={(e) => setFormData({ ...formData, short_description_ar: e.target.value })}
                  placeholder="وصف مختصر للخدمة"
                  rows={3}
                />
              </div>
            </div>

            {/* Active Status */}
            <div className="flex items-center justify-between">
              <div>
                <Label>Active Status</Label>
                <p className="text-sm text-muted-foreground">Enable to show this service</p>
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
              {editingService ? 'Save Changes' : 'Add Service'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ServicesManagementPage;
