import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
import { Plus, Pencil, Trash2, GripVertical, Image } from 'lucide-react';

interface HeroBanner {
  id: string;
  image_url: string;
  order: number;
  is_active: boolean;
}

// Mock data - will be replaced with Supabase data
const mockBanners: HeroBanner[] = [
  {
    id: '1',
    image_url: '/assets/hero-lab.jpg',
    order: 1,
    is_active: true,
  },
  {
    id: '2',
    image_url: '/assets/water-testing.jpg',
    order: 2,
    is_active: true,
  },
];

const HeroBannersPage = () => {
  const [banners, setBanners] = useState<HeroBanner[]>(mockBanners);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingBanner, setEditingBanner] = useState<HeroBanner | null>(null);
  const [formData, setFormData] = useState<Partial<HeroBanner>>({});
  const { toast } = useToast();

  const handleAdd = () => {
    setEditingBanner(null);
    setFormData({
      is_active: true,
    });
    setIsDialogOpen(true);
  };

  const handleEdit = (banner: HeroBanner) => {
    setEditingBanner(banner);
    setFormData(banner);
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    setBanners(banners.filter(b => b.id !== id));
    toast({
      title: "Banner deleted",
      description: "The banner has been removed successfully.",
    });
  };

  const handleToggleActive = (id: string) => {
    setBanners(banners.map(b => 
      b.id === id ? { ...b, is_active: !b.is_active } : b
    ));
  };

  const handleSave = () => {
    if (editingBanner) {
      setBanners(banners.map(b => 
        b.id === editingBanner.id ? { ...b, ...formData } as HeroBanner : b
      ));
      toast({
        title: "Banner updated",
        description: "The banner has been updated successfully.",
      });
    } else {
      const newBanner: HeroBanner = {
        id: Date.now().toString(),
        image_url: formData.image_url || '',
        order: banners.length + 1,
        is_active: formData.is_active ?? true,
      };
      setBanners([...banners, newBanner]);
      toast({
        title: "Banner added",
        description: "The new banner has been added successfully.",
      });
    }
    setIsDialogOpen(false);
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
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12"></TableHead>
                <TableHead>Image</TableHead>
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
                    <Switch
                      checked={banner.is_active}
                      onCheckedChange={() => handleToggleActive(banner.id)}
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
                        onClick={() => handleDelete(banner.id)}
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
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{editingBanner ? 'Edit Banner' : 'Add New Banner'}</DialogTitle>
            <DialogDescription>
              Upload an image for the hero banner.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            {/* Image Upload */}
            <div className="space-y-2">
              <Label>Banner Image</Label>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                <Image className="h-10 w-10 mx-auto text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground mb-2">
                  Click to upload or drag and drop
                </p>
                <Input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="banner-image"
                />
                <Button variant="outline" asChild>
                  <label htmlFor="banner-image" className="cursor-pointer">
                    Choose Image
                  </label>
                </Button>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave}>
              {editingBanner ? 'Save Changes' : 'Add Banner'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HeroBannersPage;
