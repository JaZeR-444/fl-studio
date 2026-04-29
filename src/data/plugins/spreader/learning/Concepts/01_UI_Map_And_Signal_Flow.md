# 01: UI Map and Signal Flow

## UI Sections Tour
Spreader features a clean, single-panel modern interface designed for speed and visual accuracy. [SRC: IL-MAN-07]

### 1. Visualization (The Vectorscope)
- **The Display:** Shows the stereo image in real-time. 
- **The Line:** A vertical line indicates a pure mono signal.
- **The Flower/Cloud:** Indicates stereo width. The wider the shape, the more stereo information.

### 2. Main Processing (Width & Separation)
- **Width:** Expands the signal into the stereo sides.
- **Separated/Merged:** Controls the balance between the center signal and the side signal. "Separated" pushes sound to the edges; "Merged" pulls it toward the middle.

### 3. Low Bypass Section (The Low-End Guard)
- **Freq Slider:** Selects the frequency below which the signal is NOT widened.
- **Mono Toggle:** Collapses the bypassed low frequencies into pure mono (essential for bass).

### 4. Gain & Master
- **Gain:** Adjusts the output level (useful as widening can sometimes change perceived loudness).

## Signal Flow
`Input Signal -> Frequency Splitter (Low/High) -> Low Path (Mono Bypass) -> High Path (Stereo Synthesis) -> Summing Engine -> Master Gain -> Output`

## Things Beginners Misunderstand
- **Mono Compatibility:** Many "wideners" create phase issues. Spreader is specifically designed to avoid this. If you turn FL's Master to mono, the Spreader effect disappears, but the *sound* doesn't get thin or quiet.
- **Separation vs. Width:** **Width** creates the stereo signal. **Separation** determines how much of that signal is heard relative to the original mono center.
- **Low Bypass:** This doesn't cut the bass; it just tells Spreader "don't widen these frequencies."
    