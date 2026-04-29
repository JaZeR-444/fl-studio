# Guitar/Sample Width - Stereo Enhancement for Melodic Elements

## Goal
Apply perfect stereo width to guitar loops, melodic samples, and instrumental elements to create space without phase issues.

## When to Use
- Guitar loops (funk, R&B, soul)
- Piano/Rhodes samples
- String sections
- Melodic synth loops
- Horn sections
- Vocal chops (melodic)

## The Melodic Width Challenge

**Too Narrow:** Sounds flat and boring
**Too Wide:** Phase issues, doesn't sit in mix
**Just Right:** Spacious yet focused

## Quick Settings by Element

### Funk Guitar Loops
```
PRESET: "Funky Guitar Spread"
L→L: 1.0    L→R: -0.25
R→L: -0.25  R→R: 1.0
Delay: 10ms
Phase Invert: Right channel
```
**Character:** Wide, groovy, spacious
**Genre:** Funk hip-hop, G-funk, upbeat tracks
**Mono Safe:** ⚠️ Check carefully

### R&B Piano/Rhodes
```
L→L: 0.85   L→R: 0.15
R→L: 0.15   R→R: 0.85
Delay: 0ms
Phase: Normal
```
**Character:** Controlled width, musical
**Genre:** Melodic/R&B hip-hop
**Mono Safe:** ✅ Yes

### Soul Sample Strings
```
L→L: 0.9    L→R: 0.1
R→L: 0.1    R→R: 0.9
Delay: 5ms (subtle Haas)
Phase: Normal
```
**Character:** Lush, vintage, controlled
**Genre:** Sample-based hip-hop, boom bap
**Mono Safe:** ✅ Yes

### Melodic Vocal Chops
```
L→L: 0.8    L→R: 0.2
R→L: 0.2    R→R: 0.8
Delay: 0ms
Phase: Normal
```
**Character:** Present yet spacious
**Genre:** Melodic hip-hop, trap
**Mono Safe:** ✅ Yes

### Horn Section Samples
```
L→L: 0.9    L→R: 0.1
R→L: 0.1    R→R: 0.9
Delay: 6ms
Phase: Normal
```
**Character:** Natural stereo field
**Genre:** Jazz-influenced hip-hop, boom bap
**Mono Safe:** ✅ Yes

## Genre-Specific Width Approaches

### Moody/Dark Hip-Hop

**Melodic Elements Strategy:**
- **Lead melody:** 70-75% width (intimate)
- **Background chords:** 85-90% width (atmosphere)
- **Vocal chops:** 65-70% width (centered emotion)

**Settings:**
```
Lead: L→L: 0.7, L→R: 0.3
Chords: L→L: 0.85, L→R: 0.15
Chops: L→L: 0.65, L→R: 0.35
```

### Upbeat/Club Hip-Hop

**Melodic Elements Strategy:**
- **Hook melody:** 90-95% width (impact)
- **Energy chords:** 95-100% width (fill space)
- **Rhythmic elements:** 85-90% width (groove)

**Settings:**
```
Hook: L→L: 0.9, L→R: 0.1, Delay: 8ms
Chords: L→L: 1.0, L→R: -0.1, Delay: 6ms
Rhythm: L→L: 0.85, L→R: 0.15
```

### Lo-Fi/Chill Hip-Hop

**Melodic Elements Strategy:**
- **All elements:** 65-75% width (vintage consistency)
- **Jazz samples:** 70% (authentic vinyl width)
- **Keys/synths:** 70% (cohesive narrow field)

**Settings:**
```
Universal: L→L: 0.7, L→R: 0.3
Vintage Vibe, Warm, Intimate
```

### Trap/Electronic Hip-Hop

**Melodic Elements Strategy:**
- **Lead synth:** 85-90% width (present)
- **Pad chords:** 100-110% width (massive)
- **Plucks:** 80-85% width (controlled energy)

**Settings:**
```
Lead: L→L: 0.9, L→R: 0.1
Pads: L→L: 1.0, L→R: -0.2, Delay: 10ms
Plucks: L→L: 0.85, L→R: 0.15
```

### Melodic/R&B Hip-Hop

**Melodic Elements Strategy:**
- **Main chords:** 85-90% width (lush)
- **Lead lines:** 80-85% width (focused)
- **Background textures:** 95-100% width (space)

**Settings:**
```
Chords: L→L: 0.88, L→R: 0.12
Lead: L→L: 0.83, L→R: 0.17
Texture: L→L: 0.95, L→R: 0.05, Delay: 5ms
```

### Boom Bap / Golden Era

**Melodic Elements Strategy:**
- **Jazz samples:** 70-75% width (authentic 90s)
- **Piano loops:** 70% width (vintage stereo)
- **Soul chops:** 75% width (classic sound)

**Settings:**
```
Universal 90s: L→L: 0.72, L→R: 0.28
Classic Hip-Hop Width
```

## Advanced Guitar Processing

### Funk Guitar Enhancement Chain

```
GUITAR SAMPLE
    ↓
1. EQ (Clean up low-end)
   - High-pass: 120Hz
   - Reduce boxiness: -2dB @ 300Hz
   - Presence: +2dB @ 3kHz
    ↓
2. STEREO SHAPER (Width)
   - "Funky Guitar Spread" preset
   - L→L: 1.0, L→R: -0.25
   - Delay: 10ms
    ↓
3. Compression (Control dynamics)
   - Ratio: 3:1
   - Attack: 20ms (preserve pick attack)
   - Release: 100ms
    ↓
4. Reverb (Space - SUBTLE)
   - Small plate
   - Mix: 10%
   - Pre-delay: 15ms
    ↓
OUTPUT: Funky, Wide, Controlled Guitar
```

### Multiband Guitar Width

**For samples with bass + melody:**

```
GUITAR → FREQ SPLIT
    ├── LOW (<250Hz) → 60% width (tight)
    ├── MID (250-3kHz) → 85% width (body)
    └── HIGH (>3kHz) → 100% width (air)
         ↓
    SUM → Focused Low + Wide High
```

## Piano/Keys Width Strategies

### Classic Piano Sample
```
Width: 85% (natural piano width)
L→L: 0.85, L→R: 0.15
Processing: Minimal, let natural stereo shine
```

### Electric Piano (Rhodes/Wurlitzer)
```
Width: 80% (vintage keyboard width)
L→L: 0.8, L→R: 0.2
Processing: Tape saturation, subtle chorus
```

### Synth Keys/Chords
```
Width: 90% (modern synth width)
L→L: 0.9, L→R: 0.1
Processing: Bright EQ, reverb
```

## String Section Width

### Lush String Pads
```
Width: 95% (orchestral spread)
L→L: 0.95, L→R: 0.05, Delay: 5ms
Character: Wide, cinematic, atmospheric
```

### Tight String Stabs
```
Width: 75% (punchy and focused)
L→L: 0.75, L→R: 0.25
Character: Impactful, rhythmic
```

## Automation for Dynamic Width

### Verse to Chorus Expansion

```
VERSE:
- Guitar: 75% width (laid back)
- Keys: 70% width (subtle)

PRE-CHORUS:
- Guitar: 85% width (building)
- Keys: 80% width (opening up)

CHORUS:
- Guitar: 95% width (full impact)
- Keys: 90% width (lush)

Automate matrix sliders for smooth transition
```

### Call-and-Response Width

```
MAIN PHRASE: 80% width (standard)
RESPONSE/FILL: 100% width (stands out)

Creates dynamic interest through width variation
```

## Layering for Depth

### Dual Guitar Layers

**Layer 1 (Center Focus):**
```
Width: 70% (body and focus)
Level: 0dB
Processing: Clean, punchy
```

**Layer 2 (Wide Air):**
```
Width: 110% (width and space)
Level: -6dB
Processing: High-passed at 1kHz, reverb
EQ: Bright, airy
```

**Combined:** Focused + spacious guitar tone

## Common Mistakes

### Mistake 1: Same Width for Everything
**Problem:** No depth or dimension
**Fix:** Vary width - leads wider, rhythm tighter

### Mistake 2: Too Wide for Bass-Heavy Samples
**Problem:** Low-end loses power
**Fix:** Multiband - narrow lows, widen highs

### Mistake 3: Phase Inversion on Melodic Elements
**Problem:** Disappears in mono
**Fix:** Avoid phase inversion, use delay/matrix only

### Mistake 4: Ignoring Genre Context
**Problem:** Wrong vibe for style
**Fix:** Lo-fi = narrow, Trap = wide, adjust accordingly

### Mistake 5: Over-Processing
**Problem:** Unnatural, washy sound
**Fix:** Subtle width adjustments, trust natural stereo

## Pro Tips

1. **Melodic = moderate width:** 80-90% sweet spot
2. **Bass instruments multiband:** Narrow low, wide high
3. **Layer for safety:** Focused + wide = dimension
4. **Automate for dynamics:** Verse narrow, chorus wide
5. **Genre dictates width:** Lo-fi narrow, trap wide
6. **Check mono always:** Melodic elements critical in mono
7. **Delay adds depth:** 5-10ms = natural width
8. **Avoid phase invert:** Unless necessary, risky for melodies
9. **EQ before width:** Shape tone first
10. **Trust your ears:** Meters help, but listen critically

## Quick Reference by Instrument

```
GUITAR:
Funk: 90-100% (wide groove)
R&B: 85-90% (controlled)
Acoustic: 80-85% (natural)

PIANO/KEYS:
Acoustic Piano: 85% (realistic)
Electric Piano: 80% (vintage)
Synth Keys: 90% (modern)

STRINGS:
Pads: 95% (lush)
Stabs: 75% (punchy)

HORNS:
Section: 90% (natural)
Solo: 75% (focused)

VOCAL CHOPS:
Melodic: 80% (present)
Rhythmic: 85% (groove)
```

## Before/After Examples

### BEFORE: Narrow Guitar Loop
- Width: 60% (too centered)
- Lacks space and groove
- Sounds flat

### AFTER: Optimized Width
- Width: 90% (funky spread)
- Groovy and spacious
- Fits mix perfectly

---

### BEFORE: Overly-Wide Piano
- Width: 120% (phase issues)
- Weak in mono
- Unstable imaging

### AFTER: Corrected Width
- Width: 85% (natural)
- Mono-compatible
- Stable and musical

## Success Checklist

- [ ] Analyzed original width
- [ ] Applied appropriate width for instrument type
- [ ] Checked mono compatibility
- [ ] Considered genre context
- [ ] Multiband if bass-heavy
- [ ] Automated for dynamics (if needed)
- [ ] Layered for depth (optional)
- [ ] EQ'd before widening
- [ ] Sounds natural and musical
- [ ] Fits cohesively in full mix

**Remember: Melodic elements need careful width control - too wide risks phase, too narrow lacks space. Find the sweet spot for your genre and instrument.**
