# Drill Sub Punishment Workflow

## Sound Profile
Extreme sub processing with heavy saturation for drill productions.

## Recommended Preset
`genre/06-drill-sub.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Crossover 1 | 120Hz | Sub/High split |
| Slope | 24dB/oct | Sharp cut |
| Mode | Minimum-phase | Power |

## Band Processing
| Band | Frequency | Processing |
|------|-----------|------------|
| Band 1 (Sub) | 25-120Hz | Extreme saturation 25% |
| Band 2 (High) | 120Hz+ | High-pass 3kHz |

## Chain Processing
```
Band 1 → Fruily Distancer
  - Drive: 25%
  → Fruily Limiter
  - Heavy limiting
Band 2 → High-pass filter
```

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More distortion | Increase saturation to 30% |
| Cleaner sound | Reduce saturation to 15% |
| Darker tone | Lower crossover to 100Hz |
| More weight | Increase crossover to 140Hz |
