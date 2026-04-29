# Lo-Fi Degrade Workflow

## Sound Profile
Authentic degradation with bitcrush, saturation, and high-frequency roll-off.

## Recommended Preset
`genre/05-lofi-degrade.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Crossover 1 | 500Hz | Low/Mid split |
| Crossover 2 | 3000Hz | Mid/High split |
| Slope | 12dB/oct | Smooth |
| Mode | Minimum-phase | Character |

## Band Processing
| Band | Frequency | Processing | Purpose |
|------|-----------|------------|---------|
| Band 1 | 30-500Hz | Bitcrusher 8-bit | Degrade |
| Band 2 | 500-3000Hz | Saturation 5% | Warmth |
| Band 3 | 3000Hz+ | High-pass 6kHz | Roll-off |

## Workflow Integration
1. Route source to Frequency Splitter
2. Apply bitcrush to low band
3. Add subtle saturation to mids
4. Roll off harsh highs
5. Blend with tape wobble if desired

## Chain Processing
```
Band 1 → Tape wobble
Band 2 → Vinyl crackle
Band 3 → High-pass
```

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More degraded | Reduce bitcrusher to 6-bit |
| Cleaner | Increase bitcrusher to 12-bit |
| Warmer | Increase saturation to 8% |
| Less noisy | Raise Band3 crossover |
