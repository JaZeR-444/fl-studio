# Technical Specs: Fruity Reeverb 2 Mechanics

## 1. H.Cut vs. High Damping (The Confusion)

These two controls both reduce high frequencies, but they do it in fundamentally different ways physically.

### H.Cut (Input Filter)
*   **Location:** *Pre-Reverb.*
*   **Function:** A static Low-Pass filter applied to the audio *before* it enters the reverb tank.
*   **Result:** The reverb tail simply contains no high frequencies from the start. It sounds "Muffled" or "Distant" immediately.

### High Damping (Decay Coefficient)
*   **Location:** *Inside the Feedback Loop.*
*   **Function:** A frequency-dependent gain reduction calculation per reflection cycle.
*   **Physics:** Simulates air absorption. High frequencies lose energy faster than low frequencies as they bounce through air.
*   **Result:** The reverb starts bright, but the tail gets darker as it fades. This is **Natural** behavior.

## 2. Modulation Physics

Reverb algorithms use "Delay Lines" (buffers of repeating audio).
*   **Problem:** Fixed delay lines create "Standing Waves" or metallic ringing at specific resonant frequencies.
*   **Solution:** Modulation.
*   **Mechanism:** An LFO slightly varies the length of the delay lines in real-time.
*   **Effect:** This smears the resonant frequencies, preventing the metallic ring. However, at high settings, it introduces audible Pitch Shift (Doppler Effect).

## 3. Stereo Separation Topology

*   **Knob Center:** Normal Stereo.
*   **Knob Right:** Sums the Wet signal to Mono. (Input Stereo -> Reverb -> Sum to Mono).
*   **Knob Left:** Enhances stereo difference.
    *   *Warning:* Extreme left settings can cause Phase Cancellation if the mix is summed to mono later.

## 4. Pre-Delay Mechanics

*   **Definition:** A pure digital delay line inserted before the reverb engine.
*   **Psychoacoustics:** The human ear uses the gap between the "Direct Sound" and the "First Reflection" to judge distance.
    *   **0ms Gap:** Source is against the back wall.
    *   **50ms Gap:** Source is close to you, walls are far away.
    *   **Tempo Sync:** The switch allows locking this gap to musical intervals (e.g., Slapback delay at 1/16th note).
