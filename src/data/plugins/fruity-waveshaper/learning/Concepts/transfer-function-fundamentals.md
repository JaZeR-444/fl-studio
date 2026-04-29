# Transfer Function Fundamentals

## What is a Transfer Function?

A transfer function maps input signal amplitude to output amplitude. In Fruity WaveShaper, the graph IS the transfer function—the diagonal line represents the relationship between what goes in and what comes out.

```
Input Level ─┐
             │    ╭─────╮
      +1.0   │   ╱       ╲    ← Output clipped at +0.8
             │  ╱         ╲
       0.0   ├─●───────────●─  ← Unity gain (no change)
             │╱             ╲
      -1.0   │               ← Output clipped at -0.8
             │
             └────────────────
                -1.0   +1.0   Input Level
```

[SRC: IL-MAN] The graph diagonal represents unity gain (1:1 mapping). Any deviation creates distortion.

## Curve Shapes and Their Sonic Signatures

### Linear (45° Diagonal)
- **Sound:** Clean, transparent
- **Harmonics:** None (pure signal)
- **Use:** Bypass reference, subtle saturation starting point

### Soft Clip (S-Curve)
- **Sound:** Warm, analog-like
- **Harmonics:** Even-order predominance
- **Use:** 808 warmth, vocal saturation, bus glue

### Hard Clip (Horizontal Plateau)
- **Sound:** Aggressive, punchy
- **Harmonics:** Odd-order predominance
- **Use:** Drum transients, EDM leads, hard distortion

### Bitcrush (Staircase)
- **Sound:** Digital, lo-fi, degraded
- **Harmonics:** Aliasing artifacts, quantization noise
- **Use:** Creative destruction, retro effects

[SRC: IL-MAN] Spline-based graph allows infinite curve variations between these archetypes.

## Harmonic Generation Mechanics

### Symmetric Curves (Unipolar Mode)
- **Mathematical Property:** f(-x) = -f(x)
- **Harmonic Content:** Primarily even-order harmonics
- **Character:** Tube-like, warm, musical
- **Examples:** S-curves, gentle saturation

### Asymmetric Curves (Bipolar Mode)
- **Mathematical Property:** f(-x) ≠ -f(x)
- **Harmonic Content:** Mix of odd and even harmonics
- **Character:** Transistor-like, aggressive, complex
- **Examples:** Different positive/negative shaping

[SRC: IL-MAN] Unipolar mode mirrors the curve for both halves of the waveform. Bipolar allows independent positive/negative half-wave processing.

## Input/Output Mapping Examples

| Input Level | Soft Clip Output | Hard Clip Output | Linear Output |
|-------------|------------------|------------------|---------------|
| -1.0 (full negative) | -0.85 | -0.80 | -1.0 |
| -0.5 | -0.45 | -0.50 | -0.5 |
| 0.0 | 0.0 | 0.0 | 0.0 |
| +0.5 | +0.45 | +0.50 | +0.5 |
| +1.0 (full positive) | +0.85 | +0.80 | +1.0 |

## Key Insight: Pre-Gain Drives the Curve

The **Pre** knob pushes your signal into the curve. Higher pre-gain means:
- More signal hits the non-linear portion
- More harmonic generation
- More distortion/saturation

**Safety Rule:** Always monitor output with **Post** gain to compensate. [SRC: IL-MAN] Pre/Post gain controls allow proper gain staging through the waveshaping process.

## Visual Debugging Tips

1. **Flat Line at Bottom:** Signal completely muted (check Pre gain)
2. **Flat Line at Top:** Hard limiter behavior (good for safety)
3. **Wavy Curves:** Complex harmonic structures (experimental territory)
4. **Sharp Corners:** Abrupt transitions = more high-frequency harmonics

---

**Version:** 1.0  
**Last Updated:** 2026-02-03
