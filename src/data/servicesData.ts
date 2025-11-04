import { 
  Wind, Droplets, TreePine, Factory, Shield, TestTube, 
  Fuel, Droplet, Utensils, FileCheck, Microscope, Beaker,
  Gauge, MapPin, HardHat, Users 
} from "lucide-react";
import { Service } from "@/types/service";

// Import images
import airQualityImg from "@/assets/air-quality-testing.jpg";
import waterTestingImg from "@/assets/water-testing.jpg";
import soilTestingImg from "@/assets/soil-testing.jpg";
import industrialWasteImg from "@/assets/industrial-waste.jpg";
import environmentalHygieneImg from "@/assets/environmental-hygiene.jpg";
import chemicalsTestingImg from "@/assets/chemicals-testing.jpg";
import petroleumFuelImg from "@/assets/petroleum-fuel-testing.jpg";
import oilTestingImg from "@/assets/oil-testing.jpg";
import foodTestingImg from "@/assets/food-testing.jpg";
import environmentalMonitoringImg from "@/assets/environmental-monitoring.jpg";
import microbiologicalTestingImg from "@/assets/microbiological-testing.jpg";
import chemicalTestingImg from "@/assets/chemical-testing.jpg";
import physicalTestingImg from "@/assets/physical-testing.jpg";
import outdoorSamplingImg from "@/assets/outdoor-sampling.jpg";
import asbestosTestingImg from "@/assets/asbestos-testing.jpg";
import consultationImg from "@/assets/consultation-support.jpg";

export const servicesData: Service[] = [
  {
    id: "water-analysis",
    title: "Water Analysis",
    category: "Environmental Testing",
    icon: Droplets,
    image: waterTestingImg,
    shortDescription: "Complete water testing services covering groundwater, drinking water, seawater, wastewater, and specialized applications.",
    fullDescription: "Our comprehensive Water Analysis services cover all types of water testing requirements, from potability assessment to environmental monitoring. We provide accurate and reliable testing for groundwater discharge compliance, drinking water safety, marine water quality, industrial effluents, agricultural water suitability, cooling tower maintenance, domestic water quality, and swimming pool hygiene. Our laboratory is equipped with advanced instrumentation and staffed by experienced analysts who ensure your water meets all relevant health, safety, and environmental standards.",
    subServices: [
      "Groundwater – Testing for discharge into Kuwait Sea or Kuwait Bay",
      "Drinking Water – Potability testing to meet health and safety standards",
      "Seawater – Marine water quality monitoring for environmental impact",
      "Wastewater – Analysis of domestic and industrial effluents",
      "Agricultural Water – Evaluation for irrigation suitability and contamination risks",
      "Cooling Towers – Chemical and microbiological monitoring to prevent corrosion and Legionella",
      "Domestic Water – Routine quality checks for residential and commercial buildings",
      "Swimming Pool Water – Hygiene and safety assessments"
    ],
    features: [
      "Full-spectrum chemical analysis",
      "Microbiological testing",
      "Heavy metals detection",
      "Nutrient analysis",
      "Fast turnaround time",
      "Regulatory compliance reporting"
    ],
    testingParameters: [
      "pH, turbidity, conductivity",
      "Total dissolved solids (TDS)",
      "Heavy metals (lead, mercury, arsenic)",
      "Bacteria (E. coli, total coliforms, Legionella)",
      "Chlorine levels",
      "Nitrates and phosphates",
      "BOD and COD",
      "Pesticides and herbicides"
    ],
    certifications: ["ISO 17025", "NABL Accredited", "WHO Standards"],
    turnaroundTime: "3-7 business days",
    sampleRequirements: "Minimum 500ml in sterile container, collected according to standard protocols",
    relatedServices: ["environmental-monitoring", "microbiological-testing", "chemical-testing"]
  },
  {
    id: "soil-sediment-testing",
    title: "Soil & Sediment Testing",
    category: "Environmental Testing",
    icon: TreePine,
    image: soilTestingImg,
    shortDescription: "Comprehensive soil and sediment analysis including contamination assessment, sludge testing, and clay characterization.",
    fullDescription: "Our Soil & Sediment Testing services provide detailed analysis for environmental assessment, contamination detection, and geotechnical applications. We specialize in soil testing for oil contamination, sediment quality assessments for marine and freshwater environments, sludge testing for proper disposal or reuse classification, and clay testing for construction and engineering projects. Our comprehensive testing helps you make informed decisions about land use, remediation strategies, and compliance with environmental regulations.",
    subServices: [
      "Soil testing for oil contamination",
      "Sediment quality assessments",
      "Sludge testing for disposal or reuse classification",
      "Clay testing for construction and geotechnical applications",
      "Heavy metal contamination analysis",
      "Nutrient content evaluation",
      "Soil pH and salinity testing",
      "Organic matter content determination"
    ],
    features: [
      "Advanced analytical techniques",
      "Contamination mapping",
      "Geotechnical analysis",
      "Environmental risk assessment",
      "Remediation recommendations"
    ],
    testingParameters: [
      "Total Petroleum Hydrocarbons (TPH)",
      "Heavy metals (Pb, Cd, Cr, Hg)",
      "pH and electrical conductivity",
      "Organic matter content",
      "Particle size distribution",
      "Moisture content",
      "Nutrient levels (N, P, K)",
      "Polycyclic Aromatic Hydrocarbons (PAHs)"
    ],
    certifications: ["ISO 17025", "EPA Approved Methods"],
    turnaroundTime: "5-7 business days",
    sampleRequirements: "Minimum 500g of soil/sediment in clean containers, proper depth and location documentation",
    relatedServices: ["environmental-monitoring", "chemical-testing", "outdoor-sampling"]
  },
  {
    id: "industrial-waste-characterization",
    title: "Industrial Waste Characterization",
    category: "Waste Management",
    icon: Factory,
    image: industrialWasteImg,
    shortDescription: "Expert identification and classification of hazardous and non-hazardous industrial wastes with TCLP testing.",
    fullDescription: "Our Industrial Waste Characterization services provide comprehensive analysis and classification of industrial wastes to ensure proper handling, treatment, and disposal. We specialize in identifying hazardous and non-hazardous waste streams, conducting TCLP (Toxicity Characteristic Leaching Procedure) testing for waste classification, and ensuring compliance with local and international disposal regulations. Our expert team helps industries manage their waste responsibly while meeting all regulatory requirements and environmental standards.",
    subServices: [
      "Identification of hazardous and non-hazardous wastes",
      "TCLP (Toxicity Characteristic Leaching Procedure) testing",
      "Waste classification for disposal compliance",
      "Heavy metal content analysis",
      "Chemical composition determination",
      "Waste stream profiling",
      "Regulatory compliance documentation",
      "Disposal recommendations"
    ],
    features: [
      "EPA-approved TCLP testing",
      "Hazardous waste identification",
      "Regulatory compliance support",
      "Detailed classification reports",
      "Disposal guidance"
    ],
    testingParameters: [
      "TCLP metals (As, Ba, Cd, Cr, Pb, Hg, Se, Ag)",
      "pH and reactivity",
      "Ignitability",
      "Corrosivity",
      "Total organic carbon",
      "Volatile organic compounds",
      "Semi-volatile organic compounds",
      "Total petroleum hydrocarbons"
    ],
    certifications: ["ISO 17025", "EPA Approved", "RCRA Compliant"],
    turnaroundTime: "7-10 business days",
    sampleRequirements: "Representative samples with proper labeling, chain of custody, and waste description",
    relatedServices: ["chemical-testing", "environmental-monitoring", "soil-sediment-testing"]
  },
  {
    id: "environmental-hygiene",
    title: "Environmental Hygiene",
    category: "Health & Safety",
    icon: Shield,
    image: environmentalHygieneImg,
    shortDescription: "Professional surface and hand swab testing for microbial contamination control and workplace safety audits.",
    fullDescription: "Our Environmental Hygiene services focus on maintaining safe and clean environments through comprehensive surface and personnel hygiene monitoring. We provide surface swab testing for microbial contamination detection and hand swab testing for hygiene audits and workplace safety verification. Our services are essential for food processing facilities, healthcare institutions, pharmaceutical manufacturers, and any organization committed to maintaining high hygiene standards. We help you identify contamination risks and implement effective hygiene control measures.",
    subServices: [
      "Surface swab testing for microbial contamination",
      "Hand swab testing for hygiene audits",
      "ATP (Adenosine Triphosphate) testing",
      "Environmental monitoring for cleanrooms",
      "Food contact surface testing",
      "Healthcare facility hygiene assessment",
      "Workplace sanitation verification",
      "Hygiene training and consultation"
    ],
    features: [
      "Rapid ATP testing available",
      "Comprehensive microbial analysis",
      "Hygiene audit reports",
      "Corrective action recommendations",
      "Regular monitoring programs"
    ],
    testingParameters: [
      "Total bacterial count",
      "Coliform bacteria",
      "Staphylococcus aureus",
      "Listeria species",
      "ATP levels",
      "Yeast and mold",
      "Salmonella (where applicable)",
      "Surface cleanliness verification"
    ],
    certifications: ["ISO 17025", "HACCP Compliant", "GMP Standards"],
    turnaroundTime: "2-3 business days (ATP results immediate)",
    sampleRequirements: "Sterile swab kits provided, follow sampling protocol for accurate results",
    relatedServices: ["microbiological-testing", "food-agricultural-testing", "air-quality-testing"]
  },
  {
    id: "chemicals-testing",
    title: "Chemicals Testing",
    category: "Chemical Analysis",
    icon: TestTube,
    image: chemicalsTestingImg,
    shortDescription: "Precise chemical identification and assay percentage determination for industrial and research applications.",
    fullDescription: "Our Chemicals Testing services provide accurate identification and quantification of chemical compounds for various industrial, research, and quality control applications. We offer comprehensive analysis to determine chemical composition, purity levels, and assay percentages. Our state-of-the-art analytical techniques and experienced chemists ensure reliable results for raw materials, finished products, and unknown substances. We support industries in quality assurance, product development, and regulatory compliance.",
    subServices: [
      "Chemical identification and characterization",
      "Assay percentage (%) determination",
      "Purity analysis",
      "Impurity profiling",
      "Raw material verification",
      "Product quality testing",
      "Unknown substance identification",
      "Method development and validation"
    ],
    features: [
      "Advanced analytical instrumentation",
      "High precision and accuracy",
      "Regulatory method compliance",
      "Custom analysis available",
      "Expert consultation"
    ],
    testingParameters: [
      "Chemical composition",
      "Assay percentage",
      "Purity levels",
      "Moisture content",
      "pH determination",
      "Specific gravity",
      "Melting/boiling points",
      "Functional group identification"
    ],
    certifications: ["ISO 17025", "GLP Compliant", "Pharmacopoeia Standards"],
    turnaroundTime: "5-7 business days",
    sampleRequirements: "Minimum 100g or 100ml with proper labeling and MSDS if available",
    relatedServices: ["chemical-testing", "petroleum-fuel-testing", "industrial-waste-characterization"]
  },
  {
    id: "petroleum-fuel-testing",
    title: "Petroleum & Fuel Testing",
    category: "Energy & Petroleum",
    icon: Fuel,
    image: petroleumFuelImg,
    shortDescription: "Comprehensive analysis of lubricants, fuels, and crude oil in compliance with ASTM and ISO standards.",
    fullDescription: "Our Petroleum & Fuel Testing services provide complete analysis of petroleum products, lubricants, and fuels to ensure quality, performance, and compliance with international standards. We test density, viscosity, sulfur content, flash point, distillation range, and many other critical parameters. Our laboratory follows ASTM and ISO testing methods to deliver accurate and reliable results for refineries, distributors, fuel stations, and industrial users. We help you maintain product quality, optimize performance, and meet regulatory requirements.",
    subServices: [
      "Crude oil analysis",
      "Gasoline and diesel fuel testing",
      "Lubricant quality assessment",
      "Fuel contamination detection",
      "Octane and cetane number determination",
      "Flash point testing",
      "Distillation range analysis",
      "Sulfur content measurement"
    ],
    features: [
      "ASTM and ISO compliant methods",
      "Complete fuel specifications",
      "Quality assurance programs",
      "Performance optimization",
      "Contamination investigation"
    ],
    testingParameters: [
      "Density and specific gravity",
      "Kinematic viscosity",
      "Sulfur content",
      "Flash point",
      "Pour point",
      "Distillation range",
      "Water content",
      "Ash content",
      "Calorific value"
    ],
    certifications: ["ISO 17025", "ASTM Methods", "IP Standards"],
    turnaroundTime: "5-7 business days",
    sampleRequirements: "Minimum 1 liter in clean, dry containers with proper labeling",
    relatedServices: ["oil-testing", "chemicals-testing", "chemical-testing"]
  },
  {
    id: "oil-testing",
    title: "Oil Testing",
    category: "Condition Monitoring",
    icon: Droplet,
    image: oilTestingImg,
    shortDescription: "Condition monitoring of new and used oils including engine, hydraulic, and transformer oils for performance optimization.",
    fullDescription: "Our Oil Testing services provide comprehensive condition monitoring and analysis for new and used oils, including engine oils, hydraulic oils, and transformer oils. We help you optimize maintenance schedules, detect early signs of equipment wear, prevent costly failures, and extend oil and equipment life. Our testing identifies contamination, degradation, and wear particles to provide actionable insights for maintenance decisions. Regular oil analysis is a cost-effective way to ensure equipment reliability and performance.",
    subServices: [
      "Engine oil analysis",
      "Hydraulic oil testing",
      "Transformer oil assessment",
      "Gear oil evaluation",
      "Turbine oil analysis",
      "Wear metal analysis",
      "Contamination detection",
      "Oil condition trend monitoring"
    ],
    features: [
      "Predictive maintenance support",
      "Equipment health monitoring",
      "Early failure detection",
      "Cost savings through optimization",
      "Trend analysis and reporting"
    ],
    testingParameters: [
      "Viscosity at 40°C and 100°C",
      "Total Acid Number (TAN)",
      "Total Base Number (TBN)",
      "Water content",
      "Particle count",
      "Wear metals (Fe, Cu, Pb, etc.)",
      "Additives depletion",
      "Oxidation and contamination"
    ],
    certifications: ["ISO 17025", "ASTM D6224", "Condition Monitoring Standards"],
    turnaroundTime: "3-5 business days",
    sampleRequirements: "Minimum 250ml in clean bottles, sample from running equipment when possible",
    relatedServices: ["petroleum-fuel-testing", "chemicals-testing", "physical-testing"]
  },
  {
    id: "food-agricultural-testing",
    title: "Food & Agricultural Product Testing",
    category: "Food Safety",
    icon: Utensils,
    image: foodTestingImg,
    shortDescription: "Complete food safety testing including microbiological analysis, chemical residues, and nutritional labeling compliance.",
    fullDescription: "Our Food & Agricultural Product Testing services ensure the safety, quality, and regulatory compliance of food products and agricultural commodities. We provide comprehensive microbiological safety testing for pathogens like E. coli and Salmonella, chemical residue analysis for pesticides, preservatives, and heavy metals, and nutritional facts analysis for accurate labeling. Our testing helps food producers, processors, importers, and exporters meet stringent food safety standards and protect consumer health.",
    subServices: [
      "Microbiological safety testing (E. coli, Salmonella, Listeria)",
      "Pesticide residue analysis",
      "Heavy metals detection",
      "Preservatives and additives testing",
      "Nutritional facts analysis",
      "Allergen testing",
      "Shelf-life studies",
      "Product authenticity verification"
    ],
    features: [
      "Comprehensive food safety testing",
      "Nutritional labeling support",
      "Regulatory compliance verification",
      "Fast pathogen detection",
      "Multi-residue pesticide screening"
    ],
    testingParameters: [
      "Total Plate Count",
      "E. coli and Salmonella",
      "Yeast and mold",
      "Heavy metals (Pb, Cd, Hg, As)",
      "Pesticide residues",
      "Moisture and ash content",
      "Protein, fat, carbohydrates",
      "Vitamins and minerals"
    ],
    certifications: ["ISO 17025", "HACCP", "FDA Compliance", "Codex Standards"],
    turnaroundTime: "5-10 business days (depending on test)",
    sampleRequirements: "Representative samples in original packaging when possible, minimum 500g or 500ml",
    relatedServices: ["microbiological-testing", "chemical-testing", "environmental-hygiene"]
  },
  {
    id: "environmental-monitoring",
    title: "Environmental Monitoring & Compliance",
    category: "Environmental Services",
    icon: FileCheck,
    image: environmentalMonitoringImg,
    shortDescription: "Complete environmental monitoring including field sampling, laboratory analysis, and regulatory compliance support.",
    fullDescription: "Our Environmental Monitoring & Compliance services provide end-to-end solutions for environmental assessment and regulatory compliance. We conduct routine field sampling and on-site inspections, perform comprehensive laboratory testing with expert result interpretation, and provide technical support for Environmental Impact Assessments (EIA), permitting, and regulatory compliance. Our multidisciplinary team helps industries, consultants, and government agencies monitor environmental quality, assess impacts, and meet regulatory obligations.",
    subServices: [
      "Routine field sampling and on-site inspections",
      "Air, water, soil, and noise monitoring",
      "Comprehensive laboratory testing",
      "Result interpretation and reporting",
      "Environmental Impact Assessment (EIA) support",
      "Permitting and compliance assistance",
      "Baseline environmental studies",
      "Post-project environmental monitoring"
    ],
    features: [
      "Integrated field and lab services",
      "Certified sampling personnel",
      "Regulatory expertise",
      "Comprehensive reporting",
      "Long-term monitoring programs"
    ],
    testingParameters: [
      "All air quality parameters",
      "All water quality parameters",
      "Soil contamination indicators",
      "Noise levels",
      "Ambient conditions",
      "Emission measurements",
      "Ecological indicators",
      "Compliance parameters"
    ],
    certifications: ["ISO 17025", "EPA Approved", "Environmental Permits"],
    turnaroundTime: "Varies by project scope",
    sampleRequirements: "Customized sampling plans based on project requirements",
    relatedServices: ["air-quality-testing", "water-analysis", "outdoor-sampling"]
  },
  {
    id: "microbiological-testing",
    title: "Microbiological Testing",
    category: "Microbiology",
    icon: Microscope,
    image: microbiologicalTestingImg,
    shortDescription: "Expert detection and enumeration of pathogens and microorganisms in water, air, food, and surfaces.",
    fullDescription: "Our Microbiological Testing services provide expert detection, identification, and enumeration of microorganisms in various matrices including water, air, food, and environmental surfaces. We detect pathogens that pose health risks, enumerate microbial populations for quality control, and support hygiene and contamination control programs across industries and public facilities. Our advanced microbiological techniques and experienced microbiologists ensure accurate and reliable results for critical applications.",
    subServices: [
      "Pathogen detection (Salmonella, E. coli, Legionella, Listeria)",
      "Total bacterial count and enumeration",
      "Yeast and mold identification",
      "Water microbiological analysis",
      "Air microbiological sampling",
      "Food pathogen testing",
      "Surface hygiene monitoring",
      "Sterility testing for pharmaceuticals"
    ],
    features: [
      "Rapid pathogen detection methods",
      "Classical and molecular techniques",
      "Cleanroom monitoring",
      "Antimicrobial susceptibility testing",
      "Outbreak investigation support"
    ],
    testingParameters: [
      "Total Plate Count (TPC)",
      "Total and fecal coliforms",
      "E. coli",
      "Salmonella species",
      "Listeria monocytogenes",
      "Staphylococcus aureus",
      "Legionella pneumophila",
      "Yeast and mold counts"
    ],
    certifications: ["ISO 17025", "HACCP", "GMP Standards"],
    turnaroundTime: "3-7 business days (depending on organism)",
    sampleRequirements: "Sterile containers, proper storage and transport, follow collection protocols",
    relatedServices: ["environmental-hygiene", "food-agricultural-testing", "water-analysis"]
  },
  {
    id: "physical-testing",
    title: "Physical Testing",
    category: "Physical Analysis",
    icon: Gauge,
    image: physicalTestingImg,
    shortDescription: "Evaluation of physical properties including pH, temperature, turbidity, conductivity, and total solids.",
    fullDescription: "Our Physical Testing services evaluate fundamental physical properties of samples including pH, temperature, turbidity, conductivity, total solids, and other parameters critical for quality assessment and classification. We test samples from water, soil, waste, and various industrial materials to determine their physical characteristics and suitability for intended uses. These tests are essential for performance evaluation, quality control, process optimization, and regulatory compliance.",
    subServices: [
      "pH measurement",
      "Temperature profiling",
      "Turbidity analysis",
      "Electrical conductivity testing",
      "Total dissolved solids (TDS)",
      "Total suspended solids (TSS)",
      "Color and odor assessment",
      "Density and specific gravity"
    ],
    features: [
      "Accurate instrumentation",
      "Fast turnaround time",
      "Field and laboratory testing",
      "Quality control for processes",
      "Performance characterization"
    ],
    testingParameters: [
      "pH (0-14 scale)",
      "Temperature (°C)",
      "Turbidity (NTU)",
      "Electrical conductivity (μS/cm)",
      "Total dissolved solids (mg/L)",
      "Total suspended solids (mg/L)",
      "Salinity",
      "Specific gravity"
    ],
    certifications: ["ISO 17025", "Standard Methods"],
    turnaroundTime: "1-2 business days",
    sampleRequirements: "Appropriate sample size in clean containers, minimal storage time recommended",
    relatedServices: ["water-analysis", "chemical-testing", "soil-sediment-testing"]
  },
  {
    id: "outdoor-sampling",
    title: "Outdoor Sampling",
    category: "Field Services",
    icon: MapPin,
    image: outdoorSamplingImg,
    shortDescription: "Professional environmental sample collection from field locations using certified equipment and standardized procedures.",
    fullDescription: "Our Outdoor Sampling services provide professional collection of environmental samples from field locations including air, soil, water, and sediment. Our trained personnel use certified equipment and follow standardized procedures to ensure accurate and representative sampling. We conduct on-site measurements of temperature, humidity, wind direction, and other environmental parameters. Our field services support baseline environmental studies, impact assessments, regulatory monitoring, and research projects.",
    subServices: [
      "Environmental sample collection (air, soil, water, sediment)",
      "On-site parameter measurements",
      "Temperature and humidity monitoring",
      "Wind direction and speed measurement",
      "GPS location documentation",
      "Chain of custody management",
      "Field data recording",
      "Sample preservation and transport"
    ],
    features: [
      "Certified sampling personnel",
      "Calibrated field equipment",
      "Proper sample preservation",
      "Chain of custody documentation",
      "GPS-tagged sample locations"
    ],
    testingParameters: [
      "Ambient temperature",
      "Humidity",
      "Wind speed and direction",
      "Atmospheric pressure",
      "GPS coordinates",
      "Sample depth and location",
      "Field pH and conductivity",
      "Dissolved oxygen (water)"
    ],
    certifications: ["ISO 17025", "Trained Sampling Personnel", "EPA Protocols"],
    turnaroundTime: "Sampling completed as scheduled, results depend on analysis type",
    sampleRequirements: "Site access permits, safety clearances, sampling plan approval",
    relatedServices: ["environmental-monitoring", "air-quality-testing", "water-analysis"]
  },
  {
    id: "asbestos-testing",
    title: "Asbestos Testing",
    category: "Occupational Health",
    icon: HardHat,
    image: asbestosTestingImg,
    shortDescription: "Comprehensive asbestos fiber identification in air, water, soil, and building materials with full regulatory compliance.",
    fullDescription: "Our Asbestos Testing services provide comprehensive identification and quantification of asbestos fibers in air, water, soil, and building materials. We conduct bulk material testing for construction, demolition, and renovation projects, air monitoring during asbestos removal and remediation work, and compliance testing to meet international safety and occupational health standards including OSHA, EPA, and ISO requirements. Our expert analysts use polarized light microscopy (PLM) and other advanced techniques to accurately detect and quantify asbestos.",
    subServices: [
      "Bulk material asbestos identification",
      "Air monitoring during asbestos removal",
      "Clearance testing post-remediation",
      "Soil and water asbestos testing",
      "Building material surveys",
      "Asbestos management plans",
      "Risk assessment",
      "Regulatory compliance verification"
    ],
    features: [
      "OSHA and EPA compliant methods",
      "Experienced asbestos analysts",
      "Fast turnaround for urgent projects",
      "Comprehensive reporting",
      "Expert consultation"
    ],
    testingParameters: [
      "Asbestos fiber identification (Chrysotile, Amosite, Crocidolite)",
      "Fiber concentration in air (f/cc)",
      "Percentage of asbestos in bulk materials",
      "Fiber type classification",
      "Clearance testing criteria",
      "Background air levels",
      "Occupational exposure limits",
      "Risk assessment factors"
    ],
    certifications: ["ISO 17025", "OSHA Approved", "EPA Accredited", "PLM Certified"],
    turnaroundTime: "3-5 business days (urgent service available)",
    sampleRequirements: "Proper sampling by trained personnel, air samples with calibrated pumps, bulk samples in sealed containers",
    relatedServices: ["air-quality-testing", "environmental-hygiene", "outdoor-sampling"]
  },
];

// Helper function to get service by ID
export const getServiceById = (id: string): Service | undefined => {
  return servicesData.find(service => service.id === id);
};

// Helper function to get related services
export const getRelatedServices = (serviceId: string): Service[] => {
  const service = getServiceById(serviceId);
  if (!service) return [];
  
  return service.relatedServices
    .map(id => getServiceById(id))
    .filter((s): s is Service => s !== undefined)
    .slice(0, 3);
};
