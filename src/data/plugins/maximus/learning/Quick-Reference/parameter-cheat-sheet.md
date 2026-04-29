# Parameter Cheat Sheet: Maximus

The definitive dynamics control reference. [SRC: IL-MAN]

---

## 🛰️ Band Selectors (Top Right)
- **Low / Mid / High:** Selects the specific frequency band to edit.
- **Master:** Selects the final wideband compression/limiting stage.
- **Solo / On Buttons:** Essential for hearing what each band is doing in isolation.

## 📐 The Compression Envelope (Center Display)
- **Spline Editor:** Right-click to add nodes. Drag to set Threshold and Ratio.
- **Horizontal Axis:** Input level.
- **Vertical Axis:** Output level.
- **Diagonal Line:** 1:1 (No compression). Anything below the diagonal is compression.

## 🎚️ Primary Band Controls
- **Pre Gain:** Input level into the band. Drives the compressor harder.
- **Post Gain:** Final output of the band.
- **Attack:** How fast the compressor reacts to transients.
- **Release 1:** The primary recovery speed.
- **Release 2:** The "Adaptive" recovery speed (Smooths out the release).
- **Sustain:** Keeps the compressor active for longer.

## ⚙️ Crossovers & Global
- **Low / High Freq:** Sets the frequency split points between bands.
- **Stereo Sep:** Widens (Left) or Monos (Right) the specific band.
- **Look-Ahead:** Delay added to allow the compressor to "see" transients coming.
- **Mix Slider:** Dry/Wet balance per band.

## 🔥 Saturation Section (Bottom)
- **Mode:** OFF, Soft, or Hard.
- **Thres (Threshold):** Where saturation begins.
- **Ceil (Ceiling):** The level where saturation reaches its maximum.

---

## 🎯 Quick Mastery Tips
- **Mono Lows:** Select the **Low** band and turn **Stereo Sep** all the way to the right.
- **Transparent Limiting:** Use the **Master** band with a very high **Look-Ahead** and slow **Rel 2**.
- **Aggressive Glue:** Drive the **Pre Gain** on the **Mid** band into a "Soft" saturation curve.
