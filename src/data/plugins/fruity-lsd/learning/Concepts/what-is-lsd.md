# What is Fruity LSD?

Fruity LSD (Liquid Sound Design) is a wrapper for the Windows internal synthesizer (DirectMusic). It allows you to play `.dls` (Downloadable Sounds) files and the standard General MIDI sound set included with Windows.

## Why Use It Today?
1. **Vaporwave / Nostalgia**: It is the *authentic* sound of 90s/early 2000s computer music.
2. **CPU Efficiency**: It uses zero CPU overhead from FL Studio itself, as the OS handles the synthesis.
3. **Chiptune/MIDI Art**: Essential for creating music that sounds like a GeoCities background midi.

## Important Setup
Fruity LSD is an **Effect Plugin**, not a Generator.
1. Load Fruity LSD on a mixer track.
2. Set the `Port` number in LSD (e.g., Port 10).
3. Create a **MIDI Out** channel.
4. Set the MIDI Out `Port` to 10.
5. Now the MIDI Out notes trigger the LSD sounds on the mixer track.
