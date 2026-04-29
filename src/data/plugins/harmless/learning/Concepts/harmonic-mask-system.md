# Harmonic Mask System

## What is the Harmonic Mask?

The Harmonic Mask is Harmless's **visual oscillator editor**. Instead of selecting preset waveforms, you draw the amplitude of each individual harmonic - creating custom oscillator shapes from scratch.

## Interface

The mask displays 512 vertical bars representing harmonics (multiples of the fundamental frequency). Click and drag to:
- **Raise bars**: Add that harmonic
- **Lower bars**: Remove/reduce that harmonic
- **Shape tools**: Curve, ramp, square, randomize

## Understanding Harmonics

- **Harmonic 1**: Fundamental (base pitch)
- **Harmonic 2**: Octave above fundamental
- **Harmonic 3**: Perfect fifth + octave
- **Harmonic 4**: Two octaves above
- **Odd harmonics** (1,3,5,7...): Add "hollow", "woodwind" character
- **Even harmonics** (2,4,6,8...): Add "warmth", "brightness"

## Common Shapes

### Sawtooth Approximation
All harmonics decreasing in amplitude: 1.0, 0.5, 0.33, 0.25, 0.2...

### Square Wave Approximation
Odd harmonics only: 1.0, 0, 0.33, 0, 0.2, 0, 0.14...

### Hollow/Clarinet
Odd harmonics with faster decay: 1.0, 0, 0.2, 0, 0.1, 0...

### Bright/Buzzy
First 8-10 harmonics at full amplitude, then sharp drop

### Resonant/Formant
Specific harmonic bands boosted (useful for vocal synthesis)

## Creative Uses

- **Filter sweeps without filters**: Draw a moving mask envelope
- **Vowel synthesis**: Create formant regions (harmonics 3-8 boosted)
- **Grit textures**: Sparse random harmonics for industrial sounds
- **Bell harmonics**: Inharmonic relationships for metallic tones

## Pro Tip

Combine Harmonic Mask with the Filter's resonance for "impossible" subtractive sounds - the filter can boost harmonics that the mask didn't include, creating unique resonant sweeps.

[SRC: IL-MAN - Harmless Oscillator Section]
