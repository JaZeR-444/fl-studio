# Wave Traveller Parameter Reference

## Core Audio Processing Parameters

### Wave Position (0-100%)
**Purpose**: Selects current position within the loaded audio file
- **Range**: 0% (start) to 100% (end)
- **Resolution**: 0.1% precision
- **Control Types**: Manual, LFO, envelope follower, automation

**Technical Behavior**:
- Controls read position for grain generation
- Higher resolution than sample-level editing
- Smooth interpolation between positions
- Can create continuous motion or jumps

**Creative Applications**:
- Slow sweeps for evolving textures
- Rapid movement for chaotic effects
- Rhythmic positioning for pattern creation
- Static positioning for sustained textures

### Grain Size (1-500ms)
**Purpose**: Determines duration of individual audio grains
- **Range**: 1 millisecond to 500 milliseconds
- **Default**: 50 milliseconds
- **Effect**: Controls texture from颗粒状 (1ms) to smooth (500ms)

**Size Categories**:
```
Micro Grains (1-20ms): Noisy, textural, granular
Short Grains (20-50ms): Rhythmic, percussive, defined
Medium Grains (50-150ms): Textural, smooth, musical
Long Grains (150-500ms): Evolving, ambient, continuous
```

**Technical Implications**:
- Smaller grains = more CPU usage
- Larger grains = more pitch recognition
- Size affects perceived tempo and rhythm
- Interacts with Grain Density for texture

### Grain Density (1-100Hz)
**Purpose**: Controls number of grains generated per second
- **Range**: 1 Hz to 100 Hz (grains per second)
- **Default**: 20 Hz
- **Effect**: From sparse (1Hz) to dense (100Hz) grain clouds

**Density Categories**:
```
Sparse (1-10Hz): Pointillistic, isolated grains
Light (10-30Hz): Textural, ambient clouds
Medium (30-60Hz): Rhythmic, patterned
Dense (60-100Hz): Noise-like, continuous texture
```

**CPU Considerations**:
- Higher density = significantly more CPU usage
- Exponential CPU increase with density
- 50Hz+ may strain older computers
- Render to audio for complex patches

### Pitch Shift (-24 to +24 semitones)
**Purpose**: Transposes individual grains while maintaining playback speed
- **Range**: -24 semitones (2 octaves down) to +24 semitones (2 octaves up)
- **Resolution**: 1 semitone steps
- **Quality**: High-quality granular pitch shifting

**Pitch Applications**:
```
Harmonic: 0, ±5, ±7, ±12 semitones
Dissonant: ±1, ±2, ±3, ±6 semitones
Extreme: ±18 to ±24 semitones
Microtonal: Fine-tuning via modulation
```

**Technical Behavior**:
- Individual grain transposition
- Formant preservation options
- No time stretching artifacts
- Real-time pitch modulation

## Spatial Processing Parameters

### Spread (0-100%)
**Purpose**: Controls stereo width and spatial positioning of grains
- **Range**: 0% (mono) to 100% (maximum width)
- **Default**: 50%
- **Effect**: Spatial distribution of grain cloud

**Spread Characteristics**:
```
0-25%: Focused mono, centered image
25-50%: Narrow stereo, focused placement
50-75%: Wide stereo, spacious image
75-100%: Extreme width, immersive field
```

**Advanced Spatial Control**:
- Grain-to-grain spatial variation
- Stereo imaging based on grain position
- Movement patterns via modulation
- 3D positioning with additional processing

### Pan Position (-100 to +100)
**Purpose**: Overall stereo positioning of processed signal
- **Range**: -100 (hard left) to +100 (hard right)
- **Default**: 0 (center)
- **Control**: Manual, LFO, automation

**Pan Modulation**:
- Auto-panning effects
- Spatial movement patterns
- Dynamic positioning based on input
- Rhythmic spatial effects

## Advanced Processing Parameters

### Feedback (0-95%)
**Purpose**: Feeds processed signal back into input for recursive processing
- **Range**: 0% (no feedback) to 95% (maximum recursion)
- **Default**: 0%
- **Effect**: Creates complexity and evolving textures

**Feedback Characteristics**:
```
0-20%: Subtle thickening, gentle evolution
20-50%: Pronounced texture development
50-80%: Complex, evolving soundscapes
80-95%: Chaotic, unstable, experimental
```

