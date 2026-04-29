# 808 Sub Bass Workflow

## Sound Profile
Deep, punchy sub with harmonic complexity for modern hip-hop and trap productions.

## Recommended Preset
`genre/01-808-thunder.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, -2 octave, 80% | Sub harmonics |
| Oscillator 2 | Square, -2 octave, 60% | Harmonic content |
| Filter | Lowpass, 180Hz, Resonance 25 | Tone shaping |
| Filter Drive | 15% | Harmonic saturation |
| Envelope | A:5, D:180, S:60, R:120 | Punch envelope |
| LFO | Sine, 0.5Hz, 20% to Filter | Subtle movement |

## Genre Variations
- **Trap:** Increase resonance to 35%, filter drive to 20%
- **Drill:** Add pitch LFO at 0.4Hz, 15% to pitch
- **Old School:** Reduce resonance to 20%, shorter decay
- **R&B:** Softer attack (8ms), warmer filter drive (10%)

## Chain Processing
```
Kepler → Fruity Parametric EQ 2
  - High-pass at 30Hz
  - +3dB bell at 80Hz
  → Fruity Limiter
  - Threshold: -18dB
  - Ratio: 4:1
  - Attack: 1ms
  - Release: 40ms
```

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More punch | Increase filter resonance to 35% |
| Darker tone | Reduce filter cutoff to 150Hz |
| Brighter tone | Increase filter cutoff to 220Hz |
| More grit | Increase filter drive to 22% |
| Cleaner sound | Reduce osc2 mix to 40% |
| More wobble | Increase LFO rate to 0.8Hz |

## Troubleshooting
| Problem | Solution |
|---------|----------|
| Muffled sound | Increase filter cutoff by 20Hz |
| Distorted output | Reduce oscillator mix by 15% |
| Clicking on attacks | Increase envelope attack to 6ms |
| Phase issues | Invert osc2 phase |
| Weak low-end | Add Fruity Parametric EQ boost at 60Hz |
| Masking vocals | High-pass at 200Hz on bass channel |

## Automation Ideas
- Filter cutoff automation for risers (0→200Hz over 4 bars)
- Resonance increase on hit points
- LFO rate changes for rhythmic interest
- Filter drive increases during drops
