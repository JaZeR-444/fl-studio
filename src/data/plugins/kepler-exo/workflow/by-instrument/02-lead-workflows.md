# Kepler Exo Lead Workflows

## Exo Stadium Supersaw

### Sound Profile
Massive, festival-ready supersaw with 4 oscillators + dual filters for ultimate width.

### Recommended Preset
`genre/03-exo-stadium-supersaw.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, 0 octave, 85% | Core |
| Oscillator 2 | Saw, 0 octave, 85% | Width |
| Oscillator 3 | Saw, 0 octave, 80% | Thickness |
| Oscillator 4 | Saw, +1 octave, 65% | Harmonics |
| Sub Oscillator | Sine, -2 octave, 0% | (Not needed) |
| Filter A | Lowpass, 4200Hz, Res 48, Drive 18 | Main power |
| Filter B | Lowpass, 8000Hz, Res 25, Drive 8 | Air control |
| Envelope | A:15, D:280, S:55, R:450 | Presence |
| Modulation | Env→FilterA: 70%, LFO1→FilterA: 45% | Movement |
| Stereo Width | 120% | Maximum spread |

### Exo-Specific Advantages
- **4 Oscillators:** 7 detuned voices create massive width
- **Dual Filters:** Independent high-end control
- **Expanded Modulation:** Filter movement with LFO1
- **Stereo Width:** Built-in width processing

### Genre Variations
- **Big Room:** Increase FilterA resonance to 52%, longer release (500ms)
- **Future Bass:** Softer attack (25ms), increase Stereo Width to 130%
- **Progressive House:** Moderate FilterA resonance (42%), LFO1→Pan instead
- **Hardstyle:** Higher resonance (55%), shorter decay (200ms)

### Chain Processing
```
Kepler Exo → Soft Clipper
  - Input reduction: 2.5dB
  → Fruity Limiter
  - Ceiling: -0.3dB
  - Gain: 6dB
  → Fruity Reverb 2
  - Type: Cathedral
  - Decay: 4s
  - Mix: 15%
```

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More massive | All 4 oscillators at 90% |
| Tighter mix | Osc3/4 at 60% each |
| More movement | Increase LFO1 rate to 0.7Hz |
| More aggressive | Increase FilterA resonance to 52% |
| More air | Increase FilterB cutoff to 10000Hz |
| Safer for mixing | Enable mono below 200Hz |

---

## Exo Glitch Symphony

### Sound Profile
Complex, experimental lead with rhythmic modulation and percussive character.

### Recommended Preset
`genre/06-exo-glitch-symphony.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Square, +1 octave, 100% | Click |
| Oscillator 2 | Saw, 0 octave, 75% | Body |
| Oscillator 3 | Square, 0 octave, 60% | Rhythm |
| Oscillator 4 | Saw, +1 octave, 50% | Texture |
| Sub Oscillator | Sine, -2 octave, 0% | (Not needed) |
| Filter A | Lowpass, 3200Hz, Res 50, Drive 12 | Punch |
| Filter B | Bandpass, 1500Hz, Res 40, Drive 8 | Focus |
| Envelope | A:1, D:70, S:0, R:45 | Percussive |
| Modulation | Env→FilterA: 95%, LFO1→Pitch: 35% | Glitch |

### Chain Processing
```
Kepler Exo → Teq4
  - High-pass: 600Hz
  → Fruity Reverb 2
  - Type: Plate
  - Decay: 1s
  - Mix: 20%
  → Bitcrusher
  - Bit depth: 10-bit
  - Wet: 60%
```

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| Less chaotic | Reduce LFO1 modulation to 20% |
| More plucky | Reduce envelope decay to 50ms |
| More rhythmic | Increase LFO1 rate to 5Hz |
| More texture | Add sample-hold to LFO2 |

---

## Exo Velvet Pad

### Sound Profile
Smooth, warm pad with subtle stereo movement for emotional moments.

### Recommended Preset
`genre/08-exo-velvet-pad.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Sine, -1 octave, 90% | Foundation |
| Oscillator 2 | Triangle, -1 octave, 75% | Body |
| Oscillator 3 | Saw, -2 octave, 50% | Warmth |
| Oscillator 4 | Sine, 0 octave, 40% | Air |
| Sub Oscillator | Sine, -2 octave, 25% | Subtle |
| Filter A | Lowpass, 3000Hz, Res 15, Drive 3 | Soft |
| Filter B | Lowpass, 6000Hz, Res 10, Drive 0 | Air |
| Envelope | A:250, D:500, S:85, R:800 | Smooth |
| Modulation | Env→FilterA: 15%, LFO1→Pan: 30% | Gentle |

### Chain Processing
```
Kepler Exo → Vintage Chorus
  - Mix: 40%
  - Rate: 0.2Hz
  → Fruily Reverb 2
  - Type: Hall
  - Decay: 3s
  - Mix: 18%
  → Fruily Parametric EQ 2
  - High-shelf +1.5dB at 8kHz
```

---

## Exo Sci-Fi Textures

### Sound Profile
Otherworldly, evolving textures with extreme modulation for cinematic moments.

### Recommended Preset
`genre/07-exo-sci-fi-textures.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, 0 octave, 80% | Core |
| Oscillator 2 | Saw, +1 octave, 70% | Dissonance |
| Oscillator 3 | Square, -1 octave, 60% | Texture |
| Oscillator 4 | Triangle, 0 octave, 50% | Harmonics |
| Sub Oscillator | Sine, -2 octave, 50% | Depth |
| Filter A | Lowpass, 5000Hz, Res 55, Drive 15 | Power |
| Filter B | Bandpass, 2500Hz, Res 45, Drive 10 | Focus |
| Envelope | A:50, D:800, S:70, R:1200 | Evolving |
| Modulation | Env→FilterA: 60%, LFO1→FilterB: 80% | Complex |

### Chain Processing
```
Kepler Exo → Fruily Parametric EQ 2
  - Multi-band processing
  → Fruily Reverb 2
  - Type: Gated
  - Decay: 1.5s
  - Mix: 40%
  → Stereo Delay
  - Time: 600ms
  - Feedback: 50%
```

---

## Lead Workflow Summary

### By Role
| Role | Preset | Stereo Width | Processing |
|------|--------|--------------|------------|
| Main drop lead | Stadium Supersaw | 120% | Limiter + Reverb |
| Build lead | Stadium Supersaw | 100% | Filter sweeps |
| Rhythmic accent | Glitch Symphony | 80% | Bitcrusher |
| Emotional moment | Velvet Pad | 110% | Reverb + Chorus |
| Cinematic FX | Sci-Fi Textures | 150% | Delay + Reverb |

### By Genre
| Genre | Recommended Settings |
|-------|---------------------|
| Big Room EDM | Stadium Supersaw, high resonance |
| Future Bass | Stadium Supersaw, wide stereo, soft attack |
| Trap | Glitch Symphony, percussive envelope |
| R&B | Velvet Pad, warm filters, gentle LFO |
| Cinematic | Sci-Fi Textures, extreme modulation |

### Exo vs Standard Kepler for Leads
| Feature | Standard Kepler | Kepler Exo |
|---------|----------------|-----------|
| Oscillator stack | 3 max | 4 + sub |
| Stereo width | Limited | 120%+ built-in |
| Dual filters | No | Yes |
| Modulation depth | Standard | Expanded |
| CPU per voice | Lower | Higher |
| Recommended voices | 8-16 | 4-8 for dense chords |
