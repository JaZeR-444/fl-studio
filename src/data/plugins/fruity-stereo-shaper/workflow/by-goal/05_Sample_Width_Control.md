# Sample Width Control - Perfect Stereo for Loops

## Goal
Adjust stereo width of samples and loops to fit perfectly in your mix - widen narrow samples or tighten overly-wide ones.

## When to Use
- Vinyl samples (often narrow)
- YouTube rips (varying width)
- Purchased loops (unknown stereo imaging)
- Sample packs (inconsistent width)
- Stems processing
- Remix preparation

## The Sample Width Problem

**Too Narrow:** Sounds mono and boring
**Too Wide:** Doesn't gel with mix, phase issues
**Inconsistent:** Different samples clash

**Solution:** Surgical width control per sample

## Analyzing Sample Width

### Visual Check (Wave Candy)
1. Load sample into FL
2. Add Wave Candy on track
3. Switch to Stereo mode
4. Observe L/R separation

**Narrow Sample:** L and R channels look similar
**Wide Sample:** L and R channels very different
**Mono Sample:** L and R channels identical

### Listening Check
1. Solo the sample
2. Press mono button on mixer
3. If sound doesn't change = mono/narrow
4. If sound changes dramatically = wide

### Phase Check (Fruity Limiter)
1. Add Fruity Limiter to sample track
2. Enable correlation meter
3. +1.0 = Perfectly in-phase (mono)
4. 0.0 = Maximum stereo width
5. -1.0 = Phase-inverted (warning!)

**Target:** +0.3 to +0.7 for most hip-hop samples

## Width Adjustment Recipes

### Widening Narrow Samples

**Problem:** Vinyl sample sounds too centered

**Solution 1: Subtle Haas Effect**
```
L→L: 1.0    L→R: 0.0
R→L: 0.0    R→R: 1.0
Delay: 8-12ms
Phase: Normal
```
**Result:** Natural stereo width via Haas effect

**Solution 2: Matrix Widening**
```
L→L: 1.0    L→R: -0.2
R→L: -0.2   R→R: 1.0
Delay: 0ms
Phase: Normal
```
**Result:** Phase-based width enhancement

**Solution 3: Maximum Width**
```
L→L: 1.0    L→R: -0.35
R→L: -0.35  R→R: 1.0
Delay: 10ms
Phase Invert: Left
```
**Result:** Aggressive stereo spread
**Warning:** Check mono compatibility!

### Narrowing Wide Samples

**Problem:** Sample too wide, doesn't sit in mix

**Solution 1: Moderate Narrowing (Recommended)**
```
L→L: 0.75   L→R: 0.25
R→L: 0.25   R→R: 0.75
Delay: 0ms
```
**Result:** 75% stereo width (controlled)

**Solution 2: Lo-Fi Narrowing**
```
L→L: 0.65   L→R: 0.35
R→L: 0.35   R→R: 0.65
Delay: 0ms
```
**Result:** Vintage narrow width

**Solution 3: Collapse to Mono**
```
L→L: 0.5    L→R: 0.5
R→L: 0.5    R→R: 0.5
Delay: 0ms
```
**Result:** Perfect mono (use for bass/sub loops)

### Fixing Poorly-Recorded Samples

**Problem:** Sample has phase issues

**Solution: Phase Correction**
1. Identify inverted channel (check correlation)
2. Invert problematic channel
3. Verify correlation improves
4. Adjust width as needed

**Matrix if Right channel is inverted:**
```
L→L: 1.0    L→R: 0.0
R→L: 0.0    R→R: -1.0 (invert right)
Delay: 0ms
```

## Genre-Specific Sample Width

### Moody/Dark Hip-Hop

**Atmospheric Pads:**
```
Width: 90-100% (wide for space)
L→L: 1.0, L→R: -0.1
```

**Vocal Samples:**
```
Width: 60-70% (intimate)
L→L: 0.65, L→R: 0.35
```

**Bass Loops:**
```
Width: 50% (mono)
L→L: 0.5, L→R: 0.5
```

### Upbeat/Club Hip-Hop

**Synth Loops:**
```
Width: 100-110% (energetic)
L→L: 1.0, L→R: -0.15, Delay: 8ms
```

**Drum Loops:**
```
Width: 75-85% (controlled)
L→L: 0.8, L→R: 0.2
```

**Hook Samples:**
```
Width: 90% (prominent but safe)
L→L: 0.9, L→R: 0.1
```

### Lo-Fi/Chill Hip-Hop

**Jazz Samples:**
```
Width: 70% (authentic vintage)
L→L: 0.7, L→R: 0.3
```

**Vinyl Loops:**
```
Width: 65-75% (cassette vibe)
L→L: 0.7, L→R: 0.3
```

**All Elements:**
```
Consistent narrow width across mix
```

### Trap/Electronic Hip-Hop

**Synth Chords:**
```
Width: 110% (massive)
L→L: 1.0, L→R: -0.25, Delay: 10ms
```

**Vocal Chops:**
```
Width: 85% (present but controlled)
L→L: 0.85, L→R: 0.15
```

**808 Samples:**
```
Width: 50% (always mono)
L→L: 0.5, L→R: 0.5
```

### Boom Bap / Golden Era

**Jazz/Soul Samples:**
```
Width: 75% (authentic 90s)
L→L: 0.75, L→R: 0.25
```

**Drum Breaks:**
```
Width: 70% (vintage stereo)
L→L: 0.7, L→R: 0.3
```

**Scratches:**
```
Width: 60-70% (centered)
L→L: 0.65, L→R: 0.35
```

## Workflow: Processing Multiple Samples

### Step 1: Organize by Desired Width
- **Wide:** Atmospheric, pads, effects (90-110%)
- **Medium:** Melodies, chords, leads (70-90%)
- **Narrow:** Vocals, bass (50-70%)
- **Mono:** Bass, kick, 808 (50%)

### Step 2: Create Template Presets
Save Stereo Shaper presets for each width category:
- "Sample Wide 100%"
- "Sample Medium 80%"
- "Sample Narrow 70%"
- "Sample Mono 50%"

### Step 3: Apply Systematically
1. Load sample
2. Check current width (Wave Candy)
3. Select appropriate preset
4. Fine-tune if needed
5. Verify mono compatibility

### Step 4: Consistency Check
- Similar elements = similar width
- Keeps mix cohesive
- Prevents width chaos

## Advanced Techniques

### Multiband Sample Width

**Different width per frequency:**

```
SAMPLE → FREQ SPLIT
    ├── LOW (<150Hz) → 50% (mono bass)
    ├── MID (150-5kHz) → 75% (body)
    └── HIGH (>5kHz) → 100% (air/width)
         ↓
    SUM → Focused Bass + Wide Highs
```

**Use for:** Samples with bass + melodic content

### Dynamic Width Automation

**Verse:** Narrow sample (75%)
**Chorus:** Widen sample (95%)

**Automate:** Matrix sliders for dynamic interest

### Stereo Enhancement Chain

```
SAMPLE INPUT
    ↓
1. Stereo Shaper (Width Adjustment)
    ↓
2. EQ (Tone Shaping)
    ↓
3. Compression (Dynamics)
    ↓
4. Stereo Shaper (Final Width Polish)
    ↓
OUTPUT
```

**Two Stereo Shapers allow different width before/after processing**

## Common Sample Issues & Fixes

### Issue 1: Mono Sample from YouTube
**Problem:** Sample has no stereo width
**Fix:** Haas effect widening (10ms delay)

### Issue 2: Overly-Wide Sample Pack Loop
**Problem:** Too wide, doesn't fit mix
**Fix:** Narrow to 75% width

### Issue 3: Phase-Inverted Stereo Sample
**Problem:** Sounds weak in mono
**Fix:** Invert one channel, verify correlation

### Issue 4: Inconsistent Sample Pack
**Problem:** Each loop has different width
**Fix:** Normalize all to 80% width for consistency

### Issue 5: Bass-Heavy Sample Too Wide
**Problem:** Bass loses power in mono
**Fix:** Multiband - mono below 150Hz, width above

## Pro Tips

1. **Analyze first:** Check current width before adjusting
2. **Consistency matters:** Similar samples = similar width
3. **Bass always mono:** No exceptions below 150Hz
4. **Check mono:** Every sample, every time
5. **Save presets:** Standard widths for quick recall
6. **Multiband for bass:** Different width per frequency
7. **Automate for dynamics:** Width changes add interest
8. **Reference originals:** Compare to source material
9. **Less is more:** Subtle adjustments often best
10. **Trust correlation meter:** Phase meter doesn't lie

## Width Decision Flowchart

```
Is sample mono? 
├─ Yes → Widen with Haas (10ms delay)
└─ No → Continue

Does sample have bass (<150Hz)?
├─ Yes → Multiband: Mono low, adjust high
└─ No → Continue

Is sample too wide?
├─ Yes → Narrow to 75-80%
└─ No → Continue

Does sample fit mix?
├─ Yes → Done
└─ No → Adjust width to match other elements
```

## Quick Reference by Sample Type

### Bass/Sub Loops
```
Width: 50% (Mono)
L→L: 0.5, L→R: 0.5
```

### Drum Loops
```
Width: 70-80%
L→L: 0.75, L→R: 0.25
```

### Melodic Loops
```
Width: 80-90%
L→L: 0.85, L→R: 0.15
```

### Vocal Chops
```
Width: 65-75%
L→L: 0.7, L→R: 0.3
```

### Atmospheric Pads
```
Width: 95-110%
L→L: 1.0, L→R: -0.15
```

### Synth Chords
```
Width: 85-95%
L→L: 0.9, L→R: 0.1
```

## Before/After Examples

### BEFORE: Narrow Vinyl Sample
- Width: 60% (too narrow)
- Sounds mono and boring
- Lacks space and depth

### AFTER: Widened to 85%
- Width: 85% (enhanced)
- Stereo interest
- Fits modern mix
- Still mono-compatible

---

### BEFORE: Overly-Wide Synth Loop
- Width: 120% (phase issues)
- Weak in mono
- Doesn't sit in mix

### AFTER: Narrowed to 80%
- Width: 80% (controlled)
- Mono-safe
- Gels with other elements
- Professional sound

## Integration Tips

**Works Great With:**
- **Wave Candy:** Visual stereo analysis
- **Fruity Limiter:** Phase correlation checking
- **Patcher:** Multiband width routing
- **Parametric EQ 2:** Tone shaping
- **Frequency Splitter:** Separate bass from mids/highs

**Workflow:**
1. Analyze (Wave Candy + Correlation)
2. Adjust Width (Stereo Shaper)
3. Check Mono (Mixer button)
4. Fine-tune (A/B comparison)
5. Move on (don't overthink)

## Success Checklist

- [ ] Analyzed original width
- [ ] Adjusted to appropriate width for element type
- [ ] Checked mono compatibility
- [ ] Consistent with similar samples in mix
- [ ] Bass frequencies mono (if present)
- [ ] Phase correlation acceptable
- [ ] Sounds good in stereo AND mono
- [ ] Fits cohesively in full mix

**Remember: Right width for the right element = professional mixes.**
