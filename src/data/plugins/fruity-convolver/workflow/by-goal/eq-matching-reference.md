# EQ Matching with Fruity Convolver Workflow

## Goal
Capture the frequency response of a piece of gear, a room, or a reference track and apply it to your own audio.

## Steps
1. **Preparation**:
   - You need a source of **White Noise**.
   - You need the "Target" (the reference track or hardware).
2. **Recording the Impulse**:
   - Play the White Noise through your target (e.g., an old tube radio or a specific EQ preset).
   - Record the output as a `.wav` file.
3. **Loading into Convolver**:
   - Open **Fruity Convolver**.
   - Drag your recorded "Target Noise" into the plugin's waveform display.
4. **Creating the Filter**:
   - Click the **Wrench icon** -> **Impulse** -> **Match Spectrum**.
   - Convolver will analyze the difference between pure white noise and your target, creating a "correction filter".
5. **Apply**:
   - Now play your vocal or synth through Convolver (100% Wet).
   - It will now have the exact tonal balance of your reference.

## Pro Tip
Use this to "Clone" the sound of expensive analog EQs or unique lo-fi speakers.
