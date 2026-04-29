# Technical Specs: Fruity Delay Bank Mechanics

## 1. Filter Slope Topology

*   **Switch 1-2-3:**
    *   **1:** 12dB/Octave (2-Pole). Gentle, good for transparency.
    *   **2:** 24dB/Octave (4-Pole). Moog-style steepness.
    *   **3:** 36dB/Octave (6-Pole). Very steep, "Brickwall-ish".
*   **Resonance:** At 36dB slope, high resonance can be *extremely* loud. Watch your gain staging.

## 2. Granular Engine

*   **Method:** Real-time Granulation of the buffer.
*   **Div (Division):** Controls the grain size relative to the delay time?
*   **Artifacts:** This is not a pristine algorithm. It introduces aliasing and envelope zipper noise, which is part of its charm (Industrial/Glitch aesthetic) compared to the smooth "Diffusion" of Delay 3.

## 3. Parallel Architecture

*   **Summing:** All active banks are summed to the Output.
*   **Volume:** Unlike series processing, enabling 8 banks boosts the output volume significantly (up to 8x potentially).
*   **Gain Staging:** You must lower the volume of individual banks or the Master Output knob of the plugin if you use many banks simultaneously.

## 4. Phase Issues

*   **Warning:** If Bank 1 and Bank 2 have identical settings, they will just double the volume (+6dB).
*   **Comb Filtering:** If Bank 1 is 10ms and Bank 2 is 11ms, summing them will cause severe Comb Filtering (Phasing). Always ensure your times are distinct or your panning separates them to avoid mono phase cancellation.
