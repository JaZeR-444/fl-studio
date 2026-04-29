# UI Map And Signal Flow: Fruity Love Philter

## UI Tour
The interface is dense and relies heavily on tab switching. [SRC: IL-MAN]

### 1. The Unit Tabs (Top)
- **1-8**: Selects the active filter unit. Each is a full duplicate of the controls below.
- **Enabled (LED)**: Must be on for the unit to process audio.

### 2. The Modulation Engine (The Centerpiece)
- **Target Tabs**: Choose what you want to move: **Vol** (Volume), **Pan**, **Cut** (Cutoff), **Res** (Resonance).
- **IES Sub-Tabs**: 
  - **Env**: The standard ADSR/Graphic Envelope.
  - **LFO**: A repeating oscillator.
  - **Map**: Keyboard mapping (MIDI note to value).

### 3. The Filter Controls (Right)
- **Type**: Selector for filter algorithms (Mango, Vanilla, etc.).
- **Cut/Res Knobs**: Master offsets for the current unit.
- **Drive/Waveshaper**: Built-in distortion stage.

### 4. The Routing (Bottom Right)
- **Next**: Sends the output of this unit to the next unit (Serial).
- **Out**: Sends the output of this unit to the plugin's final output (Parallel).

## Signal Flow
1. **Input**: Audio enters Unit 1.
2. **Pre-Filter Waveshaper**: (If active) the sound is distorted before filtering.
3. **Filter Unit**: The specific filter algorithm is applied.
4. **Modulation Summing**: The Envelope, LFO, and Map values are summed to move the knobs.
5. **Post-Filter Waveshaper**: (If active) final saturation.
6. **Routing Decision**: 
   - If **Next** is active: Unit 1 -> Unit 2.
   - If **Out** is active: Unit 1 -> Output Mix.
7. **Final Summing**: All units routed to "Out" are mixed together.

## Things Beginners Misunderstand
- **"Why is there no sound?"**: Check the **Routing**. If Unit 1 is set to "Next" but Unit 2 is disabled, the sound stops at Unit 1.
- **"The filter isn't moving"**: You must enable the **Freeze** or **LED** in the envelope editor for the modulation to take effect.
- **Global Knobs**: The large Cut/Res knobs on the main UI act as "Multipliers" for whatever you've drawn in the envelope.
