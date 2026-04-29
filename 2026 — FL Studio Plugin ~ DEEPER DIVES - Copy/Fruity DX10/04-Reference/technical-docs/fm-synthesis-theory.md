# FM Synthesis: Modulators and Carriers

## Carrier vs. Modulator
In FM synthesis (like DX10), oscillators are called "Operators".
- **Carrier:** This is the operator you actually hear.
- **Modulator:** This operator is silent, but its output is used to rapidly shift the frequency of the Carrier.

## Sidebands and Harmonics
When a Carrier is modulated by a Modulator:
- **Mathematical Ratios:** If the ratio of Modulator:Carrier is a simple integer (1:1, 2:1), the resulting harmonics are **Harmonic** (musical, clean).
- **Non-Integers:** If the ratio is complex (1.73:1, 2.41:1), the harmonics are **Inharmonic** (metallic, dissonant). This is why FM is the king of percussion and bells.

## The DX10 4-Op Engine
Fruity DX10 simplifies the complex matrix of a 6-operator synth (like the DX7) into a streamlined 4-operator engine. 
- It uses a fixed "Algorithm" (routing path).
- This makes it much more accessible for beginners while still being capable of the signature "FM Growl" or "Glassy" tones.

## Digital Aliasing
Older FM synths like the DX10 can exhibit **Aliasing** at very high frequencies. This is where high harmonics "fold back" into the audible range as lower, unwanted frequencies. 
- **Production Use:** Many producers actually love this "lo-fi" digital artifact, as it adds a unique grit that modern, oversampled synths lack.
