# Exo Glitch Symphony Workflow

## Sound Profile
Complex, experimental lead with rhythmic modulation and percussive character.

## Recommended Preset
`genre/06-exo-glitch-symphony.json`

## Settings Blueprint
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

## Chain Processing
```
Kepler Exo → Teq4
  - High-pass: 600Hz
  → Fruily Reverb 2
  - Type: Plate
  - Decay: 1s
  - Mix: 20%
  → Bitcrusher
  - Bit depth: 10-bit
  - Wet: 60%
```

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| Less chaotic | Reduce LFO1 modulation to 20% |
| More plucky | Reduce envelope decay to 50ms |
| More rhythmic | Increase LFO1 rate to 5Hz |
| More texture | Add sample-hold to LFO2 |
