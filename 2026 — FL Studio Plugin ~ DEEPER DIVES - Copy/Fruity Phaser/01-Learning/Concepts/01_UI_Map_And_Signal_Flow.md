# UI Map And Signal Flow: Fruity Phaser

## UI Tour
1.  **SWEEP Knob:** Controls the LFO speed (Rate). How fast the notches move. [SRC: IL-MAN]
2.  **MIN/MAX DEPTH Knobs:** Define the frequency boundaries of the sweep (The "Bottom" and "Top" of the woosh).
3.  **FEEDBACK Knob:** Sends the processed signal back into the input. Higher settings create sharp, resonant "whistling" peaks.
4.  **NOTCHES Slider:** Sets the number of filter stages. 
    - **Low (4-8):** Warm, vintage sound.
    - **High (12-24):** Intense, metallic, robotic sound.
5.  **PHASE Knob:** Sets the stereo offset of the LFO. 
    - **0%:** L and R move together (Mono-ish).
    - **100%:** L and R move in opposite directions (Swirling Stereo).

## Functional Flow
1.  **Input:** Audio enters.
2.  **All-Pass Chain:** The signal passes through the number of stages set by the "Notches" parameter.
3.  **LFO Modulation:** The internal LFO moves the center frequency of these filters between the Min and Max depths.
4.  **Feedback Loop:** A portion of the output is mixed back into the input (if Feedback > 0).
5.  **Summing:** The phased signal is mixed with the original dry signal to create the audible "notches."
6.  **Output:** Final audio.

## Things Beginners Misunderstand
- **Notches vs EQ:** Increasing "Notches" doesn't make the sound brighter; it makes the frequency response more complex and "jagged."
- **Feedback Whistle:** If your phaser is "screaming," your Feedback is likely above 70%. [SRC: REPUTABLE]
- **Dry/Wet:** Like a chorus, a phaser **needs** the dry signal to work. If you set it to 100% wet, you might only hear a subtle pitch-vibrato rather than the "woosh." [SRC: IL-MAN]
