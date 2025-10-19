import { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  category: string;
  icon: LucideIcon;
  image: string;
  shortDescription: string;
  fullDescription: string;
  subServices: string[];
  features: string[];
  testingParameters: string[];
  certifications: string[];
  turnaroundTime: string;
  sampleRequirements: string;
  relatedServices: string[];
}
