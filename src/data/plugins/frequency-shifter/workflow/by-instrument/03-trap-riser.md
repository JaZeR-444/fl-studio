# Trap Riser Workflow

## Sound Profile
Tension-building riser with upward frequency shift for pre-drop builds.

## Recommended Preset
`genre/01-trap-riser.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Frequency Shift | 800Hz | Tension |
| Direction | Up | Building |
| Mix | 75% | Prominent |
| Feedback | 0% | Clean |
| Stereo Mode | Sum | Mono safe |
| Drive | 5% | Saturation |

## Automation Workflow
1. Start: Shift 0Hz, Mix 0%
2. Bar 1-2: Shift to 400Hz, Mix 40%
3. Bar 3: Shift to 600Hz, Mix 60%
4. Bar 4 (pre-drop): Shift to 800Hz, Mix 75%
5. Drop: Cut to 0%

## Genre Variations
- **EDM Build:** 4-bar automation, shift to 1000Hz
- **Trap Build:** 2-bar automation, shift to 600Hz
- **Hip-Hop:** 1-bar automation, shift to 400Hz

## Chain Processing
```
Source → High-pass 200Hz
  → Frequency Shifter
  → Fruily Limiter
  - Gentle ceiling
```

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More tension | Increase max shift to 1000Hz |
| Smoother build | Lengthen automation to 8 bars |
| More aggressive | Increase drive to 8% |
| Cleaner | Set feedback to 0% |
