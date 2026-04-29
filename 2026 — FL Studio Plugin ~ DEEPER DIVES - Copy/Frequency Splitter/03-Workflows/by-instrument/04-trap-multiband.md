# Trap Multiband Workflow

## Sound Profile
Three-band processing for trap with separate sub, mid, and high control.

## Recommended Preset
`genre/01-trap-multiband.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Crossover 1 | 200Hz | Sub/Mid split |
| Crossover 2 | 3000Hz | Mid/High split |
| Slope | 24dB/oct | Smooth |
| Mode | Linear-phase | Transparency |

## Band Processing
| Band | Frequency | Processing |
|------|-----------|------------|
| Band 1 | 30-200Hz | High-pass 30Hz |
| Band 2 | 200-3000Hz | Frequency shifter down 100Hz, 25% mix |
| Band 3 | 3000Hz+ | High-pass 4kHz, -2dB gain |

## Workflow Integration
1. Use two instances for full control
2. Instance 1: Sub/bass band with sub enhancement
3. Instance 2: High band with transient enhancement
4. Blend for full spectrum control

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More sub | Increase Band1 gain +2dB |
| More presence | Increase Band2 shifter mix |
| Less harsh | Reduce Band3 gain -2dB |
| More separation | Use linear-phase mode |
