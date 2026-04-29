# Fruity Scratcher - Preset Taxonomy

## Overview

Fruity Scratcher has **minimal traditional preset functionality** compared to synthesizers or samplers. It does not ship with a library of factory presets. Instead, "presets" in Scratcher context refer to:

1. **Channel State Presets** — Saved FL Studio channel states with Scratcher loaded and configured
2. **Sample + Settings Combinations** — Specific samples loaded with parameter configurations
3. **Template Projects** — FL Studio projects with Scratcher instances preset for different tasks
4. **User-Created Configurations** — Documented parameter combinations (this guide provides these)

[SRC: IL-MAN — Scratcher does not have a preset browser like Sytrus or Harmor]

---

## Preset Categories

### 1. Performance Presets (Channel States)

**Purpose:** Ready-to-perform scratch setups for live use or production.

**Structure:**

| Preset Name | Sample Type | SPD | ACC | SEN | Use Case |
|-------------|-------------|-----|-----|-----|----------|
| **Boom-Bap Vocal Scratch** | Vocal stab (0.5-2 sec) | 1x | 80% | 60% | Classic hip-hop scratching |
| **Trap Tape Stop** | Full beat or 808 | 1x → 0x | 30% | N/A | Gradual tape stop effect |
| **Quick Brake** | Drum loop | 1x → 0x | 90% | N/A | Instant stop for builds |
| **Live DJ Direct-Drive** | Any sample | 1x | 85% | 65% | Modern turntable emulation |
| **Live DJ Belt-Drive** | Any sample | 1x | 35% | 55% | Vintage turntable feel |
| **Psychedelic Pitch Bend** | Vocal/synth (2-5 sec) | 0.5x-1.5x | 50% | N/A | Warped FX (requires FX chain) |
| **Lo-Fi Texture Wobble** | Jazz/ambient loop | 0.9x-1.1x | 35% | 45% | Vinyl warble effect |
| **Reverse Atmosphere** | Pad/vocal (3-8 sec) | -0.7x | 45% | N/A | Background reverse texture |

**How to save as preset:**
1. Configure Scratcher with desired sample and settings
2. Right-click channel button → Save channel state as...
3. Name it descriptively (e.g., "Scratcher - Boom Bap Vocal")
4. Load later via channel button → Browse channel presets

---

### 2. Technique Presets (Documented Workflows)

**Purpose:** Parameter combinations for specific scratch techniques (no sample dependency).

**Categories:**

#### A. Classic Turntablism
- **Baby Scratch:** SPD = 1x, ACC = 75%, SEN = 60% (simple forward-back)
- **Chirp Scratch:** SPD = 1x, ACC = 85%, SEN = 70% (quick forward-back-forward)
- **Transformer Scratch:** SPD = 1x, ACC = 80%, SEN = 65% + Hold button for rhythmic cuts
- **Scribble Scratch:** SPD = 1x, ACC = 90%, SEN = 75% (rapid back-and-forth)
- **Flare Scratch:** SPD = 1x, ACC = 85%, SEN = 70% + multiple Hold pulses

#### B. Tape Effects
- **Gradual Tape Stop:** SPD 1x → 0x (4-8 beats), ACC = 25-35%
- **Quick Tape Stop:** SPD 1x → 0x (1/2-1 beat), ACC = 85-95%
- **Reverse Start:** SPD 0x → 1x (2-4 beats), ACC = 40-60%
- **Backspin:** SPD 1x → -1x (1-2 beats), ACC = 70-85%
- **Spindown + Reverse:** SPD 1x → 0x → -1x (continuous automation), ACC = 30%

#### C. Creative Pitch Effects
- **Chipmunk Vocal:** SPD = 1.5x to 2x (static or automated)
- **Slow-Mo Vocal:** SPD = 0.3x to 0.5x
- **Pitch Wobble:** SPD automated 0.9x ↔ 1.1x (slow sine wave)
- **Pitch Rise:** SPD automated 0.8x → 1.3x (over 4-8 beats)
- **Unstable Pitch:** SPD random jumps (0.5x, 1x, 1.5x) via step sequencer automation

---

### 3. Vibe Presets (Genre/Mood Focused)

**Purpose:** Vibe-specific starting points for hip-hop/R&B production.

#### Moody Presets
- **Dark Tape Stop:** SPD 1x → 0x (6 beats), ACC = 25%, long reverb
- **Haunting Reverse Vocal:** SPD = -0.7x, reverb 50% mix
- **Pitch-Down Scratch:** SPD = 0.6x to 0.8x, minimal scratching
- **Minimal Texture:** SPD 0.85x ↔ 0.95x wobble, ACC = 35%
- **Reverse Swell:** SPD 0x → -1x (4 beats), ACC = 40%

