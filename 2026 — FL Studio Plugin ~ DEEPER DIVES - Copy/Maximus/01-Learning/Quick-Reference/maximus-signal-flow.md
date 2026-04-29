# Maximus Signal Flow: HML -> Master

Understanding the path your audio takes through the maximizer. [SRC: IL-MAN]

## 1. The Input Stage
- Audio enters and is split into three frequency bands: **LOW**, **MID**, and **HIGH**.
- **Crossover Type:** IIR (Linear Phase is available via the Wrapper settings in some versions).
- **Control:** The **Low Freq** and **High Freq** knobs determine these split points.

## 2. Band-Specific Processing (Parallel Paths)
Each band (Low, Mid, High) is processed independently and simultaneously:
- **Envelope Follower:** Detects the input level based on the band's Spline Graph.
- **Compression:** Reduces gain based on the graph curve.
- **Saturation:** Adds harmonics based on the THRES/CEIL settings.
- **Stereo Separation:** Adjusts the width of that specific frequency range.
- **Mix:** Blends the processed signal with the dry signal of that band.

## 3. Summing
- The processed outputs of the Low, Mid, and High bands are summed back together into a single wideband signal.

## 4. The Master Stage
- The summed signal enters the **MASTER** band.
- **Final Limiting:** The Master band provides a final layer of compression/limiting across the *entire* frequency spectrum.
- **Global Ceiling:** The Post Gain of the Master band typically acts as your final mix ceiling (e.g., -0.1 dB).

## 5. Visual Analysis
- The **Histogram** view shows you exactly where the compression is happening across all bands in real-time.

---

## ⚠️ Important Note: Band "Off" vs. "Solo"
- **On:** Band is active and processing.
- **Off:** Band is silent. (Caution: This removes those frequencies from the mix entirely).
- **Solo:** Mutes the other two bands so you can hear the selected one.

---
*For a map of these controls, see the [01-Learning/Quick-Reference/parameter-cheat-sheet.md](./parameter-cheat-sheet.md) guide.*
