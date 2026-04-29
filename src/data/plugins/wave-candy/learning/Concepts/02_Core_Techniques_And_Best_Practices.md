# Core Techniques And Best Practices

## Essential Analysis Techniques

### 1. Spectrum Frequency Balancing
**Purpose:** Identify frequency buildup and masking issues
**Technique:** Look for energy clusters across spectrum

**What to Watch For:**
- **80-150Hz buildup:** Too much 808/sub content
- **2-5kHz harshness:** Vocal harshness, sibilance
- **8-12kHz glare:** Excessive brightness, hi-hat harshness
- **Low-end mud:** 200-400Hz clutter

**Best Practice:** Use Log scale for mix work, Linear for sound design [SRC: IL-MAN]

### 2. Oscilloscope Transient Analysis
**Purpose:** Visualize transient shape and impact
**Technique:** Watch waveform peaks and decay curves

**What to Watch For:**
- **Kick drums:** Sharp attack, controlled sustain
- **Snares:** Fast transient, quick decay
- **808s:** Smooth waveform, long sustain
- **Percussion:** Clear attack without clipping

**Critical Setting:** Time scale 10-50ms for transients [SRC: IL-MAN]

### 3. Vectorscope Phase Correlation
**Purpose:** Check stereo image and mono compatibility
**Technique:** Monitor pattern shape and center density

**What to Watch For:**
- **Center dominance:** Good mono compatibility
- **Wide patterns:** Stereo width without phase issues
- ** erratic patterns:** Potential phase problems
- **Vertical/horizontal extremes:** Bad stereo imaging

**Key Indicator:** Center density = mono safety [SRC: REPUTABLE]

### 4. Peak Meter Loudness Monitoring
**Purpose:** Track overall levels and avoid clipping
**Technique:** Watch peak levels and hold indicators

**What to Watch For:**
- **Peak levels:** Should stay below -6dBFS for headroom
- **Clip warnings:** Red indicators signal digital clipping
- **Channel balance:** L/R levels should be similar
- **Dynamic range:** Difference between peaks and RMS

### 5. Multi-Instance Analysis Setup
**Purpose:** Compare different tracks simultaneously
**Technique:** Multiple Wave Candy instances on different channels

**Setup Strategy:**
- **Master:** Spectrum for overall mix balance
- **Drums:** Oscilloscope for transient control
- **Vocals:** Spectrum for frequency masking
- **Effects:** Vectorscope for stereo effects

**CPU Consideration:** Each instance adds ~2-5% CPU usage [UNVERIFIED]

## Advanced Monitoring Techniques

### 6. A/B Comparison Analysis
**Purpose:** Compare processed vs unprocessed audio
**Technique:** Switch between settings while watching meters

**Method:**
1. Set up Wave Candy on track
2. Note baseline display behavior
3. Apply processing (EQ, compression, etc.)
4. Observe changes in real-time
5. Toggle bypass to verify improvements

### 7. Reference Track Analysis
**Purpose:** Match professional mix characteristics
**Technique:** Analyze commercial tracks for target curves

**What to Extract:**
- **Spectral balance:** Target frequency curve
- **Stereo width:** Vectorscope patterns
- **Dynamic behavior:** Oscilloscope transient shapes
- **Loudness targets:** Peak meter levels

### 8. Sub-Bass Mono Checking
**Purpose:** Ensure sub-bass translates across systems
**Technique:** Monitor low frequencies with Vectorscope

**Critical Frequencies:** Below 80Hz should be nearly mono [SRC: REPUTABLE]
**Check Method:** Focus Vectorscope on 20-80Hz region

### 9. Mix Bus Saturation Monitoring
**Purpose:** Visualize harmonic addition from saturation
**Technique:** Watch Spectrum for harmonic generation

**What to Look For:**
- **Even harmonics:** Warm, musical saturation
- **Odd harmonics:** Brighter, edgier character
- **Control growth:** Saturation shouldn't mask fundamentals

### 10. Sample Quality Analysis
**Purpose:** Evaluate sample quality before use
**Technique:** Full analysis on imported samples

**Quality Indicators:**
- **Noise floor:** Visible low-level noise in Spectrum
- **Clipping:** Flat-topped waveforms in Oscilloscope
- **Stereo field:** Width and phase correlation
- **Frequency content:** Balance and any resonances

### 11. Mix Evolution Tracking
**Purpose:** See how mix develops over time
**Technique:** Regular screenshots at mix milestones

**Milestone Screenshots:**
1. **Initial balance:** Early mix state
2. **Vocal placement:** After vocal processing
3. **Final polish:** Completed mix
4. **Before master:** Pre-mastering state

### 12. CPU Optimization Analysis
**Purpose:** Monitor system performance during heavy sessions
**Technique:** Watch display responsiveness

**Performance Indicators:**
- **Display stuttering:** CPU overload
- **Delayed response:** Buffer issues
- **Dropped frames:** System strain

## Common Pitfalls and Solutions

### ❌ Mistake: Over-relying on Visual Analysis
**Problem:** Making mix decisions based only on visual feedback
**Solution:** Trust your ears first, use visuals for confirmation

### ❌ Mistake: Wrong FFT Size for Task
**Problem:** Using large FFT for transients, small FFT for frequency analysis
**Solution:** Adjust FFT based on analysis needs:
- **Transient work:** 512-2048 samples
- **Frequency analysis:** 4096-8192 samples
- **High precision:** 16384+ samples

### ❌ Mistake: Ignoring Display Scale
**Problem:** Misinterpreting data due to wrong amplitude scaling
**Solution:** Adjust amplitude range to see relevant information

### ❌ Mistake: Single-Mode Limitation
**Problem:** Using only one display mode for all analysis
**Solution:** Combine modes for complete picture:
- **Spectrum + Vectorscope:** Frequency and stereo analysis
- **Oscilloscope + Spectrum:** Transient and frequency relationship

### ❌ Mistake: Display Placement Issues
**Problem:** Wave Candy obstructing workflow
**Solution:** Use transparency mode and strategic positioning

## What to Listen For (Visual-to-Aural Mapping)

### Spectrum Patterns → Sound Characteristics
- **Low-mid bump (200-400Hz):** Muddy, boxy sound
- **Presence dip (2-4kHz):** Dull, distant vocals
- **High-frequency shelf (8k+):** Bright, airy, potentially harsh
- **Sudden peaks:** Resonances, frequency buildup

### Oscilloscope Shapes → Sound Feel
- **Sharp peaks:** Punchy, aggressive transients
- **Rounded waves:** Smooth, mellow character
- **Clipped tops:** Distortion, digital clipping
- **Long tails:** Reverb, delay, sustain

### Vectorscope Patterns → Stereo Imaging
- **Tall narrow:** Centered, mono-compatible
- **Wide oval:** Good stereo spread
- **Scattered pattern:** Phase issues, unstable image
- **Flat horizontal:** Out-of-phase, cancellation risk

## Workflow Integration Best Practices

### Session Setup
1. **Master channel:** Spectrum mode, always on
2. **Current focus track:** Appropriate mode for task
3. **Reference track:** Separate instance for comparison

### Decision Making Process
1. **Identify issue** by listening
2. **Visualize problem** with Wave Candy
3. **Apply solution** with appropriate plugin
4. **Verify improvement** visually and audibly
5. **Document results** with screenshots

### Professional Habits
- **Regular monitoring:** Keep Wave Candy visible during critical mix decisions
- **Before/after comparison:** Always bypass to confirm improvements
- **Screenshot documentation:** Save key mix states for reference
- **Level consistency:** Maintain consistent monitoring levels