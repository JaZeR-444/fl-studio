# Goal: Mix Or Control

## Overview
Use Wave Candy for real-time mix monitoring and control decisions. This workflow focuses on maintaining mix quality and making informed processing choices during the mixing process.

## Routing Context
- **Master Channel:** Primary monitoring Wave Candy instance
- **Group Buses:** Additional instances for section monitoring
- **Critical Tracks:** Focused analysis on important elements
- **Send/Returns:** Monitoring effects chain behavior

## Step-by-Step Mix Monitoring Workflow

### Step 1: Master Channel Setup (3 minutes)
1. **Add Wave Candy** to Master channel (end of chain)
2. **Configure for mix monitoring** (FFT 4096, Log scale)
3. **Set up complementary displays:**
   - **Primary:** Spectrum mode (frequency balance)
   - **Secondary:** Vectorscope instance (stereo field)
4. **Position strategically** for constant visibility

### Step 2: Group Bus Monitoring (2 minutes each)
1. **Add Wave Candy** to Drum Bus (if present)
   - **Mode:** Oscilloscope for transient control
   - **Settings:** 20ms time scale, Line display
2. **Add Wave Candy** to Vocal Bus (if present)
   - **Mode:** Spectrum with 2-5kHz focus
   - **Settings:** 8192 FFT, high smoothing
3. **Add Wave Candy** to Instrument Bus (if present)
   - **Mode:** Spectrum with midrange focus
   - **Settings:** 4096 FFT, medium smoothing

### Step 3: Real-Time Mix Decisions (Ongoing)
During mixing, use Wave Candy to guide decisions:

#### EQ Decisions
1. **Before EQ:** Note current display state
2. **During EQ:** Watch real-time Spectrum changes
3. **After EQ:** Confirm desired visual improvement
4. **Bypass:** Verify improvement is audible, not just visual

#### Compression Decisions
1. **Before Compression:** Note transient peaks (Oscilloscope)
2. **During Compression:** Watch peak reduction
3. **After Compression:** Check for over-compression
4. **Listen:** Confirm dynamic control sounds natural

#### Stereo Decisions
1. **Before Stereo Processing:** Note Vectorscope pattern
2. **During Processing:** Watch width changes
3. **After Processing:** Check phase correlation
4. **Mono Check:** Verify mono compatibility

### Step 4: Problem Detection and Response (Continuous)

#### Frequency Masking Detection
- **What to watch:** Overlapping frequency areas in Spectrum
- **Common culprits:** Vocals vs instruments, kick vs 808
- **Wave Candy signs:** Frequency buildup, loss of clarity
- **Response:** EQ carve, arrangement adjustment, frequency separation

#### Dynamic Issues Detection
- **What to watch:** Inconsistent peak levels on Peak Meter
- **Common culprits:** Poor automation, inconsistent performance
- **Wave Candy signs:** Jumping levels, inconsistent peaks
- **Response:** Volume automation, compression adjustment

#### Stereo Field Issues
- **What to watch:** Vectorscope pattern problems
- **Common culprits:** Excessive stereo processing, phase issues
- **Wave Candy signs:** Weak center, erratic patterns
- **Response:** Stereo adjustment, phase correction

## Starting Settings

### Master Mix Monitoring
```
Mode: Spectrum
FFT Size: 4096
Frequency Scale: Logarithmic
Amplitude Range: -60dB to +12dB
Display Type: Rainbow
Smoothing: Medium
Peak Hold: On (3 seconds)
Transparency: 75%
Position: Upper-right
```

### Stereo Field Monitoring
```
Mode: Vectorscope
Zoom: 1.0x
Persistence: Medium
Reference Lines: On
Scope Speed: Medium
Transparency: 75%
Position: Upper-left
```

### Drum Bus Monitoring
```
Mode: Oscilloscope
Time Scale: 20ms
Amplitude Scale: Auto
Trigger Level: Auto
Display Type: Line
Transparency: 70%
Position: Lower-left
```

### Vocal Bus Monitoring
```
Mode: Spectrum
FFT Size: 8192
Frequency Scale: Logarithmic
Amplitude Range: -48dB to +12dB
Display Type: Grayscale
Focus: 2-5kHz region
Smoothing: High
```

## Mix Control Decision Framework

### EQ Control Using Wave Candy

#### Problem Identification
1. **Listen first:** Identify issue by ear
2. **Visualize second:** Use Spectrum to understand frequency content
3. **Locate problem:** Find exact frequency range on display
4. **Apply EQ:** Targeted boost or cut
5. **Verify:** Watch Spectrum change, listen to improvement

#### Common EQ Scenarios
| Issue | Wave Candy Clue | EQ Solution |
|-------|----------------|-------------|
| **Mud** | Peak 200-400Hz | Cut 250-300Hz |
| **Harshness** | Spike 2-6kHz | Cut 3-5kHz or de-ess |
| **Dullness** | Roll-off 8kHz+ | Boost 10kHz+ |
| **Vocal Lost** | Weak 2-5kHz | Boost vocal frequency area |
| **Boomy** | Peak 60-100Hz | Cut low shelf or HPF |

### Compression Control Using Wave Candy

#### Transient Analysis
1. **Before:** Note peak shapes on Oscilloscope
2. **Target:** Desired peak reduction (2-6dB typical)
3. **Apply:** Set compression parameters
4. **Monitor:** Watch peak shapes change
5. **Listen:** Confirm natural sound

#### Compression Settings Guide
| Goal | Wave Candy Target | Compression Settings |
|------|------------------|--------------------|
| **Gentle control** | 2-3dB reduction | 2:1 ratio, medium attack |
| **Punch control** | Transient preservation | Fast attack, 4:1 ratio |
| **Glue** | Even peaks, sustain | Slow attack, 2:1 ratio |
| **Heavy control** | 6-10dB reduction | 4:1+ ratio, fast attack |

### Stereo Control Using Wave Candy

#### Width Enhancement
1. **Baseline:** Note current Vectorscope pattern
2. **Goal:** Desired width for genre/style
3. **Apply:** Stereo widener or mid/side processing
4. **Monitor:** Watch pattern expand
5. **Phase Check:** Ensure correlation remains good

#### Stereo Decision Matrix
| Scenario | Vectorscope Action | Processing Choice |
|----------|-------------------|------------------|
| **Too narrow** | Pattern too small | Stereo widener |
| **Too wide** | Pattern huge, weak center | Reduce width, enhance mids |
| **Phase issues** | Horizontal pattern | Phase correction, reduce stereo |
| **Mono problems** | Pattern changes when summed | Fix phase issues |

## Variations

### Variation 1: Minimalist Setup (CPU Light)
```
Single Instance - Master Channel Only
Mode: Spectrum
FFT: 4096
Use for: General mix monitoring
CPU: ~3% [UNVERIFIED]
```

### Variation 2: Professional Setup (Comprehensive)
```
Instance 1: Master - Spectrum (general balance)
Instance 2: Master - Vectorscope (stereo field)
Instance 3: Drum Bus - Oscilloscope (transients)
CPU: ~8-12% [UNVERIFIED]
```

### Variation 3: Focused Setup (Problem Solving)
```
Instance 1: Problem track - Spectrum
Instance 2: Master - Spectrum comparison
Instance 3: Reference track - Spectrum
Use for: Specific problem solving
```

## Pitfalls & Fixes

### Pitfall: Over-Monitoring
**Problem:** Watching Wave Candy too much, not listening enough
**Fix:** Set rules - look for 30 seconds, then listen for 2 minutes

### Pitfall: Visual-Only Decisions
**Problem:** Making EQ changes based only on Spectrum display
**Fix:** Always confirm improvements with ears, bypass to verify

### Pitfall: Too Many Instances
**Problem:** CPU overload, display clutter
**Fix:** Use 2-3 instances maximum, close unused ones

### Pitfall: Wrong Mode for Task
**Problem:** Using Spectrum when you need stereo information
**Fix:** Keep quick reference for which mode to use when

## Automation Ideas

### 1. Mix Progression Monitoring
- **Screenshot automation:** Take screenshot every 10 minutes
- **Show evolution:** Create timeline of mix development
- **Document decisions:** Note processing changes with screenshots

### 2. Reference Comparison
- **Automation sequence:** Switch between your mix and reference
- **Time-based comparison:** 30 seconds your mix, 30 seconds reference
- **Learning tool:** Study differences to improve mixing

### 3. Problem Focus Automation
- **Frequency zoom automation:** Cycle through frequency ranges
- **Mode switching automation:** Rotate through analysis modes
- **Systematic review:** Automated comprehensive check

## Mix Control Guidelines

### When to Trust Wave Candy
- **Frequency identification:** Finding problem frequencies
- **Stereo monitoring:** Checking phase and width
- **Transient analysis:** Understanding attack characteristics
- **Level monitoring:** Watching for clipping and headroom

### When to Trust Your Ears More
- **Musical decisions:** What sounds good vs what looks good
- **Emotional impact:** Vibe and feel
- **Artistic choices:** Creative processing decisions
- **Room acoustics:** When monitoring environment is compromised

### Balance Approach
1. **Listen for problem** (identify by ear)
2. **Use Wave Candy** to understand what you're hearing
3. **Apply processing** based on both audio and visual info
4. **Verify improvement** both ways
5. **Make final decision** with ears

## Success Indicators

### Effective Mix Control When:
- ✅ Mix improves steadily with each processing decision
- ✅ Wave Candy shows targeted, controlled improvements
- ✅ No major problems go unnoticed during mixing
- ✅ Stereo field remains healthy throughout process
- ✅ Dynamic control serves musical needs
- ✅ Final mix shows professional frequency balance

### Monitoring System Working When:
- ✅ CPU usage remains manageable
- ✅ Displays update smoothly without lag
- ✅ Information is clear and actionable
- ✅ Problems are caught early, not late
- ✅ Reference comparisons show progress

## Final Mix Validation

### Before Calling Mix "Done"
1. **Full Spectrum Analysis:** Check all frequency ranges
2. **Stereo Field Check:** Verify width and phase correlation
3. **Transient Check:** Confirm punch and dynamics
4. **Level Check:** Ensure proper headroom and no clipping
5. **Reference Comparison:** Match competitive standards
6. **Mono Check:** Verify translation to mono

### Documentation
1. **Screenshot final state** of all analysis modes
2. **Note any remaining compromises** and why they were made
3. **Save settings as preset** for similar projects
4. **Create mix report** with key processing decisions

Remember: Wave Candy is your mixing co-pilot, not the pilot. It provides crucial information, but you make the final decisions based on musical judgment and artistic intent. Use it to enhance your hearing, not replace it.