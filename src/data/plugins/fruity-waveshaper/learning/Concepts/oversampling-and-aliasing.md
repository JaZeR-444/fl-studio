# Oversampling and Aliasing

## The Aliasing Problem

When you heavily distort a signal, you create new frequencies (harmonics). Some of these frequencies exceed the Nyquist limit (half your sample rate). When this happens, those frequencies "fold back" into the audible range as unwanted artifacts—this is **aliasing**.

```
Sample Rate: 44.1kHz → Nyquist: 22.05kHz

Original:    ████████
Harmonics:         ████████ (above 22kHz)
                    ↓ ALIASING
Folded back:             ████ (unwanted mirror)
```

[SRC: IL-MAN] Oversampling increases the internal processing rate to reduce aliasing artifacts that occur during extreme distortion.

## How Oversampling Works

### The Math
- **2x:** Processes at 88.2kHz (Nyquist: 44.1kHz)
- **4x:** Processes at 176.4kHz (Nyquist: 88.2kHz)
- **8x:** Processes at 352.8kHz (Nyquist: 176.4kHz)
- **16x:** Processes at 705.6kHz (Nyquist: 352.8kHz)

Higher internal Nyquist = more "room" for harmonics before aliasing occurs.

### The Trade-Offs

| Setting | Quality | CPU Usage | Latency | Best For |
|---------|---------|-----------|---------|----------|
| Off | Standard | Minimal | 0 | Subtle saturation |
| 2x | Improved | Low | Minimal | Light distortion |
| 4x | High | Moderate | Minimal | Standard distortion |
| 8x | Very High | High | Slight | Heavy distortion |
| 16x | Maximum | Very High | Noticeable | Extreme destruction |

[SRC: IL-MAN] Higher oversampling values reduce CPU efficiency but improve audio quality during aggressive distortion.

## When You Need Oversampling

### Always Use Oversampling (4x minimum):
- **Hard clipping** at high drive levels
- **Bitcrushing** effects (staircase curves)
- **High-frequency content** being distorted (leads, cymbals)
- **Multiple WaveShaper instances** in series

### Can Skip Oversampling:
- **Very subtle** saturation (S-curve, low drive)
- **Low-frequency sources** (808s, kicks below 100Hz)
- **Unipolar mode** with gentle curves
- **Mix bus** applications with conservative settings

## Hearing Aliasing: Training Your Ears

Aliasing typically manifests as:
1. **"Digital shimmer"** on high notes
2. **Unpleasant overtones** that don't belong
3. **Harshness** that EQ can't fix
4. **Chime-like artifacts** on transient edges

**Test:** Put WaveShaper on a pure sine wave at 5kHz. Use hard clipping with high drive.
- **No oversampling:** You'll hear extra "bells" and artifacts
- **16x oversampling:** Clean harmonics only

[SRC: IL-MAN] Aliasing appears as unwanted high-frequency artifacts that sound "metallic" or "digital" compared to the desired harmonic content.

## CPU Optimization Strategy

### Project-Wide Approach
1. **Mixing stage:** Use 2x-4x for most instances
2. **Critical tracks only:** Use 8x-16x (leads, vocals)
3. **Bounce/freezing:** Use high oversampling, then render
4. **Final mix:** Use conservative settings on master bus

### Smart Instance Management
```
Track Level:    2x-4x (acceptable quality)
Bus Level:      4x-8x (higher stakes)
Master Bus:     4x (balance quality/CPU)
Experimental:   8x-16x (when sound design)
```

## Safety Rules for Aliasing Prevention

1. **When in doubt, use 4x** — good balance of quality/performance
2. **High drive = High oversampling** — protect against artifacts
3. **Test with sine waves** — reveals aliasing clearly
4. **Monitor high frequencies** — aliasing lives there
5. **Export with oversampling** — final renders should be clean

[SRC: IL-MAN] The Oversample selector offers 2x, 4x, 8x, and 16x options to balance quality against CPU usage.

## Common Mistakes

### Mistake 1: Never Using Oversampling
- **Result:** "Cheap" sounding distortion
- **Fix:** Use minimum 4x for noticeable distortion

### Mistake 2: Always Using 16x
- **Result:** CPU overload, session crashes
- **Fix:** Match oversampling to the distortion intensity

### Mistake 3: Ignoring Aliasing on Buses
- **Result:** Cumulative artifacts across multiple tracks
- **Fix:** Use 4x-8x on parallel/distortion buses

---

**Version:** 1.0  
**Last Updated:** 2026-02-03
