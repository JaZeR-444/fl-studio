# Frequency Shifter Bass Workflows

## Wobble Bass

### Sound Profile
Rhythmic, dub-style bass with frequency-shifted harmonics for dynamic grooves.

### Recommended Preset
`genre/02-wobble-bass.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Frequency Shift | 120Hz | Dissonance |
| Direction | Down | Dubby feel |
| Mix | 65% | Blend |
| Feedback | 25% | Resonance |
| Stereo Mode | Sum | Mono compatible |
| Drive | 8% | Saturation |

### Workflow Integration
1. Route bass to Frequency Shifter on send/return
2. Create LFO on send level for rhythmic pumping
3. Sync LFO to tempo (1/4 or 1/2 notes)
4. Automate feedback for builds

### Genre Variations
- **Dub Wobble:** Shift 80Hz, Feedback 35%, Mix 55%
- **Hip-Hop Wobble:** Shift 150Hz, Feedback 20%, Mix 70%
- **Reggaeton:** Shift 100Hz, Feedback 15%, Mix 60%

### Chain Processing
```
Source → Lowpass 800Hz
  → Frequency Shifter
  → Fruily Compressor
  - Attack: 5ms
  - Release: 80ms
  - Ratio: 3:1
```

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More dubby | Increase feedback to 35% |
| Cleaner | Reduce shift to 80Hz |
| More wobble | Sync LFO to 1/8 notes |
| More aggressive | Increase drive to 12% |

---

## Grim Sub Shift

### Sound Profile
Dark, menacing sub with frequency-shifted harmonics for drill productions.

### Recommended Preset
`genre/06-grim-sub.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Frequency Shift | 200Hz | Darkness |
| Direction | Down | Heaviness |
| Mix | 70% | Prominent |
| Feedback | 20% | Harmonics |
| Stereo Mode | Sum | Mono |
| Drive | 15% | Distortion |

### Workflow Integration
1. Route 808 sub to Frequency Shifter
2. Sidechain to kick for clean crossover
3. Automate mix for emphasis on downbeats
4. Blend with clean sub for control

### Chain Processing
```
Source → High-pass 25Hz
  → Frequency Shifter
  → Fruily Limiter
  - Threshold: -12dB
  - Ratio: 6:1
  - Attack: 0.5ms
  - Release: 25ms
```

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| Darker tone | Reduce shift to 150Hz |
| More aggressive | Increase shift to 280Hz |
| Cleaner sub | Reduce drive to 10% |
| More texture | Increase feedback to 30% |

---

## Bass Workflow Summary

### By Genre
| Genre | Shift | Direction | Mix | Feedback |
|-------|-------|-----------|-----|----------|
| Trap | 100Hz | Up | 65% | 15% |
| Drill | 200Hz | Down | 70% | 20% |
| Dub | 80Hz | Down | 55% | 35% |
| Hip-Hop | 120Hz | Down | 65% | 25% |
| EDM | 150Hz | Up | 75% | 20% |

### Processing Chain Priority
| Position | Plugin | Purpose |
|----------|--------|---------|
| 1 | High-pass | Clean sub |
| 2 | Frequency Shifter | Effect |
| 3 | Compressor | Control |
| 4 | Limiter | Maximize |

### Common Issues
| Problem | Solution |
|---------|----------|
| Losing sub weight | Reduce shift frequency, high-pass first |
| Too much dissonance | Lower mix percentage |
| Phasing issues | Use Sum mode, mono the effect |
| Distorted clean | Reduce drive |
