# Workflow: Tempo Matching Samples (The BPM Bridge)

*Goal: Forcing any audio loop or sample—regardless of its original speed—to match your project tempo perfectly without changing its pitch.*

## Vibe Mapping
- **Upbeat:** ⭐⭐⭐⭐⭐ (Primary)
- **Vibey:** ⭐⭐⭐⭐
- **Moody:** ⭐⭐⭐⭐

## 🚶 Step-by-Step Setup
1. **The Grid Sync:**
   - Ensure your project tempo is set (e.g., 140 BPM).
   - Drag your sample (e.g., a 120 BPM drum loop) into Newtime.
2. **Algorithm Selection:**
   - If it's a drum loop, select **Slices**.
   - If it's a melody, select **Tones**.
3. **The Calculation:**
   - Look at the top bar. Newtime will usually detect the original tempo.
   - Click the **Time** knob and select **Project Tempo**.
   - *Result:* Newtime will automatically stretch the markers to fit the 140 BPM project grid.
4. **Fine-Tuning (Manual Warping):**
   - If the rhythm still feels slightly "off," zoom in.
   - Click and drag the white markers to line up perfectly with the vertical grid lines.
   - Hold **Shift** while dragging a marker to move it without moving neighboring markers (Lock Mode).
5. **The Export:**
   - Click the **Drag to Playlist** icon (the small paper/arrow icon) and drag the processed audio onto your Playlist.

## 🔄 Variations
- **The "Double Time":** Set the **Time** knob to **0.5x**. Your loop will now play twice as fast (useful for Trap/DnB).
- **The "Half Time":** Set the **Time** knob to **2.0x**. Your loop will now play at half-speed (the "Drake" effect).

## ⚠️ Pitfalls & Fixes
- **Problem:** Audio sounds "choppy" after stretching.
- **Fix:** Increase the **Marker Smoothing** knob to 20-30% to hide the slices.
- **Problem:** Transients sound dull.
- **Fix:** Switch from Tones back to **Slices** mode.

## 🎚️ Automation Ideas
- **Tempo Drift:** Automate the **Time** knob in the Playlist wrapper to slowly speed up a loop during a transition.
- **Rhythmic Stutter:** Manually place 4 markers very close together to create a "machine gun" rhythmic stutter effect.
