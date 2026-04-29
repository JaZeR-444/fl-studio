# UI/UX Design Rules: Control Surface (Pro Dashboards)

## 1. The "Signal Flow" Layout
- **Rule**: Arrange your controls from Left to Right according to signal flow.
- **Action**: Place "Gain" on the far left and "Master Limiter" on the far right.
- **Why**: This mimics hardware consoles and makes the dashboard intuitive to your brain during a fast session.

## 2. Contrast Mandate
- **Rule**: Use high-contrast colors for labels.
- **Goal**: Readability.
- **Move**: If the background is dark (Charcoal), use white or neon labels. If the background is light, use black labels. Never use gray on gray.

## 3. The "Muscle Memory" Factor
- **Rule**: Keep the same dashboard layout across all your project templates.
- **Action**: Always put "Kick Volume" in the top-left corner.
- **Result**: You will eventually be able to mix your low-end without even looking at the screen.

## 4. Range Limiting (External)
- **Rule**: Never link a knob directly if the full range (0-100%) is dangerous.
- **Action**: In the "Link to Controller" window, use a mapping formula like `0.2 + (Input * 0.5)`.
- **Goal**: This ensures that even if you crank your Control Surface knob to "Max," the actual internal plugin only goes to 70%, preventing ear-piercing volumes or crashes.
