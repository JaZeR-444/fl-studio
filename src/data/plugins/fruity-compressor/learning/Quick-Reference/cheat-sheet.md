# Fruity Compressor: The Ultrafunk Legacy

> **Scope:** Character Compression, LA-2A Emulation, and TCR.
> **Source:** Image-Line Official Manual (v21.2) + Direct Analysis.
> **Complexity:** Medium (Algorithm Selection).

## 🧠 The "Hidden Gem" Concept
Most users skip this plugin for Fruity Limiter. That is a mistake.
*   **Fruity Limiter:** Clinical, perfect, transparent.
*   **Fruity Compressor:** Based on the legendary **Ultrafunk** algorithms. It has "color", non-linear knees, and a specific "Vintage" mode that mimics opto-compressors.

**Signal Flow:**
`Input` -> **[THRESHOLD DETECTOR]** -> **[KNEE CALCULATION]** -> **[GAIN REDUCTION]** -> **[MAKEUP GAIN]** -> **[OUTPUT]**

---

## 🎛️ Section 1: The "Type" Knob (The Secret Weapon)

The Type knob is not just a Knee selector. It changes the compression behavior.

| Type | Knee Width | Character | Ideally Used For |
| :--- | :--- | :--- | :--- |
| **Hard** | 0dB | Instant Clamp. | Bass, Limiting. |
| **Medium** | 6dB | Standard VCA. | Drums, General Mixing. |
| **Soft** | 15dB | Gradual on-ramp. | Vocals, Piano. |
| **Vintage** | 7dB | **Opto-Simulation.** | 808s, Vocals, Glue. |

**The "/R" Modes:**
Every type has a matching "/R" version (e.g., "Vintage/R").
*   **R = TCR (Transient Controlled Release).**
*   **Logic:** The Release time is not static. If a fast transient hits (snare), the release is fast. If a sustained bass note hits, the release is slow.
*   **Benefit:** Prevents "Pumping" on complex mixes.

---

## 🔁 Section 2: The "Vintage" Curve

Why is "Vintage" mode special?
*   **Standard Compressor:** Ratio stays constant above threshold (e.g., 4:1 forever).
*   **Vintage Compressor:** Ratio *decreases* as the signal gets significantly louder than the threshold.
    *   *Result:* Loud peaks are allowed to punch through slightly (Soft Saturation behavior), preserving transients while controlling the body. This mimics the Teletronix LA-2A.

---

## ⚡ Technical Specs: Latency

*   **PDC:** Older versions of FL Studio (pre-v20) had manual PDC issues with this plugin.
*   **Report Latency:** Always keep the "Report Latency" button checked.
*   **Lookahead:** Unlike Fruity Limiter, Fruity Compressor has minimal lookahead. It is reactive, meaning fast transients *will* clip through initially before the attack stage catches them. Use a Soft Clipper after it if this is a problem.

---

## 🧪 "Secret Sauce" Workflows

### 1. The "Glue" Bus Compressor
1.  **Type:** Vintage/R (TCR active).
2.  **Ratio:** 2.0:1.
3.  **Attack:** 30ms (Let transients punch).
4.  **Release:** 100ms (Auto-adjusts thanks to TCR).
5.  **Result:** Essential Drum Bus glue that breathes with the beat.

### 2. Snare Smash
1.  **Type:** Hard.
2.  **Ratio:** 8:1.
3.  **Attack:** 0.0ms (Instant).
4.  **Release:** 200ms.
5.  **Gain:** +12dB.
6.  **Result:** Transforms a weak acoustic snare into a splatty, aggressive block of noise.

### 3. Parallel Compression (The Mix Knob is missing!)
1.  **Issue:** Fruity Compressor has no Wet/Dry knob.
2.  **Workaround:**
    *   Use the **Mix Level** knob in the Plugin Wrapper (Top Right of the window).
    *   Set Compressor to extreme settings ("Nuke" mode).
    *   Turn the Wrapper Mix knob down to 50%.
