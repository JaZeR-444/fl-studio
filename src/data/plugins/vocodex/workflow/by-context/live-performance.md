# Vocodex Live Performance Guide

## Performance Setup Configuration

### Essential Equipment Requirements
**Core Equipment**:
- Laptop with adequate CPU (8GB+ RAM recommended)
- Professional audio interface with multiple inputs
- High-quality microphone for modulator
- MIDI keyboard or controller for carrier synthesis
- Backup power supply and essential cables

**Enhanced Setup**:
- Foot pedals for hands-free control
- Tablet or second computer for preset management
- Backup audio interface and microphones
- Power conditioning for stable performance
- In-ear monitoring system

### Stage Signal Routing Setup

#### Audio Interface Configuration
**Multi-Input Setup**:
```
Microphone → Audio Interface Input 1 → Vocodex Modulator
Synthesizer → Audio Interface Input 2 → Vocodex Carrier
Audio Interface Output → PA System/Interface for Recording
```

**Hardware Mixer Alternative**:
```
Microphones → Hardware Mixer → Audio Interface → Vocodex
Synths → Hardware Mixer → Audio Interface → Vocodex
Main Mixer Output → PA System
```

### Controller Mapping for Live Use

#### Essential Parameters to Map
**Primary Controls**:
- **Band Count**: Adjust intelligibility vs smoothness
- **Attack/Release**: Control responsiveness
- **Dry/Wet Mix**: Balance natural vs effected
- **Bypass**: Toggle vocoder effect on/off
- **Carrier Selection**: Switch between carrier sounds

**Secondary Controls**:
- **Band Overlap**: Adjust smoothness and definition
- **Freeze**: Hold current analysis
- **Preset Selection**: Quick sound switching
- **Output Level**: Final volume control

#### Controller Types and Mappings

**Foot Controller Setup**:
```
Footswitch 1: Vocoder Bypass/Enable
Footswitch 2: Preset Next
Footswitch 3: Preset Previous
Footswitch 4: Freeze Function
Expression Pedal: Band Count or Dry/Wet Mix
```

**MIDI Keyboard Setup**:
```
Mod Wheel: Carrier Pitch Bend
Pitch Bend: Carrier Fine Tuning
Aftertouch: Band Overlap or Attack
Sustain: Vocoder Enable/Bypass
Program Change: Preset Selection
Control Change 1-8: Parameter Assignments
```

**Knob/Fader Controller Setup**:
```
Knob 1: Band Count (4-32)
Knob 2: Attack Time
Knob 3: Release Time
Knob 4: Band Overlap
Fader 1: Dry/Wet Mix
Fader 2: Carrier Volume
Fader 3: Output Level
Fader 4: Carrier Filter Cutoff
```

## Live Performance Techniques

### Real-Time Sound Manipulation

#### Dynamic Parameter Control
**Band Count Control**:
- **Low Bands (4-8)**: Clear articulation, rhythmic effects
- **Medium Bands (12-16)**: Natural speech, general use
- **High Bands (20-24)**: Smooth, musical applications
- **Maximum Bands (32)**: Lush, ambient effects

**Performance Applications**:
- **Verse**: Medium bands for intelligibility
- **Chorus**: High bands for full sound
- **Bridge**: Transition bands for build-ups
- **Solo**: Maximum bands for dramatic effect

#### Attack/Release Control
**Response Character**:
- **Fast Attack/Release**: Articulate, rhythmic
- **Medium Settings**: Balanced, natural speech
- **Slow Settings**: Smooth, flowing, ambient
- **Auto-Mode**: Settings adapt to input dynamics

**Musical Timing**:
- **Synched Performance**: Match to song tempo
- **Expressive Control**: Follow vocal dynamics
- **Gesture Control**: Physical movement-based changes
- **Pattern Recording**: Save and repeat successful manipulations

### Multi-Carrier Performance

