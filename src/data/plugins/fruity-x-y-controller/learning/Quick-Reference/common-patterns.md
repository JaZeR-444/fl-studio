# Common X-Y Controller Patterns

## Pattern Library

Ready-to-use gesture patterns for hip-hop production. [SRC: IL-MAN]

---

## Filter Patterns

### Pattern 1: The Drop Sweep
**Gesture**: Bottom-Left → Top-Right diagonal
**Timing**: 4 bars, accelerating curve
**Maps**: X = Filter cutoff, Y = Drive
**Use**: Pre-drop build

```
Bar 1-2: Slow diagonal start
Bar 3: Accelerate
Bar 4: Quick finish at TR corner
Result: Filter opens + drive increases
```

### Pattern 2: The Talking Filter
**Gesture**: Figure-8 pattern
**Timing**: Sync'd to vocal phrase
**Maps**: X = Filter freq, Y = Resonance
**Use**: Vocal processing, wah effect

```
Continuous figure-8:
- Top loop = open vowel sounds
- Bottom loop = closed consonants
- Speed = emphasis amount
```

---

## Drum Patterns

### Pattern 3: The Beat Bounce
**Gesture**: Small horizontal jitters
**Timing**: On 2 and 4 (backbeat)
**Maps**: X = Transient shaper, Y = Parallel compression
**Use**: Add groove to stiff drums

```
Pattern: • • X • • • X •
         (rest)(hit)(rest)(hit)
X position: small 10% jitter on beat
Result: Dynamic beat emphasis
```

### Pattern 4: The Fill Impact
**Gesture**: Quick corner-to-corner snap
**Timing**: 1 bar before section change
**Maps**: X = Volume, Y = Reverb send
**Use**: Drum fills that explode

```
Step 1: Hold bottom-left (quiet)
Step 2: At fill start, snap to top-right
Step 3: Hold through fill
Step 4: Return to center
Result: Fill is LOUD + WASHY
```

---

## Space Patterns

### Pattern 5: The Room Morph
**Gesture**: Smooth vertical arc
**Timing**: 8 bars, section transition
**Maps**: X = Reverb size, Y = Pre-delay
**Use**: Transform room size gradually

```
Bar 1-4: Y slowly rises (increasing pre-delay)
Bar 5-8: X slowly rises (increasing size)
Result: Room grows organically
```

### Pattern 6: The Tunnel Effect
**Gesture**: Center → Edge → Center
**Timing**: 2 bars, symmetric
**Maps**: X = High-pass, Y = Low-pass
**Use**: Temporary "underwater" effect

```
Bar 1: Center to edge (filters engage)
Bar 2: Edge back to center (filters release)
Result: Temporary frequency isolation
```

---

## Macro Patterns

### Pattern 7: The Full Build
**Gesture**: Spiral from center outward
**Timing**: 8-16 bars
**Maps**: Multiple targets (see below)
**Use**: Maximum impact pre-drop

```
Maps:
- X → Filter (0-100%)
- X → Reverb send (0-80%)
- Y → Saturation (0-50%)
- Y → Stereo width (0-150%)
- Speed → Compression ratio

Gesture: Spiral outward, accelerating
Result: Everything gets bigger
```

### Pattern 8: The Vibe Kill
**Gesture**: Sharp center-to-bottom-left
**Timing**: Instant
**Maps**: X = High-pass freq, Y = Low-pass freq
**Use**: Breakdown frequency isolation

```
Gesture: Snap to bottom-left corner
Position: Removes both bass AND treble
Result: Only mids remain (thin sound)
Reverse gesture: Full frequency restoration
```

---

## Performance Patterns

### Pattern 9: The Live Wiggle
**Gesture**: Small random movements around sweet spot
**Timing**: Continuous
**Maps**: X = Pitch drift, Y = Formant
**Use**: "Human" vocal effects

```
Range: ±10% from center
Speed: Slow, breathing-like
Result: Natural imperfection
```

### Pattern 10: The Stutter
**Gesture**: Rapid back-and-forth on X axis
**Timing**: 1/16 or 1/32 notes
**Maps**: X = Gate threshold, Y = Volume
**Use**: Rhythmic stutter effect

```
Speed: Very fast alternating
Pattern: Left-right-left-right
Result: Machine-gate effect
```

---

## Custom Pattern Template

Create your own patterns:

```
Name: [Pattern Name]
Gesture: [Description]
Timing: [Bars/Beats]
Maps: [X target], [Y target]
Use: [Application]

Steps:
1. [First movement]
2. [Second movement]
3. [Result]
```

## Pattern Combinations

**Verse → Drop**:
1. Pattern 9 (subtle movement during verse)
2. Pattern 7 (spiral build for 8 bars)
3. Pattern 1 (final sweep into drop)

**Breakdown → Build**:
1. Pattern 8 (vibe kill at breakdown start)
2. Pattern 5 (room morph during breakdown)
3. Pattern 7 (full build to drop)
