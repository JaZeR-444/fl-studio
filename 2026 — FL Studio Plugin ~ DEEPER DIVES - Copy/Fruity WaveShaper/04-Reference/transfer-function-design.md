# Transfer Function Design Guide

## Understanding Transfer Functions

A transfer function defines how input amplitude maps to output amplitude. In Fruity WaveShaper, the graph IS the transfer function.

[SRC: IL-MAN] The spline-based graph editor allows creating custom transfer functions by placing and manipulating curve points.

## Transfer Function Fundamentals

### The Coordinate System
```
Y-Axis (Output)
     │
 1.0├────────●────────
     │      ╱   ╲
 0.5├─────●       ●───
     │   ╱           ╲
 0.0├──●───────────────●──
     │╱                 ╲
-0.5├●                   ╲
     │                     ●
-1.0├───────────────────────
     └───────────────────────
    -1.0  -0.5   0.0   0.5   1.0   X-Axis (Input)
```

**Key Points:**
- **Diagonal line (y=x):** Unity gain (no change)
- **Above diagonal:** Gain increase (amplification)
- **Below diagonal:** Gain reduction (attenuation)
- **Flat sections:** Limiting/clipping

### Mathematical Basis
The transfer function f(x) determines output y for any input x:
- **Linear:** f(x) = x (45° diagonal)
- **Hard Clip:** f(x) = min(x, threshold) for positive
- **Soft Clip:** f(x) = x / (1 + |x|/k)
- **Custom:** Defined by spline interpolation of points

## Curve Point Fundamentals

### Adding Points
- **Click on graph** to add control points
- **Minimum needed:** 3 points for basic curve
- **Recommended:** 5-7 points for smooth curves

### Point Placement
**X-Axis (Input):**
- -1.0 = Full negative amplitude
- 0.0 = Zero crossing (silence)
- +1.0 = Full positive amplitude

**Y-Axis (Output):**
- -1.0 = Full negative output
- 0.0 = Silence
- +1.0 = Full positive output

### Critical Point: (0,0)
The curve MUST pass through (0,0) for proper operation.
- **Below (0,0):** Negative half of waveform attenuated
- **Above (0,0):** Negative half amplified
- **At (0,0):** Unity gain at zero crossing (correct)

[SRC: IL-MAN] The center point (0,0) must maintain unity gain to prevent signal attenuation or phase issues.

## Common Transfer Functions

### 1. Linear (Unity)
```
Points: (-1, -1), (0, 0), (1, 1)
Result: Clean signal, no distortion
Use: Reference, starting point
```

### 2. Soft Clip (S-Curve)
```
Points: (-1, -0.85), (-0.5, -0.4), (0, 0), (0.5, 0.4), (1, 0.85)
Result: Gentle compression, even harmonics
Use: 808 warmth, vocal saturation
```

### 3. Hard Clip (Limiter)
```
Points: (-1, -0.8), (-0.8, -0.8), (0, 0), (0.8, 0.8), (1, 0.8)
Result: Sharp threshold, aggressive limiting
Use: Drum punch, hard limiting
```

### 4. Soft Limiter
```
Points: (-1, -0.9), (-0.7, -0.7), (-0.4, -0.4), (0, 0), (0.4, 0.4), (0.7, 0.7), (1, 0.9)
Result: Gradual limiting, controlled peaks
Use: Transparent peak control
```

### 5. Bitcrush (Staircase)
```
Points: Multiple horizontal segments with vertical jumps
Result: Quantized output, digital artifacts
Use: Lo-fi effects, creative destruction
```

## Spline Interpolation

### How It Works
Fruity WaveShaper uses spline interpolation to create smooth curves between points:
- **Catmull-Rom splines:** Smooth, continuous curves
- **Tangent matching:** Ensures smooth transitions
- **No sharp corners:** Unless intentionally placed

### Smoothness Guidelines
**For musical distortion:**
- Space points evenly
- Avoid abrupt y-axis changes
- Use 3-5 points for simple curves
- Use 7-10 points for complex shapes

