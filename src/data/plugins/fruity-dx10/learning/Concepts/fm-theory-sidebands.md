# FM Synthesis and Sidebands

## The FM Equation
In DX10, the sound is generated through **Frequency Modulation**.
`Output = Sine( CarrierFrequency + Modulator(ModulatorFrequency) )`
- **Carrier:** The pitch we hear.
- **Modulator:** The frequency "vibrating" the carrier.

## Sideband Harmonics
Unlike subtractive synthesis (which filters harmonics *out*), FM creates harmonics *in*.
- **The "Bessel Function":** The number and amplitude of these harmonics are determined by the **Modulation Index** (the `Mod` knob).
- **Even/Odd balance:** The relationship between Carrier and Modulator frequencies (Coarse) determines if the sound is a square-like wave, a saw-like wave, or a bell-like tone.

## Operator Stacking
DX10 uses 4 Operators. By stacking them, you can create "formants" (vocal-like textures) or extremely complex evolving sounds that a single-oscillator synth cannot achieve.
