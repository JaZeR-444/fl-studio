# Additive Synthesis in Harmor

Understanding the 516 partials per voice architecture that makes Harmor FL Studio's most powerful additive synthesizer.

## Overview

Harmor's additive synthesis engine generates sound by combining up to **516 sine wave partials (harmonics)** per voice. Unlike subtractive synthesis that starts with a complex waveform and removes harmonics with filters, additive synthesis builds sounds from the ground up by adding individual harmonics.

[SRC: IL-MAN]

---

## The 516 Partial Architecture

### What Are Partials?

Partials are individual sine waves at specific frequencies that combine to create complex timbres:
- **Fundamental (1st partial)**: Determines the perceived pitch
- **Overtones (2nd-516th partials)**: Create timbre and character
- Each partial has independent: Amplitude, Frequency, Phase, Envelope

### The Harmor Difference

| Feature | Standard Additive | Harmor |
|---------|------------------|---------|
| Partials per voice | 64-128 | **516** |
| Frequency resolution | Limited | **Continuous** |
| Phase control | Basic | **Full per-partial** |
| Envelope complexity | Simple | **Multi-point per partial** |

---

## A/B Dual Engine System

Harmor features two completely independent additive engines (A and B) that can be:
- **Mixed** for layered timbres
- **Modulated** separately for evolving sounds
- **Processed** with different effects

### Engine Architecture

```
Engine A          Engine B
   ↓                 ↓
516 Partials     516 Partials
   ↓                 ↓
Sub Timbre       Sub Timbre
   ↓                 ↓
Main Timbre      Main Timbre
   ↓                 ↓
Processors       Processors
   ↓                 ↓
   └──→ MIX ←──────┘
         ↓
     Global FX
```

### Mixing A and B

The **Mix** parameter (0-100%) controls the balance:
- **0%** = Engine A only
- **50%** = Equal blend (most common)
- **100%** = Engine B only

**Hip-Hop Technique:** Set A for sub fundamentals, B for harmonics - create 808-style bass with precise control over each harmonic's decay.

---

## Timbre Sections: Sub vs Main

### Sub Timbre

The **Sub** section controls the fundamental and early harmonics:
- **Range**: First ~32 partials
- **Character**: Warmth, body, low-end definition
- **Best For**: Sub bass fundamentals, 808 sub frequencies

**Key Controls:**
- **Sub Level**: Overall amplitude of sub harmonics
- **Sub Shape**: Harmonic distribution curve
- **Sub Slope**: How quickly harmonics attenuate

### Main Timbre

The **Main** section controls the remaining ~484 partials:
- **Range**: Higher harmonics and overtones
- **Character**: Brightness, attack, timbral complexity
- **Best For**: Lead presence, vocal clarity, harmonic richness

**Key Controls:**
- **Main Level**: Overall amplitude of main harmonics
- **Main Shape**: Harmonic distribution
- **Main Slope**: Attenuation curve

### Working Together

```
Sub Timbre (Warmth)    Main Timbre (Presence)
      ↓                       ↓
   [0-1kHz]              [1kHz-20kHz+]
      ↓                       ↓
  Fundamentals          Overtones & Brilliance
      ↓                       ↓
      └────→ Combined Output ←────┘
```

**Pro Tip:** For vocal resynthesis, boost Sub for warmth, adjust Main for intelligibility.

---

## Phase and Amplitude in Additive

### Partial Phase

Each of the 516 partials has independent phase control:
- **Phase affects**: Attack character, timbral quirks, stereo image
- **Random Phase**: Creates natural, organic attack
- **Locked Phase**: Precise, clinical attack (good for EDM)

### Amplitude Envelopes

Unlike subtractive synths with a single filter envelope, Harmor has:
- **Global amplitude envelope**: Overall loudness contour
- **Per-partial envelopes**: Individual harmonic evolution
- **Timbre envelopes**: How the harmonic balance changes over time

**Time-Stretching Secret:** Harmor's additive nature means time-stretching doesn't create artifacts - it simply recalculates partial positions.

---

## Harmonic Drawing and Editing

### The Harmonic Editor

Harmor's unique interface allows drawing custom harmonic content:
- **Vertical axis**: Partial amplitude (0-100%)
- **Horizontal axis**: Partial number (1-516)
- **Draw modes**: Freehand, line, curve, harmonic series

### Common Drawing Patterns

