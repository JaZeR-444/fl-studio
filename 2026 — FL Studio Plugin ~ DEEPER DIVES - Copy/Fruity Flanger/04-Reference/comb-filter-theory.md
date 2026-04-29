# Technical Reference: Comb Filter Theory

Understanding the mathematics of Fruity Flanger. [SRC: DSP-DSP]

## 1. Constructive and Destructive Interference
When two signals are combined with a very short delay (typically <15ms), they interfere with each other.
- **Constructive**: Frequencies where the peaks of both waves align are boosted by 6dB.
- **Destructive**: Frequencies where the peak of one aligns with the trough of the other are cancelled completely (notched).

## 2. Linear Spacing
Unlike a Phaser (which uses all-pass filters to space notches non-linearly), a Flanger creates notches at linear multiples of the delay time.
- **Formula**: Notches occur at frequencies $f = (2n+1) / 2d$ (where $d$ is delay in seconds and $n$ is an integer).
- **Result**: This linear spacing creates the "metallic" or "harmonic" character unique to flanging.

## 3. The "Whistle" (Feedback)
Adding feedback ($g$) intensifies these peaks. As $g$ approaches 1 (100%), the peaks become narrower and taller, creating a resonant pitch.
- **Negative Feedback**: Inverting the signal ($g = -1$) shifts the peaks to the locations of the previous notches, creating the "hollow" inverted sound.

## 4. Why 15ms?
Beyond ~20ms, the human ear begins to perceive the delay as a distinct "echo" rather than a timbral change. This is why flangers are restricted to very short delay ranges.
