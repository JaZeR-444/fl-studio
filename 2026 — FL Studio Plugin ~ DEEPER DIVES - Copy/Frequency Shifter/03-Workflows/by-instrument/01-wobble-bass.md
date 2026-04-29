# Wobble Bass Workflow

## Sound Profile
Rhythmic, dub-style bass with frequency-shifted harmonics for dynamic grooves.

## Recommended Preset
`genre/02-wobble-bass.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Frequency Shift | 120Hz | Dissonance |
| Direction | Down | Dubby feel |
| Mix | 65% | Blend |
| Feedback | 25% | Resonance |
| Stereo Mode | Sum | Mono compatible |
| Drive | 8% | Saturation |

## Workflow Integration
1. Route bass to Frequency Shifter on send/return
2. Create LFO on send level for rhythmic pumping
3. Sync LFO to tempo (1/4 or 1/2 notes)
4. Automate feedback for builds

## Genre Variations
- **Dub Wobble:** Shift 80Hz, Feedback 35%, Mix 55%
- **Hip-Hop Wobble:** Shift 150Hz, Feedback 20%, Mix 70%
- **Reggaeton:** Shift 100Hz, Feedback 15%, Mix 60%

## Chain Processing
```
Source → Lowpass 800Hz
  → Frequency Shifter
  → Fruily Compressor
  - Attack: 5ms
  - Release: 80ms
  - Ratio: 3:1
```

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More dubby | Increase feedback to 35% |
| Cleaner | Reduce shift to 80Hz |
| More wobble | Sync LFO to 1/8 notes |
| More aggressive | Increase drive to 12% |
