# Vibe Mapping Quick Reference

## The Five Vibe Targets with 3D Control

### 1. WARMTH (Analog, Vintage, Thick)

**3D Mapping Strategy**:
```
X-Axis: Oscillator detune amount (0% = in-tune, 100% = wide detune)
Y-Axis: Low-pass filter cutoff (0% = dark/warm, 100% = bright)
Z-Axis: Saturation/drive amount (0% = clean, 100% = saturated)

Gesture: Start bottom-left (warm/dark), move slowly right and up
```

**Recommended Settings**:
- Use low cutoff frequencies (Y < 40%)
- Add subtle saturation (Z 20-40%)
- Gentle pitch widening (X 10-30%)

---

### 2. CLARITY (Present, Defined, Forward)

**3D Mapping Strategy**:
```
X-Axis: Presence EQ boost (0% = flat, 100% = +6dB @ 3-5kHz)
Y-Axis: High-shelf brightness (0% = natural, 100% = airy/shiny)
Z-Axis: Exciter/harmonic enhancement (0% = dry, 100% = enhanced)

Gesture: Quick movements in upper-right quadrant, Z for enhancement
```

**Recommended Settings**:
- Target 2-5kHz range (presence zone)
- Moderate brightness boost (Y 40-60%)
- Subtle exciter use (Z 20-40%)

---

### 3. DEPTH (Spacious, Immersive, 3D)

**3D Mapping Strategy**:
```
X-Axis: Stereo width (0% = mono, 100% = ultra-wide)
Y-Axis: Reverb send level (0% = dry, 100% = wet)
Z-Axis: Delay feedback/time (0% = slapback, 100% = long ambient)

Gesture: Create space with Y, widen with X, add depth with Z
```

**Recommended Settings**:
- Start narrow (X < 30%), expand as needed
- Reverb as main depth tool (Y 30-70%)
- Delay for slapback/ambience (Z 20-50%)

---

### 4. PUNCH (Dynamic, Aggressive, Tight)

**3D Mapping Strategy**:
```
X-Axis: Transient shaper amount (0% = natural, 100% = max punch)
Y-Axis: Compression threshold (0% = no compression, 100% = heavy)
Z-Axis: Saturation on transients (0% = clean, 100% = driven)

Gesture: Quick, decisive movements. Speed output → accent boost
```

**Recommended Settings**:
- Moderate transient shaping (X 40-60%)
- Light-medium compression (Y 30-50%)
- Saturation only on peaks (Z 20-40%)
- Map Speed to accent detection for dynamic punch

---

### 5. AIR (Bright, Shimmer, Lift)

**3D Mapping Strategy**:
```
X-Axis: High-pass filter (0% = full range, 100% = remove lows)
Y-Axis: Air EQ (12-20kHz shelf) (0% = flat, 100% = +6dB)
Z-Axis: Sparkle/dimension enhancer (0% = natural, 100% = enhanced)

Gesture: Position in upper area for brightness, Z for shimmer
```

**Recommended Settings**:
- Remove rumble (X 10-20% high-pass)
- Add air band (Y 30-50%)
- Enhancement for polish (Z 20-40%)

## Vibe Combination Matrix

| Combination | X | Y | Z | Speed |
|-------------|---|---|---|-------|
| **Warm + Deep** | Width | Cutoff (low) | Reverb | - |
| **Clear + Punch** | Presence | Compression | Drive | Accents |
| **Deep + Air** | Width | Reverb | Air EQ | LFO Depth |
| **Punch + Clear** | Transient | Cutoff (high) | Exciter | Velocity |
| **Warm + Punch** | Detune | Saturation | Drive | Accents |

## Quick Vibe Presets

### Hip-Hop Lead (Punch + Clear)
```
X: Transient boost (0-60%)
Y: Filter cutoff (30-80%)
Z: Distortion drive (0-40%)
Speed: Accent volume boost
Mode: Relative for smooth sweeps
```

### Ambient Pad (Warm + Deep)
```
X: Stereo width (20-80%)
Y: Low-pass filter (10-50%)
Z: Reverb send (40-90%)
Speed: LFO rate modulation
Mode: Absolute for spatial control
```

### EDM Build (Air + Punch)
```
X: High-shelf (30-70%)
Y: Filter cutoff sweep (10-100%)
Z: Saturation (0-50%)
Speed: Filter resonance boost
Mode: Relative for continuous sweeps
```

## Gesture Recommendations by Vibe

| Vibe | Recommended Gestures | Movement Style |
|------|---------------------|----------------|
| **WARMTH** | Slow, sustained holds | Legato, smooth |
| **CLARITY** | Quick, precise movements | Staccato, defined |
| **DEPTH** | Expansive, wide gestures | Open, flowing |
| **PUNCH** | Sharp, accented movements | Dynamic, rhythmic |
| **AIR** | Light, upward movements | Ascending, bright |

[SRC: IL-MAN]
