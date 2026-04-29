# UI Map And Signal Flow: FL Studio Mobile Rack

## UI Tour
The interface is streamlined for top-to-bottom processing within a single window. [SRC: IL-MAN]

### 1. The Rack Area (The Stack)
- **Module Headers**: Click to expand/collapse the UI of a specific module.
- **Enabled (LED)**: Toggle button to bypass individual stages in the chain.
- **The '+' Button**: Opens the module browser to add new effects or instruments.

### 2. Module Controls
- **Parameter Sliders**: Horizontal bars for adjusting the processing intensity.
- **Preset Selector**: Found in the top right of each module to load specific sounds.
- **Copy/Paste**: Allows you to move settings between different modules.

### 3. Management (The List)
- **Drag Handles**: Use the dots on the left of each module header to reorder the signal chain.
- **Delete (X)**: Removes the module from the rack.

### 4. Master Output
- **Output Fader**: Global volume control for the entire rack.

## Signal Flow
1. **Desktop Input**: Stereo audio from the Desktop Mixer Insert enters the plugin.
2. **Serial Processing**: Audio passes through **Module 1** (Top), then the output of Module 1 feeds into **Module 2**, and so on.
3. **Internal Mixing**: Levels are managed per module.
4. **Summing**: The processed signal is summed at the bottom.
5. **Desktop Output**: The final signal is sent back to the Desktop Mixer Track.

## Things Beginners Misunderstand
- **Instrument Hosting**: If you load an instrument (like MiniSynth) into the rack, it replaces or layers with the incoming audio. Usually, you use the rack for *either* an instrument chain *or* an effect chain.
- **The "Order" Matters**: If you put a Reverb module *before* a Distortion module, you will distort the reverb tail. For a cleaner sound, place Reverb at the bottom of the stack.
- **CPU Savings**: While generally efficient, stacking 16+ modules can still impact performance. Use the bypass LEDs to check which module is the heaviest.
