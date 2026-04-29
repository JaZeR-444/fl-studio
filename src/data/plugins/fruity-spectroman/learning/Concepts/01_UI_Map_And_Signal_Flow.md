# Fruity Spectroman UI Map & Signal Flow

## Interface Overview

Fruity Spectroman features a **dual-view interface** with spectrum analyzer on top and vectorscope/oscilloscope on bottom. The interface is designed for quick visual analysis with minimal controls.

---

## Main Display Areas

### 1. **Spectrum Analyzer (Top Section)**
**Size:** Approximately 70% of interface  
**Function:** Real-time frequency spectrum visualization

**Visual Elements:**
- **Frequency Grid:** 20 Hz to 20 kHz, logarithmic scale
- **Amplitude Grid:** Vertical scale showing dB levels
- **Spectral Display:** Color-coded frequency content
  - Red/Yellow: High energy (loud frequencies)
  - Green/Cyan: Medium energy
  - Blue/Black: Low energy (quiet frequencies)

**Scale Markers:**
- Low: 20 Hz, 50 Hz, 100 Hz
- Low-Mid: 200 Hz, 500 Hz
- Mid: 1 kHz, 2 kHz, 5 kHz
- High: 10 kHz, 20 kHz

### 2. **Vectorscope/Oscilloscope (Bottom Section)**
**Size:** Approximately 30% of interface  
**Function:** Stereo field and phase relationship visualization

**Modes:**
- **Vectorscope Mode:** Shows stereo width and phase correlation
  - Vertical line: Mono signal
  - Horizontal oval: Wide stereo
  - Diagonal lines: Phase issues
  
- **Oscilloscope Mode:** Shows waveform amplitude over time
  - Both channels superimposed
  - Useful for transient analysis

---

## Control Parameters

### View Controls

#### **Mode Selection**
- **Spectrum Mode:** Standard frequency analysis
- **Spectrogram Mode:** Time-based frequency waterfall display
- **Vector/Scope Toggle:** Switch bottom display mode

#### **Range Settings**
- **Frequency Range:** 20 Hz - 20 kHz (adjustable zoom)
- **Amplitude Range:** Adjustable dB scale
- **Time Window:** Response speed (fast/slow decay)

#### **Display Options**
- **Color Scheme:** Adjust visualization colors
- **Peak Hold:** Show and hold peak frequencies
- **Averaging:** Smooth out rapid changes
- **Resolution:** FFT size (detail vs. CPU usage)

### Visual Enhancement

#### **Decay/Release Time**
- Controls how quickly the spectrum display fades
- **Fast:** Immediate response, shows transients
- **Slow:** Averaged view, easier to read sustained content

#### **Brightness/Contrast**
- Adjust visibility of spectral content
- Higher contrast = easier to spot peaks
- Lower contrast = smoother overall view

---

## Color Coding Guide

### Spectrum Analyzer Colors

**Energy Level Scale (typical):**
```
🔴 Red       = 0 dB (loudest, peak levels)
🟠 Orange    = -6 dB (high energy)
🟡 Yellow    = -12 dB (present content)
🟢 Green     = -24 dB (moderate energy)
🔵 Blue/Cyan = -36 dB (low energy)
⚫ Black     = -∞ dB (no content)
```

**Reading the Colors:**
- **Hot colors (red/yellow):** Dominant frequencies
- **Cool colors (blue/cyan):** Background content
- **Black areas:** Frequency gaps or very quiet content

### Vectorscope Indicators

**Stereo Field Patterns:**
- **Vertical line:** Perfectly mono
- **Circle/oval:** Balanced stereo
- **Horizontal line:** Extreme width (potential phase issues)
- **Diagonal angle:** Phase correlation indicator

---

## Signal Flow Diagram

### Internal Processing Path

```
┌─────────────────────────────────────────────────────┐
│                  INPUT AUDIO                         │
│              (Stereo or Mono)                        │
└────────────────────┬────────────────────────────────┘
                     │
                     ↓
         ┌───────────────────────┐
         │   FFT ANALYSIS        │
         │  (Fast Fourier        │
         │   Transform)          │
         └───────────┬───────────┘
                     │
         ┌───────────┴───────────┐
         │                       │
         ↓                       ↓
┌─────────────────┐    ┌──────────────────┐
│  SPECTRUM       │    │  VECTORSCOPE     │
│  ANALYZER       │    │  /SCOPE          │
│  (Frequency)    │    │  (Stereo Field)  │
└─────────────────┘    └──────────────────┘
         │                       │
         └───────────┬───────────┘
                     │
                     ↓
         ┌───────────────────────┐
         │   VISUAL DISPLAY      │
         │  (Screen Output)      │
         └───────────────────────┘
                     │
                     ↓
            ┌────────────────┐
            │ AUDIO PASSES   │
            │   THROUGH      │
            │  (Unaffected)  │
            └────────────────┘
```

### Key Processing Notes
1. **Non-destructive:** Audio passes through unchanged
2. **Real-time Analysis:** Continuous FFT calculation
3. **Dual Processing:** Spectrum and stereo field analyzed simultaneously
4. **Low Latency:** Minimal processing delay

---

## Frequency Zone Reference

### Critical Mixing Zones (Visual Guide)

```
SPECTRUM DISPLAY ZONES:

20-60 Hz    │████                │ SUB-BASS (Kick fundamental, 808s)
60-250 Hz   │████████            │ BASS (Bass guitar, lower harmonics)
250-500 Hz  │██████              │ LOW-MIDS (Warmth or mud zone)
500-2k Hz   │██████████          │ MIDS (Body of most instruments)
2k-5k Hz    │████████            │ PRESENCE (Clarity, vocal intelligibility)
5k-10k Hz   │██████              │ BRILLIANCE (Sparkle, detail)
10k-20k Hz  │████                │ AIR (Shimmer, space)
```

### Visual Indicators for Common Issues

**Mud (200-500 Hz):**
- Look for excessive yellow/red in low-mid zone
- Should have some content, but not dominating

**Harshness (3-5 kHz):**
- Bright red spikes in upper-mids
- Can indicate resonance or aggressive compression

**Lack of Air (10-15 kHz):**
- All blue/black in high frequencies
- Mix may sound dull or closed-in

**Sub-Bass Issues (Below 40 Hz):**
- Red content below 40 Hz may not translate to small speakers
- Could indicate rumble or DC offset

---

## Interface Interaction Tips

### Efficient Navigation

**Mouse Controls:**
- **Left-click + Drag:** Pan frequency view (if zoomed)
- **Right-click Menu:** Access display options
- **Mouse Wheel:** Zoom frequency range (if enabled)

**Keyboard Shortcuts:**
- Depends on FL Studio global shortcuts
- Check FL Studio Options > General > Keyboard

### Visual Analysis Workflow

**Step 1: Monitor while mixing**
- Keep Spectroman visible on second monitor or corner
- Check periodically, not constantly

**Step 2: Reference comparison**
- Load reference track in another channel
- A/B compare spectrum profiles

**Step 3: Problem identification**
- Spot frequency buildups (red zones)
- Identify gaps (black zones)
- Check stereo correlation (vectorscope)

**Step 4: Make corrections**
- Use Parametric EQ 2 to address issues
- Verify changes in Spectroman

---

## Display Optimization

### For Different Tasks

**Mixing:**
- Medium decay time (smooth but responsive)
- Full frequency range visible
- Peak hold ON

**Mastering:**
- Slow decay time (averaged view)
- Focus on overall balance
- Comparison with reference tracks

**Sound Design:**
- Fast decay time (see transients)
- Zoom to relevant frequency range
- Oscilloscope for waveform analysis

---

## CPU Considerations

### Performance Settings

**FFT Size Impact:**
- **Larger FFT:** More detail, slower response, higher CPU
- **Smaller FFT:** Faster response, less detail, lower CPU

**Recommended Settings:**
- **Mixing:** Medium FFT, medium decay
- **Mastering:** Large FFT, slow decay
- **Live Performance:** Small FFT, fast decay (or avoid)

**CPU-Saving Tips:**
- Use only when actively analyzing
- Close when not needed
- Reduce FFT size if CPU is struggling
- Disable visual smoothing if available

---

## The Bottom Line

Spectroman's interface is designed for **quick visual feedback without deep menu diving**. The dual-view layout lets you monitor both frequency content and stereo imaging simultaneously, making it a fast diagnostic tool for mixing and mastering decisions.

**Key Interface Philosophy:**  
Maximum visual information, minimal controls - let the display do the talking.
