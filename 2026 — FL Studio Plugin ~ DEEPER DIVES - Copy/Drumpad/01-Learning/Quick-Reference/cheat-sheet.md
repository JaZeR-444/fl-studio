# Drumpad: The Single-Voice Sculptor

> **Scope:** Physical Modeling (Percussion).
> **Source:** Image-Line Official Manual (v21.2) + Direct Analysis.
> **Complexity:** Medium (Sound Design).

## 🧠 The "Drumaxx Lite" Concept
Drumpad is effectively a **Single Voice** version of Drumaxx.
*   **Engine:** It uses the same physical modeling engine (Mesh + SOF).
*   **Purpose:** While Drumaxx simulates an entire *kit* (16 pads), Drumpad focuses on creating *one perfect drum*. It is CPU-efficient and ideal for layering.
*   **Advantage:** You can load Drumpad into Patcher or instrument channels without the overhead of the full sequencer.

**Signal Flow:**
`MIDI Trigger` -> **[MALLET]** -> **[MEMBRANE]** -> **[SOF]** -> **[EQ]** -> **[OUTPUT]**

---

## 🎛️ Section 1: The Physics Controls

### Mallet (The Exciter)
*   **Decay:** Hardness of the stick. Short = Wood, Long = Felt.
*   **Noise:** Simulates snares/brushes.
*   **Phase:** Changes the "click" character of the impact.

### Membrane (The Resonator)
*   **Tension:** The primary tuning knob.
*   **Material:** The damping factor. Left = Heavy/Dull (Tom). Right = Metallic/Light (Cymbal).
*   **Shape:** Square vs Round boundary. Square creates inharmonic "gong" tones. Focus on "Round" for realistic drums.

### SOF (Self Oscillating Filter)
This is the "cheat code" for kick drums.
*   **Function:** Reinforces the fundamental frequency with a pure sine sweep.
*   **Usage:** If your modeled kick sounds "thin" (just skin slapping), dial in the SOF at 50-60Hz to add the "Oomph".

---

## 🔁 Section 2: Frequency Filtering

Drumpad divides the spectrum into three bands for shaping.

| Band | Controls | Usage |
| :--- | :--- | :--- |
| **Low** | Freq, Res | Adds body resonance or cuts mud. |
| **Mid** | Freq, Level, EQ Freq/Level | This is the most complex section. It has dynamic modulation (EQ Freq/Level) that moves *after* the hit, simulating pitch envelopes or nonlinear vibration. |
| **High** | Freq, Level | Controls the "Stick Click" and "Air". |

---

## ⚡ Technical Specs: Velocity Modulation

Like Drumaxx, Drumpad has a matrix for velocity.
*   **Targets:** 4 slots.
*   **Range:** Bi-polar (- to +).
*   **Common Mappings:**
    *   `Vel -> Membrane Tension`: Harder hits pitch up slightly (realistic real-world physics).
    *   `Vel -> Mallet Noise`: Harder hits excite the snare wires more.
    *   `Vel -> Decay`: Harder hits ring out longer.

---

## 🧪 "Secret Sauce" Workflows

### 1. The "Tuneable" 808
1.  **Membrane:** Set Decay to 0 (Mute).
2.  **SOF:** This is now your oscillator. Use SOF Decay to shape the tail.
3.  **Advantage:** Unlike a sample, you can automate parameters like "Decay" or "Drive" (via Distortion plugins) without time-stretch artifacts.

### 2. Physical Claps
1.  **Mid Filter:** Set **Retrig** to II or III.
2.  **Mallet:** High Noise.
3.  **Result:** The retriggering creates the "flam" effect of multiple hands clapping, which is hard to synthesize with standard oscillators.

### 3. Metallic Percussion (Gamelan)
1.  **Shape:** Square.
2.  **Material:** Max Right (Metal).
3.  **Tension:** High.
4.  **Result:** Bell-like tones that don't sound like standard FM synth bells; they have complex, chaotic decay tails.
