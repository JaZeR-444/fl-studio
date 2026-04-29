# Drumpad Parameter Cheat Sheet

## Overview
Drumpad is FL Studio's MPC-style drum sampler that provides authentic pad-based drum programming experience. This cheat sheet details all parameters and their applications in hip-hop, rap, and R&B production.

## Pad Interface Parameters

### Pad Sensitivity Controls
- **Pad Sensitivity**: Adjusts pad response to touch
  - Range: 1-127 (MIDI velocity values)
  - Default: 64 (medium sensitivity)
  - Low values: Less responsive, requires more force
  - High values: More responsive, light touch triggers
  - Hip-hop tip: Use 70-80 for responsive drum programming

- **Velocity Curve**: Maps input velocity to output
  - Options: Linear, Exponential, Logarithmic, Custom
  - Linear: Direct proportional response
  - Exponential: Emphasizes soft hits, compresses loud hits
  - Logarithmic: Emphasizes loud hits, compresses soft hits
  - Hip-hop tip: Use Exponential for more dynamic expression

- **Pressure Sensitivity**: Response to pad pressure after initial hit
  - Range: 0-100%
  - 0%: No pressure response
  - 50%: Moderate pressure response
  - 100%: Full pressure response
  - Hip-hop tip: Use 30-50% for subtle expression

- **Response Time**: Pad response speed adjustment
  - Options: Fast, Medium, Slow
  - Fast: Immediate response, good for precise timing
  - Medium: Balanced response, good for general use
  - Slow: Smoothed response, good for expressive playing
  - Hip-hop tip: Use Fast for precise beat programming

### Pad Mapping Controls
- **Pad Assignment**: Assign samples to individual pads
  - 16-pad grid (typically arranged 4x4)
  - Each pad can hold one sample
  - Supports drag-and-drop sample assignment
  - Can map multiple samples per pad (velocity layers)
  - Hip-hop tip: Map kick to pad C1, snare to pad D1

- **Velocity Layers**: Multiple samples per pad triggered by velocity
  - Range: 1-8 layers per pad
  - Each layer has velocity range (e.g., 1-32, 33-64, 65-96, 97-127)
  - Allows for dynamic expression
  - Can use different samples for different velocities
  - Hip-hop tip: Use 3-4 layers for drums to capture dynamics

- **Round-Robin**: Alternating samples for realism
  - Options: Off, 2-way, 3-way, 4-way
  - Cycles through samples on successive hits
  - Prevents repetitive sound in rapid sequences
  - Good for realistic drum feel
  - Hip-hop tip: Use for hi-hats and cymbals to avoid repetition

- **Crossfades**: Smooth transitions between samples
  - Range: 0-20ms
  - 0ms: No crossfading
  - 5-10ms: Smooth transitions
  - 15-20ms: Very smooth transitions
  - Hip-hop tip: Use 5-10ms to prevent clicks in loops

## Sample Management Parameters

### Sample Loading Controls
- **Sample Slot**: Container for individual samples
  - Supports multiple formats (WAV, FLAC, MP3, etc.)
  - Drag-and-drop sample loading
  - Browser-based sample selection
  - Sample preview and audition
  - Hip-hop tip: Use high-quality WAV files for drums

- **Key Range**: Keyboard range for sample triggering
  - Range: C-2 to G8 (MIDI notes 0-127)
  - Defines which keys trigger the sample
  - Can be adjusted for sample-specific ranges
  - Hip-hop tip: Map drums to convenient key ranges

- **Root Key**: Reference pitch for sample playback
  - Default: Set automatically based on sample
  - Can be manually adjusted for pitch correction
  - Affects playback pitch across keyboard
  - Hip-hop tip: Set accurately for pitched samples like pianos

### Sample Processing Controls
- **Fine Tune**: Precise pitch adjustment in cents
  - Range: -100 to +100 cents
  - Provides fine-tuning capability
  - 100 cents = 1 semitone
  - Hip-hop tip: Use for perfect sample tuning

- **Stretch Mode**: Time stretching algorithm selection
  - Options: Formant, Natural, Complex, etc.
  - Affects pitch shifting quality
  - Different modes for different sample types
  - Hip-hop tip: Use Natural mode for drums, Complex for vocals

- **Attenuation**: Volume scaling per pad
  - Range: -∞ to +12 dB
  - Adjusts individual sample level
  - Independent of channel fader
  - Hip-hop tip: Set drum samples to appropriate levels

## Sequencing Parameters

### Pattern Controls
- **Step Resolution**: Timing division options
  - Options: 1/4, 1/8, 1/16, 1/32, 1/64
  - 1/4: Quarter note steps
  - 1/8: Eighth note steps
  - 1/16: Sixteenth note steps (most common)
  - 1/32: Thirty-second note steps (for complex patterns)
  - Hip-hop tip: Use 1/16 for most hip-hop patterns

- **Pattern Length**: Adjustable number of steps
  - Range: 4 to 64 steps
  - 16 steps: Standard 4-bar pattern (common)
  - 32 steps: 8-bar pattern
  - 64 steps: 16-bar pattern
  - Hip-hop tip: Use 16 steps for standard patterns

- **Swing**: Timing offset for groove feel
  - Range: 0% to 100%
  - 0%: Straight timing
  - 50%: Standard swing (16th note triplets)
  - 60-70%: Heavy swing feel
  - Hip-hop tip: Use 50-60% for classic hip-hop swing

- **Tempo Sync**: Synchronization with project tempo
  - Options: Off, On
  - Off: Fixed timing regardless of tempo
  - On: Syncs to project tempo changes
  - Hip-hop tip: Keep On for tempo-synced patterns

### Step Sequencing Controls
- **Step Activation**: Individual step on/off
  - Each step can be activated/deactivated
  - Visual indication of active steps
  - Can be programmed in real-time
  - Hip-hop tip: Use for creating complex rhythmic patterns

- **Step Velocity**: Dynamic level per step
  - Range: 1-127 (MIDI velocity values)
  - Controls hit intensity for each step
  - Can create dynamic expression
  - Hip-hop tip: Vary velocities for natural feel

- **Step Duration**: Note length per step
  - Range: 1% to 100% of step length
  - 100%: Full step length
  - 50%: Half step length
  - 25%: Quarter step length
  - Hip-hop tip: Use shorter durations for tight hi-hats

## Performance Controls

### Real-time Performance
- **Performance Pads**: Trigger sounds during performance
  - 16 pads available for live triggering
  - Can map to different samples or patterns
  - Supports velocity sensitivity
  - Hip-hop tip: Map to drum kit for live programming

- **Knob Assignments**: Map parameters to hardware
  - Assign any parameter to controller knobs
  - Real-time parameter adjustment
  - Multiple parameter assignments
  - Hip-hop tip: Assign filter cutoff for real-time sound shaping

- **MIDI Learn**: Assign external controllers
  - Learn function for controller assignment
  - Supports multiple MIDI controllers
  - Real-time parameter mapping
  - Hip-hop tip: Map to DJ controller for live performance

### Transport Controls
- **Play/Pause**: Start/stop playback
  - Can be assigned to controller
  - Starts/stops pattern playback
  - Syncs with project transport
  - Hip-hop tip: Assign to footswitch for hands-free control

- **Record**: Enable pattern recording
  - Arms pattern for recording
  - Records pad hits in real-time
  - Syncs with project timeline
  - Hip-hop tip: Use for live beat creation

## Sound Design Parameters

### Filter Controls
- **Filter Type**: Filter algorithm selection
  - Low Pass: Removes high frequencies
  - High Pass: Removes low frequencies
  - Band Pass: Allows mid frequencies
  - Hip-hop tip: Use HPF to clean up rumble in drum samples

- **Cutoff**: Filter frequency boundary
  - Range: 20Hz to 20kHz
  - Controls frequency where filtering begins
  - Affects overall brightness/darkness
  - Hip-hop tip: Adjust for sample-appropriate brightness

- **Resonance**: Filter emphasis at cutoff frequency
  - Range: 0% to 100%
  - Adds emphasis at cutoff point
  - Creates "ringing" effect when high
  - Hip-hop tip: Use moderately for extra character

### Envelope Controls
- **Attack**: Initial volume rise time
  - Range: 0ms to several seconds
  - Time to reach full volume
  - Short for percussive, long for smooth
  - Hip-hop tip: Fast attack for drums, variable for instruments

- **Decay**: Volume fall time to sustain
  - Time from attack peak to sustain level
  - Controls initial volume drop
  - Short for percussive, long for sustained
  - Hip-hop tip: Adjust based on sample characteristics

- **Sustain**: Volume level during note hold
  - Range: 0% to 100% of maximum
  - Volume level while note is held
  - 0% = continues to release
  - Hip-hop tip: Set appropriately for sample type

- **Release**: Volume fall time after note release
  - Time from note end to silence
  - Controls fade-out speed
  - Short for percussive, long for smooth
  - Hip-hop tip: Adjust for natural sample ending

## Genre-Specific Parameter Sets

