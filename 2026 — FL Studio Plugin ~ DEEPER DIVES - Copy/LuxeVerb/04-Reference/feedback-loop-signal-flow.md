# Technical Reference: Feedback Loop Signal Flow

Understanding how LuxeVerb processes Shimmer and Harmonic Tails. [SRC: IL-MAN]

## The Core Signal Path
1. **Input Stage:** The dry signal enters the plugin.
2. **Pre-Delay:** The signal is delayed by the set **Pre-Delay** time.
3. **Early Reflections (ER):** The first "bounces" off virtual walls are calculated based on **Size** and **Mode**.
4. **Main Algorithmic Tank:** The "Late Reflections" or main reverb tail is generated. This is where the **Decay** and **Brightness** parameters live.

---

## 🔁 The "Shimmer" Feedback Loop
LuxeVerb is unique because it allows you to inject a **Pitch Shifter** into the feedback path of the main reverb tank.

1. **Tap:** A portion of the Main Algorithmic Tank output is tapped.
2. **Pitch Shift:** This signal passes through the internal Pitch Shifter (controlled by the **Pitch** fader).
3. **Internal Filtering:** The pitch-shifted signal passes through the **HF / LF Cut** filters.
4. **Feedback:** The processed signal is fed back into the *input* of the Main Algorithmic Tank based on the **Feedback** amount.
5. **Diffusion / Modulation:** As the signal cycles through this loop, it is constantly being diffused and detuned (if **Detune** is active), creating a smooth, shimmering "cloud" rather than a distinct series of pitched echoes.

---

## Technical Implications
- **Self-Oscillation:** Because this is a feedback loop, high settings can cause the reverb to grow in volume forever. LuxeVerb has internal safety limiting, but monitoring is still advised.
- **Latency:** LuxeVerb is zero-latency for standard reverb, but the internal pitch-shifter may introduce a microscopic delay within the feedback tail itself (standard behavior for pitch shifting).
- **Interpolation:** The **Size** and **Decay** knobs use high-quality interpolation, which allows them to be automated in real-time without the "Doppler effect" or "zipper noise" common in vintage-style reverbs.

---
*For a quick guide on the knobs below the display, see the [01-Learning/Quick-Reference/parameter-cheat-sheet.md](../01-Learning/Quick-Reference/parameter-cheat-sheet.md).*
