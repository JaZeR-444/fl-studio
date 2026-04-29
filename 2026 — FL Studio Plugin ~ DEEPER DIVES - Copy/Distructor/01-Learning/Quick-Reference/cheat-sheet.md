# Distructor: The Modular Crunch

> **Scope:** Modular Distortion, Filter Banks, and Cabinet Simulation.
> **Source:** Image-Line Official Manual (v21.2) + Direct Analysis.
> **Complexity:** Medium (Modular Signal Flow).

## 🧠 The "Rack" Concept
Distructor is a simplified **Modular Effect Chain**. Unlike a standard distortion unit (Input -> Drive -> Output), Distructor allows you to place Filters *before* or *after* distortion, which drastically changes the sound.
*   **Modules:** Distortion, Filter, Chorus, Speaker Cab.
*   **Signal Flow:** Linear (Left to Right).
*   **Reordering:** You can move modules using the arrows.

**Signal Flow (Example):**
`Input` -> **[FILTER (High Pass)]** -> **[DISTORTION (Hard Clip)]** -> **[CABINET (4x12)]** -> **[OUTPUT]**
*   *Why this matters:* Distortion adds harmonics. If you filter *before* distortion, you distort a cleaner signal. If you filter *after*, you remove the fizz created by the distortion.

---

## 🎛️ Section 1: Distortion Flavors

Distructor aggregates algorithms from older FL plugins.

| Type | Origin | Character |
| :--- | :--- | :--- |
| **Blood Overdrive** | Legacy Plugin | Analog-style warmth. Good for bass. |
| **Soft Clipper** | Fruity Soft Clipper | Transparent rounding. Good for mastering/drums. |
| **Hard Clipping** | Digital | Brickwall limit. Creates harsh odd harmonics. |
| **Harmor (Rubbery/Log)** | Harmor | Exotic waveshaping curves. Very digital/sci-fi. |
| **Wavefolder** | Distructor Exclusive | "Folds" the waveform back on itself instead of clipping. Creates metallic "West Coast Synthesis" tones. |
| **Aperture** | Distructor Exclusive | Dynamic warping. |

---

## 🔁 Section 2: The Filter Module

This isn't just an EQ; it's a creative tool.

*   **Placement Strategy:**
    *   **Pre-Distortion:** Use a "Peaking" filter to boost specific frequencies (e.g., 800Hz) into the distortion threshold. This creates a "Wah" or vowel-like scream.
    *   **Post-Distortion:** Use a "Low Pass" filter to tame the high-end harshness (Cab simulation style).
*   **Special Modes:**
    *   **Vowel:** A Formant filter (A-E-I-O-U).
    *   **Phaser:** A multi-stage All-Pass filter structure.
    *   **Comb:** Creates metallic ringing (delay-based resonance).

---

## ⚡ Technical Specs: The Speaker Cabinet

*   **Engine:** Convolution (Impulse Response).
*   **Latency:** Zero Latency (Time-domain convolution often optimized for real-time).
*   **Stereo handling:**
    *   **Mono Models:** Most guitar cabs are mono sources. Distructor sums the input to mono before the cab.
    *   **Stereo Separation:** The "Sep" knob allows you to re-introduce stereo width *after* the cab, or widen the signal *before* it hits a stereo-friendly algorithm.

---

## 🧪 "Secret Sauce" Workflows

### 1. The "Acid" Bass
1.  **Module 1:** Filter (Low Pass 12dB). High Resonance.
2.  **Module 2:** Distortion (Hard Clip or Wavefolder).
3.  **Action:** Automate the **Cutoff** of Module 1.
4.  **Physics:** As the filter sweep hits the resonant peak, the volume spikes. The Distortion module clips this spike, creating that squelchy "303" sound where the resonance turns into grit.

### 2. The Guitar Amp Replacement
1.  **Module 1:** Distortion (Blood Overdrive). Drive ~40%.
2.  **Module 2:** Speaker Cab (4x12 Vintage).
3.  **Module 3:** Filter (High Pass). Cut everything below 100Hz to remove mud.
4.  **Module 4:** Chorus (Stereo). Depth 20%.
5.  **Result:** A fully produced Lead Guitar tone in one plugin slot, using 1% CPU.

### 3. Drum Bus Glue
1.  **Order:** Distortion -> Filter.
2.  **Mode:** Soft Saturation (Log).
3.  **Drive:** Very low.
4.  **Mix Knob:** 30% (Parallel Processing).
5.  **Result:** Adds "density" to the drums without killing the transients. The specific "Log" curve from Harmor is excellent for punch.
