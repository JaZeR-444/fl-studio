# Fruity Fast Dist: The CPU Saver

> **Scope:** Hard Clipping, Gabber Kicks, and Parallel Dirt.
> **Source:** Image-Line Official Manual (v21.2) + Direct Analysis.
> **Complexity:** Low (Essential).

## 🧠 The "Fast" Concept
Why use Fast Dist instead of Distructor or Waveshaper?
*   **Speed:** It uses negligible CPU.
*   **Tone:** It has a specific aggressive character (Foldback-like) that sounds great on mono-synths.
*   **Mix:** It has a built-in Dry/Wet knob, making parallel distortion instant.

**Signal Flow:**
`Input` -> **[PRE AMP]** -> **[THRESHOLD (Waveshaper)]** -> **[POST GAIN]** -> **[MIX]** -> **[OUTPUT]**

---

## 🎛️ Section 1: The Threshold Logic

*   **Preamp (PRE):** Drives the signal *into* the distortion.
*   **Threshold (THRES):** This is not a compressor threshold. It's a **Ceiling**.
    *   *Lower Threshold:* The signal hits the ceiling earlier -> More Distortion.
    *   *Higher Threshold:* Less Distortion.
    *   *Warning:* Unlike a limiter, hitting the threshold creates immediate harmonic distortion.

---

## 🔁 Section 2: A vs B

*   **Type A:** Hard, Digital, Buzzing. Good for Leads.
*   **Type B:** Rounder, Fuzzier, Warmer. Good for Bass.
*   *Note:* The difference is subtle on low settings but obvious when driven hard.

---

## ⚡ Technical Specs: Parallel Processing

*   **Mix Knob:** The secret weapon.
*   **Workflow:**
    1.  Crank the Distortion to 100% (Destroy the sound).
    2.  Dial the Mix knob back to 20%.
    3.  **Result:** You get the transient punch of the dry signal + the harmonic excitement of the wet signal. This is "New York Distortion".

---

## 🧪 "Secret Sauce" Workflows

### 1. The "Gabber" Kick
1.  **Input:** 909 Kick.
2.  **Pre:** Max.
3.  **Thres:** Low (crush it).
4.  **Type:** B.
5.  **Mix:** 100%.
6.  **Result:** Essential Hardcore/Techno texture.

### 2. Snare "Crack"
1.  **Pre:** High.
2.  **Thres:** Medium.
3.  **Mix:** 15% (Mostly Dry).
4.  **Result:** Adds a layer of white noise/sizzle to the snare top end without ruining the fundamental body.

### 3. Sub Bass Definition
1.  **Context:** Sinewave sub is invisible on small speakers.
2.  **Action:** Add Fast Dist.
3.  **Setting:** Very subtle drive (Pre low, Thres high). Mix 10%.
4.  **Result:** Generates upper harmonics (Overtones) that exist in the mid-range. Now the sub is audible on phones.
