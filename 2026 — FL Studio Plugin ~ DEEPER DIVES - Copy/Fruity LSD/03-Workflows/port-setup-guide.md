# Port Setup Guide

The most confusing part of Fruity LSD is the port mapping.

## The Signal Chain
1. **Piano Roll** (MIDI Data) -> **MIDI Out Plugin**
2. **MIDI Out Plugin** (Port X) -> **FL Studio Internal MIDI Bus**
3. **FL Studio Internal MIDI Bus** (Port X) -> **Fruity LSD**
4. **Fruity LSD** (Audio Generation) -> **Mixer Track**

## Troubleshooting
- **No Sound?** Check that the `Port` number on the MIDI Out plugin matches the `Port` number on the LSD interface.
- **Wrong Instrument?** Change the `Patch` number on the MIDI Out plugin. 
  - Patch 0 = Grand Piano
  - Patch 30 = Distortion Guitar
  - Patch 48 = Strings
  - Channel 10 is ALWAYS drums.
