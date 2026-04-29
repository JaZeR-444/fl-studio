# Frequency Spectrum Map

Visual and textual representation of the complete 20 Hz - 20 kHz frequency spectrum.

## Complete Spectrum Overview

```
20 Hz                                                                    20,000 Hz
├────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┤
│Sub │ Bass  │   Low-Mids  │  Midrange  │ Upper-Mids │ Treble │    Air   │
│    │       │             │            │            │        │          │
20   60    120│   250      500│    1k     2k│    4k     8k     12k      20k
             140│           600│         1.8k│   3.5k         10k       16k
                300           │            3.2k      6.5k
                              │
                           PRESENCE
```

## Band Assignments

```
Band 1 (Purple) : [━━━━━━━━━━━━━━━━━━━━━━━━]
                   20                    120 Hz

Band 2 (Pink)   :          [━━━━━━━━━━━━━━━━━━━━━━━]
                          140                   320 Hz

Band 3 (Orange) :                    [━━━━━━━━━━━━━━━━━━]
                                    300              550 Hz

Band 4 (Yellow) :                              [━━━━━━━━━━━━━━━━]
                                              600            1200 Hz

Band 5 (Green)  :                                        [━━━━━━━━━━━━━━━━━]
                                                       1800           3200 Hz

Band 6 (Teal)   :                                                  [━━━━━━━━━━━━━━━━━]
                                                                  3500          6500 Hz

Band 7 (Blue)   :                                                            [━━━━━━━━━━━━━━━━━━━]
                                                                            8000             16000 Hz
```

---

## Detailed Frequency Breakdown

### Sub-Bass Region (20-60 Hz)
**Character:** Feel rather than hear, rumble, power

```
20 Hz  - Below human hearing threshold for most
25 Hz  - Deep sub-bass in EDM, film scoring
30 Hz  - Lowest usable frequency in most systems
35 Hz  - Kick drum sub-bass
40 Hz  - Common high-pass filter point
45 Hz  - Low B on 5-string bass guitar
50 Hz  - Kick drum fundamental punch
60 Hz  - Common bass boost point in EDM
```

**Typical action:** High-pass filter unless working with kick/bass/808

---

### Bass Region (60-250 Hz)
**Character:** Warmth, fullness, foundation

```
60 Hz  - Low shelf boost point for bass enhancement
70 Hz  - Conservative high-pass point
80 Hz  - Standard high-pass for vocals, guitars
90 Hz  - Kick drum punch
100 Hz - Standard tight high-pass point
120 Hz - Upper edge of sub/foundation zone
140 Hz - Start of warmth zone (Band 2)
150 Hz - Bass guitar body
180 Hz - Male vocal warmth
200 Hz - Start of "mud zone"
220 Hz - Piano low notes
250 Hz - Common mud cut point
```

**Typical action:** High-pass @ 70-100 Hz, cut @ 200-250 Hz for mud

---

### Low-Midrange (250-600 Hz)
**Character:** Body, warmth, thickness, or mud

```
250 Hz - Primary mud frequency
280 Hz - Snare drum body
300 Hz - Start of boxiness zone (Band 3)
320 Hz - Upper warmth zone limit
350 Hz - Vocal "chestiness"
380 Hz - Room resonance (common problem)
400 Hz - Cardboard box resonance
420 Hz - Common notch point for boxiness
450 Hz - Guitar body
500 Hz - Vocal body
550 Hz - Upper boxiness limit
600 Hz - Start of honk zone (Band 4)
```

**Typical action:** Cut for mud and boxiness removal

---

### Midrange (600-2000 Hz)
**Character:** Core tone, presence, intelligibility

```
600 Hz  - Nasal region start
700 Hz  - Nasal cut point
800 Hz  - Common honk frequency
900 Hz  - Guitar midrange
1000 Hz - "Telephone" frequency, honk central
1100 Hz - Vocal intelligibility
1200 Hz - Upper honk limit
1500 Hz - Vocal consonants
1800 Hz - Start of presence zone (Band 5)
2000 Hz - High shelf starting point for clarity
```

**Typical action:** Cut honk @ 700-1k Hz, boost presence @ 2-3 kHz

---

### Upper-Midrange / Presence (2000-8000 Hz)
**Character:** Clarity, definition, detail, or harshness

```
2000 Hz - Presence boost start
2500 Hz - Vocal clarity sweet spot
3000 Hz - Vocal presence
3200 Hz - Upper presence limit (Band 5)
3500 Hz - Detail zone start (Band 6)
4000 Hz - Snare crack
4500 Hz - Harshness region
5000 Hz - Sibilance central, de-essing target
5500 Hz - Cymbal body
6000 Hz - Harshness cut point
6500 Hz - Upper detail limit (Band 6)
7000 Hz - Guitar string zing
8000 Hz - Start of air zone (Band 7)
```

**Typical action:** Boost @ 2-3 kHz for presence, cut @ 4-6 kHz for harshness

---

### Treble / Air Region (8000-20000 Hz)
**Character:** Brightness, air, sparkle, shimmer

```
8000 Hz  - Air zone start, brightness
9000 Hz  - Cymbal sizzle
10000 Hz - Common air shelf boost point
11000 Hz - Vocal breath
12000 Hz - Standard air boost frequency
13000 Hz - Sparkle
14000 Hz - High air shelf
15000 Hz - Upper harmonics
16000 Hz - Upper air limit (Band 7)
17000 Hz - Ultra-high harmonics
18000 Hz - Beyond most adult hearing
20000 Hz - Theoretical upper limit of hearing
```

**Typical action:** High shelf boost @ 10-12 kHz for modern air

---

## Critical Frequency Landmarks

### The "Always Check" Frequencies

