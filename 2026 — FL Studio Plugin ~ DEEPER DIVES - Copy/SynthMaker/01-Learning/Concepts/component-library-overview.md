# Component Library Overview

## 1. Primitives (The Atoms)
These are the lowest-level nodes. They represent single mathematical operations or fundamental DSP functions. [SRC: IL-MAN-08]
- **Math:** Add, Sub, Mult, Div (The building blocks of everything).
- **Streams:** Sine, Saw, White Noise (The sound sources).
- **Filters:** Biquad, SVF (Standard audio filtering).
- **Comparison:** Greater than, Less than (For logic/triggering).

## 2. Modules (The Organs)
These are pre-built schematics that perform complex tasks.
- **ADSR:** Standard Attack, Decay, Sustain, Release module.
- **Arpeggiator:** Takes MIDI and outputs a rhythmic sequence.
- **Midi To Poly:** Converts single MIDI events into multiple "voice" streams.
- **Wave Player:** Plays back `.wav` files from your disk.

## 3. Visuals & GUI (The Skin)
- **Knob/Slider:** Basic user interaction.
- **Scope/Meter:** Displays the audio waveform or volume visually.
- **Bitmap:** Allows you to skin the plugin with your own images.
- **Text:** Labeling your controls.

## 4. Input/Output (The Senses)
- **Audio Out:** Connects the final stream to the FL Studio Mixer.
- **MIDI In:** Receives notes from the FL Studio Piano Roll.
- **Joystick:** (Unique Feature) Allows you to use game controllers as inputs for your synth.
- **COM Port:** For advanced users connecting to Arduinos or other serial devices.
