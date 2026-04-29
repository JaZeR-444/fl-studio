# Kepler Bass Workflows

## 808 Sub Bass

### Sound Profile
Deep, punchy sub with harmonic complexity for modern hip-hop and trap productions.

### Recommended Preset
`genre/01-808-thunder.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, -2 octave, 80% | Sub harmonics |
| Oscillator 2 | Square, -2 octave, 60% | Harmonic content |
| Filter | Lowpass, 180Hz, Resonance 25 | Tone shaping |
| Filter Drive | 15% | Harmonic saturation |
| Envelope | A:5, D:180, S:60, R:120 | Punch envelope |
| LFO | Sine, 0.5Hz, 20% to Filter | Subtle movement |

### Genre Variations
- **Trap:** Increase resonance to 35%, filter drive to 20%
- **Drill:** Add pitch LFO at 0.4Hz, 15% to pitch
- **Old School:** Reduce resonance to 20%, shorter decay
- **R&B:** Softer attack (8ms), warmer filter drive (10%)

### Chain Processing
```
Kepler → Fruity Parametric EQ 2
  - High-pass at 30Hz
  - +3dB bell at 80Hz
  → Fruity Limiter
  - Threshold: -18dB
  - Ratio: 4:1
  - Attack: 1ms
  - Release: 40ms
```

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More punch | Increase filter resonance to 35% |
| Darker tone | Reduce filter cutoff to 150Hz |
| brighter tone | Increase filter cutoff to 220Hz |
| More grit | Increase filter drive to 22% |
| Cleaner sound | Reduce osc2 mix to 40% |
| More wobble | Increase LFO rate to 0.8Hz |

### Troubleshooting
| Problem | Solution |
|---------|----------|
| Muffled sound | Increase filter cutoff by 20Hz |
| Distorted output | Reduce oscillator mix by 15% |
| Clicking on attacks | Increase envelope attack to 6ms |
| Phase issues | Invert osc2 phase |
| Weak low-end | Add Fruity Parametric EQ boost at 60Hz |
| Masking vocals | High-pass at 200Hz on bass channel |

### Automation Ideas
- Filter cutoff automation for risers (0→200Hz over 4 bars)
- Resonance increase on hit points
- LFO rate changes for rhythmic interest
- Filter drive increases during drops

---

## Mid-Range Bass

### Sound Profile
Funky, present bass for R&B and melodic hip-hop with harmonic richness.

### Recommended Preset
`genre/04-punchy-foundation.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, -1 octave, 80% | Body |
| Oscillator 2 | Square, -2 octave, 40% | Clarity |
| Filter | Lowpass, 800Hz, Resonance 35 | Character |
| Filter Drive | 12% | Saturation |
| Envelope | A:3, D:120, S:65, R:150 | Groove |
| LFO | Sine, 0.8Hz, 25% to Filter | Rhythm |

### Genre Variations
- **R&B:** Softer resonance (25%), slower LFO (0.4Hz)
- **Funky:** Faster LFO (1Hz), higher resonance (40%)
- **Melodic:** Slower attack (15ms), longer release (200ms)

### Chain Processing
```
Kepler → Fruity Parametric EQ 2
  - High-pass at 40Hz
  - Bell +2dB at 400Hz
  - Cut at 150Hz
  → Fruity Compressor
  - Attack: 15ms
  - Release: 90ms
  - Ratio: 2.5:1
  - Makeup: Auto
```

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More funk | Increase LFO rate to 1.2Hz |
| Smoother tone | Reduce resonance to 25% |
| More presence | Increase osc2 mix to 55% |
| More warmth | Reduce filter cutoff to 600Hz |
| More attack | Decrease envelope decay to 80ms |

### A/B Testing Checklist
- [ ] Resonance at 35% vs 25%
- [ ] LFO on vs LFO off
- [ ] Osc2 at 40% vs 55%
- [ ] Filter drive at 12% vs 18%

---

## Drill Sub

### Sound Profile
Heavy, menacing sub with extreme low-end presence for drill productions.

### Recommended Preset
`genre/09-reaper-sub.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, -2 octave, 90% | Weight |
| Oscillator 2 | Saw, -2 octave, 90% | Thickness |
| Filter | Lowpass, 120Hz, Resonance 30 | Darkness |
| Filter Drive | 20% | Distortion |
| Envelope | A:8, D:250, S:70, R:180 | Sustain |
| LFO | Square, 0.4Hz, 15% to Pitch | Dissonance |

### Genre Variations
- **UK Drill:** Faster LFO (0.6Hz), higher resonance (38%)
- **American Drill:** Static pitch, lower resonance (25%)
- **Dark Trap:** Subtle LFO (0.2Hz), moderate drive (15%)

### Chain Processing
```
Kepler → Fruity Parametric EQ 2
  - High-pass at 25Hz
  → Fruity Limiter
  - Threshold: -12dB
  - Ratio: 6:1
  - Attack: 0.5ms
  - Release: 30ms
```

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More menacing | Increase pitch LFO to 20% |
| Heavier | Increase filter drive to 28% |
| Cleaner | Reduce osc2 mix to 70% |
| More movement | Increase LFO rate to 0.6Hz |

### Safety Notes
- Monitor for unwanted distortion at high filter drive
- Use high-pass filters on all other channels
- Check mono compatibility before mixing

---

## Bass Workflow Summary

### By Genre
| Genre | Preset | Key Tweaks |
|-------|--------|------------|
| Trap | 808 Thunder | Resonance 35%, LFO on |
| Drill | Reaper Sub | Pitch LFO, high drive |
| R&B | Punchy Foundation | Softer attack, warmth |
| Hip-Hop | 808 Thunder | Classic settings |
| EDM | Resonance Bass | Higher resonance, filter sweeps |

### By Role
| Role | Recommended Settings |
|------|---------------------|
| Main 808 | 808 Thunder, +3dB at 80Hz |
| Layer bass | Punchy Foundation, lower volume |
| Sub layer | Reaper Sub, filtered below 150Hz |
| Textural bass | Glitch Pluck, short envelope |

### Genre Translation Quick Reference
| From → To | Adjustment |
|-----------|------------|
| Trap → R&B | Reduce resonance 50%, slow LFO |
| Trap → Drill | Add pitch LFO, increase drive |
| Drill → Trap | Remove pitch LFO, reduce drive |
| R&B → Trap | Increase resonance, add LFO |
