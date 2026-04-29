# Fruity Flanger: The Classic Jet

> **Scope:** Jet Plane Sweeps, Metallic Resonances, and Chorus-like Doubling.
> **Source:** Image-Line Official Manual (v21.2) + Direct Analysis.
> **Complexity:** Low (Modulation).

## 🧠 The "Comb" Concept
Flanging is essentially a very short delay (0-20ms) that is modulated.
*   **Result:** This creates a "Comb Filter" (a series of notches) that moves up and down the frequency spectrum.
*   **Sound:** When the delay is near <1ms, the notches cancel out high frequencies, creating the "Jet Plane" whoosh.

**Signal Flow:**
`Input` -> **[DELAY LINE (LFO Modulated)]** -> **[DAMP]** -> **[FEEDBACK (Normal/Inverted)]** -> **[MIX (Dry + Wet + Cross)]** -> **[OUTPUT]**

---

## 🎛️ Section 1: The Invert Switches

The character of the flanger is defined here.
*   **Invert Wet:** Cancels the Dry signal.
    *   *Result:* Creates a hollow, "Inside Out" sound. If Mix is 50/50, silence occurs at DC.
*   **Invert Feedback:** Feeds the inverted signal back into the loop.
    *   *Result:* Enhances odd vs even harmonics. One setting sounds like a "Tube", the other like a "Bell".

---

## 🔁 Section 2: Phase (Stereo)

*   **Knob:** **Phase**.
*   **Function:** Offsets the LFO for the Right Channel.
*   **Settings:**
    *   *0 deg:* Mono modulation (Laser beam).
    *   *180 deg:* Left goes Up, Right goes Down. (Headphone massage).
    *   *10 deg:* Subtle width.

---

## ⚡ Technical Specs: The Cross Knob

*   **Function:** Mixes the *Inverted Left* signal into the *Right Output* (and vice versa).
*   **Effect:** Hyper-Wide Stereo. It creates a pseudo-Haas effect that sits "outside" the speakers.
*   **Warning:** Can ruin mono compatibility if overused.

---

## 🧪 "Secret Sauce" Workflows

### 1. The "Zero" Flange
1.  **Delay:** 0ms.
2.  **Depth:** Very High.
3.  **Rate:** Slow.
4.  **Invert Wet:** ON.
5.  **Result:** When the LFO hits the bottom (0ms delay), the Wet signal perfectly cancels the Dry signal (silence). This creates the dramatic "Through Zero" suck effect.

### 2. Infinite Barberpole
1.  **Rate:** 0 (Static).
2.  **Automation:** Create a ramp automation clip for the **Delay** time.
3.  **Result:** A flanger that only goes UP forever (Shepard Tone illusion) if you reset the ramp at the measure.

### 3. Metallic Resonator
1.  **Delay:** Fixed (Rate 0).
2.  **Feed:** 99% (Max).
3.  **Damp:** 0 (No damping).
4.  **Result:** The flanger effectively becomes a physical model of a short string. Tuning the **Delay** knob changes the pitch of the metallic ring.
