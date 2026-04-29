# FL Studio Mobile Rack - Troubleshooting Notes

## Known Issues, Limitations, Weird Behaviors

### Known Issues
- **Module Initialization**: Sometimes modules may not initialize properly when loading projects, showing incorrect parameters or no sound
- **Module Compatibility**: Some mobile modules may not work correctly when chained together in certain orders
- **Parameter Automation Jumps**: When automating module parameters, there may be jumps when switching between modules
- **Module Loading Delays**: Adding multiple modules quickly may cause temporary interface freezes
- **Rack State Corruption**: Rarely, the rack state may become corrupted when saving/loading projects
- **CPU Spikes**: Certain module combinations may cause unexpected CPU usage spikes

### Limitations
- **Mobile-Only Modules**: Only works with FL Studio Mobile-specific modules, not desktop modules
- **Limited Module Count**: Maximum of 8 modules per rack instance
- **No Preset Per Module**: Cannot save/load presets for individual modules within the rack
- **Fixed Module Order**: While reorderable, complex automation of module order changes is not possible
- **No Module Presets**: Cannot save/load presets for specific module combinations
- **Mobile Algorithm Limitations**: Uses mobile algorithms which may have fewer features than desktop equivalents
- **No Advanced Routing**: Limited routing options between modules compared to desktop effects

### Weird Behaviors
- **Module Interaction**: Some modules may interact unexpectedly when placed in sequence
- **Parameter Range Differences**: Different modules may have different parameter ranges and behaviors
- **Signal Level Changes**: Adding/removing modules may cause unexpected level changes
- **Processing Order Sensitivity**: Some module combinations are very sensitive to processing order
- **Bypass Artifacts**: Bypassing modules may cause slight audio artifacts or DC offsets
- **Module State Persistence**: Module states may not always persist correctly across project reloads

## CPU/Performance Considerations

### CPU Usage Patterns
- **Base Load**: Moderate CPU load for empty rack
- **Per Module**: Each module adds to the CPU load, with some modules being more intensive than others
- **Module Combinations**: Certain combinations of modules may create higher CPU usage than expected
- **Real-Time Performance**: Generally optimized for real-time performance but complex chains may impact performance
- **Automation Impact**: Parameter automation has minimal impact on CPU usage
- **Multiple Instances**: CPU usage increases linearly with multiple rack instances

### Performance Optimization Tips
- **Module Selection**: Choose modules based on CPU efficiency (Leveller vs complex effects)
- **Disable Unused**: Disable modules when not needed rather than just setting to neutral
- **Freeze Tracks**: When rendering complex arrangements with many rack instances
- **Optimize Chain Length**: Use only the modules necessary for the desired effect
- **Monitor Performance**: Use FL Studio's performance meter to monitor CPU usage
- **Use Conservative Settings**: Extreme settings on multiple modules may increase CPU usage

### Buffer Size Considerations
- **Small Buffers**: May cause increased CPU usage or audio dropouts with complex module chains
- **Large Buffers**: May introduce latency but can reduce CPU usage and improve stability
- **Recommended Setting**: Use FL Studio's automatic buffer size adjustment or experiment with 256-512 samples for a good balance
- **Real-Time Performance**: Smaller buffers may be needed for responsive performance with automation

## "Symptom -> Cause -> Fix -> How to verify" Table

| Symptom | Possible Cause | Solution | How to Verify |
|---------|----------------|----------|---------------|
| No sound output | No modules added, muted track, or routing issue | Add a module to the rack, check track mute, verify routing | Verify signal path in mixer and check for audio activity |
| Clicking/popping | Parameter changes too rapid or module switching | Smooth parameter changes, avoid rapid module switching | Listen for artifacts during parameter changes |
| High CPU usage | Too many modules or CPU-intensive modules | Reduce module count, replace intensive modules with lighter ones | Monitor CPU meter in FL Studio |
| Module not responding | Module not properly initialized or corrupted | Remove and re-add the module, reload project | Test module parameters and audio output |
| Unexpected sound changes | Module order affecting signal flow | Adjust module order to match intended signal flow | A/B compare different module orders |
| Distortion/clipping | Input gain too high or module settings extreme | Reduce input gain and check individual module levels | Use peak meters to ensure no red peaks |
| Latency issues | Multiple modules introducing cumulative delay | Reduce module count or check buffer settings | Check timing accuracy with metronome |
| Rack not saving state | Project save/load issue or corruption | Save project again, check for plugin compatibility | Reload project and verify rack state |
| Automation glitches | Parameter automation conflicts or jumps | Smooth automation curves, check for parameter jumps | Review automation clips for smooth transitions |
| Module unavailable | Module not compatible with rack or license issue | Check module compatibility, verify FL Studio installation | Try adding different modules to the rack |
| Rack bypass not working | Bypass function malfunction | Check bypass button state, try removing/adding rack | Compare with and without rack bypass |
| Parameter reset on load | Module state not saving properly | Check project save settings, update FL Studio | Verify parameter retention after reloading |

## Version-Specific Notes (labeled clearly with version)

### FL Studio 20.x Series
- **Initial Implementation**: The original implementation of FL Studio Mobile Rack with basic module support
- **Basic Module Set**: Includes core mobile modules (Leveller, Vox, Spacer, etc.)
- **Limited Presets**: Basic preset management for rack configurations
- **Mobile Interface**: Interface adapted from mobile app design

### FL Studio 20.7
- **Module Expansion**: Added additional mobile modules to the rack system
- **Parameter Smoothing**: Improved parameter smoothing to reduce artifacts during automation

### FL Studio 20.8
- **Performance Improvements**: Minor optimizations to reduce CPU usage
- **Stability Enhancements**: Fixed occasional crashes when loading complex rack configurations

### FL Studio 21.0
- **Enhanced Module Set**: Additional mobile modules available in the rack
- **Better Integration**: Improved integration with desktop FL Studio workflow
- **Updated UI**: Refreshed user interface with better visual feedback

### FL Studio 21.1
- **Module Compatibility**: Improved compatibility between different mobile modules
- **Memory Management**: Better memory management for large rack configurations
- **Bug Fixes**: Addressed various stability issues with module chaining

### FL Studio 21.2
- **Performance Optimization**: Further CPU usage optimizations
- **Module Initialization**: Improved module initialization when loading projects
- **Parameter Mapping**: Enhanced parameter mapping for better automation

### FL Studio 21.3
- **Interface Updates**: Minor UI improvements for better module visibility
- **Module Behavior**: Refined behavior of specific mobile modules in rack environment
- **Project Compatibility**: Better project loading and saving performance

### FL Studio 21.4
- **Automation Handling**: Improved automation handling for rack parameters
- **Parameter Interpolation**: Better interpolation between parameter values for smoother transitions
- **Stability Improvements**: Additional stability improvements for complex rack configurations

### FL Studio 21.5
- **Compatibility Improvements**: Better compatibility with third-party controller mapping
- **Module Algorithms**: Minor improvements to mobile module algorithms
- **Documentation Updates**: Enhanced tooltips and parameter descriptions

### FL Studio 21.6
- **Module Refinement**: Further refinement of mobile module algorithms
- **Interface Updates**: Minor UI improvements for better usability
- **Stability**: Additional stability improvements for long sessions with complex racks

*Note: Version-specific behaviors should be verified against official Image-Line release notes, as these are based on general FL Studio development patterns.*