-- Create page_hero_images table for managing hero images across pages
CREATE TABLE public.page_hero_images (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  page_slug TEXT NOT NULL UNIQUE,
  page_name_en TEXT NOT NULL,
  page_name_ar TEXT,
  image_url TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.page_hero_images ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Anyone can view page hero images"
ON public.page_hero_images
FOR SELECT
USING (true);

CREATE POLICY "Admins can manage page hero images"
ON public.page_hero_images
FOR ALL
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Create trigger for updated_at
CREATE TRIGGER update_page_hero_images_updated_at
BEFORE UPDATE ON public.page_hero_images
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default page entries with placeholder images
INSERT INTO public.page_hero_images (page_slug, page_name_en, page_name_ar, image_url) VALUES
('about-us', 'About Us', 'من نحن', 'https://vwkiqwwmotfzescjrnrb.supabase.co/storage/v1/object/public/uploads/hero/about-us-hero.jpg'),
('services', 'Services', 'خدماتنا', 'https://vwkiqwwmotfzescjrnrb.supabase.co/storage/v1/object/public/uploads/hero/services-hero.jpg'),
('accreditation', 'Accreditation', 'الاعتماد', 'https://vwkiqwwmotfzescjrnrb.supabase.co/storage/v1/object/public/uploads/hero/accreditation-hero.jpg'),
('gallery', 'Gallery', 'معرض الصور', 'https://vwkiqwwmotfzescjrnrb.supabase.co/storage/v1/object/public/uploads/hero/gallery-hero.jpg'),
('career', 'Career', 'الوظائف', 'https://vwkiqwwmotfzescjrnrb.supabase.co/storage/v1/object/public/uploads/hero/career-hero.jpg'),
('contact', 'Contact', 'اتصل بنا', 'https://vwkiqwwmotfzescjrnrb.supabase.co/storage/v1/object/public/uploads/hero/contact-hero.jpg'),
('company-profile', 'Company Profile', 'ملف الشركة', 'https://vwkiqwwmotfzescjrnrb.supabase.co/storage/v1/object/public/uploads/hero/company-profile-hero.jpg');