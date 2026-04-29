# Melody Reshaping Workflow

Turn a boring 4-bar melody loop into a complex, evolving motif.

## 🎼 The "remix" approach

1.  **Input Material**: A simple arpeggio or chord progression.
2.  **The Goal**: Change the rhythm and pitch without changing the synth patch.

## 🛠️ Techniques

### 1. Pitch Shifting (The "Trap" Octave)
*   **Concept**: Playing audio at 2x speed raises pitch by +1 Octave. Playing at 0.5x speed lowers by -1 Octave.
*   **Workflow**:
    *   Create a slot that plays at **Double Speed** for 1 beat.
    *   Create a slot that plays at **Half Speed** for 1 beat.
    *   Switch between them to create melody jumps that weren't in the original MIDI.

### 2. Time Reordering (The "Jigsaw")
*   You can "scramble" the playback order.
*   *Example*: Play Beat 2 during Beat 1, and Beat 1 during Beat 2.
*   **Drawing**:
    *   **Beat 1 Segment**: Draw the envelope starting at the "Beat 2" vertical position (reading from the future/buffer? No, you can only read from the past).
    *   *Correction*: You can only read from the PAST. So you can play Beat 1 during Beat 2. You cannot play Beat 2 during Beat 1 (unless you delay the whole track by 1 bar).
    *   **The "Delayed" Workflow**:
        *   Accept that your melody will be delayed by 1 Bar.
        *   Now you have access to the *entire* previous bar in the buffer.
        *   You can re-sequence the beats in any order: `4 - 1 - 3 - 2`.

## 🎹 Pattern Chaining
1.  Set up 4 different "Remix" slots.
2.  Use a **Fruity Keyboard Controller** to sequence them in the Piano Roll.
3.  Treat the Gross Beat slots as "Key Switches" for your melody.
