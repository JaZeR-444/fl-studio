# Hybrid Synthesis Architecture

Understanding how GMS combines multiple synthesis methods into a unified engine.

## Overview

GMS (Groove Machine Synth) is a **multitimbral hybrid synthesizer** combining three distinct synthesis paradigms:
- **Subtractive Synthesis** - Traditional filtering of rich waveforms
- **FM (Frequency Modulation)** - Complex harmonic generation through frequency modulation
- **RM (Ring Modulation)** - Amplitude modulation creating inharmonic sidebands

[SRC: IL-MAN]

---

## The Three-Layer Architecture

### Layer 1: Oscillator Foundation
Three independent wavetable oscillators provide the raw harmonic content:

```
OSC 1 (Primary) → Mix Stage
OSC 2 (Secondary) → Mix Stage
OSC 3 (Tertiary) → Mix Stage
        ↓
   Modulation Stage
        ↓
   Filter Stage
        ↓
   FX Rack (10 effects)
        ↓
   5-Band EQ
        ↓
   Output
```

### Layer 2: Modulation Matrix
Inter-oscillator relationships create hybrid tones:
- **SYNC** - Hard sync for aggressive harmonics
- **FM** - Frequency modulation for metallic/bell tones
- **RM** - Ring modulation for harsh inharmonic textures

### Layer 3: Sound Shaping
- **Multi-mode Filter** (LP/BP/HP) with keyboard tracking
- **Dual Envelope Generators** (EG1, EG2) for complex articulation
- **Dual LFOs** for rhythmic modulation

---

## Synthesis Mode Interactions

### Subtractive Mode (Default)
**Configuration:** All oscillators independent, no modulation
- OSC 1 + OSC 2 + OSC 3 → Mix → Filter
- Classic analog-style synthesis
- Rich, warm tones from layered waveforms

### FM Mode
**Configuration:** OSC 2 → FM → OSC 1
- **Carrier:** OSC 1 (determines fundamental pitch)
- **Modulator:** OSC 2 (adds harmonic complexity)
- **Ratio:** Controlled by AMOUNT parameter
- **Result:** Bell-like, metallic, or complex harmonic tones

**Common FM Ratios:**
- 1:1 - Rich, full sound
- 2:1 - Bell-like harmonics
- 3:1 - Hollow, reed-like tones

### Ring Modulation Mode
**Configuration:** OSC 2 → RM → OSC 1
- Multiplies OSC 1 and OSC 2 amplitudes
- Creates sum and difference frequencies
- **Result:** Inharmonic, metallic, industrial textures

### Sync Mode
**Configuration:** OSC 1 synced to OSC 2 frequency
- OSC 2 determines sync point
- OSC 1 waveform resets at sync frequency
- **Result:** Bright, aggressive "sync sweep" sounds

---

## Hybrid Combinations

### Technique 1: FM + Subtractive
1. Enable FM mode (OSC 2 modulates OSC 1)
2. Add OSC 3 as independent sub-oscillator
3. Apply low-pass filtering
4. **Result:** Complex bass with solid low-end

### Technique 2: RM + Unisono
1. Enable Ring Modulation
2. Set Unisono to 8+ voices
3. Add stereo spread
4. **Result:** Wide, textured soundscapes

### Technique 3: Sync + FX Distortion
1. Enable Sync mode
2. Modulate OSC 2 pitch for sync sweep
3. Add DIST effect
4. **Result:** Aggressive lead sounds

---

## Signal Flow Deep Dive

```
[MIDI Input]
    ↓
[Pitch Calculation] → Keyboard Tracking → Filter Cutoff
    ↓
[Oscillator Section]
    - OSC 1: Waveshape + Pitch + Fine
    - OSC 2: Waveshape + Pitch + Fine + Phase
    - OSC 3: Waveshape + Pitch + Fine
    ↓
[Modulation Section]
    - SYNC: OSC1 freq controlled by AMOUNT
    - FM: OSC2 modulates OSC1 freq
    - RM: OSC2 multiplies OSC1 amplitude
    ↓
[Mix Section]
    - OSC 1+2 Mix (with Invert option)
    - OSC 3 Mix
    - Noise Mix
    ↓
[Unisono]
    - 1-16 voices
    - Stereo spread
    - Detune
    ↓
[Filter Section]
    - LP/BP/HP types
    - Cutoff + Resonance
    - Keyboard tracking
    ↓
[Envelope Generators]
    - EG1 → Various destinations
    - EG2 → Various destinations
    - Level Envelope (Amplitude)
    ↓
[LFO Section]
    - LFO1 → Various destinations
    - LFO2 → Various destinations
    ↓
[FX Rack] (10 effects in series)
    - DIST → CRSH → FLNG → PHSR → LPF → HPF → ECHO → RVRB → PAN → TRNC
    ↓
[5-Band EQ]
    - 60Hz, 220Hz, 1500Hz, 8000Hz, 12000Hz
    ↓
[Output]
```

---

## Design Philosophy

GMS bridges vintage and modern synthesis:
- **Vintage elements:** 3-oscillator architecture, analog-style envelopes
- **Modern features:** Wavetable loading, 10 FX, deep modulation matrix
- **Hybrid power:** Cross-platform (FL Studio Desktop + Mobile)

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm
