# Designing Complex Rhythmic Textures Workflow

## Goal
Use the multi-tap architecture of Delay Bank to turn a single snare hit or synth pluck into a complex 16th-note rhythmic pattern.

## Steps
1. **Bank 1 (The Foundation)**:
   - Set **Time** to `4:00` (1/4 note).
   - Set **Feedback** to 40%.
   - Pan: **Center**.
2. **Bank 2 (The Bounce)**:
   - Set **Time** to `2:00` (1/8 note).
   - Set **Filter** to **High-Pass**.
   - Pan: **Hard Left**.
3. **Bank 3 (The Ghost Note)**:
   - Set **Time** to `1:00` (1/16 note).
   - Set **Volume** low (20%).
   - Set **Filter** to **Low-Pass** (very dark).
   - Pan: **Hard Right**.
4. **The "Next" Routing (Serial)**:
   - On Bank 1, find the **Next** knob and set it to Bank 2.
   - Now, the 1/4 note repeats of Bank 1 are being sent INTO the 1/8 note delay of Bank 2.
5. **Final Polish**:
   - Use the **Global Wet** to blend this complex rhythmic cloud with your dry sound.

## Result
What was once a static hit is now a wide, moving, and rhythmically interesting sequence that fills the frequency spectrum.
