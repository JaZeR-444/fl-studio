# Fruity Parametric EQ 2: The Surgical Scalpel

> **Scope:** Full parameter analysis, Filter Topology, and Visualization Science.
> **Source:** Image-Line Official Manual (v21.2) + Direct Analysis.
> **Complexity:** High.

## 🧠 The "Visual" Concept
Parametric EQ 2 is defined by its visualization engine. It combines a spectral analyzer with a heatmap to show "Energy Frequency Distribution". Understanding the **Pivot Slope** and **Linear Phase** modes is key to mastering this tool.

**Signal Flow:**
`Input` -> **[PRE-GAIN]** -> **[BAND 1-7 FILTERS]** -> **[HQ OVERSAMPLING]** -> **[OUTPUT GAIN]**

*   **Critical Nuance:** The visualizer reacts *after* the EQ processing (Post-EQ). What you see is the result of your changes.

---

## 🎛️ Section 1: Band Controls (FILTERS Tag)

Each of the 7 Bands is identical but defaults to specific shapes.

### Band Parameters

| Control | Range | Function & Nuance |
| :--- | :--- | :--- |
| **Frequency (FREQ)** | 20Hz - 20kHz | **Center Point.** <br> *Nuance:* Right-click a Band Token -> Key -> Select a note to tune the band to a musical frequency (e.g., A4 = 440Hz). |
| **Gain (Level)** | -18dB to +18dB | **Boost/Cut Amount.** <br> *Nuance:* Holding `Alt` while clicking resets the gain to 0dB. |
| **Bandwidth (BW)** | Narrow to Wide | **Q Factor.** <br> *Mouse Wheel:* Hover over a token and scroll to change BW. <br> *Nuance:* Narrow Q causes "ringing" in IIR mode. |
| **Type** | Shape Select | **Filter Topology.** <br> *Peaking:* Bell curve. <br> *Shelf:* Steps up/down. <br> *Low/High Pass:* Cuts off frequencies. <br> *Notch:* Removes a thin slice (Phasing). |
| **Order (Slope)** | Gentle to Steep | **Steepness.** <br> *Gentle 4:* -24dB/Oct. <br> *Steep 8:* -48dB/Oct (Brickwall-ish). <br> *Nuance:* Steeper slopes cause more phase shift in Standard mode. |

---

## 🔁 Section 2: Filter Modes (HQ Tag)

### Standard (IIR) vs Linear Phase (LIN)

| Mode | Technology | Usage Scenario | Artifacts |
| :--- | :--- | :--- | :--- |
| **Standard (Off)** | Infinite Impulse Response | Mixing / Tracking / Standard EQ. | **Phase Rotation:** Shifts the timing of frequencies. Zero latency. |
| **HQ** | Oversampling | High-end Mixing. | Reduces "Cramping" near 20kHz. Slight CPU Use. |
| **LIN (Linear)** | Fast Fourier Transform | Mastering / Parallel Processing. | **Pre-Ringing:** Transients may be smeared *before* the hit. High Latency. |

*   **When to use LIN?** When parallel processing (e.g., Drum Bus) where a phase shift would cause cancellation.
*   **When to avoid LIN?** On punchy drums (Pre-Ringing softens impact) or vocals (Latency).

---

## 📊 Section 3: Visualization (SPECTRAL Tag)

The background heatmap is not just pretty colors; it's a scientific instrument.

| Control | Function & Nuance |
| :--- | :--- |
| **Histogram** | **The Heatmap.** <br> Shows frequency distribution over time. <br> *Red:* Loud. *Blue:* Quiet. |
| **Pivot Slope** | **Tilt.** <br> *4.5dB (Default):* "Pink Noise" looks flat. Balances Bass vs Highs for human hearing. <br> *3dB:* Useful for modern Pop/Trap mixing (Brighter balance). <br> *6dB:* Technical analysis (Sawtooth looks flat). |
| **Range** | **Dynamic Floor.** <br> Sets the silence threshold. <br> *-120dB:* Shows everything including noise floor. <br> *-60dB:* Only shows musical elements. |
| **Precision** | **Resolution.** <br> *High:* Detailed frequency bands but slower refresh rate. <br> *Low:* Fast reaction time but blurrier. |

---

## 🛠️ Section 4: Advanced Tools (Shortcuts)

These hidden shortcuts speed up workflow 10x.

| Shortcut | Action |
| :--- | :--- |
| **Shift + Click Band** | **Solo Band.** <br> Isolates only the frequencies inside that band. Critical for "Sweeping" to find resonances. |
| **Alt + Click Band** | **Reset Band.** <br> Snaps Gain to 0dB, existing Frequency. |
| **Ctrl + Drag** | **Fine Tune.** <br> Precise adjustments. |
| **Mouse Wheel** | **Adjust Q (Width).** |
| **Right-Click Token** | **Key Mapping.** <br> "Key" submenu snaps the band to a Note (e.g., C3). Essential for tuning Kick drums. |

---

## ⚡ Technical Specs: The "Phase Rotation"

In the Options menu, enable **"Phase Rotation"** to see a white line.

*   **What is it?** It shows how much the phase is being shifted by your EQ moves.
*   **Why care?** If the line wraps around wildly, your Kick might sound "hollow" when mixed with the Bass.
*   **The Fix:** Switch to **LIN** (Linear Phase) mode. The line becomes flat.

---

## 🧪 "Secret Sauce" Workflows

### 1. The "Frequency Sweeper" (Resonance Hunting)
1.  **Peaking Band:** Select Band 7.
2.  **Gain:** Crank to +18dB.
3.  **Q:** Make it very narrow (Scroll Wheel).
4.  **Action:** Sweep left and right.
5.  **Listen:** When a frequency screams/whistles excessively, that's a bad room resonance.
6.  **Fix:** Instantaneously cut `-6dB` at that spot.

### 2. The "Key Tuned" Sub
1.  **Song Key:** F Minor.
2.  **Sub Note:** F0 or F1.
3.  **Action:** Right-click Band 1 -> Key -> F -> 1.
4.  **Result:** The EQ band snaps exactly to the fundamental frequency of your Sub Bass. Boost/Cut without guessing.

### 3. The "Brickwall" Low Cut
1.  **Band 1:** Select Type "High Pass".
2.  **Order:** Drag the handle down to "Steep 8".
3.  **Freq:** Set to 30Hz.
4.  **Result:** Removes all DC offset and rumble with maximum slope (-48dB/Oct). Cleaner headroom.
