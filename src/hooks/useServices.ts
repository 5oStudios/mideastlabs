import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import type { Tables } from '@/integrations/supabase/types';
import { LucideIcon, Wind, Droplets, TreePine, Factory, Shield, TestTube, Fuel, Droplet, Utensils, FileCheck, Microscope, Beaker, Gauge, MapPin, HardHat, Users } from 'lucide-react';

export type ServiceRow = Tables<'services'>;

// Map icon names to Lucide icons
const iconMap: Record<string, LucideIcon> = {
  Wind,
  Droplets,
  TreePine,
  Factory,
  Shield,
  TestTube,
  Fuel,
  Droplet,
  Utensils,
  FileCheck,
  Microscope,
  Beaker,
  Gauge,
  MapPin,
  HardHat,
  Users,
};

export const getIconByName = (iconName: string): LucideIcon => {
  return iconMap[iconName] || Beaker;
};

export const useServices = () => {
  const [services, setServices] = useState<ServiceRow[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('is_active', true)
        .order('display_order', { ascending: true });

      if (error) {
        setError(error.message);
      } else {
        setServices(data || []);
      }
      setIsLoading(false);
    };

    fetchServices();
  }, []);

  return { services, isLoading, error };
};

export const useServiceBySlug = (slug: string | undefined) => {
  const [service, setService] = useState<ServiceRow | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) {
      setIsLoading(false);
      return;
    }

    const fetchService = async () => {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('slug', slug)
        .eq('is_active', true)
        .maybeSingle();

      if (error) {
        setError(error.message);
      } else {
        setService(data);
      }
      setIsLoading(false);
    };

    fetchService();
  }, [slug]);

  return { service, isLoading, error };
};

export const useRelatedServices = (slugs: string[] | null) => {
  const [relatedServices, setRelatedServices] = useState<ServiceRow[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!slugs || slugs.length === 0) {
      setRelatedServices([]);
      setIsLoading(false);
      return;
    }

    const fetchRelated = async () => {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .in('slug', slugs)
        .eq('is_active', true)
        .limit(3);

      if (!error && data) {
        setRelatedServices(data);
      }
      setIsLoading(false);
    };

    fetchRelated();
  }, [slugs?.join(',')]);

  return { relatedServices, isLoading };
};
