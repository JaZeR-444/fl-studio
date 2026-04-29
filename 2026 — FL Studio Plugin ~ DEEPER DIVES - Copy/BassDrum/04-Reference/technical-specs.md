# Technical Specs: BassDrum Mechanics

## 1. Sampling Ratio (Resampling)

*   **Type:** Sample Rate Decimation (Redux).
*   **Behavior:** It changes the clock rate of the *entire* plugin output processing.
*   **Artifacts:** Creates "Mirror Frequencies" (Aliasing) reflected around the Nyquist point.
*   **Difference from Bitcrushing:** Bitcrushing reduces dynamic range (steps). Sample Rate Reduction reduces frequency bandwidth and adds inharmonic noise.

## 2. Slave Oscillator Relativity

*   **Design:** The Slave is not an independent entity. It is a "Child" of the Main "Parent".
*   **Math:**
    *   `Slave_Freq = Main_Freq * User_Offset`.
    *   `Slave_Slide = Main_Slide * User_Offset`.
*   **Benefit:** Allows for consistent intervals (e.g., a Fifth or Octave) even if you automate the Main Pitch.
*   **Phase:** The Phase control is a Time Delay.
    *   `Delay_Time = (1 / Frequency) * (Phase_Degrees / 360)`.
    *   Because BassDrum is a pitch-sliding synth, the "Frequency" variable changes constantly. The Phase control tracks this dynamically to maintain constant phase alignment.

## 3. Duration Envelope

*   **Type:** One-Shot (Trigger).
*   **Behavior:** BassDrum ignores "Note Off" messages until the Duration timer expires.
*   **Reason:** Kicks are percussive. You don't want the tail cutting off just because you wrote a short MIDI note.
*   **Constraint:** If you want a short kick, you *must* reduce the Duration knob. Shortening the MIDI note length in the Piano Roll does nothing.
