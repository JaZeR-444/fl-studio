# Radio/Megaphone Effects

Complete workflow for creating telephone, radio, megaphone, and broadcast-style vocal effects using Hardcore. [SRC: IL-MAN]

## Overview

Radio and megaphone effects simulate the frequency-limited, compressed, distorted character of broadcast equipment, telephone systems, and public address systems. These effects are staples in hip-hop production for hooks, ad-libs, transitions, and stylistic vocal treatments.

## Core Sound Characteristics

**Limited Frequency Range:**
- Telephones: 300Hz - 3.4kHz
- AM Radio: 100Hz - 5kHz
- Megaphones: 200Hz - 4kHz
- FM Radio: 30Hz - 15kHz (but compressed and bright)

**Dynamic Character:**
- Heavy compression (broadcast limiters)
- Aggressive distortion (speaker overdrive)
- Hard limiting (transmitter protection)

**Tonal Signature:**
- Mid-forward (1-3kHz emphasis)
- Sibilance control (reduced 5-10kHz)
- Low-end rolloff (microphone proximity effect)

## Method 1: Telephone Effect

**Frequency range:** ~300Hz - 3.4kHz
**Character:** Band-limited, intelligible, slightly distorted

### Chain Configuration
```
Position 1: EQ Stompbox (Band limiting)
Position 2: Distortion (Phone line saturation)
Position 3: Compressor (Heavy limiting)
Position 4: Cabinet 5 (Small speaker)
```

### Detailed Settings

**1. EQ Stompbox** (Telephone bandpass)
- Low Frequency: 300 Hz
- Low Gain: -15 dB (high-pass)
- Mid Frequency: 2000 Hz
- Mid Gain: +4 to +6 dB (presence boost)
- High Frequency: 3400 Hz
- High Gain: -15 dB (low-pass)

**Purpose:** Simulate telephone frequency response (300Hz-3.4kHz)

**2. Distortion** (Line saturation)
- Drive: 15-30%
- Tone: +10 to +25 (bright, thin)
- Level: 85-90%

**Purpose:** Add subtle overdrive like overloaded phone lines

**3. Compressor** (Heavy broadcast limiting)
- Threshold: -8 to -12 dB
- Ratio: 10:1 to 20:1 (limiting)
- Attack: 1-3 ms (fast catching)
- Release: 50-100 ms (fast recovery)
- Makeup: 4-6 dB

**Purpose:** Simulate broadcast limiter, even out all levels

**4. Cabinet 5** (Small speaker character)
- Mix: 100%

**Purpose:** Boxy, limited frequency character of phone speaker

**5. Master 8-Band EQ** (Fine-tuning)
- 60 Hz: -12 dB (remove all sub)
- 170 Hz: -6 dB
- 310 Hz: 0 dB
- 600 Hz: +2 dB (low-mid presence)
- 1 kHz: +4 dB (primary vocal presence)
- 3 kHz: +3 dB (intelligibility)
- 6 kHz: -4 dB (control harshness)
- 12 kHz: -10 dB (remove air)

## Method 2: AM Radio Effect

**Frequency range:** ~100Hz - 5kHz
**Character:** Warm, compressed, slightly noisy

### Chain Configuration
Same as telephone but with wider frequency range and more warmth.

### Key Differences from Telephone

**1. EQ Stompbox** (AM radio range)
- Low Frequency: 100 Hz
- Low Gain: -9 dB (gentler high-pass)
- Mid Frequency: 1500 Hz
- Mid Gain: +3 dB
- High Frequency: 5000 Hz
- High Gain: -12 dB

**2. Distortion** (Warm overdrive)
- Drive: 20-35%
- Tone: 0 to +10 (warmer than telephone)

**3. Cabinet 3** (British/Crunch) or 2 (Vintage)
- For more warmth and body than Cabinet 5

**4. Master EQ** (Warmer curve)
- Less severe high-frequency cuts
- More 200-600Hz body
- Add slight saturation character

## Method 3: Megaphone/Bullhorn Effect

