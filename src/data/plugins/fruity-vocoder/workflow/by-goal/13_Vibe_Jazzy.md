# Vibe Workflow: Jazzy

## Vibe Definition
Smooth, sophisticated, vintage warmth, laid-back, improvisational—nuanced musicality and timeless cool.

## Production Translation

| Emotion | Technical Implementation |
|---------|------------------------|
| **Smoothness** | Medium attack/decay, moderate BW |
| **Sophistication** | Neutral formant, vintage bandwidth |
| **Warmth** | Preserved low-mids, analog-style carrier |
| **Vintage** | Lower band count, limited MAX |

## Routing Context

### Recommended: Parallel Send
```
Lead Vocal ──► Dry (75%)
                    ├──► Main Output
Vocal ──► Vocoder Return ──► Analog-Style Pad
                    ├──► 25-30% return
                    ├──► Tape emulation
                    ├──► Plate reverb (1.5-2s)
                    └──► Warm EQ (slight 200-400Hz boost)
```

**Why Parallel:**
- Preserves natural vocal quality
- Vocoded layer adds "vintage halo"
- Sophisticated, not gimmicky
- Classy and restrained

## Step-by-Step Setup

### Step 1: Source Preparation (5 min)

**Modulator (Vocal):**
- Gentle compression (2:1, slow)
- Light de-essing
- High-pass at 100Hz
- Natural, nuanced performance

**Carrier (Analog-Style):**
- Simple synthesis (3xOsc)
- 2 sawtooth + 1 triangle
- Slight detune (±5-7 cents)
- Low-pass filter at 3kHz
- Subtle chorus (10% rate, 20% depth)
- Warm, round character

### Step 2: Vocoder Configuration (5 min)

```
FREQ:
  FORM: 0.0 (neutral, natural)
  MIN: 100 Hz (warmth preserved)
  MAX: 6000-8000 Hz (vintage bandwidth)
  SCALE: Log
  INV: Off
  BW: 40-50% (smooth, not clinical)

ENV:
  ATTACK: 60-100 ms (relaxed)
  DECAY: 150-300 ms (natural sustain)

MIX:
  L: 0%
  R: 100%

BANDS:
  BANDS: 16-24 (vintage character)
  FILTER: 2
```

### Step 3: Post-Processing (10 min)

**Effect Chain:**
```
Fruity Vocoder
    ↓
Tape Emulation (FerricTDS or similar, 10-15% drive)
    ↓
Fruity Reverb 2 (Plate, 1.5-2s, 25-30% wet)
    ↓
Fruity Parametric EQ 2:
    - High-pass 100Hz
    - Boost 200-400Hz +2-3dB (warmth)
    - Gentle 3kHz +1dB (presence)
    - High-shelf -1dB at 10kHz (smooth)
    ↓
Optional: Light compression (2:1, glue)
```

### Step 4: Mix Integration (5 min)

**Return Level:** 25-30%
- Very subtle, sophisticated
- Should enhance, not announce itself
- Like a "ghost" of the vocal

**Position:** Behind and around lead vocal

**Automation:**
- Verse: 25% (consistent bed)
- Pre-chorus: 28% (slight lift)
- Chorus: 30% (maximum but still subtle)
- Bridge: 25% with slight FORM variation
- Solos/Improv: 20% (let solo shine)

## What to Listen For

### Quality Checks
- [ ] Smooth, relaxed vocal quality
- [ ] Warmth in low-mids (200-400Hz)
- [ ] Natural, not robotic intelligibility
- [ ] Sophisticated, "lounge" character
- [ ] Vintage vocoder vibe (1970s-80s)
- [ ] Not aggressive or modern-sounding
- [ ] Supports without distracting

### Red Flags
| Issue | Cause | Fix |
|-------|-------|-----|
| Too aggressive | Fast attack or high BW | Slow attack to 80ms+, BW to 45% |
| Too modern/digital | Too many bands | Reduce to 16-24 bands |
| Harsh or clinical | BW too high or carrier too bright | Lower BW, warm the carrier |
| Thin/lacking warmth | MIN too high or EQ wrong | Lower MIN, boost 200-400Hz |
| Robotic | INV on or FORM extreme | Disable INV, keep FORM near 0 |
| Too prominent | Return level too high | Reduce to 25-30% |

## Variations

### Variation A: Velvet Lounge
**Maximum sophistication**
```
FORM: 0.0
ATTACK: 80ms
DECAY: 200ms
BANDS: 20
BW: 45%
MAX: 7000Hz
Post: Tape emulation, plate reverb, vinyl noise overlay
Blend: 25% return
```

### Variation B: Blue Note
**Vintage jazz-hop**
```
FORM: -0.1 (slight darkness)
ATTACK: 100ms
BANDS: 16 (vintage resolution)
BW: 40%
MAX: 6000Hz
Carrier: Simple 3xOsc with 3kHz LPF
Post: Tape, vinyl crackle, warm EQ
Blend: 25% return
```

### Variation C: Speakeasy
**Intimate, close**
```
FORM: +0.05 (barely bright)
ATTACK: 60ms
DECAY: 180ms
BANDS: 24
BW: 50%
MAX: 5000Hz (telephone-like intimacy)
Post: Room reverb (1s), minimal processing
Blend: 20% return
```

## Automation Ideas

### 1. Vintage Drift
```
MIN: 100 ──→ 200 over 8 bars
MAX: 8000 ──→ 6000 over 8 bars
Result: Gradual "radio degradation"
```

### 2. Subtle Breathing
```
FORM: Slow LFO ±0.08 over 16 bars
Result: Almost imperceptible character shift
```

### 3. Lounge Swell
```
Return Level: 25% ──→ 30% over 4 bars
Result: Gentle lift into chorus
```

## Genre Applications

### Neo-Soul
- Variation A (Velvet Lounge)
- Heavy use of tape emulation
- 25-30% blend for warmth
- Background harmonies at 30%

### Jazz-Hop / Boom Bap
- Variation B (Blue Note)
- Vinyl noise overlay essential
- Sample-friendly aesthetic
- 25% blend on vocal samples

### Contemporary R&B (Sophisticated)
- Variation A with less tape
- Cleaner but still warm
- 25% blend for texture
- Solo sections: reduce to 20%

### Lounge / Chillout
- Variation C (Speakeasy)
- Minimal processing
- 20-25% blend
- Space for improvisation

## Pitfalls

| Don't Do This | Why It Fails | Instead |
|---------------|--------------|---------|
| Fast attack | Too aggressive for jazzy | Relax to 60-100ms |
| High band count | Too modern/digital | Limit to 16-24 for vintage feel |
| Extreme formant shift | Loses human quality | Keep FORM within ±0.1 |
| Bright carrier | Too modern/aggressive | Use warm, filtered pads |
| High BW | Too clinical | Stay 40-50% |
| Too much blend | Becomes effect, not enhancement | Keep at 25-30% max |
| No tape/vintage processing | Lacks character | Add subtle tape, vinyl, saturation |

## Reference Track Qualities

Listen for these elements in reference tracks:
- Warmth without muddiness
- Smoothness without boredom
- Vintage character
- Sophisticated restraint
- Supports the music without dominating
- Timeless quality (not trendy)

---

**Vibe:** Jazzy
**Time to Setup:** 25-30 minutes
**Source:** IL-MAN, REPUTABLE
**Last Updated:** 2026-02-03
