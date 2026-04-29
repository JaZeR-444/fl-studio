# Exo Velvet Pad Workflow

## Sound Profile
Smooth, warm pad with subtle stereo movement for emotional moments.

## Recommended Preset
`genre/08-exo-velvet-pad.json`

## Settings Blueprint
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

## Chain Processing
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

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More width | Increase Stereo Width to 120% |
| More warmth | Increase osc3 to 60% |
| Smoother | Reduce FilterA resonance to 12% |
| More movement | Increase LFO1 to 40% |
