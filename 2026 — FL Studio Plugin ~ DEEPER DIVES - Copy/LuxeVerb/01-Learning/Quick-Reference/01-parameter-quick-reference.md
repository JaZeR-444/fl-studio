# LuxeVerb Quick Reference

## Parameters at a Glance

| Parameter | Range | Default | Purpose |
|-----------|-------|---------|---------|
| Algorithm | Hall/Plate/Room/Cathedral/Shimmer | Hall | Space type |
| Decay | 0.1-10 seconds | 2.0 s | Tail length |
| Pre-Delay | 0-100 ms | 20 ms | Separation |
| High Pass | 20-500 Hz | 80 Hz | Low cut |
| Low Pass | 5-20 kHz | 14 kHz | High cut |
| Diffusion | 0-100% | 70% | Scatter amount |
| Mix | 0-100% | 35% | Wet/dry balance |

---

## Decay Time by Space

| Space | Decay Time | Character |
|-------|------------|-----------|
| Small Room | 0.5-1.0s | Tight |
| Medium Room | 1.0-2.0s | Natural |
| Large Room | 2.0-3.0s | Open |
| Hall | 3.0-5.0s | Expansive |
| Cathedral | 6.0-10.0s | Epic |

---

## Filter Settings by Source

| Source | High Pass | Low Pass | Notes |
|--------|------------|----------|-------|
| Vocals | 80-100 Hz | 10-12 kHz | Natural body |
| Drums | 120-200 Hz | 12-14 kHz | Tight low end |
| Synths | 60-80 Hz | 14-16 kHz | Full range |
| Guitar | 100-150 Hz | 10-12 kHz | No mud |
| Piano | 60-80 Hz | 12-14 kHz | Full dynamics |

---

## Mix Percentage by Application

| Application | Mix Range | Notes |
|-------------|-----------|-------|
| Subtle depth | 15-25% | Background |
| Natural space | 25-40% | Realistic |
| Pronounced | 40-55% | Noticeable |
| Effect | 55-75% | Prominent |
| 100% wet | 100% | Pure reverb |

---

## Pre-Delay Guidelines

| Application | Pre-Delay | Purpose |
|-------------|-----------|---------|
| Tight drums | 0-10 ms | Immediate reverb |
| Vocals | 15-25 ms | Clarity |
| Pads | 20-40 ms | Definition |
| Space effect | 40-80 ms | Clear transients |
| Effect | Variable | Creative |

---

## Genre Settings

### Hip-Hop
| Parameter | Value |
|-----------|-------|
| Algorithm | Plate or Room |
| Decay | 1.0-1.5s |
| High Pass | 120 Hz |
| Mix | 25-35% |

### R&B
| Parameter | Value |
|-----------|-------|
| Algorithm | Hall or Plate |
| Decay | 1.5-2.5s |
| High Pass | 80 Hz |
| Mix | 35-45% |

### EDM
| Parameter | Value |
|-----------|-------|
| Algorithm | Hall or Shimmer |
| Decay | 2.0-4.0s |
| High Pass | 100 Hz |
| Mix | 40-55% |

### Ambient
| Parameter | Value |
|-----------|-------|
| Algorithm | Cathedral or Hall |
| Decay | 5.0-8.0s |
| High Pass | 60 Hz |
| Mix | 50-65% |

---

## Troubleshooting Guide

| Problem | Likely Cause | Solution |
|---------|--------------|----------|
| Muddy mix | High-pass too low | Increase high-pass |
| Harsh reverb | Low-pass too high | Decrease low-pass |
| Masking | No pre-delay | Add pre-delay |
| Too obvious | Mix too high | Lower mix |
| No space | Decay too short | Increase decay |
| Phasing | Stereo collapse | Check mono |

---

## Related Documentation

- [Reverb Fundamentals](../02-Learning/Concepts/01-reverb-fundamentals.md)
- [LuxeVerb Workflows](../03-Workflows/INDEX.md)
- [LuxeVerb Presets](../02-Data/presets/INDEX.md)
