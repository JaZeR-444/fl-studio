# Workflow: Pad Textures with GMS

Creating lush, evolving atmospheric pads.

## Goal
Design wide, evolving pad sounds that fill space and provide harmonic foundation.

[SRC: IL-MAN]

---

## Pad Fundamentals

### Key Characteristics
1. **Wide stereo** - Fills the sides
2. **Slow attack** - Fades in smoothly
3. **Sustained** - Holds throughout
4. **Evolving** - Movement prevents boredom

---

## Basic Pad Recipe

### Foundation
```
OSC 1: Sawtooth or Triangle
OSC 2: Triangle, +7 semitones
OSC 3: Triangle, -7 semitones

MIX: OSC2 80%, OSC3 70%

UNISONO: 8-12 voices
STEREO: 90-100%
DETUNE: 60-70%

FILTER: LP, cutoff 65%, res 15%

LEVEL EG:
ATK: 60%
DEC: 50%
SUS: 95%
REL: 60%
```

### Movement
```
LFO1 → CUTOFF
RATE: 12%
AMNT: ±20%
SHAPE: Sine

Result: Gentle filter sweep
```

### Space
```
FX:
  PHSR: X: 30%, Y: 25%
  ECHO: X: 45%, long time
  RVRB: X: 60%, Y: 45%
```

---

## Pad Variations

### Supersaw Pad
```
All sawtooth waves
10-16 voices
Maximum stereo
FLNG + long RVRB
```

### Analog Pad
```
Triangle waves
6 voices
70% stereo
Warm filter
Less FX
```

### FM Texture
```
FM mode
Sine oscillators
Ratio 2:1 or 3:1
Moderate amount
Evolving texture
```

### Dark Pad
```
Low cutoff (50%)
Pulse waves
Slow attack
Heavy reverb
EQ cuts in highs
```

### Bright Pad
```
Sawtooth waves
High cutoff (75%)
High unisono
Shimmering FX
EQ boost 8kHz
```

---

## Evolving Pads

### Filter Evolution
```
EG1 → CUTOFF
ATK: 40%
DEC: 60%
AMNT: +30%

Result: Pad opens over time
```

### Stereo Movement
```
LFO1 → CUTOFF
LFO2 → PAN

Different rates
Creates evolving texture
```

### Modulation Morphing
```
EG1 → AMOUNT (modulation)
Slow attack
Result: Texture changes over time
```

---

## Layered Pads

### Three-Layer Approach
```
Layer 1 (Low):
  Sine/triangle
  Low octave
  2 voices
  Purpose: Foundation

Layer 2 (Mid):
  Sawtooth
  Root octave
  8 voices
  Purpose: Body and width

Layer 3 (High):
  Triangle/saw
  +12 semitones
  6 voices
  Purpose: Shimmer and air
```

### Mix Ratios
```
Low: 40%
Mid: 60%
High: 30%
```

---

## Pad Techniques

### Chord Voicing
```
Play rich chords (7ths, 9ths)
Pads love extensions
Strategic voice leading
```

### Octave Layers
```
Same pad, different octaves
Root position
+12 semitones
-12 semitones
Result: Massive stacked pad
```

### Detuned Beauty
```
OSC 2: +12 cents
OSC 3: -12 cents
Unisono: 70% detune
Result: Chorused thickness
```

---

## Genre Pads

### Trance
- Supersaw-based
- 12-16 voices
- Maximum stereo
- Long reverb tail
- Filter modulation

### Ambient
- Slowest envelopes
- Sine waves
- Minimal FX
- Massive reverb
- Subtle movement

### Cinematic
- Layered textures
- Wide stereo
- Evolving modulation
- Long releases
- Emotional quality

### Synthwave
- Sawtooth
- 80s style
- Medium unisono
- Chorus/FLNG
- Analog feel

### Downtempo
- Triangle/saw
- 6-8 voices
- Slow attack
- Warm filter
- Subtle FX

---

## Pad Mixing

### Frequency Placement
```
Pads sit in mids and sides
Cut: 100-300 Hz (remove mud)
Let through: 500Hz-5kHz (presence)
Add air: 8kHz+ (optional)
```

### Stereo Strategy
```
Wide pads: Full stereo
Background: 70% width
Lead elements: Center
```

### Dynamic Control
```
Sidechain to kick
Pads duck when beat hits
Creates breathing room
```

---

## Common Pad Mistakes

### Too Loud
**Problem:** Overwhelms mix
**Fix:** Keep pads behind other elements

### Too Static
**Problem:** Boring, lifeless
**Fix:** Add LFO movement, filter evolution

### Too Wide
**Problem:** Phase issues
**Fix:** Test mono, reduce to 80% stereo

### Too Short
**Problem:** Not pad-like
**Fix:** Long attack, long release

---

## Quick Pad Recipes

### Lush Supersaw
```
Saw waves, 10 voices
100% stereo
Long everything
PHSR + RVRB
```

### Warm Analog
```
Triangle, 6 voices
Warm filter
Minimal FX
70% stereo
```

### Evolving Texture
```
FM mode
Slow envelopes
LFO movement
Stereo panning
```

### Dark Atmosphere
```
Low cutoff
Pulse waves
Heavy reverb
Slow attack
```

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm
