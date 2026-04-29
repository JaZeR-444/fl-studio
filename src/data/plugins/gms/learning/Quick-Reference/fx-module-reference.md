# FX Module Quick Reference

Instant reference for all 10 GMS effects.

## Effect Quick-Start Guide

| Effect | X Control | Y Control | Best For | Typical Settings |
|--------|-----------|-----------|----------|------------------|
| **DIST** | Drive amount | Low pass | Grit, saturation | X: 20-40%, Y: 60-80% |
| **CRSH** | Sample crush | Low pass | Lo-fi, retro | X: 15-30%, Y: 70-90% |
| **FLNG** | Depth | Feedback | Thickening, sweep | X: 40-60%, Y: 30-50% |
| **PHSR** | Depth | Feedback | Movement, vintage | X: 30-50%, Y: 20-40% |
| **LPF** | Cutoff | Resonance | Tame highs | X: 60-80%, Y: 20% |
| **HPF** | Cutoff | Resonance | Clean lows | X: 20-40%, Y: 0% |
| **ECHO** | Feedback | Damping | Space, rhythm | X: 30-50%, Y: 60% |
| **RVRB** | Decay | Wet level | Room, depth | X: 40-60%, Y: 20-40% |
| **PAN** | Position | Binaural | Movement, width | X: LFO modulated | 
| **TRNC** | Release | Drop | Pumping, gating | X: 30%, Y: 60-80% |

[SRC: IL-MAN]

---

## Detailed Parameter Reference

### DIST (Distortion)
```
X = Drive (0-100%)
    0%   = Clean
    50%  = Moderate grit
    100% = Heavy distortion

Y = Low Pass Filter (0-100%)
    Higher = More highs pass through
    Lower  = Darker, tamer distortion
```

**Common uses:**
- Bass grit: X: 30%, Y: 70%
- Lead saturation: X: 20%, Y: 80%
- Aggressive crunch: X: 60%, Y: 50%

---

### CRSH (Bit Crusher)
```
X = Sample Rate Reduction (0-100%)
    0%   = No effect
    25%  = Subtle lo-fi
    50%  = Retro 8-bit
    100% = Extreme degradation

Y = Low Pass Filter (0-100%)
    Smoothes aliasing artifacts
```

**Common uses:**
- Lo-fi texture: X: 20%, Y: 60%
- Digital artifacts: X: 60%, Y: 40%
- Retro game sound: X: 40%, Y: 80%

---

### FLNG (Flanger)
```
X = Depth (0-100%)
    Controls sweep range
    Higher = More dramatic

Y = Feedback (0-100%)
    Creates resonance
    High values = ringing/metallic
```

**Common uses:**
- Subtle thickening: X: 30%, Y: 20%
- Jet sweep: X: 80%, Y: 60%
- Rhythmic: X: 50%, Y: 40%, sync LFO

---

### PHSR (Phaser)
```
X = Depth (0-100%)
    Range of notch sweep

Y = Feedback (0-100%)
    Emphasis on notches
```

**Common uses:**
- Gentle movement: X: 40%, Y: 30%
- 70s vibe: X: 70%, Y: 50%
- Rotary speaker: X: 50%, Y: 40%

---

### LPF (Low Pass Filter)
```
X = Cutoff Frequency (0-100%)
    0%   = No sound
    50%  = Midrange only
    100% = Full spectrum

Y = Resonance (0-100%)
    Boost at cutoff point
```

**Common uses:**
- Post-distortion taming: X: 60-80%
- Filter sweeps: Automate X
- Warmth: X: 80%, Y: 10%

---

### HPF (High Pass Filter)
```
X = Cutoff Frequency (0-100%)
    0%   = Full spectrum
    50%  = No bass/mids
    100% = Only highs

Y = Resonance (0-100%)
    Can add bite at cutoff
```

**Common uses:**
- Clean bass mud: X: 10-20%
- Thinning: X: 40-60%
- Radio effect: X: 60%, Y: 20%

---

### ECHO (Delay)
```
X = Feedback (0-100%)
    0%   = Single echo
    50%  = Multiple repeats
    100% = Infinite (careful!)

Y = Filtering (0-100%)
    Higher = brighter echoes
    Lower  = darker echoes
```

**Common uses:**
- Slapback: X: 20%, short time
- Rhythmic delay: X: 40%, sync to tempo
- Ambient: X: 60%, Y: 70%

---

### RVRB (Reverb)
```
X = Decay/Feedback (0-100%)
    Room size/time

Y = Wet Level (0-100%)
    Reverb amount
```

**Common uses:**
- Room ambience: X: 30%, Y: 20%
- Hall effect: X: 70%, Y: 40%
- Plate reverb: X: 50%, Y: 30%

---

### PAN (Panning)
```
X = Left/Right Position (0-100%)
    0%   = Left
    50%  = Center
    100% = Right

Y = Binaural Effect (0-100%)
    Creates 3D positioning
```

**Common uses:**
- Auto-pan: Arm X to LFO
- Static positioning: Set X manually
- 3D effects: Use Y control

---

### TRNC (Trance Gate)
```
X = Release Time (0-100%)
    How fast gate closes
    Higher = smoother pumping

Y = Drop Level (0-100%)
    How much volume drops
    0%   = No effect
    100% = Full silence
```

**Common uses:**
- Sidechain feel: X: 20%, Y: 70%, sync to beat
- Trance effect: X: 40%, Y: 80%
- Rhythmic gate: X: 10%, Y: 90%

---

## Effect Chains by Purpose

### EDM Lead Polish
```
DIST (light) → LPF (tame) → ECHO (subtle) → RVRB (room)
```

### Trap Bass
```
DIST (medium) → HPF (clean) → TRNC (pump)
```

### Wide Pad
```
PHSR (subtle) → ECHO (long) → RVRB (big) → PAN (slow LFO)
```

### Lo-Fi Texture
```
CRSH (medium) → FLNG (light) → LPF (dark)
```

### Rhythmic Pluck
```
ECHO (dotted 8th) → RVRB (short) → TRNC (quarter note)
```

---

## LFO Modulation Targets

Arm these parameters for automatic movement:

| Effect | Best Param to Modulate | Result |
|--------|------------------------|--------|
| DIST | X (amount) | Pulsing grit |
| FLNG | X (depth) | Sweeping flanger |
| PHSR | X (depth) | Moving phaser |
| LPF | X (cutoff) | Filter sweep |
| ECHO | X (feedback) | Growing echoes |
| PAN | X (position) | Auto-panning |
| TRNC | Y (drop) | Rhythmic intensity |

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm
