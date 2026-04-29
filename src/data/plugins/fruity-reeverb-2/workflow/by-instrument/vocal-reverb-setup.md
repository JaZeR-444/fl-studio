# Vocal Reverb Setup with Fruity Reeverb 2

## Goal
Create professional vocal space that adds depth and dimension without washing out clarity or competing with the beat.

## Basic Setup Workflow

### Step 1: Create Reverb Send
1. Add empty mixer track (e.g., track 10 - "Vocal Reverb")
2. Insert Fruity Reeverb 2
3. Set Dry to 0%, Wet to 100%
4. This is your dedicated vocal reverb space

### Step 2: Route Vocals
1. Select vocal mixer track
2. Right-click send knob to reverb track
3. Start at 15-20% send amount
4. Adjust to taste

### Step 3: Base Settings
```
Pre-delay: 30ms
Size: 58%
Decay: 2.0s
High Damping: 5000Hz
Diffusion: 70%
Mod Rate: 0.2
Mod Depth: 0.1
Bass: 0.8x
Width: 90%
Wet: 100% (on send track)
```

## Genre-Specific Settings

### Trap Vocals
```
Pre-delay: 25-35ms (clarity for fast delivery)
Size: 50-60%
Decay: 1.8-2.2s
High Damping: 5-6kHz (modern, bright)
Wet Send: 18-25%
Character: Tight, present, modern
```

### Boom Bap/Classic
```
Pre-delay: 15-25ms (natural feel)
Size: 45-55%
Decay: 1.5-2.0s
High Damping: 4-5kHz (warmer)
Bass: 1.0-1.2x
Wet Send: 20-28%
Character: Warm, vintage room
```

### Melodic/Singing
```
Pre-delay: 35-45ms (separation)
Size: 60-70%
Decay: 2.5-3.5s
High Damping: 5.5-6.5kHz
Modulation: 0.15-0.25
Wet Send: 25-35%
Character: Lush, spacious, emotional
```

### Lo-Fi/Chill
```
Pre-delay: 10-20ms (intimate)
Size: 55-65%
Decay: 2.0-2.8s
High Damping: 3.5-4.5kHz (darker)
Bass: 1.3-1.5x
Mod Depth: 0.3-0.4
Wet Send: 28-40%
Character: Warm, vintage, textured
```

## Advanced Techniques

### Lead vs. Backing Vocals
**Lead Vocal**:
- Less reverb (18-25%)
- More pre-delay (30-40ms)
- Stays upfront and clear

**Backing/Harmony**:
- More reverb (35-50%)
- Less pre-delay (15-25ms)
- Sits back in mix, supports lead

### Reverb EQ Processing
On reverb return track, add EQ after Reeverb 2:
1. **High-Pass**: 300-400Hz (removes mud)
2. **Cut**: 500-800Hz (clears midrange clash)
3. **Shelf**: -2dB @ 200Hz (tames lows)
4. **Boost**: +1-2dB @ 10kHz (air, optional)

### Automation for Dynamics
**Verse (storytelling)**:
- Lower reverb send (15-20%)
- Intimate, close feel

**Chorus (big moment)**:
- Higher reverb send (25-35%)
- Spacious, larger-than-life

**Bridge/Breakdown**:
- Maximum reverb (40-60%)
- Extra space and emotion

### Sidechain Ducking
1. Add Fruity Peak Controller after Reeverb 2
2. Input from vocal track
3. Link to reverb wet level
4. Settings: Base 100%, Vol 0%, Decay 150ms
5. Result: Reverb ducks during singing, returns between phrases

## Pre-Delay Strategy

### Why Pre-Delay Matters
- Separates dry vocal from wet reverb
- Preserves consonants and transients
- Creates clarity in dense mixes

### Pre-Delay by Tempo
- **Slow (60-80 BPM)**: 35-50ms
- **Medium (80-120 BPM)**: 25-35ms
- **Fast (120-160 BPM)**: 15-25ms
- **Very Fast (160+ BPM)**: 10-20ms

### Pre-Delay by Vocal Style
- **Rap (fast delivery)**: 20-30ms
- **Melodic rap/singing**: 30-40ms
- **Singing (sustained)**: 35-50ms

## Modulation Use

### No Modulation (Clean)
- Transparent, natural reverb
- Modern, professional sound
- Best for: Trap, commercial hip-hop

### Subtle Modulation (0.1-0.2)
- Adds shimmer and life
- Not obviously modulated
- Best for: Melodic, R&B-influenced

### Medium Modulation (0.3-0.4)
- Vintage, chorus-like character
- Warm, analog vibe
- Best for: Lo-fi, chill rap

### Heavy Modulation (0.5+)
- Creative, obvious effect
- Dream-like, ethereal
- Best for: Experimental, atmospheric sections

## Common Vocal Reverb Mistakes

❌ **Too much reverb**: Drowns vocal, loses clarity
→ Start at 20%, increase carefully

❌ **No pre-delay**: Consonants get washed out
→ Always use 25-40ms minimum

❌ **Too long decay**: Reverb tail muddles next phrase
→ Match decay to song tempo/pacing

❌ **No EQ on reverb**: Low-end mud
→ High-pass reverb return at 300-400Hz

❌ **Same reverb for all vocals**: No depth/dimension
→ Use more reverb on backing vocals

❌ **Reverb on bass frequencies**: Muddy vocal
→ Set Bass multiplier to 0.6-0.8x

## Quick Troubleshooting

**Vocal sounds distant**: Reduce send amount or increase pre-delay

**Muddy/unclear**: High-pass reverb return, reduce bass multiplier

**Too bright/harsh**: Lower high damping frequency

**Doesn't fit the beat**: Adjust decay time (shorter = tighter)

**Sounds fake**: Increase diffusion, add subtle modulation

**Reverb too obvious**: Reduce send, increase pre-delay

## Professional Polish

### Reverb Compression
Add compressor after Reeverb 2:
- Ratio: 2:1 to 3:1
- Attack: 30-50ms
- Release: 100-200ms
- Creates consistent reverb level

### Parallel Reverb Option
1. Send vocal to reverb at 100%
2. Process reverb aggressively (EQ, compress)
3. Blend small amount back
4. Maximum control

### Multiple Reverbs
- **Short reverb** (decay 0.8-1.2s): Early reflections, room tone
- **Long reverb** (decay 2.5-4s): Lush tail, atmosphere
- Blend both for complex space

## Session Template

### Standard Setup
```
Track 1-3: Vocals (dry)
Track 10: Vocal Reverb (short, decay 1.5s)
Track 11: Vocal Reverb (long, decay 3.0s)
Track 12: Vocal Delay

Send short reverb: 20-25%
Send long reverb: 10-15%
Send delay: 15-20%
```

Creates professional, dimensional vocal sound
