# Core Techniques & Best Practices

## 💎 The Golden Techniques

### 1. The "Resynthesis" Trick (Audio to Synth)
Ogun can analyze a sample and recreate it using sine waves.
*   **Move:** Drag an audio file into the Harmonic Editor window.
*   **Result:** Ogun draws a curve that mimics the frequency spectrum of that sample. It won't sound *exactly* like the sample, but it gives you a "Metallic Ghost" version of it. Great for cloning bell samples.

### 2. The "Super-Sine" Pluck
*   **Context:** Creating a huge, wide pluck that isn't a generic Saw wave.
*   **Move:**
    1.  Draw a "Lowpass" style curve in the Timbre editor (High on left, zero on right).
    2.  Turn **Unison** up to 9 voices.
    3.  Turn **Unison Detune** up.
    4.  Set volume envelope to Pluck shape.
*   **Result:** A massive, lush, glassy pluck.

### 3. The "Impulse" Strike
*   **Context:** Your bell sound is too soft.
*   **Move:** Go to the **Impulse** tab. Draw a mess of high peaks on the right side.
*   **Result:** You now have a hard "Mallet Strike" sound at the start of the note.

## 👂 What to Listen For
*   **Aliasing:** With 32k harmonics, high notes can bounce off the Nyquist ceiling (22kHz) and create ugly low rumbles.
    *   *Fix:* Use the **F (Filter)** section to cut highs, or use the **Decay** knob in the Timbre editor to make highs die out faster.
*   **Phasing:** Too much Unison on metallic sounds can smear the transient.
    *   *Fix:* Reduce Unison or increase the **Attack** time slightly.

## 🛑 Common Pitfalls
1.  **Over-Richness:** Keeping the "Richness" slider at 100% all the time eats CPU and muddies the mix. Dial it back. You rarely need all 32,767 harmonics.
2.  **Ignoring the EQ:** Ogun sounds are often very bright. Use the onboard **EQ** (Bottom right) to cut the `High` band if it hurts your ears.
