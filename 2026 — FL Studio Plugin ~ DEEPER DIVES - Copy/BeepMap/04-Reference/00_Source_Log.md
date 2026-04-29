# Source Log: BeepMap

Documentation tracking and verification.

## 1. Primary Source: Image-Line Official Manual
- **URL**: [BeepMap Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/BeepMap.htm)
- **Key Verification**: Confirmed that BeepMap is an image-to-sound synthesizer, not a step sequencer.

## 2. Secondary Source: Spectral Synthesis DSP Theory
- **Topic**: Logarithmic vs Linear scaling in spectral synthesis.
- **Verification**: Confirmed the importance of Log scale for melodic applications.

## 3. Empirical Testing (JaZeR Mainframe)
- **Test**: Loading 4K images vs 128px images.
- **Result**: 128px images produced significantly more "tonal" and less "noisy" results.
- **Test**: Blue channel modulation.
- **Result**: Adds a metallic frequency shift to existing sounds.
