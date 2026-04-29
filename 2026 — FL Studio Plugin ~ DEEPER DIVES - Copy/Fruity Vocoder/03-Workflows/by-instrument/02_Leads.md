# Fruity Vocoder: Lead Vocal Workflows

## Overview
Lead vocals are the primary application for vocoding in hip-hop and R&B—creating robot voices, textured layers, and hook effects.

⚠️ **Critical:** Lead vocals require careful handling to preserve intelligibility and emotional delivery.

---

## Workflow 1: Talking Hook (Classic Vocoder)

### Concept
Transform hook vocal into "talking synth" effect.

### Setup
```
Hook Vocal ──► Modulator (L)
                 ├──► Vocoder ──► Hook Track
Sawtooth Pad ──► Carrier (R)
```

**Settings for Clarity:**
```
FREQ:
  FORM: +0.1 to +0.2 (present, not extreme)
  MIN: 150 Hz (tight, no mud)
  MAX: 10000 Hz (full range for speech)
  BW: 55-65% (clear definition)

ENV:
  ATTACK: 10-15 ms (catches consonants)
  DECAY: 100-150 ms (natural)

BANDS: 40-48 (high resolution for speech)
```

**Carrier:**
- Rich sawtooth wave
- Add 15% white noise for sibilance
- Full frequency range

### Routing Decision

**Option A: Parallel (Recommended)**
- Dry vocal: 60-70%
- Vocoded: 30-40% return
- Preserves lead clarity
- Safe and controllable

**Option B: Insert (Full Commitment)**
- 100% wet
- Use when full transformation desired
- More risky for lead vocals

---

## Workflow 2: Robot Ad-lib

### Concept
Classic trap-style robotic ad-libs ("yeah," "what," "skrrt").

### Setup
```
Ad-lib Vocal ──► Vocoder (dedicated track, 100% wet)
                   ├──► Bright Square Carrier
                   ├──► Light EQ
                   └──► Mix at -12 to -15dB
```

**Settings:**
```
FORM: +0.25 to +0.3 (bright robot)
MIN: 120 Hz
MAX: 10000 Hz
BW: 55-60%
ATTACK: 5 ms (tight punch)
DECAY: 80 ms (responsive)
BANDS: 20-24 (character over clarity)
INV: On (optional, for mechanical quality)
```

**Carrier:**
- Bright square wave (strong odd harmonics)
- Unfiltered or slight low-pass at 8kHz

**Timing:**
- Keep ad-libs short (1-3 syllables)
- Space them out (not every phrase)
- Sync to grid for tight rhythm

---

## Workflow 3: Textural Layer

### Concept
Subtle vocoded layer under lead for atmosphere.

### Setup (Parallel Send)
```
Lead Vocal ──► Main Track (dry)
                 ├──► Vocoder Return ──► 25% level
Sustained Pad ──► Carrier (R)
```

**Settings by Vibe:**

| Vibe | FORM | BW | ATTACK | DECAY | BANDS | Return |
|------|------|----|--------|-------|-------|--------|
| Moody | -0.3 | 35% | 200ms | 400ms | 16 | 30% |
| Upbeat | +0.2 | 55% | 15ms | 100ms | 32 | 35% |
| Vibey | +0.15 | 50% | 25ms | 150ms | 28 | 30% |
| Jazzy | 0.0 | 45% | 80ms | 200ms | 20 | 25% |

### Post-Processing
```
Vocoder Return:
  ├──► EQ: High-pass 100Hz, slight 3kHz boost
  ├──► Reverb: Plate 2-3s, 30% wet
  ├──► Optional: Light compression
  └──► 25-35% return level
```

---

## Workflow 4: Formant Shifting Effect

### Concept
Change vocal character (masculine ↔ feminine) without pitch shift.

### Setup
```
FORM automation: -0.5 to +0.5 over phrase
```

**Applications:**

**A: Gender Morph**
```
Verse: FORM 0.0 (neutral)
Chorus: FORM +0.3 (brighter)
Result: Chorus lifts and brightens
```

**B: Demon Voice**
```
FORM: -0.6 to -0.8
INV: On
Use: Villain persona, horror moments
```

**C: Subtle Character**
```
FORM: +0.1 (constant)
Use: Air and presence without obvious effect
```

---

## Workflow 5: HOLD Freeze Effect

### Concept
Capture and sustain vocal moments.

