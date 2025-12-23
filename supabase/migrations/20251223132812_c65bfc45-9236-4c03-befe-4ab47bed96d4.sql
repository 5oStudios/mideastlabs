-- =====================================================
-- PHASE 1: CREATE ENUM FOR USER ROLES
-- =====================================================
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

-- =====================================================
-- PHASE 2: CREATE USER ROLES TABLE
-- =====================================================
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Users can view their own roles
CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- =====================================================
-- PHASE 3: CREATE SECURITY DEFINER FUNCTION FOR ROLE CHECKING
-- =====================================================
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- =====================================================
-- PHASE 4: CREATE SERVICES TABLE
-- =====================================================
CREATE TABLE public.services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title_en TEXT NOT NULL,
  title_ar TEXT,
  category_en TEXT NOT NULL,
  category_ar TEXT,
  icon_name TEXT NOT NULL,
  image_url TEXT,
  short_description_en TEXT,
  short_description_ar TEXT,
  full_description_en TEXT,
  full_description_ar TEXT,
  sub_services_en TEXT[],
  sub_services_ar TEXT[],
  features_en TEXT[],
  features_ar TEXT[],
  testing_parameters_en TEXT[],
  testing_parameters_ar TEXT[],
  certifications TEXT[],
  turnaround_time_en TEXT,
  turnaround_time_ar TEXT,
  sample_requirements_en TEXT,
  sample_requirements_ar TEXT,
  related_service_slugs TEXT[],
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;

-- Public can read active services
CREATE POLICY "Anyone can view active services"
ON public.services
FOR SELECT
USING (is_active = true);

-- Admins can do everything
CREATE POLICY "Admins can manage services"
ON public.services
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- =====================================================
-- PHASE 5: CREATE HERO BANNERS TABLE
-- =====================================================
CREATE TABLE public.hero_banners (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  image_url TEXT NOT NULL,
  title_en TEXT,
  title_ar TEXT,
  subtitle_en TEXT,
  subtitle_ar TEXT,
  cta_link TEXT,
  cta_text_en TEXT,
  cta_text_ar TEXT,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.hero_banners ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active banners"
ON public.hero_banners
FOR SELECT
USING (is_active = true);

CREATE POLICY "Admins can manage banners"
ON public.hero_banners
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- =====================================================
-- PHASE 6: CREATE GALLERY IMAGES TABLE
-- =====================================================
CREATE TABLE public.gallery_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  image_url TEXT NOT NULL,
  title_en TEXT,
  title_ar TEXT,
  subtitle_en TEXT,
  subtitle_ar TEXT,
  category_en TEXT,
  category_ar TEXT,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  show_on_homepage BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.gallery_images ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active gallery images"
ON public.gallery_images
FOR SELECT
USING (is_active = true);

CREATE POLICY "Admins can manage gallery"
ON public.gallery_images
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- =====================================================
-- PHASE 7: CREATE CERTIFICATES TABLE
-- =====================================================
CREATE TABLE public.certificates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  image_url TEXT NOT NULL,
  title_en TEXT NOT NULL,
  title_ar TEXT,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active certificates"
ON public.certificates
FOR SELECT
USING (is_active = true);

CREATE POLICY "Admins can manage certificates"
ON public.certificates
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- =====================================================
-- PHASE 8: CREATE CONTACT SETTINGS TABLE (Single row)
-- =====================================================
CREATE TABLE public.contact_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  phone TEXT,
  email TEXT,
  address_en TEXT,
  address_ar TEXT,
  map_embed_url TEXT,
  working_hours_weekdays_en TEXT,
  working_hours_weekdays_ar TEXT,
  working_hours_friday_en TEXT,
  working_hours_friday_ar TEXT,
  working_hours_saturday_en TEXT,
  working_hours_saturday_ar TEXT,
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.contact_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view contact settings"
ON public.contact_settings
FOR SELECT
USING (true);

CREATE POLICY "Admins can manage contact settings"
ON public.contact_settings
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- =====================================================
-- PHASE 9: CREATE COMPANY SETTINGS TABLE (Single row)
-- =====================================================
CREATE TABLE public.company_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_pdf_url TEXT,
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.company_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view company settings"
ON public.company_settings
FOR SELECT
USING (true);

CREATE POLICY "Admins can manage company settings"
ON public.company_settings
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- =====================================================
-- PHASE 10: CREATE UPDATED_AT TRIGGER FUNCTION
-- =====================================================
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers for all tables
CREATE TRIGGER update_services_updated_at
BEFORE UPDATE ON public.services
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_hero_banners_updated_at
BEFORE UPDATE ON public.hero_banners
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_gallery_images_updated_at
BEFORE UPDATE ON public.gallery_images
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_certificates_updated_at
BEFORE UPDATE ON public.certificates
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_contact_settings_updated_at
BEFORE UPDATE ON public.contact_settings
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_company_settings_updated_at
BEFORE UPDATE ON public.company_settings
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- =====================================================
-- PHASE 11: CREATE STORAGE BUCKET FOR UPLOADS
-- =====================================================
INSERT INTO storage.buckets (id, name, public, file_size_limit)
VALUES ('uploads', 'uploads', true, 10485760);

-- Storage policies for uploads bucket
CREATE POLICY "Anyone can view uploads"
ON storage.objects FOR SELECT
USING (bucket_id = 'uploads');

CREATE POLICY "Admins can upload files"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'uploads' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update files"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'uploads' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete files"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'uploads' AND public.has_role(auth.uid(), 'admin'));

-- =====================================================
-- PHASE 12: SEED SERVICES DATA
-- =====================================================
INSERT INTO public.services (slug, title_en, category_en, icon_name, image_url, short_description_en, full_description_en, sub_services_en, features_en, testing_parameters_en, certifications, turnaround_time_en, sample_requirements_en, related_service_slugs, display_order) VALUES
('water-analysis', 'Water Analysis', 'Environmental Testing', 'Droplets', '/src/assets/water-testing.jpg', 
'Complete water testing services covering groundwater, drinking water, seawater, wastewater, and specialized applications.',
'Our comprehensive Water Analysis services cover all types of water testing requirements, from potability assessment to environmental monitoring. We provide accurate and reliable testing for groundwater discharge compliance, drinking water safety, marine water quality, industrial effluents, agricultural water suitability, cooling tower maintenance, domestic water quality, and swimming pool hygiene. Our laboratory is equipped with advanced instrumentation and staffed by experienced analysts who ensure your water meets all relevant health, safety, and environmental standards.',
ARRAY['Groundwater – Testing for discharge into Kuwait Sea or Kuwait Bay', 'Drinking Water – Potability testing to meet health and safety standards', 'Seawater – Marine water quality monitoring for environmental impact', 'Wastewater – Analysis of domestic and industrial effluents', 'Agricultural Water – Evaluation for irrigation suitability and contamination risks', 'Cooling Towers – Chemical and microbiological monitoring to prevent corrosion and Legionella', 'Domestic Water – Routine quality checks for residential and commercial buildings', 'Swimming Pool Water – Hygiene and safety assessments'],
ARRAY['Full-spectrum chemical analysis', 'Microbiological testing', 'Heavy metals detection', 'Nutrient analysis', 'Fast turnaround time', 'Regulatory compliance reporting'],
ARRAY['pH, turbidity, conductivity', 'Total dissolved solids (TDS)', 'Heavy metals (lead, mercury, arsenic)', 'Bacteria (E. coli, total coliforms, Legionella)', 'Chlorine levels', 'Nitrates and phosphates', 'BOD and COD', 'Pesticides and herbicides'],
ARRAY['ISO 17025', 'NABL Accredited', 'WHO Standards'],
'3-7 business days',
'Minimum 500ml in sterile container, collected according to standard protocols',
ARRAY['environmental-monitoring', 'microbiological-testing', 'chemical-testing'],
1),

('soil-sediment-testing', 'Soil & Sediment Testing', 'Environmental Testing', 'TreePine', '/src/assets/soil-testing.jpg',
'Comprehensive soil and sediment analysis including contamination assessment, sludge testing, and clay characterization.',
'Our Soil & Sediment Testing services provide detailed analysis for environmental assessment, contamination detection, and geotechnical applications. We specialize in soil testing for oil contamination, sediment quality assessments for marine and freshwater environments, sludge testing for proper disposal or reuse classification, and clay testing for construction and engineering projects. Our comprehensive testing helps you make informed decisions about land use, remediation strategies, and compliance with environmental regulations.',
ARRAY['Soil testing for oil contamination', 'Sediment quality assessments', 'Sludge testing for disposal or reuse classification', 'Clay testing for construction and geotechnical applications', 'Heavy metal contamination analysis', 'Nutrient content evaluation', 'Soil pH and salinity testing', 'Organic matter content determination'],
ARRAY['Advanced analytical techniques', 'Contamination mapping', 'Geotechnical analysis', 'Environmental risk assessment', 'Remediation recommendations'],
ARRAY['Total Petroleum Hydrocarbons (TPH)', 'Heavy metals (Pb, Cd, Cr, Hg)', 'pH and electrical conductivity', 'Organic matter content', 'Particle size distribution', 'Moisture content', 'Nutrient levels (N, P, K)', 'Polycyclic Aromatic Hydrocarbons (PAHs)'],
ARRAY['ISO 17025', 'EPA Approved Methods'],
'5-7 business days',
'Minimum 500g of soil/sediment in clean containers, proper depth and location documentation',
ARRAY['environmental-monitoring', 'chemical-testing', 'outdoor-sampling'],
2),

('industrial-waste-characterization', 'Industrial Waste Characterization', 'Waste Management', 'Factory', '/src/assets/industrial-waste.jpg',
'Expert identification and classification of hazardous and non-hazardous industrial wastes with TCLP testing.',
'Our Industrial Waste Characterization services provide comprehensive analysis and classification of industrial wastes to ensure proper handling, treatment, and disposal. We specialize in identifying hazardous and non-hazardous waste streams, conducting TCLP (Toxicity Characteristic Leaching Procedure) testing for waste classification, and ensuring compliance with local and international disposal regulations. Our expert team helps industries manage their waste responsibly while meeting all regulatory requirements and environmental standards.',
ARRAY['Identification of hazardous and non-hazardous wastes', 'TCLP (Toxicity Characteristic Leaching Procedure) testing', 'Waste classification for disposal compliance', 'Heavy metal content analysis', 'Chemical composition determination', 'Waste stream profiling', 'Regulatory compliance documentation', 'Disposal recommendations'],
ARRAY['EPA-approved TCLP testing', 'Hazardous waste identification', 'Regulatory compliance support', 'Detailed classification reports', 'Disposal guidance'],
ARRAY['TCLP metals (As, Ba, Cd, Cr, Pb, Hg, Se, Ag)', 'pH and reactivity', 'Ignitability', 'Corrosivity', 'Total organic carbon', 'Volatile organic compounds', 'Semi-volatile organic compounds', 'Total petroleum hydrocarbons'],
ARRAY['ISO 17025', 'EPA Approved', 'RCRA Compliant'],
'7-10 business days',
'Representative samples with proper labeling, chain of custody, and waste description',
ARRAY['chemical-testing', 'environmental-monitoring', 'soil-sediment-testing'],
3),

('environmental-hygiene', 'Environmental Hygiene', 'Health & Safety', 'Shield', '/src/assets/environmental-hygiene.jpg',
'Professional surface and hand swab testing for microbial contamination control and workplace safety audits.',
'Our Environmental Hygiene services focus on maintaining safe and clean environments through comprehensive surface and personnel hygiene monitoring. We provide surface swab testing for microbial contamination detection and hand swab testing for hygiene audits and workplace safety verification. Our services are essential for food processing facilities, healthcare institutions, pharmaceutical manufacturers, and any organization committed to maintaining high hygiene standards. We help you identify contamination risks and implement effective hygiene control measures.',
ARRAY['Surface swab testing for microbial contamination', 'Hand swab testing for hygiene audits', 'ATP (Adenosine Triphosphate) testing', 'Environmental monitoring for cleanrooms', 'Food contact surface testing', 'Healthcare facility hygiene assessment', 'Workplace sanitation verification', 'Hygiene training and consultation'],
ARRAY['Rapid ATP testing available', 'Comprehensive microbial analysis', 'Hygiene audit reports', 'Corrective action recommendations', 'Regular monitoring programs'],
ARRAY['Total bacterial count', 'Coliform bacteria', 'Staphylococcus aureus', 'Listeria species', 'ATP levels', 'Yeast and mold', 'Salmonella (where applicable)', 'Surface cleanliness verification'],
ARRAY['ISO 17025', 'HACCP Compliant', 'GMP Standards'],
'2-3 business days (ATP results immediate)',
'Sterile swab kits provided, follow sampling protocol for accurate results',
ARRAY['microbiological-testing', 'food-agricultural-testing', 'air-quality-testing'],
4),

('petroleum-fuel-testing', 'Petroleum & Fuel Testing', 'Energy & Petroleum', 'Fuel', '/src/assets/petroleum-fuel-testing.jpg',
'Comprehensive analysis of lubricants, fuels, and crude oil in compliance with ASTM and ISO standards.',
'Our Petroleum & Fuel Testing services provide complete analysis of petroleum products, lubricants, and fuels to ensure quality, performance, and compliance with international standards. We test density, viscosity, sulfur content, flash point, distillation range, and many other critical parameters. Our laboratory follows ASTM and ISO testing methods to deliver accurate and reliable results for refineries, distributors, fuel stations, and industrial users. We help you maintain product quality, optimize performance, and meet regulatory requirements.',
ARRAY['Crude oil analysis', 'Gasoline and diesel fuel testing', 'Lubricant quality assessment', 'Fuel contamination detection', 'Octane and cetane number determination', 'Flash point testing', 'Distillation range analysis', 'Sulfur content measurement'],
ARRAY['ASTM and ISO compliant methods', 'Complete fuel specifications', 'Quality assurance programs', 'Performance optimization', 'Contamination investigation'],
ARRAY['Density and specific gravity', 'Kinematic viscosity', 'Sulfur content', 'Flash point', 'Pour point', 'Distillation range', 'Water content', 'Ash content', 'Calorific value'],
ARRAY['ISO 17025', 'ASTM Methods', 'IP Standards'],
'5-7 business days',
'Minimum 1 liter in clean, dry containers with proper labeling',
ARRAY['oil-testing', 'chemicals-testing', 'chemical-testing'],
5),

('oil-testing', 'Oil Testing', 'Condition Monitoring', 'Droplet', '/src/assets/oil-testing.jpg',
'Condition monitoring of new and used oils including engine, hydraulic, and transformer oils for performance optimization.',
'Our Oil Testing services provide comprehensive condition monitoring and analysis for new and used oils, including engine oils, hydraulic oils, and transformer oils. We help you optimize maintenance schedules, detect early signs of equipment wear, prevent costly failures, and extend oil and equipment life. Our testing identifies contamination, degradation, and wear particles to provide actionable insights for maintenance decisions. Regular oil analysis is a cost-effective way to ensure equipment reliability and performance.',
ARRAY['Engine oil analysis', 'Hydraulic oil testing', 'Transformer oil assessment', 'Gear oil evaluation', 'Turbine oil analysis', 'Wear metal analysis', 'Contamination detection', 'Oil condition trend monitoring'],
ARRAY['Predictive maintenance support', 'Equipment health monitoring', 'Early failure detection', 'Cost savings through optimization', 'Trend analysis and reporting'],
ARRAY['Viscosity at 40°C and 100°C', 'Total Acid Number (TAN)', 'Total Base Number (TBN)', 'Water content', 'Particle count', 'Wear metals (Fe, Cu, Pb, etc.)', 'Additives depletion', 'Oxidation and contamination'],
ARRAY['ISO 17025', 'ASTM D6224', 'Condition Monitoring Standards'],
'3-5 business days',
'Minimum 250ml in clean bottles, sample from running equipment when possible',
ARRAY['petroleum-fuel-testing', 'chemicals-testing', 'physical-testing'],
6),

('food-agricultural-testing', 'Food & Agricultural Product Testing', 'Food Safety', 'Utensils', '/src/assets/food-testing.jpg',
'Complete food safety testing including microbiological analysis, chemical residues, and nutritional labeling compliance.',
'Our Food & Agricultural Product Testing services ensure the safety, quality, and regulatory compliance of food products and agricultural commodities. We provide comprehensive microbiological safety testing for pathogens like E. coli and Salmonella, chemical residue analysis for pesticides, preservatives, and heavy metals, and nutritional facts analysis for accurate labeling. Our testing helps food producers, processors, importers, and exporters meet stringent food safety standards and protect consumer health.',
ARRAY['Microbiological safety testing (E. coli, Salmonella, Listeria)', 'Pesticide residue analysis', 'Heavy metals detection', 'Preservatives and additives testing', 'Nutritional facts analysis', 'Allergen testing', 'Shelf-life studies', 'Product authenticity verification'],
ARRAY['Comprehensive food safety testing', 'Nutritional labeling support', 'Regulatory compliance verification', 'Fast pathogen detection', 'Multi-residue pesticide screening'],
ARRAY['Total Plate Count', 'E. coli and Salmonella', 'Yeast and mold', 'Heavy metals (Pb, Cd, Hg, As)', 'Pesticide residues', 'Moisture and ash content', 'Protein, fat, carbohydrates', 'Vitamins and minerals'],
ARRAY['ISO 17025', 'HACCP', 'FDA Compliance', 'Codex Standards'],
'5-10 business days (depending on test)',
'Representative samples in original packaging when possible, minimum 500g or 500ml',
ARRAY['microbiological-testing', 'chemical-testing', 'environmental-hygiene'],
7),

('environmental-monitoring', 'Environmental Monitoring & Compliance', 'Environmental Services', 'FileCheck', '/src/assets/environmental-monitoring.jpg',
'Complete environmental monitoring including field sampling, laboratory analysis, and regulatory compliance support.',
'Our Environmental Monitoring & Compliance services provide end-to-end solutions for environmental assessment and regulatory compliance. We conduct routine field sampling and on-site inspections, perform comprehensive laboratory testing with expert result interpretation, and provide technical support for Environmental Impact Assessments (EIA), permitting, and regulatory compliance. Our multidisciplinary team helps industries, consultants, and government agencies monitor environmental quality, assess impacts, and meet regulatory obligations.',
ARRAY['Routine field sampling and on-site inspections', 'Air, water, soil, and noise monitoring', 'Comprehensive laboratory testing', 'Result interpretation and reporting', 'Environmental Impact Assessment (EIA) support', 'Permitting and compliance assistance', 'Baseline environmental studies', 'Post-project environmental monitoring'],
ARRAY['Integrated field and lab services', 'Certified sampling personnel', 'Regulatory expertise', 'Comprehensive reporting', 'Long-term monitoring programs'],
ARRAY['All air quality parameters', 'All water quality parameters', 'Soil contamination indicators', 'Noise levels', 'Ambient conditions', 'Emission measurements', 'Ecological indicators', 'Compliance parameters'],
ARRAY['ISO 17025', 'EPA Approved', 'Environmental Permits'],
'Varies by project scope',
'Customized sampling plans based on project requirements',
ARRAY['air-quality-testing', 'water-analysis', 'outdoor-sampling'],
8),

('microbiological-testing', 'Microbiological Testing', 'Microbiology', 'Microscope', '/src/assets/microbiological-testing.jpg',
'Expert detection and enumeration of pathogens and microorganisms in water, air, food, and surfaces.',
'Our Microbiological Testing services provide expert detection, identification, and enumeration of microorganisms in various matrices including water, air, food, and environmental surfaces. We detect pathogens that pose health risks, enumerate microbial populations for quality control, and support hygiene and contamination control programs across industries and public facilities. Our advanced microbiological techniques and experienced microbiologists ensure accurate and reliable results for critical applications.',
ARRAY['Pathogen detection (Salmonella, E. coli, Legionella, Listeria)', 'Total bacterial count and enumeration', 'Yeast and mold identification', 'Water microbiological analysis', 'Air microbiological sampling', 'Food pathogen testing', 'Surface hygiene monitoring', 'Sterility testing for pharmaceuticals'],
ARRAY['Rapid pathogen detection methods', 'Classical and molecular techniques', 'Cleanroom monitoring', 'Antimicrobial susceptibility testing', 'Outbreak investigation support'],
ARRAY['Total Plate Count (TPC)', 'Total and fecal coliforms', 'E. coli', 'Salmonella species', 'Listeria monocytogenes', 'Staphylococcus aureus', 'Legionella pneumophila', 'Yeast and mold counts'],
ARRAY['ISO 17025', 'HACCP', 'GMP Standards'],
'3-7 business days (depending on organism)',
'Sterile containers, proper storage and transport, follow collection protocols',
ARRAY['environmental-hygiene', 'food-agricultural-testing', 'water-analysis'],
9),

('physical-testing', 'Physical Testing', 'Physical Analysis', 'Gauge', '/src/assets/physical-testing.jpg',
'Evaluation of physical properties including pH, temperature, turbidity, conductivity, and total solids.',
'Our Physical Testing services evaluate fundamental physical properties of samples including pH, temperature, turbidity, conductivity, total solids, and other parameters critical for quality assessment and classification. We test samples from water, soil, waste, and various industrial materials to determine their physical characteristics and suitability for intended uses. These tests are essential for performance evaluation, quality control, process optimization, and regulatory compliance.',
ARRAY['pH measurement', 'Temperature profiling', 'Turbidity analysis', 'Electrical conductivity testing', 'Total dissolved solids (TDS)', 'Total suspended solids (TSS)', 'Color and odor assessment', 'Density and specific gravity'],
ARRAY['Accurate instrumentation', 'Fast turnaround time', 'Field and laboratory testing', 'Quality control for processes', 'Performance characterization'],
ARRAY['pH (0-14 scale)', 'Temperature (°C)', 'Turbidity (NTU)', 'Electrical conductivity (μS/cm)', 'Total dissolved solids (mg/L)', 'Total suspended solids (mg/L)', 'Salinity', 'Specific gravity'],
ARRAY['ISO 17025', 'Standard Methods'],
'1-2 business days',
'Appropriate sample size in clean containers, minimal storage time recommended',
ARRAY['water-analysis', 'chemical-testing', 'soil-sediment-testing'],
10),

('outdoor-sampling', 'Outdoor Sampling', 'Field Services', 'MapPin', '/src/assets/outdoor-sampling.jpg',
'Professional environmental sample collection from field locations using certified equipment and standardized procedures.',
'Our Outdoor Sampling services provide professional collection of environmental samples from field locations including air, soil, water, and sediment. Our trained personnel use certified equipment and follow standardized procedures to ensure accurate and representative sampling. We conduct on-site measurements of temperature, humidity, wind direction, and other environmental parameters. Our field services support baseline environmental studies, impact assessments, regulatory monitoring, and research projects.',
ARRAY['Environmental sample collection (air, soil, water, sediment)', 'On-site parameter measurements', 'Temperature and humidity monitoring', 'Wind direction and speed measurement', 'GPS location documentation', 'Chain of custody management', 'Field data recording', 'Sample preservation and transport'],
ARRAY['Certified sampling personnel', 'Calibrated field equipment', 'Proper sample preservation', 'Chain of custody documentation', 'GPS-tagged sample locations'],
ARRAY['Ambient temperature', 'Humidity', 'Wind speed and direction', 'Atmospheric pressure', 'GPS coordinates', 'Sample depth and location', 'Field pH and conductivity', 'Dissolved oxygen (water)'],
ARRAY['ISO 17025', 'Trained Sampling Personnel', 'EPA Protocols'],
'Sampling completed as scheduled, results depend on analysis type',
'Site access permits, safety clearances, sampling plan approval',
ARRAY['environmental-monitoring', 'air-quality-testing', 'water-analysis'],
11),

('asbestos-testing', 'Asbestos Testing', 'Occupational Health', 'HardHat', '/src/assets/asbestos-testing.jpg',
'Comprehensive asbestos fiber identification in air, water, soil, and building materials with full regulatory compliance.',
'Our Asbestos Testing services provide comprehensive identification and quantification of asbestos fibers in air, water, soil, and building materials. We conduct bulk material testing for construction, demolition, and renovation projects, air monitoring during asbestos removal and remediation work, and compliance testing to meet international safety and occupational health standards including OSHA, EPA, and ISO requirements. Our expert analysts use polarized light microscopy (PLM) and other advanced techniques to accurately detect and quantify asbestos.',
ARRAY['Bulk material asbestos identification', 'Air monitoring during asbestos removal', 'Clearance testing post-remediation', 'Soil and water asbestos testing', 'Building material surveys', 'Asbestos management plans', 'Risk assessment', 'Regulatory compliance verification'],
ARRAY['OSHA and EPA compliant methods', 'Experienced asbestos analysts', 'Fast turnaround for urgent projects', 'Comprehensive reporting', 'Expert consultation'],
ARRAY['Asbestos fiber identification (Chrysotile, Amosite, Crocidolite)', 'Fiber concentration in air (f/cc)', 'Percentage of asbestos in bulk materials', 'Fiber type classification', 'Clearance testing criteria', 'Background air levels', 'Occupational exposure limits', 'Risk assessment factors'],
ARRAY['ISO 17025', 'OSHA Approved', 'EPA Accredited', 'PLM Certified'],
'3-5 business days (urgent service available)',
'Proper sampling by trained personnel, air samples with calibrated pumps, bulk samples in sealed containers',
ARRAY['chemical-testing', 'environmental-hygiene', 'outdoor-sampling'],
12),

('air-quality-testing', 'Air Quality Testing', 'Environmental Testing', 'Wind', '/src/assets/air-quality-testing.jpg',
'Comprehensive air quality monitoring and analysis for indoor and outdoor environments to ensure compliance with health and safety standards.',
'Our Air Quality Testing services provide thorough monitoring and analysis of air pollutants and contaminants in both indoor and outdoor environments. We assess ambient air quality, workplace air conditions, emissions from industrial sources, and indoor air quality in buildings. Our laboratory utilizes advanced instrumentation to measure particulate matter, volatile organic compounds (VOCs), gases, and other airborne pollutants. We help organizations maintain compliance with environmental regulations and protect occupational health.',
ARRAY['Ambient air quality monitoring', 'Indoor air quality assessment', 'Industrial emissions testing', 'Workplace exposure monitoring', 'Particulate matter analysis (PM2.5, PM10)', 'VOC detection and quantification', 'Gas monitoring (CO, CO2, NOx, SOx)', 'Stack emissions testing'],
ARRAY['Real-time monitoring capabilities', 'Comprehensive pollutant analysis', 'Regulatory compliance reporting', 'Expert interpretation of results', 'Field and laboratory testing'],
ARRAY['Particulate matter (PM2.5, PM10)', 'Volatile organic compounds (VOCs)', 'Carbon monoxide (CO)', 'Carbon dioxide (CO2)', 'Nitrogen oxides (NOx)', 'Sulfur dioxide (SO2)', 'Ozone (O3)', 'Benzene and other aromatics'],
ARRAY['ISO 17025', 'EPA Approved', 'OSHA Compliant'],
'5-7 business days',
'Air samples collected using calibrated pumps and appropriate media, field parameters documented',
ARRAY['environmental-monitoring', 'asbestos-testing', 'outdoor-sampling'],
13),

('chemical-testing', 'Chemical Testing', 'Laboratory Analysis', 'Beaker', '/src/assets/chemical-testing.jpg',
'Advanced chemical analysis and characterization for various matrices including water, soil, materials, and industrial samples.',
'Our Chemical Testing services provide comprehensive analytical chemistry solutions for diverse sample types and applications. We perform qualitative and quantitative analysis of organic and inorganic compounds, trace element detection, chemical composition determination, and contamination screening. Our state-of-the-art laboratory is equipped with advanced instrumentation including GC-MS, ICP-MS, HPLC, and spectrophotometers. We support industries ranging from environmental compliance to product quality control and research applications.',
ARRAY['Organic compound analysis (GC-MS, HPLC)', 'Inorganic element analysis (ICP-MS, AAS)', 'Heavy metals testing', 'Pesticide and herbicide residue analysis', 'Petroleum hydrocarbons testing', 'Chemical composition determination', 'Trace element detection', 'Contamination screening'],
ARRAY['Advanced analytical instrumentation', 'Trace-level detection capabilities', 'Multi-matrix compatibility', 'Method validation and QA/QC', 'Expert analytical chemists'],
ARRAY['Heavy metals (lead, mercury, cadmium, arsenic)', 'Organic pollutants', 'Pesticides and herbicides', 'Petroleum hydrocarbons (TPH)', 'PCBs and dioxins', 'Chemical oxygen demand (COD)', 'Total organic carbon (TOC)', 'Elemental composition'],
ARRAY['ISO 17025', 'GLP Certified', 'Accredited Methods'],
'5-10 business days depending on analysis',
'Samples in appropriate containers, properly preserved based on analysis type, minimum quantities vary by test',
ARRAY['water-analysis', 'soil-sediment-testing', 'physical-testing'],
14),

('chemicals-testing', 'Chemicals Testing', 'Industrial Testing', 'TestTube', '/src/assets/chemicals-testing.jpg',
'Quality control and specification testing for industrial chemicals, reagents, and raw materials.',
'Our Chemicals Testing services provide quality control analysis for industrial chemicals, reagents, and raw materials used in manufacturing processes. We verify product specifications, assess purity levels, detect contaminants, and ensure compliance with industry standards. Our testing supports chemical manufacturers, distributors, and end-users in maintaining quality throughout the supply chain.',
ARRAY['Purity analysis', 'Specification testing', 'Contaminant detection', 'Raw material verification', 'Certificate of Analysis (COA) support', 'Batch testing', 'Stability studies', 'Comparative analysis'],
ARRAY['Industry-standard methods', 'Purity verification', 'Specification compliance', 'Quality assurance support', 'Fast turnaround'],
ARRAY['Purity percentage', 'Moisture content', 'Heavy metals', 'Specific impurities', 'Physical properties', 'Chemical identity', 'Concentration', 'pH and conductivity'],
ARRAY['ISO 17025', 'Industry Standards'],
'3-7 business days',
'Samples in original containers with lot numbers, minimum 100g or 100ml',
ARRAY['chemical-testing', 'petroleum-fuel-testing', 'physical-testing'],
15),

('consultation-support', 'Consultation & Technical Support', 'Professional Services', 'Users', '/src/assets/consultation-support.jpg',
'Expert environmental consulting, regulatory guidance, and technical support services.',
'Our Consultation & Technical Support services provide expert guidance on environmental testing, regulatory compliance, and quality management. Our team of experienced scientists and consultants help clients navigate complex environmental regulations, develop testing programs, interpret results, and implement corrective actions. We offer training, method development, and ongoing technical support to help organizations achieve their environmental and quality objectives.',
ARRAY['Environmental consulting', 'Regulatory guidance', 'Testing program development', 'Result interpretation', 'Corrective action planning', 'Training services', 'Method development', 'Quality system support'],
ARRAY['Experienced consultants', 'Regulatory expertise', 'Customized solutions', 'Ongoing support', 'Training programs'],
ARRAY['Regulatory requirements', 'Testing protocols', 'Quality systems', 'Data interpretation', 'Compliance strategies', 'Best practices', 'Method selection', 'Risk assessment'],
ARRAY['Professional Certifications', 'Industry Experience'],
'By appointment',
'Documentation of current practices, regulatory requirements, and project objectives',
ARRAY['environmental-monitoring', 'chemical-testing', 'microbiological-testing'],
16);

-- =====================================================
-- PHASE 13: SEED CERTIFICATES DATA
-- =====================================================
INSERT INTO public.certificates (image_url, title_en, display_order) VALUES
('/src/assets/certificates/cert-1.png', 'EPA Soil Testing', 1),
('/src/assets/certificates/cert-2.png', 'EPA Chemical Testing', 2),
('/src/assets/certificates/cert-3.png', 'EPA Biological Testing', 3),
('/src/assets/certificates/cert-4.png', 'EPA Air Testing', 4),
('/src/assets/certificates/cert-5.png', 'EPA Water Testing', 5),
('/src/assets/certificates/cert-6.png', 'ISO 9001 TIS', 6),
('/src/assets/certificates/cert-7.png', 'ISO 14001 TIS', 7),
('/src/assets/certificates/cert-8.png', 'ISO 45001 TIS', 8),
('/src/assets/certificates/cert-9.png', 'IAS Accreditation', 9);

