# Live Sample Chopping

The essence of Hip-Hop is "Chopping Samples"—taking a loop and rearranging it. Usually, this is done in Slicex or the Playlist. However, Gross Beat can do this **non-destructively** in real-time.

## 🔪 The Concept: "Time Remapping"
Instead of cutting the audio file, you tell Gross Beat: "Play Beat 3 now," then "Play Beat 1 now."

## 🎹 Setup: The "Chop Bank"

1.  **The Grid**:
    *   Gross Beat's vertical axis is the **Past**.
    *   Top = Now (Beat 4, if we are at Beat 4).
    *   Bottom = 2 Bars Ago.
2.  **Creating "Jump" Slots**:
    *   **Slot 1 (Normal)**: Diagonal Line.
    *   **Slot 2 (Repeat Beat 1)**: A sawtooth wave that constantly replays the *first* beat of the bar.
    *   **Slot 3 (Repeat Beat 2)**: A sawtooth wave that plays the *second* beat.
        *   *How*: If the playhead is at Beat 1, you can't play Beat 2 (it hasn't happened).
        *   *Constraint*: You can only remix **audio that has already played**.
3.  **The "Delay" Strategy**:
    *   Let the loop play once to fill the buffer.
    *   Now, in the *second* bar, you can jump back to ANY part of the first bar.
    *   **Slot Setup**:
        *   Create slots that point to "Beat 1", "Beat 2", "Beat 3" relative to the current bar line.

## 🎮 The MPC Workflow
1.  Map your MIDI Controller pads to Gross Beat Slots.
2.  Set **Trig** to **1/16** or **Off** (for finger drumming).
3.  Set **Hold** to **On**.
4.  **Perform**:
    *   Play the loop.
    *   Hit pads to "stutter" specific parts or jump back to the snare.
    *   *Result*: You are "playing" the effect like an instrument.

## 🔄 Randomization (Generative Hip-Hop)
1.  Use FL Studio's **Peak Controller** LFO.
2.  Link the LFO to Gross Beat's **Time Slot** selector.
3.  Set the LFO to **Random** (square or hold).
4.  *Result*: Gross Beat will randomly jump between your chop patterns, creating endless variations of the sample loop automatically.
