# 02: Core Techniques and Best Practices

## 1. Clean FM Sub-Bass
1. Enable **OP 1** (Sine wave).
2. Route **OP 1 -> OUT** in the Matrix.
3. Enable **OP 2** (Sine wave).
4. Route **OP 2 -> OP 1** (The first column/row intersection) to 10%.
- *Result:* OP 2 slightly "tightens" the OP 1 sine wave, creating a modern, audible sub-bass that isn't just a muddy hum. [SRC: REPUTABLE-10]

## 2. Harmonic Sculpting (Additive)
In the **Osc** tab of any operator, use the **Harmonics** editor. 
- Drawing a single bar at the far left = Sine wave. 
- Drawing every second bar = Square-ish tone.
- Drawing all bars decreasing = Saw-ish tone.
- *Tip:* Right-click the editor to "Analyze Audio File" and turn any sample into a Sytrus operator!

## 3. The 9-Voice "Silk" Pad
1. Set **Unison Voices** to 9.
2. Turn down **Unison Detune** to 5% (Very tight).
3. Set **Unison Sub-Level** to 20%.
4. Use a slow **Attack** (2s) on the Volume envelope.
- *Result:* An extremely wide, shimmering pad that sounds like silk.

## 4. Metallic FM Bells (The "DX" Vibe)
1. **OP 1** (Carrier): Sine wave, Frequency Ratio 1.000.
2. **OP 2** (Modulator): Sine wave, Frequency Ratio 3.500 (Non-integer for dissonance).
3. **Matrix:** Route OP 2 to OP 1 at 40%.
4. **Envelope:** Use a very fast decay on OP 2's volume envelope.
- *Result:* A sharp, metallic "tine" attack followed by a clean sine body.

## 5. Global Pitch Drift (Analog feel)
1. Go to the **Main** tab.
2. In the Envelope editor, select **Pitch**.
3. Enable the **LFO**.
4. Set a slow speed (1Hz) and very low depth (1-2%).
- *Result:* Adds a subtle, "uncertain" analog character to the digital engine.

## 6. Feedback for "Grit"
In the Matrix, you can route an operator to itself (e.g., Row 1, Column 1).
- **Caution:** This creates noise and chaos very quickly. Use amounts under 5% to add "analog sizzle" to a lead.

## Common Pitfalls + Fixes
- **Pitfall:** "Clicking" sounds on every note.
  - **Fix:** Check the Volume envelope (INS -> VOL). Ensure the **Attack** is at least 2ms and **Release** is at least 5ms.
- **Pitfall:** Extreme CPU usage.
  - **Fix:** Lower the **Oversampling** in the Main tab (try 2x or 4x instead of 64x).
- **Pitfall:** Aliasing (Digital artifacts) in high notes.
  - **Fix:** Increase **Oversampling** or use a Low-Pass filter to cut frequencies above 18kHz.
