# Interface Design Rules

## Rule 1: Group by Function
- Always use **Bevels** to group related controls (e.g., all ADSR sliders should be in one box).
- This reduces cognitive load during a session.

## Rule 2: Consistent Coloring
- **Blue/Cyan:** Pitch or Time based controls.
- **Red/Orange:** Distortion or Dynamics.
- **Green/Yellow:** Volume or Filter Cutoff.
Consistency across different project surfaces builds muscle memory.

## Rule 3: The "Safe Range" Rule
- Never map a Control Surface knob to a full 0-100% range if the target parameter is destructive at extreme values.
- Use mapping formulas (e.g., `Input * 0.7 + 0.1`) to keep the control within a "sweet spot".

## Rule 4: Labeling
- Use high-contrast labels.
- Black text on a light bevel or White text on a dark background.
- Avoid cursive or overly stylized fonts for technical controls.
