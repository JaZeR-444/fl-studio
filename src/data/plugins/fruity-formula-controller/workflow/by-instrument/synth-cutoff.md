# Instrument: Synth Cutoff

Automating filter movement with math.

## The Periodic Sweep
- **Formula**: `Sin(SongPos*Pi*2)*0.5+0.5`
- **Action**: Link your synth's Filter Cutoff to the Formula Controller output.
- **Result**: A perfectly synced filter sweep that matches the project tempo.

## The "Rhythmic Jump"
- **Formula**: `If(Frac(SongPos*2)>0.5, 1, 0.2)`
- **Result**: The filter jumps between open (1) and closed (0.2) on every half-beat.

## Scaled Modulation
- **Formula**: `a + (Sin(SongPos*Pi)*b)`
- **Usage**: Use `a` for the base cutoff level and `b` for the intensity of the wobble.
- **Goal**: Gives you a single "Macro" knob (b) to control the intensity of the filter movement.
