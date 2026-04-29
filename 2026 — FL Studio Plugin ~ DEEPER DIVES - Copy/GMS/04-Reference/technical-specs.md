# GMS Technical Specifications

Complete technical reference for Groove Machine Synth.

## Plugin Overview

| Attribute | Value |
|-----------|-------|
| **Plugin Name** | GMS (Groove Machine Synth) |
| **Type** | Hybrid Wavetable Synthesizer |
| **Category** | Generator / Instrument |
| **Developer** | Image-Line (Maxx Claster) |
| **Presets** | Toby Emerson, Arlo G (nucleon) |
| **Platforms** | FL Studio Desktop, FL Studio Mobile |

[SRC: IL-MAN]

---

## Engine Specifications

### Oscillator System
| Feature | Specification |
|---------|---------------|
| Oscillators | 3 independent |
| Waveform Types | Sine, Triangle, Square, Pulse, Sawtooth, Custom (.wav) |
| Pitch Range | ±24 semitones |
| Fine Tune | ±100 cents |
| Wavetable Loading | Drag & drop .wav files |

### Modulation Modes
| Mode | Description |
|------|-------------|
| 1 SYNC | Hard sync between OSC1 and OSC2 |
| 2 to 1 FM | Frequency modulation (OSC2 modulates OSC1) |
| 2 to 1 RM | Ring modulation (OSC2 × OSC1) |

### Unisono System
| Parameter | Range |
|-----------|-------|
| Voices | 1-16 |
| Stereo Spread | 0-100% |
| Detune | 0-100% |
| Phase | 0-360° |

### Filter
| Feature | Specification |
|---------|---------------|
| Types | LP (Low Pass), BP (Band Pass), HP (High Pass) |
| Cutoff | 0-100% |
| Resonance | 0-100% |
| Keyboard Tracking | 0-100% |

---

## Envelope Specifications

### Envelope Generators (EG1 & EG2)
| Parameter | Range | Destinations |
|-----------|-------|--------------|
| Attack | 0-100% | CUTOFF, RES, PITCH, PAN, AMPLITUDE, OSC MIX, AMOUNT, OSC1-3 PITCH |
| Decay | 0-100% | Same as above |
| Amount | ±100% | Bipolar modulation |
| Invert | On/Off | Phase inversion |

### Level Envelope (ADSR)
| Stage | Range |
|-------|-------|
| Attack | 0-100% |
| Decay | 0-100% |
| Sustain | 0-100% |
| Release | 0-100% |
| Amplitude | 0-100% (global volume) |

---

## LFO Specifications

| Parameter | LFO 1 | LFO 2 |
|-----------|-------|-------|
| Rate | 0-100% | 0-100% |
| Sync | None/Beat/Bar | None/Beat/Bar |
| Amount | ±100% | ±100% |
| Retrigger | On/Off | On/Off |
| Invert | On/Off | On/Off |
| Shape | 8 types | 8 types |

### LFO Shapes
1. Sine (bipolar: ±1)
2. Triangle (unipolar: 0 to 1)
3. Saw (unipolar)
4. Square (unipolar)
5-8. Additional variations

**Note:** Sine is bipolar (generates +1 and -1), others are unipolar (0 to 1).

---

## FX Rack Specifications

### Signal Flow
```
DIST → CRSH → FLNG → PHSR → LPF → HPF → ECHO → RVRB → PAN → TRNC
```

### Effect Parameters

| Effect | X Parameter | Y Parameter |
|--------|-------------|-------------|
| **DIST** | Distortion amount (0-100%) | Low pass cutoff (0-100%) |
| **CRSH** | Sample-rate reduction (0-100%) | Low pass cutoff (0-100%) |
| **FLNG** | Depth (0-100%) | Feedback (0-100%) |
| **PHSR** | Depth (0-100%) | Feedback (0-100%) |
| **LPF** | Cutoff frequency (0-100%) | Resonance (0-100%) |
| **HPF** | Cutoff frequency (0-100%) | Resonance (0-100%) |
| **ECHO** | Feedback amount (0-100%) | Filtering (0-100%) |
| **RVRB** | Feedback/decay (0-100%) | Wet level (0-100%) |
| **PAN** | Left/Right position (0-100%) | Binaural effect (0-100%) |
| **TRNC** | Release time (0-100%) | Drop level (0-100%) |

### LFO Control
- Each effect's X and Y can be armed to LFO
- LFO Multiplier: 0-100%
- Sync: Bar or Beat

---

## EQ Specifications

### 5-Band Equalizer (Post-FX)
| Band | Center Frequency | Type |
|------|------------------|------|
| Band 1 | 60 Hz | Low Shelf |
| Band 2 | 220 Hz | Bell |
| Band 3 | 1500 Hz | Bell |
| Band 4 | 8000 Hz | Bell |
| Band 5 | 12000 Hz | High Shelf |

---

## MIDI Specifications

### Supported Controllers
- **VELOCITY** - Assignable to various targets
- **MODULATION** - Mod wheel mapping
- **AFTERTOUCH** - Pressure mapping
- **PITCH BEND** - Configurable range

### Velocity to Level
- Switch: Enable/disable
- Basic velocity-to-volume relationship

---

## Keyboard Specifications

| Feature | Range/Options |
|---------|---------------|
| Octave | ±4 octaves |
| Mono Voice | On/Off with portamento |
| Frequency Slide | 0-100% (portamento time) |
| Global Pitch | ±12 semitones |
| Global Pan | L100 to R100 |

---

## Performance Specifications

### Polyphony
- **Mode:** Polyphonic (multiple voices)
- **Mono Voice:** Monophonic with portamento
- **Unisono:** 1-16 voices per note

### CPU Usage
| Configuration | Relative Load |
|---------------|----------------|
| 1 voice, no FX | Low |
| 4 voices, 2 FX | Medium |
| 8+ voices, all FX | High |
| 16 voices, 10 FX | Very High |

**Optimization:** Use freeze/render for heavy patches.

---

## File Formats

### Presets
- **Format:** .gms
- **Compatibility:** FL Studio Desktop & Mobile
- **Sharing:** Cross-platform compatible

### Wavetables
- **Format:** .wav files
- **Loading:** Drag & drop or file browser
- **Ideal Length:** Single cycle (2048 samples typical)

---

## Integration

### FL Studio Desktop
- Channel Rack instrument
- Mixer routing
- Patcher compatible
- Automation support

### FL Studio Mobile
- Same engine
- .gms preset compatibility
- Touch-optimized interface

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm
