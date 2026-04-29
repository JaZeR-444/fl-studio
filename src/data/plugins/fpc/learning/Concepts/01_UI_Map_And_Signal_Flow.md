# UI Map And Signal Flow: FPC

## UI Tour
The interface is centered around the 16 drum pads, with the editor on the right. [SRC: IL-MAN]

### 1. The Pad Bank (Left)
- **1-16 Pads**: Click to trigger.
- **Bank A / B**: Switches between two sets of 16 pads (32 total).
- **Pad Label**: Shows the MIDI note assigned to that pad.

### 2. The Layer Editor (Top Right)
- **Wave List**: Shows the samples loaded onto the selected pad.
- **Velocity Handles**: Vertical bars used to set the trigger range for each sample.
- **Volume/Pan/Tune**: Per-sample controls.

### 3. Pad Properties (Bottom Right)
- **Output**: Sets the Mixer Track offset. "0" means the FPC's track; "1" means the next track over.
- **Cut / Cut By**: The "Choking" logic.
- **Envelope**: ADSR curve for the selected pad.

### 4. Global Tools (Top Bar)
- **MIDI Note selector**: Assigns the hardware key to the pad.
- **Map Notes Macro**: Automatically maps pads 1-16 to your controller.

## Signal Flow
1. **MIDI Input**: MIDI data enters from the Piano Roll or a hardware controller.
2. **Note Match**: FPC matches the MIDI note to a specific Pad (1-32).
3. **Velocity Filter**: The engine checks the Velocity of the note and selects the corresponding Sample Layer.
4. **Envelope**: The Volume ADSR is applied to the sample.
5. **Channel Processing**: Panning and Tuning are applied.
6. **Routing**: The signal is sent to the Mixer based on the **Output** offset.
7. **Cut Groups**: If a "Cut" signal is triggered, it silences any pad currently playing in that group.

## Things Beginners Misunderstand
- **"Where is the sound?"**: FPC comes with a library, but if you start a new preset, the pads are empty. You must drag samples onto them.
- **The "Output" Knob**: This is an **OFFSET**. If FPC is on Mixer Track 10, setting Output to "1" sends that pad to Mixer Track 11.
- **Map Notes**: If your pads don't match your keyboard, click the "Down Arrow" near the MIDI note label and select "Map notes for entire bank."
