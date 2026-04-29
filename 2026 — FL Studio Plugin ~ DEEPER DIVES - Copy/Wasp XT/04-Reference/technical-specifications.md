# Wasp XT Technical Specifications

## Audio Engine Architecture

### Core Processing
- **Oscillator Architecture**: Dual analog-modeling oscillators
- **Filter Design**: State-variable filter with ladder emulation
- **Envelope System**: ADSR with additional parameters
- **LFO Section**: Multi-waveform low-frequency oscillators
- **Processing**: 32-bit floating point internal processing

### Oscillator Specifications
**Waveforms Available**:
- Sawtooth
- Square/Pulse
- Triangle
- Sine
- Noise (white/pink)
- Custom/User waveforms (if supported)

**Oscillator Features**:
- **Frequency Range**: 20Hz - 20kHz
- **Detune Range**: ±100 cents
- **Sync Mode**: Hard oscillator sync
- **Ring Modulation**: Built-in ring modulator
- **Sub Oscillator**: One octave below fundamental

### Filter Characteristics
**Filter Types**:
- Low-pass (24dB/oct)
- High-pass (24dB/oct)
- Band-pass (12dB/oct)
- Notch (12dB/oct)

**Filter Parameters**:
- **Cutoff Frequency**: 20Hz - 20kHz
- **Resonance**: 0 - Self-oscillation
- **Key Tracking**: 0 - 100%
- **Envelope Amount**: 0 - 100%
- **Velocity Sensitivity**: 0 - 100%

## Modulation System

### LFO Specifications
**Waveform Options**:
- Sine
- Triangle
- Sawtooth (up/down)
- Square
- Sample & Hold
- Random
- Custom waveforms

**LFO Parameters**:
- **Rate**: 0.1Hz - 100Hz
- **Depth**: 0 - 100%
- **Phase**: 0 - 360°
- **Sync**: Host MIDI sync option
- **Retrigger**: Phase reset on note-on

### Envelope Generator
**ADSR Parameters**:
- **Attack**: 0 - 10 seconds
- **Decay**: 0 - 10 seconds
- **Sustain**: 0 - 100%
- **Release**: 0 - 10 seconds

**Advanced Envelope Features**:
- **Velocity Scaling**: Envelope responds to velocity
- **Key Scaling**: Envelope varies with keyboard range
- **Delay**: Envelope start delay
- **Loop Modes**: Loop and sustain options

## MIDI Implementation

### MIDI Controller Numbers
- **CC#1**: Modulation → LFO depth (default)
- **CC#2**: Breath Control → Filter resonance
- **CC#4**: Foot Controller → Filter cutoff
- **CC#5**: Portamento Time → Glide time
- **CC#7**: Volume → Main output level
- **CC#10**: Pan → Stereo position
- **CC#11**: Expression → Envelope amount
- **CC#74**: Filter Cutoff → Filter frequency
- **CC#71**: Filter Resonance → Filter Q
- **CC#73**: Attack Time → Envelope attack
- **CC#72**: Release Time → Envelope release
- **CC#75**: Filter Q → Alternate resonance control

### Note Range and Scaling
**Keyboard Range**:
- **MIDI Range**: C-2 to G8 (notes 0-127)
- **Velocity Response**: 1-127 with customizable curves
- **Aftertouch**: Channel and polyphonic support
- **Pitch Bend**: ±12 semitones (configurable)

## Effects Section

### Built-in Effects
**Delay Effects**:
- **Delay Time**: 1ms - 2 seconds
- **Feedback**: 0 - 95%
- **Mix**: 0 - 100%
- **Sync**: Host tempo sync option

**Chorus Effects**:
- **Rate**: 0.1Hz - 20Hz
- **Depth**: 0 - 100%
- **Mix**: 0 - 100%
- **Voices**: 2-4 voice chorus

**Distortion/Saturation**:
- **Drive Amount**: 0 - 100%
- **Tone Control**: High-frequency rolloff
- **Mix**: 0 - 100% (parallel saturation)

**Reverb**:
- **Room Size**: Small - Hall
- **Decay Time**: 0.5 - 10 seconds
- **Damping**: High-frequency damping control
- **Mix**: 0 - 100%

## Performance Specifications

### Audio Quality
**Sample Rate Support**:
- 44.1kHz, 48kHz, 88.2kHz, 96kHz, 192kHz
- **Internal Processing**: Up to 192kHz
- **Oversampling**: 2x, 4x, 8x options

**Bit Depth**:
- **Input**: 16, 24, 32-bit integer, 32-bit float
- **Processing**: 32-bit float throughout
- **Output**: Match host bit depth

### CPU Performance
**Resource Usage**:
- **Single Instance**: 1-5% of one core (varies with settings)
- **Multiple Instances**: Linear scaling
- **Heavy Settings**: Up to 15% with extreme unison
- **Voice Count**: Mono (1 voice), Poly (configurable, typically 8-16 voices)

### Latency
**Processing Delay**:
- **Minimum**: 0-2 samples (native processing)
- **Total Latency**: Host buffer dependent
- **Lookahead**: Optional 0-64 samples for filter
- **Compensation**: Automatic PDC support

## Platform Specifications

### Windows Support
**System Requirements**:
- **OS**: Windows 7 SP1 - Windows 11
- **CPU**: Intel i3 or AMD Ryzen 3 minimum
- **RAM**: 4GB minimum, 8GB recommended
- **Storage**: 500MB available space

**Plugin Formats**:
- **VST2**: Compatible with most DAWs
- **VST3**: Enhanced performance and integration
- **AAX**: Pro Tools compatibility (if available)

### macOS Support
**System Requirements**:
- **OS**: macOS 10.9 - macOS 14+
- **CPU**: Intel Core i5 or Apple Silicon M1/M2
- **RAM**: 4GB minimum, 8GB recommended
- **Storage**: 500MB available space

**Plugin Formats**:
- **VST2**: Universal compatibility
- **VST3**: Modern standard
- **AU**: macOS native format
- **AAX**: Pro Tools support

### Linux Support
**Compatibility**:
- **Status**: Via Wine or similar compatibility layer
- **Performance**: Variable depending on Wine version
- **Stability**: Generally stable with recent Wine versions
- **Recommendation**: Windows or macOS preferred

## Physical Specifications (Hardware Versions)

### Build Quality
**Construction**:
- **Chassis**: Metal or high-quality plastic
- **Knobs**: Rotary encoders with detents
- **Display**: LED or LCD screen
- **Connectivity**: Standard MIDI and audio connectors

**Dimensions**:
- **Rack Mount**: 1U or 2U rack space
- **Desktop**: Compact footprint
- **Weight**: 1-3kg depending on construction
- **Power**: External power adapter (12V typical)

### Environmental Ratings
**Operating Conditions**:
- **Temperature**: 0°C to 40°C (32°F to 104°F)
- **Humidity**: 10% to 90% RH (non-condensing)
- **Altitude**: Sea level to 3000 meters
- **Power Requirements**: 100-240V AC, 50/60Hz

## Limitations and Constraints

### Technical Limitations
**Known Issues**:
- **Maximum Voices**: Limited polyphony (typically 8-16 voices)
- **CPU Scaling**: Linear increase with each instance
- **Memory**: Limited to single process (32-bit versions)
- **Filter Precision**: Analog emulation limitations

**Design Constraints**:
- **Monophonic Mode**: Single note at a time
- **Polyphony Limits**: Voice stealing when exceeding limits
- **MIDI Resolution**: Standard 7-bit resolution
- **Parameter Resolution**: Limited by internal precision

### Performance Constraints
**CPU Management**:
- **Buffer Dependency**: Performance affected by buffer size
- **Sample Rate Impact**: Higher rates increase CPU usage
- **Voice Count**: More voices = more processing
- **Effects Processing**: Built-in effects add CPU load

**Memory Usage**:
- **Base RAM**: 50-150MB per instance
- **Preset Storage**: 1-2MB per 100 presets
- **Cache Memory**: 10-50MB for performance
- **Streaming**: No audio streaming required

## Compatibility Matrix

### DAW Support
| DAW | VST2 | VST3 | AU | AAX | Notes |
|------|-------|--------|----|------|-------|
| FL Studio | ✓ | ✓ | N/A | N/A | Native integration |
| Ableton Live | ✓ | ✓ | ✓ | N/A | Full support |
| Logic Pro | N/A | N/A | ✓ | N/A | AU version |
| Pro Tools | ✓ | ✓ | N/A | ✓ | AAX version |
| Cubase | ✓ | ✓ | N/A | N/A | Full VST support |
| Reaper | ✓ | ✓ | N/A | N/A | Excellent compatibility |

### System Requirements

#### Minimum Requirements
- **CPU**: Intel i3 or AMD Ryzen 3
- **RAM**: 4GB DDR3
- **OS**: Windows 7 SP1 or macOS 10.9
- **Audio Interface**: ASIO/Core Audio device

#### Recommended Requirements
- **CPU**: Intel i7 or AMD Ryzen 7
- **RAM**: 16GB DDR4/DDR5
- **OS**: Windows 10/11 or macOS 12+
- **Audio Interface**: Professional interface with low latency

#### Professional Requirements
- **CPU**: Intel i9 or AMD Ryzen 9
- **RAM**: 32GB+ high-speed memory
- **OS**: Latest OS versions
- **Storage**: SSD with adequate space
- **Audio Interface**: Professional-grade interface