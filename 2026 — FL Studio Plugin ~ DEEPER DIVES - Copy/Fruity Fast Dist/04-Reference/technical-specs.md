# Technical Specs: Fruity Fast Dist Mechanics

## 1. Topology

*   **Algorithm:** Static Waveshaping (Lookup Table?).
*   **Behavior:** It maps input amplitude `X` to output amplitude `Y` via a fixed curve.
*   **Type A/B:** likely different curves.
    *   **A:** Hard Clip / S-Curve.
    *   **B:** Asymmetric / Soft Clip.

## 2. Gain Staging

*   **Pre:** Is a straightforward gain multiplier.
*   **Threshold:** Acts as a divisor effectively. `Drive = Pre / Threshold`.
*   **Post:** Is a gain multiplier.
*   **Unity Gain:** Fast Dist is *not* unity gain. It will significantly boost volume. Always check your output usage (Post knob) to avoid clipping the mixer track.

## 3. Aliasing

*   **Oversampling:** Fast Dist does **not** appear to have internal oversampling controls.
*   **Consequence:** Driving high frequencies (Hi-Hats) hard will result in significant foldback aliasing (inharmonic lower frequencies).
*   **Fix:** Use a Low Pass filter *before* Fast Dist if you want to distort synths cleanly.
