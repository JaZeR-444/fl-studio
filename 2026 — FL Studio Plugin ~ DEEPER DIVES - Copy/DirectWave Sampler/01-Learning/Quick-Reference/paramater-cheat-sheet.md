# DirectWave Sampler Parameter Cheat Sheet

## Overview
DirectWave is FL Studio's advanced sampling engine that provides professional-grade sample manipulation and playback capabilities. This cheat sheet details all parameters and their applications in hip-hop, rap, and R&B production.

## Sample Mapping Parameters

### Sample Assignment and Loading
- **Sample Slot**: Container for individual audio samples
  - Supports multiple formats (WAV, FLAC, MP3, etc.)
  - Allows drag-and-drop sample loading
  - Supports sample preview before loading
  - Hip-hop tip: Load drum samples individually for precise control

- **Sample Path**: Location of loaded sample file
  - Shows current sample location
  - Allows sample reloading if path changes
  - Supports sample replacement workflows
  - Hip-hop tip: Organize samples in logical folder structures

### Key Mapping Controls
- **Key Start**: Beginning of key range for sample playback
  - Range: C-2 to G8 (MIDI notes 0-127)
  - Defines which keys trigger the sample
  - Can be adjusted for sample-specific ranges
  - Hip-hop tip: Map kick drums to C3-C4 for standard drum programming

- **Key End**: End of key range for sample playback
  - Range: C-2 to G8 (MIDI notes 0-127)
  - Defines upper limit of triggering range
  - Together with Key Start, sets zone boundaries
  - Hip-hop tip: Use narrow ranges for single-sound triggers

- **Root Key**: Reference pitch for sample playback
  - Default: Set automatically based on sample
  - Can be manually adjusted for pitch correction
  - Affects playback pitch across keyboard
  - Hip-hop tip: Set accurately for pitched samples like pianos or horns

### Velocity Mapping Controls
- **Velocity Start**: Minimum velocity for sample triggering
  - Range: 1-127 (MIDI velocity values)
  - Sample plays only when velocity exceeds this value
  - Allows velocity layering with other samples
  - Hip-hop tip: Use for dynamic drum programming

- **Velocity End**: Maximum velocity for sample triggering
  - Range: 1-127 (MIDI velocity values)
  - Sample plays only when velocity is below this value
  - Enables velocity switching between samples
  - Hip-hop tip: Create velocity layers for different drum sounds

### Playback Parameters

#### Pitch Controls
- **Coarse Tune**: Major pitch adjustment in semitones
  - Range: -60 to +60 semitones
  - Moves pitch in semitone increments
  - Used for sample key matching
  - Hip-hop tip: Adjust 808 samples to match track key

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

#### Playback Controls
- **Play Direction**: Sample playback direction
  - Forward: Normal playback
  - Reverse: Plays sample backwards
  - Ping-Pong: Loops with alternating direction
  - Hip-hop tip: Use reverse for atmospheric effects

- **Loop Mode**: Sample looping behavior
  - Off: Plays sample once
  - On: Loops sample continuously
  - Ping-Pong: Loops with alternating direction
  - Hip-hop tip: Use for sustained sounds and textures

- **Loop Start/End**: Loop point positions
  - Defines specific loop boundaries
  - Allows precise loop point setting
  - Critical for seamless looping
  - Hip-hop tip: Set carefully to avoid clicks in drum loops

### Volume and Pan Controls

#### Level Parameters
- **Volume**: Sample playback volume
  - Range: -∞ to +12 dB
  - Adjusts individual sample level
  - Independent of channel fader
  - Hip-hop tip: Set drum samples to appropriate levels

- **Pan**: Sample stereo positioning
  - Range: -100% (hard left) to +100% (hard right)
  - Positions sample in stereo field
  - Independent of channel pan
  - Hip-hop tip: Use for drum kit positioning

- **Attenuate**: Global volume scaling
  - Adjusts overall output level
  - Applied after other volume controls
  - Useful for balancing multiple samples
  - Hip-hop tip: Use for overall sample level matching

#### Velocity Response
- **Vel -> Vol**: Velocity to volume sensitivity
  - Range: -100% to +100%
  - Controls how velocity affects volume
  - Negative values: Softer hits are louder
  - Hip-hop tip: Use positive values for natural response

- **Vel -> Filter**: Velocity to filter cutoff sensitivity
  - Range: -100% to +100%
  - Controls how velocity affects brightness
  - Higher velocities can brighten or darken
  - Hip-hop tip: Use for dynamic drum responses

### Filter Parameters

#### Filter Controls
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

#### Filter Envelope
- **Env Amount**: Envelope influence on filter
  - Range: -100% to +100%
  - Controls how envelope affects filter
  - Positive: Opens filter when envelope rises
  - Hip-hop tip: Use for classic filter sweep effects

- **Env Time**: Filter envelope duration
  - Controls envelope speed
  - Longer times = slower filter movement
  - Shorter times = faster filter movement
  - Hip-hop tip: Adjust for appropriate filter evolution

### Envelope Parameters

#### Amplitude Envelope
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

#### Filter Envelope
- **Env Attack**: Filter envelope rise time
  - Time for filter to reach maximum effect
  - Controls speed of filter change
  - Short for quick changes, long for gradual
  - Hip-hop tip: Use for classic synth filter effects

### Modulation Parameters

#### LFO Controls
- **LFO Rate**: Low-frequency oscillator speed
  - Range: 0.1Hz to 20Hz
  - Controls modulation speed
  - Slow for subtle effects, fast for tremolo
  - Hip-hop tip: Use for subtle vibrato or tremolo effects

