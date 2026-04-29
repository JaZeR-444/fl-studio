# Build-Up Sweep with Fruity Phaser

## Goal
Create tension and excitement leading into a hook, drop, or new section using automated phaser sweep.

## When to Use
- **Pre-Chorus**: Build tension before hook
- **Pre-Drop**: Rise into beat drop
- **Transitions**: Section changes
- **Breakdowns**: Return from breakdown to full beat

## Basic Setup

### 1. Choose Target Element
Best candidates:
- Synth pads
- Vocal samples
- White noise
- Sustained chords
- Riser effects

### 2. Insert Fruity Phaser
Add to target track or create dedicated riser track

### 3. Starting Settings
```
Frequency: 1000-1500Hz
Depth: 60-80%
LFO Rate: 0.25 (1/4 note)
Stages: 8-10
Feedback: Start 20%
Wet: Start 0%
```

## Automation Workflow

### Step 1: Set Timeline
- Determine build length (usually 4, 8, or 16 bars)
- Create automation clip for Wet parameter
- Create automation clip for Feedback parameter

### Step 2: Wet Automation
```
Bar 1-2: 0% → 15%
Bar 3-4: 15% → 35%
Bar 5-6: 35% → 60%
Bar 7-8: 60% → 80%
```
*Exponential curve for more dramatic rise*

### Step 3: Feedback Automation
```
Bar 1-4: 20% → 30%
Bar 5-8: 30% → 55%
```
*Increases intensity and resonance*

### Step 4: Optional Frequency Sweep
```
Bar 1: 800Hz
Bar 8: 2500Hz
```
*Rising pitch adds extra excitement*

## Genre-Specific Recipes

### Trap Build
```
Duration: 8 bars
Wet: 0% → 70%
Feedback: 25% → 50%
Frequency: 1200Hz → 3000Hz
Stages: 8
Result: Modern, aggressive rise
```

### Melodic Build
```
Duration: 16 bars (slow)
Wet: 0% → 60%
Feedback: 20% → 45%
Frequency: 800Hz → 1800Hz
Stages: 10
Result: Emotional, gradual tension
```

### Boom Bap Transition
```
Duration: 4 bars (quick)
Wet: 10% → 50%
Feedback: 30% → 40%
Frequency: Static 1000Hz
Stages: 6
Result: Classic sweep effect
```

### Electronic Drop Build
```
Duration: 8 bars
Wet: 0% → 85%
Feedback: 30% → 65%
Frequency: 1500Hz → 4000Hz
Stages: 12
Result: Intense, festival-style rise
```

## Advanced Techniques

### Layered Build
1. Multiple elements with phaser
2. Stagger automation start times
3. Different frequency sweeps
4. Creates complex, evolving build

**Example**:
- Pad: Bars 1-8, low freq sweep
- Synth: Bars 5-8, mid freq sweep
- Noise: Bars 7-8, high freq sweep

### Rhythmic Intensification
1. Start with slow LFO rate (1/2 note)
2. Automate to faster rate (1/8 note)
3. Adds rhythmic urgency
4. Combine with wet automation

### Filter + Phaser Combo
1. Add High-Pass Filter before phaser
2. Automate filter cutoff upward
3. Phaser adds movement
4. Double the rising effect

### Stereo Width Build
1. Start stereo at 30%
2. Automate to 100% during build
3. Phaser expands outward
4. Dramatic stereo effect

## Mixing Considerations

### Don't Overpower
- Build should enhance, not dominate
- Keep main elements audible
- Phaser is supporting role

### Frequency Space
- If building low-frequency element, sweep low freqs
- If building high element, sweep high freqs
- Match sweep to source material

### End Point Matters
- What happens after build peaks?
- Option 1: Bypass phaser at drop
- Option 2: Reset to low wet amount
- Option 3: Keep at medium for ongoing movement

### Combine with Other Builds
- Volume automation (crescendo)
- Filter sweeps
- Reverb increase
- Percussion rolls
- Creates multi-dimensional rise

## Common Build Templates

### 8-Bar Standard Build
```
Bars 1-2: Subtle introduction (wet 0-10%)
Bars 3-4: Noticeable (wet 10-25%)
Bars 5-6: Intensifying (wet 25-50%)
Bars 7-8: Peak tension (wet 50-80%)
```

### 4-Bar Quick Build
```
Bars 1-2: Immediate rise (wet 0-40%)
Bars 3-4: Peak fast (wet 40-75%)
```

### 16-Bar Epic Build
```
Bars 1-4: Subtle (wet 0-15%)
Bars 5-8: Building (wet 15-35%)
Bars 9-12: Intensifying (wet 35-60%)
Bars 13-16: Climax (wet 60-85%)
```

## Pro Tips

✓ **Exponential curves**: More dramatic than linear
✓ **Test in context**: Always check with full beat
✓ **Don't peak too early**: Save max intensity for end
✓ **Match to energy**: Mellow tracks need subtle builds
✓ **Reset after drop**: Don't leave phaser at 80% forever

## Troubleshooting

**Build feels flat**: Increase feedback automation range

**Too harsh**: Lower feedback max value

**Doesn't match vibe**: Adjust frequency sweep range

**Not exciting enough**: Layer multiple elements

**Overwhelming**: Reduce wet max value or shorten build duration
