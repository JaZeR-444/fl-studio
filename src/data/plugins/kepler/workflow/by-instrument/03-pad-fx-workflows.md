# Kepler Pad & FX Workflows

## Lo-Fi Dusty Pad

### Sound Profile
Warm, nostalgic texture with degraded character reminiscent of old VHS tapes and worn cassettes.

### Recommended Preset
`genre/08-dusty-texture.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, -1 octave, 75% | Body |
| Oscillator 2 | Triangle, -2 octave, 60% | Warmth |
| Filter | Lowpass, 1500Hz, Resonance 20 | Muffled |
| Filter Drive | 8% | Saturation |
| Envelope | A:150, D:500, S:75, R:800 | Slow movement |
| LFO | Sine, 0.1Hz, 20% to Filter | Gentle drift |

### Genre Variations
- **Chillhop:** Faster LFO (0.2Hz), reduced detune
- **Boom Bap:** Reduced stereo width, increased warmth
- **Jazz Hop:** Softer attack (200ms), longer release

### Chain Processing
```
Kepler → Vintage Phaser
  - Stages: 4
  - Rate: 0.3Hz
  - Mix: 40%
  → Fruity Reverb 2
  - Type: Room
  - Decay: 3s
  - Mix: 25%
  → Tape Saturation
  - Drive: 3%
```

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More degraded | Increase LFO to 30% |
| Cleaner sound | Reduce LFO to 10% |
| More warmth | Increase filter drive to 12% |
| More movement | Increase LFO rate to 0.15Hz |

---

## Metallic Texture

### Sound Profile
Industrial, edgy texture with dissonant harmonics for aggressive or experimental productions.

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, 0 octave, 85% | Edge |
| Oscillator 2 | Square, +1 octave, 70% | Dissonance |
| Filter | Bandpass, 2000Hz, Resonance 50 | Focus |
| Filter Drive | 15% | Grind |
| Envelope | A:10, D:300, S:60, R:400 | Sustain |
| LFO | Square, 2Hz, 40% to Pitch | Mechanical |

### Chain Processing
```
Kepler → Fruity Distancer
  - Drive: 25%
  → Fruity Reverb 2
  - Type: Gated
  - Decay: 1.5s
  - Mix: 35%
```

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More industrial | Increase LFO rate to 4Hz |
| Less harsh | Reduce bandpass resonance to 35% |
| More abrasive | Increase filter drive to 20% |
| More rhythmic | Sync LFO to tempo (1/4 notes) |

---

## Risers

### Sound Profile
Tension-building elements for transitions, builds, and pre-drop energy.

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, +1 octave, 90% | Brightness |
| Oscillator 2 | Saw, +1 octave, 85% | Thickness |
| Filter | Lowpass, sweep 0→5000Hz | Building energy |
| Filter Drive | 10% | Saturation |
| Envelope | A:100, D:500, S:80, R:200 | Slow attack |
| LFO | None or Sine, 0.5Hz to Filter | Movement |

### Automation Sequence
1. Start: Filter cutoff at 0Hz
2. Bar 1: Filter to 500Hz
3. Bar 2: Filter to 1500Hz
4. Bar 3: Filter to 3000Hz
5. Bar 4: Filter to 5000Hz
6. Drop: Filter to 500Hz

### Chain Processing
```
Kepler → White Noise Layer (mix 50%)
  → Fruity Limiter
  - Ceiling: -0.5dB
  - Attack: 0.5ms
```

---

## Downlifters

### Sound Profile
Dark, tension-releasing elements for breakdowns and post-drop sections.

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, -2 octave, 100% | Low rumble |
| Oscillator 2 | Square, -1 octave, 60% | Dissonance |
| Filter | Lowpass, sweep 5000→100Hz | Closing down |
| Filter Drive | 18% | Distortion |
| Envelope | A:5, D:100, S:50, R:150 | Fast action |
| LFO | None | Static |

### Automation Sequence
1. Start: Filter cutoff at 5000Hz
2. Bar 1: Filter to 2000Hz
3. Bar 2: Filter to 500Hz
4. End: Filter to 100Hz

### Chain Processing
```
Kepler → Fruity Distancer
  - Drive: 30%
  → Fruity Delay
  - Time: 250ms
  - Feedback: 60%
```

---

## Brass Stabs

### Sound Profile
 Punchy, aggressive stabs for rhythmic emphasis and impact moments.

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, 0 octave, 95% | Core |
| Oscillator 2 | Square, -1 octave, 50% | Click |
| Filter | Lowpass, 3500Hz, Resonance 40 | Bold |
| Filter Drive | 12% | Edge |
| Envelope | A:1, D:50, S:0, R:30 | Short |
| LFO | None | Static |

### Chain Processing
```
Kepler → Fruity Parametric EQ 2
  - Bell +4dB at 3kHz
  → Fruity Compressor
  - Attack: 1ms
  - Release: 50ms
  - Ratio: 4:1
```

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More aggressive | Increase resonance to 50% |
| More retro | Replace osc2 with triangle |
| More modern | Add slight bitcrusher |

---

## Keys Electric

### Sound Profile
Clean, electric piano-style sound with crisp attack and smooth sustain.

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Sine, 0 octave, 90% | Core |
| Oscillator 2 | Triangle, 0 octave, 60% | Body |
| Filter | Lowpass, 4000Hz, Resonance 15 | Clarity |
| Filter Drive | 3% | Subtle warmth |
| Envelope | A:5, D:200, S:80, R:250 | Piano-like |
| LFO | Sine, 0.5Hz, 8% to Pitch | Vibrato |

### Chain Processing
```
Kepler → Fruity Reverb 2
  - Type: Studio
  - Decay: 1.2s
  - Mix: 15%
  → Fruity Compressor
  - Attack: 10ms
  - Release: 100ms
  - Ratio: 2:1
```

---

## FX Workflow Summary

### By Purpose
| FX Type | Preset Base | Key Settings |
|---------|-------------|--------------|
| Riser | Custom | Sweeping filter, 4-bar automation |
| Dwnlifter | Custom | Closing filter, fast release |
| Texture | Dusty Texture | LFO modulation, tape saturation |
| Impact | Brass Stabs | Short envelope, high resonance |
| Transition | Metallic | Square LFO, high drive |

### By Genre
| Genre | Recommended FX |
|-------|----------------|
| Trap | 1-bar risers, glitch textures |
| EDM | 4-bar risers, impactful impacts |
| R&B | Subtle transitions, smooth swells |
| Lo-Fi | VHS warble, tape degradation |
| Ambient | Long evolutions, gentle pads |

### Troubleshooting FX
| Problem | Solution |
|---------|----------|
| Riser too abrupt | Lengthen automation to 8 bars |
| Impact lacking punch | Increase filter resonance |
| FX masking lead | High-pass FX at 200Hz |
| FX too dry | Add reverb or delay |
| FX too wet | Reduce mix, increase dry signal |
