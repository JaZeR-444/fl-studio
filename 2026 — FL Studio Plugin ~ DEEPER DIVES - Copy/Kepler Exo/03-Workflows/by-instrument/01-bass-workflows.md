# Kepler Exo Bass Workflows

## Exo 808 Beast

### Sound Profile
Massive, modern 808 with 4 oscillators + sub oscillator for extreme low-end presence.

### Recommended Preset
`genre/01-exo-808-beast.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, -2 octave, 70% | Sub harmonics |
| Oscillator 2 | Saw, -2 octave, 65% | Thickness |
| Oscillator 3 | Square, -1 octave, 50% | Click/Attack |
| Oscillator 4 | Triangle, 0 octave, 35% | Harmonics |
| Sub Oscillator | Sine, -2 octave, 100% | Foundation |
| Filter A | Lowpass, 200Hz, Res 30, Drive 18 | Main tone |
| Filter B | Lowpass, 4000Hz, Res 20, Drive 5 | High control |
| Envelope | A:4, D:200, S:60, R:140 | Punch |
| Modulation | Env→FilterA: 75%, LFO1→Pan: 35% | Movement |

### Exo-Specific Advantages
- **Sub Oscillator:** Dedicated low-end without affecting harmonics
- **Dual Filter:** Independent sub and harmonic control
- **4 Oscillators:** Layered harmonic complexity
- **Expanded Modulation:** More movement possibilities

### Genre Variations
- **Modern Trap:** Increase FilterA resonance to 38%, add LFO2→Pitch (8%)
- **Hip-Hop Classic:** Reduce osc3/4 mix, warmer FilterA drive (12%)
- **Dark Drill:** Increase FilterA drive to 25%, faster LFO1 (0.5Hz)
- **R&B Smooth:** Softer attack (10ms), reduced FilterA drive (12%)

### Chain Processing
```
Kepler Exo → Fruity Parametric EQ 2
  - High-pass: 25Hz
  → Fruity Limiter
  - Threshold: -14dB
  - Ratio: 4:1
  - Attack: 1ms
  - Release: 35ms
```

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More sub | Sub Oscillator to 100% |
| More punch | Increase FilterA resonance to 38% |
| More grit | Increase FilterA drive to 22% |
| Cleaner sound | Reduce osc3/4 to 30% each |
| More movement | Increase LFO1 pan to 45% |

### Layering Strategies
- **Quad Layer:** All 4 oscillators + sub for maximum impact
- **Trio Layer:** Osc1 + Osc2 + sub for classic 808
- **Dual Layer:** Osc1 + sub for pure sub
- **Solo Sub:** Sub only, osc1-4 at 0%

---

## Exo Grim Reaper

### Sound Profile
Extreme drill bass with menacing harmonics and dark texture.

### Recommended Preset
`genre/04-exo-grim-reaper.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, -2 octave, 90% | Weight |
| Oscillator 2 | Saw, -2 octave, 85% | Thickness |
| Oscillator 3 | Square, -1 octave, 60% | Aggression |
| Oscillator 4 | Saw, 0 octave, 40% | Dissonance |
| Sub Oscillator | Sine, -2 octave, 100% | Core |
| Filter A | Lowpass, 120Hz, Res 40, Drive 25 | Darkness |
| Filter B | Bandpass, 800Hz, Res 35, Drive 15 | Texture |
| Envelope | A:6, D:220, S:55, R:180 | Heaviness |
| Modulation | Env→FilterA: 80%, LFO1→Pitch: 20% | Demonic |

### Chain Processing
```
Kepler Exo → High-pass at 35Hz
  → Fruity Limiter
  - Threshold: -12dB
  - Ratio: 6:1
  - Attack: 0.5ms
  - Release: 25ms
```

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More menacing | Increase LFO1→Pitch to 28% |
| Darker | Reduce FilterA cutoff to 100Hz |
| More aggressive | Increase FilterB drive to 20% |
| Cleaner sub | Increase FilterA cutoff to 150Hz |

---

## Exo Soul Keys Bass

### Sound Profile
Warm, smooth bass for R&B with vintage character.

### Recommended Preset
`genre/02-exo-soul-keys.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Sine, 0 octave, 85% | Core tone |
| Oscillator 2 | Triangle, 0 octave, 70% | Warmth |
| Oscillator 3 | Saw, -1 octave, 45% | Body |
| Oscillator 4 | Square, 0 octave, 30% | Clarity |
| Sub Oscillator | Sine, -2 octave, 20% | Foundation |
| Filter A | Lowpass, 2500Hz, Res 18, Drive 5 | Smooth |
| Filter B | Highpass, 200Hz, Res 10, Drive 0 | Cleanup |
| Envelope | A:60, D:400, S:75, R:350 | Flow |
| Modulation | Env→FilterA: 30%, LFO1→Pan: 50% | Gentle |

### Chain Processing
```
Kepler Exo → Soft Clipper
  - Input reduction: 1.5dB
  → Fruity Reverb 2
  - Type: Hall
  - Decay: 2.8s
  - Mix: 22%
  → Fruity Parametric EQ 2
  - Bell +2dB at 3kHz
```

---

## Bass Workflow Summary

### By Genre
| Genre | Preset | Sub Setting | Key Tweaks |
|-------|--------|-------------|------------|
| Trap | Exo 808 Beast | 100% | FilterA res 35%, LFO on |
| Drill | Exo Grim Reaper | 100% | FilterA drive 25%, pitch LFO |
| R&B | Exo Soul Keys | 20% | Stereo width, warm filters |
| Hip-Hop | Exo 808 Beast | 90% | Classic tone, moderate drive |
| EDM | Stadium Supersaw | 0% | High resonance, filter sweeps |

### Exo Advantages Over Standard Kepler
| Feature | Standard Kepler | Kepler Exo |
|---------|----------------|-----------|
| Sub Oscillator | No | Yes, dedicated |
| Oscillators | 3 max | 4 + sub |
| Filters | 1 | 2 (A and B) |
| Modulation | Basic | Expanded |
| Stereo Width | Limited | More options |
| CPU Usage | Lower | Higher |

### Quick Tweaks Reference
| Sound | Osc1-4 Mix | Sub | FilterA | Modulation |
|-------|------------|-----|---------|------------|
| Pure sub | 0% | 100% | 100Hz | None |
| Classic 808 | 70% | 100% | 180Hz | Light LFO |
| Modern trap | 80% | 100% | 200Hz | Full LFO |
| R&B smooth | 75% | 20% | 2500Hz | Pan LFO |
| Drill heavy | 90% | 100% | 120Hz | Pitch LFO |
