# UI Map And Signal Flow: Fruity Delay 2

## UI Tour
1.  **Input Controls:**
    *   **Vol:** Input gain (usually keep high on sends).
    *   **Pan:** Stereo placement of the *input* signal.
    *   **Dry:** Controls the level of the unprocessed signal passing through. [SRC: IL-MAN]
2.  **Feedback Controls:**
    *   **Vol:** Number of repeats (Gain of the loop).
    *   **Cut:** High-cut filter (LPF) frequency.
3.  **Timing Section:**
    *   **Time Knob:** Measures in "Steps" (1/16th notes).
    *   **Ofs (Offset):** Delays one channel (L or R) by a few milliseconds.
4.  **Stereo Modes:** Normal, Invert (Widening), Ping Pong (Bouncing).

## Signal Flow
1.  **Audio Input:** Signal enters the plugin.
2.  **Stereo Split:** The signal is split into L and R channels.
3.  **Offset Application:** If "Ofs" is used, one channel is delayed *before* the main delay timer hits.
4.  **The Loop:** Sound goes into the delay line -> through the **Cutoff Filter** -> back to the start of the loop.
5.  **Output Mixing:** Processed signal is mixed with the "Dry" knob level.

## Things Beginners Misunderstand
*   **The Offset "Gap":** If you turn the Offset knob all the way, you might hear a "phasing" sound. **Fix:** Keep it under 20% for a natural "Haas" width. [SRC: REPUTABLE]
*   **Dry Knob on Send:** If using Fruity Delay 2 on a Send track, **turn the Dry knob to 0**. Otherwise, you will duplicate the original signal and cause volume spikes.
*   **Time Display:** "4:00" doesn't mean 4 seconds; it means 4 steps (1 Quarter Note).
