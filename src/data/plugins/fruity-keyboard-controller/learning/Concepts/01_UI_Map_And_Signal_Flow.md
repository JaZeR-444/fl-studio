# UI Map And Signal Flow: Fruity Keyboard Controller

## UI Tour
The interface is centered around two main mapping graphs. [SRC: IL-MAN]

### 1. The Output Selectors
- **Note**: Tracks the pitch of the incoming MIDI data.
- **Velocity**: Tracks the intensity/hardness of the incoming MIDI data.

### 2. The Mapping Graphs
- **The Graph Window**: A visual editor where you define the relationship between MIDI input (Horizontal) and automation output (Vertical).
- **Preset Buttons**: Quick access to linear, stepped, or inverted curves.

### 3. The Slew Engine (The "Smoothing")
- **Attack**: How long it takes the automation to "reach" the target value of a new note.
- **Release**: How long it takes to "slide back" or transition when a note is released.

### 4. Monitoring
- **Output Meter**: A vertical bar showing the real-time data being broadcast (0.0 to 1.0).

## Signal Flow
1. **MIDI Trigger**: You play a note in the Keyboard Controller's Piano Roll.
2. **Note Identification**: The engine looks at the pitch (e.g., C5) and the velocity (e.g., 100).
3. **Graph Lookup**: The engine checks the **Note Map** to see what value C5 represents (e.g., 0.5).
4. **Slew Processing**: The value transitions from the previous note's value to 0.5 based on the **Attack** time.
5. **Output Broadcast**: The resulting value is sent to any parameter linked via "Link to controller."

## Things Beginners Misunderstand
- **"It's not working"**: You must put notes into the **Keyboard Controller's** specific Piano Roll channel. It cannot "hear" the notes you play on your Serum or Harmless channel unless they are layered.
- **Velocity vs. Note**: These are two independent signals. You can link one knob to the pitch and a different knob to the pressure.
- **Polyphony**: Keyboard Controller is monophonic in its output logic. If you play a chord, it typically tracks only the **highest** note or the **most recent** one.
