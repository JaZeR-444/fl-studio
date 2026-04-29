# UI Map And Signal Flow: Fruity Granulizer

## UI Tour
The interface is divided into sample properties, grain engine settings, and modulation. [SRC: IL-MAN]

### 1. Grain Engine (The "Confetti")
- **ATT (Grain Attack)**: Fades each grain in. High values create smooth washes; low values create clicks.
- **HOLD (Grain Hold)**: The length of each individual grain.
- **G.SPACING (Grain Spacing)**: How often a new grain is spawned. This effectively controls the "speed" of the playback.

### 2. Wave Engine (The "Flow")
- **W.SPACING (Wave Spacing)**: Controls where the next grain is pulled from in the sample. 
  - *Positive*: Forward flow.
  - *Zero*: Frozen at one spot.
  - *Negative*: Reversed flow.

### 3. Mod & FX (The "Chaos")
- **RAND (Randomness)**: Randomizes the starting position of each grain.
- **PAN (Pan Spread)**: Randomly pans each grain across the stereo field.
- **LFO Section**: Automates the wave spacing for vibrato or rhythmic patterns.

## Signal Flow
1. **Sample Load**: Audio file is loaded into the buffer.
2. **Grain Slicing**: The engine identifies a window of audio based on **HOLD**.
3. **Envelope Application**: Each grain is shaped by the **ATT** (Attack) curve.
4. **Spatial Positioning**: Grains are panned based on the **PAN** setting.
5. **Traversal**: The engine moves through the sample based on **W.SPACING**.
6. **Summing**: Multiple overlapping grains (polyphony) are mixed into the output.

## Things Beginners Misunderstand
- **"It sounds like a robot"**: This happens when grains are too short and spacing is too regular. Increase **ATT** and **RAND** to "humanize" the grain cloud.
- **Polyphony**: Granulizer can play many grains at once. If your CPU is spiking, lower the grain density by increasing **G.SPACING**.
- **W.SPACING vs G.SPACING**: Spacing is *how often* a grain is triggered; Wave Spacing is *where* the engine looks for the next grain.
