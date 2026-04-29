# Core Techniques And Best Practices: Fruity Formula Controller

## 1. The "Macro Scaling" Trick
Link three different VST parameters to the same Formula Controller.
- **Technique**: Use the formula `a * b`. Use Knob A as your master MIDI knob, and Knob B as a "depth" control for each instance.
- **Benefit**: You can control how much influence your MIDI knob has on each parameter individually.

## 2. Rhythmic Quantization
Turning a smooth LFO into a "stepped" 8-bit style modulation.
- **Technique**: Formula: `Round(a * 8) / 8`.
- **Benefit**: This quantizes the input into 8 discrete steps. Perfect for "robotic" pitch shifts or lo-fi filter sweeps.

## 3. The "Probability" Gate
Allowing an effect to turn on only sometimes.
- **Technique**: Formula: `IfG(a, Rand(), 1, 0)`.
- **Benefit**: If Knob A is at 0.1, the effect has a 10% chance of triggering. If A is at 0.9, it has a 90% chance. Great for "glitchy" psychedelic R&B.

## 4. Tension-Based Bouncing
Creating a "heartbeat" rhythm.
- **Technique**: Formula: `Abs(Sin(SongTime * Pi))^a`.
- **Benefit**: Knob A now controls the "tension" of the curve. At low values, it's a smooth bounce; at high values, it's a sharp "thump."

## 5. Mono-Check Logic
- **Protocol**: If using Formula Controller to drive Stereo Pan, use a formula that never hits Hard Left or Hard Right to avoid ear fatigue.
- **Fix**: `0.25 + (a * 0.5)`—this keeps the output between 0.25 and 0.75, ensuring the sound stays somewhat centered.

## Common Pitfalls + Fixes
| Pitfall | The Fix |
| :--- | :--- |
| **"Output stays at 1.0"** | Your math result is > 1. Use `Min(1, result)` or divide your values. |
| **"LFO is too fast"** | `Sin(SongTime / 4 * Pi)`. Dividing `SongTime` slows the period. |
| **"Equation error"** | Check for missing parentheses `()` or division by zero `/0`. |
