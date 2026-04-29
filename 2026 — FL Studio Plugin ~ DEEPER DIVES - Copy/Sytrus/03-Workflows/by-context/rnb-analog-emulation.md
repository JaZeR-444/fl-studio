# Sytrus - R&B Analog Emulation

## Overview

This guide details how to use Sytrus to emulate classic analog synthesizer sounds for R&B production. R&B music often features warm, musical synthesizer sounds that evoke vintage instruments like Moog basses, Rhodes electric pianos, and analog string machines.

## R&B Analog Sound Characteristics

### Desired Qualities
- **Warmth**: Rich, full low-mid presence
- **Musicality**: Harmonically pleasing without harshness
- **Expressiveness**: Responsive to performance dynamics
- **Smoothness**: Clean, polished sound
- **Vintage Character**: Emulation of classic analog instruments

## Algorithm Selection for R&B Analog Emulation

### Recommended Algorithms
| Algorithm | Characteristic | Best For | R&B Application |
|-----------|----------------|----------|-----------------|
| 1-8 | Clean, musical | Warm basses | Vintage bass emulation |
| 9-15 | Moderate complexity | Smooth leads | Analog lead emulation |
| 16-22 | Harmonic richness | Electric pianos | Rhodes/Wurlitzer emulation |
| 23-30 | Evolving textures | Strings | String machine emulation |
| 31-40 | Parallel carriers | Wide sounds | Ensemble sounds |

### Algorithm Application Notes
- **Algorithms 1-8**: Start here for warm, analog-style basses
- **Algorithms 9-15**: Use for smooth, expressive leads
- **Algorithms 16-22**: Perfect for electric piano emulation
- **Algorithms 23-30**: Create evolving string-like textures
- **Algorithms 31-40**: For wide, ensemble-type sounds

## Operator Configuration for R&B Analog Emulation

### Vintage Bass Emulation Setup
| Operator | Function | Waveform | Level | Frequency | Use Case |
|----------|----------|----------|-------|-----------|----------|
| 1 | Modulator | Sine | 15-25% | Ratio | Harmonic foundation |
| 2 | Modulator | Triangle | 10-20% | Ratio | Warmth addition |
| 3 | Modulator | Sine | 5-15% | Ratio | Subtle complexity |
| 4 | Carrier | Triangle | 70-85% | Ratio | Main bass tone |
| 5 | Carrier | Sine | 40-60% | Ratio | Harmonic content |
| 6 | Output | Triangle | 60-90% | Ratio | Final output |

### Electric Piano Emulation Setup
| Operator | Function | Waveform | Level | Frequency | Use Case |
|----------|----------|----------|-------|-----------|----------|
| 1 | Modulator | Sine | 20-30% | Ratio | Harmonic foundation |
| 2 | Modulator | Sine | 15-25% | Ratio | Brightness |
| 3 | Modulator | Triangle | 10-20% | Ratio | Warmth |
| 4 | Carrier | Triangle | 50-70% | Ratio | Main tone |
| 5 | Carrier | Sine | 40-60% | Ratio | Harmonic content |
| 6 | Output | Triangle | 60-80% | Ratio | Final output |

### String Machine Emulation Setup
| Operator | Function | Waveform | Level | Frequency | Use Case |
|----------|----------|----------|-------|-----------|----------|
| 1 | Modulator | Sine | 25-35% | Ratio | Harmonic foundation |
| 2 | Modulator | Sine | 20-30% | Ratio | Chorus effect |
| 3 | Modulator | Triangle | 15-25% | Ratio | Depth |
| 4 | Carrier | Triangle | 60-80% | Ratio | Main string tone |
| 5 | Carrier | Sine | 50-70% | Ratio | Harmonic content |
| 6 | Output | Triangle | 70-90% | Ratio | Final output |

## Envelope Settings for R&B Analog Emulation

### Bass Envelope Configuration
| Stage | Setting | Purpose | R&B Application |
|-------|---------|---------|-----------------|
| Attack | 5-20ms | Defines onset | Smooth, not percussive |
| Decay | 100-300ms | Harmonic evolution | Musical decay |
| Sustain | 40-80% | Continuous level | Maintains presence |
| Release | 200-500ms | Note end | Smooth note endings |

### Lead Envelope Configuration
| Stage | Setting | Purpose | R&B Application |
|-------|---------|---------|-----------------|
| Attack | 10-50ms | Defines onset | Expressive, not harsh |
| Decay | 150-400ms | Harmonic evolution | Musical development |
| Sustain | 50-90% | Continuous level | Maintains expression |
| Release | 300-800ms | Note end | Smooth, expressive endings |

