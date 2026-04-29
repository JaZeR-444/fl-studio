# Core Techniques And Best Practices: Frequency Shifter

## 1. The "Perfect" Widener
Create a massive stereo image that stays solid when checked in mono.
- **Technique**: Unlink L/R. Set Left to +2Hz. Set Right to -2Hz.
- **Move**: Keep the Mix at 100%.
- **Why**: This creates a constantly shifting phase relationship between the ears that our brain interprets as "width," but the frequencies are so close that they don't sound out of tune.

## 2. Metallic Bass "Clang"
- **Technique**: Add Frequency Shifter to an 808 or Sub Bass.
- **Move**: Set Frequency to 150Hz. Set Mix to 15%.
- **Listen For**: A sharp, metallic "snap" on the attack of the bass.
- **Pro Tip**: Use a Peak Controller on the 808 to automate the Freq knob from 200Hz down to 0Hz rapidly.

## 3. The "Barberpole" Flanger
Create a flanging effect that sounds like it is rising forever.
- **Technique**: Set Frequency to a very low value (e.g., 0.5Hz). Turn **Feedback** up to 60%.
- **Move**: Set the direction to **UP**.
- **Result**: The phase relationship will cycle continuously, creating a "shepard-tone" style rise.

## 4. Tuning Drum Transients
- **Technique**: Put the shifter on a Snare that sounds too "loose" or "muddy."
- **Move**: Set direction to **UP**. Increase Freq to ~200Hz.
- **Goal**: Shifting the harmonics upward tightens the perceived pitch of the hit without changing the length of the sample.

## 5. Mono-Compatibility Verification
- **Protocol**: Always toggle the **Mono** button on your master when using unlinked L/R shifts.
- **Failure Mode**: If the shift is too large (e.g. 50Hz), the left and right will create a rhythmic "beating" in mono that sounds like a tremolo.
- **Fix**: Lower the Frequency of both channels until the beating stops or becomes slow and musical. [SRC: REPUTABLE]

## Common Pitfalls + Fixes
| Pitfall | The Fix |
| :--- | :--- |
| **Robotic Vocals** | Lower the **Mix** knob. Usually, 5-10% is all you need for "character." |
| **Harsh Ringing** | Lower the **Feedback** knob. Feedback loops in frequency shifters can be extremely resonant. |
| **Muddy Low End** | Use Frequency Shifter only on a **Parallel High-Pass** bus. Don't shift the fundamental sub-bass. |
