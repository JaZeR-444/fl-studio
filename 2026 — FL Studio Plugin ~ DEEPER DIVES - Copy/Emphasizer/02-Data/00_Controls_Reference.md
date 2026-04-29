# Emphasizer - Controls Reference

## Parameter List with Descriptions

### Enhancement Controls

**Amount**
- **Description**: Controls the intensity of the dynamic enhancement
  - Low values: Subtle detail enhancement
  - Medium values: Noticeable detail enhancement
  - High values: Aggressive enhancement of quiet elements
- **Range**: 0-100% (typically)
- **Effect**: Increases quiet sounds relative to loud sounds
- **Use for**: Controlling the intensity of the upward compression
- **Pro tip**: Start low and increase gradually to avoid over-processing

**Drive/Saturation**
- **Description**: Adds harmonic saturation to the enhanced signal
  - Low values: Clean enhancement
  - Medium values: Warm harmonic addition
  - High values: Aggressive saturation
- **Range**: 0-100% (typically)
- **Effect**: Adds character and warmth to the processed signal
- **Use for**: Adding harmonic content and character
- **Pro tip**: Use with Amount for musical enhancement

**Time/Speed**
- **Description**: Controls the release characteristics of the enhancement
  - Fast settings: Quick release, more aggressive
  - Medium settings: Balanced release
  - Slow settings: Gentle release, smoother
- **Range**: Variable from fast to slow (typically 0-100%)
- **Effect**: Affects how quickly the gain returns to normal after a loud event
- **Use for**: Controlling the aggressiveness of the enhancement
- **Pro tip**: Match to the musical content for natural results

### Filter Controls (if applicable)

**Low Filter**
- **Description**: Controls low-frequency content
  - Low settings: Allow more low-end
  - High settings: Reduce low-end content
- **Range**: Variable from low to high (typically 0-100%)
- **Effect**: Adjusts the low-end presence of the enhancement
- **Use for**: Removing rumble or emphasizing low-end
- **Pro tip**: Use for creating different drum sizes or removing unwanted low frequencies

**Mid Filter**
- **Description**: Controls mid-frequency content
  - Low settings: Reduce mid presence
  - High settings: Emphasize mid frequencies
- **Range**: Variable from low to high (typically 0-100%)
- **Effect**: Adjusts the presence and character of the enhancement
- **Use for**: Shaping the core sound of the enhancement
- **Pro tip**: Use for creating different tonal characters

### Global Controls

**Mix Control**
- **Description**: Controls the blend between processed and unprocessed signals
  - 0%: Fully dry (original signal)
  - 50%: Equal parts dry and wet
  - 100%: Fully wet (processed signal)
- **Range**: 0-100%
- **Effect**: Determines how much of the processed signal is heard
- **Use for**: Blending the enhanced signal with the original
- **Pro tip**: Use for parallel processing and transparency

**Output Level**
- **Description**: Controls the final output level of the plugin
  - Negative values: Reduce output level
  - Positive values: Increase output level
  - Zero: No change to output level
- **Range**: Usually ±12dB or more
- **Effect**: Adjusts the overall volume of the processed signal
- **Use for**: Matching levels in the mix
- **Pro tip**: Use for gain staging in your project

## Default Values and Safe Starting Ranges

### Amount Defaults
- **Default Value**: Usually around 50%
- **Safe Starting Range**: 20-60% for most applications
- **Conservative Range**: 10-40% for subtle enhancement
- **Aggressive Range**: 60-80% for more obvious effects

### Drive Defaults
- **Default Value**: Usually around 30%
- **Safe Starting Range**: 10-50% for musical results
- **Conservative Range**: 5-30% for subtle character
- **Aggressive Range**: 50-80% for more saturation

### Time Defaults
- **Default Value**: Usually around 50%
- **Safe Starting Range**: 30-70% for natural response
- **Fast Range**: 10-40% for quick response
- **Slow Range**: 60-90% for smooth response

### Mix Defaults
- **Default Value**: 100% (fully processed)
- **Safe Starting Range**: 50-100% for enhancement
- **Parallel Processing**: 20-70% for blend with original
- **Full Effect**: 100% for maximum enhancement

## Special Behaviors, Hidden Interactions, Right-Click Options, Integration Points

### Parameter Interactions
- **Amount + Drive**: These parameters work together to create the enhancement effect. Higher Amount may require less Drive for musical results.
- **Amount + Time**: Higher Amount with slower Time settings can create pumping artifacts. Balance these parameters carefully.
- **Drive + Mix**: Higher Drive settings may require more of the original signal in the Mix for natural results.

### Hidden Interactions
- **Upward Compression Algorithm**: The internal algorithm amplifies quiet signals rather than attenuating loud ones, which is different from traditional compression.
- **Automatic Gain Compensation**: The plugin may automatically adjust gain to prevent excessive level increases.
- **Adaptive Processing**: The enhancement adapts to the input signal characteristics.

### Right-Click Options
- **Parameter Reset**: Right-clicking on any knob typically resets it to its default value
- **Fine Adjustment**: Holding Shift while turning a knob allows for fine parameter adjustments
- **MIDI Learn**: Right-clicking on parameters usually reveals MIDI learn options for external controller mapping
- **Value Scaling**: Some parameters may offer different scaling options when right-clicked

### Integration Points
- **MIDI Control**: Parameters can be mapped to MIDI CC messages for external controller mapping
- **FL Studio Automation**: All parameters can be automated using FL Studio's automation system
- **Sidechain Capability**: May support external sidechain input for ducking applications
- **Analyzer Integration**: Works with FL Studio's built-in spectrum analyzer for visual feedback
- **Linking**: Can link multiple instances for synchronized parameter changes

## MIDI/automation notes and gotchas

### MIDI Implementation
- **CC Mapping**: Most parameters can be mapped to MIDI CC messages for real-time control
- **NRPN Support**: May support NRPN messages for more complex parameter control
- **Parameter Smoothing**: MIDI input may include smoothing to prevent parameter jumps

### Automation Notes
- **Parameter Automation**: All parameters can be automated using FL Studio's automation system
- **Smooth Automation**: The plugin likely applies smoothing to prevent parameter jumps causing audio artifacts
- **Real-time Parameter Changes**: Parameters can be adjusted in real-time without stopping playback

### Gotchas
- **Parameter Extremes**: Setting parameters to extreme values may cause unexpected behavior or artifacts
- **Upward vs Downward**: Remember that Emphasizer uses upward compression, which behaves differently than traditional compressors
- **Mix Control Importance**: The Mix control is crucial for achieving natural-sounding results
- **Level Matching**: Pay attention to output levels when comparing processed and unprocessed signals
- **Pumping Artifacts**: High Amount with slow Time settings can create pumping artifacts
- **Over-Enhancement**: Too much enhancement can make the audio sound artificial
- **Stereo Imaging**: Some settings may affect stereo imaging, so check in mono compatibility
- **CPU Usage**: While generally efficient, extreme settings may increase CPU usage