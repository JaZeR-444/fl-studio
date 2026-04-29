# 01: UI Map and Signal Flow

## UI Sections Tour
Transient Processor features a modern, streamlined interface focused on the two main stages of a transient. [SRC: IL-MAN-10]

### 1. The Visualization (Histogram)
- **Top Meter:** Shows the input signal peaks.
- **Bottom Meter:** Shows the intensity of the processing (Attack/Release).
- **Transient Markers:** Visual indicators of where the plugin has detected a "hit."

### 2. Attack Section
- **Attack Knob:** Boost or cut the initial transient (+/- 15dB).
- **Attack Behavior:** Determines how the plugin perceives the "start" of the sound.

### 3. Release Section
- **Release Knob:** Boost or cut the tail/sustain of the sound.
- **Release Behavior:** Determines how quickly the plugin returns to zero after a transient.

### 4. Frequency Split & Drive
- **Split Freq:** A slider that protects the low frequencies from the processing. Essential for avoiding low-end distortion.
- **Drive:** Adds soft saturation to the processed transients, making them feel "fatter."

### 5. Master Section
- **Gain:** Output volume adjustment.
- **Mix:** Dry/Wet balance.

## Signal Flow
`Input Signal -> Histogram Detection (IEF) -> Frequency Splitter -> Attack/Release Processing -> Saturation (Drive) -> Mix -> Output`

## Things Beginners Misunderstand
- **"It's just a compressor":** It’s not. A compressor turns *down* loud sounds. Transient Processor can turn *up* the quiet attack phase of a sound without affecting the overall peak as much.
- **Distortion on Bass:** If your kick sounds "crunchy," your **Split Freq** is likely too low. Move it up to 150-200Hz.
- **Mix Knob:** If the effect is too aggressive, use the **Mix** knob at 50% for "parallel transient shaping."
    