### Technique
1. Play vocal through vocoder
2. At emotional peak word/phrase
3. Engage HOLD button
4. Vocal stops, spectrum sustains
5. Pad continues with frozen formants

**Settings for Sustain:**
```
ATTACK: 150ms (soft capture)
DECAY: 400ms+ (maximum sustain)
BW: 30% (blended)
BANDS: 24
```

**Automation Pattern:**
```
Phrase: "...and I'm gone"
                │
HOLD:   _________████ (engaged at "gone")
Result: "gone" sustains as spectral pad
```

---

## Mini-Recipes

### Recipe A: Clear Hook (2 minutes)
1. Route hook vocal to vocoder
2. Sawtooth + white noise carrier
3. Set: FORM +0.2, BANDS 48, BW 60%, ATTACK 12ms
4. Parallel send, 35% return
5. Post-EQ boost 3kHz

### Recipe B: Robot Ad-lib (2 minutes)
1. Dedicated ad-lib track
2. Bright square carrier
3. Set: FORM +0.3, BANDS 24, INV On, ATTACK 5ms
4. 100% wet
5. Mix at -15dB

### Recipe C: Moody Layer (2 minutes)
1. Parallel send from vocal
2. Warm dark pad carrier
3. Set: FORM -0.3, BANDS 16, ATTACK 200ms, DECAY 400ms
4. 30% return
5. Long reverb (4s)

---

## Sibilance Management

### Pre-Vocoder
1. **De-ess the vocal:**
   - Frequency: 4-8kHz
   - Reduction: 3-6dB
   - Wideband mode

2. **Optional high-shelf:**
   - -2dB at 8kHz
   - Prevents excessive sibilance entering vocoder

### In-Vocoder
- Lower high band sliders (6kHz+)
- Moderate BW (45-55%)
- Add white noise to carrier (helps, but also adds sibilance)

### Post-Vocoder
- Light de-esser if needed
- EQ: Gentle cut at 5-7kHz if harsh
- Don't over-process (can sound dull)

---

## Vibe Applications

| Vibe | FORM | BW | ATTACK | Use Case |
|------|------|----|--------|----------|
| Moody | -0.4 | 35% | 200ms | Verse textures |
| Upbeat | +0.3 | 60% | 10ms | Hooks, ad-libs |
| Psychedelic | Auto | 70% | Auto | Experimental sections |
| Jazzy | 0.0 | 45% | 80ms | Sophisticated hooks |
| Vibey | +0.15 | 50% | 25ms | Modern R&B layers |

---

## Automation Ideas

### Section Changes
```
Verse:   FORM 0.0,   Return 25%
Pre:     FORM +0.2,  Return 25% → 35%
Chorus:  FORM +0.2,  Return 35-40%
Result: Building presence and energy
```

### Ad-lib Stutter
```
HOLD: Toggle on 1/8th notes during ad-lib
Result: Rhythmic chops
```

### Formant Sweep
```
Hook: FORM 0.0 ──→ +0.4 ──→ 0.0
Result: Lifting in middle of hook
```

---

## Safety Checklist

Before finalizing lead vocal vocoding:
- [ ] Intelligible (words can be understood)
- [ ] Sibilance controlled (not harsh)
- [ ] Not competing with lead (if parallel)
- [ ] Appropriate wet/dry balance
- [ ] Emotion preserved (if desired)
- [ ] Rhythm tight (attack appropriate)
- [ ] Frequency balanced (EQ sweetened)
- [ ] Checked in full mix context

---

## Pitfalls

| Pitfall | Problem | Solution |
|---------|---------|----------|
| Lost clarity | Lyrics unintelligible | Raise BANDS to 48+, BW to 60%+ |
| Harsh sibilance | Fatiguing "S" sounds | De-ess pre-vocoder, lower high bands |
| Robotic (unwanted) | INV on or extreme FORM | Disable INV, moderate FORM |
| Behind the beat | Attack too slow | Reduce to 10-15ms |
| Too dry | 100% wet losing emotion | Use parallel processing |
| Buried in mix | Return level too low | Raise or check in context |
| Thin/lacking body | High-pass too aggressive | Keep some low-mids |

---

**Instrument:** Lead Vocals
**Critical:** Intelligibility and sibilance control
**Source:** IL-MAN, REPUTABLE
**Last Updated:** 2026-02-03
