# Fruity Filter: The State Variable

> **Scope:** Sweeps, Notch Filtering, and Phase Cancellation.
> **Source:** Image-Line Official Manual (v21.2) + Direct Analysis.
> **Complexity:** Low (Academic).

## 🧠 The "Mix" Concept
Most filters give you a switch: LP **OR** HP.
Fruity Filter gives you **Faders**: LP **AND** HP.
*   **State Variable:** It calculates all filter states simultaneously.
*   **Topology:** Likely a 12dB/Octave (2-Pole) design.
*   **Benefits:** You can create custom filter shapes by blending the outputs.

**Signal Flow:**
`Input` -> **[SV FILTER CORE]** -> **[LP/BP/HP MIX]** -> **[OVERSAMPLING]** -> **[OUTPUT]**

---

## 🎛️ Section 1: The Mix Knobs

*   **Low Pass:** Frequencies below Cutoff.
*   **High Pass:** Frequencies above Cutoff.
*   **Band Pass:** Frequencies around Cutoff.
*   **Combinations:**
    *   *LP + HP:* **Notch Filter** (Band Stop). This removes the middle but keeps the lows and highs.
    *   *All 3:* All Pass / Phasing effect (if phase relationships align).

---

## 🔁 Section 2: "Center" & "x2"

*   **Center:** Removes DC Offset.
    *   *Why:* Fast filter sweeps can generate low-frequency "thumps" or direct current bias. This fixes it.
*   **x2 (Oversampling):** Runs the internal loop at double sample rate.
    *   *Use:* Essential for High Resonance sweeps to prevent the filter from "exploding" or aliasing near Nyquist.

---

## ⚡ Technical Specs: 12dB Slope

*   **Steepness:** The filter is gentle (12dB/Oct). It is not a brickwall.
*   **Resonance:** Self-oscillates easily. The Resonance boosts the Cutoff frequency significantly.
*   **Sound:** It has a "wet", "acid" character typical of State Variable filters (like the Oberheim SEM).

---

## 🧪 "Secret Sauce" Workflows

### 1. Manual Notch Sweep (Phaser)
1.  **Low Pass:** 100%.
2.  **High Pass:** 100%.
3.  **Band Pass:** 0%.
4.  **Action:** Sweep the **Cutoff**.
5.  **Result:** You hear a "hole" moving through the spectrum. This is the classic DJ "Nutella" effect (removing bass/mids without losing energy).

### 2. The "DJ" Kill Switch
1.  **Low Pass:** Link to a button.
2.  **High Pass:** Link to a button.
3.  **Cutoff:** Set to 200Hz.
4.  **Action:** Toggle LP Off and HP On instantly (Bass Kill).

### 3. Parallel Resonant Peak
1.  **Context:** You want to boost a specific frequency without cutting others (Peaking EQ behavior).
2.  **Setup:**
    *   **Band Pass:** 100%.
    *   **Resonance:** High.
    *   **Mix:** Use the FL Mixer's Dry/Wet knob (Fruity Filter doesn't have a Dry knob, only filter outputs).
    *   *Wait:* If you blend the Filter output with the Dry signal, you create a Peaking EQ.
