# Drumpad - Controls Reference

## Parameter List with Descriptions

### Membrane Controls

**Stiffness**
- **Description**: Adjusts the rigidity of the simulated membrane
- **Range**: Variable from soft to metallic
- **Effect**: Changes harmonic content and brightness
- **Use for**: Creating different drum head materials
- **Pro tip**: Combine with tension for pitch control

**Mass**
- **Description**: Controls the weight of the membrane material
- **Range**: Variable from light to heavy
- **Effect**: Affects fundamental frequency and harmonic distribution
- **Use for**: Creating different drum sizes
- **Pro tip**: Higher values create deeper, more resonant sounds

**Tension**
- **Description**: Controls the tightness of the membrane
- **Range**: Variable from loose to tight
- **Effect**: Changes fundamental pitch and harmonic relationships
- **Use for**: Tuning drums to specific pitches
- **Pro tip**: Use with mass for fine pitch control

**Damping**
- **Description**: Controls how quickly vibrations dissipate
- **Range**: From long sustain to short decay
- **Effect**: Changes the length and character of the sound
- **Use for**: Creating muffled or open sounds
- **Pro tip**: Combine with mallet noise for texture

### Mallet Controls

**Amplitude**
- **Description**: Controls the force of the strike
- **Range**: From gentle to aggressive
- **Effect**: Changes volume and harmonic complexity
- **Use for**: Dynamic expression
- **Pro tip**: Use with velocity sensitivity for expression

**Noise**
- **Description**: Adds noise content to the strike
- **Range**: From clean to noisy
- **Effect**: Adds texture and attack character
- **Use for**: Simulating different stick types
- **Pro tip**: Higher values simulate brushes or rods

**Decay**
- **Description**: Controls the mallet's own decay
- **Range**: From short to long
- **Effect**: Changes the initial attack character
- **Use for**: Fine-tuning attack characteristics
- **Pro tip**: Use for creating different stick materials

### Filter and EQ Controls

**Low Filter**
- **Description**: Controls low-frequency content
- **Range**: From full low-end to high-pass filtering
- **Effect**: Adjusts the low-end presence
- **Use for**: Removing rumble or emphasizing low-end
- **Pro tip**: Use for creating different drum sizes

**Mid Filter**
- **Description**: Controls mid-frequency content
- **Range**: From full mids to reduced mids
- **Effect**: Adjusts the presence and character
- **Use for**: Shaping the core sound
- **Pro tip**: Use for creating different drum materials

### Global Controls

**Output Level**
- **Description**: Global output level control
- **Range**: Variable gain control
- **Effect**: Adjusts the overall volume of the plugin
- **Use for**: Matching levels in the mix
- **Pro tip**: Use for gain staging in your project

**Polyphony**
- **Description**: Controls the number of simultaneous notes
- **Range**: Monophonic to polyphonic
- **Effect**: Determines if multiple notes can play simultaneously
- **Use for**: Different playing styles and techniques
- **Pro tip**: Monophonic mode can be useful for single drum sounds

## Default Values and Safe Starting Ranges

### Membrane Defaults
- **Stiffness**: 50% (medium setting)
- **Mass**: 50% (medium setting)
- **Tension**: 50% (medium setting)
- **Damping**: 50% (medium setting)

### Mallet Defaults
- **Amplitude**: 70% (medium-high setting)
- **Noise**: 30% (low-medium setting)
- **Decay**: 50% (medium setting)

### Filter Defaults
- **Low Filter**: 50% (neutral position)
- **Mid Filter**: 50% (neutral position)

### Safe Starting Ranges
- **Stiffness**: 20%-80% (avoid extremes for musical results)
- **Mass**: 30%-70% (center range for versatility)
- **Tension**: 30%-70% (center range for versatility)
- **Damping**: 20%-80% (avoid extremes for musical results)
- **Amplitude**: 40%-90% (avoid clipping)
- **Noise**: 10%-60% (avoid excessive noise)
- **Decay**: 30%-70% (center range for versatility)

## Special Behaviors, Hidden Interactions, Right-Click Options, Integration Points

### Parameter Interactions
- **Stiffness + Tension**: These parameters work together to determine pitch and harmonic content. Higher stiffness with lower tension creates bright, high-pitched sounds with complex harmonics.
- **Mass + Tension**: These control the fundamental frequency. Increasing mass while maintaining tension lowers the pitch, while increasing tension raises it.
- **Damping + Mallet Noise**: These interact to create different texture characteristics. High damping with high mallet noise can create interesting percussive textures.

### Hidden Interactions
- **Velocity Response**: The physical modeling responds naturally to velocity, so playing dynamics affect the sound significantly. Higher velocities may emphasize certain harmonics differently.
- **Parameter Smoothing**: Drumpad likely applies some parameter smoothing to prevent clicks and pops when adjusting parameters in real-time.

### Right-Click Options
- **Parameter Reset**: Right-clicking on any knob typically resets it to its default value
- **Fine Adjustment**: Holding Shift while turning a knob allows for fine parameter adjustments
- **MIDI Learn**: Right-clicking on parameters usually reveals MIDI learn options for external controller mapping

### Integration Points
- **MIDI Notes**: Each instance responds to MIDI note input for triggering sounds
- **Velocity Sensitivity**: Full velocity response for dynamic expression
- **MIDI CC Control**: Parameters can be mapped to MIDI CC messages for external control
- **FL Studio Integration**: Works within the Channel Rack and responds to FL Studio's automation system
- **Audio Output**: Outputs stereo audio that can be routed to any mixer track

## MIDI/automation notes and gotchas

### MIDI Implementation
- **Note Triggering**: Any MIDI note can trigger the drum sound, though some users map specific notes to specific drum types
- **Velocity Sensitivity**: Full 127-step velocity response for dynamic expression
- **Aftertouch**: May be supported depending on FL Studio version (check documentation)

### Automation Notes
- **Parameter Automation**: All parameters can be automated using FL Studio's automation system
- **Smooth Automation**: Drumpad likely applies smoothing to prevent parameter jumps causing audio artifacts
- **Real-time Parameter Changes**: Parameters can be adjusted in real-time without stopping playback

### Gotchas
- **Parameter Extremes**: Setting parameters to extreme values may cause unexpected behavior or unnatural sounds
- **CPU Usage**: While generally efficient, complex settings with high polyphony may increase CPU usage
- **Velocity Curves**: The relationship between incoming MIDI velocity and the resulting sound may not be linear
- **Parameter Dependencies**: Changing one parameter may require adjusting others to maintain the desired sound
- **Patch Compatibility**: Older patches may sound different after FL Studio updates due to algorithm improvements