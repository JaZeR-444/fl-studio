# Granular Synthesis Basics

Fruity Granulizer breaks audio into tiny pieces called "grains."

## Core Parameters
- **Grain Spacing**: Determines how often a new grain is generated. Lower values = smoother sound, higher values = more "buzz" or stutter.
- **Wave Spacing**: Controls the playback speed of the grains relative to the original sample.
- **Attack/Hold/Decay**: This is the envelope *per grain*, not for the whole sound. Adjusting this changes the texture from "clicking" (fast attack/decay) to "smooth" (slow attack/decay).

## The "Transient" Loop
Granulizer is often better than a standard sampler for loops because it can stretch the loop to fit the tempo (using the 'Fit' option) while allowing you to completely deconstruct the texture of the sound without changing the pitch.