### Hip-Hop Drum Kit Setup
- **Pad Mapping**: Kick=C1, Snare=D1, Closed HH=F1, Open HH=G1
- **Velocity Response**: 70-80% for natural feel
- **Step Resolution**: 1/16 for standard patterns
- **Pattern Length**: 16 steps (4 bars)
- **Swing**: 50-60% for classic feel
- **Filter**: HPF at 80Hz to remove rumble

### R&B Kit Configuration
- **Pad Mapping**: Map instruments to convenient key ranges
- **Velocity Response**: 60-70% for expression
- **Step Resolution**: 1/16 or 1/32 for complex patterns
- **Pattern Length**: 16-32 steps for variety
- **Swing**: 45-55% for smooth feel
- **Filter**: Moderate LPF for warmth

### Electronic Music Setup
- **Pad Mapping**: Map to electronic drum sounds
- **Velocity Response**: 75-85% for expression
- **Step Resolution**: 1/16 or 1/32 for precision
- **Pattern Length**: 16-64 steps for complexity
- **Swing**: 0-30% for straight feel
- **Filter**: Creative settings for texture

## Workflow Applications

### Sample Loading Workflows
1. **Basic Loading**: Drag sample to desired pad
   - Select sample file
   - Drag to appropriate pad
   - Adjust tuning if needed
   - Set appropriate level
   - Verify sample triggers correctly

2. **Batch Loading**: Load multiple samples at once
   - Select multiple sample files
   - Drag to pad grid
   - Samples auto-assign to consecutive pads
   - Adjust individual settings as needed
   - Verify all samples trigger correctly

3. **Template Loading**: Load pre-made drum kits
   - Load kit template file
   - Verify all samples loaded
   - Adjust levels and tuning as needed
   - Test all pads for proper triggering
   - Save as custom template if needed

### Pattern Programming Workflows
1. **Basic Pattern Creation**: Create simple 4-bar pattern
   - Set pattern length to 16 steps
   - Choose 1/16 step resolution
   - Activate steps for kick on 1 and 3
   - Activate steps for snare on 2 and 4
   - Add hi-hat pattern on off-beats

2. **Complex Pattern Creation**: Create intricate patterns
   - Set pattern length to 32 steps
   - Choose 1/32 step resolution
   - Program kick with syncopated pattern
   - Add snare with ghost notes
   - Create complex hi-hat patterns

3. **Pattern Variation**: Create subtle variations
   - Duplicate existing pattern
   - Modify kick pattern slightly
   - Add or remove hi-hat hits
   - Change some velocities for variation
   - Chain patterns for song structure

### Performance Programming
1. **Live Programming**: Real-time pattern creation
   - Enable record mode
   - Play pads in real-time
   - Adjust swing and timing as needed
   - Stop recording when pattern is complete
   - Fine-tune timing if necessary

2. **Pattern Chaining**: Arrange patterns for songs
   - Create multiple patterns for different sections
   - Chain patterns in sequence
   - Add pattern changes for transitions
   - Test continuity between patterns
   - Arrange for complete song structure

## Integration with Hip-Hop Production Chain

### With Sequencers
- Map pads to convenient key layouts for programming
- Use velocity for dynamic expression
- Apply appropriate tuning to samples
- Set envelopes for natural response
- Ensure patterns align with project tempo

### With Effects
- Apply per-pad effects processing
- Use insert vs. send effects appropriately
- Match effects to sample characteristics
- Ensure effects enhance rather than mask
- Use automation for dynamic changes

### With Mixers
- Route individual pads to mixer tracks
- Apply processing per drum type
- Balance levels across all pads
- Use grouping for drum processing
- Apply bus processing for cohesion

## Quick Reference for Session Start

### Standard Hip-Hop Setup
1. Pad mapping: Standard drum key map
2. Velocity response: 75% for natural feel
3. Step resolution: 1/16 for standard patterns
4. Pattern length: 16 steps (4 bars)
5. Swing: 55% for classic hip-hop feel
6. Filter: HPF at 80Hz to remove rumble

### Melodic Instrument Setup
1. Pad mapping: Appropriate key ranges
2. Velocity response: 65% for expression
3. Step resolution: 1/16 for melodic patterns
4. Pattern length: 16-32 steps for variety
5. Swing: 45% for smooth feel
6. Filter: Moderate LPF for warmth

### Sound Design Setup
1. Pad mapping: Creative key assignments
2. Velocity response: Variable for expression
3. Step resolution: 1/32 for precision
4. Pattern length: 32-64 steps for complexity
5. Swing: 0-30% for straight feel
6. Filter: Creative settings for texture

---

**Last Updated**: February 2026
**Focus**: Hip-Hop, Rap, R&B Production Applications
**Primary Use Cases**: Drum Programming, Beat Creation, Sound Design, Live Performance