#### Carrier Sound Selection
**Performance Setup**:
- **Rich Synth**: Sawtooth or square waves
- **Warm Carrier**: Triangle or pulse waves
- **Textural Carrier**: Noise or field recordings
- **Custom Carrier**: Pre-designed special sounds

**Live Switching**:
- **Footswitch Selection**: Quick carrier changes
- **MIDI Program Change**: Pre-programmed carrier sounds
- **Knob Control**: Real-time parameter adjustment
- **Layered Carriers**: Multiple carriers mixed
- **Morphing**: Smooth transitions between carriers

#### Advanced Carrier Techniques
**Carrier Modulation**:
- **LFO on Carrier**: Movement and interest
- **Filter Sweeps**: Dynamic carrier tone changes
- **Distortion Effects**: Added character and aggression
- **Ring Modulation**: Metallic, percussive effects

### Set Structure Management

#### Song Section Vocoder Settings
**Performance Mapping**:
```json
{
  "songStructure": {
    "intro": {
      "bands": 12,
      "attack": 0.002,
      "release": 0.08,
      "bandOverlap": 40,
      "carrier": "warm_saw",
      "dryWet": 70,
      "description": "Subtle support for song opening"
    },
    "verse": {
      "bands": 16,
      "attack": 0.001,
      "release": 0.06,
      "bandOverlap": 35,
      "carrier": "rich_square",
      "dryWet": 80,
      "description": "Natural speech for verses"
    },
    "preChorus": {
      "bands": 20,
      "attack": 0.001,
      "release": 0.05,
      "bandOverlap": 50,
      "carrier": "bright_saw",
      "dryWet": 90,
      "description": "Building tension before chorus"
    },
    "chorus": {
      "bands": 24,
      "attack": 0.001,
      "release": 0.04,
      "bandOverlap": 60,
      "carrier": "complex_waveform",
      "dryWet": 100,
      "description": "Maximum effect for main section"
    },
    "bridge": {
      "bands": 16,
      "attack": 0.002,
      "release": 0.1,
      "bandOverlap": 45,
      "carrier": "morphing_pulse",
      "dryWet": 75,
      "description": "Different character for bridge"
    },
    "solo": {
      "bands": 32,
      "attack": 0.001,
      "release": 0.03,
      "bandOverlap": 70,
      "carrier": "extreme_carrier",
      "dryWet": 100,
      "description": "Maximum intensity for solo section"
    },
    "outro": {
      "bands": 8,
      "attack": 0.003,
      "release": 0.15,
      "bandOverlap": 30,
      "carrier": "fading_triangle",
      "dryWet": 60,
      "description": "Fade out with reduced vocoding"
    }
  }
}
```

#### Genre-Specific Configurations
**Electronic Music Sets**:
- **EDM Vocoding**: High band counts, fast response
- **Techno Rhythmic**: Pattern-based band changes
- **Ambient Textures**: High bands, slow transitions
- **Experimental**: Extreme settings and carrier sounds

**Rock/Pop Sets**:
- **Musical Vocoding**: Medium bands, natural settings
- **Vocal Enhancement**: Low band overlap, dry/wet balance
- **Classic Sounds**: Traditional vocoder character
- **Modern Production**: Clean, polished settings

### Improvisation and Expression

#### Real-Time Sound Design
**Creative Techniques**:
- **Band Morphing**: Dynamic band count changes
- **Carrier Morphing**: Smooth carrier transitions
- **Effect Intensity**: Live dry/wet manipulation
- **Parameter Automation**: Recorded and looped changes

**Expressive Playing**:
- **Dynamic Response**: Settings adapt to input levels
- **Gesture Control**: Physical movement-based effects
- **Microphonic Variations**: Close mic techniques
- **Audience Interaction**: Respond to crowd energy

#### Multi-Musician Performances

#### Ensemble Configuration
**Multiple Vocoders**:
- **Lead Vocoder**: Main soloist with full control
- **Backing Vocoders**: Support vocoders with simpler settings
- **Harmony Vocoder**: Additional harmony vocoder
- **Effects Vocoder**: Specialized texture vocoder

