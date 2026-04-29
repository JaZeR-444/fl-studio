# FX Rack Signal Flow

Understanding the 10 integrated effects and their processing order.

## FX Rack Overview

GMS includes 10 performance-oriented effects applied in series (one after another). The signal flows through each effect sequentially, with the output of one feeding into the next.

[SRC: IL-MAN]

---

## Signal Flow Chain

```
[Filter Output]
    ↓
[1. DIST] - Distortion
    ↓
[2. CRSH] - Bit Crusher
    ↓
[3. FLNG] - Flanger
    ↓
[4. PHSR] - Phaser
    ↓
[5. LPF] - Low Pass Filter
    ↓
[6. HPF] - High Pass Filter
    ↓
[7. ECHO] - Delay/Echo
    ↓
[8. RVRB] - Reverb
    ↓
[9. PAN] - Auto-Panning
    ↓
[10. TRNC] - Trance Gate
    ↓
[5-Band EQ]
    ↓
[Output]
```

---

## The 10 FX Modules

### 1. DIST (Distortion)
**Type:** Harmonic saturation/overdrive

| Parameter | X-Axis | Y-Axis |
|-----------|--------|--------|
| **X** | Distortion amount | 0-100% drive |
| **Y** | Low pass filter cutoff | Tames harsh distortion |

**Use for:**
- Adding grit to bass
- Saturating leads
- Creating aggressive textures

**Best practices:**
- Start with low X values (10-30%)
- Use Y to control brightness
- Combine with filtering

---

### 2. CRSH (Bit Crusher)
**Type:** Sample rate/bit depth reduction

| Parameter | X-Axis | Y-Axis |
|-----------|--------|--------|
| **X** | Sample-rate reduction | Higher = more degradation |
| **Y** | Low pass filter cutoff | Smooths aliasing artifacts |

**Use for:**
- Lo-fi effects
- Retro video game sounds
- Digital artifacts

**Best practices:**
- Subtle use: 10-30% X
- Heavy degradation: 50%+ X
- Use Y to control harshness

---

### 3. FLNG (Flanger)
**Type:** Comb filter modulation

| Parameter | X-Axis | Y-Axis |
|-----------|--------|--------|
| **X** | Depth | Modulation intensity |
| **Y** | Feedback | Resonance amount |

**Use for:**
- Jet-plane "sweep" effects
- Thickening sounds
- Psychedelic textures

**Best practices:**
- Moderate depth for subtle thickening
- High feedback for resonant sweeps
- Sync to tempo for rhythmic flanging

---

### 4. PHSR (Phaser)
**Type:** All-pass filter cascade

| Parameter | X-Axis | Y-Axis |
|-----------|--------|--------|
| **X** | Depth | Notch sweep range |
| **Y** | Feedback | Resonance/emphasis |

**Use for:**
- Rotary speaker simulation
- Subtle movement
- 70s-style psychedelic effects

**Best practices:**
- Lower depth than flanger for subtlety
- Y control affects notch sharpness
- Great on pads and guitars

---

### 5. LPF (Low Pass Filter)
**Type:** Post-filter low pass

| Parameter | X-Axis | Y-Axis |
|-----------|--------|--------|
| **X** | Cutoff frequency | Higher = more highs |
| **Y** | Resonance | Emphasis at cutoff |

**Use for:**
- Final tone shaping
- Removing harshness
- Creative filtering after distortion

**Best practices:**
- Use after distortion to tame highs
- Resonance adds "screaming" character
- Automate for filter sweeps

---

### 6. HPF (High Pass Filter)
**Type:** Post-filter high pass

| Parameter | X-Axis | Y-Axis |
|-----------|--------|--------|
| **X** | Cutoff frequency | Higher = less lows |
| **Y** | Resonance | Emphasis at cutoff |

**Use for:**
- Removing unwanted low-end
- Thinning sounds
- Creating telephone/radio effects

**Best practices:**
- Set before reverb to prevent muddy tails
- Use on non-bass elements
- Resonance can add "bite" at cutoff

---

### 7. ECHO (Delay)
**Type:** Feedback delay/echo

| Parameter | X-Axis | Y-Axis |
|-----------|--------|--------|
| **X** | Feedback amount | Echo repetitions |
| **Y** | Echo filtering | Damping/darkening |

**Use for:**
- Rhythmic repeats
- Spatial enhancement
- Dub-style effects

**Best practices:**
- Sync to project tempo
- Use Y to darken echoes (more natural)
- Moderate feedback for subtle depth

---

### 8. RVRB (Reverb)
**Type:** Reverberation/spatial effect

| Parameter | X-Axis | Y-Axis |
|-----------|--------|--------|
| **X** | Feedback | Decay time/room size |
| **Y** | Wet level | Reverb amount |

**Use for:**
- Adding space and depth
- Placing sounds in "rooms"
- Creating atmosphere

**Best practices:**
- Lower Y for subtle space
- Higher X for longer tails
- Use pre-filtering (HPF) to clean reverb input

---

### 9. PAN (Panning)
**Type:** Auto-panning/binaural effect

| Parameter | X-Axis | Y-Axis |
|-----------|--------|--------|
| **X** | Left/Right position | Manual or LFO-controlled |
| **Y** | Binaural effect | Up/Down dimension |

**Use for:**
- Stereo movement
- Ear candy effects
- Creating width and interest

**Best practices:**
- Combine with LFO for automatic panning
- Y adds pseudo-3D positioning
- Subtle movement often better than extreme

---

### 10. TRNC (Trance Gate)
**Type:** Rhythmic gating/pumping

| Parameter | X-Axis | Y-Axis |
|-----------|--------|--------|
| **X** | Release time | Gate fade-out speed |
| **Y** | Drop level | How much volume drops |

**Use for:**
- Side-chain-style pumping
- Trance gating effects
- Rhythmic patterns

**Best practices:**
- Sync to tempo for musical results
- X controls fade smoothness
- Y controls intensity (0% = no effect)

---

## Effect Ordering Strategy

### Why Order Matters
The sequence affects the final sound significantly:

**Distortion before Reverb:**
- Clean reverb tail of distorted sound

**Reverb before Distortion:**
- Distorted reverb tail (more aggressive)

### Common Chains

#### Modern EDM Lead
```
DIST (light) → LPF (tame) → ECHO (subtle) → RVRB (medium)
```

#### Trap Bass
```
DIST (medium) → HPF (clean low-end) → TRNC (sidechain feel)
```

#### Atmospheric Pad
```
PHSR (subtle) → ECHO (long) → RVRB (big) → PAN (slow LFO)
```

---

## LFO Modulation of FX

Each effect's X and Y parameters can be modulated by LFO:

### Setup
1. Select FX (e.g., FLNG)
2. Click "Arm X" or "Arm Y"
3. LFO will now modulate that parameter
4. Adjust LFO RATE, AMOUNT, and SHAPE

### Creative Applications

**Auto-Filter Sweep:**
- Arm LPF X (cutoff)
- Slow LFO rate
- Sine or triangle shape

**Tremolo Echo:**
- Arm ECHO X (feedback)
- Medium rate
- Creates rhythmic intensity changes

**Moving Reverb:**
- Arm PAN X (position)
- Slow rate
- Reverb moves around stereo field

---

## Performance Tips

### 1. Bypass Unneeded FX
- Click effect name to toggle off
- Saves CPU when effects not needed

### 2. Momentary Activation
- Click in X/Y panel during playback
- Temporarily engages effect
- Great for live performance flourishes

### 3. Glue Mode
- Click "GLUE" switch to permanently enable selected effect
- Effect stays active even when not selected

---

## CPU Considerations

### Heavy Effects
- **Reverb:** Most CPU-intensive
- **Delay:** Moderate CPU use
- **Flanger/Phaser:** Light CPU

### Optimization
1. Use only needed effects
2. Disable unused FX slots
3. Freeze channel when sound is finalized

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm
