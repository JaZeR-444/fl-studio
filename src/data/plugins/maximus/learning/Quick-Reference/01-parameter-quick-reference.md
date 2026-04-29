# Maximus Quick Reference

## Parameters at a Glance

| Parameter | Range | Default | Purpose |
|-----------|-------|---------|---------|
| Input Gain | 0-12 dB | 0 dB | Drive limiter |
| Threshold | -30 to 0 dB | -6 dB | Limiting point |
| Ratio | 1:1 to ∞:1 | 4:1 | Intensity |
| Attack | 0.01-10 ms | 0.5 ms | Response speed |
| Release | 10-1000 ms | 100 ms | Recovery |
| Ceiling | -1.0 to 0 dB | -0.3 dB | Max output |
| Output Gain | 0-12 dB | 0 dB | Compensation |

---

## Attack Time Guide

| Application | Attack Time | Purpose |
|-------------|-------------|---------|
| EDM/Dubstep | 0.05-0.2 ms | Maximum control |
| Hip-Hop | 0.1-0.3 ms | Punch preservation |
| Pop/Rock | 0.3-1.0 ms | Natural feel |
| Vocals | 0.3-0.5 ms | Clarity |
| Mastering | 0.3-0.5 ms | Transparency |
| Glue | 1-3 ms | Transient through |

---

## Release Time Guide

| Tempo | Release Range | Feel |
|-------|---------------|------|
| 140+ BPM | 25-50 ms | Tight, pumping |
| 100-140 BPM | 50-100 ms | Standard |
| 70-100 BPM | 100-150 ms | Natural |
| <70 BPM | 150-250 ms | Smooth |

---

## Gain Reduction by Genre

| Genre | Typical GR | Ratio | Notes |
|-------|------------|-------|-------|
| Classical | 0-2 dB | 2:1-3:1 | Preserve dynamics |
| Jazz | 1-3 dB | 3:1 | Natural feel |
| Pop | 3-6 dB | 4:1-5:1 | Competitive |
| Hip-Hop | 4-8 dB | 6:1-8:1 | Heavy |
| EDM | 6-10 dB | 8:1-10:1 | Maximum loudness |
| Metal | 6-12 dB | 10:1-15:1 | Very aggressive |

---

## Ceiling Settings

| Purpose | Ceiling | Notes |
|---------|---------|-------|
| Maximum loudness | -0.1 dB | Risky for transients |
| Standard | -0.3 dB | Safe choice |
| Extra headroom | -0.5 dB | For multi-platform |
| Mastering safe | -0.3 dB | Industry standard |

---

## Loudness Targets

| Platform | LUFS Target | True Peak |
|----------|-------------|-----------|
| Spotify | -14 | -1 dBTP |
| Apple Music | -16 | -1 dBTP |
| YouTube | -14 | -1 dBTP |
| Amazon | -14 | -1 dBTP |
| CD | -9 | -0.1 dBTP |

---

## Genre Starting Points

### Hip-Hop
| Parameter | Value |
|-----------|-------|
| Ratio | 8:1 |
| Attack | 0.15 ms |
| Release | 50 ms |
| GR | 6-8 dB |
| Ceiling | -0.2 dB |

### R&B
| Parameter | Value |
|-----------|-------|
| Ratio | 4:1 |
| Attack | 0.5 ms |
| Release | 120 ms |
| GR | 3-5 dB |
| Ceiling | -0.3 dB |

### EDM
| Parameter | Value |
|-----------|-------|
| Ratio | 10:1 |
| Attack | 0.08 ms |
| Release | 40 ms |
| GR | 6-10 dB |
| Ceiling | -0.1 dB |

### Pop
| Parameter | Value |
|-----------|-------|
| Ratio | 5:1 |
| Attack | 0.3 ms |
| Release | 80 ms |
| GR | 4-6 dB |
| Ceiling | -0.3 dB |

---

## Troubleshooting Guide

| Problem | Likely Cause | Solution |
|---------|--------------|----------|
| Distorted | Input too hot | Lower input gain |
| Pumping | Release too fast | Increase release |
| No punch | Attack too fast | Slow attack |
| Not loud | GR too light | Lower threshold |
| Squashed | GR too heavy | Reduce gain reduction |
| Clipping | Ceiling too high | Lower ceiling |

---

## Related Documentation

- [Limiting Deep Dive](../02-Learning/Concepts/01-limiting-deep-dive.md)
- [Maximus Workflows](../03-Workflows/INDEX.md)
- [Maximus Presets](../02-Data/presets/INDEX.md)
