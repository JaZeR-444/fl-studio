# Wasp Live Performance Guide

## Performance Setup Configuration

### Essential Equipment Requirements
**Core Equipment**:
- Laptop with adequate CPU (8GB+ RAM recommended)
- Professional audio interface with low latency
- High-quality microphone for modulator
- MIDI keyboard or controller for Wasp
- Backup power supply and essential cables
- Foot pedals for hands-free control

**Enhanced Setup**:
- Foot pedals for envelope and filter control
- Tablet for preset management
- Backup audio interface and cables
- Power conditioning for stable performance

### Controller Mapping for Live Use

#### Essential Parameters to Map
**Primary Controls**:
- **Filter Cutoff**: Primary sound character control
- **Filter Resonance**: Filter intensity and character
- **Oscillator 1**: Primary wave selection
- **Oscillator 2**: Secondary wave with detune
- **Sync**: Hard sync for aggressive sounds
- **Envelope**: ADSR with fast attack for percussive
- **LFO**: Low-frequency modulation

**Secondary Controls**:
- **Detune**: Oscillator 2 tuning control
- **LFO Rate**: Modulation speed control
- **LFO Depth**: Modulation amount control
- **Freeze**: Hold current analysis
- **Preset Selection**: Quick preset switching

#### Controller Types and Mappings

**Foot Controller Setup**:
```
Footswitch 1: Wasp Bypass/Enable
Footswitch 2: Preset Next
Footswitch 3: Preset Previous  
Footswitch 4: Filter Cutoff
Footswitch 5: Resonance Control
Expression Pedal: Detune or LFO Depth
```

**MIDI Keyboard Setup**:
```
Mod Wheel: Filter Cutoff
Pitch Bend: Oscillator 1 Detune
Aftertouch: Filter Resonance
Sustain: Wasp Enable/Bypass
Program Change: Preset Selection
Control Change: Oscillator 2 Waveform
```

**Knob/Fader Controller Setup**:
```
Knob 1: Oscillator 1 Filter Cutoff
Knob 2: Oscillator 1 Detune
Knob 3: Filter Resonance
Knob 4: LFO Rate
Knob 5: LFO Depth
Fader 1: Oscillator 1 Mix
Fader 2: Oscillator 2 Mix
Fader 3: Output Level
```

### Live Performance Techniques

#### Real-Time Sound Manipulation

**Dynamic Parameter Control**
- **Filter Sweeps**: Smooth filter movement
- **Oscillator Sync**: Create movement
- **Detune Morphing**: Dynamic tuning changes
- **LFO Control**: Add modulation and movement
- **Envelope Control**: Shape dynamics in real-time

**Creative Performance Applications**:
- **Parameter Morphing**: Smooth transitions between settings
- **Multi-Preset Morphing**: Crossfade between sounds
- **Automation Recording**: Capture parameter movements
- **Freeze Function**: Hold current settings
- **Parameter Locking**: Lock parameters while varying others

### Set Structure Management

#### Song Section Settings
**Performance Mapping**:
```json
{
  "songStructure": {
    "intro": {
      "filterCutoff": 50,
      "resonance": 70,
      "envelope": {
        "attack": 0.01,
        "decay": 0.5,
        "sustain": 30
      },
      "detune": 5,
      "description": "Subtle support for opening"
    },
    "verse": {
      "filterCutoff": 70,
      "resonance": 70,
      "envelope": {
        "attack": 0.01,
        "decay": 0.3,
        "sustain": 50
      },
      "detune": 5,
      "description": "Classic Wasp character for verses"
    },
    "preChorus": {
      "filterCutoff": 75,
      "resonance": 80,
      "envelope": {
        "attack": 0.001,
        "decay": 0.05,
        "sustain": 40
      },
      "detune": 5,
      "oscSync": true,
      "osc2Wave": "sawtooth",
      "description": "Building tension before chorus"
    },
    "chorus": {
      "filterCutoff": 85,
      "resonance": 80,
      "envelope": {
        "attack": 0.001,
        "decay": 0.02,
        "sustain": 20,
      },
      "detune": 0,
      "description": "Maximum effect for main section"
    },
    "bridge": {
      "filterCutoff": 65,
      "resonance": 70,
      "envelope": {
        "attack": 0.002,
        "decay": 0.08,
        "sustain": 40,
      },
      "detune": 0,
      "oscSync": true,
      "osc2Wave": "sawtooth",
      "description": "Different character for bridge"
    },
    "solo": {
      "filterCutoff": 90,
      "resonance": 90,
      "envelope": {
        "attack": 0.001,
        "decay": 0.01,
        "sustain": 10,
      },
      "detune": 10,
      "oscSync": true,
      "osc2Wave": "square",
      "description": "Maximum intensity for solo"
    },
    "outro": {
      "filterCutoff": 50,
      "resonance": 70,
      "envelope": {
        "attack": 0.002,
        "decay": 0.15,
        "sustain": 60,
      },
      "detune": 0,
      "description": "Fade out with reduced character"
    }
  }
}
```

