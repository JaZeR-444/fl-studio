# Parameter Specifications

## Complete Parameter Dictionary

[SRC: IL-MAN] This document provides detailed specifications for all Fruity WaveShaper controls.

## Pre (Input Drive)

**Function:** Input amplification before transfer curve

**Technical Specs:**
- Range: -24dB to +24dB
- Step Size: 0.1dB (fine control)
- Default: 0dB
- Automation: Full support

**Behavior:**
- Linear gain increase/decrease
- Applied before curve processing
- Higher values = more distortion
- No internal ceiling (can clip if not monitored)

**Use Cases:**
- **Subtle saturation:** +3 to +6dB
- **Standard distortion:** +8 to +12dB
- **Heavy processing:** +14 to +20dB
- **Creative destruction:** +20dB+

**Safety Considerations:**
- Always monitor output level
- Compensate with Post gain
- Watch for channel/master clipping
- Higher values need more oversampling

## Mix (Dry/Wet Balance)

**Function:** Blend processed and original signals

**Technical Specs:**
- Range: 0% to 100%
- Step Size: 1%
- Default: 100%
- Automation: Full support

**Behavior:**
- 0% = 100% dry (no effect)
- 50% = Equal dry and wet
- 100% = 100% processed
- Linear crossfade

**Use Cases:**
- **Transparent:** 10-25%
- **Standard parallel:** 30-50%
- **Aggressive:** 60-80%
- **Full effect:** 90-100%

**Hip-Hop/R&B Guidelines:**
- 808s: 50-70%
- Drums: 60-80%
- Vocals: 20-35%
- Mix bus: 15-25%

## Post (Output Compensation)

**Function:** Gain adjustment after processing

**Technical Specs:**
- Range: -24dB to +24dB
- Step Size: 0.1dB
- Default: 0dB
- Automation: Full support

**Behavior:**
- Compensates for Pre gain and curve-induced level changes
- Prevents clipping on output
- Allows level-matched A/B comparison

**Compensation Formula:**
```
If Pre = +12dB → Post ≈ -8 to -12dB
If Pre = +6dB → Post ≈ -4 to -6dB
```

**Safety Considerations:**
- Essential for gain staging
- Prevents master bus clipping
- Enables fair effect evaluation

## Center (DC Offset Removal)

**Function:** Removes DC bias from signal

**Technical Specs:**
- Type: Toggle (On/Off)
- Default: On
- Automation: Not recommended
- Processing: Real-time high-pass at 0Hz

**Behavior:**
- Removes DC offset component
- Prevents low-frequency accumulation
- Minimal phase impact

**When to Use:**
- **Always leave ON** for 99% of applications
- Only disable for experimental sound design
- Critical for mix bus and parallel processing

**Consequences of Disabling:**
- Cumulative DC buildup on buses
- Headroom loss
- Potential speaker damage

## Mode (Unipolar/Bipolar)

**Function:** Selects curve application symmetry

**Technical Specs:**
- Type: Selector (2 options)
- Options: Unipolar, Bipolar
- Default: Unipolar
- Automation: Full support

**Unipolar Mode:**
- Applies same curve to positive and negative halves
- Creates symmetric distortion
- Generates even-order harmonics (2nd, 4th, 6th...)
- Warmer, analog-like character

**Bipolar Mode:**
- Allows independent positive/negative curve shaping
- Creates asymmetric distortion
- Generates mixed odd/even harmonics
- More aggressive, complex character

**Harmonic Math:**
- Even harmonics: Octave and octave+fifth (musical)
- Odd harmonics: Fifth, major seventh, etc. (more dissonant)

**Selection Guidelines:**
- **Warmth/analog:** Unipolar
- **Punch/aggression:** Bipolar
- **Low-end sources:** Unipolar
- **High-transient sources:** Bipolar

## Oversample

**Function:** Internal processing rate multiplier

**Technical Specs:**
- Type: Selector (5 options)
- Options: Off, 2x, 4x, 8x, 16x
- Default: Off
- Automation: Not available
- Latency: Minimal PDC applied automatically

**Processing Rates:**
- Off: Native sample rate (44.1kHz → Nyquist 22.05kHz)
- 2x: Double rate (88.2kHz → Nyquist 44.1kHz)
- 4x: Quadruple rate (176.4kHz → Nyquist 88.2kHz)
- 8x: 8x rate (352.8kHz → Nyquist 176.4kHz)
- 16x: 16x rate (705.6kHz → Nyquist 352.8kHz)

**Aliasing Reduction:**
Higher internal Nyquist = more room for harmonics before folding back.

**CPU Usage Scaling:**
- Off: Baseline
- 2x: ~1.3x CPU
- 4x: ~1.6x CPU
- 8x: ~2.2x CPU
- 16x: ~3.5x CPU

**Recommendations by Use Case:**
- Subtle saturation (S-curve, low drive): Off-2x
- Moderate distortion: 2x-4x
- Hard clipping: 4x-8x
- Extreme/bitcrush: 8x-16x
- High-frequency sources: 4x minimum

## HQ (High Quality Mode)

**Function:** Enhanced processing for low-level signals

**Technical Specs:**
- Type: Toggle (On/Off)
- Default: Off
- Automation: Not available
- Processing: Extended precision for low amplitudes

**Behavior:**
- Processes ultra-low signals that might otherwise be lost
- Minimal impact on audible range
- Slight CPU increase

**Use Cases:**
- Critical mastering applications
- Very dynamic sources
- When preserving micro-dynamics is essential
- Generally leave off for standard mixing

## Transfer Curve (Graph Editor)

**Function:** Visual transfer function design

**Technical Specs:**
- Type: Interactive spline graph
- X-Axis: Input amplitude (-1.0 to +1.0)
- Y-Axis: Output amplitude (-1.0 to +1.0)
- Points: Unlimited
- Interpolation: Spline-based smoothing

**Default State:**
- Linear diagonal from (-1,-1) to (1,1)
- Represents unity gain (no change)
- 0dB reference point

**Interaction:**
- Click to add points
- Drag to move points
- Right-click to delete points
- Double-click to reset to linear

**Curve Analysis:**
- **Deviation from diagonal:** Amount of distortion
- **Slope at any point:** Local gain/transient response
- **Flat sections:** Limiting/clipping behavior
- **Sharp corners:** High-frequency harmonic generation

## Automation Specifications

**Automatable Parameters:**
1. Pre (Input gain)
2. Mix (Dry/wet)
3. Post (Output gain)
4. Mode (Unipolar/Bipolar)
5. Transfer curve points (advanced)

**Automation Ramps:**
- Smooth interpolation
- No zipper noise
- Sample-accurate updates

**Recommended Automation Workflows:**
- Pre gain: Dynamic distortion (verse to chorus)
- Mix: Blend variation (build-ups, breakdowns)
- Mode: Character switching (different song sections)

## Latency Specifications

**Standard Processing:**
- Latency: 0 samples (zero latency)
- PDC: None required
- Use: Tracking, live performance, low-latency mixing

**With Oversampling:**
- Latency: Minimal (typically 0-4 samples)
- PDC: Automatically compensated by FL Studio
- Use: Mixing, mastering, final renders

**HQ Mode:**
- Latency: Unchanged
- Processing: Extended precision only

---

**Version:** 1.0  
**Last Updated:** 2026-02-03  
**Source:** [SRC: IL-MAN] Image-Line Fruity WaveShaper Documentation
