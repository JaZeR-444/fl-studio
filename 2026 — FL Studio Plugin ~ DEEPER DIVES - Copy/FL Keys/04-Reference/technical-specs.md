# Technical Specs: FL Keys Mechanics

## 1. The Sample Engine

*   **Architecture:** Wave-Table (Loop Points).
*   **Sample Sets:** FL Keys does not use disk streaming. It loads the entire sample set into RAM.
    *   This is why the library is small (~1MB). The samples are looped very short, relying on the DSP decay envelope to mask the static nature of the loop.
*   **Resolution:** 16-bit / 44.1kHz (Legacy).

## 2. Stretched Tuning Physics

*   **Phenomenon:** In real pianos, stiff strings vibrate inharmonically. The 2nd harmonic is slightly sharper than 2x the fundamental.
*   **Correction:** Tuners stretch the upper octaves sharp to align the fundamental of the high note with the sharp harmonics of the low notes.
*   **FL Keys Implementation:**
    *   **0 Cents:** Equal Temperament (Mathematical perfection, but sounds dull).
    *   **+50 Cents:** Aggressive Stretch (Sounds brighter/sharper).

## 3. LFO Topology

*   **Waveform:** Sine Wave (Fixed).
*   **Target:**
    *   If Pan Knob < 50%: Target = Pan.
    *   If Pan Knob > 50%: Target = VCA (Volume).
*   **Sync:** The LFO is *not* tempo-synced. It runs in Hz. This is a crucial distinction for vintage behavior (older organs didn't sync to MIDI clock).

## 4. Muffle Filter

*   **Type:** 1-Pole Low Pass Filter (6dB/Octave).
*   **Behavior:** Gentle key-tracking filter. It does not resonate. It simply shaves off the high frequencies of the sample to simulate the hammer hitting the string softly (less energy = less brightness).
