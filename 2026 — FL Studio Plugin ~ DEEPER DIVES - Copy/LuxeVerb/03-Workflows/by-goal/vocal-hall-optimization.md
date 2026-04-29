# Workflow: Vocal Hall Optimization (Clean Depth)

*Goal: Adding deep, "expensive" concert hall reverb to lead vocals while maintaining 100% clarity and presence.*

## Vibe Mapping
- **Lush:** ⭐⭐⭐⭐⭐ (Primary)
- **Vibey:** ⭐⭐⭐⭐⭐ (Primary)
- **Jazzy:** ⭐⭐⭐⭐

## 🎛️ Routing Context
- **Preferred:** Parallel Send track.
- **Mix Status:** 100% Wet on Send.

## 🚶 Step-by-Step Setup
1. **The Algorithm:**
   - Set **Mode** to **Hall** (for natural depth) or **Plate** (for bright presence).
2. **The "Front-to-Back" Separation:**
   - Set **Pre-Delay** to **35ms – 60ms**.
   - *Why:* This allows the dry vocal "consonants" to hit the listener's ear before the reverb starts, preventing the vocal from sounding "washed out" or distant.
3. **The Tail Control:**
   - **Decay:** 1.8s – 2.5s (The sweet spot for modern R&B).
   - **Brightness:** 50%.
4. **The "Abbey Road" Filter Trick:**
   - Set **LF Cut** to **500Hz**. (Removes vocal "thumps" and mud).
   - Set **HF Cut** to **6kHz**. (Removes harsh sibilance "S" sounds from the reverb).
5. **Diffusion:**
   - Set to **80%**. You want a smooth, creamy tail that stays behind the vocal.
6. **Modulation:**
   - Set **Detune** to **25%**. This adds a subtle "living" quality to the tail that sounds much more professional than a static digital tail.

## 🔄 Variations
- **The "Cloud" Vocal:** Use **Lush Mode**, increase **Decay** to 4.0s, and add a very low amount of **Feedback** (10%) on the **Pitch +12** fader.
- **The "Intimate" Booth:** Use **Room Mode**, **Size 10%**, and **Decay 0.6s**.

## ⚠️ Pitfalls & Fixes
- **Problem:** The vocal sounds like it's in a "barrel."
- **Fix:** You have too much low-end in the reverb. Increase the **LF Cut**.
- **Problem:** Reverb is making the "S" and "T" sounds too loud.
- **Fix:** Use a **De-esser** *before* the reverb on your send track, or lower the **HF Cut** knob.

## 🎚️ Automation Ideas
- **Tail Ducking:** (Internal to FL) Use a Fruity Peak Controller on the Dry Vocal to duck the volume of the Reverb Send whenever the singer is actually singing.
- **Vibe Expansion:** Automate the **Decay** to get longer during the bridge of the song for an "emotional" lift.
