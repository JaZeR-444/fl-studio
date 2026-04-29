# Workflow: Trap Bassline Design (808-Style)

Creating deep, punchy sub basses for trap and hip-hop production.

## Goal
Design 808-style bass sounds that have deep sub presence, pitch drop characteristics, and cut through modern trap mixes.

[SRC: IL-MAN]

---

## The 808 Formula

808 basses are characterized by:
1. Deep sub frequency (30-60Hz)
2. Pitch drop on attack ("bend")
3. Harmonic character (not pure sine)
4. Short-medium decay

---

## Step-by-Step Recipe

### Step 1: Pure Sine Foundation
```
OSC 1: Sine wave
PITCH: 0
FINE: 0
```

**Why sine?**
- Pure fundamental frequency
- No harmonics = maximum sub energy
- Cleanest low-end possible

### Step 2: Add FM Harmonics
```
MODULATION: 2 to 1 FM
OSC 2: Sine wave
OSC 2 PITCH: +24 semitones (+2 octaves)
AMOUNT: 35-45%
```

**Why FM?**
- Adds harmonics without adding mud
- Keeps sub frequencies clean
- 4:1 ratio (24 semitones) = bright but controlled

### Step 3: Sub Layer (Optional)
```
OSC 3: Sine wave
PITCH: -12 semitones (-1 octave)
MIX: 30-50%
```

**Purpose:** Extra sub octave for massive low-end

### Step 4: MONO ONLY
```
UNISONO:
  VOICES: 1 (single voice)
  STEREO: 0% (complete mono)
  DETUNE: 0%
```

**CRITICAL:** Sub bass MUST be mono.
- Phase cancellation destroys low-end
- Club systems play mono below ~100Hz anyway
- Stereo spread on sub = weaker bass

### Step 5: The Pitch Drop (Essential!)
```
ENVELOPE 1:
  DEST: PITCH
  ATTACK: 0%
  DECAY: 25-35%
  AMNT: -30 to -40% (negative!)
```

**How it works:**
- Negative amount = pitch goes DOWN
- Fast decay = quick drop
- Creates that "808 slide" effect

### Step 6: Amplitude Envelope
```
LEVEL EG:
  ATTACK: 0%
  DECAY: 15-25%
  SUSTAIN: 60-75%
  RELEASE: 30-40%
```

**Note:** Sustained tone for long 808 notes

### Step 7: Filter Control
```
FILTER:
  TYPE: LP
  CUTOFF: 45-55% (low!)
  RES: 0-10% (keep low)
```

**Purpose:**
- Removes any harshness from FM
- Keeps focus on sub frequencies
- Low resonance prevents "ringing"

### Step 8: Subtle FX
```
DIST:
  X: 15-20% (light drive)
  Y: 80%+ (tame highs)

HPF (in FX rack):
  X: 10-20% (remove sub-sub frequencies)
```

**Why so little FX?**
- 808s need to be clean
- Too much processing = muddy
- Keep it simple

---

## Variations

### Classic 808
```
Sine FM (as above)
Pitch drop: -35%
Short decay
Minimal FX
```

### Modern Trap 808
```
Add slight distortion (20%)
FM amount: 45% (more harmonics)
Use HPF to clean mud
```

### Saturated 808
```
More DIST: 30%+
Sawtooth OSC 3: 20% mix
Adds grit while keeping sub
```

### Short/Punch 808
```
Decay: 10-15%
Sustain: 40%
For faster patterns
```

---

## Mixing 808s

### Frequency Space
- **Fundamental:** 30-60Hz (the sub)
- **Body:** 60-120Hz (kick competition zone)
- **Character:** 120-250Hz (harmonics/click)

### Sidechain
Route your kick to sidechain the 808:
- 808 ducks when kick hits
- Prevents frequency collision
- Creates "pumping" feel

### EQ (Post-GMS)
- High-pass at 25-30Hz (remove rumble)
- Small boost at 50-60Hz (sub)
- Cut at 100-150Hz if competing with kick

---

## Writing 808 Patterns

### Note Lengths
- **1/4 notes:** Standard, sustained
- **1/8 notes:** Bouncy, rhythmic
- **1/2 + 1/4:** Dragged feel
- **Full bar:** Drone/ambient

### Pitch Programming
- **Root note:** Foundation
- **+5 semitones:** Common trap slide
- **+7 semitones:** Darker slide
- **Octave jumps:** Dramatic

### Velocity Variation
- Hard velocities = more punch
- Soft velocities = subtle layer
- Create dynamics with velocity

---

## Common 808 Mistakes

### 1. Not Mono
**Problem:** Phase cancellation, weak bass
**Fix:** Always mono unisono

### 2. Too Much Distortion
**Problem:** Upper harmonics mask sub
**Fix:** Keep DIST light (under 25%)

### 3. No Pitch Drop
**Problem:** Sounds like generic sub
**Fix:** Always add negative pitch envelope

### 4. Competing with Kick
**Problem:** Kick and 808 fight
**Fix:** Sidechain or different octaves

### 5. Too Long Release
**Problem:** 808s overlap, muddy
**Fix:** Match release to tempo

---

## Advanced Techniques

### Multi-Layer 808
```
Layer 1: Pure sine sub (mono, super low)
Layer 2: FM 808 (as above)
Layer 3: Click/transient (high-passed noise)
```

### Distortion Parallel
```
GMS: Clean 808
Parallel channel: Heavy DIST
Mix: 80% clean, 20% distorted
Result: Clean sub + gritty top
```

### Glide/Portamento
```
MONO VOICE: On
FREQ SLIDE: 20-40%
Result: Slides between notes
```

---

## Quick 808 Checklist

- [ ] OSC 1: Sine wave
- [ ] FM mode: OSC2 at +24st, 40% amount
- [ ] Unisono: 1 voice, 0% stereo (MONO!)
- [ ] EG1 → PITCH: -35%, fast decay
- [ ] Filter: Low cutoff (under 60%)
- [ ] Light DIST + HPF
- [ ] Test on headphones (sub check)
- [ ] Test in mono (phase check)
- [ ] Sidechain to kick

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm
