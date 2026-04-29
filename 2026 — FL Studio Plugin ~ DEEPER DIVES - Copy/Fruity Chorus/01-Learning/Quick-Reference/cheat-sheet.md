# Fruity Chorus: The Classic Widener

> **Scope:** Modulation, Stereo Width, and Detuning.
> **Source:** Image-Line Official Manual (v21.2) + Direct Analysis.
> **Complexity:** Low (Legacy).

## 🧠 The "Multi-Voice" Concept
Fruity Chorus is deeper than it looks. It uses **3 Independent LFOs** to modulate the delay lines.
*   **Standard Chorus:** Usually has 1 LFO.
*   **Fruity Chorus:** Has 3. This allows for complex, swirling textures that don't just sound like a simple sine wave wobble.
*   **Algorithm:** It detunes delayed copies of the incoming signal.

**Signal Flow:**
`Input` -> **[CROSSOVER SPLIT]** -> **[DELAY LINE (Modulated by 3 LFOs)]** -> **[STEREO SPREAD]** -> **[MIX]** -> **[OUTPUT]**

---

## 🎛️ Section 1: The LFO Engine

Most people ignore the bottom section.
*   **LFO 1 / 2 / 3:** You can stack them.
*   **Frequencies:** Set them to different rates (prime numbers are good, e.g., 0.3Hz, 0.7Hz, 1.1Hz) to avoid rhythmic looping patterns.
*   **Waveform:**
    *   *Sine:* Smooth.
    *   *Multi-Sine:* A Sine mixed with a 3x faster Sine (Harmonic LFO). This creates a "shimmering" vibration.

---

## 🔁 Section 2: Stereo & Delay Physics

*   **Delay:** The gap between the Dry signal and the Wet copy.
    *   *Low (<10ms):* Flanger territory (Metallic).
    *   *Medium (15-20ms):* Thick Chorus.
    *   *High (>25ms):* Doubling / Slapback echo.
*   **Stereo (Phase):**
    *   *0 Degrees:* L and R modulate together (Mono compatible).
    *   *180 Degrees:* L goes Up when R goes Down. Maximum width, but disappears in Mono.
    *   *Golden Rule:* Set to **10-45 Degrees** for width that doesn't ruin mono compatibility.

---

## ⚡ Technical Specs: The Crossover (Bass Safe)

Fruity Chorus is "Basement Approved".
*   **Cross Type:**
    *   *Process HP:* Adds chorus ONLY to high frequencies. **Essential for Bass**.
    *   *Process LP:* Adds chorus ONLY to low frequencies. (Weird, creates muddy rumble).
*   **Cross Cutoff:** Sets the split point.
    *   *Usage:* Set to 300Hz in "HP" mode to keep your Sub Bass mono and clean, while widening the mid-range growl.

---

## 🧪 "Secret Sauce" Workflows

### 1. The "Juno-60" Emulator
1.  **Delay:** 0.5ms (Very short).
2.  **Depth:** High.
3.  **LFO 1 only:** Sine, Slow rate.
4.  **Stereo:** 0.
5.  **Result:** The thick, BBD-style analog chorus found on vintage synths.

### 2. Vocal Thickener (Invisible Chorus)
1.  **Delay:** 10-15ms.
2.  **Depth:** Very Low (Subtle movement).
3.  **Stereo:** 90 degrees.
4.  **LFOs:** Active all 3 at different slow speeds.
5.  **Result:** The vocal sounds "wider" and "larger" without sounding like it has an obvious modulation effect on it.

### 3. Hyper-Stereo Bass
1.  **Cross Type:** Process HP.
2.  **Cutoff:** 400Hz.
3.  **Stereo:** 180 (Max).
4.  **Result:** The sub stays dead center (punchy), but the upper harmonics wrap around the listener's head.
