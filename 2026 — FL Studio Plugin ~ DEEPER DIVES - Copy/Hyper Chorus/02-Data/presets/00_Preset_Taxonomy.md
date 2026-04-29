# Preset Taxonomy

## Overview

Hyper Chorus does not have traditional user-savable presets within the plugin. However, the following preset categories can be created and managed through FL Studio's wrapper preset system:

1. **Wrapper Presets** - Save via FL Studio's plugin wrapper (preset dropdown)
2. **Channel State Files** - Save channel settings including Hyper Chorus
3. **Project Templates** - Include preferred Hyper Chorus starting states
4. **Patcher Presets** - If used inside Patcher for complex routing

---

## Preset Categories by Function

### 1. Voice-Count Based

| Category | Voices | Characteristics |
|----------|--------|-----------------|
| **Clean** | 4 | Subtle, controlled, lower CPU |
| **Dense** | 8 | Maximum width and thickness |

**Use Case:** Switch between categories based on source density and CPU budget.

---

### 2. Application-Based

| Category | Primary Use | Key Characteristics |
|----------|-------------|---------------------|
| **Vocal** | Lead/background vocals | HP 250Hz+, subtle modulation, 8 voices |
| **Synth** | Leads, pads, bass | Variable by synth type |
| **Drum** | Drum bus/parallel | HP 300Hz+, 4 voices, protect transients |
| **Guitar** | Electric/acoustic | 4 voices, natural settings |
| **FX** | Experimental textures | Aggressive, high feedback, noise |

---

### 3. Genre-Based

| Category | Genre Context | Signature Elements |
|----------|---------------|-------------------|
| **Hip-Hop** | Modern trap, boom-bap | Subtle widening, vocal thickening |
| **R&B** | Contemporary, soul | Warm, smooth ensemble |
| **EDM** | House, trance, dubstep | Supersaw settings, aggressive modulation |
| **Pop** | Mainstream pop | Clean, present, subtle enhancement |
| **Lo-Fi** | Chill, bedroom | Noise, filtering, vintage character |
| **Jazz** | Traditional, fusion | Restrained, natural, 4 voices |

---

### 4. Vibe-Based

See `02_Vibe_Preset_Shortlist.md` for detailed settings. Categories:

- Moody
- Upbeat
- Psychedelic
- Jazzy
- Vibey

---

### 5. Technique-Based

| Category | Technique | Key Settings |
|----------|-----------|--------------|
| **Supersaw** | Trance lead thickening | 8 voices, high modulation, medium feedback |
| **Dimension** | Subtle spatial enhancement | 4 voices, low feedback, no auto-pan |
| **Doubler** | Vocal thickening | 8 voices, short delay, low modulation |
| **Auto-Pan** | Stereo movement only | Low delay/modulation, high pan amount/speed |
| **Resonator** | Metallic textures | High delay + feedback, 8 voices |
| **Lo-Fi** | Vintage texture | Noise, filtering, 8 voices |

---

## Naming Convention

### Wrapper Preset Naming

Format: `[Category]_[Source]_[Characteristic]`

Examples:
- `Vocal_Lead_Subtle`
- `Synth_Supersaw_Aggressive`
- `Drum_Bus_Parallel`
- `FX_Psychedelic_Swirl`
- `Moody_Pad_Atmosphere`

### Project Template Naming

Format: `[Genre]_HyperChorus_[Purpose]`

Examples:
- `HipHop_Template_HyperChorus_Send`
- `Trap_Lead_HyperChorus_Supersaw`
- `RnB_Vocal_HyperChorus_Ensemble`

---

## Preset Organization Strategy

### Browser Structure (FL Studio)

```
Plugin Database > Effects > Modulation > Hyper Chorus Presets
├── 01_Essentials/
│   ├── Default_Starting_Point
│   ├── Safe_Widening
│   └── Bass_Protection
├── 02_Vocals/
│   ├── Lead_Subtle
│   ├── Lead_Thick
│   ├── Background_Ensemble
│   └── AdLib_Effect
├── 03_Synths/
│   ├── Supersaw_Classic
│   ├── Pad_Ambient
│   ├── Lead_Wide
│   └── Bass_Chorus (use with caution)
├── 04_Drums/
│   ├── Bus_Parallel
│   ├── Hats_Wide
│   └── Snare_Thick
├── 05_Vibes/
│   ├── Moody_Atmosphere
│   ├── Upbeat_Energy
│   ├── Psychedelic_Swirl
│   ├── Jazzy_Natural
│   └── Vibey_Warm
└── 06_FX/
    ├── Metallic_Resonance
    ├── AutoPan_Only
    └── LoFi_Texture
```

---

## Creating Wrapper Presets

### Step-by-Step

1. **Configure Hyper Chorus** with desired settings
2. **Click plugin wrapper menu** (top-left corner of plugin window)
3. **Select "Save preset as..."**
4. **Navigate to:** `Plugin Database > Effects > Modulation`
5. **Create folder:** `Hyper Chorus Presets` (if not exists)
6. **Name preset** following convention above
7. **Click Save**

### Best Practices

- Save presets with **Dry/Wet at 100%** for send/return use
- Save presets with **contextual Wet/Dry** for insert use
- Include **HP filter settings** appropriate for the source
- Test preset on multiple sources before finalizing

---

## Template State Strategy

### Channel State Approach

For frequently used configurations, save entire channel states:

1. **Configure channel** with Hyper Chorus and supporting plugins
2. **Right-click channel** in Channel Rack
3. **Select "Save channel state as..."**
4. **Name descriptively** (e.g., "Vocal Chain with Hyper Chorus")

### Project Template Approach

For starting new projects:

1. **Set up mixer** with Hyper Chorus on dedicated send
2. **Configure default settings** for common sources
3. **Save as project template:** `File > Export > Project template`
4. **Name:** Include genre/style (e.g., "Hip-Hop Template with Chorus Send")

---

## Version Control

Track preset versions in project documentation:

```
Preset: Vocal_Lead_Subtle_v1.2
Date: 2026-02-03
Changes: Increased HP from 200Hz to 300Hz for cleaner lows
Tested on: Male vocal, Female vocal
Status: Active
```

---

**Version:** 1.0
**Last Updated:** 2026-02-03