-- =====================================================
-- PHASE 14: SEED GALLERY IMAGES DATA
-- =====================================================
INSERT INTO public.gallery_images (image_url, title_en, subtitle_en, category_en, display_order, show_on_homepage) VALUES
-- Homepage gallery images (first 6)
('/src/assets/lab-chemist-samples.jpg', 'Chemical Sample Analysis', 'Advanced testing procedures', 'Chemical Testing', 1, true),
('/src/assets/lab-equipment-setup.jpg', 'Laboratory Equipment', 'State-of-the-art instrumentation', 'Equipment', 2, true),
('/src/assets/lab-sample-vials.jpg', 'Sample Collection', 'Precise sample handling', 'Sample Preparation', 3, true),
('/src/assets/lab-testing-process.jpg', 'Testing Process', 'Rigorous quality control', 'Process', 4, true),
('/src/assets/lab-sample-analysis.jpg', 'Sample Analysis', 'Expert evaluation methods', 'Analysis', 5, true),
('/src/assets/lab-analytical-instrument.jpg', 'Analytical Instruments', 'High-precision equipment', 'Equipment', 6, true),
-- Full gallery images
('/src/assets/gallery/microscope-analysis.jpg', 'Microscope Analysis', 'Detailed microscopic examination', 'Microbiology', 7, false),
('/src/assets/gallery/lab-equipment-soxhlet.jpg', 'Soxhlet Extraction', 'Chemical extraction equipment', 'Equipment', 8, false),
('/src/assets/gallery/colorful-samples.jpg', 'Colorful Samples', 'Diverse sample testing', 'Sample Preparation', 9, false),
('/src/assets/gallery/gcms-instrument.jpg', 'GC-MS Instrument', 'Gas chromatography mass spectrometry', 'Equipment', 10, false),
('/src/assets/gallery/chemical-flasks.jpg', 'Chemical Flasks', 'Laboratory glassware', 'Equipment', 11, false),
('/src/assets/gallery/lab-analysis-screen.jpg', 'Lab Analysis Screen', 'Digital analysis systems', 'Technology', 12, false),
('/src/assets/gallery/blue-chemical-test.jpg', 'Blue Chemical Test', 'Colorimetric analysis', 'Chemical Testing', 13, false),
('/src/assets/gallery/touchscreen-analysis.jpg', 'Touchscreen Analysis', 'Modern interface systems', 'Technology', 14, false),
('/src/assets/gallery/sample-vials-tray.jpg', 'Sample Vials Tray', 'Organized sample storage', 'Sample Preparation', 15, false),
('/src/assets/gallery/advanced-gcms-system.jpg', 'Advanced GC-MS System', 'Latest analytical technology', 'Equipment', 16, false),
('/src/assets/gallery/icap-spectrometer.jpg', 'iCAP Spectrometer', 'Inductively coupled plasma analysis', 'Equipment', 17, false),
('/src/assets/gallery/discrete-analyzer.jpg', 'Discrete Analyzer', 'Automated chemical analysis', 'Equipment', 18, false),
('/src/assets/gallery/lab-workstation.jpg', 'Lab Workstation', 'Complete analysis station', 'Equipment', 19, false),
('/src/assets/gallery/behrotest-equipment.jpg', 'Behrotest Equipment', 'Specialized testing apparatus', 'Equipment', 20, false),
('/src/assets/gallery/hach-analyzer.jpg', 'Hach Analyzer', 'Water quality testing', 'Water Testing', 21, false),
('/src/assets/gallery/microbiological-inspection.jpg', 'Microbiological Inspection', 'Microbial analysis', 'Microbiology', 22, false),
('/src/assets/gallery/acolyte-device.jpg', 'Acolyte Device', 'Colony counting system', 'Microbiology', 23, false),
('/src/assets/gallery/incubator-cultures.jpg', 'Incubator Cultures', 'Microbial cultivation', 'Microbiology', 24, false),
('/src/assets/gallery/memmert-incubator.jpg', 'Memmert Incubator', 'Temperature-controlled incubation', 'Equipment', 25, false),
('/src/assets/gallery/nikon-microscope.jpg', 'Nikon Microscope', 'High-resolution microscopy', 'Equipment', 26, false);

-- =====================================================
-- PHASE 15: SEED CONTACT SETTINGS DATA
-- =====================================================
INSERT INTO public.contact_settings (phone, email, address_en, address_ar, map_embed_url, working_hours_weekdays_en, working_hours_weekdays_ar, working_hours_friday_en, working_hours_friday_ar, working_hours_saturday_en, working_hours_saturday_ar) VALUES
('+965 22251577', 'info@mideastlabs.com', 
'Middle East Environmental Laboratories, Industrial Shuaiba Area, Kuwait',
'مختبرات الشرق الأوسط البيئية، المنطقة الصناعية بالشعيبة، الكويت',
'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3482.8220955191327!2d48.0510782!3d29.199364199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcfa04550d25ded%3A0x8514275ef9b403ce!2zTWlkZGxlIEVhc3QgRW52aXJvbm1lbnRhbCBMYWJvcmF0b3JpZXMg2YXYrtiq2KjYsdin2Kog2KfZhNi02LHZgiDYp9mE2KPZiNiz2Lcg2KfZhNio2YrYptmK2Kk!5e0!3m2!1sen!2skw!4v1766315758961!5m2!1sen!2skw',
'Sunday - Thursday: 7:00 AM - 4:00 PM',
'الأحد - الخميس: 7:00 صباحاً - 4:00 مساءً',
'Friday: Closed',
'الجمعة: مغلق',
'Saturday: Closed',
'السبت: مغلق');

-- =====================================================
-- PHASE 16: SEED COMPANY SETTINGS DATA
-- =====================================================
INSERT INTO public.company_settings (profile_pdf_url) VALUES
('https://drive.google.com/file/d/1o7Qdknj1X-r4ft1gH2XpWf4hmXXMnU4b/preview');

-- =====================================================
-- PHASE 17: CREATE INDEXES FOR PERFORMANCE
-- =====================================================
CREATE INDEX idx_services_slug ON public.services(slug);
CREATE INDEX idx_services_is_active ON public.services(is_active);
CREATE INDEX idx_services_display_order ON public.services(display_order);

CREATE INDEX idx_hero_banners_is_active ON public.hero_banners(is_active);
CREATE INDEX idx_hero_banners_display_order ON public.hero_banners(display_order);

CREATE INDEX idx_gallery_images_is_active ON public.gallery_images(is_active);
CREATE INDEX idx_gallery_images_display_order ON public.gallery_images(display_order);
CREATE INDEX idx_gallery_images_show_on_homepage ON public.gallery_images(show_on_homepage);

CREATE INDEX idx_certificates_is_active ON public.certificates(is_active);
CREATE INDEX idx_certificates_display_order ON public.certificates(display_order);

CREATE INDEX idx_user_roles_user_id ON public.user_roles(user_id);