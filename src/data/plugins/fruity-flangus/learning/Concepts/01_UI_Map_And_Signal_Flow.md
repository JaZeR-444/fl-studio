# UI Map And Signal Flow: Fruity Flangus

## UI Tour
Fruity Flangus features a streamlined interface focused on voice count and stereo distribution. [SRC: IL-MAN]

### 1. The Engine (The "Thickness")
- **Order**: Determines the number of stacked flanger voices (1 to 8). This is the most important knob for "thickness."
- **Delay**: Sets the base delay time for the voices.
- **Speed**: The rate of the LFO modulation.
- **Depth**: How far the LFO modulates the delay lines.

### 2. Stereo & Tonal (The "Width & Color")
- **Spread**: Spreads the voices across the stereo field. 0% is mono; 100% is ultra-wide.
- **Cross**: Adjusts the amount of left-to-right channel feedback and mixing.
- **Damping**: A low-pass filter for the wet signal. Use this to make the effect sound "darker" or more "distant."

### 3. Mix Section
- **Dry/Wet**: Balance between the original and processed signal.

## Signal Flow
1. **Input**: Signal enters.
2. **Multi-Tap Generation**: The signal is split into multiple parallel paths based on the **Order** setting.
3. **Staggered Modulation**: Each path receives an LFO modulation with a slight phase offset from the others.
4. **Damping**: The high frequencies of the combined wet paths are attenuated.
5. **Stereo Logic**: Each voice is panned across the field based on **Spread**, and channels are inter-mixed based on **Cross**.
6. **Summing**: The multi-voice cloud is mixed back with the Dry signal.

## Things Beginners Misunderstand
- **"Order is volume"**: Increasing the order adds more voices, which increases the RMS level. You may need to lower the track fader.
- **"It's just a chorus"**: Technically, flanging uses much shorter delay times than chorusing. Even with many voices, Flangus maintains a "comb-filtered" or "phasy" quality that standard chorus does not.
- **The Cross Knob**: If you set Cross to high levels, you can create intense phase cancellation. Always check your meters.
