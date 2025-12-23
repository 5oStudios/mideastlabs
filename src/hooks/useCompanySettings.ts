import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";

type CompanySettings = Database['public']['Tables']['company_settings']['Row'];
type CompanySettingsUpdate = Database['public']['Tables']['company_settings']['Update'];

export const useCompanySettings = () => {
  return useQuery({
    queryKey: ['company-settings'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('company_settings')
        .select('*')
        .limit(1)
        .maybeSingle();
      
      if (error) throw error;
      return data as CompanySettings | null;
    },
  });
};

export const useUpdateCompanySettings = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ id, updates }: { id: string | null; updates: CompanySettingsUpdate }) => {
      if (id) {
        // Update existing record
        const { data, error } = await supabase
          .from('company_settings')
          .update(updates)
          .eq('id', id)
          .select()
          .single();
        
        if (error) throw error;
        return data;
      } else {
        // Insert new record
        const { data, error } = await supabase
          .from('company_settings')
          .insert(updates)
          .select()
          .single();
        
        if (error) throw error;
        return data;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['company-settings'] });
    },
  });
};

export const uploadCompanyProfilePdf = async (file: File): Promise<string> => {
  const fileExt = file.name.split('.').pop();
  const fileName = `company-profile-${Date.now()}.${fileExt}`;
  const filePath = `company/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from('uploads')
    .upload(filePath, file);

  if (uploadError) throw uploadError;

  const { data } = supabase.storage
    .from('uploads')
    .getPublicUrl(filePath);

  return data.publicUrl;
};
