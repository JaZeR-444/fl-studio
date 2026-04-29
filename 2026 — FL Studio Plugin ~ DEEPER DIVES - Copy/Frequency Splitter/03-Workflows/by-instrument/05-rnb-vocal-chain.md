# R&B Vocal Chain Workflow

## Sound Profile
Professional vocal processing with separate bands for clarity, presence, and air.

## Recommended Preset
`genre/03-rnb-vocal.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Crossover 1 | 200Hz | Low/Mid split |
| Crossover 2 | 4000Hz | Mid/High split |
| Slope | 24dB/oct | Smooth |
| Mode | Linear-phase | Vocal truth |

## Band Processing
| Band | Frequency | Processing | Purpose |
|------|-----------|------------|---------|
| Band 1 | 80-200Hz | High-pass | Remove mud |
| Band 2 | 200-4000Hz | Presence boost | Clarity |
| Band 3 | 4000Hz+ | Air boost | Brilliance |

## Workflow Integration
1. Route vocals to Frequency Splitter
2. Apply high-pass to Band 1 (removes mud)
3. Apply bell boost to Band 2 (2-5kHz, +2dB)
4. Apply shelf boost to Band 3 (8kHz+, +1.5dB)
5. Apply compression per band

## Band-Specific Processing
```
Band 1 → Fruily Compressor
  - Gentle, ratio 2:1
Band 2 → Fruily Parametric EQ 2
  - Bell +2dB at 3kHz
  → Fruily Compressor
  - Ratio 3:1, attack 10ms
Band 3 → De-esser
  - Threshold: -18dB
  → High-shelf +1.5dB at 8kHz
```

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More presence | Increase Band2 +1dB |
| More air | Increase Band3 +1dB |
| Less harsh | Reduce Band2 at 3kHz |
| Less sibilant | Lower de-esser threshold |
