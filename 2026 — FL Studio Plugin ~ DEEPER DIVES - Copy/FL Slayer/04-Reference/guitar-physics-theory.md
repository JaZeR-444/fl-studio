# Technical Reference: Guitar Physics Theory

Understanding the physical modeling engine of FL Slayer. [SRC: IL-MAN]

## 1. What is Physical Modeling?
Instead of replaying a recording (Sampling), FL Slayer uses mathematical algorithms to simulate the physical properties of a vibrating string.
- **The Loop**: The fundamental frequency is created by a delayed feedback loop. The length of the delay determines the pitch.
- **Damping**: This parameter simulates the absorption of energy. A high damping value simulates a finger resting on the string (Palm Muting).

## 2. Pickup Simulation (Harmonic Knob)
The **Harmonic** knob simulates where the virtual "pickup" is placed along the string.
- **Left (Neck)**: Captures more of the fundamental frequency. Result: Warm, round, and dark.
- **Right (Bridge)**: Captures more high-frequency harmonics. Result: Sharp, twangy, and thin.

## 3. The Amp/Cab Relationship
- **Non-Linearity**: Guitar amplifiers are "non-linear" processors. They add harmonics based on the input volume.
- **The Cabinet Filter**: A speaker cabinet acts as a complex EQ curve that drastically cuts frequencies above 5kHz and below 100Hz. This is what makes a guitar sound "real" and not like a buzzing synth.

## 4. Double Pitch Bend
FL Slayer implements a specialized MIDI logic to allow for simultaneous bends. One bend can handle the vibrato while the other handles the glissando (slide) between notes.
