# Maximus: The Loudness Beast

> **Scope:** Multiband Dynamics, Spline Compression, and Saturation.
> **Source:** Image-Line Official Manual (v21.2) + Direct Analysis.
> **Complexity:** Very High.

## 🧠 The "Maximizer" Concept
Maximus is not just a limiter; it's a **Multiband Waveshaper**. Unlike standard compressors that use a fixed Ratio, Maximus uses a **customizable graph** to map Input gain to Output gain. This allows it to act as an Expander, Gate, Compressor, and Limiter simultaneously.

**Signal Flow:**
`Input` -> **[LOW CUT]** -> **[CROSSOVERS (HML)]** -> **[PRE-GAIN]** -> **[ENVELOPE/CURVE]** -> **[SATURATION]** -> **[ATT/REL]** -> **[POST-GAIN]** -> **[MASTER BAND]** -> **[OUTPUT]**

*   **Critical Nuance:** The "Master" band processes the *sum* of the High, Mid, and Low bands. It has its own independent envelope and saturation.

---

## 🎛️ Section 1: The Transfer Graph (ENVELOPE Tag)

This is the brain of the plugin. X-axis = Input dB. Y-axis = Output dB.

### Graph Mechanics
| Feature | Function & Nuance |
| :--- | :--- |
| **Mapping** | **1:1 Line:** 45-degree diagonal. Input = Output. <br> **Below Line:** Compression/Limiting. <br> **Above Line:** Expansion. |
| **Knee** | **User Defined.** You draw the knee. It can be hard, soft, S-shaped, or inverted. |
| **Snap** | **Grid Locking.** Essential for setting precise ceiling points (e.g., exactly -0.1dB). |
| **Curve Types** | Right-click a point to change: <br> *Single Curve:* Standard. <br> *Double Curve:* Smooth "S" shape. <br> *Hold/Stairs:* Bit-crusher effect on dynamics. |

### Essential Curves
1.  **Brickwall Limiter:** A straight horizontal line at the top.
2.  **Soft Knee:** A gentle curve rolling off the peaks.
3.  **Noise Gate:** The line drops to -infinity at the bottom left (silencing quiet sounds).
4.  **Upward Compression:** The line is curved *up* in the quieter sections (boosting low-level details).

---

## 🔁 Section 2: Band & Saturation Controls

Each band (Low, Mid, High, Master) has identical controls but operates on different frequencies.

### Saturation (The Secret Sauce)
Maximus has a unique "Dual Saturation" engine per band.

| Control | Function & Nuance |
| :--- | :--- |
| **Thres (Knob)** | **Level & Type.** <br> *Turn Left (Type A):* Harder, transistor-like distortion. <br> *Turn Right (Type B):* Softer, tube-like saturation. <br> *Center:* Off. |
| **Ceil (Ceiling)** | **Soft Clip Threshold.** <br> Determines at what dB the saturation kicks in. Lowering this makes the sound "crunchier" at lower volumes. |
| **Mode** | **Band Interaction.** <br> *Comp Off:* Disables the envelope but keeps Saturation/Gain active. Useful for purely coloring a band. <br> *Muted:* Silences the band. |

### Stereo Mechanics
| Control | Function |
| :--- | :--- |
| **Sep (Separation)** | **Width Control.** <br> *Right:* Merges to Mono (Ideal for Low Band). <br> *Left:* Widens Stereo (Ideal for High Band). <br> *Algorithm:* Uses Mid/Side matrixing. |

---

## ⏳ Section 3: Time Constants (Attack/Release)

Maximus uses a "Lookahead" system for attack.

| Control | Range | Function & Nuance |
| :--- | :--- | :--- |
| **ATT** | 0ms+ | **Lookahead Delay.** <br> *HML Bands:* Shifts the audio into the past so the limiter can "see" peaks coming. <br> *Master Band:* Defines the actual specific attack time of the final limiter. |
| **REL (1)** | ms | **Accelerating Release.** <br> Fast recovery. Good for transients/drums. |
| **REL 2** | ms | **Decelerating Release.** <br> Slow, smooth recovery. Good for sustained tones/bass. |
| **Curve** | 1-8 | **Release Slope.** <br> Blends between Rel 1 and Rel 2 curves. Steeper slopes = snappier action. |
| **Sustain** | ms | **RMS Averaging.** <br> Holds the compression state. Prevents "fluttering" on low frequencies. |

---

## ⚡ Technical Specs: Linear Phase (LIN)

Located in the "LO" and "HIGH" frequency knobs section.

*   **Mode OFF (IIR):** Zero latency. Phase rotation occurs at crossover points. Can change the peak level of transient sums.
*   **Mode ON (LIN):** High latency (FFT). Perfect phase reconstruction.
*   **Recommendation:** Use LIN for mastering. Use IIR for mixing/tracking.

---

## 🧪 "Secret Sauce" Workflows

### 1. The "Invisible" Master
1.  **Curve:** Draw a gentle curve that only touches the top 3dB of signal.
2.  **Release:** Set Rel 1 to 10ms (fast) and Rel 2 to 200ms (slow). Blend 50%.
3.  **Result:** Transients are caught by Rel 1, body is leveled by Rel 2. No pumping.

### 2. The "Mono Bass" Anchor
1.  **Select:** LOW Band.
2.  **Sep Knob:** Turn 100% Right (Mono).
3.  **Gain:** Boost Post-Gain +2dB.
4.  **Result:** Specifically makes your sub-bass mono and loud, while leaving mids/highs wide.

### 3. The "NY" Drum Bus
1.  **LMH Mix:** Turn the knob to 50% (Bottom Right).
2.  **Compression:** Smash the HML bands hard (flat graph).
3.  **Master:** Leave clean.
4.  **Result:** The "Dry" dynamic signal is mixed with the "Smashed" multiband signal. Infinite punch.
