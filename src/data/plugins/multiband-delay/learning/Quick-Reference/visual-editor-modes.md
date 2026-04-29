# Visual Editor Modes: Multiband Delay

Mastering the drawing tools for the 16-band grid. [SRC: IL-MAN]

## 1. PENCIL MODE (Individual Control)
- **Function:** Draw or adjust individual bands one by one.
- **Best For:** Fine-tuning specific frequencies or creating "staircase" patterns where each band is precisely set.
- **Shortcut:** Left-click and drag horizontally to "paint" multiple bands at the same level.

## 2. LINE MODE (Linear Sweeps)
- **Function:** Draws a straight line between two points.
- **Best For:** Creating smooth "Spectral Ramps."
  - *Example:* A ramp from Low (0ms) to High (100ms) creates a delay that arrives later as the frequency gets higher.
- **Usage:** Click and drag from the start frequency to the end frequency.

## 3. CURVE MODE (Logarithmic / Smooth Arcs)
- **Function:** Draws a smooth curve (spline) between points.
- **Best For:** More "natural" sounding frequency distributions.
- **Usage:** Click and drag to create the curve. Use this in the **Pan Tab** to create organic-feeling stereo width that "blooms" around the center.

---

## Editor Pro-Tips
- **Right-Click:** Often opens a menu to Reset, Invert, or Flip the current curve.
- **Snap to Grid:** Hold **Alt** (standard FL behavior) if you want to bypass the internal grid snapping for very precise, tiny micro-delay offsets.
- **Vol as EQ:** Remember that the **Vol Tab** is essentially a 16-band Graphic EQ. You can use Line mode to create a low-pass or high-pass filter for the delayed signal only.

---
*For a guide on the Morph system that stores these curves, see the [04-Reference/morph-interpolation-logic.md](../04-Reference/morph-interpolation-logic.md) guide.*
