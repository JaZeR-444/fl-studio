# Workflow: Automating VST Parameters (The MIDI Bridge)

*Goal: Controlling "hidden" or hard-to-reach VST parameters using MIDI Out as an automation hub.*

## Vibe Mapping
- **Psychedelic:** ⭐⭐⭐⭐⭐ (Primary)
- **Upbeat:** ⭐⭐⭐⭐
- **Vibey:** ⭐⭐⭐

## 🚶 Step-by-Step Setup
1. **The Target (VST):**
   - Load your VST (e.g., Massive, Sylenth, Serum).
   - Click the gear icon (top left). In the "Settings" tab, look for **Input Port**. Set it to a unique number (e.g., **Port 20**).
2. **The Controller (MIDI Out):**
   - Load **MIDI Out**.
   - Set its **Port** to **20**.
   - Now, notes in MIDI Out will play the VST.
3. **The Map (CC Assignment):**
   - Research your VST's "MIDI Implementation Chart" (usually at the back of its manual).
   - *Example:* If CC #11 controls the "Brightness" in your VST.
4. **The Configure:**
   - In MIDI Out, Right-Click Knob 1. Select **Configure**.
   - Name it "BRIGHTNESS."
   - Set **Controller #** to **11**.
   - Click OK.
5. **The Automation:**
   - Right-click your new "BRIGHTNESS" knob and select **Create automation clip**.
   - *Result:* You are now automating that "hidden" parameter through the MIDI Out bridge.

## 🔄 Variations
- **The "Macro" Hub:** Map all 9 knobs on Page 1 to the most important parameters of your VST. You now have a "Custom Dashboard" for that specific plugin.
- **The "Patcher" Setup:** Place both the VST and MIDI Out inside a **Patcher** instance. This allows you to save the whole mapping as one single preset.

## ⚠️ Pitfalls & Fixes
- **Problem:** Knob is moving but nothing is happening.
- **Fix:** Ensure the VST is actually "listening" to MIDI CC. Some VSTs require you to enable "MIDI Learn" or "External MIDI Control" in their internal options.
- **Problem:** Port conflicts.
- **Fix:** Never use the same Input Port for two different VSTs unless you want them to play the exact same notes at the same time.

## 🎚️ Automation Ideas
- **Texture Morph:** Automate three different CC knobs at once to morph a sound from a pluck to a pad.
- **Vibrato Pulse:** Map a knob to **CC 1** (Mod Wheel) and draw a "pulsing" automation clip for rhythmic vibrato.
