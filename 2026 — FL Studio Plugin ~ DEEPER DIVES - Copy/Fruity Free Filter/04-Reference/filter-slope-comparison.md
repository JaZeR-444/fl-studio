# Technical Reference: Filter Slope Comparison

Why 12dB/octave matters for musicality. [SRC: DSP-theory]

## 1. What is 12dB/octave?
A filter's "slope" determines how steeply it cuts frequencies beyond the cutoff point.
- **12dB/octave**: For every octave you move past the cutoff, the volume drops by 12 decibels.
- **Parametric EQ 2**: Often uses 24dB, 48dB, or even steeper "Brickwall" slopes.

## 2. Musicality vs. Surgery
- **Steep Slopes (EQ 2)**: Best for removing a specific unwanted hum or "cleaning up" a mix.
- **Gentle Slopes (Free Filter)**: Best for subtractive synthesis. Because it allows some of the frequencies past the cutoff to "bleed" through, it sounds more "natural" and "musical." It mimics the way acoustic instruments resonate.

## 3. Resonance Character
Fruity Free Filter is a **State Variable Filter**.
- SVF filters are known for their consistent resonance (Q) across the entire frequency range.
- **The "Acid" sound**: A 12dB/octave filter with high resonance allows the harmonics to "chirp" through the cutoff in a way that feels "wet" and "rubbery." Steeper filters often sound too "sharp" or "resonant" for this specific vibe.

## 4. Phase Response
The gentler the slope, the less drastic the phase shift at the cutoff frequency. This is why Fruity Free Filter is often preferred for automating full groups or melodic busses—it "smears" the timing of the instruments less than a heavy 48dB EQ cut.
