# Parameter Cheat Sheet: Frequency Splitter

The essential modifiers for the multiband routing engine. [SRC: IL-MAN]

---

## 🎛️ The Split Engine
- **Low / High Cutoff**: The frequency knobs that set the "border" between bands.
- **Slope (dB/oct)**: How steep the border is.
  - *6dB*: Extremely blurry (good for transparency).
  - *96dB*: Like a concrete wall (good for isolation).
- **Mode Selector**: Linear Phase, Minimum Phase, Zero Latency.

## 📐 Band Modifiers
- **M (Mute)**: Silences the band.
- **S (Solo)**: Silences all *other* bands.
- **Gain**: Adjusts the volume of that specific band.
- **Inv (Phase)**: Flips the polarity of the band.

## 🔗 Routing Matrix
- **Send To**: Selects which Mixer Track or Patcher node the band is sent to.
  - *Internal*: Stays within the plugin instance.
  - *External*: Leaves the plugin for external processing.