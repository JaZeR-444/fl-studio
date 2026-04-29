# Technical Specs: Fruity Chorus Mechanics

## 1. Crossover Filter Topology

*   **Type:** 1-Pole (6dB/Octave) or 2-Pole?
    *   The manual implies a simple split.
*   **Behavior:**
    *   When **Process HP** is active, the Low signal is passed through *Dry*. The High signal is sent to the Chorus line. They are summed at the output.
    *   This preserves the phase integrity of the Bass, which is critical for club systems.

## 2. Modulation Depth vs Delay

*   **Algorithm:** `Current_Delay = Base_Delay + (LFO_Value * Depth)`.
*   **Pitch Shift:** The *speed* of delay change determines the pitch shift (Doppler Effect).
    *   Fast LFO + High Depth = Extreme Pitch Warble (Vibrato).
    *   Slow LFO + High Depth = Slow Detuning.
    *   Fast LFO + Low Depth = Shimmer.

## 3. Stereo Phase

*   **LFO Offset:** The 'Stereo' knob offsets the phase of the Right Channel LFO relative to the Left Channel LFO.
*   **180 Degrees:** When Left LFO is at peak (Max Delay), Right LFO is at trough (Min Delay).
*   **Headphone Warning:** Extreme settings (180) can cause nausea or fatigue on headphones due to the unnatural anti-phase motion.

## 4. Multi-Sine Waveform

*   **Composition:** `Sin(x) + (0.5 * Sin(3x))`.
*   **Harmonic:** It effectively adds a 3rd harmonic to the modulation curve, creating a "wobbly" shape rather than a smooth sweep. This makes the chorus usage less predictable and more "Ensemble-like".
