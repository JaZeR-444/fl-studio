# UI Map And Signal Flow: Fruity Limiter

## UI Tour
The interface is dominated by the scrolling analysis window, with two main functional tabs at the bottom. [SRC: IL-MAN]

### 1. The Analysis Window (The Visualizer)
- **Grey Waveform**: The incoming raw audio.
- **Purple Waveform**: The processed output audio.
- **White Line**: The "Gain Reduction" meter. When it dips, the plugin is active.
- **Blue Line**: The Ceiling (Limit) or Threshold (Comp).

### 2. The LIMIT Tab (The Protector)
- **CEIL**: The absolute maximum volume level allowed.
- **ATT/REL**: How fast the limiter reacts and recovers.
- **SAT (Saturation)**: Adds harmonic "warmth" to the signal as it reaches the ceiling.

### 3. THE COMP Tab (The Groover)
- **THRES**: The level where compression begins.
- **RATIO**: How much the volume is reduced once it crosses the threshold.
- **SIDECHAIN**: Selects the external input for ducking effects.

### 4. THE NOISE GATE (The Cleaner)
- **GAIN/THRES**: Controls the silencing of quiet background noise.

## Signal Flow
1. **Input**: Audio enters.
2. **Compressor Stage**: Signal is processed by the **COMP** tab settings.
3. **Gain Stage**: Post-compression gain is applied.
4. **Limiter Stage**: The signal is then fed into the **LIMIT** tab logic.
5. **Saturation**: Final harmonic shaping occurs at the ceiling.
6. **Output**: Final capped signal leaves the plugin.

## Things Beginners Misunderstand
- **Tab Priority**: The signal passes through the Compressor *first*, then the Limiter. If you have extreme settings on both, you might be over-compressing.
- **Lookahead**: The Limiter uses a "Lookahead" time (Attack knob in LIMIT tab). This adds a microscopic amount of latency to the project to prevent peaks from ever escaping.
- **Ceiling vs. Volume**: The Ceiling doesn't just lower the volume; it flattens the peaks. If you want more volume, raise the **GAIN** knob while keeping the **CEIL** static.
