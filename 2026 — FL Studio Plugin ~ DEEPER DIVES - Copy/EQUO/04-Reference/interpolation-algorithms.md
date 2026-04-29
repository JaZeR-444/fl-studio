# Technical Reference: Interpolation Algorithms

Understanding how EQUO handles transitions. [SRC: IL-MAN]

## 1. Linear Morphing
The **Morph** knob does not just "switch" between banks. It uses **Linear Interpolation** to calculate the state of every single band at every moment.
- *Calculation*: Result = (Bank A * (1 - Morph)) + (Bank B * Morph).
- *Result*: This allows for perfectly smooth, artifact-free transitions even with extreme automation.

## 2. Band Interaction (The BW Knob)
The **BW (Bandwidth)** knob determines how much the 16+ bands overlap.
- **Low BW**: Bands are isolated. This creates sharp, resonant peaks (Phaser/Talkbox sound).
- **High BW**: Bands overlap significantly. This creates smooth, natural EQ curves (Parametric-like sound).

## 3. CPU Efficiency
EQUO is highly optimized because it uses a **Fixed-Band Graphic Architecture**.
- Unlike Parametric EQ 2, which has to calculate complex filter slopes for every node move, EQUO simply adjusts the gain of pre-existing bands.
- **Advantage**: Excellent for live performance and low-latency projects.

## 4. Phase Shift
EQUO is an **IIR (Infinite Impulse Response)** filter bank.
- *Physics*: Every boost or cut creates a slight shift in the phase of the audio.
- *Verification*: To hear this, place EQUO on a sine wave and sweep the Shift knob. You will hear the volume change slightly as the phase interacts with the waveform cycles.
