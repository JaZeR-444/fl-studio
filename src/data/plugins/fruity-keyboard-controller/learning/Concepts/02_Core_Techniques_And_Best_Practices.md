# Core Techniques And Best Practices: Fruity Keyboard Controller

## 1. The "Effect Piano"
Link the **Note** output to a Reverb's Wet/Dry mix.
- **Technique**: Map C5 to 0% and C6 to 100%. In your Piano Roll, play a low note for dry and a high note for a big wash.
- **Benefit**: You can "rhythmically play" the reverb into your track.

## 2. Velocity-Responsive Dirt
Link the **Velocity** output to a Distortion's Drive.
- **Technique**: Use a steep exponential curve in the Velocity Map.
- **Listen For**: The sound stays clean during quiet passages but "snarls" aggressively when you strike the keys hard.

## 3. Smooth Slew (The Glide)
Turn the **Attack** knob to ~200ms.
- **Technique**: Play two notes an octave apart.
- **Watch**: The linked knob will "slide" smoothly from one position to the next rather than snapping.
- **Use Case**: Creating smooth filter sweeps without drawing automation curves.

## 4. The MIDI "Toggle" Switch
Use two specific notes to turn an effect on and off.
- **Technique**: In the Note Map, set C5 to 0 and D5 to 1. Leave all other notes at 0.
- **Benefit**: In your Piano Roll, you can now "trigger" an effect with a single D5 note and "kill" it with a C5.

## 5. Mono-Check Logic
- **Protocol**: If using Keyboard Controller to drive Stereo Width, ensure your Note Map doesn't go below 0.2 to avoid complete phase cancellation.
- **Fix**: Right-click the Note Map and use the "Compress" function to keep the values in a safe range.

## Common Pitfalls + Fixes
| Pitfall | The Fix |
| :--- | :--- |
| **Knob is "jittery"** | Increase the **Attack** smoothing. |
| **Output is inverted** | Right-click the Graph and select "Invert." |
| **Not hearing synth** | Ensure you are Layering the Keyboard Controller with your actual Sound Generator. |
