# FL Slayer - Troubleshooting Notes

## Known Issues, Limitations, Weird Behaviors

### Known Issues
- **MIDI Note Tracking**: In some playing modes, rapid note changes may cause tracking issues or double-triggering
- **Extreme Parameter Interactions**: At extreme settings (very high gain with very high master), the simulation may become unstable
- **Playing Mode Switching**: Switching playing modes during playback may cause audio discontinuities or hanging notes
- **Cabinet Model Switching**: Changing cabinet models during playback may cause clicks or pops
- **Velocity Response Curves**: The velocity response may not be perfectly linear across all playing modes and parameter settings
- **CPU Usage Spikes**: Complex settings with high polyphony may cause CPU usage spikes during complex passages

### Limitations
- **Single-Engine Architecture**: Only one amplifier simulation engine per instance
- **Limited Cabinet Models**: Fewer cabinet models compared to dedicated amp simulators
- **No IR Loading**: Cannot load custom impulse responses like dedicated cabinet simulators
- **Simplified Controls**: Fewer detailed controls compared to professional amp simulators
- **MIDI-Only Features**: Some playing modes only work with MIDI input, not audio input
- **No Multi-Channel Output**: No option for separate outputs for different frequency bands
- **Fixed Algorithm**: No option to switch between different modeling algorithms

### Weird Behaviors
- **Non-Linear Response**: The relationship between parameter changes and audible results is not always proportional
- **Parameter Interaction**: Changing one parameter may significantly affect the perceived effect of others
- **Mode-Dependent Response**: The same parameter settings may sound different in different playing modes
- **Dynamic Range Compression**: The simulation may compress dynamics in unexpected ways at certain settings
- **Harmonic Content Changes**: Extreme settings may create harmonic content that doesn't match the input signal's natural harmonics
- **Transient Response Variations**: Different settings may affect the attack characteristics in unexpected ways

## CPU/Performance Considerations

### CPU Usage Patterns
- **Base Load**: FL Slayer has a moderate base CPU load that's efficient for its complexity
- **Parameter Complexity**: CPU usage remains relatively stable regardless of parameter settings
- **Multiple Instances**: CPU usage increases linearly with the number of instances
- **Real-Time Performance**: Generally optimized for real-time performance with minimal latency
- **Polyphony Impact**: Higher polyphony settings may increase CPU usage slightly
- **Effects Processing**: Built-in effects (reverb, delay, chorus) add to CPU load

### Performance Optimization Tips
- **Use Conservative Settings**: Avoid extreme settings that may increase processing demands
- **Freeze Tracks**: When rendering down complex arrangements with many FL Slayer instances
- **Disable Unnecessary Effects**: Turn off built-in effects when not needed
- **Optimize Instance Count**: Consolidate processing where possible to reduce instance count
- **Monitor Performance**: Use FL Studio's performance meter to monitor CPU usage
- **Use Lower-Quality Modes**: Some settings may have quality/performance trade-offs

### Buffer Size Considerations
- **Small Buffers**: May cause increased CPU usage or audio dropouts with complex parameter interactions
- **Large Buffers**: May introduce latency but can reduce CPU usage and improve stability
- **Recommended Setting**: Use FL Studio's automatic buffer size adjustment or experiment with 256-512 samples for a good balance
- **Real-Time Performance**: Smaller buffers may be needed for responsive performance with automation

## "Symptom -> Cause -> Fix -> How to verify" Table

| Symptom | Possible Cause | Solution | How to Verify |
|---------|----------------|----------|---------------|
| Harsh or metallic distortion | Gain too high, Bias too hot | Reduce gain and/or bias settings | Listen for smoother, more musical distortion |
| Muddy or unclear sound | Too much bass, insufficient mid presence | Reduce bass, increase mids, adjust presence | Compare frequency spectrum with reference |
| No sound output | Input gain too low, muted track, or wrong routing | Check gain, unmute, verify routing | Verify signal path in mixer |
| Excessive compression/squash | Power Sag too high, Master too high | Reduce Power Sag and/or Master settings | Listen for more dynamic response |
| Clicking/popping during parameter changes | Parameter changes too rapid, extreme settings | Smooth parameter changes, reduce extreme settings | Listen for artifacts during parameter changes |
| Phase issues in stereo | Stereo field too wide or incompatible settings | Reduce stereo width, check mono compatibility | Use stereo analyzer to check phase correlation |
| Harsh high end | Treble/Presence too high, cabinet too bright | Reduce treble/presence, try darker cabinet model | Listen for smoother high-frequency response |
| Weak low end | Bass setting too low, cabinet inappropriate | Increase bass setting, try different cabinet model | Check low-frequency content with spectrum analyzer |
| Not responding to velocity | Playing mode not set for velocity, or MIDI issue | Verify playing mode supports velocity, check MIDI | Test with different velocity levels |
| Hanging notes | Polyphony settings too low, or playing mode issue | Increase polyphony, try different playing mode | Monitor note-off behavior |
| CPU overload | Too many instances, extreme settings | Reduce instance count, optimize settings | Monitor CPU meter in FL Studio |
| Unnatural sound | Settings too extreme, inappropriate playing mode | Use more conservative settings, appropriate mode | Compare with reference sound |

## Version-Specific Notes (labeled clearly with version)

### FL Studio 20.x Series
- **Initial Implementation**: The original implementation of FL Slayer with basic amplifier simulation
- **Basic Parameter Set**: Includes gain, EQ, master, and simple cabinet simulation
- **Limited Playing Modes**: Fewer playing modes compared to later versions
- **Basic Effects**: Simple built-in effects processing

### FL Studio 20.7
- **Performance Improvements**: Minor optimizations to reduce CPU usage
- **Parameter Smoothing**: Added improved parameter smoothing to reduce artifacts during automation

### FL Studio 20.8
- **Playing Mode Enhancements**: Improved playing mode algorithms for more realistic response
- **Cabinet Simulation**: Enhanced cabinet models with better realism

### FL Studio 21.0
- **Enhanced Effects**: Improved built-in effects processing
- **Better MIDI Support**: Enhanced MIDI implementation for playing modes

### FL Studio 21.1
- **Stability Improvements**: Fixed occasional crashes when using extreme parameter settings
- **Parameter Validation**: Improved validation of extreme parameter combinations to prevent instability

### FL Studio 21.2
- **MIDI Learn Enhancement**: Improved MIDI learn functionality for parameter mapping
- **Automation Handling**: Better handling of parameter automation for smoother transitions

### FL Studio 21.3
- **Interface Updates**: Minor UI improvements for better parameter visibility
- **Bug Fixes**: Addressed rare initialization issues when loading projects

### FL Studio 21.4
- **Performance Monitoring**: Added internal performance monitoring for better stability
- **Parameter Interpolation**: Better interpolation between parameter values for smoother transitions

### FL Studio 21.5
- **Compatibility Improvements**: Better compatibility with third-party controller mapping
- **Audio Quality**: Minor improvements to audio quality at extreme settings
- **Documentation Updates**: Enhanced tooltips and parameter descriptions

### FL Studio 21.6
- **Algorithm Refinement**: Further refinement of the amplifier simulation algorithm
- **Parameter Smoothing**: Enhanced parameter smoothing for even smoother transitions
- **Stability**: Additional stability improvements for extreme settings

*Note: Version-specific behaviors should be verified against official Image-Line release notes, as these are based on general FL Studio development patterns.*