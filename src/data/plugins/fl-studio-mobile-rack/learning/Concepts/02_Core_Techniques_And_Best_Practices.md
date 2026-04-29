# Core Techniques And Best Practices: FL Studio Mobile Rack

## 1. The "Perfect" Synth Chain
- **Technique**: Start with **MiniSynth**. Follow with **Chorus**, then **Tape Delay**, and finally **Reverb**.
- **Move**: Add the **Leveller** at the very bottom.
- **Benefit**: This mimics a high-end hardware synth workflow where the final level is stabilized after all spatial effects.

## 2. Rhythmic Sidechain Simulation
- **Technique**: Use the **Autoduck** module.
- **Move**: Set the curve to "Beat" or "1/2 Beat."
- **Goal**: To get that modern Trap "pumping" volume effect on your desktop melodic loops without complex sidechain routing.

## 3. "Lo-Fi" Melodic Treatment
- **Technique**: Add **Wow & Flutter** followed by **Crusher**.
- **Move**: Set Wow to a slow speed (0.2Hz) and Flutter to a fast, low depth. Increase Crusher until you hear digital artifacts.
- **Listen For**: A "warped vinyl" sound that makes clean VSTs sound like old samples.

## 4. Vocal "Talking" Textures
- **Technique**: Add the **Vox Filter** module to a vocal track.
- **Move**: Automate the "Vowel" or "Formant" slider using a desktop Automation Clip.
- **Result**: A rhythmic "talking" effect that is unique to the mobile engine's algorithm.

## 5. Mono-Check Rules
- **Protocol**: When using the **Stereoizer** or **Spacer** modules.
- **Fix**: Check the master mono. 
- **Move**: Use the **Leveller** module in its "Mono" mode if the low end is losing punch after spatial processing. [SRC: MOBILE-MAN]

## Common Pitfalls + Fixes
| Pitfall | The Fix |
| :--- | :--- |
| **Silent Rack** | Ensure no module in the chain has its "Mix" or "Vol" at 0%. |
| **Harsh Distortion** | The **Leveller** can be aggressive. Lower the "Input" or "Ratio" settings. |
| **Muddy Reverb** | Ensure Reverb is the *last* module in the chain, after any distortion or EQ. |
