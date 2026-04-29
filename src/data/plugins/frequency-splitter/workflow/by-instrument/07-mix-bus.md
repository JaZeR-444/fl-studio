# Mix Bus Separation Workflow

## Sound Profile
Mastering-grade multiband processing for full mix control.

## Recommended Preset
`genre/08-mix-bus.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Crossover 1 | 80Hz | Sub/Low split |
| Crossover 2 | 400Hz | Low/Mid split |
| Crossover 3 | 3000Hz | Mid/High split |
| Slope | 24dB/oct | Smooth |
| Mode | Linear-phase | Mastering |

## Band Processing
| Band | Frequency | Target |
|------|-----------|--------|
| Band 1 | 30-80Hz | Sub extension |
| Band 2 | 80-400Hz | Low-mids |
| Band 3 | 400-3000Hz | Presence |
| Band 4 | 3000Hz+ | Air |

## Processing Per Band
```
Band 1 → Fruily Compressor
  - Ratio 2:1, slow attack
Band 2 → Fruily Compressor
  - Ratio 2.5:1, medium attack
Band 3 → Fruily Compressor
  - Ratio 2:1, fast attack
Band 4 → Fruily Limiter
  - Gentle ceiling
```

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More sub | Increase Band1 gain +1dB |
| More punch | Compress Band2 harder |
| More presence | Boost Band3 at 2kHz |
| More air | Boost Band4 at 8kHz |
