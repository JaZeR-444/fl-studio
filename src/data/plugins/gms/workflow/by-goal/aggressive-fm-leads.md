# Workflow: Aggressive FM Lead Design

Creating cutting, metallic leads using FM synthesis.

## Goal
Design aggressive, complex leads that cut through dense EDM mixes using FM (Frequency Modulation) synthesis.

[SRC: IL-MAN]

---

## FM Fundamentals for Leads

### Basic FM Setup
```
MODULATION: 2 to 1 FM
OSC 1 (Carrier): Sawtooth or Sine
OSC 2 (Modulator): Sawtooth or Sine
OSC 2 PITCH: +12 semitones (2:1 ratio)
AMOUNT: 40-70%
```

**How it works:**
- OSC 2 modulates OSC 1's frequency
- Creates sideband harmonics
- More amount = more harmonics = more aggressive

---

## Step-by-Step Recipe

### Step 1: Carrier Selection
**For bright leads:** Sawtooth
**For controlled leads:** Sine

```
OSC 1: Sawtooth (for brightness)
PITCH: 0
FINE: 0
```

### Step 2: Modulator Setup
```
OSC 2: Sawtooth (match carrier)
PITCH: +12 semitones (2:1 ratio)
FINE: 0
```

**Ratio options:**
- +12 semitones (2:1) - Balanced harmonics
- +24 semitones (4:1) - Brighter, metallic
- +19 semitones (3:1) - Hollow, reedy

### Step 3: Modulation Amount
```
AMOUNT: 50-80%
```

**Guidelines:**
- 40-50%: Subtle FM character
- 60-70%: Strong metallic tone
- 80%+: Extreme, aggressive

### Step 4: Add Body with OSC 3
```
OSC 3: Sawtooth or Triangle
PITCH: -12 or -24 semitones
MIX: 40-60%
```

**Purpose:** Adds fundamental below FM complexity

### Step 5: Unisono Configuration
```
VOICES: 4-6 (FM is already complex)
STEREO: 50-70%
DETUNE: 40-50%
```

**Note:** Don't overdo unisono with FM - can get muddy.

### Step 6: Filter Taming
```
TYPE: LP
CUTOFF: 70-85%
RES: 20-30% (higher than supersaw)
```

**Why:** FM creates many harmonics; filter controls them.

### Step 7: Envelope Shaping
```
ATTACK: 0-5%
DECAY: 30-40%
SUSTAIN: 85-95%
RELEASE: 25-35%
```

### Step 8: FX Polish
```
DIST: X: 20-30%, Y: 65-75% (essential for aggression)
ECHO: Short slapback for depth
RVRB: Medium room
```

---

## FM Ratio Reference

| OSC 2 Pitch | Ratio | Character | Best For |
|-------------|-------|-----------|----------|
| +12 semitones | 2:1 | Balanced, musical | General leads |
| +24 semitones | 4:1 | Bright, metallic | Cutting leads |
| +19 semitones | 3:1 | Hollow, reedy | Unique texture |
| +28 semitones | 5:1 | Brass-like | Bold statements |

---

## Genre Applications

### Dubstep Lead
- **Ratio:** 2:1 or 4:1
- **Amount:** 70%+
- **Filter:** High resonance (35%+)
- **FX:** Heavy DIST

### Trance Lead
- **Ratio:** 2:1
- **Amount:** 50-60%
- **Unisono:** 6 voices
- **FX:** RVRB + FLNG

### Trap Lead
- **Ratio:** 4:1
- **Amount:** 60-70%
- **Filter:** Tight envelope
- **FX:** Light DIST

### Experimental/IDM
- **Ratio:** Try 3:1, 5:1, or even non-integer
- **Amount:** 80%+
- **Waveforms:** Experiment with different combos
- **FX:** All of them

---

## Controlling FM Harshness

### If Too Harsh
1. **Reduce amount:** Try 40% instead of 70%
2. **Filter lower:** Drop cutoff to 60-70%
3. **Use sine carrier:** Cleaner than sawtooth
4. **Add LPF FX:** Post-FX filter tames highs

### If Too Weak
1. **Increase amount:** Up to 80%+
2. **Brighter ratio:** Use 4:1 instead of 2:1
3. **More unisono:** Up to 6 voices
4. **Add DIST:** X: 25%+ for edge

---

## Advanced FM Techniques

### Dual FM Layers
```
Patch A: FM lead (as above)
Patch B: Same, different ratio
Mix: 50/50 for complex texture
```

### FM + Sync Hybrid
```
FM for complexity
Add SYNC mode for aggression
Result: Extremely aggressive tone
```

### Modulated FM Amount
```
EG1 → AMOUNT
ATK: 10%
DEC: 40%
AMNT: ±40%
Result: Changing FM complexity over time
```

---

## Quick FM Lead Recipe

```
OSC 1: Sawtooth
OSC 2: Sawtooth, +12 semitones
OSC 3: Sawtooth, -12 semitones, 50% mix

MODULATION: FM, 60% amount

UNISONO: 5 voices, 60% stereo, 45% detune
FILTER: LP, 78% cutoff, 25% res

EG1: Optional → CUTOFF for bite

FX:
- DIST: X 25%, Y 70%
- RVRB: Medium

RESULT: Aggressive, cutting FM lead
```

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Too chaotic | Lower amount, use 2:1 ratio |
| Not cutting | Increase amount, add DIST |
| Too digital | Detune OSC2 ±3 cents |
| CPU heavy | Reduce unisono to 3-4 |
| Phase issues | Reduce stereo spread |

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm
