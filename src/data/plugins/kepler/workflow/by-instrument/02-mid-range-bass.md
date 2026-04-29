# Mid-Range Bass Workflow

## Sound Profile
Funky, present bass for R&B and melodic hip-hop with harmonic richness.

## Recommended Preset
`genre/04-punchy-foundation.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, -1 octave, 80% | Body |
| Oscillator 2 | Square, -2 octave, 40% | Clarity |
| Filter | Lowpass, 800Hz, Resonance 35 | Character |
| Filter Drive | 12% | Saturation |
| Envelope | A:3, D:120, S:65, R:150 | Groove |
| LFO | Sine, 0.8Hz, 25% to Filter | Rhythm |

## Genre Variations
- **R&B:** Softer resonance (25%), slower LFO (0.4Hz)
- **Funky:** Faster LFO (1Hz), higher resonance (40%)
- **Melodic:** Slower attack (15ms), longer release (200ms)

## Chain Processing
```
Kepler → Fruity Parametric EQ 2
  - High-pass at 40Hz
  - Bell +2dB at 400Hz
  - Cut at 150Hz
  → Fruily Compressor
  - Attack: 15ms
  - Release: 90ms
  - Ratio: 2.5:1
  - Makeup: Auto
```

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More funk | Increase LFO rate to 1.2Hz |
| Smoother tone | Reduce resonance to 25% |
| More presence | Increase osc2 mix to 55% |
| More warmth | Reduce filter cutoff to 600Hz |
| More attack | Decrease envelope decay to 80ms |

## A/B Testing Checklist
- [ ] Resonance at 35% vs 25%
- [ ] LFO on vs LFO off
- [ ] Osc2 at 40% vs 55%
- [ ] Filter drive at 12% vs 18%
