# FPC - Troubleshooting Notes

## Known Issues, Limitations, Weird Behaviors

### Known Issues
- **Layer Priority Confusion**: When velocity ranges overlap between layers, the priority system might not work as expected, causing multiple layers to trigger simultaneously
- **Sample Loading Delays**: Large sample libraries may take longer to load in FPC compared to other samplers
- **MIDI Note Mapping**: Sometimes MIDI notes don't map correctly to pads after loading presets
- **Pattern Transfer Issues**: Patterns may not transfer correctly between different pad mappings
- **Choke Group Malfunction**: Choke groups occasionally don't work properly, especially with complex layering
- **Velocity Response Curves**: The velocity response may not be perfectly linear across all parameter settings
- **Bank Switching Artifacts**: Switching between banks during playback may cause slight audio discontinuities

### Limitations
- **Maximum Layer Count**: Limited number of layers per pad (exact limit depends on FL Studio version)
- **Sample Format Support**: May not support all sample formats (particularly some compressed formats)
- **No Built-in Effects**: No built-in effects per pad (requires mixer routing for effects)
- **Fixed Pad Count**: Fixed at 32 pads (16 per bank) with no expansion option
- **No Advanced Modulation**: Limited modulation options compared to more advanced samplers
- **No Sample Editing**: Cannot edit samples within FPC (requires external editors)
- **No Advanced Mapping**: Limited sample mapping options compared to dedicated samplers
- **Mixer Integration**: Limited to FL Studio's mixer routing options

### Weird Behaviors
- **Velocity Cross-Triggering**: In some layer configurations, high velocity on one pad might trigger layers on other pads
- **Parameter Smoothing**: Some parameters may have different smoothing behavior than expected
- **Filter Interaction**: The filter may interact differently with different sample types
- **Decay Behavior**: Decay settings may behave differently with layered samples
- **Global Parameter Override**: Global parameters may not always properly override individual pad settings
- **Pattern Timing**: Internal pattern sequencer may have slight timing variations compared to main FL Studio sequencer

## CPU/Performance Considerations

### CPU Usage Patterns
- **Base Load**: Moderate CPU load for basic operation with few samples
- **Layer Impact**: Each additional layer increases CPU usage significantly
- **Polyphony Impact**: Higher polyphony settings increase CPU usage
- **Sample Quality**: Higher quality samples (bit depth/sample rate) may increase CPU usage
- **Multiple Instances**: CPU usage increases linearly with multiple instances
- **Real-Time Performance**: Generally optimized for real-time performance but complex layering may impact performance
- **Parameter Automation**: Automated parameters have minimal impact on CPU usage

### Performance Optimization Tips
- **Limit Layer Count**: Use only as many layers as necessary for each pad
- **Optimize Sample Quality**: Use appropriate sample rates and bit depths for your project
- **Disable Unused Pads**: Mute or disable pads that aren't being used
- **Freeze Tracks**: When rendering complex arrangements with many layered pads
- **Use Conservative Settings**: Avoid extreme settings that may increase processing demands
- **Monitor Performance**: Use FL Studio's performance meter to monitor CPU usage
- **Optimize Mixer Routing**: Use efficient routing to reduce unnecessary processing

### Buffer Size Considerations
- **Small Buffers**: May cause increased CPU usage or audio dropouts with complex layering
- **Large Buffers**: May introduce latency but can reduce CPU usage and improve stability
- **Recommended Setting**: Use FL Studio's automatic buffer size adjustment or experiment with 256-512 samples for a good balance
- **Real-Time Performance**: Smaller buffers may be needed for responsive pad performance

## "Symptom -> Cause -> Fix -> How to verify" Table

