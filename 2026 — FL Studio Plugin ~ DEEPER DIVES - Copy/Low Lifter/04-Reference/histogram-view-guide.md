# Technical Reference: Histogram View Guide

Mastering the visual feedback system of Low Lifter. [SRC: IL-MAN]

## 1. The Visual Language
The Histogram is an interactive spectrum analyzer specifically tuned for low-frequency observation.
- **Gray Curve:** The **Input** signal. This shows the raw low-end energy coming into the plugin.
- **Orange Curve:** The **Output** signal. This shows the combined energy of the original signal plus the generated harmonics.
- **Shaded Area:** Represents the "boost" or harmonic content being added.

## 2. Interactive Handles
You can control the plugin's most important parameters directly on the display:
- **Vertical Line (Crossover):** Drag this left or right to set the frequency where processing starts.
- **Horizontal Handle (Boost):** Drag this up or down to set the intensity of the harmonic synthesis.
- **Pro Tip:** Shift-clicking handles often allows for finer control (standard FL Studio behavior).

## 3. Interpreting the Slopes
- **The "Mountain" Peak:** If you see a tall orange peak just above your crossover point, your **Boost** is high.
- **The "Tail":** The length of the orange curve stretching into the mids (200Hz+) is determined by the **Slope** knob.
  - A long tail = Gentle Slope (Low values).
  - A short, steep drop = Steep Slope (High values).

## 4. Reading the "Mix Context"
Use the Histogram to identify where your sub-bass ends and your low-mids begin.
- **Target:** If your "Gray" input curve dies off at 60Hz, but your target speaker (e.g. phone) starts at 150Hz, you want to see the "Orange" output curve bridged across that 60Hz-150Hz gap.

## 5. Monitoring Best Practices
- **Watch the Meters:** Added harmonics increase the peak level of your signal. If the orange curve is significantly higher than the gray curve, you are losing headroom.
- **Toggle Multi-Band:** Observe how the orange curve changes when you toggle Multi-Band. In Multi-Band mode, the crossover transition is often smoother and more transparent.

---
*For a quick guide on the knobs below the display, see the [01-Learning/Quick-Reference/parameter-cheat-sheet.md](../01-Learning/Quick-Reference/parameter-cheat-sheet.md).*
