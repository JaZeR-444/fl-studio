# Data Model Overview

Complete architectural overview of the Fruity Parametric EQ 2 JSON data model.

## System Architecture

```
┌─────────────────────────────────────────────────────┐
│              JSON Schema (eg1.json)                 │
│         Structural Validation Layer                  │
└────────────────┬────────────────────────────────────┘
                 │ validates
                 ↓
┌─────────────────────────────────────────────────────┐
│         Band Definitions (eg2.json)                 │
│         Canonical Reference Data                     │
│   • 7 bands with complete metadata                  │
│   • UI copy, roles, controls, frequencies           │
└────────────┬────────────────────────────────────────┘
             │ provides metadata for
             ↓
┌─────────────────────────────────────────────────────┐
│         Band Archetypes (eg3.json)                  │
│         Reusable Preset Building Blocks              │
│   • Pre-configured band settings                    │
│   • Organized by band                               │
└────────────┬────────────────────────────────────────┘
             ↑ referenced by
             │
┌─────────────────────────────────────────────────────┐
│         Decision Rules (eg4.json)                   │
│         Symptom → Solution Mappings                  │
│   • Diagnostic tree                                 │
│   • Priority-ordered recommendations                 │
└─────────────────────────────────────────────────────┘
```

---

## Core Entities

### 1. Band Object

**Primary entity representing one of the 7 EQ bands**

```typescript
interface Band {
  bandId: number;              // 1-7
  color: BandColor;            // purple | pink | orange | yellow | green | teal | blue
  zone: string;                // "Sub / Foundation", "Warmth / Body", etc.
  frequencyHz: FrequencySpec;  // Range and anchor targets
  controls: ControlSpec;       // Available controls and safe limits
  roles: RoleSpec;             // What the band does
  uiCopy: UICopySpec;          // User-facing text
}
```

**Location:** `02-Data/band-definitions/eg2.json → bands[]`

**Cardinality:** Exactly 7 (one per band)

**Purpose:** Complete reference data for each band

---

### 2. Frequency Specification

**Defines the frequency range and common targets for a band**

```typescript
interface FrequencySpec {
  typicalRange: [number, number];  // [min, max] in Hz
  anchorTargets: number[];         // Common frequency points for presets
}
```

**Example:**
```json
{
  "typicalRange": [140, 320],
  "anchorTargets": [150, 200, 250, 300]
}
```

**Purpose:**
- `typicalRange`: The Hz range this band typically operates in
- `anchorTargets`: Specific frequencies used in quick-action buttons

---

### 3. Control Specification

**Defines available controls and safe operating limits**

```typescript
interface ControlSpec {
  typeOptions: FilterType[];      // Supported filter types
  defaultType: FilterType;        // Recommended starting type
  gainDb: GainSpec;               // Gain ranges by context
  bwPercent: BandwidthSpec;       // Bandwidth guidance
}

type FilterType =
  | "high_pass"
  | "low_pass"
  | "bell"
  | "high_shelf"
  | "low_shelf"
  | "notch";

interface GainSpec {
  typical: [number, number];      // Normal operating range
  safeMaxTrack: number;           // Maximum for individual tracks
  safeMaxBus: number;             // Maximum for group buses
  safeMaxMaster: number;          // Maximum for master bus
}

interface BandwidthSpec {
  meaning: string;                // Human explanation
  wide: [number, number];         // Wide BW range
  medium: [number, number];       // Medium BW range
  narrow: [number, number];       // Narrow BW range
  default: number;                // Recommended starting point
}
```

**Important:** Bandwidth scale is **inverted** in FL Studio
- 0% = widest (affects ~3-4 octaves)
- 100% = narrowest (surgical precision)

---

### 4. Role Specification

**Describes what the band does and when to use it**

```typescript
interface RoleSpec {
  primary: string[];      // Core functions
  fixes: string[];        // Common problems it solves
  creative: string[];     // Artistic applications
  warnings: string[];     // What to avoid
}
```

**Example:**
```json
{
  "primary": ["Manage sub-bass and rumble", "Remove headroom-eating frequencies"],
  "fixes": ["Rumble removal", "Clearing headroom"],
  "creative": ["Bass boost for EDM/hip-hop"],
  "warnings": ["Never boost here unless designing bass"]
}
```

---

### 5. UI Copy Specification

**User-facing text for interfaces**

```typescript
interface UICopySpec {
  label: string;          // 2-3 words (e.g., "Sub / Foundation")
  oneLiner: string;       // ≤60 chars summary
  tooltip: string;        // 1-2 sentence guidance
  dos: string[];          // Best practices
  donts: string[];        // Things to avoid
}
```

**Purpose:** Ready-to-use microcopy for plugin UIs

---

### 6. Band Archetype

**Pre-configured band setting (preset building block)**

```typescript
interface BandArchetype {
  name: string;           // Descriptive name (e.g., "HP Clean", "De-Mud")
  type: FilterType;       // Filter type
  freqHz: number;         // Center/cutoff frequency
  bwPercent: number;      // Bandwidth setting
  gainDb: number;         // Gain amount (0 for filters)
}
```

**Location:** `02-Data/presets/eg3.json → bandArchetypes.bandN_name[]`

**Organization:** Grouped by band
```json
{
  "bandArchetypes": {
    "band1_sub": [ /* Band 1 archetypes */ ],
    "band2_warmth": [ /* Band 2 archetypes */ ],
    ...
  }
}
```

**Purpose:** Reusable configurations that can be stacked into full presets

---

### 7. Decision Rule

**Maps symptoms to recommended solutions**

```typescript
interface DecisionRule {
  symptom: string;                    // Symptom identifier
  priority: 1 | 2 | 3;                // 1=critical, 2=important, 3=polish
  recommendations: Recommendation[];   // Ordered list of solutions
}

interface Recommendation {
  bandId: number;          // Which band to use (1-7)
  archetype: string;       // Which archetype to apply
  notes: string;           // Why this helps
}
```

**Location:** `02-Data/rules/eg4.json → rules[]`

**Example:**
```json
{
  "symptom": "muddy_or_cloudy",
  "priority": 1,
  "recommendations": [
    {
      "bandId": 2,
      "archetype": "De-Mud",
      "notes": "Cut 200-300 Hz to clear low-mid buildup"
    }
  ]
}
```

---

## Data Relationships

### Primary Relationships

```
Band Definition (eg2.json)
    ↓ defines metadata for
Band Archetype (eg3.json)
    ↑ referenced by
Decision Rule (eg4.json)
```

**Example flow:**
1. User reports "muddy" sound
2. Look up in `rules/eg4.json` → finds `muddy_or_cloudy` rule
3. Rule recommends: Band 2, archetype "De-Mud"
4. Load archetype from `presets/eg3.json → band2_warmth → De-Mud`
5. Display context from `band-definitions/eg2.json → bands[1]`
6. Show tooltip, warnings, dos/donts from Band 2 definition

### Validation Relationships

```
JSON Schema (eg1.json)
    ↓ validates
All other data files
```

All band objects and archetypes should validate against the schema.

---

## Data Flow Patterns

### Pattern 1: Direct Band Access

```javascript
// Get Band 5 (Presence) definition
const band5 = bandDefinitions.bands[4]; // 0-indexed

// Access properties
console.log(band5.uiCopy.label);        // "Presence / Clarity"
console.log(band5.frequencyHz.typicalRange); // [1800, 3200]
console.log(band5.controls.typeOptions);     // ["bell", "high_shelf", "notch"]
```

### Pattern 2: Archetype Lookup

```javascript
// Get all Band 2 archetypes
const band2Archetypes = presets.bandArchetypes.band2_warmth;

// Find specific archetype
const deMud = band2Archetypes.find(a => a.name === "De-Mud");
// Returns: { name: "De-Mud", type: "bell", freqHz: 250, bwPercent: 35, gainDb: -2 }
```

### Pattern 3: Rule-Based Recommendation

```javascript
// Find rule for symptom
const rule = rules.find(r => r.symptom === 'muddy_or_cloudy');

// Get recommendations
rule.recommendations.forEach(rec => {
  const bandDef = bandDefinitions.bands[rec.bandId - 1];
  const archetype = findArchetype(rec.bandId, rec.archetype);

  console.log(`Use ${bandDef.uiCopy.label}: ${rec.archetype}`);
  console.log(`Settings:`, archetype);
  console.log(`Reasoning:`, rec.notes);
});
```

---

## Key Design Decisions

### 1. Separation of Concerns

**Why separate into 4 files?**

- **Schema (eg1.json)**: Pure structure definition, reusable for validation
- **Band Definitions (eg2.json)**: Reference data that changes rarely
- **Presets (eg3.json)**: User-editable configurations
- **Rules (eg4.json)**: Logic layer, can be extended without touching data

**Benefits:**
- Clear responsibilities
- Easy to update one layer without affecting others
- Can version independently
- Easier testing

### 2. Band Archetypes Instead of Full Presets

**Why band-level instead of full EQ presets?**

**Advantages:**
- **Modularity:** Mix and match archetypes
- **Flexibility:** Create thousands of combinations from dozens of archetypes
- **Smaller files:** Reference archetypes instead of duplicating settings
- **Updates propagate:** Fix an archetype, all presets using it improve

**Example:**
```javascript
// Instead of storing full presets like:
{
  "Vocal Polish": {
    band1: { type: "high_pass", freq: 80, ... },
    band2: { type: "bell", freq: 250, ... },
    band5: { type: "bell", freq: 2500, ... },
    band7: { type: "high_shelf", freq: 12000, ... }
  }
}

// Store archetype references:
{
  "Vocal Polish": [
    { bandId: 1, archetype: "HP Clean" },
    { bandId: 2, archetype: "De-Mud" },
    { bandId: 5, archetype: "Lead Clarity" },
    { bandId: 7, archetype: "Air Shelf" }
  ]
}
```

### 3. Context-Aware Safe Maximums

**Why different gain limits for track/bus/master?**

EQ changes **accumulate** through the mix chain:
- 10 tracks each boosting 2 dB = 20 dB at the bus
- Buses boosting 2 dB = additional gain at master
- Result: Cascading gain that clips or sounds unnatural

**Solution:**
```json
{
  "safeMaxTrack": 6,    // Individual tracks can be aggressive
  "safeMaxBus": 3,      // Buses should be subtle
  "safeMaxMaster": 1.5  // Master must be minimal
}
```

### 4. Inverted Bandwidth Scale

**Why 0% = widest instead of 100% = widest?**

This matches **FL Studio's actual implementation**.

While counter-intuitive, it's how the plugin works:
- 0% BW = widest Q (affects broad range)
- 100% BW = narrowest Q (surgical cut)

Data model reflects reality, not what might seem logical.

### 5. Priority-Based Rule System

**Why priority 1-3 instead of boolean critical/not-critical?**

**Three tiers enable workflow ordering:**
1. **Priority 1 (Critical):** Fix first - masks other problems
2. **Priority 2 (Important):** Address second - significant impact
3. **Priority 3 (Polish):** Final touches - subtle improvements

**Usage in assistants:**
```javascript
// Sort recommendations by priority
recommendations.sort((a, b) => a.priority - b.priority);

// Display with context
if (priority === 1) {
  showMessage("Fix this FIRST - it's masking other issues");
} else if (priority === 2) {
  showMessage("Important - address after critical issues");
} else {
  showMessage("Final polish - apply last");
}
```

---

## Constraints and Invariants

### Must-Follow Rules

1. **Exactly 7 bands** - No more, no less
2. **Band IDs 1-7** - Sequential, no gaps
3. **Colors follow spectrum** - Purple (low) → Blue (high)
4. **Array indexing** - bands[0] is Band 1 (0-indexed)
5. **Frequency ranges can overlap** - By design for smooth transitions
6. **All archetypes must reference valid bands** - Band ID 1-7 only
7. **All rules must reference existing archetypes** - No dangling references
8. **Gain limits decrease by context** - Track ≥ Bus ≥ Master

### Data Integrity Checks

```javascript
function validateDataIntegrity(schema, bandDefs, presets, rules) {
  const errors = [];

  // 1. Exactly 7 bands
  if (bandDefs.bands.length !== 7) {
    errors.push('Must have exactly 7 bands');
  }

  // 2. Sequential band IDs
  bandDefs.bands.forEach((band, i) => {
    if (band.bandId !== i + 1) {
      errors.push(`Band at index ${i} has wrong bandId: ${band.bandId}`);
    }
  });

  // 3. All archetypes reference valid bands
  Object.entries(presets.bandArchetypes).forEach(([key, archetypes]) => {
    const bandId = parseInt(key.match(/\d+/)[0]);
    if (bandId < 1 || bandId > 7) {
      errors.push(`Invalid band ID in archetype key: ${key}`);
    }

    archetypes.forEach(archetype => {
      const band = bandDefs.bands[bandId - 1];

      // Type is supported
      if (!band.controls.typeOptions.includes(archetype.type)) {
        errors.push(`Archetype "${archetype.name}" uses unsupported type ${archetype.type} for band ${bandId}`);
      }

      // Frequency in range
      const [min, max] = band.frequencyHz.typicalRange;
      if (archetype.freqHz < min || archetype.freqHz > max) {
        errors.push(`Archetype "${archetype.name}" freq ${archetype.freqHz} outside range ${min}-${max}`);
      }
    });
  });

  // 4. All rules reference existing archetypes
  rules.forEach(rule => {
    rule.recommendations.forEach(rec => {
      const bandKey = `band${rec.bandId}_${bandDefs.bands[rec.bandId-1].zone.split('/')[0].toLowerCase().replace(/ /g, '_')}`;
      const archetypes = presets.bandArchetypes[bandKey];

      if (!archetypes) {
        errors.push(`Rule "${rule.symptom}" references non-existent band key: ${bandKey}`);
        return;
      }

      const archetype = archetypes.find(a => a.name === rec.archetype);
      if (!archetype) {
        errors.push(`Rule "${rule.symptom}" references non-existent archetype: ${rec.archetype}`);
      }
    });
  });

  return errors;
}
```

---

## Extensibility Points

### Adding New Archetypes

```json
// In presets/eg3.json → bandArchetypes.band5_presence
{
  "name": "My Custom Presence Boost",
  "type": "bell",
  "freqHz": 2800,
  "bwPercent": 40,
  "gainDb": 2.5
}
```

**Requirements:**
- Must use supported filter type for that band
- Frequency must be in band's typicalRange
- Validate against schema

### Adding New Rules

```json
// In rules/eg4.json
{
  "symptom": "my_new_symptom",
  "priority": 2,
  "recommendations": [
    {
      "bandId": 3,
      "archetype": "De-Box",
      "notes": "Why this helps with the symptom"
    }
  ]
}
```

**Requirements:**
- Symptom ID must be unique
- Priority must be 1, 2, or 3
- All referenced archetypes must exist

### Adding Custom Band Properties

If you need extra data in band definitions:

```json
{
  "bandId": 5,
  "color": "green",
  // ... standard properties ...
  "customData": {
    "myAppSpecificField": "value"
  }
}
```

JSON Schema can be extended to validate custom fields.

---

## Versioning Strategy

### Current Version: 1.0

```json
{
  "version": "1.0",
  "bands": [ ... ]
}
```

### Future Versions

If structure changes significantly:

**Option 1: New schema version**
```json
{
  "version": "2.0",
  "schemaVersion": "2.0",
  "bands": [ ... ]
}
```

**Option 2: Migration layer**
```javascript
function migrate(data, fromVersion, toVersion) {
  if (fromVersion === "1.0" && toVersion === "2.0") {
    // Transform data structure
    return migrateV1toV2(data);
  }
  return data;
}
```

---

## Performance Considerations

### Indexing Strategies

```javascript
// Pre-compute lookups at load time
class DataModel {
  constructor(bandDefs, presets, rules) {
    this.bands = bandDefs.bands;

    // Index bands by ID
    this.bandsById = new Map(
      this.bands.map(b => [b.bandId, b])
    );

    // Index archetypes by band
    this.archetypesByBand = new Map();
    Object.entries(presets.bandArchetypes).forEach(([key, archs]) => {
      const bandId = parseInt(key.match(/\d+/)[0]);
      this.archetypesByBand.set(bandId, archs);
    });

    // Index rules by symptom
    this.rulesBySymptom = new Map(
      rules.map(r => [r.symptom, r])
    );
  }

  getBand(bandId) {
    return this.bandsById.get(bandId);
  }

  getArchetypes(bandId) {
    return this.archetypesByBand.get(bandId) || [];
  }

  getRule(symptom) {
    return this.rulesBySymptom.get(symptom);
  }
}
```

### Caching

```javascript
class CachedDataModel extends DataModel {
  constructor(bandDefs, presets, rules) {
    super(bandDefs, presets, rules);
    this.cache = new Map();
  }

  findArchetype(bandId, name) {
    const cacheKey = `${bandId}:${name}`;

    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    const archetypes = this.getArchetypes(bandId);
    const archetype = archetypes.find(a => a.name === name);

    this.cache.set(cacheKey, archetype);
    return archetype;
  }
}
```

---

## Next Steps

- See `schema-validation-examples.md` for validation patterns
- See `typescript-interfaces.md` for type-safe development
- See `../integration-guides/json-workflow.md` for usage patterns