#### Genre-Specific Setups
**Electronic Music Sets**:
- **EDM Leads**: High oscillator sync, aggressive settings
- **Techno Rhythms**: Complex patterns, fast rates
- **Ambient Pads**: Slow movement, evolving textures
- **Build-Ups**: Gradual intensity increases

**Rock and Pop Sets**:
- **Classic Rock**: 4-stage settings, aggressive character
- **Lead Solos**: 6-stage sync, full character
- **Rhythm Support**: Medium settings, versatile play

**Performance Sets**:
- **Live Performance**: Optimized for low latency
- **Studio Recording**: High-quality settings
- **Minimal CPU**: Reduced instance count

### Improvisation and Expression

#### Real-Time Sound Manipulation
**Dynamic Parameter Control**:
- **Filter Control**: Real-time filter sweeps
- **Detune Morphing**: Dynamic tuning adjustments
- **LFO Integration**: Creative LFO use

**Creative Performance Techniques**:
- **Multiple Instance**: Layer multiple Wasp sounds
- **Parallel Processing**: Different routing approaches
- **Randomized Control**: Unpredictable variations
- **Experimental Settings**: Push parameters to limits

## Troubleshooting Live Issues

### Technical Problems

#### Audio Issues
**No Sound Output**:
1. Check all audio connections
2. Verify mixer gain routing
3. Check for clipped signals
4. Test with known good preset

**High CPU Usage**:
1. Reduce oscillator count to 2
2. Increase buffer size
3. Disable other applications
4. Render tracks when possible

**Audio Glitches**:
1. Increase buffer size
2. Check for driver updates
3. Check for system overload
4. Test with simplified settings

#### Latency Problems**:
1. Check buffer size settings
2. Verify PDC compensation
3. Optimize system performance
4. Check for software monitoring

### MIDI Controller Problems
**Controller Not Responding**:
1. Check MIDI connections
2. Verify MIDI channel assignments
3. Test with different controllers
4. Update MIDI controller firmware
5. Re-learn parameter mappings

### Creative Problems
#### Wasp Sounds Wrong
**Solutions**:
1. Use slower LFO rates
2. Reduce resonance and detune
3. Use appropriate oscillator waveforms
4. Reference original hardware characteristics
5. Test with simpler settings

#### Performance Fatigue
**Technical Solutions**:
- Simplify control assignments
- Use backup simpler setup
- Take breaks between long performances
- Maintain comfortable playing posture

### Equipment Recovery

#### Technical Failures
**Audio Interface Problems**:
1. Switch to backup audio interface
2. Use direct monitoring
3. Have backup cables ready
4. Restart audio interface

**System Failures**:
1. Use backup computer system
2. Restart DAW if needed
3. Load simplified settings
4. Reopen project

## Preparation and Practice

### Pre-Performance Setup
**Equipment Check**:
- [ ] Audio interface connected and tested
- [ ] MIDI controllers mapped and working
- [ ] Presets organized and loaded
- [ ] Backup equipment available and tested
- [ ] Monitor levels set appropriately

**Technical Preparation**:
- [ ] System optimized for performance
- [ ] All drivers updated and tested
- [ ] All software closed
- [ ] Memory available for plugins

**Practice Techniques**
- **Parameter Control Practice**:
- Practice smooth parameter changes
- Master preset switching without disruption
- Develop muscle memory for controls
- Practice emergency procedures

#### Set Design Practice
**Structural Planning**:
- Map Wasp intensity to song dynamics
- Plan preset changes for smooth transitions
- Design control flow for intuitive operation
- Prepare backup plans for equipment failures

## Professional Best Practices

### Set Management
#### Energy Planning
- **Dynamic Arc**: Plan Wasp intensity throughout performance
- **Audience Engagement**: Adjust for crowd response
- **Song Flow**: Smooth transitions between songs
- **Peak Moments**: Maximum effect at impact points

#### Repertoire Organization
- **Preset Banks**: Organized by musical style
- **Quick Access**: Frequently used presets easily reachable
- **Backup Plans**: Alternative settings for each song

### Technical Excellence
#### Reliability Measures
- **Equipment Redundancy**: Critical systems doubled
- **Backup Configuration**: Quick switch to simple setup
- **Testing Protocol**: Thorough pre-show verification
- **Emergency Procedures**: Clear action plans

