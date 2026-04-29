# VHS Warble Workflow

## Sound Profile
Lo-fi degradation with warbling tape effect.

## Recommended Preset
`genre/05-vhs-warble.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Frequency Shift | 80Hz | Warble |
| Direction | Alternate | Random |
| Mix | 50% | Blend |
| Feedback | 15% | Subtle |
| Stereo Mode | Sum | Mono |
| Drive | 4% | Saturation |

## Workflow Integration
1. Use on drums or full mix
2. Slow LFO modulation creates warble
3. Layer with tape saturation
4. Blend for intensity control

## Chain Processing
```
Source → High-pass 80Hz
  → Frequency Shifter
  → Tape Saturation
  - Drive: 5%
```

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More warble | Increase LFO rate |
| Less chaos | Reduce LFO rate |
| More degraded | Increase drive |
| Cleaner | Reduce mix to 35% |
