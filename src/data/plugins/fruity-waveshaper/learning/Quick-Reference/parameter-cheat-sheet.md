# Fruity WaveShaper Parameter Cheat Sheet

## Quick Parameter Reference

| Parameter | Range | Default | Vibe Impact | Mix Impact |
|-----------|-------|---------|-------------|------------|
| **Pre** | -24dB to +24dB | 0dB | Drive level into curve | Controls distortion amount |
| **Mix** | 0% to 100% | 100% | Dry/wet balance | Parallel processing control |
| **Post** | -24dB to +24dB | 0dB | Output compensation | Gain staging safety |
| **Center** | On/Off | On | DC offset removal | Prevents low-end mud |
| **Mode** | Unipolar/Bipolar | Unipolar | Harmonic character | Symmetry vs. asymmetry |
| **Oversample** | Off, 2x, 4x, 8x, 16x | Off | Aliasing prevention | Quality vs. CPU trade-off |
| **HQ** | On/Off | Off | Ultra-low level processing | Prevents signal degradation |

[SRC: IL-MAN] All parameters are available as automation targets in FL Studio's browser.

## Pre (Input Drive)

### What It Does
Amplifies the input signal before it hits the transfer curve. Higher values push the signal deeper into the non-linear portion of your curve.

### Vibe Tags
- **Subtle:** -12dB to -6dB (gentle harmonic addition)
- **Standard:** 0dB to +6dB (noticeable character)
- **Aggressive:** +12dB to +20dB (heavy distortion)
- **Extreme:** +20dB+ (creative destruction)

### Mix Impact
Low values preserve dynamics; high values create consistent saturation. Use **Post** gain to compensate.

### Safety Notes
- Always monitor output level with Post gain
- Watch for clipping in the channel meter
- High values + hard clipping = aliasing (use oversampling)

[SRC: IL-MAN] Pre gain increases input level to drive the transfer function harder.

## Mix (Dry/Wet)

### What It Does
Blends the processed (distorted) signal with the original (dry) signal.

### Vibe Tags
- **Transparent:** 10-25% (subtle enhancement)
- **Standard:** 30-50% (parallel distortion)
- **Aggressive:** 60-80% (dominant effect)
- **Full:** 100% (complete replacement)

### Mix Impact
Essential for parallel processing. Lower values maintain original dynamics while adding harmonic character.

### Pro Tips
- **Hip-hop vocals:** 20-30% for grit without losing clarity
- **808 saturation:** 40-60% for warmth with punch intact
- **Drums:** 50-70% for punchy aggression

[SRC: IL-MAN] Mix controls the balance between dry and processed signal for parallel processing effects.

## Post (Output Level)

### What It Does
Attenuates or amplifies the signal after processing. Critical for gain staging.

### Vibe Tags
- **Attenuate:** -6dB to -12dB (match original level after heavy distortion)
- **Unity:** 0dB (no change)
- **Boost:** +3dB to +6dB (intentional level increase)

### Mix Impact
Use to A/B test distortion—match processed and unprocessed levels for fair comparison.

### Safety Notes
- Compensate for Pre gain increases
- Watch master bus clipping
- Critical for consistent loudness

[SRC: IL-MAN] Post gain adjusts output level to compensate for distortion-induced level changes.

## Center (DC Offset Removal)

### What It Does
Removes DC offset from the signal to prevent low-frequency buildup.

### Vibe Tags
- **Always On:** Prevents DC accumulation
- **Rarely Off:** Only for experimental sound design

### Mix Impact
Essential for clean low-end. DC offset can cause headroom issues and muddy bass.

### Safety Notes
- Leave enabled for 99% of applications
- Disabling may cause cumulative DC buildup on buses

[SRC: IL-MAN] Center removes DC offset to prevent low-frequency accumulation and headroom loss.

## Mode (Unipolar/Bipolar)

### What It Does
Switches between symmetric (Unipolar) and asymmetric (Bipolar) curve application.

### Vibe Tags
- **Unipolar:** Warm, analog, even harmonics
- **Bipolar:** Aggressive, complex, mixed harmonics

### Mix Impact
Unipolar = safer for mixing. Bipolar = more character but potential harshness.

### Decision Tree
```
Need warmth? → Unipolar
Need punch? → Bipolar
808/bass? → Unipolar
Drums/leads? → Bipolar
```

[SRC: IL-MAN] Unipolar applies the same curve to both positive and negative signal halves. Bipolar allows independent shaping.

## Oversample

### What It Does
Increases internal processing rate to reduce aliasing artifacts.

### Vibe Tags
- **Off:** Standard quality, low CPU
- **2x:** Minimal improvement
- **4x:** Good balance (recommended default)
- **8x:** High quality for aggressive distortion
- **16x:** Maximum quality for extreme settings

### Mix Impact
Higher = cleaner high frequencies, lower = potential aliasing artifacts.

### Safety Notes
- Use minimum 4x for hard clipping or bitcrushing
- High values increase CPU usage
- Critical for high-frequency sources

[SRC: IL-MAN] Oversampling multiplies the internal processing rate to reduce aliasing during distortion.

## HQ (High Quality)

### What It Does
Enables processing of ultra-low level signals that might otherwise be lost.

### Vibe Tags
- **On:** Better quality at low levels
- **Off:** Standard processing

### Mix Impact
Generally leave on for critical applications. Slight CPU increase.

[SRC: IL-MAN] HQ mode ensures processing fidelity for very low-level signals.

## Quick Settings Reference

### For 808s
- Pre: +6 to +12dB
- Mix: 40-60%
- Post: -6 to -12dB
- Mode: Unipolar
- Oversample: 2x or 4x

### For Drums
- Pre: +8 to +16dB
- Mix: 50-70%
- Post: -8 to -16dB
- Mode: Bipolar
- Oversample: 4x or 8x

### For Vocals
- Pre: +3 to +8dB
- Mix: 20-35%
- Post: -3 to -8dB
- Mode: Unipolar or Bipolar
- Oversample: 4x

### For Mix Bus
- Pre: +2 to +6dB
- Mix: 15-25%
- Post: -2 to -6dB
- Mode: Unipolar
- Oversample: 4x

---

**Version:** 1.0  
**Last Updated:** 2026-02-03
