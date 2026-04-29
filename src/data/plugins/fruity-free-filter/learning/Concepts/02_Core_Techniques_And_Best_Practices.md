# Core Techniques And Best Practices: Fruity Free Filter

## 1. The "Sub-Protect" Sweep
Before you automate a filter sweep on a full mix or melodic bus:
- **Technique**: Place a High-Pass Filter *before* the Free Filter at 300Hz.
- **Why**: This protects your sub-bass from the phase shifting and resonance of the sweep, keeping your low end rock-solid while the mids/highs move.

## 2. Manual Notch Phaser
Create a phaser effect using the Notch mode.
- **Technique**: Select **Notch**. Set **Q** to 70%. Automate **Freq** back and forth with a slow LFO.
- **Listen For**: A smooth, subtle "hollow" sweep.

## 3. The "Telephone" Vocal
The industry standard for lo-fi vocals.
- **Technique**: Select **Band Pass**. Set **Freq** to roughly 2000Hz. Set **Q** to 40%.
- **Mix Move**: Add a bit of Distortion after the filter to complete the "radio" effect.

## 4. Acid Squelch
Turning a boring bass into a screaming lead.
- **Technique**: Select **Low Pass**. Set **Q** to 90% (near self-oscillation). Automate **Freq** rapidly.
- **Listen For**: The characteristic "ow-ow" vowel sound of classic acid synths.

## 5. Parallel Air
Using the High Shelf mode for "shimmer."
- **Technique**: Select **High Shelf**. Set **Freq** to 8kHz. Boost **Gain** by 6dB.
- **Mix Move**: Set the plugin's mix level to 30%. This adds a gentle, non-linear brightness to the air.

## Common Pitfalls + Fixes
| Pitfall | The Fix |
| :--- | :--- |
| **Resonant Clipping** | High Q settings can add +12dB or more. Lower the **Gain** (if active) or the Mixer fader. |
| **Low End "Flapping"** | If sweeping a High Pass filter, the Q might create a bass boost right before the cut. Lower the **Q**. |
| **Mechanical Sound** | Don't use perfectly linear LFOs. Use Fruity Formula Controller to add a bit of randomness to the sweep. |
