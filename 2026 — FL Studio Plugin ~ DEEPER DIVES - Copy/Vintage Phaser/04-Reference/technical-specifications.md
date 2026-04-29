# Vintage Phaser Technical Specifications

## Audio Engine Architecture

### Core Processing Algorithm
- **Phaser Type**: Analog all-pass filter network emulation
- **Processing Resolution**: 64-bit internal processing
- **Sample Rate Support**: 44.1kHz - 192kHz
- **Oversampling**: 2x, 4x, 8x options for quality
- **Latency**: 1-8 samples typical, host-compensated

### Signal Flow Architecture
```
Input → All-Pass Stages → LFO Modulation → Feedback → Output Summation → Mix
```

## All-Pass Filter System

### Filter Stage Configuration
**Stage Count Options**:
- **2-Stage**: Simple, gentle phasing
- **4-Stage**: Classic, balanced character
- **6-Stage**: Rich, complex movement
- **8-Stage**: Intense, swirling effects
- **12-Stage**: Maximum complexity and depth

**Stage Characteristics**:
- **Frequency Response**: All frequencies pass with phase shift
- **Phase Response**: 180° phase shift at notch frequency
- **Notch Generation**: Frequency cancellation points
- **Harmonic Content**: Complex overtone generation

### Filter Topology
**All-Pass Network**:
```
H(z) = (z^N + a) / (z^N + a × z^M)
```
Where N = number of stages, a = feedback coefficient, M = delay

**Component Modeling**:
- **FET Transistors**: Junction field-effect transistor characteristics
- **Photo-Cells**: Light-dependent resistor simulation
- **Operational Amplifiers**: Classic op-amp response
- **Capacitor Networks**: Reactive component modeling

## Modulation System

### LFO (Low Frequency Oscillator)
**Waveform Options**:
- Sine
- Triangle
- Square
- Sawtooth (up/down)
- Random
- Sample & Hold
- Custom user-drawn

**LFO Parameters**:
- **Rate Range**: 0.1Hz - 20Hz
- **Depth Range**: 0 - 100%
- **Phase Control**: 0 - 360°
- **Tempo Sync**: 1/64 to 1/1 note divisions
- **Retrigger**: Phase reset on note-on

### Modulation Targets
**Primary Modulation**:
- **Stage Frequency**: Modulation of notch frequencies
- **Phase Shift**: Dynamic phase variation
- **Stereo Image**: Left/right difference control
- **Feedback Amount**: Resonance intensity control

## Feedback Network

### Feedback Configuration
**Feedback Path**:
- **Positive Feedback**: Increases resonance and peaks
- **Negative Feedback**: More controlled, stable response
- **Zero Feedback**: Pure all-pass filtering
- **Variable Feedback**: Time-dependent feedback amount

**Feedback Characteristics**:
- **Feedback Amount**: 0 - 95% (maximum before oscillation)
- **Feedback Delay**: Optional feedback delay timing
- **Frequency-Dependent**: Variable feedback by frequency
- **Phase-Sensitive**: Phase relationship considerations

## Stereo Processing

### Stereo Image Enhancement
**Stereo Configurations**:
- **Dual Mono**: Two independent mono signals
- **True Stereo**: Different left/right processing
- **Mid/Side**: Frequency-specific stereo control
- **Rotating**: Circular movement patterns

**Stereo Width Control**:
- **Width Range**: 0% (mono) to 200% (enhanced stereo)
- **Balance Control**: Left/right channel adjustment
- **Phase Coherence**: Maintain phase relationships
- **Mono Compatibility**: Check summed mono signal

## MIDI Implementation

### MIDI Controller Assignments
- **CC#1**: Modulation Wheel → LFO Rate (default)
- **CC#2**: Breath Control → Phaser Depth
- **CC#4**: Foot Controller → Feedback Amount
- **CC#5**: Portamento Time → Rate transition time
- **CC#7**: Volume → Main Output Level
- **CC#10**: Pan → Stereo Balance
- **CC#11**: Expression → Phaser Depth (alternate)
- **CC#74**: Filter Cutoff → Stage Frequency (if available)
- **CC#75**: Filter Resonance → Feedback Amount (if available)

### MIDI Synchronization
**Tempo Sync Options**:
- **Host Sync**: Follow DAW tempo
- **External MIDI**: Sync to external MIDI clock
- **Tap Tempo**: Real-time tempo detection
- **Manual BPM**: User-defined tempo

**Clock Division**:
- **Whole Notes**: 1/1, 1/2 (slow modulation)
- **Quarter Notes**: 1/4, 1/8 (moderate modulation)
- **Eighth Notes**: 1/8, 1/16 (fast modulation)
- **Sixteenth Notes**: 1/16, 1/32 (very fast modulation)

## Performance Specifications

### Audio Quality Metrics
**Signal-to-Noise Ratio**:
- **Analog Mode**: >85dB (with component noise)
- **Digital Mode**: >100dB (clean signal)
- **Vintage Mode**: >90dB (balanced character)
- **High Quality**: >95dB (premium processing)

