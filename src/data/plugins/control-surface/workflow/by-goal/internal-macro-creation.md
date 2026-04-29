# Goal Workflow: Internal Macro Creation (The One-Knob Mix)

*Goal: Creating a single "Macro" knob that controls multiple effects for a transition.*

## 🎛️ Routing Context
- **Target 1**: Fruity Love Philter (Cutoff).
- **Target 2**: Fruity Reverb 2 (Wet Level).
- **Target 3**: Fruity Delay 3 (Feedback).

## 🚶 Step-by-Step Setup
1. **The Controller**:
   - Open **Control Surface**. Add a giant "Simple" knob. 
   - Label it **WASH OUT**.
2. **Linking Target 1 (Filter)**:
   - Right-click Love Philter Cutoff -> **Link to Controller**.
   - Move the "WASH OUT" knob. Click Accept.
3. **Linking Target 2 (Reverb)**:
   - Right-click Reverb 2 Wet -> **Link to Controller**.
   - **Crucial**: Ensure "Remove Conflicts" is **OFF**.
   - Move the "WASH OUT" knob. Click Accept.
4. **Linking Target 3 (Delay)**:
   - Right-click Delay 3 Feedback -> **Link to Controller**.
   - Again, "Remove Conflicts" must be **OFF**.
   - Move the "WASH OUT" knob. Click Accept.
5. **The Performance**:
   - Turn your "WASH OUT" knob. 
   - *Result*: As you turn it up, the filter closes, the reverb gets wetter, and the delay feeds back. One movement, three results.

## 🔄 Variations
- **The "Crossfader"**: Use the formula `1-Input` for Target A and `Input` for Target B to crossfade between two instruments with one slider.
- **The "Momentary Glitch"**: Link a **Button** (Momentary mode) to a Gross Beat slot for rhythmic one-shot effects.

## ⚠️ Pitfalls & Fixes
- **Problem**: When I link the second thing, the first thing stops working.
- **Fix**: You forgot to turn off **Remove Conflicts** in the Link to Controller window.