**Sawtooth Approximation:**
```
Amplitude
100% ┤████
 50% ┤███████
 25% ┤██████████
 10% ┤███████████████
  0% ┼────────────────
     1  4  8  16  32  Partials
```
Pattern: 1/n amplitude (1st = 100%, 2nd = 50%, 3rd = 33%, etc.)

**Square Approximation:**
```
Amplitude
100% ┤████    ████    ████
  0% ┤────████────████────
     1  3  5  7  9  11  Partials
```
Pattern: Only odd harmonics with 1/n amplitude

**Triangle Approximation:**
```
Amplitude
100% ┤███
 50% ┤██████
 25% ┤█████████
 10% ┤████████████
  0% ┼────────────────
     1  3  5  9  15  Partials
```
Pattern: Odd harmonics with 1/n² amplitude

---

## Unique Additive Features

### 1. Prism (Harmonic Warping)

The **Prism** effect creates inharmonic frequencies by multiplying partials:
- **Amount**: How much warping is applied
- **Creates**: Metallic, bell-like, or dissonant textures
- **Use Case**: Growl bass, metallic leads, sci-fi effects

### 2. Blur (Partial Smearing)

**Blur** spreads energy across adjacent partials:
- **Low settings**: Slight thickening
- **High settings**: Dense, cloud-like textures
- **Use Case**: Pad thickening, vocal doubling, atmospheric effects

### 3. Pluck (Decay Shaping)

**Pluck** applies different decay times to different frequency bands:
- **High frequencies**: Faster decay (simulates string damping)
- **Low frequencies**: Slower decay (maintains body)
- **Use Case**: Realistic string/plucked instruments from scratch

### 4. Strum (Chorus/Detune)

**Strum** detunes partials against each other:
- **Subtle**: Natural chorus effect
- **Extreme**: Dissonant, detuned textures
- **Use Case**: Vocal thickening, unison effects, vintage character

---

## Filter Section: Custom Drawing

Harmor's filter is unique - you **draw the frequency curve**:

### Drawing the Filter Shape

1. **Click and drag** in the filter display
2. **Create any curve**: Low-pass, high-pass, band-pass, notches, resonant peaks
3. **Multiple points**: Complex multi-band filtering
4. **Smooth or sharp**: Any slope you need

### Filter vs Traditional Subtractive

| Aspect | Subtractive Filter | Harmor Custom Filter |
|--------|-------------------|---------------------|
| Slope | Fixed (12/24dB) | **Any curve** |
| Resonance | Single peak | **Multiple peaks** |
| Shape | Standard types | **Completely custom** |
| Modulation | Cutoff only | **Any point on curve** |

**Hip-Hop Application:** Draw a smile curve (boost lows and highs, scoop mids) for classic "scooped" vocal or drum sounds.

---

## Unison and Voices

Harmor's unison system duplicates and detunes voices:
- **Voices**: 1-9 voices per note
- **Detune**: Spread amount between voices
- **Stereo**: Pan voices across the stereo field
- **Blend**: Mix dry and processed voices

**Additive Advantage:** Each unison voice has all 516 partials - massive, dense sounds without traditional "phasing" issues.

---

## Performance Considerations

### CPU Usage Factors

| Factor | Impact | Optimization |
|--------|--------|--------------|
| Active partials | High | Disable unused partial ranges |
| Unison voices | High | Use 3-4 voices instead of 9 |
| Resynthesis mode | Medium | Use IMG tab for analysis |
| Effects | Medium | Disable unused effects |

### Voice Limit

Harmor has a **maximum polyphony** - when exceeded:
- Oldest voices are cut (standard)
- Or: Newest voices don't play (optional)
- Adjust in the **MISC** tab

---

## Summary: Additive Power in Harmor

1. **516 partials per voice** = Massive harmonic complexity
2. **Dual A/B engines** = Layered, evolving timbres
3. **Sub vs Main timbre** = Precise frequency control
4. **Custom filter drawing** = Unlimited filter possibilities
5. **Unique processors** (Prism, Blur, Pluck, Strum) = Sounds impossible in subtractive synthesis
6. **Perfect time-stretching** = Lossless sample manipulation

**The Bottom Line:** Harmor's additive engine can recreate any sound by defining its harmonic content precisely - from vintage analog warmth to impossible futuristic textures.

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Harmor.htm
