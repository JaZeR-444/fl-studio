# Kick/Bass Separation Workflow

## Sound Profile
Clean separation between kick and bass for punchy, defined low-end.

## Recommended Preset
`genre/10-kick-bass.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Crossover 1 | 80Hz | Kick/Bass split |
| Slope | 48dB/oct | Maximum separation |
| Mode | Minimum-phase | Impact |

## Band Processing
| Band | Frequency | Processing |
|------|-----------|------------|
| Band 1 (Kick) | 40-80Hz | Kick transient focus |
| Band 2 (Bass) | 80-200Hz | Bass body |

## Sidechain Workflow
```
Band 1 (Kick) output → Key input
  → Fruily Compressor on Band 2
  - Threshold: -20dB
  - Ratio: 4:1
  - Release: 50ms (sync to tempo)
```

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More kick | Increase Band1 crossover to 100Hz |
| More bass | Lower Band1 crossover to 60Hz |
| Tighter | Increase slope to 48dB/oct |
| Musical | Reduce slope to 24dB/oct |
