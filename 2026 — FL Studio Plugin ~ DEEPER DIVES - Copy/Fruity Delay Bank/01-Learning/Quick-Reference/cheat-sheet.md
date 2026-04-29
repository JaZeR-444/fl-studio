# Fruity Delay Bank: The Sound Design Monster

> **Scope:** Multi-Tap Delay, Granular Echo, and Parallel Processing.
> **Source:** Image-Line Official Manual (v21.2) + Direct Analysis.
> **Complexity:** Very High (Modular).

## 🧠 The "Matrix" Concept
Fruity Delay Bank is not just a delay; it is **8 Delays** in a trench coat.
*   **Structure:** 8 identical Banks.
*   **Routing:** Banks can feed into each other (Series) or run side-by-side (Parallel).
*   **Power:** Each bank has its own dedicated **Filter**, **Distortion** (via overdrive on gain?), and **Granulizer**.

**Signal Flow (Per Bank):**
`In` -> **[INPUT FILTER]** -> **[DELAY LINE (Granular)]** -> **[FEEDBACK LOOP (Feedback Filter)]** -> **[OUT]**

---

## 🎛️ Section 1: The Architecture

*   **Bank Select:** The tabs 1-8 at the top select the bank you are editing.
*   **Enable Switch:** The LED next to the tab name turns that bank On/Off.
*   **Routing:** The "Next" knob (implied in routing logic, often default is parallel in global?). *Correction:* Delay Bank is typically **Parallel** by default unless chained?
    *   *Actually:* It processes the input signal through all enabled banks simultaneously, but sophisticated chaining is possible via dry/wet management? No, usually parallel.

---

## 🔁 Section 2: Two Filters?

Each bank has two distinct filters. This is confusing for beginners.
1.  **FILT (Input Filter):** Colors the sound *before* it enters the delay line (or after, depending on "POST" switch).
    *   *Use:* To create a "Telephone" delay, use a Band Pass here.
2.  **FB FILT (Feedback Filter):** Colors the sound *inside* the feedback loop.
    *   *Use:* To make echoes get darker over time (Tape Style), use a Low Pass here.

---

## ⚡ Technical Specs: The Granulator

*   **GRAIN Section:**
    *   **DIV (Division):** Chops the echo into tiny slices.
    *   **SH (Shape):** Smooths the envelope of the slices.
*   **Effect:**
    *   *Low Div:* Stuttery, glitchy echoes.
    *   *High Div:* Smooth, time-stretched textures.
    *   *Zero Div:* Standard Delay behavior.

---

## 🧪 "Secret Sauce" Workflows

### 1. The "Arpeggiated" Delay
1.  **active Banks:** 1, 2, 3, 4.
2.  **Times:** Set them to rhythmic intervals (e.g., 3 steps, 5 steps, 7 steps, 9 steps).
3.  **Pans:** Pan Bank 1 Hard Left, Bank 2 Left-Center, Bank 3 Right-Center, Bank 4 Hard Right.
4.  **Result:** One input note creates a cascading melody that moves across the stereo field.

### 2. Grain Shimmer
1.  **Bank 1:** Active.
2.  **Grain Div:** High.
3.  **Feedback:** High.
4.  **FB Filter:** High Pass.
5.  **Result:** The echoes dissolve into a sparkly mist rather than distinct repeats. Structure acts like a poor man's granular cloud.

### 3. "Filter Sweep" Echoes
1.  **Bank 1:** Band Pass Filter on Feedback.
2.  **Automation:** Automate the **FB FILT CUT** knob.
3.  **Result:** Echoes play back while the filter sweeps up and down, creating a phaser-like movement on the delay tail only.
