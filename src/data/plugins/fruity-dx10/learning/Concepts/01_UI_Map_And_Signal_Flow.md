# UI Map And Signal Flow: Fruity DX10

## UI Tour
1.  **Wave Section:**
    *   **Wave Knob:** Controls the harmonic richness (brightness) of the oscillators.
2.  **Modulation Section (The "Bite"):**
    *   **Coarse/Fine:** Tunes the Modulator. This determines the harmonic "flavor."
    *   **Init:** The starting depth of the FM effect.
    *   **Time:** How long it takes for the FM effect to fade out.
3.  **Amplitude Section (ADSR):**
    *   **Att / Dec / Sus / Rel:** Standard volume envelope.
4.  **LFO Section:**
    *   **Rate / Vib:** Built-in pitch vibrato.
5.  **Velocity Mapping:** Link note intensity to Amplitude or Modulation. [SRC: IL-MAN]

## Signal Flow
1.  **Trigger:** Note received.
2.  **Modulator:** Generates a high-speed sine wave at a ratio determined by Coarse/Fine.
3.  **Modulation Envelope:** Shapes the volume of the Modulator (Init/Time).
4.  **FM Engine:** The Modulator vibrates the **Carrier** oscillator.
5.  **Thru Mode:** (Optional) If "Thru" is up, you hear the Modulator *and* the Carrier together.
6.  **Amplitude Envelope:** Final volume shaping (ADSR).
7.  **Output:** Summed to the mixer.

## Things Beginners Misunderstand
*   **Coarse Tune Ratios:** Setting Coarse to whole numbers (1.00, 2.00) creates "musical" harmonics. Setting it to fractions (1.50, 2.73) creates "metallic" or "inharmonic" noise. [SRC: REPUTABLE]
*   **Thru Mode:** Turning this up makes the sound much louder and "buzzier" because you are adding a second oscillator to the mix.
*   **Modulation Init:** If this is at 0, you are just hearing a simple Sine wave. This knob is the "FM Amount." [SRC: IL-MAN]
