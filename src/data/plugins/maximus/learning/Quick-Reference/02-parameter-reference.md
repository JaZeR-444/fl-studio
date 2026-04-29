# Maximus Parameter Reference

## Parameter Map

| Parameter | Range | Default | Purpose |
|-----------|-------|---------|---------|
| Input Gain | 0-12 dB | 0 dB | Pre-limiter boost |
| Threshold | -30 to 0 dB | -6 dB | Control point |
| Ratio | 1:1 to 20:1 | 4:1 | Intensity |
| Attack | 0.01-10 ms | 0.5 ms | Response speed |
| Release | 10-1000 ms | 100 ms | Recovery |
| Ceiling | -1.0 to 0 dB | -0.3 dB | Max output |
| Output Gain | 0-12 dB | 0 dB | Compensation |

---

## Input Gain

### Purpose
Pre-limiter boost to drive the limiter harder.

### Values
| Setting | Effect | Use |
|---------|--------|-----|
| 0 dB | Clean signal | Transparency |
| +1 to +3 dB | Slight boost | Standard loudness |
| +3 to +6 dB | Heavy boost | Maximum loudness |

### Guidelines
- Start with 0 dB
- Add as needed for loudness
- Watch for distortion

---

## Threshold

### Purpose
Point at which limiting begins.

### Values
| Setting | Effect |
|---------|--------|
| -2 dB | Minimal limiting |
| -4 dB | Standard limiting |
| -6 dB | Moderate limiting |
| -8 dB | Heavy limiting |

### Guidelines
- Higher (less negative) = less limiting
- Lower (more negative) = more limiting
- Match to input level

---

## Ratio

### Purpose
Intensity of limiting.

### Values
| Ratio | Character | Use |
|-------|-----------|-----|
| 2:1 | Light | Transparency |
| 4:1 | Standard | General use |
| 8:1 | Heavy | Loudness |
| 12:1+ | Extreme | Maximum loudness |

### Guidelines
- Higher ratio = more gain reduction
- Can cause distortion if too high
- Match to genre/style

---

## Attack

### Purpose
How fast the limiter responds.

### Values
| Setting | Speed | Use |
|---------|-------|-----|
| 0.05-0.1 ms | Instant | EDM, heavy |
| 0.2-0.5 ms | Fast | General |
| 0.5-1.0 ms | Medium | Vocals |
| 1-5 ms | Slow | Transparency |

### Guidelines
- Faster = more control, possible pumping
- Slower = preserves transients
- Match to source material

---

## Release

### Purpose
How fast the limiter recovers.

### Values
| Setting | Speed | Feel |
|---------|-------|------|
| 25-50 ms | Fast | Tight, pumping |
| 50-150 ms | Medium | Natural |
| 150-300 ms | Slow | Smooth |
| 300+ ms | Very slow | Gentle |

### Guidelines
- Sync to tempo for rhythmic pumping
- Faster = more pumping
- Slower = smoother
- Auto mode often works well

---

## Ceiling

### Purpose
Maximum output level.

### Values
| Setting | Use |
|---------|-----|
| -0.1 dB | Maximum loudness |
| -0.3 dB | Standard |
| -0.5 dB | Extra headroom |
| -1.0 dB | Mastering safe |

### Guidelines
- Always below 0 dB
- -0.3 dB for streaming
- Check True Peak meter

---

## Genre Settings

### Pop
| Parameter | Value |
|-----------|-------|
| Input Gain | +2 dB |
| Threshold | -4 dB |
| Ratio | 4:1 |
| Attack | 0.3 ms |
| Release | 100 ms |
| Ceiling | -0.3 dB |

### Hip-Hop
| Parameter | Value |
|-----------|-------|
| Input Gain | +3 dB |
| Threshold | -5 dB |
| Ratio | 6:1 |
| Attack | 0.15 ms |
| Release | 60 ms |
| Ceiling | -0.2 dB |

### EDM
| Parameter | Value |
|-----------|-------|
| Input Gain | +4 dB |
| Threshold | -6 dB |
| Ratio | 10:1 |
| Attack | 0.08 ms |
| Release | 40 ms |
| Ceiling | -0.1 dB |

### Rock
| Parameter | Value |
|-----------|-------|
| Input Gain | +1 dB |
| Threshold | -3 dB |
| Ratio | 4:1 |
| Attack | 0.5 ms |
| Release | 120 ms |
| Ceiling | -0.3 dB |

---

## Troubleshooting

| Issue | Likely Cause | Solution |
|-------|--------------|----------|
| Distortion | Input too hot | Lower input |
| Pumping | Release too fast | Increase release |
| No punch | Attack too fast | Slow attack |
| Not loud | Ratio too low | Increase ratio |
| Squashed | GR too heavy | Reduce GR |
| Clipping | Ceiling at 0 | Lower ceiling |

---

## Related Documentation

- [Maximus Limiting Deep Dive](../Concepts/01-limiting-deep-dive.md)
- [LUFS and Loudness](../Concepts/02-lufs-loudness.md)
