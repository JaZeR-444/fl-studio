# Wavetable Selection Guide

Choosing the right waveform for each synthesis task.

## GMS Waveshapes

GMS provides preset waveshapes for each oscillator, plus the ability to load custom .wav files.

[SRC: IL-MAN]

---

## Standard Waveforms

### Sine Wave
**Character:** Pure fundamental, no harmonics
**Best for:**
- Sub-bass foundations
- FM carriers (cleanest FM)
- Pure tones
- Low CPU usage

**Avoid for:**
- Bright leads (lacks harmonics)
- Aggressive sounds

### Triangle Wave
**Character:** Soft, mellow, odd harmonics only
**Best for:**
- Flute-like sounds
- Soft leads
- Subtle bass
- Vintage emulation

**Avoid for:**
- Bright cutting tones

### Square Wave
**Character:** Hollow, woody, odd harmonics
**Best for:**
- Bass sounds
- Hollow pads
- Vintage synth tones
- Clarinet-like sounds

**Avoid for:**
- Bright modern leads

### Sawtooth Wave
**Character:** Bright, buzzy, all harmonics
**Best for:**
- Supersaw leads
- Bright bass
- Brass sounds
- EDM leads
- **Most versatile waveform**

**Avoid for:**
- Soft mellow tones (too bright)

### Pulse Wave
**Character:** Variable width square
**Best for:**
- Thin nasal tones (narrow pulse)
- Fattening sounds (wide pulse)
- PWM effects (modulate width)

---

## Wavetable Strategy

### Single Oscillator
For simple sounds, choose based on character needed:
- **Warm/analog:** Triangle or sine
- **Bright/aggressive:** Sawtooth
- **Hollow/vintage:** Square or pulse

### Two Oscillators (OSC 1 + 2)
Classic layering combinations:

| OSC 1 | OSC 2 | Result | Use Case |
|-------|-------|--------|----------|
| Sawtooth | Sawtooth (detuned) | Supersaw | EDM leads |
| Sawtooth | Square | Fat with bite | Bass, leads |
| Sine | Sawtooth | Sub + harmonics | Full-range bass |
| Triangle | Pulse | Vintage vibe | Retro sounds |
| Sine | Sine (FM) | Pure FM | Bells, metals |

### Three Oscillators (Full Stack)
Complete sound design:

**Modern EDM Lead:**
- OSC 1: Sawtooth (main)
- OSC 2: Sawtooth (detuned +7 cents)
- OSC 3: Sawtooth (detuned -7 cents)
- Unisono: 6-8 voices

**808 Sub Bass:**
- OSC 1: Sine (fundamental)
- OSC 2: Sine (+12 semitones for FM)
- OSC 3: Sine (-12 semitones, sub layer)
- Enable FM mode

**Wide Pad:**
- OSC 1: Sawtooth (center)
- OSC 2: Triangle (detuned +12 cents)
- OSC 3: Triangle (detuned -12 cents)
- Unisono: 8+ voices, 100% stereo

---

## Custom Wavetable Loading

### How to Load
1. Drag and drop any .wav file onto oscillator display
2. Or click WAVESHAPE selector and browse

### Best Practices
- Use single-cycle waveforms (short, looping waves)
- 2048 samples is ideal
- Avoid complex loops (can cause artifacts)

### Creating Custom Waveforms
- Use wave editors (Edison, Audacity)
- Extract single cycles from samples
- Draw custom shapes for unique harmonics

---

## Waveshape by Genre

### EDM/Trance
**Primary:** Sawtooth (supersaws)
**Secondary:** Square (bass layers)
**FM:** Sine (metallic elements)

### Trap/Hip-Hop
**Primary:** Sine (808 subs)
**Secondary:** Sawtooth (leads)
**FM:** Sine (bell/plucks)

### Pop
**Primary:** Sawtooth, Triangle
**Secondary:** Square (bass)
**FM:** Sine (ear candy)

### Experimental/Industrial
**Primary:** All waveforms with RM
**Secondary:** Complex custom waves
**FM:** All waveforms for chaos

---

## Harmonic Content Reference

| Waveform | Harmonics | Brightness | Best Role |
|----------|-----------|------------|-----------|
| Sine | None (fundamental only) | 1/10 | Sub/foundation |
| Triangle | Odd only, -12dB/oct | 3/10 | Soft/mellow |
| Square | Odd only, -6dB/oct | 5/10 | Hollow/vintage |
| Sawtooth | All, -6dB/oct | 8/10 | Bright/aggressive |
| Pulse (50%) | Odd only, -6dB/oct | 5/10 | Square-like |
| Pulse (10%) | Odd only, weak | 3/10 | Thin/nasal |

---

## Pro Tips

1. **Start with sawtooth** for most modern sounds
2. **Layer sine underneath** for solid low-end
3. **Use FM with sines** for cleanest complex tones
4. **Detune identical waves** for instant thickness
5. **Try custom waves** for unique signature sounds

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm
