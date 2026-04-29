# Parameter Specifications

Complete technical specifications for all parameters in Fruity Parametric EQ 2.

## Global Parameters

### Plugin Version
- **Current:** 1.0 (as of data model creation)
- **Compatibility:** FL Studio 20+

### Band Count
- **Fixed:** 7 bands
- **Not user-configurable** (unlike some other parametric EQs)

---

## Per-Band Parameters

### Band Enable/Bypass
- **Type:** Boolean
- **Default:** Band 1 often enabled by default, others disabled
- **Purpose:** Turn individual bands on/off without losing settings

---

### Frequency (Hz)

**Range:** 20 Hz - 20,000 Hz

**Control Type:** Continuous (logarithmic scale)

**Precision:** 0.1 Hz display, internal higher precision

**Typical Ranges by Band:**
```
Band 1: 20-120 Hz
Band 2: 140-320 Hz
Band 3: 300-550 Hz
Band 4: 600-1200 Hz
Band 5: 1800-3200 Hz
Band 6: 3500-6500 Hz
Band 7: 8000-16000 Hz
```

**Anchor Targets (Common Presets):**
```
Band 1: [30, 60, 80, 100, 120]
Band 2: [150, 200, 250, 300]
Band 3: [300, 350, 420, 500]
Band 4: [700, 850, 1000]
Band 5: [2000, 2500, 3000]
Band 6: [4000, 5000, 6000]
Band 7: [10000, 12000, 14000, 16000]
```

**UI Behavior:**
- Click + drag to adjust continuously
- Double-click to enter numeric value
- Right-click for precise typing
- Often linked to visual spectrum analyzer

---

### Gain (dB)

**Range:** -18 dB to +18 dB (typical)

**Default:** 0 dB (unity/no change)

**Precision:** 0.1 dB steps

**Safe Maximums by Context:**
```
Track Level:  ±6.0 dB (recommended maximum)
Bus Level:    ±3.0 dB (recommended maximum)
Master Level: ±1.5 dB (recommended maximum)
```

**Important Notes:**
- For filter types (high-pass, low-pass), gain is fixed at 0 dB
- Some plugins limit gain range to ±12 dB
- Extreme values (>±12 dB) usually indicate mixing problems elsewhere

**UI Behavior:**
- Vertical slider or knob
- Center position = 0 dB
- Visual feedback typically shows positive (blue/green) vs negative (red/orange)

**Typical Values:**
```
Subtle adjustment:    ±0.5 to ±1.5 dB
Standard correction:  ±1.5 to ±3 dB
Aggressive move:      ±3 to ±6 dB
Extreme (use rarely): ±6 to ±12 dB
```

---

### Bandwidth (BW%)

**Range:** 0% - 100%

**Default:** Varies by band, typically 50%

**IMPORTANT: FL Studio uses INVERTED scale:**
```
0%   = Widest (Q ≈ 0.3, affects ~3-4 octaves)
25%  = Wide (Q ≈ 0.7, affects ~2 octaves)
50%  = Medium (Q ≈ 1.4, affects ~1 octave)
75%  = Narrow (Q ≈ 3.0, affects ~0.5 octaves)
100% = Narrowest (Q ≈ 10+, surgical precision)
```

**Relationship to Q:**
- Lower BW% = Lower Q = Wider curve
- Higher BW% = Higher Q = Narrower curve
- This is opposite to many other EQs!

**Recommended Ranges by Band:**
```
Band 1 (Sub):
  - Wide:   10-30%
  - Medium: 30-50%
  - Narrow: 50-70%
  - Default: 25%

Band 2 (Warmth):
  - Wide:   20-40%
  - Medium: 40-60%
  - Narrow: 60-80%
  - Default: 35%

Band 3 (Boxiness):
  - Wide:   25-45%
  - Medium: 45-65%
  - Narrow: 65-85%
  - Default: 50%

Band 4 (Honk):
  - Wide:   30-50%
  - Medium: 50-70%
  - Narrow: 70-90%
  - Default: 60%

Band 5 (Presence):
  - Wide:   25-45%
  - Medium: 45-65%
  - Narrow: 65-85%
  - Default: 50%

Band 6 (Detail):
  - Wide:   30-50%
  - Medium: 50-70%
  - Narrow: 70-90%
  - Default: 60%

Band 7 (Air):
  - Wide:   10-30%
  - Medium: 30-50%
  - Narrow: 50-70%
  - Default: 20%
```

**Usage Guidelines:**
- **Wide (low %):** Musical tonal shaping, gentle corrections
- **Medium:** Standard corrective EQ, most common
- **Narrow (high %):** Surgical removal of specific resonances, notches

**UI Behavior:**
- Knob or slider control
- Visual representation on frequency curve
- Width of bell/shelf curve changes in real-time

---

### Filter Type

**Available Types:**
1. Bell (Parametric)
2. High-Pass Filter
3. Low-Pass Filter
4. High-Shelf
5. Low-Shelf
6. Notch

**Type Availability by Band:**
```
Band 1 (Purple):  high_pass, low_shelf, bell
Band 2 (Pink):    high_pass, low_shelf, bell
Band 3 (Orange):  low_shelf, bell, notch
Band 4 (Yellow):  bell, notch
Band 5 (Green):   bell, high_shelf, notch
Band 6 (Teal):    bell, high_shelf, low_pass, notch
Band 7 (Blue):    high_shelf, low_pass, bell
```

**Default Types by Band:**
```
Band 1: high_pass
Band 2: bell
Band 3: bell
Band 4: bell
Band 5: bell
Band 6: bell
Band 7: high_shelf
```

---

## Filter Type Specifications

### Bell (Parametric)

**Parameters:**
- Frequency: 20 Hz - 20 kHz
- Gain: -18 dB to +18 dB
- Bandwidth: 0-100%

**Characteristics:**
- Symmetrical boost/cut around center frequency
- Width controlled by bandwidth
- Most versatile filter type

**Q to BW% relationship:**
```
BW%  | Approx Q | Octave Width
-----|----------|-------------
0%   | 0.3      | 4 octaves
10%  | 0.5      | 3 octaves
25%  | 0.7      | 2 octaves
50%  | 1.4      | 1 octave
75%  | 3.0      | 0.5 octaves
90%  | 7.0      | 0.2 octaves
100% | 10+      | 0.1 octaves
```

**Phase Response:** Introduces phase shift, especially with high Q

---

### High-Pass Filter (HPF)

**Parameters:**
- Frequency: 20 Hz - 20 kHz (cutoff point)
- Gain: Fixed at 0 dB (not adjustable)
- Bandwidth: Affects slope steepness

**Characteristics:**
- Removes frequencies below cutoff
- Slope: Typically 12 dB/octave or 24 dB/octave
- Gentle roll-off (not brick wall)

**Common Uses:**
- Remove sub-bass rumble
- Clean up headroom
- Reduce low-end buildup

**Typical Settings:**
```
Vocals:           80-100 Hz
Acoustic Guitar:  80-100 Hz
Electric Guitar:  100-120 Hz
Snare:            60-80 Hz
Cymbals:          200-400 Hz
Synth Pads:       80-120 Hz (unless bass pad)
```

---

### Low-Pass Filter (LPF)

**Parameters:**
- Frequency: 20 Hz - 20 kHz (cutoff point)
- Gain: Fixed at 0 dB
- Bandwidth: Affects slope steepness

**Characteristics:**
- Removes frequencies above cutoff
- Slope: Typically 12 dB/octave or 24 dB/octave
- Creates "darker" or "vintage" sound

**Common Uses:**
- Remove high-frequency noise
- Vintage/lo-fi effect
- Tame harsh synths
- Reduce cymbal bleed

**Typical Settings:**
```
Bass Guitar:      5-8 kHz
Kick Drum:        8-10 kHz
Sub-Bass Synth:   200-400 Hz
Vintage Effect:   8-12 kHz
```

---

### High-Shelf

**Parameters:**
- Frequency: 20 Hz - 20 kHz (transition point)
- Gain: -18 dB to +18 dB
- Bandwidth: Affects transition slope (wider = gentler)

**Characteristics:**
- Boosts/cuts all frequencies above transition point
- Gentler than bell at high frequencies
- Most common for "air" adjustments

**Common Uses:**
- Add/remove air and sparkle
- Overall brightness adjustment
- Final polish

**Typical Settings:**
```
Air Boost:        10-12 kHz, +2 to +3 dB, wide BW
Reduce Hiss:      12 kHz, -1.5 to -2 dB, wide BW
Detail Boost:     8 kHz, +1 to +2 dB, medium BW
```

---

### Low-Shelf

**Parameters:**
- Frequency: 20 Hz - 20 kHz (transition point)
- Gain: -18 dB to +18 dB
- Bandwidth: Affects transition slope

**Characteristics:**
- Boosts/cuts all frequencies below transition point
- Gentler than bell at low frequencies
- Good for broad bass adjustments

**Common Uses:**
- Overall bass adjustment
- Warmth control
- Low-end clarity

**Typical Settings:**
```
Bass Boost:       100 Hz, +2 to +4 dB, wide BW
Mud Reduction:    200 Hz, -2 to -3 dB, wide BW
Warmth:           120 Hz, +1 to +2 dB, wide BW
```

---

### Notch

**Parameters:**
- Frequency: 20 Hz - 20 kHz
- Gain: Typically fixed at deep cut (-18 to -∞ dB)
- Bandwidth: Very narrow (typically 90-100%)

