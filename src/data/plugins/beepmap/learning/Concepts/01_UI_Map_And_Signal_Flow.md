# UI Map And Signal Flow: BeepMap

## UI Tour
BeepMap's interface is centered around the image display and scanning parameters. [SRC: IL-MAN]

### 1. The Image Display (The "Source")
- **Main Box**: Drag and drop any image file here to load it.
- **The Scanner**: A vertical red line that moves from left to right during playback.

### 2. Scanning Parameters (The "Engine")
- **Frequency (Hz)**: Sets the base frequency range. 
- **Length (ms)**: Controls how long it takes to scan the image.
- **Loop**: If enabled, the scanner jumps back to the left after finishing.
- **Grain**: Controls the resolution of the scan (the "smoothness" of the synthesis).

### 3. Tonal Modifiers (The "Character")
- **Scale**: Linear vs Logarithmic frequency distribution. (Logarithmic is more "musical").
- **Blue**: Determines if the Blue channel of the image affects the sound (usually added as extra frequency modulation).

### 4. Output
- **Max / Min Gain**: Final output faders.

## Signal Flow
1. **Trigger**: MIDI note is received.
2. **Image Scan**: The engine reads the pixel data under the "Scanner" line.
3. **Pixel Processing**: 
   - **Vertical Position** -> Sine wave frequency.
   - **Brightness** -> Volume.
   - **Color (Red/Green)** -> Stereo Panning.
4. **Resynthesis**: Thousands of sine waves are generated and summed in real-time.
5. **Summing**: The resulting spectral audio is sent to the mixer.

## Things Beginners Misunderstand
- **"It just sounds like noise"**: Most high-resolution photos have too much data for BeepMap. Use simple, low-resolution "Pixel Art" or abstract shapes for more musical results.
- **The "Pitch"**: The MIDI note you play simply triggers the scan. Higher notes might speed up the scan, but the actual "tuning" is determined by the image itself.
- **Scale Switch**: If the sound feels "out of tune" across the keyboard, switch from **Linear** to **Logarithmic** scale.
