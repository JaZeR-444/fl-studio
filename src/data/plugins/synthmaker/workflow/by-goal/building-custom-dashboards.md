# Goal: Building Custom Dashboards

## Goal Statement
Create a visual interface within SynthMaker to control external hardware synths or complex FL Studio parameters via MIDI CC.

## Step-by-Step Setup
1. **The Canvas:** Start a new empty SynthMaker project.
2. **The Control:** Drag a "Knob" primitive into the schematic.
3. **The Logic:**
   - Add a "MIDI CC Out" module.
   - Connect the Knob output to the "Value" input of the MIDI CC module.
   - Set the CC Number (e.g., 74 for Filter Cutoff).
   - Set the MIDI Channel to 1.
4. **The Visual:** 
   - Right-click the knob and choose "Properties."
   - Import a custom bitmap image for the knob background.
5. **Testing:**
   - In FL Studio, set the SynthMaker output MIDI port to 1.
   - Link your hardware synth or another plugin to MIDI port 1.
   - Turn the knob in SynthMaker—the other plugin should react.

## Benefits
- You can design an interface that looks exactly like your favorite hardware.
- Group multiple parameters under a single "Macro" knob.
- Add visualizers (Scopes) to parameters that don't normally have them.

## Variations
- **Variation 1 (The Macro):** Connect one knob to 5 different MIDI CC Out modules to control an entire effects chain at once.
- **Variation 2 (The Joystick):** Replace the knob with a "JoyStick" primitive to control your synth using an Xbox controller.
