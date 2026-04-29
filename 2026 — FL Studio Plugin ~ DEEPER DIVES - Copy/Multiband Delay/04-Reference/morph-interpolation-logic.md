# Technical Reference: Morph Interpolation Logic

Understanding the 8-preset morphing engine of Multiband Delay. [SRC: IL-MAN]

## 1. The Preset Bank (A-H)
Multiband Delay stores **8 independent states** of the 16-band grid. Each state captures the Time, Volume, and Pan settings for all 16 bands simultaneously.
- **Access:** Click the numbers 1 through 8 at the bottom of the UI to select a slot for editing.

## 2. Linear vs. Non-Linear Interpolation
The **Morph** knob acts as a master crossfader.
- **Operation:** As you turn the knob from 0% to 100%, the plugin moves through all 8 presets in order (1 -> 2 -> 3 -> 4...).
- **Interpolation:** The transition between presets is **Linear**.
  - *Example:* If Preset 1 has Band 5 at 10ms and Preset 2 has Band 5 at 50ms, at the halfway point between the two presets, Band 5 will be exactly at 30ms.

---

## 3. Real-Time Smoothing
Because changing delay times in real-time usually causes "pitch warps" (the Doppler effect), Multiband Delay uses an internal **Smoothing** algorithm.
- **The Knob:** The "Smoothing" knob on the UI controls how long the interpolation takes to resolve.
- **The Result:** High smoothing makes the morphing sound "liquid" and ethereal. Low smoothing makes the morphing sound "glitchy" and "steppy."

---

## 4. Automation Best Practices
- **Step Automation:** Use "Hold" mode in FL Studio automation clips if you want to jump instantly between presets without morphing.
- **LFO Drive:** Driving the Morph knob with a **Fruity Peak Controller** (LFO mode) is the best way to create "Spectral Animation" where the width and delay times are constantly shifting.
- **Scale Interaction:** Remember that the **Scale** knob is *global*. It multiplies the results of the Morph interpolation.

---

## 5. Technical Implications
- **Phase Shift:** Morphing between different **Pan** settings can cause microscopic phase shifts. This is usually desirable for "psychedelic" vibes but should be checked in mono if the mix becomes thin.
- **CPU:** The interpolation of 16 bands (multiplied by Time, Vol, and Pan) is computationally expensive. If you automate the Morph knob rapidly, keep an eye on your CPU meter.

---
*For a practical guide on drawing the curves used in these presets, see the [01-Learning/Quick-Reference/visual-editor-modes.md](../01-Learning/Quick-Reference/visual-editor-modes.md) guide.*