- **LFO Amount**: Modulation intensity
  - Range: 0% to 100%
  - Controls depth of modulation
  - Higher values = stronger effect
  - Hip-hop tip: Use subtly for natural instrument feel

- **LFO Destination**: What LFO modulates
  - Options: Pitch, Filter, Volume, Pan
  - Determines what parameter is affected
  - Different destinations create different effects
  - Hip-hop tip: Pitch modulation for vintage synth feel

#### Pitch Modulation
- **Pitch Bend Range**: Pitch bend wheel effect
  - Range: 0 to 24 semitones
  - Controls how much pitch bend wheel affects pitch
  - Higher values = more dramatic pitch changes
  - Hip-hop tip: Set appropriately for melodic samples

### Effects Section Parameters

#### Built-in Effects
- **Effect Type**: Effect algorithm selection
  - Options vary by implementation
  - Common: Reverb, Delay, Chorus, Flanger
  - Allows per-sample effect processing
  - Hip-hop tip: Add subtle reverb to snares for space

- **Effect Amount**: Effect intensity
  - Range: 0% to 100%
  - Controls how much effect is applied
  - Higher values = stronger effect
  - Hip-hop tip: Use subtly to enhance without overwhelming

- **Effect Parameters**: Effect-specific controls
  - Vary by effect type
  - Reverb: Size, Decay, Pre-delay
  - Delay: Time, Feedback, Mix
  - Hip-hop tip: Adjust based on mix requirements

### Performance Parameters

#### Voice Management
- **Polyphony**: Maximum simultaneous voices
  - Range: 1 to maximum available
  - Controls how many notes play simultaneously
  - Higher values = more voices, more CPU usage
  - Hip-hop tip: Balance between realism and performance

- **Voice Priority**: Note stealing behavior
  - Determines which notes are cut when polyphony is exceeded
  - Options: Lowest, Highest, Last, First
  - Affects which notes continue playing
  - Hip-hop tip: Use Last for drum programming

#### Memory Management
- **Streaming**: Sample streaming vs. preloading
  - Streaming: Loads samples as needed
  - Preload: Loads samples into memory
  - Streaming saves RAM but uses disk I/O
  - Hip-hop tip: Stream large samples, preload small ones

## Genre-Specific Parameter Sets

### Hip-Hop Drum Kit Setup
- **Key Mapping**: Kick=C3, Snare=D3, Closed HH=F3, Open HH=G3
- **Velocity Response**: Vel->Vol at 80% for natural feel
- **Envelopes**: Fast attack, medium decay, low sustain, medium release
- **Filters**: HPF at 80Hz to remove rumble, moderate resonance
- **Effects**: Subtle reverb on snares, slight delay on hats

### Rap Vocal Chop Programming
- **Key Mapping**: Map vocal chops across keyboard octaves
- **Pitch Control**: Fine-tune each chop to appropriate pitch
- **Envelopes**: Medium attack, medium decay, medium sustain, medium release
- **Filter**: Moderate LPF to match vocal characteristics
- **Effects**: Light chorus or delay for texture

### R&B Instrument Layering
- **Velocity Layers**: Multiple samples per key range
- **Crossfades**: Smooth transitions between velocity layers
- **Envelopes**: Longer attack and release for smoothness
- **Modulation**: Subtle LFO on pitch and filter for movement
- **Effects**: Warm reverb and gentle compression

## Workflow Applications

### Sample Mapping Workflows
1. **Drum Kit Creation**:
   - Load individual drum samples
   - Map to standard drum key map (GM standard)
   - Set appropriate velocity ranges
   - Adjust levels and tuning per sample

2. **Melodic Instrument**:
   - Load multisampled instrument
   - Map samples to appropriate key ranges
   - Set velocity switching for expression
   - Adjust tuning and envelopes per sample

3. **Sound Design**:
   - Load textural samples
   - Apply creative filtering and effects
   - Use modulation for evolving textures
   - Set appropriate envelopes for character

### Performance Optimization
1. **CPU Management**:
   - Reduce polyphony for complex patches
   - Disable unused effects
   - Use appropriate stretch modes
   - Stream large samples when possible

2. **Memory Management**:
   - Preload small, frequently used samples
   - Stream large samples to save RAM
   - Remove unused samples from patches
   - Optimize sample bit depth and length

### Integration with Hip-Hop Production Chain

#### With Sequencers
- Map samples to convenient key layouts
- Use velocity for dynamic expression
- Apply appropriate tuning to samples
- Set envelopes for natural response

#### With Effects
- Apply per-sample effects processing
- Use insert vs. send effects appropriately
- Match effects to sample characteristics
- Ensure effects enhance rather than mask

## Quick Reference for Session Start

### Standard Hip-Hop Setup
1. Sample mapping: Standard drum key map
2. Velocity response: 70-80% for natural feel
3. Envelopes: Fast attack, medium decay/release
4. Filtering: HPF at 80Hz, moderate resonance
5. Effects: Subtle reverb on snares

### Melodic Instrument Setup
1. Sample mapping: Appropriate key ranges
2. Velocity response: 60-70% for expression
3. Envelopes: Medium attack/release for smoothness
4. Filtering: Moderate LPF for warmth
5. Effects: Warm reverb and subtle modulation

### Sound Design Setup
1. Sample mapping: Creative key assignments
2. Velocity response: Variable for expression
3. Envelopes: Long for evolving textures
4. Filtering: Creative filter settings
5. Effects: Experimental effect combinations

---

**Last Updated**: February 2026
**Focus**: Hip-Hop, Rap, R&B Production Applications
**Primary Use Cases**: Sampling, Drum Programming, Sound Design, Instrument Emulation