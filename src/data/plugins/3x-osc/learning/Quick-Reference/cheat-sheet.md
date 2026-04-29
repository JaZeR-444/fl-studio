# 3x Osc: The Subtractive Synthesis Titan

> **Scope:** Synthesis Architecture, Anti-Aliasing, and Modulation.
> **Source:** Image-Line Official Manual (v21.2) + Direct Analysis.
> **Complexity:** Low-Medium.

## 🧠 The "Fundamental" Concept
3x Osc is a lightweight, subtractive synthesizer. Its power comes not from complex filters (it has none internally), but from its integration with the Channel Settings (INS/MISC tabs) and its raw oscillator purity.

**Signal Flow:**
`Oscillators 1,2,3` -> **[AM MODULATION]** -> **[PHASE OFFSET]** -> **[DETUNE/PAN]** -> **[MIXING]** -> **[CHANNEL SVF FILTER]** -> **[OUTPUT]**

*   **Critical Nuance:** 3x Osc relies heavily on the **instrument channel settings** for envelopes (ADSR) and filtering. If you don't use the INS tab, it's just a raw drone generator.

---

## 🎛️ Section 1: Oscillator Architecture

### Shapes & Selection
| Shape | Harmonic Content | Best Use |
| :--- | :--- | :--- |
| **Sine** | Fundamental only. | Sub-bass, AM Modulator source. |
| **Triangle** | Odd harmonics (steep roll-off). | Flutes, soft leads. |
| **Square** | Odd harmonics (no roll-off). | Chip-tune, hollow bass. |
| **Saw** | All harmonics (Even + Odd). | Trance leads, Reese bass. |
| **Rounded Saw** | Softened harmonics. | Warm analog pads. |
| **Noise** | Random white noise. | Percussion, FX, "Air". |
| **Custom** | *Uses the Sample in the Channel.* | Single-cycle wavetable synthesis. |

### The Mix Logic (The "Ratio" Trap)
The mix knobs are not independent volume knobs. They are ratios.

*   **Osc 1:** Has NO mix knob. It is always the reference (100%).
*   **Osc 2:** Mixes *into* the sum. 50% = Equal volume with Osc 1.
*   **Osc 3:** Mixes *into* the sum of (1+2). 33% = Equal volume with (1+2).
*   **Math:** To get 3 equal oscillators, set Osc 2 to 50% and Osc 3 to ~33%.

---

## 🔁 Section 2: Phase & Detune Physics

### Phase Offset (The "Click" Maker)
*   **Knob:** Sets where the waveform starts (0 - 360 degrees).
*   **Stereo Offset:** The knob has a stereo deviation. Left channel starts at 0, Right at 180.
    *   **Result:** Extreme stereo width on headphones.
*   **Warning:** Non-zero phase starts can cause "Clicks" at the start of a note.
    *   **Fix:** Add 2ms of Attack in the INS envelope.

### Phase Invert (Cancellation)
*   **Switch:** Inverts the polarity.
*   **Use Case:** If Osc 1 is a Saw, and Osc 2 is an Inverted Saw at the same volume... Silence.
    *   **Modulation:** Slightly detuning Osc 2 creates a PWM (Pulse Width Modulation) effect as they drift in and out of cancellation.

---

## 🌊 Section 3: Advanced Features

### AM OSC 3 (Amplitude Modulation)
*   **Function:** Osc 3 stops making sound. instead, it modulates the volume of Osc 1+2.
*   **Physics:** This creates "Sidebands" (Sum and Difference frequencies).
*   **Result:** Bell tones, metallic textures, and aggressive growls.
*   **Tip:** Use a Sine wave on Osc 3 for clean ring modulation.

### HQ (Anti-Aliasing)
*   **Off:** Raw digital oscillators. High notes will "fold back" and create dissonant noise (Aliasing). Good for Chip-tune.
*   **On:** Band-limited oscillators. Clean up to 20kHz. Essential for modern leads.

---

## ⚡ Technical Specs: The "Custom" Shape

When you select the "Die" icon (Question mark or waveform icon depending on skin):

1.  **Source:** It looks at the **SMP** tab of the Channel Settings.
2.  **Usage:** Drag a single-cycle waveform (e.g., "Galbanum - Architecture Waveforms") onto the channel.
3.  **Result:** 3x Osc becomes a Wavetable Synthesizer. You can stack 3 copies of that wavetable, detune them, and filter them.

---

## 🧪 "Secret Sauce" Workflows

### 1. The "Reese" Bass
1.  **Osc 1:** Saw.
2.  **Osc 2:** Saw. Mix 50%.
3.  **Detune:** Fine tune Osc 2 by -15 cents. Fine tune Osc 1 by +15 cents.
4.  **Result:** Massive phasing movement.

### 2. The "Chip" Arp
1.  **Osc 1:** Square.
2.  **Osc 2:** Square. Mix 25%. Coarse Pitch +12 (Octave).
3.  **Osc 3:** Noise. Mix 10%.
4.  **HQ:** OFF (Crucial for the grit).
5.  **Envelope:** Short Decay, no Sustain.

### 3. The "Pseudo-FM" Bell
1.  **Osc 1:** Sine.
2.  **Osc 2:** Sine. Coarse +7 (Fifth).
3.  **Osc 3:** Sine. Coarse +12.
4.  **Mode:** Turn ON **AM OSC 3**.
5.  **Result:** Osc 3 vibrates Osc 1+2 creates metallic inharmonics.
