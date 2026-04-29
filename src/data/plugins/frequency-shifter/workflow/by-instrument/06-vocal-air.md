# Vocal Air Workflow

## Sound Profile
Subtle presence enhancement for vocals without obvious effect.

## Recommended Preset
`genre/10-vocal-air.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Frequency Shift | 50Hz | Air |
| Direction | Up | Presence |
| Mix | 30% | Subtle |
| Feedback | 0% | Clean |
| Stereo Mode | Sum | Mono safe |
| Drive | 2% | Gentle |

## Workflow Integration
1. Apply last in vocal chain
2. Use on lead vocals only
3. A/B test with/after reverb
4. Blend for subtle presence

## Chain Processing
```
Source → De-esser (if needed)
  → Frequency Shifter
  → Reverb
  - Subtle: 12% mix
```

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More presence | Increase mix to 40% |
| More subtle | Reduce mix to 20% |
| Warmer | Direction down, shift 40Hz |
| Brighter | Direction up, shift 60Hz |
