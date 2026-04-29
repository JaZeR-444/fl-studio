# Wasp XT - Parameter Cheat Sheet

**Plugin Type:** Enhanced 3-Oscillator Subtractive Synthesizer
**Category:** Synth / Bass & Lead Generator
**Status:** ACTIVE (Replaces discontinued Wasp)
**Official Manual:** [Wasp XT](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/WaspXT.htm)

---

## Main Oscillators

| Parameter | Range | Function | Quick Tip |
|-----------|-------|----------|-----------|
| **OSC 1-3 Waveform** | Sine/Triangle/Saw/Square/Pulse/Noise | Primary sound source | Layer different shapes for complex timbres |
| **Pitch** | -48 to +48 semitones | Oscillator tuning | OSC 3 at -12 for sub bass layer |
| **Level** | 0-100% | Oscillator volume | Balance for desired mix |
| **Phase** | 0-360° | Starting phase | Affects initial transient and layering |
| **Detune** | -100 to +100 cents | Fine pitch adjustment | Slight detune (5-15 cents) for width |
| **Pulse Width** | 0-100% | PWM duty cycle (Pulse wave only) | 50% = square, vary for timbre changes |

---

## Enhanced Filter Section

| Parameter | Range | Function | Sweet Spot |
|-----------|-------|----------|------------|
| **Filter Type** | LP/HP/BP/BR/Formant | Filter mode | LP for bass/pads, BP for vocal-like |
| **Cutoff** | 20Hz-20kHz | Filter frequency | 500-2kHz for bass, 2-8kHz for leads |
| **Resonance** | 0-100% | Filter emphasis | 40-70% for character |
| **Drive** | 0-100% | Pre-filter distortion | 20-40% for warmth, 70%+ for aggression |
| **Env Amount** | -100 to +100% | Envelope modulation depth | 70-90% for dynamic movement |
| **Key Follow** | 0-100% | Filter tracks keyboard | 50% for natural brightness scaling |

---

## Envelopes (ADSR)

### Filter Envelope
| Stage | Bass | Lead | Pad |
|-------|------|------|-----|
| **Attack** | 0-5ms | 50-200ms | 500ms-1.5s |
| **Decay** | 200-500ms | 300-800ms | 1-3s |
| **Sustain** | 20-40% | 60-80% | 70-90% |
| **Release** | 100-300ms | 500ms-1s | 2-5s |

### Amp Envelope
Similar structure, controls volume

---

## LFO System

| Parameter | Range | Function | Use Case |
|-----------|-------|----------|----------|
| **Rate** | 0.01-20 Hz | LFO speed | 0.1-2 Hz for vibrato, 4-12 Hz for tremolo |
| **Depth** | 0-100% | Modulation intensity | Start at 30%, adjust to taste |
| **Waveform** | Sine/Triangle/Saw/Square/S&H | LFO shape | Sine for smooth, S&H for random |
| **Target** | Pitch/Filter/Amp/PWM | Modulation destination | Multiple targets possible |
| **Sync** | Free/Tempo | LFO timing | Tempo sync for rhythmic effects |

---

## Effects Section (Enhanced vs Original Wasp)

| Effect | Function | When to Use |
|--------|----------|-------------|
| **Distortion** | Pre/post filter drive | Warmth or aggression |
| **Chorus** | Stereo width and thickness | Pads, leads |
| **Delay** | Time-based echo | Rhythmic interest, space |
| **Reverb** | Ambience and space | Nearly everything (subtle) |
| **Unison** | Voice stacking and detuning | Massive supersaw leads |

---

## Quick Start Presets

| Sound | Oscillator Setup | Filter | Envelope | Effects |
|-------|------------------|--------|----------|---------|
| **Deep Sub Bass** | OSC 1: Sine, OSC 3: Sine (-12) | LP, Low cutoff (150-300Hz), Low res | Fast attack, medium decay | None or subtle chorus |
| **Supersaw Lead** | All OSC: Saw, slight detune | LP, Medium cutoff, Moderate res | Medium attack, sustain 70% | Unison 5-7 voices, chorus |
| **Wobble Bass** | OSC 1+2: Square | LP, High res, LFO to cutoff | Fast attack, short decay | Drive 50%+ |
| **Lush Pad** | OSC 1: Saw, OSC 2: Square (+7), OSC 3: Triangle (-12) | LP, Medium cutoff | Slow attack (1s+), long release | Chorus + Reverb |
| **Pluck** | OSC 1: Triangle | LP, Medium cutoff, High env amount | Very fast attack, fast decay, no sustain | Short delay |

---

## Unison Mode (Wasp XT Enhancement)

| Voices | Character | CPU Impact | Use Case |
|--------|-----------|------------|----------|
| **2-3** | Subtle thickness | Low | Natural doubling |
| **4-5** | Noticeable width | Medium | Standard leads |
| **6-8** | Supersaw character | High | Massive EDM leads |
| **9-12** | Ultra-wide wall | Very High | Epic pads, special FX |

**Tip:** Combine unison with slight detune (10-20 cents) for maximum width

---

## Wasp XT vs Original Wasp

| Feature | Wasp (Discontinued) | Wasp XT |
|---------|---------------------|---------|
| **Status** | Legacy | Active |
| **Oscillators** | 3 basic | 3 enhanced |
| **Filter Types** | 4 | 5 (adds Formant) |
| **Effects** | None/Basic | Distortion, Chorus, Delay, Reverb |
| **Unison** | No | Yes (up to 12 voices) |
| **LFO Targets** | Limited | Extensive |
| **Modulation Matrix** | Basic | Advanced |

**Verdict:** Wasp XT is superior in every way - use for all new projects

---

## Modulation Matrix

### Available Sources
- LFO 1 & 2
- Mod Wheel
- Velocity
- Aftertouch
- Envelopes

### Available Destinations
- Oscillator Pitch, Level, Phase
- Filter Cutoff, Resonance
- Amplifier
- Effects parameters

**Power User Tip:** Assign mod wheel to filter cutoff for live filter sweeps

---

## Genre Applications

| Genre | Typical Wasp XT Use |
|-------|---------------------|
| **EDM/Trance** | Supersaw leads (unison 7 voices), plucks |
| **Dubstep** | Wobble bass (LFO to filter), aggressive leads |
| **House** | Classic stab sounds, bass |
| **Synthwave** | Retro leads, pads (saw+square layers) |
| **Ambient** | Lush evolving pads (slow attacks, long releases) |

---

## Sound Design Tips

### Thick Bass
- Layer OSC 1 (saw) + OSC 3 (sine, -12 semitones)
- Low-pass filter at 200-400Hz
- Slight saturation/drive for harmonics
- No effects or subtle chorus

### Modern Lead
- All oscillators saw wave, slightly detuned
- Unison 5-7 voices
- Medium-high filter cutoff with resonance
- Moderate envelope modulation
- Chorus + subtle delay

### Pad
- Mix of saw + square waves
- Slow attack (800ms+), long release (2s+)
- Chorus + reverb
- Unison for width

---

## CPU & Performance

- **CPU Usage:** Low to moderate (depends on unison voices)
- **Optimization:** Fewer unison voices = less CPU
- **Polyphony:** Up to 32 voices (depends on CPU)
- **Realtime Safe:** Yes

---

## MIDI Integration

### Velocity Sensitivity
- Assign velocity to filter cutoff for dynamic timbre
- Velocity to amplitude for volume expression
- Combine both for realistic playing

### Mod Wheel
- Default: Often mapped to vibrato depth
- Custom: Assign to filter cutoff, effects mix, etc.

### Aftertouch
- Vibrato intensity
- Filter expression
- Effects parameter control

---

## Common Mistakes to Avoid

1. **Too Many Unison Voices:** 12 voices = CPU hog, often unnecessary
2. **Excessive Resonance:** Above 80% can be piercing
3. **Ignoring Filter Envelope:** Dynamic filter = more interesting sound
4. **No Oscillator Layering:** Use all 3 oscillators for full sound
5. **Forgetting Effects:** Built-in effects save CPU vs separate plugins

---

## Mixing Integration

### EQ Suggestions
- **Bass:** High-pass at 30-40Hz (remove sub-rumble)
- **Leads:** Cut 200-400Hz if muddy, boost 2-5kHz for presence
- **Pads:** High-pass at 100-200Hz, gentle dip at 300-500Hz

### Compression
- **Ratio:** 2:1 to 4:1 for most sounds
- **Attack:** Fast for plucks, slow for pads
- **Release:** Medium (auto-release often works well)

### Effects Chain
1. Wasp XT (with built-in effects)
2. EQ (corrective)
3. Compression (dynamics)
4. Additional reverb/delay (if needed)

---

## Automation Ideas

1. **Filter Cutoff Sweep:** Build-ups and drops
2. **LFO Rate:** Slow to fast for tension
3. **Unison Voices:** Start with 1, end with 12 for massive build
4. **Effects Mix:** Dry to wet transition

---

## Related Plugins

- **Wasp (Original)** - Discontinued predecessor
- **3x Osc** - Simpler alternative
- **Sawer** - More advanced subtractive synthesis
- **Sytrus** - FM-based alternative
- **Harmless/Harmor** - Additive alternatives

---

**Last Updated:** February 3, 2026
**Status:** ACTIVE - Recommended for all new projects
