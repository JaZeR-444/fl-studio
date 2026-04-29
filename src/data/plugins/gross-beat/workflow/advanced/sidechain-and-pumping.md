# Sidechain & "The Pump" (Volume Shaping)

For House, R&B, and "Future Bass", dynamic volume shaping is essential. Gross Beat is often cleaner than a compressor for this.

## 🦆 The "Duck" (Pseudo-Sidechain)

**Why Gross Beat?**
*   **Compressors**: React to input (can be messy, clicky, release time varies).
*   **Gross Beat**: 100% predictable, sample-accurate volume curve repeated every beat.

**The Curve**:
1.  **Volume Grid**: Snap to **1/4 Beat**.
2.  **Draw**:
    *   **Start**: 0% (Silence).
    *   **End**: 100% (Full).
    *   **Curve**: **Single Curve** with tension dragged UP (convex).
    *   *Shape*: Looks like a "Hill" rising from the ocean.
3.  **Result**: The audio "ducks" instantly on the beat (making room for the Kick) and swells back up.

## 🌊 The "LFO" Tremolo
**Goal**: Create movement in static pads.
1.  **Volume Grid**: Snap to **1/16**.
2.  **Draw**: A Sine Wave shape (Up/Down/Up/Down).
3.  **Mix Knob**:
    *   **100%**: Hard chopping (Helicopter effect).
    *   **30%**: Subtle shimmering movement.

## 🥁 Transient Shaping (Snare Tightener)
**Goal**: Make a sloppy snare sample sound tight and punchy.
1.  **Volume Grid**:
    *   **Attack**: 100% Volume.
    *   **Sustain**: Drop volume sharply after the initial hit (e.g., at the 1/16th mark).
    *   **Release**: Silence.
2.  **Result**: You artificially shorten the decay of the drum, removing room noise or reverb tails, making the beat sound "dry" and "in your face."
