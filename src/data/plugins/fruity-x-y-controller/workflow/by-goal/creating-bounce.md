# Workflow: Creating Bounce with X-Y Controller

## Goal
Use X-Y Controller to inject rhythmic energy and groove into static tracks. Create the "head-nod" factor that defines hip-hop. [SRC: IL-MAN]

## Understanding Bounce

Bounce = the feeling of the track "moving" in time with the groove. It's what makes people nod their heads instinctively.

### Bounce Sources
- Filter movement synced to beat
- Dynamic compression changes
- Stereo width modulation
- Space (reverb/delay) pumping

## Setup

### Step 1: Map to Groove Parameters

**X-Output → Filter Cutoff**
- Range: 200Hz - 8kHz (don't go too extreme)
- Curve: Exponential (subtle at low, more open at high)
- Sync to: Hi-hat rhythm or snare backbeat

**Y-Output → Mix Bus Compression**
- Range: Gentle (2:1) to Punchy (4:1)
- Curve: Linear
- Sync to: Kick drum for "pump" effect

**Speed (optional) → Transient Shaper**
- Fast movements = more transient emphasis
- Use for accent beats

### Step 2: Configure Timing

**Grid Settings**:
- Snap: 1/16 notes for trap
- Snap: 1/8 notes for boom bap
- Free timing: For loose, organic feel

**Quantize Strategy**:
1. Record free (human timing)
2. Quantize to 1/16
3. Humanize by ±5-10%
4. Result: Tight but alive

## Gesture Patterns

### Pattern 1: The Hi-Hat Jitter
```
Timing: Every hi-hat hit (1/16 or 1/8 notes)
Gesture: Small ±10% X jitters
Result: Filter "dances" with hi-hat pattern
```

### Pattern 2: The Snare Snap
```
Timing: Beats 2 and 4
Gesture: Quick X movement (5% → 15% → 5%)
Duration: 1/16 note
Result: Snare "pops" with filter emphasis
```

### Pattern 3: The Groove Loop
```
Timing: 2-bar loop
Gesture: Figure-8 pattern
X-axis: Responds to kick pattern
Y-axis: Responds to snare pattern
Result: Full groove interaction
```

### Pattern 4: The Drop Pump
```
Timing: Last 4 beats before drop
Gesture: Accelerating X jitters
Start: 1/4 note intervals
End: 1/32 note frenzy
Result: Maximum tension release
```

## Recording Workflow

### Step 1: Practice the Pattern
1. Set metronome to track BPM
2. Practice gesture without recording
3. Focus on timing accuracy
4. Do 5 practice passes

### Step 2: Capture Performance
1. Enable recording (Ctrl + R)
2. Enable loop for section
3. Record 3-5 takes
4. Don't stop if you make mistakes

### Step 3: Edit and Comp
1. Review all takes in playlist
2. Cut best moments from each
3. Crossfade between sections
4. Smooth automation curves

## Hip-Hop Applications

### Trap Bounce
**Target**: Drum bus
**Gesture**: Sharp X jitters on hi-hats
**Settings**: Exponential curve, fast return

### Boom Bap Swing
**Target**: Sample chop
**Gesture**: Loose Y curves behind the beat
**Settings**: Linear curve, swung timing

### Drill Aggression
**Target**: 808 + drums
**Gesture**: Hard X snaps on every snare
**Settings**: Step curve for discrete changes

### R&B Groove
**Target**: Full mix
**Gesture**: Smooth figure-8 over 4 bars
**Settings**: High smoothing, gentle curves

## Advanced Techniques

### Layered Bounce
1. Controller 1: X-Y → Drum bus (tight timing)
2. Controller 2: X-Y → Bass (loose timing)
3. Result: Multiple groove layers interacting

### Conditional Bounce
Use Formula Controller as middleman:
- X-Y → Formula → Target
- Logic: "Only modulate if kick is present"
- Result: Bounce that responds to the music

### Polyrhythmic Bounce
- Map X to 1/4 note timing
- Map Y to 1/6 note timing (triplets)
- Result: Complex, evolving groove

## Common Mistakes

❌ **Too extreme**: Filter goes from 0-20kHz (sounds like on/off)
✅ **Solution**: Limit range to musical zone (200Hz-8kHz)

❌ **Out of time**: Gestures not synced to beat
✅ **Solution**: Use grid snap or quantize after recording

❌ **Static for too long**: No movement for 4+ bars
✅ **Solution**: Even subtle movement keeps it alive

## Quick Reference

**Bounce Recipe**:
1. Map X to filter (200Hz-8kHz range)
2. Map Y to compression (gentle ratio)
3. Record hi-hat synced jitters
4. Quantize to 1/16
5. Smooth curves
6. Done

**Time to Complete**: 5-10 minutes per section
**Impact**: Instant groove improvement
