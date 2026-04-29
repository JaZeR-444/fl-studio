# UI Map And Signal Flow

Fruity Equo's interface is divided into several functional zones that dictate how the 32 frequency bands behave.

## 1. The Main Display (The Bars)
- **32 Frequency Bands**: These represent the gain levels for fixed frequency ranges across the audible spectrum.
- **Left-Click & Drag**: Draw a curve across the bands.
- **Right-Click**: Reset a band to zero.

## 2. Mode Selectors (Bottom Left)
- **VOL (Volume)**: Default mode. The sliders control the gain of each band.
- **PAN (Panning)**: The sliders control the stereo placement of each band. This allows for "spectral panning."
- **SEND**: Controls how much of each band is sent to the designated Send track (if configured).

## 3. Global Controls (Right Side)
- **Master Gain**: Offsets the overall output level.
- **Interpolate**: Morph between the current curve and the "Target" curve.
- **Smooth**: Applies smoothing to the drawn curve to avoid harsh transitions between bands.

## 4. Preset/Bank Management
- **Target Bank**: You can store different curves in banks and interpolate between them using the slider.

## Signal Flow
1. **Input Signal**: Audio enters the plugin.
2. **Band Splitting**: The signal is divided into 32 discrete frequency bands.
3. **Gain/Pan Processing**: Each band is scaled based on the VOL/PAN sliders.
4. **Summing**: The processed bands are recombined.
5. **Output**: The final mixed signal exits the plugin.
