# Goal: Layering SoundFonts

## Goal Statement
Create a thick, professional-sounding orchestral or synth section by layering multiple instances of SoundFont Player.

## Step-by-Step Setup
1. **The Core:** Load one instance of SFP with a "Violin" patch.
2. **The Ensemble:** Clone the instance twice (Total 3 instances).
3. **Detuning:**
   - SFP 1: Master Pitch +5 cents.
   - SFP 2: Master Pitch 0 cents.
   - SFP 3: Master Pitch -5 cents.
4. **Panning:**
   - SFP 1: Pan 40% Left.
   - SFP 2: Pan Center.
   - SFP 3: Pan 40% Right.
5. **Bus:** Route all three instances to a single Mixer Track (e.g., Track 20).
6. **Processing:** Apply a subtle **Compressor** (Fruity Limiter) to glue the three layers together.

## What to Listen For
- A sound that is significantly wider and "fatter" than a single instance.
- A "natural" chorusing effect caused by the slight detuning and panning.

## Variations
- **Octave Layering:** Set SFP 3 to -12 semitones (-1 octave) for a "deep" orchestral foundation.
- **Instrument Layering:** Mix a Violin SF2 with a Cello SF2 for a full-range string section.