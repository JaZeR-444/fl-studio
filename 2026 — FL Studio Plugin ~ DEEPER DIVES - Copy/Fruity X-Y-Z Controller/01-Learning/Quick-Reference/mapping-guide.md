# Output-to-Parameter Mapping Guide

## Standard Mapping Scenarios

### 1. Spatial Positioning (3D Audio)

| Axis | Target Parameter | Value Range | Result |
|------|-----------------|-------------|--------|
| X | Pan | 0% = Hard Left, 100% = Hard Right | Stereo positioning |
| Y | Filter Cutoff | 0% = Closed, 100% = Open | Near/far depth illusion |
| Z | Reverb Send | 0% = Dry, 100% = Wet | Distance perception |

### 2. Timbre Control (Synthesis)

| Axis | Target Parameter | Value Range | Result |
|------|-----------------|-------------|--------|
| X | Oscillator Mix | 0% = Saw, 100% = Square | Waveform morph |
| Y | Filter Cutoff | 0% = Dark, 100% = Bright | Tone brightness |
| Z | Resonance | 0% = Flat, 100% = Peaky | Emphasis control |

### 3. Effect Chain Morphing

| Axis | Target Parameter | Value Range | Result |
|------|-----------------|-------------|--------|
| X | Chorus Wet/Dry | 0% = Dry, 100% = Wet | Modulation amount |
| Y | Phaser Rate | 0% = Slow, 100% = Fast | Sweep speed |
| Z | Delay Feedback | 0% = Short, 100% = Long | Echo density |

### 4. Drum Processing Dynamics

| Output | Target Parameter | Trigger Point | Result |
|--------|-----------------|---------------|--------|
| Speed | Compression Ratio | >70% | Harder compression on fast hits |
| Acceleration | Transient Boost | Any spike | Enhanced attack on accents |
| X | Pan | Continuous | Positioning |

## Vibe-to-Parameter Translation

| Vibe Goal | X Mapping | Y Mapping | Z Mapping |
|-----------|-----------|-----------|-----------|
| **WARMTH** | Oscillator detune | Filter cutoff (low) | Drive amount |
| **CLARITY** | High shelf boost | Exciter mix | Presence EQ |
| **DEPTH** | Stereo width | Reverb time | Delay feedback |
| **PUNCH** | Transient shaper | Compression threshold | Saturation |
| **AIR** | High-pass filter | Sheen/brightness | Air EQ boost |

## Speed & Acceleration Applications

### Speed → Common Targets
- **Filter envelope amount**: Faster = more pronounced envelope
- **Distortion drive**: Moving = more grit
- **LFO rate**: Speed controls modulation speed
- **Volume**: Velocity-sensitive dynamics

### Acceleration → Common Targets
- **Note trigger**: Start moving = new note
- **Accent boost**: Sudden start = volume spike
- **Envelope attack**: Gesture attack = sound attack
- **Effect send**: Accent = throw to reverb/delay

## Multi-Parameter Macros

### Macro 1: Complete Timbre Sculpting
```
X → Pitch (±7 semitones)
Y → Cutoff (full range)
Z → Resonance (0-80%)
Speed → LFO depth (0-100%)
Acceleration → Distortion (0-50%)
```

### Macro 2: Spatial Movement
```
X → Pan (full stereo)
Y → Volume (fade in/out)
Z → Reverb send (enter space)
Speed → Filter opening (arrival effect)
```

### Macro 3: Effect Morph
```
X → Phaser depth
Y → Chorus rate
Z → Delay time
Speed → All effect levels
```

## Quick Mapping Reference Table

| If You Want... | Map X To... | Map Y To... | Map Z To... |
|----------------|-------------|-------------|-------------|
| **Panning instrument** | Pan | Volume | Reverb |
| **Filter sweeps** | Resonance | Cutoff | Drive |
| **Synth morphing** | Osc A/B mix | Cutoff | Envelope depth |
| **Effect throws** | Delay send | Reverb send | Chorus send |
| **Dynamic drums** | Pan | Speed→Comp | Accel→Transient |
| **3D synthesis** | Pitch | Timbre | Space |

[SRC: IL-MAN]
