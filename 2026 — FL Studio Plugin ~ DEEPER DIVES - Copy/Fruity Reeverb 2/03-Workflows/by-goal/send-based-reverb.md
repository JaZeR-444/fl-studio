# Reverb Send Setup Guide – Fruity Reeverb 2

## Goal
Create professional send-based reverb routing for cohesive space and efficient CPU usage.

## Why Use Sends?

### Advantages
- **Cohesive Space**: All instruments share same reverb "room"
- **CPU Efficient**: One reverb instance instead of many
- **Easy Control**: Adjust space per instrument with send amount
- **Professional Standard**: Industry-standard mixing approach
- **Processing Power**: EQ/compress reverb separately

### vs. Insert Reverb
**Insert** (direct on track):
- ✓ Quick and easy
- ✓ Independent spaces
- ✗ CPU intensive
- ✗ Less cohesive

**Send** (aux return):
- ✓ Professional approach
- ✓ Cohesive sound
- ✓ CPU efficient
- ✗ Slightly more setup

## Basic Send Setup

### Step 1: Create Reverb Track
1. Select empty mixer track (e.g., Track 10)
2. Rename: "Reverb - Main" or "Vocal Reverb"
3. Insert Fruity Reeverb 2
4. Set: Dry = 0%, Wet = 100%
5. **Critical**: Track receives signal but doesn't route to itself

### Step 2: Configure Reverb
Choose appropriate settings for reverb type:

**Short Room** (drums, transients):
```
Size: 40-50%
Decay: 0.8-1.5s
Use: Drums, percussion, tight sounds
```

**Medium Hall** (vocals, leads):
```
Size: 55-65%
Decay: 1.8-2.5s
Use: Vocals, lead instruments
```

**Long Space** (pads, atmosphere):
```
Size: 70-85%
Decay: 3.0-5.0s
Use: Pads, synths, backgrounds
```

### Step 3: Route Instruments
1. Select source track (e.g., vocal track)
2. Find send knobs in mixer (top row)
3. Right-click send knob for reverb track
4. Adjust send level (start 20%)
5. Repeat for each instrument

### Step 4: Set Send Amounts
Different amounts create depth:

- **Upfront** (lead vocal, main elements): 15-25%
- **Middle** (supporting elements): 25-35%
- **Background** (pads, textures): 35-50%

## Multiple Reverb Setup

### Professional 3-Reverb Template

**Track 10 - Short Reverb**:
```
Size: 45%
Decay: 1.2s
Use: Drums, percussion, transients
```

**Track 11 - Medium Reverb**:
```
Size: 60%
Decay: 2.2s
Use: Vocals, melodies, leads
```

**Track 12 - Long Reverb**:
```
Size: 75%
Decay: 4.0s
Use: Pads, atmosphere, special effects
```

### Routing Strategy
Each instrument can send to multiple reverbs:
- **Vocal**: 22% short + 12% long = dimension
- **Snare**: 28% short only = tight
- **Pad**: 15% medium + 35% long = huge space

## Advanced Reverb Processing

### EQ the Reverb Return
Add EQ after Reeverb 2 on reverb track:

1. **High-Pass**: 300-400Hz (remove mud)
2. **Cut**: 500-800Hz (clear midrange)
3. **Shelf**: -2dB @ 200Hz (control lows)
4. **Boost**: +1-2dB @ 10kHz (air, optional)

**Why**: Cleans reverb, prevents mud, maintains clarity

### Compress the Reverb
Add compressor after Reeverb 2:
```
Ratio: 2:1 to 3:1
Attack: 30-50ms
Release: 100-200ms
Threshold: Adjust for -3 to -6dB reduction
```

**Why**: Evens out reverb level, adds glue, controls dynamics

### Sidechain Duck Reverb
1. Add Fruity Peak Controller after reverb
2. Input from lead vocal or kick
3. Link to reverb wet/send level
4. Settings: Base 100%, Vol 0%, Decay 150-250ms

**Why**: Reverb ducks during main elements, returns between

## Genre-Specific Send Templates

