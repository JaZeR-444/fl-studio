# UI Map And Signal Flow: FL Slayer

## UI Tour
FL Slayer's interface is divided into the modeling engine, the amp section, and the effects rack. [SRC: IL-MAN]

### 1. The Modeling Engine (The "String")
- **Playing Mode**: None, Autochords, Powerchords, Strum, SoloFixed, SoloDynamic.
- **Harmonic**: Changes the virtual pickup position. Higher = Brighter/Twangy.
- **Damping**: Simulates palm-muting. Higher = Shorter sustain.
- **Strum Speed**: Controls how fast notes in a chord are sequentially triggered.

### 2. The Amp Section (The "Dirt")
- **Preamp**: The initial gain stage.
- **Drive**: The amount of saturation/distortion.
- **Presence**: High-frequency clarity at the amp stage.
- **Feedback**: Creates internal resonant feedback (use with caution).

### 3. Cabinet & FX (The "Space")
- **Cabinet Selector**: 8 different speaker models (Dry to Heavy).
- **Stomp Boxes**: Wah, Phaser, Flanger, Chorus, Tremolo.
- **Mix**: Final output level.

## Signal Flow
1. **MIDI Input**: Pitch and Velocity determine the note.
2. **String Model**: The virtual string vibrates based on **Harmonic** and **Damping**.
3. **Strummer**: If in a chord mode, the notes are spread in time.
4. **Preamp**: The modeling signal is amplified and distorted.
5. **Cabinet**: The signal is filtered through a virtual speaker response.
6. **Effects**: The signal passes through the selected stomp-box.
7. **Output**: Final signal is routed to the mixer.

## Things Beginners Misunderstand
- **"It sounds like a toy"**: This is often because the **Cabinet** is set to "None" or "Dry." Without a cabinet, a distorted guitar sounds like a buzzing bee. Always select a Cabinet (1-8).
- **Pitch Bends**: FL Slayer uses a unique "Double Pitch Bend" logic for slides. Check your MIDI settings if your slides sound choppy.
- **Velocity to Damping**: By default, how hard you hit a key often controls the **Damping** (Muting). Soft = Muted; Hard = Open.
