# Fruity Vocoder: Bass Workflows

## Overview
Using bass as modulator or carrier in vocoding creates low-end rhythmic textures and sub-frequency effects.

⚠️ **Warning:** Bass vocoding requires careful low-end management to avoid clashing with kick drums and 808s.

---

## Workflow 1: Bass as Modulator (Rhythmic Sub)

### Concept
Use bass line to rhythmically gate a pad or texture.

### Setup
```
Bass Line ──► Modulator (L)
                  ├──► Vocoder
Pad/Texture ──► Carrier (R)
```

**Settings for Sub Focus:**
```
MIN: 40 Hz
MAX: 200 Hz (bass range only)
ATTACK: 5-10 ms
DECAY: 100-150 ms
BANDS: 8-12 (low resolution)
BW: 50%
```

**Application:**
- Bass "plays" pad in sub range
- Adds texture to low end
- Alternative to standard sub bass

### Hip-Hop Considerations
- ⚠️ High-pass vocoder output at 100-120Hz
- ⚠️ Sidechain to kick (2-3dB duck)
- ⚠️ Don't compete with 808 fundamental

---

## Workflow 2: Bass as Carrier (Deep Vocoding)

### Concept
Use bass instrument as carrier for vocal modulator.

### Setup
```
Vocal ──► Modulator (L)
            ├──► Vocoder
Bass ──► Carrier (R)
```

**Settings:**
```
MIN: 80 Hz (remove sub)
MAX: 8000 Hz (full range)
ATTACK: 15-30 ms
DECAY: 100-200 ms
BANDS: 24-32
FORM: 0.0 or +0.1
```

**Result:** Vocal characteristics in the bass range.

⚠️ **Safety:** High-pass output at 150Hz to preserve 808.

---

## Workflow 3: 808 Vocoding

### Concept
Use 808 pattern to gate melodic content.

⚠️ **Critical:** Must manage low-end carefully.

### Safe Setup
```
808 Pattern ──► Modulator (L)
                  ├──► Vocoder ──► High-pass at 120Hz
Synth/Pad ──► Carrier (R)
```

**Settings:**
```
MIN: 100 Hz (no sub competition)
MAX: 10000 Hz
ATTACK: 2-5 ms (tight to 808)
DECAY: 80-120 ms
BANDS: 16-24
```

**Processing:**
1. Vocoder output
2. Fruity Parametric EQ 2: High-pass 120Hz
3. Fruity Limiter: Sidechain to original 808 (3dB duck)

**Result:** 808 rhythm in higher frequencies, 808 sub preserved.

---

## Mini-Recipes

### Recipe A: Sub Texture (2 minutes)
1. Route bass line to vocoder (L)
2. Route dark pad (R)
3. Set: MIN 40, MAX 200, BANDS 8
4. High-pass output at 100Hz
5. Blend at 30% under main bass

### Recipe B: Bass Vocoder (2 minutes)
1. Route vocal (L), bass (R)
2. Set: MIN 80, MAX 8000, BANDS 32
3. High-pass output at 150Hz
4. Parallel send, 25% return
5. Layer under main 808

### Recipe C: 808 Pattern Gating (2 minutes)
1. Isolate 808 pattern
2. Route to vocoder with pad
3. Set: MIN 100, MAX 8000, ATTACK 5ms
4. High-pass output at 120Hz
5. Sidechain to original 808

---

## Low-End Safety Rules

### The 808/Bass Priority
1. Original 808 always wins the sub range (20-80Hz)
2. Vocoder output high-passed at 100-120Hz minimum
3. Sidechain duck vocoder to 808 (3dB)
4. Or: Use 808 as modulator only (no carrier sub)

### Frequency Management
| Element | Range | Management |
|---------|-------|------------|
| 808 fundamental | 30-60Hz | Keep clear, no competition |
| 808 harmonics | 60-150Hz | Can share with vocoder |
| Vocoder output | 100Hz+ | High-pass everything |
| Kick | 40-100Hz | Sidechain vocoder to duck |

### Gain Staging for Low End
1. 808: Full level, center
2. Kick: Full level, complementary to 808
3. Vocoder bass: -6dB relative to 808, high-passed
4. Vocoder duck: 3dB on kick hits

---

## Vibe Applications

### Trap
- Use 808 as modulator for rhythmic gating
- Keep vocoder output above 120Hz
- Sidechain heavily to kick

### R&B
- Bass as carrier for sultry low-end vocals
- High-pass at 150Hz
- Blend very low (20-25%)

### Experimental
- Extreme bass vocoding (accept the chaos)
- Full range, no high-pass
- Not for hip-hop with 808s

---

## Automation Ideas

### 808 Focus Shift
```
Verse: MIN 100 (higher frequencies only)
Chorus: MIN 60 (full bass range, 808 sub preserved)
Result: Building low-end energy
```

### Sub Pump
```
Sidechain: Heavy duck to 808 (5dB)
DECAY: 100ms → 60ms
Result: Pumping sub texture
```

---

## Pitfalls

| Pitfall | Problem | Solution |
|---------|---------|----------|
| 808 mud | Vocoder competing with sub | High-pass at 120Hz+ |
| Kick clash | Vocoder fighting kick | Sidechain duck |
| Phase issues | Low-end cancellation | Mono check, high-pass |
| Too much sub | Vocoder adding unwanted low | EQ vocoder output |
| Weak bass | Vocoder thinning the bass | Blend, don't replace |

---

**Instrument:** Bass
**Warning:** Low-end management critical for hip-hop
**Source:** IL-MAN, REPUTABLE
**Last Updated:** 2026-02-03
