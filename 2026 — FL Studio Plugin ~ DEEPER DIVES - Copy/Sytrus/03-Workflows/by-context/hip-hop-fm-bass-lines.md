# Sytrus - Hip-Hop Bass Line Creation

## Overview

This guide details how to create distinctive bass lines for hip-hop production using Sytrus's FM synthesis capabilities. Hip-hop bass lines often require harmonic complexity, punch, and the ability to cut through dense mixes.

## Hip-Hop Bass Characteristics

### Desired Qualities
- **Harmonic Complexity**: Rich harmonic content that adds character
- **Punch**: Ability to cut through the mix
- **Low-End Foundation**: Solid fundamental frequencies
- **Musicality**: Harmonically pleasing, not harsh
- **Mix Compatibility**: Works well with drums and other elements

## Algorithm Selection for Hip-Hop Bass

### Recommended Algorithms
| Algorithm | Characteristic | Best For | Hip-Hop Subgenre |
|-----------|----------------|----------|------------------|
| 1-5 | Clean, musical | Warm bass lines | All |
| 6-15 | Moderate complexity | Modern hip-hop | Contemporary |
| 16-25 | Complex harmonics | Aggressive bass | Trap |
| 26-35 | Feedback effects | Growling bass | Trap/Drill |
| 36-45 | Parallel carriers | Wide bass | All |

### Algorithm Application Notes
- **Algorithms 1-5**: Start here for warm, musical basses
- **Algorithms 16-25**: Add harmonic complexity for modern sounds
- **Algorithms 26-35**: Use for aggressive, growling basses
- **Algorithms 36-45**: Create wide, full bass sounds

## Operator Configuration for Hip-Hop Bass

### Basic Operator Setup
| Operator | Function | Waveform | Level | Frequency | Use Case |
|----------|----------|----------|-------|-----------|----------|
| 1 | Modulator | Sine/Triangle | 20-40% | Ratio | Harmonic foundation |
| 2 | Modulator | Sine/Triangle | 15-35% | Ratio | Harmonic complexity |
| 3 | Modulator | Sine | 10-30% | Ratio | Subtle enhancement |
| 4 | Carrier | Sine/Triangle | 60-80% | Ratio | Main bass tone |
| 5 | Carrier | Triangle/Saw | 40-70% | Ratio | Harmonic content |
| 6 | Output | Sawtooth | 50-100% | Ratio | Final output |

### Advanced Operator Techniques
- **Operator 1**: Often set as the primary modulator for harmonic foundation
- **Operators 2-3**: Add complexity and character
- **Operators 4-5**: Serve as primary carriers for the bass tone
- **Operator 6**: Usually the main output, sometimes mixed with Operator 5

## Envelope Settings for Hip-Hop Bass

### ADSR Configuration
| Stage | Setting | Purpose | Hip-Hop Application |
|-------|---------|---------|---------------------|
| Attack | 0-10ms | Defines onset | Fast for punch |
| Decay | 50-200ms | Harmonic evolution | Controls harmonic complexity |
| Sustain | 30-70% | Continuous level | Maintains presence |
| Release | 100-300ms | Note end | Smooth note endings |

### Envelope Variations by Subgenre
- **Trap**: Fast attack, medium decay, medium sustain
- **Boom Bap**: Medium attack, longer decay, lower sustain
- **Modern Hip-Hop**: Fast attack, variable decay, medium sustain

## Frequency Ratio Settings

### Ratio Selection for Different Effects
| Ratio | Effect | Application | Sound Character |
|-------|--------|-------------|-----------------|
| 1:1 | Octave | Fundamental | Solid foundation |
| 2:1 | Octave up | Harmonic richness | Brighter sound |
| 3:2 | Fifth | Musical intervals | Consonant harmonics |
| 4:1 | Two octaves | Harmonic complexity | Richer sound |
| 5:2 | Major third | Musical intervals | Pleasant harmonics |

### Practical Ratio Applications
- **Fundamental Focus**: Use 1:1 ratios for solid low-end
- **Harmonic Richness**: Mix 1:1, 2:1, and 3:2 for musical harmonics
- **Aggressive Sound**: Use higher ratios (4:1, 5:2) for complexity

## Waveform Selection for Hip-Hop Bass

### Waveform Characteristics
| Waveform | Harmonic Content | Character | Hip-Hop Use |
|----------|------------------|-----------|-------------|
| Sine | None | Clean, pure | Foundation, warm bass |
| Triangle | Odd harmonics | Warm, soft | Musical bass |
| Sawtooth | All harmonics | Rich, full | Aggressive bass |
| Square | Odd harmonics | Hollow, reedy | Vintage sounds |
| Noise | All frequencies | Textural | Percussive elements |

### Waveform Combinations
- **Operators 1-3 (Modulators)**: Sine or triangle for clean modulation
- **Operators 4-5 (Carriers)**: Triangle for warm bass, sawtooth for aggressive
- **Operator 6 (Output)**: Sawtooth for fullness, triangle for warmth

## Hip-Hop Subgenre Applications

### Trap Bass Lines
| Parameter | Setting | Reason |
|-----------|---------|---------|
| Algorithm | 20-30 | Complex, aggressive harmonics |
| Waveform | Sawtooth/Sine mix | Aggressive yet musical |
| Modulation | High | Harmonic complexity |
| Envelope | Fast attack, medium decay | Punchy, sustained |
| Effects | Distortion + Chorus | Extra character |

#### Trap Bass Creation Steps:
1. Load Algorithm 25
2. Set Operators 1-3 to sine (levels: 30%, 25%, 20%)
3. Set Operators 4-5 to sawtooth (levels: 70%, 60%)
4. Set Operator 6 to sawtooth (level: 80%)
5. Apply fast attack (1ms), medium decay (150ms)
6. Add distortion and chorus for character

### Boom Bap Bass Lines
| Parameter | Setting | Reason |
|-----------|---------|---------|
| Algorithm | 3-8 | Clean, musical |
| Waveform | Triangle/Sine | Warm, vintage character |
| Modulation | Low-Medium | Musical, not harsh |
| Envelope | Medium attack, longer decay | Smooth, expressive |
| Effects | Chorus + Reverb | Vintage feel |

#### Boom Bap Bass Creation Steps:
1. Load Algorithm 5
2. Set all operators to triangle or sine
3. Set Operator 6 (output) to 80%
4. Apply Operator 5 to modulate Operator 6 (level: 40%)
5. Apply medium attack (20ms), longer decay (400ms)
6. Add subtle chorus and reverb

### Modern Hip-Hop Bass Lines
| Parameter | Setting | Reason |
|-----------|---------|---------|
| Algorithm | 10-20 | Balanced complexity |
| Waveform | Mixed | Versatile character |
| Modulation | Medium | Musical complexity |
| Envelope | Fast attack, variable decay | Punchy yet expressive |
| Effects | EQ + Compression | Mix compatibility |

#### Modern Hip-Hop Bass Creation Steps:
1. Load Algorithm 15
2. Set Operators 1-2 to sine (levels: 25%, 20%)
3. Set Operators 3-4 to triangle (levels: 30%, 70%)
4. Set Operators 5-6 to sawtooth (levels: 60%, 80%)
5. Apply fast attack (5ms), medium decay (200ms)
6. Add EQ to shape the tone

## Effects Processing for Hip-Hop Bass

### Built-in Effects Configuration
| Effect | Setting | Purpose | Hip-Hop Application |
|--------|---------|---------|---------------------|
| Chorus | Rate: 0.5, Depth: 30% | Widening | Thicken bass sound |
| Delay | Time: 1/8, Feedback: 20% | Space | Add depth |
| Reverb | Size: 50%, Damp: 60% | Space | Vintage feel |
| Distortion | Drive: 15%, Tone: 70% | Character | Aggressive sound |
| EQ | High-pass: 30Hz | Clean-up | Remove rumble |

### Effects by Subgenre
- **Trap**: Distortion + subtle chorus for character
- **Boom Bap**: Chorus + reverb for vintage feel
- **Modern**: EQ + compression for mix compatibility

## Advanced Techniques

### Sidechain Integration
1. Route kick drum to Sytrus sidechain input
2. Set fast attack and release (10ms each)
3. Apply 3-6dB reduction on kick hits
4. Maintains bass presence while avoiding frequency clash

### Multi-Stage Envelopes
- Use different envelope shapes for different operators
- Create evolving bass sounds that change over time
- Operator 4 (main carrier) has different envelope than Operator 5 (harmonic contributor)

### LFO Modulation
- Apply slow LFO to operator levels for evolving harmonics
- Use LFO to modulate algorithm parameters for dramatic changes
- Rate around 0.1-0.5Hz for subtle evolution

## Troubleshooting Common Issues

### Bass is Too Harsh
- Reduce modulation levels (especially operators 2-3)
- Switch to sine/triangle waveforms
- Use simpler algorithms
- Apply EQ to tame harsh frequencies

### Bass is Too Quiet
- Increase carrier operator levels (Operators 4-6)
- Check algorithm routing
- Add subtle distortion for presence
- Verify note range isn't too high

### Bass Doesn't Cut Through Mix
- Add harmonic content with higher operators
- Use sawtooth waveforms for more presence
- Apply EQ to boost presence frequencies (1-3kHz)
- Consider parallel processing with distorted version

### Low-End Is Muddy
- Apply high-pass filter around 30-50Hz
- Reduce lower harmonics with EQ
- Use simpler algorithms
- Check for phase issues in low frequencies

## Mix Integration Tips

### EQ Considerations
- High-pass filter at 30-50Hz to remove rumble
- Boost around 100-200Hz for fundamental presence
- Cut around 200-400Hz if muddying the mix
- Boost around 1-3kHz for presence and definition

### Compression Settings
- Ratio: 2:1 to 3:1
- Attack: Medium (20-50ms) to preserve punch
- Release: Medium (100-200ms) for musical response
- Makeup gain to compensate for reduction

### Stereo Imaging
- Keep fundamental frequencies centered
- Use chorus or stereo imaging for width
- Avoid hard panning of bass elements
- Consider mid-side processing

## Success Metrics

Your hip-hop bass line is successful when:
- [ ] It has harmonic complexity without harshness
- [ ] It cuts through the mix appropriately
- [ ] It maintains low-end foundation
- [ ] It fits the subgenre's aesthetic
- [ ] It works well with drums and other elements
- [ ] It has appropriate punch and presence

## Related Documentation
- [FM Synthesis Basics](../01-Learning/Quick-Reference/fm-synthesis-basics.md)
- [Parameter Cheat Sheet](../01-Learning/Quick-Reference/parameter-cheat-sheet.md)
- [R&B Analog Emulation](../03-Workflows/by-context/rnb-analog-emulation.md)

---

**Document Version:** 1.0
**Last Updated:** 2026-02-03
**Focus:** Hip-Hop Bass Design
**Plugin:** Sytrus