# Technical Specs: Autogun Mechanics

## 1. The 4 Billion Seeds

*   **Total Presets:** 4,294,967,296 ($2^{32}$).
*   **Mechanism:** This is a 32-bit integer limit.
*   **What is a Seed?** The number isn't just an index; it's the input value for a pseudo-random number generator (PRNG) that determines:
    *   Harmonic Amplitudes (timbre).
    *   harmonic Phases (metallic vs liquid).
    *   Envelopes (volume/filter shape).

## 2. Synthesis Engine (Additive)

*   **Method:** Inverse Fast Fourier Transform (iFFT).
*   **Harmonic Count:** Up to 32,767 harmonics.
*   **Comparison:** A standard Subtractive synth (3x Osc) has ~10-20 audible harmonics. Autogun has thousands.
*   **PADsynth:** This algorithm (developed by Paul Nasca) takes the discrete harmonics and "smears" them into a continuous band. This removes the "metallic buzz" of naive additive synthesis and creates "choir-like" textures.

## 3. Magic Dust (The Maximizer)

*   **Engine:** Based on **Soundgoodizer** (which is based on **Maximus**).
*   **Curve:** It applies a preset compression curve (likely Soundgoodizer Preset A or C).
*   **Effect:**
    *   Upward Compression (boosts quiet tails).
    *   Saturation (adds warmth).
    *   Limiting (prevents clipping).

## 4. CPU & FFT Performance

*   **Load Type:** Non-linear.
*   **Behavior:** The CPU hit happens primarily at the **Voice Start**. The engine must calculate the iFFT wavetable for that specific note's frequency.
*   **Implication:** Playing fast arpeggios (many new notes) stresses the CPU more than holding a long chord (sustain), contrary to standard sample playback.