**Frequency range:** ~200Hz - 4kHz
**Character:** Aggressive, distorted, compressed, "tinny"

### Chain Configuration
```
Position 1: Distortion (Speaker breakup)
Position 2: EQ Stompbox (Megaphone EQ)
Position 3: Compressor (Heavy limiting)
Position 4: Cabinet 5 (Small speaker)
Position 5: Noise Gate (Choppy character)
```

### Detailed Settings

**1. Distortion** (Heavy speaker breakup)
- Drive: 40-60%
- Tone: +15 to +30 (bright, aggressive)
- Level: 80%

**2. EQ Stompbox** (Megaphone bandpass)
- Low Frequency: 200 Hz
- Low Gain: -12 dB
- Mid Frequency: 2500 Hz
- Mid Gain: +6 to +9 dB (aggressive mid boost)
- High Frequency: 4000 Hz
- High Gain: -12 dB

**3. Compressor** (Extreme limiting)
- Threshold: -6 to -10 dB
- Ratio: 20:1 (hard limiting)
- Attack: 1 ms
- Release: 40-80 ms
- Makeup: 3-5 dB

**4. Cabinet 5** (Small speaker boxiness)
- Mix: 100%

**5. Noise Gate** (Megaphone choppiness)
- Threshold: -20 to -25 dB
- Attack: 1-2 ms
- Hold: 30-50 ms
- Release: 60-100 ms

**6. Master EQ** (Final megaphone shaping)
- 60 Hz: -10 dB
- 170 Hz: -4 dB
- 310 Hz: +3 dB (boxy character)
- 600 Hz: +4 dB (mid forward)
- 1 kHz: +5 dB (presence)
- 3 kHz: +3 dB (intelligibility)
- 6 kHz: -3 dB (control harshness)
- 12 kHz: -8 dB (remove air)

## Method 4: FM Radio/Broadcast

**Frequency range:** ~30Hz - 15kHz (full range but processed)
**Character:** Bright, compressed, "radio-ready"

### Chain Configuration
```
Position 1: Compressor (Multi-stage feel)
Position 2: EQ Stompbox (Broadcast EQ)
Position 3: Distortion (Subtle excitation)
Position 4: Cabinet 1 (Bright) or 4 (American)
```

### Detailed Settings

**1. Compressor** (Broadcast consistency)
- Threshold: -14 to -18 dB
- Ratio: 6:1 to 10:1
- Attack: 5-8 ms
- Release: 150-250 ms
- Makeup: 6-10 dB

**2. EQ Stompbox** (Broadcast smile curve)
- Low: +2 dB @ 100 Hz (warmth)
- Mid: 0 dB @ 1 kHz
- High: +4 dB @ 8 kHz (brightness)

**3. Distortion** (Exciter-style)
- Drive: 10-20% (very subtle)
- Tone: +10 to +20
- Level: 95%

**4. Cabinet 1** (Bright/Modern) or **Cabinet 4** (American)
- Mix: 75-100%

**5. Master EQ** (Broadcast polish)
- 60 Hz: +1 dB (sub presence)
- 170 Hz: +1 dB (warmth)
- 310 Hz: -1 dB (slight mud removal)
- 600 Hz: 0 dB
- 1 kHz: +1 dB (presence)
- 3 kHz: +2 dB (clarity)
- 6 kHz: +3 dB (air)
- 12 kHz: +2 dB (sheen)

## Genre-Specific Applications

### Hip-Hop Radio Hooks
**Goal:** "Now playing on Hot 97" vibe
- Use FM Radio method
- Add slight delay (slapback 80ms)
- Heavy compression for consistency
- Bright, energetic character

### Trap Megaphone Ad-libs
**Goal:** Aggressive "hey!" and "yeah!" shouts
- Use Megaphone method
- Very short, choppy delivery works best
- Gate emphasizes the choppiness
- Drive 60%+ for aggression

### Lo-Fi Phone Vocals
**Goal:** Intimate "phone call" aesthetic
- Use Telephone method
- Softer, more subtle distortion
- Add delay (100-150ms) for distance
- Lower mix (50-70%) for blend

### Industrial/Punk Announcements
**Goal:** Aggressive PA system
- Use Megaphone method
- Add Modulator (Tremolo) for instability
- Ring modulation for destruction
- Cabinet 5 at 100%

## Parallel Processing for Blend

For more control, use Hardcore on a send track:

**Setup:**
- Vocal: 100% dry
- Send: Hardcore Radio/Megaphone chain at 30-60% blend
- Hardcore: 100% wet

**Benefits:**
- Control effect amount with send fader
- Automate for section changes
- Keep dry vocal as foundation

## Automation Strategies

### Section-Based
- **Verses:** Clean or light telephone effect
- **Choruses:** FM Radio (bright, energetic)
- **Bridge:** Megaphone (contrast, aggression)
- **Outro:** Telephone fading out

### Word-by-Word
- Individual words as megaphone ad-libs
- Phrases through telephone for storytelling
- Hooks through FM radio for polish

### Build-Up Effects
- Start clean, gradually increase drive
- Start with Cabinet 4, switch to Cabinet 5
- Automate EQ high-pass from 100Hz to 300Hz

## Integration with Full Mix

### In the Vocal Chain
```
Vocal Source → Hardcore Radio Effect → Final Compressor → Master
```

### As Send Effect
```
Vocal Source ──┬──→ Dry
               └──→ Send (Hardcore Radio) → Blend 40%
```

### Post-Processing
After Hardcore, consider:
- **De-esser:** If sibilance is too strong
- **Limiter:** For broadcast-style brickwall
- **Additional reverb:** For space (if not in Hardcore)

## Troubleshooting

| Problem | Cause | Solution |
|---------|-------|----------|
| Can't understand words | Too much distortion or EQ | Reduce Drive, check midrange clarity |
| Too harsh/shrill | High tone + cabinet 1 | Switch to Cabinet 2 or reduce Tone |
| Not "effect-y" enough | Subtle settings | Increase Drive, narrow frequency range |
| Sounds digital/clean | Not enough cabinet | Ensure Cabinet 5 is at 100% |
| Muddy/thick | Low-end not cut enough | High-pass higher (300Hz+) |
| No presence | Mids not boosted | Boost 1-3kHz in Stompbox EQ |

## Quick Start Presets

**Telephone Effect:**
```
EQ Stompbox: ON, Low 300Hz -15dB, Mid 2kHz +5dB, High 3.4kHz -15dB
Distortion: ON, Drive 25%, Tone +20, Level 88%
Compressor: ON, Threshold -10dB, Ratio 15:1, Attack 2ms, Release 80ms
Cabinet: 5 (Small)
Master EQ: 60Hz -12, 1kHz +4, 3kHz +3, 12kHz -10
```

**Megaphone Effect:**
```
Distortion: ON, Drive 55%, Tone +25, Level 80%
EQ Stompbox: ON, Low 200Hz -12dB, Mid 2.5kHz +8dB, High 4kHz -12dB
Compressor: ON, Threshold -8dB, Ratio 20:1, Attack 1ms, Release 60ms
Noise Gate: ON, Threshold -22dB, Attack 1ms, Hold 40ms, Release 80ms
Cabinet: 5 (Small)
Master EQ: 60Hz -10, 600Hz +4, 1kHz +5, 12kHz -8
```

**FM Radio Effect:**
```
Compressor: ON, Threshold -16dB, Ratio 8:1, Attack 6ms, Release 200ms
EQ Stompbox: ON, Low 100Hz +2dB, Mid 1kHz 0dB, High 8kHz +4dB
Distortion: ON, Drive 15%, Tone +15, Level 95%
Cabinet: 4 (American)
Master EQ: 60Hz +1, 3kHz +2, 6kHz +3, 12kHz +2
```

---

*Source: Image-Line FL Studio Hardcore Manual [SRC: IL-MAN]*
