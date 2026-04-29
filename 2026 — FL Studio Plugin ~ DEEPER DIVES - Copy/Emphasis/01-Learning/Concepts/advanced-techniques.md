Tags: hip-hop/rap | R&B | electric

## Emphasis Advanced Techniques

### Dynamic Shelving

**What it is:**
- Shelf boost that reacts to content
- More enhancement on loud parts
- Less on quiet parts

**Setup:**
1. Place compressor before Emphasis
2. Compressor: Ratio 2:1, Threshold -20dB
3. Emphasis: High +3dB, Low +2dB
4. Result: Enhanced that breathes

**When to Use:**
- Vocals that vary in volume
- Instruments with dynamic range
- Master bus enhancement

### Frequency-Dependent Enhancement

**What it is:**
- Different enhancement per frequency
- Bass gets different treatment than highs

**Advanced Workflow:**
| Frequency | Harmonic | Shelf | Purpose |
|-----------|----------|-------|---------|
| 50-100 Hz | 35% | Low +3dB | Foundation |
| 100-500 Hz | 25% | Low +1.5dB | Body |
| 500Hz-2kHz | 20% | N/A | Presence |
| 2-10 kHz | 30% | High +3dB | Clarity |
| 10+ kHz | 35% | High +2dB | Air |

**Implementation:**
- Multiple Emphasis instances
- Each handles one band
- Result: Custom enhancement curve

### Enhancing Existing EQ

**Workflow:**
1. Apply EQ first (correction)
2. Apply Emphasis after (enhancement)
3. EQ handles problems
4. Emphasis adds polish

**Why This Works:**
- EQ: Fixes issues
- Emphasis: Adds final polish
- Clear signal path

### Master Bus Stacking

**Strategy:**
1. Instance 1: Bass emphasis (Low +3dB, Harmonic 25%)
2. Instance 2: Air emphasis (High +2dB, Harmonic 20%)
3. Instance 3: Presence (Mid +2dB, Harmonic 22%)
4. Result: Full-spectrum enhancement

**Individual Focus:**
| Instance | Purpose | Settings |
|----------|---------|----------|
| 1 | Bass | Low +3dB, Harm 25% |
| 2 | Air | High +2dB, Harm 20% |
| 3 | Clarity | Mid +2dB, Harm 22% |

### Creating "Signature" Enhancement

**What it is:**
- Consistent enhancement across all tracks
- Creates cohesive sound
- Identifies your mix style

**Signature Settings:**
| Element | Bass Freq | Bass Gain | High Freq | High Gain |
|---------|-----------|-----------|-----------|-----------|
| Vocals | 100 Hz | +2 dB | 10 kHz | +3 dB |
| Bass | 55 Hz | +3 dB | 12 kHz | +1 dB |
| Drums | 80 Hz | +2.5 dB | 8 kHz | +2 dB |
| Synths | 120 Hz | +1.5 dB | 12 kHz | +2.5 dB |
| Master | 70 Hz | +2 dB | 10 kHz | +2 dB |

### Troubleshooting Enhancement Issues

| Problem | Likely Cause | Solution |
|---------|-------------|----------|
| Mix sounds harsh | High boost too aggressive | Reduce high shelf |
| Low-end muddy | Low boost too much | Reduce low shelf |
| Phase issues | Extreme boost | Reduce gain, narrow Q |
| No improvement | Enhancement too subtle | Increase harmonic |
| Sound changed too much | Wet too high | Blend more dry |
| Clipping | Output too hot | Enable limiter |

### The "Reference Match" Workflow

**Goal:** Match commercial sound

**Steps:**
1. Import reference track
2. Apply Emphasis to your mix
3. Match: Adjust to match frequency balance
4. Compare: A/B with reference
5. Refine: Small adjustments

**Key Insight:**
- Enhance to match, not exceed
- Reference should guide enhancement

### Enhancement Before/After Comparison

**Before Enhancement:**
- Raw, unprocessed sound
- May lack presence
- Can feel dull or harsh

**After Enhancement:**
- Added harmonic content
- Frequency balance improved
- More "polished" feel

**A/B Testing:**
1. Process OFF
2. Note issues (dull, thin, etc.)
3. Process ON
4. Verify improvement
5. Note what changed
6. If no improvement: Disable