#### Performance Optimization
- **Buffer Management**: Balance latency and stability
- **CPU Monitoring**: Watch system performance
- **Audio Quality**: Maintain consistent monitoring

### Post-Performance
- **Review and Documentation**:
- **Performance Notes**: Record what worked and didn't
- **Settings Archive**: Save successful configurations
- **Equipment Notes**: Document any issues or needs
- **Improvement Planning**: Plan adjustments for next performance

### Maintenance
- **Regular Maintenance**:
- [ ] Daily checks for connections and functionality
- [ ] Weekly updates and tests
- [ ] Monthly comprehensive testing
- [ ] Quarterly deep system cleanup

**Creative Maintenance**
- **Inspiration and Ideas**:
- [ ] Sound design journal
- [ ] Experimentation with unusual settings
- [ ] Learning about new techniques
- [ ] Community engagement
- [ ] Documentation maintenance

- **Skill Development**:
- [ ] Technical skills development
- [ ] Creative practice and experimentation
- [ ] Learning from other users
- [ ] Knowledge sharing

### Environmental Considerations
- **Acoustic Environment**:
- [ ] Consistent temperature and humidity
- [ ] Minimize background noise
- [ ] Ensure proper electrical grounding
- [ ] Position equipment optimally
- [ ] Monitor room acoustics

- **Electrical Issues**:
- [ ] Surge protection setup
- [ ] Power quality management
- [ ] Cable management
- [ ] Check for interference

### Safety and Reliability
- **Equipment Protection**:
- [ ] Connection security
- [ ] Strain relief on cables
- [ ] Protect connectors from damage
- [ ] Secure equipment placement
- [ ] Power conditioning equipment

### Emergency Procedures

#### Technical Failures**:
- **Audio Interface Failure**: Switch to backup interface
- **Computer Failure**: Use simplified setup
- **Equipment Damage**: Continue with reduced complexity
- **System Failure**: Reboot system

**Performance Recovery**:
- **Sound Quality Issues**: Use simpler preset
- **Timing Issues**: Increase buffer or manual timing
- **CPU Issues**: Reduce processing complexity

## Multi-Instance Management

### Parallel Processing
- **Instance Roles**:
- **Instance 1**: Aggressive lead Wasp
- **Instance 2**: Atmospheric texture Wasp
- **Instance 3**: Subtle pad Wasp

**Synchronization**:
- **Parameter Linking**: Shared control across instances
- **Clock Sync**: Common MIDI clock
- **Preset Coordination**: Synchronized changes
- **Phase Coherence**: Maintained phase relationships

#### Dynamic Layer Control
- **Blend Control**: Crossfade between instances
- **Routing Control**: Independent signal paths
- **Mix Automation**: Coordinated dry/wet balance

## Advanced Live Applications

### Multi-Instance Performance

#### Multi-Layer Design**
**Instance Roles**:
- **Layer 1**: Foundation with aggressive character
- **Instance 2**: Harmonic content layer
- **Instance 3**: Atmosphere and texture
- **Instance 4**: Effects layer and special processing

**Creative Layering Techniques**:
- **Frequency Splitting**: Different processing per layer
- **Stereo Enhancement**: Width and imaging
- **Dynamic Routing**: Switching between layer configurations
- **Processing Chains**: Complex routing schemes

#### Resource Management
- **CPU Efficiency**: Optimal parameter usage
- **Instance Limitation**: Maximum with quality settings
- **Memory Usage**: Efficient signal flow

### Real-Time Control

#### Advanced Control Strategies
- **Multi-Parameter Control**: Complex parameter changes
- **MIDI Learn**: Custom parameter mapping
- **Expression Pedals**: Continuous control
- **Gesture Control**: Physical movement-based changes
- **Performance Recording**: Capture parameter movements

#### Creative Applications
- **Experimental Settings**:
- **Extreme Parameters**: Push to limits
- **Randomization**: Generate unexpected results
- **Sound Design**: Create unique textures
- **Advanced Routing**: Complex signal paths
- **Cross-Modulation**: Inter-band effects

### Performance Optimization

#### Setup Optimization
- **Buffer Management**: Balance latency and stability
- **System Configuration**: Optimize for audio
- **Multi-Threading**: Distribute processing load
- **Plugin Management**: Limit concurrent instances
- **Background Processes**: Disable applications

**Audio Quality**:
- **Signal Integrity**: Proper gain staging
- **Headroom Management**: Avoid clipping and distortion
- **Noise Floor Control**: Minimize added noise
- **Monitoring Setup**: Professional monitoring

