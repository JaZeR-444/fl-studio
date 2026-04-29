# Genre-Specific Transporter Applications

## Electronic Music Genres

### EDM
**Characteristics**: High energy, big builds, festival drops
**Transporter Settings**:
- **Build-ups**: Gradual buffer size reduction
- **Drops**: Heavy 1/32 stutter with pitch manipulation
- **Breakdowns**: Atmospheric glitch effects
- **Risers**: Filtered pitch automation

**Preset Template**:
```json
{
  "edmDrop": {
    "bufferSize": "1/32",
    "pitchShift": -5,
    "filterFreq": 800,
    "filterRes": 90,
    "mix": 100,
    "automation": ["filterFreq", "bufferSize"]
  }
}
```

### Techno
**Characteristics**: Repetitive, hypnotic, industrial
**Transporter Settings**:
- **Loops**: Long buffer repeats
- **Percussive**: Short stutters on percussion
- **Industrial**: Extreme distortion effects
- **Hypnotic**: Slow, evolving changes

**Workflow**:
1. Create rhythmic stutter patterns
2. Automate filter cutoff slowly
3. Add pitch variation on accents
4. Use sidechain for ducking

### House
**Characteristics**: Groovy, soulful, four-on-the-floor
**Transporter Settings**:
- **Vocal Chops**: 1/16 pitch-shifted stutters
- **Bass Glitches**: Subtle bass processing
- **Atmosphere**: Filtered long buffers
- **Groove**: Swing-quantized rhythms

### Dubstep
**Characteristics**: Aggressive, heavy bass, complex rhythms
**Transporter Settings**:
- **Wobble Bass**: Filter automation
- **Vocal Samples**: Heavy glitch processing
- **Snare Rolls**: Rapid stutter effects
- **Build-ups**: Intense rhythmic complexity

## Hip-Hop Applications

### Trap
**Characteristics**: 808s, hi-hats, vocal samples
**Transporter Settings**:
- **Hi-Hat Rolls**: 1/32T stutter on hi-hats
- **808 Glides**: Pitch-modulated bass
- **Vocal Ad-libs**: Repetitive vocal chops
- **Snare Rolls**: Build-up stutter effects

**Production Techniques**:
1. Apply to hi-hat patterns
2. Create vocal loops from samples
3. Process 808s for character
4. Build tension before drops

### Boom Bap
**Characteristics**: Sample-based, gritty, soulful
**Transporter Settings**:
- **Sample Chops**: Classic MPC-style stutters
- **Drum Fills**: Rhythmic complexity
- **Vocal Samples**: Vintage feel processing
- **Atmosphere**: Subtle textural effects

### Lo-Fi Hip-Hop
**Characteristics**: Relaxed, dusty, atmospheric
**Transporter Settings**:
- **Tape Effects**: Buffer-based tape stops
- **Vinyl Effects**: Emulated vinyl artifacts
- **Ambient Glitches**: Subtle texture addition
- **Chopped Samples**: Lo-fi vocal processing

## Rock and Alternative

### Electronic Rock
**Characteristics**: Rock instruments with electronic processing
**Transporter Settings**:
- **Guitar Stutters**: Rhythmic guitar effects
- **Vocal Effects**: Processed vocal textures
- **Drum Loops**: Processed acoustic drums
- **Build-ups**: Song tension creation

### Industrial
**Characteristics**: Harsh, mechanical, aggressive
**Transporter Settings**:
- **Harsh Glitches**: Extreme digital artifacts
- **Mechanical Rhythms**: Repetitive stutter patterns
- **Distorted Processing**: Heavy saturation
- **Noise Integration**: Industrial texture addition

## Pop and Commercial

### Pop Production
**Characteristics**: Polished, radio-friendly, vocal-focused
**Transporter Settings**:
- **Vocal Effects**: Subtle stutter enhancements
- **Build Effects**: Song tension building
- **Rhythmic Interest**: Background texture
- **Transition Effects**: Smooth song changes

### Dance Pop
**Characteristics**: Upbeat, energetic, mainstream
**Transporter Settings**:
- **Vocal Chops**: Catchy repetitive vocals
- **Synth Stutters**: Processed synth elements
- **Drop Effects**: Impact creation
- **Rhythm Enhancement**: Groove addition

## Film and Media

### Action Scenes
**Characteristics**: Intense, driving, dramatic
**Transporter Settings**:
- **Tension Building**: Gradual complexity increase
- **Impact Effects**: Sudden dramatic moments
- **Chase Scenes**: Rhythmic intensity
- **Fight Scenes**: Aggressive processing

### Sci-Fi/Fantasy
**Characteristics**: Otherworldly, futuristic, magical
**Transporter Settings**:
- **Alien Effects**: Unusual sonic textures
- **Futuristic Sounds**: Advanced processing
- **Magical Elements**: Ethereal glitch effects
- **Atmosphere**: World-building texture

### Horror/Thriller
**Characteristics**: Tense, unsettling, frightening
**Transporter Settings**:
- **Psychological Effects**: Disorienting processing
- **Jump Scares**: Sudden dramatic changes
- **Tension**: Gradual anxiety building
- **Unnatural Sounds**: Distorted reality effects