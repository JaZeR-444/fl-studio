# JSON Data Workflow Integration Guide

This guide explains how to wire together the four core JSON data files in your application.

## The Four Core Files

### 1. schema/eg1.json - The Validator
**Purpose:** Defines what valid band data looks like

**When to use:**
- Validating user-created band data
- Ensuring data integrity before saving
- Auto-generating TypeScript/Flow types
- API request/response validation

**Never directly displayed to users** - this is a structural definition only.

---

### 2. band-definitions/eg2.json - The Encyclopedia
**Purpose:** Complete reference data for all 7 bands

**When to use:**
- Populating tooltips and help text
- Displaying band roles and warnings
- Setting safe default values
- Generating UI copy

**This is your primary data source** - everything user-facing comes from here.

---

### 3. presets/eg3.json - The Building Blocks
**Purpose:** Reusable band configurations (archetypes)

**When to use:**
- Creating quick-action preset buttons
- Building full EQ presets from components
- Offering starting points to users
- Implementing "smart defaults"

**Archetypes are band-level** - combine them to make full presets.

---

### 4. rules/eg4.json - The Decision Engine
**Purpose:** Maps symptoms to solutions

**When to use:**
- Building assistant/wizard features
- Suggesting fixes based on user input
- Educational guidance systems
- Automated troubleshooting

**Rules reference archetypes** - they tell you which preset to apply.

---

## Data Flow Patterns

### Pattern 1: User Selects a Band

```
User clicks Band 5 (Presence)
    ↓
Load data from band-definitions/eg2.json
    ↓
Display band-level information:
  - Label: "Presence / Clarity"
  - One-liner: "Brings elements forward"
  - Tooltip: "Boost for clarity, cut for harshness..."
  - Primary roles
  - Common fixes
  - Warnings
    ↓
Show available archetypes from presets/eg3.json:
  - "Lead Clarity" button
  - "Soften Bite" button
    ↓
User clicks archetype → Apply settings
```

**Implementation example:**

```javascript
// Load band definition
const band5 = bandDefinitions.bands[4]; // 0-indexed

// Display in UI
document.getElementById('band-label').textContent = band5.uiCopy.label;
document.getElementById('band-tooltip').textContent = band5.uiCopy.tooltip;

// Populate archetype buttons
const band5Archetypes = presets.bandArchetypes.band5_presence;
band5Archetypes.forEach(archetype => {
  createButton(archetype.name, () => applyArchetype(archetype));
});
```

---

### Pattern 2: User Describes a Symptom

```
User says: "The mix sounds muddy"
    ↓
Look up symptom in rules/eg4.json
    ↓
Find rule: { symptom: "muddy_or_cloudy", priority: 1 }
    ↓
Get recommendations: bandId=2, archetype="De-Mud"
    ↓
Load archetype from presets/eg3.json:
  band2_warmth → "De-Mud"
    ↓
Load band context from band-definitions/eg2.json:
  Band 2 warnings, dos/donts
    ↓
Present to user:
  "Try cutting Band 2 (Warmth) at 250 Hz..."
  [Apply De-Mud] button
  Warning: "Cut more often than boost in this range"
```

**Implementation example:**

```javascript
function handleSymptom(symptom) {
  // Find matching rule
  const rule = rules.find(r => r.symptom === symptom);

  if (!rule) return;

  // Get recommendations sorted by priority
  const sortedRecs = rule.recommendations.sort((a, b) => {
    const bandA = bandDefinitions.bands[a.bandId - 1];
    const bandB = bandDefinitions.bands[b.bandId - 1];
    return a.bandId - b.bandId; // Or custom logic
  });

  // For each recommendation
  sortedRecs.forEach(rec => {
    const band = bandDefinitions.bands[rec.bandId - 1];
    const archetype = findArchetype(rec.bandId, rec.archetype);

    displayRecommendation({
      bandName: band.uiCopy.label,
      archetype: archetype,
      reasoning: rec.notes,
      warning: band.roles.warnings[0] // Show first warning
    });
  });
}

function findArchetype(bandId, name) {
  const bandKey = `band${bandId}_${bandDefinitions.bands[bandId-1].zone.split('/')[0].toLowerCase()}`;
  const archetypes = presets.bandArchetypes[bandKey];
  return archetypes.find(a => a.name === name);
}
```

---

### Pattern 3: Building a Full Preset

```
Goal: Create "Vocal Polish" preset
    ↓
Select relevant archetypes from presets/eg3.json:
  - Band 1: "HP Clean"
  - Band 2: "De-Mud"
  - Band 5: "Lead Clarity"
  - Band 7: "Air Shelf"
    ↓
Validate each against band-definitions/eg2.json:
  - Check gain against safeMaxTrack
  - Verify filter type is in typeOptions
  - Ensure frequency is in typicalRange
    ↓
Combine into preset object:
  {
    name: "Vocal Polish",
    bands: [archetype1, archetype2, ...]
  }
    ↓
Validate against schema/eg1.json (optional)
```

**Implementation example:**

```javascript
class PresetBuilder {
  constructor() {
    this.selectedArchetypes = [];
  }

  addArchetype(bandId, archetypeName) {
    const archetype = findArchetype(bandId, archetypeName);
    const bandDef = bandDefinitions.bands[bandId - 1];

    // Validate
    if (!this.validateArchetype(archetype, bandDef)) {
      throw new Error('Invalid archetype for band');
    }

    this.selectedArchetypes[bandId - 1] = archetype;
  }

  validateArchetype(archetype, bandDef) {
    // Check filter type is supported
    if (!bandDef.controls.typeOptions.includes(archetype.type)) {
      return false;
    }

    // Check frequency is in range
    const [minFreq, maxFreq] = bandDef.frequencyHz.typicalRange;
    if (archetype.freqHz < minFreq || archetype.freqHz > maxFreq) {
      return false;
    }

    // Check gain doesn't exceed safe max (assuming track level)
    const maxGain = bandDef.controls.gainDb.safeMaxTrack;
    if (Math.abs(archetype.gainDb) > maxGain) {
      console.warn(`Gain ${archetype.gainDb} exceeds safe maximum ${maxGain}`);
    }

    return true;
  }

  build(presetName) {
    return {
      name: presetName,
      bands: this.selectedArchetypes.filter(a => a !== undefined)
    };
  }
}

// Usage
const builder = new PresetBuilder();
builder.addArchetype(1, "HP Clean");
builder.addArchetype(2, "De-Mud");
builder.addArchetype(5, "Lead Clarity");
builder.addArchetype(7, "Air Shelf");

const preset = builder.build("Vocal Polish");
```

---

### Pattern 4: Validating User Input

```
User creates custom band settings
    ↓
Validate against schema/eg1.json:
  - All required fields present?
  - Correct data types?
  - Valid enum values?
    ↓
If valid, check against band-definitions/eg2.json:
  - Frequency in typicalRange?
  - Filter type in typeOptions?
  - Gain within safe limits?
    ↓
Show warnings if needed:
  - "Gain exceeds recommended maximum for track"
  - "This filter type is unusual for this band"
    ↓
Allow save if structurally valid
```

**Implementation with JSON Schema validator:**

```javascript
import Ajv from 'ajv';

const ajv = new Ajv();
const validateBand = ajv.compile(schema); // schema = eg1.json

function validateUserBand(userBand, context = 'track') {
  const errors = [];
  const warnings = [];

  // 1. Structural validation
  if (!validateBand(userBand)) {
    errors.push(...validateBand.errors);
    return { valid: false, errors, warnings };
  }

  // 2. Semantic validation
  const bandDef = bandDefinitions.bands[userBand.bandId - 1];

  // Check frequency range
  const [minFreq, maxFreq] = bandDef.frequencyHz.typicalRange;
  if (userBand.freqHz < minFreq || userBand.freqHz > maxFreq) {
    warnings.push(`Frequency ${userBand.freqHz} Hz is outside typical range ${minFreq}-${maxFreq} Hz`);
  }

  // Check filter type
  if (!bandDef.controls.typeOptions.includes(userBand.type)) {
    errors.push(`Filter type ${userBand.type} not supported for Band ${userBand.bandId}`);
  }

  // Check gain
  const safeMax = bandDef.controls.gainDb[`safeMax${capitalize(context)}`];
  if (Math.abs(userBand.gainDb) > safeMax) {
    warnings.push(`Gain ${userBand.gainDb} dB exceeds safe maximum ${safeMax} dB for ${context}`);
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings
  };
}
```

---

## Data Loading Strategy

### Option 1: Load All Data at App Start
**Good for:** Desktop apps, small datasets, offline-first apps

```javascript
// Load once at startup
const bandDefinitions = await loadJSON('02-Data/band-definitions/eg2.json');
const presets = await loadJSON('02-Data/presets/eg3.json');
const rules = await loadJSON('02-Data/rules/eg4.json');
const schema = await loadJSON('02-Data/schema/eg1.json');

// Store globally
app.data = { bandDefinitions, presets, rules, schema };
```

**Pros:**
- Fast access after initial load
- Works offline
- Simple code

**Cons:**
- Slower startup
- More memory usage

---

### Option 2: Lazy Load on Demand
**Good for:** Web apps, large datasets, bandwidth-constrained

```javascript
class DataManager {
  constructor() {
    this.cache = {};
  }

  async getBandDefinition(bandId) {
    if (!this.cache.bandDefinitions) {
      this.cache.bandDefinitions = await loadJSON('band-definitions/eg2.json');
    }
    return this.cache.bandDefinitions.bands[bandId - 1];
  }

  async getArchetypes(bandId) {
    if (!this.cache.presets) {
      this.cache.presets = await loadJSON('presets/eg3.json');
    }
    const bandKey = this.getBandKey(bandId);
    return this.cache.presets.bandArchetypes[bandKey];
  }

  async getRulesForSymptom(symptom) {
    if (!this.cache.rules) {
      this.cache.rules = await loadJSON('rules/eg4.json');
    }
    return this.cache.rules.find(r => r.symptom === symptom);
  }
}
```

**Pros:**
- Faster startup
- Less memory if not all data needed
- Can load from CDN/API

**Cons:**
- More complex code
- Async everywhere
- Needs cache strategy

---

## Common Integration Patterns

### 1. Educational Mode
**Show contextual help as user works**

```javascript
function onBandFocus(bandId) {
  const band = bandDefinitions.bands[bandId - 1];

  showTooltip({
    title: band.uiCopy.label,
    description: band.uiCopy.tooltip,
    primaryRole: band.roles.primary[0],
    warning: band.roles.warnings[0],
    dos: band.uiCopy.dos,
    donts: band.uiCopy.donts
  });
}
```

### 2. Quick Action Buttons
**One-click archetype application**

```javascript
function renderQuickActions(bandId) {
  const archetypes = getArchetypesForBand(bandId);
  const container = document.getElementById('quick-actions');

  archetypes.forEach(archetype => {
    const button = document.createElement('button');
    button.textContent = archetype.name;
    button.onclick = () => applyArchetype(bandId, archetype);
    container.appendChild(button);
  });
}
```

### 3. Smart Suggestions
**Recommend based on symptoms**

```javascript
function suggestFixes(symptoms) {
  const suggestions = [];

  symptoms.forEach(symptom => {
    const rule = rules.find(r => r.symptom === symptom);
    if (!rule) return;

    rule.recommendations.forEach(rec => {
      const band = bandDefinitions.bands[rec.bandId - 1];
      const archetype = findArchetype(rec.bandId, rec.archetype);

      suggestions.push({
        priority: rule.priority,
        bandName: band.uiCopy.label,
        action: archetype.name,
        reason: rec.notes,
        settings: archetype
      });
    });
  });

  // Sort by priority
  return suggestions.sort((a, b) => a.priority - b.priority);
}
```

### 4. Preset Management
**Save and load full EQ curves**

```javascript
class PresetManager {
  constructor(dataManager) {
    this.data = dataManager;
  }

  async createFromArchetypes(name, archetypeSelections) {
    // archetypeSelections = [
    //   { bandId: 1, archetypeName: "HP Clean" },
    //   { bandId: 2, archetypeName: "De-Mud" },
    //   ...
    // ]

    const bands = [];

    for (const selection of archetypeSelections) {
      const archetype = await this.data.getArchetype(
        selection.bandId,
        selection.archetypeName
      );

      bands.push({
        bandId: selection.bandId,
        ...archetype
      });
    }

    return {
      name,
      version: "1.0",
      bands
    };
  }

  async loadPreset(preset) {
    for (const band of preset.bands) {
      await this.applyBandSettings(band);
    }
  }
}
```

---

## Data Relationships

```
schema/eg1.json
    ↓ (validates)
band-definitions/eg2.json
    ↓ (provides metadata for)
presets/eg3.json
    ↑ (referenced by)
rules/eg4.json
```

**Flow:**
1. Schema defines structure
2. Band definitions provide reference data
3. Presets use that structure
4. Rules reference presets
5. All validated by schema

---

## Error Handling

### Missing Archetype
```javascript
function findArchetype(bandId, name) {
  const archetypes = getArchetypesForBand(bandId);
  const archetype = archetypes.find(a => a.name === name);

  if (!archetype) {
    console.error(`Archetype "${name}" not found for band ${bandId}`);
    // Fallback: use band default settings
    const band = bandDefinitions.bands[bandId - 1];
    return {
      name: "Default",
      type: band.controls.defaultType,
      freqHz: band.frequencyHz.typicalRange[0],
      bwPercent: band.controls.bwPercent.default,
      gainDb: 0
    };
  }

  return archetype;
}
```

### Invalid Band ID
```javascript
function getBand(bandId) {
  if (bandId < 1 || bandId > 7) {
    throw new Error(`Invalid band ID: ${bandId}. Must be 1-7.`);
  }
  return bandDefinitions.bands[bandId - 1];
}
```

### Schema Validation Failure
```javascript
function saveUserPreset(preset) {
  const validation = validatePreset(preset);

  if (!validation.valid) {
    showErrors(validation.errors);
    return false;
  }

  if (validation.warnings.length > 0) {
    showWarnings(validation.warnings, () => {
      // User can proceed despite warnings
      doSave(preset);
    });
  } else {
    doSave(preset);
  }
}
```

---

## Performance Tips

1. **Cache band definitions** - They don't change, load once
2. **Index archetypes by band** - Faster lookup than searching
3. **Debounce validation** - Don't validate on every keystroke
4. **Lazy load rules** - Only when assistant mode is active
5. **Precompute lookups** - Create band ID → archetype maps at startup

```javascript
// Precompute archetype lookup
const archetypesByBand = {};
Object.entries(presets.bandArchetypes).forEach(([key, archetypes]) => {
  const bandId = parseInt(key.match(/\d+/)[0]);
  archetypesByBand[bandId] = archetypes;
});

// Fast lookup
const band2Archetypes = archetypesByBand[2];
```

---

## Testing Your Integration

### Unit Tests
```javascript
describe('Data Integration', () => {
  test('All archetypes reference valid bands', () => {
    Object.entries(presets.bandArchetypes).forEach(([key, archetypes]) => {
      archetypes.forEach(archetype => {
        const bandId = parseInt(key.match(/\d+/)[0]);
        const band = bandDefinitions.bands[bandId - 1];

        // Type is supported
        expect(band.controls.typeOptions).toContain(archetype.type);

        // Frequency in range
        expect(archetype.freqHz).toBeGreaterThanOrEqual(band.frequencyHz.typicalRange[0]);
        expect(archetype.freqHz).toBeLessThanOrEqual(band.frequencyHz.typicalRange[1]);
      });
    });
  });

  test('All rules reference valid archetypes', () => {
    rules.forEach(rule => {
      rule.recommendations.forEach(rec => {
        const archetype = findArchetype(rec.bandId, rec.archetype);
        expect(archetype).toBeDefined();
      });
    });
  });
});
```

---

## Next Steps

- See `preset-system-architecture.md` for advanced preset patterns
- See `assistant-mode-implementation.md` for building smart assistants
- See `../api-specifications/` for validation and type safety
