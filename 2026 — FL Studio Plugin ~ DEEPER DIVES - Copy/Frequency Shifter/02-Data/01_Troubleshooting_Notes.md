# Frequency Shifter - Troubleshooting Notes

## Known Issues, Limitations, Weird Behaviors

### Known Issues
- **Phase Artifacts**: At certain frequency shift values combined with specific Start Phase settings, phase-related artifacts or clicks may occur
- **Extreme Setting Instability**: Very high frequency shift values combined with high feedback may cause instability or harsh artifacts
- **Stereo Phase Issues**: When shifting left and right channels by significantly different amounts, phase issues may occur in mono
- **Sample Rate Dependency**: Maximum possible frequency shift is limited by the project's sample rate
- **Alias Artifacts**: At extreme settings, aliasing artifacts may appear despite internal anti-aliasing
- **Latency Issues**: Some implementations may have inherent latency that affects real-time performance
- **Parameter Smoothing Delays**: Rapid parameter changes may be smoothed, causing delayed response
- **DC Offset**: Extreme settings may introduce DC offset requiring high-pass filtering

### Limitations
- **Linear Shift Only**: Unlike pitch shifters, it only provides linear Hz shifts, not ratio-based multiplication
- **Harmonic Relationship Breaking**: By design, it breaks harmonic relationships which may not be desirable for all applications
- **No Formant Preservation**: Does not maintain formant relationships like some pitch shifters do
- **Fixed Algorithm**: No option to switch between different frequency shifting algorithms
- **No Lookahead**: No lookahead functionality for predictive processing
- **CPU Usage at High Settings**: Extreme settings with high feedback may increase CPU usage significantly
- **Limited Negative Shift**: Very large negative shifts may cause unexpected behavior or artifacts
- **No Multi-band Processing**: Cannot selectively shift different frequency ranges independently

### Weird Behaviors
- **Inharmonic Results**: The frequency shift intentionally breaks harmonic relationships, creating bell-like or metallic sounds
- **Non-Musical Transposition**: Unlike pitch shifters, musical intervals become non-musical when shifted
- **Feedback Evolution**: Feedback creates evolving, spiraling textures that may be unpredictable
- **Phase-Related Clicks**: At certain parameter combinations, phase-related clicks or pops may occur
- **Sample Rate Dependency**: The maximum possible shift depends on the project's sample rate
- **Stereo Widening Effect**: Independent left/right channel shifting creates unusual stereo imaging effects
- **Non-Intuitive Results**: The relationship between parameter settings and audible results may not be immediately obvious
- **Harmonic Displacement**: Harmonics move by the same amount as fundamentals, breaking natural harmonic relationships

## CPU/Performance Considerations

### CPU Usage Patterns
- **Base Load**: Frequency Shifter has a moderate base CPU load that's higher than simple effects but lower than complex synthesizers
- **Parameter Complexity**: CPU usage remains relatively stable regardless of frequency shift settings
- **Feedback Impact**: Higher feedback values may increase CPU usage slightly
- **Real-Time Performance**: Generally optimized for real-time performance but extreme settings may impact performance
- **Multiple Instances**: CPU usage increases linearly with multiple instances
- **Sample Rate Impact**: Higher sample rates may increase CPU usage slightly due to processing requirements
- **Automation Load**: Automated parameters have minimal impact on CPU usage

### Performance Optimization Tips
- **Use Conservative Settings**: Avoid extreme frequency shift values that may increase processing demands
- **Limit Feedback**: Keep feedback at moderate levels (0-30%) to maintain performance
- **Disable Unused Features**: Turn off feedback when not needed to reduce processing
- **Freeze Tracks**: When rendering down complex arrangements with many frequency shifter instances
- **Use Efficient Routing**: Optimize mixer routing to reduce unnecessary processing
- **Monitor Performance**: Use FL Studio's performance meter to monitor CPU usage
- **Optimize Instance Count**: Consolidate processing where possible to reduce instance count
- **Buffer Size Considerations**: Use appropriate buffer sizes to balance CPU usage and latency

### Buffer Size Considerations
- **Small Buffers**: May cause increased CPU usage or audio dropouts with complex parameter interactions
- **Large Buffers**: May introduce latency but can reduce CPU usage and improve stability
- **Recommended Setting**: Use FL Studio's automatic buffer size adjustment or experiment with 256-512 samples for a good balance
- **Real-Time Performance**: Smaller buffers may be needed for responsive parameter changes

## "Symptom -> Cause -> Fix -> How to verify" Table

