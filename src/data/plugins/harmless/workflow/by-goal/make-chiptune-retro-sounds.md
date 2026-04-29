# Making Chiptune/Retro Sounds

## Target Sound
Authentic 8-bit, 16-bit, and retro gaming aesthetics - perfect for nostalgia, unique hooks, and genre-blending.

## The Appeal
Chiptune sounds cut through modern production with:
- Immediate recognition (nostalgia factor)
- Clean, defined character
- Unique sonic identity
- Contrast to modern sounds

## Prerequisites
- Understanding of vintage gaming sound chips
- Knowledge of square waves and limited harmonics
- Awareness of bit reduction

## Step-by-Step Process

### Step 1: Pure Square Wave Mask
**The foundation of chiptune**:
- Use square wave preset in mask
- Or manually: Odd harmonics only (1,3,5,7...)
- Amplitude: 1/n decay (100%, 33%, 20%, 14%...)
- No even harmonics (H2, H4, H6 at 0%)

**Why square?**
- Most vintage chips (NES, Game Boy) used square waves
- Limited to 2-4 voices
- Defined character

### Step 2: Minimal Unison (Single Voice)
**Set Unison to 1 voice**

Authentic chiptune was:
- Pure, single oscillators
- No stereo width
- Monophonic or limited polyphony

**If you want slight width**:
- 2 voices max
- Minimal detune (10-15%)
- Mono stereo (0%)

### Step 3: Hard Filter Settings
- **Cutoff**: High (6-10kHz) - preserve the "buzzy" harmonics
- **Resonance**: 0-15% (keep it clean)
- **Slope**: 48dB - sharp digital cutoff
- **Drive**: 0% (no analog warmth wanted)

This recreates the "digital" character of vintage chips.

### Step 4: Sharp Envelopes
**Amp Envelope**:
```
Attack: 0-2ms (instant)
Decay: 50-150ms
Sustain: 70-85%
Release: 100-200ms (tight)
```

**Filter Envelope**: Minimal or none (keep it pure)

### Step 5: Bit Reduction (Crush)
**Critical for authenticity**:
- **Crush Amount**: 40-60%
- This reduces bit depth and sample rate
- Recreates DAC limitations of vintage hardware

**What it does**:
- Adds quantization noise
- Reduces dynamic range
- Creates "stepped" transitions

### Step 6: Optional Effects
**Delay** (authentic):
- Simple delay, not fancy
- 15-25% mix
- Quarter or eighth note timing

**No Reverb** (usually):
- Vintage games had no reverb
- Keep it dry for authenticity
- Or add 10-15% for modern twist

## Style Variations

### NES (Nintendo) Style
- Square wave mask
- 1-2 voices only
- Arpeggiated chords (rapid note switching)
- Cutoff: 8kHz
- Crush: 50%

### Game Boy Style
- Even simpler: triangle waves for bass
- Square for leads
- Very tight envelopes
- Sometimes add pulse-width variation

### 16-Bit Era (SNES/Genesis)
- Slightly richer harmonics allowed
- Multiple voices (3-4)
- Can use gentle filter slopes
- Subtle chorus OK

### Modern Chiptune Fusion
- Square wave base
- Add unison width (modern twist)
- Light reverb (spaciousness)
- Crush: 30% (subtle)

## Arpeggio Technique

Chiptune often uses arpeggios instead of full chords:

1. **Set up**: Single oscillator, square wave
2. **Program**: Rapid 16th or 32nd note patterns
3. **Pattern**: Root-3rd-5th-8ve cycling
4. **Effect**: Creates "chord" illusion with 1 voice

**Why?**
- Vintage chips had limited polyphony
- Arpeggios create energy and movement
- Instantly recognizable chiptune sound

## Sound Design Recipes

### "1-Up" Collectible Sound
- Square wave
- Cutoff: 10kHz (full brightness)
- Envelope: Very short (50ms total)
- Pitch envelope: +1 octave ramp
- Crush: 60%

### "Coin" Pickup
- Square wave with noise burst (20%)
- Envelope: Super tight (30ms)
- High pitch (C6+)
- No unison

### "Explosion" Impact
- Noise: 100%
- Filter: Cutoff sweep down rapidly
- Envelope: Short, punchy
- Crush: 70%

### "Power-Up" Chord
- 3 instances of Harmless
- Each: Square wave, different pitch (root, 3rd, 5th)
- Slight detune between them (manual)
- Arpeggiate or play together

### "Boss Battle" Bass
- Square wave with H2 at 30% (subtle)
- Cutoff: 500Hz
- Filter envelope: +60% (talking bass)
- Distortion: 25%

## Integrating with Hip-Hop

### Trap + Chiptune
- Use chiptune sounds for counter-melodies
- Layer chiptune lead over 808s
- Mix: 30% chiptune, 70% modern production

### Lofi + Chiptune
- Crush: 50-70% (heavy)
- Add vinyl noise
- Combine with lo-fi drums
- Nostalgic aesthetic

### Experimental/Future
- Use chiptune as texture layer
- Process with modern effects (heavy reverb)
- Glitch elements
- Contrast clean/dirty

## Troubleshooting

### "Sounds too modern/clean"
- Increase crush amount
- Reduce unison voices to 1
- Use 48dB filter slope
- Remove all effects except maybe delay

### "Too harsh"
- Reduce cutoff slightly (6-8kHz)
- Lower crush to 40%
- Use triangle wave instead of square for bass

### "Not authentic enough"
- Research specific chip limitations (e.g., NES = 2A03 chip)
- Use arpeggios instead of chords
- Add bit crush
- Keep it simple (less is more)

## Pro Tips

1. **Limit polyphony**: Most chips had 2-4 voices - respect this for authenticity

2. **Arpeggios are key**: The "chiptune sound" is often arpeggios, not chords

3. **Pulse width variation**: Some chips allowed pulse width - experiment in mask

4. **Noise channel**: Use noise oscillator for percussion-like elements

5. **Reference games**: Listen to actual NES/Game Boy soundtracks for inspiration

6. **Modern twist**: It's OK to break rules - use reverb, unison for contemporary chiptune fusion

[SRC: IL-MAN - Harmless Oscillator, Effects Documentation]
