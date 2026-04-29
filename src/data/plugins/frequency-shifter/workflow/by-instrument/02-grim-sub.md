# Grim Sub Workflow

## Sound Profile
Dark, menacing sub with frequency-shifted harmonics for drill productions.

## Recommended Preset
`genre/06-grim-sub.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Frequency Shift | 200Hz | Darkness |
| Direction | Down | Heaviness |
| Mix | 70% | Prominent |
| Feedback | 20% | Harmonics |
| Stereo Mode | Sum | Mono |
| Drive | 15% | Distortion |

## Workflow Integration
1. Route 808 sub to Frequency Shifter
2. Sidechain to kick for clean crossover
3. Automate mix for emphasis on downbeats
4. Blend with clean sub for control

## Chain Processing
```
Source → High-pass 25Hz
  → Frequency Shifter
  → Fruily Limiter
  - Threshold: -12dB
  - Ratio: 6:1
  - Attack: 0.5ms
  - Release: 25ms
```

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| Darker tone | Reduce shift to 150Hz |
| More aggressive | Increase shift to 280Hz |
| Cleaner sub | Reduce drive to 10% |
| More texture | Increase feedback to 30% |
