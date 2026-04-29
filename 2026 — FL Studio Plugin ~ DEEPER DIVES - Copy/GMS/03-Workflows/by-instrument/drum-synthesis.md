# Workflow: Drum Synthesis with GMS

Creating synthetic kicks, snares, and percussion.

## Goal
Use GMS as a drum synthesizer for electronic percussion sounds.

[SRC: IL-MAN]

---

## Kick Drum

### Basic Kick Recipe
```
OSC 1: Sine wave
PITCH: 0 (C1-C2 range)

MODULATION: 2 to 1 FM (optional)
OSC 2: Sine, +24 semitones
AMOUNT: 30-40%

EG1 → PITCH
ATK: 0%
DEC: 25%
AMNT: -40%

LEVEL EG:
ATK: 0%
DEC: 20%
SUS: 0%
REL: 30%

FILTER: LP, cutoff 50%

UNISONO: 1 voice, mono
```

**Result:** Punchy kick with pitch drop

### Kick Variations

**Deep Sub Kick:**
- OSC 3: Sine, -12 semitones
- No FM
- Longer decay

**Trap Kick:**
- Add light DIST (15%)
- High pitch drop (-50%)
- Short decay

**Techno Kick:**
- Add CLICK (noise, 10%)
- FM amount 45%
- Tight envelope

---

## Snare Drum

### Basic Snare Recipe
```
OSC 1: Triangle or Pulse
PITCH: Higher range (C3-C4)

OSC 2: Triangle, +7 semitones
MIX: 50%

NOISE MIX: 40-60%

LEVEL EG:
ATK: 0%
DEC: 25%
SUS: 0%
REL: 20%

FILTER: LP, cutoff 70%
UNISONO: 2 voices, 30% stereo

FX:
  HPF: X: 25% (remove mud)
  DIST: X: 20% (optional edge)
```

**Result:** Electronic snare with body and snap

### Snare Variations

**Clap:**
- Noise: 70%
- Longer attack (5%)
- Reverb

**Rimshot:**
- Pulse wave
- High pitch
- Short everything

**808 Snare:**
- Two oscillators only
- Triangle waves
- Filter envelope

---

## Hi-Hats

### Closed Hi-Hat
```
NOISE: 100%
All OSC: Off or minimal

LEVEL EG:
ATK: 0%
DEC: 8%
SUS: 0%
REL: 10%

FILTER: HP, cutoff 60%+

FX:
  HPF: X: 40%
  DIST: X: 10% (optional)
```

### Open Hi-Hat
```
Same as closed but:
DEC: 40%
REL: 50%

Add RVRB: Short
```

---

## Toms

### Floor Tom
```
OSC 1: Sine
PITCH: Lower (C1-C2)

EG1 → PITCH
ATK: 0%
DEC: 35%
AMNT: -30%

LEVEL EG:
ATK: 0%
DEC: 40%
SUS: 10%
REL: 40%

UNISONO: 2 voices
```

**Higher toms:** Increase pitch, decrease decay

---

## Claps

### Electronic Clap
```
NOISE: 80%
OSC 1: Triangle (20%)

LEVEL EG:
ATK: 5%
DEC: 30%
SUS: 0%
REL: 35%

TRNC GATE:
Y: 70%
X: 20%
SYNC: 1/8 or 1/16
Result: Multiple claps
```

---

## Cymbals/CR78 Style

### Metallic Percussion
```
MODULATION: 2 to 1 FM
OSC 1: Sine
OSC 2: Sine, +24 semitones
AMOUNT: 60%

LEVEL EG:
ATK: 0%
DEC: 60%
SUS: 0%
REL: 70%

NOISE: 20%

FILTER: HP, cutoff 50%

FX:
  HPF: X: 35%
  RVRB: X: 40%, Y: 30%
```

---

## Percussion Tips

### Velocity Sensitivity
```
MIDI/EQ Panel:
VELOCITY TO LEVEL: On
Result: Harder hits = louder
```

### Pitch Variation
- Program different pitches in piano roll
- Create drum fills
- Dynamic patterns

### Layering Strategy
1. **Body:** Sine or triangle (low-mid)
2. **Snap:** Noise or bright FM (high)
3. **Mix:** Balance for character

---

## Drum Kit Organization

### Multi-Output Setup
```
GMS 1: Kick (C1)
GMS 2: Snare (C2)
GMS 3: Hihats (C3)
GMS 4: Toms (C1-C2)
GMS 5: Percussion (various)
```

**Route to:** Individual mixer tracks for processing

---

## Quick Drum Recipes

### Punchy Kick
```
Sine + FM pitch drop
Short decay
Mono
```

### Electronic Snare
```
Triangle + noise
Body + snap
HPF to clean
```

### Tight Hihat
```
Pure noise
Very short
High pass
```

### 808 Tom
```
Sine pitch drop
Medium decay
Sub tone
```

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm
