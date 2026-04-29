Tags: hip-hop/rap | R&B | electric

## Kepler Instrument Workflows

### Hip-Hop Sub Bass

**Sound Goal:** Deep, focused 808 foundation

**Settings:**
- Osc1: Sine, octave -2
- Osc2: Sine, octave -1, detune 0
- Mix: Osc1 70%, Osc2 30%
- Filter: Low-pass, Cutoff 25%, Resonance 25%
- Filter Env: Attack 5ms, Decay 150ms, Sustain 60%, Release 50ms
- Amp Env: Attack 5ms, Decay 100ms, Sustain 80%, Release 30ms

**A/B Test:**
1. Play bass pattern
2. Toggle filter resonance between 20% and 40%
3. Listen: "Is it focused or harsh?"
4. Adjust: Increase/decrease resonance

**Quick Fix Path:**
- Too muddy → Cutoff to 22%
- Too thin → Detune slightly (2-3 cents)
- No punch → Increase sustain to 90%

### R&B Smooth Lead

**Sound Goal:** Warm, melodic lead for hooks

**Settings:**
- Osc1: Saw, octave 0
- Osc2: Square, octave 0, detune 5
- Mix: 60% Osc1, 40% Osc2
- Filter: Low-pass, Cutoff 65%, Resonance 20%
- Filter Env: Attack 15ms, Decay 200ms, Sustain 70%, Release 150ms
- Amp Env: Attack 20ms, Decay 150ms, Sustain 70%, Release 200ms
- Chorus: Depth 40%, Rate 0.3Hz

**Why This Works:**
- Saw provides presence
- Square adds warmth
- Gentle filtering maintains character
- Chorus adds width without harshness

### Electric Piano Sound

**Sound Goal:** Vintage electric piano

**Settings:**
- Osc1: Triangle, octave 0
- Osc2: Triangle, octave 1, detune 3
- Mix: 70% Osc1, 30% Osc2
- Filter: Low-pass, Cutoff 75%, Resonance 15%
- Filter Env: Attack 10ms, Decay 100ms, Sustain 85%, Release 250ms
- Amp Env: Attack 10ms, Decay 50ms, Sustain 90%, Release 150ms
- Chorus: Depth 50%

**Quick Tweaks:**
- For brighter → Cutoff to 80%
- For warmer → Cutoff to 70%
- For more body → Increase resonance to 20%

### Trap Supsaw Lead

**Sound Goal:** Wide, aggressive lead

**Settings:**
- Osc1: Saw, octave 0, detune 0
- Osc2: Saw, octave 0, detune 10
- Osc3: Saw, octave 0, detune -10
- Mix: Equal levels
- Filter: Low-pass, Cutoff 60%, Resonance 35%
- Filter Env: Attack 2ms, Decay 250ms, Sustain 75%, Release 100ms
- Amp Env: Attack 5ms, Decay 200ms, Sustain 70%, Release 100ms

**Processing Chain:**
1. Kepler output
2. Fruity Limiter (soft clip)
3. Fruity Parametric EQ (tame highs)

### Atmospheric Pad

**Sound Goal:** Evolving, spacious pad

**Settings:**
- Osc1: Saw, octave 0, detune 5
- Osc2: Square, octave 0, detune -5
- Osc3: Sine, octave -1
- Mix: 40% Osc1, 30% Osc2, 30% Osc3
- Filter: Low-pass, Cutoff 70%, Resonance 20%
- Filter Env: Attack 500ms, Decay 800ms, Sustain 90%, Release 800ms
- LFO: To filter cutoff, Rate 0.1Hz, Depth 15%

**Creation Steps:**
1. Set slow attack for smooth entry
2. Add LFO for subtle movement
3. Layer sine for foundation
4. Use reverb for space

### Quick Reference Table

| Sound | OSCs | Waveforms | Cutoff | Res | Character |
|-------|------|-----------|--------|-----|-----------|
| Sub bass | 2 | Sine+Sine | 25% | 25% | Deep, focused |
| R&B lead | 2 | Saw+Square | 65% | 20% | Warm, melodic |
| Electric keys | 2 | Triangle | 75% | 15% | Vintage, smooth |
| Trap lead | 3 | Saw detuned | 60% | 35% | Wide, aggressive |
| Atmospheric pad | 3 | Mix | 70% | 20% | Evolving, wide |
