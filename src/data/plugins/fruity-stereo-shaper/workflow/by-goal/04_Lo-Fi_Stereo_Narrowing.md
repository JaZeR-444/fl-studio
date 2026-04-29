# Lo-Fi Stereo Narrowing - Vintage Width Control

## Goal
Create authentic lo-fi/vintage stereo imaging by narrowing the stereo field to emulate old recording equipment, cassettes, and vinyl.

## When to Use
- Lo-fi hip-hop beats
- Chill hop / study beats
- Vintage sample processing
- Nostalgic vocal effects
- Bedroom producer aesthetic
- Retro boom bap

## The Lo-Fi Philosophy

**Modern = wide and pristine**
**Lo-Fi = narrow and warm**

Narrowing the stereo field creates:
- Intimate listening experience
- Vintage recording vibe
- "Recorded in a bedroom" aesthetic
- Cassette/vinyl character
- Focus on musicality over width

## Quick Version (1 Minute)

1. Load sample/instrument on mixer track
2. Add Fruity Stereo Shaper
3. Use "Lo-Fi Mono Collapse" preset
4. Adjust to taste (70-85% width)
5. Add tape saturation for complete vibe

**Settings:**
```
L→L: 0.7    L→R: 0.3
R→L: 0.3    R→R: 0.7
Delay: 0ms
Phase: Normal
```

**Result:** Vintage narrow stereo field

## Understanding Stereo Width Percentage

### Width Calculation
**100% Stereo (Modern):**
```
L→L: 1.0    L→R: 0.0
R→L: 0.0    R→R: 1.0
```

**70% Stereo (Vintage):**
```
L→L: 0.7    L→R: 0.3
R→L: 0.3    R→R: 0.7
```

**50% Stereo (Mid-Point):**
```
L→L: 0.5    L→R: 0.5
R→L: 0.5    R→R: 0.5
```

**Formula:** Width % = (L→L value) × 100

## Lo-Fi Width Recipes by Element

### Full Mix / Master Bus
**Width: 75-80%**
```
L→L: 0.75-0.80
L→R: 0.25-0.20
R→L: 0.25-0.20
R→R: 0.75-0.80
```
**Character:** Overall vintage vibe, cohesive narrow field
**Use:** Final master bus processing

### Vinyl Samples
**Width: 70-75%**
```
L→L: 0.70-0.75
L→R: 0.30-0.25
R→L: 0.30-0.25
R→R: 0.70-0.75
```
**Character:** Authentic vinyl stereo width
**Use:** Sampled loops, jazz/soul samples

### Cassette Emulation
**Width: 65-70%**
```
L→L: 0.65-0.70
L→R: 0.35-0.30
R→L: 0.35-0.30
R→R: 0.65-0.70
```
**Character:** Worn cassette tape, unstable width
**Use:** Vocals, melodic loops, nostalgic elements
**Bonus:** Add slight flutter/wow modulation

### Bedroom Recording
**Width: 60-70%**
```
L→L: 0.60-0.70
L→R: 0.40-0.30
R→L: 0.40-0.30
R→R: 0.60-0.70
```
**Character:** Intimate, DIY recording aesthetic
**Use:** Vocals, guitar, live instruments

### AM Radio
**Width: 50-60% (Near Mono)**
```
L→L: 0.50-0.60
L→R: 0.50-0.40
R→L: 0.50-0.40
R→R: 0.50-0.60
```
**Character:** Extremely narrow, radio broadcast vibe
**Use:** Special effects, dramatic narrowing

## Complete Lo-Fi Processing Chain

### Chain Order Matters

```
SAMPLE INPUT
    ↓
1. EQ (Vintage Character)
   - High-pass: 60Hz
   - Reduce mids: -2dB @ 400Hz (boxiness)
   - Boost warmth: +2dB @ 200Hz
   - Roll-off highs: -3dB shelf @ 8kHz
    ↓
2. STEREO SHAPER (Width Reduction)
   - L→L: 0.7, L→R: 0.3
   - Creates vintage narrow field
    ↓
3. Tape Saturation
   - Effector (Tape mode) or Blood Overdrive
   - Drive: 15-25%
   - Adds warmth and harmonics
    ↓
4. Bit Crusher (Optional)
   - 12-bit or 14-bit reduction
   - Adds digital degradation
    ↓
5. Vinyl Noise (Optional)
   - Layer subtle crackle/hiss
   - Mix: 5-10%
    ↓
OUTPUT: Authentic Lo-Fi Character
```

## Genre-Specific Applications

### Lo-Fi Hip-Hop / Chill Hop

**Full Mix Settings:**
- Width: 70-75%
- EQ: Warm and rolled-off
- Saturation: Moderate tape warmth
- Extras: Vinyl crackle, rain ambience

**Vocal Settings:**
- Width: 65% (intimate)
- Processing: Tape saturation + phone filter
- Reverb: Small room, dark

**Drums:**
- Kick: Mono (punchy)
- Snare: 60% width (vintage)
- Hi-hats: 70% width (NOT wide like trap)

**Result:** Cozy, nostalgic, study-friendly

### Boom Bap / 90s Hip-Hop

**Sample Settings:**
- Width: 70-75% (authentic 90s stereo)
- Processing: SP-1200 style saturation
- Frequency: Slight lo-fi filtering

**Drums:**
- Kick: Mono
- Snare: 65-70% width
- Hi-hats: 75% width
- All drums: Slight saturation

**Result:** Classic hip-hop authenticity

### Bedroom Pop / Indie

**Vocals:**
- Width: 60-65% (intimate bedroom recording)
- Processing: Preamp emulation, tape saturation
- Space: Small room reverb

**Guitars:**
- Width: 70% (vintage stereo mic technique)
- Processing: Tube amp simulation

**Result:** DIY indie aesthetic

## Advanced Techniques

### Dynamic Width Modulation

**Simulate Cassette Wobble:**
1. Automate matrix sliders slightly (±5%)
2. Use slow LFO (0.1-0.5 Hz)
3. Creates unstable vintage width

**Example Automation:**
```
L→L: 0.70 → 0.68 → 0.72 → 0.70 (cyclical)
R→R: 0.70 → 0.68 → 0.72 → 0.70 (cyclical)
```

**Result:** Realistic cassette playback instability

### Multiband Lo-Fi Width

**Different width per frequency range:**

```
SAMPLE → FREQ SPLIT
    ├── LOW (<200Hz) → 50% width (tight bass)
    ├── MID (200-5kHz) → 70% width (vintage body)
    └── HIGH (>5kHz) → 60% width (rolled-off air)
         ↓
    SUM → Lo-Fi Character
```

**Result:** Authentic frequency-dependent narrowing

### Stereo to Mono Fade

**For dramatic effect:**
1. Start: 75% width (stereo)
2. Transition: Gradually reduce to 50% (mono)
3. End: 50% width (near-mono)

**Use for:** Emotional moments, breakdowns, emphasis

## Common Lo-Fi Mistakes

### Mistake 1: Too Narrow (Below 50%)
**Problem:** Sounds unnaturally mono and lifeless
**Fix:** Stay above 60% width for musical results

### Mistake 2: Narrowing Everything
**Problem:** Mix becomes muddy and undefined
**Fix:** Only narrow specific elements, keep some width

### Mistake 3: Forgetting EQ
**Problem:** Narrow but still bright/modern
**Fix:** Roll off highs (8kHz+) for vintage character

### Mistake 4: No Saturation
**Problem:** Narrow but sterile
**Fix:** Add tape saturation for warmth

### Mistake 5: Inconsistent Width
**Problem:** Some elements wide, others narrow (jarring)
**Fix:** Apply consistent width philosophy to whole mix

## Pro Tips

1. **70% is the sweet spot:** Most versatile lo-fi width
2. **Narrow + warm:** Combine width reduction with saturation
3. **EQ first:** Shape tone before narrowing
4. **Bass to mono:** Even in lo-fi, bass should be mono
5. **Master bus narrow:** Apply to full mix for cohesion
6. **Automate for movement:** Slight width variation = realism
7. **Check in stereo:** Still needs to sound good, just narrow
8. **Layer noise subtly:** Vinyl/tape noise enhances vibe
9. **Trust the aesthetic:** Narrow is the feature, not bug
10. **Reference classics:** Listen to actual lo-fi/vintage records

## Width Reference Guide

```
100% = Modern/Wide (not lo-fi)
85%  = Slightly Vintage
75%  = Classic Lo-Fi Sweet Spot ⭐
70%  = Authentic Vintage
65%  = Cassette/Bedroom
60%  = Very Narrow
50%  = Near-Mono (use sparingly)
<50% = Too narrow (avoid)
```

## Visual Width Comparison

### Modern Mix (100% Width)
```
L ████████████████████░░░░░░ (wide)
R ░░░░░░████████████████████ (wide)
```

### Lo-Fi Mix (70% Width)
```
L ████████████░░░░░░░░░░ (narrower)
R ░░░░░░░░░░████████████ (narrower)
```

### Near-Mono (50% Width)
```
L ██████████░░░░░░░░░░░░ (very narrow)
R ░░░░░░░░░░░░██████████ (very narrow)
```

## Before/After Comparison

**BEFORE (Modern/Wide):**
- Crisp and clear
- Wide stereo field
- Pristine and clean
- Studio quality

**AFTER (Lo-Fi Narrow):**
- Warm and intimate
- Narrow vintage field
- Character and vibe
- Cassette/vinyl quality

## Complete Lo-Fi Preset Chain

### "Ultimate Lo-Fi Vibe"

**Stereo Shaper Settings:**
```
Width: 70%
L→L: 0.7    L→R: 0.3
R→L: 0.3    R→R: 0.7
```

**Chain:**
```
→ EQ (roll-off 8kHz+)
→ STEREO SHAPER (70% width)
→ Effector (Tape saturation)
→ Bit crusher (12-bit)
→ Vintage reverb (small room)
→ Vinyl noise layer (5% mix)
```

**Result:** Complete lo-fi transformation

## Integration with Other Effects

**Works Great With:**
- **Effector:** Tape/vinyl saturation modes
- **RC-20 (if available):** Vintage degradation
- **Parametric EQ 2:** Tone shaping
- **Fruity Reeverb 2:** Small room ambience
- **Wave Candy:** Visualize stereo field
- **Gross Beat:** Time manipulation

**Avoid:**
- Stereo wideners (contradicts lo-fi aesthetic)
- Bright/modern reverbs
- Stereo delays (unless very subtle)
- Over-compression (kills vibe)

## Automation Ideas

### Verse to Chorus Width
```
Verse: 65% width (intimate)
Pre-Chorus: 70% width (opening)
Chorus: 75% width (fuller)
```

### Breakdown to Drop
```
Breakdown: 60% width (narrow/focused)
Build-Up: Gradually to 75%
Drop: 75% width (maximum lo-fi width)
```

## Success Checklist

- [ ] Width between 60-75% for lo-fi vibe
- [ ] EQ'd with rolled-off highs
- [ ] Tape saturation applied
- [ ] Consistent width across elements
- [ ] Bass frequencies mono
- [ ] Sounds intimate and warm
- [ ] Authentic vintage character
- [ ] Mono compatible (still sounds good)

## Remember

**Lo-Fi = Less Width, More Warmth**
**Narrow stereo = intimate vibe**
**70% width is the sweet spot**
**Combine with saturation for best results**
**Trust the aesthetic - embrace the narrowness**

## Final Thought

In modern production, everyone chases width. In lo-fi, narrowness is the signature. Stereo Shaper lets you control exactly how narrow, creating that authentic vintage bedroom recording vibe that defines the genre.
