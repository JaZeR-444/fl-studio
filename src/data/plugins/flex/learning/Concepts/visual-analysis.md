# Visual Analysis in FLEX

FLEX includes a dedicated **Analysis Section** in the top center of the interface. Unlike many synths that just have "eye candy," these tools are precise measurement instruments helping you understand the sonic characteristics of your preset.

## 👁️ The Visualizers

Click the icons on the left of the display to switch modes.

### 1. 〰️ Oscilloscope (Waveform)
**What it shows:** The raw shape of the sound wave over time.
*   **Sync:** It automatically syncs to the pitch of the lowest MIDI note played.
*   **Use Case:** Identifying the "shape" of the sound.
    *   **Sine/Triangle shapes:** Smooth, flute-like, sub-bass.
    *   **Sawtooth/Square shapes:** Buzzing, aggressive, rich harmonics.
*   **Pinch Mode:** Right-click the display to toggle "Pinch". This zooms in on the center, helpful for seeing transient details.

### 2. 🌈 Spectrogram
**What it shows:** A scrolling history of frequency intensity.
*   **Vertical Axis:** Frequency (Low at bottom, High at top).
*   **Horizontal Axis:** Time (scrolling right to left).
*   **Color/Hue:** Intensity/Volume.
*   **Use Case:** Checking for "holes" in the spectrum or seeing how a sound evolves.
    *   If you see bright colors only at the bottom, it's a bass-heavy sound.
    *   If you see a sweeping line going up/down, that's a filter sweep or pitch slide.

### 3. 💠 Vectorscope
**What it shows:** Stereo width and phase relationship.
*   **Vertical Axis:** Left Channel vs Right Channel difference (Side).
*   **Horizontal Axis:** Mono Sum (Mid).
*   **Use Case:** Checking mix compatibility.
    *   **Thin vertical line:** Perfectly Mono signal.
    *   **Wide, messy ball:** Wide Stereo signal.
    *   **Flat horizontal line:** Signals are out of phase (Phase Cancellation risk!).

### 4. 📊 Frequency Histogram
**What it shows:** A real-time bar graph of frequency balance.
*   **Left:** Low Frequencies (Bass).
*   **Right:** High Frequencies (Treble).
*   **Use Case:** Quick EQ check.
    *   Is the preset too boomy? (Huge bar on the left).
    *   Is it too harsh? (Spikes on the far right).

## 🎨 Theming
Did you know you can change the look of FLEX?
*   **Double-click** anywhere on the Analysis display (or the FLEX logo) to cycle through different color themes.
*   This doesn't change the sound, but a darker theme might be easier on the eyes during late-night sessions!
