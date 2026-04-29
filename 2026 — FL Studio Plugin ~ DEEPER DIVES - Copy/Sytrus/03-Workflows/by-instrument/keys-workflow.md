# Jazzy Piano and Organ Workflows with Sytrus

## Overview
Sytrus's FM synthesis capabilities make it excellent for creating authentic jazzy piano and organ sounds for R&B music. This document details how to configure Sytrus for characteristic jazzy keyboard tones that define the genre.

## Pre-Processing Chain Setup

### Standard Jazzy Keys Chain
| Plugin | Purpose | Setting Range |
|--------|---------|---------------|
| EQ | Tone shaping | High-pass 80Hz, presence boost 3-5kHz |
| Compression | Consistency | 3:1 ratio, medium attack/release |
| Chorus | Width enhancement | Subtle modulation |
| Sytrus | Sound generation | FM synthesis configuration |

## Rhodes-Style Electric Piano

### Basic Rhodes Configuration
| Parameter | Setting | Application |
|-----------|---------|-------------|
| Operators | 2 Sine + 2 Saw | Classic Rhodes tone |
| Detune | +/- 4-6 cents | Vintage character |
| Cutoff | 3000Hz | Warm, vintage character |
| Resonance | 25% | Gentle emphasis |
| Drive | 15% | Tube-like warmth |
| Envelope | 10/200/70/500 | Medium attack/release |

#### Operator Configuration
- **Operator 1**: Sine, carrier, full volume
- **Operator 2**: Saw, modulator, 25% modulation
- **Operator 3**: Sine, carrier, 60% volume
- **Operator 4**: Saw, modulator, 20% modulation
- **Operators 5-6**: Off

#### Application Details
- Perfect for neo-soul and jazzy R&B
- Creates authentic vintage electric piano tone
- Works well for chord comping and melodic lines
- Maintains classic Rhodes character

### Bright Rhodes Configuration
| Parameter | Setting | Application |
|-----------|---------|-------------|
| Operators | 2 Sine + 2 Saw + 1 Square | Brighter tone |
| Detune | +/- 5-8 cents | Rich harmonic content |
| Cutoff | 4000Hz | Bright, present |
| Resonance | 30% | Presence enhancement |
| Drive | 18% | Harmonic richness |
| Envelope | 5/150/75/400 | Quick attack |

## Wurlitzer-Style Electric Piano

### Basic Wurlitzer Configuration
| Parameter | Setting | Application |
|-----------|---------|-------------|
| Operators | 3 Sine + 1 Square | Classic Wurlitzer tone |
| Detune | +/- 3-5 cents | Vintage character |
| Cutoff | 3500Hz | Bright, bell-like |
| Resonance | 35% | Harmonic emphasis |
| Drive | 20% | Harmonic saturation |
| Envelope | 8/100/72/300 | Quick attack |

#### Operator Configuration
- **Operator 1**: Sine, carrier, full volume
- **Operator 2**: Sine, modulator, 30% modulation
- **Operator 3**: Sine, modulator, 25% modulation
- **Operator 4**: Square, carrier, 40% volume
- **Operators 5-6**: Off

#### Application Details
- Perfect for funk-influenced R&B
- Creates bright, bell-like electric piano tone
- Works well for rhythmic comping
- Maintains classic Wurlitzer character

## Hammond-Style Organ

### Basic Hammond Configuration
| Parameter | Setting | Application |
|-----------|---------|-------------|
| Operators | 4 Sine + 1 Saw | Classic organ tone |
| Detune | +/- 2-4 cents | Natural organ character |
| Cutoff | 2800Hz | Warm, full |
| Resonance | 20% | Gentle emphasis |
| Drive | 12% | Tube-like warmth |
| Envelope | 5/100/75/200 | Quick response |

#### Operator Configuration
- **Operator 1**: Sine, carrier, full volume
- **Operator 2**: Sine, modulator, 20% modulation
- **Operator 3**: Sine, modulator, 18% modulation
- **Operator 4**: Sine, modulator, 15% modulation
- **Operator 5**: Saw, carrier, 30% volume
- **Operator 6**: Off

#### Application Details
- Perfect for gospel-influenced R&B
- Creates authentic Hammond organ tone
- Works well with drawbar simulation
- Maintains classic organ character

### Drawbar Organ Configuration
| Parameter | Setting | Application |
|-----------|---------|-------------|
| Operators | 6 Sine (complex) | Drawbar simulation |
| Detune | +/- 3-6 cents | Rich harmonic content |
| Cutoff | 3200Hz | Balanced tone |
| Resonance | 25% | Harmonic emphasis |
| Drive | 16% | Tube saturation |
| Envelope | 3/80/78/150 | Responsive attack |

## Jazz Piano Simulation

### Acoustic Piano Emulation
| Parameter | Setting | Application |
|-----------|---------|-------------|
| Operators | 3 Sine + 2 Saw | Piano-like harmonics |
| Detune | +/- 5-10 cents | Natural piano character |
| Cutoff | 4500Hz | Bright, articulate |
| Resonance | 30% | Harmonic richness |
| Drive | 10% | Subtle saturation |
| Envelope | 2/50/80/100 | Quick, articulate |

#### Operator Configuration
- **Operator 1**: Sine, carrier, full volume
- **Operator 2**: Saw, modulator, 25% modulation
- **Operator 3**: Sine, modulator, 20% modulation
- **Operator 4**: Saw, modulator, 15% modulation
- **Operator 5**: Sine, modulator, 10% modulation
- **Operator 6**: Off

#### Application Details
- Perfect for sophisticated R&B
- Creates piano-like articulation
- Works well for complex chord voicings
- Maintains acoustic piano character

## Subgenre-Specific Applications

### Neo-Soul Keys
| Element | Configuration | Application |
|---------|---------------|-------------|
| Electric Piano | Rhodes-style, warm | Classic neo-soul sound |
| Organ | Hammond-style, subtle | Gospel influence |
| Effects | Reverb + Chorus | Vintage character |

### Funky R&B Keys
| Element | Configuration | Application |
|---------|---------------|-------------|
| Electric Piano | Wurlitzer-style, bright | Funky character |
| Organ | Drawbar simulation | Rhythmic playing |
| Effects | Wah + Drive | Funky texture |

### Smooth R&B Keys
| Element | Configuration | Application |
|---------|---------------|-------------|
| Electric Piano | Bright Rhodes | Polished sound |
| Organ | Basic Hammond | Clean foundation |
| Effects | Reverb only | Smooth character |

## Advanced Techniques

### Dynamic Performance
| Technique | Setup | Application |
|-----------|-------|-------------|
| Velocity Sensitivity | Adjust amplitude envelopes | Expressive playing |
| Aftertouch | Modulate filter cutoff | Dynamic expression |
| Pitch Bend | Fine adjustment | Expressive bends |

### Multi-Timbral Setup
| Layer | Configuration | Application |
|-------|---------------|-------------|
| Upper Layer | Bright Rhodes | Melodic lines |
| Lower Layer | Hammond Organ | Foundation |
| Blend | Volume balancing | Rich texture |

## Integration with R&B Effects Chain

### Pre-Sytrus Processing
- [ ] Apply high-pass filter (80-100Hz)
- [ ] Use gentle EQ to shape tone
- [ ] Apply compression for consistency
- [ ] Set appropriate gain staging

### Post-Sytrus Processing
- [ ] Add reverb for space (Hall/Room)
- [ ] Apply chorus for width
- [ ] Use rotary speaker simulation for organ
- [ ] Final EQ adjustments if needed

## Troubleshooting Common Issues

### Harsh High Frequencies
- [ ] Reduce cutoff frequency
- [ ] Lower resonance
- [ ] Use more sine waves
- [ ] Apply high-frequency roll-off after

### Lack of Character
- [ ] Increase operator modulation
- [ ] Add more operators
- [ ] Apply appropriate detuning
- [ ] Increase drive settings

### Muddy Mid-Range
- [ ] Increase cutoff frequency
- [ ] Reduce mid-frequency operators
- [ ] Apply EQ after Sytrus
- [ ] Check for frequency buildup

## Expert Tips for Jazzy R&B Keys

### Creative Applications
- Use operator modulation for evolving textures
- Apply different envelopes to different operators
- Create vintage sounds with proper operator ratios
- Experiment with detuning for character

### Performance Techniques
- Use velocity for dynamic expression
- Apply aftertouch for subtle modulation
- Use pitch bend for expressive playing
- Layer different sounds for complexity

### Genre-Specific Considerations
- Neo-Soul: Prioritize vintage character
- Funky R&B: Emphasize rhythmic elements
- Smooth R&B: Maintain polished sound
- Jazz-influenced: Focus on harmonic richness

## Success Metrics

Your jazzy keys processing is successful when:
- [ ] The sound resembles authentic vintage keyboards
- [ ] The tone fits the R&B subgenre
- [ ] The sound sits well in the mix
- [ ] The harmonic content is rich but not harsh
- [ ] The processing adds character without artifacts

## Comparison with Traditional Jazzy Keys

### Traditional Approach
- Vintage electric pianos and organs
- Analog preamps and compressors
- Tape echo and spring reverb

### Modern Approach with Sytrus
- Authentic FM synthesis
- Consistent results across sessions
- CPU-efficient processing
- Reproducible settings

Both approaches can be combined for the best of both worlds.

---

## Related Documentation
- [Sytrus Presets INDEX](../02-Data/presets/INDEX.md)
- [R&B Sub-Genre Workflows](./rnb-subgenre-sytrus.md)
- [Bass Workflow](./bass-workflow.md)
- [String Workflow](./string-workflow.md)

---

**Document Version:** 1.0  
**Last Updated:** 2026-02-03  
**Focus:** Jazzy Piano and Organ for R&B  
**Plugin:** Sytrus