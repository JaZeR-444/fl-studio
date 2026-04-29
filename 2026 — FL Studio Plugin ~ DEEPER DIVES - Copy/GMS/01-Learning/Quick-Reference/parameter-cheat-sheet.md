# GMS Parameter Cheat Sheet

Quick reference for all GMS parameters and their ranges.

## Synth Panel Parameters

### Oscillator Section (3 Oscillators)

| Parameter | Range | Function |
|-----------|-------|----------|
| **WAVESHAPE** | Preset/Custom | Select waveform or load .wav file |
| **PITCH** | ±24 semitones | Coarse pitch adjustment |
| **FINE** | ±100 cents | Fine pitch adjustment (±1 semitone) |

[SRC: IL-MAN]

---

## Modulation Section

| Parameter | Options | Function |
|-----------|---------|----------|
| **Mode** | 1 SYNC, 2 to 1 FM, 2 to 1 RM | Oscillator interaction mode |
| **AMOUNT** | 0-100% | Modulation depth/intensity |

**Mode Details:**
- **1 SYNC:** OSC1 syncs to OSC2 frequency
- **2 to 1 FM:** OSC2 modulates OSC1 frequency
- **2 to 1 RM:** OSC2 ring modulates OSC1

---

## Mix Section

| Parameter | Range | Function |
|-----------|-------|----------|
| **OSC 2** | 0-100% | Balance between OSC1 and OSC2 |
| **INV** | On/Off | Invert OSC2 phase |
| **OSC 3** | 0-100% | Mix of (OSC1+2) with OSC3 |
| **NOISE** | 0-100% | White noise blend |

---

## Phase Section

| Parameter | Range | Function |
|-----------|-------|----------|
| **OSC 2** | 0-360° | OSC2 starting phase |
| **RETRIG** | On/Off | Retrigger OSC2 phase on note |
| **UNISONO** | 0-360° | Unison phase offset |

---

## Unisono Section

| Parameter | Range | Function | Best Practice |
|-----------|-------|----------|---------------|
| **VOICES** | 1-16 | Unison voice count | 4-8 for leads, 1-2 for bass |
| **STEREO** | 0-100% | Stereo spread | Keep bass <20% |
| **DETUNE** | 0-100% | Voice detuning | 30-50% typical |

---

## Keyboard Section

| Parameter | Range | Function |
|-----------|-------|----------|
| **OCTAVE** | ±4 octaves | Global octave shift |
| **MONO VOICE** | On/Off | Monophonic mode with portamento |

---

## Articulation Panel

### Filter Section

| Parameter | Range | Function |
|-----------|-------|----------|
| **CUTOFF** | 0-100% | Filter cutoff frequency |
| **RES** | 0-100% | Filter resonance |
| **KBD** | 0-100% | Keyboard tracking |
| **TYPE** | LP/BP/HP | Filter type |

### Envelope Section (EG1 & EG2)

| Parameter | Range | Function |
|-----------|-------|----------|
| **ATK** | 0-100% | Attack time |
| **DEC** | 0-100% | Decay time |
| **AMNT** | ±100% | Envelope amount |
| **INVERT** | On/Off | Invert envelope |
| **DEST** | Various | Modulation target |

**Envelope Destinations:**
- CUTOFF, RES, PITCH, PAN, OSC MIX, OSC1-3 PITCH, etc.

### LFO Section (LFO1 & LFO2)

| Parameter | Range | Function |
|-----------|-------|----------|
| **RATE** | 0-100% | LFO speed |
| **SYNC** | None/Beat/Bar | Tempo sync |
| **AMNT** | ±100% | Modulation amount |
| **RETRIG** | On/Off | Retrigger on note |
| **DEST** | Various | Modulation target |
| **INVERT** | On/Off | Invert LFO |
| **SHAPE** | 8 shapes | LFO waveform |

**LFO Shapes:**
1. Sine (bipolar)
2-8. Triangle, Saw, Square, etc. (unipolar)

### Level Envelope (LVL EG)

| Parameter | Range | Function |
|-----------|-------|----------|
| **Amplitude** | 0-100% | Overall volume |
| **ATTACK** | 0-100% | Attack time |
| **DECAY** | 0-100% | Decay time |
| **SUSTAIN** | 0-100% | Sustain level |
| **RELEASE** | 0-100% | Release time |

### Channel Section

| Parameter | Range | Function |
|-----------|-------|----------|
| **OUTPUT** | 0-100% | Channel volume |
| **PAN** | L100-R100 | Stereo position |
| **PITCH** | ±12 semitones | Global pitch |
| **FREQ SLIDE** | 0-100% | Portamento time |

---

## FX Rack (10 Effects)

| FX | X Parameter | Y Parameter |
|----|-------------|-------------|
| **DIST** | Distortion amount | Low pass cutoff |
| **CRSH** | Sample rate reduction | Low pass cutoff |
| **FLNG** | Depth | Feedback |
| **PHSR** | Depth | Feedback |
| **LPF** | Cutoff frequency | Resonance |
| **HPF** | Cutoff frequency | Resonance |
| **ECHO** | Feedback | Filtering |
| **RVRB** | Feedback (decay) | Wet level |
| **PAN** | L/R position | Binaural effect |
| **TRNC** | Release time | Drop level |

---

## MIDI/EQ Panel

### MIDI Controllers

| Controller | Function |
|------------|----------|
| **VELOCITY** | Assign to GMS targets |
| **MODULATION** | Mod wheel mapping |
| **AFTERTOUCH** | Pressure mapping |
| **PITCH BEND** | Bend range |

### 5-Band EQ (Post-FX)

| Band | Center Frequency | Range |
|------|-------------------|-------|
| Band 1 | 60 Hz | Low shelf |
| Band 2 | 220 Hz | Bell |
| Band 3 | 1500 Hz | Bell |
| Band 4 | 8000 Hz | Bell |
| Band 5 | 12000 Hz | High shelf |

---

## Quick Shortcuts

| Action | Shortcut |
|--------|----------|
| Load wavetable | Drop .wav on oscillator |
| Toggle FX | Click effect name |
| Momentary FX | Click in X/Y panel |
| Select envelope | Click EG1/EG2 switch |
| Select LFO | Click LFO1/LFO2 switch |

---

## Parameter Ranges Summary

### Audio Rate Parameters (Hz/kHz)
- Filter cutoff: 20Hz - 20kHz (effective range)
- LFO rates: 0.1Hz - 30Hz (approximate)

### Time-Based Parameters (ms/s)
- Attack: ~1ms - 5s
- Decay: ~1ms - 10s
- Release: ~1ms - 10s

### Percentage Parameters (0-100%)
- Most modulation amounts
- Mix balances
- Effect parameters

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm
