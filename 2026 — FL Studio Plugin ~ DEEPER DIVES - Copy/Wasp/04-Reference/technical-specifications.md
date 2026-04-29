# Wasp Technical Specifications

## Audio Engine Architecture

### Core Processing Algorithm
- **Vocoder Type**: Channel vocoder with envelope followers
- **Processing Resolution**: 64-bit internal floating point
- **Sample Rate Support**: 44.1kHz - 192kHz
- **Band Configurations**: 4, 8, 12, 16, 20, 24, 32 bands
- **Latency**: 2-10 samples typical, host-compensated

### Signal Flow Architecture
```
Modulator → Band-Pass Filters → Envelope Followers → Modulators → VCA → Output
Carrier → Band-Pass Filters → Gain Controls → VCA → Output
```

## Band Analysis System

### Frequency Band Configuration
**Band Count Options**:
- **4 Bands**: Fast response, choppy character
- **8 Bands**: Clear articulation, moderate quality
- **12 Bands**: Natural speech, good intelligibility
- **16 Bands**: Smooth, musical quality
- **20 Bands**: Very smooth, professional quality
- **24 Bands**: Maximum smoothness, studio quality
- **32 Bands**: Ultimate smoothness, experimental use

**Frequency Distribution**:
- **Linear Spacing**: Even frequency distribution
- **Logarithmic Scaling**: More bands in high frequencies
- **Mel Scale**: Psychoacoustic frequency mapping
- **Custom Distribution**: User-definable frequency ranges

**Band Filter Characteristics**:
- **Filter Type**: Band-pass filters per band
- **Q Factor**: Adjustable bandwidth per band
- **Slope**: Steepness of filter rolloff
- **Crossover Frequency**: Band separation points
- **Overlap Control**: Adjacent band overlap percentage

### Envelope Following System
**Envelope Detection**:
- **Attack Detection**: Fast onset detection
- **Release Detection**: Decay time measurement
- **Sustain Detection**: Steady-state analysis
- **Peak Detection**: Maximum level tracking
- **Gate Threshold**: Minimum detection level

## Modulation System

### Modulator Signal Processing
**Input Characteristics**:
- **Input Gain**: Adjustable input amplification
- **High-Pass Filter**: Remove unwanted frequencies
- **Low-Pass Filter**: Remove rumble and noise
- **Noise Gate**: Background noise reduction
- **Compressor**: Dynamic range control

**Signal Analysis**:
- **Band Level**: Signal strength per frequency band
- **Peak Detection**: Maximum level tracking
- **RMS Calculation**: Average level measurement
- **Correlation**: Signal relationship analysis

### Carrier Signal Processing
**Carrier Generation**:
- **Oscillator Types**: Saw, square, triangle, pulse, noise
- **Frequency Range**: 20Hz - 20kHz (adjustable)
- **Detune Control**: Fine pitch adjustment
- **Pulse Width**: Variable pulse width control
- **Phase Control**: Phase relationship adjustment
- **Filter Section**: Multi-mode filtering
- **Amplitude Control**: Volume and gain staging
- **Distortion**: Saturation and overdrive options
- **Effects**: Chorus, delay, modulation

**Carrier Processing**:
- **Filter Section**: Multi-mode filtering
- **Amplitude Control**: Volume and gain staging
- **Distortion**: Add character and aggression
- **Effects**: Chorus, delay, modulation
- **Stereo Enhancement**: Width and imaging

## Output Processing

### VCA (Voltage-Controlled Amplifier)
**Modulation Control**:
- **Multiplier Range**: 0 - 200% gain control
- **Response Curve**: Linear/logarithmic options
- **Smooth Control**: Parameter smoothing
- **Bleed Control**: Modulation amount control
- **Inversion**: Optional signal inversion
- **Output Configuration**:
- **Dry/Wet Mix**: 0-100% balance control
- **Output Level**: Master gain control
- **Mute/Solo**: Per-band mute options
- **Phase Invert**: Optional phase inversion
- **Stereo Mode**: Mono/stereo processing options

## MIDI Implementation

### Standard MIDI Controller Assignments
- **Standard MIDI CCs**:
- **CC#1**: Modulation Wheel → Band Count
- **CC#2**: Breath Control → Attack Time
- **CC#4**: Foot Controller → Release Time
- **CC#5**: Portamento Time → Band Overlap
- **CC#6**: Volume → Output Level
- **CC#7**: Pan → Stereo Balance
- **CC#11**: Expression → Dry/Wet Mix
- **CC#12**: Effect Control 1 → Carrier Type
- **CC#13**: Effect Control 2 → Carrier Filter
- **CC#14**: Effect Control 3 → Carrier Resonance

- **Extended Control**:
- **NRPN**: Non-registered parameter numbers
- **RPN**: Registered Parameter Numbers
- **Sysex**: System Exclusive messages
- **MIDI Learn**: User-definable assignments
- **Program Change**: Preset selection

### MIDI Synchronization
**Clock Options**:
- **Internal Clock**: Internal tempo generation
- **External MIDI**: Sync to external MIDI clock
- **Host Sync**: Follow DAW tempo
- **Tap Tempo**: Real-time tempo detection
- **Sample Sync**: Word clock synchronization

## Performance Specifications

### Audio Quality Metrics
- **Signal-to-Noise Ratio**:
- **Dynamic Range**: 100dB+ (with proper settings)
- **THD+N**: <0.005% (typical)
- **Crosstalk**: <-80dB (for stereo separation)
- **Frequency Response**: 20Hz - 20kHz ±0.5dB

### CPU Performance
**Resource Usage**:
- **4 Bands**: 0.5% - 2% of one core
- **8 Bands**: 1% - 4% of one core
- **16 Bands**: 2% - 8% of one core
- **24 Bands**: 4% - 15% of one core
- **32 Bands**: 8% - 30% of one core

**Memory Requirements**:
- **Base RAM**: 100MB - 500MB per instance
- **Band Scaling**: +10MB per additional 8 bands
- **Preset Storage**: 1-5MB per 100 presets
- **Cache Memory**: 20MB - 100MB for performance

### Latency Performance
**Processing Delay**:
- **Minimum**: 2.5 samples (native processing)
- **Typical**: 5-10 samples (with full processing)
- **Maximum**: 15-20 samples (maximum band count)
- **Compensation**: Automatic PDC compensation

## Platform Compatibility

### Windows Support
**System Requirements**:
- **Operating System**: Windows 7 SP1 - Windows 11
- **Processor**: Intel i3 or AMD Ryzen 3 minimum
- **RAM**: 8GB minimum, 16GB recommended
- **Storage**: 500MB available space
- **Graphics**: Display resolution 1024x768 minimum

**Plugin Formats**:
- **VST2**: Universal compatibility
- **VST3**: Enhanced performance and features
- **AAX**: Pro Tools compatibility

### macOS Support
**System Requirements**:
- **Operating System**: macOS 10.9 - macOS 14+
- **Processor**: Intel Core i5 or Apple Silicon M1/M2
- **RAM**: 8GB minimum, 16GB recommended
- **Storage**: 500MB available space
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

### Analysis Capabilities
**Signal Analysis**:
- **Real-Time Spectrum**: Frequency domain analysis
- **Phase Analysis**: Phase relationship monitoring
- **Peak/Level**: Continuous level tracking
- **Correlation**: Stereo coherence analysis
- **Envelope Visualization**: Per-band envelope shapes
- **Spectrum Analyzer**: Full frequency spectrum

### Creative Processing
**Modulation Matrix**:
- **Cross-Modulation**: Inter-band interactions
- **Complex Routing**: Multiple modulation paths
- **Feedback Control**: Controlled signal feedback
- **Dynamic Routing**: Input-dependent processing
- **Mathematical Operations**: Mathematical operations on LFOs

### Creative Processing
**Freeze Function**:
- **Parameter Freeze**: Hold current analysis
- **Spectral Freeze**: Hold frequency spectrum
- **Time Freeze**: Hold audio buffer
- **Pattern Freeze**: Hold modulation pattern

### Multi-Instrument Design
**Ensemble Techniques**:
- **Multiple Voices**: Different Wasp voices
- **Chord Generation**: Add harmonic content
- **Stereo Distribution**: Different positions per voice
- **Spatial Placement**: Wider stereo field

### Experimental Techniques
**Extreme Settings**:
- **Maximum Band Count**: Ultimate smoothness
- **High Feedback**: Self-oscillation limits
- **Random Parameters**: Generate unexpected settings
- **Noise Sources**: Additive noise generation
- **Glitch Creation**: Digital artifact creation

## Comparison with Hardware Vocoders

### Classic Hardware Emulation
**Emulated Characteristics**:
- **Frequency Response**: Hardware frequency responses
- **Nonlinearity**: Analog circuit behavior
- **Component Aging**: Temperature drift simulation
- **Noise Floor**: Hardware noise characteristics
- **Digital Presicion**: Perfect signal precision
- **Memory Limitation**: System resource limitations

### Software Advantages**
- **Digital Benefits**: Perfect recall, unlimited instances
- **Automation**: Complete parameter control
- **Multiple Instances**: Unlimited vocoder units
- **Low Noise Floor**: No analog noise floor
- **Extended Features**: Modern capabilities

### Hybrid Approach
- **Analog Modeling**: Preserve vintage character
- **Digital Precision**: Maintain audio quality
- **Extended Features**: Modern capabilities
- **Workflow Integration**: DAW compatibility

## Technical Limitations

### Known Constraints
**Processing Limits**:
- **Maximum Band Count**: Limited by CPU and memory
- **Frequency Resolution**: Limited by sample rate
- **Analysis Latency**: Processing delay inherent
- **Memory Allocation**: System resource limitations

**Design Trade-offs**:
- **Quality vs Performance**: Higher quality vs CPU usage
- **Flexibility vs Usability**: More features vs ease of use

### System Requirements Impact
**Minimum Requirements**:
- **CPU**: Modern multi-core processor
- **Memory**: 8GB RAM minimum
- **Storage**: Fast SSD for optimal performance
- **Operating System**: 64-bit OS required

**Recommended Setup**:
- **CPU**: Intel i7/i9 or AMD Ryzen 7/9
- **Memory**: 16GB+ high-speed memory
- **Storage**: NVMe SSD with adequate space
- **Audio Interface**: Professional multi-channel interface

## Quality Metrics

### Measurement Standards
**Objective Measurements**:
- **THD+N**: Total harmonic distortion plus noise
- **SNR**: Signal-to-noise ratio
- **Dynamic Range**: Effective bit depth conversion
- **Frequency Response**: Amplitude vs frequency characteristics
- **Phase Response**: Phase shift vs frequency
- **Subjective Quality**: How close to human speech
- **Naturalness**: How close to human speech
- **Musicality**: Musical quality assessment

### Validation Procedures
- **Audio Testing**:
- **Input Signals**: Standard test signal library
- **Reference Comparisons**: Benchmark against standards
- **User Testing**: Human evaluation protocols
- **Automated Testing**: Algorithmic quality checks
- **Quality Assessment**: Measure user experience

## Workflow Optimization

### System-Level Performance

#### CPU Management
- **Resource Utilization**:
- **Efficient Usage**: Optimize parameter usage
- **Instance Limitation**: Limit concurrent instances
- **Quality Settings**: Balance quality vs performance
- **Multi-Core Utilization**: Distribute processing load
- **Background Processes**: Disable unnecessary applications

#### Audio Quality Maintenance
- **Signal Chain Integrity**:
- **Gain Staging**: Proper level management
- **Headroom Management**: Avoid clipping and distortion
- **Noise Floor Control**: Minimize added noise
- **Dithering**: Proper bit depth conversion

#### Monitoring Setup**:
- **Studio Monitors**: Calibrated monitoring environment
- **Headphone Monitoring**: Detailed checking of artifacts
- **Metering**: Visual level and frequency analysis
- **A/B Testing**: Compare with/without Wasp

**Maintenance**
**Regular Updates**:
- Check for plugin updates and patches
- Update audio interface drivers
- Maintain MIDI controller firmware
- Optimize DAW settings

### Memory Optimization
- **Memory Usage**:
- **Preset Caching**: Efficient preset loading
- **Cache Management**: Clear unnecessary data
- **Plugin Chain**: Efficient signal flow
- **System Resources**: Optimize OS settings

## Career Development

**Skill Development**:
- **Technical Skills**: Advanced synthesis knowledge
- **Creative Skills**: Sound design abilities
- **Learning Attitude**: Continuous education mindset
- **Community Engagement**: Sharing and collaboration
- **Professional Practices**:
- **Standards**: Maintain quality benchmarks
- **Service Delivery**: Professional communication
- **Client Communication**: Professional correspondence
- **Quality Assurance**: High standards delivery
- **Reliability**: Redundant systems
- **Continuous Improvement**: Process refinement