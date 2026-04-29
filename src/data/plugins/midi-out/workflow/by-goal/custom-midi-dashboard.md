# Workflow: Custom MIDI Dashboard (Personal UI)

*Goal: Designing a custom, labeled control surface within MIDI Out to manage a specific hardware unit or complex VST chain.*

## Vibe Mapping
- **Vibey:** ⭐⭐⭐⭐⭐
- **Upbeat:** ⭐⭐⭐⭐
- **Jazzy:** ⭐⭐⭐⭐

## 🚶 Step-by-Step Setup
1. **The Goal:** Choose one synth (Hardware or VST) that you use often.
2. **The Research:** Find its MIDI CC list. Pick the **9 most important controls** (e.g. Cutoff, Res, Attack, Release, FX Mix, etc.).
3. **The Layout (Page 1):**
   - Knob 1: "CUTOFF" (CC 74)
   - Knob 2: "RESO" (CC 71)
   - Knob 3: "DRIVE" (CC 13)
   - Knob 4: "ATTACK" (CC 73)
   - Knob 5: "RELEASE" (CC 72)
   - ...and so on.
4. **The Page Strategy:**
   - Use **Page 1** for "Performance Controls."
   - Use **Page 2** for "Effects."
   - Use **Page 3** for "Oscillator Tuning."
5. **The Save:**
   - Go to the Channel Options (small triangle) and select **Save preset as...**
   - Name it "DASHBOARD - [Instrument Name]."
   - *Result:* Next time you load this preset, all your labels and CC numbers are ready to go. No more looking at manuals!

## 🔄 Variations
- **The "Patcher" Integration:** Link these MIDI Out knobs to the Surface knobs in Patcher for a beautiful, custom graphical interface.
- **The "Global Remote":** Use MIDI Out to control FL Studio itself by linking the MIDI Out knobs to other FL parameters (using internal MIDI loopback software like loopMIDI).

## ⚠️ Pitfalls & Fixes
- **Problem:** Labels are too long.
- **Fix:** Use the **Short Name** field in the Configure window. It's limited but cleaner for the UI.
- **Problem:** Wrong Bank/Patch on load.
- **Fix:** Ensure the "Update on selection" button is OFF if you only want the knobs to load, not the program change.

## 🎚️ Automation Ideas
- **One-Clip Build:** Group all "Filter" and "FX" knobs from your dashboard into one single automation clip using the **Link to controller -> Link to same clip** trick.
- **Visual Performance:** Record a performance where you "tweak" the knobs on your custom dashboard while watching the target plugin move in sync.
