# Emulating Instruments in BeepMap

BeepMap is not a sampler, but you can mimic instrument timbres visually:

## Emulating an Organ
- **Image:** 4-5 horizontal lines of different thicknesses.
- **Scale:** Log (Cents).
- **Why:** The horizontal lines represent steady harmonics. Adjusting their vertical position changes the chord; adjusting their thickness changes the volume of each harmonic.

## Emulating a Snare "Sizzle"
- **Image:** A dense cloud of white/grey pixels at the top half of the image.
- **Why:** High-frequency noise mimicking the snares on the bottom of a drum.
- **Workflow:** Use a very short "Length" and trigger it with a MIDI note.

## Emulating a "Wind" Instrument
- **Image:** A single, wavy, thick line.
- **Why:** The wave creates a slow pitch modulation (vibrato); the thickness creates a softer, less pure sine tone.
