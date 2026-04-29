# Autogun: The Infinite Preset Machine

> **Scope:** Additive Synthesis, Seed Generation, and PADsynth.
> **Source:** Image-Line Official Manual (v21.2) + Direct Analysis.
> **Complexity:** Low (Interface) / Extreme (Engine).

## 🧠 The "Google of Synths" Concept
Autogun is not a traditional synthesizer; it is a **Procedural Generation Engine**. It contains 4,294,967,296 possible presets. It uses the "Ogun" synthesis engine (Additive Synthesis + PADsynth Resynthesis) under the hood but hides all controls except Volume and "Magic".

**Signal Flow:**
`Seed Number` -> **[OGUN ENGINE]** -> **[ADDITIVE RESYNTHESIS]** -> **[MAGIC DUST (SOUNDGOODIZER)]** -> **[OUTPUT]**

*   **Critical Nuance:** Every Autogun preset corresponds to an identical preset in the full version of **Ogun**. You can copy the preset number from Autogun and paste it into Ogun to unlock the "Edit Mode" for that sound.

---

## 🎛️ Section 1: The Controls

### The Trillions
| Control | Range | Function & Nuance |
| :--- | :--- | :--- |
| **Preset Selector** | 1 to 4 Billion | **The Seed.** <br> Each number is a unique algorithmic seed. <br> *Left/Right Arrows:* Step sequentially. <br> *Drop-down:* Jump to favorite. |
| **Magic Dust** | 0% - 100% | **Soundgoodizer.** <br> This is literally a built-in instance of Soundgoodizer (Maximus engine). <br> *0%:* Dry, metallic, thin. <br> *100%:* Compressed, saturated, polished. |
| **Volume** | 0% - 200% | **Gain.** <br> NOTE: Goes to 200%. Some Autogun presets are naturally quiet due to additive cancellation; this knob compensates. |

### The "Ogun" Connection
Autogun has a hidden feature: **Cross-Plugin Compatibility**.
1.  **Copy:** Click the "Key" icon or "Preset Number" area.
2.  **Paste:** Open the full plugin **Ogun**. Go to Options -> "Enter random preset number".
3.  **Unlock:** You now have full control over the harmonics, envelopes, and filters of that Autogun sound.

---

## 🔁 Section 2: Synthesis Engine (Under the Hood)

Even though you can't see them, Autogun is using these modules:

1.  **Additive Synthesis:** Summing up to 32,767 individual sine waves (Harmonics).
2.  **PADsynth:** A "blurring" algorithm that smears harmonics to create lush, bell-like pads.
3.  **Richness:** Autogun presets generally have High Richness settings, which causes high CPU usage.

---

## ⚡ Technical Specs: Performance Notet

*   **CPU Spikes:** Autogun uses FFT (Fast Fourier Transform) to generate sounds.
    *   **Uniformity:** CPU usage is "Non-Uniform". It spikes when a note *starts* (calculation phase).
    *   **Dropouts:** If you hear clicks, increase your buffer size.
*   **Latency:** Autogun introduces small latency due to the Lookahead in the "Magic Dust" (Soundgoodizer) section.

---

## 🧪 "Secret Sauce" Workflows

### 1. The "Preset Mining" Expedition
1.  **Goal:** Find a unique texture.
2.  **Method:** Hold the "Right Arrow" button.
3.  **Listen:** Wait for something that catches your ear.
4.  **Save:** Don't just save the FLP. **Write down the Preset Number**. If you lose it, you will *never* find it again (statistical probability is near zero).

### 2. The "Ogun" Expansion
1.  **Find:** A cool bell sound in Autogun (e.g., Preset #42069).
2.  **Problem:** The decay is too short.
3.  **Action:** Copy the number. Open Ogun. Paste.
4.  **Edit:** In Ogun, increase the Release time of the Master Envelope.
5.  **Result:** You just modded an Autogun preset.

### 3. The "Ambience" Layer
1.  **Magic Dust:** Set to 0%.
2.  **External FX:** Add Fruity Reeverb 2 (Large Hall, 10s Decay).
3.  **Result:** Because Autogun sounds are often metallic and rich in harmonics, they make incredible sources for "Shimmer Reverbs."
