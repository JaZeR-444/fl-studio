# Common Workflows: BooBass

## 1. The "Real Bass" Processing Chain

BooBass by itself is very dry (DI - Direct Inject signal). To make it sound like a record, you need an Amp.

1.  **Source:** BooBass (Default settings).
2.  **Insert Slot 1:** **Hardcore** or **Distructor**.
    *   Load a "Bass Amp" or "Cabinet" preset.
    *   This adds the "Speaker Air" and "Grit" that is missing from the raw model.
3.  **Insert Slot 2:** **Fruity Compressor**.
    *   Ratio 4:1. Fast Attack.
    *   Bass needs heavy compression to sit steady in a mix.

## 2. Sliding Glides (Neo-Soul)

1.  **Technique:** Portamento.
2.  **Piano Roll:**
    *   Place a layout note (e.g., C3).
    *   Place a **Slide Note** (with the little triangle icon) overlapping the end of the first note, shifting up to G3.
3.  **Result:** A smooth pitch ramp.
4.  **Refinement:** Lower the velocity of the Slide Note to make the slide "fade out" as it goes up, mimicking the loss of energy in a real string.

## 3. The "Seinfeld" Pop Bass

1.  **Treble:** 100%.
2.  **Bass:** 50%.
3.  **Mid:** 20% (Hollow).
4.  **Velocity:** Randomize strictly between 100 and 127.
5.  **Comp:** Heavy limiting.
6.  **Function:** This creates the percussive, snappy transient sound used in sitcom transitions.

## 4. Layering with a Sub

BooBass has good mid-range definition but can lack pure sub weight.

1.  **Layer:** Create a Layer Channel.
2.  **Children:** Set BooBass and a 3x Osc (Sine wave).
3.  **BooBass:** High-Pass filter at 80Hz (Remove its low end).
4.  **3x Osc:** Low-Pass filter at 80Hz (Pure sub).
5.  **Result:** The "Texture" of a real bass with the "Stability" of a synth sub.