### Pad/Strings Envelope Configuration
| Stage | Setting | Purpose | R&B Application |
|-------|---------|---------|-----------------|
| Attack | 100-500ms | Defines onset | Gentle entry |
| Decay | 200-600ms | Harmonic evolution | Smooth development |
| Sustain | 60-100% | Continuous level | Sustained presence |
| Release | 400-1000ms | Note end | Gentle fade |

## Frequency Ratio Settings for Analog Emulation

### Bass Ratio Selection
| Ratio | Effect | Application | Sound Character |
|-------|--------|-------------|-----------------|
| 1:1 | Octave | Fundamental | Solid foundation |
| 2:1 | Octave up | Harmonic richness | Fuller sound |
| 3:2 | Fifth | Musical intervals | Consonant harmonics |
| 4:1 | Two octaves | Harmonic complexity | Richer sound |
| 5:4 | Major third | Musical intervals | Pleasant harmonics |

### Electric Piano Ratio Selection
| Ratio | Effect | Application | Sound Character |
|-------|--------|-------------|-----------------|
| 1:1 | Octave | Fundamental | Core tone |
| 2:1 | Octave up | Harmonic richness | Brightness |
| 3:1 | Octave + fifth | Complex harmonics | Electric piano character |
| 4:1 | Two octaves | Harmonic complexity | Upper harmonics |
| 6:1 | Two octaves + fifth | Complex harmonics | Rich upper harmonics |

## Waveform Selection for R&B Analog Emulation

### Waveform Characteristics
| Waveform | Harmonic Content | Character | R&B Use |
|----------|------------------|-----------|---------|
| Sine | None | Clean, pure | Foundation, warmth |
| Triangle | Odd harmonics | Warm, soft | Vintage character |
| Sawtooth | All harmonics | Rich, full | Full-bodied sounds |
| Square | Odd harmonics | Hollow, reedy | Reed-like sounds |
| Noise | All frequencies | Textural | Air, ambience |

### Waveform Combinations for Analog Emulation
- **Operators 1-3 (Modulators)**: Sine and triangle for clean modulation
- **Operators 4-5 (Carriers)**: Triangle for warm analog character
- **Operator 6 (Output)**: Triangle or sine for smooth output

## R&B Subgenre Applications

### Neo-Soul Analog Sounds
| Parameter | Setting | Reason |
|-----------|---------|---------|
| Algorithm | 8-15 | Warm, musical |
| Waveform | Triangle/Sine | Organic feel |
| Modulation | Low-Medium | Musical, not harsh |
| Envelope | Medium attack, long decay | Expressive, smooth |
| Effects | Chorus + Reverb | Vintage feel |

#### Neo-Soul Bass Creation Steps:
1. Load Algorithm 5
2. Set all operators to triangle or sine
3. Set Operator 6 (output) to 80%
4. Apply Operator 5 to modulate Operator 6 (level: 40%)
5. Apply medium attack (10ms), longer decay (400ms)
6. Add chorus and reverb for vintage feel

### Smooth R&B Analog Sounds
| Parameter | Setting | Reason |
|-----------|---------|---------|
| Algorithm | 12-20 | Balanced complexity |
| Waveform | Mixed triangle/sine | Smooth character |
| Modulation | Low | Clean, polished |
| Envelope | Medium attack, long sustain | Smooth, sustained |
| Effects | EQ + Reverb | Polished sound |

#### Smooth R&B Lead Creation Steps:
1. Load Algorithm 15
2. Set Operators 1-2 to sine (levels: 15%, 10%)
3. Set Operators 3-4 to triangle (levels: 20%, 60%)
4. Set Operators 5-6 to triangle (levels: 50%, 70%)
5. Apply medium attack (20ms), long sustain (80%)
6. Add reverb for smoothness

### Funky R&B Analog Sounds
| Parameter | Setting | Reason |
|-----------|---------|---------|
| Algorithm | 18-25 | Harmonic complexity |
| Waveform | Triangle + sawtooth | Full-bodied |
| Modulation | Medium | Harmonic richness |
| Envelope | Fast attack, medium decay | Punchy, rhythmic |
| Effects | EQ + Chorus | Vintage funk feel |

#### Funky R&B Bass Creation Steps:
1. Load Algorithm 20
2. Set Operators 1-2 to triangle (levels: 20%, 15%)
3. Set Operators 3-4 to triangle/sawtooth mix (levels: 25%, 65%)
4. Set Operators 5-6 to sawtooth (levels: 55%, 75%)
5. Apply fast attack (5ms), medium decay (200ms)
6. Add chorus for vintage funk character

## Effects Processing for R&B Analog Emulation

### Built-in Effects Configuration
| Effect | Setting | Purpose | R&B Application |
|--------|---------|---------|-----------------|
| Chorus | Rate: 0.3, Depth: 40% | Widening | Vintage analog feel |
| Delay | Time: 1/4, Feedback: 25% | Space | Analog tape delay emulation |
| Reverb | Size: 70%, Damp: 50% | Space | Room/hall ambiance |
| Distortion | Drive: 10%, Tone: 60% | Character | Subtle analog saturation |
| EQ | High-pass: 30Hz, Low-shelf: 100Hz | Tone shaping | Analog warmth |

### Effects by Application
- **Basses**: Chorus + subtle reverb for vintage feel
- **Leads**: Chorus + reverb for expressiveness
- **Pads/Strings**: Reverb + delay for spaciousness
- **Electric Pianos**: Chorus + reverb for authenticity

## Advanced Analog Emulation Techniques

### Filter Emulation
- Use the built-in distortion as a soft clipper to emulate analog saturation
- Apply EQ to shape the frequency response like analog circuits
- Use LFO modulation to emulate analog oscillator drift

### LFO Applications for Analog Feel
- Apply slow LFO to pitch for oscillator drift
- Use LFO to modulate operator levels for evolving harmonics
- Apply LFO to algorithm parameters for subtle evolution
- Rate around 0.1-0.3Hz for realistic analog drift

### Multi-Stage Envelopes
- Use different envelope shapes for different operators
- Create evolving sounds that change harmonic content over time
- Operator 4 (main carrier) has different envelope than Operator 5 (harmonic contributor)

## Troubleshooting Common Issues

### Sound is Too Digital/Artificial
- Reduce modulation complexity
- Use simpler algorithms
- Switch to sine/triangle waveforms
- Add analog-style effects (chorus, tape saturation)

### Sound Lacks Warmth
- Increase lower harmonics (operators with lower ratios)
- Use more triangle/sine waveforms
- Add subtle distortion or saturation
- Apply low-shelf EQ boost around 100-200Hz

### Sound is Too Harsh
- Reduce modulation levels (especially operators 2-3)
- Switch to sine/triangle waveforms
- Use simpler algorithms
- Apply EQ to tame harsh frequencies

### Sound Lacks Character
- Add subtle modulation complexity
- Use slightly more complex algorithms
- Add harmonic distortion/saturation
- Apply analog-style effects processing

## Mix Integration Tips

### EQ Considerations
- Low-shelf boost around 100-200Hz for analog warmth
- Gentle high-shelf boost around 10kHz for air/sparkle
- Cut around 200-400Hz if muddying the mix
- Apply high-pass filter at 30-50Hz to remove rumble

### Compression Settings
- Ratio: 2:1 to 3:1
- Attack: Medium (20-50ms) to preserve expression
- Release: Medium (100-300ms) for musical response
- Makeup gain to maintain analog feel

### Stereo Imaging
- Keep fundamental frequencies centered
- Use chorus or stereo imaging for analog width
- Avoid hard panning of bass elements
- Consider analog-style stereo effects

## Success Metrics

Your R&B analog emulation is successful when:
- [ ] It has the warmth and character of vintage analog synths
- [ ] It sounds musical and pleasant without harshness
- [ ] It fits the R&B subgenre's aesthetic
- [ ] It has appropriate expressiveness for the style
- [ ] It works well in the mix context
- [ ] It evokes the feeling of classic analog instruments

## Comparison with Actual Analog Synths

### Moog Bass Emulation
- Focus on algorithms 1-8 for warm, full basses
- Use triangle/sine waveforms for analog character
- Apply subtle distortion for analog saturation
- Use medium envelopes for musical response

### Rhodes Electric Piano Emulation
- Use algorithms 15-22 for bell-like harmonics
- Combine sine and triangle waveforms
- Apply chorus for authentic Rhodes shimmer
- Use medium attack and release for key feel

### String Machine Emulation
- Use algorithms 25-35 for evolving textures
- Apply LFO modulation for ensemble effect
- Use reverb for spatial feel
- Apply slow envelopes for smooth entry/exit

## Related Documentation
- [FM Synthesis Basics](../01-Learning/Quick-Reference/fm-synthesis-basics.md)
- [Parameter Cheat Sheet](../01-Learning/Quick-Reference/parameter-cheat-sheet.md)
- [Hip-Hop FM Bass Lines](../03-Workflows/by-context/hip-hop-fm-bass-lines.md)

---

**Document Version:** 1.0
**Last Updated:** 2026-02-03
**Focus:** R&B Analog Emulation
**Plugin:** Sytrus