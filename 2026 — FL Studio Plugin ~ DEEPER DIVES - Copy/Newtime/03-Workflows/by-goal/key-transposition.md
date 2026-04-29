# Workflow: Key Transposition (Natural Shifting)

*Goal: Shifting the pitch of an audio sample to match your project key while preserving its natural "human" character (formants).*

## Vibe Mapping
- **Vibey:** ⭐⭐⭐⭐⭐ (Primary)
- **Moody:** ⭐⭐⭐⭐
- **Jazzy:** ⭐⭐⭐⭐

## 🚶 Step-by-Step Setup
1. **The Algorithm:**
   - Select **Tones** (for monophonic leads/vocals) or **Tonal** (for chords).
2. **The "Human" Shield (Formant):**
   - Locate the **Formant** toggle button. **Turn it ON**.
   - *Why:* This prevents the "Chipmunk" effect when pitching up and the "Darth Vader" effect when pitching down.
3. **The Move:**
   - Turn the **Pitch** knob to your desired transposition.
   - *Example:* If your sample is in C-Major and your track is in D-Major, set Pitch to **+2**.
4. **Fine-Tuning:**
   - If the sample sounds slightly "out of tune" with your project, adjust the **Fine** knob (Cents) while listening to your track's metronome or a piano.
5. **Quality Check:**
   - Switch the **Quality** selector to **Ultra**. This ensures the pitch shifting algorithm uses maximum resolution to avoid metallic ringing.
6. **The Blend:**
   - Drag the clip back into FL Studio. Use the Mixer to add a little Reverb (LuxeVerb) to "glue" the newly pitched sample into the track.

## 🔄 Variations
- **The "Dark Haunt":** Turn Formant **OFF** and pitch down **-12**. This is the secret to that "heavy" chopped and screwed vocal vibe.
- **The "Harmony Maker":** Clone your sample. Pitch one up +7 (Fifth) and the other up +12 (Octave). Layer them for a massive thick vocal stack.

## ⚠️ Pitfalls & Fixes
- **Problem:** Vocal sounds "nasal" or "plastic."
- **Fix:** Your **Pitch** shift is too extreme (e.g. more than 7 semitones). The algorithm can only do so much. Try to keep shifts within +/- 5 semitones for realism.
- **Problem:** Chords sound messy.
- **Fix:** Ensure you are in **Tonal** mode, not Tones.

## 🎚️ Automation Ideas
- **Pitch Dive:** Automate the **Fine** pitch to drop at the end of a long vocal note for an emotional "sag."
- **Formant Warp:** Automate the **Formant** button (if possible) or the Pitch while Formant is off to create a "liquid" pitch effect.
