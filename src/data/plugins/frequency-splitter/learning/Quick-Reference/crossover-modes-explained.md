# Quick Reference: Crossover Modes Explained

Choosing between Linear Phase, Minimum Phase, and Zero Latency. [SRC: IL-MAN]

## 1. Linear Phase (Mastering Grade)
- **Physics**: Uses FFT processing to shift frequencies without shifting phase.
- **The Good**: Perfectly flat frequency response at the crossover points. No "hollow" sound.
- **The Bad**: Introduces significant latency (delay). Can cause "Pre-Ringing" (a soft "thud" before a sharp kick drum hit).
- **Best For**: Final mixing, mastering, and melodic instruments.

## 2. Zero Latency (Performance Grade)
- **Physics**: Standard IIR filtering.
- **The Good**: No delay. Instant response.
- **The Bad**: Causes "Phase Rotation" at the crossover point. If you split and re-sum without processing, you might hear a small dip in volume at the frequency split.
- **Best For**: Live tracking, recording, and CPU-heavy projects.

## 3. Minimum Phase (The "Analog" Choice)
- **Physics**: Traditional filter logic.
- **The Good**: Mimics the behavior of high-end hardware crossovers. No pre-ringing.
- **The Bad**: Significant phase shift at the crossover points.
- **Best For**: Creative sound design where "vibe" is more important than technical transparency.

---
**Rule of Thumb**: Use **Linear Phase** for finishing a track; use **Zero Latency** for starting a track.
