# Workflow: Patcher Control

The Keyboard Controller is powerful inside Patcher.

1. **The Selector Switch**:
   - Map the Keyboard Controller to specific keys (C, D, E).
   - Link the output of the Keyboard Controller to a "Fruity Balance" gain knob on multiple signal paths.
   - **Result**: Hitting 'C' activates Synth A, Hitting 'D' activates Synth B.

2. **Key Tracking Filter**:
   - Link the Note output to a filter cutoff.
   - **Result**: Higher notes automatically sound brighter, lower notes sound darker. This mimics analog synth key tracking.

3. **Velocity Inversion**:
   - Use the velocity mapping curve.
   - Draw a reverse line (High velocity = Low output).
   - Link to attack time.
   - **Result**: Hard hits have fast attack, soft hits have slow attack.
