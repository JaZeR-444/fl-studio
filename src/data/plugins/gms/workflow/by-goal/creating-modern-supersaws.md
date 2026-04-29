# Workflow: Creating Modern Supersaws

Designing thick, professional supersaw leads for EDM and trance.

## Goal
Create the iconic "supersaw" sound - thick, bright, and shimmering leads that define modern electronic dance music.

[SRC: IL-MAN]

---

## The Supersaw Formula

### Step 1: Oscillator Configuration
**Waveform:** Sawtooth on all three oscillators

```
OSC 1: Sawtooth, Pitch 0, Fine 0
OSC 2: Sawtooth, Pitch 0, Fine +7 cents
OSC 3: Sawtooth, Pitch 0, Fine -7 cents
```

**Why this works:**
- Sawtooth contains all harmonics (brightest waveform)
- Fine detuning (±7 cents) creates natural beating
- Three oscillators = triple the voices

### Step 2: Unisono Settings
```
VOICES: 6-8 (or 10-12 for maximum impact)
STEREO: 70-80%
DETUNE: 50-60%
```

**Pro tip:** Start with 6 voices for writing, increase to 8-10 for final render.

### Step 3: Mix Balance
```
OSC 2 Mix: 100% (fully blended)
OSC 3 Mix: 60-80% (supporting layer)
NOISE: 0% (not needed for this sound)
```

### Step 4: Filter Setup
```
TYPE: LP (Low Pass)
CUTOFF: 80-90%
RES: 15-25%
KBD: 10-20% (optional tracking)
```

**Note:** Keep cutoff high for brightness, use resonance for character.

### Step 5: Envelope Shape
```
ATTACK: 0% (immediate)
DECAY: 20-30%
SUSTAIN: 90-95%
RELEASE: 30-40%
```

**For plucky supersaws:** Increase decay, lower sustain.

### Step 6: FX Chain
**Essential:**
1. **FLNG** - X: 40%, Y: 30% (thickening)
2. **RVRB** - X: 45%, Y: 25-35% (space)

**Optional:**
- **DIST** (light) - X: 15-25% for edge
- **ECHO** - Short delay for depth

---

## Genre Variations

### Trance Supersaw
- **Unisono:** 10-12 voices
- **Add:** TRNC gate effect
- **Filter:** Slight envelope modulation
- **FX:** Long reverb tail

### Future Bass Lead
- **Filter:** EG1 → CUTOFF with medium amount
- **Result:** "Talking" filter effect
- **LFO:** Subtle pitch vibrato
- **FX:** Heavy sidechain (external)

### Big Room Lead
- **Unisono:** 8 voices max
- **Filter:** Brighter (90%+ cutoff)
- **FX:** Minimal (just reverb)
- **Note:** Tighter for big room energy

---

## Common Mistakes

### 1. Too Many Voices
**Problem:** 16 voices = muddy, phase issues
**Fix:** 6-8 voices is the sweet spot

### 2. No Stereo Check
**Problem:** Sounds great stereo, weak mono
**Fix:** Test with FL Studio mono button, reduce stereo if needed

### 3. Too Much Detune
**Problem:** Out of tune, unfocused
**Fix:** Keep detune under 60% for musical results

### 4. Wrong Waveform
**Problem:** Using square or triangle
**Fix:** Always sawtooth for supersaws

---

## CPU Optimization

### Writing Phase
- Unisono: 4-6 voices
- FX: Basic (FLNG + RVRB only)

### Rendering Phase
- Unisono: 8-10 voices
- FX: Full chain
- Or: Freeze channel (Alt+F)

---

## Advanced Techniques

### Layered Supersaw
1. **Layer 1:** High unisono, narrow (for body)
2. **Layer 2:** Low unisono, wide (for shimmer)
3. **Mix:** Balance for perfect width

### Filter Envelope Supersaw
```
EG1 → CUTOFF
ATK: 0%
DEC: 40%
AMNT: +30%
Result: Opening filter on each note
```

### Stereo Movement
```
LFO1 → PAN
RATE: Slow (10-15%)
AMNT: 80%
Result: Gentle stereo wandering
```

---

## Quick Checklist

- [ ] All 3 oscillators = sawtooth
- [ ] OSC2 +7 cents, OSC3 -7 cents
- [ ] Unisono 6-8 voices
- [ ] Stereo 70-80%
- [ ] Detune 50-60%
- [ ] Filter LP, cutoff 80%+
- [ ] FLNG + RVRB enabled
- [ ] Test in mono
- [ ] CPU optimized (freeze if needed)

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm
