# FPC: The MPC Workflow

> **Scope:** Drum Sampling, Pad Layering, and Finger Drumming.
> **Source:** Image-Line Official Manual (v21.2) + Direct Analysis.
> **Complexity:** Medium (Layer Management).

## 🧠 The "Layer Stack" Concept
FPC is not just 16 pads. It is **16 Stacks of Layers**.
*   **Layers:** Each Pad can hold multiple samples (up to 32, though typically 4-8).
*   **Velocity Zones:** Layers can be mapped to trigger only at certain velocity ranges.
    *   *Soft Hit* -> Layer 1 triggers.
    *   *Hard Hit* -> Layer 4 triggers.
*   **Round Robin:** If layers overlap in velocity, FPC can cycle through them to avoid the "Machine Gun" effect.

**Signal Flow:**
`MIDI Note` -> **[PAD (Cut Groups)]** -> **[VELOCITY CHECK]** -> **[LAYER SELECTION]** -> **[ENVELOPE/PITCH]** -> **[PAD OUTPUT]**

---

## 🎛️ Section 1: Main Pad Properties

Controls that affect the *entire* stack of samples on a pad.

| Control | Function | Usage |
| :--- | :--- | :--- |
| **Volume/Pan** | Global Level. | Balancing the kit mix. |
| **Cut (Group)** | "Kill Switch" ID. | If this pad plays, it kills any pad with this "Cut By" ID. |
| **Cut By (Group)** | "Victim" ID. | If a pad with this "Cut" ID plays, silence this pad. |
| **Output** | Mixer Offset. | Routes this pad to a separate mixer track. |
| **Mute** | Silence/Solo. | Performance features for live breakdown. |
| **MIDI Note** | Trigger Key. | Click to "Learn" a new note from your controller. |

**Choke Group Example (Hi-Hats):**
*   **Closed Hat:** Cut = 1, Cut By = 1.
*   **Open Hat:** Cut = 1, Cut By = 1.
*   *Result:* Playing Closed stops Open. Playing Open stops Closed. Monophonic behavior.

---

## 🔁 Section 2: Layer Properties

Controls for the specific sample *inside* the stack.

*   **Mini-Preview:** Click to hear the raw sample.
*   **Spread Even:** Automatically maps multiple loaded samples across the 0-127 velocity range.
*   **Lock Layers:** Prevents velocity ranges from overlapping.
    *   *Off:* Layers can overlap (Layering sounds).
    *   *On:* Layers are exclusive (Velocity switching).
*   **Random:**
    *   *Cycle:* 1, 2, 3... (Round Robin).
    *   *Random:* True random.
    *   *Avoid Previous:* Smart random (never hits the same sample twice).

---

## ⚡ Technical Specs: Import/Export

*   **Drag & Drop:** You can drag single WAVs onto Pads.
*   **Multi-Drop:** If you drag a selection of 5 files onto one Pad, FPC asks: "Map to Layers?". Say yes, and it auto-maps Velocity.
*   **Saving Kits:**
    *   *Save Preset:* Saves the FPC state.
    *   *Export Sliced Loop:* If you have sliced a loop in Slicex/Edison, you can "Dump to Score" which loads the slices into FPC automatically.

---

## 🧪 "Secret Sauce" Workflows

### 1. The "Ghost Note" Scale
1.  **Layers:** Load a Soft Snare and a Hard Snare.
2.  **Velocity:**
    *   Soft Snare: 0 - 90.
    *   Hard Snare: 91 - 127.
3.  **Envelope:** Set a short decay on the Soft Snare.
4.  **Result:** When you program ghost notes (Velocity 40), you get a tight, quiet tick. When you hit hard (127), you get the full crack.

### 2. Stereo cymbal spread
1.  **Pad:** Crash Cymbal.
2.  **Layers:** 2 identical samples.
3.  **Pan:**
    *   Layer 1: Pan Left.
    *   Layer 2: Pan Right.
4.  **Pitch:** Detune Layer 2 by +10 cents.
5.  **Result:** Instant wide stereo width without using chorus Effects.

### 3. "Scale" Mode for Trap Hi-Hats
1.  **Usage:** Usually FPC is 1 note per pad.
2.  **Idea:** Map the *same* Hi-Hat sample to Pads 1, 2, 3, 4.
3.  **Pitch:** Tune Pad 1 (Base), Pad 2 (+2 semitones), Pad 3 (+4), Pad 4 (-2).
4.  **Performance:** You can now play a melody with the Hi-Hats using the pads.
