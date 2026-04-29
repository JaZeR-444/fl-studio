# TypeScript API Interfaces

Use these type definitions when building software compatible with the `02-Data` JSON files.

## 📦 Band Definitions

```typescript
export type BandColor =
  | "purple"
  | "pink"
  | "orange"
  | "yellow"
  | "green"
  | "teal"
  | "blue";

export type FilterType =
  | "high_pass"
  | "low_pass"
  | "bell"
  | "shelf"
  | "notch"
  | "low_shelf"
  | "high_shelf";

export interface BandMetadata {
  bandId: number; // 1-7
  color: BandColor;
  zone: string; // e.g., "Sub / Foundation Control"

  frequencyHz: {
    typicalRange: [number, number]; // [min, max]
    anchorTargets: number[];
  };

  controls: {
    typeOptions: FilterType[];
    defaultType: FilterType;
    gainDb: {
      typical: [number, number];
      safeMaxTrack: number;
      safeMaxBus: number;
      safeMaxMaster: number;
    };
    bwPercent: {
      meaning: string;
      wide: [number, number];
      medium: [number, number];
      narrow: [number, number];
      default: number;
    };
  };

  roles: {
    primary: string[];
    fixes: string[];
    creative: string[];
    warnings: string[];
  };

  uiCopy: {
    label: string;
    oneLiner: string;
    tooltip: string;
    dos: string[];
    donts: string[];
  };
}
```

## 🎛️ Preset Archetypes

```typescript
export interface Archetype {
  name: string;
  description: string;
  type: FilterType | null; // null if band is inactive
  freqHz: number;
  bwPercent: number;
  gainDb: number;
  useCase: string;
}

export interface Preset {
  name: string;
  description: string;
  bands: {
    bandId: number;
    archetype: string | null; // Matches the 'name' of an Archetype, or null
  }[];
}
```

## 🩺 Diagnostic Rules

```typescript
export type PriorityLevel = 1 | 2 | 3;

export interface TooltipRecommendation {
  bandId: number;
  archetype: string; // Key reference to Archetype name
  notes: string;
  gain: number | null;
  context: string;
}

export interface DiagnosticRule {
  symptom: string; // Snake_case ID
  displayName: string;
  description: string;
  priority: PriorityLevel;
  recommendations: TooltipRecommendation[];
}

export interface DiagnosticEngine {
  description: string;
  usage: string;
  priorityLevels: Record<string, string>;
  rules: DiagnosticRule[];
  contextualNotes: {
    trackLevel: string;
    busLevel: string;
    masterLevel: string;
    workflow: string[];
  };
}
```