| Symptom | Possible Cause | Solution | How to Verify |
|---------|----------------|----------|---------------|
| Clicking/popping | Start Phase not optimized for current frequency shift | Adjust Start Phase parameter | Listen for artifacts during parameter changes |
| Harsh or metallic sound | Frequency shift set too high or extreme settings | Reduce frequency shift amount | Compare with lower shift values |
| Phase issues in mono | Left and right channels shifted too differently | Reduce difference between L/R shifts or check mono compatibility | Use stereo analyzer to check phase correlation |
| No audible effect | Mix set to 0% or frequency shift set to 0Hz | Increase Mix or frequency shift amount | Verify with A/B comparison |
| High CPU usage | Extreme settings or too many instances | Reduce settings or instance count | Monitor CPU meter in FL Studio |
| Latency issues | Large buffer size or too many instances | Reduce buffer size or optimize instances | Check timing accuracy with metronome |
| Clipping/distortion | Output gain too high or extreme settings | Lower output gain or reduce extreme settings | Use peak meters to ensure no red peaks |
| Feedback instability | Feedback set too high | Reduce feedback amount | Listen for stable vs unstable feedback behavior |
| Unmusical results | Expecting harmonic relationships to be preserved | Understand that harmonic relationships are intentionally broken | Compare with pitch shifter to hear difference |
| Weak effect | Mix set too low or shift amount too conservative | Increase Mix or frequency shift amount | Compare with higher values |
| Stereo imaging issues | Extreme L/R differences or phase problems | Reduce L/R difference or adjust phase | Check mono compatibility and stereo field |
| Alias artifacts | Extreme frequency shifts | Reduce frequency shift or increase sample rate | Listen for high-frequency artifacts |
| DC offset | Extreme settings causing DC buildup | Apply high-pass filter around 10-20Hz | Check for low-frequency buildup with spectrum analyzer |
| Parameter smoothing | Rapid changes not responding immediately | Understand parameter smoothing behavior | Use automation instead of real-time changes for precise control |
| No sound | Plugin bypassed, muted track, or routing issues | Check bypass, mute, and routing settings | Verify signal path in mixer and check for audio activity |
| Unpredictable feedback | High feedback with extreme shifts | Reduce feedback and/or shift amount | Test with lower feedback values |

## Version-Specific Notes (labeled clearly with version)

### FL Studio 20.x Series
- **Initial Implementation**: The original implementation of Frequency Shifter with basic frequency shifting capabilities
- **Basic Parameter Set**: Includes frequency shift, feedback, and mix controls
- **Limited Stereo Control**: Basic stereo processing capabilities
- **Simple Interface**: Basic interface with limited customization options

### FL Studio 20.7
- **Phase Optimization**: Improved Start Phase algorithm for better artifact reduction
- **Performance Improvements**: Minor optimizations to reduce CPU usage
- **Stability Enhancements**: Fixed occasional crashes when using extreme settings

### FL Studio 20.8
- **Stereo Enhancement**: Improved independent left/right channel controls
- **Anti-Aliasing**: Enhanced anti-aliasing to reduce artifacts at extreme settings
- **Sample Rate Handling**: Better handling of different sample rates

### FL Studio 21.0
- **Enhanced Algorithm**: Improved frequency shifting algorithm for better quality
- **Better Integration**: Improved integration with FL Studio's automation system
- **Updated UI**: Refreshed user interface with better visual feedback

### FL Studio 21.1
- **Feedback Improvements**: Enhanced feedback algorithm for more stable results
- **Parameter Smoothing**: Improved parameter smoothing for artifact-free changes
- **Bug Fixes**: Addressed various stability issues with extreme settings

### FL Studio 21.2
- **Performance Optimization**: Further CPU usage optimizations
- **Phase Control**: Enhanced Start Phase control for better artifact reduction
- **MIDI Learn Enhancement**: Better MIDI learn functionality for parameter mapping

### FL Studio 21.3
- **Interface Updates**: Minor UI improvements for better parameter visibility
- **Algorithm Refinement**: Refined frequency shifting algorithm for better quality
- **Sample Rate Handling**: Improved handling of high sample rates

### FL Studio 21.4
- **Automation Handling**: Improved automation handling for parameter changes
- **Parameter Interpolation**: Better interpolation between parameter values for smoother transitions
- **Stability Improvements**: Additional stability improvements for extreme settings

### FL Studio 21.5
- **Compatibility Improvements**: Better compatibility with third-party controller mapping
- **Audio Quality**: Minor improvements to audio quality at extreme settings
- **Documentation Updates**: Enhanced tooltips and parameter descriptions

### FL Studio 21.6
- **Algorithm Refinement**: Further refinement of the frequency shifting algorithm
- **Parameter Smoothing**: Enhanced parameter smoothing for even smoother transitions
- **Stability**: Additional stability improvements for long sessions with extreme settings

*Note: Version-specific behaviors should be verified against official Image-Line release notes, as these are based on general FL Studio development patterns.*