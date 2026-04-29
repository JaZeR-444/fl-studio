# Distortion Curves Visual Reference

## Visual Curve Library

[SRC: IL-MAN] The graph editor allows drawing custom transfer functions. The diagonal line represents unity gain (input = output).

### 1. Linear (Bypass/Unity)
```
Output
  1.0│          ╱
  0.5│        ╱
  0.0├──────●──────
 -0.5│    ╱
 -1.0│  ╱
     └────────────────
       -1.0  0.0  1.0  Input

Sonic Character: Clean, transparent
Use: Reference point, subtle saturation start
```

### 2. Soft Clip (S-Curve)
```
Output
  1.0│          ╭──────
  0.5│        ╭╯
  0.0├──────●──────
 -0.5│    ╱
 -1.0│  ╱
     └────────────────
       -1.0  0.0  1.0  Input

Sonic Character: Warm, analog-like, even harmonics
Use: 808 saturation, vocal warmth, mix glue
Mode: Unipolar recommended
```

### 3. Hard Clip (Limiter)
```
Output
  1.0│███████████████
  0.5│
  0.0├────────●──────
 -0.5│
 -1.0│████████████████
     └────────────────
       -1.0  0.0  1.0  Input

Sonic Character: Aggressive, punchy, odd harmonics
Use: Drum transients, hard limiting, EDM aggression
Mode: Either (Unipolar = warmer, Bipolar = punchier)
```

### 4. Soft Limiter (Rounded Ceiling)
```
Output
  1.0│        ╭─────╮
  0.5│      ╭╯     ╰╮
  0.0├──────●───────
 -0.5│    ╱
 -1.0│  ╱
     └────────────────
       -1.0  0.0  1.0  Input

Sonic Character: Controlled, loud, smooth limiting
Use: Gentle peak control, transparent limiting
Mode: Unipolar for warmth
```

### 5. Foldback Distortion (Wavefolding)
```
Output
  1.0│    ╭╮      ╭╮
  0.5│   ╱  ╲    ╱  ╲
  0.0├─●────●────●───
 -0.5│╱      ╲  ╱
 -1.0│        ╲╱
     └────────────────
       -1.0  0.0  1.0  Input

Sonic Character: Metallic, complex, modular synth-like
Use: Creative sound design, experimental textures
Mode: Bipolar for maximum complexity
```

### 6. Bitcrush (Staircase)
```
Output
  1.0│█████████████████
 0.75│       ▓▓▓▓▓▓▓▓▓▓
 0.50│  █████████████████
 0.25│       ▓▓▓▓▓▓▓▓▓▓
  0.0├─●──────────────────
-0.25│
-0.50│
-0.75│
 -1.0│███████████████████
      └──────────────────
        -1.0  0.0  1.0  Input

Sonic Character: Digital, lo-fi, quantized
Use: Retro video game sounds, creative destruction
Mode: Either (aliasing increases with drive)
```

### 7. Asymmetric (Bipolar Mode Special)
```
Output (Positive)     Output (Negative)
  1.0│  ╭────╮        1.0│
  0.5│ ╱      ╲       0.5│
  0.0├●────────        0.0├────────
 -0.5│               -0.5│    ╲
 -1.0│               -1.0│███████
     └────────              └────────

Sonic Character: Complex, textured, transistor-like
Use: Unique character, amp simulation, edge
Mode: Bipolar ONLY
```

## Curve Drawing Tips

### Creating Smooth Curves
1. **Use 3-5 points** for basic shapes
2. **Space points evenly** horizontally
3. **Avoid sharp corners** unless you want harshness
4. **Keep center at (0,0)** for unity gain at low levels

### Creating Stepped Curves (Bitcrush)
1. **Add multiple horizontal segments**
2. **Keep vertical jumps** between steps
3. **Use 8-16 steps** for typical bitcrushing
4. **Enable oversampling** to reduce aliasing

[SRC: IL-MAN] Points can be added by clicking on the graph. Right-click points to delete.

## Harmonic Generation by Curve

| Curve Type | Primary Harmonics | Character | Best For |
|------------|-------------------|-----------|----------|
| Linear | None | Clean | Reference |
| Soft Clip | Even (2nd, 4th, 6th) | Warm, musical | Mixing, warmth |
| Hard Clip | Odd (3rd, 5th, 7th) | Aggressive, punchy | Drums, EDM |
| Foldback | All (complex) | Metallic, modular | Experimental |
| Bitcrush | Aliased artifacts | Digital, degraded | Creative |
| Asymmetric | Mixed odd/even | Complex, textured | Character |

## Quick Curve Selection Guide

### Goal: Add Warmth
→ **Soft S-curve** + Unipolar + Medium Pre gain

### Goal: Add Punch
→ **Hard clip** + Bipolar + High Pre gain

### Goal: Control Peaks
→ **Limiter shape** + Unipolar + Adjust threshold

### Goal: Creative Destruction
→ **Any complex shape** + Bipolar + High drive + High oversampling

### Goal: Lo-fi Character
→ **Staircase** + High drive + Moderate oversampling

---

**Version:** 1.0  
**Last Updated:** 2026-02-03
