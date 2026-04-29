# BassDrum: The Layered Kick Architect

> **Scope:** Drum Synthesis, Layering, and Resampling.
> **Source:** Image-Line Official Manual (v21.2) + Direct Analysis.
> **Complexity:** Medium (Architecture) / Low (Controls).

## 🧠 The "Hybrid" Concept
BassDrum is not just a synth; it's a **Hybrid Engine**. It combines two analog-modeled oscillators (Main + Slave) with a Sample Layer (Noise/Texture). This mimics the classic 90s production technique of layering a synth sub with a sampled top-end.

**Signal Flow:**
`[Main Osc]` + `[Slave Osc]` + `[Sample Layer]` -> **[CLICK GEN]** -> **[DRIVE/SATURATION]** -> **[SAMPLING RATIO]** -> **[OUTPUT]**

*   **Critical Nuance:** The "Slave" oscillator is *relative* to the Main oscillator. If you pitch down the Main, the Slave follows.

---

## 🎛️ Section 1: The Oscillators (Body & Knock)

### Main Oscillator (The Anchor)
*   **Base:** The *End* frequency (where the slide stops). This is the fundamental Note of the kick.
*   **Peak:** The *Start* frequency (where the slide starts).
*   **Slide:** The duration of the drop.
    *   *Short Slide:* Punchy, clicky.
    *   *Long Slide:* "Laser" or "Pew" sound (Simmons Toms).

### Slave Oscillator (The Character)
*   **Offset Controls:** Base, Peak, and Slide are all *offsets* (+/- 100%).
*   **Phase:** Delays the Slave oscillator.
    *   **Usage:** Adjusting Phase causes **Phase Cancellation** between Main and Slave. This "hollows out" the mid-range of the kick, making it sit better in a mix.

---

## 🔁 Section 2: The Click & Sample Layer

### Click Generator
*   **Function:** Adds a dedicated high-frequency impulse at the start (0ms).
*   **Cut:** High-Pass filter for the click. Remove the low-end mud from the transient.

### Sample Layer
*   **Drag & Drop:** You can drop any sample onto the interface.
*   **Delay:** Critical Control.
    *   *-100%: Sample plays *before* the synth (Pre-shift).
    *   *0%:* Unison.
    *   *+100%: Sample plays *after* the synth (Slapback).
*   **ADSR:** The sample has its own Volume Envelope (Attack, Decay, Sustain). This allows you to use just the *tail* of a sample (long attack) or just the *attack* (short decay).

---

## ⚡ Technical Specs: The "Sampling Ratio"

This is **NOT** a standard sample rate reducer (Bitcrusher).

*   **Mechanism:** It resamples the *entire plugin output* buffer.
*   **Sound:** Low settings create "Aliasing" (Fold-back distortion). This creates a "Gritty" or "Crunchy" texture that sounds very different from standard Overdrive.
*   **Usage:** Use this instead of the "Drive" knob for Industrial or Hardcore kicks.

---

## 🧪 "Secret Sauce" Workflows

### 1. The "Phase-Hollowed" Tech House Kick
1.  **Main:** Set Base to G0 (49Hz). Peak to +2 Octaves.
2.  **Slave:** Set Volume to 100% (Equal to Main).
3.  **Phase:** Slowly sweep the **Phase** knob.
4.  **Listen:** You will hear the "Boxy" frequencies disappear at certain spots. Find the "sweet spot" where the kick sounds tightest.

### 2. The "Hardstyle" Crunch
1.  **Main:** Long Slide (Laser effect).
2.  **Drive:** 50%.
3.  **Sampling Ratio:** Turn LEFT.
    *   Watch as the "clean" laser sound turns into a "shattered" digital mess.
    *   This is the "Old School" gabber sound without needing external distortion plugins.

### 3. The "Texture" Layering
1.  **Sample:** Drag a "Vinyl Crackle" or "foley" sample into the layer.
2.  **Delay:** Set to +10%.
3.  **Mix:** 20%.
4.  **Result:** The Synth provides the punch, the sample provides organics. The delay ensures the sample doesn't smear the initial transient punch.
