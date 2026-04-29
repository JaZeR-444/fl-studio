# Signal Flow Guide

Visual guide to Harmor's audio signal path from input to output.

[SRC: IL-MAN]

---

## Overview

Harmor processes sound through multiple stages, from the dual additive engines through unique processors to global effects. Understanding this flow helps you make better sound design decisions.

---

## Complete Signal Flow Diagram

```
MIDI NOTE INPUT
      ↓
┌─────────────────────────────────────────────────────────┐
│                    ENGINE A or B                          │
│  (Selectable via A/B buttons, both run simultaneously)    │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  PARTIAL GENERATION (516 sine waves per voice)            │
│       ↓                                                   │
│  ┌──────────────┐     ┌──────────────┐                    │
│  │  SUB TIMBRE  │     │  MAIN TIMBRE │                    │
│  │  (Partials   │     │  (Partials   │                    │
│  │   1-32)      │     │   33-516)    │                    │
│  │              │     │              │                    │
│  │ • Level      │     │ • Level      │                    │
│  │ • Shape      │     │ • Shape      │                    │
│  │ • Slope      │     │ • Slope      │                    │
│  │ • Width      │     │ • Width      │                    │
│  └──────┬───────┘     └──────┬───────┘                    │
│         ↓                     ↓                           │
│         └──────────┬──────────┘                           │
│                    ↓                                       │
│            COMBINED TIMBRE                                 │
│                    ↓                                       │
│  ┌──────────────────────────────────────────┐              │
│  │           UNIQUE PROCESSORS              │              │
│  │                                          │              │
│  │  1. PRISM (Harmonic Warping)             │              │
│  │     ↓                                    │              │
│  │  2. BLUR (Partial Smearing)              │              │
│  │     ↓                                    │              │
│  │  3. PLUCK (Decay Shaping)                │              │
│  │     ↓                                    │              │
│  │  4. STRUM (Partial Detuning)           │              │
│  │                                          │              │
│  └──────────────────────────────────────────┘              │
│                    ↓                                       │
│  ┌──────────────────────────────────────────┐              │
│  │      CUSTOM FILTER (Drawn Curve)         │              │
│  │                                          │              │
│  │  • Can draw any frequency response       │              │
│  │  • Multiple points and curves            │              │
│  │  • Envelope modulation available         │              │
│  └──────────────────────────────────────────┘              │
│                    ↓                                       │
│  ┌──────────────────────────────────────────┐              │
│  │         ENVELOPE & LFO MODULATION        │              │
│  │                                          │              │
│  │  EG1, EG2 → Various destinations         │              │
│  │  LFO1, LFO2 → Various destinations       │              │
│  └──────────────────────────────────────────┘              │
│                    ↓                                       │
│         ENGINE OUTPUT (A or B)                              │
│                                                           │
└─────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────┐
│                   MIXER STAGE                           │
│                                                         │
│    Engine A Output ──┐                                  │
│                      ├──→ [ MIX KNOB ] ──→ Mixed       │
│    Engine B Output ──┘       0-100%                    │
│                                                         │
└─────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────┐
│                 GLOBAL EFFECTS                          │
│                                                         │
│  • Chorus                                               │
│  • Delay                                                │
│  • Reverb                                               │
│                                                         │
└─────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────┐
│              UNISON (if enabled)                        │
│                                                         │
│  • 1-9 voices                                           │
│  • Detune                                               │
│  • Stereo spread                                        │
│  • Blend                                                │
│                                                         │
└─────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────┐
│              MASTER OUTPUT                              │
│                                                         │
│  • Volume                                               │
│  • Pan                                                  │
│  • Output to FL Studio mixer                            │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## Per-Engine Detailed Flow

### Additive Generation

```
Phase 1: Partial Creation
┌─────────────────────────────────────┐
│  516 Sine Wave Oscillators          │
│  Each with:                         │
│  • Frequency (harmonic series)       │
│  • Amplitude (from timbre settings) │
│  • Phase (initial position)         │
│  • Envelope (per-partial contour)   │
└─────────────────────────────────────┘
              ↓
