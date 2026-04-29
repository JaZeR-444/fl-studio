# Fruity Soft Clipper: Preset Taxonomy

## Preset Philosophy

**Fruity Soft Clipper has NO factory presets.**

Why? The plugin is intentionally minimal (2 knobs). Image-Line expects users to create their own presets based on workflow needs.

[SRC: IL-MAN]

---

## Recommended User Preset Categories

### Category 1: Master Bus Presets

**Master - Transparent (+1 dB)**
- Threshold: -0.5 dB
- Post Gain: +1.0 dB
- Use: Gentle loudness boost for any genre

**Master - Competitive (+2 dB)**
- Threshold: -1.0 dB
- Post Gain: +2.0 dB
- Use: Streaming-ready loudness (Trap, Pop)

**Master - Aggressive (+3 dB)**
- Threshold: -2.0 dB
- Post Gain: +3.0 dB
- Use: Maximum competitive loudness (modern Hip-Hop)

**Master - Moody (Minimal)**
- Threshold: -0.3 dB
- Post Gain: 0 dB
- Use: Dark R&B, introspective tracks

**Master - Psychedelic (Extreme)**
- Threshold: -6.0 dB
- Post Gain: +2.0 dB
- Use: Intentional distortion, experimental

---

### Category 2: Drum Bus Presets

**Drums - Light Glue**
- Threshold: -2.0 dB
- Post Gain: +0.5 dB
- Use: Subtle cohesion without aggression

**Drums - Medium Glue**
- Threshold: -3.0 dB
- Post Gain: +1.0 dB
- Use: Standard drum bus treatment

**Drums - Heavy Slam**
- Threshold: -5.0 dB
- Post Gain: +2.0 dB
- Use: Upbeat Hip-Hop, Pop

**Drums - Lo-Fi Crunch**
- Threshold: -4.0 dB
- Post Gain: 0 dB
- Use: Vintage, degraded character

---

### Category 3: Bass Presets

**808 - Clean Warmth**
- Threshold: -2.0 dB
- Post Gain: 0 dB
- Use: Gentle saturation (R&B, vibey tracks)

**808 - Medium Distortion**
- Threshold: -4.0 dB
- Post Gain: +1.0 dB
- Use: Moderate aggression

**808 - Trap Destruction**
- Threshold: -8.0 dB
- Post Gain: +3.0 dB
- Use: Signature "broken speaker" bass (boost input +6 dB first)

---

### Category 4: Vocal Presets

**Vocal - Subtle Smooth**
- Threshold: -0.5 dB
- Post Gain: 0 dB
- Use: Gentle peak control (before reverb)

**Vocal - De-Ess via Clip**
- Threshold: -1.0 dB
- Post Gain: 0 dB
- Use: Tame sibilance without de-esser

---

### Category 5: Parallel Saturation Presets

**Parallel - Warm 30%**
- Threshold: -8.0 dB
- Post Gain: 0 dB
- Use: Blend at 30% for warmth

**Parallel - Aggressive 50%**
- Threshold: -12.0 dB
- Post Gain: 0 dB
- Use: Blend at 50% for heavy saturation

---

## How to Save Presets in FL Studio

### Method 1: Plugin Preset (Recommended)
1. Set Threshold and Post Gain to desired values
2. Click the **preset dropdown** (top-left of plugin window)
3. Select **"Save preset as..."**
4. Name it descriptively (e.g., "Master - Trap +2dB")
5. Click Save

**Location:** `C:\Users\[Username]\Documents\Image-Line\FL Studio\Presets\Plugin presets\Fruity\Fruity Soft Clipper\`

### Method 2: Mixer Track Preset
1. Configure Soft Clipper on a mixer track
2. Right-click the **mixer track header**
3. Select **"Save mixer track state as..."**
4. Name it (e.g., "Drum Bus with Soft Clipper")
5. Click Save

**Benefit:** Saves entire mixer track (all FX, routing, settings)

### Method 3: Project Template
1. Create a new project
2. Set up Soft Clipper on Master, Drum Bus, etc.
3. **File → Save as template...**
4. Name it (e.g., "Trap Beat Template")
5. Every new project can load this template

**Benefit:** Fastest workflow (everything pre-configured)

[SRC: IL-MAN]

---

## Preset Naming Conventions

### Recommended Format
`[Application] - [Vibe/Genre] ([Loudness Gain])`

**Examples:**
- `Master - Trap (+2dB)`
- `Drums - Upbeat Heavy (+1.5dB)`
- `808 - Distorted Trap (+3dB)`
- `Vocal - Moody Smooth (0dB)`
- `Parallel - Warm 30% Blend`

### Tags to Include
- **Application:** Master, Drums, 808, Vocal, Parallel, etc.
- **Vibe/Genre:** Trap, R&B, Moody, Upbeat, Lo-Fi, etc.
- **Loudness Gain:** How much Post Gain is applied

---

## Preset Workflow Tips

### Tip 1: Build a Personal Library
- Save 10-15 presets covering your common use cases
- Revisit and refine quarterly based on new techniques

### Tip 2: Use Mixer Track States
- Faster than plugin presets (saves routing + all FX)
- Example: "Drum Bus Template" = Compressor + EQ + Soft Clipper

### Tip 3: Template Projects
- Create genre-specific templates (Trap, R&B, Lo-Fi)
- Soft Clipper pre-loaded on Master, Drum Bus, 808 Bus

### Tip 4: Version Your Presets
- "Master - Trap v1 (+2dB)"
- "Master - Trap v2 (+2.5dB)"
- Helps track iterations and A/B test

[SRC: REPUTABLE]

---

## Preset Organization Structure

```
Fruity Soft Clipper Presets/
├── 01_Master/
│   ├── Master - Transparent (+1dB).fst
│   ├── Master - Competitive (+2dB).fst
│   ├── Master - Aggressive (+3dB).fst
│   ├── Master - Moody (Minimal).fst
│   └── Master - Psychedelic (Extreme).fst
├── 02_Drums/
│   ├── Drums - Light Glue.fst
│   ├── Drums - Medium Glue.fst
│   ├── Drums - Heavy Slam.fst
│   └── Drums - Lo-Fi Crunch.fst
├── 03_Bass/
│   ├── 808 - Clean Warmth.fst
│   ├── 808 - Medium Distortion.fst
│   └── 808 - Trap Destruction.fst
├── 04_Vocal/
│   ├── Vocal - Subtle Smooth.fst
│   └── Vocal - De-Ess via Clip.fst
└── 05_Parallel/
    ├── Parallel - Warm 30%.fst
    └── Parallel - Aggressive 50%.fst
```

**Folder Hierarchy = Faster Preset Loading**

[SRC: REPUTABLE]

---

## Preset Anti-Patterns (Don't Do This)

### ❌ Saving "Default" Preset
**Why:** Threshold 0 dB, Post 0 dB = bypass (useless preset)

### ❌ Vague Names
**Bad:** "Preset 1," "Soft Clipper 01"  
**Good:** "Master - Trap (+2dB)"

### ❌ Too Many Presets
**Problem:** 100 presets = decision paralysis  
**Fix:** Keep 10-15 core presets, delete unused

### ❌ Not Testing Presets in Context
**Problem:** Preset works on one track, fails everywhere else  
**Fix:** Test preset on 3-5 different sources before saving

---

## Summary: Preset Strategy

> **Soft Clipper presets are workflow accelerators, not "magic settings."**
>
> Save 10-15 presets covering:
> - Master bus (3-4 loudness levels)
> - Drum bus (light/medium/heavy)
> - 808 bus (clean/medium/aggressive)
> - Vocal (gentle smoothing)
> - Parallel (blend presets)
>
> Use descriptive names. Organize by application. Revisit quarterly.

**Recommended Preset Count:** 10-15 total (no more)

[SRC: REPUTABLE]

---

**Version:** 1.0  
**Last Updated:** 2026-02-03  
**Coverage:** Complete
