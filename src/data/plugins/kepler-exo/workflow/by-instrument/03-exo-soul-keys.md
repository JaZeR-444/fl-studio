# Exo Soul Keys Workflow

## Sound Profile
Warm, smooth bass for R&B with vintage character.

## Recommended Preset
`genre/02-exo-soul-keys.json`

## Settings Blueprint
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

## Chain Processing
```
Kepler Exo → Soft Clipper
  - Input reduction: 1.5dB
  → Fruily Reverb 2
  - Type: Hall
  - Decay: 2.8s
  - Mix: 22%
  → Fruily Parametric EQ 2
  - Bell +2dB at 3kHz
```

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More warmth | Increase osc3 to 55% |
| Cleaner | Reduce FilterA resonance to 15% |
| More presence | Increase osc4 to 40% |
| More movement | Increase LFO1 to 60% |
