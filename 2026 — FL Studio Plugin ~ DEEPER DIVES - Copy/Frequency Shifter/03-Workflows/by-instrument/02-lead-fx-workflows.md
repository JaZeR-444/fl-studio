# Frequency Shifter Lead & FX Workflows

## Trap Riser Shift

### Sound Profile
Tension-building riser with upward frequency shift for pre-drop builds.

### Recommended Preset
`genre/01-trap-riser.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Frequency Shift | 800Hz | Tension |
| Direction | Up | Building |
| Mix | 75% | Prominent |
| Feedback | 0% | Clean |
| Stereo Mode | Sum | Mono safe |
| Drive | 5% | Saturation |

### Automation Workflow
1. Start: Shift 0Hz, Mix 0%
2. Bar 1-2: Shift to 400Hz, Mix 40%
3. Bar 3: Shift to 600Hz, Mix 60%
4. Bar 4 (pre-drop): Shift to 800Hz, Mix 75%
5. Drop: Cut to 0%

### Genre Variations
- **EDM Build:** 4-bar automation, shift to 1000Hz
- **Trap Build:** 2-bar automation, shift to 600Hz
- **Hip-Hop:** 1-bar automation, shift to 400Hz

### Chain Processing
```
Source → High-pass 200Hz
  → Frequency Shifter
  → Fruily Limiter
  - Gentle ceiling
```

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More tension | Increase max shift to 1000Hz |
| Smoother build | Lengthen automation to 8 bars |
| More aggressive | Increase drive to 8% |
| Cleaner | Set feedback to 0% |

---

## Soul Flange

### Sound Profile
Smooth, vocal-friendly flanging effect for melodic elements.

### Recommended Preset
`genre/03-soul-flange.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Frequency Shift | 50Hz | Subtle |
| Direction | Down | Warm |
| Mix | 35% | Blend |
| Feedback | 30% | Resonance |
| Stereo Mode | Sum | Smooth |
| Drive | 3% | Gentle |

### Workflow Integration
1. Apply to vocals or synth leads
2. Use for subtle movement on sustained notes
3. Blend with dry signal for control
4. Lower mix for background texture

### Chain Processing
```
Source → High-pass 100Hz
  → Frequency Shifter
  → Vintage Chorus
  - Subtle enhancement
  → Light compression
```

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More flange | Increase feedback to 40% |
| Less obvious | Reduce mix to 20% |
| Warmer tone | Reduce shift to 30Hz |
| More movement | Increase feedback to 45% |

---

## EDM Metallic Shift

### Sound Profile
Bright, aggressive metallic texture for leads and percussion.

### Recommended Preset
`genre/04-edm-metallic.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Frequency Shift | 400Hz | Metallic |
| Direction | Up | Bright |
| Mix | 80% | Prominent |
| Feedback | 45% | Resonance |
| Stereo Mode | Sum | Wide |
| Drive | 12% | Edge |

### Workflow Integration
1. Apply to synth leads for character
2. Use on percussion for metallic clicks
3. Sidechain to rhythm for pumping
4. Layer with clean signal for control

### Chain Processing
```
Source → Band-pass 2k-6kHz
  → Frequency Shifter
  → Fruily Limiter
  - Ceiling: -0.5dB
```

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More metallic | Increase feedback to 55% |
| Less harsh | Reduce drive to 8% |
| Cleaner | Reduce feedback to 30% |
| Wider | Enable stereo width processing |

---

## Vocal Air

### Sound Profile
Subtle presence enhancement for vocals without obvious effect.

### Recommended Preset
`genre/10-vocal-air.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Frequency Shift | 50Hz | Air |
| Direction | Up | Presence |
| Mix | 30% | Subtle |
| Feedback | 0% | Clean |
| Stereo Mode | Sum | Mono safe |
| Drive | 2% | Gentle |

### Workflow Integration
1. Apply last in vocal chain
2. Use on lead vocals only
3. A/B test with/after reverb
4. Blend for subtle presence

### Chain Processing
```
Source → De-esser (if needed)
  → Frequency Shifter
  → Reverb
  - Subtle: 12% mix
```

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More presence | Increase mix to 40% |
| More subtle | Reduce mix to 20% |
| Warmer | Direction down, shift 40Hz |
| Brighter | Direction up, shift 60Hz |

---

## Lead & FX Workflow Summary

### By Instrument
| Instrument | Recommended Shift | Direction | Mix |
|------------|-------------------|-----------|-----|
| Synth lead | 150Hz | Up | 50% |
| Vocal | 50Hz | Up | 30% |
| Riser | 800Hz | Up | 75% |
| Texture | 200Hz | Down | 55% |
| Percussion | 300Hz | Up | 60% |

### By Genre
| Genre | Use Case | Key Settings |
|-------|----------|--------------|
| Trap | Riser | Up 800Hz, 4-bar build |
| EDM | Lead | Up 200Hz, 50% mix |
| R&B | Vocal | Up 50Hz, 30% mix |
| Lo-Fi | Texture | Alternate, 50% mix |
| Dub | Bass | Down 80Hz, 55% mix |

### Automation Ideas
| Moment | Automation |
|--------|------------|
| Build | Shift 0→800Hz, Mix 0→75% |
| Drop | Cut to 0% instantly |
| Verse | Static subtle shift |
| Chorus | Increase feedback 20→35% |
| Outro | Gradual release to dry |
