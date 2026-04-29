# UI Map & Signal Flow

[SRC: IL-MAN]

## 🗺️ The Interface Tour

The interface is simple but deceptive. It has two main "Modes" that completely change how it sounds.

### 1. The Mode Switch (The Engine)
*   **Voice Mode:** Optimized for **Monophonic** sources (Vocals).
    *   *Features:* Unlocks the **Formant** knob.
    *   *Sound:* Smoother, but glitches on chords.
*   **Music Mode:** Optimized for **Polyphonic** sources (Drums, Loops, Chords).
    *   *Features:* Unlocks **Duration** (Grain size).
    *   *Sound:* Granular, stuttery, "Cloudy".

### 2. The Pitch Knobs (The Action)
*   **Pitch:** The main shift (-12 to +12 semitones).
*   **Fine:** Cents (Detune). Use this for "Chorus" effects.
*   **Formant (Voice Only):** Shifts the "Throat Size" independent of pitch.

### 3. The Feedback Loop (The FX)
*   **Feedback:** Sends the output back into the input.
    *   *Result:* Each repeat gets pitched UP/DOWN again. If you pitch +1st with feedback, the trail goes +1, +2, +3, +4... rising into infinity.
*   **Delay:** The time between feedback repeats.

## 🚦 Internal Signal Flow

1.  **Input:** Audio enters.
2.  **Split:** Signal splits into Dry and Wet paths.
3.  **Analysis:** Engine detects pitch (Voice mode) or slices grains (Music mode).
4.  **Shift:** Audio is resampled/granularly shifted.
5.  **Feedback:** Output is fed back to step 3.
6.  **Mix:** Wet and Dry signals are summed.

## ⚠️ Common Misunderstandings
*   **"It sounds unnatural."**
    *   *Correction:* It is *supposed* to. Real-time pitch shifting is math-heavy and artifact-prone. Embrace the artifact as a "Texture".
*   **"Phasing issue."**
    *   *Correction:* If Mix is at 50% and Pitch is at 0, you will hear phasing (Comb Filtering) due to the tiny processing latency. **Always set Mix to 100% Wet** unless you are intentionally creating a Harmony or Flanger.
