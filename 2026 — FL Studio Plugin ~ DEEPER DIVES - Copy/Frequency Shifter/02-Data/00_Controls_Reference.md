# Frequency Shifter - Controls Reference

## Parameter List with Descriptions

### Frequency Controls

**Frequency (Main Shift)**
- **Description**: Controls the primary frequency shift amount in Hz
  - Low values: Small downward shift (e.g., -50Hz)
  - Medium values: No shift (0Hz, unity)
  - High values: Large upward shift (e.g., +1000Hz)
- **Range**: Typically -2000Hz to +2000Hz (depends on sample rate)
- **Effect**: Shifts all frequencies by the specified amount in Hz
- **Use for**: Creating metallic, bell-like, or robotic textures
- **Pro tip**: Small shifts (5-50Hz) create subtle chorusing effects

**Left Channel Frequency**
- **Description**: Controls frequency shift for the left channel independently
  - Same range and behavior as main frequency control
  - Only active when channels are unlinked
- **Range**: Typically -2000Hz to +2000Hz
- **Effect**: Shifts left channel frequencies independently
- **Use for**: Creating stereo width and movement
- **Pro tip**: Use small differences between left and right for stereo enhancement

**Right Channel Frequency**
- **Description**: Controls frequency shift for the right channel independently
  - Same range and behavior as main frequency control
  - Only active when channels are unlinked
- **Range**: Typically -2000Hz to +2000Hz
- **Effect**: Shifts right channel frequencies independently
- **Use for**: Creating stereo width and movement
- **Pro tip**: Use opposite shifts for left and right for maximum stereo width

**Link/Unlink Channels**
- **Description**: Toggles between linked and independent channel control
  - Linked: Both channels follow the main frequency control
  - Unlinked: Channels can be controlled independently
- **Range**: On/Off (binary)
- **Effect**: Determines if channels are controlled together or separately
- **Use for**: Switching between mono and stereo operation
- **Pro tip**: Use for quick stereo width experiments

### Advanced Controls

**Feedback**
- **Description**: Controls the amount of output signal fed back to the input
  - Low values: Minimal feedback effect
  - Medium values: Noticeable evolving textures
  - High values: Dramatic, spiraling effects
- **Range**: 0-100% typically
- **Effect**: Creates evolving, self-modulating textures
- **Use for**: Creating evolving, spiraling textures
- **Pro tip**: Start with low values (10-20%) to avoid instability

**Start Phase**
- **Description**: Controls the phase relationship to reduce artifacts
  - Low values: Different phase alignment
  - Medium values: Default phase alignment
  - High values: Alternative phase alignment
- **Range**: 0-100% typically
- **Effect**: Adjusts phase to minimize clicks/pops
- **Use for**: Reducing artifacts during frequency shifting
- **Pro tip**: Adjust if you hear clicking or phase-related artifacts

**Mix (Dry/Wet)**
- **Description**: Controls the blend between original and processed signals
  - 0%: Fully dry (original signal only)
  - 50%: Equal parts dry and wet
  - 100%: Fully wet (processed signal only)
- **Range**: 0-100%
- **Effect**: Determines how much of the shifted signal is heard
- **Use for**: Controlling the intensity of the effect
- **Pro tip**: Use lower values (20-40%) for subtle enhancement

**Output Level**
- **Description**: Controls the final output level of the plugin
  - Low values: Reduced output level
  - Medium values: Unity gain
  - High values: Increased output level
- **Range**: Usually ±12dB or more
- **Effect**: Adjusts the overall volume of the processed signal
- **Use for**: Matching levels in the mix
- **Pro tip**: Use for gain staging in your project

### Global Controls

**Bypass**
- **Description**: Toggles processing on/off
  - When bypassed: Signal passes through unchanged
  - When active: Full frequency shifting is applied
- **Range**: On/Off (binary)
- **Effect**: Completely bypasses all processing
- **Use for**: A/B comparison and disabling processing
- **Pro tip**: Use for comparing processed and unprocessed signals

## Default Values and Safe Starting Ranges

### Frequency Defaults
- **Main Frequency**: 0Hz (no shift)
- **Left Frequency**: 0Hz (no shift)
- **Right Frequency**: 0Hz (no shift)
- **Safe Starting Range**: ±100Hz for musical results

### Advanced Defaults
- **Feedback**: 0% (no feedback)
- **Start Phase**: 50% (center position)
- **Mix**: 100% (fully processed)
- **Output Level**: 0dB (unity gain)

### Safe Starting Ranges
- **Frequency Shift**: ±50Hz for subtle effects, ±200Hz for moderate effects
- **Feedback**: 0-30% to avoid instability
- **Mix**: 20-80% for musical results
- **Start Phase**: 30-70% for artifact reduction

## Special Behaviors, Hidden Interactions, Right-Click Options, Integration Points

### Parameter Interactions
- **Frequency + Feedback**: Higher feedback with frequency shifting creates more dramatic evolving textures
- **Left/Right Channels**: Independent control allows for complex stereo field manipulation
- **Frequency + Mix**: Lower mix values reduce the intensity of the frequency shift effect
- **Start Phase + Frequency**: Different start phase values may be needed for different frequency shift amounts

### Hidden Interactions
- **Sample Rate Dependency**: Maximum possible shift is limited by the project's sample rate
- **Phase Relationships**: Start Phase affects the phase relationship between original and shifted signals
- **Harmonic Breaking**: The algorithm intentionally breaks harmonic relationships
- **Alias Prevention**: Internal anti-aliasing prevents foldover artifacts at extreme settings

### Right-Click Options
- **Parameter Reset**: Right-clicking on any knob typically resets it to its default value
- **Fine Adjustment**: Holding Shift while turning a knob allows for fine parameter adjustments
- **MIDI Learn**: Right-clicking on parameters reveals MIDI learn options for external controller mapping
- **Value Scaling**: Some parameters may offer different scaling options when right-clicked

### Integration Points
- **MIDI Control**: Parameters can be mapped to MIDI CC messages for external controller mapping
- **FL Studio Automation**: All parameters can be automated using FL Studio's automation system
- **Analyzer Integration**: Works with FL Studio's built-in spectrum analyzer for visual feedback
- **Mixer Integration**: Properly integrates with FL Studio's mixer routing
- **Patcher Compatibility**: Can be used within Patcher for complex routing

## MIDI/automation notes and gotchas

### MIDI Implementation
- **Parameter Mapping**: Most parameters can be mapped to MIDI CC messages for real-time control
- **Frequency Control**: The frequency parameter responds well to continuous controllers
- **Real-time Performance**: Parameters can be adjusted in real-time without stopping playback
- **Controller Smoothing**: The plugin likely applies smoothing to prevent parameter jumps causing audio artifacts

### Automation Notes
- **Parameter Automation**: All parameters can be automated using FL Studio's automation system
- **Smooth Automation**: The plugin likely applies smoothing to prevent parameter jumps causing audio artifacts
- **Real-time Parameter Changes**: Parameters can be adjusted in real-time without stopping playback
- **Frequency Automation**: Automating the frequency parameter creates evolving shift effects

### Gotchas
- **Parameter Extremes**: Setting frequency shift to extreme values may cause harsh, metallic sounds
- **Feedback Instability**: High feedback values can create unstable or harsh results
- **Phase Artifacts**: Improper Start Phase settings can cause clicking or other artifacts
- **Harmonic Relationship Breaking**: The frequency shift intentionally breaks harmonic relationships, which may sound "wrong" to ears accustomed to pitch shifting
- **Sample Rate Limits**: Maximum possible shift is limited by sample rate (higher sample rates allow for greater shifts)
- **Stereo Imaging**: Independent left/right channel shifting can create unusual stereo imaging
- **CPU Usage**: Complex settings with high feedback may increase CPU usage
- **Latency**: Some implementations may have inherent latency that affects real-time performance
- **Alias Artifacts**: Extreme settings may create aliasing artifacts despite internal anti-aliasing
- **Mix Control Importance**: For musical results, the mix control is often crucial for balancing processed and unprocessed signals
- **Mono Compatibility**: Stereo frequency shifting may cause phase issues when summed to mono
- **Parameter Smoothing**: Rapid parameter changes may be smoothed by the plugin, affecting real-time performance