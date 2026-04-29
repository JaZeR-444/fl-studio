# Common Workflows: Drumaxx

## 1. Multi-Output Routing

Drumaxx is often used as a full drum kit. You need to mix the Kick and Snare separately.

1.  **Wrapper:** Enable "Multiple Outputs".
2.  **Drumaxx:**
    *   Select the Kick Pad.
    *   Look at the LCD display "Output". Change offset to 0.
    *   Select the Snare Pad.
    *   Change Output offset to 1.
3.  **Mixer:** The Kick goes to the Main Track. The Snare goes to Main Track + 1.

## 2. Humanizing Hi-Hats

Physical models excel at this.

1.  **Setup:** Closed Hat on Pad 1.
2.  **Modulation:**
    *   Go to "Velocity Modulation" matrix.
    *   Target 1: **Phasing**.
    *   Target 2: **Tone (Material)**.
3.  **Piano Roll:** Randomize the velocity of your Hi-Hat notes (Alt+R).
4.  **Physics:**
    *   Low velocity = Center hit (Darker).
    *   High velocity = Edge hit (Brighter).
    *   This is far more realistic than just volume changes.

## 3. Creating "Foley" Textures

Drumaxx can make weird wooden clicks and scrapes.

1.  **Material:** All the way Left (Wood/Heavy).
2.  **Shape:** Square.
3.  **Decay:** Very Short.
4.  **Sequencer:** Create a fast stream of 32nd notes.
5.  **Result:** Sounds like a Geiger counter or rain hitting a tin roof. Add Reverb (Global FX) to wash it out.

## 4. The "Clap" Stack

Claps are hard to model because they are spread out in time (multiple hands).

1.  **Mallet:** High Noise.
2.  **Mid Filter:**
    *   **Retrig**: Set to "II" or "III".
3.  **Effect:** This causes the noise burst to re-trigger rapidly within a few milliseconds, simulating the "flam" of multiple hands clapping.
