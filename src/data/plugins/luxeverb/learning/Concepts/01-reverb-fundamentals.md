# LuxeVerb Concepts

## Reverb Fundamentals

Reverb simulates sound reflection in physical spaces. Understanding how reverb works helps create realistic or creative effects.

---

## Reverb Components

### Early Reflections
- First sound reflections off walls
- Define room size and shape
- Heard in first 50-100ms
- More prominent in small rooms

### Late Reverb (Tail)
- Diffused reflections
- Creates sense of space
- Longer decay times
- Can be filtered independently

### Pre-Delay
- Time before reverb begins
- Separates dry signal from reverb
- More pre-delay = clearer transients
- Typical: 0-50ms

---

## Reverb Parameters

### Decay Time
- Duration of reverb tail
- Small room: 0.5-1.5 seconds
- Medium room: 1.5-3 seconds
- Large hall: 3-6 seconds
- Cathedral: 8+ seconds

### Diffusion
- How scattered reflections are
- Low diffusion = discrete echoes
- High diffusion = smooth, washed sound
- Affects "cloud" quality

### High/Low Pass Filters
- Remove frequencies from reverb
- Prevents muddy low end
- Controls harsh high end
- Essential for clean mixes

---

## Reverb Types

### Hall
- Natural, musical spaces
- Warm, rounded character
- Versatile for many sources
- Good for: Pads, strings, vocals

### Plate
- Artificial reverb (metal plate)
- Dense, smooth character
- No early reflections
- Good for: Vocals, drums, vocals

### Room
- Small, tight spaces
- Short decay times
- Adds depth without space
- Good for: Drums, guitars, tight mixes

### Cathedral
- Massive, epic spaces
- Very long decay
- Wide stereo image
- Good for: Breakdowns, atmosphere

### Shimmer
- Pitch-shifted reverb
- Ethereal, dreamy quality
- Usually +1 octave
- Good for: Synths, vocals, atmosphere

---

## Stereo Imaging

### Stereo Width
- Reverb stereo spread
- Mono reverb = centered
- Stereo reverb = wide
- Use for depth and space

### Mono Compatibility
- Check reverb in mono
- Phase issues possible
- Some stereo reverb collapses poorly
- Test before finalizing

---

## Common Reverb Problems

### Muddy Mix
- Too much low-frequency reverb
- Solution: High-pass at 150-200Hz
- Check with high-pass engaged

### Harsh Reverb
- Too much high frequency
- Solution: Low-pass at 10-12kHz
- Add high damping

### Masking
- Reverb covers dry signal
- Solution: Increase pre-delay
- Reduce mix percentage

### Phasing
- Mono compatibility issues
- Solution: Use mid-side EQ
- Check in mono

---

## Related Documentation

- [LuxeVerb By-Instrument Workflows](../03-Workflows/by-instrument/INDEX.md)
- [LuxeVerb By-Goal Workflows](../03-Workflows/by-goal/INDEX.md)
- [LuxeVerb Presets](../02-Data/presets/INDEX.md)
- [LuxeVerb Safety Rules](../02-Data/rules/luxeverb-safety-rules.md)
