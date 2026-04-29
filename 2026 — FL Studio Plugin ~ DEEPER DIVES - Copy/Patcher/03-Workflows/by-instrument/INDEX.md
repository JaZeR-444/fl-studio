# Patcher By-Instrument Workflows

## Drum Processing Chain
| Parameter | Setting |
|-----------|---------|
| High-Pass | 40Hz |
| Low-Pass | 12kHz |
| Parallel Ratio | 60% wet |
| Attack | 1ms |
| Release | 50ms |

### Configuration
1. Load Patcher on drum track
2. Create parallel paths: clean vs processed
3. Apply EQ to processed path
4. Add compression to both paths
5. Blend for optimal balance

### Genre Applications
| Genre | Character | Settings Adjustment |
|-------|-----------|-------------------|
| Trap | Dark, punchy | Aggressive compression |
| EDM | Loud, aggressive | Higher ratio |
| R&B | Smooth, warm | Softer attack |

### Troubleshooting
| Issue | Fix |
|-------|-----|
| Loss of punch | Increase attack time |
| Too harsh | High-pass at 60Hz |
| Not cutting through | Boost 3-4kHz |

---

## Bass Processing Chain
| Parameter | Setting |
|-----------|---------|
| High-Pass | 20Hz |
| Low-Pass | 200Hz |
| Saturation | 30% |
| Limiter Ceiling | -3dB |

### Configuration
1. Route bass through Patcher
2. Apply high-pass to remove sub bleed
3. Add saturation for harmonic content
4. Limit for consistent levels
5. Sidechain to kick if needed

### Genre Applications
| Genre | Character | Settings Adjustment |
|-------|-----------|-------------------|
| Trap | Deep, rumbling | Heavy saturation |
| Hip-Hop | Warm, smooth | Light saturation |
| EDM | Loud, distorted | Maximum saturation |

### Troubleshooting
| Issue | Fix |
|-------|-----|
| Muddy low-end | Increase high-pass |
| Distorted bass | Reduce saturation |
| Inconsistent levels | Adjust limiter threshold |

---

## Vocal Processing Chain
| Parameter | Setting |
|-----------|---------|
| High-Pass | 80Hz |
| De-esser | 6kHz |
| Compression Ratio | 3:1 |
| Reverb Size | Medium |

### Configuration
1. Load Patcher on vocal track
2. Apply high-pass to remove rumble
3. Add de-essing for sibilance
4. Set compression for consistency
5. Add subtle reverb for depth

### Genre Applications
| Genre | Character | Settings Adjustment |
|-------|-----------|-------------------|
| R&B | Smooth, warm | Light compression |
| Hip-Hop | Present, clear | Medium compression |
| Pop | Polished, bright | Heavy compression |

### Troubleshooting
| Issue | Fix |
|-------|-----|
| Sibilance | Increase de-esser threshold |
| Dynamics too wide | Reduce ratio, increase threshold |
| Too dry | Add subtle reverb |

---

## Synth Processing Chain
| Parameter | Setting |
|-----------|---------|
| High-Pass | 100Hz |
| Low-Pass | 16kHz |
| Stereo Width | 120% |
| Distortion | 20% |

### Configuration
1. Route synth through Patcher
2. Apply high-pass if sub content exists
3. Add stereo width for dimension
4. Blend distortion for character
5. Limit for headroom

### Genre Applications
| Genre | Character | Settings Adjustment |
|-------|-----------|-------------------|
| EDM | Wide, loud | Maximum width |
| Hip-Hop | Warm, round | Light distortion |
| Pop | Polished, bright | Medium distortion |

### Troubleshooting
| Issue | Fix |
|-------|-----|
| Phase issues | Check mono compatibility |
| Too wide | Reduce stereo width |
| Harsh highs | High-pass at 80Hz |

---

## Related Documentation
- [Patcher By-Goal Workflows](./by-goal/INDEX.md)
- [Patcher Safety Rules](../02-Data/rules/patcher-safety-rules.md)
- [Patcher Presets INDEX](../02-Data/presets/INDEX.md)