### Dynamic Range
- **Effective Range**: 16-bit equivalent (96dB typical)
- **Headroom**: 18-20dB before clipping
- **Noise Floor**: -95dB to -100dB
- **THD+N**: <0.02% (with moderate settings)

### CPU Performance
**Resource Usage**:
- **2-Stage**: 0.5% - 2% of one core
- **4-Stage**: 1% - 4% of one core
- **6-Stage**: 2% - 6% of one core
- **8-Stage+**: 3% - 10% of one core

**Memory Requirements**:
- **Base RAM**: 50-200MB per instance
- **Stage Scaling**: +20MB per additional 2 stages
- **Preset Storage**: 2-5MB per 100 presets
- **Cache Memory**: 20-80MB for performance

## Platform Compatibility

### Windows Support
**System Requirements**:
- **Operating System**: Windows 7 SP1 - Windows 11
- **Processor**: Intel i3 or AMD Ryzen 3 minimum
- **RAM**: 4GB minimum, 8GB recommended
- **Storage**: 300MB available space
- **Graphics**: Display resolution 1024x768 minimum

**Plugin Formats**:
- **VST2**: Universal compatibility
- **VST3**: Enhanced performance and features
- **AAX**: Pro Tools compatibility (if available)

### macOS Support
**System Requirements**:
- **Operating System**: macOS 10.9 - macOS 14+
- **Processor**: Intel Core i5 or Apple Silicon M1/M2
- **RAM**: 4GB minimum, 8GB recommended
- **Storage**: 300MB available space
- **Graphics**: Retina display support

**Plugin Formats**:
- **VST2**: Universal format
- **VST3**: Modern standard
- **AU**: macOS native format
- **AAX**: Pro Tools support

### Linux Support
**Compatibility**:
- **Wine**: Via Wine compatibility layer
- **Performance**: Varies with Wine version
- **Stability**: Generally stable with recent versions
- **Recommendation**: Native Windows or macOS preferred

## Advanced Features

### Automation Capabilities
**Automatable Parameters**:
- **LFO Rate**: 0.1Hz - 20Hz
- **LFO Depth**: 0 - 100%
- **Feedback Amount**: 0 - 95%
- **Stage Count**: 2, 4, 6, 8, or 12
- **Mix Level**: 0 - 100%

**Automation Quality**:
- **Smooth Transitions**: Interpolated parameter changes
- **Sample-Accurate**: Precise timing automation
- **Curve Types**: Linear, logarithmic, exponential options
- **Host Integration**: Full DAW automation support

### Preset Management
**Preset Features**:
- **Factory Presets**: 60-120 classic phaser emulations
- **User Presets**: Unlimited storage
- **Preset Categories**: Organized by instrument and era
- **Import/Export**: Preset sharing capabilities

**Preset Parameters**:
```json
{
  "presetStructure": {
    "name": "Preset Name",
    "category": "Instrument/Era",
    "stages": 4,
    "lfoRate": 4.2,
    "lfoDepth": 70,
    "feedback": 55,
    "mixLevel": 50,
    "stereoWidth": 85,
    "analogModel": "vintage"
  }
}
```

## Comparison with Original Hardware

### Emulated Units
**MXR Phase 90**:
- **Stages**: 4-stage all-pass network
- **Rate Range**: 0.5-8Hz
- **Feedback**: Limited positive feedback
- **Character**: Classic orange pedal sound

**Electro-Harmonix Small Stone**:
- **Stages**: Switchable 4/6 stage
- **Rate Range**: 0.1-10Hz
- **Feedback**: Variable feedback control
- **Character**: Swirling, dramatic phasing

### Software Advantages
**Digital Benefits**:
- **Perfect Recall**: 100% parameter recall
- **Automation**: Complete parameter control
- **Multiple Instances**: Unlimited phaser units
- **Low Noise**: No analog noise floor

**Hybrid Approach**:
- **Analog Modeling**: Preserves vintage character
- **Digital Precision**: Maintains audio quality
- **Extended Features**: Modern capabilities
- **Workflow Integration**: DAW compatibility

## Technical Limitations

### Known Constraints
**Processing Limits**:
- **Maximum Stage Count**: Typically 12 stages (varies by implementation)
- **Rate Limitation**: Limited to realistic LFO speeds
- **Frequency Response**: Analog modeling restrictions
- **CPU Scaling**: Linear increase with each instance

**Design Trade-offs**:
- **Authenticity vs Quality**: Vintage emulation vs clean processing
- **Features vs Performance**: More stages = higher CPU
- **Analog vs Digital**: Warmth vs precision
- **Complexity vs Usability**: More parameters vs ease of use

### System Requirements Impact
**Minimum Requirements**:
- **CPU**: Modern multi-core processor
- **Memory**: 4GB RAM minimum
- **Storage**: Fast SSD for better performance
- **Operating System**: 64-bit OS required

**Recommended Setup**:
- **CPU**: Intel i7/i9 or AMD Ryzen 7/9
- **Memory**: 16GB+ high-speed memory
- **Storage**: NVMe SSD with adequate space
- **Audio Interface**: Professional low-latency interface