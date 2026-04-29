# Vintage Phaser - Parameter Cheat Sheet

**Plugin Type:** BBD Phaser Effect
**Category:** Modulation / Time-Based Effect
**Emulates:** Electro-Harmonix Small Stone Phaser
**Official Manual:** [Vintage Phaser](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Vintage%20Phaser.htm)

---

## Main Parameters

| Parameter | Range | Function | Quick Tip |
|-----------|-------|----------|-----------|
| **Rate** | 0.01-10 Hz | LFO modulation speed | Slow (0.1-0.5 Hz) = swirl, fast (2-5 Hz) = vibrato |
| **Depth** | 0-100% | Modulation intensity | 70-90% for classic phaser sweep |
| **Feedback** | 0-100% | Regeneration amount | Higher = more pronounced peaks/notches |
| **Stages** | 2 / 4 / 6 / 8 | Number of phase shift stages | More stages = deeper, more complex sound |
| **Dry/Wet** | 0-100% | Effect mix | 40-60% for classic phaser |

---

## BBD Character Controls

| Parameter | Range | Function | When to Use |
|-----------|-------|----------|-------------|
| **Color Switch** | Off/On | Adds resonance and BBD character | Enable for vintage Small Stone tone |
| **Noise** | 0-100% | Vintage BBD noise simulation | 15-30% for authenticity |
| **Stereo Mode** | Mono/Stereo | Output configuration | Stereo for width, mono for focus |

---

## Stage Count Guide

| Stages | Character | Sound Description | Use Case |
|--------|-----------|-------------------|----------|
| **2** | Subtle | Gentle, mild phasing | Subtle movement, modern clean |
| **4** | Classic | Standard phaser sound | General purpose, Small Stone default |
| **6** | Deep | Rich, complex phasing | Dramatic sweeps, psychedelic |
| **8** | Extreme | Very deep, filter-like | Special effects, intense modulation |

**Note:** Small Stone is 4-stage phaser

---

## Quick Start Presets

| Use Case | Settings |
|----------|----------|
| **Classic Psychedelic** | Stages: 4, Rate: 0.3 Hz, Depth: 85%, Feedback: 70%, Color: On |
| **Van Halen Phase** | Stages: 6, Rate: 0.5 Hz, Depth: 75%, Feedback: 60%, Dry/Wet: 50% |
| **Subtle Synth** | Stages: 2, Rate: 0.8 Hz, Depth: 40%, Feedback: 30%, Color: Off |
| **Jet Plane** | Stages: 8, Rate: 2.5 Hz, Depth: 95%, Feedback: 85% |
| **Slow Swirl** | Stages: 4, Rate: 0.1 Hz, Depth: 80%, Feedback: 50% |

---

## Rate (Speed) Guide

| Hz Range | Musical Effect | Application |
|----------|----------------|-------------|
| **0.01-0.1 Hz** | Ultra-slow evolve | Ambient pads, soundscapes |
| **0.1-0.5 Hz** | Classic swirl | Psychedelic rock, funk |
| **0.5-1.5 Hz** | Medium phase | Modern rock, synth leads |
| **1.5-3.0 Hz** | Fast modulation | Special FX, vibrato-like |
| **3.0+ Hz** | Vibrato/tremolo | Extreme effects |

---

## Feedback Guide

| Feedback % | Character | Use Case |
|------------|-----------|----------|
| **0-20%** | Gentle | Subtle enhancement |
| **20-40%** | Mild | Natural-sounding phase |
| **40-60%** | Classic | Standard phaser tone |
| **60-80%** | Pronounced | Obvious phasing effect |
| **80-100%** | Extreme | Aggressive, resonant peaks |

**Warning:** Very high feedback (90%+) can resonate at specific frequencies

---

## Color Switch Explained

### Off (Bypass)
- Clean, transparent phasing
- Modern, hi-fi sound
- Less character, more neutral

### On (Engaged)
- Adds resonance peaks
- Authentic Small Stone tone
- More "vintage" and colored
- Emphasizes certain frequencies

**Recommendation:** Enable for authentic 70s/80s phaser tone

---

## Stereo Processing

### Mono Mode
- Single phaser applied to center
- Good mono compatibility
- Focused sound

### Stereo Mode
- Phase-offset LFOs for left/right
- Creates width and movement
- May have phase cancellation in mono

