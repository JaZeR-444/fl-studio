# Workflow: XYZ Controller Link

Combining Keyboard Controller with Surface/XYZ Control.

1. **Setup**: You have a complex Patcher preset with an X/Y pad.
2. **Goal**: You want to jump to specific X/Y coordinates when you press a key.
3. **Execution**:
   - Use **Fruity Keyboard Controller**.
   - Map Note C5 to `0.5` (Center).
   - Map Note C#5 to `1.0` (Top Right).
   - Link the Keyboard Controller Note output to the X parameter of the pad.
   - Now, playing keys teleports your X/Y pad to specific "presets" instantly.
