# Compressor Curve Types & Knee Analysis

## The "Knee" Concept
The "Knee" refers to how the compressor transitions from an uncompressed state to a compressed state as the signal crosses the threshold.

### 1. Hard Knee (`Hard`, `Hard R`)
- **Behavior:** Immediate transition. If the threshold is -10dB, a signal at -9.9dB is fully compressed at the specified ratio.
- **Sound:** Aggressive, noticeable.
- **Best For:** Percussion, limiting, surgical peak control.

### 2. Medium Knee (`Medium`, `Medium R`)
- **Behavior:** A slight curve around the threshold.
- **Sound:** A balance between transparency and control.
- **Best For:** Snare drums, rhythmic guitars.

### 3. Vintage Knee (`Vintage`, `Vintage R`)
- **Behavior:** Emulates the non-linear response of classic Opto or VCA hardware.
- **Sound:** Musical, "warm", slightly unpredictable in a pleasing way.
- **Best For:** Vocals, bass, acoustic instruments.

### 4. Soft Knee (`Soft`, `Soft R`)
- **Behavior:** Very wide curve. Compression starts subtly before the signal even reaches the threshold and reaches the full ratio well above it.
- **Sound:** Transparent, nearly invisible.
- **Best For:** Master bus, backing vocals, lush pads.

## The "R" Variants (Rapid Release)
The `R` suffix (e.g., `Hard R`) modifies the release curve to be more exponential than linear. This allows the compressor to "recover" faster from deep gain reduction, which can prevent the sound from feeling "stifled" during busy passages.
