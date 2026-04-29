# Synth Fattening Chains

Complete workflow for adding width, depth, saturation, and character to synthesizers using Hardcore. [SRC: IL-MAN]

## Overview

Synthesizers—especially digital virtual analog and software synths—can sound thin, sterile, or two-dimensional. The Synth Fattening Chain uses Hardcore's modulation effects, subtle saturation, and cabinet simulation to add analog-style warmth, stereo width, and three-dimensional character.

## Why Synths Need Fattening

**Digital Sterility:**
- Pure waveforms lack harmonic complexity
- No analog circuit noise or saturation
- Flat dynamics without natural movement

**The Solution:**
- Modulation adds stereo width and movement
- Saturation adds harmonics and warmth
- Cabinet simulation adds speaker character
- Time effects add depth and space

## Method 1: Analog Warmth

**Goal:** Subtle saturation and character like vintage analog synths

### Chain Configuration
```
Position 1: Compressor (Analog-style leveling)
Position 2: Distortion (Gentle saturation)
Position 3: Cabinet 2 (Vintage)
```

### Detailed Settings

**1. Compressor** (Gentle analog leveling)
- Threshold: -18 to -22 dB
- Ratio: 2:1 to 3:1 (subtle)
- Attack: 15-25 ms (let transients breathe)
- Release: 300-500 ms (smooth)
- Makeup: 3-5 dB

**Purpose:** Even out synth levels like analog compressors

**2. Distortion** (Analog saturation)
- Drive: 15-25% (gentle)
- Tone: -5 to +5 (neutral)
- Level: 90-95%

**Purpose:** Add 2nd/3rd harmonics for warmth

**3. Cabinet 2** (Vintage)
- Mix: 75-100%

**Purpose:** Vintage speaker character, rounded highs

**4. Master 8-Band EQ**
- 60 Hz: +1 dB
- 170 Hz: 0 dB
- 310 Hz: 0 dB
- 600 Hz: -1 dB
- 1 kHz: 0 dB
- 3 kHz: +1 dB
- 6 kHz: +2 dB
- 12 kHz: +1 dB

**Result:** Warm, vintage analog character with controlled low-end and gentle high-end lift.

## Method 2: Stereo Width & Movement

**Goal:** Wide, three-dimensional synths with modulation movement

### Chain Configuration
```
Position 1: Chorus (Width)
Position 2: Phaser (Movement)
Position 3: Cabinet 4 (Transparent)
```

### Detailed Settings

**1. Chorus** (Stereo widening)
- Rate: 0.2-0.5 Hz (slow, subtle)
- Depth: 40-60%
- Level: 50-70%

**Purpose:** Create stereo width through detuned copies

**2. Phaser** (Liquid movement)
- Rate: 0.1-0.3 Hz (very slow)
- Depth: 35-50%
- Stages: 4 or 6
- Level: 40-50%

**Purpose:** Add subtle movement without obvious effect

**3. Cabinet 4** (American/Smooth)
- Mix: 50-75%

**Purpose:** Balanced frequency response maintains width

**4. Master 8-Band EQ**
- 60 Hz: 0 dB
- 170 Hz: -1 dB
- 310 Hz: -2 dB (reduce mud for clarity)
- 600 Hz: 0 dB
- 1 kHz: 0 dB
- 3 kHz: +2 dB
- 6 kHz: +3 dB (air and width)
- 12 kHz: +4 dB (maximum air)

**Result:** Wide, spacious synth with gentle movement and clarity.

## Method 3: Lead Synth Aggression

**Goal:** Cutting, aggressive lead synths for solos and hooks

### Chain Configuration
```
Position 1: Compressor (Punch)
Position 2: Distortion (Grit and edge)
Position 3: EQ Stompbox (Presence shaping)
Position 4: Cabinet 1 (Bright)
```

### Detailed Settings

**1. Compressor** (Transient control)
- Threshold: -12 to -16 dB
- Ratio: 4:1 to 6:1
- Attack: 5-10 ms (some transient preservation)
- Release: 150-250 ms
- Makeup: 6-8 dB

**2. Distortion** (Lead character)
- Drive: 40-60%
- Tone: +10 to +20 (brightness)
- Level: 85-90%

**Purpose:** Grit and harmonics that cut through mix

**3. EQ Stompbox** (Scoop and boost)
- Low: 0 dB or slight cut @ 120Hz
- Mid: -2 to -4 dB @ 400-600 Hz (scoop)
- High: +2 to +4 dB @ 4-6 kHz (presence)

**Purpose:** Mid-scoop + high-boost = modern lead tone

**4. Cabinet 1** (Bright/Modern)
- Mix: 100%

**Purpose:** Maximum presence and cutting power

**5. Master 8-Band EQ** (Lead polish)
- 60 Hz: -2 dB (tighten)
- 170 Hz: -1 dB
- 310 Hz: -3 dB (scoop)
- 600 Hz: -2 dB (scoop)
- 1 kHz: 0 dB
- 3 kHz: +3 dB (attack)
- 6 kHz: +4 dB (presence)
- 12 kHz: +3 dB (air)

**Result:** Modern, aggressive lead synth that cuts through dense mixes.

## Method 4: Pad Enhancement

**Goal:** Lush, atmospheric pads with depth and space

### Chain Configuration
```
Position 1: Chorus (Width)
Position 2: Flanger (Subtle movement)
Position 3: Reverb (Space)
Position 4: Cabinet 2 (Vintage warmth)
```

