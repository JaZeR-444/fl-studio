# Fruity Reeverb 2: The Algorithmic Architect

> **Scope:** Algorithmic Reverb, Mid/Side Processing, and Damping.
> **Source:** Image-Line Official Manual (v21.2).
> **Complexity:** Medium-High.

## 🧠 The "Room" Concept
Fruity Reeverb 2 is an algorithmic reverberator. Unlike convolution (which uses samples), it uses mathematical delay lines to simulate space. This makes it extremely flexible for "Unnatural" or "Hyper-Real" spaces.

**Signal Flow:**
`Input` -> **[PRE-DELAY]** -> **[LOW/HIGH CUT]** -> **[DIFFUSION]** -> **[REVERB ENGINE]** -> **[DAMPING]** -> **[BASS MULTIPLIER]** -> **[STEREO SEP]** -> **[OUTPUT]**

*   **Critical Nuance:** The "Damping" and "High Cut" are different. High Cut removes treble *before* the reverb. Damping makes the treble decay *faster* than the bass (simulating air absorption).

---

## 🎛️ Section 1: The Room Properties

### Size & Tone
| Control | Range | Function & Nuance |
| :--- | :--- | :--- |
| **Size** | Small - Massive | **Virtual Dimension.** <br> *Small:* Metallic, Ringing (Bathroom). <br> *Large:* Smooth, Washed out (Cathedral). <br> *Pro Tip:* Large sizes need longer Decay times to sound natural. |
| **Diff (Diffusion)** | Sparse - Dense | **Reflection Density.** <br> *Low:* You can hear individual "grains" or echoes. <br> *High:* Smooth wall of white noise. <br> *Percussion:* Use Low Diffusion for clarity. *Vocals:* Use High Diffusion for smoothness. |
| **Dec (Decay)** | 0.1s - 20s | **RT60 Time.** <br> How long it takes for the sound to drop by 60dB. |

### Coloration Controls
| Control | Function |
| :--- | :--- |
| **H.Cut** | **Input Filter.** <br> Removes "Sss" and clicks *before* they enter the reverb. Essential for preventing metallic harshness. |
| **L.Cut** | **Input Filter.** <br> Removes Kick/Sub *before* reverberation. Always cut below 200Hz for a clean mix. |
| **Damp** | **Air Absorption.** <br> *High Damp:* Highs die quickly (Warm/Dark room). <br> *Off:* Highs last as long as lows (Unnatural/Icy). |

---

## 🔁 Section 2: Advanced Processing (MID/SIDE)

### Mid / Side Switch
This is the hidden superpower of Reeverb 2.

*   **MID (Default):** Processes the sum (L+R).
*   **SIDE:** Processes *only* the stereo difference information.
    *   **Usage:** Add space to the wide synths/pads without muddying the center kick/vocal/snare.
    *   **Result:** A mix that feels "huge" but stays "focused".

---

## 🌊 Section 3: Modulation (The "Alive" Knob)

Algorithmic reverbs can sound static (metallic ringing at specific frequencies). Modulation fixes this.

| Control | Function |
| :--- | :--- |
| **Mod** | **LFO Depth.** <br> Modulates the delay times inside the reverb tank. |
| **Speed** | **LFO Rate.** |
| **Effect** | Breaks up standing waves. <br> *Subtle:* Smoother tail. <br> *Extreme:* Detuned "Chorused Reverb" (Vangelis style). |

---

## ⚡ Technical Specs: Bass Multiplier

*   **Bass:** Multiplies the Decay time for low frequencies.
*   **Cross:** Sets the frequency split point.
*   **Physics:** In real life, bass travels further than treble.
*   **Setting:** Set Bass to 1.2x - 1.5x for a "Boomy" majestic hall. Set to 0.5x for a tight, controlled studio room.

---

## 🧪 "Secret Sauce" Workflows

### 1. The "Invisible" Vocal Halo
1.  **Size:** 40 (Small Hall).
2.  **Diff:** 100% (Smooth).
3.  **Decay:** 1.5s.
4.  **H.Cut:** 4kHz (Aggressive cut).
5.  **Damp:** High.
6.  **Result:** You don't "hear" the reverb, but the vocal sounds expensive and seated.

### 2. The "Side-Only" Width
1.  **Input:** Stereo Synth Pad.
2.  **Mode Switch:** Set to **SIDE**.
3.  **Wet:** 100%. Dry: 100% (Parallel).
4.  **Result:** The center of the stereo image (Mono) is 100% dry and punchy. The edges are swimming in reverb. Extreme width.

### 3. The "Gated" Snare Prep
1.  **Diff:** 0% (Grainy).
2.  **Size:** 100 (Massive).
3.  **Decay:** Long.
4.  **L.Cut:** 500Hz.
5.  **Result:** A harsh, exploding noise burst. Perfect for feeding into a Noise Gate for the classic 80s effect.
