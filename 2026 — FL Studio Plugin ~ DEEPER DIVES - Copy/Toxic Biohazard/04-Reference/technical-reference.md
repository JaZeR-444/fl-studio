# Toxic Biohazard - Technical Reference

## Plugin Architecture

### Main Interface
- **Header**: Plugin name, preset management, global controls
- **Display**: Oscilloscope, spectrum analyzer, waveform viewer
- **Operator Section**: 8 operators with individual controls
- **Algorithm Matrix**: Visual representation of operator routing
- **Modulation Matrix**: LFO and envelope routing controls
- **Effects Section**: Built-in effects processing
- **Master Section**: Global volume, tuning, and output controls

## Operator Controls

### Basic Parameters
- **Waveform**: Sine, triangle, sawtooth, square, noise
- **Ratio**: Frequency multiplier relative to note pitch
- **Fixed**: Absolute frequency independent of pitch
- **Level**: Output volume
- **Pan**: Stereo positioning
- **Fine**: Detuning adjustment

### Envelope Parameters
- **Attack**: Time to reach peak level
- **Decay**: Time to reach sustain level
- **Sustain**: Level during key hold
- **Release**: Time to fade to silence
- **Velocity**: Velocity sensitivity

### Modulation Parameters
- **FM Level**: Frequency modulation depth
- **AM Level**: Amplitude modulation depth
- **Sync**: Hard/soft sync mode
- **Phase**: Initial phase offset
- **Key Scale**: Key tracking amount

## Algorithm Matrix

### Algorithm Types
- **1-Operator**: Simple sine wave
- **2-Operator**: Basic FM with one modulator
- **3-Operator**: Complex FM with multiple modulators
- **4-Operator**: Rich FM with parallel carriers
- **5-Operator**: Advanced FM with feedback loops
- **6-Operator**: Complex FM with multiple routings
- **7-Operator**: Maximum complexity FM
- **8-Operator**: Full FM synthesis capabilities

### Matrix Visualization
- **Green**: Carrier operators
- **Blue**: Modulator operators
- **Gray**: Inactive operators
- **Lines**: Modulation connections
- **Numbers**: Operator indices

## Modulation Matrix

### LFO Sources
- **LFO1**: Slow modulation for vibrato, tremolo
- **LFO2**: Fast modulation for FM depth
- **LFO3**: Random modulation for texture
- **LFO4**: Step sequencer for rhythmic modulation

### Envelope Sources
- **Env1**: Amplitude envelope
- **Env2**: FM depth envelope
- **Env3**: Filter envelope
- **Env4**: Pitch envelope

### Modulation Destinations
- **Frequency**: Operator pitch
- **Level**: Operator volume
- **Pan**: Stereo position
- **FM Depth**: Modulation index
- **Filter Cutoff**: Filter frequency
- **Resonance**: Filter resonance

## Effects Processing

### Built-in Effects
- **Chorus**: Stereo widening effect
- **Phaser**: Phase shifting effect
- **Delay**: Echo effect with feedback
- **Reverb**: Spatial simulation
- **Distortion**: Harmonic saturation
- **EQ**: 3-band equalization

### Effect Parameters
- **Chorus**: Rate, depth, feedback, mix
- **Phaser**: Rate, depth, feedback, stages
- **Delay**: Time, feedback, filter, mix
- **Reverb**: Size, decay, damping, mix
- **Distortion**: Drive, tone, output
- **EQ**: Low, mid, high gain and frequency

## Master Controls

### Global Parameters
- **Volume**: Master output level
- **Tuning**: Global pitch adjustment
- **Portamento**: Glide time between notes
- **Unison**: Voice layering for thickness
- **Polyphony**: Maximum simultaneous voices

### Performance Controls
- **Legato**: Continuous note playing
- **Glide**: Pitch bending between notes
- **Mono**: Single voice mode
- **Retrigger**: Envelope retriggering
- **Priority**: Note priority mode

## MIDI Implementation

### Control Change Messages
- **CC1**: Modulation wheel
- **CC7**: Volume
- **CC10**: Pan
- **CC64**: Sustain pedal
- **CC91**: Reverb send
- **CC93**: Chorus send

### Pitch Bend
- **Range**: Pitch bend range in semitones
- **Sensitivity**: Pitch bend response curve
- **Reset**: Return to center position

### Aftertouch
- **Channel**: Channel pressure
- **Poly**: Polyphonic aftertouch
- **Routing**: Aftertouch destination mapping

