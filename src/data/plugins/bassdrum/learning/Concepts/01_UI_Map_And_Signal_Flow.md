# UI Map And Signal Flow: BassDrum

## UI Tour
BassDrum's interface is categorized into three functional tabs. [SRC: IL-MAN]

### 1. BASE Tab (The "Fundamental")
- **Frequency (Start/End)**: Sets the pitch sweep range.
- **Pitch Env (Amount/Speed)**: Controls how fast the pitch drops from Start to End.
- **Amp Env (Decay)**: The length of the synthesized thump.

### 2. SAMPLE Tab (The "Transient")
- **Sample Selector**: Choose an internal noise burst or drag-and-drop your own click.
- **Offset**: Delays the sample start relative to the Base oscillator.
- **Filter**: High-pass or Low-pass controls for the sample layer only.

### 3. DRIVE Tab (The "Character")
- **Type**: Selects the distortion algorithm (Soft, Hard, Tube).
- **Amount**: Sets the saturation intensity.
- **Global Volume**: Final output gain.

## Signal Flow
1. **MIDI Trigger**: Note input triggers the engine.
2. **Base Generation**: The sine oscillator starts its pitch sweep.
3. **Sample Layer**: The noise/click layer is triggered (with optional offset).
4. **Mix Stage**: The Base and Sample layers are blended.
5. **Saturation**: The combined signal enters the **Drive** circuit.
6. **Master Filter**: A global filter shapes the final tone.
7. **Output**: The finalized kick leaves the plugin.

## Things Beginners Misunderstand
- **"It sounds too quiet"**: Check the **Drive** tab. Synthesized kicks often need saturation to reach the perceived volume of professional drum samples.
- **Pitch vs Freq**: The "Start" frequency determines the "Knock" (Chest punch), while the "End" frequency determines the "Thump" (Sub weight).
- **The Sample Layer**: If your kick sounds "muffled," you likely have the Sample layer volume too low. The Sample provides the "click" that helps the kick cut through small speakers.
