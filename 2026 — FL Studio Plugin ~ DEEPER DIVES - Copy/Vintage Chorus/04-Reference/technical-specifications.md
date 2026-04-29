# Vintage Chorus Technical Specifications

## Audio Engine Architecture

### Core Processing Algorithm
- **Chorus Type**: Analog BBD (Bucket Brigade Device) emulation
- **Processing Resolution**: 64-bit internal processing
- **Sample Rate Support**: 44.1kHz - 192kHz
- **Oversampling**: 2x, 4x, 8x options for quality
- **Latency**: 1-5 samples typical, host-compensated

### Signal Flow Architecture
```
Input → Pre-Delay → LFO → Delay Modulation → Voice Summation → Output
```

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
- **Free/Sync**: Independent or host-synchronized operation

### Delay Line Configuration
**Delay Structure**:
- **Base Delay**: 5ms - 40ms
- **Voice Count**: 2, 3, or 4 voice configurations
- **Voice Spacing**: Adjustable per voice
- **Stereo Configuration**: Left, Right, Mid/Side options
- **Feedback**: Optional regeneration (0-90%)

**Voice Characteristics**:
- **Frequency Detuning**: ±50 cents per voice
- **Phase Relationship**: Configurable phase offsets
- **Amplitude Balance**: Per-voice level control
- **Panning**: Individual voice positioning

## BBD Emulation Details

### Bucket Brigade Device Modeling
**Analog Characteristics**:
- **Clock Noise**: Subtle high-frequency artifacts
- **Frequency Response**: Natural roll-off characteristics
- **Nonlinearity**: Slight saturation at high depths
- **Temperature Drift**: Subtle pitch variations over time

**Emulation Parameters**:
- **BBD Stages**: Configurable number of stages
- **Clock Frequency**: Internal clock speed control
- **Voltage Reference**: Analog voltage simulation
- **Component Aging**: Optional aging simulation

### Saturation and Distortion
**Analog Modeling**:
- **Soft Clipping**: Gentle threshold saturation
- **Odd Harmonics**: Natural harmonic generation
- **Frequency-Dependent**: Variable saturation by frequency
- **Dynamic Response**: Velocity-dependent saturation

## Filter and Equalization

### Internal Filtering
**Frequency Response**:
- **Low-Pass Roll-off**: Natural BBD characteristics
- **High-Frequency Loss**: Above 8kHz natural reduction
- **Mid-Range Presence**: Characteristic frequency boost
- **Low-Frequency Response**: Maintained bass response

**EQ Options**:
- **High-Pass Filter**: Remove unwanted low frequencies
- **Low-Pass Filter**: Additional high-frequency control
- **Notch Filter**: Problem frequency removal
- **Shelving EQ**: High and low frequency control

## Stereo Processing

### Stereo Image Enhancement
**Stereo Width Control**:
- **Width Range**: 0% (mono) to 200% (stereo)
- **Balance Control**: Left/right channel balance
- **Mid/Side Processing**: Frequency-specific stereo control
- **Phase Coherence**: Maintain phase relationship

**Voice Distribution**:
- **Stereo Voice Panning**: Individual voice positioning
- **Cross-Feed**: Left to right voice interaction
- **Width Modulation**: Dynamic stereo field changes
- **Mono Compatibility**: Check mono sum quality

## MIDI Implementation

### MIDI Controller Assignments
- **CC#1**: Modulation Wheel → LFO Depth (default)
- **CC#2**: Breath Control → Chorus Mix
- **CC#4**: Foot Controller → LFO Rate
- **CC#5**: Portamento Time → Rate transition time
- **CC#7**: Volume → Main Output Level
- **CC#10**: Pan → Stereo Balance
- **CC#11**: Expression → Chorus Depth (alternate)
- **CC#74**: Filter Cutoff → Delay Time (if available)
- **CC#75**: Filter Resonance → Voice Count (if available)

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
- **Triplet Divisions**: 1/8T, 1/16T (swing feels)

## Performance Specifications

### Audio Quality Metrics
**Signal-to-Noise Ratio**: >90dB (typical)
- **Dynamic Range**: 16-bit equivalent (96dB)
- **THD+N** (Total Harmonic Distortion): <0.01%
- **Frequency Response**: 20Hz - 20kHz (±0.5dB)
- **Crosstalk**: <-80dB (for stereo separation)

