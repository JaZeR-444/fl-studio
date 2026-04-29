# MiniSynth Preset Parameters

## Complete Parameter Map

### Oscillator Section
| Parameter | Range | Default | Purpose |
|-----------|-------|---------|---------|
| Wave | See below | Triangle | Waveform selection |
| Modifier | 0-100% | 50% | Wave-specific control |
| Octave | -2 to +2 | 0 | Pitch shift |
| Volume | 0-100% | 80% | Oscillator level |
| Detune | -50 to +50 cents | 0 | Pitch variation |

### Waveform Guide
| Wave | Character | Modifier Function |
|------|-----------|------------------|
| Sine | Pure tone | Not used |
| Triangle | Warm | Not used |
| Saw | Bright | Pulse width |
| Saw+Saw | Thick | Detune |
| SuperSaw | Wide | Detune amount |
| Bell | Metallic | Harmonics |
| DeafSaw | Harsh | Detune |
| Pulse | Hollow | Pulse width |

---

## Filter Section

| Parameter | Range | Default | Purpose |
|-----------|-------|---------|---------|
| Cutoff | 20-20000 Hz | 5000 Hz | Filter frequency |
| Resonance | 0-100% | 0% | Filter emphasis |
| Type | Low Pass | Low Pass | Filter type |

### Modifier Effects by Wave
| Wave | Modifier Changes |
|------|-----------------|
| Sine | Not applicable |
| Triangle | Not applicable |
| Saw | PWM amount |
| Saw+Saw | Osc 2 detune |
| SuperSaw | All detune |
| Bell | Harmonic balance |
| DeafSaw | Detune amount |
| Pulse | Pulse width |

---

## Amplifier Section

| Parameter | Range | Default | Purpose |
|-----------|-------|---------|---------|
| Attack | 0-1000ms | 10ms | Volume rise |
| Decay | 0-1000ms | 200ms | Fade to sustain |
| Sustain | 0-100% | 80% | Hold level |
| Release | 0-2000ms | 200ms | Fade to silence |

---

## LFO Section

| Parameter | Range | Default | Purpose |
|-----------|-------|---------|---------|
| Rate | 0-20 Hz | 1 Hz | Modulation speed |
| Depth | 0-100% | 50% | Modulation amount |
| Shape | Sine/Triangle/Square/Saw | Sine | LFO waveform |

### LFO Targets
| Target | Effect |
|--------|--------|
| Pitch | Vibrato |
| Filter | Wah effect |
| Amplitude | Tremolo |
| Pan | Auto-pan |

---

## Global Section

| Parameter | Range | Default | Purpose |
|-----------|-------|---------|---------|
| Portamento | 0-100 | 0 | Glide time |
| Volume | 0-100 | 80 | Master output |
| Unison | On/Off | Off | Voice stacking |

---

## Quick Preset Reference

### Basic Sine Sub
| Parameter | Value |
|-----------|-------|
| Wave | Sine |
| Octave | 0 |
| Cutoff | 20000 |
| Resonance | 0 |
| Attack | 5ms |
| Decay | 100ms |
| Sustain | 100% |
| Release | 100ms |

### Warm Triangle Lead
| Parameter | Value |
|-----------|-------|
| Wave | Triangle |
| Octave | 0 |
| Cutoff | 4000 |
| Resonance | 20 |
| Attack | 15ms |
| Decay | 300ms |
| Sustain | 85% |
| Release | 200ms |

### Aggressive Saw Lead
| Parameter | Value |
|-----------|-------|
| Wave | Saw |
| Octave | 0 |
| Cutoff | 5000 |
| Resonance | 40 |
| Attack | 5ms |
| Decay | 200ms |
| Sustain | 90% |
| Release | 150ms |

### SuperSaw Stack
| Parameter | Value |
|-----------|-------|
| Wave | SuperSaw |
| Octave | 0 |
| Modifier | 60% |
| Cutoff | 4800 |
| Resonance | 35 |
| Attack | 8ms |
| Decay | 200ms |
| Sustain | 90% |
| Release | 180ms |

---

## Related Documentation

- [Subtractive Synthesis Concepts](../Concepts/01-subtractive-synthesis.md)
- [MiniSynth By-Instrument Workflows](../../03-Workflows/by-instrument/INDEX.md)
