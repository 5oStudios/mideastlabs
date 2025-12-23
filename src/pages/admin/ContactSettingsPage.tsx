import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, MapPin, Clock, Save, Globe, Loader2 } from 'lucide-react';
import { useContactSettings, useUpdateContactSettings } from '@/hooks/useContactSettings';

interface ContactFormState {
  phone: string;
  email: string;
  address_en: string;
  address_ar: string;
  map_embed_url: string;
  working_hours_weekdays_en: string;
  working_hours_weekdays_ar: string;
  working_hours_friday_en: string;
  working_hours_friday_ar: string;
  working_hours_saturday_en: string;
  working_hours_saturday_ar: string;
}

const ContactSettingsPage = () => {
  const { data: settings, isLoading } = useContactSettings();
  const updateSettings = useUpdateContactSettings();
  const { toast } = useToast();
  
  const [formState, setFormState] = useState<ContactFormState>({
    phone: '',
    email: '',
    address_en: '',
    address_ar: '',
    map_embed_url: '',
    working_hours_weekdays_en: '',
    working_hours_weekdays_ar: '',
    working_hours_friday_en: '',
    working_hours_friday_ar: '',
    working_hours_saturday_en: '',
    working_hours_saturday_ar: '',
  });

  // Populate form when data loads
  useEffect(() => {
    if (settings) {
      setFormState({
        phone: settings.phone || '',
        email: settings.email || '',
        address_en: settings.address_en || '',
        address_ar: settings.address_ar || '',
        map_embed_url: settings.map_embed_url || '',
        working_hours_weekdays_en: settings.working_hours_weekdays_en || '',
        working_hours_weekdays_ar: settings.working_hours_weekdays_ar || '',
        working_hours_friday_en: settings.working_hours_friday_en || '',
        working_hours_friday_ar: settings.working_hours_friday_ar || '',
        working_hours_saturday_en: settings.working_hours_saturday_en || '',
        working_hours_saturday_ar: settings.working_hours_saturday_ar || '',
      });
    }
  }, [settings]);

  const handleChange = (field: keyof ContactFormState, value: string) => {
    setFormState(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    try {
      await updateSettings.mutateAsync({
        id: settings?.id || null,
        updates: {
          phone: formState.phone || null,
          email: formState.email || null,
          address_en: formState.address_en || null,
          address_ar: formState.address_ar || null,
          map_embed_url: formState.map_embed_url || null,
          working_hours_weekdays_en: formState.working_hours_weekdays_en || null,
          working_hours_weekdays_ar: formState.working_hours_weekdays_ar || null,
          working_hours_friday_en: formState.working_hours_friday_en || null,
          working_hours_friday_ar: formState.working_hours_friday_ar || null,
          working_hours_saturday_en: formState.working_hours_saturday_en || null,
          working_hours_saturday_ar: formState.working_hours_saturday_ar || null,
        },
      });
      toast({
        title: "Settings saved",
        description: "Contact settings have been updated successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save contact settings.",
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Contact Settings</h1>
          <p className="text-muted-foreground mt-1">Manage contact information and working hours</p>
        </div>
        <Button onClick={handleSave} disabled={updateSettings.isPending}>
          {updateSettings.isPending ? (
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
          ) : (
            <Save className="h-4 w-4 mr-2" />
          )}
          {updateSettings.isPending ? 'Saving...' : 'Save All Changes'}
        </Button>
      </div>

      <Tabs defaultValue="contact" className="space-y-6">
        <TabsList>
          <TabsTrigger value="contact">Contact Info</TabsTrigger>
          <TabsTrigger value="hours">Working Hours</TabsTrigger>
          <TabsTrigger value="map">Map Location</TabsTrigger>
        </TabsList>

        {/* Contact Info Tab */}
        <TabsContent value="contact" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                Phone & Email
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={formState.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="+965 22251577"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formState.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="info@mideastlabs.com"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Address
              </CardTitle>
              <CardDescription>Enter address in both English and Arabic</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="address_en">Address (English)</Label>
                <Textarea
                  id="address_en"
                  value={formState.address_en}
                  onChange={(e) => handleChange('address_en', e.target.value)}
                  placeholder="Enter full address in English"
                  rows={2}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address_ar">Address (العنوان بالعربية)</Label>
                <Textarea
                  id="address_ar"
                  dir="rtl"
                  value={formState.address_ar}
                  onChange={(e) => handleChange('address_ar', e.target.value)}
                  placeholder="أدخل العنوان الكامل بالعربية"
                  rows={2}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Working Hours Tab */}
        <TabsContent value="hours" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Working Hours
              </CardTitle>
              <CardDescription>Set working hours in both languages</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Weekdays */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Weekdays (English)</Label>
                  <Input
                    value={formState.working_hours_weekdays_en}
                    onChange={(e) => handleChange('working_hours_weekdays_en', e.target.value)}
                    placeholder="Sunday - Thursday: 8:00 AM - 5:00 PM"
                  />
                </div>
                <div className="space-y-2">
                  <Label>أيام الأسبوع (العربية)</Label>
                  <Input
                    dir="rtl"
                    value={formState.working_hours_weekdays_ar}
                    onChange={(e) => handleChange('working_hours_weekdays_ar', e.target.value)}
                    placeholder="الأحد - الخميس: 8:00 صباحاً - 5:00 مساءً"
                  />
                </div>
              </div>

              {/* Friday */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Friday (English)</Label>
                  <Input
                    value={formState.working_hours_friday_en}
                    onChange={(e) => handleChange('working_hours_friday_en', e.target.value)}
                    placeholder="Friday: Closed"
                  />
                </div>
                <div className="space-y-2">
                  <Label>الجمعة (العربية)</Label>
                  <Input
                    dir="rtl"
                    value={formState.working_hours_friday_ar}
                    onChange={(e) => handleChange('working_hours_friday_ar', e.target.value)}
                    placeholder="الجمعة: مغلق"
                  />
                </div>
              </div>

              {/* Saturday */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Saturday (English)</Label>
                  <Input
                    value={formState.working_hours_saturday_en}
                    onChange={(e) => handleChange('working_hours_saturday_en', e.target.value)}
                    placeholder="Saturday: 9:00 AM - 1:00 PM"
                  />
                </div>
                <div className="space-y-2">
                  <Label>السبت (العربية)</Label>
                  <Input
                    dir="rtl"
                    value={formState.working_hours_saturday_ar}
                    onChange={(e) => handleChange('working_hours_saturday_ar', e.target.value)}
                    placeholder="السبت: 9:00 صباحاً - 1:00 ظهراً"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Map Tab */}
        <TabsContent value="map" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                Google Maps Embed
              </CardTitle>
              <CardDescription>
                Paste the Google Maps embed URL for your location
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="map_url">Map Embed URL</Label>
                <Textarea
                  id="map_url"
                  value={formState.map_embed_url}
                  onChange={(e) => handleChange('map_embed_url', e.target.value)}
                  placeholder="https://www.google.com/maps/embed?pb=..."
                  rows={3}
                />
                <p className="text-sm text-muted-foreground">
                  Get this URL from Google Maps: Share → Embed a map → Copy the src URL
                </p>
              </div>

              {/* Map Preview */}
              <div className="space-y-2">
                <Label>Preview</Label>
                <div className="w-full h-64 bg-muted rounded-lg overflow-hidden">
                  {formState.map_embed_url ? (
                    <iframe
                      src={formState.map_embed_url}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                      <MapPin className="h-8 w-8 mr-2" />
                      <span>No map URL provided</span>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContactSettingsPage;
