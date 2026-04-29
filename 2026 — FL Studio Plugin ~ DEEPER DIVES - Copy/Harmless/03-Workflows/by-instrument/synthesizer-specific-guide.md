# Synthesizer-Specific Guide

## Overview
This guide provides workflows for different synthesis approaches with Harmless, focusing on how to achieve specific synthesizer archetypes.

## Analog Subtractive Emulation

### Goal
Recreate vintage analog synth character (Minimoog, Prophet, Juno)

### Approach
While Harmless is additive, we can approximate subtractive behavior:

**Mask**: Full sawtooth or square
- Use classic waveform shapes
- Don't get too creative with mask

**Filter**: 24dB slope
- This is the "standard" analog slope
- 12dB for vintage warmth

**Drive**: 20-30%
- Analog warmth comes from saturation
- Essential for character

**Unison**: 2-3 voices
- Vintage synths had limited voices
- Mono or narrow stereo

**Chorus**: 30-40%
- Vintage synths used chorus for width
- Especially "Juno" style

### Key Differences
- No filter "scream" at high resonance (additive prevents this)
- Cleaner sound overall
- Need to add drive for warmth

## FM Synthesis Approximation

### Goal
Recreate FM-style harmonics and bell-like tones

### Approach
FM creates complex inharmonic relationships. Approximate in Harmless:

**Mask**: Inharmonic clusters
- H1, H3.5, H5.7, H8.2 positions (approximate)
- Or use ratios: 1:2, 1:3.5, 1:5.7

**Filter**: High cutoff
- Let the complex harmonics through
- Slope: 24dB

**Pluck**: 20-40%
- FM bells have natural decay
- Adds to authenticity

**Envelope**: Percussive
- Fast attack, medium decay
- Low sustain

### Tips
- Use math to calculate harmonic positions
- Experiment with "non-integer" harmonics
- Metallic textures result

## Wavetable/Vector Synthesis

### Goal
Evolving, morphing textures

### Approach
Wavetable morphs between waveforms. In Harmless:

**Technique**: Automation
- Automate harmonic mask over time
- Draw different shapes at different song positions
- Creates morphing effect

**Filter**: Slow sweeps
- Combine with mask morphing
- 36dB slope for dramatic changes

**Phaser**: 0.5-2Hz
- Adds continuous movement
- Compliments morphing

**Implementation**:
1. Create automation clip for mask
2. Draw different mask shapes at intervals
3. Play long notes to hear morph

### Tips
- Make gradual changes between masks
- Or abrupt changes for glitch effect
- Combine with filter for full effect

## Physical Modeling (Pluck/Bow)

### Goal
Realistic string, wind, and percussion sounds

### Approach
Harmless's Pluck filter is physical modeling for strings:

**Strings (Guitar, Harp)**:
- Mask: Moderate sawtooth
- Pluck: 40-60%
- Amp sustain: 0%
- Envelope: Medium decay

**Wind (Flute, Clarinet)**:
- Mask: Triangle or odd harmonics only
- Pluck: 0%
- Slow attack: 100-300ms
- Filter: Gentle (12dB)

**Percussion (Drums)**:
- Mask: Noise + short tone
- Pluck: 0%
- Very short envelope
- White noise for snare character

### Extended Techniques
- **Bow simulation**: Amp attack 200ms, slow filter sweep
- **Mute**: High pluck, short release
- **Harmonics**: Sparse mask (H1, H2, H4 only)

## Additive-Only Textures

### Goal
Sounds impossible in subtractive synthesis

### Approach
Exploit Harmless's additive strengths:

**Sparse Inharmonic**:
- H1, H5, H12, H27 only
- Gaps create unique timbres
- Metallic, bell-like

**Formant/Vocal**:
- Boost H3-H7 (vowel formant region)
- Create vocal-like resonances
- Filter at 4-6kHz

**Reverse Harmonics**:
- Low harmonics quieter than highs
- Unnatural, sci-fi
- Cutoff opens from low

**Stochastic/Random**:
- Random harmonic levels
- Ever-changing textures
- Phaser adds movement

### Why It Works
Subtractive synths can't:
- Control individual harmonics
- Create gaps in spectrum
- Do true inharmonic tones
- Use extreme resonance safely

## Hybrid Approaches

### Analog + Additive
Start with analog-style mask, then:
- Add unusual harmonics for character
- Use extreme filter settings
- Combine drive with clean additive

### FM + Subtractive
FM-style mask through subtractive filter:
- Complex mask
- 48dB slope
- Resonance emphasis

### Physical + Electronic
Realistic pluck with electronic elements:
- High pluck setting
- Distortion effect
- Heavy reverb (not realistic, but cool)

## Choosing Your Approach

### Use Analog Emulation When:
- You want familiar, warm sounds
- Recreating classic patches
- Safe, tested results

### Use FM Approximation When:
- Need bells, metals, complex tones
- Digital character wanted
- Mathematical precision

### Use Wavetable When:
- Evolving pads needed
- Sound design experiments
- Cinematic textures

### Use Physical When:
- Realistic instruments
- Organic textures
- Acoustic plucks/bows

### Use Additive-Only When:
- Unique sounds needed
- Exploring Harmless's power
- Creating "impossible" tones

## Pro Tips

1. **Combine approaches**: Analog foundation + additive flourishes

2. **Reference presets**: Study factory presets for each style

3. **Start simple**: Master one approach before combining

4. **Documentation**: Save your hybrid discoveries as presets

5. **CPU considerations**: Complex masks cost more than simple ones

[SRC: IL-MAN - Harmless Architecture Documentation]
