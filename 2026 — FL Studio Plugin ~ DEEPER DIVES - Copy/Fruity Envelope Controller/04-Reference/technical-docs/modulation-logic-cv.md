# Modulation Logic & Control Signals

## Control Voltage (CV) Emulation
Fruity Envelope Controller acts like a CV module in a modular synthesizer. It generates a "Control Signal" (a stream of values between 0 and 1) that other plugins can "read".

## The Articulator Summing Math
Each Articulator is the sum of its internal components:
`Output = (Base + (ENV * Amt) + (LFO * Amt) + (KBD * Amt) + (VEL * Amt) + (RND * Amt))`
- **Base** is the starting point.
- **Amount** determines how much each component contributes to the final value.

## Sample Accuracy
Because Envelope Controller is a native FL Studio plugin, its modulation is **Sample Accurate**. 
- *Why it matters:* Standard MIDI automation (MIDI CC) is often limited to a low resolution (128 steps) and is updated at the "buffer" rate. Envelope Controller calculates its values for every single audio sample, preventing "stair-stepping" or "zipper noise" during fast sweeps.

## Smoothing (Low-Pass Filtering)
The **Smoothing** parameter is effectively a one-pole low-pass filter applied to the control signal. 
- It slows down the transition between values.
- **Physics:** `dV/dt` (Rate of change) is limited. This is essential when modulating parameters that might click if changed too abruptly, like Oscillator Phase or Filter Cutoff.
