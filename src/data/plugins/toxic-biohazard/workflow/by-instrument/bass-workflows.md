# Toxic Biohazard - Bass Workflows

## Overview
Toxic Biohazard excels at creating powerful, genre-defining bass sounds through its FM synthesis engine. This workflow focuses on crafting bass sounds specifically for hip-hop, trap, and EDM production.

## Workflow 1: Trap Sub-Bass

### Configuration
- **Algorithm**: 1-Operator (simple sub-bass)
- **Operator A**: Sine wave, fixed frequency 40-60 Hz
- **FM Level**: 0 (clean sub-bass)
- **Envelope**: Fast attack, moderate decay, no sustain, short release
- **Effects**: Distortion (subtle drive), EQ (boost 60-80 Hz)

### Steps
1. Set Algorithm to 1-Operator
2. Configure Operator A with sine wave
3. Set fixed frequency to 40-60 Hz for sub-bass
4. Adjust FM Level to 0 for clean tone
5. Create envelope: 5ms attack, 200ms decay, 0 sustain, 100ms release
6. Add subtle distortion (10-20% drive)
7. Apply EQ boost at 60-80 Hz
8. Test in context with kick drum

### Tips
- Use fixed frequency for consistent sub-bass
- Keep FM Level low to avoid unwanted harmonics
- Layer with higher octave for presence
- Sidechain with kick for pumping effect

### Troubleshooting
- **Muddy Mix**: Cut frequencies below 40 Hz
- **Weak Impact**: Increase distortion slightly
- **Tuning Issues**: Verify fixed frequency settings

## Workflow 2: 808-Style Bass

### Configuration
- **Algorithm**: 2-Operator (carrier + modulator)
- **Operator A**: Sine wave, ratio 1.0, level 80%
- **Operator B**: Sine wave, ratio 2.0, FM Level 50%
- **Envelope**: Fast attack, long decay, no sustain, moderate release
- **Effects**: Saturation, compression

### Steps
1. Select Algorithm 2-Operator
2. Set Operator A: sine, ratio 1.0, level 80%
3. Set Operator B: sine, ratio 2.0, FM Level 50%
4. Create envelope: 1ms attack, 800ms decay, 0 sustain, 300ms release
5. Add saturation for harmonic content
6. Apply compression for sustain
7. Tune to key of track
8. Test with different note lengths

### Tips
- Ratio 2.0 creates octave above fundamental
- Long decay creates 808-style sustain
- Use glide for pitch slides
- Layer with kick for massive low end

### Troubleshooting
- **Harsh Top End**: Reduce Operator B level
- **Weak Sub**: Increase Operator A level
- **Tuning Problems**: Check ratio settings

## Workflow 3: Mid-Range Bass

### Configuration
- **Algorithm**: 3-Operator (complex FM)
- **Operator A**: Sine wave, ratio 1.0, level 70%
- **Operator B**: Sine wave, ratio 3.0, FM Level 40%
- **Operator C**: Sine wave, ratio 5.0, FM Level 30%
- **Envelope**: Moderate attack, moderate decay, low sustain, short release
- **Effects**: EQ, saturation

### Steps
1. Choose Algorithm 3-Operator
2. Configure Operator A: sine, ratio 1.0, level 70%
3. Configure Operator B: sine, ratio 3.0, FM Level 40%
4. Configure Operator C: sine, ratio 5.0, FM Level 30%
5. Create envelope: 10ms attack, 300ms decay, 30% sustain, 150ms release
6. Apply EQ to carve mid-range
7. Add saturation for presence
8. Test in mix context

### Tips
- Higher ratios create harmonic complexity
- Multiple modulators add character
- Use EQ to avoid frequency conflicts
- Layer with other bass elements

### Troubleshooting
- **Frequency Clashes**: Use EQ to separate frequencies
- **Thin Sound**: Increase modulator levels
- **Overpowering**: Reduce overall level

## Workflow 4: FM Bass with Grit

### Configuration
- **Algorithm**: 4-Operator (parallel carriers)
- **Operator A**: Sine wave, ratio 1.0, level 50%
- **Operator B**: Triangle wave, ratio 1.5, FM Level 60%
- **Operator C**: Sawtooth wave, ratio 2.0, FM Level 50%
- **Operator D**: Sine wave, ratio 3.0, FM Level 40%
- **Effects**: Distortion, compression, EQ

