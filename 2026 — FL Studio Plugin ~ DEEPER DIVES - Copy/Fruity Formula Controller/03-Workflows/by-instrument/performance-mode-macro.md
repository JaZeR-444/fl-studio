# Workflow: Performance Mode Macro (Multi-Control Hub)

*Goal: Link one MIDI knob to multiple effects, but scale them differently for a more "expensive" performance feel.*

## 🎛️ Routing Context
- **Setup**: One instance of Fruity Formula Controller.
- **Inputs**: Knob A linked to your physical MIDI controller knob.

## 🚶 Step-by-Step Setup
1. **The Formula**: Write `a` into the formula box and click **Compile**. (This is a 1:1 direct pass-through for now).
2. **The First Link (Filter)**: Right-click your synth's Filter Cutoff -> **Link to controller**. Select "Formula Controller - Output". Use the mapping formula: `Input` (1:1).
3. **The Second Link (Reverb)**: Right-click your Reverb Mix -> **Link to controller**. Select "Formula Controller - Output". Use the mapping formula: `Log(1+9*Input)/2.3`.
   - *Result*: As you turn Knob A, the filter opens linearly, but the reverb swells in naturally (logarithmically).
4. **The Third Link (Inverted Dry)**: Right-click your Dry volume -> **Link to controller**. Use mapping formula: `1-Input`.
   - *Result*: As the effect and filter go up, the dry signal automatically fades out.
5. **Recording**: Press **Record** in FL Studio. Move your MIDI knob. FL Studio will record all three parameter movements perfectly synchronized into one clip.

## 🔄 Variations
- **The "High-Energy" Macro**: Use `Input^2` for the filter so it stays dark for most of the knob turn, then "bursts" open at the very end.
- **The "Glitch" Macro**: Add `+ 0.05 * Rand() * Input` to the mapping formula to add subtle "jitter" only when the knob is turned up.

## ⚠️ Pitfalls & Fixes
- **Problem**: Parameters jump suddenly.
- **Fix**: Check the "Smoothing" settings in the **Link to controller** window.
