# Frequency Splitter Bass Workflows

## 808 Focus Split

### Sound Profile
Precision-controlled 808 with separate sub, mid, and high processing.

### Recommended Preset
`genre/02-808-focus.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Crossover 1 | 150Hz | Sub/Mid split |
| Crossover 2 | 800Hz | Mid/High split |
| Slope | 12dB/oct | Musical overlap |
| Mode | Minimum-phase | Impact |

### Band Processing
| Band | Frequency | Processing |
|------|-----------|-------------|
| Band 1 (Sub) | 25-150Hz | Sub-only, +2dB gain |
| Band 2 (Mid) | 150-800Hz | Mid-focus, -1dB gain |
| Band 3 (High) | 800Hz+ | High-pass 3kHz |

### Workflow Integration
1. Route 808 to Frequency Splitter
2. Process Band 1 for sub weight
3. Process Band 2 for mid punch
4. Filter Band 3 to remove mud
5. Recombine with careful gain staging

### Genre Variations
- **Trap:** Crossover1 200Hz, Band1 resonance boost
- **Drill:** Crossover1 120Hz, Band1 drive increase
- **R&B:** Crossover1 180Hz, smoother slope

### Chain Processing Per Band
```
Band 1 → Fruily Limiter (sub focus)
  - Threshold: -12dB
  - Fast attack
Band 2 → Fruily Compressor (mid punch)
  - Attack: 10ms
  - Release: 80ms
Band 3 → High-pass (cleanup)
  - Cut at 3kHz
```

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More sub | Increase Band1 gain +3dB |
| More punch | Increase Band2 gain +2dB |
| Cleaner highs | Lower Band3 crossover to 2kHz |
| More separation | Increase slope to 24dB/oct |

---

## Kick/Bass Separation

### Sound Profile
Clean separation between kick and bass for punchy, defined low-end.

### Recommended Preset
`genre/10-kick-bass.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Crossover 1 | 80Hz | Kick/Bass split |
| Slope | 48dB/oct | Maximum separation |
| Mode | Minimum-phase | Impact |

### Band Processing
| Band | Frequency | Processing |
|------|-----------|-------------|
| Band 1 (Kick) | 40-80Hz | Kick transient focus |
| Band 2 (Bass) | 80-200Hz | Bass body |

### Workflow Integration
1. Route combined kick/bass to splitter
2. Apply transient processing to Band 1
3. Apply sidechain compression to Band 2
4. Blend for clean crossover

### Sidechain Workflow
```
Band 1 (Kick) output → Key input
  → Fruily Compressor on Band 2
  - Threshold: -20dB
  - Ratio: 4:1
  - Release: 50ms (sync to tempo)
```

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More kick | Increase Band1 crossover to 100Hz |
| More bass | Lower Band1 crossover to 60Hz |
| Tighter | Increase slope to 48dB/oct |
| Musical | Reduce slope to 24dB/oct |

---

## Drill Sub Punishment

### Sound Profile
Extreme sub processing with heavy saturation for drill productions.

### Recommended Preset
`genre/06-drill-sub.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Crossover 1 | 120Hz | Sub/High split |
| Slope | 24dB/oct | Sharp cut |
| Mode | Minimum-phase | Power |

### Band Processing
| Band | Frequency | Processing |
|------|-----------|-------------|
| Band 1 (Sub) | 25-120Hz | Extreme saturation 25% |
| Band 2 (High) | 120Hz+ | High-pass 3kHz |

### Chain Processing
```
Band 1 → Fruily Distancer
  - Drive: 25%
  → Fruily Limiter
  - Heavy limiting
Band 2 → High-pass filter
```

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More distortion | Increase saturation to 30% |
| Cleaner sound | Reduce saturation to 15% |
| Darker tone | Lower crossover to 100Hz |
| More weight | Increase crossover to 140Hz |

---

## Bass Workflow Summary

### By Goal
| Goal | Crossover | Slope | Mode |
|------|-----------|-------|------|
| Maximum separation | 80Hz | 48dB/oct | Min-phase |
| Musical overlap | 100Hz | 12dB/oct | Min-phase |
| Mastering grade | 80Hz | 24dB/oct | Linear |
| Vintage feel | 120Hz | 12dB/oct | Min-phase |

### By Genre
| Genre | Crossover | Processing Focus |
|-------|-----------|------------------|
| Trap | 200Hz | Band2 punch |
| Drill | 120Hz | Band1 saturation |
| EDM | 80Hz | Kick/bass separation |
| R&B | 180Hz | Smooth crossover |
| Hip-Hop | 150Hz | Classic 808 |

### Troubleshooting
| Problem | Solution |
|---------|----------|
| Holey low-end | Lower crossover frequency |
| Muddy mix | Raise crossover frequency |
| Phase issues | Use linear-phase mode |
| CPU heavy | Reduce slope to 12dB/oct |
| Transients lost | Minimum-phase, 48dB/oct |