### CPU Performance
**Resource Usage**:
- **Single Instance**: 0.5% - 3% of one core
- **Multi-Voice Mode**: Up to 6% with 4 voices
- **High Sample Rates**: +25% CPU usage at 96kHz
- **Oversampling Impact**: +50% per doubling

### Memory Requirements
- **Base RAM**: 50-150MB per instance
- **Preset Storage**: 1-2MB per 100 presets
- **Cache Memory**: 10-50MB for performance
- **Additional Processing**: +20MB for advanced features

## Platform Compatibility

### Windows Support
**System Requirements**:
- **Operating System**: Windows 7 SP1 - Windows 11
- **Processor**: Intel i3 or AMD Ryzen 3 minimum
- **RAM**: 4GB minimum, 8GB recommended
- **Storage**: 200MB available space
- **Graphics**: Display resolution 1024x768 minimum

**Plugin Formats**:
- **VST2**: Universal compatibility
- **VST3**: Enhanced performance
- **AAX**: Pro Tools compatibility (if available)

### macOS Support
**System Requirements**:
- **Operating System**: macOS 10.9 - macOS 14+
- **Processor**: Intel Core i5 or Apple Silicon M1/M2
- **RAM**: 4GB minimum, 8GB recommended
- **Storage**: 200MB available space
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
- LFO Rate (0.1Hz - 20Hz)
- LFO Depth (0 - 100%)
- Delay Time (5ms - 40ms)
- Chorus Mix (0 - 100%)
- Voice Count (2-4 voices)
- Stereo Width (0 - 200%)

**Automation Quality**:
- **Smooth Transitions**: Interpolated parameter changes
- **Sample-Accurate**: Precise timing automation
- **Curve Types**: Linear, logarithmic, exponential options
- **Host Integration**: Full DAW automation support

### Preset Management
**Preset Features**:
- **Factory Presets**: 50-100 classic chorus emulations
- **User Presets**: Unlimited storage
- **Preset Categories**: Organized by instrument and genre
- **Import/Export**: Preset sharing capabilities
- **MIDI Learn**: Store controller assignments

**Preset Parameters**:
```json
{
  "presetStructure": {
    "name": "Preset Name",
    "category": "Instrument/Genre",
    "lfoRate": 4.5,
    "lfoDepth": 65,
    "delayTime": 25,
    "voiceCount": 3,
    "mixLevel": 50,
    "stereoWidth": 85,
    "bbdStages": 1024,
    "analogModel": "vintage"
  }
}
```

## Comparison with Original Hardware

### Emulated Units
**Roland Juno-60 Chorus**:
- **Voice Count**: 2 voice stereo
- **Rate Range**: 0.5-8Hz
- **Delay Structure**: 20ms multi-tap
- **Character**: Warm, lush, slightly metallic

**Boss CE-2 Chorus**:
- **Voice Count**: 2 voice stereo
- **Rate Range**: 1-8Hz
- **Delay Structure**: 15ms single delay
- **Character**: Punchy, bright, organic

### Software Advantages
**Digital Benefits**:
- **Perfect Recall**: 100% parameter recall
- **Automation**: Complete parameter control
- **Multiple Instances**: Unlimited chorus units
- **Low Noise**: No analog noise floor

**Hybrid Approach**:
- **Analog Modeling**: Preserves character
- **Digital Precision**: Maintains quality
- **Extended Features**: Modern capabilities
- **Workflow Integration**: DAW compatibility

## Technical Limitations

### Known Constraints
**Processing Limits**:
- **Maximum Voice Count**: 4 voices (most implementations)
- **Rate Range**: Limited to realistic BBD speeds
- **Frequency Response**: Analog modeling restrictions
- **CPU Scaling**: Linear with each instance

**Design Trade-offs**:
- **Authenticity vs Quality**: BBD emulation vs clean processing
- **Features vs Performance**: More voices = higher CPU
- **Vintage vs Modern**: Character vs flexibility
- **Analog vs Digital**: Warmth vs precision

### System Requirements Impact
**Minimum Requirements**:
- **CPU**: Modern multi-core processor
- **Memory**: 4GB RAM minimum
- **Storage**: Fast SSD for better performance
- **Operating System**: 64-bit OS required

**Recommended Setup**:
- **CPU**: Intel i7/i9 or AMD Ryzen 7/9
- **Memory**: 16GB+ RAM
- **Storage**: NVMe SSD with adequate space
- **Audio Interface**: Professional low-latency interface