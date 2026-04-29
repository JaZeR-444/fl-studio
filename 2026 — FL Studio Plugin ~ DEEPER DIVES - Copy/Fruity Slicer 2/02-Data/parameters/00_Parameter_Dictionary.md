# Fruity Slicer 2 - Parameter Dictionary

## Overview

Fruity Slicer 2 parameters control slice detection, playback, time-stretching, envelopes, and chromatic mapping. This dictionary documents each parameter with vibe impact and mix impact tags.

[SRC: IL-MAN - Fruity Slicer documentation]

---

## Global Parameters

### Chromatic Mode (Toggle)
**Type**: On/Off Switch  
**Location**: Top toolbar  
**Default**: OFF  
**Function**: When ON, plays the selected slice chromatically across the keyboard (C5 = original pitch, C6 = +12 semitones, etc.)  

**Vibe Impact**: 🎵🎵🎵🎵🎵 (CRITICAL)
- **Moody**: Enable for pitched-down melodic chops (-12 semitones)
- **Upbeat**: Enable for pitched-up stabs (+5 semitones)
- **Psychedelic**: Enable for atonal/microtonal experiments
- **Jazzy**: Enable for chord progressions (Dm7, G7, Cmaj7)
- **Vibey**: Enable for static pad notes (no pitch variation)

**Mix Impact**: Melodic, Harmony, Tonality  
**Automation**: Common (switch between chromatic and rhythmic modes mid-track)  
**Pro Tip**: Use chromatic mode on vowel-rich vocal slices, rhythmic mode on percussive slices

---

### Auto-Detect Slices (Button)
**Type**: Action Button  
**Location**: Toolbar  
**Function**: Automatically detects transients and creates slices  

**Parameters**:
- **Threshold**: Sensitivity of transient detection (lower = more slices)
- **Min Slice Length**: Prevents too-short slices (default ~20ms)

**Vibe Impact**: ⚙️⚙️⚙️ (Workflow, not direct vibe)
- **Upbeat**: Use high threshold for clean, bouncy slices
- **Psychedelic**: Use low threshold, then delete random slices for chaos
- **Jazzy**: Manual slicing preferred for musical control
- **Moody/Vibey**: Manual slicing to isolate sustain portions

**Mix Impact**: Workflow efficiency  
**Automation**: N/A (one-time action)  
**Pro Tip**: Auto-detect is fast, but manual slicing gives better musical control

---

### Pitch (Semitones)
**Type**: Knob/Slider  
**Range**: -24 to +24 semitones  
**Default**: 0 (original pitch)  
**Function**: Global pitch shift for all slices (or selected slice in chromatic mode)  

**Vibe Impact**: 🎵🎵🎵🎵
- **Moody**: -7 to -12 semitones (darker, heavier)
- **Upbeat**: +3 to +7 semitones (brighter, energetic)
- **Psychedelic**: Automate wildly (-12 to +12)
- **Jazzy**: 0 semitones (use chromatic mode for chord changes)
- **Vibey**: -3 to +0 semitones (neutral to slightly dark)

**Mix Impact**: Tonality, Brightness, Energy  
**Automation**: Very common (pitch dives, risers, creative FX)  
**Pro Tip**: Extreme pitch shifts (+/-12) work best with Elastique Pro time-stretch mode

---

### Time-Stretch Mode
**Type**: Dropdown Menu  
**Options**:
- **Resample** (Vintage, no formant preservation, artifacts at extreme settings)
- **Elastique Efficient** (Fast, good for rhythmic material)
- **Elastique Pro** (Highest quality, best for melodic/vocal material)
- **Elastique Vintage** (Lo-fi character, intentional artifacts)

**Default**: Elastique Efficient [UNVERIFIED - confirm in FL Studio]  
**Function**: Algorithm used for time-stretching and pitch-shifting  

**Vibe Impact**: 🎚️🎚️🎚️🎚️
- **Moody**: Elastique Pro (clean, emotional vocal stretches)
- **Upbeat**: Elastique Efficient (fast, tight)
- **Psychedelic**: Elastique Vintage or Resample (embrace artifacts)
- **Jazzy**: Elastique Pro (preserve musical quality)
- **Vibey**: Elastique Pro (smooth, textural)

**Mix Impact**: Audio Quality, Artifacts, Character  
**Automation**: Rare (set per project)  
**Pro Tip**: Resample mode can create "broken" lo-fi textures for psychedelic vibes

---

### BPM (Project Tempo)
**Type**: Number Input  
**Range**: 20-999 BPM  
**Default**: Current project BPM  
**Function**: Tells Slicer 2 the source loop's BPM for time-stretch calculations  

**Vibe Impact**: ⚙️⚙️ (Technical, not direct vibe)
- **All vibes**: Correct BPM ensures slices fit the project tempo

**Mix Impact**: Timing, Groove  
**Automation**: N/A  
**Pro Tip**: If sample is from a different BPM, enter original BPM to preserve groove

---

## Per-Slice Envelope Parameters

### Attack (Per-Slice)
**Type**: Graphical Envelope Handle  
**Range**: 0ms to ~500ms  
**Default**: 0ms (instant)  
**Function**: Fade-in time when slice is triggered  

**Vibe Impact**: 🎚️🎚️🎚️🎚️🎚️ (CRITICAL)
- **Moody**: 80-120ms (slow, emotional fade-in)
- **Upbeat**: 0ms (instant, percussive)
- **Psychedelic**: Random per slice (0-200ms, create instability)
- **Jazzy**: 5-10ms (slight softness, like real instrument)
- **Vibey**: 100-200ms (gradual, washy)

**Mix Impact**: Transient, Punch, Percussiveness  
**Automation**: Rare (set per slice, not automated)  
**Pro Tip**: Attack >50ms turns percussive samples into pads

---

### Release (Per-Slice)
**Type**: Graphical Envelope Handle  
**Range**: 0ms to ~2000ms  
**Default**: ~200ms  
**Function**: Fade-out time after note-off or slice end  

**Vibe Impact**: 🎚️🎚️🎚️🎚️🎚️ (CRITICAL)
- **Moody**: 400-1000ms (long sustain, emotional drag)
- **Upbeat**: 50-100ms (tight, bouncy)
- **Psychedelic**: 500-1000ms + reverb (create wash)
- **Jazzy**: 300-600ms (natural instrument decay)
- **Vibey**: 600-1200ms (atmospheric tail)

**Mix Impact**: Sustain, Space, Tightness  
**Automation**: Rare  
**Pro Tip**: Long release requires reverb to avoid dry cutoff

---

### Filter Cutoff (Per-Slice)
**Type**: Graphical Envelope Handle  
**Range**: 20Hz to 20kHz  
**Default**: Fully open (no filtering)  
**Function**: Dynamically filters slice from start to end (envelope-based)  

**Vibe Impact**: 🎚️🎚️🎚️🎚️
- **Moody**: Low-pass 800Hz-1.5kHz (dark, muffled)
- **Upbeat**: High-pass 300Hz, boost 2-5kHz (bright, clear)
- **Psychedelic**: High resonance, automate cutoff wildly
- **Jazzy**: OFF or very subtle (let sample breathe)
- **Vibey**: Band-pass 500Hz-3kHz (mid-range pocket)

**Mix Impact**: Brightness, Darkness, Tone Color  
**Automation**: Common (filter sweeps)  
**Pro Tip**: Use resonance sparingly—too much sounds harsh

---

### Volume (Per-Slice)
**Type**: Graphical Envelope Handle  
**Range**: 0% to 100%  
**Default**: 100%  
**Function**: Volume envelope from slice start to end  

**Vibe Impact**: 🎚️🎚️
- **Moody/Vibey**: Lower volume (30-60%) for background texture
- **Upbeat**: Full volume (90-100%) for punch
- **Psychedelic**: Random per slice (create dynamics chaos)
- **Jazzy**: Dynamic variation (70-105%) for human feel

**Mix Impact**: Dynamics, Loudness, Balance  
**Automation**: Common (swell effects)  
**Pro Tip**: Automate volume envelope for "swell from silence" effects

---

### Pan (Per-Slice)
**Type**: Graphical Envelope Handle  
**Range**: 100% L to 100% R  
**Default**: Center  
**Function**: Stereo position from slice start to end  

**Vibe Impact**: 🎚️🎚️🎚️
- **Moody**: Center or subtle auto-pan (10-20% width)
- **Upbeat**: Hard L/R alternation or rapid auto-pan
- **Psychedelic**: Random hard panning per slice
- **Jazzy**: Slight stereo width (don't hard pan)
- **Vibey**: Slow auto-pan or static stereo width

**Mix Impact**: Width, Stereo Field, Space  
**Automation**: Common (auto-pan effects)  
**Pro Tip**: Hard pan (100% L/R) can cause mono compatibility issues—check in mono

---

## Playback Parameters

### Reverse (Per-Slice Toggle)
**Type**: Button (per slice)  
**Function**: Plays slice in reverse  

**Vibe Impact**: 🎚️🎚️🎚️🎚️
- **Moody**: Reverse 1-2 slices for eerie nostalgia
- **Upbeat**: Reverse quick slices for "rewind" stutter FX
- **Psychedelic**: Reverse 50% of slices for disorientation
- **Jazzy**: Rarely used (breaks musical flow)
- **Vibey**: Reverse long texture slices for dreamy wash

**Mix Impact**: Texture, Surprise, Disorientation  
**Automation**: N/A (set per slice)  
**Pro Tip**: Reversed slices create natural "build-up" swells

---

### Solo/Mute (Per-Slice)
**Type**: Button (per slice)  
**Function**: Isolate or silence individual slices  

**Vibe Impact**: ⚙️ (Workflow)  
**Mix Impact**: Arrangement  
**Automation**: N/A  
**Pro Tip**: Solo slices to find the "perfect" slice for chromatic mode

---

## Advanced Parameters

### Formant Preservation
**Type**: Toggle (in time-stretch options) [UNVERIFIED - location may vary]  
**Default**: ON  
**Function**: Preserves vocal formants when pitch-shifting (prevents "chipmunk" effect)  

**Vibe Impact**: 🎚️🎚️🎚️
- **Moody/Vibey**: OFF (let pitch-down sound unnatural, heavier)
- **Upbeat**: ON (keep vocals intelligible when pitched up)
- **Psychedelic**: OFF (embrace weirdness)
- **Jazzy**: ON (preserve musical quality)

**Mix Impact**: Vocal Quality, Naturalness  
**Automation**: N/A  
**Pro Tip**: Turning formant OFF at -12 semitones creates "demonic" vocals

---

### Slice Snap (Grid Quantization)
**Type**: Dropdown  
**Options**: 1/4, 1/8, 1/16, 1/32, etc.  
**Default**: 1/16  
**Function**: Quantizes slice start points to grid  

**Vibe Impact**: 🎚️🎚️
- **Upbeat**: 1/16 (tight, locked)
- **Jazzy**: 1/8 or OFF (allow swing, loose timing)
- **Psychedelic**: OFF (embrace chaos)
- **Moody/Vibey**: 1/8 or 1/4 (spacious)

**Mix Impact**: Timing, Groove, Tightness  
**Automation**: N/A  
**Pro Tip**: Disable snap for manual, humanized slice placement

---

## Output Parameters

### Master Volume
**Type**: Knob  
**Range**: 0% to 100%+  
**Default**: 80%  
**Function**: Final output level of all slices  

**Vibe Impact**: 🎚️
- Adjust per mix context

**Mix Impact**: Loudness  
**Automation**: Common (for mix automation)  
**Pro Tip**: Leave headroom (70-80%) to avoid clipping on peaks

---

### Dry/Wet (if routed as effect) [UNVERIFIED]
**Note**: Slicer 2 is typically used as an instrument, not an insert effect. Dry/Wet may not apply.

---

## Parameter Combinations for Quick Vibes

### Moody Combo
- Pitch: -12 semitones
- Attack: 100ms
- Release: 800ms
- Filter: Low-pass 1.2kHz
- Chromatic: ON

### Upbeat Combo
- Pitch: +5 semitones
- Attack: 0ms
- Release: 80ms
- Filter: High-pass 300Hz
- Chromatic: OFF (rhythmic)

### Psychedelic Combo
- Pitch: Automate wildly
- Attack: Random per slice
- Release: 800ms
- Filter: High resonance, automate cutoff
- Chromatic: ON (play atonal)

### Jazzy Combo
- Pitch: 0 semitones
- Attack: 10ms
- Release: 500ms
- Filter: OFF
- Chromatic: ON (play chords)

### Vibey Combo
- Pitch: -3 semitones
- Attack: 150ms
- Release: 900ms
- Filter: Band-pass 1kHz
- Chromatic: ON (static pad note)

---

## Automation Priority

**Most Commonly Automated**:
1. Pitch (for risers, dives, creative FX)
2. Filter Cutoff (for sweeps)
3. Volume (for swells)
4. Pan (for auto-pan effects)
5. Chromatic Mode Toggle (switch between melodic/rhythmic)

**Rarely Automated**:
- Attack/Release (set per slice, not per note)
- BPM
- Time-Stretch Mode

---

## Verification Checklist

**How to verify parameter behavior in FL Studio:**
1. ✅ Load sample into Slicer 2 → confirm auto-detect creates slices
2. ✅ Enable Chromatic mode → play C5 (original), C6 (+12) → confirm pitch
3. ✅ Adjust Attack to 200ms → confirm slow fade-in
4. ✅ Set Release to 50ms → confirm tight, short decay
5. ⚠️ Test Formant Preservation toggle (may require manual testing)
6. ✅ Automate Pitch parameter → confirm real-time pitch change
7. ✅ Reverse a slice → confirm backward playback

---

**Last Updated**: 2026-02-03  
**Source**: IL-MAN, user testing  
**Unverified**: Formant preservation toggle location, Dry/Wet applicability
