# Designing an Analog Kick Workflow

## Goal
Synthesize a punchy, analog-style kick drum from scratch using DrumSynth Live.

## Steps
1. **Initialize**: Select a MIDI note (e.g., C5).
2. **The Fundamental (Osc 1)**:
   - Set **Osc 1** to ~55Hz (A1).
   - Set **Decay** to 40%.
3. **The Transient (Osc 2)**:
   - Set **Osc 2** to a higher frequency (~800Hz).
   - Set the **Osc 2 Decay** to be very fast (5-10%). This creates the "pop".
4. **Tone Shaping**:
   - Add **5% Noise** to give it some "air".
   - Use the **Filter** to cut everything above 2kHz to keep it sub-heavy.
5. **Expression**:
   - In the FL Studio Piano Roll, vary the velocities of your kick hits.
   - You should hear the "pop" (Osc 2) becoming more or less prominent based on how hard you hit the key.

## Pro Tip
You can layer DrumSynth Live with **Fruity Blood Overdrive** to turn this clean analog kick into a distorted Hardcore or Industrial kick.
