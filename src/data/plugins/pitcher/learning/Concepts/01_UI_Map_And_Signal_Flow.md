# UI Map & Signal Flow

[SRC: IL-MAN]

## 🗺️ The Interface Tour

Pitcher is divided into Detection (Input), Correction (Middle), and Harmonization (Output).

### 1. The Detection & Scale (Left)
*   **Min Freq:** Sets the floor. If you have a deep bass voice, lower this.
*   **Scale:** The most important button. Selects which notes are "Allowed". (e.g., Minor, Major, Pentatonic).
*   **Keyboard:** Visualizes valid notes. You can click these keys to turn specific notes ON or OFF manually.

### 2. The Correction Engine (Center Knobs)
*   **Speed (Retune):** How fast the correction happens.
    *   *Fast:* Robotic.
    *   *Slow:* Natural (Sliding).
*   **Fine:** Adjusts the global tuning in cents (if the beat is slightly off 440Hz).
*   **Formant:** Preserves or shifts the vocal character (Throat Size).

### 3. The Harmonizer (Right / MIDI Mode)
*   **MIDI Button:** Activates MIDI Input Mode. This disables the "Automatic Scale" and listens to your MIDI Keyboard instead.
*   **Octave Button:** Adds an automatic sub-octave or high-octave voice.
*   **Stereo Spread:** Pans the harmony voices left/right.

## 🚦 Internal Signal Flow

1.  **Input:** Monophonic Audio (Voice).
2.  **Detection:** Engine estimates the pitch (Hz).
3.  **Target:** Engine compares Input Pitch to Selected Scale (or MIDI Note).
4.  **Correction:** Engine shifts pitch towards Target at rate of "Speed".
5.  **Formant:** Engine corrects timbre shift (if Formant enabled).
6.  **Harmony:** Copies signal, pitches to harmony targets, pans them.
7.  **Output:** Mix of correct Lead + Harmonies.

## ⚠️ Common Misunderstandings
*   **"It sounds wobbly."**
    *   *Correction:* You selected the wrong Scale. If you sing a C# but the Scale is C Major (no sharps), Pitcher will frantically snap you between C and D.
*   **"MIDI Mode isn't working."**
    *   *Correction:* You must set the **Input Port** on Pitcher's wrapper settings to match the **Output Port** of a MIDI Out channel. It is not automatic.
