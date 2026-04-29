# UI Map And Signal Flow: Fruity Delay

## UI Tour
1.  **Input Section:**
    *   **Vol:** Level of signal entering the delay.
    *   **Pan:** Stereo position of the input signal.
2.  **Feedback Section:**
    *   **Vol:** How many repeats (Gain of the loop). [SRC: IL-MAN]
    *   **Cutoff:** Low-pass filter that darkens successive echoes.
3.  **Delay Time (Main Knob):** Sets the interval between echoes in Steps (default) or ms.
4.  **Stereo Mode Switch:**
    *   **Normal:** Standard stereo.
    *   **Inverted:** Swaps L/R in the loop.
    *   **Ping Pong:** Bounces L -> R -> L.

## Signal Flow
1.  **Audio In:** Signal enters from the mixer.
2.  **Delay Buffer:** Audio is stored for the duration of the "Time" parameter.
3.  **Filtering:** The signal is darkened by the "Cutoff" value.
4.  **Feedback Loop:** A portion of the filtered audio is sent back to Step 2.
5.  **Output:** The summed echoes are sent to the mixer.

## Things Beginners Misunderstand
*   **Feedback at 100%:** Setting Feedback to max will cause a volume spike that never ends. **Safety Rule:** Always put a Limiter after Fruity Delay if you are experimenting with high feedback. [SRC: REPUTABLE]
*   **Steps vs Ms:** The Time knob is scaled in "Steps" (1/16th notes) by default. To get "triplets" or "dotted" notes, you must move it between the whole numbers.
*   **Automation Pitch:** Moving the Time knob while audio is playing will cause a "Tape Stop" or "Pitch Shift" effect. This is a feature! [SRC: IL-MAN]
