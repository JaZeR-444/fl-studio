# Creative Automation in FLEX

Since you cannot access the oscillators inside FLEX, **Automation** is your primary tool for sound design. Static presets sound "preset-y." Moving presets sound professional.

## 🎛️ What to Automate (By Genre)

### 1. EDM & Bass Music
*   **The "Wub" (Filter Cutoff):**
    *   **Target:** Master Filter Cutoff (Bottom Left) or Macro 1 (usually Tone/Filter).
    *   **Shape:** Fast, rhythmic LFOs or sidechain shapes.
    *   **Effect:** Creates energy and rhythm.
*   **The "Build-Up" (Pitch & Reverb):**
    *   **Target:** Pitch Slider (Top Right) + Reverb Mix.
    *   **Shape:** Ramp up over 4/8 bars.
    *   **Effect:** Classic riser tension.

### 2. Cinematic & Orchestral
*   **The "Swell" (Dynamics):**
    *   **Target:** Macro associated with "Expression" or "Timbre" (often Macro 1 or 2).
    *   **Shape:** Slow, curved ramps (Attack) and long fades (Decay).
    *   **Effect:** Mimics a real player breathing or bowing harder.
*   **The "Distance" (Space):**
    *   **Target:** Reverb Mix + Low Pass Filter Cutoff.
    *   **Shape:** Increase Reverb while decreasing Cutoff.
    *   **Effect:** Pushes the sound further back into the "fog" or distance.

### 3. Lo-Fi & Hip Hop
*   **The "Vintage Drift" (Pitch):**
    *   **Target:** Master Pitch Slider.
    *   **Shape:** Very slow, tiny sine wave (fine pitch).
    *   **Effect:** Mimics an unstable tape machine or warped vinyl.
*   **The "Texture" (Noise/Crackle):**
    *   **Target:** Some presets have a "Noise" Macro. Automate it to get louder only during note hits.

## 🛠️ The "Macro Link" Trick
Instead of automating 5 different knobs, link them to one Controller.

1.  **Right-Click** Macro 1 ("Filter").
2.  Select **"Link to controller"**.
3.  **Right-Click** Reverb Mix.
4.  Select **"Link to controller"** -> **Remove conflicts** (Uncheck this!) -> Select the same controller.
5.  **Result:** Now one automation clip controls both Filter and Reverb simultaneously.

## ⚠️ Automation Traps
*   **Clicking/Popping:** Avoid instant automation jumps on things like "Delay Time" or "Phase." It causes audio glitches.
*   **The "Lost" Value:** When you automate a control, you can no longer adjust it manually. It snaps back to the automation line.
    *   **Fix:** Automate a "Fruity Balance" gain knob *after* FLEX if you just want volume automation, keeping the Master Volume slider free for mixing.
