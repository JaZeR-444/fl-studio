# Core Techniques And Best Practices: Fruity Love Philter

## 1. The "Ghost" Sidechain
Use Love Philter to create sidechain ducking without a kick drum.
- **Technique**: Select Unit 1. Go to the **Vol** tab -> **Env** sub-tab. Draw a curve that starts low and ends high. Set **Sync** to "Beat."
- **Listen For**: The sound "inhaling" on every beat.

## 2. Serial "Brickwall" Filtering
Fruity Free Filter is 12dB/octave. Love Philter can go much steeper.
- **Technique**: Set Unit 1 to Low Pass. Set Unit 2 to Low Pass. Route Unit 1 to "Next."
- **Benefit**: You now have a 24dB/octave filter. Stack more units for even steeper, more aggressive cuts.

## 3. Formant "Talking" Sweeps
Create a synthesizer that sounds like it's saying "A-E-I-O-U."
- **Technique**: Set Unit 1 to a **Peaking** filter with high Q. Set Unit 2 to another Peaking filter.
- **Move**: Modulate the Cutoff of both in opposite directions.
- **Listen For**: Human-like vowel resonances. [SRC: REPUTABLE]

## 4. Pattern Swapping via MIDI
Trigger different rhythmic gates using your Piano Roll.
- **Technique**: Change the **Pattern** selector (bottom left) to 1. Draw a gate. Change to 2. Draw a different gate.
- **Performance**: Use MIDI notes C5 and D5 to switch between them in real-time.

## 5. Low-End Protection Rules
- **Protocol**: When using the **Waveshaper** (distortion) in Love Philter, the low end can become unstable.
- **Fix**: Use Unit 1 as a dedicated Low-Pass at 200Hz (routed to Out). Use Unit 2 for your creative distortion and filtering (routed to Out). This keeps your sub-bass clean and separate from the "creative" processing.

## Common Pitfalls + Fixes
| Pitfall | The Fix |
| :--- | :--- |
| **Resonant Peaks** | The resonance can be much louder than the original signal. Use the internal **Waveshaper** as a limiter by flattening the top of the curve. |
| **Clicking Gates** | In the **Vol** envelope, add a tiny bit of "Attack" or curve to the sharp edges of your squares. |
| **Silent Units** | Verify that the unit is not set to "Next" if the following unit is off. |
