# Vintage Chorus - Parameter Cheat Sheet

**Plugin Type:** BBD Chorus Effect
**Category:** Modulation / Time-Based Effect
**Emulates:** Roland Juno 6/60 Chorus
**Official Manual:** [Vintage Chorus](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Vintage%20Chorus.htm)

---

## Main Parameters

| Parameter | Range | Function | Quick Tip |
|-----------|-------|----------|-----------|
| **Mode** | I / II / I+II | Chorus intensity modes | I = subtle, II = deeper, I+II = widest |
| **Rate** | 0.1-10 Hz | LFO modulation speed | Slower = warmer, faster = vibrato |
| **Depth** | 0-100% | Modulation intensity | Higher = more chorus movement |
| **Dry/Wet** | 0-100% | Effect mix level | 50% for classic chorus, 100% for special effects |

---

## BBD Character Controls

| Parameter | Range | Function | When to Use |
|-----------|-------|----------|-------------|
| **BBD Clock Rate** | Low/Medium/High | Bucket brigade delay quality | Lower = darker/warmer, Higher = cleaner |
| **Noise** | 0-100% | Vintage BBD noise amount | Add for authenticity, reduce for clean modern sound |
| **Filtering** | Off/On | BBD high-frequency roll-off | Enable for authentic vintage character |

---

## Chorus Modes Explained

| Mode | Description | Sound Character | Best For |
|------|-------------|-----------------|----------|
| **I** | Single chorus voice | Subtle thickness, narrow stereo | Subtle enhancement, mono compatibility |
| **II** | Different chorus voice | Deeper modulation, medium stereo | Richer chorus effect |
| **I+II** | Both voices combined | Widest stereo image, lush | Synth pads, guitars, maximum width |

---

## Quick Start Presets

| Use Case | Settings |
|----------|----------|
| **Classic Synth Pad** | Mode: I+II, Rate: 0.5 Hz, Depth: 60%, Dry/Wet: 70% |
| **Subtle Guitar** | Mode: I, Rate: 0.8 Hz, Depth: 40%, Dry/Wet: 30% |
| **80s Synth Bass** | Mode: II, Rate: 1.2 Hz, Depth: 50%, Dry/Wet: 50% |
| **Juno String** | Mode: I+II, Rate: 0.4 Hz, Depth: 70%, Dry/Wet: 80% |
| **Modern Clean** | Mode: I, Rate: 1.0 Hz, Depth: 30%, Noise: 0% |

---

## BBD Technology Emulation

### What is BBD?
- **Bucket Brigade Device:** Analog delay technology
- **Character:** Warm, slightly noisy, bandwidth-limited
- **Famous Examples:** Boss CE-1, Roland Juno series, Electro-Harmonix Small Clone

### Emulation Features
- **Clock Rate:** Simulates BBD chip clock frequency
- **Noise:** Replicates characteristic BBD hiss
- **Filtering:** Models BBD bandwidth limitations
- **Modulation:** Authentic LFO characteristics

---

## Rate (Speed) Guide

| Hz Range | Musical Effect | Application |
|----------|----------------|-------------|
| **0.1-0.3 Hz** | Very slow swirl | Ambient pads, evolving textures |
| **0.4-0.8 Hz** | Classic chorus speed | Synth strings, warm pads |
| **0.9-1.5 Hz** | Medium chorus | General purpose, 80s sounds |
| **1.6-3.0 Hz** | Fast chorus | Bright guitars, modern synths |
| **3.0+ Hz** | Vibrato territory | Special effects, shimmer |

---

## Depth (Intensity) Guide

| Depth % | Character | Use Case |
|---------|-----------|----------|
| **0-20%** | Barely noticeable | Subtle thickening |
| **20-40%** | Mild chorus | Natural enhancement |
| **40-60%** | Classic chorus | Standard sweet spot |
| **60-80%** | Deep chorus | Lush, obvious effect |
| **80-100%** | Extreme modulation | Special FX, vibrato |

---

## Stereo Width Control

The chorus effect creates stereo width through phase-shifted modulation:

- **Mode I:** Narrow width, centered
- **Mode II:** Medium width
- **Mode I+II:** Maximum width, dual-voice spread

**Tip:** Check mono compatibility when using I+II mode

---

## Routing Strategies

### Insert Effect (Direct)
- Place on synth/guitar track
- Use moderate Dry/Wet (30-70%)
- Best for individual instrument processing

### Send Effect (Parallel)
- Place on send track
- Use 100% Wet
- Control intensity via send level
- Preserves dry signal clarity

### Bus Processing
- Apply to group of instruments
- Unifies multiple elements
- Creates cohesive ensemble sound

---

## Genre Applications

| Genre | Typical Settings |
|-------|------------------|
| **Synthwave/80s** | Mode: I+II, Rate: 0.5 Hz, Depth: 70%, High Noise |
| **Ambient** | Mode: I+II, Rate: 0.2 Hz, Depth: 80%, Low Noise |
| **Modern Pop** | Mode: I, Rate: 1.2 Hz, Depth: 40%, No Noise |
| **Rock Guitar** | Mode: I, Rate: 0.8 Hz, Depth: 50%, Medium Noise |
| **Trance Leads** | Mode: II, Rate: 1.5 Hz, Depth: 60%, No Noise |

---

## Juno Sound Recreation

### Classic Juno String Sound
1. **Start with:** Saw wave synth
2. **Chorus Mode:** I+II
3. **Rate:** 0.4-0.5 Hz (slow)
4. **Depth:** 70%
5. **Dry/Wet:** 80-90%
6. **BBD:** Medium clock, some noise
7. **Add:** Slight reverb after chorus

### Juno Bass
1. **Saw or square wave**
2. **Mode:** II (deeper modulation)
3. **Rate:** 1.0-1.5 Hz
4. **Depth:** 50%
5. **Dry/Wet:** 50%
6. **Keep low end:** High-pass filter at 150Hz on chorus send

---

## Common Mistakes to Avoid

1. **Too Much Depth:** Over 80% can sound unnatural and wobbly
2. **Too Fast Rate:** Above 2.5 Hz sounds like vibrato, not chorus
3. **Mono Source Only:** Chorus works best on already-stereo sources
4. **Over-Processing:** Adding chorus to everything = muddy mix
5. **Ignoring Mono Compatibility:** Always check how it sounds in mono

---

## Mixing Integration

### Frequency Considerations
- **Chorus Creates Movement:** Can cloud bass frequencies
- **Solution:** High-pass filter chorus send at 200-300 Hz
- **Alternative:** Use chorus only on mid/high frequencies

### Stereo Placement
- **Wide Chorus:** Push to sides with stereo enhancer
- **Narrow Chorus:** Keep centered for focus
- **Tip:** Pan dry signal center, chorus to sides

### Volume Automation
- **Verses:** Lower chorus (30-40% wet)
- **Choruses:** Increase chorus (60-80% wet)
- **Drops:** Full chorus for impact

---

## Stacking & Layering

### Dual Chorus Setup
- **Chorus 1:** Vintage Chorus (BBD character)
- **Chorus 2:** Fruity Chorus (clean, digital)
- **Result:** Hybrid vintage/modern character

### Chorus + Other Effects

**Before Chorus:**
- Compression (evens out modulation)
- EQ (shape tone before modulation)
- Saturation (adds harmonics)

**After Chorus:**
- Reverb (smooths chorus tails)
- Delay (rhythmic echo of chorus)
- Limiter (control output)

---

## CPU & Performance

- **CPU Usage:** Low to moderate
- **Latency:** Minimal
- **Realtime Safe:** Yes
- **Oversampling:** None (analog-style processing)

---

## Automation Ideas

1. **Depth Automation:** Increase during choruses/breakdowns
2. **Rate Automation:** Slow down for dreamy sections
3. **Dry/Wet Automation:** Build from dry to wet
4. **Mode Switching:** Start with I, switch to I+II for width

---

## Comparison to Other Chorus Plugins

| Plugin | Character | Use Case |
|--------|-----------|----------|
| **Vintage Chorus** | Warm BBD, Juno emulation | Vintage synths, authentic 80s |
| **Fruity Chorus** | Clean digital | Modern production, clarity |
| **Fruity Flanger** | Metallic, jet-plane | Aggressive modulation |
| **Delay-Based Chorus** | Custom, flexible | Experimental chorus |

---

## Historical Context

### Roland Juno Series
- **Released:** 1982-1984
- **Famous For:** Affordable polyphonic synth with chorus
- **Artists:** Vince Clarke (Depeche Mode), Underworld, Aphex Twin
- **Legacy:** Defining sound of 80s music

### BBD Chips
- **Manufacturer:** Originally by Matsushita/Panasonic (MN series)
- **Function:** Analog delay via capacitor array
- **Limitations:** Noise, bandwidth reduction, clock noise
- **Character:** Warm, musical degradation

---

## Related Plugins

- **Fruity Chorus** - Digital chorus for clean modulation
- **Fruity Flanger** - Related modulation effect
- **Vintage Phaser** - Companion vintage modulation
- **Hyper Chorus** - Advanced chorus with more parameters

---

**Last Updated:** February 3, 2026
**Status:** Complete reference material
