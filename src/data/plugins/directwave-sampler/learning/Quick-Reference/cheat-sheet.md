# DirectWave: The Samper Flagship

> **Scope:** Multi-Sampling, SoundFont Import, and Subtractive Synthesis.
> **Source:** Image-Line Official Manual (v21.2) + Direct Analysis.
> **Complexity:** Very High (Sampler Architecture).

## 🧠 The "Zone" Concept
DirectWave is not just a sample player; it is a **Zone-Based Synthesizer**.
*   **Zone:** A single sample file mapped to a specific Key Range and Velocity Range.
*   **Program:** A collection of Zones (a "Patch").
*   **Bank:** A collection of 16 Programs (Multi-timbral).

**Signal Flow:**
`MIDI Note` -> **[ZONE SELECTION]** -> **[VOICE START]** -> **[FILTER 1/2]** -> **[AMP ENV]** -> **[INSERT FX]** -> **[SEND FX]** -> **[OUTPUT]**

*   **Critical Nuance:** DirectWave has two types of effects:
    1.  **Insert FX (Per Voice):** Ring Mod, Decimator, Quantizer, Phaser. These are polyphonic and computed *per note*.
    2.  **Send FX (Global):** Chorus, Delay, Reverb. These are computed *once* for the whole mix.

---

## 🎛️ Section 1: The Modulation Matrix

The Matrix is the brain of DirectWave. It allows you to wire anything to anything.

| Source | Target | The "Mod Amt" Trick |
| :--- | :--- | :--- |
| **LFO 1** | **Filter Cutoff** | Standard Wobble Bass. |
| **Velocity** | **Sample Start** | Harder hits start later in the sample (or earlier). |
| **Key Track** | **Pan** | Low notes Left, High notes Right (Piano spacing). |
| **Mod Amt** | **(Self)** | This is a "Meta-Modulator". You uses this to modulate the *strength* of another modulation row (e.g., LFO 2 modulates the *Amount* of LFO 1 -> Pitch). |

---

## 🔁 Section 2: Filter Topology

DirectWave borrows filters from other Image-Line synths.

*   **Serial vs Parallel:** You can route Filter 1 into Filter 2 (Serial) or run them side-by-side (Parallel).
*   **Types:**
    *   **Vanilla:** LP, HP, BP, Notch ( Standard).
    *   **MiniSynth:** The gritty, dirty filter from the FL Mobile "MiniSynth".
    *   **Vox:** Formant filter (A, E, I, O, U vowels).
*   **Drive:** The "Shape" knob adds hard-clipping distortion *post-filter*.

---

## ⚡ Technical Specs: The "Monolothic" Mode

*   **Standard Mode:** DirectWave references samples on your hard drive. If you move the files, the patch breaks.
*   **Monolithic Mode:** Saves the audio data *inside* the `.dwp` (DirectWave Preset) file.
    *   **Pros:** Totally portable. Shareable.
    *   **Cons:** Giant file sizes. Long load times.
*   **Total Recall:** In FL Studio, if you don't use Monolithic mode, FL saves the sample paths in the project.

---

## 🧪 "Secret Sauce" Workflows

### 1. VST Sampling (The "Cloner")
DirectWave can steal sounds from other VSTs.
1.  **Right-Click:** The Channel Button of any VST (e.g., Serum).
2.  **Select:** "Create DirectWave instrument".
3.  **Settings:**
    *   *Keys to sample:* Every 3 semitones (reduces size).
    *   *Velocity Layers:* 3 (Soft, Med, Hard).
4.  **Result:** FL Studio automates the VST, records every note, and builds a perfect DirectWave patch. You can now delete Serum to save CPU.

### 2. The "Breakbeat" Slicer
1.  **Load:** Drag a Drum Loop into the Zone window.
2.  **Right-Click:** Select "Remix Sliced Loop" (if pre-sliced) or "Automap Zone".
3.  **Grid:** You can set Loop Points (Sustain Loop) inside the wave editor.
4.  **Time Stretch:** DirectWave has a high-quality (Elastique) time-stretch engine PER ZONE. Enable "Time" in the Sample tab to lock the loop to BPM regardless of pitch.

### 3. Granular Pads
1.  **Sample:** Load a vocal texture.
2.  **Loop:** Set a very short loop (100ms) in the middle of the file.
3.  **Loop Type:** Set to "Ping Pong" or "Forward Crossfade".
4.  **Modulation:** Route LFO 1 to "Loop Start".
5.  **Result:** The loop point scans through the wavetable, creating a shifting granular cloud.
