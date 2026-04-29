# Integration with Other Plugins

## Using WaveShaper in Processing Chains

Fruity WaveShaper integrates with other FL Studio plugins to create comprehensive distortion and saturation workflows.

[SRC: IL-MAN] WaveShaper works as an insert effect or in parallel configurations with other plugins.

## EQ and WaveShaper

### Pre-EQ Strategy
**Before WaveShaper:**
- High-pass unwanted low frequencies
- Remove problematic resonances
- Shape the tone going into distortion

**Example Chain:**
```
Input → Fruity Parametric EQ 2 (cleanup) → WaveShaper → Output
```

**Pre-EQ Benefits:**
- Remove rumble before distortion
- Shape which frequencies get saturated
- Prevent distortion of unwanted content

### Post-EQ Strategy
**After WaveShaper:**
- Remove harshness added by distortion
- Shape the resulting harmonics
- Fine-tune the final tone

**Example Chain:**
```
Input → WaveShaper → Fruity Parametric EQ 2 (shaping) → Output
```

**Post-EQ Benefits:**
- Tame high-frequency artifacts
- Enhance desirable harmonics
- Fit the distorted sound into the mix

### Combined Pre/Post EQ
```
Input → EQ (cleanup) → WaveShaper → EQ (shaping) → Output
```

**Hip-Hop/R&B Example:**
1. **Pre-EQ:** High-pass 80Hz on vocals
2. **WaveShaper:** Add presence (Pre: +6dB)
3. **Post-EQ:** Cut 4-6kHz harshness, boost 8kHz air

## Compression and WaveShaper

### WaveShaper Before Compression
```
Input → WaveShaper → Fruity Compressor → Output
```

**Benefits:**
- Distortion adds character
- Compression controls resulting dynamics
- Saturated peaks are easier to compress

**Use Case:** Vocals, drums (standard hip-hop chain)

### Compression Before WaveShaper
```
Input → Fruity Compressor → WaveShaper → Output
```

**Benefits:**
- Controlled dynamics hit the curve consistently
- More predictable distortion amount
- Gentle saturation of compressed signal

**Use Case:** Mix bus, controlled sources

### Parallel Compression with WaveShaper
```
Input ─┬─→ WaveShaper ─┐
       │               ├─→ Output
       └─→ Compressor ─┘
```

**Benefits:**
- Distorted layer + compressed clean layer
- Maximum punch and character
- Controlled dynamics with attitude

**Use Case:** Drums, aggressive vocals

## Limiters and WaveShaper

### WaveShaper as Limiter
WaveShaper CAN function as a limiter with specific curve designs:
- Draw horizontal line at threshold (0.7-0.8)
- Everything above = clipped to threshold
- Mix at 100%

### Limiter After WaveShaper
```
Input → WaveShaper → Fruity Limiter → Output
```

**Benefits:**
- WaveShaper adds character
- Limiter catches peaks
- Safe gain staging

**Standard Position:** WaveShaper always comes BEFORE the final limiter.

## Multi-Band Processing

### Maximus Integration
```
Input → Maximus (bands split) → WaveShaper on specific bands → Output
```

**Applications:**
- Distort only mid-range (vocals)
- Keep sub-bass clean (808s)
- Process highs separately (cymbals)

### Example: Multi-Band 808
1. **Low band (30-80Hz):** Clean, no WaveShaper
2. **Mid band (80-200Hz):** Light WaveShaper (Pre: +6dB)
3. **High band (200Hz+):** Heavy WaveShaper (Pre: +12dB)
4. **Result:** Controlled harmonic distribution

## Reverb and WaveShaper

### Distorted Reverb (Send Configuration)
```
Input → Send → WaveShaper → Reverb → Output
```

**Benefits:**
- Saturated reverb tails
- "Crushed room" sound
- Creative texture

**Use Case:** Snare room, vocal ambience

### Reverb Then Distortion
```
Input → Reverb → WaveShaper → Output
```

**Benefits:**
- Distort the entire space
- Aggressive ambience
- Experimental textures

## De-essing and WaveShaper

### Critical: De-ess BEFORE WaveShaper
```
Input → De-esser → WaveShaper → Output
```

**Why:** Distortion amplifies sibilance significantly.

**Chain for Vocals:**
1. EQ (remove mud)
2. **De-esser** (control sibilance)
3. WaveShaper (add warmth/presence)
4. Compression (control dynamics)
5. Optional: Second de-esser (if needed)

## Parallel Processing Setups

### Distortion Bus Method
```
All Tracks ─┬─→ Main Mix Bus ─────────┐
            │                        ├─→ Master
            └─→ Distortion Bus ──────┘
                     ↑
                 WaveShaper (heavy settings)
```

**Benefits:**
- Control distortion amount per track via send level
- One WaveShaper instance processes many tracks
- Efficient CPU usage

### Individual Parallel Channels
```
Track ─┬─→ Clean Channel ─┐
       │                  ├─→ Output
       └─→ WaveShaper ────┘
               (heavy, 100% Mix)
```

**Benefits:**
- Blend clean and distorted signals
- EQ each layer separately
- Maximum control

## Common Plugin Combinations

### Hip-Hop Vocal Chain
```
Input → EQ → De-esser → WaveShaper → Compressor → EQ → Limiter
```

### 808 Chain
```
Input → EQ (cleanup) → WaveShaper → Compression → Sidechain to kick
```

### Drum Bus Chain
```
Drums ─┬─→ Clean Bus ─┐
       │              ├─→ Master
       └─→ WaveShaper Bus ─┘
               (heavy, blended)
```

### Mix Bus Chain
```
All Tracks → EQ → WaveShaper (subtle) → Compression → EQ → Limiter
```

## Plugin Order Guidelines

### General Rules
1. **EQ first:** Clean up before processing
2. **WaveShaper:** Add character early in chain
3. **Dynamics after:** Control what WaveShaper creates
4. **Final EQ:** Shape the result
5. **Limiter last:** Safety only

### Exceptions
- **De-esser:** Always before WaveShaper for vocals
- **High-pass:** Can be before or after depending on goal
- **Reverb:** Usually after WaveShaper (distort the source, not the space)

## Third-Party Plugin Integration

### VST/AU Compatibility
- **Standard insert:** WaveShaper works with any VST/AU plugin
- **Sidechain:** Standard VST sidechain support
- **PDC:** Automatic Plugin Delay Compensation

### Recommended Third-Party Pairings
- **Saturation:** Use WaveShaper for control, tape plugins for color
- **Multi-band:** FabFilter Pro-MB for precise band control
- **Transient designers:** Pair with WaveShaper for maximum punch
- **Metering:** Use Voxengo SPAN to analyze harmonics

## Workflow Examples

### Example 1: Aggressive Hip-Hop Beat
```
Kick:   Sample → EQ → WaveShaper (Bipolar, heavy) → Comp
Snare:  Sample → EQ → WaveShaper (Bipolar, heavy) → Comp → Reverb
808:    Synth → EQ → WaveShaper (Unipolar, medium) → Comp
Vocal:  Recording → EQ → De-esser → WaveShaper → Comp → EQ
Master: Mix → WaveShaper (subtle) → Comp → Limiter
```

### Example 2: Smooth R&B Track
```
Kick:   Sample → EQ → WaveShaper (Unipolar, gentle) → Comp
Snare:  Sample → EQ → WaveShaper (Unipolar, gentle) → Comp → Reverb
808:    Synth → EQ → WaveShaper (Unipolar, gentle) → Comp
Vocal:  Recording → EQ → De-esser → WaveShaper (Unipolar, subtle) → Comp
Master: Mix → WaveShaper (very subtle) → Comp → Limiter
```

---

**Version:** 1.0  
**Last Updated:** 2026-02-03
