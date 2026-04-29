# Vocodex - Parameter Cheat Sheet

**Plugin Type:** Advanced Vocoder with Built-in Carrier Synthesizer
**Category:** Voice Synthesis / Creative Effect
**Official Manual:** [Vocodex](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Vocodex.htm)

---

## Core Concept

**Vocoder = Modulator (voice/rhythm) + Carrier (synth/harmonic content)**

- **Modulator:** Shapes the sound (usually voice or drums)
- **Carrier:** Provides harmonic content (usually synth or noise)
- **Result:** Modulator's rhythm/envelope applied to carrier's timbre

---

## Main Parameters

| Parameter | Range | Function | Quick Tip |
|-----------|-------|----------|-----------|
| **Bands** | 4-100 | Number of frequency analysis bands | 20-32 for vocal, 64-100 for detailed |
| **Min/Max Freq** | 20Hz-20kHz | Frequency range of vocoder | 100Hz-8kHz for speech clarity |
| **Band Width** | 0.1-4 octaves | Width of each filter band | Narrower = more defined, wider = smoother |
| **Mod Mix** | 0-100% | Modulator input level | 100% for standard vocoding |
| **Car Mix** | 0-100% | Carrier input level | 100% for standard vocoding |

---

## Carrier Synthesizer

| Control | Function | Sweet Spot |
|---------|----------|------------|
| **Waveform** | Saw/Square/Noise/Sine | Saw for rich vocoded voice |
| **Pitch** | -24 to +24 semitones | 0 for natural pitch |
| **Detune** | 0-100% | Multiple voices detuned | 20-40% for thickness |
| **Unison** | 1-9 voices | Voice layering | 3-5 voices for lush sound |
| **Filter Cutoff** | 20Hz-20kHz | Carrier tone shaping | 3-8kHz for brightness |
| **Filter Resonance** | 0-100% | Filter emphasis | 20-40% for character |

---

## Modulator Settings

| Parameter | Function | When to Adjust |
|-----------|----------|----------------|
| **Attack** | Envelope follower attack | Faster for percussive, slower for smooth |
| **Release** | Envelope follower release | Faster for staccato, slower for sustain |
| **Noise Gate** | Removes low-level modulator signal | Prevent background noise triggering vocoder |

---

## Quick Start Presets

| Use Case | Settings |
|----------|----------|
| **Classic Robot Voice** | Bands: 32, Carrier: Saw wave, Bandwidth: 1 octave |
| **Warm Vocoded Vocals** | Bands: 24, Carrier: Saw+Square mix, Add reverb |
| **Rhythmic Vocoding** | Modulator: Drums, Carrier: Pad synth, Bands: 20 |
| **Daft Punk Style** | Bands: 32, Saw carrier, Heavy sidechain compression |
| **Whispered Effect** | Carrier: Noise, Bands: 64, Low bandwidth |

---

## Band Count Guide

| Bands | Character | Use Case |
|-------|-----------|----------|
| **4-8** | Extreme lo-fi | Special effects, retro computer voice |
| **12-20** | Vintage vocoder | Classic 80s vocoder sounds |
| **24-40** | Modern clarity | Intelligible vocoded vocals |
| **50-100** | High definition | Detailed, natural-sounding vocoding |

**Trade-off:** More bands = more CPU, better clarity

---

## Carrier Source Options

### Internal Synthesizer
- **Pros:** Tight integration, built-in sounds
- **Cons:** Limited compared to external synths
- **Best For:** Quick vocoder sounds, simplicity

### External Audio (Sidechain)
- **Setup:** Route synth to Vocodex sidechain input
- **Pros:** Use any synth, more sonic variety
- **Best For:** Complex carrier timbres, layered sounds

### Noise Carrier
- **Character:** Whispered, breathy vocoding
- **Use Case:** Atmospheric effects, robot whispers
- **Tip:** Works great with speech modulator

---

## Vocoder vs Talkbox vs Autotune

| Effect | Technology | Sound Character |
|--------|------------|-----------------|
| **Vocoder** | Frequency band analysis + synthesis | Robotic, synthetic, rhythmic |
| **Talkbox** | Physical tube routing sound to mouth | Organic, guitar-like, expressive |
| **Autotune** | Pitch correction | Corrected/stylized pitch (T-Pain effect) |

**Vocodex = Pure vocoder (not talkbox or pitch correction)**

---

## Routing Strategies

### Standard Vocal Vocoding
1. **Input:** Vocal on mixer track
2. **Vocodex:** Insert on vocal track
3. **Carrier:** Use internal synth or external sidechain
4. **Result:** Vocoded vocal output

