import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

// Fallback images for each page
const fallbackImages: Record<string, string> = {
  'about-us': '/src/assets/hero/about-us-hero.jpg',
  'services': '/src/assets/hero/services-hero.jpg',
  'accreditation': '/src/assets/hero/accreditation-hero.jpg',
  'gallery': '/src/assets/hero/gallery-hero.jpg',
  'career': '/src/assets/hero/career-hero.jpg',
  'contact': '/src/assets/hero/contact-hero.jpg',
  'company-profile': '/src/assets/company-profile-cover.jpg',
};

interface PageHeroImage {
  id: string;
  page_slug: string;
  page_name_en: string;
  page_name_ar: string | null;
  image_url: string;
  created_at: string;
  updated_at: string;
}

export const usePageHeroImage = (pageSlug: string) => {
  const query = useQuery({
    queryKey: ['page-hero-image', pageSlug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('page_hero_images')
        .select('*')
        .eq('page_slug', pageSlug)
        .maybeSingle();

      if (error) {
        console.error('Error fetching page hero image:', error);
        return null;
      }

      return data as PageHeroImage | null;
    },
  });
  
  return {
    ...query,
    heroImage: query.data?.image_url || null,
  };
};

export const useAllPageHeroImages = () => {
  return useQuery({
    queryKey: ['page-hero-images'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('page_hero_images')
        .select('*')
        .order('page_name_en');

      if (error) {
        console.error('Error fetching page hero images:', error);
        return [];
      }

      return data as PageHeroImage[];
    },
  });
};

export const getFallbackImage = (pageSlug: string): string => {
  return fallbackImages[pageSlug] || '';
};
