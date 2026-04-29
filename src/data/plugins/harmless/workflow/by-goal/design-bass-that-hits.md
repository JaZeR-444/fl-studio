# Designing Bass That Hits

## Target Sound
Hard-hitting, focused bass that works with 808s - clean low end with character and punch.

## The Philosophy
Harmless bass should be **focused, not wide**. Unlike leads, bass needs:
- Mono compatibility (plays back correctly on all systems)
- Clean sub frequencies (no mud)
- Immediate attack (no slow fade)
- Sustained body (consistent low end)

## Prerequisites
- Understanding of low-frequency mixing
- Knowledge of sub oscillators
- Awareness of mono/stereo considerations

## Step-by-Step Process

### Step 1: Fundamental-Focused Mask
**Sub Bass Foundation**:
- H1 (fundamental): 100%
- H2: 30-40% (adds presence)
- H3-H4: 20% each
- H5+: 0-10% (minimal)

This creates a pure, focused tone without excessive harmonics that cause muddiness.

### Step 2: Engage Sub Oscillator
**Critical for weight**:
- **Octave**: -12 semitones
- **Level**: 40-60%

This adds the "sub" feel without cluttering the midrange.

### Step 3: Filter for Focus
- **Cutoff**: 200-500Hz (depending on role)
- **Resonance**: 10-25% (subtle, avoid whistling)
- **Slope**: 12dB or 24dB (gentler than leads)
- **Drive**: 15-30% (warmth and saturation)
- **Pluck**: 0-15% (optional character)

**Note**: For pure sub under 808s, keep cutoff at 200Hz.

### Step 4: NO UNISON (Critical)
**Set Unison Voices to 1**

Why? Multiple voices create phase issues in the sub range when played back in mono (club systems, phone speakers).

**If you must have width**:
- Keep it minimal (2 voices max)
- Set stereo to 0% (mono)
- Detune under 20%

### Step 5: Envelope for Punch
**Amp Envelope**:
```
Attack: 3-8ms (immediate, no click)
Decay: 100-200ms
Sustain: 95-100% (consistent)
Release: 200-400ms
```

**Filter Envelope** (optional for character):
- Amount: -20 to -50% (inverted - darker attack)
- Creates "thump" on attack

### Step 6: Polish
- **Maximus**: 30-40% (essential for punch)
- **Distortion**: 10-20% (optional grit)
- **No reverb**: Keeps it dry and focused
- **No chorus**: Maintains mono integrity

## Bass Types and Recipes

### Pure Sub (Under 808s)
- Mask: Sine (H1 only) or near-sine
- Sub osc: -12, 50%
- Cutoff: 150-200Hz
- Slope: 12dB
- Unison: OFF
- Use: Foundation layer under kick/808

### Reese Bass (DnB Style)
- Mask: Sawtooth (full)
- Cutoff: 400-600Hz
- Resonance: 40%
- Unison: 2 voices, mono, 30% detune
- Filter envelope: +50%, creates "talking" effect
- Use: Energetic bass patterns

### Trap Bass (808 Companion)
- Mask: Fundamental + H2-4 at moderate
- Cutoff: 300-400Hz
- Drive: 25%
- Pluck: 10%
- Maximus: 35%
- Use: Works alongside 808 samples

### Funky/Growl Bass
- Mask: Sawtooth with boosted H3-H6
- Cutoff: 600-800Hz
- Resonance: 35%
- Drive: 30%
- Filter envelope: +60%
- Use: Bass lines with character

### Sub Pluck (Garage Style)
- Mask: Moderate harmonics
- Cutoff: 500Hz
- Pluck: 40%
- Amp sustain: 20% (not 0 - want some body)
- Use: Rhythmic bass patterns

## Mixing with 808s

### Frequency Allocation
- **808 sample**: Handle the sub (30-60Hz)
- **Harmless bass**: Handle the upper bass (60-200Hz)
- **Cutoff relationship**: Set Harmless cutoff just above 808's fundamental

### Sidechain (Optional)
If 808 and bass conflict:
- Route 808 to mixer
- Add Peak Controller to 808 mixer track
- Link to Harmless bass volume
- Set to duck slightly on 808 hits

### Phase Check
1. Solo both 808 and bass
2. Flip phase on one (use Fruity Phase Inverter)
3. Listen for cancellation
4. Keep the setting with more low end

## Common Mistakes

### "Bass sounds thin"
- Add sub oscillator
- Increase H2-H4 in mask
- Reduce cutoff slightly

### "Bass and 808 fighting"
- EQ carve: Cut 808 fundamental from bass
- Sidechain bass to 808
- Use different octave ranges

### "No punch/attack"
- Increase filter envelope amount
- Add drive/saturation
- Check attack isn't too slow

### "Sounds muddy in mix"
- Lower cutoff (remove 200-400Hz)
- Simplify mask (reduce harmonics)
- High-pass other elements to make space

## Advanced Techniques

### Layered Bass
1. **Instance 1**: Pure sub (H1 only, cutoff 200Hz)
2. **Instance 2**: Character (rich mask, cutoff 800Hz, distortion)
3. Blend: 60/40 or 70/30

### Note-Dependent Filtering
Map note pitch to filter cutoff:
- Higher notes = slightly brighter
- Lower notes = darker
- Maintains consistency across range

### Velocity to Tone
- Hard velocity = more drive, brighter
- Soft velocity = cleaner, darker
- Creates dynamic expression

## Pro Tips

1. **Mono check**: Always check bass in mono before finalizing

2. **Spectrum analyzer**: Watch the low end - should be focused, not spread

3. **Solo vs mix**: Bass often needs different settings solo vs in context

4. **808 tuning**: Match Harmless bass pitch to 808 root note exactly

5. **Distortion placement**: Pre-filter for grit, post-filter for clean highs

[SRC: IL-MAN - Harmless Oscillator, Filter Section]
