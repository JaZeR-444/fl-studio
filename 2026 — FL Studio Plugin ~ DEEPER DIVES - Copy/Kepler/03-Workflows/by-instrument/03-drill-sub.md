# Drill Sub Workflow

## Sound Profile
Heavy, menacing sub with extreme low-end presence for drill productions.

## Recommended Preset
`genre/09-reaper-sub.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, -2 octave, 90% | Weight |
| Oscillator 2 | Saw, -2 octave, 90% | Thickness |
| Filter | Lowpass, 120Hz, Resonance 30 | Darkness |
| Filter Drive | 20% | Distortion |
| Envelope | A:8, D:250, S:70, R:180 | Sustain |
| LFO | Square, 0.4Hz, 15% to Pitch | Dissonance |

## Genre Variations
- **UK Drill:** Faster LFO (0.6Hz), higher resonance (38%)
- **American Drill:** Static pitch, lower resonance (25%)
- **Dark Trap:** Subtle LFO (0.2Hz), moderate drive (15%)

## Chain Processing
```
Kepler → Fruily Parametric EQ 2
  - High-pass at 25Hz
  → Fruily Limiter
  - Threshold: -12dB
  - Ratio: 6:1
  - Attack: 0.5ms
  - Release: 30ms
```

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More menacing | Increase pitch LFO to 20% |
| Heavier | Increase filter drive to 28% |
| Cleaner | Reduce osc2 mix to 70% |
| More movement | Increase LFO rate to 0.6Hz |

## Safety Notes
- Monitor for unwanted distortion at high filter drive
- Use high-pass filters on all other channels
- Check mono compatibility before mixing
