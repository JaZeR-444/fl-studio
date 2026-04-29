# Technical Reference: Adaptive Release Curves

Mastering the dual-release (Rel 1 & Rel 2) system of Maximus. [SRC: IL-MAN]

## 1. The Single Release Problem
In traditional compressors, you have one release time. If it is too fast, you get digital distortion (zipper noise) on low frequencies. If it is too slow, the compressor "chokes" and doesn't recover fast enough for the next transient.

## 2. The Maximus Solution: Rel 1 + Rel 2
Maximus uses a two-stage release system to provide more musical, "adaptive" recovery.

- **Rel 1 (Primary Release):** This is the main recovery speed. It handles the initial jump back from a gain reduction event.
- **Rel 2 (Adaptive Smoothness):** This acts as a secondary "buffer" release. It smooths out the curve of Rel 1.

## 3. How to Set Them
- **For Transparency (Mastering):** Use a relatively fast **Rel 1** (to catch the peaks) and a slower **Rel 2** (to ensure the recovery is smooth and unnoticeable).
- **For Punch (Drums):** Set **Rel 2** very low or to zero. This allows **Rel 1** to act like a traditional fast compressor, creating that signature "snap" and "thump."
- **For Low Frequencies:** Always use a slower **Rel 2** on the **Low** band. Low-frequency waves are very long; if the release is too fast, the compressor will try to follow the individual wave cycles, resulting in audible distortion.

---

## 4. Visualizing the Curve
In the Maximus Histogram, you can observe the "White Line" (Gain Reduction).
- If the line jumps back to the top instantly, your release is very fast.
- If the line slowly "arcs" back up, your **Rel 2** is active and smoothing the recovery.

## 5. The "Threshold" Interaction
Rel 2 is often more active when the compressor is pushed harder. If you are only getting 1-2dB of reduction, Rel 1 will dominate the sound. If you are "crushing" the signal, Rel 2 becomes essential for preventing the mix from sounding "choppy."

---
*For practical application of these settings, see the [03-Workflows/by-goal/loudness-maximization.md](../03-Workflows/by-goal/loudness-maximization.md) guide.*
