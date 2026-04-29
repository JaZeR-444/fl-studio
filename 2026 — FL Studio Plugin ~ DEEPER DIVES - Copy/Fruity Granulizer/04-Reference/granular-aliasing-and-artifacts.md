# Technical Reference: Granular Aliasing and Artifacts

Understanding the "Digital Dirt" of Fruity Granulizer. [SRC: REPUTABLE]

## 1. Why the "Metallic Ring"?
When grain sizes (**HOLD**) are very small (<10ms), the frequency of the grain onset becomes audible. This creates a "robotic" metallic pitch that isn't in the original sample.
- **Problem**: This ringing can sound harsh and "unmusical."
- **Fix**: Increase **ATT** (Attack) to smooth the edges or increase **HOLD** to move the resonance below the audible range.

## 2. Rhythmic Phasing
If **G.SPACING** is perfectly regular and multiple grains overlap, they can "phase" into each other, causing specific frequencies to boost or cut.
- **Fix**: Add a tiny bit of **RAND** (Randomness) to "blur" the phase relationship between grains.

## 3. Transient Smearing
Granulizers struggle with sharp transients (Kicks, Snares). Because grains are triggered based on a clock, the exact "snap" of a drum hit might get split between two grains.
- **Constraint**: If you need to keep drum hits sharp, do not use granular processing directly on them. Use it on the *tail* or *reverb* of the drums instead.

## 4. Low-End Protection
- **Rule**: Never use high **PAN** spread on sub-bass frequencies within a sample.
- **Move**: Use a High-Pass Filter before the Granulizer to ensure only the mid/high frequencies are being "scattered" across the stereo field. Keep your bass mono and solid.
- **Verification**: Press the "Mono" button on your mixer. If the sound disappears, your granular low-end is out of phase.
