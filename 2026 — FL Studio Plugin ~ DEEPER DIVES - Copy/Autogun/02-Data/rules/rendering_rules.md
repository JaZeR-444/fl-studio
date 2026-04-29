# Rendering Standards

## Real-time vs. Render
- **Composition:** Keep quality at "Good" to maintain low latency.
- **Exporting:** Always switch to **Pristine** before rendering your final WAV. Additive synthesis is prone to small artifacts in lower quality modes that only become apparent during mastering.

## Volume Safety
- Some Autogun presets can "explode" in volume if the harmonics sum perfectly.
- **Rule:** Always place a `Fruity Limiter` or `Soft Clipper` after Autogun during the exploration phase to protect your ears/speakers.
