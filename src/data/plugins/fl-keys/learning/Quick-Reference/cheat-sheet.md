# FL Keys: The Lightweight Workhorse

> **Scope:** Piano, Rhodes, and Organ Simulation.
> **Source:** Image-Line Official Manual (v21.2) + Direct Analysis.
> **Complexity:** Low (Module).

## 🧠 The "Hybrid" Concept
FL Keys is not just a sampler. It uses a combination of **Samples** and **DSP Synthesis** to create lightweight key sounds.
*   **Samples:** Providing the core attack and tone.
*   **DSP:** Managing the decay, tremolo, and overdrive in real-time.
*   **Efficiency:** It uses < 1MB of RAM, making it the fastest piano to load for sketching.

**Signal Flow:**
`MIDI` -> **[SAMPLE SELECT]** -> **[VELOCITY MAP]** -> **[MUFFLE FILTER]** -> **[OVERDRIVE]** -> **[TREMOLO/PAN]** -> **[OUTPUT]**

---

## 🎛️ Section 1: The Environment Controls

The knobs on FL Keys are non-standard.

| Control | Function | The "Split" Behavior |
| :--- | :--- | :--- |
| **Decay** | Note Length. | **Min (0%):** Sustain Mode (Organ behavior). **>0%:** Piano decay behavior. |
| **Pan** | Auto-Pan / Tremolo. | **Left (0-50%):** Auto-Pan Intensity. **Right (50-100%):** Tremolo (Volume LFO) Intensity. |
| **Stereo** | Key Tracking Pan. | **Right:** Low notes Pan Left, High notes Pan Right (Player perspective). **Left:** Inverted (Audience perspective). |
| **Stretch** | Stretched Tuning. | Tunes high notes *sharp* (up to +50 cents) to mimic the inharmonicity of real acoustic piano strings. |

---

## 🔁 Section 2: Velocity "Hardness"

FL Keys does not just play louder when hit harder.

*   **Hardness Knob:** Adjusts the sample selection mapping.
    *   *High Hardness:* Even soft velocities trigger bright samples.
    *   *Low Hardness:* Even hard velocities trigger dark samples.
*   **Muffle:** A Low Pass Filter linked to velocity.
    *   *Usage:* Turn "Muffle" up to make soft notes sound darker and "woody".

---

## ⚡ Technical Specs: The 'Roto Organ'

FL Keys has a hidden identity.
1.  **Preset:** Select "Roto Organ".
2.  **Decay:** Set to **0%** (Sustain Mode).
3.  **Release:** Short.
4.  **Overdrive:** 50%.
5.  **LFO:** Set to Fast.
6.  **Pan Knob:** Set to Max Right (Tremolo).
7.  **Result:** A convincing B3 Hammond Organ with Leslie Speaker simulation (Tremolo).

---

## 🧪 "Secret Sauce" Workflows

### 1. The "Lo-Fi" Hip Hop Piano
1.  **Detune:** Increase slightly (Honky Tonk).
2.  **Overdrive:** 20% (Saturation).
3.  **Treble:** Decrease (Darker).
4.  **Muffle:** Increase to 80%.
5.  **Result:** A dark, dusty, detuned upright piano perfect for Boom Bap.

### 2. The "Dreamy" Rhodes
1.  **Preset:** Rhodes.
2.  **Pan Knob:** Turn Left (Auto-Pan).
3.  **LFO:** Slow speed.
4.  **Stereo:** Max Right (Wide).
5.  **Result:** The classic 70s Electric Piano sound that bounces between the speakers.

### 3. Stretched Tuning for Solos
1.  **Context:** Playing a high-pitched piano solo over a synth bass.
2.  **Issue:** The piano sounds flat compared to the synth (because real strings are sharp).
3.  **Action:** Turn **Stretch** to +20 cents.
4.  **Result:** The high notes sparkle more and cut through the mix, matching the psychoacoustic expectation of a Grand Piano.
