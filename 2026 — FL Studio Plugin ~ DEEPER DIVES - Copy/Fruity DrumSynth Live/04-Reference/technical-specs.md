# Technical Specs: Fruity DrumSynth Live Mechanics

## 1. Synthesis Engine

*   **Type:** Hybrid (Subtractive + FM + PCM).
*   **Oscillators:**
    *   Hybrid Band-limited oscillators capable of seamless transitions between Sine (Sweep) and Noise.
*   **Aliasing:** The engine is older and produces characteristic digital aliasing at high frequencies, which contributes to its "Vintage Digital" sound (comparable to Nord Drum).

## 2. File Format (.ds)

*   **Legacy:** Creates patches based on the standalone **DrumSynth** software logic.
*   **Storage:** The plugin stores all 120 patch settings within the FL Studio project state (or `.fst` preset). It does *not* reference external `.ds` files during playback, making it portable.

## 3. Polyphony & Choking

*   **Voice Mode:**
    *   **Mono:** The key cuts itself.
    *   **Poly:** Overlapping layers.
    *   **Group 1-4:** Cut Groups.
        *   *Usage:* Assign Open Hat and Closed Hat to **Group 1**. The Closed Hat will silence the Open Hat tail. This is handled internally, no need for FL Studio "Cut/Cut By" tab.

## 4. Parameter Resolution

*   **MIDI:** Most parameters are mapped to MIDI CC, but due to the "Per Key" nature, automation usually affects the *currently selected key*.
*   **Warning:** Automating synth parameters (like Decay) while playing a beat might affect *all* drums if you aren't careful, or only the last played drum. Test behavior before live performance.
