# GMS Modulation Matrix Reference

Complete reference for modulation routing capabilities.

## Overview

GMS provides extensive modulation routing through:
- **2 Envelope Generators (EG1, EG2)**
- **2 LFOs (LFO1, LFO2)**
- **MIDI Controllers (Velocity, Mod Wheel, Aftertouch)**

[SRC: IL-MAN]

---

## Envelope Destinations

### EG1 and EG2 can target:

| Destination | Effect | Use Case |
|-------------|--------|----------|
| **CUTOFF** | Filter opens/closes | Filter sweep basses, plucks |
| **RES** | Resonance changes | Filter character evolution |
| **PITCH** | Global pitch | Pitch drop effects, 808s |
| **PAN** | Stereo position | Auto-panning, movement |
| **AMPLITUDE** | Volume contour | Tremolo, gate effects |
| **OSC MIX** | Balance between all oscillators | Morphing textures |
| **AMOUNT** | Modulation depth | Changing FM/RM intensity |
| **OSC1 PITCH** | Individual oscillator | Detuned sweeps |
| **OSC2 PITCH** | Individual oscillator | Sync sweep modulation |
| **OSC3 PITCH** | Individual oscillator | Sub-octave movement |

---

## LFO Destinations

### LFO1 and LFO2 can target the same destinations as envelopes.

### Most Popular LFO Targets:

| Target | Recommended Settings | Result |
|--------|---------------------|--------|
| **CUTOFF** | Rate: 30-60%, Amount: ±40% | Wobble bass, filter sweep |
| **PITCH** | Rate: 25%, Amount: ±10% | Vibrato |
| **PAN** | Rate: 10-15%, Amount: 80% | Auto-panning |
| **AMOUNT** | Rate: 15%, Amount: ±30% | Evolving FM texture |
| **OSC2 PITCH** | Rate: 40%, Amount: ±20% | Sync modulation |

---

## FX Modulation

### LFO Control of FX Parameters

Each effect's X and Y parameters can be modulated:

| Effect | Common LFO Target | Result |
|--------|-------------------|--------|
| **DIST X** | LFO → Drive amount | Pulsing distortion |
| **FLNG X** | LFO → Depth | Sweeping flanger |
| **PHSR X** | LFO → Depth | Moving phaser |
| **LPF X** | LFO → Cutoff | Filter sweep |
| **ECHO X** | LFO → Feedback | Growing echoes |
| **PAN X** | LFO → Position | Stereo movement |
| **TRNC Y** | LFO → Drop | Rhythmic intensity |

### Arming FX to LFO
```
1. Select effect
2. Click "Arm X" or "Arm Y"
3. LFO now modulates that parameter
4. Adjust LFO RATE and AMOUNT
```

---

## MIDI Controller Routing

### MIDI/EQ Panel (Click MIDI/EQ button)

| Controller | Assignment Method |
|------------|-------------------|
| **VELOCITY** | Assign to any destination via VELOCITY menu |
| **MODULATION** | Assign to any destination via MODULATION menu |
| **AFTERTOUCH** | Assign to any destination via AFTERTOUCH menu |
| **PITCH BEND** | Set bend range (semitones) |

### Common MIDI Mappings

```
VELOCITY → AMPLITUDE (default on)
Result: Harder keypress = louder

MODULATION → CUTOFF
Result: Mod wheel opens filter

AFTERTOUCH → AMOUNT
Result: Pressure increases FM
```

---

## Modulation Amount (AMNT)

### Understanding Amount
- **Range:** ±100%
- **Positive:** Normal modulation direction
- **Negative:** Inverse modulation
- **0%:** No modulation

### Context-Specific Guidelines

| Application | Recommended Amount | Notes |
|-------------|-------------------|-------|
| **Filter sweep** | ±30 to ±60% | Higher = more dramatic |
| **Vibrato** | ±8 to ±15% | Subtle is better |
| **Pitch drop** | -30 to -50% | Negative for drop |
| **Tremolo** | ±40 to ±70% | Depends on desired depth |
| **FM evolution** | ±20 to ±40% | Avoid chaos |

---

## Advanced Routing Examples

### Example 1: Dynamic Bass
```
EG1 → CUTOFF (fast attack, medium decay)
LFO1 → CUTOFF (slow wobble)
Result: Attack bite + ongoing wobble
```

### Example 2: Evolving Pad
```
EG1 → AMOUNT (slow build of FM)
LFO1 → CUTOFF (gentle filter movement)
LFO2 → PAN (stereo wandering)
Result: Complex evolving texture
```

### Example 3: Expressive Lead
```
VELOCITY → AMPLITUDE (play dynamics)
MOD WHEEL → CUTOFF (filter control)
LFO1 → PITCH (subtle vibrato)
Result: Highly playable instrument
```

### Example 4: Rhythmic Texture
```
LFO1 → CUTOFF (synced to beat)
LFO2 → PAN (different rate)
EG1 → AMOUNT (per-note variation)
Result: Rhythmic, moving texture
```

---

## Envelope Shapes

### ADSR Controls

| Stage | Typical Ranges | Effect |
|-------|---------------|--------|
| **Attack** | 0-50% | Time to peak |
| **Decay** | 10-60% | Time to sustain |
| **Sustain** | 0-100% | Level during hold |
| **Release** | 10-70% | Time to silence |

### Common Envelope Types

**Pluck/Bell:**
- ATK: 0%
- DEC: 25%
- SUS: 15%
- REL: 25%

**Pad:**
- ATK: 40%
- DEC: 50%
- SUS: 90%
- REL: 50%

**Bass:**
- ATK: 0%
- DEC: 30%
- SUS: 80%
- REL: 25%

**Lead:**
- ATK: 0%
- DEC: 30%
- SUS: 90%
- REL: 30%

---

## LFO Configuration

### Rate Settings

| Sync Mode | Rate Range | Best For |
|-----------|-----------|----------|
| **None** | Hz-based | Free-running effects |
| **Beat** | Tempo-synced | Rhythmic wobble |
| **Bar** | Long periods | Slow evolution |

### Shape Selection Guide

| Shape | Character | Best For |
|-------|-----------|----------|
| **Sine** | Smooth, natural | Vibrato, filter sweeps |
| **Triangle** | Linear | Symmetric modulation |
| **Saw** | Ramp | One-direction effects |
| **Square** | On/Off | Gating, stepped |
| **Random** | Unpredictable | Chaos, textures |

### Retrigger Options

**Retrigger ON:**
- LFO restarts phase on each note
- Consistent modulation
- Best for: rhythmic effects

**Retrigger OFF:**
- LFO free-runs
- Different phase each note
- Best for: organic variation

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm
