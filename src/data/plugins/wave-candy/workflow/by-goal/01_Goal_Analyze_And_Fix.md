# Goal: Analyze and Fix

## Overview
Use Wave Candy as a diagnostic tool to systematically identify and resolve mix problems. This workflow treats Wave Candy as a medical scanner for your audio.

## Routing Context
- **Primary:** Master channel (full mix analysis)
- **Secondary:** Problem tracks (individual analysis)
- **Reference:** Commercial reference track comparison
- **Position:** End of processing chains for final signal analysis

## Step-by-Step Analysis Workflow

### Step 1: Baseline Documentation (2 minutes)
1. **Add Wave Candy** to Master channel
2. **Configure for detailed analysis** (FFT 8192, Log scale)
3. **Play full mix** at normal mixing level
4. **Screenshot current state** (Right-click → Save Screenshot)
5. **Note obvious problem areas** by listening and watching

### Step 2: Full Spectrum Diagnosis (5 minutes)
1. **Set Spectrum to maximum detail** (FFT 16384, High smoothing)
2. **Analyze frequency ranges systematically:**

#### Low-End (20-200Hz)
- **What to look for:** Excessive buildup, missing subs, uneven response
- **Problems:** Mud, lack of impact, sub cancellation
- **Wave Candy indicators:** Peaks at 80-150Hz, flat below 60Hz

#### Low-Mids (200-500Hz)  
- **What to look for:** Boxiness, muddiness, lack of warmth
- **Problems:** Mix sounds distant, lack of body
- **Wave Candy indicators:** Hills around 300-400Hz

#### Mids (500Hz-2kHz)
- **What to look for:** Vocal presence, instrument clarity
- **Problems:** Harshness, honkiness, nasal quality
- **Wave Candy indicators:** Peaks 1-3kHz, dips around 1kHz

#### Upper Mids (2-6kHz)
- **What to look for:** Presence, detail, vocal clarity
- **Problems:** Harshness, sibilance, ear fatigue
- **Wave Candy indicators:** Sharp spikes 3-5kHz

#### Highs (6-20kHz)
- **What to look for:** Air, sparkle, definition
- **Problems:** Harshness, dullness, digital edge
- **Wave Candy indicators:** Shelf slope issues, peaks 8-12kHz

### Step 3: Stereo Field Analysis (3 minutes)
1. **Switch to Vectorscope mode**
2. **Configure for phase analysis** (Medium persistence, Reference on)
3. **Check critical issues:**

#### Phase Correlation
- **Good:** Tall pattern, strong center density
- **Problem:** Horizontal pattern (out of phase)
- **Wave Candy check:** Pattern direction and center mass

#### Stereo Width
- **Good:** Appropriate width for genre
- **Problem:** Too narrow (boring) or too wide (mono issues)
- **Wave Candy check:** Pattern diameter and shape

#### Mono Compatibility
- **Good:** Centered elements stay centered when summed
- **Problem:** Instruments disappear in mono
- **Wave Candy check:** Center density and vertical component

### Step 4: Transient Analysis (3 minutes)
1. **Switch to Oscilloscope mode**
2. **Focus on rhythmic elements** (drums, percussion)
3. **Check for problems:**

#### Transient Clarity
- **Good:** Sharp attacks, clean decay
- **Problem:** Soft attacks, smeared transients
- **Wave Candy check:** Waveform sharpness and definition

#### Dynamic Range
- **Good:** Natural peak-to-average ratio
- **Problem:** Over-compressed or inconsistent levels
- **Wave Candy check:** Peak variation and compression artifacts

#### Clipping Detection
- **Good:** Clean peaks with headroom
- **Problem:** Flat-topped waveforms (digital clipping)
- **Wave Candy check:** Waveform peak shapes

### Step 5: Problem Isolation (5 minutes)
1. **Add second Wave Candy instance** on suspected problem track
2. **Solo problem track** and analyze
3. **Compare individual vs full mix** to confirm source
4. **Document specific problem frequencies** or characteristics

## Starting Settings

### Detailed Spectrum Analysis
```
Mode: Spectrum
FFT Size: 16384 (maximum detail)
Frequency Scale: Logarithmic
Amplitude Range: -72dB to +12dB
Display Type: Grayscale (detail focus)
Smoothing: High (stable display)
Peak Hold: On (5 seconds)
```

### Stereo Field Analysis
```
Mode: Vectorscope
Zoom: 1.0x
Persistence: Medium-High
Reference Lines: On
Scope Speed: Medium
Channels: L/R
```

### Transient Analysis
```
Mode: Oscilloscope
Time Scale: 20-30ms (transient detail)
Amplitude Scale: Auto or -12dB to +12dB
Trigger Level: Auto
Display Type: Line
```

## Target vs Problem Identification

### Frequency Problem Indicators
| Problem | Spectrum Signature | Typical Cause |
|---------|-------------------|---------------|
| **Mud** | Peak 200-400Hz | Too much low-mid, poor arrangement |
| **Harshness** | Spike 2-6kHz | Over-boosted presence, bad mic placement |
| **Dullness** | Roll-off above 8kHz | Missing highs, poor mic placement |
| **Boxiness** | Hill 300-500Hz | Poor room treatment, bad EQ |
| **Nasal** | Peak 800-1200Hz | Vocal issues, poor mic technique |
| **Sibilance** | Spike 5-8kHz | Vocal issues, poor de-essing |

### Stereo Problem Indicators
| Problem | Vectorscope Signature | Typical Cause |
|---------|----------------------|---------------|
| **Phase Issues** | Horizontal pattern | Stereo effects, phase shifting |
| **Too Narrow** | Small pattern near center | Lack of stereo content |
| **Too Wide** | Large pattern with weak center | Excessive stereo processing |
| **Mono Problems** | Pattern changes drastically when summed | Phase cancellation |

### Transient Problem Indicators
| Problem | Oscilloscope Signature | Typical Cause |
|---------|----------------------|---------------|
| **Soft Drums** | Rounded attacks | Over-compression, poor recording |
| **Clipping** | Flat-topped peaks | Digital clipping, gain staging |
| **Smeared Transients** | Unclear waveform shapes | Poor compression settings |
| **Inconsistent Levels** | Variable peak heights | Poor automation, arrangement issues |

## Systematic Fix Process

### 1. Prioritize Problems
- **Critical:** Clipping, major phase issues, sub problems
- **Important:** Harshness, mud, masking issues  
- **Minor:** Small resonances, minor stereo width issues

### 2. Apply Targeted Fixes
- **Frequency Problems:** Use EQ with Wave Candy feedback
- **Stereo Problems:** Use stereo tools with Vectorscope monitoring
- **Transient Problems:** Adjust compression/dynamics

### 3. Verify Fixes
- **Bypass processing** to confirm improvement
- **Screenshot after each major fix**
- **A/B with reference track**

## Variations

### Variation 1: Reference Track Comparison
1. **Load commercial reference** on separate track
2. **Add Wave Candy** to reference track
3. **Compare Spectrum curves** side-by-side
4. **Match target characteristics** while maintaining your track's character

### Variation 2: Subtractive Analysis
1. **Mute instruments one by one** while watching Spectrum
2. **Identify what each instrument contributes**
3. **Find frequency conflicts** and mask sources
4. **Create space** for each element

### Variation 3: Mono Compatibility Test
1. **Set Wave Candy to mono input mode**
2. **Compare stereo vs mono** Spectrum patterns
3. **Identify elements that disappear** in mono
4. **Fix phase/panning issues** before final mix

## Pitfalls & Fixes

### Pitfall: Analysis Paralysis
**Problem:** Spending too long analyzing, not enough mixing
**Fix:** Set 10-minute timer for analysis, then start fixing

### Pitfall: Chasing Visual Perfection
**Problem:** Trying to make Spectrum look "perfect"
**Fix:** Focus on audible improvements, not visual aesthetics

### Pitfall: Missing the Forest for Trees
**Problem:** Fixing small issues while ignoring big problems
**Fix:** Address major issues first (clipping, phase, sub balance)

### Pitall: Ignoring the Source
**Problem:** Trying to fix bad recording with EQ
**Fix:** If possible, re-record or replace problematic elements

## Automation Ideas

### 1. Frequency Range Automation
- **Automate frequency zoom** to focus on different areas during mix review
- **Use for systematic frequency analysis** during mixing

### 2. Mode Switching Automation
- **Switch between modes** during mix review for comprehensive analysis
- **Program sequence:** Spectrum → Vectorscope → Oscilloscope

## Validation Checklist

### After Fixing Process
- [ ] All major resonances eliminated
- [ ] Frequency balance sounds natural
- [ ] No phase issues on Vectorscope
- [ ] Transients are clear and punchy
- [ ] No clipping anywhere in signal chain
- [ ] Mix translates to mono properly
- [ ] Reference comparison shows competitive balance
- [ ] Screenshots document improvement

### Before/After Comparison
1. **Load "before" screenshot** from Step 1
2. **Take "after" screenshot** of current state
3. **Compare improvements** in frequency balance and stereo field
4. **Confirm audible improvement** matches visual improvement

## Success Indicators

### You're Successful When:
- ✅ Mix sounds significantly better
- ✅ Visual analysis shows clear improvement
- ✅ No obvious problems remain on Wave Candy
- ✅ Reference comparison shows competitive balance
- ✅ Mix translates well to different systems

### Final Verification
1. **Listen on multiple systems** if possible
2. **Check mono compatibility** thoroughly
3. **Compare with 2-3 reference tracks**
4. **Document final state** for future reference

Remember: Wave Candy shows you WHAT is happening. Your job as the mix engineer is to decide WHAT TO DO about it and execute those changes musically and tastefully. The goal is a better-sounding mix, not a prettier Spectrum display.