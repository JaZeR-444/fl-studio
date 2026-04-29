# MiniSynth Concepts

## Subtractive Synthesis Fundamentals

MiniSynth uses subtractive synthesis, which follows this signal flow:

**Oscillator → Filter → Amplifier → Output**

1. **Oscillator** generates raw waveform
2. **Filter** removes frequencies
3. **Amplifier** controls volume envelope
4. **Output** sends to channel

Understanding this flow helps with sound design decisions.

---

## Waveform Guide

### Sine Wave
- Pure tone, single frequency
- No harmonics
- Best for: Sub bass, pure tones
- Characteristics: Clean, smooth, fundamental

### Triangle Wave
- Contains odd harmonics
- Softer than saw/square
- Best for: Warm pads, flutes, mellow leads
- Characteristics: Round, musical, warm

### Sawtooth Wave
- Contains all harmonics
- Bright, aggressive
- Best for: Leads, brass, aggressive sounds
- Characteristics: Sharp, cutting, rich

### Square Wave
- Alternating polarity
- Hollow sound
- Best for: Reeds, retro sounds, woodwinds
- Characteristics: Nasal, hollow, distinctive

---

## Filter Concepts

### Low-Pass Filter
- Removes high frequencies
- Passes lows
- Most common filter type
- Cutoff determines brightness

### Resonance
- Emphasizes frequencies at cutoff
- Creates "squelchy" character
- Too much = harsh, feedback
- Use sparingly (30-50% typical)

### Envelope Stages

**Attack**
- Time from silence to full volume
- Fast (0-10ms) = immediate
- Slow (100-500ms) = smooth entry

**Decay**
- Time from full volume to sustain level
- Shorter = punchier
- Longer = smoother

**Sustain**
- Constant volume while holding note
- Higher = louder sustained sound
- Lower = quieter sustain

**Release**
- Time from release to silence
- Shorter = quicker cut-off
- Longer = fade-out effect

---

## Oscillator Interactions

### Single Oscillator
- Pure, focused sound
- Less complex
- Easier to control
- Good for: Subs, pure tones

### Multiple Oscillators
- Richer, thicker sound
- More complex harmonics
- More control options
- Good for: Pads, leads, basses

### Detuning
- Creates width and thickness
- Slight detune (+/- 3-7 cents) = warmth
- Heavy detune (+/- 10+ cents) = chorusing
- Can cause phasing in mono

---

## Tips for Sound Design

### Creating Warm Sounds
- Use Triangle or Sine waves
- Low filter cutoff
- Subtle resonance (20-30%)
- Slow attack, smooth envelope
- Layer with sub oscillator

### Creating Aggressive Sounds
- Use Saw or Square waves
- Higher filter cutoff
- Higher resonance (40-60%)
- Fast attack, punchy envelope
- No sub or low sub level

### Creating Atmospheric Sounds
- Multiple oscillators
- Slight detuning for width
- Low filter cutoff
- Slow envelope with long release
- Layer and reverb

---

## Common Mistakes

### Too Harsh
- Saw wave at full volume
- High filter cutoff
- High resonance
- Too many harmonics

### Too Thin
- Single oscillator
- Sine wave only
- Low filter cutoff
- No sub layer

### No Character
- Default settings
- No modulation
- Single oscillator
- Predictable envelopes

---

## Glossary

**ADSR** - Attack, Decay, Sustain, Release envelope stages

**Cutoff** - Frequency where filter begins reducing signal

**Detune** - Slight pitch offset between oscillators

**Oscillator** - Circuit generating waveform

**Resonance** - Emphasis at filter cutoff frequency

**Subtractive** - Synthesis method removing frequencies

**Waveform** - Shape of sound wave (sine, saw, etc.)

---

## Related Documentation

- [MiniSynth By-Instrument Workflows](../03-Workflows/by-instrument/INDEX.md)
- [MiniSynth By-Goal Workflows](../03-Workflows/by-goal/INDEX.md)
- [MiniSynth Genre Presets](../02-Data/presets/genre/INDEX.md)
- [MiniSynth Safety Rules](../02-Data/rules/minisynth-safety-rules.md)
