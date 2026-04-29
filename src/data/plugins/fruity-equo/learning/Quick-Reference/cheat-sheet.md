# Fruity Equo: The Morphing Graphic EQ

> **Scope:** Creative EQ, Live Performance, and Frequency Splitting.
> **Source:** Internal Knowledge (Manual URL unavailable).
> **Complexity:** Medium (Routing).

## 🧠 The "Motion" Concept
Equo is not for surgical mixing (use PEQ2 for that). Equo is for **Movement**.
*   **Architecture:** A Graphic EQ with 8 separate Banks.
*   **Morph:** You can smoothly crossfade between these 8 banks using the **Morph** knob.
*   **Vol/Pan:** Each frequency band has its own Volume AND Panning slider.

**Signal Flow:**
`Input` -> **[BAND SPLIT]** -> **[VOL/PAN PER BAND]** -> **[SENDS]** -> **[MORPH INTERPOLATION]** -> **[SUM]** -> **[OUTPUT]**

---

## 🎛️ Section 1: The Morph Knob

The heart of Equo.
*   **Setup:**
    *   Select Bank 1. Draw a "Low Pass" curve.
    *   Select Bank 2. Draw a "High Pass" curve.
*   **Perform:** Automate the **Morph** knob from 0 to 1/8.
*   **Result:** The EQ shape fluidly transforms from LP to HP. This allows for complex filter sequences that are impossible with standard parametrics.

---

## 🔁 Section 2: Frequency Splitting (The Send Matrix)

Equo can route specific bands to other mixer tracks.
*   **How:** In the **Send** section (top right?).
*   **Action:** You can tell the "Low Bands" to go to Send 1, and "High Bands" to go to Send 2.
*   **Application:**
    *   Distort the Highs (Send 2) while keeping the Lows clean (Send 1).
    *   This makes Equo a powerful **Multi-Band Splitter**.

---

## ⚡ Technical Specs: The Shift Knob

*   **Function:** Moves the center frequencies of the bands up or down.
*   **Effect:**
    *   *Static EQ:* It changes the timbre.
    *   *Dynamic:* Automating "Shift" creates a **Shepard Tone** or Phaser-like effect as the gaps between bands sweep through the spectrum.

---

## 🧪 "Secret Sauce" Workflows

### 1. The "Talkbox" Vowel Filter
1.  **Bank 1:** Boost Low-Mids ("Ooo").
2.  **Bank 2:** Boost High-Mids ("Aaa").
3.  **Bank 3:** Boost Highs ("Eee").
4.  **Action:** Quickly automate the Morph knob between 1-3.
5.  **Result:** The spectral footprint mimics the human vocal tract changing shape.

### 2. Stereoizer EQ
1.  **Concept:** Pan different frequencies to different ears.
2.  **Action:**
    *   Draw a "Zig-Zag" pattern in the **Pan** graph (toggle from Vol to Pan).
    *   Low bands Left, Mid bands Right, High bands Left.
3.  **Result:** Creates a wide, spacious image that doesn't collapse phase like delay-based wideners.

### 3. Cleaning Mud
1.  **Usage:** Put Equo on the Master.
2.  **Analyze:** Watch the background display.
3.  **Action:** Identify the muddy frequency accumulation.
4.  **Cut:** Drag that specific band down. Because it's a Graphic EQ, it's very fast to "draw" the tonal balance you want.
