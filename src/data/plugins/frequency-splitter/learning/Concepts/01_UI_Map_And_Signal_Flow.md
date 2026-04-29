# UI Map And Signal Flow: Frequency Splitter

## UI Tour
Frequency Splitter's interface is centered around its visual frequency display and routing matrix. [SRC: IL-MAN]

### 1. The Frequency Display (Visualizer)
- **Crossover Handles**: Vertical bars you can drag to set the split points (Low/Mid and Mid/High).
- **Spectrum Analyzer**: Shows the real-time energy of the input signal.
- **Phase Response**: (If enabled) shows the phase shift introduced by the filters.

### 2. Band Controls (Bottom Left)
- **Mute / Solo**: Essential for hearing what each frequency range sounds like in isolation.
- **Gain**: Adjusts the volume of the specific band.
- **Invert Phase**: Flips the polarity of the band.

### 3. Crossover Engine (Top Right)
- **Mode Switch**: **Linear Phase** (Transparent but latent), **Minimum Phase** (Analog style), or **Zero Latency**.
- **Slope Selector**: Sets the steepness of the split (6dB to 96dB per octave).
- **Freq Knobs**: Precise entry for the split frequencies.

### 4. Routing Matrix (Bottom Right)
- **Send to**: Routes the specific band to a different Mixer Track or Patcher output.

## Signal Flow
1. **Input**: Audio signal enters the plugin.
2. **Crossover Filters**: The signal is processed by Linkwitz-Riley or FFT filters based on the **Mode**.
3. **Split Logic**: The audio is duplicated into 3 parallel paths (Low, Mid, High).
4. **Gain/Phase Adjust**: Each path is modified by its individual gain and phase settings.
5. **Output Routing**: 
   - **Internal**: The bands are re-summed and sent to the plugin's main output.
   - **External**: Each band is sent to its designated Mixer Track or Patcher output.

## Things Beginners Misunderstand
- **"It sounds hollow at the split"**: This happens if you use **Zero Latency** mode with a low-slope filter. Phase shift at the crossover point causes cancellation. Switch to **Linear Phase** for a perfectly flat sum.
- **Latency**: In **Linear Phase** mode, the plugin adds a significant amount of delay. FL Studio's PDC will fix it, but it might feel "laggy" while recording live.
- **The "Output" Knobs**: These are not volume knobs for the plugin; they are routing selectors.