**Coordination Strategies**:
- **MIDI Clock Sync**: All vocoders synced together
- **Parameter Linking**: Shared control across units
- **Stereo Distribution**: Different positions for each vocoder
- **Mixer Integration**: Centralized level control

## Advanced Live Applications

### Multi-Instance Performance

#### Parallel Processing Setup
**Instance Distribution**:
- **Instance 1**: Low-frequency focused (bass range)
- **Instance 2**: Mid-frequency focused (vocal range)
- **Instance 3**: High-frequency focused (air/sibilance)
- **Instance 4**: Effects layer (freeze, texture)

**Synchronization**:
- **Master Control**: Global parameter changes
- **Preset Coordination**: Synchronized preset changes
- **MIDI Sync**: Common clock and control
- **Automated Changes**: Programmed intensity variations

#### Creative Layering
**Textural Layers**:
- **Background Layer**: Ambient, slow movement
- **Rhythmic Layer**: Pattern-based effects
- **Melody Layer**: Lead vocoder with melody
- **Effect Layer**: Specialized texture generation

**Processing Chains**:
- **Parallel Processing**: Multiple instances in parallel
- **Series Processing**: Vocoder into other effects
- **Hybrid Chains**: Combination of approaches
- **Send/Return**: Effects bus processing

### Performance Enhancements

#### Freeze and Capture
**Freeze Techniques**:
- **Manual Freeze**: Hold current analysis
- **Automated Freeze**: Trigger-based freezing
- **Layered Freeze**: Multiple frozen layers
- **Capture Recording**: Save successful textures

**Texture Creation**:
- **Loop Recording**: Capture and repeat performance
- **Sample Capture**: Record interesting results
- **Preset Creation**: Save discovered sounds
- **Performance Playback**: Recreate live moments

## Troubleshooting Live Issues

### Technical Problems

#### Audio Interface Issues
**No Input Signal**:
1. Check all audio connections
2. Verify audio interface is selected in FL Studio
3. Test microphone and synthesizer individually
4. Check for muted channels
5. Restart audio interface if needed

**High Latency**:
1. Decrease buffer size to 64-128 samples
2. Enable direct monitoring if available
3. Use dedicated ASIO/Core Audio drivers
4. Close other applications
5. Check audio interface settings

#### Vocoder Issues
**Poor Vocal Response**:
1. Check microphone position and type
2. Adjust modulator gain for optimal level
3. Test different band counts and settings
4. Check carrier signal quality
5. Adjust attack/release times

**Carrier Signal Problems**:
1. Verify synthesizer audio connection
2. Check synthesizer volume settings
3. Test different carrier sounds
4. Adjust carrier gain level
5. Check MIDI controller connection

### Performance Problems

**CPU Overload**:
1. Reduce band count from maximum to 16-24
2. Increase buffer size to 256-512 samples
3. Close background applications
4. Use simpler carrier sounds
5. Render tracks when possible

**Audio Glitches**:
1. Check audio cable connections
2. Increase buffer size
3. Update audio interface drivers
4. Reduce CPU load
5. Test with simplified settings

### Creative Problems

**Vocoder Sounds Wrong**:
- **Too Robotic**: Reduce band overlap, adjust attack/release
- **Too Musical**: Increase band overlap, use richer carriers
- **Muddy**: Increase carrier clarity, adjust EQ
- **Inconsistent**: Check input levels, practice technique

**Set Management**:
- **Preset Not Ready**: Have backup simple presets
- **Wrong Genre**: Have genre-specific preset banks
- **Technical Difficulties**: Simplify setup
- **Performance Anxiety**: Practice transitions extensively

## Preparation and Practice

### Pre-Performance Setup
**Equipment Check**:
- [ ] Audio interface connected with multiple inputs
- [ ] Microphone tested and positioned
- [ ] Synthesizer connected and working
- [ ] MIDI controllers mapped and tested
- [ ] All cables checked and secure
- [ ] Power conditioning system connected

**Technical Preparation**:
- [ ] System optimized for performance
- [ ] All software updated and tested
- [ ] Background processes disabled
- [ ] Memory available for plugins
- [ ] All drivers current and stable

### Practice Techniques

#### Skill Development
**Parameter Control Practice**:
- Practice smooth band count changes
- Master carrier switching techniques
- Develop muscle memory for controls
- Practice with monitor or headphones

**Performance Rehearsal**:
- Practice entire set with all changes
- Test transitions between songs and sections
- Practice with backup equipment
- Test emergency procedures

#### Set Design Practice
**Structural Planning**:
- Map vocoder intensity to song dynamics
- Plan preset changes for smooth transitions
- Design control flow for intuitive operation
- Prepare backup plans for equipment failures

## Professional Best Practices

### Set Management

#### Energy Planning
- **Dynamic Arc**: Plan vocoder intensity throughout performance
- **Audience Engagement**: Adjust for crowd response
- **Song Flow**: Smooth transitions between songs
- **Peak Moments**: Maximum effect for impact points

#### Repertoire Organization
- **Preset Banks**: Organized by song or set section
- **Carrier Libraries**: Different sounds for different uses
- **Quick Access**: Frequently used presets easily reachable
- **Backup Plans**: Alternative settings for each song

### Technical Excellence

#### Reliability Measures
- **Equipment Redundancy**: Critical systems doubled
- **Backup Configuration**: Quick switch to simple setup
- **Testing Protocol**: Thorough pre-show verification
- **Emergency Procedures**: Clear action plans for failures

#### Performance Optimization
- **Buffer Management**: Balance latency and stability
- **CPU Monitoring**: Watch system performance
- **Audio Quality**: Maintain consistent monitoring
- **Adaptability**: Adjust to venue acoustics

### Post-Performance

#### Review and Documentation
- **Performance Notes**: Record what worked and didn't
- **Settings Archive**: Save successful configurations
- **Equipment Notes**: Document any issues or needs
- **Improvement Planning**: Plan adjustments for next performance

#### Maintenance Routine
- **Equipment Check**: Inspect all gear after performance
- **Software Updates**: Update plugins and drivers
- **Backup Verification**: Verify all settings are backed up
- **Skill Development**: Plan practice based on performance experience

## Safety and Reliability

### Equipment Protection
**Connection Security**:
- Tape down all connections
- Use strain relief on cables
- Protect connectors from damage
- Secure equipment placement
- Use cable management systems

**Power Management**:
- Use surge protectors
- Have battery backup options
- Check power source quality
- Plan for power failures
- Use conditioned power when possible

### Environmental Considerations
**Acoustic Environment**:
- Position microphones to minimize feedback
- Use directional microphones for isolation
- Monitor venue acoustics
- Position speakers and monitors appropriately
- Use acoustic treatment when available

**Weather Considerations**:
- Protect equipment from moisture
- Consider temperature effects on electronics
- Plan for outdoor performances
- Use wind protection for microphones
- Have weather-appropriate equipment

### Emergency Procedures

#### Technical Failures
**Audio Interface Failure**:
- Switch to backup interface
- Use direct monitoring if available
- Simplify vocoder setup
- Have backup cables and adapters
- Maintain performance with reduced complexity

**Computer Failure**:
- Switch to backup computer
- Use minimal software setup
- Have backup system with essentials
- Use cloud-based presets if available
- Maintain performance quality

**Equipment Damage**:
- Continue performance with limited setup
- Inform venue technician if available
- Use rental equipment if accessible
- Document damage for insurance
- Plan for equipment replacement

### Performance Recovery
**Sound Quality Issues**:
- Switch to backup preset immediately
- Simplify effect configuration
- Reduce processing complexity
- Increase input gain if needed
- Maintain performance despite limitations

**Coordination Recovery**:
- Communicate clearly with other musicians
- Use visual cues and hand signals
- Follow pre-planned emergency procedures
- Maintain professional demeanor
- Minimize disruption to performance