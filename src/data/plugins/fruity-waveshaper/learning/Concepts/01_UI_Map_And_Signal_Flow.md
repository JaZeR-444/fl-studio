# UI Map And Signal Flow: Fruity WaveShaper

## UI Tour
1.  **The Graph:** Your "Transfer Function."
    *   **X-Axis:** Input volume (Quiet to Loud).
    *   **Y-Axis:** Output volume.
2.  **Pre-Gain:** Drives the signal into the graph. Higher Pre = more distortion.
3.  **Post-Gain:** Adjusts the volume *after* it leaves the graph. Use this to compensate for loudness increases.
4.  **Oversampling (HQ):** Multiplies the internal sample rate (up to 16x) to prevent aliasing. [SRC: IL-MAN]
5.  **Unipolar/Bipolar Switch:**
    *   **Unipolar (Half-Wave):** Processes the positive and negative sides of the wave the same way.
    *   **Bipolar (Full-Wave):** Allows you to shape the top half and bottom half of the wave independently. [SRC: IL-MAN]

## Signal Flow
1.  **Input:** Audio enters the plugin.
2.  **Pre-Gain:** The signal is boosted or cut before hitting the graph.
3.  **Mapping:** Each sample's volume is checked against the X-axis of the graph and output according to the Y-axis.
4.  **Oversampling:** The signal is filtered to remove digital artifacts (if enabled).
5.  **Post-Gain/Mix:** The final level is adjusted and blended with the dry signal.

## Things Beginners Misunderstand
*   **The Flat Line:** If you draw a horizontal line at the top, you are **Clipping**. If you draw it in the middle, you are drastically lowering the volume.
*   **Pre-Gain vs Graph:** You can achieve the same distortion by either boosting the Pre-Gain or moving the graph points up. Most pros prefer a subtle graph and a high Pre-Gain for better control.
*   **Bipolar Mode:** In Bipolar mode, the center of the graph is "Zero." Everything above is positive voltage, everything below is negative. [SRC: REPUTABLE]
