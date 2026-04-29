# Toxic Biohazard By-Instrument Workflows

## Bass Workflows

### Dark Trap Bass
| Parameter | Setting |
|-----------|---------|
| Osc1 | Sawtooth, Ratio 1.00 |
| Osc2 | Sine, Ratio 0.50 |
| Mod Amount | 50% |
| Filter Cutoff | 3000Hz |
| Resonance | 40% |
| Envelope | 5/200/80/300 |

### Configuration
1. Set Osc1 as carrier (Sawtooth)
2. Set Osc2 as modulator (Sine, octave down)
3. Route Osc2 to Osc1 at 50%
4. Apply low-pass filter with resonance
5. Shape envelope for punch

### Tips
- Perfect for 808-style bass
- Layer with kick for impact
- Sidechain for pumping effect

---

### Aggressive Growl Bass
| Parameter | Setting |
|-----------|---------|
| Osc1 | Sawtooth, Ratio 1.00 |
| Osc2 | Sawtooth, Ratio 1.25 |
| Mod Amount | 70% |
| Filter Cutoff | 4000Hz |
| Resonance | 55% |
| Envelope | 3/100/85/200 |

### Configuration
1. Both oscillators as Sawtooth
2. Slight ratio difference for dissonance
3. High modulation for growl
4. High resonance for character
5. Fast envelope for impact

### Tips
- Great for dubstep and drill
- Use LFO for wobble effect
- Reduce modulation if too harsh

---

## Lead Workflows

### Bright FM Lead
| Parameter | Setting |
|-----------|---------|
| Osc1 | Sawtooth, Ratio 1.00 |
| Osc2 | Sawtooth, Ratio 2.00 |
| Osc3 | Square, Ratio 3.00 |
| Mod Amount | 35% |
| Filter Cutoff | 5500Hz |
| Resonance | 25% |
| Envelope | 10/200/78/400 |

### Configuration
1. Stack 3 operators with harmonic ratios
2. Moderate modulation for presence
3. Bright filter for cutting through
4. Quick attack for immediacy

### Tips
- Perfect for melodic hooks
- Great for festival leads
- Add reverb for space

---

### Punchy FM Lead
| Parameter | Setting |
|-----------|---------|
| Osc1 | Square, Ratio 1.00 |
| Osc2 | Sine, Ratio 1.50 |
| Mod Amount | 45% |
| Filter Cutoff | 4500Hz |
| Resonance | 35% |
| Envelope | 5/150/80/300 |

### Configuration
1. Square wave for presence
2. Sine modulator for body
3. Moderate modulation
4. Quick envelope for punch

### Tips
- Great for rhythmic parts
- Perfect for hip-hop melodies
- Layer with drums

---

## Pad/Texture Workflows

### Warm FM Pad
| Parameter | Setting |
|-----------|---------|
| Osc1 | Sine, Ratio 1.00 |
| Osc2 | Sine, Ratio 2.00 |
| Osc3 | Sine, Ratio 3.00 |
| Mod Amount | 10% |
| Filter Cutoff | 2500Hz |
| Resonance | 15% |
| Envelope | 200/800/70/1500 |

### Configuration
1. All sine waves for warmth
2. Low modulation for clarity
3. Dark filter for smoothness
4. Slow envelope for ambiance

### Tips
- Perfect for backgrounds
- Great for R&B and jazz
- Add chorus for width

---

### Metallic Texture
| Parameter | Setting |
|-----------|---------|
| Osc1 | Sine, Ratio 4.00 |
| Osc2 | Sine, Ratio 8.00 |
| Mod Amount | 20% |
| Filter Cutoff | 6000Hz |
| Resonance | 30% |
| Envelope | 50/500/60/800 |

### Configuration
1. High ratios for metallic sound
2. Low modulation for glassy tone
3. High filter for brightness
4. Medium envelope for presence

### Tips
- Great for modern trap
- Perfect for unique accents
- Use sparingly

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| No low-end | Increase Osc2 gain, check filter cutoff |
| Too harsh | Reduce modulation, increase filter cutoff |
| No definition | Increase resonance slightly |
| Muddy sound | High-pass at 40Hz, reduce lows |
| Weak attack | Decrease envelope attack time |

---

## Related Documentation
- [Toxic Biohazard Presets INDEX](../02-Data/presets/INDEX.md)
- [FM Synthesis Archetypes](../02-Data/presets/fm-synthesis-archetypes.md)
- [FM Gain Staging Rules](../02-Data/rules/fm-gain-staging-rules.md)
