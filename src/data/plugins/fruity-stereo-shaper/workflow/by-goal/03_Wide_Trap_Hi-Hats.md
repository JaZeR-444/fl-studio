# Wide Trap Hi-Hats - Maximum Stereo Spread

## Goal
Create ultra-wide, spacious hi-hat patterns for trap beats while maintaining energy and preventing complete mono collapse.

## When to Use
- Trap hi-hat rolls
- Fast triplet patterns
- Open hi-hat loops
- Percussion fills
- Electronic/hybrid trap

## The Trap Hi-Hat Challenge

**Problem:** Mono hi-hats sound boring and flat
**Solution:** Aggressive stereo widening with controlled risk

**Warning:** Wide hi-hats will have reduced presence in mono - that's acceptable for this genre.

## Quick Version (2 Minutes)

1. Load hi-hat pattern on mixer track
2. Add Fruity Stereo Shaper
3. Use "Trap Hi-Hat Spread" preset
4. Adjust delay to taste (8-15ms)
5. Done - ultra-wide trap hats

**Settings:**
- L→L: 1.0, L→R: -0.4
- R→L: -0.4, R→R: 1.0
- Delay: 12ms
- Phase Invert: Left channel

## Advanced Techniques by Hip-Hop Genre

### Trap/Electronic Hip-Hop (Maximum Width)

**Matrix Settings:**
```
L→L: 1.0    L→R: -0.45
R→L: -0.45  R→R: 1.0
Delay: 15ms
Phase Invert: Left
```

**Additional Processing:**
- Bright EQ (+3dB at 8-12kHz)
- Stereo delay (1/16 notes, 20% feedback)
- Subtle reverb on Side only

**Character:** Massive, club-filling width

**Example Artists:** Metro Boomin, Southside, 808 Mafia

### Upbeat/Club Hip-Hop (Controlled Width)

**Matrix Settings:**
```
L→L: 1.0    L→R: -0.3
R→L: -0.3   R→R: 1.0
Delay: 10ms
Phase Invert: None
```

**Additional Processing:**
- Moderate EQ boost (8kHz)
- Short ping-pong delay
- Room reverb

**Character:** Wide but controlled, maintains mono presence

**Example Artists:** Travis Scott, Drake (energy tracks)

### Moody/Dark Hip-Hop (Subtle Width)

**Matrix Settings:**
```
L→L: 1.0    L→R: -0.15
R→L: -0.15  R→R: 1.0
Delay: 6ms
Phase Invert: None
```

**Additional Processing:**
- Dark EQ (reduce 10kHz+)
- Filtered delay
- Dark reverb

**Character:** Atmospheric without being distracting

**Example Artists:** Juice WRLD, XXXTentacion

### Lo-Fi Hip-Hop (Minimal Width)

**Matrix Settings:**
```
L→L: 0.85   L→R: 0.15
R→L: 0.15   R→R: 0.85
Delay: 0ms
Phase Invert: None
```

**Additional Processing:**
- Vintage EQ (roll-off highs)
- Bit crushing
- Vinyl noise layer

**Character:** Narrow, vintage, lo-fi aesthetic

**Example:** Chill hop, study beats

### Melodic/R&B Hip-Hop (Musical Width)

**Matrix Settings:**
```
L→L: 1.0    L→R: -0.2
R→L: -0.2   R→R: 1.0
Delay: 8ms
Phase Invert: None
```

**Additional Processing:**
- Smooth EQ curve
- Melodic delay (1/8 or 1/4 notes)
- Lush reverb

**Character:** Spacious and musical, supports melodies

**Example Artists:** The Weeknd, Bryson Tiller

## The Haas Effect Explained

### What is Haas Effect?
Delaying one channel by 5-35ms creates perceived stereo width without changing pitch or tone.

**Sweet Spots:**
- 5-10ms: Subtle width
- 10-20ms: Moderate width
- 20-35ms: Maximum width
- >35ms: Perceived as echo

### Delay Settings by Genre

**Trap:** 12-15ms (aggressive width)
**Upbeat:** 8-10ms (controlled width)
**Moody:** 5-8ms (subtle depth)
**Lo-Fi:** 0-5ms (minimal/vintage)
**Melodic:** 8-12ms (musical space)

### Haas + Phase Inversion

**Combining delay with phase inversion creates EXTREME width:**

```
Delay: 12ms
Phase Invert: Left channel
Result: Ultra-wide, club-ready
Warning: Mono collapse issues
```

**Use carefully - hi-hats will reduce significantly in mono.**

## Advanced Routing: Multiband Width

### Why Multiband?
- Wide highs (10kHz+)
- Moderate mids (2-10kHz)
- Preserve low-mids for body

### Patcher Setup

```
HI-HAT INPUT
    ↓
FREQUENCY SPLIT
    ├── LOW (<4kHz) → Narrow Width → -3dB
    ├── MID (4-10kHz) → Medium Width → 0dB
    └── HIGH (>10kHz) → Maximum Width → +2dB
         ↓
    SUM → OUTPUT
```

**Result:** Body + sparkle + massive width

## Automation for Dynamic Width

### Build-Up Section
```
Start (Bar 1): Narrow width (delay 0ms)
  ↓
Build (Bar 2-3): Gradually increase delay
  ↓
Drop (Bar 4): Maximum width (delay 15ms)
```

**Automate:** Delay knob, matrix sliders

### Call-and-Response
```
Main Pattern: Standard width
  ↓
Fill/Roll: Maximum width
  ↓
Return: Standard width
```

**Automate:** Switch presets or automate matrix

## Layering Techniques

### Dual Hi-Hat Layers

**Layer 1 (Mono):**
- No Stereo Shaper
- Body and presence
- -3dB level

**Layer 2 (Wide):**
- Trap Hi-Hat Spread preset
- Airy and wide
- -6dB level

**Combined:** Body + width without mono collapse

### Triple Layer (Professional)

**Layer 1 (Center):**
- Mono
- Low-mid focused (2-6kHz)
- Punchy transients
- 0dB

**Layer 2 (Mid-Width):**
- Moderate width (delay 8ms)
- Mid-high focused (6-12kHz)
- Crisp attack
- -3dB

**Layer 3 (Ultra-Wide):**
- Maximum width (delay 15ms + phase invert)
- High-frequency air (12kHz+)
- Sparkle layer
- -6dB

**Result:** Professional, multi-dimensional hi-hats

## Stereo Imaging by Pattern Type

### Closed Hi-Hats
- Moderate width (L→R: -0.2)
- Delay: 8ms
- Keep punchy for rhythm

### Open Hi-Hats
- Maximum width (L→R: -0.4)
- Delay: 12-15ms
- Create wash and energy

### Hi-Hat Rolls
- Start narrow, widen during roll
- Automate width increase
- Peak width at roll climax

### Hi-Hat Fills
- Extreme width (L→R: -0.5)
- Delay: 15ms + phase invert
- Stand out from main pattern

## Phase Inversion Strategies

### Why Invert Phase?

**Creates extreme width by:**
- Spreading L/R further apart
- Adding psychoacoustic width
- Reducing phantom center

**Trade-off:** Severe mono collapse

### When to Use Phase Inversion

**Safe:**
- Hi-hats only (not snare/kick)
- Club/festival mixes
- Headphone/streaming focus

**Risky:**
- Radio play expected
- Phone playback critical
- Any mono-compatibility needed

### Which Channel to Invert?

**Left Channel Invert:** Standard approach
**Right Channel Invert:** Same result (symmetrical)
**Both Channels Invert:** No effect (cancels out)

## Common Mistakes

### Mistake 1: Using on All Drums
**Problem:** Snare/kick lose power in mono
**Fix:** Only widen hi-hats, keep rhythm mono

### Mistake 2: Excessive Delay (>35ms)
**Problem:** Sounds like echo, not width
**Fix:** Keep delay 5-15ms for Haas effect

### Mistake 3: Not Checking Mono
**Problem:** Hi-hats disappear on some systems
**Fix:** Accept reduced mono presence or use layering

### Mistake 4: Wide + Reverb Overload
**Problem:** Hi-hats become washy mess
**Fix:** Choose width OR reverb, not both at maximum

### Mistake 5: Same Width for All Hats
**Problem:** No dynamics or interest
**Fix:** Vary width - closed (narrow), open (wide)

## Pro Tips

1. **Layer for safety:** Mono layer + wide layer = best results
2. **Automate width:** Narrow verse, wide chorus
3. **High-pass wide layer:** Remove body, keep air
4. **Delay sweet spot:** 10-12ms for most trap
5. **Check on phone:** Quick mono compatibility check
6. **Reverb on wide only:** Apply reverb to widened signal
7. **EQ before width:** Shape tone before spreading
8. **Compress after width:** Control dynamics of spread
9. **Multiband for best results:** Different width per frequency
10. **Trust the vibe:** Trap = wide, Lo-Fi = narrow

## Quick Reference

### Trap Width Settings
```
Closed Hi-Hat: -0.25, Delay 8ms
Open Hi-Hat: -0.4, Delay 12ms
Rolls: -0.5, Delay 15ms, Phase Invert
```

### Delay Guidelines
```
Subtle: 5-8ms
Moderate: 8-12ms
Aggressive: 12-15ms
Maximum: 15-20ms
Too Much: >20ms
```

### Mono Safety Ratings
```
No Width: ✅✅✅ Perfect Mono
Subtle (-0.15): ✅✅ Great Mono
Moderate (-0.3): ✅ Good Mono
Aggressive (-0.4): ⚠️ Reduced Mono
Maximum (-0.5 + Invert): ❌ Poor Mono
```

## Signal Flow Examples

### Simple Trap Width
```
HI-HAT → STEREO SHAPER (Trap Preset) → OUTPUT
Time: 30 seconds
Mono: ⚠️ Reduced
Width: Maximum
```

### Professional Layered Approach
```
HI-HAT SOURCE
    ├── LAYER 1 (Mono) → -3dB → MIX
    └── LAYER 2 (Wide) → STEREO SHAPER → -6dB → MIX
Result: Body + width + mono compatibility
```

### Advanced Multiband
```
HI-HAT → PATCHER → FREQ SPLIT
    ├── LOW (2-4kHz) → Narrow → MIX
    ├── MID (4-10kHz) → Medium → MIX
    └── HIGH (10kHz+) → Maximum → MIX
Result: Focused body + massive air
```

## Before/After Comparison

**BEFORE (Mono Hi-Hats):**
- Centered and focused
- Punchy but flat
- No stereo interest
- Safe for mono

**AFTER (Wide Trap Hi-Hats):**
- Massive stereo spread
- Club-filling presence
- Exciting and energetic
- Reduced mono (acceptable for genre)

## Success Checklist

- [ ] Hi-hats spread wide in stereo
- [ ] Delay in sweet spot (8-15ms)
- [ ] Snare/kick remain mono
- [ ] Checked mono collapse (acceptable loss)
- [ ] EQ'd before widening
- [ ] Layered if mono compatibility needed
- [ ] Automated for dynamics
- [ ] Matches genre vibe

**Remember: Trap = embrace the width, check the mono, trust the vibe.**
