# Best Settings Starting Points

## Spectrum Mode Starting Settings

### General Mix Analysis (Most Common)
```
FFT Size: 4096
Frequency Scale: Logarithmic  
Amplitude Range: -60dB to +12dB
Display Type: Rainbow
Smoothing: Medium
Peak Hold: On (3 seconds)
Channels: L+R summed
```

**When to Use:** 80% of mixing work
**Why Works:** Good balance of frequency resolution and response time [SRC: IL-MAN]

### Precision Frequency Work
```
FFT Size: 16384
Frequency Scale: Logarithmic
Amplitude Range: -96dB to +12dB  
Display Type: Grayscale
Smoothing: High
Peak Hold: On (5 seconds)
Frequency Zoom: 20Hz-20kHz
```

**When to Use:** Surgical EQ, resonance hunting
**Why Works:** Maximum frequency resolution, stable display

### Real-Time Performance Monitoring
```
FFT Size: 1024
Frequency Scale: Linear
Amplitude Range: -48dB to +12dB
Display Type: Rainbow  
Smoothing: Low
Peak Hold: Off
```

**When to Use:** Live tracking, performance analysis
**Why Works:** Fastest response, shows immediate changes

## Oscilloscope Mode Starting Settings

### Drum Transient Analysis
```
Time Scale: 20ms
Amplitude Scale: Auto
Trigger Level: Auto
Display Type: Line
Trigger Mode: Auto
Persistence: Low
```

**When to Use:** Kick, snare, percussion shaping
**Why Works:** Shows transient detail clearly [SRC: IL-MAN]

### Bass/Sub Analysis  
```
Time Scale: 100ms
Amplitude Scale: Auto
Trigger Level: -20dB
Display Type: Solid
Trigger Mode: Manual
Persistence: Medium
```

**When to Use:** 808s, basslines, low-end content
**Why Works:** Shows longer waveforms and sustain

### Mix Bus Transient Check
```
Time Scale: 50ms
Amplitude Scale: -12dB to +12dB
Trigger Level: Auto
Display Type: Line
Trigger Mode: Auto
Persistence: Low
```

**When to Use:** Overall mix transient character
**Why Works:** Balance between detail and overview

## Vectorscope Mode Starting Settings

### Stereo Width Analysis
```
Zoom: 1.0x
Persistence: Medium
Reference Lines: On (+/- 45°)
Scope Speed: Medium
Channels: L/R
Display Style: Standard
```

**When to Use:** Most stereo work
**Why Works:** Clear representation of stereo image

### Phase Troubleshooting
```
Zoom: 1.5x
Persistence: High
Reference Lines: On
Scope Speed: Slow
Channels: L/R
Display Style: High Contrast
```

**When to Use:** Finding phase issues
**Why Works:** Enhanced detail shows subtle phase problems

### Mono Compatibility Check
```
Zoom: 1.0x
Persistence: Low
Reference Lines: On
Scope Speed: Fast
Channels: L+R (mono)
Display Style: Standard
```

**When to Use:** Checking mono compatibility
**Why Works:** Shows what happens when summed to mono

## Peak Meter Mode Starting Settings

### Digital Mixing Standard
```
Scale: dBFS
Ballistics: Fast
Hold Time: 2 seconds
Reference Level: 0dBFS
Clip Warning: On
Channels: L/R separate
```

**When to Use:** Standard digital mixing
**Why Works:** Industry standard digital metering

### Mastering Level Check
```
Scale: dBFS
Ballistics: Medium
Hold Time: 5 seconds  
Reference Level: -1dBFS (True Peak)
Clip Warning: On
Channels: L/R + summed
```

**When to Use:** Mastering, export preparation
**Why Works:** Target levels for streaming services

### Analog Style Metering
```
Scale: dBVU
Ballistics: Slow (VU style)
Hold Time: Continuous
Reference Level: 0dBVU
Clip Warning: Off
Channels: L/R separate
```

**When to Use:** Vintage-style mixing, gain staging
**Why Works:** Familiar analog meter behavior

## Task-Based Setting Combinations

### Hip-Hop Mix Setup
**Instance 1 - Master:**
- **Spectrum:** FFT 4096, Log scale, -60dB range
- **Purpose:** Overall frequency balance

**Instance 2 - Drum Bus:**
- **Oscilloscope:** 20ms time scale, Line display
- **Purpose:** Drum transient control

### Pop Production Setup
**Instance 1 - Master:**
- **Spectrum:** FFT 8192, Log scale, -48dB range
- **Vectorscope:** Medium persistence, Reference on
- **Purpose:** Commercial polish check

### Electronic Music Setup
**Instance 1 - Master:**
- **Spectrum:** FFT 4096, Linear scale, Rainbow display
- **Purpose:** Frequency content analysis

**Instance 2 - Synth Track:**
- **Oscilloscope:** 50ms time scale, Solid display
- **Purpose:** Synth waveform analysis

### Acoustic/Jazz Setup
**Instance 1 - Master:**
- **Spectrum:** FFT 16384, Log scale, Grayscale display
- **Vectorscope:** Low persistence, Reference on
- **Purpose:** Natural acoustic balance

## Interface and Display Settings

### Always-On-Top Configuration
```
Transparency: 80% opacity
Position: Upper-right corner
Size: Medium (not maximized)
Border: Thin (visible but minimal)
```

### Multi-Instance Layout
```
Instance 1: Master channel (left side)
Instance 2: Current track (right side)  
Instance 3: Reference (bottom right)
All with transparency: 75%
```

### Screenshot Settings
```
Format: PNG
Quality: High
Filename: Auto-generate with timestamp
Background: Transparent (if possible)
```

## CPU Performance Settings

### Lightweight Setup (CPU < 5%)
```
One instance only
FFT Size: 2048
Display Update: Medium
Persistence: Low
Smoothing: Low
```

### Standard Setup (CPU 5-10%)
```
Two instances
FFT Size: 4096
Display Update: Medium  
Persistence: Medium
Smoothing: Medium
```

### Professional Setup (CPU 10-15%)
```
Three instances
FFT Size: 8192
Display Update: Fast
Persistence: High
Smoothing: High
```

[UNVERIFIED]: CPU usage estimates may vary by system and FL Studio version. Monitor actual performance.

## Troubleshooting Settings

### If Display is Jumpy
**Solution:** Increase FFT size, add smoothing, reduce persistence

### If Display is Slow/Laggy  
**Solution:** Decrease FFT size, reduce smoothing, check FL Studio buffer

### If Can't See Information
**Solution:** Adjust amplitude range, change frequency scale, zoom display

### If CPU is High
**Solution:** Reduce instances, lower FFT size, turn off unused displays

## Genre-Specific Optimizations

### Trap/Hip-Hop
```
Spectrum: Focus 20-200Hz region, 4096 FFT
Vectorscope: Check mono compatibility of subs
Oscilloscope: 50ms time scale for 808 analysis
```

### EDM/Electronic
```  
Spectrum: Full range, Linear scale, 4096 FFT
Oscilloscope: 20ms for synth transients
Vectorscope: High persistence for stereo effects
```

### Pop/R&B
```
Spectrum: 2-5kHz focus for vocals, 8192 FFT
Vectorscope: Modern width patterns
Peak Meter: -6dBFS target for headroom
```

### Acoustic/Jazz
```
Spectrum: High resolution (16384 FFT), Natural balance
Vectorscope: Realistic stereo patterns
Oscilloscope: Natural transient shapes
```

## Professional Tips

### Save Setting Presets
1. **Set up** your favorite configuration
2. **Right-click** interface → Save Preset
3. **Name** by task (e.g., "Hip-Hop Master", "Drum Analysis")
4. **Load quickly** for different tasks

### Reference Templates
Create presets for:
- **Master channel analysis**
- **Drum bus work** 
- **Vocal processing**
- **Stereo enhancement**
- **Final mix check**

Remember: These are starting points. Adjust based on your specific needs, room acoustics, monitoring setup, and personal preferences. The key is understanding what each setting does and why you're changing it.