# Common Workflows: Effector

## 1. Live DJ Sets (The Master Channel)

Effector is often placed on the Master Bus for DJ-style transitions.

1.  **Placement:** Last slot on Master.
2.  **Setup:** Leave in "Bypass" (Momentary mode).
3.  **Performance:**
    *   **Reverb Flash:** Click top-right on Reverb for a splash on a snare hit, then release instantly.
    *   **Echo Freeze:** Click top-left on Delay to catch a vocal phrase, hold for one measure, then release.
4.  **Warning:** Effector on Master *overrides* everything. Be careful with Gain (Clip risk).

## 2. The "Gross Beat" Alternative (Trans / Grain)

Effector can do basic time manipulation cheaper than Gross Beat.

1.  **Grain Effect:**
    *   Select **GRAIN**.
    *   Set Tempo to **1/4**.
    *   Hold the pad.
    *   **Result:** It grabs a 1/4 note chunk and loops it (Stutter effect).
2.  **Trans Effect:**
    *   Select **TRANS**.
    *   Set Tempo to **1/16**.
    *   Hold the pad.
    *   **Result:** Instant 4-on-the-floor sidechain pumping.

## 3. Automation Clips vs Performance Recording

You should generally **Record** Effector automation rather than drawing it.

1.  **Method:**
    *   Right-click Transport -> **Record Automation**.
    *   Press Play.
    *   Play the X/Y pad with your mouse.
2.  **Edit:**
    *   Go to the Playlist.
    *   You will see standard Automation Clips for `X PARAM` and `Y PARAM`.
    *   IMPORTANT: Also verify the `BYPASS` automation. Effector often records a "Bypass" event at the end of the clip that might mute the plugin unexpectedly if looped.

## 4. The "Modulation Matrix" Hack

Effector's Mod knobs (LFO) are internal only. But what if you want to modulate Effector with Peak Controller?

1.  **Link:** Right-click **X PARAM**.
2.  **Select:** "Link to Controller".
3.  **Mapping:** Select Peak Controller LFO.
4.  **Conflict:** Ensure the internal **X MOD** knob is set to 0 (Center). If both internal LFO and external Automation fight, the result creates jittery artifacts.
