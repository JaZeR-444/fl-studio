# DirectWave Sampler Mapping Specifications

## Overview
This document details the technical specifications of DirectWave Sampler's mapping capabilities, including key mapping, velocity mapping, sample handling, and performance characteristics. Understanding these specifications is crucial for effective hip-hop, rap, and R&B production.

## Mapping Architecture

### Key Mapping Specifications

#### MIDI Note Range
- **Range**: MIDI notes 0-127 (C-2 to G8)
- **Default**: Middle C (MIDI note 60) corresponds to C4
- **Precision**: Individual note mapping capability
- **Overlap**: Multiple samples can map to same key range
- **Gap Handling**: Unmapped keys produce no sound

#### Key Range Parameters
- **Key Start**: Beginning of trigger range (MIDI 0-127)
- **Key End**: End of trigger range (MIDI 0-127)
- **Range Limit**: Maximum 127-note span per zone
- **Boundary Behavior**: Inclusive of start/end notes
- **Default Setting**: Both set to same note for single-key triggering

#### Root Key Specifications
- **Function**: Reference pitch for sample playback
- **Range**: MIDI notes 0-127 (C-2 to G8)
- **Default**: Automatically set based on sample analysis
- **Tuning**: Affects playback pitch across keyboard
- **Precision**: Can be adjusted with Coarse and Fine Tune

### Velocity Mapping Specifications

#### Velocity Range Parameters
- **Velocity Start**: Minimum trigger velocity (1-127)
- **Velocity End**: Maximum trigger velocity (1-127)
- **Range Limit**: Maximum 127-velocity span per zone
- **Boundary Behavior**: Inclusive of start/end velocities
- **Default Setting**: Start=1, End=127 (full range)

#### Velocity Curve Options
- **Linear**: Direct velocity-to-volume response
- **Exponential**: Emphasizes soft/loud dynamic range
- **Logarithmic**: Natural response for acoustic instruments
- **Custom**: User-defined velocity curves
- **Application**: Per-zone velocity response settings

#### Velocity Layering Capabilities
- **Maximum Layers**: Up to 8 velocity layers per key range
- **Overlap Allowed**: Adjacent layers can overlap
- **Priority**: Last-loaded sample takes precedence in overlap
- **Crossfading**: Between adjacent velocity layers
- **Blending**: Smooth transitions between layers

### Sample Zone Specifications

#### Zone Capacity
- **Maximum Zones**: Up to 128 zones per DirectWave instance
- **Memory Allocation**: Per-zone sample storage
- **Polyphony**: Per-zone voice allocation
- **Processing**: Per-zone effects and modulation
- **Routing**: Per-zone output routing options

#### Zone Parameters
- **Sample Assignment**: Single sample per zone
- **Mapping Independence**: Each zone has separate key/velocity mapping
- **Parameter Isolation**: Per-zone tuning, filtering, envelopes
- **Effect Processing**: Per-zone effects chain
- **Modulation**: Per-zone modulation matrix

## Sample Handling Specifications

### Supported Sample Formats
- **WAV**: PCM, various bit depths (16, 24, 32-bit float)
- **FLAC**: Lossless compressed audio
- **MP3**: Various bitrates (decoded to PCM internally)
- **AIFF**: PCM format support
- **OGG**: Vorbis compressed audio support

### Sample Quality Specifications
- **Bit Depth**: Up to 32-bit float processing
- **Sample Rate**: Up to 192kHz (internally resampled to project rate)
- **Maximum Length**: Up to 1 hour per sample (practical limits apply)
- **Memory Usage**: Approximately 5MB per minute at 44.1kHz/16-bit
- **Streaming**: Large samples can be streamed from disk

### Sample Playback Parameters
- **Playback Direction**: Forward, Reverse, Ping-Pong
- **Loop Modes**: Off, On, Ping-Pong
- **Loop Points**: User-definable start/end points
- **Crossfading**: Loop crossfades to eliminate clicks
- **Interpolation**: High-quality resampling algorithms

## Tuning and Pitch Specifications

### Pitch Control Range
- **Coarse Tune**: ±60 semitones (-720 to +720 cents)
- **Fine Tune**: ±100 cents (-100 to +100 cents)
- **Total Range**: ±7200 cents (±60 semitones)
- **Precision**: 1-cent resolution for fine tuning
- **Application**: Per-zone independent tuning

### Stretch Algorithm Specifications
- **Formant Preserving**: Maintains harmonic relationships during pitch shift
- **Natural**: Balanced algorithm for general use
- **Complex**: High-quality algorithm for complex material
- **Speed vs. Quality**: Different trade-offs for each algorithm
- **CPU Impact**: Varies by algorithm complexity

### Tuning Accuracy
- **Reference**: A440 concert pitch standard
- **Precision**: 1-cent accuracy for fine tuning
- **Stability**: Maintains tuning under varying conditions
- **Calibration**: No user calibration required
- **Consistency**: Maintains tuning across different sample rates

## Filter Specifications

### Filter Types Available
- **Low Pass**: Attenuates frequencies above cutoff
- **High Pass**: Attenuates frequencies below cutoff
- **Band Pass**: Allows mid-range frequencies
- **Notch**: Rejects narrow frequency band
- **All Pass**: Phase manipulation without amplitude change

### Filter Parameters
- **Cutoff Range**: 20Hz to 20kHz
- **Resonance Range**: 0% to 100%
- **Slope Options**: Various dB/octave slopes
- **Envelope Control**: Modulation of cutoff frequency
- **Tracking**: Keyboard tracking for cutoff

### Filter Performance
- **Quality**: High-resolution filtering algorithms
- **CPU Usage**: Low to moderate depending on settings
- **Latency**: Minimal processing latency
- **Stability**: Maintains stability under extreme settings
- **Character**: Preserves sample integrity

## Envelope Specifications

### Amplitude Envelope Parameters
- **Attack**: 0ms to 10 seconds
- **Decay**: 0ms to 10 seconds
- **Sustain**: 0% to 100% of maximum
- **Release**: 0ms to 10 seconds
- **Curve Types**: Linear, exponential, logarithmic

### Filter Envelope Parameters
- **Attack**: 0ms to 10 seconds
- **Decay**: 0ms to 10 seconds
- **Sustain**: 0% to 100% of maximum
- **Release**: 0ms to 10 seconds
- **Amount**: -100% to +100% modulation depth

### Envelope Performance
- **Resolution**: High-resolution envelope generation
- **Accuracy**: Precise timing control
- **Flexibility**: Per-zone envelope settings
- **Modulation**: Envelopes can modulate multiple parameters
- **Response**: Real-time envelope updates

## Modulation Specifications

### LFO Capabilities
- **Rate Range**: 0.1Hz to 20Hz
- **Waveforms**: Sine, triangle, sawtooth, square
- **Destinations**: Pitch, filter, volume, pan
- **Depth**: 0% to 100% modulation amount
- **Sync**: Tempo-sync options available

### Modulation Matrix
- **Sources**: LFOs, envelopes, MIDI controllers
- **Destinations**: Pitch, filter, volume, pan, more
- **Amount**: -100% to +100% modulation depth
- **Curve**: Response curve shaping
- **Routing**: Complex modulation routings possible

### Real-Time Control
- **MIDI CC**: Extensive MIDI controller support
- **Automation**: Full DAW automation compatibility
- **Response**: Low-latency real-time control
- **Mapping**: Flexible controller-to-parameter mapping
- **Presets**: Saveable modulation setups

## Performance Specifications

### Polyphony Limits
- **Maximum Voices**: Up to 64 voices per instance
- **Voice Allocation**: Per-zone voice assignment
- **Stealing**: Priority-based voice stealing
- **Management**: Automatic voice management
- **Monitoring**: Voice usage monitoring available

### Voice Stealing Priorities
- **Lowest**: Cut lowest-pitched notes first
- **Highest**: Cut highest-pitched notes first
- **Last**: Cut most recently triggered notes first
- **First**: Cut earliest triggered notes first
- **Strategy**: Per-zone priority selection

### Memory Usage
- **RAM Usage**: Varies with sample size and count
- **Streaming**: Large samples can stream from disk
- **Preloading**: Small samples can preload for performance
- **Optimization**: Automatic memory optimization
- **Monitoring**: Memory usage monitoring available

### CPU Performance
- **Base Load**: Low CPU usage for basic operation
- **Effects Impact**: Built-in effects increase CPU usage
- **Polyphony Impact**: More voices increase CPU usage
- **Algorithm Impact**: Complex algorithms increase CPU usage
- **Optimization**: Various optimization options available

## Effects Processing Specifications

### Built-in Effects
- **Filter**: Multi-mode filtering options
- **Distortion**: Drive and saturation effects
- **Modulation**: Chorus, flanger, phaser
- **Time-based**: Delay and reverb options
- **Dynamics**: Compression and limiting

### Effects Parameters
- **Mix**: Dry/wet balance control
- **Amount**: Effect intensity control
- **Routing**: Insert vs. send routing options
- **Quality**: Different quality settings available
- **Presets**: Built-in effect presets

### Effects Performance
- **Quality**: Professional-grade effect algorithms
- **CPU Usage**: Varies by effect type and settings
- **Latency**: Minimal processing latency
- **Flexibility**: Per-zone effects processing
- **Integration**: Seamless integration with sampling

## Integration Specifications

### DAW Integration
- **MIDI**: Full MIDI specification compliance
- **Automation**: Complete parameter automation support
- **Sample Rate**: Supports various project sample rates
- **Buffer Sizes**: Compatible with different buffer configurations
- **Latency**: Minimal plugin latency

### Routing Options
- **Outputs**: Multiple output routing options
- **Buses**: Compatible with DAW bus systems
- **Groups**: Can be grouped with other instruments
- **Sends**: Compatible with DAW send systems
- **Monitoring**: Flexible monitoring options

### Compatibility
- **FL Studio**: Native FL Studio plugin
- **Standards**: VST2, VST3 compatibility where applicable
- **Formats**: Various project format compatibility
- **Systems**: Windows and macOS compatibility
- **Versions**: Backward compatibility maintained

## Genre-Specific Optimizations

### Hip-Hop Production Specifications
- **Drum Mapping**: Optimized for GM drum map compatibility
- **808 Support**: Specialized settings for 808 programming
- **Chop Processing**: Efficient handling of short samples
- **Velocity Response**: Settings optimized for drum programming
- **Polyphony**: Appropriate voice counts for drum programming

### Rap Production Specifications
- **Vocal Processing**: Settings optimized for vocal samples
- **Chop Mapping**: Efficient mapping for vocal chops
- **Effects**: Vocal-appropriate effect settings
- **Tuning**: Precise tuning for vocal samples
- **Envelope**: Settings for clean vocal attacks

### R&B Production Specifications
- **Instrument Emulation**: Settings for realistic instrument sounds
- **Expression**: Optimized for musical expression
- **Effects**: Warm, musical effect settings
- **Filtering**: Smooth, musical filtering options
- **Envelopes**: Settings for smooth, musical response

## Technical Standards Compliance

### Audio Standards
- **Sample Rate**: Up to 192kHz support
- **Bit Depth**: Up to 32-bit float processing
- **Dynamic Range**: Full dynamic range preservation
- **THD+N**: Professional audio quality specifications
- **Stereo Imaging**: Accurate stereo field reproduction

### MIDI Standards
- **MIDI 1.0**: Full specification compliance
- **GM Compatibility**: General MIDI compatibility
- **RPN/NRPN**: Registered/Non-registered parameter numbers
- **MMC**: MIDI Machine Control support
- **MPE**: MIDI Polyphonic Expression support (where applicable)

### File Format Standards
- **RIFF/WAVE**: Standard WAV file format
- **BWF**: Broadcast Wave Format support
- **ID3**: Metadata tag support
- **Loop Points**: Standard loop point formats
- **Markers**: Sample marker support

## Troubleshooting Specifications

### Common Issues and Solutions
- **Sample Loading**: Verify file format and path accessibility
- **Clicking/Popping**: Check loop points and crossfades
- **Pitch Issues**: Verify root key and tuning settings
- **Performance**: Adjust polyphony and effects usage
- **Compatibility**: Check DAW and OS compatibility

### Diagnostic Capabilities
- **Sample Analysis**: Built-in sample analysis tools
- **Performance Monitoring**: CPU and memory usage monitoring
- **Error Reporting**: Clear error messages for issues
- **Logging**: Diagnostic logging capabilities
- **Recovery**: Automatic recovery from minor issues

## Future Updates and Compatibility

### Version Compatibility
- **Current Version**: Optimized for FL Studio 20+
- **Backward Compatibility**: Maintained for previous versions
- **Forward Compatibility**: Planned for future versions
- **Plugin API**: Stable API for consistent performance
- **Format Support**: Expanding format support

### Expected Improvements
- **Quality**: Continued audio quality improvements
- **Performance**: Ongoing performance optimizations
- **Features**: Additional sampling features
- **Compatibility**: Expanded compatibility options
- **Standards**: Adoption of new industry standards

## Conclusion

DirectWave Sampler provides comprehensive mapping capabilities essential for professional hip-hop, rap, and R&B production. Understanding these specifications allows for optimal utilization of the plugin's features while maintaining technical excellence in production workflows.

The mapping system's flexibility, combined with robust performance characteristics, makes DirectWave suitable for complex sampling tasks while maintaining the musical expressiveness required for genre-specific production techniques.

Regular updates and improvements ensure that DirectWave remains at the forefront of sampling technology while maintaining backward compatibility and professional audio standards.

---

**Created**: February 2026  
**Specifications Version**: 1.0  
**Compatible with**: FL Studio 20+  
**Standards Compliance**: MIDI 1.0, Audio Standards, File Format Standards