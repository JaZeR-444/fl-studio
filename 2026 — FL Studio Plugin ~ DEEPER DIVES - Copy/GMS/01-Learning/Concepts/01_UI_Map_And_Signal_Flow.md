# UI Map And Signal Flow: GMS

## UI Tour
1.  **Oscillator Section:** Three slots to pick waveforms.
    *   **Osc 1 & 2:** Main tone generators.
    *   **Osc 3:** Usually used for sub-bass or extra texture.
2.  **Filter Section:** A standard Low-Pass/High-Pass filter with ADSR controls.
3.  **Unisono:** A slider that adds "voices." 1 = Thin, 8 = Massive. [SRC: IL-MAN]
4.  **Modulation Matrix:** Where you connect LFOs and Envelopes to Cutoff, Pitch, etc.
5.  **The Glue (FX):** A row of 10 buttons (Distortion, Flanger, Reverb, etc.).

## Signal Flow
1.  **Oscillators:** The raw sound is generated.
2.  **Interaction:** Osc 2 can modulate Osc 1 (FM/RM/Sync modes).
3.  **Filter:** The sound is shaped by the EQ/Filter.
4.  **Envelopes:** The volume and filter change over time (Attack, Decay, etc.).
5.  **FX Rack:** The sound passes through the enabled effects in a **left-to-right** order.
6.  **Output:** Final stereo signal.

## Synthesis Modes Explained
*   **Sync:** Makes Osc 2 "reset" every time Osc 1 completes a cycle. Creates "screaming" lead tones.
*   **FM (Freq Modulation):** Osc 2 vibrates Osc 1 extremely fast. Creates "metallic" or "bell" sounds.
*   **RM (Ring Modulation):** Multiplies the volumes of Osc 1 and 2. Creates "robotic" or "distorted" tones. [SRC: REPUTABLE]

## Things Beginners Misunderstand
*   **The Effects Order:** You cannot change the order of effects. Reverb is always at the end, and Distortion is usually near the beginning.
*   **Modulation Amount:** If you link an LFO to the Filter, you won't hear anything until you turn up the **Amount** knob in the Modulation section.
*   **CPU:** While GMS is light, using 8-voice Unisono on 5 different tracks can eventually bog down your project. [SRC: REPUTABLE]
