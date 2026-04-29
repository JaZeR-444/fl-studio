# Vibe: Moody

## Overview
Create dark, intimate, emotional mixes using Wave Candy to achieve and validate moody characteristics. Focus on controlled highs, emphasized low-mids, and intimate stereo presentation.

## Routing Context
- **Master Channel:** Primary moody analysis
- **Critical Elements:** Vocals, bass, pads for mood creation
- **Effects Chains:** Reverb/delay for atmospheric space
- **Reference Tracks:** Moody artists (Billie Eilish, Weeknd, Frank Ocean)

## Step-by-Step Moody Workflow

### Step 1: Moody Analysis Setup (3 minutes)
1. **Add Wave Candy** to Master channel
2. **Configure for moody analysis:**
   - **Mode:** Spectrum
   - **FFT Size:** 8192 (detailed, smooth)
   - **Scale:** Logarithmic
   - **Amplitude Range:** -72dB to +6dB (extended low range)
   - **Display Type:** Grayscale (serious, dramatic)
   - **Smoothing:** High (stable, moody display)
   - **Peak Hold:** On (5 seconds for sustained elements)

### Step 2: Low-End Foundation (5 minutes)
1. **Focus on 20-200Hz region** with Spectrum zoom
2. **Target moody low-end characteristics:**
   - **Sub presence:** Controlled 20-60Hz content
   - **Low-mid warmth:** Emphasized 80-250Hz for intimacy
   - **Avoid mud:** Keep 200-400Hz controlled
3. **What to look for:**
   - **Smooth, sustained low-frequency curve**
   - **No sharp resonances** below 100Hz
   - **Gentle low-mid emphasis** without boominess

### Step 3: Midrange Emotional Core (5 minutes)
1. **Focus on 500Hz-4kHz region** (emotional content)
2. **Achieve moody midrange character:**
   - **Vocal intimacy:** Prominent 1-3kHz presence
   - **Warm body:** Controlled 500-800Hz content
   - **Controlled presence:** Limited 3-5kHz to avoid brightness
3. **What to look for:**
   - **Natural, warm midrange curve**
   - **No harsh peaks** around 2-4kHz
   - **Smooth transition** to high frequencies

### Step 4: High-Frequency Control (4 minutes)
1. **Focus on 5kHz-20kHz region**
2. **Apply moody high-frequency treatment:**
   - **Roll-off starting point:** -3dB at 8kHz
   - **Air without harshness:** Gentle 10-15kHz presence
   - **Dark character:** Overall darker frequency balance
3. **What to look for:**
   - **Gradual high-frequency decay** starting ~8kHz
   - **No harsh spikes** above 10kHz
   - **Smooth, controlled brightness**

### Step 5: Stereo Field Intimacy (3 minutes)
1. **Switch to Vectorscope mode**
2. **Configure for moody stereo analysis:**
   - **Zoom:** 1.0x (standard view)
   - **Persistence:** Medium-High (stable patterns)
   - **Reference Lines:** On (for phase checking)
   - **Scope Speed:** Slow (deliberate feel)
3. **Target moody stereo characteristics:**
   - **Center-focused pattern:** Intimate, focused sound
   - **Moderate width:** Controlled space, not too wide
   - **Stable center:** Good mono compatibility for intimacy

## Starting Settings

### Primary Moody Analysis
```
Mode: Spectrum
FFT Size: 8192
Frequency Scale: Logarithmic
Amplitude Range: -72dB to +6dB
Display Type: Grayscale
Smoothing: High
Peak Hold: On (5 seconds)
Focus: 20-200Hz, 500Hz-4kHz
```

### Secondary Moody Stereo Check
```
Mode: Vectorscope
Zoom: 1.0x
Persistence: Medium-High
Reference Lines: On
Scope Speed: Slow
Transparency: 75%
Position: Right side
```

### Moody Transient Check (Optional)
```
Mode: Oscilloscope
Time Scale: 50ms (smooth, not aggressive)
Amplitude Scale: Auto
Trigger Level: Auto
Display Type: Line
```

## Moody Frequency Targets

### Low-End Foundation
- **20-60Hz:** Controlled sub presence, not dominant
- **60-120Hz:** Warm foundation, smooth curve
- **120-200Hz:** Low-mid body without mud
- **Target:** Sustained, smooth low-frequency curve

### Midrange Core
- **200-500Hz:** Warm body, controlled presence
- **500Hz-1kHz:** Vocal warmth, intimacy
- **1-2kHz:** Presence without harshness
- **2-4kHz:** Clarity without brightness
- **Target:** Natural, emotional midrange presence

### High-Frequency Control
- **4-8kHz:** Limited presence, controlled brightness
- **8-12kHz:** Gradual roll-off beginning
- **12-20kHz:** Air without harshness
- **Target:** Dark, intimate high-frequency character

## What to Listen For

### Moody Character Indicators
- **Intimacy:** Close, personal feeling
- **Warmth:** Low-mid emphasis without mud
- **Darkness:** Controlled high-frequency content
- **Emotion:** Midrange focus, natural character
- **Atmosphere:** Controlled reverb, ambient space

### Technical Validation
- **No harshness:** Ear fatigue during extended listening
- **Good mono compatibility:** Mood translates to mono
- **Dynamic control:** Compressed but not lifeless
- **Vocal clarity:** Emotional content comes through

## Variations

### Variation 1: Dark Moody (Very Dark)
- **High-frequency roll-off:** -6dB at 8kHz
- **Low-mid emphasis:** Strong 80-250Hz presence
- **Stereo:** Very center-focused
- **Use for:** Very dark, intimate tracks

### Variation 2: Moody with Air
- **High-frequency roll-off:** -3dB at 10kHz (less dark)
- **Air presence:** Gentle 12-16kHz boost
- **Stereo:** Slightly wider for air
- **Use for:** Moody but not claustrophobic

### Variation 3: R&B Moody
- **Midrange focus:** 1-4kHz emphasis for vocal presence
- **Low-end:** Controlled 808 presence
- **Highs:** More brightness than dark moody
- **Use for:** R&B tracks with moody character

## Pitfalls & Fixes

### Pitfall: Too Dark/Dull
**Problem:** Roll-off too extreme, mix sounds dead
**Wave Candy shows:** Almost no energy above 8kHz
**Fix:** Reduce roll-off to -3dB at 8kHz, add gentle air

### Pitall: Muddy Low-Mids
**Problem:** Too much 200-400Hz, sounds boomy
**Wave Candy shows:** Peak around 300Hz
**Fix:** Cut 250Hz with narrow Q, keep low-end warmth

### Pitfall: Lost Vocal Clarity
**Problem:** Vocals get lost in darkness
**Wave Candy shows:** Weak 2-5kHz presence
**Fix:** Gentle boost 3kHz, check vocal processing

### Pitfall: Too Mono
**Problem:** Everything center, sounds narrow
**Wave Candy shows:** Tiny Vectorscope pattern
**Fix:** Add subtle stereo width to supporting elements

## Automation Ideas

### 1. Moody Evolution
- **High-frequency automation:** Gradual increase during chorus
- **Stereo width automation:** Wider in energetic sections
- **Low-mid automation:** Dynamic warmth control

### 2. Atmospheric Movement
- **Reverb send automation:** More space in emotional sections
- **Filter automation:** Movement for interest without brightness
- **Saturation automation:** Add warmth selectively

## Validation Checklist

### Moody Mix Validation
- [ ] Low-mid warmth without mud (80-250Hz controlled)
- [ ] High-frequency roll-off visible (-3dB at 8kHz)
- [ ] Center density strong on Vectorscope
- [ ] Dynamic range appears compressed but not dead
- [ ] Grayscale display shows smooth, stable curves
- [ ] No harsh peaks 2-8kHz region
- [ ] Emotional content present in midrange
- [ ] Atmospheric space supports mood

### Before/After Comparison
1. **Screenshot initial state** before moody processing
2. **Apply moody processing** step by step
3. **Screenshot after each major change**
4. **Compare emotional impact** with visual confirmation

## Reference Analysis

### Moody Reference Targets
- **Billie Eilish:** Dark, intimate, sparse low-end
- **Weeknd:** Moody R&B with vocal focus
- **Frank Ocean:** Sophisticated warmth, controlled brightness
- **James Blake:** Dark, textured, atmospheric

### Reference Analysis Setup
1. **Load reference track** on separate channel
2. **Add Wave Candy** to reference
3. **Screenshot reference characteristics**
4. **Compare patterns** with your mix
5. **Match vibe** while maintaining your character

## Success Indicators

### Moody Success When:
- ✅ Mix feels intimate and emotional
- ✅ Spectrum shows controlled, dark frequency balance
- ✅ No harshness or ear fatigue
- ✅ Vocals have emotional presence
- ✅ Atmosphere supports the mood
- ✅ Mono compatibility maintains intimacy

### Technical Validation When:
- ✅ No obvious resonances or harsh peaks
- ✅ Frequency curve looks natural and controlled
- ✅ Stereo field supports intimate character
- ✅ Dynamics serve emotional content
- ✅ Reference comparison shows competitive balance

Remember: Moody doesn't mean boring - it means focused, emotional, and intentional. Use Wave Candy to achieve controlled darkness that serves the emotional content, while avoiding the pitfalls of excessive darkness that kills musical interest.