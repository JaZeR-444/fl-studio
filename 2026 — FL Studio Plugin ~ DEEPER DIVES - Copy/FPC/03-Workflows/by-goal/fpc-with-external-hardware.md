# Goal Workflow: FPC with External Hardware (The MPC Feel)

*Goal: Mapping your physical pad controller (Akai MPC, MPD, Launchpad) to the FPC interface.*

## 🎛️ Routing Context
- **Hardware**: USB MIDI Pad Controller.
- **Protocol**: MIDI note matching.

## 🚶 Step-by-Step Setup
1. **The Fast Link**:
   - Click the **Down Arrow** next to the MIDI note display at the top of FPC.
   - Select **Map notes for entire bank**.
2. **The Tap**:
   - Hit **Pad 1** on your hardware. FPC will jump to Pad 1.
   - Hit **Pad 2** on your hardware. FPC will jump to Pad 2.
   - Continue until all 16 pads are mapped.
3. **Velocity Response**:
   - If your pads feel "stiff," go to the **Settings** tab in FPC.
   - Adjust the **Vel Curve** slider.
   - *Logic*: This scales the incoming MIDI pressure so that you don't have to hit your hardware pads too hard to trigger the loud samples.
4. **Layout Check**:
   - Ensure Bank A on your hardware matches Bank A in FPC.
5. **The Performance**:
   - Press **Record** in FL Studio.
   - Play your drums "live" into the Piano Roll.
   - *Result*: The MIDI notes are captured with their original timing and velocity, giving you a professional "unquantized" Hip-Hop groove.

## 🔄 Variations
- **The "Flip"**: Right-click a pad and select "Map to controller" if you only want to change a single pad's MIDI note.
- **The "Notes Only"**: Use FPC to trigger internal FL Studio generators by linking the FPC pads to external instruments via Patcher.

## ⚠️ Pitfalls & Fixes
- **Problem**: Pads are triggering the wrong sound.
- **Fix**: Re-run the "Map notes for entire bank" macro. Ensure your hardware is not sending data on multiple MIDI channels.
