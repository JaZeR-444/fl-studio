# Fruity Slicer 2 - Preset Taxonomy

## Preset Philosophy

Fruity Slicer 2 does NOT have a traditional "preset browser" like synthesizers. Instead, presets are saved as:
1. **Project States** (entire plugin state within a project file)
2. **Channel Presets** (save/load from Channel Settings → Save/Load)
3. **Custom Sample Banks** (pre-sliced samples with envelope settings)

[SRC: IL-MAN - Slicer 2 does not have traditional preset management]

This document organizes conceptual "preset archetypes" for users to build and save manually.

---

## Taxonomy Structure

### Tier 1: By Primary Function

**1.1 Chromatic Melodic Instruments**
- Vocal chop pads
- Bass note instruments
- Melodic texture players
- Chord stab instruments

**1.2 Rhythmic Beat Manipulation**
- Breakbeat re-arrangers
- Stutter edit tools
- Glitch rhythm generators
- Drum fill creators

**1.3 Hybrid (Melodic + Rhythmic)**
- Pitched snare rolls
- Melodic drum hits
- Vocal percussion (beatbox slices)

---

### Tier 2: By Source Material

**2.1 Vocal Sources**
- Single-word chops ("yeah," "oh," "ahhh")
- Phrase slicers (full sentences)
- Ad-lib choppers (vocal runs, riffs)
- Vocal percussion (clicks, pops, breaths)

**2.2 Drum/Percussion Sources**
- Breakbeat loops
- Single-hit kits (sliced break → individual drums)
- Percussion loops (congas, shakers)
- 808/909 one-shots (for pitched rolls)

**2.3 Melodic Sources**
- Bass notes (upright bass, 808, synth bass)
- Chord stabs (Rhodes, piano, guitar)
- Synth textures (pads, leads)
- Orchestral hits (strings, brass)

**2.4 Texture/Atmosphere Sources**
- Vinyl crackle loops
- Field recordings
- Synth drones
- Noise/FX samples

---

### Tier 3: By Vibe/Genre

**3.1 Moody / Dark**
- Pitched-down vocal pads
- Reverse texture slices
- Stretched minor-key chops

**3.2 Upbeat / Energetic**
- Rapid vocal stutters
- Bright percussion slices
- Fast melodic stabs

**3.3 Psychedelic / Experimental**
- Extreme time-stretched slices
- Glitch/artifact-heavy settings
- Atonal chromatic triggers

**3.4 Jazzy / Musical**
- Swung chord progressions
- Natural instrument slices (Rhodes, upright bass)
- Dynamic velocity layers

**3.5 Vibey / Atmospheric**
- Long-release texture loops
- Reverb-soaked slices
- Repetitive background layers

---

## Archetype Presets (User Must Create/Save)

### Archetype 1: "Dark Vocal Pad" (Moody)
**Function**: Chromatic melodic instrument  
**Source**: Vocal phrase with sustained vowel  
**Settings**:
- Chromatic: ON
- Pitch: -12 semitones
- Attack: 100ms
- Release: 800ms
- Filter: Low-pass 1.2kHz
- Time-Stretch: Elastique Pro

**Use Case**: Intro/verse background, emotional hooks  
**Save Location**: Channel preset → "Dark Vocal Pad.fsc" [UNVERIFIED - confirm .fsc extension]

---

### Archetype 2: "Bounce Stutter" (Upbeat)
**Function**: Rhythmic beat manipulation  
**Source**: Short vocal syllable ("yeah," "uh")  
**Settings**:
- Chromatic: OFF
- Pitch: +5 semitones
- Attack: 0ms
- Release: 80ms
- Filter: High-pass 300Hz
- Trigger: 1/16 note stutters

**Use Case**: Drops, ad-lib fills, energy boosts  
**Save Location**: Channel preset → "Bounce Stutter.fsc"

---

### Archetype 3: "Warp Zone" (Psychedelic)
**Function**: Chromatic melodic (experimental)  
**Source**: Any sample (vocal, synth, drum)  
**Settings**:
- Chromatic: ON
- Pitch: Automate -12 to +12
- Attack: Random per slice (0-200ms)
- Release: 800ms
- Filter: High resonance, automate cutoff
- Time-Stretch: Elastique Vintage (artifacts)

**Use Case**: Build-ups, breakdowns, experimental sections  
**Save Location**: Channel preset → "Warp Zone.fsc"

---

### Archetype 4: "Rhodes Swing" (Jazzy)
**Function**: Chromatic chord instrument  
**Source**: Rhodes piano chord stab or bass note  
**Settings**:
- Chromatic: ON
- Pitch: 0 semitones
- Attack: 10ms
- Release: 500ms
- Filter: OFF
- Piano Roll: 58% swing, velocity 80-105

**Use Case**: Jazz-rap chords, lo-fi hip-hop progressions  
**Save Location**: Channel preset → "Rhodes Swing.fsc"

---

