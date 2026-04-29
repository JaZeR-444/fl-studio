# Maximus Concepts

## Limiting Deep Dive

Limiting is compression with very high ratios. Understanding the nuances helps achieve better results.

---

## Limiting vs Compression

| Aspect | Limiting | Compression |
|--------|----------|-------------|
| Ratio | 4:1 to ∞:1 | 1.5:1 to 10:1 |
| Purpose | Peak control, loudness | Tone, dynamics |
| Attack | Fast (0.01-1ms) | Variable (0.1-100ms) |
| Character | Transparent (ideally) | Can be colored |
| Use | Final stage | Throughout mix |

---

## Gain Staging for Limiting

### Ideal Signal Flow
1. **Pre-Limiter Signal**: Peaks at -6 to -3 dB
2. **After Limiting**: Signal hits ceiling
3. **Output**: Clean limited signal

### Common Mistake
- Pushing input too hot causes distortion BEFORE limiting
- Solution: Leave 3-6 dB headroom before limiter

---

## Attack Time Explained

### Fast Attack (0.01-0.3ms)
- Immediate peak control
- Maximum loudness
- May lose punch/transients
- Good for: EDM, heavy limiting

### Medium Attack (0.3-1ms)
- Balance of control and punch
- Good for: General limiting
- Safe choice for most applications

### Slow Attack (1-10ms)
- Allows transients through
- Preserves punch
- Less limiting effect
- Good for: Mastering, subtle control

---

## Release Time Explained

### Fast Release (10-50ms)
- Quick recovery
- Creates "pumping" feel
- Can sound aggressive
- Good for: Heavy bass, rhythmic pumping

### Medium Release (50-150ms)
- Natural recovery
- Most versatile
- Good for: General mix and master

### Slow Release (150-300ms)
- Smooth, lazy recovery
- Minimal pumping
- Preserves dynamics
- Good for: Acoustic, jazz, subtle

---

## Ceiling and True Peak

### Digital Ceiling
- Maximum possible level: 0 dB
- Set below 0 dB for headroom
- -0.1 dB = maximum loudness
- -0.3 dB = safe headroom

### True Peak
- Inter-sample peak (between samples)
- Can exceed sample values
- True peak limiting ensures no overs
- Use metering that shows true peaks

---

## LUFS and Loudness Targets

### What is LUFS?
- **LUFS** - Loudness Units relative to Full Scale
- Perceptual loudness measurement
- Better than peak metering

### Target Levels
| Platform | Target LUFS | True Peak |
|----------|-------------|-----------|
| Spotify | -14 LUFS | -1 dBTP |
| Apple Music | -16 LUFS | -1 dBTP |
| YouTube | -14 LUFS | -1 dBTP |
| Amazon | -14 LUFS | -1 dBTP |
| CD | -9 LUFS | -0.1 dBTP |

---

## Related Documentation

- [Maximus By-Instrument Workflows](../03-Workflows/by-instrument/INDEX.md)
- [Maximus By-Goal Workflows](../03-Workflows/by-goal/INDEX.md)
- [Maximus Presets](../02-Data/presets/INDEX.md)
- [Maximus Safety Rules](../02-Data/rules/maximus-safety-rules.md)
