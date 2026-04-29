# Technical Specs: Distructor Mechanics

## 1. Oversampling

*   **Technique:** Distructor operates at a higher internal sample rate (Oversampling) for its distortion modules.
*   **Purpose:** To prevent "Aliasing".
    *   Digital distortion creates infinite harmonics.
    *   If a harmonic exceeds the Nyquist Frequency (Sample Rate / 2), it bounces back as ugly inharmonic noise.
    *   Oversampling raises the Nyquist ceiling, allowing filters to cut these harmonics before downsampling.

## 2. Speaker Cabinet (Impulse Responses)

*   **Technology:** Short Convolution Kernels.
*   **Resolution:** Unlike "Fruity Convolver" which can load 10-second reverbs, Distructor's Cab module is optimized for short (<200ms) impulses typical of speaker cones.
*   **Format:** The IRs capture both the Frequency Response (EQ) and the Time Domain resonance (Smearing) of the physical cabinet.

## 3. Comb Filtering (Phasing Physics)

*   **Comb+:** Adds a delayed version of the signal to itself.
    *   constructive interference at specific intervals.
*   **Comb-:** subtracts a delayed version.
    *   Destructive interference (Notches).
*   **Relationship:** `Frequency = 1 / DelayTime`.
    *   As you turn the Cutoff knob, you are actually changing the length of a millisecond delay line.

## 4. Signal Chain Logic

*   **Series Processing:** The output of Module 1 feeds the Input of Module 2.
*   **Accumulation:** Noise floor accumulates. If Module 1 adds noise (Bitcrush) and Module 2 is a Compressor (Distortion), the noise will be amplified.
*   **Gain Staging:** Each module has an "Out" knob. This is critical. If Module 1 boosts gain by +12dB, Module 2 might clip unintentionally at its input stage unless you turn Module 1's Out down.
