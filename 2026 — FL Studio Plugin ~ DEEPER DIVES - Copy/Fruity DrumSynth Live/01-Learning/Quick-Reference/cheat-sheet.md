# Fruity DrumSynth Live: The Performance Machine

> **Scope:** Live Drum Synthesis, Key Mapping, and Patch Morphing.
> **Source:** Image-Line Official Manual (v21.2) + Direct Analysis.
> **Complexity:** Medium (Patch Management).

## 🧠 The "Live" Concept
Unlike FPC (Samples) or Drumaxx (Physical Modeling), **DrumSynth Live** is a layout-focused synthesizer designed for keyboard players.
*   **Key Mapping:** Every key on the keyboard (C0 to B9) can hold a unique drum patch.
*   **Architecture:** It uses the "DrumSynth" engine (Subtractive/FM/Ring Mod).
*   **Live Use:** You can switch between 120 distinct drum sounds instantly without loading samples.

**Signal Flow:**
`MIDI Key` -> **[OSC 1 (Tone)]** + **[OSC 2 (Noise/Ring)]** + **[SAMPLE LAYER]** -> **[FILTER]** -> **[OUTPUT]**

---

## 🎛️ Section 1: The Oscillator Pair

*   **OSC 1 (Body):**
    *   *Sweep Tone:* A sine wave that sweeps pitch (Kick/Tom).
    *   *Noise:* White noise (Snare/Hat).
*   **OSC 2 (Texture):**
    *   *Bandwidth:* Controls the "noisiness".
    *   *Ring Mod:* Multiplies Osc 1 * Osc 2. This creates metallic cymbals and bells.
*   **Sample Layer:** You can layer a PCM sample on top for the attack transient.

---

## 🔁 Section 2: The Morph Engine

Fruity DrumSynth Live has a unique feature: **Morphing**.
*   **Concept:** You can morph the parameters of the *current* patch into the parameters of *another* patch in real-time.
*   **Control:** The **Morph Amount** knob.
*   **Application:**
    *   Start with a "Clean Kick" patch.
    *   Select "Distorted Kick" in the Morph Menu.
    *   Automate the Morph Knob to blend them.
    *   *Note:* It morphs the *synthesis parameters*, not just crossfading audio.

---

## ⚡ Technical Specs: 120 Patches

*   **Architecture:** The plugin stores 120 patches internally.
*   **Selection:**
    *   *Edit Mode:* Click a key on the virtual keyboard to "Select" that patch for editing.
    *   *Play Mode:* Pressing a MIDI key plays the patch assigned to that note.
*   **Copy/Paste:** Right-click a key to Copy/Paste patches. Essential for building kits.

---

## 🧪 "Secret Sauce" Workflows

### 1. The "Tone" Snare
1.  **OSC 1:** Noise Mode. Bandwidth High.
2.  **OSC 2:** Sweep Mode. High Pitch. Ring Mod ON.
3.  **Result:** The Oscillator Ring Mod creates the metallic "shell" sound of the snare, while Osc 1 provides the wires.

### 2. Laser Zaps (Kraftwerk Style)
1.  **OSC 1:** Sweep Tone.
2.  **Sweep Time:** Long.
3.  **Sweep Range:** Wide (High to Low).
4.  **Decay:** Matches the Sweep.
5.  **Result:** The classic 80s "Pew" sound. DrumSynth is the best plugin in FL for this specific sound.

### 3. Hi-Hat Morphing
1.  **Patch C4:** Closed Hat (Short decay).
2.  **Patch C#4:** Open Hat (Long decay).
3.  **Setup:** Go to C4. Set "Morph To" -> C#4.
4.  **Perform:** Play C4 repeatedly while turning the Morph knob. The Hi-Hat slowly opens up.
