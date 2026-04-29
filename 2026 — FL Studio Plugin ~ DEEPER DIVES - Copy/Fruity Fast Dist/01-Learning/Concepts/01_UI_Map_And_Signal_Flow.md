# UI Map And Signal Flow: Fruity Fast Dist

## UI Tour
1.  **Pre (Input Drive):** Controls how much signal is forced into the distortion engine. This is your "Aggression" knob.
2.  **Thres (Threshold):** Selects the frequency band sensitivity. [SRC: IL-MAN]
    *   **Left:** Distorts only the lower/mid frequencies.
    *   **Right:** Distorts a wider band including the highs.
3.  **A/B Switch:** 
    *   **Type A:** Softer, rounder, "Foldback" style saturation. [UNVERIFIED]
    *   **Type B:** Harder, sharper, "Digital Clipping" style distortion.
4.  **Mix:** Standard Dry/Wet knob.
5.  **Post (Output Level):** **CRITICAL.** Compensates for the volume boost from the Pre knob. [SRC: IL-MAN]

## Signal Flow
1.  **Input:** Audio enters the plugin.
2.  **Pre-Amp:** Signal is amplified.
3.  **Frequency Split:** The "Thres" knob determines which frequencies move into the clipper.
4.  **Distortion Core:** The A or B algorithm shapes the waveform.
5.  **Summing:** The distorted signal is mixed with the dry signal.
6.  **Post-Gain:** Final volume adjustment.

## Things Beginners Misunderstand
*   **The "Post" Knob:** Beginners often turn up the "Pre" and blow their speakers. **Rule:** For every bit you turn up PRE, you must turn down POST to keep the volume consistent.
*   **Type B Loudness:** Type B is naturally louder because its clipping curve is flatter. Always check your levels when switching modes.
*   **Threshold logic:** It’s not an EQ; it’s a sensitivity gate. It determines *when* and *where* the clipper starts eating the signal. [SRC: REPUTABLE]
