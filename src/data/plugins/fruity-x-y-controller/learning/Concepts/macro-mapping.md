# Macro Mapping with X-Y Controller

## What is Macro Mapping?

Macro mapping = controlling multiple parameters with a single gesture. With X-Y Controller, one 2D movement can simultaneously drive 6-10+ parameters across your mix. [SRC: IL-MAN]

## The Math

X-Y Controller provides 2 outputs (X and Y), but through creative routing:

- X-Output → Parameter A, Parameter B, Parameter C
- Y-Output → Parameter D, Parameter E, Parameter F
- Speed → Parameter G
- Acceleration → Parameter H

**Result**: 1 hand gesture = 8+ parameter changes

## Setting Up Macro Maps

### Step 1: Choose Your Targets

Select parameters that should move together logically:

**Drop Build Macro:**
- Filter cutoff (opens up)
- Reverb send (increases)
- Saturation (adds harmonics)
- Stereo width (widens)
- Compression threshold (tightens)

**Vibe Kill Macro:**
- Low cut (removes bass)
- High cut (removes treble)
- Reverb size (maxes out)
- Delay feedback (infinite)

### Step 2: Route the Controller

1. Right-click target parameter → "Link to controller"
2. Select X-Y Controller from list
3. Choose X or Y output
4. Set mapping graph (usually linear for transparent control)

### Step 3: Calibrate Ranges

Use the mapping dialog to set:
- **Min/Max**: What range of the parameter should the controller affect?
- **Curve**: Linear (equal) or non-linear (sensitive in certain zones)
- **Invert**: Reverse the relationship if needed

## Advanced Macro Techniques

### Nested Macros

Controller 1 → Parameter A → Parameter B (linked)
- Moving A automatically moves B
- Chain reactions create complex systems

### Conditional Macros

Use Formula Controller as middleman:
- X-Y → Formula → Target
- Formula logic: "Only affect reverb if filter > 50%"

### Layered Intensity

Same X-Output to multiple targets with different curves:
- Target A: Linear (full range)
- Target B: Exponential (kicks in late)
- Target C: Logarithmic (strong early, subtle late)

## Hip-Hop Macro Examples

### The "808 Punch" Macro
- X = Volume (0-120%)
- Y = Distortion amount (0-50%)
- Speed = Compression ratio (gentle → aggressive)

Gesture: Hard punch top-right = loud + distorted + compressed

### The "Vocal Presence" Macro
- X = EQ high-mid boost (add clarity)
- Y = Saturation (add warmth)
- Speed = De-esser intensity (tame harshness)

Gesture: Gentle curve = smooth vocal enhancement

### The "Mix Collapse" Macro
- X = High-pass filter (removes lows)
- Y = Low-pass filter (removes highs)

Gesture: Center to edge = full frequency kill (breakdown effect)

## Performance Tips

1. **Practice gestures** - Muscle memory for common moves
2. **Mark sweet spots** - Memorize positions for "perfect" sounds
3. **Use relative mode** for fine adjustments without losing position
4. **Record multiple passes** - Comp takes for macro builds