**Creative Feedback Uses**:
- Infinite sustain effects
- Texture generation from simple sources
- Complex rhythmic patterns
- Experimental sound design

### Time Stretch (0.1x to 4.0x)
**Purpose**: Changes playback speed without affecting pitch
- **Range**: 0.1x (10% speed) to 4.0x (400% speed)
- **Default**: 1.0x (normal speed)
- **Algorithm**: Advanced granular time stretching

**Stretch Applications**:
```
Slow (0.1x-0.5x): Ambient, evolving textures
Normal (0.8x-1.2x): Subtle variations
Fast (1.5x-2.5x): Energetic, rhythmic
Extreme (2.5x-4.0x): High-speed, glitchy
```

## Modulation Parameters

### LFO Section
**Wave Position LFO**:
- Rate: 0.01Hz to 100Hz
- Depth: 0% to 100%
- Waveform: Sine, Triangle, Square, Saw, Random

**Grain Size LFO**:
- Rate: 0.1Hz to 50Hz
- Depth: ±50% variation
- Sync to tempo option

**Pitch LFO**:
- Rate: 0.5Hz to 20Hz
- Depth: ±12 semitones
- MIDI sync available

### Envelope Follower
**Input Source**:
- Internal audio input
- Sidechain input
- External MIDI controller
- Automation envelope

**Response Parameters**:
- Attack: 0ms to 2000ms
- Release: 10ms to 5000ms
- Sensitivity: 0% to 100%
- Smooth: 0% to 100%

## Audio Input/Output Parameters

### Input Section
**Audio Source Selection**:
- Internal audio input
- Loaded audio file
- Sidechain input
- MIDI-triggered samples

**Input Gain**:
- Range: -20dB to +20dB
- Default: 0dB
- LED metering for level monitoring

### Output Section
**Master Volume**:
- Range: -∞ to +12dB
- Default: 0dB
- Soft limiting at +6dB

**Output Routing**:
- Main output
- Send outputs (A, B, C)
- Individual grain outputs (advanced)
- MIDI output (grain position data)

## Filter Section

### Grain Filter
**Filter Type**:
- Low Pass (24dB/octave)
- High Pass (24dB/octave)
- Band Pass (12dB/octave)
- Notch (12dB/octave)

**Filter Parameters**:
- Cutoff: 20Hz to 20kHz
- Resonance: 0% to 95%
- Key follow: 0% to 100%
- Envelope amount: -100% to +100%

### Filter Envelope
**ADSR Parameters**:
- Attack: 0ms to 10s
- Decay: 0ms to 10s
- Sustain: 0% to 100%
- Release: 10ms to 20s

## Global Parameters

### Sample Rate
**Options**: 22.05kHz, 44.1kHz, 48kHz, 88.2kHz, 96kHz
**Effect**: Higher rates = better quality, more CPU usage
**Recommendation**: 44.1kHz for most applications

### Buffer Size
**Options**: 64, 128, 256, 512, 1024 samples
**Effect**: Smaller buffers = less latency, more CPU strain
**Recommendation**: 256-512 samples for balance

### Quality Mode
**Options**: Economy, Standard, High Quality
**Effect**: Trade-off between CPU usage and audio quality
**Recommendation**: Standard for most uses, High Quality for final rendering

## Preset and Recall Parameters

### Preset Management
**Save/Load**: Full parameter state saving
**Categories**: User-defined preset organization
**Search**: Text-based preset finding
**Import/Export**: Cross-platform preset sharing

### Recall Options
**MIDI Learn**: Assign any parameter to MIDI controller
**Automation**: Full DAW automation support
**Randomize**: Parameter randomization with constraints
**Compare**: A/B comparison of different settings

## Technical Specifications

### Performance Metrics
- **Latency**: Variable (based on buffer size)
- **CPU Usage**: 5-40% depending on settings
- **Memory**: 100-500MB based on audio file size
- **Polyphony**: Unlimited grains (CPU-limited)

### Audio Quality
- **Sample Rate**: Up to 192kHz support
- **Bit Depth**: 16, 24, 32-bit floating point
- **Dynamic Range**: 144dB theoretical
- **THD+N**: <0.01% typical

This parameter reference provides comprehensive understanding of Wave Traveller's extensive control set for mastering granular synthesis and wave sequencing techniques.