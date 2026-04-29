# UI Map And Signal Flow

## Interface Overview
Wave Candy uses a **glass interface** that can be made transparent and "Always on Top" [SRC: IL-MAN]. The main display switches between four modes via tabs at the top.

## Mode Navigation
```
[Oscilloscope] [Spectrum] [Vectorscope] [Peak Meter]
     ↑              ↑            ↑             ↑
   Waveform     Frequency     Stereo Field    Levels
```

## 1. Oscilloscope Mode

### Main Display
- **Waveform View:** Real-time waveform display
- **Time Scale:** Adjustable zoom (horizontal)
- **Amplitude Scale:** Adjustable gain (vertical)
- **Trigger Level:** Stabilizes display on transients

### Key Controls
- **Time Scale:** 0.1ms - 1000ms [SRC: IL-MAN]
- **Amplitude Scale:** -60dB to +12dB
- **Trigger:** Auto/Manual modes
- **Display Mode:** Line/Dot/Solid

### Right-Click Behaviors
- **Waveform:** Copy waveform data to clipboard
- **Time Scale:** Reset to default
- **Background:** Toggle grid display

## 2. Spectrum Mode

### Main Display  
- **Frequency Plot:** Real-time frequency analysis
- **Color Coding:** Rainbow/Grayscale/Custom palettes
- **Scale Type:** Linear or Logarithmic frequency axis

### Key Controls
- **FFT Size:** 256 - 32768 samples (affects resolution vs response)
- **Frequency Range:** 20Hz - 20kHz adjustable
- **Amplitude Range:** -96dB to +12dB
- **Display Type:** Bar/Line/Heatmap

### Spectrum Specific Settings
- **Smoothing:** Averaging for stable display
- **Peak Hold:** Shows frequency peaks over time
- **Channels:** L/R/Mono/All selectable

## 3. Vectorscope Mode

### Main Display
- **Circular Display:** Shows stereo image and phase correlation
- **Center Dot:** Mono content
- **Outer Ring:** Stereo content
- **Pattern Shape:** Phase relationship visualization

### Key Controls
- **Zoom:** Magnification of display
- **Persistence:** Trail duration for patterns
- **Reference:** +/- 45° reference lines
- **Scope Speed:** Response time

### Vectorscope Interpretation
- **Vertical Line:** Perfect mono (L = R)
- **Horizontal Line:** Perfect stereo (L ≠ R, 90° out of phase)
- **Circle:** Wide stereo with good phase
- **Figure-8:** Stereo content with phase issues

## 4. Peak Meter Mode

### Main Display
- **Vertical Meters:** L/R channel levels
- **Peak Indicators:** Highest level reached
- **Scale Options:** dBFS/dBU/dB various
- **Hold Time:** Peak retention duration

### Meter Features
- **Ballistics:** Fast attack, adjustable release
- **Reference Level:** Adjustable 0dB point
- **Clip Warning:** Visual alert for 0dBFS
- **Digital/Analog Scale:** Switchable display

## Global Controls (All Modes)

### Display Options
- **Always on Top:** Floats over other windows
- **Transparency:** Glass mode adjustable opacity
- **Size:** Resizable display window
- **Fullscreen:** Maximized analysis view

### Recording Feature
- **Record:** Capture display to image file
- **Settings:** Image format, quality, naming
- **Export:** Save analysis snapshots

### Right-Click Context Menu
```
Copy Display Settings
Save Preset
Load Preset
Reset to Default
Help/About
```

## Signal Flow Understanding

### Audio Input Path
```
Channel/Track → Wave Candy Input → Analysis Engine → Display
```

### Processing Chain
1. **Input Buffer:** Receives audio from track
2. **Analysis Engine:** Processes based on selected mode
3. **Display Renderer:** Updates visual display
4. **Export Handler:** Manages screenshots/recording

### Multi-Instance Support
- **Multiple Wave Candy instances** can run simultaneously [SRC: IL-MAN]
- Each instance analyzes different tracks/outputs
- CPU usage scales with instance count

## Common Interface Misunderstandings

### ❌ Wrong Thinking
- "Wave Candy processes audio"
- "Changing settings changes the sound"
- "Bigger display = better analysis"
- "FFT size affects sound quality"

### ✅ Correct Understanding  
- Wave Candy is **monitoring only**
- Settings affect **display only**
- Analysis quality depends on **FFT size and scale**
- Display size affects **visibility only**

## Keyboard Shortcuts
- **Space:** Pause/Resume display
- **R:** Reset to default view
- **S:** Save screenshot
- **T:** Toggle transparency
- **1-4:** Switch between modes

[UNVERIFIED]: Some keyboard shortcuts may vary by FL Studio version. Verify in FL Studio with Wave Candy focused.

## Workflow Integration Tips
1. **Master Channel:** Keep Spectrum running continuously
2. **Drum Editing:** Switch to Oscilloscope for transient work  
3. **Stereo Issues:** Vectorscope for width and phase checking
4. **Export Quality:** Peak Meter for final level verification