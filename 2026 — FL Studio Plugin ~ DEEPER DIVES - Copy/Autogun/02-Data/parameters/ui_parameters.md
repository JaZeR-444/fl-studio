# Autogun UI Parameters

## 1. The ID Box (Preset Number)
- The only "input" parameter.
- **Internal Mapping:** Acts as the 32-bit seed for the random number generator.

## 2. Magic Dust (The Optimizer)
- **Algorithm:** Maximus "Soundgoodizer" Type A.
- **Process:** Multiband compression followed by a limiter.
- **Tip:** Turning this to 0% reveals the raw, sometimes thin, additive harmonics of the Ogun engine.

## 3. Master Volume
- Range: -inf to +6dB (approx).
- **Behavior:** Autogun presets vary wildly in gain due to harmonic summation. Use this to normalize levels between sounds.
