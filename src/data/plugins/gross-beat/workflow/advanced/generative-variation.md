# Generative Variation (Self-Playing Effects)

For "Intelligent Dance Music" (IDM) or just keeping a beat interesting without manual automation.

## 🎲 The Setup

1.  **Controller**: You need a signal to change the Gross Beat slots automatically.
    *   **Option A**: Fruity Peak Controller (LFO).
    *   **Option B**: Fruity Formula Controller (Math).
2.  **Target**: The **Time Slot** or **Volume Slot** selection slider.

## 🌊 Workflow: The "Drifting" LFO
1.  **Peak Controller**: Add to any mixer track (doesn't matter where, mute it).
    *   **LFO Shape**: Random (Stepped).
    *   **Speed**: Slow (e.g., changes once per bar).
2.  **Link**:
    *   Go to Gross Beat.
    *   Right-click the **Time Slot** selector (the vertical list of 1-36).
    *   **Link to Controller** -> Select "Peak Ctrl - LFO".
    *   **Mapping Formula**: This is crucial. You don't want to jump between ALL 36 slots. You maybe only want slots 1-4.
        *   Formula: `Input * 0.1` (Limits the range to the first 10% of slots).
3.  **Result**: Every bar, Gross Beat randomly picks a different stutter pattern from your first 4 slots.

## 🧮 Workflow: The "Chaos" Trigger
**Goal**: Only glitch when the kick drum hits hard.
1.  **Peak Controller**: Put it on the **Kick Drum** channel.
2.  **Link**: Link the Peak Controller **Peak** (envelope) to the Gross Beat **Time Mix** knob.
3.  **Result**:
    *   When the Kick hits -> Peak goes up -> Mix goes up -> Glitch happens.
    *   When silence -> Mix goes to 0 -> Clean audio.
    *   *Refinement*: Use the "Base" knob in Peak Controller to invert this (Glitch only during silence/tails).

## 🎹 Complex Polyrhythms
*   If your song is 4/4, set your automation LFO to a speed of **3 beats**.
*   The effect pattern will "phase" against the drum beat, creating a constantly evolving interaction that never repeats the same way twice.
