# Fruity Vocoder: Pad Workflows

## Overview
Pads as carriers are the foundation of most vocoding applications—providing sustained harmonic content for the vocoder to shape.

---

## Workflow 1: Classic Pad Carrier

### Concept
Rich, sustained pad provides harmonic foundation for vocal modulator.

### Pad Design
**Basic Rich Pad:**
```
Oscillators:
  - Osc 1: Sawtooth (full level)
  - Osc 2: Sawtooth, detuned +7 cents (70% level)
  - Osc 3: Triangle, detuned -7 cents (50% level)
  - Optional: Noise (10-15%) for sibilance

Filter:
  - Type: Low-pass
  - Cutoff: Full open or slight roll-off at 8kHz
  - No envelope modulation (static)

Envelope:
  - Attack: 500ms-2s (slow fade in)
  - Decay: 0 (not used)
  - Sustain: 100%
  - Release: 3-8s (long sustain after note off)
```

### Vibe-Specific Pad Recipes

#### Moody Pad
```
Oscillators: Saw + Triangle blend (darker)
Filter: LPF at 4kHz
Envelope: Attack 2s, Release 8s
Chorus: 20% rate, 25% depth
Result: Warm, atmospheric, sustained
```

#### Upbeat Pad
```
Oscillators: Bright sawtooth
Filter: Slight LPF at 10kHz
Envelope: Attack 300ms, Release 4s
Chorus: 10% rate, 15% depth
Result: Present, clear, punchy
```

#### Psychedelic Pad
```
Oscillators: FM synthesis, complex ratios
Filter: Modulated LFO on cutoff
Envelope: Variable, unpredictable
Effects: Phaser, random modulation
Result: Evolving, strange, otherworldly
```

#### Jazzy Pad
```
Oscillators: 2 saw + 1 triangle, slight detune
Filter: LPF at 3kHz (warm)
Envelope: Attack 1s, Release 5s
Chorus: 8% rate, 20% depth (subtle)
Result: Vintage, sophisticated, warm
```

#### Vibey Pad
```
Oscillators: Detuned saw (±5 cents)
Filter: Slow LFO on cutoff (0.05Hz)
Envelope: Attack 800ms, Release 6s
Chorus: 12% rate, 18% depth
Result: Living, breathing, modern
```

---

## Workflow 2: Pad as Modulator

### Concept
Use pad's spectral content to shape another sound—unusual application.

### Setup
```
Evolving Pad ──► Modulator (L)
                   ├──► Vocoder
Drum/Sample ──► Carrier (R)
```

**Result:** Carrier follows pad's spectral evolution.

**Applications:**
- Ambient texture creation
- Evolving rhythmic patterns
- Sound design experiments

---

## Workflow 3: Multi-Pad Layering

### Concept
Layer multiple pads through same vocoder for complex harmonic content.

### Setup
```
Pad 1 (warm) ──► R channel
Pad 2 (bright) ──► R channel (mixed)
Vocal ──► L channel
All ──► Vocoder
```

**Benefits:**
- Richer carrier spectrum
- More interesting vocoded texture
- Combined character of both pads

---

## Mini-Recipes

### Recipe A: 60-Second Rich Pad (1 minute)
1. Load 3xOsc or Sytrus
2. Sawtooth + triangle blend
3. Full frequency range
4. Long release (5s+)
5. Slight chorus
6. Route to vocoder R channel

### Recipe B: Mood Pad (2 minutes)
1. Warm analog-style patch
2. Filter at 4kHz
3. Long attack (2s), release (8s)
4. Chorus for width
5. Use with negative FORM (-0.4)

### Recipe C: Bright Hook Pad (2 minutes)
1. Bright unfiltered saw
2. Add 15% white noise
3. Medium envelope (500ms/4s)
4. Use with positive FORM (+0.25)

---

## Pad + Vocoder Combinations

| Goal | Pad Type | Vocoder Settings | Result |
|------|----------|------------------|--------|
| **Atmosphere** | Warm, filtered | Slow attack/decay, negative FORM | Moody bed |
| **Hook clarity** | Bright, rich | Fast attack, high bands, positive FORM | Clear vocoding |
| **Experimental** | FM, complex | Low bands, INV On, automation | Alien textures |
| **Vintage** | Simple, analog | 16 bands, moderate BW, neutral FORM | Retro character |
| **Modern** | Detuned, moving | Medium bands, moderate BW, slight positive | Vibey layer |

---

## Automation Ideas

### Pad Movement
```
Pad filter cutoff: Slow LFO (0.1Hz)
Result: Living carrier, evolving vocoded output
```

### Pad Switching
```
Verse: Warm pad
Chorus: Bright pad
Automation: Crossfade at section change
Result: Section-based character shift
```

### Layer Blending
```
Warm pad: 100% → 50%
Bright pad: 0% → 50%
Over 4 bars
Result: Gradual brightening
```

---

## Vibe Applications

### Moody Atmosphere
- Slow, evolving pads
- 8+ second releases
- Filtered, warm character
- FORM: -0.3 to -0.5

### Upbeat Energy
- Bright, present pads
- Medium envelopes (300ms/4s)
- Full spectrum
- FORM: +0.2 to +0.3

### Psychedelic Texture
- Complex FM pads
- Unpredictable movement
- Extreme modulation
- FORM: Automated ±0.6

### Jazzy Sophistication
- Simple analog-style
- Warm filtering
- Subtle chorus
- FORM: 0.0

### Vibey Modern
- Rich with slow movement
- Breathing quality
- Stereo width
- FORM: +0.1 to +0.2

---

## Pitfalls

| Pitfall | Problem | Solution |
|---------|---------|----------|
| Too thin | Carrier lacks harmonics | Add oscillators, use saw/square |
| No sibilance | Missing high frequencies | Add 10-15% white noise |
| Too aggressive | Pad too bright/harsh | Filter slightly, use triangle blend |
| Static | Pad too simple | Add chorus, detune, or movement |
| Muddy | Too much low-end | High-pass pad at 80Hz |
| Release too short | Gaps between phrases | Extend release to 5s+ |

---

## Pad Library Quick Reference

| Type | Oscillators | Filter | Envelope | Chorus | Best For |
|------|-------------|--------|----------|--------|----------|
| **Moody Warm** | Saw+Tri | LPF 4kHz | Slow | 20% | Moody vibes |
| **Bright Clear** | Saw | Open | Medium | 10% | Upbeat hooks |
| **Vintage** | 2Saw+Tri | LPF 3kHz | Medium | 15% | Jazzy vibes |
| **Modern** | Detuned Saw | LFO mod | Medium | 12% | Vibey layers |
| **Experimental** | FM | Chaos | Variable | 30% | Psycelic |
| **Minimal** | Tri | Slight LPF | Slow | 0% | Subtle bed |

---

**Instrument:** Pads
**Source:** IL-MAN, REPUTABLE
**Last Updated:** 2026-02-03