### Archetype 5: "Atmosphere Pad" (Vibey)
**Function**: Rhythmic texture loop (or single chromatic note)  
**Source**: Textural sample (vinyl noise, synth drone)  
**Settings**:
- Chromatic: ON (for static pad note)
- Pitch: -3 semitones
- Attack: 150ms
- Release: 900ms
- Filter: Band-pass 500Hz-3kHz
- Volume: -8dB in mix

**Use Case**: Background atmosphere, textural layers  
**Save Location**: Channel preset → "Atmosphere Pad.fsc"

---

### Archetype 6: "Breakbeat Flip" (Rhythmic)
**Function**: Beat re-arranger  
**Source**: Drum break loop (e.g., Amen, Funky Drummer)  
**Settings**:
- Chromatic: OFF
- Auto-Detect: ON (high threshold for clean slices)
- Pitch: 0 semitones
- Attack: 0ms
- Release: 50ms
- Drag slices to re-order

**Use Case**: Boom-bap drums, jungle/DnB breaks  
**Save Location**: Channel preset → "Breakbeat Flip.fsc"

---

### Archetype 7: "Pitched 808 Roll" (Hybrid)
**Function**: Chromatic melodic + rhythmic  
**Source**: Single 808 kick hit  
**Settings**:
- Chromatic: ON
- Pitch: 0 semitones (transpose via piano roll)
- Attack: 0ms
- Release: 300ms
- Trigger: 1/16 or 1/32 rolls
- Play pitch-dive sequences (C → G → D → A)

**Use Case**: Trap 808 rolls, melodic fills  
**Save Location**: Channel preset → "Pitched 808 Roll.fsc"

---

## Preset Naming Convention

**Suggested Format**: `[Function]_[Vibe]_[Source]_[InitialSettings].fsc`

**Examples**:
- `Chromatic_Moody_VocalPad_Minus12.fsc`
- `Rhythmic_Upbeat_VocalStutter_Plus5.fsc`
- `Chromatic_Jazzy_RhodesChord_Swing58.fsc`
- `Rhythmic_Breakbeat_AmenFlip_Original.fsc`

---

## Factory Presets (if any exist)

[UNVERIFIED - Fruity Slicer 2 may not ship with factory presets]

**To Check**: Open Slicer 2 → look for "Presets" dropdown or "Load" button. If none exist, all presets are user-created.

**How to Verify in FL Studio**:
1. Load Fruity Slicer 2
2. Check Channel Settings menu → look for "Load preset" option
3. If no presets folder exists, create custom presets manually

---

## Preset Organization Strategy

### By Project Type
- **Hip-Hop Projects**: Store vocal chops, 808 rolls, breakbeat flips
- **R&B Projects**: Store moody vocal pads, jazzy Rhodes chops
- **Experimental Projects**: Store psychedelic warps, glitch stutters

### By Source Material Library
- **Vocals Folder**: All vocal-based presets
- **Drums Folder**: All breakbeat/percussion presets
- **Melodic Folder**: All bass/chord/lead presets
- **Textures Folder**: All atmospheric/FX presets

### By Vibe Category
- **Moody_Presets/**
- **Upbeat_Presets/**
- **Psychedelic_Presets/**
- **Jazzy_Presets/**
- **Vibey_Presets/**

---

## Workflow: Creating a Custom Preset

1. **Load Source Sample** into Slicer 2
2. **Slice** (auto-detect or manual)
3. **Configure Settings** (chromatic, pitch, envelopes, filter)
4. **Test in Context** (play in piano roll or trigger rhythmically)
5. **Save Channel Preset**:
   - Right-click plugin header → "Save preset as..."
   - Name using convention above
   - Store in organized folder structure
6. **Document Settings** in preset notes (if FL Studio supports) [UNVERIFIED]

---

## Preset Sharing & Collaboration

**Exporting Presets**:
- Channel presets are stored in FL Studio user data folder
- Path (Windows): `C:\Users\[Username]\Documents\Image-Line\FL Studio\Presets\Plugin presets\Fruity\Fruity Slicer 2\` [UNVERIFIED - confirm path]

**Sharing with Others**:
- Export channel preset file (.fsc or equivalent)
- Include source sample (or document sample source)
- Share settings screenshot or markdown file

---

## Limitations & Workarounds

**Limitation 1**: No global preset browser  
**Workaround**: Use FL Studio's Channel Settings preset system, organize manually

**Limitation 2**: Presets don't include source sample  
**Workaround**: Document sample source in preset name or notes file

**Limitation 3**: No preset morphing or randomization  
**Workaround**: Create multiple variations of same preset archetype, manually blend

---

## Verification Checklist

**How to verify preset system in FL Studio:**
1. ✅ Load Slicer 2 → configure settings → right-click header → confirm "Save preset" option
2. ⚠️ Check if factory presets exist in plugin
3. ⚠️ Confirm file extension for saved presets (.fsc, .fst, or other)
4. ⚠️ Locate preset storage folder in FL Studio user data
5. ✅ Save test preset → reload → confirm settings are preserved

---

**Last Updated**: 2026-02-03  
**Source**: IL-MAN, user workflow  
**Unverified**: Preset file extension, factory preset existence, storage path
