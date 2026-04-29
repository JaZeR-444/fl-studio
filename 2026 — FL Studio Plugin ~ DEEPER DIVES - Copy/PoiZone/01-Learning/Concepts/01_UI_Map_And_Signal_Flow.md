# UI Map & Signal Flow

[SRC: IL-MAN]

## 🗺️ The Interface Tour

PoiZone is a single-screen synth. No tabs.

### 1. The Source (Oscillators) - Top Left
*   **Osc 1 & 2:** Blends between Saw and Pulse.
*   **Detune:** Controls the pitch offset of Osc 2 (Classic "beating" effect).
*   **Grid:** The Octave/Semitone tuning matrix.

### 2. The Shaper (Filter & Envelopes) - Center
*   **Cutoff/Res:** The standard subtractive filter controls.
*   **Envelope One:** Hardwired to Amp (Volume).
*   **Envelope Two:** Hardwired to Filter (Tone).
*   *Note:* The "Envelope Amount" knob decides how much Env 2 affects the Cutoff.

### 3. The Thickener (Effects) - Bottom
*   **Unison:** The "Big" button. Adds 3 voices per note. Pan and Detune knobs control width.
*   **Trance Gate:** The 16-step grid. Click steps to mute/unmute the sound rhythmically.
*   **Arpeggiator:** Standard Up/Down/Random patterns.

## 🚦 Internal Signal Flow

1.  **Oscillators** (Saw/Pulse) -> **Mixer**.
2.  **Filter** (LP/BP/HP) -> **Amp** (Volume).
3.  **Unison Engine** (Multiplies output).
4.  **Effects** (Chorus -> Delay -> Reverb).
5.  **Trance Gate** (Chops the final audio).

## ⚠️ Common Misunderstandings
*   **"Where is simple Sine wave?"**
    *   *Fact:* PoiZone doesn't have a dedicated Sine wave. Use the **Triangle** (Knob fully left on wave selector) or Filter a Pulse wave heavily. It's meant for rich harmonics, not clean tones.
*   **"The Release tail is getting chopped."**
    *   *Fact:* The **Trance Gate** is at the *end* of the chain (usually). It chops everything, including reverb tails. If you want reverb *after* the gate, use an external mixer reverb.
