# Synth Texture Workflow

## Sound Profile
Harmonic enhancement for synths without obvious effect.

## Recommended Preset
`genre/09-synth-texture.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Frequency Shift | 150Hz | Texture |
| Direction | Down | Warm |
| Mix | 40% | Blend |
| Feedback | 35% | Resonance |
| Stereo Mode | Sum | Mono |
| Drive | 5% | Saturation |

## Workflow Integration
1. Use on synth leads for enhancement
2. Low mix keeps subtle
3. Layer with reverb
4. Blend for control

## Chain Processing
```
Source → Low-pass 5kHz
  → Frequency Shifter
  → Reverb
  - Subtle room, 15% mix
```

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More obvious | Increase mix to 50% |
| More subtle | Reduce mix to 25% |
| More texture | Increase feedback to 45% |
| Cleaner | Reduce feedback to 25% |
