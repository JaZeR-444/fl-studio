# UI Map And Signal Flow: Fruity Filter

## UI Tour
1.  **Cutoff Knob:** The main frequency control.
2.  **Resonance (Res) Knob:** Controls the sharpness of the peak at the cutoff point.
3.  **Filter Type Toggle:** 
    *   **Low Pass (LP):** Removes highs.
    *   **High Pass (HP):** Removes lows.
    *   **Band Pass (BP):** Removes both, leaving only a "band."
4.  **2x Switch:** Toggles oversampling for higher audio quality. [SRC: IL-MAN]
5.  **Mix Faders:** (In some versions) allows independent control of the Dry and Filtered signals.

## Signal Flow
1.  **Input:** Audio enters.
2.  **State Selection:** The signal is routed through the chosen filter algorithm (LP/HP/BP).
3.  **Resonance Loop:** A portion of the signal is fed back into the filter to create the resonant peak.
4.  **Oversampling:** If **2x** is ON, the internal processing rate is doubled to prevent aliasing.
5.  **Output:** Summed signal is sent to the mixer.

## Things Beginners Misunderstand
*   **Resonance and Volume:** High resonance doesn't just change the tone; it **boosts volume** significantly. **Fix:** Lower the mixer fader before cranking the Res knob.
*   **The 2x Mode CPU:** It uses more CPU than standard mode. Don't leave it on for every track if your project is large.
*   **Frequency Range:** The Cutoff knob is extremely sensitive. A tiny movement in the low range (left side) changes the sound more than a large movement in the high range (right side). [SRC: REPUTABLE]
