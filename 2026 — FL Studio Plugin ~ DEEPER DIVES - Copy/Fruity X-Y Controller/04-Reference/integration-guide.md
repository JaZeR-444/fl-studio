# Integration Guide

## Working with Other FL Studio Components

### Integration with Other Controllers

#### Formula Controller
**Use case**: Complex logic and conditional modulation

**Setup**:
1. X-Y Controller → Formula Controller → Targets
2. Formula applies mathematical logic
3. Example: "If X > 50 AND Speed > 20, then output = 100"

**Hip-hop application**:
- Context-aware macros (different response based on conditions)
- Dynamic thresholds that adapt to performance
- Scale and offset calculations

#### Peak Controller
**Use case**: Audio-reactive modulation

**Setup**:
1. Audio source → Peak Controller → X-Y Controller
2. Or: X-Y Controller → Peak Controller → Targets
3. Creates interaction between audio and performance

**Hip-hop application**:
- 808 hits trigger filter changes
- Vocal transients activate de-essing
- Drum accents drive compression

#### LFO Controller
**Use case**: Automated + performed modulation

**Setup**:
1. LFO provides base modulation
2. X-Y Controller overrides or scales LFO
3. Y = LFO depth/intensity
4. Result: Automated foundation + human override

**Hip-hop application**:
- Constant filter wobble (LFO) + performance sweeps (X-Y)
- Automated tremolo + manual accent control
- Best of both worlds: consistency + expression

#### Keyboard Controller
**Use case**: Note-based modulation triggers

**Setup**:
1. MIDI notes trigger different X-Y states
2. Different keys = different pad positions
3. Play keyboard to "perform" X-Y presets

**Hip-hop application**:
- Keyboard-controlled filter states
- Note-triggered macro switches
- Musical control of modulation

### Integration with Mixer

#### Send Controls
**Use case**: Dynamic effect sends

**Setup**:
1. X-Y → Send level (reverb, delay, etc.)
2. Real-time spatial manipulation
3. Different sends respond to different outputs

**Hip-hop application**:
- X = Reverb send, Y = Delay send
- Diagonal gestures = blended spatial effects
- Per-track send automation

#### Channel Volume/Pan
**Use case**: Dynamic mixing

**Setup**:
1. X-Y → Channel volume
2. X-Y → Pan position
3. Performance-based mixing moves

**Hip-hop application**:
- Live vocal "rides"
- Drum fill volume swells
- Panning performance elements

#### Sidechain Source
**Use case**: Dynamics-based control

**Setup**:
1. X-Y Controller output → Sidechain input
2. Modulate sidechain depth/intensity
3. Different ducking per section

**Hip-hop application**:
- X-Y controlled sidechain for 808/kick relationship
- Performance-based pumping
- Dynamic mix glue

### Integration with Playlist

#### Automation Clips
**Use case**: Recorded and edited modulation

**Workflow**:
1. Record X-Y performance as automation clip
2. Edit in playlist (cut, move, scale)
3. Blend multiple takes
4. Apply quantization and smoothing

**Best practices**:
- Use descriptive names for automation clips
- Color-code by controller/output
- Group related automation

#### Pattern-Based Control
**Use case**: Controller tied to specific patterns

**Setup**:
1. Place X-Y Controller in channel rack
2. Trigger patterns that affect controller
3. Or: Controller affects pattern playback

**Hip-hop application**:
- Different X-Y settings per drum pattern
- Pattern-triggered state switches
- Coordinated pattern + modulation

#### Arrangement Integration
**Use case**: Section-based controller behavior

**Workflow**:
1. Automate X-Y position per song section
2. Different mappings for verse/chorus/drop
3. Smooth transitions between sections

**Best practices**:
- Plan controller behavior in arrangement
- Use automation to switch between mapping presets
- Coordinate with overall song structure

### Integration with Plugins

#### Native FL Plugins
All FL Studio native plugins support full X-Y Controller integration:

- **Fruity Parametric EQ 2**: Filter sweeps, EQ automation
- **Fruity Reverb 2**: Space modulation, room morphing
- **Fruity Delay 3**: Echo control, feedback manipulation
- **Fruity Compressor**: Dynamic control, glue automation
- **Fruity Waveshaper**: Distortion character
- **Fruity Fast LP**: Quick filtering
- **Fruity Filter**: Classic filter sweeps

