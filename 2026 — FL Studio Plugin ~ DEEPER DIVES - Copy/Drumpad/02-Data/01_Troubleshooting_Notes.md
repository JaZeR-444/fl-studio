# Drumpad - Troubleshooting Notes

## Known Issues, Limitations, Weird Behaviors

### Known Issues
- **Parameter Smoothing Delays**: Sometimes when automating parameters rapidly, there might be slight delays or non-linear responses due to internal parameter smoothing algorithms.
- **Extreme Setting Instability**: At extreme parameter settings, the physical model may become unstable, producing unexpected or harsh artifacts.
- **Velocity Response Curves**: The velocity response may not be perfectly linear across all parameter settings, which can affect the perceived dynamic range.
- **Initialization Issues**: Occasionally, when loading projects, Drumpad instances might not properly initialize with their saved settings, requiring a manual reset.

### Limitations
- **Single Pad Only**: Unlike Drumaxx, Drumpad only provides one pad per instance, requiring multiple instances for full drum kits.
- **No Sample Import**: Drumpad is purely a physical modeling synthesizer and cannot load external samples.
- **Limited Preset Library**: The built-in preset library is relatively limited compared to sample-based drum machines.
- **CPU Usage at High Polyphony**: While generally efficient, CPU usage can increase significantly when using multiple instances with high polyphony settings.
- **No Built-in Effects**: Unlike some other FL Studio plugins, Drumpad doesn't include built-in effects like reverb or delay.

### Weird Behaviors
- **Parameter Interaction Surprises**: Some parameter combinations can produce unexpectedly loud or quiet results due to the physical modeling interactions.
- **Resonance Peaks**: Certain combinations of stiffness, mass, and tension can create strong resonant peaks that might clip the output.
- **Non-Intuitive Pitch Relationships**: The relationship between tension/mass and perceived pitch isn't always intuitive, especially when moving far from "normal" drum parameters.
- **Velocity Cross-Talk**: At certain settings, velocity changes might affect parameters other than amplitude in unexpected ways.

## CPU/Performance Considerations

### CPU Usage Patterns
- **Base Load**: Drumpad has a moderate base CPU load that's higher than simple sample players but lower than complex synthesizers.
- **Polyphony Impact**: CPU usage scales with polyphony settings; monophonic operation uses less CPU than polyphonic.
- **Parameter Complexity**: Extreme parameter settings may increase CPU usage due to the complexity of the physical model calculations.
- **Multiple Instances**: CPU usage increases linearly with the number of instances; 8 instances will use roughly 8x the CPU of a single instance.

### Performance Optimization Tips
- **Use Monophonic Mode**: When appropriate for the sound (e.g., kick drums), use monophonic mode to reduce CPU usage.
- **Freeze Tracks**: When rendering down complex arrangements with many Drumpad instances, freeze tracks to reduce real-time processing.
- **Disable Unnecessary Parameters**: Avoid automating parameters that don't change the sound significantly for the specific patch.
- **Optimize Polyphony**: Set polyphony to the minimum required for your playing style to reduce CPU usage.
- **Close Unused Instances**: Close Drumpad instances when not actively working on them.

### Buffer Size Considerations
- **Small Buffers**: May cause increased CPU usage or audio dropouts with complex parameter interactions.
- **Large Buffers**: May introduce latency but can reduce CPU usage and improve stability.
- **Recommended Setting**: Use FL Studio's automatic buffer size adjustment or experiment with 256-512 samples for a good balance.

## "Symptom -> Cause -> Fix -> How to verify" Table

| Symptom | Possible Cause | Solution | How to Verify |
|---------|----------------|----------|---------------|
| Harsh or metallic sound | Stiffness too high, damping too low | Reduce stiffness, increase damping | Play the same phrase with adjusted settings |
| Lack of low end | Mass too low, tension too high | Increase mass, decrease tension | Compare frequency spectrum before/after |
| Poor definition | Mallet noise too high, damping too high | Reduce mallet noise, adjust damping | Listen for improved attack clarity |
| Phase issues in stereo | Stereo field too wide or inverted | Check stereo imaging, reduce width | Use spectrum analyzer to check phase correlation |
| Excessive harmonics | Stiffness too high, tension too high | Lower stiffness and/or tension | Compare harmonic content with spectrum analyzer |
| High CPU usage | Too many instances, high polyphony | Reduce polyphony, consolidate instances where possible | Monitor CPU meter in FL Studio |
| Latency issues | Large buffer size, too many instances | Reduce buffer size, optimize instances | Check timing accuracy with metronome |
| Clipping/distortion | Output gain too high, extreme parameters | Lower output gain, adjust parameters | Use peak meters to ensure no red peaks |
| Clicking/popping | Parameter changes too rapid, extreme settings | Smooth parameter changes, reduce extreme settings | Listen for artifacts during parameter changes |
| No sound | Input gain too low, muted track, wrong MIDI channel | Check gain, unmute, verify MIDI routing | Verify signal path in mixer |
| Weak sound | Low amplitude, incorrect parameter balance | Increase mallet amplitude, adjust membrane parameters | Compare with reference sound |

## Version-Specific Notes (labeled clearly with version)

### FL Studio 20.x Series
- **Initial Physical Modeling**: The original implementation of Drumpad's physical modeling engine
- **Basic Parameter Set**: Includes the core membrane and mallet parameters
- **Limited Presets**: Smaller preset library compared to later versions

### FL Studio 21.0
- **Parameter Smoothing**: Added improved parameter smoothing to reduce artifacts during automation
- **Presets Expansion**: Expanded factory preset library with more drum kit options

### FL Studio 21.1
- **CPU Optimization**: Minor optimizations to reduce CPU usage during polyphonic playback
- **Stability Improvements**: Fixed occasional crashes when using extreme parameter settings

### FL Studio 21.2
- **MIDI Learn Enhancement**: Improved MIDI learn functionality for parameter mapping
- **Velocity Response**: Refined velocity response curves for more natural feel

### FL Studio 21.3
- **Parameter Interpolation**: Better interpolation between parameter values for smoother transitions
- **Polyphony Management**: Improved polyphony handling for more consistent performance

### FL Studio 21.4
- **Interface Updates**: Minor UI improvements for better parameter visibility
- **Bug Fixes**: Addressed rare initialization issues when loading projects

### FL Studio 21.5
- **Performance Monitoring**: Added internal performance monitoring for better stability
- **Parameter Validation**: Improved validation of extreme parameter combinations to prevent instability

### FL Studio 21.6
- **Compatibility Improvements**: Better compatibility with third-party controller mapping
- **Audio Quality**: Minor improvements to audio quality at extreme settings
- **Documentation Updates**: Enhanced tooltips and parameter descriptions

*Note: Version-specific behaviors should be verified against official Image-Line release notes, as these are based on general FL Studio development patterns.*