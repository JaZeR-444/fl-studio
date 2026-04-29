# UI Map And Signal Flow: Fruity Voltage Controller

## UI Tour
1.  **Output Selector:** Choose which interface output pairs (e.g., Output 3-4) the CV will be sent to.
2.  **Calibration Knobs (Pitch/Offset):** Used to tune the 1V/Octave tracking so the hardware plays in tune with FL's Piano Roll.
3.  **Range Switch:** Sets the voltage range (5V, 10V, or Bipolar). Match this to your hardware's input specs.
4.  **Channel Sliders (1-8):** Eight independent streams of voltage.
5.  **Gate/Trigger Modes:** Determines if the output is a "hold" voltage (Gate) or a "blip" (Trigger). [SRC: IL-MAN]

## Signal Flow
1.  **MIDI Input:** The plugin receives notes from the Piano Roll or MIDI input.
2.  **Translation:** It converts MIDI Note #1 (C5) into a specific voltage level (e.g., 2.0V).
3.  **Scaling:** The voltage is scaled based on the "Pitch Scale" calibration.
4.  **DAC (Digital to Analog):** The voltage is sent as an audio-like signal to your interface's output.
5.  **Hardware Input:** The physical cable carries this electricity to the hardware VCO or VCF.

## Things Beginners Misunderstand
*   **"No Audio":** You will not hear sound coming *out* of this plugin. It only outputs control voltage. You must record the hardware's audio back into a different Mixer Track.
*   **DC Filtering:** If you use a standard audio cable and a non-DC-coupled interface, the voltage will "droop" to zero immediately. You need the right hardware. [SRC: REPUTABLE]
*   **Safety:** Sending +10V to a module only expecting +5V can sometimes behave unexpectedly. Always start at the lowest range.