# Workflow: Rhythmic Trance Gate Workflows

Creating pumping, rhythmic patterns with the TRNC effect.

## Goal
Use GMS's built-in TRNC (Trance Gate) effect to create rhythmic pumping and gating without external sidechain compression.

[SRC: IL-MAN]

---

## Understanding TRNC

### What It Does
TRNC creates rhythmic volume drops - simulating the "sidechain pumping" effect popular in EDM and trance.

### Controls
```
X (Release): How fast the sound returns after drop
  Low X = Sharp pumping
  High X = Smooth swelling

Y (Drop): How much volume drops
  Low Y = Subtle
  High Y = Near silence
```

---

## Basic Trance Gate Setup

### Step 1: Enable TRNC
1. Click **TRNC** in FX rack
2. Click **GLUE** to enable permanently

### Step 2: Set Drop Amount
```
Y: 60-85%
```
**Guidelines:**
- 60% = Subtle pumping
- 75% = Standard sidechain feel
- 85%+ = Extreme gating

### Step 3: Set Release Time
```
X: 20-40%
```
**Guidelines:**
- 15-25% = Tight, modern pumping
- 30-40% = Classic trance swelling
- 50%+ = Slow, ambient breathing

### Step 4: LFO Sync (Essential!)
```
Access LFO section (below FX rack)
LFO Multiplier: Set to tempo
SYNC: Beat or Bar
RATE: Match your rhythm
```

**Sync options:**
- **1/4 notes:** Standard four-on-floor
- **1/8 notes:** Double-time pumping
- **1/2 notes:** Slow, dramatic

---

## Genre-Specific Settings

### EDM Sidechain Simulation
```
Y: 75%
X: 25%
SYNC: Beat (1/4 notes)
Result: Classic sidechain pumping
```

### Trance Gate
```
Y: 80%
X: 35%
SYNC: Beat (1/8 or 1/4)
Result: Classic trance rhythm
```

### Ambient Breathing
```
Y: 50%
X: 60%
SYNC: Bar
Result: Slow, atmospheric
```

### Stutter Effect
```
Y: 90%
X: 10%
SYNC: Beat (1/16 or faster)
Result: Glitchy stutter
```

---

## Advanced Techniques

### Modulated Gate Intensity
```
LFO2 → TRNC Y (Drop amount)
RATE: Slow (8-16 bars)
SHAPE: Sine
Result: Gate intensity evolves over time
```

### Momentary Gate
Instead of GLUE:
1. Leave TRNC unglued
2. Click in X/Y panel during playback
3. Temporary gating effect
4. Great for live performance

### Gate + Filter Combo
```
TRNC: Standard pumping
LPF FX: Automate cutoff inversely
Result: As volume drops, filter closes
```

---

## Combining with Other FX

### Standard EDM Chain
```
ECHO (medium) → RVRB (room) → TRNC (pumping)
```
**Why:** Gate affects echoed/reverberated signal too

### Tight Modern Chain
```
HPF (15%) → TRNC (tight) → Light RVRB
```
**Why:** Clean low-end with pumping

### Ambient Chain
```
RVRB (large) → TRNC (slow) → PHSR (subtle)
```
**Why:** Atmospheric with slow breathing

---

## Sound Sources for Gating

### Best for TRNC
- **Pads:** Creates rhythmic interest in sustained sounds
- **Leads:** Adds movement to static tones
- **Bass:** Sidechain simulation (though subtle)
- **Effects:** Textures become rhythmic

### Avoid or Use Carefully
- **Percussion:** Already rhythmic, can get messy
- **Fast arps:** Conflicts with gate timing
- **Sub bass:** Keep consistent for power

---

## Creating Custom Rhythms

### Pattern Ideas

**1. Standard Four-on-Floor:**
- SYNC: Beat
- Works with any 4/4 tempo

**2. Syncopated:**
- SYNC: Beat
- Use 1/8 note rate
- Program different note lengths in piano roll
- Gate creates syncopation

**3. Triplets:**
- Set project to triplet grid
- SYNC: Beat
- Rate adjusted for feel

**4. Dotted Rhythms:**
- SYNC: Beat
- Use 1/4 + 1/8 feel
- Creates "push" rhythms

---

## Pro Tips

### 1. Layer Static + Gated
- **Channel 1:** Full pad (no gate)
- **Channel 2:** Same pad with TRNC
- **Mix:** 60/40 or 70/30
- **Result:** Body + rhythmic interest

### 2. Automate the Gate
- Automate Y (drop) for buildups
- Increase from 30% to 80%
- Creates intensity ramp

### 3. Manual Override
- Even with GLUE on, momentary click
- In X/Y panel creates different patterns
- Live performance trick

### 4. Different Rates per Layer
- **Layer 1:** 1/4 note gate
- **Layer 2:** 1/8 note gate
- **Mix:** Complex polyrhythms

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Not pumping | Check LFO sync, increase Y |
| Too choppy | Increase X (release) |
| Not in time | Verify SYNC is set to Beat/Bar |
| Too dramatic | Reduce Y (drop amount) |
| Too subtle | Increase Y, decrease X |

---

## Quick Setup

```
Enable TRNC in FX rack
GLUE: On

X (Release): 30%
Y (Drop): 75%

LFO Section:
SYNC: Beat
SHAPE: Square (for hard gate)
or Triangle (for soft swell)

RESULT: Classic sidechain pumping
```

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm
