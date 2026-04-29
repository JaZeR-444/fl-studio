# Technical Reference: Unison Theory (Flangus Model)

Understanding how Fruity Flangus simulates "Thickness." [SRC: REPUTABLE]

## 1. What is Unison?
In traditional analog synthesis, Unison is the act of triggering multiple oscillators simultaneously for a single note. Because no two oscillators are perfectly in tune or in phase, they create "beating" (constructive/destructive interference) that our ears perceive as a thick, lush ensemble.

## 2. The Flangus Emulation
Fruity Flangus simulates this effect post-oscillator by:
- **Delay Stacking**: Creating multiple copies of the input signal.
- **Micro-Offsets**: Each copy (Order) is given a slightly different base delay time.
- **Independent LFOs**: Each voice is modulated by an LFO that is slightly out of phase with the others.

## 3. Beating and Cancellation
- **Constructive**: When the waves align, the volume increases.
- **Destructive**: When one wave is at its peak and another at its trough, they cancel out.
- **Stereo Spread**: By panning these "beating" voices differently across the stereo field, Flangus prevents them from cancelling each other out completely in the master mix, resulting in massive width.

## 4. Why "Order" Matters
- **Order 1-2**: Sparse. You can hear individual "sweeps."
- **Order 6-8**: Dense. The individual sweeps blur together into a singular "texture." This is why higher orders sound "smoother."
