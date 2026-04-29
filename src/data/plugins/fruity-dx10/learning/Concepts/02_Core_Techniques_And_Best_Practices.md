# Core Techniques And Best Practices: Fruity DX10

## Technique 1: Shimmering R&B Tines
*   **Goal:** The iconic "DX7 Piano" sound.
*   **Action:** 
    *   Set **Coarse Tune** to `14.00`. 
    *   Set **Modulation Time** to a very short value (~100ms).
    *   Set **Modulation Init** to 50%.
*   **Result:** A sharp, bell-like "ping" at the start of every note that transitions into a soft sine tone. [SRC: REPUTABLE]

## Technique 2: Metallic G-Funk Bass
*   **Goal:** A "talky," digital bass.
*   **Action:** 
    *   Set **Coarse Tune** to `1.00`.
    *   Set **Modulation Init** to 80%.
    *   Increase **Amplitude Decay** and set **Sustain** to 0.
*   **Tweak:** Turn up the **Wave** knob to add "growl."

## Technique 3: FM "Filter" Sweeps
*   **Goal:** Replicating a subtractive sweep using only FM.
*   **Action:** 
    *   Set **Modulation Init** to 100%. 
    *   Automate the **Modulation Time** knob.
*   **Effect:** The "brightness" of the sound will drop over time, mimicking a low-pass filter but with more complex harmonic shifts.

## Technique 4: Thru-Mode Layering
*   **Goal:** Thickening a lead.
*   **Action:** Turn the **Thru** knob to 50%.
*   **Why:** This lets the raw modulator oscillator through. If the modulator is tuned an octave higher than the carrier, you get an instant 2-oscillator "stacked" lead sound. [SRC: IL-MAN]

## Common Pitfalls + Fixes
*   **Pitfall:** "The sound is too thin."
    *   **Fix:** Use the **Vibrato LFO** at a very slow rate (0.2Hz) and low depth to add "analog" movement. Or, place a **Chorus** effect after the plugin.
*   **Pitfall:** "It sounds like random noise."
    *   **Fix:** Reset **Fine Tune** to 0. FM is extremely sensitive to tuning; even a few cents off can turn a bell into a buzzer. [SRC: REPUTABLE]
