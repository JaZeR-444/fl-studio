# Fruity Spectroman - Parameter Dictionary

## Overview

Fruity Spectroman is primarily a **visual analysis tool** with minimal user-adjustable parameters compared to effects plugins. Most "settings" are display preferences rather than signal-processing parameters. This dictionary covers the available controls and display options.

---

## Display Parameters

### **FFT Size / Resolution**
**Category:** Analysis Settings  
**Range:** Typically 512 - 16384 samples  
**Default:** 2048 (varies by version)

**Description:**
Controls the Fast Fourier Transform window size, which determines the frequency resolution and time resolution trade-off.

**Effect:**
- **Larger values (4096-16384):** More frequency detail (better bass resolution), slower time response, higher CPU usage
- **Smaller values (512-2048):** Faster time response (better transient tracking), less frequency detail, lower CPU usage

**Use Cases:**
- **Low-end analysis:** Large FFT (4096+) for detailed bass frequency separation
- **Transient analysis:** Small FFT (512-1024) for fast attack visualization
- **General mixing:** Medium FFT (2048-4096) balances detail and response

---

### **Decay / Release Time**
**Category:** Visual Response  
**Range:** Fast → Slow (typically 0-100% or similar scale)  
**Default:** Medium

**Description:**
Controls how quickly the spectrum display fades after sound stops.

**Effect:**
- **Fast decay:** Immediate response, shows transients clearly, can be "jittery"
- **Slow decay:** Averaged view, smoother display, easier to read sustained content
- **Medium decay:** Balanced between responsiveness and readability

**Use Cases:**
- **Mixing:** Medium to slow (smooth, averaged view)
- **Sound design:** Fast (see attack and transients)
- **Mastering:** Slow (overall balance, not moment-to-moment changes)

---

### **Peak Hold**
**Category:** Display Mode  
**Type:** On/Off Toggle  
**Default:** OFF (varies by version)

**Description:**
When enabled, holds the peak frequency levels for a specified time, making it easier to see momentary peaks.

**Effect:**
- **ON:** Shows both current spectrum and held peaks (usually as thin line or different color)
- **OFF:** Shows only current real-time spectrum

**Use Cases:**
- **Finding resonances:** Peak hold reveals sharp resonant frequencies
- **Transient analysis:** See momentary peaks in kick/snare hits
- **Problem-solving:** Identify brief harsh peaks

---

### **Averaging / Smoothing**
**Category:** Visual Processing  
**Range:** OFF or 0-100%  
**Default:** Light averaging

**Description:**
Applies temporal averaging to smooth out rapid fluctuations in the spectrum display.

**Effect:**
- **No averaging:** Real-time, can appear noisy or jittery
- **Light averaging:** Smooths minor fluctuations while maintaining responsiveness
- **Heavy averaging:** Very smooth, slower to reflect changes

**Use Cases:**
- **Reference comparison:** Averaging ON for smooth comparison
- **Real-time monitoring:** Averaging OFF for immediate response
- **General mixing:** Light averaging for readability

---

### **Frequency Range / Zoom**
**Category:** Display View  
**Range:** Adjustable window within 20 Hz - 20 kHz  
**Default:** Full range (20 Hz - 20 kHz)

**Description:**
Allows zooming into specific frequency ranges for detailed analysis.

**Effect:**
- **Full range:** See entire audible spectrum
- **Zoomed:** Focus on specific range (e.g., 20-500 Hz for bass analysis)

**Common Zoom Ranges:**
- **Bass:** 20-500 Hz
- **Mids:** 200 Hz - 5 kHz
- **Highs:** 5 kHz - 20 kHz

---

### **Amplitude / dB Range**
**Category:** Vertical Scale  
**Range:** Typically 40 dB - 120 dB total range  
**Default:** 60-90 dB range

**Description:**
Controls the vertical scale's dB range shown on screen.

**Effect:**
- **Larger range (80-120 dB):** Shows wider dynamic range, quieter sounds visible
- **Smaller range (40-60 dB):** Focuses on louder content, less clutter

**Use Cases:**
- **Mixing:** Medium range (60-80 dB) shows relevant content
- **Mastering:** Larger range to see subtle details
- **Problem-solving:** Adjust to make issue visible

---

## Vectorscope Parameters

### **Display Mode**
**Category:** Bottom Display Selection  
**Options:** Vectorscope / Oscilloscope  
**Default:** Vectorscope

**Description:**
Switches the bottom display between stereo field visualization (vectorscope) and waveform visualization (oscilloscope).

**Vectorscope Mode:**
- Shows L/R correlation and stereo width
- Vertical = mono, horizontal = wide stereo

**Oscilloscope Mode:**
- Shows waveform over time
- Both channels superimposed

---

### **Stereo Correlation Display**
**Category:** Vectorscope Feature  
**Type:** Visual Indicator

**Description:**
The vectorscope pattern itself indicates stereo correlation:

**Patterns:**
- **Vertical line:** Perfectly mono
- **Circular/oval:** Balanced stereo
- **Horizontal line:** Extreme stereo width (potential phase issues)
- **Diagonal tilt:** Phase correlation problems

---

## Color Scheme Parameters

### **Color Map / Palette**
**Category:** Visual Appearance  
**Options:** Various color schemes (varies by version)  
**Default:** Standard spectrum colors

**Description:**
Changes the color palette used to represent amplitude levels in the spectrum.

**Common Schemes:**
- **Standard:** Red (loud) → Yellow → Green → Blue → Black (quiet)
- **Thermal:** Hot colors for high energy
- **Grayscale:** Monochrome display

**Note:** Functional impact is minimal; choose for visibility preference.

---

### **Brightness / Contrast**
**Category:** Visual Adjustment  
**Range:** Adjustable (varies by version)  
**Default:** Medium

**Description:**
Adjusts the visual brightness and contrast of the spectrum display.

**Effect:**
- **Higher contrast:** Easier to spot peaks and differences
- **Lower contrast:** Smoother, less "sharp" appearance
- **Brightness:** Overall visibility in different lighting conditions

---

## Analysis Parameters (Non-Adjustable)

### **Frequency Resolution**
**Determined by:** FFT Size  
**Formula:** Sample Rate / FFT Size

**Example (44.1 kHz sample rate):**
- FFT 512: Resolution ≈ 86 Hz
- FFT 2048: Resolution ≈ 21.5 Hz
- FFT 8192: Resolution ≈ 5.4 Hz

**Implication:**
Larger FFT provides finer frequency resolution, especially important for bass analysis.

---

### **Time Resolution**
**Determined by:** FFT Size  
**Formula:** FFT Size / Sample Rate

**Example (44.1 kHz sample rate):**
- FFT 512: Time window ≈ 11.6 ms
- FFT 2048: Time window ≈ 46.4 ms
- FFT 8192: Time window ≈ 185.8 ms

**Implication:**
Smaller FFT responds faster to transients; larger FFT averages over longer time.

---

## CPU Impact Parameters

### **Update / Refresh Rate**
**Category:** Performance  
**Range:** Adjustable (if available)  
**Default:** Real-time (varies)

**Description:**
How frequently the display refreshes.

**Effect:**
- **Higher rate:** Smoother animation, higher CPU
- **Lower rate:** Less smooth but lower CPU

---

## Parameter Interactions

### **FFT Size ↔ Decay Time**
- Large FFT + Slow decay = Very smooth, averaged spectrum (mastering)
- Small FFT + Fast decay = Highly responsive, transient-focused (sound design)
- Medium FFT + Medium decay = Balanced (general mixing)

### **Peak Hold ↔ Averaging**
- Peak hold ON + Averaging OFF = See both peaks and real-time (best for finding resonances)
- Peak hold OFF + Averaging ON = Smooth averaged view (reference comparison)

---

## Parameter Presets (Conceptual)

While Spectroman may not have named presets, here are recommended parameter combinations:

### **General Mixing Preset**
- FFT Size: 2048
- Decay: Medium
- Peak Hold: ON
- Averaging: Light
- Range: Full (20 Hz - 20 kHz)

### **Low-End Analysis Preset**
- FFT Size: 8192 (maximum detail)
- Decay: Slow
- Peak Hold: ON
- Averaging: ON
- Range: Zoomed (20-500 Hz)

### **Reference Comparison Preset**
- FFT Size: 2048-4096
- Decay: Slow
- Peak Hold: OFF
- Averaging: ON (heavy)
- Range: Full

### **Transient Analysis Preset**
- FFT Size: 512-1024
- Decay: Fast
- Peak Hold: ON
- Averaging: OFF
- Range: Full

---

## The Bottom Line

Fruity Spectroman's "parameters" are primarily display and analysis settings rather than signal processing controls. The most important are **FFT Size** (detail vs. response trade-off) and **Decay Time** (smoothness vs. responsiveness). Adjust these based on your task: large FFT and slow decay for mastering and reference comparison, small FFT and fast decay for sound design and transient analysis, medium settings for general mixing. The plugin doesn't alter your audio - all parameters only affect what you see, not what you hear.

**Key Adjustments:**
- **FFT Size:** Bigger = more detail (esp. bass), slower response
- **Decay Time:** Slower = smoother view, easier to read
- **Peak Hold:** ON for finding resonances and peaks
