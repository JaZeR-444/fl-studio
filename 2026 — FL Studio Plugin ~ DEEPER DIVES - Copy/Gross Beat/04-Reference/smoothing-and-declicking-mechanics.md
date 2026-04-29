# Smoothing & De-Clicking Mechanics

Clicks are the enemy. Gross Beat has two distinct systems to fight them. Understanding the difference is key to a clean sound.

## 🎚️ 1. The Global "ATT" (Attack) Knob
Located in the **Volume Envelope** section (Bottom Left).

*   **What it does**: It applies a smoothing fade-in to **every sharp vertical jump** in the *Volume Grid*.
*   **Physics**: It turns a "Square" wave into a "Trapezoid" wave.
*   **Values**:
    *   **0ms**: Hard digital edge. Maximum click. (Good for bitcrush effects).
    *   **2-5ms**: Percussive snap. Good for Trance Gates. Removes the "pop" but keeps the punch.
    *   **10-20ms**: Soft "swelling" gate. Good for R&B chords/pads.
    *   **>50ms**: Slow attack. The gate loses its rhythm and feels laggy.
*   **Rule**: This *only* affects the Orange Volume Grid. It does nothing for Time jumps.

## 🔘 2. The "Click Reduction" Switch
Located in the **Time Settings** (Bottom Right).

*   **What it does**: It creates a microscopic crossfade (de-clicking window) whenever the playback head **Jumps** to a new position in the *Time Grid*.
*   **Scenario**:
    *   You are playing Bar 1.
    *   You jump instantly to play audio from "1 beat ago".
    *   The waveform at "Now" and "1 beat ago" likely don't match (one might be at +3dB, the other at -5dB).
    *   This jump creates a "DC Offset" pop.
*   **Action**: "Click Reduction" fades the old signal out and the new signal in over a few samples.
*   **Settings**:
    *   **Off**: Instant jump. Maximum click. Crispest timing.
    *   **On (Low/High)**: Smooths the jump. May soften the transient slightly but kills the pop.
    *   *Pro Tip*: For Drum Glitches, sometimes you WANT the click (it adds aggression). For Melodies, you almost always want it ON.

## 📉 3. Manual Smoothing (The "Curve" Method)
If the automatic tools fail:
1.  **Zoom in** on your envelope.
2.  Don't draw vertical lines (90 degrees).
3.  Draw slightly angled lines (85 degrees).
4.  This creates a manual "fade" in the envelope itself.
