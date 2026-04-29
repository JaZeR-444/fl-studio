# Core Techniques And Best Practices: FPC

## 1. The "Ghost Note" Snare
- **Technique**: Drag two snare samples onto Pad 2. 
- **Layer 1**: A quiet, "tappy" snare hit. Set Velocity range to 0-80.
- **Layer 2**: A loud, aggressive "crack." Set Velocity range to 81-127.
- **Move**: In the Piano Roll, draw low-velocity notes between your main snare hits.
- **Vibe**: Adds instant Boom-Bap realism and "pocket" to your drums.

## 2. Perfect Hi-Hat Choking
- **Technique**: Use the **Cut / Cut By** fields.
- **Move**: Set your Closed Hat (Pad 4) to Cut: 1 and Cut By: 1. Set your Open Hat (Pad 3) to Cut: 1 and Cut By: 1.
- **Listen For**: The Open Hat cutting off the moment the Closed Hat is played, just like a real drummer's pedal work.

## 3. Custom Layer Panning
- **Technique**: You can pan samples *within* a single pad.
- **Move**: Load two different "shaker" samples onto one pad. Pan Layer 1 50% Left and Layer 2 50% Right.
- **Result**: A massive, wide percussive hit from a single MIDI note.

## 4. Multi-Output Routing
- **Technique**: Don't mix your whole kit on one track.
- **Move**: Set FPC to Mixer Track 10. Set the Kick pad Output to 0 (Track 10). Set the Snare pad Output to 1 (Track 11). Set the Hats pad Output to 2 (Track 12).
- **Benefit**: You can now add a unique Delay to your hats and a unique Saturation to your snare.

## 5. Humanize via Randomization
- **Protocol**: If your drums sound too mechanical.
- **Fix**: Use the Piano Roll's **Alt+R (Randomize)** tool. Randomize the **Velocity** by 10% and the **Start Time** by a tiny fraction.
- **Verification**: FPC will respond to these micro-changes by triggering different layers or slightly shifting the groove. [SRC: REPUTABLE]

## Common Pitfalls + Fixes
| Pitfall | The Fix |
| :--- | :--- |
| **Silent Pads** | Ensure the "Volume" slider for the individual sample layer is turned up. |
| **Overlap Noise** | Your "Release" in the ADSR envelope is too long. Turn it down to avoid a "muddy" kit. |
| **Controller Mismatch** | Use the "Map notes for entire bank" macro to resync your physical pads. |
