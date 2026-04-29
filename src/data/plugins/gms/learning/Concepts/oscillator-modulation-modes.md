# Oscillator Modulation Modes

Deep dive into the three modulation modes that define GMS's hybrid character.

## The MODULATION Section

Located centrally in the Synth panel, the MODULATION section controls how oscillators interact:

| Mode | Full Name | Effect | Use Case |
|------|-----------|--------|----------|
| **1 SYNC** | Hard Synchronization | Aggressive harmonic sweep | Leads, basses |
| **2 to 1 FM** | Frequency Modulation | Complex harmonic content | Bells, metals, EDM leads |
| **2 to 1 RM** | Ring Modulation | Inharmonic sidebands | Industrial, sci-fi textures |

[SRC: IL-MAN]

---

## Mode 1: Hard Sync (1 SYNC)

### How It Works
- OSC 1 waveform resets whenever OSC 2 completes a cycle
- AMOUNT controls the sync ratio/frequency relationship
- Higher AMOUNT = more aggressive sync effect

### Sound Character
- **Low amount:** Subtle brightening
- **Medium amount:** Classic "sync sweep" sound
- **High amount:** Aggressive, distorted harmonics

### Practical Applications

#### Sync Sweep Bass
1. Select SYNC mode
2. OSC 1: Sawtooth wave
3. OSC 2: Sawtooth wave, pitched up 1 octave
4. Set AMOUNT to 30-50%
5. Modulate OSC 2 pitch with envelope
6. **Result:** Classic evolving bass

#### Aggressive Lead
1. Select SYNC mode
2. Both oscillators: Sawtooth
3. High AMOUNT (70-90%)
4. Add DIST effect
5. **Result:** Cutting lead for EDM/trap

---

## Mode 2: Frequency Modulation (2 to 1 FM)

### How It Works
- OSC 2 acts as modulator, OSC 1 as carrier
- OSC 2's amplitude controls OSC 1's frequency deviation
- AMOUNT sets modulation depth

### FM Mathematics
When OSC 2 modulates OSC 1:
- **Carrier:** OSC 1 (base frequency)
- **Modulator:** OSC 2 (creates sidebands)
- **Sidebands:** f_carrier ± (n × f_modulator)

### Harmonic Ratios Guide

| OSC 2 Pitch | Ratio | Resulting Character |
|-------------|-------|---------------------|
| Same as OSC 1 | 1:1 | Rich, dense harmonics |
| +12 semitones | 2:1 | Bell-like, hollow |
| +19 semitones | 3:1 | Reed-like, hollow |
| +24 semitones | 4:1 | Bright, metallic |
| +28 semitones | 5:1 | Brass-like |

### Practical Applications

#### FM Bass (808-style)
1. Enable FM mode
2. OSC 1: Sine wave (low octave)
3. OSC 2: Sine wave (+12 or +19 semitones)
4. AMOUNT: 40-60%
5. Low cutoff filter
6. **Result:** Subby FM bass with character

#### Metallic Lead
1. Enable FM mode
2. OSC 1: Sawtooth
3. OSC 2: Square wave (+12 semitones)
4. High AMOUNT (60-80%)
5. Filter with medium resonance
6. **Result:** Bright, cutting FM lead

#### Bell/Pluck
1. Enable FM mode
2. OSC 1: Sine
3. OSC 2: Sine (+24 semitones)
4. AMOUNT: 50-70%
5. Fast envelope (short decay)
6. **Result:** Bell-like pluck sound

---

## Mode 3: Ring Modulation (2 to 1 RM)

### How It Works
- OSC 1 and OSC 2 amplitudes are multiplied
- Output = (OSC 1) × (OSC 2)
- Creates sum and difference frequencies

### Ring Modulation Math
- **Sum frequencies:** f_osc1 + f_osc2
- **Difference frequencies:** |f_osc1 - f_osc2|
- Often inharmonic (not musically related)

### Sound Character
- Metallic, bell-like when harmonically related
- Industrial, harsh when inharmonic
- Excellent for sci-fi and experimental sounds

### Practical Applications

#### Sci-Fi Texture
1. Enable RM mode
2. OSC 1: Complex waveform
3. OSC 2: Detuned slightly (+2 to +7 semitones)
4. AMOUNT: 60-100%
5. **Result:** Alien, robotic texture

#### Metallic Percussion
1. Enable RM mode
2. OSC 1: Short envelope, noise-like wave
3. OSC 2: Higher pitch
4. Fast attack, short decay
5. **Result:** Bell/cowbell alternative

#### Bass Enhancement
1. Enable RM mode (subtle)
2. OSC 1: Standard bass wave
3. OSC 2: Sub-octave
4. Low AMOUNT (20-40%)
5. **Result:** Added grit and edge to bass

---

## Choosing the Right Mode

| Musical Goal | Recommended Mode | Why |
|--------------|------------------|-----|
| Classic analog bass | Subtractive (no modulation) | Clean, warm tone |
| Aggressive lead | SYNC | Bright, cutting harmonics |
| Complex EDM lead | FM | Rich harmonic content |
| Experimental textures | RM | Inharmonic character |
| 808-style sub bass | FM | Harmonic depth in low end |
| Bell/pluck sounds | FM | Natural bell harmonics |
| Industrial bass | RM | Grit and aggression |

---

## Advanced: Combining with OSC 3

Even when using modulation on OSC 1+2, OSC 3 remains independent:

### FM + Sub Configuration
```
OSC 1 (Carrier) ← FM ← OSC 2 (Modulator)
        ↓
      Mix ← OSC 3 (Sub-oscillator)
        ↓
     Filter
```

**Setup:**
1. Enable FM mode
2. Configure FM relationship (OSC 2 → OSC 1)
3. Set OSC 3 to sine wave, -12 or -24 semitones
4. Mix in OSC 3 for low-end foundation

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm
