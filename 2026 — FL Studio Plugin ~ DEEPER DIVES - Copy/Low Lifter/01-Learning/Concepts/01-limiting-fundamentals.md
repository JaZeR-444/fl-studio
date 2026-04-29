# Low Lifter Concepts

## Limiting Fundamentals

Limiting is extreme compression where the ratio approaches infinity. It serves two purposes:

1. **Peak Control** - Prevents digital clipping
2. **Loudness Increase** - Raises average level

Understanding both roles helps usage decisions.

---

## Dynamic Range

**Dynamic Range** = Difference between loudest and quietest parts

- **Wide Dynamic Range** - Big difference between quiet and loud
- **Narrow Dynamic Range** - Consistent, even loudness

Limiting reduces dynamic range by turning down peaks.

---

## Gain Reduction

**Gain Reduction (GR)** - Amount the limiter reduces signal

- Measured in dB
- More GR = more limiting
- Typical: 2-6 dB for subtle, 6-12 dB for heavy

### Guidelines by Genre
| Genre | Typical GR | Notes |
|-------|-------------|-------|
| Classical | 0-2 dB | Preserve dynamics |
| Jazz | 1-3 dB | Natural feel |
| Pop | 3-6 dB | Competitive loudness |
| Hip-Hop | 4-8 dB | Heavy limiting |
| EDM | 6-10 dB | Maximum loudness |
| Metal | 6-12 dB | Very heavy |

---

## Attack Time

**Attack** - How fast limiter responds to peaks

- **Fast Attack (0.01-0.5ms)** - Immediate control, may lose punch
- **Medium Attack (0.5-2ms)** - Balance of control and punch
- **Slow Attack (2-10ms)** - Preserves transients, less control

### Attack Time by Element
| Element | Attack Time | Purpose |
|---------|-------------|---------|
| Kicks | 0.02-0.1ms | Preserve punch |
| Snares | 0.1-0.3ms | Maintain crack |
| Basses | 0.1-0.5ms | Control peaks |
| Mix Bus | 0.3-2ms | Natural feel |
| Mastering | 0.3-1ms | Transparent |

---

## Release Time

**Release** - How fast limiter returns to normal

- **Fast Release (10-50ms)** - Tight, pumping feel
- **Medium Release (50-150ms)** - Natural recovery
- **Slow Release (150-300ms)** - Smooth, less pumping

### Release Time by Tempo
| Tempo | Release Range | Notes |
|--------|---------------|-------|
| 140+ BPM | 25-40ms | Quick for density |
| 100-140 BPM | 50-80ms | Standard |
| 70-100 BPM | 80-120ms | Natural feel |
| <70 BPM | 120-200ms | Smooth pumping |

---

## Ceiling

**Ceiling** - Maximum output level

- Always below 0 dB
- -0.1 dB = maximum loudness
- -0.3 to -0.5 dB = safety headroom
- Never set at 0 dB (clipping risk)

### Ceiling by Platform
| Platform | Recommended Ceiling | Target LUFS |
|----------|---------------------|-------------|
| Spotify | -0.3 dB | -14 LUFS |
| Apple Music | -0.3 dB | -16 LUFS |
| YouTube | -0.3 dB | -14 LUFS |
| CD | -0.1 dB | -9 LUFS |
| Radio | -0.3 dB | -16 LUFS |

---

## Gain Staging

Proper gain staging prevents clipping:

**Input Stage**
- Signal BEFORE limiter should peak at -6 to -3 dB
- This allows headroom for limiting

**Output Stage**
- After limiting, signal should hit ceiling
- No signal should exceed ceiling

**Common Mistake**: Pushing input too hot causes distortion BEFORE limiting.

---

## Related Documentation

- [Low Lifter By-Instrument Workflows](../03-Workflows/by-instrument/INDEX.md)
- [Low Lifter By-Goal Workflows](../03-Workflows/by-goal/INDEX.md)
- [Low Lifter Presets](../02-Data/presets/INDEX.md)
