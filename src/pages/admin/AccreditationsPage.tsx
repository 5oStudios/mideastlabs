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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';
import { Plus, Pencil, Trash2, GripVertical, Award } from 'lucide-react';

interface Certificate {
  id: string;
  image_url: string;
  title_en: string;
  title_ar: string;
  order: number;
  is_active: boolean;
}

// Mock data
const mockCertificates: Certificate[] = [
  {
    id: '1',
    image_url: '/assets/certificates/iso-9001.jpg',
    title_en: 'ISO 9001:2015',
    title_ar: 'أيزو 9001:2015',
    order: 1,
    is_active: true,
  },
  {
    id: '2',
    image_url: '/assets/certificates/iso-14001.jpg',
    title_en: 'ISO 14001:2015',
    title_ar: 'أيزو 14001:2015',
    order: 2,
    is_active: true,
  },
  {
    id: '3',
    image_url: '/assets/certificates/iso-45001.jpg',
    title_en: 'ISO 45001:2018',
    title_ar: 'أيزو 45001:2018',
    order: 3,
    is_active: true,
  },
];

const AccreditationsPage = () => {
  const [certificates, setCertificates] = useState<Certificate[]>(mockCertificates);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingCertificate, setEditingCertificate] = useState<Certificate | null>(null);
  const [formData, setFormData] = useState<Partial<Certificate>>({});
  const { toast } = useToast();

  const handleAdd = () => {
    setEditingCertificate(null);
    setFormData({
      title_en: '',
      title_ar: '',
      is_active: true,
    });
    setIsDialogOpen(true);
  };

  const handleEdit = (certificate: Certificate) => {
    setEditingCertificate(certificate);
    setFormData(certificate);
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    setCertificates(certificates.filter(c => c.id !== id));
    toast({
      title: "Certificate deleted",
      description: "The certificate has been removed successfully.",
    });
  };

  const handleToggleActive = (id: string) => {
    setCertificates(certificates.map(c => 
      c.id === id ? { ...c, is_active: !c.is_active } : c
    ));
  };

  const handleSave = () => {
    if (editingCertificate) {
      setCertificates(certificates.map(c => 
        c.id === editingCertificate.id ? { ...c, ...formData } as Certificate : c
      ));
      toast({
        title: "Certificate updated",
        description: "The certificate has been updated successfully.",
      });
    } else {
      const newCertificate: Certificate = {
        id: Date.now().toString(),
        image_url: formData.image_url || '',
        title_en: formData.title_en || '',
        title_ar: formData.title_ar || '',
        order: certificates.length + 1,
        is_active: formData.is_active ?? true,
      };
      setCertificates([...certificates, newCertificate]);
      toast({
        title: "Certificate added",
        description: "The new certificate has been added successfully.",
      });
    }
    setIsDialogOpen(false);
  };

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
              {certificates.map((certificate) => (
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
                      onCheckedChange={() => handleToggleActive(certificate.id)}
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
                        onClick={() => handleDelete(certificate.id)}
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
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                <Award className="h-10 w-10 mx-auto text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground mb-2">
                  Click to upload certificate image
                </p>
                <Input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="certificate-image"
                />
                <Button variant="outline" asChild>
                  <label htmlFor="certificate-image" className="cursor-pointer">
                    Choose Image
                  </label>
                </Button>
              </div>
            </div>

            {/* Title English */}
            <div className="space-y-2">
              <Label htmlFor="title_en">Title (English)</Label>
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
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave}>
              {editingCertificate ? 'Save Changes' : 'Add Certificate'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AccreditationsPage;
