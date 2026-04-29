# Fruity Convolver: The Cloning Machine

> **Scope:** Convolution Reverb, Cabinet Simulation, and Linear Phase EQ.
> **Source:** Image-Line Official Manual (v21.2) + Direct Analysis.
> **Complexity:** High (Sound Design).

## 🧠 The "Convolution" Concept
Fruity Convolver captures the "Snapshot" (Impulse Response) of a space or device and applies it to your audio.
*   **Reverb:** Load a Hall IR -> Your vocals sound like they are in that Hall.
*   **Cabinets:** Load a Guitar Cab IR -> Your sawtooth wave sounds like it's coming out of a Marshall 4x12.
*   **EQ:** Load a Single Cycle EQ Click -> Your audio is EQ'd with perfect Linear Phase characteristics.

**Signal Flow:**
`Input` -> **[PRE-DELAY]** -> **[CONVOLUTION ENGINE (IR + EQ)]** -> **[STRETCH/BLUR]** -> **[MIX]** -> **[OUTPUT]**

---

## 🎛️ Section 1: The Impulse Editor

This is an embedded version of **Edison**.
*   **Envelopes:** You can draw Volume, Pan, and Stereo envelopes *on top* of the Reverb tail.
    *   *Gating:* Draw a Volume envelope that drops instantly to zero after 1 second.
    *   *Auto-Pan:* Draw a wavy Pan envelope to make the reverb swirl.
*   **Equalizer:** The EQ tab applies filter curves to the IR. Since the IR is static, this EQ is "baked in" and consumes zero extra CPU during playback.

---

## 🔁 Section 2: The "Spark" (Cloning Plugins)

Fruity Convolver has a built-in "Click Generator" (Spark Icon) to clone other reverb plugins.
*   **Method:**
    1.  Convolver A (Generator) -> Reverb Plugin (Target) -> Convolver B (Recorder).
    2.  Hit "Spark" on A.
    3.  B records the tail.
*   **Limitation:** It cannot capture *Modulation* (Chorus/Flanging) because those change over time. It only captures static linear systems (EQ, Reverb, Delay, Distortion cabinets).

---

## ⚡ Technical Specs: Zero Latency?

*   **Latency:** Convolution is math-heavy. By default, it introduces signficant latency.
*   **Zero Latency Mode:** There is a switch to process in real-time blocks, but it increases CPU usage significantly.
*   **Linear Phase EQ:** By drawing an EQ curve in the EQ tab, Convolver creates an impulse that applies that EQ with Linear Phase (no phase shift). This is often better than using Parametric EQ 2 for mastering.

---

## 🧪 "Secret Sauce" Workflows

### 1. The "Blur" Texture
1.  **Load:** A vocal sample *as* the Impulse.
2.  **Knob:** Turn up **Blur**.
3.  **Result:** The vocal is smeared into a ghostly drone.
4.  **Use:** Convolution Reverb creates "spectral hybrids". Drum Loop *convolved with* Vocal Sample = Singing Drums.

### 2. Guitar Cabinet Loader
1.  **Context:** Using Distructor or Hardcore.
2.  **Action:** Bypass the built-in Cab.
3.  **Chain:** Add Fruity Convolver after the amp sim.
4.  **Load:** A 3rd party ".wav" IR of a Mesa Boogie Cabinet.
5.  **Result:** Instant realism upgrade.

### 3. Gated Snare (80s Style)
1.  **Load:** A lush 4-second Hall Plate.
2.  **Editor:** Go to Volume Envelope/
3.  **Draw:** A flat line for 200ms, then a sharp vertical drop to silence.
4.  **Result:** The Phil Collins snare sound, perfectly timed, with no release tail artifacts.
