# Workflow: Present Midrange

Achieving forward, present sounds that speak clearly in a mix.

## Goal
Create sounds with strong midrange presence (1-5kHz) that cut through dense mixes without harshness.

[SRC: IL-MAN]

---

## The Midrange Formula

### Why Midrange Matters
- **1-3kHz:** Speech intelligibility range
- **2-4kHz:** Ear's most sensitive region
- **3-5kHz:** Presence and definition

### Strategy
Balance harmonic content in the "presence zone" while controlling harshness.

---

## Step-by-Step Recipe

### Step 1: Waveform with Mids
```
OSC 1: Sawtooth (harmonics include mids)
OSC 2: Square (odd harmonics = focused)
OSC 3: Triangle (soft mids)
```

### Step 2: Moderate Unisono
```
VOICES: 4-6
STEREO: 50-65%
DETUNE: 40-50%
```

**Balance:** Present but not overwhelming

### Step 3: Strategic Filtering
```
TYPE: LP
CUTOFF: 70-80%
RES: 20-30%
```

**Key:** Cutoff at 70-80% removes extreme highs but keeps presence

### Step 4: Filter Envelope
```
EG1 → CUTOFF
ATK: 0-5%
DEC: 20-30%
AMNT: +25 to +40%
```

**Result:** Attack bite brings sound forward

### Step 5: Controlled Envelope
```
LEVEL EG:
  ATTACK: 0-10%
  DECAY: 25-35%
  SUSTAIN: 85-95%
  RELEASE: 25-35%
```

### Step 6: Saturation for Presence
```
DIST: X: 15-25%, Y: 70%
```

**Why:** Harmonic saturation emphasizes midrange

### Step 7: Minimal Wet FX
```
RVRB: Keep under 30% wet
ECHO: Short, subtle
```

**Avoid:** Long reverb tails that push sound back

### Step 8: EQ Focus
```
5-Band EQ:
  Band 3 (1.5kHz): +2 to +3 dB
  Band 4 (8kHz): Slight cut if harsh
```

---

## Midrange Applications

### Lead Vocal Synth
- Follow recipe exactly
- Moderate unisono
- Clear filter envelope

### Guitar-Style Lead
- Sawtooth waves
- Medium resonance
- Light distortion

### Brass Synth
- Square + sawtooth
- Filter envelope
- Bright cutoff

### String Pad
- Sawtooth + triangle
- 6 voices
- Slow filter envelope

---

## Controlling Harshness

### If Too Harsh
1. **Lower cutoff:** 65-70%
2. **Reduce resonance:** Under 15%
3. **Use triangle:** Softer than saw
4. **Add LPF FX:** Tame at 75%

### If Not Present Enough
1. **Filter envelope:** Increase amount to 40%+
2. **Boost 2-3kHz:** In EQ
3. **Add DIST:** 20-30% for edge
4. **Reduce reverb:** Wetness pushes back

---

## Frequency Sweet Spots

| Frequency | Character | Boost/Cut |
|-----------|-----------|-----------|
| 1-2kHz | Nasal/boxy | Cut if boxy, boost for presence |
| 2-3kHz | Intelligibility | Safe to boost moderately |
| 3-4kHz | Presence | Boost for forwardness |
| 4-5kHz | Edge/harshness | Cut if harsh |
| 5-8kHz | Sibilance | Cut to reduce harshness |

---

## Mix Position

### Layering Strategy
- **Front layer:** Present mid sound (this recipe)
- **Back layer:** Wider, wetter version
- **Mix:** Present cuts through, wide provides space

### EQ Separation
- Present sound: Boost 2-4kHz
- Competing sounds: Cut 2-4kHz
- Result: Present sound jumps forward

---

## Pro Tips

### 1. Attack is Key
- Fast attack = immediate presence
- Filter envelope on attack = bite
- Distortion on transients = edge

### 2. Less is More
- Moderate unisono (4-6)
- Controlled stereo (50-65%)
- Tight FX (minimal wet)

### 3. Context Matters
- Solo: May sound thin
- In mix: Sits perfectly
- Always judge in context

---

## Present Mid Checklist

- [ ] Sawtooth or square waves
- [ ] Moderate unisono (4-6)
- [ ] Controlled stereo
- [ ] Filter cutoff 70-80%
- [ ] Filter envelope for bite
- [ ] Light distortion
- [ ] Minimal wet FX
- [ ] EQ boost at 2-3kHz
- [ ] Test in full mix context

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm
