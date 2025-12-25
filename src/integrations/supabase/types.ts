export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      certificates: {
        Row: {
          created_at: string | null
          display_order: number | null
          id: string
          image_url: string
          is_active: boolean | null
          title_ar: string | null
          title_en: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          display_order?: number | null
          id?: string
          image_url: string
          is_active?: boolean | null
          title_ar?: string | null
          title_en: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          display_order?: number | null
          id?: string
          image_url?: string
          is_active?: boolean | null
          title_ar?: string | null
          title_en?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      company_settings: {
        Row: {
          id: string
          profile_pdf_url: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          profile_pdf_url?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          profile_pdf_url?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      contact_settings: {
        Row: {
          address_ar: string | null
          address_en: string | null
          email: string | null
          id: string
          map_embed_url: string | null
          phone: string | null
          updated_at: string | null
          working_hours_friday_ar: string | null
          working_hours_friday_en: string | null
          working_hours_saturday_ar: string | null
          working_hours_saturday_en: string | null
          working_hours_weekdays_ar: string | null
          working_hours_weekdays_en: string | null
        }
        Insert: {
          address_ar?: string | null
          address_en?: string | null
          email?: string | null
          id?: string
          map_embed_url?: string | null
          phone?: string | null
          updated_at?: string | null
          working_hours_friday_ar?: string | null
          working_hours_friday_en?: string | null
          working_hours_saturday_ar?: string | null
          working_hours_saturday_en?: string | null
          working_hours_weekdays_ar?: string | null
          working_hours_weekdays_en?: string | null
        }
        Update: {
          address_ar?: string | null
          address_en?: string | null
          email?: string | null
          id?: string
          map_embed_url?: string | null
          phone?: string | null
          updated_at?: string | null
          working_hours_friday_ar?: string | null
          working_hours_friday_en?: string | null
          working_hours_saturday_ar?: string | null
          working_hours_saturday_en?: string | null
          working_hours_weekdays_ar?: string | null
          working_hours_weekdays_en?: string | null
        }
        Relationships: []
      }
      gallery_images: {
        Row: {
          category_ar: string | null
          category_en: string | null
          created_at: string | null
          display_order: number | null
          id: string
          image_url: string
          is_active: boolean | null
          show_on_homepage: boolean | null
          subtitle_ar: string | null
          subtitle_en: string | null
          title_ar: string | null
          title_en: string | null
          updated_at: string | null
        }
        Insert: {
          category_ar?: string | null
          category_en?: string | null
          created_at?: string | null
          display_order?: number | null
          id?: string
          image_url: string
          is_active?: boolean | null
          show_on_homepage?: boolean | null
          subtitle_ar?: string | null
          subtitle_en?: string | null
          title_ar?: string | null
          title_en?: string | null
          updated_at?: string | null
        }
        Update: {
          category_ar?: string | null
          category_en?: string | null
          created_at?: string | null
          display_order?: number | null
          id?: string
          image_url?: string
          is_active?: boolean | null
          show_on_homepage?: boolean | null
          subtitle_ar?: string | null
          subtitle_en?: string | null
          title_ar?: string | null
          title_en?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      hero_banners: {
        Row: {
          created_at: string | null
          cta_link: string | null
          cta_text_ar: string | null
          cta_text_en: string | null
          display_order: number | null
          id: string
          image_url: string
          is_active: boolean | null
          subtitle_ar: string | null
          subtitle_en: string | null
          title_ar: string | null
          title_en: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          cta_link?: string | null
          cta_text_ar?: string | null
          cta_text_en?: string | null
          display_order?: number | null
          id?: string
          image_url: string
          is_active?: boolean | null
          subtitle_ar?: string | null
          subtitle_en?: string | null
          title_ar?: string | null
          title_en?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          cta_link?: string | null
          cta_text_ar?: string | null
          cta_text_en?: string | null
          display_order?: number | null
          id?: string
          image_url?: string
          is_active?: boolean | null
          subtitle_ar?: string | null
          subtitle_en?: string | null
          title_ar?: string | null
          title_en?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      page_hero_images: {
        Row: {
          created_at: string | null
          id: string
          image_url: string
          page_name_ar: string | null
          page_name_en: string
          page_slug: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          image_url: string
          page_name_ar?: string | null
          page_name_en: string
          page_slug: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          image_url?: string
          page_name_ar?: string | null
          page_name_en?: string
          page_slug?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      services: {
        Row: {
          category_ar: string | null
          category_en: string
          certifications: string[] | null
          created_at: string | null
          display_order: number | null
          features_ar: string[] | null
          features_en: string[] | null
          full_description_ar: string | null
          full_description_en: string | null
          icon_name: string
          id: string
          image_url: string | null
          is_active: boolean | null
          related_service_slugs: string[] | null
          sample_requirements_ar: string | null
          sample_requirements_en: string | null
          short_description_ar: string | null
          short_description_en: string | null
          slug: string
          sub_services_ar: string[] | null
          sub_services_en: string[] | null
          testing_parameters_ar: string[] | null
          testing_parameters_en: string[] | null
          title_ar: string | null
          title_en: string
          turnaround_time_ar: string | null
          turnaround_time_en: string | null
          updated_at: string | null
        }
        Insert: {
          category_ar?: string | null
          category_en: string
          certifications?: string[] | null
          created_at?: string | null
          display_order?: number | null
          features_ar?: string[] | null
          features_en?: string[] | null
          full_description_ar?: string | null
          full_description_en?: string | null
          icon_name: string
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          related_service_slugs?: string[] | null
          sample_requirements_ar?: string | null
          sample_requirements_en?: string | null
          short_description_ar?: string | null
          short_description_en?: string | null
          slug: string
          sub_services_ar?: string[] | null
          sub_services_en?: string[] | null
          testing_parameters_ar?: string[] | null
          testing_parameters_en?: string[] | null
          title_ar?: string | null
          title_en: string
          turnaround_time_ar?: string | null
          turnaround_time_en?: string | null
          updated_at?: string | null
        }
        Update: {
          category_ar?: string | null
          category_en?: string
          certifications?: string[] | null
          created_at?: string | null
          display_order?: number | null
          features_ar?: string[] | null
          features_en?: string[] | null
          full_description_ar?: string | null
          full_description_en?: string | null
          icon_name?: string
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          related_service_slugs?: string[] | null
          sample_requirements_ar?: string | null
          sample_requirements_en?: string | null
          short_description_ar?: string | null
          short_description_en?: string | null
          slug?: string
          sub_services_ar?: string[] | null
          sub_services_en?: string[] | null
          testing_parameters_ar?: string[] | null
          testing_parameters_en?: string[] | null
          title_ar?: string | null
          title_en?: string
          turnaround_time_ar?: string | null
          turnaround_time_en?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "user"],
    },
  },
} as const
