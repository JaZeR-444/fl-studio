Tags: hip-hop/rap | R&B | electric

## Advanced Kepler Synthesis Techniques

### Subtractive Synthesis Mastery

**Core Subtractive Principle:**
Kepler uses subtractive synthesis—generate harmonically rich waveforms, then sculpt them with filters. The key is understanding what each waveform contains so you know what you're removing.

**Waveform Harmonic Content:**

| Waveform | Harmonics | Character | Best For |
|----------|-----------|-----------|----------|
| Sawtooth | All harmonics | Bright, rich | Leads, bass |
| Square | Odd harmonics | Hollow, woody | Bass, keys |
| Triangle | Few harmonics | Pure, soft | Pads, bass |
| Sine | Fundamental only | Pure | Sub-bass, fundamentals |

**Strategic Subtraction:**

| Goal | Waveform | Filter Approach |
|------|----------|----------------|
| Dark bass | Sawtooth | Aggressive low-pass (200Hz) |
| Cutting lead | Sawtooth | Moderate cutoff (2-5kHz) |
| Warm pad | Square | Gentle cutoff (1-2kHz) |
| Pure sub | Sine | No filter, high resonance |

### Filter Topology

**24dB/octave Low-Pass:**
- Steep roll-off (4 poles)
- Classic analog character
- Best for: Aggressive filtering
- Resonance creates "wah" effect

**12dB/octave Low-Pass:**
- Gentler slope (2 poles)
- More transparent
- Best for: Musical filtering
- Less colored resonance

**Filter Resonance Settings:**

| Resonance | Effect | Use Case |
|----------|--------|----------|
| 0-20% | Clean, transparent | Pads, fundamentals |
| 20-40% | Musical emphasis | Leads, bass |
| 40-60% | Noticeable character | Synth sounds |
| 60-80% | Pronounced "wah" | Solo passages |
| 80%+ | Self-oscillation | Sound design |

### Oscillator Sync Techniques

**Hard Sync Basics:**
- Master oscillator defines pitch
- Slave oscillator resets to master
- Creates rich, metallic harmonics
- Sweepable with filter

**Sync Strategies by Genre:**

| Genre | Sync Approach | Sound |
|-------|---------------|-------|
| Hip-hop | Subtle sync sweep | Glitchy texture |
| R&B | Warm sync | Smooth harmonics |
| EDM | Aggressive sync | Screaming lead |
| Lo-fi | Detuned sync | Vintage character |

### Modulation Routing Deep Dive

**Envelope to Filter:**
```
Attack: 0-10ms (fast for punch)
Decay: 100-500ms (varies with genre)
Sustain: 50-80% (maintains body)
Release: 100-300ms (natural fade)
```

**LFO to Pitch:**
| Rate | Feel | Use |
|------|------|-----|
| 0.1-0.2Hz | Slow warp | Ambient |
| 0.5-1Hz | Moderate vibrato | Movement |
| 2-8Hz | Fast vibrato | Percussive |

### Creating Signature Sounds

**The "Juno" Sound:**
1. Saw + Square waves
2. Slight detune (5-10 cents)
3. Low-pass filter at 60%
4. Resonance at 25%
5. Filter envelope with medium depth
6. Chorus effect for width

**Modern Trap Lead:**
1. Detuned saws (2 oscs)
2. Low-pass filter at 70%
3. Resonance at 35%
4. Fast filter envelope attack
5. Distortion after Kepler

**Warm R&B Pad:**
1. Triangle + Sine mix
2. Very gentle filtering (80%+)
3. Low resonance (15%)
4. Long attack envelope
5. Reverb and delay sends

### Troubleshooting Synthesis

| Problem | Likely Cause | Fix |
|---------|-------------|-----|
| Too harsh | Filter too open | Close cutoff by 10-20% |
| No punch | No filter envelope | Add envelope modulation |
| Thin sound | No detuning | Detune oscs 5-15 cents |
| Muddiness | Too many lows | High-pass unneeded frequencies |
| No character | Resonance too low | Increase resonance |
