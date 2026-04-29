# Genre Rules: Hip-Hop & R&B

## The "Lo-Fi" Construction Rule
- **Rule:** When building effects for Lo-Fi Hip-Hop, always include a **Quantize** primitive before the final output. This allows you to dial in 12-bit "crunch" exactly where you want it.
- **Rule:** Use a **Sample & Hold** prim to reduce the sample rate to 22kHz or 11kHz for that authentic vintage sampler texture.

## Mono Low-End Discipline
- **Rule:** If you are building a custom bass synth, hard-code the final output to **Mono**. Complex modular synths often create phase widening that ruins the punch of a Hip-Hop kick.
- **Rule:** Add a "Sub-Bypass" path in your schematic that routes the low frequencies (below 150Hz) around your modulation effects.

## Space & Width
- **Rule:** For "Vibey" R&B, include a **Chorus** module in your synth build. SynthMaker's delay primitives are great for creating custom, extra-wide choruses that feel "larger than life."
- **Rule:** Avoid 100% width on leads; keep them at 20-30% to leave room for vocals.

## Transient Clarity (The Trap Rule)
- **Rule:** When building a Trap pluck, ensure your ADSR module has an "Instant" attack (0ms). In visual programming, even a 1-pixel delay can make a pluck feel "lazy."
- **Rule:** Include a "Pitch Envelope" module that adds a 10ms spike to the frequency at the start of every note. This adds the "thwack" needed for trap beats.

## CPU Management
- **Rule:** SynthMaker is intensive. If you use it in a big Hip-Hop project, **Consolidate** (Bounce to Audio) your track as soon as the melody is finished. This saves CPU for your vocals and mixing plugins. [SRC: REPUTABLE-09]
    