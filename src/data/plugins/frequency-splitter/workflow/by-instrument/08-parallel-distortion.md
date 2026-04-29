# Parallel Distortion Workflow

## Sound Profile
Clean low-end with distorted mids/highs for aggressive sounds.

## Recommended Preset
`genre/09-parallel-distort.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Crossover 1 | 500Hz | Low/Mid split |
| Crossover 2 | 2000Hz | Mid/High split |
| Slope | 24dB/oct | Distinct |
| Mode | Minimum-phase | Impact |

## Band Processing
| Band | Frequency | Processing | Purpose |
|------|-----------|------------|---------|
| Band 1 | 30-500Hz | Clean, -6dB | Foundation |
| Band 2 | 500-2000Hz | Distortion +6dB | Grind |
| Band 3 | 2000Hz+ | Crisp, 0dB | Clarity |

## Workflow Integration
1. Route source to Frequency Splitter
2. Reduce Band 1 for clean foundation
3. Apply distortion to Band 2 for aggression
4. Keep Band 3 clean for clarity
5. Recombine for balanced sound

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More distorted | Increase Band2 gain +3dB |
| Cleaner mix | Increase Band1 gain -3dB |
| More aggressive | Increase Band2 distortion |
| Less muddy | Raise Crossover1 to 600Hz |
