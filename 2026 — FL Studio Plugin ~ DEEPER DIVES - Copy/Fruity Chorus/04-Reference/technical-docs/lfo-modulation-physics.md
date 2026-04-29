# LFO Modulation & Phase Shifting Physics

## The Doppler Effect in Chorus
A chorus effect works by varying the delay time of a signal using an LFO (Low-Frequency Oscillator). 
- **Pitch Shift:** As the delay time decreases, the frequency of the output increases (Pitch Up). As the delay time increases, the frequency decreases (Pitch Down).
- **The Result:** The output is a slightly detuned version of the input. When mixed with the dry signal, this Detuning + Delay creates the classic shimmering chorus sound.

## Voice Phasing
Fruity Chorus uses multiple delay lines (voices). 
- If all voices used the same LFO phase, the effect would be simple vibrato.
- By offsetting the phase of the LFOs for each voice (controlled by **Stereo Cross**), the voices move independently.
- **Stereo Cross at 100%:** The Left channel LFO is at 0 degrees while the Right channel is at 180 degrees. This creates a massive psychoacoustic sense of width because the detuning in the left ear is always the "mirror" of the right ear.

## Frequency Response (Comb Filtering)
Because chorus is a very short delay (0.1ms to 50ms), it causes **Comb Filtering**.
- At 1ms delay, there is a massive notch in the frequency response at 1kHz.
- As the delay moves (modulates), this notch sweeps through the frequency spectrum. This is why chorus sounds "swirly" or "liquidy".

## Mono Compatibility
Because the voices are phase-offset for width, summing the output of Fruity Chorus to Mono can sometimes lead to "Thinness" due to phase cancellation of the side-panned voices. Always check your mix in Mono when using high Stereo Cross settings.