1. **80 Hz** - High-pass filter standard
2. **200-250 Hz** - Mud removal
3. **400 Hz** - Boxiness removal
4. **800 Hz** - Honk/nasal removal
5. **2.5 kHz** - Presence boost
6. **5 kHz** - Harshness/sibilance check
7. **12 kHz** - Air shelf boost

---

## Musical Note Frequencies

### Common Note References

```
C1:   32.7 Hz  (Low bass guitar)
E1:   41.2 Hz  (Low E on bass guitar)
A1:   55.0 Hz  (Bass/kick fundamental)
C2:   65.4 Hz
E2:   82.4 Hz  (Low E on standard guitar)
A2:  110.0 Hz  (A110, orchestral tuning fork)
C3:  130.8 Hz  (Vocal low notes)
A3:  220.0 Hz
C4:  261.6 Hz  (Middle C)
A4:  440.0 Hz  (Concert pitch, tuning standard)
C5:  523.3 Hz
A5:  880.0 Hz
C6: 1046.5 Hz
C7: 2093.0 Hz
C8: 4186.0 Hz  (Top of piano)
```

### How to Use
- If cutting 200 Hz feels like you're removing "G3", you are
- Helps understand harmonic relationships
- Useful for musical EQ decisions

---

## Harmonic Series

### Fundamental Relationships

```
Fundamental: 100 Hz
2nd Harmonic: 200 Hz (octave)
3rd Harmonic: 300 Hz (octave + fifth)
4th Harmonic: 400 Hz (2 octaves)
5th Harmonic: 500 Hz
6th Harmonic: 600 Hz
...
```

**Why it matters:**
- Cutting 200 Hz affects the 2nd harmonic of 100 Hz sounds
- Boosting 3 kHz on vocals (fundamental ~200 Hz) enhances upper harmonics
- Understanding harmonics helps predict EQ side effects

---

## Octave Relationships

### Full Spectrum in Octaves

```
20 Hz    - Octave 0
40 Hz    - Octave 1
80 Hz    - Octave 2
160 Hz   - Octave 3
320 Hz   - Octave 4
640 Hz   - Octave 5
1280 Hz  - Octave 6
2560 Hz  - Octave 7
5120 Hz  - Octave 8
10240 Hz - Octave 9
20480 Hz - Octave 10
```

**Why it matters:**
- Doubling frequency = up one octave
- Halving frequency = down one octave
- EQ bandwidths often expressed in octaves

---

## Bandwidth Visual Guide

### How Bandwidth Affects Range

```
Center: 1000 Hz

Wide (20% BW, ~2 octaves):
           [━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━]
         250 Hz                              4000 Hz

Medium (50% BW, ~1 octave):
                    [━━━━━━━━━━━━━━━]
                 500 Hz           2000 Hz

Narrow (75% BW, ~0.5 octave):
                        [━━━━━]
                     800 Hz 1250 Hz
```

**Remember:** In FL Studio, lower % = wider range (inverted scale)

---

## Problem Frequency Quick Reference

### Common Issues by Frequency

```
Below 40 Hz    - Rumble, remove with HPF
60-80 Hz       - Kick/bass conflict zone
80-120 Hz      - Boom/mud if excessive
140-180 Hz     - Warmth or thickness
200-300 Hz     - #1 mud zone (cut often)
300-500 Hz     - Boxiness, cardboard sound
600-900 Hz     - Nasal, honky qualities
1-2 kHz        - Can sound "horn-like" if boosted
2-4 kHz        - Presence (good) or harshness (bad)
4-6 kHz        - Harshness/sibilance zone
6-8 kHz        - Sharpness/fatigue
8-12 kHz       - Air and breath
12-16 kHz      - Ultra-high sparkle
Above 16 kHz   - Usually filtered out
```

---

## Perceptual Regions

### How We Hear Different Ranges

**Below 100 Hz:** Physical sensation, "feel" bass
**100-500 Hz:** Warmth and body, but prone to muddiness
**500-2000 Hz:** Core tone and character
**2000-5000 Hz:** Most sensitive hearing range, intelligibility
**5000-10000 Hz:** Detail and articulation
**10000-20000 Hz:** Air and space, or noise

**Fletcher-Munson effect:** We're most sensitive to 2-5 kHz, less sensitive to very low and very high frequencies, especially at low volumes.

---

## Genre-Specific Emphasis

### Where Different Genres Focus

**Hip-Hop/EDM:**
- Heavy sub-bass (30-60 Hz)
- Moderate low-mids (cut 200-300 Hz)
- Aggressive air (boost 10-14 kHz)

**Rock/Metal:**
- Less sub-bass (HPF @ 60-80 Hz)
- Heavy midrange (400-2000 Hz)
- Moderate high end

**Pop:**
- Clean low end (HPF @ 80-100 Hz)
- Presence boost (2-4 kHz)
- Lots of air (10-14 kHz)

**Jazz/Classical:**
- Natural low end (minimal filtering)
- Balanced midrange
- Subtle high end

---

## Visual Frequency Scale

### Linear vs Logarithmic

**Linear (equal spacing):**
```
0 Hz    5k Hz   10k Hz  15k Hz  20k Hz
├───────┼───────┼───────┼───────┤
```

**Logarithmic (how we hear):**
```
20 Hz   100 Hz  1k Hz   10k Hz  20k Hz
├──┼──────┼──────┼───────┼──┤
```

Most EQ displays use logarithmic because that's closer to how we perceive frequency.

---

## Next Steps

- See `instrument-frequency-ranges.md` for where instruments sit
- See `band-overlap-analysis.md` for how the 7 bands interact
- See `../terminology-glossary/frequency-zones.md` for detailed band descriptions
