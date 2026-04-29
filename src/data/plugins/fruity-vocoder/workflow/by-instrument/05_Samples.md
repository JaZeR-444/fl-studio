# Fruity Vocoder: Sample Workflows

## Overview
Using audio samples (loops, one-shots, field recordings) as modulators or carriers opens experimental and textural possibilities.

---

## Workflow 1: Vocal Sample Vocoding

### Concept
Process vocal samples (chops, phrases, ad-libs) through vocoder.

### Applications
- **Trap:** Processed vocal chops as hooks
- **Experimental:** Granular-style textures
- **Hip-Hop:** Vintage sample manipulation

### Setup
```
Vocal Sample ──► Modulator (L)
                   ├──► Vocoder
Pad/Texture ──► Carrier (R)
```

**Settings by Style:**

| Style | FORM | BANDS | BW | Use Case |
|-------|------|----|----|----------|
| **Clear** | +0.2 | 48 | 60% | Intelligible chops |
| **Lo-Fi** | -0.1 | 16 | 40% | Vintage aesthetic |
| **Effect** | 0.0 | 12 | 70% | Special moments |

---

## Workflow 2: Field Recording Vocoding

### Concept
Use environmental sounds (rain, traffic, nature) as modulator.

### Setup
```
Field Recording ──► Modulator (L)
                      ├──► Vocoder
Synth Pad ──► Carrier (R)
```

**Applications:**
- Ambient texture creation
- Cinematic sound design
- Experimental hip-hop atmosphere

**Settings:**
```
MIN: 100 Hz (remove rumble)
MAX: 8000 Hz (focus range)
ATTACK: 50 ms
DECAY: 200 ms
BANDS: 24
SCALE: Linear (better for noise)
```

---

## Workflow 3: Sampler Instrument Vocoding

### Concept
Play sampler instrument through vocoder for "talking sampler" effect.

### Setup
```
Slicer/Channel Sampler ──► Modulator (L)
                           ├──► Vocoder
Synth Carrier ──► Carrier (R)
```

**Hip-Hop Application:**
- Sample chops that "speak"
- Rhythmic vocal textures
- Glitch-hop effects

---

## Workflow 4: Sample as Carrier

### Concept
Use audio sample (instrument, texture) as carrier instead of synth.

### Setup
```
Vocal ──► Modulator (L)
            ├──► Vocoder
Sample ──► Carrier (R) (guitar, texture, etc.)
```

**Creative Applications:**
- Guitar as carrier (vocoded "talking guitar")
- String samples as carrier (orchestral vocoding)
- Noise textures as carrier (industrial effect)

---

## Mini-Recipes

### Recipe A: Sample Chop Hook (2 minutes)
1. Load vocal chop into Slicex
2. Route to vocoder (L)
3. Route pad to vocoder (R)
4. Set: FORM +0.2, BANDS 40, BW 55%
5. 100% wet for hook effect

### Recipe B: Ambient Texture (2 minutes)
1. Load field recording
2. Route to vocoder (L)
3. Route warm pad (R)
4. Set: BANDS 16, ATTACK 100ms, DECAY 300ms
5. Parallel send, 30% return
6. Heavy reverb (5s)

### Recipe C: Glitch Sample (2 minutes)
1. Load staccato sample
2. Route to vocoder
3. Set: BANDS 8, BW 80%, INV On
4. Automate HOLD on 1/16th notes
5. 100% wet, heavy post-processing

---

## Sample Preparation

### For Use as Modulator
1. **Normalize:** Consistent level
2. **Clean:** Remove silence at start/end
3. **EQ:** High-pass at 80Hz (remove rumble)
4. **Optional:** Light compression for consistency

### For Use as Carrier
1. **Full spectrum:** Ensure rich frequency content
2. **Sustained:** Long enough for vocoding
3. **Consistent:** No abrupt level changes
4. **Rich harmonics:** Avoid pure tones

---

## Vibe Applications

### Moody
- Rain/water recordings as modulator
- Dark pad as carrier
- Slow attack/decay (200ms+/400ms+)
- Result: Atmospheric, nocturnal

### Upbeat
- Vocal chop samples
- Bright synth carrier
- Fast attack (10ms)
- Result: Rhythmic hook energy

### Psychedelic
- Unusual field recordings
- FM or noise carrier
- Extreme automation
- Result: Experimental texture

### Jazzy
- Jazz vocal samples
- Analog-style pad
- Vintage bandwidth (6kHz MAX)
- Result: Nostalgic sophistication

### Vibey
- Processed vocal textures
- Moving pad carrier
- Medium settings
- Result: Modern atmospheric

---

## Creative Techniques

### Technique A: Sample Recycling
1. Take finished vocal
2. Resample to new audio
3. Use as modulator with different carrier
4. Result: New texture from existing material

### Technique B: Cross-Sample Vocoding
1. Sample A as modulator
2. Sample B as carrier
3. Result: Hybrid texture

### Technique C: Layered Samples
1. Multiple samples as modulator (mixed)
2. Rich carrier
3. Result: Complex spectral interaction

---

## Pitfalls

| Pitfall | Problem | Solution |
|---------|---------|----------|
| Inconsistent level | Sample has volume jumps | Normalize, compress lightly |
| Too short | Sample ends before vocoding | Loop or use longer samples |
| Poor quality | Low-res or noisy sample | Use high-quality samples |
| No low-end | Sample lacks bass | Layer with sub-tone |
| No highs | Sample dull, dark | Choose brighter samples or add noise |

---

**Instrument:** Samples
**Source:** IL-MAN, REPUTABLE
**Last Updated:** 2026-02-03
