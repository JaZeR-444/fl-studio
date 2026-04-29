# Autogun Synthesis Theory

## Additive Synthesis Explained
Unlike subtractive synthesis (which starts with a complex wave and filters it down), Autogun's engine (**Ogun**) starts with silence and adds thousands of pure sine waves (harmonics) together.
- This results in extremely high fidelity and "glassy" timbres.
- It allows for precise control over the harmonic series.

## The Seed Algorithm
The "Preset Number" is a 32-bit integer that acts as a seed for a pseudo-random generator. This generator then populates the thousands of harmonic parameters in the Ogun engine.
- Because the math is deterministic, the same seed *always* equals the same sound.
- This is a form of **Procedural Audio Generation**.
