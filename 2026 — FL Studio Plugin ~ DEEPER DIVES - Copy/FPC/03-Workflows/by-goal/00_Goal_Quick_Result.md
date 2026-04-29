# Goal: Multi-Output Drum Mixing (FPC)

## The Concept
Sending every drum pad to its own mixer track for professional EQ, Compression, and Effects.

## Step-by-Step Setup
1.  Load **FPC** and link it to Mixer Track **10**.
2.  Select **Pad 1 (Kick)**. Look at the **Output** box (top right). Set it to `0`. (This stays on Track 10).
3.  Select **Pad 2 (Snare)**. Set the **Output** to `1`. (This moves to Track 11).
4.  Select **Pad 3 (Hi-Hat)**. Set the **Output** to `2`. (This moves to Track 12).
5.  **Verify:** Play your pattern. You should see the Kick moving the meter on Track 10, the Snare on 11, and the Hats on 12.

## Result
- Total control. You can now add a **Fruity Reverb** to just the Snare without affecting the Kick, or add a **Soft Clipper** to just the Kick.

## Vibe Check
- **Professional/Polished:** This is the difference between a "Bedroom" beat and a "Studio" mix.

## Pitfalls
- **Offset Math:** The number in the Output box is an *offset* from the main track. If FPC is on Track 5, Output `1` is Track 6. [SRC: REPUTABLE]
