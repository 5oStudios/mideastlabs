import { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  titleAr?: string;
  category: string;
  categoryAr?: string;
  icon: LucideIcon;
  image: string;
  shortDescription: string;
  shortDescriptionAr?: string;
  fullDescription: string;
  fullDescriptionAr?: string;
  subServices: string[];
  subServicesAr?: string[];
  features: string[];
  featuresAr?: string[];
  testingParameters: string[];
  testingParametersAr?: string[];
  certifications: string[];
  turnaroundTime: string;
  turnaroundTimeAr?: string;
  sampleRequirements: string;
  sampleRequirementsAr?: string;
  relatedServices: string[];
}
