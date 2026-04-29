# FL Studio Mobile - Controls Reference

## Parameter List with Descriptions

### Project Management Controls

**Project Load/Save**
- **Description**: Controls for loading and saving mobile projects
  - Load FLM files created on mobile devices
  - Save current project as FLM format
  - Export audio and MIDI from the mobile environment
- **Range**: File browser interface
- **Effect**: Changes the entire project content
- **Use for**: Cross-platform project management
- **Pro tip**: Use cloud storage to sync projects between mobile and desktop

**Template Selection**
- **Description**: Pre-made project templates for different music styles
  - EDM templates with basic drum patterns
  - Hip-hop templates with beat-focused layouts
  - Ambient templates with pad-focused arrangements
- **Range**: Multiple template options
- **Effect**: Sets up initial project structure
- **Use for**: Quick project starting points
- **Pro tip**: Customize templates to match your preferred workflow

### Transport Controls

**Play/Stop**
- **Description**: Basic transport control for playback
  - Large, touch-friendly button
  - Visual feedback for playback status
- **Range**: On/Off
- **Effect**: Starts/stops project playback
- **Use for**: Basic playback control
- **Pro tip**: Use with pattern selection for arrangement control

**Record**
- **Description**: Recording control for capturing new content
  - Records MIDI input to current pattern
  - Visual feedback for recording status
- **Range**: On/Off
- **Effect**: Enables recording of new musical events
- **Use for**: Capturing new ideas and patterns
- **Pro tip**: Use with quantization for precise timing

**Loop Toggle**
- **Description**: Controls whether playback loops at pattern end
  - On: Loops current pattern
  - Off: Plays through to next pattern
- **Range**: On/Off
- **Effect**: Changes playback behavior
- **Use for**: Practice and development
- **Pro tip**: Essential for pattern-based development

### Pattern Management Controls

**Pattern Selector**
- **Description**: Selects which pattern is currently active
  - 1-99 pattern numbers available
  - Visual indication of current pattern
  - Pattern length settings
- **Range**: 1-99 patterns
- **Effect**: Changes which pattern is being edited/played
- **Use for**: Arranging and developing different sections
- **Pro tip**: Use different patterns for different song sections

**Pattern Length**
- **Description**: Sets the length of the current pattern
  - Options typically include 1/4, 1/2, 1, 2, 4, 8, 16 bars
  - Affects step sequencer length
- **Range**: 1/4 to 16 bars
- **Effect**: Changes pattern duration
- **Use for**: Matching pattern length to musical content
- **Pro tip**: Use shorter patterns for rhythmic elements, longer for melodic content

### Track Controls

**Track Volume**
- **Description**: Individual track volume control
  - Vertical fader interface
  - Touch-optimized for mobile interaction
- **Range**: -∞ to +6dB typically
- **Effect**: Changes individual track level
- **Use for**: Balancing track levels
- **Pro tip**: Use with automation for dynamic changes

**Track Pan**
- **Description**: Individual track panning control
  - Horizontal slider
  - Center position at 50%
- **Range**: Left to Right (typically 0-100%)
- **Effect**: Changes stereo position of track
- **Use for**: Stereo placement
- **Pro tip**: Use for creating space in dense arrangements

**Track Mute/Solo**
- **Description**: Mute and solo controls for individual tracks
  - Large, touch-friendly buttons
  - Visual feedback for mute/solo status
- **Range**: On/Off
- **Effect**: Mutes or solos individual tracks
- **Use for**: Listening to specific elements
- **Pro tip**: Use mute to create pattern variations

### Hex Pad Controls

**Pad Sensitivity**
- **Description**: Controls how responsive the hex pads are to touch
  - Affects velocity response curve
  - Optimized for touch interaction
- **Range**: Low to High sensitivity
- **Effect**: Changes how velocity is interpreted from pad touches
- **Use for**: Matching pad response to playing style
- **Pro tip**: Adjust based on whether using touch or mouse

**Pad Assignment**
- **Description**: Maps hex pads to specific drum sounds or notes
  - Can assign different samples to each pad
  - Visual indication of assigned sounds
- **Range**: MIDI note assignments
- **Effect**: Changes which sounds are triggered by pads
- **Use for**: Custom drum kit creation
- **Pro tip**: Use for creating custom drum mappings

### Instrument Parameters (GMS)

**Sample Selection**
- **Description**: Chooses which sample is loaded in GMS
  - Browse and load samples
  - Sample preview capability
- **Range**: All compatible sample formats
- **Effect**: Changes the sound source
- **Use for**: Changing instrument sounds
- **Pro tip**: Use with sample packs for expanded sound palette

**Pitch Control**
- **Description**: Adjusts the pitch of the loaded sample
  - Semitone and cent adjustments
  - Visual pitch display
- **Range**: Typically ±24 semitones
- **Effect**: Changes sample pitch
- **Use for**: Tuning samples to project key
- **Pro tip**: Use for creating drum kit variations

**Filter Controls**
- **Description**: Low-pass filter with cutoff and resonance
  - Cutoff: Controls filter frequency
  - Resonance: Controls filter emphasis
- **Range**: 0-100% for both parameters
- **Effect**: Shapes frequency content
- **Use for**: Tone adjustment
- **Pro tip**: Use for creating tonal variations

### Instrument Parameters (MiniSynth)

**Oscillator Controls**
- **Description**: Basic subtractive synthesis parameters
  - Waveform selection (sine, triangle, saw, square)
  - Octave and fine tuning
- **Range**: Various waveform options
- **Effect**: Changes oscillator output
- **Use for**: Basic sound design
- **Pro tip**: Use different waveforms for different character

**Envelope Controls**
- **Description**: ADSR envelope parameters
  - Attack: Time to reach peak amplitude
  - Decay: Time to reach sustain level
  - Sustain: Level maintained during note hold
  - Release: Time to fade after note release
- **Range**: 0-100% for each parameter
- **Effect**: Shapes note envelope
- **Use for**: Controlling note shape and duration
- **Pro tip**: Use longer releases for pad sounds

**Filter Controls (MiniSynth)**
- **Description**: Subtractive synthesis filter
  - Cutoff: Filter frequency
  - Resonance: Filter emphasis
  - Envelope: Amount of envelope modulation
- **Range**: 0-100% for each parameter
- **Effect**: Shapes frequency content
- **Use for**: Tone shaping
- **Pro tip**: Use envelope modulation for classic synth sounds

### Effects Parameters

**Reverb**
- **Description**: Built-in reverb effect
  - Size: Room size simulation
  - Decay: Reverb duration
  - Mix: Dry/wet balance
- **Range**: 0-100% for each parameter
- **Effect**: Adds spatial depth
- **Use for**: Creating space and depth
- **Pro tip**: Use sparingly to avoid muddiness

**Delay**
- **Description**: Built-in delay effect
  - Time: Delay interval
  - Feedback: Number of repeats
  - Mix: Dry/wet balance
- **Range**: 0-100% for each parameter
- **Effect**: Adds echo and space
- **Use for**: Creating depth and rhythm
- **Pro tip**: Sync to project tempo for rhythmic effects

**Chorus**
- **Description**: Built-in chorus effect
  - Rate: Modulation speed
  - Depth: Modulation amount
  - Mix: Dry/wet balance
- **Range**: 0-100% for each parameter
- **Effect**: Adds width and movement
- **Use for**: Creating width and interest
- **Pro tip**: Use on melodic elements for added richness

## Default Values and Safe Starting Ranges

### Transport Defaults
- **Play/Stop**: Stop state initially
- **Record**: Disabled initially
- **Loop**: Off initially
- **Safe Range**: Start with loop off for linear playback

### Pattern Defaults
- **Pattern Length**: 4 bars (typical)
- **Current Pattern**: Pattern 1
- **Safe Range**: 1-4 bars for most applications

### Track Defaults
- **Volume**: 0dB (unity gain)
- **Pan**: Center (50%)
- **Mute/Solo**: Off initially
- **Safe Range**: -6dB to +6dB for volume, 25-75% for pan

### Hex Pad Defaults
- **Sensitivity**: Medium (50%)
- **Pad Assignment**: Default drum kit mapping
- **Safe Range**: 30-70% for sensitivity

### Instrument Defaults (GMS)
- **Sample**: Default kick drum
- **Pitch**: Unity (0 cents)
- **Filter Cutoff**: 100% (fully open)
- **Filter Resonance**: 0% (no emphasis)
- **Safe Range**: Keep resonance below 70% to avoid harshness

### Instrument Defaults (MiniSynth)
- **Waveform**: Sawtooth
- **Attack**: 0% (instant)
- **Decay**: 50% (medium)
- **Sustain**: 70% (medium-high)
- **Release**: 30% (medium)
- **Filter Cutoff**: 80% (open)
- **Filter Resonance**: 20% (slight emphasis)
- **Safe Range**: 10-90% for most parameters

### Effects Defaults
- **Reverb**: Size 50%, Decay 50%, Mix 25%
- **Delay**: Time 50%, Feedback 30%, Mix 20%
- **Chorus**: Rate 50%, Depth 40%, Mix 30%
- **Safe Range**: Keep mix below 50% for subtle effects

## Special Behaviors, Hidden Interactions, Right-Click Options, Integration Points

### Parameter Interactions
- **Pattern + Track**: Changing patterns may load different track settings
- **Transport + Pattern**: Transport position affects which pattern is active
- **Mixer + Sequencer**: Mixer settings affect all patterns on that track
- **Hex Pads + Piano Roll**: Both represent the same note data in different views

### Hidden Interactions
- **Quantization**: Notes may be automatically quantized based on grid settings
- **Snap-to-Grid**: Movement of elements snaps to timing grid
- **Velocity Curves**: Different velocity response curves for various instruments
- **Pattern Linking**: Some parameters may be linked across patterns

### Right-Click Options
- **Parameter Reset**: Right-clicking on controls typically resets to default
- **MIDI Learn**: Right-clicking on parameters reveals MIDI learn options
- **Copy/Paste**: Right-clicking on tracks/patterns allows copying
- **Delete**: Right-clicking on elements allows deletion

### Integration Points
- **MIDI Control**: All parameters can be mapped to MIDI CC messages
- **FL Studio Automation**: Parameters can be automated within FL Studio
- **Analyzer Integration**: Works with FL Studio's built-in spectrum analyzer
- **Mixer Integration**: Output routes to FL Studio's main mixer
- **Patcher Compatibility**: Can be used within Patcher for complex routing

## MIDI/automation notes and gotchas

### MIDI Implementation
- **Note Input**: Accepts standard MIDI note input for all instruments
- **CC Mapping**: Most parameters can be mapped to MIDI CC messages
- **Program Changes**: Can respond to program change messages
- **Aftertouch**: Limited aftertouch support depending on instrument

### Automation Notes
- **Parameter Automation**: All parameters can be automated using FL Studio's automation system
- **Smooth Automation**: The plugin likely applies smoothing to prevent parameter jumps
- **Real-time Parameter Changes**: Parameters can be adjusted in real-time without stopping playback
- **Mobile-Specific Automation**: Some parameters may have mobile-specific automation behaviors

### Gotchas
- **Parameter Extremes**: Setting parameters to extreme values may cause unexpected behavior
- **Pattern Switching**: Automating pattern switching may cause audio discontinuities
- **Track Count Limits**: Mobile projects have different track limits than desktop
- **Sample Compatibility**: Not all sample formats may be fully compatible
- **CPU Usage**: Complex projects with many tracks may increase CPU usage
- **Latency Issues**: Some effects may introduce additional latency
- **MIDI Timing**: Mobile-specific timing may differ from desktop FL Studio
- **File Format Compatibility**: FLM files may have version-specific compatibility issues