### Steps
1. Select Algorithm 4-Operator
2. Set Operator A: sine, ratio 1.0, level 50%
3. Set Operator B: triangle, ratio 1.5, FM Level 60%
4. Set Operator C: sawtooth, ratio 2.0, FM Level 50%
5. Set Operator D: sine, ratio 3.0, FM Level 40%
6. Add distortion for grit
7. Apply compression for consistency
8. Use EQ to shape frequency response

### Tips
- Different waveforms create unique character
- Higher ratios add upper harmonics
- Distortion enhances FM complexity
- Use compression for consistent level

### Troubleshooting
- **Too Harsh**: Reduce FM Levels
- **Lack of Definition**: Increase Operator A level
- **Frequency Buildup**: Apply surgical EQ

## Workflow 5: Bass with Movement

### Configuration
- **Algorithm**: 5-Operator (complex with feedback)
- **Operator A**: Sine wave, ratio 1.0, level 60%
- **Operator B**: Sine wave, ratio 2.0, FM Level 50%
- **Operator C**: Sine wave, ratio 3.0, FM Level 40%
- **Operator D**: Sine wave, ratio 4.0, FM Level 30%
- **Operator E**: Sine wave, ratio 5.0, FM Level 20%
- **LFO**: Slow rate, moderate depth, routing to FM Level
- **Effects**: Chorus, delay

### Steps
1. Choose Algorithm 5-Operator
2. Configure all operators with increasing ratios
3. Set moderate FM Levels for each operator
4. Configure LFO: slow rate (0.5 Hz), moderate depth
5. Route LFO to overall FM Level
6. Add chorus for width
7. Apply delay for space
8. Automate parameters for movement

### Tips
- Multiple operators create evolving textures
- LFO adds movement and interest
- Chorus widens the stereo image
- Automate parameters for dynamic changes

### Troubleshooting
- **Too Busy**: Simplify operator configuration
- **Phase Issues**: Check operator phase settings
- **CPU Heavy**: Reduce polyphony or effects

## Workflow 6: Bass for Different Genres

### Trap Bass
- **Focus**: Sub-bass with grit
- **Settings**: Fixed frequency, moderate FM, distortion
- **Processing**: Heavy compression, sidechain

### Hip-Hop Bass
- **Focus**: Warm, round low end
- **Settings**: Ratio-based, moderate FM, saturation
- **Processing**: Gentle compression, EQ

### EDM Bass
- **Focus**: Aggressive, cutting presence
- **Settings**: Complex FM, multiple operators, effects
- **Processing**: Heavy processing, stereo widening

### R&B Bass
- **Focus**: Smooth, melodic low end
- **Settings**: Simple FM, moderate modulation, glide
- **Processing**: Subtle compression, warmth

## Advanced Techniques

### Layering
- Layer Toxic Biohazard with other bass sources
- Use different frequency ranges
- Process layers separately then combine

### Automation
- Automate FM Levels for movement
- Modulate filter cutoff for expression
- Use velocity to control modulation depth

### Effects Integration
- Use distortion for harmonic enhancement
- Apply compression for consistency
- Add spatial effects for width

## Integration with Mix

### Frequency Management
- Use EQ to carve space in mix
- Avoid frequency conflicts with kick
- Create frequency separation with other bass elements

### Level Balancing
- Set appropriate levels for context
- Use compression for consistent volume
- Apply limiting if necessary

### Stereo Imaging
- Keep sub-bass mono
- Widen mid-range elements
- Use stereo effects appropriately

## Performance Considerations

### CPU Usage
- Monitor plugin load in complex projects
- Use freeze/flatten when appropriate
- Optimize algorithm complexity for performance

### Real-Time Control
- Map modulation to MIDI controllers
- Use automation for evolving sounds
- Create performance patches for live playing

## Conclusion
Toxic Biohazard's FM synthesis engine provides unparalleled control over bass sound design. By understanding FM principles and applying these workflows, producers can create professional-quality bass sounds that define their tracks and stand out in modern hip-hop and electronic music production.