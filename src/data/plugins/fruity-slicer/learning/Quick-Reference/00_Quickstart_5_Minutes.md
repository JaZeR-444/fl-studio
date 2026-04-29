# Fruity Slicer: Quickstart (5 Minutes)

## Goal
Chop your first loop and create a new pattern in under 5 minutes.

[SRC: IL-MAN + REPUTABLE]

---

## 5-Minute Workflow

### Step 1: Load Loop (30 seconds)
1. **Drag audio file** from browser into empty Channel Rack slot
2. FL Studio asks: "Open in Slicer or Audio Clip?"
3. Select **"Fruity Slicer"**
4. Slicer opens with your loop loaded

**Alternative:** Right-click Channel Rack → Insert → Fruity Slicer → Click "Add" → Browse to file

---

### Step 2: Auto-Detect Slices (30 seconds)
1. Click **"Auto"** button (bottom-left)
2. Slicer analyzes waveform, places yellow slice markers
3. **Check visually:** Do markers align with kick/snare hits?
   - **YES →** Proceed to Step 3
   - **NO →** Adjust Threshold knob, click Auto again

**Threshold Guide:**
- **Too many slices?** Increase Threshold to 70%
- **Too few slices?** Decrease Threshold to 30%

---

### Step 3: Preview Slices (1 minute)
1. Click on individual **yellow slice markers**
2. Press **Spacebar** to preview each slice
3. **Listen:** Does each slice capture what you want?
4. **Fix if needed:**
   - Delete bad slices: Right-click marker → Delete
   - Add missing slices: Double-click waveform where slice should be

---

### Step 4: Create MIDI Pattern (2 minutes)
1. Right-click **Slicer icon** in Channel Rack
2. Select **"Piano Roll"**
3. Piano Roll opens with slices mapped to keys (starting at C5)
4. **Draw notes** to trigger slices
   - Each slice = one MIDI key (C5, C#5, D5, etc.)
   - Draw pattern by clicking in Piano Roll grid

**Quick Pattern Ideas:**
- **Boom-Bap:** Kick on 1 and 3, snare on 2 and 4
- **Trap:** Kick on 1, snare on 3, hi-hats on every 1/16th
- **Glitch:** Rapid-fire notes (create stutter effect)

---

### Step 5: Play and Adjust (1 minute)
1. Press **Spacebar** (or F5) to play pattern
2. **Listen:** Does it sound good?
3. **Adjust:**
   - **Clicky?** Increase Crossfade knob to 15-20 ms
   - **Wrong tempo?** Adjust Time Stretch knob
   - **Wrong pitch?** Adjust Pitch knob

**Done!** You've chopped your first loop.

---

## Common First-Time Issues

### Issue 1: "Can't hear anything"
**Fix:** Check mixer track volume, ensure Slicer assigned to MIDI channel

### Issue 2: "Slices are clicky/harsh"
**Fix:** Increase Crossfade to 10-20 ms

### Issue 3: "Pattern plays original loop, not my MIDI"
**Fix:** Ensure Mode is set to "Sliced" (not Layered)

---

## Next Steps

**For Beginners:**
- Experiment with Threshold (create different slice variations)
- Try "Dump to Piano Roll" (auto-creates pattern from original timing)
- Load different loops (drum breaks, vocal chops, melodic samples)

**For Intermediate:**
- Route individual slices to separate mixer tracks
- Apply different FX to each slice (reverb, delay, distortion)
- Automate Time Stretch for build-ups

**For Advanced:**
- Combine multiple Slicer instances (layer different loops)
- Use Slicer as glitch/stutter FX (extreme settings)
- Export slices as individual audio files (sample library creation)

---

**Version:** 1.0  
**Last Updated:** 2026-02-03  
**Coverage:** Complete
