# Linear Phase vs. IIR: Deep Dive

## Minimum Phase (IIR)
Internal Impulse Response (IIR) filters are the standard in most EQs.
- **How they work:** They change the frequency magnitude by shifting the phase of the signal.
- **The Catch:** Near the crossover frequency, the phase "rotates". If you sum this split signal back with the original, you get "comb filtering" (hollow sound).
- **Latency:** Zero. Essential for tracking or live performance.

## Linear Phase
Linear Phase filters use a more complex mathematical approach (FFT/FIR) to ensure all frequencies are delayed by the exact same amount.
- **How they work:** They "look ahead" or delay the entire signal to keep the phase perfectly aligned.
- **The Catch:** It introduces **Latency**. If you have a 2048 sample buffer, the plugin adds 2048 samples of delay to the track.
- **Pre-Ringing:** Steep linear phase filters can cause "pre-ringing", where a faint echo of a transient appears *before* the transient hits. This can soften the "impact" of drums.

## Recombination Test
To see the difference:
1. Load Frequency Splitter on a track with white noise.
2. Invert the phase of a duplicate track with the same noise.
3. If the Splitter is in **Linear Phase**, they will cancel out perfectly (silence).
4. If in **IIR**, you will hear "residue" noise at the crossover frequencies.
