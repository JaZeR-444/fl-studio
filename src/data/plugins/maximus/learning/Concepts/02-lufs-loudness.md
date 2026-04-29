# Maximus LUFS and Loudness

## What Are LUFS?

LUFS (Loudness Units relative to Full Scale) measure perceived loudness, accounting for how human ears actually hear.

### Why LUFS Matter
- Reflects how loud we perceive sound
- Accounts for frequency response
- Standard for streaming platforms
- Better than peak metering

---

## LUFS vs Peaks

### Peak Metering
- Measures highest instantaneous level
- Doesn't reflect perceived loudness
- Can be misleading
- True peaks more accurate but still imperfect

### LUFS
- Measures integrated loudness over time
- Accounts for frequency response
- Matches how ears perceive loudness
- Industry standard for streaming

---

## Platform Targets

### Streaming
| Platform | Target LUFS | True Peak |
|----------|-------------|-----------|
| Spotify | -14 | -1 dBTP |
| Apple Music | -16 | -1 dBTP |
| YouTube | -14 | -1 dBTP |
| Amazon | -14 | -1 dBTP |
| Tidal | -14 | -1 dBTP |

### Traditional
| Format | Target LUFS | True Peak |
|--------|-------------|-----------|
| CD | -9 | -0.1 dBTP |
| Vinyl | -12 | -1 dBTP |
| Radio | -16 | -1 dBTP |

---

## Loudness Hierarchy

### Most Common
| Level | LUFS | Use Case |
|-------|------|----------|
| Streaming Standard | -14 | Spotify, YouTube |
| Apple Standard | -16 | Apple Music |
| Mastering Standard | -9 | CD, Distribution |
| Dynamic | -12 to -8 | Artistic choice |

---

## How Maximus Helps

### Achieving Targets
1. **Input Gain** - Pre-limiter boost
2. **Threshold** - Control point
3. **Ratio** - Limiting intensity
4. **Ceiling** - Output limit

### Strategy
| Goal | Approach |
|------|----------|
| -14 LUFS | Moderate limiting |
| -16 LUFS | Heavier limiting |
| -9 LUFS | Minimal limiting |

---

## True Peak Explained

### What Are True Peaks?
- Inter-sample peaks (between samples)
- Can exceed sample values
- Cause distortion on D/A conversion
- Must be controlled separately

### True Peak Limit
| Platform | Maximum |
|----------|---------|
| Spotify | -1 dBTP |
| Apple | -1 dBTP |
| YouTube | -1 dBTP |
| CD | -0.1 dBTP |

### Maximus Ceiling
- Set to -0.3 dB for streaming
- More conservative for CD (-0.1 dB)
- Never set at 0 dB

---

## Practical Application

### Step 1: Measure
1. Load LUFS meter
2. Measure integrated loudness
3. Note True Peak levels

### Step 2: Calculate
```
Needed Change = Target - Current
Example: -14 - (-12) = -2 dB
```

### Step 3: Apply
1. Use Maximus for final limiting
2. Adjust Input Gain for needed change
3. Monitor True Peak

### Step 4: Verify
1. Re-measure after limiting
2. Check True Peak
3. Adjust if needed

---

## Common Mistakes

### Too Loud
- > -12 LUFS for streaming
- Causes listener fatigue
- Platform will turn down anyway

### Too Quiet
- < -16 LUFS for Spotify
- Sounds quiet next to other tracks
- Listener may skip

### Ignoring True Peak
- Causes distortion
- Even if samples look OK
- Must measure True Peak

---

## Related Documentation

- [Maximus Limiting Deep Dive](01-limiting-deep-dive.md)
- [Maximus Parameter Quick Reference](../Quick-Reference/parameter-quick-reference.md)
- [Mastering Preparation Workflow](../03-Workflows/by-goal/02-mastering-preparation.md)
