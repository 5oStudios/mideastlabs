import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";

type ContactSettings = Database['public']['Tables']['contact_settings']['Row'];
type ContactSettingsUpdate = Database['public']['Tables']['contact_settings']['Update'];

export const useContactSettings = () => {
  return useQuery({
    queryKey: ['contact-settings'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('contact_settings')
        .select('*')
        .limit(1)
        .single();
      
      if (error) {
        // If no record exists, return null
        if (error.code === 'PGRST116') {
          return null;
        }
        throw error;
      }
      return data as ContactSettings;
    },
  });
};

export const useUpdateContactSettings = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ id, updates }: { id: string | null; updates: ContactSettingsUpdate }) => {
      if (id) {
        // Update existing record
        const { data, error } = await supabase
          .from('contact_settings')
          .update(updates)
          .eq('id', id)
          .select()
          .single();
        
        if (error) throw error;
        return data;
      } else {
        // Insert new record
        const { data, error } = await supabase
          .from('contact_settings')
          .insert(updates)
          .select()
          .single();
        
        if (error) throw error;
        return data;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contact-settings'] });
    },
  });
};
