# Creating Complex XY Controls

**Goal:** Control Filter and Reverb simultaneously for transitions.

### Setup
1. Add an **XY Pad** to your surface.
2. Rename it "Transition Pad".

### Mapping X
- Right-click your Synth's **Filter Cutoff**.
- Link to controller > Select "Control Surface - Transition Pad (X)".

### Mapping Y
- Right-click your Reverb's **Wet Level**.
- Link to controller > Select "Control Surface - Transition Pad (Y)".

### Calibration
- If the Reverb is too loud, change the mapping formula for Y to `Input * 0.4`.
- Now, moving the puck diagonally creates a rising filter that gradually gets wetter.
