# Hip-Hop & R&B X-Y Conventions

## Genre-Specific Mapping Conventions

These conventions represent best practices for hip-hop and R&B production with Fruity X-Y Controller. [SRC: IL-MAN]

---

## Trap Subgenre

### Tempo Range: 130-150 BPM
### Character: Hard-hitting, space-heavy, aggressive

#### Standard Mapping
**X-Axis**: Filter Cutoff (200Hz - 20kHz, exponential curve)
- Drops: Full close to open sweeps
- Hi-hats: Quick 1/16 note jitters

**Y-Axis**: Reverb Send (0-70%, exponential curve)
- Verse: Minimal (0-20%)
- Hook: Maximum wash (50-70%)

**Speed**: Sidechain amount or transient shaper
- Fast gestures = more compression/punch

#### Signature Gestures
1. **The Build**: Spiral outward 8 bars, peak at drop
2. **The Triplets**: Small X jitters sync'd to hi-hat rolls
3. **The 808 Pump**: Vertical pump motion on bass hits

---

## Boom Bap

### Tempo Range: 85-100 BPM
### Character: Sample-based, swing-heavy, vintage

#### Standard Mapping
**X-Axis**: Sample chop position or pitch
- Real-time sample flipping
- Pitch variation for "vinyl" feel

**Y-Axis": Filter resonance or saturation
- Add "warmth" to samples
- Vintage character control

**Speed**: Scratch simulation or stutter effect

#### Signature Gestures
1. **The Swing**: Loose, behind-the-beat gestures
2. **The Chop**: Discrete X steps (step curve) for sample cuts
3. **The Warmth**: Gentle Y curves adding saturation

---

## Drill

### Tempo Range: 140-150 BPM
### Character: Dark, sliding 808s, minimal

#### Standard Mapping
**X-Axis**: 808 Slide Range or Filter
- Control note slides in real-time
- Dark filter for "underwater" sections

**Y-Axis**: Reverb decay or spatial width
- Create "tunnel" effects
- Mono to stereo spread

**Speed**: Ghost note emphasis or stutter intensity

#### Signature Gestures
1. **The Slide**: X follows 808 note patterns
2. **The Tunnel**: Hold bottom-left for isolation
3. **The Stutter**: Rapid X back-and-forth on fills

---

## R&B / Neo-Soul

### Tempo Range: 60-85 BPM
### Character: Smooth, spacey, vocal-focused

#### Standard Mapping
**X-Axis**: Vocal formant or EQ sweep
- Character changes without pitch shift
- Warm presence zones

**Y-Axis**: Reverb pre-delay and size
- Intimate (small room) to expansive (hall)
- Smooth transitions

**Speed**: Subtle vibrato or tremolo depth

#### Signature Gestures
1. **The Breath**: Slow, organic Y movements
2. **The Presence**: Small X jitters around vocal sweet spot
3. **The Space**: Smooth curves expanding room over phrases

---

## Pop-Hip-Hop

### Tempo Range: 90-120 BPM
### Character: Polished, wide, energetic

#### Standard Mapping
**X-Axis**: Stereo width (50-150%) or chorus rate
- Maximize impact on hooks
- Subtle movement on verses

**Y-Axis**: Excitement chain (saturation + compression)
- Dynamic range control
- Energy enhancement

**Speed**: Accent detection for fills and impacts

#### Signature Gestures
1. **The Width**: Full X sweeps on chorus entrances
2. **The Polish**: Small center movements maintaining quality
3. **The Impact**: Sharp corners for drop moments

---

## Lo-Fi Hip-Hop

### Tempo Range: 70-90 BPM
### Character: Relaxed, degraded, nostalgic

#### Standard Mapping
**X-Axis**: Bitcrusher or degradation amount
- "Broken" sound intensity
- Sample rate reduction

**Y-Axis**: Pitch drift or wow/flutter
- Tape emulation
- Imperfection control

**Speed**: Crackle or noise intensity

#### Signature Gestures
1. **The Drift**: Slow, wandering movements
2. **The Degrade**: Corner positions for max lofi effect
3. **The Imperfection**: Random micro-movements

---

## Vibe Target Conventions by Subgenre

| Subgenre | Primary Vibe | Secondary Vibe | Modulation Style |
|----------|--------------|----------------|------------------|
| Trap | BOUNCE | SPACE | Sharp, precise |
| Boom Bap | TEXTURE | MOVEMENT | Loose, swung |
| Drill | TENSION | TEXTURE | Dark, minimal |
| R&B | SPACE | MOVEMENT | Smooth, fluid |
| Pop-Hip-Hop | BOUNCE | TEXTURE | Polished, wide |
| Lo-Fi | MOVEMENT | TEXTURE | Subtle, drifting |

---

## Common Parameter Conventions

### 808 Bass
**Standard**: 
- X = Volume boost (100-115%)
- Y = Distortion character (0-40%)
- Curve: Linear for X, Exponential for Y

### Drums
**Standard**:
- X = Transient shaping (soft to punchy)
- Y = Parallel compression blend
- Speed = Accent intensity on snares

### Vocals
**Standard**:
- X = Presence/De-essing balance
- Y = Space (reverb/delay blend)
- Small ranges (±15%) for subtlety

### Samples
**Standard**:
- X = Filter (classic vintage sweep)
- Y = Saturation (tape warmth)
- Speed = Chop/stutter timing

---

## Phrase Structure Conventions

### 4-Bar Phrase (Standard)

```
Bar 1: Establish position (static or subtle movement)
Bar 2: Build momentum (increasing movement)
Bar 3: Peak tension (maximum modulation)
Bar 4: Release or transition (return to static)
```

### 8-Bar Section

```
Bars 1-2: Subtle, establishing
Bars 3-4: Building, increasing
Bars 5-6: Peak, maximum
Bars 7-8: Release, settling
```

### Drop Preparation

```
2 bars before: Start modulation
1 bar before: Accelerate
2 beats before: Peak gesture
Drop hit: Hold or snap to new position
```

---

## Integration with Other Controllers

### Formula Controller
- X-Y → Formula → Complex targets
- Use for conditional logic ("if X > 50%, then...")

### Peak Controller
- X-Y controls input threshold
- Dynamics-based interaction

### LFO
- X-Y as "human override" of LFO
- Blend automated and performed modulation

---

## Cultural Conventions

### The "Producer Tag" Effect
- Quick X-Y gesture at track start
- Signature movement pattern
- Becomes recognizable "signature"

### The "Switch-Up"
- Sudden mapping change at section boundary
- Example: Filter sweep → complete reverb kill
- Keeps listener engaged

### The "Vibe Loop"
- Continuous small gestures throughout
- Creates "alive" feeling
- Signature of experienced producers

---

## Modern Trends (2024-2025)

1. **Hyper-pop influence**: Extreme parameter ranges, glitchy gestures
2. **Minimal drill**: Subtle X-Y, negative space emphasis
3. **Afrobeats fusion**: Polyrhythmic gesture patterns
4. **AI-assisted**: Performance quantization + humanization
5. **Spatial audio**: X-Y mapped to 3D positioning (when available)
