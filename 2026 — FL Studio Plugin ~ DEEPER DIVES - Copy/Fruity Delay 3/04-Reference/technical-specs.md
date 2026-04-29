# Technical Specs: Fruity Delay 3 Mechanics

## 1. Modulation Physics (Doppler Effect)

Fruity Delay 3 uses a "Resampling" buffer strategy when **Keep Pitch** is **OFF**. This mimics the physics of magnetic tape.

### The Physics
$Speed = Distance / Time$

In a tape machine, the "Distance" between the mechanics (Record Head and Play Head) is fixed. To change the Delay Time, you must change the **Tape Speed**.
*   **Faster Speed** = Shorter Delay Time = **Higher Pitch**.
*   **Slower Speed** = Longer Delay Time = **Lower Pitch**.

When you modulate the **TIME** parameter in Fruity Delay 3 (via the LFO), you are continuously accelerating and decelerating the "Virtual Tape". This creates the characteristic "Wow" (Slow speed variance) and "Flutter" (Fast speed variance).

### Keep Pitch: ON (Granular/Buffer Slicing)
When **Keep Pitch** is **ON**, the plugin changes behavior. It acts like a digital crossfader. It resizes the buffer without changing the sample readout rate.
*   **Result:** Artifact-free timing changes, but no pitch warping.
*   **Artifacts:** Rapid changes may cause "zipper noise" or clicks as the buffer lengths snap to new values.

---

## 2. Diffusion Topology

Diffusion in delay lines is typically achieved using a series of **All-Pass Filters** (APFs).

*   **Function:** An All-Pass filter changes the *phase* of frequencies without changing their *amplitude*.
*   **In Series:** When multiple APFs are chained within a feedback loop, they smear the transient information of the impulse response over time.
*   **Delay 3 Implementation:** The **Spread** knob likely controls the coefficient (delay time) of these internal All-Pass filters.
    *   **Low Spread:** The APFs have short times, sounding metallic (Comb Filtering).
    *   **High Spread:** The APFs have long times, sounding distinct and echo-y (cluster echoes).

---

## 3. Signal Path & Gain Staging

Understanding where Distortion sits is critical for gain staging.

**Diagram:**
`Input` -> `[Sat/Limit Threshold]` -> `[Wet Gain]`

*   **Observation:** The **Distortion** in Delay 3 is input-dependent but feedback-driven.
*   **Feedback Loop:** The distortion is inside the loop.
    *   *Pass 1:* Clean.
    *   *Pass 2:* Slightly Distorted.
    *   *Pass 10:* Heavily Distorted (`Input * Feedback^10`).
*   **Conclusion:** To achieve a clean delay with a distorted tail, do **NOT** overdrive the input. Instead, lower the **Distortion Level** threshold so the quiet feedback tails trigger the saturation, while keeping the main input clean.
