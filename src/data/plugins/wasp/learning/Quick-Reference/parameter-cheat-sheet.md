# Wasp - Parameter Cheat Sheet

**Plugin Type:** 3-Oscillator Subtractive Synthesizer
**Category:** Synth / Bass & Lead Generator
**Status:** DISCONTINUED (Replaced by Wasp XT)
**Official Manual:** [Wasp](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Wasp.htm)

---

## IMPORTANT NOTICE

**Wasp has been DISCONTINUED and replaced by Wasp XT.**
- **Legacy Support:** Old projects will still load Wasp
- **New Projects:** Use Wasp XT instead (enhanced version)
- **Documentation:** Kept for reference and legacy project support

---

## Main Oscillators

| Parameter | Range | Function | Quick Tip |
|-----------|-------|----------|-----------|
| **OSC 1 Waveform** | Sine/Saw/Square/Noise | Primary oscillator | Saw for bass, Square for leads |
| **OSC 2 Waveform** | Sine/Saw/Square/Noise | Second oscillator | Detune from OSC 1 for thickness |
| **OSC 3 Waveform** | Sine/Saw/Square/Noise | Third oscillator | Use as sub-oscillator (-12 semitones) |
| **Pitch** | -48 to +48 semitones | Oscillator tuning | OSC 3 at -12 for sub bass |
| **Level** | 0-100% | Oscillator volume | Balance oscillators for desired timbre |

---

## Filter Section

| Parameter | Range | Function | Sweet Spot |
|-----------|-------|----------|------------|
| **Filter Type** | LP/HP/BP/BR | Filter mode | LP (low-pass) for most use cases |
| **Cutoff** | 20Hz-20kHz | Filter frequency | 500-2000Hz for basses, higher for leads |
| **Resonance** | 0-100% | Filter emphasis | 30-60% for character without harshness |
| **Env Amount** | -100 to +100% | Envelope modulation depth | 60-80% for dynamic filter movement |

---

## Envelopes

### Filter Envelope (ADSR)
| Stage | Function | Bass Setting | Lead Setting |
|-------|----------|--------------|--------------|
| **Attack** | Time to reach peak | 0-10ms | 50-200ms |
| **Decay** | Time to sustain level | 200-500ms | 300-800ms |
| **Sustain** | Held level | 20-40% | 60-80% |
| **Release** | Time to silence | 100-300ms | 500ms-1s |

### Amp Envelope (ADSR)
Similar structure but controls volume instead of filter

---

## Quick Start Presets

| Use Case | Settings |
|----------|----------|
| **Deep Sub Bass** | OSC 1: Sine, OSC 3: Sine (-12), LP Filter low cutoff, Low resonance |
| **Aggressive Saw Lead** | OSC 1+2: Saw (detuned), High cutoff, Moderate resonance |
| **Acid Bass** | OSC 1: Saw/Square, High resonance, Envelope modulation |
| **Pad** | All 3 OSC (Saw/Square mix), Slow attack, Long release |

---

## LFO Modulation

| Target | Effect | Use Case |
|--------|--------|----------|
| **Pitch** | Vibrato | Expressive leads |
| **Filter Cutoff** | Wah-wah | Rhythmic filter sweeps |
| **Amplitude** | Tremolo | Pulsing pads |

---

## Wasp vs Wasp XT

| Feature | Wasp | Wasp XT |
|---------|------|---------|
| **Status** | Discontinued | Active |
| **Oscillators** | 3 | 3 (enhanced) |
| **Effects** | Basic | Extended |
| **Modulation** | Limited | Advanced |
| **Recommendation** | Legacy only | Use for new projects |

---

## Migration to Wasp XT

If you're using Wasp:
1. **New Projects:** Switch to Wasp XT
2. **Old Projects:** Wasp will still load
3. **Preset Conversion:** Manually recreate in Wasp XT
4. **Sound Similarity:** Wasp XT can recreate all Wasp sounds with more features

---

## Common Uses

- **Bass:** Deep sub bass, acid bass, wobble bass
- **Leads:** Aggressive saw leads, filtered leads
- **Pads:** Layered oscillator pads
- **Sound Design:** Noise-based textures, drones

---

## CPU & Performance

- **CPU Usage:** Low (simple architecture)
- **Voices:** Polyphonic (exact count varies by system)
- **Legacy:** Efficient, older algorithm

---

## Related Plugins

- **Wasp XT** - Direct successor (RECOMMENDED)
- **3x Osc** - Even simpler 3-oscillator synth
- **Transistor Bass** - For TB-303 style bass
- **Sawer** - More advanced subtractive synthesis

---

**Last Updated:** February 3, 2026
**Status:** DISCONTINUED - Use Wasp XT for new projects