#### Upbeat Presets
- **Rapid Vocal Cuts:** SPD = 1.1x, ACC = 90%, SEN = 70%
- **Quick Tape Stop:** SPD 1x → 0x (1 beat), ACC = 90%
- **Syncopated Scratch:** SPD = 1x, ACC = 85%, SEN = 75%, rhythmic cuts
- **Pitch Riser:** SPD 1x → 1.5x (2 beats), ACC = 80%

#### Psychedelic Presets
- **Warped Pitch Bend:** SPD 0.5x ↔ 1.5x (curved automation), ACC = 50%, heavy FX
- **Glitch Reverse:** SPD rapid -1x/-0.5x/0x jumps, ACC = 80%, glitchy
- **Feedback Loop Scratch:** SPD 0.8x-1.2x, feedback routing [UNVERIFIED]

#### Jazzy Presets
- **Lazy Tape Stop:** SPD 1x → 0.7x (4 beats), ACC = 30%
- **Swung Vocal Scratch:** SPD 0.95x-1.05x, ACC = 60%, SEN = 55%, swung timing
- **Texture Warble:** SPD 0.92x ↔ 1.08x (slow sine), ACC = 35%

#### Vibey Presets
- **Sustained Reverse Texture:** SPD = -0.7x, reverb 60% mix
- **Slow Pitch Drift:** SPD 0.95x → 1.05x (8 bars), ACC = 40%
- **Minimal Vocal Flutter:** SPD = 1x with occasional 0.9x dips, ACC = 55%

---

### 4. Template Projects

**Purpose:** Pre-built FL Studio projects with Scratcher instances ready for specific workflows.

**Recommended templates:**

#### Template 1: Live Scratch Performance
- **4 Scratcher instances** on separate channels
- Each loaded with different sample types (vocal, drum, FX, bass)
- All set to "Live DJ Direct-Drive" preset (ACC = 85%, SEN = 65%)
- MIDI mapping template for hardware controller (jog wheels → platter)
- Output routing to limiter (prevent clipping)

#### Template 2: Vibe Production Suite
- **5 Scratcher instances** (one per vibe: moody, upbeat, psychedelic, jazzy, vibey)
- Each pre-configured with vibe-specific settings
- FX chains pre-inserted (reverb, delay, EQ)
- Send routing for parallel processing
- Automation clips pre-created (ready to draw)

#### Template 3: Tape Stop Toolkit
- **3 Scratcher instances**
  - Gradual stop (ACC = 30%, automation ready)
  - Quick stop (ACC = 90%, automation ready)
  - Reverse start (ACC = 50%, automation ready)
- Insert slots for different sources (drums, bass, full mix)
- Output limiter

#### Template 4: Sample Flip Station
- **2 Scratcher instances** for creative sample manipulation
- Pre-routed to Edison for recording scratch performances
- FX chain: Scratcher → Reverb 2 → Delay 3 → Parametric EQ 2 → Limiter
- Automation clips for SPD, ACC, and FX parameters

**How to create templates:**
1. Set up Scratcher instances with desired configurations
2. Save as FL Studio project template
3. File → Save as template → Name it (e.g., "Scratcher - Live Performance")
4. Access via File → Templates

---

### 5. Wrapper Presets (FL Studio Channel States)

**Purpose:** Scratcher + FX chain presets for instant deployment.

**Recommended wrapper presets:**

| Preset Name | Scratcher Config | FX Chain | Use Case |
|-------------|------------------|----------|----------|
| **Psych Scratcher** | SPD varies, ACC = 50% | Reverb 2 (50%) → Delay 3 (30%) → Phaser | Psychedelic effects |
| **Lo-Fi Scratcher** | SPD wobble, ACC = 35% | Parametric EQ 2 (low-pass 6 kHz) → Effector (vinyl) | Jazzy/vibey texture |
| **Moody Scratcher** | SPD slow/reverse, ACC = 30% | Reverb 2 (60%, long decay) → Parametric EQ 2 (low-pass 5 kHz) | Dark atmospheres |
| **Upbeat Scratcher** | SPD 1x-1.3x, ACC = 90% | Parametric EQ 2 (boost 3-5 kHz) → Limiter | Energetic scratches |
| **Parallel Scratcher** | Any config | Scratcher → Send (reverb/delay) → Blend with dry | Creative FX mixing |

**How to save wrapper presets:**
1. Insert Scratcher on a channel
2. Add desired FX in insert slots
3. Configure Scratcher + FX parameters
4. Right-click channel → Save channel state as...
5. Name descriptively (e.g., "Scratcher - Psychedelic FX Chain")

---

## Preset Naming Conventions

**Recommended format:** `Scratcher - [Category] - [Descriptor]`

**Examples:**
- `Scratcher - Performance - Boom Bap Vocal`
- `Scratcher - Vibe - Moody Dark Stop`
- `Scratcher - FX Chain - Psychedelic Warp`
- `Scratcher - Technique - Lazy Jazz Stop`
- `Scratcher - Template - 4 Channel Live Setup`

**Why this matters:** Scratcher setups are context-dependent (sample + settings + FX). Clear naming prevents confusion.

---

## Preset Storage Locations

### FL Studio Channel States
- **Location:** `[FL Studio]\Data\Patches\Channel presets\Fruity Scratcher\`
- **Format:** `.fst` files (channel state)
- **Scope:** Scratcher + insert FX + routing

### FL Studio Project Templates
- **Location:** `[FL Studio]\Data\Projects\Templates\`
- **Format:** `.flp` files
- **Scope:** Full project with multiple Scratcher instances

### User Documentation (This Guide)
- **Location:** `02-Data/presets/` folder
- **Format:** Markdown/CSV files
- **Scope:** Parameter combinations and workflows (no actual saved files)

---

## Preset Limitations

**What Scratcher presets CANNOT do:**
- ❌ Save loaded samples (samples must be reloaded manually or via project save)
- ❌ Save automation clips (automation is project-specific)
- ❌ Save MIDI mappings (MIDI links are global FL Studio settings)
- ❌ Save DVS configurations (DVS routing is audio interface/FL Studio mixer routing)

**Workarounds:**
- Save samples in a dedicated "Scratcher Samples" folder with clear naming
- Save automation clips as score files or documented curves
- Document MIDI mappings in a separate "MIDI Setup" guide
- Save full FL Studio projects for complete scratch setups

---

## Creating Your Own Preset System

### Step 1: Sample Library Organization
```
Scratcher Samples/
├── Vocals/
│   ├── hey.wav
│   ├── yeah.wav
│   └── fresh.wav
├── Drums/
│   ├── kick.wav
│   ├── snare.wav
│   └── loop.wav
├── FX/
│   ├── riser.wav
│   └── crash.wav
└── Loops/
    ├── jazz_loop.wav
    └── ambient_pad.wav
```

### Step 2: Parameter Log
Create a spreadsheet or text file documenting your favorite settings:

| Sample Name | SPD | ACC | SEN | Vibe | Notes |
|-------------|-----|-----|-----|------|-------|
| hey.wav | 1x | 80% | 65% | Upbeat | Boom-bap vocal |
| ambient_pad.wav | -0.7x | 45% | N/A | Vibey | Reverse texture |
| jazz_loop.wav | 0.95x-1.05x | 35% | N/A | Jazzy | Warble automation |

### Step 3: Template Projects
Build 3-5 template projects for your most common workflows:
- Live performance
- Tape stop effects
- Sample flipping
- Vibe production
- Experimental FX

### Step 4: Document FX Chains
For each vibe, document the full signal chain:
```
Moody Scratcher Chain:
- Scratcher (SPD varies, ACC = 30%)
- Parametric EQ 2 (low-pass at 5 kHz, boost 200-400 Hz)
- Reverb 2 (60% mix, 4-sec decay, low damping)
- Limiter (-3 dB ceiling)
```

---

## Preset Sharing & Compatibility

**Sharing Scratcher setups:**
- ✅ Share channel state files (`.fst`)
- ✅ Share template projects (`.flp`)
- ✅ Share parameter documentation (this format)
- ❌ Cannot share samples (copyright/licensing issues)

**Compatibility notes:**
- Channel states work across FL Studio versions (usually)
- Template projects may break if plugins are missing
- Always include a "README" documenting sample sources and requirements

---

## Next Steps

1. Review vibe preset shortlist in `02_Vibe_Preset_Shortlist.md`
2. Build your own channel state library for common workflows
3. Create 2-3 template projects for your production style
4. Document your parameter combinations in a personal preset log

**Related files:**
- `01_Preset_Notes_And_Use.md` — Detailed preset usage guide
- `02_Vibe_Preset_Shortlist.md` — Quick vibe preset reference
- `01-Learning/Quick-Reference/02_Best_Settings_Starting_Points.md` — Parameter starting points

---

**Version:** 1.0  
**Last Updated:** 2026-02-03  
**Sources:** [IL-MAN], [REPUTABLE]
