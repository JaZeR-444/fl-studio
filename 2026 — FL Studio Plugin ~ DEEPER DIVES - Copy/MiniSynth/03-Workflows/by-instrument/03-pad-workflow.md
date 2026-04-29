# MiniSynth Pad Workflow

## Sound Profile
Warm, atmospheric pad for ambient and cinematic productions.

## Recommended Preset
`genre/06-warm-pad.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator | Triangle, -1 octave, Detune 5, Mix 85% | Body |
| Filter | Lowpass, 2000Hz, Res 15, Drive 5 | Softness |
| Envelope | A:300, D:500, S:85, R:800 | Slow |
| LFO | Sine, 0.1Hz, 25% to Pan | Movement |

## Chain Processing
```
MiniSynth → Fruily Reverb 2
  - Cathedral, Decay 4s, Mix 25%
```

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| Wider | Increase detune to 8 cents |
| Warmer | Reduce filter cutoff to 1800Hz |
| Brighter | Increase filter cutoff to 2500Hz |
| More movement | Increase LFO to 35% |

## Genre Variations
- **Cinematic:** Long attack, long release
- **Ambient:** Slower LFO, darker filter
- **Chill:** Softer reverb, shorter release