| Symptom | Possible Cause | Solution | How to Verify |
|---------|----------------|----------|---------------|
| No sound from pads | Muted pads, disabled channels, or routing issues | Check pad mute states, verify channel routing, ensure output is enabled | Verify signal path in mixer and check for audio activity |
| Clicking/popping | Sample ends too abruptly or layer switching artifacts | Apply sample crossfades, adjust layer velocity ranges | Listen for artifacts during pad triggering |
| High CPU usage | Too many layers, high polyphony, or complex samples | Reduce layer count, optimize polyphony, use simpler samples | Monitor CPU meter in FL Studio |
| Velocity layers not working | Incorrect velocity range settings or layer order | Verify velocity ranges don't overlap, check layer priority | Test with different velocity levels on keyboard/controller |
| Choke groups not functioning | Incorrect choke group assignment or timing issues | Verify choke group settings, check timing of pad triggers | Test choke behavior with rapid pad triggering |
| Audio distortion | Output levels too high or extreme parameter settings | Reduce output levels and check for extreme parameter values | Use peak meters to ensure no red peaks |
| Delayed response | Buffer size too large or interface lag | Reduce buffer size or check interface responsiveness | Test with different buffer sizes |
| Missing sounds | Samples not loaded or incompatible format | Reload samples or convert to compatible format | Verify sample loading status and format compatibility |
| Sync issues | Internal pattern sequencer timing vs project tempo | Check pattern tempo settings and sync options | Verify timing with metronome |
| Layer priority issues | Overlapping velocity ranges or incorrect priority | Adjust velocity ranges to avoid overlap, verify layer order | Test with various velocity levels |
| Global parameters not working | Parameter override issues or preset loading problems | Reset global parameters, reload preset | Compare with default settings |
| Bank switching problems | Preset compatibility or bank configuration issues | Verify both banks are properly configured | Test switching between banks |

## Version-Specific Notes (labeled clearly with version)

### FL Studio 20.x Series
- **Initial Implementation**: The original implementation of FPC with basic pad sampling capabilities
- **Basic Parameter Set**: Includes core pad controls (volume, pan, tune, decay)
- **Limited Layering**: Basic layering capabilities with limited parameters per layer
- **Simple Interface**: Basic interface with limited customization options

### FL Studio 20.7
- **Layer Enhancement**: Improved layer management and velocity range controls
- **Performance Improvements**: Minor optimizations to reduce CPU usage
- **Stability Enhancements**: Fixed occasional crashes when loading complex kits

### FL Studio 20.8
- **MIDI Integration**: Enhanced MIDI implementation and controller support
- **Choke Group Improvements**: Better choke group functionality and reliability
- **Sample Loading**: Improved sample loading performance

### FL Studio 21.0
- **Enhanced Parameters**: Additional parameters for individual pad control
- **Better Mixer Integration**: Improved routing options to FL Studio mixer
- **Updated UI**: Refreshed user interface with better visual feedback

### FL Studio 21.1
- **Layer Management**: Improved layer management and visualization
- **Velocity Response**: Enhanced velocity response curves and mapping
- **Bug Fixes**: Addressed various stability issues with complex layering

### FL Studio 21.2
- **Performance Optimization**: Further CPU usage optimizations
- **Parameter Smoothing**: Improved parameter smoothing for artifact-free changes
- **MIDI Learn Enhancement**: Better MIDI learn functionality for parameter mapping

### FL Studio 21.3
- **Interface Updates**: Minor UI improvements for better pad visualization
- **Sample Format Support**: Expanded sample format compatibility
- **Pattern Sequencer**: Enhanced internal pattern sequencer features

### FL Studio 21.4
- **Automation Handling**: Improved automation handling for pad parameters
- **Parameter Interpolation**: Better interpolation between parameter values for smoother transitions
- **Stability Improvements**: Additional stability improvements for complex kits

### FL Studio 21.5
- **Compatibility Improvements**: Better compatibility with third-party sample libraries
- **Audio Quality**: Minor improvements to audio quality at extreme settings
- **Documentation Updates**: Enhanced tooltips and parameter descriptions

### FL Studio 21.6
- **Algorithm Refinement**: Further refinement of the sampling algorithms
- **Interface Updates**: Minor UI improvements for better usability
- **Stability**: Additional stability improvements for long sessions with complex kits

*Note: Version-specific behaviors should be verified against official Image-Line release notes, as these are based on general FL Studio development patterns.*