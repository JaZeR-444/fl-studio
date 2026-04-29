# Drumpad - Workflow Recipes

## 6-10 Recipes Combining Drumpad with Other FL Studio Tools

### Recipe 1: Complete Drum Kit Creation
**Goal**: Build a complete drum kit using multiple Drumpad instances with proper routing and processing

**Step-by-step setup**:
1. Create 6 Drumpad instances in the Channel Rack
2. Configure each for a specific drum sound:
   - Instance 1: Kick drum (C1) - Stiffness 30%, Mass 80%, Tension 20%, Damping 60%
   - Instance 2: Snare (D1) - Stiffness 70%, Mass 40%, Tension 60%, Damping 50%
   - Instance 3: Hi-Hat Closed (F#1) - Stiffness 85%, Mass 15%, Tension 85%, Damping 85%
   - Instance 4: Hi-Hat Open (B1) - Stiffness 75%, Mass 25%, Tension 70%, Damping 40%
   - Instance 5: Low Tom (F2) - Stiffness 50%, Mass 60%, Tension 40%, Damping 50%
   - Instance 6: High Tom (A2) - Stiffness 60%, Mass 40%, Tension 60%, Damping 40%
3. Route each to separate mixer tracks (1-6)
4. On mixer tracks 1-6, add light compression (Fruity Limiter with 3:1 ratio)
5. Group tracks 1-6 to a new mixer track (track 7) for kit control
6. Add a shared reverb (Fruity Convolver) on a return track, send from each drum at appropriate levels
7. Create a pattern in the step sequencer using the mapped notes

**Routing notes**:
- Each Drumpad instance goes to its own mixer track for individual processing
- Use mixer grouping to control the entire kit with one fader
- Send appropriate amounts to shared reverb for cohesion
- Consider using Fruity Send tracks for more flexible routing

**How to control it quickly**:
- Use the step sequencer for programming patterns
- Assign mixer tracks to keyboard for quick auditioning
- Create macro controls in the wrapper for kit-wide parameter adjustments
- Use pattern playlist tracks for arrangement

**Performance tips**:
- Disable unused instances when not needed to save CPU
- Use FL Studio's performance mode when working with complex arrangements
- Consider freezing the drum group when adding many other instruments

### Recipe 2: Expressive Snare Roll Enhancement
**Goal**: Use Drumpad to create realistic, expressive snare rolls that respond to velocity and timing

**Step-by-step setup**:
1. Insert Drumpad into a channel and configure for snare sound:
   - Stiffness 65%, Mass 45%, Tension 65%, Damping 45%
   - Mallet: Amplitude 75%, Noise 70%, Decay 65%
   - Filter: Low 35%, Mid 75%
2. Set the channel to monophonic mode for proper roll behavior
3. In the Piano Roll, program a rapid 32nd note pattern for the roll
4. Use the velocity tool to create a crescendo from PP to FF over the roll duration
5. Add humanize by slightly varying the timing of some notes (±10 ticks)
6. On the mixer track, add a Fruity Peak Controller to modulate the Drumpad's Amplitude parameter based on incoming velocity
7. Add a short plate reverb (1.2s decay, 25% mix) to enhance the roll's sense of space

**Routing notes**:
- Route to a dedicated mixer track with reverb send
- Use automation lanes for dynamic parameter control
- Consider sidechaining to the kick to prevent masking during rolls

**How to control it quickly**:
- Create a macro in the channel settings to control multiple parameters simultaneously
- Use FL Studio's humanize function for quick timing variations
- Set up MIDI controller to adjust noise and decay parameters in real-time

**Performance tips**:
- Keep polyphony at monophonic for proper roll behavior
- Use automation clips for complex parameter changes during rolls
- Consider layering with a sample for added realism

### Recipe 3: Ethnic Percussion Ensemble
**Goal**: Create an ensemble of ethnic percussion instruments using Drumpad's modeling capabilities

**Step-by-step setup**:
1. Create 4 Drumpad instances for different ethnic percussion:
   - Djembe Bass (C2): Stiffness 25%, Mass 70%, Tension 30%, Damping 40%
   - Djembe Slap (E2): Stiffness 60%, Mass 30%, Tension 65%, Damping 35%
   - Tabla Bayan (G2): Stiffness 35%, Mass 65%, Tension 40%, Damping 50%
   - Frame Drum (A2): Stiffness 45%, Mass 55%, Tension 50%, Damping 60%
2. Route each to separate mixer tracks with different panning (hard left, center-left, center-right, hard right)
3. Add a convolution reverb (Fruity Convolver) with an appropriate room impulse (large hall or outdoor space)
4. Use the step sequencer to program traditional rhythmic patterns for each instrument
5. Add subtle pitch modulation to each instance to simulate hand pressure variations
6. Group all ethnic percussion tracks to a single mixer track for ensemble control

**Routing notes**:
- Use wide stereo positioning to create an ensemble feel
- Apply convolution reverb with ethnic/ambient impulse responses
- Consider using Fruity Formula Controller for dynamic parameter modulation

**How to control it quickly**:
- Create pattern variations in the step sequencer for different sections
- Use mixer automation for ensemble dynamics
- Map parameters to controller for real-time performance

**Performance tips**:
- Use moderate polyphony settings to maintain individual instrument character
- Apply light saturation to add harmonic complexity
- Use different reverb sends for each instrument to create depth

### Recipe 4: Industrial Sound Design Toolkit
**Goal**: Create a toolkit of industrial and mechanical sounds using Drumpad's extreme modeling capabilities

**Step-by-step setup**:
1. Create 5 Drumpad instances with extreme settings:
   - Steam Release: Stiffness 90%, Mass 20%, Tension 85%, Damping 30%, Noise 90%
   - Metal Bang: Stiffness 95%, Mass 10%, Tension 90%, Damping 25%, Noise 85%
   - Gear Turn: Stiffness 80%, Mass 30%, Tension 75%, Damping 40%, Noise 75%
   - Pipe Rattle: Stiffness 85%, Mass 25%, Tension 80%, Damping 35%, Noise 95%
   - Factory Horn: Stiffness 70%, Mass 40%, Tension 60%, Damping 50%, Noise 60%
2. Route each to individual mixer tracks with different processing:
   - Steam Release: Long reverb with early reflections emphasized
   - Metal Bang: Compression and slight distortion
   - Gear Turn: Filtering and tremolo
   - Pipe Rattle: Stereo widening and delay
   - Factory Horn: Chorus and reverb
3. Program with irregular rhythms and varying velocities to simulate real industrial environments
4. Use automation to modulate parameters for evolving textures
5. Group all industrial sounds to a master fader for scene control

**Routing notes**:
- Use different effects chains for each industrial sound type
- Apply appropriate EQ to sit each sound in the mix
- Consider using Fruity Slicer for rhythmic manipulation of longer sounds

**How to control it quickly**:
- Create macro controls for parameter sets that work well together
- Use playlist automation for scene changes
- Map to MIDI controller for real-time sound design

**Performance tips**:
- Use high polyphony for complex industrial environments
- Apply light saturation to enhance the analog character
- Use sidechain compression to duck sounds when others play

### Recipe 5: Electronic Dance Music Percussion Stack
**Goal**: Create a layered electronic percussion setup combining Drumpad with other FL Studio tools

**Step-by-step setup**:
1. Insert Drumpad configured for a synthetic clap:
   - Stiffness 75%, Mass 35%, Tension 70%, Damping 55%
   - Mallet: Amplitude 80%, Noise 85%, Decay 70%
2. Layer with a sample-based clap on the same MIDI note (use FPC or direct sample)
3. Add a 3x Osc set to a noise waveform triggered simultaneously for additional high-end
4. Route all three layers to a single mixer track via the "send to channel" feature
5. On the mixer track, add:
   - Fruity Parametric EQ 2: High-pass filter at 200Hz, boost around 2-5kHz for snap
   - Fruity Limiter: Light compression to glue the layers
   - Fruity Delay 3: Short delay (1/16th note) with 20% feedback for stereo width
6. Use automation to adjust the balance between Drumpad and sample layers

**Routing notes**:
- Layer multiple sound sources on the same MIDI note
- Use mixer track as a summing bus for the layered sound
- Apply processing to the combined output for cohesion

**How to control it quickly**:
- Create a wrapper channel to control all layers simultaneously
- Use mixer track automation for dynamic layer balancing
- Map individual layer volumes to controller knobs

**Performance tips**:
- Use the same envelope settings across layers for timing coherence
- Apply light saturation to blend the different sound sources
- Use mid/side processing to control stereo width independently

### Recipe 6: Dynamic Drum Kit with Automation
**Goal**: Create a drum kit that evolves throughout a track using parameter automation

**Step-by-step setup**:
1. Create a basic 4-piece kit with Drumpad instances (kick, snare, hihat, tom)
2. Set up a complex arrangement in the playlist with multiple sections
3. Create automation clips for key Drumpad parameters:
   - Kick: Tension and Damping automation to evolve the sound from tight to loose
   - Snare: Noise and Amplitude automation to increase presence during choruses
   - Hi-hat: Stiffness automation to vary the brightness throughout the track
   - Tom: Mass automation to create tuning variations
4. Use the automation editor to draw in parameter changes that correspond to musical sections
5. Add a Fruity Formula Controller to create interdependent parameter relationships
6. Set up mixer automation to adjust the balance between kit pieces during different sections

**Routing notes**:
- Keep automation data organized on the same playlist tracks as the audio
- Use automation clips to create parameter relationships between different instruments
- Consider grouping automation data for easier editing

**How to control it quickly**:
- Use the playlist's automation lane view for comprehensive parameter control
- Create macro controls that adjust multiple parameters simultaneously
- Use copy/paste for automation patterns that repeat

**Performance tips**:
- Use parameter smoothing to avoid abrupt changes that might cause clicks
- Keep automation curves musical and supportive of the arrangement
- Consider using randomization tools for organic parameter variations

### Recipe 7: Rhythmic Texture Generator
**Goal**: Use Drumpad to generate evolving rhythmic textures and patterns

**Step-by-step setup**:
1. Insert Drumpad with experimental settings:
   - Stiffness 80%, Mass 20%, Tension 85%, Damping 20%
   - Mallet: Amplitude 70%, Noise 90%, Decay 80%
2. Create a complex pattern in the step sequencer with:
   - 1/16th note hi-hat pattern on one track
   - Off-beat snare hits on another track
   - Syncopated kick pattern on a third track
3. Use the channel's humanize function to add subtle timing variations
4. Add automation to parameters like Stiffness and Noise to create evolving textures
5. Route to a mixer track with a gate effect (Fruity Soundgoodizer) set to rhythmic gating
6. Use the playlist to arrange pattern variations and breaks

**Routing notes**:
- Use rhythmic gating to create additional movement in the texture
- Apply light reverb to create space and cohesion
- Consider using Patcher for more complex effect routing

**How to control it quickly**:
- Use pattern playlist tracks to arrange different texture variations
- Map parameters to controller for real-time texture manipulation
- Create pattern variations in the step sequencer for different sections

**Performance tips**:
- Use moderate polyphony to maintain rhythmic clarity
- Apply light compression to even out dynamic variations
- Use EQ to carve out space for other elements in the mix

### Recipe 8: Melodic Percussion Sequence
**Goal**: Create melodic sequences using Drumpad's pitched capabilities

**Step-by-step setup**:
1. Configure Drumpad for bell-like tones:
   - Stiffness 85%, Mass 25%, Tension 80%, Damping 65%
   - Mallet: Amplitude 75%, Noise 20%, Decay 85%
   - Filter: Low 30%, Mid 80%
2. Set the channel to legato mode for smooth pitch transitions
3. Program a melodic sequence in the Piano Roll using chromatic or pentatonic scales
4. Add portamento/glide to create smooth pitch transitions between notes
5. Route to a mixer track with reverb (long plate or hall, 70% mix)
6. Add a touch of chorus for additional movement and width
7. Use automation to vary the Decay parameter for dynamic expression

**Routing notes**:
- Use legato mode for smooth pitch transitions
- Apply generous reverb for sustained melodic lines
- Consider using Fruity Fast Dist for subtle harmonic enhancement

**How to control it quickly**:
- Use Piano Roll for precise melodic editing
- Map expression parameters to MIDI controller for performance
- Create arpeggiated patterns using FL Studio's built-in tools

**Performance tips**:
- Use monophonic mode for clearer melodic lines
- Apply EQ to emphasize the fundamental frequencies
- Use sidechain compression keyed to kick drum to prevent conflicts