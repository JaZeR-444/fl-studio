# Dub Echo Workflow

## Sound Profile
Classic dub effects with frequency-shifted echoes.

## Recommended Preset
`genre/08-dub-echo.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Frequency Shift | 80Hz | Dubby |
| Direction | Down | Warm |
| Mix | 55% | Blend |
| Feedback | 40% | Echoes |
| Stereo Mode | Sum | Mono |
| Drive | 6% | Saturation |

## Workflow Integration
1. Combine with delay for classic dub
2. Frequency shift interacts with echoes
3. Use for space and depth
4. Automate feedback for builds

## Chain Processing
```
Source → High-pass 120Hz
  → Frequency Shifter
  → Delay
  - Dub style, 400ms, 50% feedback
```

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More echoes | Increase feedback to 50% |
| Less ringing | Reduce feedback to 30% |
| Warmer | Reduce shift to 60Hz |
| More dub | Increase feedback |
