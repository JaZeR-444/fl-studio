# Modulation Matrix Destinations

Complete reference for envelope and LFO modulation targets.

## Modulation Architecture

GMS provides deep modulation routing through two Envelope Generators (EG1, EG2) and two LFOs (LFO1, LFO2). Each can target various synthesis parameters.

[SRC: IL-MAN]

---

## Envelope Destinations (EG1 & EG2)

### Filter Section
| Destination | Effect | Typical Use |
|-------------|--------|-------------|
| **CUTOFF** | Filter opens/closes over time | Classic filter sweep basses |
| **RES** | Resonance changes | Evolving filter character |

### Pitch Section
| Destination | Effect | Typical Use |
|-------------|--------|-------------|
| **PITCH** | Global pitch envelope | Pitch drop effects, 808 slides |
| **OSC1 PITCH** | Individual OSC pitch | Detuned sweeps |
| **OSC2 PITCH** | Individual OSC pitch | Sync sweep modulation |
| **OSC3 PITCH** | Individual OSC pitch | Sub-octave movement |

### Mix Section
| Destination | Effect | Typical Use |
|-------------|--------|-------------|
| **OSC MIX** | Balance between oscillators | Morphing between sources |
| **OSC2** | OSC1/2 mix specifically | Layered sound evolution |
| **OSC3** | Combined/OSC3 mix | Bringing in sub layer |
| **NOISE** | Noise blend | Percussive attacks |

### Amplitude & Panning
| Destination | Effect | Typical Use |
|-------------|--------|-------------|
| **AMPLITUDE** | Volume contour | Tremolo, gate effects |
| **PAN** | Stereo movement | Auto-panning |

### Modulation Section
| Destination | Effect | Typical Use |
|-------------|--------|-------------|
| **AMOUNT** | Modulation depth | FM complexity changes |

---

## LFO Destinations (LFO1 & LFO2)

LFOs can target the same destinations as envelopes, plus additional rhythmic modulation.

### Most Common LFO Targets

| Destination | Rate | Result |
|-------------|------|--------|
| **CUTOFF** | Slow | Filter sweep pad |
| **CUTOFF** | Medium | Wobble bass |
| **CUTOFF** | Fast | Vibrato-like filter |
| **PITCH** | Slow | Subtle detune shimmer |
| **PITCH** | Fast | Vibrato |
| **PAN** | Slow | Wide stereo movement |
| **AMPLITUDE** | Medium | Tremolo |
| **AMOUNT (mod)** | Medium | Evolving FM texture |

---

## Modulation Amount (AMNT)

Controls how strongly the envelope/LFO affects the destination:

| AMNT Value | Effect | Use Case |
|------------|--------|----------|
| **±10-30%** | Subtle | Gentle movement |
| **±40-60%** | Moderate | Noticeable effect |
| **±70-100%** | Strong | Dramatic modulation |

**Negative AMNT:** Inverts the modulation (envelope down = target up)

---

## Envelope Shape Guide

### ADSR Controls

| Parameter | Short Setting | Long Setting | Use Case |
|-----------|---------------|--------------|----------|
| **ATK** | 0-10% | 50-100% | Plucks vs pads |
| **DEC** | 10-30% | 40-70% | Sharp vs smooth |
| **SUS** | 0-30% | 60-100% | Percussive vs sustained |
| **REL** | 10-20% | 50-100% | Tight vs atmospheric |

### Common Envelope Types

**Pluck/Bell:**
- ATK: 0% (instant)
- DEC: 30-50%
- SUS: 0-20%
- REL: 20-30%

**Pad:**
- ATK: 30-50% (slow fade in)
- DEC: 40-60%
- SUS: 70-100%
- REL: 40-60%

**Bass:**
- ATK: 0-10%
- DEC: 20-40%
- SUS: 60-80%
- REL: 10-20%

**Lead:**
- ATK: 0-5%
- DEC: 30-50%
- SUS: 80-100%
- REL: 15-25%

---

## LFO Configuration

### Rate Controls

| SYNC Setting | Result |
|--------------|--------|
| **None** | Free-running, Hz-based |
| **Beat** | Synced to beat divisions |
| **Bar** | Synced to bar length |

### Shape Selection

| Shape | Character | Best For |
|-------|-----------|----------|
| **Sine** | Smooth, natural | Filter sweeps, vibrato |
| **Triangle** | Linear up/down | Symmetric modulation |
| **Saw** | Sharp attack, slow decay | Ramp effects |
| **Square** | On/off switching | Gating, stepped effects |
| **Random** | Unpredictable | Chaos, textures |

**Note:** Sine is bipolar (±), others are unipolar (0 to +)

---

## Advanced Modulation Techniques

### 1. Filter Envelope Bass
```
EG1 → CUTOFF
ATK: 0%
DEC: 40%
SUS: 20%
REL: 30%
AMNT: +70%
Result: Classic envelope filter bass
```

### 2. Wobble Bass (LFO)
```
LFO1 → CUTOFF
RATE: Beat-synced (1/4 or 1/8)
SHAPE: Triangle or Sine
AMNT: ±60%
Result: Dubstep-style wobble
```

### 3. FM Complexity Sweep
```
EG1 → AMOUNT (modulation)
ATK: 20% (slow build)
DEC: 50%
SUS: 40%
AMNT: +50%
Mode: FM
Result: Evolving FM texture
```

### 4. Pitch Drop (808 style)
```
EG1 → PITCH
ATK: 0%
DEC: 30%
SUS: 0%
REL: 10%
AMNT: -30% (negative!)
Result: Pitch drop effect
```

### 5. Stereo Movement
```
LFO1 → PAN
RATE: Slow (8-16 bars)
SHAPE: Sine
AMNT: 100%
Result: Gentle auto-pan
```

---

## Modulation Matrix Combinations

### Complex Sound Design

**Evolving Pad:**
- EG1 → CUTOFF (slow open)
- LFO1 → PAN (gentle movement)
- LFO2 → OSC MIX (texture morphing)

**Dynamic Lead:**
- EG1 → CUTOFF (attack bite)
- LFO1 → PITCH (subtle vibrato)
- EG2 → AMOUNT (FM complexity)

**Rhythmic Bass:**
- LFO1 → CUTOFF (wobble)
- EG1 → AMOUNT (per-note variation)

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm
