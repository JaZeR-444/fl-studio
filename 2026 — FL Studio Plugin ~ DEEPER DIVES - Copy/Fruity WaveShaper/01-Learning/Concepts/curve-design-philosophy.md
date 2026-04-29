# Curve Design Philosophy

## The Art of Drawing Distortion

Fruity WaveShaper's graph editor is both a technical tool and a creative instrument. Understanding curve design philosophy helps you move from random experimentation to intentional sonic sculpting.

[SRC: IL-MAN] The spline-based graph editor allows drawing custom transfer functions with precision control over the input-to-output mapping.

## Curve Archetypes

### 1. The Gentle Saturation (S-Curve)
```
Output
  1.0│      ╭──────
     │    ╭╯
  0.5│  ╭╯
     │ ╭╯
  0.0├●─────────────────
     │╯
 -0.5│
     │
 -1.0│
     └──────────────────
       -1.0  0.0  1.0   Input
```

**Characteristics:**
- Soft compression of peaks
- Gradual transition zones
- Even harmonic emphasis
- Analog/tube character

**Use When:** You want warmth without obvious distortion

### 2. The Hard Limiter (Plateau)
```
Output
  1.0│███████████████
     │
  0.5│
     │
  0.0├────────●───────
     │
 -0.5│
     │
-1.0│████████████████
     └──────────────────
       -1.0  0.0  1.0   Input
```

**Characteristics:**
- Sharp threshold behavior
- Zero transients above threshold
- Aggressive odd harmonics
- Digital/punchy character

**Use When:** You need maximum control or aggressive bite

### 3. The Soft Limiter (Rounded Plateau)
```
Output
  1.0│      ╭──────╮
     │    ╭╯      ╰╮
  0.5│  ╭╯          ╰╮
     │ ╭╯              ╰╮
  0.0├●───────────────────
     │╯
 -0.5│
     │
 -1.0│
     └──────────────────
       -1.0  0.0  1.0   Input
```

**Characteristics:**
- Gradual limiting
- Controlled peak reduction
- Mix of harmonics
- Smooth yet controlled

**Use When:** You want loudness without harshness

### 4. The Bitcrusher (Staircase)
```
Output
  1.0│██████████████████
 0.75│        ███████████
 0.50│  █████████████████
 0.25│        ███████████
  0.0├●──────────────────
-0.25│
-0.50│
-0.75│
 -1.0│██████████████████
      └──────────────────
        -1.0  0.0  1.0   Input
```

**Characteristics:**
- Quantized steps
- Digital artifacts and aliasing
- Extreme harmonic complexity
- Lo-fi/creative destruction

**Use When:** You want intentional degradation

[SRC: IL-MAN] The graph supports unlimited points for complex curve shapes including stepped "bitcrush" patterns.

## Design Principles

### Principle 1: Smoothness = Musicality
**Sharp corners** in curves create high-frequency harmonics that can sound harsh.
**Smooth curves** create more even, musical distortion.

**Rule:** Round your corners unless you want aggressive edge.

### Principle 2: Threshold is Everything
Where your curve **deviates from diagonal** determines when distortion kicks in.

**Earlier deviation** = More distortion (good for character)
**Later deviation** = Less distortion (good for headroom)

### Principle 3: Symmetry Controls Character
- **Symmetric curves** (Unipolar): Even harmonics, warmth
- **Asymmetric curves** (Bipolar): Complex harmonics, edge

### Principle 4: Pre-Gain is Your Friend
Don't flatten the curve—**drive the signal into the curve** using Pre gain.
This maintains curve flexibility while controlling distortion amount.

## Practical Design Workflows

### Workflow 1: Analog-Style Saturation
1. Draw soft S-curve with gentle compression
2. Use Unipolar mode
3. Add Pre gain to taste (+6 to +12dB)
4. Compensate with Post gain (-6 to -12dB)
5. Mix at 30-50% for parallel processing

### Workflow 2: Hard Clipper/Limiter
1. Draw horizontal line at desired threshold (0.7-0.8)
2. Use Unipolar mode
3. Add Pre gain to push signals into the ceiling
4. Mix at 100% for full limiting

### Workflow 3: Asymmetric Character
1. Switch to Bipolar mode
2. Shape positive half with soft curve
3. Shape negative half with harder curve (or vice versa)
4. Adjust Pre gain to balance distortion
5. Mix to taste

[SRC: IL-MAN] The spline interpolation ensures smooth transitions between curve points for artifact-free distortion.

## Common Curve Mistakes

### Mistake 1: Flat Curve at Bottom
**Problem:** Signal disappears when input is negative
**Fix:** Ensure curve passes through (0,0) and maintains unity gain slope near center

### Mistake 2: Over-Compression
**Problem:** Curve too flat across wide range = "squashed" sound
**Fix:** Limit flat sections to only the loudest peaks

### Mistake 3: Extreme Asymmetry
**Problem:** Positive and negative halves too different = phase issues
**Fix:** Keep some relationship between halves for stability

## Curve Library Quick Reference

| Goal | Mode | Shape | Pre Gain | Mix |
|------|------|-------|----------|-----|
| 808 Warmth | Unipolar | Soft S-curve | +8dB | 40% |
| Vocal Grit | Bipolar | Asymmetric soft | +6dB | 25% |
| Drum Punch | Unipolar | Hard clip | +12dB | 60% |
| Mix Glue | Unipolar | Gentle saturation | +4dB | 20% |
| Creative Destroy | Bipolar | Random complex | +20dB | 100% |

---

**Version:** 1.0  
**Last Updated:** 2026-02-03
