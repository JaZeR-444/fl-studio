# Workflow: Dark and Moody

Creating atmospheric, dark sounds for moody productions.

## Goal
Design sounds with reduced highs, enhanced mids/lows, and mysterious character for dark genres.

[SRC: IL-MAN]

---

## The Dark Sound Formula

### Core Elements
1. **Low filter cutoff** - Removes brightness
2. **Pulse/square waves** - Hollow, mysterious
3. **Moderate unisono** - Width without sparkle
4. **Heavy reverb** - Space and depth
5. **Slow movement** - Evolving, atmospheric

---

## Step-by-Step Recipe

### Step 1: Dark Waveforms
```
OSC 1: Pulse (50-70% width) or Square
OSC 2: Triangle or muted Sawtooth
OSC 3: Sine (for sub weight)
```

**Why these?**
- Pulse: Hollow, vintage character
- Triangle: Soft, mellow
- Avoid bright sawtooth

### Step 2: Controlled Width
```
UNISONO:
  VOICES: 5-7
  STEREO: 60-75%
  DETUNE: 45-55%
```

**Note:** Wide enough for space, not bright/aggressive

### Step 3: Low Filter Cutoff
```
FILTER:
  TYPE: LP
  CUTOFF: 45-65%
  RES: 10-20%
```

**Key:** Low cutoff removes highs = dark

### Step 4: Filter Movement
```
EG1 → CUTOFF
ATK: 20-40%
DEC: 50-60%
AMNT: +20 to +30%
```

**Result:** Dark swell rather than bright attack

### Step 5: Slow Envelope
```
LEVEL EG:
  ATTACK: 30-50%
  DECAY: 40-60%
  SUSTAIN: 75-90%
  RELEASE: 40-60%
```

**Atmosphere:** Slow attacks = mysterious

### Step 6: LFO Movement
```
LFO1 → CUTOFF
RATE: 10-20% (slow)
AMNT: ±15-25%
SHAPE: Sine
```

**Result:** Gentle, evolving darkness

### Step 7: Heavy Spatial FX
```
PHSR: X: 35%, Y: 30% (subtle movement)
ECHO: X: 40%, long time (space)
RVRB: X: 60-80%, Y: 40-55% (big room)
```

**Dark atmosphere needs space**

### Step 8: EQ for Darkness
```
5-Band EQ:
  Band 1 (60Hz): +2dB (weight)
  Band 2 (220Hz): Flat or +1dB
  Band 3 (1.5kHz): -1 to -2dB (remove edge)
  Band 4 (8kHz): -3 to -4dB (darken)
  Band 5 (12kHz): -4 to -6dB (no air)
```

---

## Dark Sound Applications

### Dark Pad
- Follow recipe exactly
- Max reverb
- Slow LFO filter

### Moody Bass
- Lower octave
- Pulse wave
- FM for grit

### Atmospheric Lead
- Triangle waves
- Long reverb tail
- Filter envelope swell

### Tension FX
- Ring modulation
- High reverb
- Random LFO

---

## Genre Applications

### Dark Trap
- Low cutoff (50%)
- Pulse waves
- Heavy reverb
- Slow attacks

### Ambient/Drone
- Sine waves
- Very slow envelopes
- Max reverb
- Subtle LFO

### Industrial
- Ring modulation
- Distortion (dark)
- Phaser
- Gated reverb

### Cinematic
- Layered textures
- Slow evolution
- Massive reverb
- Filter sweeps

---

## From Dark to Light

### Gradual Brightening
```
Start: Cutoff 50%
→ Automate to 70% over 8 bars
→ Add FLNG
→ Remove EQ cuts
Result: Dark to bright transition
```

### Reveal Technique
```
Dark pad throughout
Add bright layer on chorus
Mix: Dark foundation + bright highlight
```

---

## Common Mistakes

### Too Dark (Muddy)
**Problem:** Can't hear definition
**Fix:**
- Raise cutoff to 60%+
- Cut 200-300Hz mud
- Add subtle highs back

### Lifeless Dark
**Problem:** Boring, static
**Fix:**
- Add LFO filter movement
- Modulate reverb amount
- Layer with texture

### Dark but Weak
**Problem:** No power
**Fix:**
- Add sub layer (OSC3)
- Boost 60-100Hz
- Use compression post-GMS

---

## Pro Tips

### 1. Contrast is Key
- Dark sounds need bright context
- Alternate dark/bright sections
- Dark sounds sit "behind"

### 2. Movement Prevents Boredom
- LFO filter = evolving
- Slow envelope = mysterious
- Automation = cinematic

### 3. Space Enhances Darkness
- Reverb = depth
- Delay = space
- Panning = width

---

## Dark Sound Checklist

- [ ] Pulse or square waves (avoid saw)
- [ ] Low filter cutoff (under 65%)
- [ ] Slow envelope (attack 30%+)
- [ ] LFO filter movement
- [ ] Heavy reverb (40%+ wet)
- [ ] EQ cuts in highs
- [ ] Sub layer for weight
- [ ] Test in context (dark needs contrast)

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm
