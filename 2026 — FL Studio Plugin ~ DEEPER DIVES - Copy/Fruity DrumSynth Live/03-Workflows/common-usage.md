# Common Workflows: Fruity DrumSynth Live

## 1. Building a Custom Kit

1.  **Reset:** Start with a blank preset (or Default).
2.  **Kick (C4):**
    *   Select C4.
    *   OSC 1: Sweep Tone. Dec: Short. Tuning: 50Hz.
3.  **Snare (D4):**
    *   Select D4.
    *   OSC 1: Noise. Dec: Medium.
    *   OSC 2: Ring Mod. Pitch: High.
4.  **Hats (F#4):**
    *   Select F#4.
    *   OSC 1: Noise. Filter: High Pass (use Tone Knob).
5.  **Save:** Save the preset as "My DrumSynth Kit". Now you have a lightweight synthesized kit.

## 2. Multi-Out Routing (Crucial)

Unlike FPC, output routing is per-key.

1.  **Goal:** Process Kick and Snare separately.
2.  **Action:**
    *   Select Kick Key (C4).
    *   Look at **Output Settings -> Send To**.
    *   Set to Offset **1**. (This sends to the plugin's mixer track + 1).
    *   Select Snare Key (D4).
    *   Set to Offset **2**.
3.  **Mixer:** If DrumSynth is on Track 10, Kick goes to 11, Snare goes to 12.

## 3. The "Retrigger" Roll

1.  **Feature:** Under **Trigger Settings**, use **Count**.
2.  **Setting:** Set Count to 4. Set Rate to Fast.
3.  **Play:** Hit the key once.
4.  **Result:** It plays a rapid-fire burst (Brrrrrap).
5.  **Automation:** Automate the **Rate** knob to create rising drill fills.

## 4. Random Phase "Click"

1.  **Knob:** **Click Amount** (in Trigger section).
2.  **Setting:** Max (Right).
3.  **Effect:** Every time the note triggers, the start phase of the oscillators is randomized.
4.  **Why:** This simulates the subtle variation of hitting a drum skin in different spots, removing the "Machine Gun" effect.
