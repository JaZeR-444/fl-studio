# FPC - Controls Reference

## Parameter List with Descriptions

### Global Controls

**Global Tune**
- **Description**: Adjusts the pitch of all samples in the kit simultaneously
  - Low values: Lower overall pitch
  - Medium values: Unity pitch
  - High values: Higher overall pitch
- **Range**: Usually ±24 semitones or more
- **Effect**: Changes pitch of all samples in the kit
- **Use for**: Tuning entire kit to match project key
- **Pro tip**: Use for quick key matching of drum kits

**Global Decay**
- **Description**: Controls the overall decay time of all pads in the kit
  - Low values: Shorter decay times
  - Medium values: Normal decay times
  - High values: Longer decay times
- **Range**: 0-100% typically
- **Effect**: Adjusts release time of all samples
- **Use for**: Adjusting overall kit sustain
- **Pro tip**: Use for matching kit decay to song tempo

**Global Volume**
- **Description**: Controls the overall output level of the kit
  - Low values: Quieter overall kit
  - Medium values: Normal overall level
  - High values: Louder overall kit
- **Range**: Usually ±12dB or more
- **Effect**: Adjusts output level of all pads
- **Use for**: Overall kit level control
- **Pro tip**: Use for gain staging in your project

### Pad-Specific Controls

**Pad Volume**
- **Description**: Individual volume control for each pad
  - Low values: Quieter pad
  - Medium values: Normal pad level
  - High values: Louder pad
- **Range**: Usually ±12dB or more per pad
- **Effect**: Adjusts output level of individual pad
- **Use for**: Balancing individual drum sounds
- **Pro tip**: Use for creating realistic drum balance (kick louder than hi-hats)

**Pad Pan**
- **Description**: Individual panning control for each pad
  - Left values: Panned left
  - Center values: Center panned
  - Right values: Panned right
- **Range**: Usually L100 to R100
- **Effect**: Positions pad in stereo field
- **Use for**: Creating stereo drum kit
- **Pro tip**: Use for realistic kit positioning (kick center, hats right, etc.)

**Pad Tune**
- **Description**: Individual pitch adjustment for each pad
  - Low values: Lower pitch
  - Center values: Unity pitch
  - High values: Higher pitch
- **Range**: Usually ±24 semitones or more
- **Effect**: Changes pitch of individual pad
- **Use for**: Tuning individual drums
- **Pro tip**: Use for tuning toms to specific pitches

**Pad Decay**
- **Description**: Individual decay/release control for each pad
  - Low values: Shorter decay
  - Medium values: Normal decay
  - High values: Longer decay
- **Range**: 0-100% typically
- **Effect**: Adjusts release time of individual pad
- **Use for**: Adjusting individual drum sustain
- **Pro tip**: Use for controlling snare buzz or tom sustain

**Pad Filter**
- **Description**: Individual filtering for each pad
  - Low values: Darker, more filtered
  - Medium values: Neutral filtering
  - High values: Brighter, less filtered
- **Range**: 0-100% typically
- **Effect**: Adjusts high-frequency content of individual pad
- **Use for**: Tone shaping per pad
- **Pro tip**: Use for cleaning up harsh samples or adding brightness

### Layer Controls (Multi-Layering)

**Layer Volume**
- **Description**: Volume control for individual layers within a pad
  - Low values: Quieter layer
  - Medium values: Normal layer level
  - High values: Louder layer
- **Range**: Usually ±12dB or more per layer
- **Effect**: Adjusts volume of specific sample layer
- **Use for**: Balancing multiple samples on one pad
- **Pro tip**: Use for balancing different velocity layers

**Layer Tune**
- **Description**: Pitch adjustment for individual layers within a pad
  - Low values: Lower pitch for layer
  - Center values: Unity pitch for layer
  - High values: Higher pitch for layer
- **Range**: Usually ±24 semitones or more
- **Effect**: Changes pitch of specific sample layer
- **Use for**: Fine-tuning individual samples in layer stack
- **Pro tip**: Use for creating pitch variations in velocity layers

**Layer Decay**
- **Description**: Decay/release control for individual layers within a pad
  - Low values: Shorter decay for layer
  - Medium values: Normal decay for layer
  - High values: Longer decay for layer
- **Range**: 0-100% typically
- **Effect**: Adjusts release time of specific sample layer
- **Use for**: Adjusting sustain of individual samples in layer stack
- **Pro tip**: Use for creating different sustain characteristics per velocity layer

**Velocity Range**
- **Description**: Defines the velocity range for each layer
  - Low range: Triggers at low velocities (0-30)
  - Medium range: Triggers at medium velocities (31-70)
  - High range: Triggers at high velocities (71-127)
- **Range**: 0-127 (MIDI velocity range)
- **Effect**: Determines when each layer plays based on input velocity
- **Use for**: Creating velocity-sensitive drum responses
- **Pro tip**: Use for realistic drum response with ghost notes, normal hits, and accents

### Mixer Routing Controls

**Mixer Routing**
- **Description**: Controls how each pad routes to FL Studio's mixer
  - Single track: All pads to one mixer track
  - Per pad: Each pad to individual mixer track
  - Per group: Pads grouped to specific mixer tracks
- **Range**: Multiple routing options
- **Effect**: Determines mixer track assignment
- **Use for**: Individual processing of drum sounds
- **Pro tip**: Use per-pad routing for individual effects processing

**Send Levels**
- **Description**: Controls how much of each pad sends to auxiliary tracks
  - Low values: Less send to aux tracks
  - High values: More send to aux tracks
- **Range**: 0-100% typically
- **Effect**: Amount of signal sent to reverb/delay aux tracks
- **Use for**: Creating different reverb/send levels per pad
- **Pro tip**: Send snares and toms to reverb while keeping kicks dry

### Pattern Controls

**Pattern Length**
- **Description**: Sets the length of the internal pattern sequencer
  - Short lengths: 1/4 to 2 bars
  - Medium lengths: 4 to 8 bars
  - Long lengths: 16+ bars
- **Range**: Usually 1/16th note to 64 bars
- **Effect**: Changes pattern duration
- **Use for**: Matching pattern length to musical content
- **Pro tip**: Use 4 or 8 bar patterns for most musical applications

**Step Resolution**
- **Description**: Controls the timing resolution of the pattern sequencer
  - Low resolution: 1/4 or 1/8 notes
  - Medium resolution: 1/16 notes
  - High resolution: 1/32 or 1/64 notes
- **Range**: 1/4 to 1/64 notes typically
- **Effect**: Determines timing precision of pattern
- **Use for**: Matching resolution to musical style
- **Pro tip**: Use 1/16th for most applications, 1/32 for complex patterns

## Default Values and Safe Starting Ranges

### Global Defaults
- **Global Tune**: 0 semitones (unity)
- **Global Decay**: 50% (medium)
- **Global Volume**: 0dB (unity)

### Pad Defaults
- **Pad Volume**: 0dB (unity) for most pads
- **Pad Pan**: Center (0) for most pads
- **Pad Tune**: 0 semitones (unity)
- **Pad Decay**: 50% (medium)
- **Pad Filter**: 50% (neutral)

### Layer Defaults
- **Layer Volume**: 0dB (unity)
- **Layer Tune**: 0 semitones (unity)
- **Layer Decay**: 50% (medium)
- **Velocity Range**: Full range (0-127) for single layers

### Safe Starting Ranges
- **Global Tune**: -12 to +12 semitones for musical results
- **Global Decay**: 30-70% for natural results
- **Pad Volume**: -6dB to +6dB for safe operation
- **Pad Pan**: L50 to R50 for natural positioning
- **Pad Tune**: -2 to +2 semitones for subtle tuning
- **Velocity Range**: Overlapping ranges (e.g., 0-40, 30-80, 70-127) for smooth transitions

## Special Behaviors, Hidden Interactions, Right-Click Options, Integration Points

### Parameter Interactions
- **Global + Individual**: Global parameters affect all pads but individual parameters override
- **Tune + Decay**: Pitch changes can affect perceived decay length
- **Volume + Pan**: These interact to create stereo positioning
- **Velocity Ranges**: Overlapping ranges can cause multiple layers to trigger simultaneously

### Hidden Interactions
- **Layer Priority**: When velocity ranges overlap, the first layer in the list typically has priority
- **Filter + Decay**: Filtering can affect perceived decay characteristics
- **Tune + Sample Quality**: Extreme pitch changes may affect sample quality
- **Mixer Routing + CPU**: Per-pad routing may increase CPU usage due to multiple mixer tracks

### Right-Click Options
- **Parameter Reset**: Right-clicking on any knob resets it to default value
- **MIDI Learn**: Right-clicking on parameters reveals MIDI learn options
- **Sample Load**: Right-clicking on pads may reveal sample loading options
- **Layer Management**: Right-clicking on layers may reveal additional layer options
- **Pad Properties**: Right-clicking on pads may show additional pad settings

### Integration Points
- **MIDI Control**: All parameters can be mapped to MIDI CC messages
- **FL Studio Automation**: Full automation support for all parameters
- **Analyzer Integration**: Works with FL Studio's built-in spectrum analyzer
- **Mixer Integration**: Proper routing to FL Studio's mixer system
- **Patcher Compatibility**: Can be used within Patcher for complex routing
- **Playlist Integration**: Patterns can be used in FL Studio's playlist

## MIDI/automation notes and gotchas

### MIDI Implementation
- **Pad Mapping**: Each pad corresponds to a MIDI note (configurable)
- **Velocity Sensitivity**: Full 127-step velocity response for dynamic expression
- **Aftertouch**: May be supported depending on FL Studio version
- **Pitch Bend**: Affects all samples in the kit when active

### Automation Notes
- **Parameter Automation**: All parameters can be automated using FL Studio's automation system
- **Pad Parameter Automation**: Individual pad parameters can be automated
- **Layer Parameter Automation**: Layer-specific parameters can be automated
- **Real-time Parameter Changes**: Parameters can be adjusted in real-time without stopping playback

### Gotchas
- **Parameter Extremes**: Setting parameters to extreme values may cause unexpected behavior
- **Velocity Range Overlap**: Overlapping velocity ranges can cause unintended layer triggering
- **Mixer Routing Changes**: Changing mixer routing during playback may cause audio discontinuities
- **Layer Count Limits**: Very high layer counts may impact performance
- **Sample Format Compatibility**: Not all sample formats may be fully compatible
- **CPU Usage**: Complex kits with many layers may increase CPU usage significantly
- **MIDI Note Mapping**: Changing pad MIDI note assignments may affect existing patterns
- **Pattern Compatibility**: Patterns may not transfer correctly between different pad mappings