#### Monitoring Setup**:
- **Studio Monitors**: Calibrated monitoring environment
- **Headphone Monitoring**: Detailed checking
- **Metering**: Visual level analysis
- **A/B Testing**: Compare with/without Wasp

### Advanced Live Applications

### Multi-Wasp Layering
#### Parallel Routing Strategies**:
- **Send/Return Architecture**:
```
Dry Signal → Master Bus
                ↘
                → Wasp 1 → Return Bus → Master Bus
                → Wasp 2 → Return Bus → Master Bus
                → Wasp 3 → Effects Bus → Master Bus
```

- **Frequency-Specific Processing**:
- **Low Bus**: Sub-bass Wasp
- **Mid Bus**: Vocal/keyboard Wasp
- **High Bus**: Harmonic Wasp
- **FX Bus**: Effects processing and textures

**Dynamic Mix Control**:
- **Global Mix**: Proportional blending
- **Independent Levels**: Separate control per instance
- **Automated Changes**: Synchronized parameter modifications
- **Fade Control**: Crossfade between instances
- **Priority Control**: Dynamic level importance

### Creative Performance

#### Multi-Wasp Ensemble Techniques
- **Orchestration**: Multiple Wasp voices in harmony
- **Counterpoint**: Independent melodic lines
- **Layering**: Complex harmonic relationships
- **Spatial Distribution**: Different stereo positions per voice

#### Advanced Layering Techniques
- **Polyphony Creation**: Multi-voice chord progressions
- **Randomized Layering**: Controlled chaos
- **Programmed Changes**: Synchronized parameter evolution

## Troubleshooting Live Issues

### Emergency Procedures

#### Sound Recovery
- **Quick Switch**: Switch to backup preset
- **Simple Settings**: Use minimal Wasp configuration
- **Hardware Backup**: Switch to alternate equipment
- **Manual Control**: Parameter control via computer/keyboard

#### Technical Recovery
- **Interface Reset**: Restart audio interface
- **System Reboot**: Reboot DAW if needed
- **Project Recovery**: Load simplified project version

### Backup and Recovery
- **Data Recovery**:
- **Preset Exports**: Export successful configurations
- **Cloud Backup**: Automatic cloud synchronization
- **Local Backup**: External drive copies
- **Version Control**: Track preset evolution
- **Emergency Recovery**: Restore from backup location

## Best Practices

### Documentation Standards
- **System Documentation**: Hardware configurations
- **Preset Documentation**: Parameter settings and notes
- **Troubleshooting Logs**: Issue resolution tracking
- **Performance Notes**: Live performance insights

### Communication Standards
- **Issue Reporting**: Detailed problem descriptions
- **Equipment Notes**: Technical specifications
- **Service Delivery**: Professional communication
- **User Experience**: Satisfaction tracking

### Professional Excellence
- **Reliability**: Redundant systems
- **Performance Stability**: Consistent quality delivery
- **Continuous Improvement**: Ongoing skill development
- **Client Communication**: Professional communication

## Creative Development
- **Innovation Documentation**: Sound design discoveries
- **Experimentation Results**: Creative process documentation
- **Collaboration**: Shared creative work
- **Skill Development**: Continuous learning and practice
- **Community Sharing**: Knowledge contribution

### Platform Integration
- **Cross-DAW Workflow**: Seamless integration between DAWs
- **Cloud Collaboration**: Remote project sharing
- **Version Control**: Consistent versions
- **Format Support**: Universal compatibility

## Genre-Specific Applications

#### Electronic Music Performance**
- **EDM Production**:
- **High Wasp**: Fast, aggressive character for leads
- **Complex Patterns**: Rhythmic precision
- **Build-Ups**: Gradual intensity increases
- **Drop Optimization**: Maximum filter engagement

#### Rock Performance**:
- **Classic Rock**: Traditional Wasp character
- **Lead Solos**: Expressive control techniques
- **Rhythm Section**: Support rhythmic elements
- **Vocal Wasp**: Textural enhancement options

#### Ambient Performance**:
- **Ethereal Textures**: Slow, evolving soundscapes
- **Atmospheric Pads**: Long release times, minimal movement
- **Drone Creation**: Environmental sound generation

#### Live Performance Optimization**
- **CPU Efficiency**: Limit instances and optimize settings
- **Memory Management**: Efficient resource usage
- **Latency Management**: Critical for live use
- **System Optimization**: Background process optimization

**Audio Quality**:
- **Signal-to-Noise**: Highest possible ratio
- **Dynamic Range**: Optimal volume range
- **Frequency Response**: Linear across frequency spectrum
- **Stereo Imaging**: Precise control
- **Monitor Quality**: Studio-grade accuracy
- **Latency**: Consistent below 10ms