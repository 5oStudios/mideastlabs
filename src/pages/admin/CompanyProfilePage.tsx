import React, { useEffect, useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { FileText, Upload, ExternalLink, Save, Loader2 } from 'lucide-react';
import { useCompanySettings, useUpdateCompanySettings, uploadCompanyProfilePdf } from '@/hooks/useCompanySettings';

const CompanyProfilePage = () => {
  const { data: settings, isLoading } = useCompanySettings();
  const updateSettings = useUpdateCompanySettings();
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [profileUrl, setProfileUrl] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  // Populate form when data loads
  useEffect(() => {
    if (settings) {
      setProfileUrl(settings.profile_pdf_url || '');
    }
  }, [settings]);

  const handleSave = async () => {
    try {
      await updateSettings.mutateAsync({
        id: settings?.id || null,
        updates: {
          profile_pdf_url: profileUrl || null,
        },
      });
      toast({
        title: "Settings saved",
        description: "Company profile link has been updated.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save company profile settings.",
        variant: "destructive",
      });
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (file.type !== 'application/pdf') {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF file.",
        variant: "destructive",
      });
      return;
    }

    // Validate file size (10MB max)
    if (file.size > 10 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please upload a file smaller than 10MB.",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);
    try {
      const url = await uploadCompanyProfilePdf(file);
      setProfileUrl(url);
      
      // Auto-save after upload
      await updateSettings.mutateAsync({
        id: settings?.id || null,
        updates: {
          profile_pdf_url: url,
        },
      });
      
      toast({
        title: "PDF uploaded",
        description: "Company profile PDF has been uploaded and saved.",
      });
    } catch (error) {
      toast({
        title: "Upload failed",
        description: "Failed to upload PDF file. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
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
      <div>
        <h1 className="text-3xl font-bold text-foreground">Company Profile</h1>
        <p className="text-muted-foreground mt-1">Manage the company profile PDF download link</p>
      </div>

      {/* Current Profile */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Current Profile PDF
          </CardTitle>
          <CardDescription>
            This is the PDF file that visitors can view from the Company Profile page
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Current Link */}
          <div className="p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground mb-2">Current PDF URL:</p>
            <div className="flex items-center gap-2">
              <code className="flex-1 p-2 bg-background rounded border text-sm truncate">
                {profileUrl || 'No URL configured'}
              </code>
              {profileUrl && (
                <Button variant="outline" size="icon" asChild>
                  <a href={profileUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Update Link */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="profile-url">Profile PDF URL</Label>
              <Input
                id="profile-url"
                value={profileUrl}
                onChange={(e) => setProfileUrl(e.target.value)}
                placeholder="https://drive.google.com/file/d/.../preview"
              />
              <p className="text-sm text-muted-foreground">
                Enter the URL of your company profile PDF (Google Drive preview link or direct PDF URL)
              </p>
            </div>

            {/* Or Upload New PDF */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">Or upload a new file</span>
              </div>
            </div>

            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
              {isUploading ? (
                <div className="flex flex-col items-center">
                  <Loader2 className="h-10 w-10 animate-spin text-primary mb-2" />
                  <p className="text-sm text-muted-foreground">Uploading...</p>
                </div>
              ) : (
                <>
                  <Upload className="h-10 w-10 mx-auto text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Click to upload a new PDF file
                  </p>
                  <p className="text-xs text-muted-foreground mb-4">
                    PDF files only, max 10MB
                  </p>
                  <Input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,application/pdf"
                    className="hidden"
                    id="profile-upload"
                    onChange={handleFileUpload}
                  />
                  <Button variant="outline" asChild>
                    <label htmlFor="profile-upload" className="cursor-pointer">
                      Choose PDF File
                    </label>
                  </Button>
                </>
              )}
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end pt-4 border-t">
            <Button onClick={handleSave} disabled={updateSettings.isPending}>
              {updateSettings.isPending ? (
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              ) : (
                <Save className="h-4 w-4 mr-2" />
              )}
              {updateSettings.isPending ? 'Saving...' : 'Save Changes'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Preview Card */}
      <Card>
        <CardHeader>
          <CardTitle>Preview</CardTitle>
          <CardDescription>
            Preview of the PDF (if URL is a valid embed link)
          </CardDescription>
        </CardHeader>
        <CardContent>
          {profileUrl ? (
            <div className="rounded-lg overflow-hidden border">
              <iframe 
                src={profileUrl} 
                className="w-full h-96 border-0" 
                title="Company Profile PDF Preview"
                allow="autoplay"
              />
            </div>
          ) : (
            <div className="p-6 bg-muted/30 rounded-lg flex flex-col items-center gap-4">
              <FileText className="h-16 w-16 text-muted-foreground" />
              <div className="text-center">
                <h3 className="font-semibold text-foreground">No PDF Configured</h3>
                <p className="text-sm text-muted-foreground">Upload a PDF or enter a URL to preview</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyProfilePage;