**Characteristics:**
- Extremely narrow cut
- Near-total removal at center frequency
- Minimal effect on adjacent frequencies

**Common Uses:**
- Remove feedback frequencies
- Eliminate specific resonances
- Surgical problem-solving

**Typical Settings:**
```
Room Resonance:   380-420 Hz, notch
Feedback:         Sweep to find, then notch
Specific Buzz:    Find exact frequency, notch
```

**Warning:** Overuse can sound unnatural. Use sparingly.

---

## Output Parameters

### Output Gain
- **Range:** -∞ dB to +18 dB
- **Default:** 0 dB
- **Purpose:** Compensate for overall level changes from EQ

**Best Practice:** Adjust output gain to match input level (unity gain) so you're hearing tonal changes, not volume changes.

### Bypass
- **Type:** Boolean
- **Purpose:** A/B comparison
- **Recommended:** Constantly toggle to verify improvements

---

## Visual Display Parameters

### Frequency Spectrum Analyzer
- **Range:** 20 Hz - 20 kHz
- **Resolution:** Adjustable (low/medium/high)
- **Purpose:** Visualize frequency content before EQ

### EQ Curve Display
- **Shows:** Combined effect of all active bands
- **Interactive:** Click curve to adjust parameters
- **Helpful for:** Understanding cumulative effect

---

## Performance Specifications

### CPU Usage
- **Per band:** ~1-2% CPU on modern systems
- **All 7 bands:** ~5-10% CPU
- **Optimization:** Disable unused bands to save CPU

### Latency
- **Standard mode:** Minimal latency (<1ms)
- **Linear phase mode (if available):** Higher latency (10-50ms)

### Sample Rate Support
- **Minimum:** 44.1 kHz
- **Maximum:** 192 kHz
- **Recommended:** Match project sample rate

---

## Automation Capabilities

### Automatable Parameters
All per-band parameters can be automated:
- Frequency
- Gain
- Bandwidth
- Filter Type (stepped parameter)
- Enable/Bypass

### Automation Ranges
Same as manual control ranges listed above

### Common Automation Uses
- **Frequency sweep:** Creative filter effect
- **Gain automation:** Dynamic EQ behavior
- **Bypass automation:** Drop EQ during specific sections

---

## Preset System

### Preset Structure
```json
{
  "name": "Preset Name",
  "version": "1.0",
  "bands": [
    {
      "bandId": 1,
      "enabled": true,
      "type": "high_pass",
      "freqHz": 80,
      "bwPercent": 25,
      "gainDb": 0
    },
    // ... more bands
  ]
}
```

### Preset Compatibility
- FL Studio native .fst format
- Custom JSON format (this project)
- May support VST preset standard

---

## Limitations and Constraints

### Per-Band Limitations
```
Band 1: Cannot use high_shelf, low_pass
Band 2: Cannot use high_shelf, low_pass
Band 3: Cannot use high_pass, low_pass
Band 4: Cannot use high_pass, low_pass, high_shelf, low_shelf
Band 5: Cannot use high_pass, low_pass, low_shelf
Band 6: Cannot use high_pass, low_shelf
Band 7: Cannot use low_shelf, high_pass
```

### Global Limitations
- Maximum 7 simultaneous bands
- Frequency range: 20 Hz - 20 kHz
- No mid-side processing (unless plugin has M/S mode)
- No dynamic EQ (unless separate mode available)

---

## Comparison to Other EQ Standards

### vs. Fabfilter Pro-Q
- Pro-Q: Up to 24 bands, FL Parametric EQ 2: Fixed 7 bands
- Pro-Q: Linear phase option, FL: Minimal phase (typically)
- Pro-Q: Dynamic EQ, FL: Static

### vs. Stock DAW EQs
- More bands than many stock EQs (often 4-5)
- Similar parameter ranges
- Comparable quality

### Q Factor Comparison
Other EQs often use Q instead of BW%:
```
FL BW% | Q Factor | Common EQ Display
-------|----------|------------------
0%     | 0.3      | "Very Wide"
25%    | 0.7      | "Wide" (Q < 1)
50%    | 1.4      | "Medium" (Q ≈ 1-2)
75%    | 3.0      | "Narrow" (Q > 2)
100%   | 10       | "Surgical" (Q > 5)
```

---

## Best Practices

1. **Always use output gain compensation** for fair A/B comparison
2. **Start with medium bandwidth (50%)**, adjust from there
3. **Use appropriate filter types** for each band
4. **Respect safe gain maximums** by context
5. **High-pass almost everything** except kick/bass
6. **Cut more than you boost** for natural results
7. **Use narrow BW for problems, wide BW for tone shaping**

---

## Next Steps

- See `dsp-characteristics.md` for technical DSP details
- See `automation-midi-mapping.md` for automation specs
- See `../integration-guides/` for implementation patterns