## Voice Architecture

### Voice Components
- **Oscillators**: 8 FM operators per voice
- **Filters**: Multi-mode filter per voice
- **Envelopes**: 4 envelopes per voice
- **LFOs**: 4 LFOs per voice
- **Effects**: Shared effects per instance

### Voice Modes
- **Poly**: Multiple simultaneous voices
- **Mono**: Single voice at a time
- **Legato**: Continuous note playing
- **Retrigger**: Envelope reset on each note

## CPU and Memory Usage

### Performance Optimization
- **Operator Count**: Reduce active operators
- **Algorithm Complexity**: Simplify routing
- **Effects Usage**: Disable unused effects
- **Polyphony Limit**: Set appropriate voice count
- **Sample Rate**: Match project settings

### Memory Requirements
- **Preset Storage**: Preset data size
- **Audio Buffer**: Real-time processing needs
- **Plugin Instance**: Memory per instance

## Preset Management

### Preset Categories
- **Bass**: Sub-bass, mid-bass, lead bass
- **Lead**: Synth leads, plucks, stabs
- **Pad**: Atmospheric, evolving textures
- **Percussion**: Drums, effects, hits
- **FX**: Sound effects, transitions

### Preset Operations
- **Load**: Load preset from library
- **Save**: Save current settings as preset
- **Copy**: Copy preset to clipboard
- **Paste**: Paste preset from clipboard
- **Delete**: Remove preset from library

## Integration with FL Studio

### Channel Rack Integration
- **Pattern**: Pattern-based sequencing
- **Automation**: Parameter automation clips
- **Effects**: Insert effects chain
- **Mixer**: Channel routing and mixing

### Piano Roll Integration
- **Notes**: Note input and editing
- **Velocity**: Note velocity editing
- **Automation**: Parameter automation
- **Controller**: MIDI controller data

### Mixer Integration
- **Insert**: Channel insert slot
- **Send**: Auxiliary send routing
- **Routing**: Audio routing options
- **Processing**: Insert effects chain

## Troubleshooting

### Common Issues
- **No Sound**: Check audio routing and levels
- **Clipping**: Reduce output levels
- **Tuning Issues**: Check ratio and fixed frequency settings
- **CPU Overload**: Reduce polyphony or effects
- **MIDI Problems**: Check MIDI routing and channels

### Performance Tips
- **Freeze**: Render to audio when possible
- **Optimize**: Use simpler algorithms for complex sounds
- **Monitor**: Watch CPU usage in performance mode
- **Buffer**: Adjust audio buffer size for stability

## Advanced Features

### Expert Mode
- **Hidden Parameters**: Access advanced controls
- **Custom Algorithms**: Create user algorithms
- **Modulation Routing**: Advanced modulation matrix
- **Voice Editing**: Per-voice parameter control

### Scripting Support
- **MIDI Scripts**: Custom MIDI processing
- **Parameter Scripts**: Automated parameter control
- **Event Scripts**: Custom event handling
- **UI Scripts**: Custom interface elements

## Version History

### Current Version
- **Version**: Latest release version
- **Date**: Release date
- **Features**: New features and improvements
- **Bug Fixes**: Resolved issues

### Previous Versions
- **Version History**: List of previous releases
- **Change Log**: Detailed change information
- **Compatibility**: Version compatibility notes

## Technical Specifications

### Audio Specifications
- **Sample Rate**: 44.1kHz - 192kHz
- **Bit Depth**: 32-bit floating point
- **Latency**: Low latency mode available
- **Processing**: Real-time audio processing

### System Requirements
- **OS**: Windows 10 or later
- **CPU**: Intel Core i3 or equivalent
- **RAM**: 4GB minimum, 8GB recommended
- **Disk Space**: 100MB for installation

## Support and Documentation

### Resources
- **Manual**: Comprehensive user manual
- **Tutorials**: Video and text tutorials
- **Forum**: User community forum
- **Support**: Technical support contact

### Learning Materials
- **Videos**: Tutorial and demonstration videos
- **Articles**: In-depth technical articles
- **Examples**: Preset examples and templates
- **Workshops**: Online workshops and classes

## Conclusion
Toxic Biohazard provides a comprehensive FM synthesis environment with advanced features for professional sound design. Understanding the technical architecture enables users to maximize the plugin's capabilities and create unique, high-quality sounds for modern music production.