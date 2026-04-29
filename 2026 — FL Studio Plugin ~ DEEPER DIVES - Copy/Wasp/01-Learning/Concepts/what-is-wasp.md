Tags: moody | electric | hip-hop/rap

## What Is Wasp?

Wasp is FL Studio's dual-oscillator virtual analog synthesizer featuring a distinctive yellow-and-black "insect" interface. It combines subtractive synthesis with a flexible modulation matrix, offering raw, aggressive sounds typical of early 80s synthesizers.

### What Makes Wasp Unique

**Tone targets:**
- **Moody:** Dark, growling bass and lead sounds
- **Electric:** Buzzy, cutting leads and arpeggios
- **Funky:** Synced, resonant filter sweeps

**Core architecture:**
- 2 oscillators (sawtooth + square with pulse width)
- 1 low-pass filter (24dB/octave, resonant)
- 1 modulation matrix (4 slots)
- Built-in chorus (for that 80s warmth)

### Signal Flow

```
Osc1 → [Mixer] → Filter → Amp → Output
    ↘              ↑
Osc2 →            ↙ Mod Matrix
                   
Mod Matrix → Filter Cutoff/Resonance
           → Osc Pitch
           → Pulse Width
           → Amp Level
```

### How to Create Classic Sounds

**Wasp Bass:**
1. Osc1: Saw, octave down (-1)
2. Osc2: Square, octave down (-1), slight detune
3. Filter: Cutoff 30%, Resonance 40%
4. Mod: Filter envelope to Cutoff (medium depth)
5. Amp: Short attack, medium decay

**Wasp Lead:**
1. Osc1: Saw, unison detune
2. Osc2: Square with pulse width modulation
3. Filter: Cutoff 60%, Resonance 25%
4. Mod: Filter envelope to Cutoff (high depth)
5. Amp: Medium attack, sustain at 70%

**80s Sync Lead:**
1. Both oscs: Sawtooth
2. Sync enabled on Osc2
3. Filter: Open, low resonance
4. Mod: LFO to filter (slow, 0.2Hz)
5. Chorus: Slight warmth

### Typical Mistakes

| Mistake | Result | Fix |
|---------|--------|-----|
| Filter too open | Harsh, thin sound | Cut back cutoff to 50-60% |
| Too much resonance | Whistling, booming | Reduce resonance to 30-40% |
| No envelope on filter | Static, boring | Add filter envelope modulation |
| Oscillators un DETUNED | Weak sound | Detune oscs slightly for thickness |
| Chorus on everything | Always sounds "80s" | Use selectively |

### First Adjustment Priorities

**For hip-hop/R&B bass:**
1. Start with both oscs one octave down
2. Set filter cutoff to 25-35%
3. Add filter envelope with fast attack, medium decay
4. Keep resonance moderate (30%)

**For leads:**
1. Detuned saw oscs
2. Filter at 60% with slight resonance
3. Filter envelope with full depth
4. Chorus for 80s warmth

**For pads:**
1. Both oscs, slight detune
2. Filter open (70%+), low resonance
3. Long attack on amp envelope
4. Chorus essential for thickness