### Detailed Settings

**1. Chorus** (Wide pad foundation)
- Rate: 0.1-0.3 Hz (very slow)
- Depth: 50-70%
- Level: 60-80%

**Purpose:** Wide, detuned pad character

**2. Flanger** (Subtle shimmer)
- Rate: 0.05-0.15 Hz (extremely slow)
- Depth: 30-40%
- Feedback: +10 to +20%
- Level: 30-40%

**Purpose:** Gentle sweeping texture

**3. Reverb** (Atmospheric space)
- Size: 60-80%
- Damp: 40-60%
- Mix: 35-50%
- Level: 80%

**Purpose:** Cavernous pad space

**4. Cabinet 2** (Vintage)
- Mix: 75%

**Purpose:** Warmth without brightness

**5. Master 8-Band EQ**
- 60 Hz: +2 dB (pad weight)
- 170 Hz: +1 dB
- 310 Hz: -1 dB
- 600 Hz: 0 dB
- 1 kHz: 0 dB
- 3 kHz: +1 dB
- 6 kHz: +2 dB
- 12 kHz: +3 dB (air for atmosphere)

**Result:** Lush, wide, atmospheric pads with vintage character.

## Method 5: Bass Synth Enhancement

**Goal:** Fat, present bass synths that work on all systems

See detailed workflow in **Bass Saturation Chain.md**

Quick summary:
- Compressor for sustain
- Distortion for harmonics (audible on small speakers)
- Cabinet 1 or 3 for character
- EQ for low-end control

## Genre-Specific Applications

### Synthwave/Retrowave
- Method 2 (Width) + slight saturation
- Cabinet 2 (Vintage)
- Emphasize chorus for 80s width
- Light reverb for space

### Trap/Modern Hip-Hop
- Method 3 (Aggression) for leads
- Method 1 (Warmth) for pads
- Heavy distortion on 808-style bass
- Bright cabinets (Cabinet 1)

### Techno/Industrial
- Method 1 (Warmth) but with more drive
- Method 4 (Pads) with darker settings
- Emphasize distortion and compression
- Limited, aggressive character

### Pop/EDM
- Method 2 (Width) for supersaws
- Method 3 (Aggression) for leads
- Cabinet 4 (balanced) for transparency
- Heavy use of chorus for width

## Advanced Techniques

### Multi-Timbral Processing
For layered synths (oscillator stacks):
- **Sub oscillator:** Clean, minimal processing
- **Mid oscillator:** Method 1 (Warmth)
- **High oscillator:** Method 3 (Aggression)
- **Noise layer:** Heavy distortion for texture

### Key Tracking Considerations
- **Low synth notes:** More bass cabinet, less distortion
- **Mid synth notes:** Balanced processing
- **High synth notes:** Bright cabinet, more distortion safe
- **Wide chords:** Method 2 (Width effects)

### Automation for Movement
- **Filter sweep sections:** Automate EQ frequencies
- **Build-ups:** Increase chorus depth gradually
- **Breakdowns:** Add reverb for space
- **Drops:** Remove effects for impact

## Parallel Processing

For complex synths, use multiple Hardcore instances:

**Synth Source ──┬──→ Dry (40%)**
**               ├──→ Send A: Method 2 (Width) - 30%**
**               ├──→ Send B: Method 3 (Aggression) - 20%**
**               └──→ Send C: Reverb only - 10%**

## CPU Optimization

**Complex chains (4-5 effects active):**
- Freeze synth tracks once processing is finalized
- Render to audio (Alt + R)
- Keep original muted for edits

**Alternative:** Use fewer effects but with higher intensity

## Troubleshooting

| Problem | Cause | Solution |
|---------|-------|----------|
| Too muddy | Low-end buildup | High-pass in Stompbox EQ, cut 310Hz |
| Too thin | No low-end | Boost 60Hz, use Cabinet 2 or 1 |
| Harsh/fizzy | High distortion + bright tone | Reduce drive, make tone negative, cut 6-12kHz |
| Not wide enough | Chorus too subtle | Increase chorus depth to 60%+, try flanger |
| Phase issues | Stereo effects on mono source | Check source stereo width first |
| CPU overload | Too many effects | Freeze track or reduce active effects |

## Quick Start Presets

**Analog Warmth:**
```
Compressor: ON, Threshold -20dB, Ratio 2.5:1, Attack 20ms, Release 400ms
Distortion: ON, Drive 20%, Tone 0, Level 95%
Cabinet: 2 (Vintage)
Master EQ: Subtle smile curve, boost 12kHz slightly
```

**Wide Pad:**
```
Chorus: ON, Rate 0.25Hz, Depth 55%, Level 65%
Phaser: ON, Rate 0.2Hz, Depth 40%, Stages 6, Level 45%
Reverb: ON, Size 70%, Damp 50%, Mix 40%, Level 80%
Cabinet: 2 (Vintage)
Master EQ: Scoop mids slightly, boost highs
```

**Aggressive Lead:**
```
Compressor: ON, Threshold -14dB, Ratio 5:1, Attack 8ms, Release 200ms
Distortion: ON, Drive 55%, Tone +15, Level 88%
EQ Stompbox: ON, Mid 500Hz -3dB, High 5kHz +3dB
Cabinet: 1 (Bright)
Master EQ: Scoop 310/600Hz, boost 3/6/12kHz
```

---

*Source: Image-Line FL Studio Hardcore Manual [SRC: IL-MAN]*
