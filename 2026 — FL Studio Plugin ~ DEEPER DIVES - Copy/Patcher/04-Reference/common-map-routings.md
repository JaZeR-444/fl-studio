# Reference: Common Map Routings (Patcher)
**Goal:** A logic-map for building modular effects chains used in professional Urban music mixes.

## 1. The "Mid-Side" Splitter
*Why: To compress the bass in the center (Mid) while widening reverbs on the edges (Side).*
- **Input** -> **Fruity Stereo Shaper** (Preset: Mid-Side Split)
- **Mid Output** -> **Fruity Limiter** (Mono Compression)
- **Side Output** -> **Fruity Chorus** or **LuxeVerb** (Width Enhancement)
- **Combine** -> **Fruity Voltage Controller** or simply merge into **Output**.

## 2. The "Multi-Band" Saturation Rack
*Why: To add "Grit" to the low-mids of an 808 without distorting the sub-bass.*
- **Input** -> **Fruity Parametric EQ 2** (3-way split using steep Bandpass filters).
- **Low Band (20Hz - 100Hz):** No processing (Clean Sub).
- **Mid Band (100Hz - 500Hz):** -> **Fruity Soft Clipper** (Hard Saturation).
- **High Band (500Hz+):** -> **Fruity Chorus** (Dimension).
- **Mix:** Combine all bands back together.

## 3. Parallel "New York" Compression
*Why: To get "punchy" drums that still sound natural.*
- **Path A (Dry):** Straight to Output.
- **Path B (Wet):** -> **Fruity Limiter** (Compressor Mode).
    - Ratio: 8:1 (Aggressive)
    - Threshold: -30dB (Squashing the signal)
    - Gain: +5dB (Makeup)
- **Blend:** Use a **Surface Knob** to control the volume of Path B.

## 4. The "Intelligent" De-Esser
*Why: Only taming harsh vocals when they actually happen.*
- **Input** -> **Peak Controller** (Filtered to 5kHz - 8kHz).
- **Input** -> **Fruity Parametric EQ 2** (High Shelf band).
- **Logic:** Link the EQ 2 High Shelf "Gain" to the Peak Controller (Inverted).
- **Result:** When "S" sounds hit, the EQ automatically pulls down the high-end.
