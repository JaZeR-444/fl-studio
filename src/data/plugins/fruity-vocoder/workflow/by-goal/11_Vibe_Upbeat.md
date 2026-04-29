# Vibe Workflow: Upbeat

## Vibe Definition
Energetic, bright, punchy, forward-moving—club-ready, hook-focused, high-energy.

## Production Translation

| Emotion | Technical Implementation |
|---------|------------------------|
| **Energy** | Fast attack, responsive decay, bright formant |
| **Clarity** | Higher band count, wider BW, full spectrum |
| **Punch** | Tight envelope, bright carrier, 10-20% white noise |
| **Presence** | Positive FORM (+0.2-0.3), air preserved |

## Routing Context

### Option A: Parallel Send (Recommended for Hooks)
```
Lead Vocal ──► Dry (60%)
                    ├──► Main Output
Vocal ──► Vocoder Return ──► Bright Saw Carrier + White Noise
                    ├──► 40-50% return (more prominent)
                    ├──► Plate reverb (1.5s)
                    ├──► EQ boost 3-5kHz
                    └──► Optional saturation
```

### Option B: Insert (For Ad-libs/Effects)
```
Ad-lib Track ──► Fruity Vocoder (100% wet)
                      ├──► Light EQ
                      ├──► Light comp
                      └──► Main Output at -12 to -15dB
```

**Why Options:**
- Parallel: Safe for hooks, blend to taste
- Insert: Full commitment for ad-libs and effects

## Step-by-Step Setup

### Step 1: Source Preparation (5 min)

**Modulator (Vocal):**
- Light compression (3:1, medium attack)
- De-ess moderately
- High-pass at 100Hz
- Target: -12dB to -6dB at vocoder input

**Carrier (Synth):**
- Bright sawtooth wave
- Full range (no heavy filtering)
- Add 15% white noise for sibilance
- Consistent level, no auto-filter sweeps

### Step 2: Vocoder Configuration (5 min)

```
FREQ:
  FORM: +0.2 to +0.3 (bright, present)
  MIN: 120-150 Hz (tight, no mud)
  MAX: 10000-12000 Hz (full air)
  SCALE: Log
  INV: Off (usually)
  BW: 55-65% (defined, clear)

ENV:
  ATTACK: 5-15 ms (tight, punchy)
  DECAY: 60-100 ms (responsive, not washed)

MIX:
  L: 0%
  R: 100%

BANDS:
  BANDS: 32-48 (high resolution)
  FILTER: 2
```

### Step 3: Post-Processing (10 min)

**Effect Chain:**
```
Fruity Vocoder
    ↓
Fruity Parametric EQ 2:
    - High-pass 120Hz
    - Boost 3kHz +2dB (presence)
    - High-shelf +1dB at 10kHz (air)
    ↓
Optional: Fruity Stereo Enhancer (20% width)
    ↓
Fruity Reverb 2 (Plate, 1.5s, 25% wet)
    ↓
Optional: Light saturation (5-10% drive)
```

### Step 4: Mix Integration (5 min)

**Return Level:** 40-50% (more prominent than moody)
- Needs to cut through mix
- Clear and punchy

**Position:** Competitive with lead, not background

**Automation:**
- Verse: 25-30% (subtle energy)
- Pre-hook build: 30% → 45% ramp
- Hook/Chorus: 45-55% (maximum energy)
- Ad-libs: 60-80% or 100% wet (dedicated track)

## What to Listen For

### Quality Checks
- [ ] Sharp attack on each syllable
- [ ] Bright, forward presence
- [ ] Rhythmic tightness (on the beat)
- [ ] Cuts through 808s and hi-hats
- [ ] Clear intelligibility (lyrics audible)
- [ ] Excitement without harshness
- [ ] "Yeah!" and ad-libs have impact

### Red Flags
| Issue | Cause | Fix |
|-------|-------|-----|
| Muddy/lacks punch | MIN too low or attack too slow | Raise MIN to 150Hz, attack to 10ms |
| Behind the beat | Attack too slow | Reduce to 5-15ms |
| Washed out | Decay too slow | Reduce to 80ms |
| Dull/not exciting | FORM too low or carrier too dark | Raise FORM to +0.25, brighten carrier |
| Robotic (unwanted) | INV on or FORM extreme | Disable INV, moderate FORM |
| Harsh/fatiguing | BW too high or sibilance | Lower BW to 55%, de-ess more |

## Variations

### Variation A: Trap Banger
**Maximum club energy**
```
FORM: +0.3
ATTACK: 5ms
DECAY: 60ms
BANDS: 40
BW: 60%
Carrier: Square wave (more aggressive)
Post: Saturation 15%, sidechain to kick
Blend: 50% return or 100% wet on ad-libs
```

### Variation B: Clean Hook
**Intelligibility priority**
```
FORM: +0.15
ATTACK: 12ms
BANDS: 48
BW: 55%
Carrier: Saw + 20% white noise
Post: Minimal processing
Blend: 40% return
```

### Variation C: Robot Ad-lib
**Classic trap robot voice**
```
FORM: +0.25
INV: On
BANDS: 20
ATTACK: 5ms
Carrier: Bright square
Post: Light bit-crusher
Blend: 100% wet (dedicated ad-lib track)
```

## Automation Ideas

### 1. Stutter Build
```
HOLD: 1/16th note stutter increasing in density
Use: Build energy toward drop
```

### 2. Energy Ramp
```
Verse:   Blend 25%
Pre:     Blend 25% → 50%
Hook:    Blend 50%
Result: Increasing energy through section
```

### 3. Formant Excitement
```
Verse:   FORM +0.1
Pre:     FORM +0.1 → +0.3
Hook:    FORM +0.3
Result: Brightening with energy
```

## Genre Applications

### Trap
- Variation A (Trap Banger) for hooks
- Variation C (Robot) for ad-libs
- High blend levels (40-60%)
- INV mode for character

### Hip-Hop (Mainstream)
- Variation B (Clean Hook)
- Balanced energy and clarity
- Moderate blend (30-40%)

### Pop-Rap
- Maximum clarity (48 bands)
- Subtle vocoding (20-30% blend)
- Focus on enhancing, not replacing

### Club/Dance
- Fastest attack (5ms)
- Tightest decay (60ms)
- Sidechain heavy to kick
- Wide stereo enhancement

## Pitfalls

| Don't Do This | Why It Fails | Instead |
|---------------|--------------|---------|
| Slow attack | Loses punch and energy | Use 5-15ms attack |
| Dark carrier | Muddy, lacks clarity | Use bright sawtooth + white noise |
| Low band count | Muffled, unclear | Use 32+ bands |
| Heavy reverb | Washes out energy | Keep reverb tight (1-1.5s) |
| Too much blend on lead | Loses clarity | 40-50% max on leads, 100% on ad-libs only |
| Ignore sidechain | Can conflict with kick | Light duck (2-3dB) to kick |
| Formant too high | Cartoonish | Keep within +0.3 for musical use |

## Reference Track Qualities

Listen for these elements in reference tracks:
- Punchy transients on every syllable
- Bright, present character
- Clear lyrics even with effect
- Competitive with drums
- Energy without harshness
- Ad-libs that cut through

---

**Vibe:** Upbeat
**Time to Setup:** 25-30 minutes
**Source:** IL-MAN, REPUTABLE
**Last Updated:** 2026-02-03
