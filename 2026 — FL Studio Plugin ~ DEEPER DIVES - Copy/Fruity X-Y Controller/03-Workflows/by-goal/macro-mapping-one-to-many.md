# Workflow: Macro Mapping (One Gesture → Many Parameters)

## Goal
Set up X-Y Controller to control 6+ parameters simultaneously with a single gesture. Create powerful macro controls that transform your entire mix with one hand movement. [SRC: IL-MAN]

## Understanding Macro Mapping

Macro = controlling multiple parameters with a single control source.

With X-Y Controller:
- X-Output → Multiple targets
- Y-Output → Multiple targets  
- Speed → Target
- Acceleration → Target

**Result**: One gesture can affect 8-10+ parameters simultaneously

## Setup

### Step 1: Define the Macro Intent

**What should this macro DO?**

Examples:
- "Drop Build" = everything gets bigger
- "Vibe Kill" = strip down to essentials
- "808 Punch" = maximize bass impact
- "Vocal Presence" = enhance voice clarity
- "Space Explosion" = maximum reverb wash

### Step 2: Choose Target Parameters

Select 4-8 parameters that support the macro intent:

**Drop Build Macro**:
1. Filter cutoff (opens up)
2. Reverb send (increases)
3. Saturation (adds harmonics)
4. Stereo width (widens)
5. Compression ratio (tightens)
6. Delay feedback (more echoes)

### Step 3: Map with Different Curves

**Same output, different responses**:

```
X-Output → Filter Cutoff: Linear (follows exactly)
X-Output → Reverb Send: Exponential (kicks in at 60%)
X-Output → Saturation: Step (off until 80%, then on)
X-Output → Width: Linear (steady increase)
```

**Why different curves?**
- Creates "layered" macro effect
- Some parameters respond early, others late
- More complex and interesting than uniform response

### Step 4: Route All Mappings

**Quick routing technique**:

1. Right-click Target 1 → "Link to controller" → X-Y Controller → X
2. Right-click Target 2 → "Link to last tweaked controller"
3. Repeat for all targets
4. Faster than full menu navigation every time

## Macro Mapping Recipes

### Recipe 1: The Full Drop Build
**Intent**: Maximum intensity before drop

**Parameters**:
- X → Filter cutoff (200Hz-20kHz, linear)
- X → Reverb send (0-70%, exponential)
- X → Stereo width (80-150%, linear)
- Y → Saturation (0-40%, exponential)
- Y → Compression ratio (2:1-6:1, linear)
- Y → Delay feedback (10-60%, exponential)

**Gesture**: Spiral outward from center over 8 bars

**Timing**:
- 0-50% pad: Subtle changes
- 50-80% pad: Noticeable build
- 80-100% pad: Intense, rapid change

### Recipe 2: The Vibe Kill
**Intent**: Frequency isolation for breakdowns

**Parameters**:
- X → High-pass filter (20Hz-2kHz, linear)
- Y → Low-pass filter (200Hz-20kHz, linear)

**Gesture**: Snap to bottom-left corner

**Positions**:
- Center (50%, 50%): Full frequency spectrum
- Bottom-Left (0%, 0%): Only mid-range (300Hz-2kHz)
- Top-Right (100%, 100%): Full spectrum with boost

### Recipe 3: 808 Punch Macro
**Intent**: Maximize 808 impact

**Parameters**:
- X → Volume (100-120%, linear)
- Y → Distortion (0-30%, exponential)
- Speed → Compression ratio (gentle-aggressive)

**Gesture**: Hard punch to top-right = loud + distorted + compressed

### Recipe 4: Vocal Presence
**Intent**: Enhance vocal clarity and warmth

**Parameters**:
- X → High-mid EQ boost (presence)
- Y → Saturation (warmth)
- Speed → De-esser (tame harshness on fast transients)

**Gesture**: Gentle curve to top-right

### Recipe 5: Space Explosion
**Intent**: Transform room size instantly

**Parameters**:
- X → Reverb size (small room → cathedral)
- X → Pre-delay (tight → spacious)
- Y → Delay feedback (discrete → infinite)
- Y → Stereo width (mono → ultra-wide)

**Gesture**: Vertical sweep to top

## Advanced Macro Techniques

### Nested Macros
Chain effects together:

1. X-Y → Parameter A
2. Parameter A → Parameter B (linked)
3. Result: Moving X-Y moves A, which automatically moves B
4. Use for complex, interdependent changes

### Conditional Macros
Use Formula Controller:

- X-Y → Formula → Targets
- Formula logic: "If X > 50%, affect reverb; else affect delay"
- Result: Context-dependent macro behavior

### Inverted Macros
Reverse the relationship:

- X-Output → Target A (increasing)
- X-Output → Target B (decreasing via invert)
- Result: A goes up while B goes down
- Example: Filter opens while reverb dries out

### Macro Switching
Change active macro per section:

**Verse**: X-Y → Vocal presence macro
**Pre-Chorus**: X-Y → Build macro
**Chorus**: X-Y → Width/spatial macro

Use automation clips to switch between mapping sets.

## Performance with Macros

### The Macro Gesture Library

Develop repeatable gestures for each macro:

1. **The Spiral**: Drop builds (increasing intensity)
2. **The Snap**: Vibe kills (instant transformation)
3. **The Punch**: Impact moments (hard corner hit)
4. **The Wiggle**: Subtle modulation (center ±10%)

### Recording Macro Performance

1. **Practice**: 3-5 reps without recording
2. **Calibrate**: Check all targets respond correctly
3. **Capture**: 3-5 takes, varying intensity
4. **Comp**: Select best moments per section
5. **Refine**: Adjust individual targets if needed

## Common Macro Mistakes

❌ **Too many targets**: 15+ parameters (uncontrollable chaos)
✅ **Solution**: 4-8 well-chosen targets

❌ **No clear intent**: "Map everything to everything"
✅ **Solution**: Define the macro's purpose first

❌ **Uniform curves**: All targets use linear
✅ **Solution**: Mix curves for layered response

❌ **Fighting parameters**: Two targets work against each other
✅ **Solution**: All targets should support the same musical goal

❌ **Static macros**: Mapped but never automated
✅ **Solution**: Perform the macro gestures - don't just set values

## Quick Macro Setup Checklist

- [ ] Define macro intent (one sentence)
- [ ] Select 4-8 supporting parameters
- [ ] Choose appropriate curves for each
- [ ] Set min/max values that make sense together
- [ ] Test all targets respond correctly
- [ ] Practice the gesture 3-5 times
- [ ] Record performance takes
- [ ] Comp and refine

## Macro Templates

Save your macros as presets:

```
1. Load X-Y Controller preset
2. All mappings load automatically
3. Ready to perform
```

Share macros with collaborators:
- Save .fst preset file
- Include mapping documentation
- Note intended gesture patterns

**Time to Complete**: 15-30 minutes per macro
**Impact**: Transform entire sections with single gestures
