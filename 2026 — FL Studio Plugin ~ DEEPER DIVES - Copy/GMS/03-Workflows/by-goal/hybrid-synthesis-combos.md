# Workflow: Hybrid Synthesis Techniques

Combining FM, Ring Modulation, and Sync for complex textures.

## Goal
Master the interaction between GMS's three oscillators using advanced hybrid synthesis techniques.

[SRC: IL-MAN]

---

## The Power of Three

GMS's true strength lies in combining:
- **OSC 1:** Primary tone
- **OSC 2:** Modulator (for FM, RM, or Sync)
- **OSC 3:** Independent layer (always free)

Even when using modulation on OSC 1+2, OSC 3 remains available for additional layers.

---

## Technique 1: FM + Sub Layer

### Concept
Use FM for complex tone, add OSC 3 as pure sub foundation.

### Setup
```
MODULATION: 2 to 1 FM
OSC 1: Sawtooth (carrier)
OSC 2: Sawtooth, +12 semitones (modulator)
AMOUNT: 50%

OSC 3: Sine, -12 semitones
MIX: 50%
```

### Result
- FM provides midrange complexity
- Sine sub provides low-end foundation
- Best of both worlds

### Applications
- **Complex bass:** FM character + solid sub
- **Leads:** Shimmering top + weighty bottom
- **Pads:** Texture + foundation

---

## Technique 2: Sync + Unisono

### Concept
Combine sync sweep with unisono for "supersync" effect.

### Setup
```
MODULATION: 1 SYNC
OSC 1: Sawtooth
OSC 2: Sawtooth, +12 semitones
AMOUNT: 60%

UNISONO: 6 voices
STEREO: 60%
DETUNE: 50%

EG1 → OSC2 PITCH
AMNT: +40%
```

### Result
- Each unison voice syncs independently
- Creates dense, aggressive texture
- Perfect for modern bass music

### Applications
- **Dubstep bass:** Aggressive sync sweep
- **Trap leads:** Cutting sync character
- **FX:** Extreme sync chaos

---

## Technique 3: RM + FM Stack

### Concept
Layer FM and Ring Modulation concepts with 3 oscillators.

### Setup
```
MODULATION: 2 to 1 FM
OSC 1: Sawtooth
OSC 2: Square, +7 semitones
AMOUNT: 40%

OSC 3: Sawtooth, -7 semitones
MIX: 60%
```

**Note:** While GMS only does one modulation mode at a time between OSC 1+2, you can create complex textures by:
- FM on OSC 1+2
- OSC 3 as additional modulated layer

### Advanced: Two GMS Layers
```
GMS 1: FM mode
GMS 2: RM mode
MIX: 50/50
Result: True FM + RM hybrid
```

---

## Technique 4: Modulated Modulation

### Concept
Use envelopes or LFOs to change the AMOUNT parameter over time.

### Setup
```
MODULATION: 2 to 1 FM
BASE AMOUNT: 30%

EG1 → AMOUNT
ATK: 0%
DEC: 40%
AMNT: +40%
```

### Result
- Sound starts with less FM (cleaner)
- Builds to more FM (complex)
- Evolving texture

### Applications
- **Evolving pads:** Changing complexity
- **Dynamic bass:** FM builds over note
- **Rhythmic:** LFO modulates amount

---

## Technique 5: Sync + Distortion

### Concept
Sync creates harmonics, distortion enhances them.

### Setup
```
MODULATION: 1 SYNC
OSC 1: Sawtooth
OSC 2: Sawtooth, +12 semitones
AMOUNT: 70%

FX:
  DIST: X: 45%, Y: 55%
  LPF: X: 75%, Y: 20% (tame)
```

### Result
- Sync creates bright harmonics
- Distortion adds grit
- LPF tames the madness

### Applications
- **Aggressive leads:** Maximum edge
- **Industrial bass:** Grit and power
- **FX:** Extreme sound design

---

## Technique 6: Noise + Modulation

### Concept
Add noise to modulated tones for texture.

### Setup
```
MODULATION: 2 to 1 FM
OSC 1: Sawtooth
OSC 2: Sawtooth, +12 semitones
AMOUNT: 50%

NOISE MIX: 15-25%
```

### Result
- FM provides musical tone
- Noise adds texture/grain
- Great for industrial/lo-fi

### Variations
- **High noise (30%):** Percussive, drum-like
- **Low noise (10%):** Subtle texture
- **Filtered noise:** Use LPF/HPF FX

---

## Technique 7: Dual LFO Modulation

### Concept
Use both LFOs for complex, multi-dimensional movement.

### Setup
```
LFO1 → CUTOFF
RATE: 30%
AMNT: ±30%
SHAPE: Triangle
SYNC: Beat

LFO2 → PAN
RATE: 10%
AMNT: 80%
SHAPE: Sine
SYNC: None (free)
```

### Result
- LFO1: Rhythmic filter wobble
- LFO2: Slow stereo wandering
- Complex, evolving sound

### Applications
- **Pads:** Maximum movement
- **Textures:** Organic feel
- **Experimental:** Chaos

---

## Technique 8: Multi-Stage Envelopes

### Concept
Use both EG1 and EG2 on different targets.

### Setup
```
EG1 → CUTOFF
ATK: 0%
DEC: 30%
AMNT: +40%
Purpose: Attack bite

EG2 → AMOUNT (modulation)
ATK: 20%
DEC: 50%
AMNT: +30%
Purpose: Building complexity
```

### Result
- Different envelope shapes
- Multi-dimensional evolution
- Sophisticated articulation

---

## Hybrid Combination Guide

| Technique | Best For | Complexity |
|-----------|----------|------------|
| FM + Sub | Bass, leads | Medium |
| Sync + Unisono | Dubstep, trap | High |
| RM + Noise | Industrial, FX | High |
| Modulated Modulation | Pads, evolving | Medium |
| Dual LFO | Textures, pads | High |
| Multi-Stage Envelopes | Sophisticated | High |

---

## CPU Considerations

### Heavy Techniques (High CPU)
- High unisono (10+) + FM
- Multiple LFOs + complex FX
- Solutions:
  - Reduce unisono for writing
  - Freeze channel for mixing
  - Render to audio

### Efficient Hybrids
- Low unisono (2-4) + FM
- Single LFO
- 2-3 FX max

---

## Sound Design Experiments

### Experiment 1: FM Chaos
```
FM mode
OSC 2: Random pitch each note
Amount: 80%+
Result: Unpredictable FM textures
```

### Experiment 2: Sync Sweep
```
Sync mode
EG1 → OSC2 PITCH
Slow attack, high amount
Result: Dramatic sync sweeps
```

### Experiment 3: RM Drone
```
RM mode
Low oscillators (C1-C2)
High amount (90%+)
Result: Industrial drone
```

---

## Quick Hybrid Recipes

### Complex Bass
```
FM mode, 45% amount
OSC 3 sine sub
6 voices unisono
DIST + LPF
Result: Modern bass
```

### Evolving Pad
```
FM mode
LFO → cutoff
LFO → pan
High unisono
Result: Living pad
```

### Aggressive Lead
```
Sync mode
High amount
DIST + unisono
Result: Cutting lead
```

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm
