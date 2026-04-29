# Parameter Cheat Sheet: Low Lifter

The psychoacoustic "Secret Weapon" for small-speaker bass. [SRC: IL-MAN]

---

## 📊 The Histogram (Central Display)
- **Visualizes:** Input (Gray) vs. Output (Orange) frequency curves.
- **Interactivity:** You can drag the handles directly on the display to set the Crossover and Gain.

## 🎛️ Primary Controls
- **Crossover:** The frequency *above which* harmonics are generated.
  - *Strategy:* Set this to the low-frequency limit of your target playback device (e.g., 120Hz for a phone).
- **Boost (Intensity):** How much harmonic content is added.
- **Slope:** Controls the decay of the generated harmonics.
  - *Higher values:* Steeper decay (Cleaner, more focused).
  - *Lower values:* Gentle decay (More aggressive, "saturated" feel).
- **Diffusion:** Adds phase shift and "fatness" to the harmonics.
  - *0%:* Clean, digital, and thin.
  - *100%:* Warm, wide, and organic.

## ⚙️ Global & Advanced
- **Multi-Band (Switch):**
  - *ON:* Processes low and high bands separately. More transparent, higher CPU.
  - *OFF:* Single-band. Punchier, more "analog" character.
- **Low Cut:** A 12dB/octave filter to remove excessive sub-lows from the final output.
- **Invert Polarity (Ø):** Flips the phase of the added harmonics. Use this if the low end feels "weaker" when the plugin is active.
- **Mono Check:** Always check the master output in mono when using high Diffusion.

---

## 🎯 Target Frequency References
- **Standard Smartphones:** Crossover at **150Hz – 250Hz**.
- **Laptops / Tablets:** Crossover at **100Hz – 150Hz**.
- **Bluetooth Speakers:** Crossover at **80Hz – 120Hz**.
- **Studio Monitors:** Crossover at **60Hz – 80Hz**.
