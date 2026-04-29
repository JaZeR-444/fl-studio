# Common Workflows: Fruity Balance

## 1. The "Golden Rule" of Automation

**Never Automate the Mixer Fader.**

1.  **Scenario:** You have a vocal track. You draw dynamic automation on the Fader to smooth out the levels (Vocal Riding).
2.  **Problem:** Later, you realize the whole vocal is too loud in the chorus.
3.  **Struggle:** You grab the fader to lower it. It snaps back immediately because of the automation. You have to edit every point in the automation clip.
4.  **Solution (Fruity Balance):**
    *   Add Fruity Balance as the last plugin in the vocal chain.
    *   Automate the **Volume** knob of Fruity Balance for the "Riding".
    *   Use the Mixer Fader to set the overall mix level.

## 2. Panning Automation Effects

1.  **Scenario:** You want a Hi-Hat to pan Left-Right-Left on 16th notes.
2.  **Tool:** Fruity Balance.
3.  **Action:** Automate the **Balance** knob.
4.  **Why:** If you automate the Channel Pan (in the Channel Rack), it happens *before* the effects. If you have a Stereo Delay on the Hat, panning before the delay changes how the delay reacts.
5.  **Post-FX Panning:** Placing Fruity Balance *after* the Delay allows you to pan the *entire* wet signal (Hat + Echoes) together, moving the whole space.

## 3. Creating Headroom (Gain Staging)

1.  **Context:** You have a distortion plugin (Distructor) that boosts the volume by +12dB.
2.  **Issue:** The next plugin (Compressor) is getting hit too hard (Clipping input).
3.  **Fix:** Insert Fruity Balance *between* Distructor and Compressor.
4.  **Setting:** Set Volume to -12dB (approx 25%).
5.  **Result:** You restore unity gain within the plugin chain.

## 4. Manual Trance Gate

1.  **Goal:** A rhythmic stutter effect.
2.  **Setup:**
    *   Add Fruity Balance.
    *   Right-click Volume -> **Create Automation Clip**.
3.  **Drawing:**
    *   Draw a square wave pattern in the Playlist.
    *   On / Off / On / Off.
4.  **Precision:** Fruity Balance is sample-accurate (mostly) for volume changes, creating tight, click-free gates if you smooth the edges slightly.
