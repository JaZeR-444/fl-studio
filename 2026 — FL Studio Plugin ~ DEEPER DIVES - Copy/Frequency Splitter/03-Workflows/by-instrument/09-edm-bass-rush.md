# EDM Bass Rush Workflow

## Sound Profile
Four-way split for bass Rush with sub, grind, crunch, and air bands.

## Recommended Preset
`genre/04-edm-bass-rush.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Crossover 1 | 80Hz | Sub split |
| Crossover 2 | 200Hz | Grind split |
| Crossover 3 | 800Hz | Crunch split |
| Slope | 24dB/oct | Smooth |
| Mode | Linear-phase | Clean |

## Band Processing
| Band | Frequency | Processing | Purpose |
|------|-----------|------------|---------|
| Band 1 | 30-80Hz | Sub oscillator layer | Sub |
| Band 2 | 80-200Hz | Distortion, drive 15% | Grind |
| Band 3 | 200-800Hz | Bitcrusher, 16-bit | Crunch |
| Band 4 | 800Hz+ | High-pass 2kHz | Air |

## Workflow Integration
1. Route bass to Frequency Splitter
2. Apply sub enhancement to Band 1
3. Add distortion to Band 2
4. Apply bitcrush to Band 3
5. High-pass Band 4 for clarity
6. Limit Band 1 for maximum impact

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More sub | Increase Band1 gain +3dB |
| More grind | Increase Band2 distortion |
| More crunch | Reduce bitcrusher bits |
| Cleaner | Raise Band4 crossover |
