# Workflow: Sub Weight and Foundation

Creating deep, powerful sub frequencies that provide mix foundation.

## Goal
Design sounds with massive low-end presence and sub frequency weight for foundation elements.

[SRC: IL-MAN]

---

## The Sub Weight Formula

### Core Principle
Sub weight comes from:
1. Clean fundamentals (sine waves)
2. Low frequency focus (remove highs)
3. Mono compatibility
4. Harmonic support (without mud)

---

## Step-by-Step Recipe

### Step 1: Sine Wave Foundation
```
OSC 1: Sine wave
PITCH: 0
FINE: 0
```

**Why sine?**
- Pure fundamental, no harmonics
- Maximum energy at root frequency
- No phase issues in mono

### Step 2: Sub Layer
```
OSC 3: Sine wave
PITCH: -12 semitones (-1 octave)
MIX: 40-60%
```

**Purpose:** Reinforces fundamental with sub-octave

### Step 3: Harmonic Support (FM)
```
MODULATION: 2 to 1 FM
OSC 2: Sine
PITCH: +24 semitones (+2 octaves)
AMOUNT: 30-40%
```

**Result:** Adds harmonics 2 octaves up (clean separation from sub)

### Step 4: Mono Everything
```
UNISONO:
  VOICES: 1
  STEREO: 0%
  DETUNE: 0%
```

**Critical:** Sub must be mono

### Step 5: Low Filter Cutoff
```
FILTER:
  TYPE: LP
  CUTOFF: 40-55%
  RES: 0-5%
```

**Purpose:** Remove all high frequency content

### Step 6: Long Envelope
```
LEVEL EG:
  ATTACK: 10-30%
  DECAY: 40%
  SUSTAIN: 80%
  RELEASE: 50%+
```

**Result:** Sustained, foundation-like character

### Step 7: Minimal FX
```
DIST: Light (10-15%) for warmth
HPF: 10% (remove sub-sub frequencies)
```

**Avoid:**
- ECHO (muddies sub)
- RVRB (unless very short)
- Any stereo widening

---

## Sub Weight Applications

### Sub Bass
- Follow recipe exactly
- Play in 30-60Hz range
- Single notes, sustained

### Kick Drum Foundation
- Shorter envelope
- Add pitch drop (EG → PITCH)
- Faster attack

### Drone/Pad Foundation
- Maximum sustain
- Slow attack
- Layer with brighter elements

### 808 Sub Layer
- As per trap bass recipe
- FM for character
- Pitch envelope essential

---

## Frequency Management

### Low-End Zones
```
20-40 Hz: Extreme sub (feel more than hear)
40-80 Hz: Sub bass (power zone)
80-120 Hz: Upper sub (kick competition)
120-200 Hz: Low bass (mud zone)
```

### EQ Strategy
**In GMS 5-band EQ:**
- Band 1 (60Hz): Boost for weight
- Band 2 (220Hz): Cut to reduce mud
- Bands 3-5: Cut or minimize

---

## Common Mistakes

### Too Many Harmonics
**Problem:** Using sawtooth or square
**Fix:** Sine waves only for pure sub

### Stereo Spread
**Problem:** Unisono stereo on sub
**Fix:** Always mono for sub frequencies

### Competing with Kick
**Problem:** Same frequency range
**Fix:**
- Sidechain ducking
- Different octaves
- EQ separation

### Too Much Processing
**Problem:** Heavy FX on sub
**Fix:** Minimal FX, clean signal path

---

## Advanced Techniques

### Layered Sub
```
Layer 1: Pure sine (20-50Hz)
Layer 2: FM sub (40-80Hz)
Layer 3: Character (100-200Hz)
Result: Full spectrum foundation
```

### Dynamic Sub
```
LFO → Filter Cutoff
Very slow rate
Subtle amount (±5%)
Result: Breathing sub
```

### Harmonic Sub
```
Add OSC 2 square at +12st
Very low mix (20%)
Adds 2nd harmonic
Result: More audible on small speakers
```

---

## Sub Weight Checklist

- [ ] Sine wave oscillators
- [ ] Sub octave layer (OSC3)
- [ ] FM at 4:1 ratio (optional)
- [ ] Mono: 1 voice, 0% stereo
- [ ] Low filter cutoff (under 60%)
- [ ] Long envelope
- [ ] Minimal FX
- [ ] Test on headphones
- [ ] Verify mono compatibility

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm
