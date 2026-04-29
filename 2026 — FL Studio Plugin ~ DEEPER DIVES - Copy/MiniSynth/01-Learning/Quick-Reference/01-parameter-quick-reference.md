# MiniSynth Quick Reference

## Parameters at a Glance

### Oscillator Section
| Parameter | Range | Default | Purpose |
|-----------|-------|---------|---------|
| Oscillator | Sine/Triangle/Saw/Square | Triangle | Waveform selection |
| Sub Oscillator | 0-100% | 0% | Sub-octave depth |
| Octave | -2 to +2 | 0 | Pitch shift |

### Filter Section
| Parameter | Range | Default | Purpose |
|-----------|-------|---------|---------|
| Cutoff | 20-20000 Hz | 5000 Hz | Filter frequency |
| Resonance | 0-100% | 0% | Filter emphasis |
| Type | Low Pass | Low Pass | Filter type |

### Amplifier Section
| Parameter | Range | Default | Purpose |
|-----------|-------|---------|---------|
| Attack | 0-1000ms | 10ms | Volume rise time |
| Decay | 0-1000ms | 200ms | Fade to sustain |
| Sustain | 0-100% | 80% | Hold level |
| Release | 0-2000ms | 200ms | Fade to silence |

### Global Section
| Parameter | Range | Default | Purpose |
|-----------|-------|---------|---------|
| Portamento | 0-100 | 0 | Glide time |
| Volume | 0-100 | 80 | Master volume |

---

## Waveform Guide

| Wave | Harmonics | Character | Best For |
|------|-----------|-----------|----------|
| Sine | None | Pure, clean | Subs, pure tones |
| Triangle | Odd only | Warm, round | Pads, mellow leads |
| Saw | All | Bright, aggressive | Leads, brass |
| Square | Odd only | Hollow, nasal | Retro, reeds |

---

## Filter Settings by Sound Type

| Sound Type | Cutoff | Resonance | Tips |
|------------|--------|-----------|------|
| Sub Bass | 20000 Hz | 0% | Fully open, no resonance |
| Warm Pad | 2000-3000 Hz | 20-30% | Low cutoff, subtle resonance |
| Lead | 4500-6000 Hz | 30-45% | Higher cutoff, character resonance |
| Pluck | 4000-5000 Hz | 50-65% | High resonance for click |
| Acid | 1200-1800 Hz | 70-90% | Low cutoff, max resonance |

---

## Envelope Presets

| Sound Type | Attack | Decay | Sustain | Release |
|------------|--------|-------|---------|---------|
| Sub Bass | 5-10ms | 100ms | 100% | 100ms |
| Warm Pad | 100-200ms | 400ms | 80% | 800ms |
| Lead | 5-15ms | 200ms | 90% | 150ms |
| Pluck | 1-5ms | 80-150ms | 5-20% | 30-80ms |
| Acid | 1-5ms | 150-300ms | 20-40% | 80-150ms |

---

## Common Settings by Genre

### Hip-Hop/Trap
| Parameter | Value |
|-----------|-------|
| Oscillator | Saw or Triangle + Sub |
| Cutoff | 3000 Hz |
| Resonance | 35% |
| Attack | 10ms |
| Decay | 150ms |
| Sustain | 80% |

### R&B
| Parameter | Value |
|-----------|-------|
| Oscillator | Triangle + Sine |
| Cutoff | 3500 Hz |
| Resonance | 25% |
| Attack | 20ms |
| Decay | 300ms |
| Sustain | 75% |

### EDM
| Parameter | Value |
|-----------|-------|
| Oscillator | Saw + Saw (detuned) |
| Cutoff | 5000 Hz |
| Resonance | 40% |
| Attack | 5ms |
| Decay | 200ms |
| Sustain | 90% |

---

## Troubleshooting Guide

| Problem | Likely Cause | Solution |
|---------|--------------|----------|
| Too harsh | Saw + high cutoff | Lower cutoff or use Triangle |
| Too thin | Single oscillator | Add sub or detune |
| No click on pluck | Low resonance | Increase resonance to 50%+ |
| Clicking attacks | Zero attack | Increase attack to 5-10ms |
| Muddy bass | High resonance | Lower resonance, increase cutoff |
| No low end | Sine too quiet | Increase osc volume, add sub |

---

## Related Documentation

- [Subtractive Synthesis Concepts](02-Learning/Concepts/01-subtractive-synthesis.md)
- [MiniSynth Workflows](../03-Workflows/INDEX.md)
- [MiniSynth Presets](../02-Data/presets/INDEX.md)
