# Bass Synthesizer Techniques

## Overview
Deep dive into creating professional hip-hop bass with Harmless - from pure sub to textured low-end.

## The Bass Philosophy

### Frequency Roles
- **Sub (20-60Hz)**: Felt, not heard. 808 territory.
- **Low Bass (60-120Hz)**: Foundation, weight, punch
- **Mid Bass (120-250Hz)**: Character, definition, movement
- **High Bass (250-500Hz)**: Presence, articulation

Harmless excels at **60-500Hz** - the character range.

## Sub Bass Design

### Pure Sub Foundation
**Purpose**: Under 808s, foundation layer

**Settings**:
- **Mask**: Fundamental (H1) at 100%, all others 0%
  - Or: H1=100%, H2=20% (slight edge)
- **Sub Osc**: -12 semitones, 50% level
- **Noise**: 0%
- **Filter**: Cutoff 150-200Hz, 12dB slope, 10% resonance
- **Unison**: OFF (1 voice)
- **Envelope**: 5ms attack, 95% sustain

**Why it works**: No harmonics = no mud, pure sub focus

### Warm Sub Bass
**Purpose**: Sub with slight character

**Settings**:
- **Mask**: Fundamental + H2-H3 at 30-40%
- **Sub Osc**: -12, 40%
- **Color**: -10 to -20
- **Filter**: Cutoff 300Hz, 24dB slope
- **Drive**: 15-20%
- **Envelope**: 8ms attack

## Mid Bass Character

### Reese Bass (Moving Bass)
**Purpose**: Energetic, "talking" bass

**Settings**:
- **Mask**: Full sawtooth
- **Filter**: Cutoff 400Hz, resonance 50%
- **Envelope**: Filter amount +60%, creates "wow" effect
- **Unison**: 2 voices, mono, 30% detune
- **Drive**: 25%

**Technique**: Play sustained notes, filter moves automatically

### Pluck Bass (Rhythmic)
**Purpose**: Garage, UK bass patterns

**Settings**:
- **Mask**: Moderate sawtooth (H1-H10)
- **Pluck**: 40%
- **Filter**: Cutoff 600Hz
- **Envelope**: 0% sustain, 300ms decay
- **Drive**: 20%

**Technique**: Short rhythmic patterns, let pluck create groove

### Funky/Growl Bass
**Purpose**: Character, lead-like bass

**Settings**:
- **Mask**: Sawtooth with H3-H6 boosted
- **Filter**: Cutoff 800Hz, resonance 45%
- **Drive**: 30-40%
- **Filter Env**: +50%, fast attack
- **Distortion**: 20%

## Texture and Movement

### Distorted Bass
Add edge to any bass:

**Settings**:
- Base: Any bass preset
- **Drive**: 30-50%
- **Or Distortion**: 25-40%
- **Filter**: Slightly higher cutoff to let distortion through

**When to use**: When bass needs to cut through dense mix

### FM-Style Metallic Bass
**Settings**:
- **Mask**: Inharmonic (H1, H3.5, H6 positions)
- **Filter**: Cutoff 500Hz, 36dB slope
- **Drive**: 25%
- **Phaser**: Rate 2Hz, Depth 60%

### Sidechain Ducking Bass
Not a Harmless setting, but essential technique:

**Setup**:
1. Route 808 to mixer track
2. Add Peak Controller to 808
3. Link to Harmless bass volume
4. Adjust for subtle ducking

**Result**: Bass breathes with 808 hits

## Register Techniques

### Low Register (C1-C2)
- Keep masks simple (fundamental focus)
- Cutoff: 200-300Hz max
- No unison
- Purpose: Pure foundation

### Mid Register (C2-C3)
- Can add more harmonics
- Cutoff: 300-500Hz
- Subtle unison OK (2 voices, mono)
- Purpose: Character and groove

### High Register (C3-C4)
- Full harmonic masks
- Cutoff: 500-1000Hz
- Can use unison (stays bass territory)
- Purpose: Lead-like bass

## Advanced Bass Layering

### Layer 1: Sub Foundation
- Pure sine or near-sine mask
- Cutoff: 200Hz
- Sub osc: Active
- Unison: OFF

### Layer 2: Character
- Rich mask (sawtooth)
- Cutoff: 800Hz
- Drive: 30%
- Filter envelope: Active
- Distortion: 20%

### Blend: 60% Layer 1, 40% Layer 2
**Result**: Full, powerful bass with both weight and character

## Bass in the Mix

### EQ Relationships
- **808**: 30-60Hz
- **Harmless bass**: 60-250Hz
- **Kick**: 60-100Hz (may conflict)
- **Solution**: Cut 808 fundamental from bass, or sidechain

### Compression
- Harmless bass: Light compression or none
- Maximus: 30-40% (built-in compression)
- External: Only if bass is too dynamic

### Stereo Placement
- Bass: Mono or narrow
- Sub: Always mono
- Wide bass causes phase issues in clubs

## Troubleshooting Bass

### "No punch"
- Check attack time (too slow?)
- Add filter envelope
- Increase drive/distortion
- Check if 808 is masking it

### "Too muddy"
- Lower cutoff
- Simplify mask (reduce harmonics)
- High-pass other instruments at 200Hz+
- Check sub osc isn't too loud

### "Can't hear it on phones"
- Add H2-H4 harmonics for phone speakers
- Boost 200-400Hz range
- Add subtle distortion (creates harmonics)

### "Phase issues with 808"
- Check mono compatibility
- Flip phase on one
- Adjust timing slightly
- Sidechain 808 to bass

## Pro Tips

1. **Bass needs context**: Sounds different solo vs in mix - adjust accordingly

2. **Note choice matters**: Some notes have more energy than others in the low range

3. **Velocity dynamics**: Map velocity to filter for expressive bass

4. **Automation**: Automate cutoff for bass drops and builds

5. **Reference tracks**: A/B with professional tracks in same genre

6. **Room matters**: Bass sounds different in different spaces

[SRC: IL-MAN - Harmless Filter, Oscillator Sections]
