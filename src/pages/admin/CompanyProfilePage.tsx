import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { FileText, Upload, ExternalLink, Save } from 'lucide-react';

const CompanyProfilePage = () => {
  const [profileUrl, setProfileUrl] = useState('https://example.com/company-profile.pdf');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSave = async () => {
    setIsLoading(true);
    // Mock save - will be replaced with Supabase
    await new Promise(resolve => setTimeout(resolve, 500));
    toast({
      title: "Settings saved",
      description: "Company profile link has been updated.",
    });
    setIsLoading(false);
  };

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
            This is the PDF file that visitors can download from the Company Profile page
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Current Link */}
          <div className="p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground mb-2">Current Download Link:</p>
            <div className="flex items-center gap-2">
              <code className="flex-1 p-2 bg-background rounded border text-sm truncate">
                {profileUrl}
              </code>
              <Button variant="outline" size="icon" asChild>
                <a href={profileUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
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
                placeholder="https://example.com/company-profile.pdf"
              />
              <p className="text-sm text-muted-foreground">
                Enter the URL of your company profile PDF file
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
              <Upload className="h-10 w-10 mx-auto text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground mb-2">
                Click to upload a new PDF file
              </p>
              <p className="text-xs text-muted-foreground mb-4">
                PDF files only, max 10MB
              </p>
              <Input
                type="file"
                accept=".pdf"
                className="hidden"
                id="profile-upload"
              />
              <Button variant="outline" asChild>
                <label htmlFor="profile-upload" className="cursor-pointer">
                  Choose PDF File
                </label>
              </Button>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end pt-4 border-t">
            <Button onClick={handleSave} disabled={isLoading}>
              <Save className="h-4 w-4 mr-2" />
              {isLoading ? 'Saving...' : 'Save Changes'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Preview Card */}
      <Card>
        <CardHeader>
          <CardTitle>Preview</CardTitle>
          <CardDescription>
            This is how the download button appears on the website
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-6 bg-muted/30 rounded-lg flex flex-col items-center gap-4">
            <FileText className="h-16 w-16 text-primary" />
            <div className="text-center">
              <h3 className="font-semibold text-foreground">Company Profile</h3>
              <p className="text-sm text-muted-foreground">Download our complete company profile</p>
            </div>
            <Button>
              <FileText className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyProfilePage;
