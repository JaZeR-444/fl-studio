# Workflow: Lead Creation with GMS

Designing cutting, memorable lead sounds.

## Goal
Create lead sounds that cut through the mix and carry the melodic hook.

[SRC: IL-MAN]

---

## Lead Fundamentals

### What Makes a Good Lead?
1. **Presence** - Cuts through mix
2. **Character** - Memorable tone
3. **Consistency** - Plays evenly across range
4. **Playability** - Responds to performance

---

## Supersaw Lead

### Classic EDM
```
OSC 1: Sawtooth
OSC 2: Sawtooth, +7 cents
OSC 3: Sawtooth, -7 cents

MIX: OSC2 100%, OSC3 80%

UNISONO: 6-8 voices
STEREO: 75%
DETUNE: 55%

FILTER: LP, cutoff 85%, res 20%

LEVEL EG:
ATK: 0%
DEC: 25%
SUS: 95%
REL: 35%

FX:
  FLNG: X: 40%, Y: 30%
  RVRB: X: 45%, Y: 30%
```

**Result:** Thick, shimmering EDM lead

---

## FM Lead

### Metallic Character
```
OSC 1: Sawtooth
OSC 2: Sawtooth, +12 semitones

MODULATION: 2 to 1 FM
AMOUNT: 55%

OSC 3: Triangle, -12 semitones
MIX: 50%

UNISONO: 5 voices, 60% stereo

FILTER: LP, cutoff 80%, res 25%

FX:
  DIST: X: 25%
  ECHO: X: 30%
```

**Result:** Bright, complex lead

---

## Sync Lead

### Aggressive Edge
```
OSC 1: Sawtooth
OSC 2: Sawtooth, +12 semitones

MODULATION: 1 SYNC
AMOUNT: 55%

UNISONO: 5 voices, 55% stereo

FILTER: LP, cutoff 82%, res 28%

EG1 → CUTOFF
ATK: 0%
DEC: 30%
AMNT: +30%

FX:
  DIST: X: 30%
  RVRB: Medium
```

**Result:** Bright, aggressive attack

---

## Pluck Lead

### Fast, Percussive
```
OSC 1: Sawtooth or Triangle
OSC 2: Same, +12 semitones
MIX: 70%

UNISONO: 3 voices, 40% stereo

LEVEL EG:
ATK: 0%
DEC: 20%
SUS: 15%
REL: 22%

EG1 → CUTOFF
ATK: 0%
DEC: 18%
AMNT: +55%

FILTER: LP, cutoff 75%

FX:
  ECHO: Short delay
  RVRB: Small room
```

**Result:** Fast, rhythmic lead

---

## Brass Lead

### Synth Brass
```
OSC 1: Sawtooth
OSC 2: Square, +7 semitones
OSC 3: Sawtooth, -12 semitones

MIX: OSC2 80%, OSC3 50%

UNISONO: 4 voices, 50% stereo

FILTER: LP, cutoff 75%, res 22%

LEVEL EG:
ATK: 8%
DEC: 30%
SUS: 90%
REL: 30%

EG1 → CUTOFF
ATK: 0%
DEC: 25%
AMNT: +35%

FX:
  DIST: X: 20%
  ECHO: Medium
```

**Result:** Brass-like synth

---

## Mono Lead

### Vintage Style
```
OSC 1: Sawtooth
OSC 2: Pulse, +12 semitones

MIX: 100%

UNISONO: 1 voice (MONO!)

MONO VOICE: On
FREQ SLIDE: 20%

FILTER: LP, cutoff 78%, res 18%

LEVEL EG:
ATK: 0%
DEC: 28%
SUS: 92%
REL: 28%

FX: Minimal
```

**Result:** Vintage solo synth

---

## Lead Techniques

### Filter Envelope Bite
```
EG1 → CUTOFF
Fast attack, medium decay
+25 to +40% amount
Result: Opening filter on each note
```

### Vibrato
```
LFO1 → PITCH
RATE: 25%
AMNT: ±8 to ±12%
SHAPE: Sine
RETRIG: Off
Result: Natural vibrato
```

### Portamento/Glide
```
MONO VOICE: On
FREQ SLIDE: 15-30%
Result: Slides between notes
```

---

## Genre-Specific Leads

### Trance
- Supersaw (8+ voices)
- Long release
- Heavy reverb
- Filter modulation

### Trap
- Sawtooth-based
- 4-6 voices
- Moderate stereo
- Light distortion

### Dubstep
- Sync or FM
- Aggressive filter
- Heavy distortion
- Wobble optional

### Pop
- Controlled width
- Medium unisono
- Clean tone
- Subtle FX

### House
- Classic saw
- 4 voices
- Short-medium release
- Groove-focused

---

## Mixing Leads

### EQ Strategy
```
Cut: 200-400 Hz (remove mud)
Boost: 2-4 kHz (presence)
Air: 8-12 kHz (if needed)
```

### Compression
```
Light compression post-GMS
3-6 dB reduction
Result: Even dynamics
```

### Stereo Placement
```
Wide leads: Full stereo
Lead + double: Pan slightly
Solo lead: Center
```

---

## Common Lead Mistakes

### Too Wide
**Problem:** Weak center, phase issues
**Fix:** Reduce stereo to 60-70%

### Too Much Unisono
**Problem:** Muddy, unfocused
**Fix:** 4-6 voices is usually enough

### No Presence
**Problem:** Buried in mix
**Fix:** Filter envelope, boost 2-4kHz

### Static Boring
**Problem:** Lifeless
**Fix:** Add LFO vibrato, filter movement

---

## Quick Lead Recipes

### Big Room Lead
```
Supersaw, 8 voices
FLNG + RVRB
Bright filter
```

### Synth Solo
```
Mono, portamento
Filter envelope
No unisono
```

### Pop Lead
```
5 voices, 60% stereo
Clean tone
Light FX
```

### R&B Lead
```
Triangle waves
4 voices
Warm filter
Subtle vibrato
```

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm
