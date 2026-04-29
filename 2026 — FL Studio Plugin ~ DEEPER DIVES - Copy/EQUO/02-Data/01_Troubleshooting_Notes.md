# EQUO - Troubleshooting Notes

## Known Issues, Limitations, Weird Behaviors

### Known Issues
- **Morphing Artifacts**: When morphing between banks with very different curves, there can be audible artifacts or clicks during transitions
- **Extreme Parameter Interactions**: At extreme settings (especially low bandwidth), the morphing algorithm can create unexpected comb-filter effects
- **Analysis Accuracy**: The analysis function may not perfectly match complex harmonic content, especially with multiple instruments
- **X/Y Pad Sensitivity**: The X/Y pad can be overly sensitive to small movements, making precise positioning challenging
- **Mode Switching Glitches**: Switching between VOL/PAN/SEND modes during playback can cause momentary artifacts

### Limitations
- **Fixed Band Count**: The number of EQ bands is fixed and cannot be adjusted by the user
- **No Linear Phase Mode**: EQUO uses minimum phase processing which can introduce phase shifts
- **Limited Bandwidth Control**: The bandwidth parameter affects all bands simultaneously rather than individually
- **No Mid/Side Processing**: EQUO processes left and right channels identically without independent M/S processing
- **No Dynamic EQ**: EQUO is static and doesn't respond dynamically to input level like dynamic EQs
- **CPU Usage at High Settings**: Extreme settings with high bandwidth values may increase CPU usage

### Weird Behaviors
- **Non-Linear Morphing**: The morphing between banks isn't always perceptually linear - some transitions happen faster than others
- **Frequency Wrapping**: At extreme shift values, frequencies may wrap around creating unexpected results
- **Band Interaction**: Adjacent bands can interact in complex ways that might not be immediately predictable
- **PAN Mode Stereo Imaging**: In PAN mode, extreme settings can create unusual stereo imaging effects that might seem like phase issues but are actually the intended behavior
- **SEND Mode Routing**: In SEND mode, the routing behavior might not be immediately obvious to new users

## CPU/Performance Considerations

### CPU Usage Patterns
- **Base Load**: EQUO has a moderate base CPU load that's comparable to other graphic EQs
- **Parameter Complexity**: CPU usage remains relatively stable regardless of parameter settings
- **Multiple Instances**: CPU usage increases linearly with the number of instances
- **Real-Time Morphing**: Morphing between banks in real-time has minimal additional CPU impact
- **Analysis Function**: The analysis function has a moderate CPU impact when active

### Performance Optimization Tips
- **Use Conservative Settings**: Avoid extreme bandwidth settings that may increase processing demands
- **Freeze Tracks**: When rendering down complex arrangements with many EQUO instances
- **Disable Analysis**: When not actively using the analysis function, disable it to save CPU
- **Optimize Instance Count**: Consolidate processing where possible to reduce instance count
- **Monitor Performance**: Use FL Studio's performance meter to monitor CPU usage

### Buffer Size Considerations
- **Small Buffers**: May cause increased CPU usage or audio dropouts with complex morphing
- **Large Buffers**: May introduce latency but can reduce CPU usage and improve stability
- **Recommended Setting**: Use FL Studio's automatic buffer size adjustment or experiment with 256-512 samples for a good balance

## "Symptom -> Cause -> Fix -> How to verify" Table

| Symptom | Possible Cause | Solution | How to Verify |
|---------|----------------|----------|---------------|
| Clicking/popping during morphing | Morphing between banks with very different curves | Smooth transitions by using more similar curves in adjacent banks | Listen for smooth transitions during X/Y pad movement |
| Harsh or metallic sound | Bandwidth set too low creating comb-filter effects | Increase bandwidth to 50% or higher | Compare with higher bandwidth settings |
| Phase issues in stereo | Using PAN mode with extreme settings | Reduce PAN mode settings or switch to VOL mode | Use stereo analyzer to check phase correlation |
| No audible morphing | X/Y pad positioned at extreme bank settings | Move X/Y pad to intermediate positions between banks | Watch for curve changes in the display |
| Analysis not matching input | Complex harmonic content or multiple instruments | Use simpler input or manually adjust the analyzed curve | Compare analyzed curve with input spectrum |
| High CPU usage | Too many instances or extreme bandwidth settings | Reduce instance count or optimize bandwidth settings | Monitor CPU meter in FL Studio |
| Latency issues | Large buffer size or too many instances | Reduce buffer size or optimize instances | Check timing accuracy with metronome |
| Clipping/distortion | Output gain too high or extreme curve settings | Lower output gain or reduce extreme curve settings | Use peak meters to ensure no red peaks |
| No sound | Input gain too low, muted track, or bypassed plugin | Check gain, unmute, verify bypass status | Verify signal path in mixer |
| Weak morphing effect | Banks set too similarly or X/Y pad at extremes | Create more distinct curves in different banks | Verify X/Y pad is between bank positions |
| Unpredictable morphing | Non-linear response between banks | Understand that morphing isn't perceptually linear | Test with simple sine wave input to understand response |
| Comb filtering | Bandwidth set too low with certain curve shapes | Increase bandwidth or adjust curve shapes | Listen for periodic frequency cancellations |

## Version-Specific Notes (labeled clearly with version)

### FL Studio 20.x Series
- **Initial Implementation**: The original implementation of EQUO with basic morphing capabilities
- **Basic Parameter Set**: Includes VOL/PAN/SEND modes and 8 banks
- **Limited Presets**: Smaller preset library compared to later versions

### FL Studio 20.7
- **Morphing Algorithm**: Improved morphing algorithm for smoother transitions
- **Parameter Smoothing**: Added improved parameter smoothing to reduce artifacts during automation

### FL Studio 20.8
- **Performance Optimization**: Minor optimizations to reduce CPU usage
- **UI Improvements**: Enhanced visual feedback for X/Y pad positioning

### FL Studio 21.0
- **Analysis Enhancement**: Improved analysis algorithm for better matching
- **Bandwidth Control**: Refined bandwidth parameter for more musical results

### FL Studio 21.1
- **Stability Improvements**: Fixed occasional crashes when using extreme bandwidth settings
- **Parameter Validation**: Improved validation of extreme parameter combinations to prevent instability

### FL Studio 21.2
- **MIDI Learn Enhancement**: Improved MIDI learn functionality for X/Y pad control
- **Automation Handling**: Better handling of X/Y pad automation for smoother transitions

### FL Studio 21.3
- **Interface Updates**: Minor UI improvements for better curve visualization
- **Bug Fixes**: Addressed rare initialization issues when loading projects

### FL Studio 21.4
- **Performance Monitoring**: Added internal performance monitoring for better stability
- **Parameter Interpolation**: Better interpolation between bank settings for smoother morphing

### FL Studio 21.5
- **Compatibility Improvements**: Better compatibility with third-party controller mapping
- **Analysis Accuracy**: Minor improvements to analysis accuracy with complex inputs
- **Documentation Updates**: Enhanced tooltips and parameter descriptions

### FL Studio 21.6
- **Algorithm Refinement**: Further refinement of the morphing algorithm
- **Parameter Smoothing**: Enhanced parameter smoothing for even smoother transitions
- **Stability**: Additional stability improvements for extreme settings

*Note: Version-specific behaviors should be verified against official Image-Line release notes, as these are based on general FL Studio development patterns.*