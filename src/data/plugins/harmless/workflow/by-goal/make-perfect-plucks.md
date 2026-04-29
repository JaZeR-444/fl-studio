# Making Perfect Hip-Hop Plucks

## Target Sound
Crisp, defined plucked sounds for counter-melodies, high-register hooks, and melodic accents.

## The Physics
The Pluck filter mathematically simulates string vibration decay - high frequencies lose energy faster than lows (decay rate ∝ frequency²).

## Prerequisites
- Understanding of Pluck filter parameters
- Knowledge of amp envelope sustain settings

## Step-by-Step Process

### Step 1: Choose the Right Mask
**For Acoustic-style plucks**:
- Use moderate sawtooth (H1-H12 at 1/n decay)
- Sufficient harmonics for audible decay

**For Synth plucks**:
- Square wave approximation (odd harmonics only)
- Hollow, electronic character

**For Bell/Music box**:
- Sparse mask: H1, H2, H4, H8, H16 at varying amplitudes
- Metallic, discrete harmonics

### Step 2: Critical Pluck Settings
**Pluck Amount** determines the decay speed:
- **30-40%**: Subtle pluck character
- **50-60%**: Clear string-like decay
- **70-80%**: Aggressive, fast decay

**Pluck Color/Tone**: Controls starting brightness
- Lower = darker, mellower attack
- Higher = brighter, sharper attack

### Step 3: The Envelope is CRITICAL
**For true pluck behavior**:
```
Attack: 0-2ms (immediate)
Decay: 200-600ms (depending on tempo)
Sustain: 0% ← THIS IS KEY
Release: 400-800ms (let it ring)
```

**Why 0% sustain?**
With sustain > 0%, you hear sustained tone + pluck effect
With sustain = 0%, you hear pure decay to silence (real string behavior)

### Step 4: Filter Configuration
- **Cutoff**: 4-8kHz (preserve brightness for decay)
- **Resonance**: 20-35% (subtle emphasis)
- **Slope**: 24dB (natural) or 36dB (sharper)
- **Drive**: 0-15% (optional warmth)

### Step 5: Width and Space
- **Unison**: 2-3 voices max (keep it tight)
- **Detune**: 15-25% (gentle)
- **Stereo**: 40-60% (not too wide)
- **Reverb**: 30-40% (space without mud)
- **Delay**: 15-25% (rhythmic bounce)

### Step 6: Velocity Sensitivity
Map velocity to:
- **Filter cutoff**: Harder = brighter
- **Amp envelope**: Harder = louder (standard)

This mimics how real strings respond to playing intensity.

## Style-Specific Recipes

### Drake-Style Melancholic Pluck
- Mask: Sparse (H1=100%, H2=30%, H3-H6=10-15%)
- Pluck: 60%
- Cutoff: 7kHz
- Envelope: 0ms attack, 400ms decay, 0% sustain
- Reverb: 35% wet

### Trap Bell Pluck
- Mask: H1, H4, H8, H16 boosted
- Pluck: 70%
- Cutoff: 9kHz
- Resonance: 40%
- Effects: Reverb + delay (30% each)

### Acoustic Guitar Simulation
- Mask: Full sawtooth
- Pluck: 45%
- Slope: 12dB (warmth)
- Drive: 20%
- Unison: OFF (pure character)

### Kalimba/Music Box
- Mask: H1, H2.4 (approx), H4, H7
- Pluck: 75%
- Cutoff: 8kHz
- Play: High register (C4-C6)

## Troubleshooting

### "Doesn't sound like a pluck"
- Check sustain is at 0%
- Verify pluck amount is 40%+
- Ensure mask has sufficient harmonics

### "Decay too fast/slow"
- Adjust pluck amount (not decay time)
- Higher pluck = faster decay
- Lower cutoff also affects perceived decay

### "Too thin"
- Add sub oscillator at -12
- Boost H2-H4 in mask
- Increase filter cutoff

## Pro Tips

1. **Layer approach**: Use two Harmless instances - one with high pluck for attack, one with low pluck for sustain body

2. **Note register matters**: Higher notes show pluck effect more obviously than bass notes

3. **Staccato playing**: Play short notes to let the decay be the focus

4. **Combine with filter envelope**: Pluck + filter sweep = unique textures

[SRC: IL-MAN - Harmless Filter Section, Pluck Filter Documentation]
