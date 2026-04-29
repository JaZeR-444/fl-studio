# Common Workflows: Autogun

## 1. The "Needle in a Haystack" (Preset Hunting)

Autogun is a slot machine. You have to spin to win.

1.  **Strategy:** Don't look for a specific sound (e.g., "I need a bass"). Autogun is bad at basics.
2.  **Target:** Look for **textures**, **atmospheres**, and **bells**.
3.  **Workflow:**
    *   Set a loop in the Playlist.
    *   Click the "Next Preset" arrow.
    *   **Star It:** If it's even remotely good, save it as a preset in the Plugin Wrapper immediately.
    *   **Why:** There is no "Previous" button history. If you skip a good one, it feels bad.

## 2. Converting to Ogun (Advanced Sound Design)

If you own the full version of Ogun, Autogun is your "Randomizer" button.

1.  **Step 1:** Browse Autogun until you find a timbre you like (e.g., a metallic rasp).
2.  **Step 2:** Click the **?** or **Options** button -> "Enter preset number" -> Copy the number.
3.  **Step 3:** Open **Ogun**.
4.  **Step 4:** Options -> Paste the number.
5.  **Step 5:** Now you can:
    *   Change the Filter envelope (Autogun usually has none).
    *   Add Unison (Autogun is usually simple).
    *   Lower the "Richness" to save CPU.

## 3. Layering "Magic"

Autogun's "Magic Dust" knob is a maximizer.

1.  **Layering 101:** You want to layer an Autogun pad with a Saw synth.
2.  **Problem:** Autogun is too dynamic/quiet relative to the Synth.
3.  **Fix:** Turn **Magic Dust** to 60%.
4.  **Result:** The average volume increases, pushing the Autogun texture to the front of the mix.

## 4. CPU Optimization

Autogun can be heavy.

1.  **Symptom:** Crackling audio on chords.
2.  **Cause:** High polyphony + High Harmonic count (Richness).
3.  **Fix 1:** Go to the Wrapper Settings -> Processing -> **"Allow smart disable"**.
4.  **Fix 2:** Bounce to Audio. Autogun is the #1 candidate for "Freeze/Consolidate" in FL Studio because its internal engine calculates thousands of harmonics per voice.
