# FL Slayer - Controls Reference

## Parameter List with Descriptions

### Preamp Controls

**Gain**
- **Description**: Controls the amount of preamp distortion and saturation
  - Low values: Clean, transparent amplification
  - Medium values: Mild overdrive and warmth
  - High values: Heavy distortion and saturation
- **Range**: 0-100% (typically)
- **Effect**: Increases harmonic content and compression
- **Use for**: Controlling the amount of tube saturation and distortion
- **Pro tip**: Use lower gain settings with higher master volume for more power amp compression

**Bass**
- **Description**: Controls low-frequency response in the preamp section
  - Low values: Reduced low-end
  - Medium values: Balanced low-end
  - High values: Enhanced low-end
- **Range**: 0-100% (typically)
- **Effect**: Adjusts the low-frequency content of the signal
- **Use for**: Shaping the low-end character of the simulated amp
- **Pro tip**: Reduce bass when using high gain to prevent muddiness

**Mid**
- **Description**: Controls mid-frequency response in the preamp section
  - Low values: Scooped mids
  - Medium values: Balanced mids
  - High values: Mid-forward sound
- **Range**: 0-100% (typically)
- **Effect**: Adjusts the mid-frequency content of the signal
- **Use for**: Shaping the presence and character of the simulated amp
- **Pro tip**: Boost mids for cutting through dense mixes

**Treble**
- **Description**: Controls high-frequency response in the preamp section
  - Low values: Dark, rolled-off highs
  - Medium values: Balanced highs
  - High values: Bright, crisp highs
- **Range**: 0-100% (typically)
- **Effect**: Adjusts the high-frequency content of the signal
- **Use for**: Shaping the brightness and clarity of the simulated amp
- **Pro tip**: Use moderate treble settings to avoid harshness

**Presence**
- **Description**: Controls high-frequency presence and air
  - Low values: Reduced presence
  - Medium values: Balanced presence
  - High values: Enhanced presence and air
- **Range**: 0-100% (typically)
- **Effect**: Adjusts the high-frequency presence of the signal
- **Use for**: Adding sparkle and definition to the sound
- **Pro tip**: Use sparingly to avoid harshness

### Poweramp Controls

**Master Volume**
- **Description**: Controls the overall output level and power amp compression
  - Low values: Quieter output, less power amp saturation
  - Medium values: Balanced output and compression
  - High values: Louder output, more power amp saturation
- **Range**: 0-100% (typically)
- **Effect**: Controls final output level and power amp behavior
- **Use for**: Setting the final level and controlling power amp compression
- **Pro tip**: Use high master volume with low gain for power amp compression without preamp distortion

**Power Sag**
- **Description**: Simulates the voltage sag of a tube power amp under load
  - Low values: Stable power supply, consistent tone
  - Medium values: Moderate sag, dynamic compression
  - High values: Heavy sag, significant compression and sag
- **Range**: 0-100% (typically)
- **Effect**: Adds compression and dynamic response similar to tube power amps
- **Use for**: Adding natural compression and sag response
- **Pro tip**: Use for dynamic response that reacts to playing intensity

**Bias**
- **Description**: Controls the operating point of the simulated tubes
  - Low values: Cooler bias, tighter sound
  - Medium values: Balanced bias, standard operation
  - High values: Hotter bias, more saturation
- **Range**: 0-100% (typically)
- **Effect**: Changes the operating characteristics of the simulated tubes
- **Use for**: Adjusting the saturation and compression characteristics
- **Pro tip**: Higher bias settings add more harmonic saturation

### Cabinet Controls

**Cabinet Selection**
- **Description**: Selects different virtual speaker cabinet models
  - Options typically include various 1x12, 2x12, 4x10, 4x12 configurations
  - Each cabinet has unique frequency response and character
- **Range**: Multiple cabinet types (typically 8-12 options)
- **Effect**: Changes the overall tonal character and speaker simulation
- **Use for**: Selecting the appropriate cabinet for the desired tone
- **Pro tip**: Match cabinet type to the musical style and amp model

