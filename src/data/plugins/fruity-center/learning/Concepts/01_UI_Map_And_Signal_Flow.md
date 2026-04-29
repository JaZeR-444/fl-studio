# UI Map And Signal Flow: Fruity Center

## UI Tour
Fruity Center has no knobs or sliders in its standard interface. It is a "Set and Forget" tool.

1.  **Status Indicator:** (Some versions) shows if DC offset is being detected and corrected.
2.  **Logo/Header:** Minimalist legacy design.

## Functional Flow
1.  **Input:** Audio signal enters the slot.
2.  **Averaging Engine:** The plugin calculates the "Mean" value of the signal over a short window of time. [SRC: UNVERIFIED - common DSP practice]
3.  **DC Detection:** If the average value is not zero, the plugin identifies a DC Offset.
4.  **Correction Filter:** A high-pass filter with a cutoff near **1Hz to 5Hz** is applied to block the constant DC voltage while letting all audible sound (even sub-bass) pass through.
5.  **Output:** Re-centered audio is passed to the next mixer slot.

## Things Beginners Misunderstand
- **"I can't hear a difference":** DC offset is inaudible by itself. You won't "hear" Fruity Center working, but you will **see** the results in your meters and feels the extra headroom.
- **Placement:** It should almost always be the **FIRST plugin** in your chain. If you distort a signal with DC offset (using **Blood Overdrive**), the offset gets amplified and much harder to fix later. [SRC: REPUTABLE]
- **Edison vs Fruity Center:** Edison is for "fixing" a file forever. Fruity Center is for fixing a signal *live* as it plays.
