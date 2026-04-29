# Workflow: MIDI Pattern Triggering (Live Glitching)

## The Concept
Instead of drawing automation lines, use your MIDI keyboard to "play" Gross Beat patterns like an instrument.

## Setup
1.  Load **Gross Beat**.
2.  In the Plugin Wrapper settings (gear icon), set the **Input Port** to `1`.
3.  Create a **MIDI Out** channel in the Channel Rack. Set its **Port** to `1`.
4.  Now, Piano Roll notes in the MIDI Out channel will trigger Gross Beat slots:
    *   **C4** = Pattern 1
    *   **C#4** = Pattern 2
    *   ...and so on for all 72 slots. [SRC: IL-MAN]

## The "Performance" Recipe
1.  Set Gross Beat to "Hold" mode.
2.  Play your track.
3.  "Jam" on your keyboard. Tap the Half-speed key on the 1, a Stutter key on the 3, and a Tape Stop key on the 4.
4.  Record this MIDI into the Playlist.

## Why This is Better
*   It allows for **complex combinations** that are too tedious to draw with the mouse.
*   It feels more "human" and rhythmic.

## Pitfalls
*   **Latency:** Ensure your audio driver buffer is low (under 512 samples) or the pattern switching will feel "laggy."
