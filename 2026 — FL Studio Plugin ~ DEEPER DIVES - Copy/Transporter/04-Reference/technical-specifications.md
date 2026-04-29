# Transporter Technical Specifications

## Audio Engine Architecture

### Core Processing
- **Sample Rate Support**: 44.1kHz - 192kHz
- **Bit Depth**: 32-bit floating point internal processing
- **Buffer System**: Variable length audio capture
- **Latency**: 0-2 samples (native processing)
- **Oversampling**: 1x - 8x options available

### DSP Algorithms
- **Time-domain Processing**: Real-time audio manipulation
- **Pitch Shifting**: Granular or phase vocoder algorithms
- **Filter Implementation**: State-variable filters (LP, HP, BP, Notch)
- **Interpolation**: High-quality sample interpolation
- **Anti-aliasing**: Built-in oversampling for quality preservation

## Buffer Management

### Buffer Size Range
- **Minimum**: 1 millisecond
- **Maximum**: 4 bars (depends on tempo)
- **Divisions**: 1/4, 1/8, 1/16, 1/32, 1/64 notes
- **Triplets**: 1/8T, 1/16T, 1/32T notes
- **Custom**: User-defined time values

### Memory Architecture
- **Buffer Pool**: Dynamic memory allocation
- **Circular Buffers**: For continuous processing
- **Crossfading**: Seamless buffer transitions
- **Memory Footprint**: 50-200MB per instance

## Parameter Specifications

### Time Parameters
- **Buffer Size**: 1ms - 16 bars
- **Stutter Rate**: 0.1Hz - 100Hz
- **Fade Time**: 0ms - 1000ms
- **Release Time**: 0ms - 5000ms

### Pitch Parameters
- **Pitch Shift Range**: -24 to +24 semitones
- **Fine Pitch**: ±100 cents
- **Formant Shift**: ±12 semitones
- **Vibrato Rate**: 0.1Hz - 20Hz
- **Vibrato Depth**: 0 - 100%

### Filter Parameters
- **Frequency Range**: 20Hz - 20kHz
- **Resonance**: 0 - self-oscillation
- **Slope Options**: 12dB, 24dB, 36dB, 48dB per octave
- **Filter Types**: Low-pass, High-pass, Band-pass, Notch
- **Modulation Depth**: 0 - 100%

### Mix Parameters
- **Wet/Dry Mix**: 0% - 100%
- **Stereo Width**: 0% - 200%
- **Pan**: -100% to +100%
- **Output Level**: -60dB to +12dB

## MIDI Implementation

### Controller Numbers
- **CC#1**: Modulation → Pitch Shift
- **CC#7**: Volume → Output Level
- **CC#10**: Pan → Stereo Pan
- **CC#11**: Expression → Wet/Dry Mix
- **CC#74**: Filter Cutoff
- **CC#71**: Filter Resonance
- **CC#72**: Release Time
- **CC#73**: Attack Time
- **CC#75**: Filter Q

### Note Input Support
- **Note Range**: C-2 to G8 (MIDI 0-127)
- **Velocity Sensitivity**: 0-127 mapped to intensity
- **Aftertouch**: Channel and polyphonic support
- **Pitch Bend**: ±24 semitone range

## Audio Specifications

### Sample Rate Conversion
- **Internal Processing**: Up to 192kHz
- **Output Matching**: Host project sample rate
- **Quality Settings**: Economy, Normal, High, Ultra
- **SRC Algorithm**: Minimum phase FIR filters

### Bit Depth Handling
- **Input**: 16, 24, 32-bit integer, 32-bit float
- **Processing**: 32-bit float throughout
- **Output**: Match host bit depth
- **Dithering**: Optional for 16-bit output

## Platform Specifications

### Windows Support
- **OS Versions**: Windows 7 SP1 - Windows 11
- **Plugin Formats**: VST2, VST3, AAX
- **Architecture**: 32-bit and 64-bit
- **Dependencies**: Visual C++ Redistributable

### macOS Support
- **OS Versions**: OS X 10.9 - macOS 14+
- **Plugin Formats**: VST2, VST3, AU, AAX
- **Architecture**: Universal Binary (Intel/Apple Silicon)
- **Dependencies**: System frameworks only

### Linux Support
- **Compatibility**: Via Wine or similar
- **Status**: Unofficial support
- **Performance**: Variable depending on Wine version
- **Stability**: Generally stable with recent Wine

## Performance Specifications

### CPU Usage
- **Idle**: 0.1% - 0.5% of one core
- **Active**: 0.5% - 5% of one core
- **Complex Settings**: Up to 15% with extreme settings
- **Multi-core**: Single-threaded processing

### RAM Usage
- **Base Instance**: 50-100MB
- **Large Buffers**: +50MB additional
- **Presets Loaded**: +1-5MB per 100 presets
- **Peak Usage**: 200-300MB maximum

### Disk Usage
- **Installation**: 100-500MB
- **Presets**: 10-50MB per 1000 presets
- **Cache Files**: 50-200MB
- **Log Files**: <10MB typical

## Compatibility Matrix

### DAW Support
| DAW | VST2 | VST3 | AU | AAX | Notes |
|-----|------|------|----|-----|-------|
| FL Studio | ✓ | ✓ | N/A | N/A | Native integration |
| Ableton Live | ✓ | ✓ | ✓ | N/A | Full support |
| Logic Pro | N/A | N/A | ✓ | N/A | AU version recommended |
| Pro Tools | ✓ | ✓ | N/A | ✓ | AAX for Pro Tools |
| Cubase | ✓ | ✓ | N/A | N/A | Full VST support |
| Reaper | ✓ | ✓ | N/A | N/A | Excellent compatibility |

### System Requirements

#### Minimum Requirements
- **CPU**: Intel i3 or AMD Ryzen 3
- **RAM**: 4GB DDR3
- **Storage**: 500MB available space
- **OS**: Windows 7 SP1 or macOS 10.9

#### Recommended Requirements
- **CPU**: Intel i7 or AMD Ryzen 7
- **RAM**: 16GB DDR4
- **Storage**: 2GB available space + SSD
- **OS**: Windows 10/11 or macOS 12+

#### Professional Requirements
- **CPU**: Intel i9 or AMD Ryzen 9
- **RAM**: 32GB+ DDR4/DDR5
- **Storage**: NVMe SSD with 5GB+ space
- **OS**: Latest OS versions
- **Audio Interface**: Professional ASIO/Core Audio device

## Limitations and Constraints

### Known Limitations
- **Single Instance per Track**: Multiple instances require multiple tracks
- **No Offline Processing**: Real-time only
- **Limited Undo History**: Dependent on DAW
- **No Direct File Export**: Must record output

### Performance Constraints
- **CPU Scaling**: Linear with instance count
- **Memory Ceiling**: 1GB per process (32-bit limit)
- **Thread Limitation**: Single-threaded processing
- **Plugin Bridge**: Required in some hosts

### Audio Constraints
- **Latency**: Minimum 64 samples recommended
- **Sample Rate**: Limited by host project
- **Bit Depth**: Automatic conversion
- **Channel Count**: Mono and Stereo only