**Microphone Position**
- **Description**: Simulates different microphone positions relative to the speaker
  - Center: Bright, direct sound
  - Edge: Warmer, more rounded sound
  - Off-axis: Even warmer, more distant sound
- **Range**: Various positions (typically 3-5 options)
- **Effect**: Changes the tonal balance and proximity effect
- **Use for**: Adjusting the tonal character of the cabinet simulation
- **Pro tip**: Use off-center positions for warmer tones

**Room Size**
- **Description**: Controls the simulated acoustic space around the cabinet
  - Small: Intimate, dry sound
  - Medium: Balanced room sound
  - Large: Spacious, ambient sound
- **Range**: Small to Large (typically 0-100%)
- **Effect**: Adds simulated room ambience and space
- **Use for**: Adding spatial characteristics to the sound
- **Pro tip**: Use small room settings for tight, dry sounds

### Effects Controls

**Reverb**
- **Description**: Built-in reverb effect
  - Low values: Dry sound
  - Medium values: Moderate reverb
  - High values: Wet, spacious sound
- **Range**: 0-100% (typically)
- **Effect**: Adds spatial depth and ambience
- **Use for**: Adding space and depth to the guitar sound
- **Pro tip**: Use subtle amounts for natural room sound

**Delay**
- **Description**: Built-in delay effect
  - Low values: Subtle doubling
  - Medium values: Noticeable echo
  - High values: Pronounced delay effect
- **Range**: 0-100% (typically)
- **Effect**: Adds time-based effects and depth
- **Use for**: Adding depth and space to the guitar sound
- **Pro tip**: Use short delays for doubling effects

**Chorus**
- **Description**: Built-in chorus effect
  - Low values: Subtle thickening
  - Medium values: Noticeable chorus
  - High values: Pronounced chorus effect
- **Range**: 0-100% (typically)
- **Effect**: Adds modulation and thickening
- **Use for**: Adding movement and thickness to the sound
- **Pro tip**: Use low amounts for subtle thickening

### Playing Mode Controls

**Mode Selector**
- **None**: Standard monophonic playing
- **Autochords**: Automatically plays chord inversions
- **Powerchords**: Plays root and fifth only
- **Strum**: Simulates strumming across chord notes
- **SoloFixed**: Fixed pitch bend behavior
- **SoloDynamic**: Velocity-sensitive pitch behavior
- **Effect**: Changes how the plugin responds to MIDI input
- **Use for**: Different guitar playing techniques
- **Pro tip**: Use Strum mode for realistic strumming patterns

### Global Controls

**Input Gain**
- **Description**: Controls the input level to the plugin
  - Low values: Reduced input level
  - Medium values: Normal input level
  - High values: Increased input level
- **Range**: Usually ±12dB or more
- **Effect**: Adjusts the input level before processing
- **Use for**: Optimizing input level for the desired processing
- **Pro tip**: Match input level to prevent clipping

**Output Level**
- **Description**: Controls the final output level of the plugin
  - Low values: Reduced output level
  - Medium values: Normal output level
  - High values: Increased output level
- **Range**: Usually ±12dB or more
- **Effect**: Adjusts the overall output level
- **Use for**: Matching levels in the mix
- **Pro tip**: Use for gain staging in your project

**Bypass**
- **Description**: Toggles processing on/off
  - When bypassed, signal passes through unchanged
  - When active, full processing is applied
- **Range**: On/Off
- **Effect**: Completely bypasses all processing
- **Use for**: A/B comparison and disabling processing
- **Pro tip**: Use for comparing processed and unprocessed signals

## Default Values and Safe Starting Ranges

### Preamp Defaults
- **Gain**: 50% (medium setting)
- **Bass**: 50% (flat response)
- **Mid**: 50% (flat response)
- **Treble**: 50% (flat response)
- **Presence**: 50% (flat response)
- **Safe Starting Range**: 30-70% for musical results

### Poweramp Defaults
- **Master Volume**: 60% (medium-high setting)
- **Power Sag**: 40% (moderate setting)
- **Bias**: 50% (neutral setting)
- **Safe Starting Range**: 40-80% for master volume, 20-60% for sag

### Cabinet Defaults
- **Cabinet**: Default 4x12 cabinet (manufacturer dependent)
- **Mic Position**: Center position
- **Room Size**: Medium setting
- **Safe Starting Range**: Start with defaults and adjust to taste

### Effects Defaults
- **Reverb**: 25-35% (subtle setting)
- **Delay**: 10-20% (subtle setting)
- **Chorus**: 10-15% (subtle setting)
- **Safe Starting Range**: 0-40% for most applications

### Playing Mode Defaults
- **Mode**: None (standard monophonic)
- **Safe Starting Range**: None for audio input, Strum for chord input

## Special Behaviors, Hidden Interactions, Right-Click Options, Integration Points

### Parameter Interactions
- **Gain + Master**: The relationship between these controls affects preamp vs poweramp saturation
- **EQ + Gain**: EQ settings affect how the gain stage clips and distorts
- **Bias + Power Sag**: These interact to create different tube compression characteristics
- **Cabinet + EQ**: The cabinet model affects the overall frequency response regardless of EQ settings

### Hidden Interactions
- **Velocity Response**: Different playing modes respond differently to MIDI velocity
- **Note Range**: Some playing modes only work effectively in specific note ranges
- **Polyphony**: The plugin may behave differently in monophonic vs polyphonic contexts
- **MIDI CC Mapping**: Many parameters may be controllable via MIDI CC messages

### Right-Click Options
- **Parameter Reset**: Right-clicking on any knob typically resets it to its default value
- **Fine Adjustment**: Holding Shift while turning a knob allows for fine parameter adjustments
- **MIDI Learn**: Right-clicking on parameters usually reveals MIDI learn options for external controller mapping
- **Value Scaling**: Some parameters may offer different scaling options when right-clicked

### Integration Points
- **MIDI Control**: Parameters can be mapped to MIDI CC messages for external controller mapping
- **FL Studio Automation**: All parameters can be automated using FL Studio's automation system
- **Analyzer Integration**: Works with FL Studio's built-in spectrum analyzer for visual feedback
- **Mixer Integration**: Properly integrates with FL Studio's mixer routing
- **Patcher Compatibility**: Can be used within Patcher for complex routing

## MIDI/automation notes and gotchas

### MIDI Implementation
- **Note Triggering**: Any MIDI note can trigger the guitar simulation
- **Velocity Sensitivity**: Full 127-step velocity response for dynamic expression
- **Aftertouch**: May be supported depending on FL Studio version (check documentation)
- **Pitch Bend**: Supported for pitch modulation effects

### Automation Notes
- **Parameter Automation**: All parameters can be automated using FL Studio's automation system
- **Smooth Automation**: The plugin likely applies smoothing to prevent parameter jumps causing audio artifacts
- **Real-time Parameter Changes**: Parameters can be adjusted in real-time without stopping playback

### Gotchas
- **Parameter Extremes**: Setting parameters to extreme values may cause unexpected behavior or artifacts
- **Playing Mode Changes**: Changing playing modes during playback may cause audio discontinuities
- **Cabinet Model Switching**: Switching cabinet models during playback may cause clicks or pops
- **High Gain Settings**: Very high gain settings may cause harsh distortion rather than musical saturation
- **Poweramp Settings**: High master volume with high power sag can create excessive compression
- **MIDI vs Audio**: Different playing modes work better with MIDI input vs audio input
- **CPU Usage**: Complex settings with multiple effects may increase CPU usage significantly
- **Stereo Imaging**: Some settings may affect stereo imaging, so check mono compatibility