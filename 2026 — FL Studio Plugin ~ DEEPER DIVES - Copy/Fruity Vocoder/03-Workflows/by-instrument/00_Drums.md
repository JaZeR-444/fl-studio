# Fruity Vocoder: Drum Workflows

## Overview
Drums as modulator create rhythmic harmonic textures—drum rhythms "playing" melodic content.

## Core Concept
```
Drum Loop ──► Modulator (L) ──┐
                              ├─► Vocoder ──► Rhythmic Harmony
Pad/Chord ──► Carrier (R) ────┘
```

**Result:** The melodic content follows the drum rhythm—kick opens bass bands, snare opens mid bands, cymbals open high bands.

---

## Workflow 1: Drum-Played Chords

### Setup

**Step 1: Prepare Sources**
1. Load drum loop into Channel Rack
2. Create sustained chord pad (4-8 bar sustained notes)

**Step 2: Routing**
1. Route both to same mixer track
2. Pan drum hard-left, pad hard-right
3. Set drum mixer track to "Send only" (don't hear dry drums)

**Step 3: Vocoder Settings**
```
MIN: 60 Hz (capture kick)
MAX: 12000 Hz (capture cymbals)
ATTACK: 2-5 ms (catch drum transients)
DECAY: 80-120 ms (follow drum envelope)
BANDS: 16-24 (rhythmic focus)
BW: 55%
SCALE: Log
```

### What to Listen For
- [ ] Each drum hit triggers appropriate frequency range
- [ ] Kick = bass notes, snare = mid notes, cymbals = high notes
- [ ] Rhythmic alignment tight to drum groove
- [ ] No muddiness from overlapping hits
- [ ] Musical result, not chaotic noise

### Variations

#### A: Trap Break Fill
**Use:** 8 bars before drop
```
Drum: Trap drum loop (no 808s)
Pad: Dark minor chord
BANDS: 16
DECAY: 80ms (tight)
Post: Heavy reverb on return, fade out
```

#### B: Boom Bap Texture
**Use:** Verse variation
```
Drum: Lo-fi drum break
Pad: Warm jazzy chord
BANDS: 20
DECAY: 100ms
Post: Tape emulation, vinyl noise
```

#### C: Experimental Build
**Use:** Build-up section
```
Drum: Increasing complexity
Pad: Rising chord progression
BANDS: 12 (lower = more effect)
DECAY: 60ms (tight, building energy)
Automation: MIN decreases over build (focus higher)
```

---

## Workflow 2: Kick-Triggered Sub

### Concept
Use only the kick drum to gate a sub-bass or low pad.

### Setup
**Filter the Modulator:**
1. EQ drum loop: Low-pass at 150Hz (only kick)
2. Or: Use kick-only sample

**Settings:**
```
MIN: 40 Hz
MAX: 200 Hz (kick range only)
ATTACK: 2ms (immediate)
DECAY: 100ms (sustained sub)
BANDS: 8-12 (low resolution for bass)
Carrier: Sub bass or low pad
```

**Result:** Clean sub-bass that follows kick pattern precisely.

### Hip-Hop Application
- Reinforce 808 pattern
- Add weight to kick
- Alternative to sidechain compression

---

## Workflow 3: Hi-Hat Sparkle

### Concept
Use hi-hats to trigger high-frequency content.

### Setup
**Filter the Modulator:**
1. EQ drum loop: High-pass at 8kHz (only cymbals/hats)

**Settings:**
```
MIN: 8000 Hz
MAX: 16000 Hz
ATTACK: 1ms (immediate)
DECAY: 50ms (short, sparkly)
BANDS: 8
Carrier: Bright synth or noise
```

**Result:** Rhythmic high textures following hat pattern.

---

## Workflow 4: Percussive Vocoding

### Application
Use non-drum percussion (shakers, claps, snaps) as modulator.

### Setup
```
Percussion Loop ──► Modulator
Synth Texture ──► Carrier

Settings:
  ATTACK: 5ms
  DECAY: 60-80ms
  BANDS: 12-16
  BW: 50%
```

**Result:** Textural rhythm that sits between drums and harmony.

---

## Mini-Recipes

### Recipe A: Drum Hook (2 minutes)
1. Load drum loop and pad
2. Route to vocoder
3. Set: MIN 60, MAX 12000, ATTACK 5ms, DECAY 100ms
4. Blend at 50% with dry drums
5. Use for 8-bar break

### Recipe B: Ghost Kick (2 minutes)
1. Isolate kick from drum loop (EQ)
2. Carrier: Low pad
3. Set: MIN 40, MAX 200, BANDS 8
4. 100% wet (replaces original sub)
5. Layer under main kick

### Recipe C: Glitch Drums (2 minutes)
1. Drum loop as modulator
2. Noise as carrier
3. Set: BANDS 4, BW 30%, INV On
4. Automation: HOLD on 1/16th notes
5. Use for 4-bar experimental section

---

## Automation Ideas

### Rhythmic Stutter
```
HOLD: 1/8th note pattern during drum fill
Result: Chopped rhythmic effect
```

### Band Focus Shift
```
Build-up: MIN 60 → 1000 over 8 bars
Result: Kick focus → Full kit focus
```

### Decay Swell
```
Verse: DECAY 80ms
Chorus: DECAY 150ms
Result: Tighter verse, sustained chorus
```

---

## Vibe Mapping

| Vibe | Settings | Application |
|------|----------|-------------|
| **Moody** | Slow decay (150ms), dark pad, low MAX | Dark transitions |
| **Upbeat** | Fast decay (60ms), bright carrier | Break fills |
| **Psychedelic** | Low bands (8), INV On | Experimental sections |
| **Jazzy** | Medium decay (100ms), warm pad | Jazz-hop breaks |
| **Vibey** | Medium decay (120ms), rich pad | Groove layers |

---

## Pitfalls

| Pitfall | Problem | Solution |
|---------|---------|----------|
| Too chaotic | Drum hits overlap messily | Lower decay, fewer bands |
| Weak kick | Kick not triggering enough | Lower MIN, faster attack |
| No cymbals | High frequencies missing | Raise MAX, check carrier highs |
| Muddy | Too much low-end overlap | High-pass at 100Hz |
| Phasey | Overlapping bands | Raise BW to 50%+ |

---

**Instrument:** Drums
**Source:** IL-MAN, REPUTABLE
**Last Updated:** 2026-02-03
