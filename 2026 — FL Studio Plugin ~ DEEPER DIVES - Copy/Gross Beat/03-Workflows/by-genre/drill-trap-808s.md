# Drill & Trap 808 Manipulation

In modern UK Drill and American Trap, the 808 isn't just a bassline; it's a lead instrument that slides, stops, and glitches.

## 🚧 The "Drill Stop" (Bass Cut)
Drill beats often have abrupt silence in the bassline to let the kick or snare punch through, or just for rhythm.

1.  **Volume Grid**:
    *   Use the Volume Grid, NOT the Time Grid.
    *   **Snap**: 1/32 or 1/64.
    *   **Technique**: Draw sharp "holes" (0% volume) at the end of bars or right before a snare hit.
    *   **Attack/Release**: Keep these very tight (5ms) to avoid clicks but ensure the stop feels "sharp".

## 📉 The "808 Slide" Simulation
While true slides are pitch automation, Gross Beat can simulate the "Tape Drop" slide often heard at the end of 8-bar sections.

1.  **Time Grid**:
    *   **Pattern**: The standard "Tape Stop" curve (see `tape-stop-and-spin-up.md`).
    *   **Placement**: Trigger this slot only on the very last beat of the 8-bar loop.
    *   **Mix**: Ensure the 808 channel is sent to a dedicated mixer track with Gross Beat, so the rest of the drums don't slide (unless you want them to).

## 🔫 The "Glitch Fill"
Turn a sustained long 808 note into a machine-gun rhythm.

1.  **Slot Setup**:
    *   Create a "Repeater" slot (1/16th or 1/32nd repeat).
    *   Create a "Reverse" slot (1/4 beat reverse).
2.  **Performance**:
    *   Hold the 808 note (sustain).
    *   Play the Gross Beat slots via MIDI to "chop" the bass in real-time.
    *   *Result*: Instant complex bass patterns from a single long note.

## 🎛️ Handling Sub Frequencies
*   **Click Warning**: Cutting low frequencies abruptly causes loud clicks.
*   **Fix**:
    1.  Use the **Click Reduction** knob in Gross Beat.
    2.  Use the **Attack** knob in the Volume envelope section (bottom left). Set it to ~10ms to soften the edges of the chops.