Phase 2: Timbre Shaping
┌─────────────────────────────────────┐
│  SUB SECTION (Partials 1-32)        │
│  • Level: Master amplitude          │
│  • Shape: Harmonic curve           │
│  • Slope: Rolloff rate             │
│  • Width: Stereo spread            │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│  MAIN SECTION (Partials 33-516)     │
│  • Level: Master amplitude          │
│  • Shape: Harmonic curve           │
│  • Slope: Rolloff rate             │
│  • Width: Stereo spread            │
└─────────────────────────────────────┘
              ↓
Combined = Base Additive Sound
```

### Processor Chain

```
Base Additive Sound
       ↓
┌──────────────────────────────────────┐
│  PRISM                             │
│  • Multiplies partial frequencies  │
│  • Creates inharmonic content      │
│  • Range: 0-100%                   │
└──────────────────────────────────────┘
       ↓
┌──────────────────────────────────────┐
│  BLUR                              │
│  • Spreads to adjacent partials    │
│  • Increases density               │
│  • Range: 0-100%                   │
└──────────────────────────────────────┘
       ↓
┌──────────────────────────────────────┐
│  PLUCK                             │
│  • Different decay per frequency   │
│  • Highs decay faster              │
│  • Lows sustain longer             │
│  • Range: 0-100%                   │
└──────────────────────────────────────┘
       ↓
┌──────────────────────────────────────┐
│  STRUM                             │
│  • Micro-detunes each partial      │
│  • Creates beating/thickness       │
│  • Range: 0-100%                   │
└──────────────────────────────────────┘
```

### Filter Section

```
Processed Sound
       ↓
┌──────────────────────────────────────┐
│  CUSTOM DRAWN FILTER                 │
│                                     │
│  • Draw any curve                   │
│  • Multiple points                  │
│  • Real-time display                │
│                                     │
│  Can be:                            │
│  • Low-pass                         │
│  • High-pass                        │
│  • Band-pass                        │
│  • Notch                            │
│  • Any combination                  │
│                                     │
│  EG Modulation available            │
└──────────────────────────────────────┘
```

### Modulation Routing

```
Envelope Generators
┌─────────────────────────────────────────────┐
│  EG1 (Primary)                              │
│  • Attack → Decay → Sustain → Release       │
│  • Bipolar amount (-100 to +100%)          │
│  • Assignable destination                   │
├─────────────────────────────────────────────┤
│  EG2 (Secondary)                            │
│  • Same architecture as EG1                 │
│  • Can modulate different target            │
└─────────────────────────────────────────────┘
              ↓
LFO Section
┌─────────────────────────────────────────────┐
│  LFO1 & LFO2                                │
│  • Rate: Speed (syncable)                   │
│  • Shape: Sine/Tri/Saw/Square/Random        │
│  • Amount: Modulation depth                 │
│  • Destination: Any parameter               │
│  • Phase: Start position                    │
│  • Retrig: Restart on note                  │
└─────────────────────────────────────────────┘
              ↓
Modulation Targets
┌─────────────────────────────────────────────┐
│  Common Destinations:                       │
│  • Timbre Level (Sub or Main)               │
│  • Filter Shape/Curve                       │
│  • Prism Amount                             │
│  • Volume                                   │
│  • Pitch (fine)                             │
│  • Pan                                      │
└─────────────────────────────────────────────┘
```

---

## A/B Mixing Stage

```
Engine A Output          Engine B Output
       ↓                        ↓
   [Volume]                 [Volume]
   [Pan]                    [Pan]
       ↓                        ↓
       └──────────┬─────────────┘
                  ↓
         [ MIX KNOB 0-100% ]
                  ↓
         0% = A only
         50% = Equal blend
         100% = B only
                  ↓
         Combined Output
```

---

## Resynthesis Flow (When Active)

```
Audio Sample Input (WAV/AIFF/etc)
              ↓
