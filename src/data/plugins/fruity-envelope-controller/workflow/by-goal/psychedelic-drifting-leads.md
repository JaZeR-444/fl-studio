# Psychedelic Drifting Leads Workflow

## Goal
Make a simple synth lead sound "trippy" and evolving using generative modulation.

## Steps
1. **The Target**: Open any melodic synth (e.g., Fruity DX10).
2. **Setup Articulator 1 (Random)**:
   - In Envelope Controller, go to the **RND** tab.
   - Draw a level line at 50%.
3. **Setup Articulator 2 (Slow LFO)**:
   - In Envelope Controller, select Articulator 2 -> **LFO** tab.
   - Set speed to 1 bar.
4. **Linking**:
   - Link Synth **Cutoff** to Articulator 1.
   - Link Synth **Fine Pitch** to Articulator 2.
5. **The "Cool" Drift**:
   - Set Articulator 2 **Amount** to only **2%**.
   - This creates a slow, "drunken" pitch drift that mimics old psychedelic hardware.
6. **The Random Pop**:
   - Set Articulator 1 **Smoothing** to 100ms.
   - This makes the filter cutoff "float" randomly per note hit.

## Result
A lead that feels organic, unpredictable, and perfectly suited for psychedelic rap or R&B.
