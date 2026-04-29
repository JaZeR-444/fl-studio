# Common Workflows: Fruity Filter

## 1. The "Acid" Bassline

1.  **Input:** Saw wave.
2.  **Knobs:**
    *   **Low Pass:** 100%.
    *   **Resonance:** 75% (Singing).
3.  **Automation:**
    *   Link specific notes' Velocity to the **Cutoff** knob (using Fruity Envelope Controller or Patcher).
    *   Or simply draw an LFO loop.
4.  **Why:** The 12dB slope is classic "303" territory (although 303 is technically 18dB/24dB diode ladder, the SVF topology offers a similar "squelch").

## 2. Transition Wash

1.  **Setup:** Put Fruity Filter on the Master (or Submix).
2.  **State:**
    *   **Low Pass:** 100%.
    *   **High Pass:** 0%.
3.  **Build-up:**
    *   Automate **Low Pass** down to 0%.
    *   Automate **High Pass** up to 100%.
    *   Simultaneously sweep **Cutoff** from Low to High.
4.  **Result:** The "Endless Wash" effect where the energy moves from Bass to Treble and disappears, ready for the drop.

## 3. LFO Wah-Wah

1.  **Knobs:** **Band Pass** only.
2.  **Cutoff:** Link to "Fruity Peak Controller" LFO.
3.  **Input:** Electric Guitar or Clavinet.
4.  **Result:** Classic 70s Auto-Wah funk effect.

## 4. Anti-Aliasing Guard

1.  **Context:** You are using a distortion plugin that creates dirty high-end.
2.  **Action:** Place Fruity Filter *after* the distortion.
3.  **Setting:** Low Pass, x2 Oversampling On. Cutoff at 16kHz.
4.  **Why:** The Oversampling switch on Fruity Filter ensures that the filter itself handles the high-frequency content cleanly, acting as a "roof" for the distortion.
