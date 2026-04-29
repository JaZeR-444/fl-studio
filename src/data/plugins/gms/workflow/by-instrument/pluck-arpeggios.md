# Workflow: Pluck and Arpeggio Sounds

Creating fast, rhythmic plucked sounds.

## Goal
Design tight, percussive pluck sounds perfect for arpeggios and rhythmic patterns.

[SRC: IL-MAN]

---

## Pluck Fundamentals

### Characteristics
1. **Fast attack** - Immediate sound
2. **Short decay** - Doesn't sustain
3. **Percussive** - Transient-focused
4. **Rhythmic** - Repeats well

---

## Basic Pluck Recipe

### Oscillators
```
OSC 1: Sawtooth or Triangle
OSC 2: Same, +12 semitones
MIX: 70%

No OSC 3 (keeps it tight)
```

### Amplitude Envelope (Critical!)
```
LEVEL EG:
  ATTACK: 0%
  DECAY: 20-25%
  SUSTAIN: 10-20%
  RELEASE: 20-25%
```

**This creates the "pluck"**

### Filter Envelope (The Secret)
```
FILTER: LP, cutoff 70%

EG1 → CUTOFF
  ATK: 0%
  DEC: 15-20%
  AMNT: +50 to +60%
```

**Result:** Filter opens then closes = pluck

### Unisono
```
VOICES: 2-3
STEREO: 40-50%
DETUNE: 25-35%
```

**Keep tight - not wide**

### FX
```
ECHO: Short delay (adds rhythm)
  X: 30-40%
  Time: Sync to tempo

Optional RVRB: Very short
```

---

## Pluck Variations

### Acoustic-Style
```
Triangle waves
Soft filter
Medium resonance
Gentle envelope
```

### Electronic Pluck
```
Sawtooth
Sharp filter envelope
Higher resonance
Short everything
```

### FM Pluck (Bell-like)
```
MODULATION: 2 to 1 FM
OSC 1: Sine
OSC 2: Sine, +12 semitones
AMOUNT: 50%
Fast envelope
Result: Bell/mallet pluck
```

### Harp-like
```
Triangle waves
Longer decay (30%)
Short echo
Gentle filter
```

---

## Arpeggio Techniques

### Fast Patterns
```
Short notes in piano roll
1/8 or 1/16 notes
Fast pluck envelope
ECHO essential
```

### Echo Timing
```
ECHO synced to:
  1/8 for fast arps
  1/4 for space
  Dotted for groove
```

### Velocity Variation
```
Program different velocities
Create dynamics
Accent certain notes
```

---

## Advanced Pluck

### Layered Pluck
```
Layer 1: Tight attack
  Fast envelope
  High filter

Layer 2: Body/sustain
  Slower envelope
  Lower filter
  Reduced volume

Result: Attack + body
```

### Stereo Pluck
```
Wider unisono (5 voices)
60% stereo
Short delay
Result: Wide but tight
```

### Modulated Pluck
```
LFO → PITCH (subtle)
Rate: Medium
Amount: ±5%
Result: Detuned movement
```

---

## Genre Applications

### House/Tech House
```
Sawtooth
Tight envelope
1/16 arps
Short delay
Groove-focused
```

### Trance
```
Supersaw pluck
More voices
Longer release
Heavy reverb
Uplifting feel
```

### Pop
```
Softer triangle
Medium envelope
Melodic patterns
Subtle FX
```

### Synthwave
```
Pulse wave
Medium decay
Arpeggiated bass
Analog feel
```

### Lo-Fi
```
Triangle
Noise: 10%
Bit crusher
Warm filter
```

---

## Arpeggio Programming

### Pattern Ideas
```
Up: C - E - G - C
Down: C - G - E - C
Up-Down: C - E - G - E
Random: C - G - C - E
```

### Rhythmic Variations
```
Steady 1/16
Dotted rhythms
Triplets
Mixed patterns
```

### Velocity Patterns
```
Accent on beat: 100 - 70 - 70 - 70
Crescendo: 60 - 70 - 80 - 90
Groove: 100 - 60 - 80 - 60
```

---

## Common Pluck Mistakes

### Too Long
**Problem:** Sounds like pad, not pluck
**Fix:** Decay under 30%, sustain under 25%

### No Filter Envelope
**Problem:** Static, boring
**Fix:** Always add filter envelope

### Too Wide
**Problem:** Unfocused in fast patterns
**Fix:** Keep stereo under 60%

### Muddy
**Problem:** Competing frequencies
**Fix:** HPF at 20%, filter cutoff 70%+

---

## Pro Tips

### 1. Staccato Programming
```
Short notes in piano roll
Don't overlap
Let pluck speak
```

### 2. Echo Groove
```
ECHO creates groove
Sync to tempo
Try different divisions
```

### 3. Layer Low
```
Add sub bass layer
Pluck = mids/highs
Together = full range
```

### 4. Pattern Variation
```
Verse: Simple pattern
Chorus: Faster/denser
Bridge: Different pattern
```

---

## Quick Pluck Recipes

### Tight House Pluck
```
Sawtooth
Decay 20%
Filter envelope +50%
Short echo
```

### Bell Pluck
```
FM mode
Sine waves
Fast envelope
Long release
```

### Wide Arp
```
5 voices
60% stereo
Triangle
Synced echo
```

### Soft Pluck
```
Triangle
Softer filter
Gentle envelope
Minimal FX
```

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm
