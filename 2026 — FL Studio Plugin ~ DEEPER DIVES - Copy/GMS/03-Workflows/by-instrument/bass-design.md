# Workflow: Bass Design with GMS

Creating powerful, mix-ready bass sounds for any genre.

## Goal
Master bass synthesis techniques from sub-heavy 808s to aggressive EDM basses.

[SRC: IL-MAN]

---

## Bass Fundamentals

### Key Principles
1. **Mono sub frequencies** - Always
2. **Controlled harmonics** - Not too muddy
3. **Transient clarity** - Punchy attack
4. **Sustained body** - Not weak

---

## 808 Sub Bass

### The Trap Standard
```
OSC 1: Sine
OSC 2: Sine, +24 semitones
OSC 3: Sine, -12 semitones (optional)

MODULATION: 2 to 1 FM
AMOUNT: 35-45%

MIX: OSC2 100%, OSC3 40%

UNISONO: 1 voice, 0% stereo

EG1 → PITCH
ATK: 0%
DEC: 28%
AMNT: -35%

FILTER: LP, cutoff 45%, res 5%

LEVEL EG:
ATK: 0%
DEC: 18%
SUS: 65%
REL: 35%

FX:
  DIST: X: 18%, Y: 80%
  HPF: X: 12%
```

**Result:** Classic 808 with pitch drop

---

## FM Bass

### Modern EDM Bass
```
OSC 1: Sawtooth
OSC 2: Sawtooth, +12 semitones

MODULATION: 2 to 1 FM
AMOUNT: 50-65%

OSC 3: Sawtooth, -12 semitones
MIX: 50%

UNISONO: 2-3 voices, 20% stereo

FILTER: LP, cutoff 65%, res 25%

EG1 → CUTOFF
ATK: 0%
DEC: 35%
AMNT: +35%

FX:
  DIST: X: 30-40%
  HPF: X: 20%
```

**Result:** Complex, aggressive bass

---

## Sync Bass (Growl)

### Dubstep Growl
```
OSC 1: Sawtooth
OSC 2: Sawtooth, +12 semitones

MODULATION: 1 SYNC
AMOUNT: 65%

UNISONO: 3 voices, 25% stereo

EG1 → OSC2 PITCH
ATK: 0%
DEC: 40%
AMNT: +45%

FILTER: LP, cutoff 70%, res 40%

LFO1 → CUTOFF (optional wobble)

FX:
  DIST: X: 35%
  LPF: X: 80%
```

**Result:** Aggressive sync sweep bass

---

## Reese Bass

### Classic Drum & Bass
```
OSC 1: Sawtooth
OSC 2: Sawtooth, detuned +7 cents
OSC 3: Sawtooth, detuned -7 cents

No modulation

MIX: OSC2 100%, OSC3 70%

UNISONO: 4-6 voices, 60% stereo
DETUNE: 50%

FILTER: LP, cutoff 60%, res 30%

LFO1 → CUTOFF
RATE: 40%
AMNT: ±40%
SYNC: Beat

FX:
  DIST: X: 25%
  HPF: X: 18%
```

**Result:** Moving, modulated bass

---

## Pluck Bass

### Short, Punchy
```
OSC 1: Triangle or Sawtooth
OSC 2: Same, +12 or +7 semitones

MIX: 60%

UNISONO: 2 voices

LEVEL EG:
ATK: 0%
DEC: 25%
SUS: 15%
REL: 25%

EG1 → CUTOFF
ATK: 0%
DEC: 20%
AMNT: +50%

FILTER: LP, cutoff starts low
```

**Result:** Funk/R&B style pluck

---

## Bass Mixing Tips

### Frequency Management
```
20-60 Hz: Sub (feel in chest)
60-120 Hz: Bass body (kick competition)
120-250 Hz: Upper bass (mud zone)
```

### Sidechain Setup
```
Kick triggers sidechain on bass channel
Result: Bass ducks when kick hits
```

### EQ Strategy
```
Pre-GMS: Not much needed
Post-GMS:
  High-pass: 25-30 Hz (remove rumble)
  Cut: 100-150 Hz if kick competes
  Boost: 60-80 Hz for weight (optional)
```

---

## Genre Guide

### Trap
- Sine-based 808s
- Pitch drop essential
- Minimal stereo
- Light distortion

### Dubstep
- Sawtooth oscillators
- Wobble LFO
- Heavy distortion
- Sync or FM

### House/Tech House
- Simpler waveforms
- Less modulation
- Tight envelopes
- Groove-focused

### Drum & Bass
- Reese-style movement
- Heavy modulation
- Wide stereo OK
- Aggressive filtering

### Pop
- Controlled bass
- Mono sub layer
- Subtle character
- Mix-friendly

---

## Common Bass Mistakes

### Too Wide
**Problem:** Phase cancellation, weak sub
**Fix:** Keep sub 100% mono

### Too Much Distortion
**Problem:** Muddy, no definition
**Fix:** Light saturation only

### No Transient
**Problem:** Weak attack, lost in mix
**Fix:** Fast attack, filter envelope

### Competing with Kick
**Problem:** 808 and kick fight
**Fix:** Sidechain, different octaves, EQ separation

---

## Advanced Techniques

### Layered Bass
```
Layer 1: Pure sine sub (mono)
Layer 2: FM bass (stereo width)
Layer 3: Click/transient (high-passed)
```

### Split Frequency
```
GMS 1: Sub frequencies (LP filtered)
GMS 2: Harmonics (HP filtered)
Process separately
```

### Glide/Portamento
```
MONO VOICE: On
FREQ SLIDE: 25%
Result: Slides between notes
```

---

## Quick Bass Recipes

### Sub Only
```
Sine, mono, no FX
For pure low-end
```

### Character Bass
```
FM or Sync
Unisono 2-4
Filter envelope
Light distortion
```

### Wobble Bass
```
Sawtooth
LFO → cutoff
Heavy resonance
```

### 808
```
Sine FM
Pitch envelope
Mono
Light drive
```

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm
