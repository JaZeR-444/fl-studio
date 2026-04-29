# Fruity 7 Band EQ Parameter Reference

## Band Structure Overview

Fruity 7 Band EQ features seven fully parametric frequency bands covering the entire audible spectrum. Each band can function as bell filter, shelf filter, or high/low pass filter.

## Band 1: Low Shelf (20Hz - 200Hz)

### Frequency Range
- **Minimum**: 20Hz
- **Maximum**: 200Hz
- **Default**: 60Hz
- **Type**: Shelf filter
- **Q Control**: Available for shelf slope adjustment

### Common Applications
```
Sub-Bass Enhancement: +1 to +4dB at 30-60Hz
Rumble Control: -2 to -6dB at 20-40Hz
Low-End Warmth: +1 to +3dB at 80-120Hz
Low-Frequency Cut: -3 to -12dB below 40Hz
```

### Technical Characteristics
- **Shelf Slope**: 12dB/octave standard
- **Phase Response**: Minimal phase shift
- **Musical Q**: 0.7 to 1.5 for shelf adjustments
- **Surgical Q**: 2 to 4 for precise control

## Band 2: Low-Mid Bell (40Hz - 500Hz)

### Frequency Range
- **Minimum**: 40Hz
- **Maximum**: 500Hz
- **Default**: 200Hz
- **Type**: Bell filter
- **Q Range**: 0.7 to 10

### Common Applications
```
Bass Guitar Fundamental: +2 to +6dB at 80-120Hz
Kick Drum Body: +1 to +4dB at 60-100Hz
Boominess Control: -2 to -4dB at 150-250Hz
Chest Thump: +1 to +3dB at 80-100Hz
```

### Technical Characteristics
- **Bell Shape**: Symmetrical response curve
- **Narrow Q**: 4-8 for surgical removal
- **Wide Q**: 0.7-2 for musical enhancement
- **Frequency Resolution**: 1Hz precision

## Band 3: Mid Bell 1 (200Hz - 2kHz)

### Frequency Range
- **Minimum**: 200Hz
- **Maximum**: 2000Hz
- **Default**: 800Hz
- **Type**: Bell filter
- **Q Range**: 0.7 to 10

### Common Applications
```
Mud Reduction: -2 to -6dB at 250-400Hz
Vocal Body: +1 to +3dB at 800Hz-1.2kHz
Guitar Honk Control: -3 to -6dB at 600-800Hz
Lower Midrange Clarity: +1 to +2dB at 1kHz
```

### Critical Frequencies
- **200-300Hz**: Mud and boxiness
- **400-600Hz**: Body and warmth
- **800Hz-1.2kHz**: Vocal presence
- **1.5-2kHz**: Definition and intelligibility

## Band 4: Mid Bell 2 (500Hz - 5kHz)

### Frequency Range
- **Minimum**: 500Hz
- **Maximum**: 5000Hz
- **Default**: 2000Hz
- **Type**: Bell filter
- **Q Range**: 0.7 to 10

### Common Applications
```
Vocal Presence: +2 to +4dB at 2-3kHz
Instrument Definition: +1 to +3dB at 3-5kHz
Nasal Reduction: -2 to -4dB at 1kHz
Forward Projection: +1.5 to +3dB at 2.5kHz
```

### Critical Frequencies
- **500-800Hz**: Lower vocal range
- **1kHz**: Vocal intelligibility
- **2-3kHz**: Presence and forwardness
- **4-5kHz**: Attack and definition

## Band 5: High-Mid Bell (2kHz - 10kHz)

### Frequency Range
- **Minimum**: 2000Hz
- **Maximum**: 10000Hz
- **Default**: 6000Hz
- **Type**: Bell filter
- **Q Range**: 0.7 to 10

### Common Applications
```
Vocal Air: +1 to +3dB at 6-8kHz
Guitar Attack: +2 to +4dB at 3-5kHz
Harshness Control: -1 to -3dB at 4-6kHz
Percussion Definition: +1 to +2dB at 8-10kHz
```

### Critical Frequencies
- **2-3kHz**: Clarity and detail
- **4-6kHz**: Sibilance and harshness
- **6-8kHz**: Air and presence
- **8-10kHz**: Brilliance and sparkle

## Band 6: High Shelf (4kHz - 20kHz)

### Frequency Range
- **Minimum**: 4000Hz
- **Maximum**: 20000Hz
- **Default**: 12000Hz
- **Type**: Shelf filter
- **Q Control**: Available for shelf slope

### Common Applications
```
High-Frequency Air: +1 to +3dB at 12-16kHz
Brilliance Enhancement: +0.5 to +2dB at 10-14kHz
Harshness Reduction: -1 to -2dB at 4-8kHz
Detail Addition: +1 to +2dB at 15kHz+
```

### Technical Characteristics
- **Shelf Slope**: 12dB/octave standard
- **Air Frequencies**: 12-20kHz affects perceived quality
- **Digital Harshness**: 14-18kHz can cause digital harshness
- **Analog Warmth**: Subtle boosts add analog character

## Band 7: Air Band (8kHz - 20kHz)

### Frequency Range
- **Minimum**: 8000Hz
- **Maximum**: 20000Hz
- **Default**: 16000Hz
- **Type**: Bell filter (optimized for air)
- **Q Range**: 0.7 to 4 (wider range)

### Common Applications
```
Air Enhancement: +1 to +3dB at 16kHz+
Subtle Sparkle: +0.5 to +1.5dB at 12-14kHz
High-Frequency Extension: +1 to +2dB at 18kHz+
Vintage Tape Air: +2 to +4dB at 12kHz
```

### Psychoacoustic Effects
- **Perceived Quality**: 16-20kHz affects perceived recording quality
- **Air and Space**: Creates sense of space and air
- **Digital Enhancement**: Compensates for digital recording character
- **Subtle Impact**: Small changes have big perceived impact

## Global Parameters

### Gain Control
- **Range**: ±24dB per band
- **Resolution**: 0.1dB precision
- **Unity**: 0dB position
- **Detent**: Clicked position at 0dB

### Q Factor Control
- **Range**: 0.7 to 10.0
- **Resolution**: 0.1 precision
- **Default**: 2.0 (musical medium)
- **Types**: Different Q behaviors for different band types

### Filter Type Selection
**Band Types**:
- **Bell**: Symmetrical boost/cut
- **Low Shelf**: Below frequency point
- **High Shelf**: Above frequency point
- **Low Pass**: High frequency roll-off
- **High Pass**: Low frequency roll-off
- **Band Pass**: Only frequencies within range
- **Notch**: Narrow frequency removal

## Technical Specifications

### Frequency Response
- **Frequency Range**: 20Hz to 20kHz
- **Frequency Resolution**: 1Hz precision
- **Phase Response**: Linear phase option available
- **Group Delay**: Minimal for musical use

### Quality Metrics
- **THD+N**: <0.001% at unity gain
- **Dynamic Range**: 120dB
- **Noise Floor**: -120dBu
- **Frequency Accuracy**: ±0.5Hz

### Processing Characteristics
- **Latency**: Zero samples (real-time processing)
- **CPU Usage**: 0.3% per instance at 44.1kHz
- **Memory**: 1MB per instance
- **Sample Rate**: 44.1kHz to 192kHz support

## Advanced Features

### Filter Mode Options
**Bell Filter Modes**:
- **Symmetrical**: Standard bell shape
- **Asymmetric**: Different boost/cut shapes
- **Proportional Q**: Q changes with gain amount
- **Constant Q**: Q remains constant with gain

**Shelf Filter Modes**:
- **Standard Shelf**: 12dB/octave slope
- **Steep Shelf**: 18dB/octave slope
- **Gentle Shelf**: 6dB/octave slope
- **Variable Q**: Adjustable shelf steepness

### Analysis Tools
**Frequency Analysis**:
- **Real-time Spectrum**: Live frequency display
- **Pre/Post EQ**: Shows EQ curve and response
- **Peak Hold**: Identifies problem frequencies
- **Averaging**: Smooths display for clarity

**Metering**:
- **Input/Output Meters**: Level monitoring
- **Gain Reduction Meter**: Shows overall gain change
- **Phase Meter**: Phase coherence monitoring
- **Correlation Meter**: Stereo image analysis

### Preset Management
**Preset Organization**:
- **Factory Presets**: 50+ professional starting points
- **User Presets**: Unlimited custom presets
- **A/B Comparison**: Quick preset switching
- **Morphing**: Smooth preset transitions

**Preset Categories**:
- **Mix Bus**: Overall mix enhancement
- **Instrument**: Specific instrument EQ
- **Vocal**: Vocal enhancement and correction
- **Mastering**: Final polish and correction
- **Problem Solving**: Common audio issues
- **Creative**: Artistic sound shaping

## Professional Usage Guidelines

### Gain Staging
- **Input Level**: -18dB to -12dB optimal
- **Output Compensation**: Auto gain correction available
- **Headroom**: Maintain 6dB headroom
- **Digital Clipping**: Avoid at all costs

### Surgical Precision
- **Narrow Q**: Use Q=4+ for specific problems
- **Small Adjustments**: ±3dB maximum for surgical cuts
- **Frequency Accuracy**: Use spectrum analyzer for precision
- **Context Testing**: Always check in full mix

### Musical Enhancement
- **Wide Q**: Use Q=0.7-2 for musical boosts
- **Gentle Gains**: ±1.5dB maximum for musical enhancement
- **Harmonic Relationships**: Consider musical intervals
- **Genre Context**: Adjust approach based on musical style

This parameter reference provides comprehensive understanding of Fruity 7 Band EQ's extensive control set for professional equalization tasks.