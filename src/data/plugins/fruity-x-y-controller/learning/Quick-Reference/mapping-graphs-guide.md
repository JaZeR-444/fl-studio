# Mapping Graphs Guide

## Understanding Response Curves

Mapping graphs determine how input position translates to output values. [SRC: IL-MAN]

## Curve Types

### Linear (1:1)

**Shape**: Straight diagonal line

**Behavior**: Input value directly equals output value

**Use when**: Transparent control, predictable response

**Hip-hop application**: Direct filter sweeps, volume fades

```
Input:  0% → 25% → 50% → 75% → 100%
Output: 0% → 25% → 50% → 75% → 100%
```

### Exponential (Exp)

**Shape**: Curve starting flat, getting steeper

**Behavior**: Small changes early, large changes late

**Use when**: Need fine control at low end, fast sweep at high end

**Hip-hop application**: Filter sweeps (subtle → aggressive)

```
Input:  0% → 25% → 50% → 75% → 100%
Output: 0% → 10% → 30% → 60% → 100%
```

### Logarithmic (Log)

**Shape**: Curve starting steep, flattening out

**Behavior**: Large changes early, fine control at high end

**Use when**: Strong effect at start, subtle at end

**Hip-hop application**: Reverb sends (wash out quickly, then fine-tune)

```
Input:  0% → 25% → 50% → 75% → 100%
Output: 0% → 40% → 70% → 90% → 100%
```

### Step

**Shape**: Staircase pattern

**Behavior**: Discrete jumps between values

**Use when**: Switching between preset states

**Hip-hop application**: Mode switches, FX on/off, filter states

```
Input:  0-20% → 21-40% → 41-60% → 61-80% → 81-100%
Output:   0%   →   25%   →   50%   →   75%   → 100%
```

### Custom

**Shape**: User-drawn curve

**Behavior**: Completely customizable response

**Use when**: Specific non-standard behavior needed

**Hip-hop application**: Complex filter responses, special FX builds

## Creating Custom Curves

### Drawing Basics

1. Open mapping graph (right-click output value)
2. Left-click and drag to draw
3. Right-click to add precise points
4. Hold Shift for straight lines

### Curve Shaping Tips

**For "Sweet Spot" Zones:**
1. Draw flat section in middle range
2. Add steep sections on either side
3. Result: Most of pad movement = subtle changes, edges = extreme

**For "Binary" Behavior:**
1. Draw step-like curve
2. Sharp vertical transitions
3. Result: Two or three distinct states

**For "Inverted" Response:**
1. Draw curve from top-left to bottom-right
2. Or click "Invert" button
3. Result: Moving right = decreasing value

## Hip-Hop Curve Recipes

### The Drop Curve (Exponential)
```
X-Map: Exponential
Use: Pre-drop filter opening
Effect: Starts subtle, gets crazy at the peak
```

### The Vibe Stabilizer (Flat with bumps)
```
Custom curve:
- Flat from 0-40% (stable zone)
- Ramp to 100% from 40-60%
- Flat from 60-100% (maxed zone)
Use: Two-state switching with dead zone in middle
```

### The Gradual Build (Log)
```
Y-Map: Logarithmic
Use: Reverb size during intros
Effect: Big wash quickly, then fine-tune tail
```

### The Trigger Curve (Step)
```
Custom step curve with 3 levels
Use: Switching between 808 patterns
Values: Pattern A (0-33%), Pattern B (34-66%), Pattern C (67-100%)
```

## Multiple Target Curves

Same X-Output with different curves:

**Example - The Full Mix Macro:**
- Target A (Filter): Linear (follows exactly)
- Target B (Reverb): Exponential (kicks in late)
- Target C (Distortion): Step (off → on at 80%)

One gesture = layered, complex response

## Common Mistakes

❌ **Too steep**: Small pad movement = huge parameter jump
✅ **Solution**: Add smoothing or flatten curve

❌ **Wrong direction**: Moving pad right makes filter close
✅ **Solution**: Click "Invert" or redraw curve

❌ **Dead zones**: Large pad areas with no change
✅ **Solution**: Redistribute curve evenly unless intentional
