// types/index.ts

// Theme types
export type Theme = 'light' | 'dark';

// FL Studio module types
export interface FLModule {
  id: string;
  title: string;
  desc: string;
  features: string[];
}

// Flashcard types
export interface Flashcard {
  action: string;
  key: string;
}

// Song template types
export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export interface GenreColor {
  from: string;
  to: string;
}

export interface RecommendedPlugin {
  name: string;
  pluginId?: string; // Optional link to plugin database
}

export interface SongTemplate {
  id: number;
  genre: string;
  name: string;
  bpm: number;
  key: string;
  description: string;
  layers: Layer[];
  difficulty?: Difficulty;
  mixingTips?: string[];
  genreColor?: GenreColor;
  downloadUrl?: string;
}

export interface Layer {
  category: string;
  color: string;
  elements: string[];
  recommendedPlugins?: RecommendedPlugin[];
}

// Plugin types
export interface Plugin {
  name: string;
  type: string;
  description: string;
  ratings: PluginRatings;
}

export interface PluginRatings {
  soundDesign: number;
  ease: number;
  cpu: number;
  organic: number;
  bass: number;
}

// AI types
export interface AIHistoryItem {
  id: number;
  text: string;
  isUser: boolean;
}

export interface SparkResult {
  title: string;
  bpm: string;
  key: string;
  constraint: string;
}

// Troubleshooting types
export interface TroubleshootingData {
  [key: string]: string[];
}

export interface SymptomOption {
  value: string;
  label: string;
}

// Chart types
export interface ChartData {
  labels: string[];
  datasets: any[];
}

// Project template types
export interface Channel {
  id: string;
  name: string;
  plugin: string;
  color: string;
  volume: number;
  pan: number;
  muted: boolean;
  soloed: boolean;
}

export interface MixerTrack {
  id: string;
  name: string;
  volume: number;
  pan: number;
  muted: boolean;
  soloed: boolean;
  effects: string[];
}

export interface Pattern {
  id: string;
  name: string;
  length: number; // in steps
  channel: string; // reference to channel id
}

export interface PlaylistClip {
  id: string;
  type: 'audio' | 'pattern' | 'automation';
  position: number; // position in timeline
  length: number; // length in timeline
  contentId: string; // reference to pattern id or audio file
}

export interface ProjectTemplate {
  id: string;
  name: string;
  description: string;
  genre: string;
  bpm: number;
  key: string;
  channels: Channel[];
  mixerTracks: MixerTrack[];
  patterns: Pattern[];
  playlist: PlaylistClip[];
  dateCreated: Date;
  dateModified: Date;
}

// Application state types
export interface AppState {
  activeSection: string;
  darkMode: boolean;
  mobileMenuOpen: boolean;
  // Add other state properties as needed
}