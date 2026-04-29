# MiniSynth Lead Workflow

## Sound Profile
Smooth, versatile lead for G-Funk, R&B, and soulful productions.

## Recommended Preset
`genre/01-g-funk-lead.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator | Sine, 0 octave, 100% | Core tone |
| Filter | Lowpass, 2800Hz, Res 15, Drive 5 | Softness |
| Envelope | A:50, D:300, S:80, R:400 | Smooth |
| LFO | Sine, 0.2Hz, 10% to Filter | Movement |

## Chain Processing
```
MiniSynth → Soft Clipper (1dB)
  → Fruily Reverb 2
  - Plate, Decay 1.5s, Mix 15%
  → Fruily Compressor (Soft knee)
```

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More modern | Add triangle wave at 50% |
| Warmer | Reduce filter cutoff to 2500Hz |
| Brighter | Increase filter cutoff to 3200Hz |
| More movement | Increase LFO to 15% |

## Genre Variations
- **G-Funk:** Sine wave, moderate filter, slow LFO
- **Modern R&B:** Add triangle, brighter filter
- **Soul:** Softer attack, longer release
