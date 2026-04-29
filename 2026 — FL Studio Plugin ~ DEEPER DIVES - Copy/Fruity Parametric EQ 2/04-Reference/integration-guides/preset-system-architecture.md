# Preset System Architecture

A comprehensive guide to building a flexible, user-friendly preset system using the band archetype model.

## Core Concepts

### What is a Preset?
A preset is a complete EQ configuration consisting of:
- 0-7 band configurations (not all bands need to be active)
- Metadata (name, author, category, tags)
- Context information (track type, genre, purpose)

### What is an Archetype?
An archetype is a **single band configuration** - a reusable building block:
- Type (bell, shelf, pass, notch)
- Frequency (Hz)
- Bandwidth (%)
- Gain (dB)

**Key insight:** Presets = Arrays of Archetypes

---

## Architecture Patterns

### Pattern 1: Preset as Archetype Stack

**Simple, modular, extensible**

```json
{
  "name": "Vocal Polish",
  "author": "JaZeR",
  "category": "Vocal",
  "tags": ["clarity", "air", "clean"],
  "bands": [
    {
      "bandId": 1,
      "archetype": "HP Clean"
    },
    {
      "bandId": 2,
      "archetype": "De-Mud"
    },
    {
      "bandId": 5,
      "archetype": "Lead Clarity"
    },
    {
      "bandId": 7,
      "archetype": "Air Shelf"
    }
  ]
}
```

**Implementation:**

```javascript
class ArchetypePreset {
  constructor(name, metadata = {}) {
    this.name = name;
    this.metadata = metadata;
    this.bands = [];
  }

  addBand(bandId, archetypeName) {
    const archetype = findArchetype(bandId, archetypeName);
    if (!archetype) {
      throw new Error(`Archetype "${archetypeName}" not found for band ${bandId}`);
    }

    this.bands.push({
      bandId,
      archetype: archetypeName,
      settings: { ...archetype } // Clone archetype settings
    });
  }

  apply() {
    this.bands.forEach(band => {
      applyBandSettings(band.bandId, band.settings);
    });
  }

  toJSON() {
    return {
      name: this.name,
      ...this.metadata,
      bands: this.bands
    };
  }
}
```

**Pros:**
- Easy to understand
- Archetypes are reusable
- Preset files are small
- Updates to archetypes propagate

**Cons:**
- Depends on archetype library
- Can't customize beyond archetypes

---

### Pattern 2: Preset as Full Configuration

**Self-contained, portable**

```json
{
  "name": "Vocal Polish",
  "author": "JaZeR",
  "category": "Vocal",
  "bands": [
    {
      "bandId": 1,
      "enabled": true,
      "type": "high_pass",
      "freqHz": 80,
      "bwPercent": 25,
      "gainDb": 0,
      "source": "HP Clean"
    },
    {
      "bandId": 2,
      "enabled": true,
      "type": "bell",
      "freqHz": 250,
      "bwPercent": 35,
      "gainDb": -2,
      "source": "De-Mud"
    }
  ]
}
```

**Implementation:**

```javascript
class FullPreset {
  constructor(name, metadata = {}) {
    this.name = name;
    this.metadata = metadata;
    this.bands = Array(7).fill(null).map((_, i) => ({
      bandId: i + 1,
      enabled: false,
      type: 'bell',
      freqHz: 1000,
      bwPercent: 50,
      gainDb: 0
    }));
  }

  setBand(bandId, settings) {
    this.bands[bandId - 1] = {
      bandId,
      enabled: true,
      ...settings
    };
  }

  fromArchetype(bandId, archetypeName) {
    const archetype = findArchetype(bandId, archetypeName);
    this.setBand(bandId, {
      ...archetype,
      source: archetypeName // Track where it came from
    });
  }

  apply() {
    this.bands.forEach(band => {
      if (band.enabled) {
        applyBandSettings(band.bandId, band);
      } else {
        bypassBand(band.bandId);
      }
    });
  }
}
```

**Pros:**
- Self-contained
- Supports custom settings
- Portable between systems
- No external dependencies

**Cons:**
- Larger file size
- Archetype updates don't propagate
- More complex validation

---

### Pattern 3: Hybrid (Recommended)

**Best of both worlds**

```json
{
  "name": "Vocal Polish",
  "version": "1.0",
  "author": "JaZeR",
  "category": "Vocal",
  "tags": ["clarity", "air", "clean"],
  "bands": [
    {
      "bandId": 1,
      "enabled": true,
      "source": {
        "type": "archetype",
        "name": "HP Clean"
      }
    },
    {
      "bandId": 2,
      "enabled": true,
      "source": {
        "type": "archetype",
        "name": "De-Mud"
      }
    },
    {
      "bandId": 5,
      "enabled": true,
      "source": {
        "type": "custom",
        "settings": {
          "type": "bell",
          "freqHz": 2700,
          "bwPercent": 45,
          "gainDb": 2.5
        }
      }
    }
  ]
}
```

**Implementation:**

```javascript
class HybridPreset {
  constructor(name, metadata = {}) {
    this.name = name;
    this.version = "1.0";
    this.metadata = metadata;
    this.bands = [];
  }

  addArchetype(bandId, archetypeName) {
    this.bands.push({
      bandId,
      enabled: true,
      source: {
        type: 'archetype',
        name: archetypeName
      }
    });
  }

  addCustom(bandId, settings) {
    this.bands.push({
      bandId,
      enabled: true,
      source: {
        type: 'custom',
        settings
      }
    });
  }

  apply() {
    this.bands.forEach(band => {
      if (!band.enabled) return;

      let settings;
      if (band.source.type === 'archetype') {
        const archetype = findArchetype(band.bandId, band.source.name);
        settings = archetype;
      } else {
        settings = band.source.settings;
      }

      applyBandSettings(band.bandId, settings);
    });
  }

  // Convert archetype to custom (freezes current state)
  freezeBand(bandId) {
    const band = this.bands.find(b => b.bandId === bandId);
    if (band && band.source.type === 'archetype') {
      const archetype = findArchetype(bandId, band.source.name);
      band.source = {
        type: 'custom',
        settings: { ...archetype },
        note: `Frozen from archetype: ${band.source.name}`
      };
    }
  }
}
```

**Pros:**
- Flexibility for custom tweaks
- Archetype updates can still propagate
- Clear provenance tracking
- Supports both use cases

**Cons:**
- More complex to implement
- Requires migration logic

---

## Preset Categories

### By Instrument
```
Vocals/
  ├── Vocal - Lead (Male).json
  ├── Vocal - Lead (Female).json
  ├── Vocal - Background.json
  └── Vocal - Rap.json

Drums/
  ├── Kick - Punchy.json
  ├── Kick - Sub.json
  ├── Snare - Crispy.json
  └── Hi-Hat - Bright.json

Bass/
  ├── Bass - Sub (808).json
  ├── Bass - Mid (Synth).json
  └── Bass - Acoustic.json

Melodic/
  ├── Piano - Bright.json
  ├── Guitar - Acoustic.json
  ├── Strings - Warm.json
  └── Synth - Lead.json
```

### By Problem (Corrective)
```
Fixes/
  ├── Remove Mud.json
  ├── De-Box.json
  ├── Remove Harshness.json
  ├── Clear Headroom.json
  └── Tame Resonance.json
```

### By Goal (Creative)
```
Creative/
  ├── Telephone Effect.json
  ├── AM Radio.json
  ├── Vintage Warmth.json
  ├── Modern Clarity.json
  └── Aggressive Presence.json
```

### By Context
```
Context/
  ├── Track - Vocals.json
  ├── Track - Drums.json
  ├── Bus - Drum Group.json
  ├── Bus - Vocal Group.json
  └── Master - Final Polish.json
```

---

## Preset Factory System

### Generating Presets from Rules

```javascript
class PresetFactory {
  constructor(rules, archetypes) {
    this.rules = rules;
    this.archetypes = archetypes;
  }

  // Generate preset from symptom
  fromSymptom(symptom, name = null) {
    const rule = this.rules.find(r => r.symptom === symptom);
    if (!rule) return null;

    const preset = new HybridPreset(
      name || `Fix: ${symptom.replace(/_/g, ' ')}`,
      {
        category: 'Fixes',
        symptom: symptom,
        priority: rule.priority
      }
    );

    rule.recommendations.forEach(rec => {
      preset.addArchetype(rec.bandId, rec.archetype);
    });

    return preset;
  }

  // Generate preset for instrument
  forInstrument(instrument, style = 'default') {
    // Example: Generate vocal preset
    const preset = new HybridPreset(`${instrument} - ${style}`, {
      category: 'Instrument',
      instrument: instrument
    });

    // Common vocal chain
    if (instrument === 'vocal') {
      preset.addArchetype(1, "HP Clean");

      if (style === 'clarity') {
        preset.addArchetype(2, "De-Mud");
        preset.addArchetype(5, "Lead Clarity");
        preset.addArchetype(7, "Air Shelf");
      } else if (style === 'warmth') {
        preset.addArchetype(2, "Add Body");
        preset.addArchetype(5, "Soften Bite");
      }
    }

    return preset;
  }

  // Combine multiple symptoms
  fromSymptoms(symptoms, name) {
    const preset = new HybridPreset(name, {
      category: 'Multi-Fix',
      symptoms: symptoms
    });

    const bandUsage = new Set();

    // Sort symptoms by priority
    const sortedSymptoms = symptoms.map(s => ({
      symptom: s,
      rule: this.rules.find(r => r.symptom === s)
    })).sort((a, b) => a.rule.priority - b.rule.priority);

    // Add archetypes, avoiding band conflicts
    sortedSymptoms.forEach(({ symptom, rule }) => {
      rule.recommendations.forEach(rec => {
        if (!bandUsage.has(rec.bandId)) {
          preset.addArchetype(rec.bandId, rec.archetype);
          bandUsage.add(rec.bandId);
        }
      });
    });

    return preset;
  }
}

// Usage
const factory = new PresetFactory(rules, presets);

const muddyFix = factory.fromSymptom('muddy_or_cloudy');
const vocalClarityPreset = factory.forInstrument('vocal', 'clarity');
const mixFixPreset = factory.fromSymptoms(
  ['muddy_or_cloudy', 'boxy_or_cardboard', 'dull_or_closed'],
  'Full Mix Polish'
);
```

---

## Preset Management Features

### Tagging System

```javascript
class PresetManager {
  constructor() {
    this.presets = [];
    this.tags = new Map(); // tag -> Set of preset IDs
  }

  addPreset(preset) {
    this.presets.push(preset);

    // Index by tags
    if (preset.metadata.tags) {
      preset.metadata.tags.forEach(tag => {
        if (!this.tags.has(tag)) {
          this.tags.set(tag, new Set());
        }
        this.tags.get(tag).add(preset.name);
      });
    }
  }

  findByTag(...tags) {
    if (tags.length === 0) return this.presets;

    // Intersection of all tag sets
    const sets = tags.map(tag => this.tags.get(tag) || new Set());
    const intersection = sets.reduce((a, b) =>
      new Set([...a].filter(x => b.has(x)))
    );

    return this.presets.filter(p => intersection.has(p.name));
  }

  findByCategory(category) {
    return this.presets.filter(p => p.metadata.category === category);
  }

  search(query) {
    const lower = query.toLowerCase();
    return this.presets.filter(p =>
      p.name.toLowerCase().includes(lower) ||
      p.metadata.tags?.some(t => t.toLowerCase().includes(lower))
    );
  }
}
```

### Favorites & Ratings

```javascript
class UserPresetLibrary extends PresetManager {
  constructor() {
    super();
    this.favorites = new Set();
    this.ratings = new Map(); // preset name -> 1-5
    this.usage = new Map(); // preset name -> usage count
  }

  toggleFavorite(presetName) {
    if (this.favorites.has(presetName)) {
      this.favorites.delete(presetName);
    } else {
      this.favorites.add(presetName);
    }
  }

  rate(presetName, rating) {
    if (rating < 1 || rating > 5) {
      throw new Error('Rating must be 1-5');
    }
    this.ratings.set(presetName, rating);
  }

  trackUsage(presetName) {
    const count = this.usage.get(presetName) || 0;
    this.usage.set(presetName, count + 1);
  }

  getMostUsed(limit = 10) {
    return [...this.usage.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit)
      .map(([name]) => this.presets.find(p => p.name === name));
  }

  getTopRated(limit = 10) {
    return [...this.ratings.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit)
      .map(([name]) => this.presets.find(p => p.name === name));
  }
}
```

---

## Preset Variations

### Context-Aware Presets

```javascript
class ContextAwarePreset extends HybridPreset {
  constructor(name, metadata = {}) {
    super(name, metadata);
    this.variations = {
      track: [],
      bus: [],
      master: []
    };
  }

  // Scale preset based on context
  forContext(context) {
    const scaledPreset = new HybridPreset(
      `${this.name} (${context})`,
      { ...this.metadata, context }
    );

    const scaleFactors = {
      track: 1.0,
      bus: 0.5,
      master: 0.25
    };

    const scale = scaleFactors[context];

    this.bands.forEach(band => {
      if (band.source.type === 'archetype') {
        scaledPreset.addArchetype(band.bandId, band.source.name);
      } else {
        const scaled = {
          ...band.source.settings,
          gainDb: band.source.settings.gainDb * scale
        };
        scaledPreset.addCustom(band.bandId, scaled);
      }
    });

    return scaledPreset;
  }
}
```

### A/B Comparison

```javascript
class PresetComparison {
  constructor(presetA, presetB) {
    this.presetA = presetA;
    this.presetB = presetB;
    this.currentState = 'A';
  }

  toggle() {
    if (this.currentState === 'A') {
      this.presetB.apply();
      this.currentState = 'B';
    } else {
      this.presetA.apply();
      this.currentState = 'A';
    }
  }

  getDifferences() {
    const diffs = [];

    for (let bandId = 1; bandId <= 7; bandId++) {
      const bandA = this.presetA.bands.find(b => b.bandId === bandId);
      const bandB = this.presetB.bands.find(b => b.bandId === bandId);

      if (!bandA && !bandB) continue;

      if (!bandA || !bandB) {
        diffs.push({
          bandId,
          type: !bandA ? 'added' : 'removed',
          preset: !bandA ? 'B' : 'A'
        });
      } else {
        const settingsA = bandA.source.settings || findArchetype(bandId, bandA.source.name);
        const settingsB = bandB.source.settings || findArchetype(bandId, bandB.source.name);

        const changes = {};
        ['type', 'freqHz', 'bwPercent', 'gainDb'].forEach(key => {
          if (settingsA[key] !== settingsB[key]) {
            changes[key] = { A: settingsA[key], B: settingsB[key] };
          }
        });

        if (Object.keys(changes).length > 0) {
          diffs.push({ bandId, type: 'modified', changes });
        }
      }
    }

    return diffs;
  }
}
```

---

## Import/Export

### Preset Interchange Format

```json
{
  "format": "fruity-parametric-eq-2-preset",
  "formatVersion": "1.0",
  "preset": {
    "name": "Vocal Polish",
    "author": "JaZeR",
    "created": "2026-01-03T12:00:00Z",
    "modified": "2026-01-03T12:00:00Z",
    "category": "Vocal",
    "tags": ["clarity", "air"],
    "bands": [...]
  }
}
```

### Export Handler

```javascript
class PresetIO {
  static export(preset) {
    return JSON.stringify({
      format: "fruity-parametric-eq-2-preset",
      formatVersion: "1.0",
      preset: preset.toJSON()
    }, null, 2);
  }

  static import(jsonString) {
    const data = JSON.parse(jsonString);

    // Validate format
    if (data.format !== "fruity-parametric-eq-2-preset") {
      throw new Error('Unknown preset format');
    }

    // Version compatibility check
    if (data.formatVersion !== "1.0") {
      console.warn(`Preset version ${data.formatVersion} may need migration`);
    }

    return HybridPreset.fromJSON(data.preset);
  }

  static exportToFile(preset, filename) {
    const json = PresetIO.export(preset);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();

    URL.revokeObjectURL(url);
  }
}
```

---

## Best Practices

1. **Version Your Presets** - Include format version for future compatibility
2. **Tag Liberally** - More tags = better discoverability
3. **Track Provenance** - Note which archetypes were used
4. **Support Both Patterns** - Archetype references + custom settings
5. **Validate on Load** - Check against schema and band definitions
6. **Scale by Context** - Different gain ranges for track/bus/master
7. **Enable A/B Testing** - Let users compare presets easily
8. **Track Usage** - Surface most-used presets

---

## Next Steps

- See `assistant-mode-implementation.md` for auto-generating presets
- See `../api-specifications/data-model-overview.md` for data structures
- See `json-workflow.md` for data integration patterns
