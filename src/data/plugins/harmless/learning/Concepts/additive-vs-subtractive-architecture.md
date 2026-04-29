# Additive vs Subtractive Architecture

## The Paradigm Shift

Traditional subtractive synthesizers start with a rich waveform (sawtooth, square) and filter away unwanted harmonics. Harmless **inverts this concept** - it builds only the harmonics you want, then shapes them with subtractive-style filters.

### Why Additive?

- **No phase cancellation**: Since harmonics are generated mathematically, not summed from multiple oscillators, there's no phase interference
- **Perfect brickwall filters**: Filters don't introduce phase issues or resonance artifacts because the harmonics are already separated
- **CPU efficiency**: Only calculates the frequencies you actually hear
- **Unique timbres**: Can create sounds impossible with traditional subtractive synthesis

### The Subtractive Interface

Despite the additive engine, Harmless presents a familiar subtractive workflow:
- Oscillator shapes (saw, square, triangle, custom)
- Filter envelope (ADSR)
- Filter cutoff and resonance
- Effects chain

### Sound Quality Difference

| Characteristic | Subtractive | Harmless Additive |
|------------------|-------------|-------------------|
| Filter resonance | Phase artifacts | Mathematically clean |
| High resonance + cutoff | Can sound harsh | Can be extreme without artifacts |
| Sawtooth waveform | Analog "warmth" | Mathematically perfect |
| CPU usage | Fixed per voice | Scales with harmonic count |

[SRC: IL-MAN - Harmless Overview]
