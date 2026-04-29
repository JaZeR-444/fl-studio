# Technical Reference: Audio-Rate Modulation Theory

Understanding the "Growl" and "Scream" in Kepler Exo. [SRC: IL-MAN], [SRC: REPUTABLE]

## What is Audio-Rate Modulation?
Standard LFO modulation happens slowly (e.g., 5 cycles per second). **Audio-Rate Modulation** happens at thousands of cycles per second—fast enough to be within the range of human hearing. In Kepler Exo, this is implemented primarily as **Audio Mod** (VCF) and **X-Mod** (DCO Cross-Mod).

---

## 1. Audio Mod (Filter Growl)
- **The Concept:** The output of **DCO 1** is used as a modulation source for the **Filter Cutoff**.
- **The Result:** Instead of a simple "wah-wah" effect, the filter opens and closes so fast that it creates **Sidebands** (new frequencies).
- **Sound Character:** This creates "growling," "talking," or "ripping" textures. It is the secret to modern "analog-growl" bass and aggressive industrial leads.
- **Tip:** This effect is most audible when **Resonance** is high, as the "moving peak" of the filter creates the most harmonic distortion.

## 2. X-Mod (Cross-Modulation / FM)
- **The Concept:** **DCO 1** modulates the frequency (pitch) of **DCO 2**.
- **The Result:** Frequency Modulation (FM). Depending on the ratio between the two oscillators, you get:
  - **Harmonic Ratios (1:1, 2:1):** Musical, thick, rich sounds.
  - **Inharmonic Ratios (1.5:1, 3.14:1):** Metallic, bell-like, dissonant, and "noisy" sounds.
- **Why it's in Exo:** This expands Kepler beyond standard "analog" sounds into the realm of digital FM (DX7 style) but with the warmth of an analog filter.

---

## Technical Implications
1. **Pitch Tracking:** Because the modulation frequency changes with the notes you play (Keytracking), the "vibe" of the FM/Audio-Mod stays consistent across the keyboard.
2. **Aliasing:** At extreme audio-rate settings, you may hear digital artifacts. Use the **HQ Filter Mode** to minimize these and keep the sound "smooth."
3. **Phase Relationships:** Because DCO 1 and 2 are digitally controlled, their phase relationship is stable. This makes the FM in Kepler Exo more predictable and "tuned" than on ancient purely analog hardware.

---
*For practical workflows using these theories, see the [03-Workflows/by-goal/metallic-fm-perc.md](../03-Workflows/by-goal/metallic-fm-perc.md) guide.*
