# Riser Workflow

## Sound Profile
Tension-building elements for transitions, builds, and pre-drop energy.

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, +1 octave, 90% | Brightness |
| Oscillator 2 | Saw, +1 octave, 85% | Thickness |
| Filter | Lowpass, sweep 0→5000Hz | Building energy |
| Filter Drive | 10% | Saturation |
| Envelope | A:100, D:500, S:80, R:200 | Slow attack |
| LFO | None or Sine, 0.5Hz to Filter | Movement |

## Automation Sequence
1. Start: Filter cutoff at 0Hz
2. Bar 1: Filter to 500Hz
3. Bar 2: Filter to 1500Hz
4. Bar 3: Filter to 3000Hz
5. Bar 4: Filter to 5000Hz
6. Drop: Filter to 500Hz

## Chain Processing
```
Kepler → White Noise Layer (mix 50%)
  → Fruily Limiter
  - Ceiling: -0.5dB
  - Attack: 0.5ms
```

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More tension | Increase max shift to 1000Hz |
| Smoother build | Lengthen automation to 8 bars |
| More aggressive | Increase drive to 15% |
| Cleaner | Set feedback to 0% |

## By Genre
| Genre | Build Length | Automation |
|-------|--------------|------------|
| Trap | 2 bar | Filter sweep |
| EDM | 4 bar | Full automation |
| Hip-Hop | 1 bar | Simple sweep |
| R&B | 2 bar | Gentle sweep |
