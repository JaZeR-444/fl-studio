# Fruity DX10: The FM Gateway

> **Scope:** Basic FM Synthesis, Electric Piano, and Slap Bass.
> **Source:** Image-Line Official Manual (v21.2) + Direct Analysis.
> **Complexity:** Low (2-Operator FM).

## 🧠 The "FM" Concept
DX10 is a simplified version of the Yamaha DX7.
*   **Architecture:** 2 Operators (Oscillators).
    *   **Carrier:** Plays the audible note.
    *   **Modulator:** Vibrates the Carrier to change its timbre (not its pitch, effectively).
*   **Sound:** FM is known for **Glassy, Metallic, and Woody** textures. It creates complex harmonics that Subtractive (Analog) synthesis cannot.

**Signal Flow:**
`Modulator (Envelope)` -> **[FM INDEX]** -> `Carrier (Envelope)` -> **[WAVE BRIGHTNESS]** -> **[OUTPUT]**

---

## 🎛️ Section 1: The Ratios

The key to FM is the Pitch Ratio between the two oscillators.
*   **Coarse Tune:** Sets the Modulator pitch relative to the Carrier.
    *   *Ratio 1 (Same):* Sawtooth-ish.
    *   *Ratio 2 (Octave):* Square-ish / Hollow.
    *   *Ratio 3+ (Non-integer):* Metallic / Bell / Inharmonic.
*   **Fine Tune:** Detunes the Modulator. Creates "Beating" and "Growl".

---

## 🔁 Section 2: The Envelopes

DX10 has two envelopes.
1.  **Amplitude (Right Section):** Controls the Volume of the Carrier (Main Output volume).
2.  **Modulation (Bottom Section):** Controls the **FM Amount** over time.
    *   *Example:* Hard Attack, Fast Decay.
    *   *Result:* The sound starts bright/metallic (High FM) and quickly becomes dull/sine (Low FM). This mimics a plucked string or bell.

---

## ⚡ Technical Specs: The 'Wave' Knob

*   **Function:** Controls the waveform of the oscillators or a global Low Pass Filter?
    *   *Manual:* "Adds brightness".
    *   *Reality:* It likely changes the Carrier waveform from Sine (Left) to Saw/Square (Right), *OR* it increases the Global Modulation Index.
    *   *Tip:* Keep it low for pure FM "Bells". Turn it up for "Techno Bass".

---

## 🧪 "Secret Sauce" Workflows

### 1. The "Lately" Bass (Solid Bass)
1.  **Coarse:** 1 or 0.5.
2.  **Modulator Env:** Fast Decay (Pluck).
3.  **Wave:** Low (Dull).
4.  **Velocity Send (VEL.SENS):** High.
5.  **Result:** The harder you hit, the brighter the bass. This is the definition of the 90s House/Eurobeat bass.

### 2. Glass Bell
1.  **Coarse:** Set to a high non-integer (e.g., 3.5 or 9).
2.  **Mod Env:** Medium Decay.
3.  **Carrier Dec:** Long Decay.
4.  **Result:** The high ratio creates inharmonic partials (Glass).

### 3. Log Drum
1.  **Coarse:** 1.
2.  **Wave:** 0 (Pure Sine).
3.  **Modulation:** Very subtle (Low INIT, Low SUS).
4.  **Result:** A woody "Thump" sound.

### 4. Layering (Modulator Thru)
1.  **Knob:** **THRU**.
2.  **Action:** Turn it up.
3.  **Result:** You now hear the Modulator directly mixed with the Carrier.
4.  **Use:** Set Modulator to a high octave. You get a "Sine Wave + High Whistle" layer.
