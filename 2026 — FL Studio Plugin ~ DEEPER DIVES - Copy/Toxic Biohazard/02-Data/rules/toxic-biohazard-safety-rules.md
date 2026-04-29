# Toxic Biohazard Safety Rules

## Critical Gain Staging

### Do NOT
- Set any oscillator gain above 85%
- Skip the output limiter
- Use high modulation with high gains
- Stack too many operators at full volume
- Ignore the master output level

### Do
- Keep oscillator gains between 60-80%
- Use the output limiter on every patch
- Balance carrier vs modulator levels
- Check levels after every change
- Use headphones for detail

---

## FM Synthesis Dangers

### Warning Signs
| Symptom | Cause | Fix |
|---------|-------|-----|
| Harsh, painful sound | Too much modulation | Reduce mod amount |
| Muddy, undefined | Too much low frequency | High-pass, reduce ratios |
| Clicking on attacks | Envelope too fast | Smooth envelope attack |
| Distorted output | Gain too high | Reduce gains, check limiter |

---

## Operator Safety Levels

### Maximum Safe Levels
| Operator Type | Maximum Gain | Typical Use |
|---------------|--------------|-------------|
| Carrier (Osc1) | 80% | Main sound |
| Modulator (Osc2+) | 60% | Harmonics |
| Combined Output | 75% | Final mix |

---

## Modulation Guidelines

### Safe Modulation Ranges
| Effect | Safe Range | Danger Zone |
|--------|-----------|-------------|
| Harmonic FM | 10-40% | Above 60% |
| AM/Ring Mod | 20-50% | Above 70% |
| Filter FM | 30-60% | Above 80% |
| Pitch FM | 10-30% | Above 50% |

---

## Filter Safety

### Resonance Limits
- Low resonance (0-30%): Safe for most sounds
- Medium resonance (30-50%): Adds character
- High resonance (50-70%): Use carefully
- Extreme resonance (70%+): Can cause feedback

### Cutoff Guidelines
- High cutoff (5kHz+): Bright, may be harsh
- Medium cutoff (2-5kHz): Balanced
- Low cutoff (<2kHz): Dark, may be muddy

---

## Troubleshooting Common Issues

### Problem: "My bass has no punch"
- Check envelope attack time (should be 5-10ms)
- Reduce modulation on sub frequencies
- Increase filter cutoff to 3-4kHz
- Check for masking with kick

### Problem: "My lead sounds harsh"
- Reduce operator gains by 10-15%
- Lower modulation amount
- Reduce filter resonance
- Increase filter cutoff slightly

### Problem: "Sound is muddy"
- High-pass at 50-80Hz
- Reduce low ratios (below 1.0)
- Increase filter cutoff
- Reduce envelope release time

### Problem: "Clicking on notes"
- Smooth envelope attack (10-20ms)
- Enable anti-pop in preferences
- Reduce rapid parameter changes
- Use soft clipping on output

---

## Genre-Specific Rules

### Trap/Drill
- Keep sub frequencies clean
- Use high ratios for bells
- Avoid excessive modulation
- Check on phone speakers

### EDM/Bass Music
- Higher modulation for growls
- Heavy resonance for character
- Fast envelopes for impact
- Watch for distortion

### R&B/Jazzy
- Lower modulation for warmth
- Sine waves preferred
- Smooth envelopes
- Preserve dynamics

---

## Related Documentation
- [Toxic Biohazard Presets INDEX](../02-Data/presets/INDEX.md)
- [FM Synthesis Archetypes](../02-Data/presets/fm-synthesis-archetypes.md)
- [Toxic Biohazard Parameter Cheat Sheet](../01-Learning/Quick-Reference/parameter-cheat-sheet.md)
