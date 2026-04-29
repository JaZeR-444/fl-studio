# Workflow: Quick Parameter Switching (Instant States)

## Goal
Use X-Y Controller to instantly switch between preset parameter states. Create A/B/C/D switching for real-time sound design and performance. [SRC: IL-MAN]

## Understanding State-Based Control

Instead of continuous modulation, use X-Y as a "switchboard" - each corner or zone represents a different preset configuration.

**Advantages**:
- Instant sound changes
- Recallable presets
- Perfect for live performance
- No gradual transitions (if desired)

## Setup

### Step 1: Define Your States

**What states do you need?**

Common hip-hop state sets:

**Drum Kit States**:
- State A: Punchy, tight
- State B: Lofi, degraded
- State C: Wide, spacious
- State D: Compressed, aggressive

**Vocal Chain States**:
- State A: Intimate, dry
- State B: Spacious, wet
- State C: Radio-ready, polished
- State D: Creative, effected

**Mix Bus States**:
- State A: Verse (tight, focused)
- State B: Pre-chorus (building)
- State C: Chorus (wide, loud)
- State D: Breakdown (minimal)

### Step 2: Configure Step Curves

Step curves create discrete states instead of smooth transitions:

**Curve Setup**:
```
X-Map: Step curve with 4 levels
0-25%  → State A value
25-50% → State B value  
50-75% → State C value
75-100% → State D value
```

**Implementation**:
1. Right-click X-Output
2. Select "Map"
3. Choose "Step" curve type
4. Draw or edit steps

### Step 3: Map States to Pad Zones

**Zone Layout**:
```
[TL: State A] [TC: State B] [TR: State C]
[CL: -      ] [CC: Off/Def] [CR: -     ]
[BL: State D] [BC: -       ] [BR: State E]
```

**Or Corner-Only**:
- Top-Left: State A
- Top-Right: State B
- Bottom-Left: State C
- Bottom-Right: State D

## State Switching Recipes

### Recipe 1: The 4-State Drum Kit

**States**:
- **State A (TL)**: Clean, punchy (dry, tight compression)
- **State B (TR)**: Lofi (bitcrusher, tape saturation)
- **State C (BL)**: Wide (stereo expansion, hall reverb)
- **State D (BR)**: Aggressive (distortion, heavy compression)

**Mapping**:
- X → Filter + Compression (different settings per zone)
- Y → Saturation + Width (different settings per zone)

**Use**: Live drum variation, fills, section changes

### Recipe 2: The 3-Mode Vocal Processor

**States**:
- **State A (Left)**: Intimate (small room, subtle EQ)
- **State B (Center)**: Lead (balanced processing)
- **State C (Right)**: Ad-lib (creative effects, delays)

**Mapping**:
- X → Reverb size + EQ profile (3 distinct curves)
- Y → Effect intensity (optional continuous control)

**Use**: Verse/chorus/ad-lib switching

### Recipe 3: The Section Switcher

**States**:
- **State A**: Verse (minimal processing)
- **State B**: Build (increasing intensity)
- **State C**: Drop (maximum impact)
- **State D**: Breakdown (isolated, thin)

**Mapping**:
- X → Mix-wide macro (different settings per zone)
- Y → Secondary variations

**Use**: Section transitions, DJ-style mixing

### Recipe 4: The Creative FX Bank

**States**:
- **State A**: Reverse reverb
- **State B**: Heavy delay
- **State C**: Bitcrusher
- **State D**: Pitch shift

**Mapping**:
- Each state activates different FX chain
- X-Y → FX mix or send levels

**Use**: Creative transitions, ear candy

## Performance with State Switching

### The State Performance

Unlike continuous gestures, state switching is about **decisive movements**:

1. **Know your zones**: Memorize what each corner does
2. **Plan transitions**: When will you switch states?
3. **Practice jumps**: Snap movements between zones
4. **Hold positions**: Stay in zone for duration of state

### Recording State Switches

**Timing precision is key**:

1. **Practice jumps**: 10+ repetitions to develop muscle memory
2. **Mark the beat**: Know exactly when to switch
3. **Record 5 takes**: Options for best timing
4. **Quantize after**: Snap to 1/4 or 1/2 note grid

### Live State Switching

**For live performance**:

1. **Absolute mode**: Predictable state recall
2. **Visual markers**: Consider marking pad with tape
3. **Simple layouts**: Start with 2-3 states max
4. **Backup plan**: Default state if you miss the zone

## Advanced State Techniques

### The Fading State
Combine step and continuous:

```
X: Step curve (discrete states)
Y: Linear curve (continuous fade)

Result: Switch between states, then fade within state
```

### The Morphing State
Smooth transitions between states:

1. Use linear curves instead of step
2. Position = state blend
3. Center = blend of adjacent states
4. Corners = 100% that state

**Example**:
- Position 25% = 75% State A + 25% State B
- Position 50% = 50% A + 50% B
- Position 75% = 25% A + 75% B

### The Conditional State
States that depend on other conditions:

- State A only active when kick plays
- State B triggered by velocity
- State C manual override

**Implementation**: Use Formula Controller or Peak Controller

### The Macro State
Each state = entire macro configuration:

**State A**: X-Y → Filter sweep macro
**State B**: X-Y → Space expansion macro
**State C**: X-Y → Drop build macro

Switch between different macro setups per section.

## Common State Switching Mistakes

❌ **Too many states**: 8+ states (hard to remember)
✅ **Solution**: 2-4 states maximum for usability

❌ **Unclear differences**: States sound too similar
✅ **Solution**: Make state changes dramatic and obvious

❌ **Accidental triggering**: Grazing pad edge changes state
✅ **Solution**: Add dead zones between states

❌ **No default state**: Nowhere to "reset" to
✅ **Solution**: Always have a "normal" state (usually center)

## Quick State Setup Checklist

- [ ] Define 2-4 clear, distinct states
- [ ] Configure step curves (or linear for morphing)
- [ ] Map zones to pad positions
- [ ] Test each state sounds correct
- [ ] Practice zone jumps 10+ times
- [ ] Plan state change timing
- [ ] Record 3-5 takes
- [ ] Quantize if needed
- [ ] Add dead zones if accidental triggers occur

## State Switching vs Continuous Control

| State Switching | Continuous Control |
|-----------------|-------------------|
| Discrete changes | Smooth transitions |
| A/B/C/D presets | Full range control |
| Perfect for live | Better for studio |
| Decisive gestures | Fluid movements |
| Section-based | Real-time modulation |

**Best practice**: Use both - states for sections, continuous for performance moments

**Time to Complete**: 10-20 minutes per state setup
**Impact**: Instant, recallable sound variations
