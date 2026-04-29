# Core Techniques And Best Practices: Fruity Limiter

## 1. The "Transparent" Peak Shave
Instead of one heavy limiter, use two Fruity Limiters in series.
- **Technique**: Set the first one to shave off only 1-2dB of the loudest peaks. Set the second one to catch the rest.
- **Benefit**: This results in fewer audible artifacts and a more natural sound.

## 2. Rhythmic Sidechain Ducking
The industry standard for EDM and modern Trap.
- **Technique**: Set **Sidechain** to the Kick track. Set **Ratio** to maximum. Set **Attack** to 0ms. Adjust **Release** until the sound "breathes" back in time with the next beat.
- **Listen For**: The pumping movement that makes the kick drum feel massive.

## 3. Vocal "Air" Preservation
Avoid over-compressing the high-end sibilance.
- **Technique**: Use a **Slow Attack** (~15ms) in the COMP tab.
- **Benefit**: This allows the "S" and "T" sounds to pass through naturally before the compressor clamps down on the main body of the vocal.

## 4. Parallel "New York" Compression
Add weight to drums without losing the snap.
- **Technique**: Set extreme compression (High ratio, low threshold). Then, use the plugin's **Mix** knob (in the Wrapper) to blend it 50/50 with the dry signal.
- **Listen For**: A "thicker" drum sound that still has the original punch.

## 5. Visual Gain Staging
- **Protocol**: Watch the grey vs. purple waveforms.
- **Fix**: If the purple line is significantly lower than the grey line, you are losing too much energy. Raise the **Gain** knob to compensate for the reduction. [SRC: REPUTABLE]

## Common Pitfalls + Fixes
| Pitfall | The Fix |
| :--- | :--- |
| **"Pumping" Master** | Your Master Limiter release is too fast. Increase the **Release** in the LIMIT tab. |
| **Dull Snare** | Increase the **Attack** time in the COMP tab. |
| **Distorted Bass** | Increase the **Release** time in the LIMIT tab so the limiter doesn't follow the bass waves. |
