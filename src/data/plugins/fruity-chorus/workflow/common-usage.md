# Common Workflows: Fruity Chorus

## 1. The "Dimension" Expander

1.  **Goal:** Make a mono synth sound stereo without movement.
2.  **Settings:**
    *   **Depth:** 0 (Static).
    *   **Delay:** 10ms.
    *   **Stereo:** 180 degrees.
    *   **Mix:** 50%.
3.  **Result:** Static phase cancellation creates a "Pseudo-Stereo" width. It sounds unnatural in mono (comb filtering) but huge in stereo.

## 2. Reese Bass Width

1.  **Source:** A mono saw bass.
2.  **Action:** Insert Fruity Chorus.
3.  **Critical Step:** Switch **Cross Type** to **Process HP**.
4.  **Tuning:** Move **Cutoff** until the low end tightens up (usually around 250-400Hz).
5.  **Modulation:** Use **Multi-Sine** on LFO 1 for a "nervous" motion.

## 3. Guitar Strum Thickener

1.  **Input:** Clean electric guitar DI.
2.  **Delay:** 20ms (approaching Slapback).
3.  **Depth:** Medium.
4.  **LFO:** Slow (0.5 Hz).
5.  **Result:** Sounds like a 12-string guitar or a Double Track.

## 4. Metallic Flanger

You can force Fruity Chorus to act like a Flanger.

1.  **Delay:** Minimum (0.1ms).
2.  **Depth:** High.
3.  **Feedback?** Fruity Chorus has no feedback knob.
4.  **Workaround:** Put Fruity Chorus in a Send Channel. Route the Send back into itself (carefully!) to create feedback loops. *Warning: dangerous.*
