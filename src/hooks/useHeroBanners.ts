import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";

type HeroBanner = Database['public']['Tables']['hero_banners']['Row'];
type HeroBannerInsert = Database['public']['Tables']['hero_banners']['Insert'];
type HeroBannerUpdate = Database['public']['Tables']['hero_banners']['Update'];

export const useHeroBanners = (activeOnly: boolean = false) => {
  return useQuery({
    queryKey: ['hero-banners', activeOnly],
    queryFn: async () => {
      let query = supabase
        .from('hero_banners')
        .select('*')
        .order('display_order', { ascending: true });

      if (activeOnly) {
        query = query.eq('is_active', true);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data as HeroBanner[];
    },
  });
};

export const useCreateHeroBanner = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (banner: HeroBannerInsert) => {
      const { data, error } = await supabase
        .from('hero_banners')
        .insert(banner)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['hero-banners'] });
    },
  });
};

export const useUpdateHeroBanner = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, updates }: { id: string; updates: HeroBannerUpdate }) => {
      const { data, error } = await supabase
        .from('hero_banners')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['hero-banners'] });
    },
  });
};

export const useDeleteHeroBanner = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, imageUrl }: { id: string; imageUrl: string }) => {
      // Delete the image from storage if it's in our bucket
      if (imageUrl.includes('uploads')) {
        const path = imageUrl.split('/uploads/')[1];
        if (path) {
          await supabase.storage.from('uploads').remove([path]);
        }
      }

      const { error } = await supabase
        .from('hero_banners')
        .delete()
        .eq('id', id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['hero-banners'] });
    },
  });
};

export const uploadHeroBannerImage = async (file: File): Promise<string> => {
  const fileExt = file.name.split('.').pop();
  const fileName = `hero-banners/${Date.now()}.${fileExt}`;

  const { error: uploadError } = await supabase.storage
    .from('uploads')
    .upload(fileName, file);

  if (uploadError) throw uploadError;

  const { data } = supabase.storage
    .from('uploads')
    .getPublicUrl(fileName);

  return data.publicUrl;
};

export const deleteHeroBannerImage = async (imageUrl: string): Promise<void> => {
  if (imageUrl.includes('uploads')) {
    const path = imageUrl.split('/uploads/')[1];
    if (path) {
      await supabase.storage.from('uploads').remove([path]);
    }
  }
};
