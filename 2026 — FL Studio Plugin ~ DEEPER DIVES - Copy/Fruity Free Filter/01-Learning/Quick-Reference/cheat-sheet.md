# Fruity Free Filter: The Biquad Workhorse

> **Scope:** Standard EQ, Shelving, and Automation.
> **Source:** Image-Line Official Manual (v21.2) + Direct Analysis.
> **Complexity:** Low (Standard).

## 🧠 The "Free" Concept
Why use Free Filter instead of Fruity Filter?
*   **Topology:** It uses **Biquad** algorithms (likely) vs Variable State.
*   **Types:** It offers **Shelving** and **Peaking** shapes, which Fruity Filter does not.
*   **Automation:** It is designed specifically to be lightweight and automatable without zipper noise.

**Signal Flow:**
`Input` -> **[TYPE SELECTOR]** -> **[FREQ/Q/GAIN]** -> **[OUTPUT]**

---

## 🎛️ Section 1: The Gain Knob

This knob confuses people because it does nothing on 50% of the settings.
*   **Active Zones:**
    *   **Peaking EQ:** Boosts/Cuts the bell curve.
    *   **Low Shelf:** Boosts/Cuts the low end.
    *   **High Shelf:** Boosts/Cuts the high end.
*   **Inactive Zones:**
    *   **Low Pass / High Pass:** Gain has no effect. The volume is determined by resonance and input.

---

## 🔁 Section 2: Q Factor

*   **Resonance:** In LP/HP modes, Q creates a resonant peak at the cutoff (Acid sound).
*   **Bandwidth:** In Peaking/Notch modes, Q controls the width of the cut/boost.
    *   *High Q:* Surgical cut.
    *   *Low Q:* Musical, broad boost.

---

## ⚡ Technical Specs: Filter vs EQ

*   **Filter:** Low Pass, High Pass, Band Pass, Notch. (Removes frequencies).
*   **EQ:** Low Shelf, High Shelf, Peaking. (Balances frequencies).
*   **Note:** Free Filter combines both paradigms in one knob switch. This makes it useful for "one-knob" FX chains where you might want to automate from a Low Pass into a High Level EQ boost.

---

## 🧪 "Secret Sauce" Workflows

### 1. The "Wah" Pedal
1.  **Type:** Band Pass (Or Peaking).
2.  **Q:** High.
3.  **Freq:** Link to Manual Controller (Foot Pedal).
4.  **Action:** Rocking the freq back and forth creates the vowel "Wah-Wah" sound.

### 2. Manual De-Essing
1.  **Type:** Peaking.
2.  **Freq:** 7kHz.
3.  **Q:** Sharp.
4.  **Gain:** Negative.
5.  **Result:** Static reduction of sibilance.

### 3. The "Telephone"
1.  **Type:** Band Pass.
2.  **Freq:** 1kHz.
3.  **Q:** Low (Wide).
4.  **Result:** Removes lows and highs, leaving only the mid-range voice band.
