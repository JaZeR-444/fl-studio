# Plugin Specifications and Technical Details

## Fruity WaveShaper Technical Specifications

[SRC: IL-MAN] Official technical specifications for the Fruity WaveShaper plugin.

## General Specifications

### Plugin Information
- **Name:** Fruity WaveShaper
- **Type:** Waveshaper / Distortion
- **Category:** Effect / Distortion
- **Format:** FL Studio native plugin
- **Availability:** Included with FL Studio (all editions)

### System Requirements
- **Host:** FL Studio 12.5 or later
- **Platform:** Windows, macOS
- **Architecture:** 32-bit and 64-bit
- **CPU:** Minimal (increases with oversampling)
- **Memory:** Negligible RAM usage

## Audio Specifications

### Signal Processing
- **Internal Processing:** 32-bit floating point
- **Input/Output:** 32-bit floating point
- **Sample Rate Support:** All standard rates (44.1kHz - 192kHz)
- **Latency:** 
  - Standard: 0 samples (zero latency)
  - With oversampling: Minimal PDC (Plugin Delay Compensation)

### Transfer Function Engine
- **Type:** Spline-based waveshaping
- **Interpolation:** Catmull-Rom splines
- **Point Limit:** Unlimited
- **Range:** 
  - Input: -1.0 to +1.0 (normalized)
  - Output: -1.0 to +1.0 (normalized)

## Parameter Specifications

### Pre (Input Gain)
- **Range:** -24dB to +24dB
- **Default:** 0dB
- **Step Size:** 0.1dB
- **Automation:** Full support
- **Function:** Input amplification before curve processing

### Mix (Dry/Wet)
- **Range:** 0% to 100%
- **Default:** 100%
- **Step Size:** 1%
- **Automation:** Full support
- **Function:** Blend processed and original signals

### Post (Output Gain)
- **Range:** -24dB to +24dB
- **Default:** 0dB
- **Step Size:** 0.1dB
- **Automation:** Full support
- **Function:** Output level compensation

### Center (DC Offset Removal)
- **Type:** Toggle (On/Off)
- **Default:** On
- **Automation:** Not recommended
- **Function:** Removes DC bias from signal

### Mode (Unipolar/Bipolar)
- **Options:** Unipolar, Bipolar
- **Default:** Unipolar
- **Automation:** Full support
- **Function:** Symmetric vs asymmetric curve application

### Oversample
- **Options:** Off, 2x, 4x, 8x, 16x
- **Default:** Off
- **Automation:** Not available
- **Function:** Internal processing rate multiplier

### HQ (High Quality)
- **Type:** Toggle (On/Off)
- **Default:** Off
- **Automation:** Not available
- **Function:** Enhanced processing for low-level signals

[SRC: IL-MAN] All parameters except Center, Oversample, and HQ support full automation.

## Oversampling Specifications

### Processing Rates by Setting

| Setting | Internal Rate (44.1kHz project) | Nyquist Frequency | Latency Impact |
|---------|----------------------------------|-------------------|----------------|
| Off | 44.1kHz | 22.05kHz | 0 samples |
| 2x | 88.2kHz | 44.1kHz | < 1 sample |
| 4x | 176.4kHz | 88.2kHz | 1-2 samples |
| 8x | 352.8kHz | 176.4kHz | 2-4 samples |
| 16x | 705.6kHz | 352.8kHz | 4-8 samples |

### Aliasing Prevention
- **Off:** Standard quality, potential aliasing with heavy distortion
- **2x:** Basic anti-aliasing
- **4x:** Recommended for most applications
- **8x:** High-quality for aggressive settings
- **16x:** Maximum quality for extreme distortion

## Harmonic Generation Characteristics

### Unipolar Mode (Symmetric)
- **Harmonic Type:** Predominantly even-order
- **2nd Harmonic:** Strong
- **4th Harmonic:** Moderate
- **6th+ Harmonics:** Weak
- **Character:** Warm, musical, analog-like

### Bipolar Mode (Asymmetric)
- **Harmonic Type:** Mix of odd and even
- **3rd Harmonic:** Strong
- **5th Harmonic:** Moderate
- **Even Harmonics:** Present but weaker
- **Character:** Aggressive, complex, punchy

## CPU Usage Estimates

### Baseline Usage (No Oversampling)
- **Single instance:** < 0.1% CPU (modern processor)
- **Multiple instances:** Scales linearly
- **Complex curves:** Minimal impact

### With Oversampling

| Setting | Approximate CPU Multiplier |
|---------|---------------------------|
| Off | 1.0x (baseline) |
| 2x | 1.3x |
| 4x | 1.6x |
| 8x | 2.2x |
| 16x | 3.5x |

**Note:** Actual CPU usage varies by system and project settings.

## Automation and Control

### Supported Automation Targets
1. Pre (Input Gain)
2. Mix (Dry/Wet)
3. Post (Output Gain)
4. Mode (Unipolar/Bipolar)
5. Transfer curve points (advanced)

### Automation Behavior
- **Smooth interpolation:** No zipper noise
- **Sample-accurate updates:** Immediate response
- **Parameter smoothing:** Built-in smoothing

### MIDI Mapping
- **All parameters:** Mappable to MIDI controllers
- **Curve editing:** Not directly MIDI-controllable
- **Recommended:** Map Pre, Mix, and Mode for live control

## Compatibility

### FL Studio Integration
- **Patcher:** Supported as module
- **Channel rack:** Full functionality
- **Mixer:** Insert or send processing
- **PDC:** Automatic compensation when needed

### Sidechain Compatibility
- **Fruity Limiter:** Full compatibility
- **Fruity Compressor:** Standard sidechain
- **3rd-party:** Standard VST sidechain

### Multi-Instance Behavior
- **Independent processing:** Each instance is separate
- **No crosstalk:** Instances do not interact
- **CPU scaling:** Linear with instance count

## Known Limitations

### Technical Limits
- **No external curve import:** Curves must be drawn manually
- **No preset system:** Settings saved per project
- **No A/B comparison:** Single curve state
- **Oversampling latency:** Minimal but present at high settings

### Workflow Considerations
- **Curve editing:** No undo for individual point deletions
- **Visual feedback:** No real-time spectrum display
- **Reset:** Double-click graph to reset to linear

## Version History

### FL Studio 20.8+
- Modern vector-based UI
- Improved spline interpolation
- HQ mode added
- Enhanced oversampling algorithms

### Earlier Versions
- Basic functionality consistent
- UI improvements over time
- Core waveshaping unchanged

## Best Practices Summary

### Recommended Settings by Use Case

| Application | Mode | Oversample | Pre Range | Mix Range |
|-------------|------|------------|-----------|-----------|
| 808s | Unipolar | 4x | +8 to +12dB | 50-70% |
| Drums | Bipolar | 4x-8x | +12 to +16dB | 60-75% |
| Vocals | Unipolar | 4x | +4 to +8dB | 25-40% |
| Mix Bus | Unipolar | 4x | +2 to +4dB | 15-25% |
| Creative | Bipolar | 8x-16x | +10 to +20dB | 30-80% |

---

**Version:** 1.0  
**Last Updated:** 2026-02-03  
**Source:** [SRC: IL-MAN] Image-Line Official Documentation
