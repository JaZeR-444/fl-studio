# Workflow: Bright and Airy

Achieving shimmer, sparkle, and high-frequency presence.

## Goal
Create sounds with exceptional brightness, air, and high-frequency detail that sits on top of a mix.

[SRC: IL-MAN]

---

## The Brightness Formula

### Oscillator Strategy
```
Primary: Sawtooth (brightest waveform)
Unisono: 6-8 voices
Stereo: 80%+
Detune: 50-60%
```

### Filter Approach
```
Type: LP (ironically)
Cutoff: 85-95%
Resonance: 20-30% (boosts at cutoff)
```

**Why LP for brightness?**
- High cutoff lets all highs through
- Resonance creates peak at cutoff
- Controlled brightness vs chaos

---

## Step-by-Step Recipe

### Step 1: Waveform Selection
```
OSC 1: Sawtooth (all harmonics)
OSC 2: Sawtooth, fine +7
OSC 3: Triangle or Sawtooth
```

### Step 2: Maximum Unisono
```
VOICES: 8-12
STEREO: 85-95%
DETUNE: 55-65%
```

**Purpose:** Creates shimmering, airy texture

### Step 3: Bright Filter Settings
```
TYPE: LP
CUTOFF: 88-95%
RES: 25-35%
KBD: 15-25%
```

**The resonance trick:**
- High cutoff + resonance = brightness boost
- Creates "screaming" filter peak

### Step 4: Fast Envelope
```
ATTACK: 0-5%
DECAY: 20-30%
SUSTAIN: 90%+
RELEASE: 25-35%
```

### Step 5: Filter Envelope (Optional)
```
EG1 → CUTOFF
ATK: 0%
DEC: 15-25%
AMNT: +20 to +30%
```

**Result:** Extra bite on attack

### Step 6: Essential FX Chain
```
FLNG: X: 45%, Y: 35% (adds shimmer)
RVRB: X: 50%, Y: 25% (space and air)
```

**Avoid:**
- Heavy DIST (darkens)
- Bit crusher (unless lo-fi)
- LPF FX (obviously)

### Step 7: Post-FX EQ Boost
```
Enable 5-band EQ
Band 4 (8kHz): +2 to +4 dB
Band 5 (12kHz): +3 to +5 dB
```

---

## Applications

### Shimmering Lead
- High unisono
- Fast attack
- Long release with reverb

### Airy Pad
- Max unisono
- Slow envelope
- PHSR + RVRB

### Sparkle Arp
- High filter cutoff
- Short envelope
- Light FLNG

### Top-Layer FX
- Noise base
- High filter
- CRSH + RVRB

---

## Common Mistakes

### Too Bright
**Problem:** Harsh, fatiguing
**Fix:**
- Lower cutoff to 80%
- Reduce resonance
- Add LPF FX at 70%

### Thin Brightness
**Problem:** All highs, no body
**Fix:**
- Add OSC 3 sub layer
- Reduce detune to 40%
- Boost 200-400Hz in EQ

### Phase Issues
**Problem:** Wide but weak mono
**Fix:**
- Test mono compatibility
- Reduce stereo to 70%
- Use fewer voices (6-8)

---

## Pro Tips

### 1. Layer Bright + Dark
- **Layer 1:** Bright (as above)
- **Layer 2:** Darker version
- **Mix:** Bright provides shimmer, dark provides body

### 2. Automated Brightness
```
LFO → Filter Cutoff
Slow rate (5-10%)
Subtle amount (±10%)
Result: Breathing brightness
```

### 3. Resonance Sweep
```
Automate filter resonance
From 20% to 40%
With high cutoff
Result: Evolving scream
```

---

## Brightness Checklist

- [ ] Sawtooth waveforms
- [ ] High unisono (8+)
- [ ] Wide stereo (80%+)
- [ ] High cutoff (85%+)
- [ ] Medium-high resonance
- [ ] FLNG for shimmer
- [ ] EQ boost 8kHz+
- [ ] Test in mono

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm
