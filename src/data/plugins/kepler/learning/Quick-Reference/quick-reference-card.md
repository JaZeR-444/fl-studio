Tags: hip-hop/rap | R&B | electric

## Kepler Quick Reference Card

### Emergency Settings

| Problem | Quick Fix |
|---------|----------|
| Too harsh | Cutoff +20%, resonance -15% |
| Too muddy | Cutoff -15%, resonance +10% |
| No punch | Fast filter attack, resonance +10% |
| Too thin | Detune oscs, resonance +10% |
| No character | Increase resonance to 35% |
| Too loud | Oscillator level -3dB |
| Clipping | Enable soft clip, reduce output |

### Genre Defaults

| Genre | Waveforms | Cutoff | Resonance | Detune |
|-------|-----------|--------|-----------|---------|
| Hip-hop bass | Sine+Sine | 25% | 25% | 0 |
| Hip-hop lead | Saw+Square | 65% | 30% | 10 |
| R&B | Saw+Square | 70% | 20% | 5 |
| Trap lead | 3 Saws | 60% | 35% | 15 |
| EDM lead | Saw+Square | 55% | 45% | 12 |
| Lo-fi | Square | 75% | 15% | 8 |

### Waveform Guide

| Waveform | Harmonics | Character | Best For |
|----------|-----------|-----------|----------|
| Saw | All | Bright, rich | Leads, bass |
| Square | Odd | Hollow, woody | Bass, keys |
| Triangle | Few | Pure, soft | Pads, subs |
| Sine | None | Pure | Sub-bass |

### Envelope Guide

| Use | Attack | Decay | Sustain | Release |
|-----|--------|--------|---------|---------|
| Punchy bass | 5-10ms | 100-200ms | 70-80% | 50-100ms |
| Smooth pad | 50-100ms | 500-800ms | 80-90% | 500-1000ms |
| Pluck | 0-5ms | 50-150ms | 30-50% | 100-200ms |
| Lead | 10-20ms | 200-400ms | 60-80% | 150-300ms |

### LFO Guide

| Rate | Feel | Use |
|------|------|-----|
| 0.05-0.1Hz | Very slow | Ambient warp |
| 0.1-0.3Hz | Slow sweep | Pad movement |
| 0.3-0.5Hz | Moderate | Subtle vibrato |
| 1-2Hz | Fast | Tremolo/vibrato |
| 4-8Hz | Very fast | Percussive |

### Resonance Guide

| Value | Effect | Best For |
|-------|---------|----------|
| 0-20% | Clean | Fundamentals |
| 20-35% | Musical | General use |
| 35-50% | Character | Leads, bass |
| 50-70% | Pronounced | Solo passages |
| 70%+ | Extreme | Sound design |

### Troubleshooting Flowchart

```
Problem?
    ↓
Too harsh? → Cutoff +15%, res -10%
    ↓
Too muddy? → Cutoff -15%, res +10%
    ↓
No punch? → Fast attack, res +10%
    ↓
Too thin? → Detune oscs, res +10%
    ↓
Still not right? → Reset and start over
```

### Quick Preset Names

```
Bass_HipHop_Deep_[DATE]
Lead_RnB_Smooth_[DATE]
Lead_Trap_Wide_[DATE]
Pad_Atmospheric_[DATE]
Keys_Electric_[DATE]
```

### Quality Check

- [ ] Oscillators balanced
- [ ] Filter not clipping
- [ ] Modulation musical
- [ ] Mono compatible
- [ ] Fits genre
- [ ] Sounds good in mix
