# Ogon Safety Rules

## Volume & Clipping

### Master Output
- Keep master output below -3 dB
- Use limiter if approaching 0 dB
- Check true peak on export

### Oscillator Levels
- Sum of all operator levels under 250%
- Typical: Mix A 80%, Mix B 60%, others 40-60%
- High feedback (>50%) increases output

### Feedback Safety
| Feedback Level | Character | Warning |
|----------------|-----------|---------|
| 0-25% | Clean | Safe range |
| 25-45% | Warm | Normal use |
| 45-65% | Rich | Monitor levels |
| 65%+ | Harsh | Risk of clipping |

## Filter Safety

### Resonance Limits
| Setting | Character | Maximum Safe |
|---------|-----------|--------------|
| 0-30% | Clean | 30% |
| 30-50% | Character | 50% |
| 50-70% | Emphasis | 70% |
| 70%+ | Screaming | Risk of distortion |

### Cutoff Guidelines
| Use Case | Recommended | Maximum |
|----------|-------------|---------|
| Pads | 2000-3500 Hz | 5000 Hz |
| Leads | 4000-5500 Hz | 7000 Hz |
| Plucks | 3500-5000 Hz | 7000 Hz |
| Bass | 1200-2500 Hz | 4000 Hz |

## CPU Safety

### Voice Management
| Setting | CPU Impact | Recommendation |
|---------|------------|----------------|
| 6 Operators | High | Limit to 8 voices |
| 5 Operators | Medium | 12 voices |
| 3-4 Operators | Low | 16 voices |
| Unison | Very High | Use sparingly |

### Modulation Rate
| Rate | Use Case | CPU Impact |
|------|----------|------------|
| 0-0.2 Hz | Pads | Low |
| 0.2-0.5 Hz | Movement | Medium |
| 0.5-2 Hz | Animation | Medium-High |
| Audio rate | distortion | High |

## Sound Design Safety

### Modulation Depth
| Target | Maximum | Warning |
|--------|---------|---------|
| Filter Cutoff | 70% | Above = harsh |
| Pitch | 1 octave | Above = unstable |
| Amplitude | 100% | Normal range |
| Resonance | 60% | Above = feedback |

### Operator Safety
- Never exceed 100% modulation
- Watch for pitch instability with high feedback
- Reduce levels when using many operators

## Genre-Specific Limits

### R&B/Smooth
| Setting | Limit | Reason |
|---------|-------|--------|
| Feedback | 35% | Warmth |
| Cutoff | 3000 Hz | Smoothness |
| Resonance | 35% | No harshness |

### Trap/Aggressive
| Setting | Limit | Reason |
|---------|-------|--------|
| Feedback | 55% | Distortion |
| Cutoff | 4000 Hz | Presence |
| Resonance | 65% | Character |

### EDM/Festival
| Setting | Limit | Reason |
|---------|-------|--------|
| Feedback | 45% | Power |
| Cutoff | 5000 Hz | Cutting |
| Resonance | 50% | Presence |

## Common Mistakes to Avoid

| Mistake | Consequence | Prevention |
|---------|-------------|------------|
| Feedback >60% | Harsh, distorted sound | Monitor at 50% max |
| All ops at 100% | Immediate clipping | Use 50-80% per op |
| High resonance + high cutoff | Ear fatigue | Balance both |
| Fast LFO to pitch | Unpleasant vibrato | Use 0.1-0.3 Hz |
| Audio rate modulation | Digital distortion | Keep below 20 Hz |

## Quick Reference Limits

| Parameter | Maximum Safe | Warning Zone |
|-----------|---------------|--------------|
| Master Volume | -3 dB | -3 to 0 dB |
| Mix A | 100% | Normal |
| Mix B | 100% | With feedback = risk |
| Feedback | 50% | 50-65% |
| Cutoff | 7000 Hz | 6000-7000 Hz |
| Resonance | 60% | 60-80% |
| Voices | 8-12 | 12+ |
| Mod Rate | 0.5 Hz | 0.5-2 Hz |

## Troubleshooting

### Clipping
1. Reduce operator levels
2. Lower feedback
3. Enable output limiter
4. Reduce filter resonance

### Harsh Sound
1. Lower cutoff
2. Reduce resonance
3. Reduce feedback
4. Add high-pass to output

### No Low End
1. Increase operator 1 level
2. Lower cutoff frequency
3. Reduce modulation
4. Check filter routing

### Unstable Pitch
1. Reduce feedback
2. Lower modulation depth
3. Reduce operator levels
4. Check LFO rate

## FL Studio Integration

### Latency
- Ogon uses ~5-10 ms latency
- Increase buffer for recording
- Use direct monitoring

### Automation
- Right-click parameters for automation
- Smooth rapid changes
- Use for filter sweeps

### Rendering
- Render at 24-bit or 32-bit
- Check true peak
- Leave 6 dB headroom
