# Plucked String Emulation

## Overview
Master the art of physical modeling with Harmless's Pluck filter - from guitars to harps to unique plucked textures.

## The Physics of Pluck

### Real String Behavior
When a string is plucked:
1. **Initial strike**: All frequencies excited
2. **High frequency decay**: Treble loses energy first (faster vibration = more friction)
3. **Exponential curve**: Decay follows mathematical law: `Energy Loss ∝ frequency²`
4. **Final sustain**: Only fundamental remains

### Harmless Implementation
The Pluck filter simulates this physics:
- **Pluck Amount**: Controls overall decay speed
- **High frequencies**: Decay faster than lows
- **Formula**: Decay rate = f² × damping factor

## Guitar Emulation

### Acoustic Guitar
**Settings**:
- **Mask**: Sawtooth (H1-H12), natural decay
- **Pluck**: 45-55%
- **Filter**: Cutoff 5-7kHz, 12dB slope, 20% resonance
- **Drive**: 15-25% (wood warmth)

**Envelope**:
- Attack: 2ms
- Decay: 400ms
- Sustain: 0% ← Critical
- Release: 600ms

**Playing**: Strumming patterns, chord voicings

### Electric Guitar (Clean)
**Settings**:
- **Mask**: Sawtooth with boosted H3-H6
- **Pluck**: 35-45%
- **Filter**: Cutoff 6kHz, 24dB slope
- **Drive**: 20-30% (amp warmth)

**Effects**:
- Chorus: 25% (stereo width)
- Reverb: 20% (room)

### Electric Guitar (Muted)
**Settings**:
- **Mask**: Sparse (H1-H6 only)
- **Pluck**: 60-70%
- **Filter**: Cutoff 3kHz (dark)
- **Envelope**: Very short release (150ms)

**Technique**: Palm-mute style

## Harp Emulation

### Concert Harp
**Settings**:
- **Mask**: H1, H2, H4, H8, H16 (octave relationships)
- **Pluck**: 65-75%
- **Filter**: Cutoff 8kHz (bright)
- **Resonance**: 30%

**Envelope**:
- Attack: 1ms
- Decay: 600ms
- Sustain: 0%
- Release: 1s (let it ring)

**Playing**: Glissandos, arpeggios, single notes

### Celtic/Folk Harp
**Settings**:
- **Mask**: Slightly richer than concert
- **Pluck**: 55-65%
- **Filter**: Cutoff 7kHz
- **Drive**: 10%

**Character**: Warmer, more intimate

## Ethnic Plucked Instruments

### Kalimba (Thumb Piano)
**Settings**:
- **Mask**: H1, H2.4 (approx position), H4, H7
- **Pluck**: 70-80%
- **Filter**: Cutoff 8kHz
- **Envelope**: Tight (short decay, short release)

**Playing**: High register (C5-C7), rhythmic patterns

### Koto (Japanese)
**Settings**:
- **Mask**: Pentatonic-friendly harmonics
- **Pluck**: 50-60%
- **Filter**: Cutoff 6kHz
- **Envelope**: Medium-long

**Character**: Buzzy, resonant

### Sitar (Indian)
**Settings**:
- **Mask**: Rich, with sympathetic resonance simulation
- **Pluck**: 40-50%
- **Phaser**: Rate 1Hz, Depth 60% (simulates sympathetic strings)
- **Filter**: Cutoff 5kHz, resonance 40%

**Technique**: Pitch bends, drones

## Modern Plucked Sounds

### Synth Pluck
**Settings**:
- **Mask**: Square-ish (odd harmonics)
- **Pluck**: 40-50%
- **Filter**: Cutoff 6kHz, 24dB slope
- **Drive**: 10%
- **Unison**: 2-3 voices

**Character**: Electronic, defined

### Bell Pluck
**Settings**:
- **Mask**: H1, H4, H8, H16, H32
- **Pluck**: 60-70%
- **Filter**: Cutoff 9kHz
- **Resonance**: 35%

**Character**: Metallic, bell-like

### Music Box
**Settings**:
- **Mask**: Sparse, bell-like
- **Pluck**: 70-80%
- **Filter**: Cutoff 10kHz
- **Envelope**: Very tight
- **Crush**: 40% (vintage)

## Advanced Pluck Techniques

### Layered Pluck
**Instance 1**: High pluck (70%) - attack brightness
**Instance 2**: Low pluck (30%) - sustain body
**Blend**: 50/50
**Result**: Control over both aspects

### Velocity-Responsive Pluck
Map velocity to:
- **Filter cutoff**: Harder = brighter
- **Pluck amount**: Harder = less pluck (louder sustain)
- **Amp attack**: Standard

**Result**: Dynamic, responsive instrument

### Filter + Pluck Combination
- **Pluck**: 40%
- **Filter envelope**: +30%
- Result: Natural decay + articulation sweep

## Pluck in Hip-Hop

### Drake-Style Melancholic
- Hollow mask (sparse harmonics)
- Pluck: 60%
- Reverb: 35%
- Play: High register, emotional

### Trap Arpeggios
- Rich mask
- Pluck: 50%
- Delay: Dotted 8th
- Play: Fast patterns, C4-C6

### Future Plucks
- Inharmonic mask
- Pluck: 45%
- Phaser: Rate 2Hz
- Play: Single notes with space

### Garage/Uk Bass
- Square-ish mask
- Pluck: 40%
- Play: Rhythmic bass patterns
- Cutoff: 400-600Hz

## Troubleshooting Plucks

### "Doesn't sound plucked"
- Check sustain is at 0%
- Verify pluck is 40%+
- Ensure mask has harmonics to decay

### "Decay too fast"
- Reduce pluck amount
- Note: Higher notes naturally decay faster
- Lower cutoff extends perceived decay

### "Too bright/harsh"
- Reduce cutoff
- Reduce high harmonics in mask
- Add gentle filter slope (12dB)

### "Not enough attack"
- Reduce pluck (counterintuitive but works)
- Or add noise (5-10%)
- Shorten attack time

## Pro Tips

1. **Register matters**: Pluck is more audible on higher notes

2. **Staccato playing**: Let the pluck be the focus

3. **Reverb is your friend**: Plucks love space

4. **Combine techniques**: Pluck + filter env + velocity = ultimate control

5. **Save presets**: Good plucks are gold - save them

6. **Experiment with masks**: Different harmonics = different pluck characters

[SRC: IL-MAN - Harmless Pluck Filter, Physical Modeling]
