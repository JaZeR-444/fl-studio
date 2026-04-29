# Automation & MIDI Mapping

Fruity Parametric EQ 2 exposes all band parameters to FL Studio's internal automation system. This allows for dynamic EQ changes, frequency sweeps, and creative effects.

## 🎛️ Standard Parameter Map

Each of the 7 Bands has 3 primary automatable controls. The parameter names in FL Studio's "Browse Parameters" list follow this convention:

### Per-Band Controls

| Parameter          | Description             | Range                     | Note                |
| ------------------ | ----------------------- | ------------------------- | ------------------- |
| **Band [X] freq**  | Frequency Center/Cutoff | 20 Hz - 20 kHz            | Logarithmic scale   |
| **Band [X] width** | Bandwidth / Q           | 0% (Wide) - 100% (Narrow) | **Inverted Scale!** |
| **Band [X] gain**  | Gain / Amplitude        | -18 dB to +18 dB          | Center = 0 dB       |

_(Where [X] is the Band Number 1-7)_

---

## 🎨 Creative Workflows

### 1. The "Diving Filter" (Build-ups)
**Effect:** Typical EDM "underwater" transition.
1.  **Band 7:** Set to **Low Pass**.
2.  **Automation:** Create clip for **Band 7 Freq**.
3.  **Curve:** Start at 20 kHz (Open), drop to 200 Hz (Closed) over 4 bars, then snap back up.
4.  **Resonance:** Increase Band 7 **Width/Q** to 60-70% for a resonant "laser" sweep sound.

### 2. The "Telephone" Dial
**Effect:** Lo-fi radio voice moving through stations.
1.  **Band 1:** High Pass @ 500 Hz.
2.  **Band 7:** Low Pass @ 3 kHz.
3.  **Band 4 (Peaking):** Set to +12dB Gain, Narrow Q (80%).
4.  **Automation:** Automate **Band 4 Freq**.
5.  **Result:** As Band 4 sweeps, it catches different harmonics, sounding like tuning an AM radio.

### 3. The "Wah-Wah" Guitar
**Effect:** Emulates a wah pedal.
1.  **Band 5:** Bell Curve, +12dB Gain, Medium Q.
2.  **LFO Tool:** Link **Band 5 Freq** to an **LFO** (inside Peak Controller or Automation Clip LFO settings).
3.  **Speed:** Set LFO speed to 1/4 or 1/8 beat.
4.  **Range:** Restrict the sweep to 500 Hz - 2 kHz range.

---

## 🎹 MIDI Controller Mapping

To map a physical knob to a parameter:

1.  Right-click the knob in the plugin UI.
2.  Select **"Link to controller..."**
3.  Move the physical knob on your MIDI controller.
4.  The link is now established.

### Recommended Mapping Strategy (8-Knob Controller)

If you have a standard 8-knob MIDI controller, try this "Performance EQ" layout:

- **Knob 1:** Band 1 Freq (High Pass Filter Sweep)
- **Knob 2:** Band 7 Freq (Low Pass / High Shelf Sweep)
- **Knob 3-7:** Gain of Bands 2-6 (Tonal shaping)
- **Knob 8:** Main Output Level

---

## 🤖 Automation Tips

### Drawing Smooth Sweeps
When automating **Frequency**, use FL Studio's "Slide" curve type in the Automation Clip editor. This prevents "zipper noise" caused by stepping through frequencies too quickly.

### Discrete Value Automation
For **Band Type** (Bell/Shelf/Cut), automation is possible but stepped:
- 0-14%: Low Pass
- 15-28%: Band Pass
- 29-42%: High Pass
- ...and so on.