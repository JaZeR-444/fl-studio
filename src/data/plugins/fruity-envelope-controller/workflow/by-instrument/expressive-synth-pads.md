# Dynamic Synth Pad Workflow

## Goal
Create a synth pad that automatically gets brighter as you play higher notes on the keyboard.

## Steps
1. **Insert Envelope Controller**: Load it alongside your synth (e.g., Sytrus).
2. **Setup Keyboard Mapping**:
   - Select **Articulator 1**.
   - Go to the **KBD** (Keyboard) tab.
   - Draw a line that starts low on the left (low notes) and rises to the right (high notes).
3. **Link to Filter**:
   - Go to your Synth's **Filter Cutoff**.
   - Right-click -> **Link to controller**.
   - Select **Articulator 1**.
4. **Define the Base**:
   - In Envelope Controller, set the **Base** knob to 30%. This is the "minimum" brightness.
   - Set the **Amount** to 70%.
5. **Smooth the Transition**:
   - Set **Smoothing** to 50ms so the filter doesn't "jump" too fast if you play a large chord.

## Result
A musical, responsive synth pad that behaves like a physical instrument—higher energy notes are naturally brighter.