### Rhythmic Vocoding
1. **Modulator:** Drum loop
2. **Carrier:** Synth pad or chord
3. **Result:** Drums "speaking" through synth

### Creative Sound Design
- **Modulator:** Any audio (speech, drums, ambience)
- **Carrier:** Drone, evolving texture
- **Result:** Modulator rhythm applied to carrier

---

## Genre Applications

| Genre | Typical Use |
|-------|-------------|
| **Daft Punk/French House** | Classic robot voice, vocoded vocals |
| **EDM** | Build-up vocals, drop effects |
| **Hip-Hop** | Robotic ad-libs, hook effects |
| **Electro-Pop** | Retro vocoder leads |
| **Experimental** | Rhythmic textures, abstract vocoding |

---

## Famous Vocoder Tracks

1. **Daft Punk - "Around the World"** (1997)
2. **Zapp & Roger - "More Bounce to the Ounce"** (1980)
3. **Kraftwerk - "The Robots"** (1978)
4. **Imogen Heap - "Hide and Seek"** (harmonizer, similar effect)
5. **Beastie Boys - "Intergalactic"** (1998)

---

## Intelligibility Tips

### Making Vocals Clear
1. **More Bands:** 32-50 for better articulation
2. **Frequency Range:** 200Hz-6kHz for speech fundamentals
3. **Bandwidth:** Narrower (0.5-1 octave) for clarity
4. **Carrier:** Bright synth (lots of harmonics)
5. **EQ After:** Boost 2-4kHz for presence

### Deliberately Unintelligible
- **Fewer Bands:** 8-16 for lo-fi
- **Wide Bandwidth:** 2-3 octaves
- **Extreme Frequency Range:** Very wide or very narrow
- **Noise Carrier:** For whispered effect

---

## Advanced Features

### Modulator Spectrum Display
- **Real-time:** Shows modulator frequency content
- **Use:** Visualize what's being analyzed
- **Tip:** Helps diagnose modulator issues

### Carrier Spectrum Display
- **Real-time:** Shows carrier harmonic content
- **Use:** Verify carrier has enough harmonics
- **Tip:** Dull carrier = dull vocoded output

### Band Editor
- **Custom Bands:** Manually adjust each frequency band
- **Level:** Boost/cut specific bands
- **Use Case:** Emphasize certain frequencies (e.g., boost midrange for clarity)

---

## Common Mistakes to Avoid

1. **Weak Carrier:** Sine wave or dull synth = poor vocoding
2. **Too Few Bands:** Under 16 bands = hard to understand
3. **Wrong Frequency Range:** Missing speech frequencies (200Hz-4kHz)
4. **No Harmonics in Carrier:** Carrier must be harmonically rich
5. **Improper Sidechain:** External carrier not routed correctly

---

## Mixing Integration

### EQ After Vocoding
- **High-Pass:** 150-200Hz to remove mud
- **Boost:** 2-4kHz for vocal presence
- **Cut:** 400-600Hz if muddy

### Compression
- **Ratio:** 3:1 to 6:1
- **Why:** Vocoded vocals can have inconsistent dynamics
- **Sidechain:** Duck vocoded vocals under kick

### Reverb & Delay
- **Reverb:** Medium to short, 15-30% mix
- **Delay:** Rhythmic delays (1/8, 1/16) for interest
- **Tip:** Don't drown vocoded signal in reverb (loses intelligibility)

---

## CPU & Performance

- **CPU Usage:** Moderate to high (depends on band count)
- **Optimization:** Fewer bands = less CPU
- **Latency:** Minimal
- **Realtime:** Yes, suitable for live performance with careful CPU management

---

## Preset Categories

- **Classic Vocoders** - Vintage vocoder emulations
- **Modern Vocoders** - Clean, high-band vocoders
- **Special FX** - Creative non-vocal vocoding
- **Rhythmic** - Drum/rhythm modulator presets
- **Synth Carriers** - Pre-configured carrier synthesizer patches

---

## Automation Ideas

1. **Band Count:** Automate from low (8) to high (64) for effect
2. **Frequency Range:** Shift min/max for sweeping effect
3. **Carrier Pitch:** Pitch carrier up/down for variation
4. **Mod/Car Mix:** Crossfade between straight and vocoded signal

---

## Related Plugins

- **Fruity Vocoder** - Simpler, older FL vocoder
- **Pitcher** - Pitch correction (different effect)
- **Harmor** - Advanced resynthesis (can create vocoder-like effects)
- **External:** TAL-Vocoder, MeldaProduction MVocoder

---

**Last Updated:** February 3, 2026
**Status:** Complete reference material
