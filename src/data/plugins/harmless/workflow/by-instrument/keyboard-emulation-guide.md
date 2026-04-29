# Keyboard Emulation Guide

## Overview
Emulating electric pianos, organs, clavinets, and other keyboard instruments using Harmless's additive engine.

## Electric Piano (EP)

### Tine-Based (Rhodes Style)
**Characteristics**: Bell-like attack, warm sustain, singing quality

**Settings**:
- **Mask**: H1, H2, H4, H8, H16 (octave relationships like tines)
- Amplitude: Natural decay (not equal)
- **Filter**: Cutoff 6kHz, 12dB slope
- **Resonance**: 25%
- **Pluck**: 25% (tine attack simulation)
- **Drive**: 20%

**Envelope**:
- Attack: 5ms
- Decay: 300ms
- Sustain: 80%
- Release: 800ms

**Effects**:
- Chorus: 30%
- Tremolo: Optional (if available)
- Reverb: 25%

**Playing**: Chords, melodic lines, comping

### Reed-Based (Wurlitzer Style)
**Characteristics**: Brighter, more aggressive, barky

**Settings**:
- **Mask**: Richer harmonics than Rhodes
- **Filter**: Cutoff 7kHz, resonance 35%
- **Pluck**: 15%
- **Drive**: 30%

**Character**: More bite, less bell-like

## Clavinet

### Hohner Clavinet D6
**Characteristics**: Percussive, funky, bright

**Settings**:
- **Mask**: Square-ish with H2 added
- **Filter**: Cutoff 8kHz, 24dB slope
- **Resonance**: 40%
- **Pluck**: 30%
- **Drive**: 25%

**Envelope**:
- Attack: 2ms (immediate)
- Decay: 100ms
- Sustain: 70%
- Release: 200ms (tight)

**Technique**:
- Staccato playing
- Funk patterns
- Percussive muting

## Organ

### Hammond-Style Drawbar
**Characteristics**: Sustained, hollow, harmonically rich

**Settings**:
- **Mask**: Custom drawbar simulation
  - H1: 80% (16' drawbar)
  - H2: 100% (8' drawbar)
  - H3: 60% (5-1/3')
  - H4: 80% (4')
  - H6: 40% (2-2/3')
  - H8: 60% (2')
- **Filter**: Cutoff 5kHz, gentle slope
- **Resonance**: 20%

**Envelope**:
- Attack: 20ms (percussion if desired)
- Sustain: 95%
- Release: 1s

**Effects**:
- Rotary simulation (chorus + phaser)
- Overdrive: 20-30%

### Pipe Organ
**Characteristics**: Massive, sustained, cathedral

**Settings**:
- **Mask**: Multiple harmonics with pipe relationships
- **Filter**: Cutoff 4kHz
- **Envelope**: Slow attack (1s), full sustain
- **Unison**: 5+ voices (ensemble effect)

**Effects**: Heavy reverb (cathedral simulation)

## Music Box

### Mechanical Music Box
**Characteristics**: Delicate, precise, metallic

**Settings**:
- **Mask**: H1, H4, H8, H16 (comb-like)
- **Pluck**: 80% (mechanical decay)
- **Filter**: Cutoff 9kHz, resonance 30%
- **Envelope**: Very tight
  - Attack: 1ms
  - Decay: 200ms
  - Sustain: 0%
  - Release: 300ms

**Effects**:
- Reverb: 30% (small room)
- Crush: 40% (mechanical imperfection)

### Toy Piano
**Characteristics**: Simple, slightly detuned, charming

**Settings**:
- **Mask**: Simple square or triangle
- **Pluck**: 60%
- **Unison**: 2 voices, 15% detune (slightly out of tune)
- **Filter**: Cutoff 8kHz

## Celeste

### Orchestral Celesta
**Characteristics**: Bell-like, delicate, magical

**Settings**:
- **Mask**: Bell harmonics (H1, H2, H4, H8, H16)
- **Pluck**: 50%
- **Filter**: Cutoff 8kHz, resonance 25%
- **Envelope**: Medium attack (30ms), full sustain

**Character**: Shimmering, ethereal

## Harpsichord

### Baroque Harpsichord
**Characteristics**: Plucked strings, bright, articulate

**Settings**:
- **Mask**: Rich harmonics (full sawtooth)
- **Pluck**: 40%
- **Filter**: Cutoff 7kHz, 12dB slope
- **Envelope**: Tight
  - Attack: 2ms
  - Decay: 150ms
  - Sustain: 60%
  - Release: 200ms

**Character**: No dynamics (harpsichord characteristic), articulate

## Marimba/Vibraphone

### Orchestral Mallets
**Characteristics**: Wooden/metallic, resonant, sustained

**Settings**:
- **Mask**: H1, H2, H4 (fundamental + octaves)
- **Pluck**: 55%
- **Filter**: Cutoff 6kHz
- **Resonance**: 35%
- **Envelope**: Medium decay

**Effects**:
- Tremolo (optional)
- Reverb: 35%

## Keyboard in Hip-Hop

### Neo-Soul Chords
- Rhodes-style patch
- 9th and 13th chords
- Slow attack pad underneath

### Lo-Fi Keys
- EP with crush effect (40%)
- Filter cutoff automated
- Vinyl noise layer

### Trap Stabs
- Clavinet-style
- Short, rhythmic
- Heavy on the 2 and 4

### Gospel Organ
- Hammond emulation
- Overdrive engaged
- Full chords, sustained

### Sparkle Hooks
- Music box/celesta
- High register (C5-C7)
- Simple melodies

## Playing Techniques

### Comping (Accompaniment)
- Rhythmic chords
- Staccato or sustained depending on style
- Fill spaces between vocal phrases

### Soloing
- Lead-like playing
- Bends and slides (if supported)
- Call and response with vocals

### Ostinato
- Repeated patterns
- Builds tension
- Common in hip-hop

### Arpeggios
- Broken chords
- Can use Harmless arpeggiator if available
- Creates movement

## Troubleshooting

### "Doesn't sound like the real instrument"
- Study the actual instrument's physics
- Adjust pluck amount (crucial for realism)
- Check envelope shape
- Add appropriate effects

### "Too synthetic"
- Add subtle detune
- Include imperfections (noise, crush)
- Use filter drive
- Reduce perfection in mask

### "No dynamics like the real thing"
- Map velocity to filter
- Real instruments get brighter with harder playing
- Add velocity-sensitive drive

## Pro Tips

1. **Research the instrument**: Understand how it makes sound

2. **Velocity is crucial**: Map it appropriately for each instrument type

3. **Effects make it real**: Reverb size, chorus type, all matter

4. **Register accuracy**: Play in the instrument's actual range

5. **Articulation**: Staccato vs legato matters

6. **Layer for realism**: Combine with real samples if needed

[SRC: IL-MAN - Harmless Oscillator, Filter, Physical Modeling]
