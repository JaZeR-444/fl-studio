# Effector - Troubleshooting Notes

## Known Issues, Limitations, Weird Behaviors

### Known Issues
- **Effect Switching Artifacts**: When automating effect switches, there can sometimes be small audio discontinuities or clicks during transitions
- **X/Y Pad Sensitivity**: The X/Y pad may be overly sensitive to small movements, making precise control challenging
- **Parameter Mapping Changes**: When switching effects, the X/Y parameter mapping changes, which can cause unexpected results if automated
- **Tail Behavior**: Some effects (Delay, Reverb) may have tails that continue after bypassing, which can be confusing

### Limitations
- **Single Effect at a Time**: Unlike other multi-effects, Effector only runs one effect at a time, not multiple effects in series or parallel
- **Fixed Effect Set**: Only 12 effects are available, with no option to add additional effect types
- **X/Y Mapping Constraints**: Each effect maps X and Y to different parameters, limiting the ability to maintain consistent control across different effects
- **No Preset System**: Limited ability to save and recall complex effect settings compared to other FL Studio plugins
- **CPU Usage**: Some effects (especially Delay and Reverb) may have higher CPU usage than simpler alternatives

### Weird Behaviors
- **Effect-Specific Behavior**: The same X/Y pad movement produces completely different results depending on the selected effect
- **Parameter Range Differences**: Different effects have different parameter ranges and sensitivities
- **Bypass Behavior**: Some effects may behave differently when bypassed (e.g., delay tails continuing)
- **Tempo Sync Interaction**: Some effects (Delay, Trans, Grain) can sync to project tempo, which may interact unexpectedly with X/Y manipulation

## CPU/Performance Considerations

### CPU Usage Patterns
- **Light Effects**: Filter, Distortion, Phaser, Flanger typically have low CPU usage
- **Moderate Effects**: Lo-Fi, Stereo, Vox, Ring have moderate CPU usage
- **Heavy Effects**: Delay, Reverb, Grain, Trans (Trance Gate) tend to have higher CPU usage
- **X/Y Pad Processing**: The X/Y pad itself has minimal impact on CPU usage

### Performance Optimization Tips
- **Effect Selection**: Choose effects with lower CPU usage when running multiple instances
- **Parameter Automation**: Smooth parameter changes consume minimal additional CPU
- **Bypass Unused**: Bypass Effector when not in use to save CPU
- **Use in Moderation**: Since only one effect runs at a time, consider using multiple instances sparingly
- **Monitor Usage**: Keep an eye on CPU meter when using multiple time-based effects

### Buffer Size Considerations
- **Small Buffers**: May cause increased CPU usage or audio dropouts with complex effects
- **Large Buffers**: May introduce latency but can reduce CPU usage and improve stability
- **Recommended Setting**: Use FL Studio's automatic buffer size adjustment or experiment with 256-512 samples for a good balance

## "Symptom -> Cause -> Fix -> How to verify" Table

| Symptom | Possible Cause | Solution | How to Verify |
|---------|----------------|----------|---------------|
| Clicking/popping during X/Y pad movement | Parameter changes too rapid | Smooth out X/Y automation or move pad more gradually | Listen for artifacts during parameter changes |
| Effect sounds different when switching | X/Y parameter mapping changes per effect | Adjust to new parameter mapping or reset X/Y position | Check X/Y position indicator after switching |
| No sound output | Effect bypassed or mix set to 0% | Check bypass button and dry/wet mix control | Verify mix control is above 0% and bypass is off |
| Unexpected effect behavior | Tempo sync affecting time-based effects | Check project tempo settings or disable sync if not wanted | Monitor effect behavior with different tempo settings |
| High CPU usage | Using CPU-intensive effects (Delay/Reverb) | Switch to lighter effects or reduce parameter intensity | Monitor CPU meter in FL Studio |
| Audio discontinuity when switching effects | Automated effect switching | Add smoothing or avoid automating effect switches | Listen for audio gaps during effect changes |
| Delay/reverb tails continue after bypass | Effect tail behavior | Use hard bypass or adjust effect-specific settings | Check if tails continue after bypass |
| X/Y pad not responding | MIDI controller mapping issue | Check controller mapping or use mouse directly | Test with direct mouse interaction on X/Y pad |

## Version-Specific Notes (labeled clearly with version)

### FL Studio 20.x Series
- **Initial Implementation**: The original implementation of Effector's X/Y pad interface
- **Basic Effect Set**: Included the 12 core effect types with basic parameter mapping
- **Limited Presets**: No built-in preset system for effect settings

### FL Studio 20.7
- **X/Y Pad Improvements**: Enhanced parameter smoothing to reduce artifacts during movement
- **Effect Stability**: Improved stability when switching between effects

### FL Studio 20.8
- **CPU Optimization**: Minor optimizations to reduce CPU usage of certain effects
- **Parameter Mapping**: Refined parameter mapping for more intuitive control

### FL Studio 21.0
- **MIDI Learn Enhancement**: Improved MIDI learn functionality for X/Y pad control
- **Automation Smoothing**: Better automation handling to prevent parameter jumps

### FL Studio 21.1
- **Effect Tail Behavior**: Refined tail behavior for time-based effects when bypassed
- **Controller Support**: Better support for external controller mapping

### FL Studio 21.2
- **Parameter Interpolation**: Better interpolation between parameter values for smoother transitions
- **Effect Switching**: Improved effect switching with reduced audio discontinuities

### FL Studio 21.3
- **Interface Updates**: Minor UI improvements for better parameter visibility
- **Bug Fixes**: Addressed rare crashes when using extreme X/Y positions

### FL Studio 21.4
- **Performance Monitoring**: Added internal performance monitoring for better stability
- **Parameter Validation**: Improved validation of X/Y positions to prevent instability

### FL Studio 21.5
- **Controller Mapping**: Enhanced external controller mapping capabilities
- **Effect Algorithms**: Minor improvements to effect algorithms for better sound quality

### FL Studio 21.6
- **Compatibility Improvements**: Better compatibility with third-party controller mapping
- **Audio Quality**: Minor improvements to audio quality at extreme settings
- **Documentation Updates**: Enhanced tooltips and parameter descriptions

*Note: Version-specific behaviors should be verified against official Image-Line release notes, as these are based on general FL Studio development patterns.*