**Tip:** Use stereo for synths/pads, mono for guitars

---

## Genre Applications

| Genre | Typical Settings |
|-------|------------------|
| **70s Rock** | Stages: 4, Rate: 0.4 Hz, Feedback: 60%, Color: On |
| **Funk** | Stages: 4, Rate: 0.8 Hz, Feedback: 50%, Moderate wet |
| **Psychedelic** | Stages: 6-8, Slow rate, High feedback |
| **Synthwave** | Stages: 4, Rate: 0.5 Hz, Clean (Color off) |
| **Trance** | Stages: 6, Rate: 1.2 Hz, Medium feedback |

---

## Famous Phaser Sounds

### Small Stone Reference Tracks
1. **Pink Floyd** - "Have a Cigar" (guitar)
2. **Van Halen** - "Eruption" (guitar solo)
3. **Erykah Badu** - "On & On" (Rhodes piano)
4. **Jean-Michel Jarre** - Synth phasing

### Technique Origins
- **Eddie Van Halen:** Used MXR Phase 90 (similar to Small Stone)
- **Brian May (Queen):** Layered phasing on guitars
- **Kraftwerk:** Synth phasing in electronic music

---

## Routing Strategies

### Insert Effect
- Place directly on track
- Use moderate dry/wet (40-60%)
- Best for individual instruments

### Send Effect
- Place on send track (100% wet)
- Parallel blend with dry signal
- More control over effect intensity

### Automation
- Automate rate for build-ups
- Increase depth during choruses
- Sweep feedback for dynamic interest

---

## Phaser vs Flanger vs Chorus

| Effect | Delay Time | Sound Character |
|--------|------------|-----------------|
| **Phaser** | No delay (phase shift only) | Swooshing, peaks/notches |
| **Flanger** | Very short delay (1-10ms) | Metallic, jet-plane, comb filtering |
| **Chorus** | Longer delay (10-30ms) | Doubling, thickening, detuning |

**Vintage Phaser = Pure phase shifting (no delay)**

---

## Common Mistakes to Avoid

1. **Too Fast Rate:** Above 2 Hz sounds like vibrato, not phaser
2. **Excessive Feedback:** Can cause harsh resonance
3. **Too Much Wet:** 100% wet loses low-end body (unless on send)
4. **Wrong Stage Count:** More stages ≠ always better
5. **Ignoring Color Switch:** Massive tone difference when enabled

---

## Mixing Integration

### Frequency Considerations
- **Phasing Creates Notches:** Can thin out tone
- **Solution:** Use parallel processing (send track)
- **EQ After:** Boost frequencies that get phased out

### Stereo Width
- **Stereo Mode:** Creates movement in stereo field
- **Mono Check:** Verify no excessive phase cancellation
- **Width Enhancement:** Combine with stereo shaper carefully

### Automation Ideas
1. **Verse:** Dry or subtle phase (20% wet)
2. **Chorus:** Full phase (60% wet)
3. **Bridge:** Slow down rate, increase depth
4. **Build-Up:** Automate rate from slow to fast

---

## CPU & Performance

- **CPU Usage:** Low
- **Latency:** Minimal
- **Realtime Safe:** Yes
- **Quality:** Digital BBD emulation

---

## Combining with Other Effects

### Before Phaser
- **Compression:** Even out dynamics first
- **Distortion/Drive:** Phaser reacts to harmonics
- **EQ:** Shape tone before phasing

### After Phaser
- **Reverb:** Add space to phased signal
- **Delay:** Echo the phaser movement
- **Compression:** Tame peaks from high feedback

---

## Historical Context

### Electro-Harmonix Small Stone
- **Released:** 1974
- **Type:** 4-stage analog phaser
- **Famous For:** Simplicity and distinctive tone
- **Artists:** Van Halen, Pink Floyd, countless others

### BBD Technology
- **Function:** Phase-shifting via all-pass filters
- **Character:** Warm, slightly noisy, musical
- **Advantage:** Predictable, smooth sweeps

---

## Related Plugins

- **Vintage Chorus** - Companion BBD chorus effect
- **Fruity Phaser** - Clean digital phaser
- **Fruity Flanger** - For flanging effects
- **Fruity Love Philter** - Advanced filtering with phaser-like sweeps

---

**Last Updated:** February 3, 2026
**Status:** Complete reference material
