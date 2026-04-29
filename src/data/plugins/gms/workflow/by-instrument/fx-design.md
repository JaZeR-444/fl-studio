# Workflow: FX Sound Design

Creating risers, impacts, textures, and special effects.

## Goal
Use GMS for sound design elements beyond traditional instruments.

[SRC: IL-MAN]

---

## Risers

### Noise Riser
```
OSC 1-3: Minimal or off
NOISE: 100%

LEVEL EG:
ATK: 80% (very slow)
DEC: 0%
SUS: 100%
REL: 30%

FILTER:
  LP type
  CUTOFF: Automate from 20% to 95%
  RES: 30%

LFO1 → CUTOFF
RATE: 80% (fast)
AMNT: ±15%
Result: Vibrating riser
```

### Tonal Riser
```
OSC 1: Sawtooth
OSC 2: Sawtooth, +12 semitones

MODULATION: FM
AMOUNT: Automate 10% to 70%

UNISONO: 8 voices

FILTER: Automate cutoff up

Result: Pitch + complexity riser
```

---

## Impacts

### Sub Impact
```
OSC 1: Sine
OSC 2: Sine, +12 semitones

MODULATION: FM
AMOUNT: 60%

LEVEL EG:
ATK: 0%
DEC: 8%
SUS: 0%
REL: 40%

EG1 → CUTOFF
ATK: 0%
DEC: 15%
AMNT: -60% (closes)

UNISONO: 2 voices

NOISE: 40%

FX:
  DIST: Heavy
  RVRB: Massive
```

### Metallic Impact
```
MODULATION: 2 to 1 RM
High amount (80%+)
Fast envelope
Echo + reverb
Result: Industrial impact
```

---

## Textures

### Drone
```
OSC 1: Sine or Triangle
MODULATION: FM or RM
Amount: Low (20-30%)

LFO1 → AMOUNT
Slow rate
Result: Evolving texture

LFO2 → PITCH (subtle)
Different rate
Result: Beating texture
```

### Sci-Fi Texture
```
RM mode
Detuned oscillators
High amount
LFO → pan
Result: Alien soundscape
```

### Noise Texture
```
NOISE: 100%
HPF in FX rack
Automate cutoff
Result: Wind/rain/ocean
```

---

## Sweeps

### Filter Sweep
```
Sawtooth base
Automate filter cutoff
20% to 90%
Medium resonance
Result: Classic sweep
```

### FM Sweep
```
FM mode
Automate OSC2 pitch
+12 to +24 semitones
Result: Changing harmonics
```

### Noise Sweep
```
Pure noise
Automate HPF cutoff
Low to high or vice versa
Result: White noise sweep
```

---

## Transition Effects

### Whoosh
```
NOISE: 100%
Filter: Automate HP cutoff
Fast attack, medium release
Add RVRB
Result: Whoosh effect
```

### Laser
```
Sawtooth
Fast filter envelope
Pitch envelope (down)
Short everything
Result: Laser zap
```

### Stutter
```
Any sound
TRNC gate
Fast rate (1/16 or 1/32)
High drop amount
Result: Glitch stutter
```

---

## Atmospheric FX

### Wind
```
NOISE: 100%
HPF: X: 30%
LFO → HPF cutoff
Slow rate
Result: Blowing wind
```

### Space/Ambience
```
Triangle waves
High unisono (12+)
Slow LFOs
Massive reverb
Result: Space atmosphere
```

### Industrial
```
RM mode
Sawtooth + square
High amount
DIST + CRSH
Result: Factory/machine
```

---

## Rhythmic FX

### Gated Effect
```
Any sustained sound
TRNC effect
SYNC to beat
Adjust drop and release
Result: Rhythmic pattern
```

### Stutter Rhythms
```
Short sounds
TRNC at fast rate
Pattern in piano roll
Result: Glitch rhythms
```

### Pulsing Drone
```
LFO → AMPLITUDE
Slow rate
Saw or square shape
Result: Pulsing texture
```

---

## Creative Techniques

### Extreme Modulation
```
FM or RM
Amount: 100%
Extreme OSC2 pitch
Result: Chaos (use carefully)
```

### Feedback Loops
```
Heavy distortion
High resonance
Self-oscillation
Result: Screaming FX
```

### Random LFO
```
LFO shape: Random
Multiple destinations
Unsynced
Result: Unpredictable
```

---

## FX Chain Tricks

### Build-Up Chain
```
CRSH (increasing)
→ LPF (closing)
→ ECHO (feedback up)
→ RVRB (decay up)
Result: Building intensity
```

### Degradation Chain
```
DIST (heavy)
→ CRSH (heavy)
→ LPF (low)
Result: Destroyed sound
```

### Spatial Chain
```
ECHO (long)
→ RVRB (massive)
→ PAN (LFO)
Result: Huge space
```

---

## Sound Design Checklist

- [ ] Start with basic oscillator
- [ ] Add modulation (FM/RM/Sync)
- [ ] Shape with envelopes
- [ ] Add movement (LFOs)
- [ ] Process with FX chain
- [ ] Automate key parameters
- [ ] Layer if needed
- [ ] Test in context

---

## Quick FX Recipes

### Riser
```
Noise + rising filter
Automate cutoff
Add reverb
```

### Impact
```
FM sine + fast envelope
Noise blend
Heavy reverb
```

### Texture
```
RM mode
Slow LFOs
High unisono
```

### Stutter
```
Any sound
TRNC gate
Fast rate
```

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm
