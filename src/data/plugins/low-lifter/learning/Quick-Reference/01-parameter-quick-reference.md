# Low Lifter Quick Reference

## Parameters at a Glance

| Parameter | Range | Default | Purpose |
|-----------|-------|---------|---------|
| Input Gain | 0-12 dB | 0 dB | Drive limiter |
| Threshold | -30 to 0 dB | -6 dB | Limiting point |
| Ratio | 1:1 to 20:1 | 4:1 | Limiting intensity |
| Attack | 0.01-10 ms | 1 ms | Response speed |
| Release | 10-500 ms | 100 ms | Recovery time |
| Ceiling | -1 to 0 dB | -0.3 dB | Max output |
| Output Gain | 0-12 dB | 0 dCompensation |

---

## Gain Reduction Guidelines

| Goal | Gain Reduction | Ratio | Notes |
|------|----------------|-------|-------|
| Subtle control | 1-3 dB | 2:1-3:1 | Transparent |
| Standard | 3-6 dB | 4:1 | Common |
| Heavy | 6-10 dB | 8:1-12:1 | Aggressive |
| Maximum | 10+ dB | 15:1-20:1 | Loudness |

---

## Attack Time Guide

| Element | Attack Time | Purpose |
|---------|-------------|---------|
| Kick | 0.02-0.1 ms | Preserve punch |
| Snare | 0.1-0.3 ms | Maintain crack |
| Bass | 0.1-0.5 ms | Control peaks |
| Vocals | 0.3-1 ms | Natural |
| Mix Bus | 0.5-2 ms | Transparent |
| Mastering | 0.2-0.5 ms | Precise |

---

## Release Time Guide

| Tempo | Release Time | Feel |
|-------|--------------|------|
| 140+ BPM | 25-40 ms | Tight |
| 120-140 BPM | 40-80 ms | Standard |
| 100-120 BPM | 80-120 ms | Natural |
| 70-100 BPM | 100-150 ms | Smooth |
| <70 BPM | 150-250 ms | Relaxed |

---

## Ceiling Settings

| Platform | Ceiling | LUFS Target |
|----------|---------|--------------|
| Spotify | -0.3 dB | -14 LUFS |
| Apple Music | -0.3 dB | -16 LUFS |
| YouTube | -0.3 dB | -14 LUFS |
| Amazon | -0.3 dB | -14 LUFS |
| CD | -0.1 dB | -9 LUFS |

---

## Genre Settings

### Hip-Hop/Trap
| Parameter | Value |
|-----------|-------|
| Ratio | 8:1-10:1 |
| Attack | 0.1 ms |
| Release | 50 ms |
| GR | 6-8 dB |
| Ceiling | -0.2 dB |

### R&B
| Parameter | Value |
|-----------|-------|
| Ratio | 3:1-4:1 |
| Attack | 0.5 ms |
| Release | 120 ms |
| GR | 3-5 dB |
| Ceiling | -0.3 dB |

### EDM
| Parameter | Value |
|-----------|-------|
| Ratio | 10:1-12:1 |
| Attack | 0.05 ms |
| Release | 35 ms |
| GR | 6-10 dB |
| Ceiling | -0.1 dB |

### Pop
| Parameter | Value |
|-----------|-------|
| Ratio | 4:1-6:1 |
| Attack | 0.3 ms |
| Release | 80 ms |
| GR | 4-6 dB |
| Ceiling | -0.3 dB |

---

## Troubleshooting Guide

| Problem | Likely Cause | Solution |
|---------|--------------|----------|
| Distorted | Input too hot | Lower input, raise threshold |
| Pumping | Release too fast | Increase release time |
| No punch | Attack too fast | Slow down attack |
| Not loud enough | Ratio too low | Increase ratio |
| Squashed | GR too heavy | Reduce gain reduction |
| Clipping | Ceiling at 0 dB | Set ceiling to -0.3 dB |

---

## Related Documentation

- [Limiting Fundamentals](../02-Learning/Concepts/01-limiting-fundamentals.md)
- [Low Lifter Workflows](../03-Workflows/INDEX.md)
- [Low Lifter Presets](../02-Data/presets/INDEX.md)