#### Third-Party VST Support
Most VST plugins support X-Y Controller through parameter linking:

**Compatible plugin types**:
- VST2 with parameter automation
- VST3 with full FL Studio integration
- Most modern plugins work seamlessly

**Troubleshooting**:
- Some older VST2 plugins have limited parameter exposure
- Check "Browse parameters" if parameter not visible
- Use wrapper settings for problematic plugins

### Integration with Browser

#### Preset Management
**Use case**: Save and load X-Y configurations

**Workflow**:
1. Save controller settings as .fst preset
2. Save in dedicated X-Y Controller folder
3. Include mapping documentation
4. Share with collaborators

**Organization**:
```
Browser → Plugin presets → Fruity → X-Y Controller
├── Macro - Drop Build.fst
├── Macro - Vocal Presence.fst
├── Performance - Filter Sweeps.fst
└── State - Drum Kit A.fst
```

#### Template Projects
**Use case**: Starting points for common setups

**Create templates for**:
- Trap production with X-Y mappings
- R&B vocal chain templates
- Drum bus processing setups
- Sample chop performance rigs

### Integration with MIDI

#### MIDI Controller Mapping
**Use case**: External hardware control of X-Y

**Setup**:
1. MIDI CC → X-Y position
2. Map knobs/faders to X and Y
3. Or: Map X-Y to send MIDI out

**Hardware options**:
- XY pads on MIDI controllers (natural fit)
- Two separate faders (one for X, one for Y)
- Touch surfaces and tablets

#### MIDI Output
**Use case**: X-Y Controller as MIDI source

**Setup**:
1. Enable MIDI output on X-Y Controller
2. Route to external hardware
3. Control hardware synths/effects

### Integration with Patcher

#### Visual Control Rigs
**Use case**: Complex, visual modulation setups

**Setup**:
1. Load X-Y Controller in Patcher
2. Add multiple targets
3. Create visual routing
4. Save as Patcher preset

**Hip-hop applications**:
- Multi-instrument macros
- Complex vocal processing chains
- Drum bus + individual drum coordination
- Visual feedback for live performance

### Integration with Gross Beat

#### Time and Volume Manipulation
**Use case**: Controlled stutter and time effects

**Setup**:
1. X-Y → Gross Beat slot selection
2. Different pad zones = different time effects
3. Or: X-Y → Mix knob for effect blend

**Hip-hop application**:
- Live stutter performance
- Time-stretch modulation
- Volume envelope control
- Signature time-effect macros

### Integration with NewTone/NewTime

#### Pitch and Time Correction
**Use case**: Controlled vocal manipulation

**Setup**:
1. X-Y → Pitch correction amount
2. X-Y → Time correction strength
3. Performance-based correction

**Hip-hop application**:
- Subtle pitch correction rides
- Time correction intensity modulation
- Creative vocal effects

## Best Practices for Integration

### Project Organization
1. **Name controllers clearly**: "X-Y - Drum Bus" not "Fruity X-Y Controller #3"
2. **Color-code channels**: Match controller color to target color
3. **Group related items**: Drum bus controller with drum tracks

### Documentation
1. **Save presets with descriptions**: What does this macro do?
2. **Note gesture patterns**: How should this be performed?
3. **Include mapping lists**: What parameters are controlled?

### Collaboration
1. **Share presets**: .fst files with documentation
2. **Use consistent naming**: So other producers understand
3. **Include performance notes**: How to use the setup

## Advanced Integration Workflows

### The Master Control Rig
**Setup**: One X-Y Controller → Everything

**Implementation**:
1. X-Y → Multiple mixer sends
2. X-Y → Multiple instrument parameters
3. X-Y → Effects chain macros
4. One gesture = full mix transformation

**Use**: Live performance, DJ sets, remixing

### The Split Personality
**Setup**: Multiple X-Y Controllers for different purposes

**Implementation**:
1. Controller 1: Drum bus
2. Controller 2: Vocals
3. Controller 3: Samples
4. Independent control per element

**Use**: Detailed studio production, precise control

### The Conditional Orchestra
**Setup**: Controllers trigger other controllers

**Implementation**:
1. Peak Controller detects 808
2. Triggers X-Y state change
3. X-Y then affects reverb
4. Result: 808 hits cause space changes

**Use**: Responsive, intelligent mixes

[SRC: IL-MAN] - Reference Image-Line documentation for specific implementation details
