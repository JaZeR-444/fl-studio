# Goal Workflow: Creating Evolving Pads (Spectral Motion)

*Goal: Adding non-linear, liquid movement to a static pad or texture.*

## 🎛️ Routing Context
- **Routing**: Pad Synth -> EQUO -> Deep Reverb (LuxeVerb).
- **Mix Status**: 100% Wet.

## 🚶 Step-by-Step Setup
1. **The Four States**:
   - **Bank 1**: Draw a "Low Pass" slope (Right-side cut).
   - **Bank 2**: Draw a "Band Pass" peak in the mids (Hump).
   - **Bank 3**: Draw a "Comb" pattern (Multiple thin spikes).
   - **Bank 4**: Draw a "High Pass" slope (Left-side cut).
2. **Master Control**: Switch the selector to **Master**.
3. **The Morph**: Automate the **Morph knob** to sweep from 0 to 100%.
   - *Logic*: As the knob moves, EQUO will interpolate between all four shapes in sequence.
4. **Resonance Focus**: Set the **BW (Bandwidth)** knob to 30%. This makes the "spikes" in Bank 3 more audible and "whistly."
5. **Slow Evolution**: Set the automation clip to a 16-bar length. 
6. **Result**: The pad will sound like it is slowly morphing its DNA, shifting from dark to nasal to airy.

## 🔄 Variations
- **The "Pulse"**: Set the automation to a sharp 1/8 note "saw" shape to create a rhythmic filter effect.
- **The "Vibe Shift"**: Use Bank 1 for "Verse EQ" and Bank 2 for "Chorus EQ," then automate the switch during the transition.

## ⚠️ Pitfalls & Fixes
- **Problem**: Transitions sound "clicky."
- **Fix**: Ensure the **Smooth** button is active at the bottom of the plugin.