**For aggressive distortion:**
- Sharp corners create high-frequency harmonics
- Use vertical/horizontal segments for hard clipping
- Cluster points near threshold for sharp knees

[SRC: IL-MAN] Spline interpolation ensures smooth transitions between points for artifact-free distortion.

## Asymmetric Transfer Functions (Bipolar Mode)

### Independent Half-Wave Processing
In Bipolar mode, you can shape positive and negative halves independently:

**Positive Half:**
```
Points: (0, 0), (0.5, 0.6), (1.0, 0.8)
Result: Harder positive compression
```

**Negative Half:**
```
Points: (-1.0, -0.9), (-0.5, -0.4), (0, 0)
Result: Softer negative compression
```

### Creating Asymmetry
1. Switch to Bipolar mode
2. Shape positive half first
3. Shape negative half differently
4. Compare with Unipolar for reference

### Applications
- **Drum transients:** Hard positive, soft negative
- **Tube simulation:** Gentle asymmetry
- **Creative effects:** Extreme differences

## Advanced Curve Design

### Multi-Segment Curves
Create complex transfer functions with multiple behaviors:

**Example: Expand then Compress**
```
(-1, -0.5)   ← Expanded low levels
(-0.5, -0.3)
(0, 0)        ← Unity
(0.5, 0.7)
(1, 0.8)      ← Compressed peaks
```
Result: Quiet signals amplified, loud signals limited

### Wavefolding
Fold output back when it exceeds limits:
```
(-1, 0.5)
(-0.75, 0)
(-0.5, 0.5)
(-0.25, 0)
(0, 0)
(0.25, 0)
(0.5, 0.5)
(0.75, 0)
(1, 0.5)
```
Result: Metallic, complex harmonics

### Exponential Curves
Create non-linear response:
```
Points spaced closer together at high amplitudes
Result: Gentle at low levels, aggressive at peaks
```

## Curve Design Best Practices

### 1. Always Include (0,0)
```
Verify: Curve passes through origin
Consequence if missing: Signal attenuation, phase issues
```

### 2. Maintain Monotonicity
```
Rule: Curve should generally increase left-to-right
Exception: Intentional wavefolding
Consequence: Non-monotonic curves can create chaos
```

### 3. Limit Flat Sections
```
Guideline: Flat sections = clipping
Too much flatness = squashed dynamics
Use: Only at intended thresholds
```

### 4. Test with Sine Waves
```
Method: Apply curve to pure 1kHz sine
Analysis: View output in spectrum analyzer
Look for: Expected harmonics, no unexpected artifacts
```

[SRC: IL-MAN] Testing curves with pure tones reveals their harmonic generation characteristics clearly.

## Point Editing Shortcuts

### Mouse Operations
- **Left click:** Add point
- **Left click + drag:** Move point
- **Right click:** Delete point
- **Double click:** Reset to linear

### Keyboard Shortcuts
- **Alt + click:** Fine adjustment mode
- **Ctrl + Z:** Undo last point change
- **Spacebar:** Audition current curve (if supported)

## Curve Library

### Quick Reference Points

| Curve Type | Point 1 | Point 2 | Point 3 | Point 4 | Point 5 |
|------------|---------|---------|---------|---------|---------|
| Linear | (-1,-1) | (0,0) | (1,1) | - | - |
| Soft S | (-1,-0.85) | (-0.5,-0.4) | (0,0) | (0.5,0.4) | (1,0.85) |
| Hard Clip | (-1,-0.8) | (-0.8,-0.8) | (0,0) | (0.8,0.8) | (1,0.8) |
| Soft Limiter | (-1,-0.9) | (-0.7,-0.7) | (0,0) | (0.7,0.7) | (1,0.9) |

### Import/Export
While WaveShaper doesn't natively export curves, document your designs:
- Screenshot the graph
- Record point coordinates
- Save in project notes
- Share with collaborators

---

**Version:** 1.0  
**Last Updated:** 2026-02-03
