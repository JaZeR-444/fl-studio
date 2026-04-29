# MiniSynth Bass Workflow

## Sound Profile
Smooth, warm bass for R&B and melodic productions.

## Recommended Preset
`genre/02-rnb-smooth-bass.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator | Triangle, -1 octave, 100% | Warmth |
| Filter | Lowpass, 1500Hz, Res 20, Drive 8 | Character |
| Envelope | A:20, D:200, S:75, R:300 | Groove |
| LFO | Sine, 0.3Hz, 15% to Pan | Rhythm |

## Chain Processing
```
MiniSynth → Fruily Compressor
  - Ratio 2:1, Attack 15ms, Release 100ms
```

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More sub | Add sine wave at 30% |
| More punch | Increase filter resonance to 25% |
| Warmer | Increase filter drive to 12% |
| Cleaner | Reduce filter drive to 5% |

## Genre Variations
- **R&B:** Triangle wave, warm filter
- **Soul:** Softer attack, slower LFO
- **Hip-Hop:** Faster LFO, more punch
