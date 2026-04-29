# FM Keys for R&B with Toxic Biohazard

## Overview
Toxic Biohazard's hybrid FM/subtractive synthesis capabilities make it excellent for creating authentic jazzy FM keys for R&B music. This document details how to configure Toxic Biohazard for characteristic FM keyboard tones that define the genre.

## Pre-Processing Chain Setup

### Standard FM Keys Chain
| Plugin | Purpose | Setting Range |
|--------|---------|---------------|
| EQ | Tone shaping | High-pass 80Hz, presence boost 3-5kHz |
| Compression | Consistency | 3:1 ratio, medium attack/release |
| Chorus | Width enhancement | Subtle modulation |
| Toxic Biohazard | Sound generation | FM synthesis configuration |

## Rhodes-Style Electric Piano

### Basic Rhodes Configuration
| Parameter | Setting | Application |
|-----------|---------|-------------|
| Oscillators | 2 Sine + 2 Saw | Classic Rhodes tone |
| Matrix | Saw 2 → Sine 1 (25%), Saw 4 → Sine 3 (20%) | Vintage character |
| Filter | LP, 3000Hz, 25% res | Warm, vintage character |
| Envelope | 10/200/70/500 | Medium attack/release |
| LFO | Depth 15%, Rate 0.8Hz | Subtle modulation |
| Reverb Mix | 35% | Vintage room sound |

#### Oscillator Configuration
- **Osc 1**: Sine, carrier, full volume
- **Osc 2**: Saw, modulator, 25% into Osc 1
- **Osc 3**: Sine, carrier, 60% volume
- **Osc 4**: Saw, modulator, 20% into Osc 3
- **Osc 5-6**: Off

#### Application Details
- Perfect for neo-soul and jazzy R&B
- Creates authentic vintage electric piano tone
- Works well for chord comping and melodic lines
- Maintains classic Rhodes character

### Bright Rhodes Configuration
| Parameter | Setting | Application |
|-----------|---------|-------------|
| Oscillators | 2 Sine + 2 Saw + 1 Square | Brighter tone |
| Matrix | Saw 2 → Sine 1 (30%), Square 5 → Saw 4 (25%) | Rich harmonic content |
| Filter | LP, 4000Hz, 30% res | Bright, present |
| Envelope | 5/150/75/400 | Quick attack |
| LFO | Depth 18%, Rate 1.0Hz | Enhanced modulation |
| Reverb Mix | 30% | Bright room |

## Wurlitzer-Style Electric Piano

### Basic Wurlitzer Configuration
| Parameter | Setting | Application |
|-----------|---------|-------------|
| Oscillators | 3 Sine + 1 Square | Classic Wurlitzer tone |
| Matrix | Sine 2 → Sine 1 (30%), Sine 3 → Sine 1 (25%) | Vintage character |
| Filter | BP, 3500Hz, 35% res | Bright, bell-like |
| Envelope | 8/100/72/300 | Quick attack |
| LFO | Depth 20%, Rate 1.2Hz | Bell-like shimmer |
| Reverb Mix | 40% | Bright hall |

#### Oscillator Configuration
- **Osc 1**: Sine, carrier, full volume
- **Osc 2**: Sine, modulator, 30% into Osc 1
- **Osc 3**: Sine, modulator, 25% into Osc 1
- **Osc 4**: Square, carrier, 40% volume
- **Osc 5-6**: Off

#### Application Details
- Perfect for funk-influenced R&B
- Creates bright, bell-like electric piano tone
- Works well for rhythmic comping
- Maintains classic Wurlitzer character

## Hammond-Style Organ

### Basic Hammond Configuration
| Parameter | Setting | Application |
|-----------|---------|-------------|
| Oscillators | 4 Sine + 1 Saw | Classic organ tone |
| Matrix | Sine 2 → Sine 1 (20%), Sine 3 → Sine 1 (18%), Sine 4 → Sine 1 (15%) | Vintage character |
| Filter | LP, 2800Hz, 20% res | Warm, full |
| Envelope | 5/100/75/200 | Quick response |
| LFO | Depth 12%, Rate 0.6Hz | Subtle modulation |
| Reverb Mix | 30% | Vintage room |

#### Oscillator Configuration
- **Osc 1**: Sine, carrier, full volume
- **Osc 2**: Sine, modulator, 20% into Osc 1
- **Osc 3**: Sine, modulator, 18% into Osc 1
- **Osc 4**: Sine, modulator, 15% into Osc 1
- **Osc 5**: Saw, carrier, 30% volume
- **Osc 6**: Off

#### Application Details
- Perfect for gospel-influenced R&B
- Creates authentic Hammond organ tone
- Works well with drawbar simulation
- Maintains classic organ character

### Drawbar Organ Configuration
| Parameter | Setting | Application |
|-----------|---------|-------------|
| Oscillators | 6 Sine (complex) | Drawbar simulation |
| Matrix | Complex inter-oscillator modulation | Rich harmonic content |
| Filter | LP, 3200Hz, 25% res | Balanced tone |
| Envelope | 3/80/78/150 | Responsive attack |
| LFO | Depth 16%, Rate 0.9Hz | Drawbar character |
| Reverb Mix | 35% | Rotary speaker simulation |

## Jazz Piano Simulation

### Acoustic Piano Emulation
| Parameter | Setting | Application |
|-----------|---------|-------------|
| Oscillators | 3 Sine + 2 Saw | Piano-like harmonics |
| Matrix | Saw 2 → Sine 1 (25%), Saw 4 → Sine 3 (20%) | Piano character |
| Filter | LP, 4500Hz, 30% res | Bright, articulate |
| Envelope | 2/50/80/100 | Quick, articulate |
| LFO | Depth 10%, Rate 0.5Hz | Subtle movement |
| Reverb Mix | 45% | Concert hall |

#### Oscillator Configuration
- **Osc 1**: Sine, carrier, full volume
- **Osc 2**: Saw, modulator, 25% into Osc 1
- **Osc 3**: Sine, carrier, 70% volume
- **Osc 4**: Saw, modulator, 20% into Osc 3
- **Osc 5**: Sine, modulator, 10% into Osc 1
- **Osc 6**: Off

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

### Pre-Toxic Processing
- [ ] Apply high-pass filter (80-100Hz)
- [ ] Use gentle EQ to shape tone
- [ ] Apply compression for consistency
- [ ] Set appropriate gain staging

### Post-Toxic Processing
- [ ] Add reverb for space (Hall/Room)
- [ ] Apply chorus for width
- [ ] Use rotary speaker simulation for organ
- [ ] Final EQ adjustments if needed

## Troubleshooting Common Issues

### Harsh High Frequencies
- [ ] Reduce filter cutoff frequency
- [ ] Lower resonance
- [ ] Reduce FM modulation
- [ ] Apply high-frequency roll-off after

### Lack of Character
- [ ] Increase FM modulation
- [ ] Add more oscillators
- [ ] Apply appropriate LFO settings
- [ ] Increase LFO depth

### Muddy Mid-Range
- [ ] Increase filter cutoff frequency
- [ ] Reduce mid-frequency FM
- [ ] Apply EQ after Toxic
- [ ] Check for frequency buildup

## Expert Tips for Jazzy R&B Keys

### Creative Applications
- Use FM matrix for evolving textures
- Apply different envelopes to different oscillators
- Create vintage sounds with proper FM ratios
- Experiment with oscillator sync

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

Your FM keys processing is successful when:
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

### Modern Approach with Toxic Biohazard
- Authentic FM synthesis
- Consistent results across sessions
- CPU-efficient processing
- Reproducible settings

Both approaches can be combined for the best of both worlds.

---

## Related Documentation
- [Toxic Biohazard Presets INDEX](../02-Data/presets/INDEX.md)
- [R&B Sub-Genre Workflows](./rnb-subgenre-toxic.md)
- [FM Bass Workflow](./fm-bass-workflow.md)
- [FM Synthesis Fundamentals](../04-Reference/fm-synthesis-fundamentals.md)

---

**Document Version:** 1.0  
**Last Updated:** 2026-02-03  
**Focus:** FM Keys for R&B  
**Plugin:** Toxic Biohazard