# Frequency Splitter Vocal & Mix Workflows

## R&B Vocal Chain

### Sound Profile
Professional vocal processing with separate bands for clarity, presence, and air.

### Recommended Preset
`genre/03-rnb-vocal.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Crossover 1 | 200Hz | Low/Mid split |
| Crossover 2 | 4000Hz | Mid/High split |
| Slope | 24dB/oct | Smooth |
| Mode | Linear-phase | Vocal truth |

### Band Processing
| Band | Frequency | Processing | Purpose |
|------|-----------|------------|---------|
| Band 1 | 80-200Hz | High-pass | Remove mud |
| Band 2 | 200-4000Hz | Presence boost | Clarity |
| Band 3 | 4000Hz+ | Air boost | Brilliance |

### Workflow Integration
1. Route vocals to Frequency Splitter
2. Apply high-pass to Band 1 (removes mud)
3. Apply bell boost to Band 2 (2-5kHz, +2dB)
4. Apply shelf boost to Band 3 (8kHz+, +1.5dB)
5. Apply compression per band

### Band-Specific Processing
```
Band 1 → Fruily Compressor
  - Gentle, ratio 2:1
Band 2 → Fruily Parametric EQ 2
  - Bell +2dB at 3kHz
  → Fruily Compressor
  - Ratio 3:1, attack 10ms
Band 3 → De-esser
  - Threshold: -18dB
  → High-shelf +1.5dB at 8kHz
```

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More presence | Increase Band2 +1dB |
| More air | Increase Band3 +1dB |
| Less harsh | Reduce Band2 at 3kHz |
| Less sibilant | Lower de-esser threshold |
| More warmth | Reduce Band3 crossover to 3kHz |

---

## Vocal Doubler Split

### Sound Profile
Natural doubling effect by pitch-shifting only high frequencies.

### Recommended Preset
`genre/07-vocal-doubler.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Crossover 1 | 2000Hz | Split point |
| Slope | 24dB/oct | Clean cut |
| Mode | Linear-phase | No phasing |

### Band Processing
| Band | Frequency | Processing | Purpose |
|------|-----------|------------|---------|
| Band 1 | 100-2000Hz | Dry signal | Original |
| Band 2 | 2000Hz+ | Pitch +5 cents, 35% mix | Doubling |

### Workflow Integration
1. Route vocals to Frequency Splitter
2. Keep Band 1 dry for original character
3. Apply subtle pitch shift to Band 2
4. Blend Band 2 at 35% for natural doubling
5. Apply light reverb to combined signal

### Why This Works
- Only highs are doubled, preventing muddy buildup
- Linear-phase prevents phasing issues
- Subtle pitch shift adds width without obvious effect

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More obvious | Increase Band2 mix to 45% |
| More subtle | Reduce Band2 mix to 25% |
| Different character | Change pitch shift to +8 cents |
| Less artificial | Use +3 cents instead |

---

## Mix Bus Separation

### Sound Profile
Mastering-grade multiband processing for full mix control.

### Recommended Preset
`genre/08-mix-bus.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Crossover 1 | 80Hz | Sub/Low split |
| Crossover 2 | 400Hz | Low/Mid split |
| Crossover 3 | 3000Hz | Mid/High split |
| Slope | 24dB/oct | Smooth |
| Mode | Linear-phase | Mastering |

### Band Processing
| Band | Frequency | Target |
|------|-----------|--------|
| Band 1 | 30-80Hz | Sub extension |
| Band 2 | 80-400Hz | Low-mids |
| Band 3 | 400-3000Hz | Presence |
| Band 4 | 3000Hz+ | Air |

### Workflow Integration
1. Route mix bus to Frequency Splitter
2. Apply gentle compression per band
3. Apply multi-band limiting to control peaks
4. Maintain phase coherence with linear-phase

### Processing Per Band
```
Band 1 → Fruily Compressor
  - Ratio 2:1, slow attack
Band 2 → Fruily Compressor
  - Ratio 2.5:1, medium attack
Band 3 → Fruily Compressor
  - Ratio 2:1, fast attack
Band 4 → Fruily Limiter
  - Gentle ceiling
```

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More sub | Increase Band1 gain +1dB |
| More punch | Compress Band2 harder |
| More presence | Boost Band3 at 2kHz |
| More air | Boost Band4 at 8kHz |

---

## Parallel Distortion Split

### Sound Profile
Clean low-end with distorted mids/highs for aggressive sounds.

### Recommended Preset
`genre/09-parallel-distort.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Crossover 1 | 500Hz | Low/Mid split |
| Crossover 2 | 2000Hz | Mid/High split |
| Slope | 24dB/oct | Distinct |
| Mode | Minimum-phase | Impact |

### Band Processing
| Band | Frequency | Processing | Purpose |
|------|-----------|------------|---------|
| Band 1 | 30-500Hz | Clean, -6dB | Foundation |
| Band 2 | 500-2000Hz | Distortion +6dB | Grind |
| Band 3 | 2000Hz+ | Crisp, 0dB | Clarity |

### Workflow Integration
1. Route source to Frequency Splitter
2. Reduce Band 1 for clean foundation
3. Apply distortion to Band 2 for aggression
4. Keep Band 3 clean for clarity
5. Recombine for balanced sound

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More distorted | Increase Band2 gain +3dB |
| Cleaner mix | Increase Band1 gain -3dB |
| More aggressive | Increase Band2 distortion |
| Less muddy | Raise Crossover1 to 600Hz |

---

## Vocal & Mix Workflow Summary

### By Goal
| Goal | Mode | Slope | Key Setting |
|------|------|-------|-------------|
| Vocal clarity | Linear | 24dB/oct | Linear-phase |
| Doubling | Linear | 24dB/oct | Pitch shift high only |
| Mastering | Linear | 24dB/oct | Subtle compression |
| Aggressive | Min-phase | 24dB/oct | Distortion on mids |

### By Instrument
| Instrument | Crossover 1 | Crossover 2 | Processing |
|------------|-------------|-------------|------------|
| Lead Vocal | 200Hz | 4000Hz | Presence + Air |
| Backing Vocal | 250Hz | 3500Hz | Subtle enhancement |
| Full Mix | 80Hz | 400Hz | Multi-band control |
| Drum Bus | 200Hz | 2000Hz | Transient focus |
| Synth Bus | 300Hz | 3000Hz | Separation |

### Troubleshooting
| Problem | Solution |
|---------|----------|
| Vocal sounds thin | Boost Band2 at 2-3kHz |
| Vocal too bright | Reduce Band3, add de-essing |
| Mix lacks punch | Compress Band2 harder |
| Phasing on vocals | Always use linear-phase |
| Distortion on clean | Use separate instance for distortion |
