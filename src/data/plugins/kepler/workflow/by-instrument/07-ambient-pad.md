# Ambient Pad Workflow

## Sound Profile
Ethereal, evolving soundscape with deep stereo width and atmospheric depth.

## Recommended Preset
`genre/10-ethereal-wash.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Sine, -1 octave, 100% | Foundation |
| Oscillator 2 | Triangle, -1 octave, 70% | Body |
| Oscillator 3 | Saw, 0 octave, 40% | Air |
| Filter | Lowpass, 2500Hz, Resonance 25 | Softness |
| Filter Drive | 5% | Gentle warmth |
| Envelope | A:500, D:800, S:85, R:1500 | Slow evolution |
| LFO | Sine, 0.15Hz, 30% to Pan | Movement |

## Genre Variations
- **Cinematic:** Longer attack (800ms), longer release (2000ms)
- **Chillout:** Slower LFO (0.1Hz), reduced stereo width
- **Space Ambient:** Increase LFO pan to 45%, add reverb

## Chain Processing
```
Kepler → Vintage Chorus
  - Mix: 50%
  - Rate: 0.3Hz
  → Fruily Reverb 2
  - Type: Cathedral
  - Decay: 6s
  - Mix: 30%
```

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More width | Enable chorus processing |
| More warmth | Increase filter drive to 8% |
| More movement | Increase LFO rate to 0.25Hz |
| Smoother | Reduce oscillator3 mix to 30% |

## Troubleshooting
| Problem | Solution |
|---------|----------|
| Phasing | Reduce LFO pan to 15% |
| Too bright | Reduce filter cutoff to 2000Hz |
| Too dark | Increase filter cutoff to 3000Hz |
| Too busy | Reduce LFO rate to 0.1Hz |