### Trap/Modern Hip-Hop
```
Track 10 - Vocal Reverb:
  Size: 55%, Decay: 2.0s, High Damping: 5.5kHz
  Send: Vocals (22%), Ad-libs (35%)

Track 11 - Drum Room:
  Size: 42%, Decay: 1.0s, High Damping: 4kHz
  Send: Snare (25%), Claps (28%)

Track 12 - Atmosphere:
  Size: 78%, Decay: 4.5s, Mod: 0.2
  Send: Pads (45%), FX (60%)
```

### Boom Bap/Classic
```
Track 10 - Main Room:
  Size: 48%, Decay: 1.6s, Bass: 1.1x
  Send: Vocals (24%), Sample (18%), Drums (15%)

Track 11 - Vocal Space:
  Size: 55%, Decay: 2.2s, Pre-delay: 25ms
  Send: Lead Vocal (22%), Backing (38%)
```

### Lo-Fi/Chill
```
Track 10 - Warm Room:
  Size: 58%, Decay: 2.5s, High Damp: 3.8kHz
  Mod: 0.35, Bass: 1.4x
  Send: All instruments (22-40%)

Single reverb for cohesive vintage vibe
```

### Melodic/Emotional
```
Track 10 - Vocal Hall:
  Size: 62%, Decay: 2.8s, Pre-delay: 35ms
  Send: Lead (25%), Harmonies (40%)

Track 11 - Instrument Hall:
  Size: 68%, Decay: 3.2s, Mod: 0.22
  Send: Keys (32%), Synths (38%), Strings (45%)

Track 12 - Huge Space:
  Size: 82%, Decay: 5.5s
  Send: Special moments, builds (varies)
```

## Send Amount Guidelines

### By Role in Mix
- **Lead Elements** (vocal, main melody): 18-25%
- **Supporting** (chords, harmony): 25-35%
- **Background** (pads, textures): 35-50%
- **Rhythm** (drums): 15-30% (vary by element)
- **Bass**: 0-10% maximum

### By Frequency Range
- **Low** (<200Hz): 0-10%
- **Low-Mid** (200-500Hz): 10-20%
- **Mid** (500-2kHz): 20-35%
- **High-Mid** (2-5kHz): 25-40%
- **High** (>5kHz): 30-45%

Lower frequencies need less reverb to avoid mud

### By Genre Density
**Dense/Busy** (trap, drill):
- Lower send amounts (15-25%)
- Shorter decay times
- More clarity needed

**Sparse/Open** (lo-fi, melodic):
- Higher send amounts (25-40%)
- Longer decay times
- Space is feature

## Mixing Tips

### Creating Depth
Front to back placement using reverb:

1. **Front** (dry, upfront): Low send (10-20%)
2. **Middle** (present): Medium send (25-35%)
3. **Back** (distant): High send (40-60%)

Combine with volume for 3D mix

### Mono Compatibility
- High-pass reverb return (mono <300Hz)
- Width setting moderate (70-90%)
- Check in mono to verify

### Automation Strategies
- **Verse**: Lower sends (intimate)
- **Chorus**: Higher sends (big)
- **Build**: Increase gradually
- **Drop**: Sudden change for impact

## Troubleshooting

**Mix sounds washy/muddy**:
→ High-pass reverb at 350-400Hz
→ Reduce send amounts 5-10%

**Reverb too obvious**:
→ Increase pre-delay
→ Lower send amounts
→ Shorter decay time

**No depth/dimension**:
→ Vary send amounts more
→ Use multiple reverbs
→ EQ reverb return

**CPU overload**:
→ Freeze reverb tracks
→ Use one reverb for similar instruments
→ Reduce to essential reverbs only

**Instruments sound distant**:
→ Lower send amounts
→ Increase pre-delay (separates dry/wet)

## Session Template Example

```
Mixer Layout:
Track 1-5: Instruments (dry)
Track 8: Delay
Track 10: Short Reverb (drums)
Track 11: Medium Reverb (vocals/leads)
Track 12: Long Reverb (pads/atmosphere)
Track 15: Master

Pro Tip: Leave gaps between types for organization
```
