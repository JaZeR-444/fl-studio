# Kepler Exo Pad & FX Workflows

## Exo Dusty VHS

### Sound Profile
Lo-fi, nostalgic texture with tape warble and degraded character.

### Recommended Preset
`genre/05-exo-dusty-vhs.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, -1 octave, 70% | Body |
| Oscillator 2 | Triangle, -2 octave, 65% | Warmth |
| Oscillator 3 | Square, 0 octave, 40% | Click |
| Oscillator 4 | Sine, -1 octave, 55% | Subtle |
| Sub Oscillator | Sine, -2 octave, 30% | Foundation |
| Filter A | Lowpass, 1800Hz, Res 22, Drive 8 | Muffled |
| Filter B | Highpass, 150Hz, Res 15, Drive 0 | Cleanup |
| Envelope | A:180, D:600, S:80, R:1000 | Slow |
| Modulation | Env→FilterA: 20%, LFO1→Pan: 65% | Warble |
| Stereo Width | 150% | Maximum |

### Chain Processing
```
Kepler Exo → Vintage Phaser
  - Mix: 35%
  - Rate: 0.25Hz
  → Fruily Reverb 2
  - Type: Room
  - Decay: 2.5s
  - Mix: 28%
  → Tape Saturation
  - Drive: 4%
```

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More warble | Increase LFO1→Pan to 75% |
| Cleaner | Reduce Stereo Width to 100% |
| More degraded | Increase LFO1 rate to 0.3Hz |
| Darker | Reduce FilterA cutoff to 1500Hz |

---

## Exo Risers

### Sound Profile
Building tension with multiple oscillator layers and filter automation.

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, +1 octave, 85% | Brightness |
| Oscillator 2 | Saw, +1 octave, 80% | Thickness |
| Oscillator 3 | Square, +1 octave, 65% | Edge |
| Oscillator 4 | Saw, +2 octave, 50% | Air |
| Sub Oscillator | Sine, -2 octave, 0% | (Not needed) |
| Filter A | Lowpass, sweep 0→5000Hz | Building |
| Filter B | Lowpass, 8000Hz, Res 20, Drive 5 | Air |
| Envelope | A:200, D:400, S:80, R:300 | Slow rise |
| Modulation | LFO1→FilterA: 60% | Movement |

### Automation Sequence
1. Bar 1: FilterA 0→800Hz
2. Bar 2: FilterA 800→2000Hz
3. Bar 3: FilterA 2000→4000Hz, increase LFO rate
4. Bar 4: FilterA 4000→5000Hz, full intensity

### Chain Processing
```
Kepler Exo → White Noise (50% mix)
  → Fruily Limiter
  - Ceiling: -0.3dB
  - Attack: 0.5ms
```

---

## Exo Brass Stabs

### Sound Profile
Bold, punchy stabs with dual-filter architecture for aggressive impact.

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, 0 octave, 90% | Core |
| Oscillator 2 | Saw, 0 octave, 85% | Body |
| Oscillator 3 | Square, -1 octave, 55% | Click |
| Oscillator 4 | Triangle, 0 octave, 45% | Warmth |
| Sub Oscillator | Sine, -2 octave, 35% | Weight |
| Filter A | Lowpass, 3500Hz, Res 42, Drive 12 | Bold |
| Filter B | Lowpass, 6000Hz, Res 25, Drive 5 | Air |
| Envelope | A:2, D:60, S:0, R:40 | Short |
| Modulation | Env→FilterA: 85% | Punch |

### Chain Processing
```
Kepler Exo → Fruily Parametric EQ 2
  - Bell +4dB at 3kHz
  → Fruily Compressor
  - Attack: 1ms
  - Release: 40ms
  - Ratio: 5:1
```

---

## Exo Textural Layers

### Sound Profile
Evolving atmospheric layers for background depth.

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Sine, -2 octave, 75% | Subtle |
| Oscillator 2 | Triangle, -1 octave, 70% | Body |
| Oscillator 3 | Saw, -1 octave, 55% | Air |
| Oscillator 4 | Square, 0 octave, 40% | Texture |
| Sub Oscillator | Sine, -2 octave, 50% | Depth |
| Filter A | Lowpass, 2000Hz, Res 18, Drive 5 | Soft |
| Filter B | Bandpass, 1500Hz, Res 30, Drive 3 | Focus |
| Envelope | A:400, D:800, S:85, R:1500 | Long |
| Modulation | LFO1→FilterB: 45%, LFO2→Pan: 35% | Evolving |

### Chain Processing
```
Kepler Exo → Vintage Chorus
  - Mix: 45%
  - Depth: 60%
  → Fruily Reverb 2
  - Type: Cathedral
  - Decay: 5s
  - Mix: 35%
```

---

## FX Workflow Summary

### By Purpose
| FX Type | Oscillator Setup | Filter Strategy | Modulation |
|---------|------------------|-----------------|-------------|
| Riser | 4 saws, high oct | Sweep up | LFO to filter |
| Dwnlifter | 2 saws, low | Sweep down | Static |
| Texture | Mixed waveforms | Static with LFO | Multiple targets |
| Impact | 4 oscillators | High resonance | Fast envelope |
| Pad | Sine/triangle mix | Soft lowpass | LFO pan |

### By Genre
| Genre | Recommended FX |
|-------|----------------|
| Trap | 4-bar risers, glitch textures |
| EDM | 8-bar builds, massive risers |
| R&B | Smooth swells, subtle transitions |
| Lo-Fi | VHS warble, tape degradation |
| Cinematic | Long evolutions, complex textures |

### Exo-Specific Techniques
| Technique | How To |
|-----------|--------|
| Maximum width | 4 oscillators, wide detune, Stereo Width 150% |
| Evolving pad | Slow LFO to FilterB, LFO2 to Pan |
| Aggressive stab | High FilterA resonance, fast envelope |
| Tape warble | LFO1→Pan at 65%, slow rate |
| Dual-layer | FilterA for body, FilterB for air |
