# Workflow: Wide and Spacious

Creating expansive stereo sounds that fill the soundstage.

## Goal
Design sounds with maximum stereo width and spatial presence for immersive productions.

[SRC: IL-MAN]

---

## The Width Formula

### Core Elements
1. **Maximum unisono voices** - Spread across stereo field
2. **100% stereo spread** - Full width
3. **High detune** - Chorus effect
4. **Spatial FX** - Reverb and delay
5. **Stereo modulation** - Panning LFOs

---

## Step-by-Step Recipe

### Step 1: Width-Enhancing Waveforms
```
OSC 1: Sawtooth (spreads well)
OSC 2: Sawtooth or Triangle
OSC 3: Triangle (softer, wider feel)
```

### Step 2: Maximum Unisono
```
UNISONO:
  VOICES: 10-16 (maximum)
  STEREO: 95-100%
  DETUNE: 60-70%
```

**Note:** This is the "supersaw" approach to width

### Step 3: Moderate Filtering
```
FILTER:
  TYPE: LP
  CUTOFF: 70-80%
  RES: 15-25%
```

**Balance:** Wide but not harsh

### Step 4: Gentle Envelope
```
LEVEL EG:
  ATTACK: 10-20%
  DECAY: 30-40%
  SUSTAIN: 85-95%
  RELEASE: 40-50%
```

### Step 5: Stereo Modulation
```
LFO1 → PAN
RATE: 8-15% (slow)
AMNT: 60-80%
SHAPE: Sine
```

**Result:** Gentle stereo wandering

### Step 6: Chorus/Flange
```
FLNG: X: 40-50%, Y: 30-40%
```

**Additional thickening**

### Step 7: Spacious Reverb
```
RVRB:
  X: 50-70% (long decay)
  Y: 35-50% (wet)
```

**Space = Width**

### Step 8: Stereo Echo
```
ECHO:
  X: 30-45% (feedback)
  Y: 50% (brightness)
  Ping-pong if available in mixer
```

---

## Width Applications

### Wide Pad
- Max unisono (12-16)
- Full stereo
- Long reverb
- Slow pan LFO

### Stereo Lead
- 8-10 voices
- 90% stereo
- Medium reverb
- Light FLNG

### Atmospheric FX
- Any waveforms
- Max unisono
- All spatial FX
- Extreme panning

### Background Texture
- High noise mix (10-20%)
- Wide unisono
- Heavy reverb
- Low in mix

---

## Mono Compatibility

### The Width/Mono Trade-off
- More width = potential mono issues
- Always check mono compatibility
- Balance width with solidity

### Testing Mono
```
1. Play sound in stereo (sounds great)
2. Click FL Studio MONO button
3. If sound disappears or weakens:
   → Reduce stereo spread
   → Reduce unisono voices
   → Check phase issues
```

### Safe Width Settings
```
For mono compatibility:
  VOICES: 6-8 (not 12-16)
  STEREO: 70-80% (not 100%)
  DETUNE: 50-60% (moderate)
```

---

## Layered Width Strategy

### Layer 1: Wide Shimmer
```
High unisono (10 voices)
100% stereo
Low in mix (30%)
Purpose: Stereo sparkle
```

### Layer 2: Center Body
```
Low unisono (2-3 voices)
30% stereo
Main volume (70%)
Purpose: Mono compatibility
```

### Result
- Wide perception
- Solid mono
- Best of both worlds

---

## Genre-Specific Width

### Trance
- Maximum everything
- Mono check less critical
- Width = genre expectation

### Pop
- Moderate width (70-80%)
- Must be mono-compatible
- Width for choruses

### Hip-Hop
- Selective width
- Keep bass narrow
- Wide pads, narrow leads

### Ambient
- Extreme width accepted
- Long reverbs
- Maximum immersion

---

## Pro Tips

### 1. Width Automation
```
Verse: 50% stereo
Chorus: Automate to 90%
Result: Expanding into chorus
```

### 2. Width vs. Focus
```
Too wide = unfocused
Solution: Reduce to 70-80%
Or: Layer narrow version
```

### 3. Reverb Width
```
Wider reverb = wider perception
Increase RVRB wetness
Increase stereo spread
Result: Massive space
```

---

## Width Checklist

- [ ] High unisono voices (8-12+)
- [ ] Wide stereo spread (80%+)
- [ ] Moderate-high detune
- [ ] Spatial FX (FLNG, RVRB)
- [ ] Pan LFO for movement
- [ ] Long reverb tail
- [ ] Mono compatibility check
- [ ] Layer with narrow version (optional)

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm
