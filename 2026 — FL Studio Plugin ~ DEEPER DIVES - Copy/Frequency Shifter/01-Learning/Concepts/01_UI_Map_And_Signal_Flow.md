# UI Map And Signal Flow: Frequency Shifter

## UI Tour
Frequency Shifter's interface is centered around the large Shift knob and feedback logic. [SRC: IL-MAN]

### 1. The Shift Engine (The "Core")
- **Frequency Knob**: The primary control. Sets the amount of shift in Hz.
- **Direction Toggle**: Switch between **UP**, **DOWN**, or **BOTH** (Ring Modulation style).
- **L/R Link Switch**: When unlinked, you can shift the Left and Right channels by different amounts.

### 2. Feedback & Texture (The "Motion")
- **FB (Feedback)**: Feeds the shifted output back into the input. 
- **Phase**: Adjusts the starting phase of the internal oscillators. Affects transient sharpness.
- **Smoothing**: Dampens rapid automation jumps to avoid digital "clicks."

### 3. Mix & Output (The "Blend")
- **Mix**: Dry/Wet balance. **CRITICAL**: For subtle effects, keep this between 5-20%.
- **Output Meter**: Shows the final signal level. Feedback can cause volume spikes.

## Signal Flow
1. **Input Stage**: The stereo audio signal enters.
2. **SSB (Single Sideband) Modulation**: The signal is split into complex analytic signals.
3. **Internal Oscillator**: A sine-wave oscillator (running at the frequency you set) modulates the analytic signal.
4. **Shift Calculation**: The oscillator adds/subtracts its frequency from every component of the input.
5. **Feedback Loop**: (If active) the shifted audio is fed back into the SSB stage.
6. **Re-summing**: The shifted frequency components are converted back into a standard audio signal.
7. **Mix Stage**: The shifted signal is blended with the original Dry signal.

## Things Beginners Misunderstand
- **"It's out of tune"**: Frequency shifting is **not pitch shifting**. It will always sound slightly dissonant unless the shift is extremely small (under 5Hz).
- **Static vs. Animated**: The most powerful way to use this plugin is through **Automation**. A static frequency shift often sounds like a broken radio; an automated one sounds like a futuristic texture.
- **The "Ring Mod" Connection**: If you set the mode to "BOTH," the plugin effectively becomes a Ring Modulator, creating "Sum and Difference" tones.
