// src/types/pluginTypes.ts

export enum PluginFamily {
  ADDITIVE = 'Additive',
  PHYSICAL_MODELING = 'Physical Modeling',
  FM_HYBRID = 'FM/Hybrid',
  ANALOG_EMULATION = 'Analog Emulation',
  TIME_PITCH = 'Time & Pitch',
  DYNAMICS_MASTERING = 'Dynamics/Mastering',
  SPATIAL_CREATIVE_FX = 'Spatial/Creative FX',
  UTILITIES_MODULAR = 'Utilities/Modular'
}

export interface PluginCapability {
  id: string;
  name: string;
  family: PluginFamily;
  domain: 'time' | 'frequency' | 'spectral' | 'physical' | 'modulation';
  realTime: boolean;
  monoPoly: 'mono' | 'poly' | 'both';
  modulationDepth: number; // 1-10 scale
  performanceSensitivity: 'low' | 'medium' | 'high';
  genreAffinity: string[];
  stage: 'synthesis' | 'post-fx' | 'both';
  resynthesisSupport: boolean;
  transientDetection: boolean;
  nativeAdvantages: string[];
  bestPairedWith: string[];
  cpuEfficiency: 'low' | 'medium' | 'high';
  uniqueCapabilities: string[];
  editionExclusive: 'All Plugins' | 'Signature+' | 'Producer+' | 'None';
  synthesisMethod: string;
  harmonicCount: number | 'variable';
  oversampling: number | 'variable';
  internalModulation: boolean;
  polyphonicSlides: boolean;
  perNoteBehavior: boolean;
  filterType: string;
  algorithmType: string;
}

export interface PluginDetail {
  id: string;
  name: string;
  family: PluginFamily;
  coreModel: string;
  nativeOnlyAdvantages: string[];
  keyDifferentiators: string[];
  primaryUseCases: string[];
  bestPairedWith: string[];
  exclusivityFlags: string[];
  description: string;
  capabilities: PluginCapability;
}


export interface Tag {
  label: string;
  color: 'purple' | 'blue' | 'cyan' | 'green' | 'orange' | 'pink' | 'red';
}

export interface ExtendedPlugin {
  id: string;
  name: string;
  description: string;
  category: string;
  family: string;
  pluginType: string;
  icon: string;
  rating: number;
  tags: Tag[];
  pricingBadge: 'all-plugins' | 'producer' | 'signature' | 'fruity';
  views: number;
  saves: number;
  date: string;
  
  // Extended fields
  nativeStatus: string;
  bestUsedFor: string[];
  soundCharacter: string;
  cpuUsage: string;
  proTips: string[];
}


export interface WorkflowStep {
  id: string;
  role: string;
  configuration: string;
}

export interface PluginSearchIndex {
  id: string;
  name: string;
  family: PluginFamily;
  tags: string[];
  nativeAdvantages: string[];
  bestPairedWith: string[];
  primaryUseCases: string[];
  keyDifferentiators: string[];
  exclusivityFlags: string[];
  coreModel: string;
  edition: string;
  cpuRating: number; // 1-5
  complexity: number; // 1-5
  synthesisMethod: string;
  genreAffinity: string[];
  nativeOnly: boolean;
}