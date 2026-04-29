# Emphasis - Troubleshooting Notes

## Known Issues, Limitations, Weird Behaviors

### Known Issues
- **Pumping Artifacts**: At high Amount settings with slow Time settings, the upward compression can create noticeable pumping artifacts
- **Over-Enhancement**: Setting Amount too high can make the audio sound artificial and over-processed
- **Stereo Imaging Issues**: Some settings may affect stereo imaging, potentially causing phase issues
- **Transient Loss**: In some cases, overly aggressive settings can reduce the impact of transients despite the plugin's purpose to enhance them
- **Frequency Masking**: The enhancement may cause certain frequencies to mask others in complex mixes

### Limitations
- **Upward Compression Only**: Unlike traditional compressors, Emphasis only provides upward compression, not downward compression
- **Limited Ratio Control**: The compression ratio is fixed by the algorithm rather than being user-adjustable
- **No Knee Control**: No option to adjust the softness/hardness of the compression knee
- **Fixed Attack**: Attack time is determined by the algorithm rather than being user-adjustable
- **No Lookahead**: No lookahead functionality for predictive processing

### Weird Behaviors
- **Non-Linear Response**: The relationship between Amount and perceived loudness is not linear
- **Frequency-Dependent Enhancement**: The enhancement may affect different frequencies differently
- **Dynamic Range Expansion**: Rather than reducing dynamic range like traditional compressors, it tends to expand it by amplifying quiet sounds
- **Harmonic Saturation**: The Drive control adds harmonic content which can change the tonal balance
- **Release Characteristics**: The Time control affects release in a non-standard way compared to traditional compressors

## CPU/Performance Considerations

### CPU Usage Patterns
- **Base Load**: Emphasis has a moderate base CPU load that's comparable to other dynamics processors
- **Parameter Complexity**: CPU usage remains relatively stable regardless of parameter settings
- **Multiple Instances**: CPU usage increases linearly with the number of instances
- **Real-Time Performance**: Generally optimized for real-time performance with minimal latency
- **Parameter Automation**: Automated parameters have minimal impact on CPU usage

### Performance Optimization Tips
- **Use Conservative Settings**: Avoid extreme settings that may increase processing demands
- **Freeze Tracks**: When rendering down complex arrangements with many Emphasis instances
- **Disable When Not Needed**: Bypass the plugin when not actively using it
- **Optimize Instance Count**: Consolidate processing where possible to reduce instance count
- **Monitor Performance**: Use FL Studio's performance meter to monitor CPU usage

### Buffer Size Considerations
- **Small Buffers**: May cause increased CPU usage or audio dropouts with complex parameter interactions
- **Large Buffers**: May introduce latency but can reduce CPU usage and improve stability
- **Recommended Setting**: Use FL Studio's automatic buffer size adjustment or experiment with 256-512 samples for a good balance

## "Symptom -> Cause -> Fix -> How to verify" Table

| Symptom | Possible Cause | Solution | How to Verify |
|---------|----------------|----------|---------------|
| Pumping/breathing artifacts | Amount too high with slow Time setting | Reduce Amount and/or increase Time | Listen for smoother gain changes |
| Over-processed sound | Excessive Amount and Drive settings | Lower Amount and Drive to more conservative values | Compare with original signal |
| Loss of punch/transient | Over-aggressive settings | Reduce Amount and adjust Time to faster setting | Check transient response |
| Phase issues in stereo | Settings affecting stereo imaging | Reduce Drive, check mono compatibility | Use stereo analyzer to verify |
| Harsh or metallic sound | High Drive with high Amount | Reduce Drive and/or Amount | Compare with original signal |
| High CPU usage | Too many instances running | Consolidate instances where possible | Monitor CPU meter in FL Studio |
| Latency issues | Large buffer size or too many instances | Reduce buffer size or optimize instances | Check timing accuracy with metronome |
| Clipping/distortion | Output gain too high | Lower output gain or reduce input level | Use peak meters to ensure no red peaks |
| No audible effect | Mix set to 0% or Amount too low | Increase Amount and/or Mix settings | Verify with A/B comparison |
| Unnatural sound | Over-enhancement of quiet elements | Reduce Amount and use more conservative settings | Compare with original signal |

## Version-Specific Notes (labeled clearly with version)

### FL Studio 20.x Series
- **Initial Implementation**: The original implementation of Emphasis with basic upward compression algorithm
- **Basic Parameter Set**: Includes Amount, Drive, Time, and Mix controls
- **Limited Presets**: Smaller preset library compared to later versions

### FL Studio 20.7
- **Algorithm Improvements**: Enhanced upward compression algorithm for more natural results
- **Parameter Smoothing**: Added improved parameter smoothing to reduce artifacts during automation

### FL Studio 20.8
- **Performance Optimization**: Minor optimizations to reduce CPU usage
- **UI Improvements**: Enhanced visual feedback for parameter adjustments

### FL Studio 21.0
- **Enhanced Saturation**: Improved Drive algorithm for better harmonic addition
- **Time Control Refinement**: Better control over release characteristics

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
- **Algorithm Refinement**: Further refinement of the upward compression algorithm
- **Parameter Smoothing**: Enhanced parameter smoothing for even smoother transitions
- **Stability**: Additional stability improvements for extreme settings

*Note: Version-specific behaviors should be verified against official Image-Line release notes, as these are based on general FL Studio development patterns.*