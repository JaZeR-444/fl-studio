# Workflow: Sample Chop Performance

## Goal
Use X-Y Controller to perform, manipulate, and enhance sample-based productions. Create dynamic, played sample arrangements that feel alive and responsive. [SRC: IL-MAN]

## Understanding Sample Control

Samples are the foundation of boom bap and lo-fi hip-hop. Static samples sound like loops - performed samples sound like instruments.

### Why Modulate Samples?
- Real-time chop variations
- Pitch and time manipulation
- Tonal character evolution
- "DJ-style" performance effects

## Setup

### Step 1: Sample Chop Architecture

**Sample playback options**:
```
Sampler (FPC, Slicex, DirectWave) → X-Y Controller → Processing
```

**X-Y integration points**:
- Chop position (which slice plays)
- Pitch/time manipulation
- Filter and character
- Playback direction

### Step 2: Sample Mapping Strategy

**X-Axis: Chop Position + Pitch**
- Slice selection (step curve for discrete chops)
- Pitch shift (±12 semitones for melodic variation)
- Playback direction (forward/reverse)

**Y-Axis: Character + Texture**
- Filter cutoff (shape tone)
- Saturation (add vintage character)
- Bit depth/sample rate (degradation)

**Speed: Dynamic response**
- Trigger different chops based on movement speed
- Fast movement = quick chop changes

### Step 3: Advanced Sample Mapping

**Time stretching**:
- X → Time stretch ratio
- Range: 50-150%
- Use: Syncopated variations

**Playback modes**:
- Y → Playback direction (forward/reverse)
- Step curve for A/B switching
- One-shot vs. loop modes

**Envelope control**:
- X → Sample start point
- Y → Sample end point
- Real-time sample windowing

## Sample Performance Patterns

### Pattern 1: The Live Chop
```
Target: Slice position
Duration: Real-time performance
Gesture: Step movements between zones

Technique:
1. Map X to slice position (step curve)
2. Divide pad into zones (4-8 slices)
3. Each zone = different sample slice
4. Jump between zones = chop variations
5. Record live performance
6. Result: Performed, non-repeating chop
```

### Pattern 2: The Pitch Play
```
Target: Sample pitch
Duration: Phrase-level
Gesture: Smooth X curves

Technique:
1. Map X to pitch (±7 semitones)
2. Map Y to filter (compensate for pitch changes)
3. Play melodies by moving X
4. Y controls "vinyl" tone
5. Result: Performed melodic variations
```

### Pattern 3: The Vinyl Effect
```
Target: Wow/flutter + pitch drift
Duration: Continuous
Gesture: Slow, wandering Y movements

Technique:
1. Map X to wow/flutter (tape pitch drift)
2. Map Y to subtle filter movement
3. Slow, organic gestures
4. Emulates real vinyl playback
5. Result: Authentic lo-fi character
```

### Pattern 4: The Stutter Chop
```
Target: Playback trigger + filter
Timing: Rhythmic accents
Gesture: Rapid X oscillation

Technique:
1. Map X to slice position
2. Map Speed to retrigger
3. Rapid X movements = stutter effect
4. Sync to 1/16 or 1/32 notes
5. Result: Glitchy, rhythmic variations
```

## Genre-Specific Sample Techniques

### Boom Bap Chops
**Setup**:
- X = Slice position (step curve)
- Y = Low-pass filter (vintage tone)
- Speed = Occasional reverse trigger

**Gesture**: DJ-style chop variations
**Character**: Raw, authentic, soulful

### Lo-Fi Sample Treatment
**Setup**:
- X = Bitcrusher/sample rate
- Y = Wow/flutter + pitch drift
- Smoothing: High (30%+)

**Gesture**: Slow, imperfect movements
**Character**: Degraded, nostalgic, warm

### Trap Sample Flipping
**Setup**:
- X = Pitch shift (±12 semitones)
- Y = Filter + time stretch
- Speed = Chop retrigger

**Gesture**: Bold, dramatic variations
**Character**: Modern, transformed, unexpected

### Drill Darkening
**Setup**:
- X = Low-pass filter (dark)
- Y = Compression (slammed)
- Minimal pitch variation

**Gesture**: Dark pad positions
**Character**: Gritty, heavy, minimal

## Sample Performance Techniques

### The Sample DJ Set

Perform samples like a DJ:

1. **Load sample** into Slicex or FPC
2. **Map X** to slice position
3. **Map Y** to filter (tone control)
4. **Perform live**: Jump between slices
5. **Add filter sweeps** for transitions
6. **Record 5 takes**
7. **Comp best chop moments**

### The Melodic Sample

Turn samples into instruments:

1. **Map X to pitch** (±12 semitones)
2. **Map Y to filter** (timbre control)
3. **Play melodies** by moving X
4. **Shape tone** with Y
5. **One sample = infinite variations**

### The Degraded Loop

Create evolving lo-fi textures:

1. **Map X to bit depth** (16-bit → 8-bit → 4-bit)
2. **Map Y to sample rate** (44.1k → 22k → 11k)
3. **Slow degradation** over 16 bars
4. **Add wow/flutter** (tape drift)
5. **Result**: Loop that deteriorates organically

## Sample + Drum Interaction

### Chopped Breakbeat

Classic hip-hop technique with X-Y control:

1. **Load breakbeat** into slicer
2. **Map X** to chop position
3. **Map Y** to filter (remove high-end for vintage feel)
4. **Perform chop variations** that interact with programmed drums
5. **Create call-and-response** between sample and drums

### The Sample Build

Sample intensity building:

1. **Intro**: Filtered, minimal chop (20% pad)
2. **Verse**: More active chopping (40-60% pad)
3. **Hook**: Full chop variations (80-100% pad)
4. **Different chop patterns per section**
5. **Record as performance**

## Common Sample Mistakes

❌ **Extreme pitch shifts**: Samples sound unnatural
✅ **Solution**: Limit to ±7 semitones for musical results

❌ **Over-chopping**: Every beat = different slice (chaos)
✅ **Solution**: Musical chop patterns, not random

❌ **Static samples**: Loop plays unchanged for 16 bars
✅ **Solution**: Even subtle filter movement adds life

❌ **Conflicting timing**: Chops don't align with beat
✅ **Solution**: Quantize to grid or practice timing

## Quick Sample Recipes

### The Soul Chop
- X = Slice position (step, 4-8 zones)
- Y = Low-pass filter (vintage tone)
- Gesture: DJ-style variations
- Result: Classic boom bap feel

### The Lo-Fi Drift
- X = Bitcrusher (16→8→4 bit)
- Y = Wow/flutter (tape drift)
- Smoothing: 40%
- Result: Nostalgic degradation

### The Trap Flip
- X = Pitch shift (±12 semitones)
- Y = Time stretch (50-150%)
- Gesture: Bold melodic variations
- Result: Transformed, modern sample

### The Stutter Effect
- X = Slice position
- Speed = Retrigger
- Gesture: Rapid oscillation
- Result: Rhythmic glitch chops

**Time to Complete**: 15-30 minutes per sample arrangement
**Impact**: Transform static loops into performed, dynamic arrangements