┌─────────────────────────────────────────────┐
│  ANALYSIS STAGE                             │
│                                             │
│  FFT Analysis                               │
│       ↓                                     │
│  Partial Extraction                         │
│       ↓                                     │
│  Phase & Amplitude Tracking                │
│       ↓                                     │
│  Time/Position Mapping                      │
└─────────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────────┐
│  PLAYBACK CONTROL (ADV Tab)                 │
│                                             │
│  • Time: Position in sample                   │
│  • Speed: Playback rate                       │
│  • Formant: Shift character                  │
└─────────────────────────────────────────────┘
              ↓
Converted to Partial Data
              ↓
┌─────────────────────────────────────────────┐
│  ADDITIVE RECONSTRUCTION                    │
│                                             │
│  516 Partials recreate the sample           │
│  Based on analysis data                     │
└─────────────────────────────────────────────┘
              ↓
Enters normal Harmor signal flow
```

---

## Global Effects Chain

```
Mixed Engine Output
       ↓
┌─────────────────────────────────────┐
│  CHORUS                             │
│  • Depth: Modulation amount          │
│  • Rate: LFO speed                  │
│  • Mix: Wet/dry blend               │
└─────────────────────────────────────┘
       ↓
┌─────────────────────────────────────┐
│  DELAY                              │
│  • Time: Echo delay                 │
│  • Feedback: Repeat amount          │
│  • Mix: Wet level                   │
│  • Sync: Tempo lock                 │
└─────────────────────────────────────┘
       ↓
┌─────────────────────────────────────┐
│  REVERB                             │
│  • Size: Room size                  │
│  • Damping: HF decay                │
│  • Mix: Wet level                   │
└─────────────────────────────────────┘
       ↓
Unison (if enabled)
       ↓
Master Output
```

---

## Unison Signal Flow

```
Effects Output
       ↓
┌─────────────────────────────────────┐
│  VOICE DUPLICATION                  │
│                                     │
│  Base voice → 2-9 copies            │
│                                     │
│  Each voice:                        │
│  • Slight detune (+/- cents)       │
│  • Pan position (spread)           │
│  • Phase offset                     │
└─────────────────────────────────────┘
       ↓
┌─────────────────────────────────────┐
│  BLENDING                           │
│                                     │
│  Mix parameter:                    │
│  • 0% = Dry (1 voice)               │
│  • 100% = Wet (all voices)           │
└─────────────────────────────────────┘
       ↓
Master Output
```

---

## Key Signal Flow Insights

### 1. Processor Order Matters

Prism → Blur → Pluck → Strum → Filter

**Cannot be reordered** - this is the fixed sequence.

### 2. A/B Engines are Identical

Both engines have the exact same architecture. The only difference is their parameter settings.

### 3. Effects are Global

Chorus, Delay, and Reverb are applied to the **mixed A/B output**, not per-engine.

### 4. Unison is Last

Unison happens after all effects, ensuring the entire processed sound gets widened.

### 5. Resynthesis Converts to Additive

Once analyzed, the sample becomes 516 partials and enters the same flow as synthesized sounds.

---

## CPU Load by Stage

| Stage | CPU Impact | Optimization Tip |
|-------|-----------|------------------|
| Partial Generation | Medium | Reduce active partials via filter |
| Prism | Medium | Disable when not needed |
| Blur | Low | Safe to use |
| Pluck | Low | Safe to use |
| Strum | Very Low | Always safe |
| Custom Filter | Low | Safe to use |
| Unison | High | Use 3-4 voices instead of 9 |
| Resynthesis | High at load | One-time analysis cost |

---

## Visualizing Your Sound

Use this flow to debug your patches:

1. **Too thin?** → Check Sub/Main balance, add Blur
2. **Too static?** → Add LFO modulation to Prism or Filter
3. **Too harsh?** → Increase Blur, reduce Prism
4. **Not enough low end?** → Boost Sub Timbre, check filter curve
5. **Phase issues?** → Reduce Unison, check Strum amount

---

**Version:** 1.0  
**Last Updated:** 2026-02-03
