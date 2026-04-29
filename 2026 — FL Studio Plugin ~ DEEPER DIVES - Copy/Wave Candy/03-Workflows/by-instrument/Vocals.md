# Vocals

## Overview
Use Wave Candy to analyze and optimize vocals for hip-hop/rap/R&B production. Focus on vocal presence, clarity, frequency placement, and intelligent stereo positioning.

## Step-by-Step Vocal Analysis Workflow

### Step 1: Vocal Track Setup (3 minutes)
1. **Add Wave Candy** to lead vocal track or vocal bus
2. **Configure for vocal analysis:**
   - **Primary Mode:** Spectrum (vocal frequency focus)
   - **Secondary Mode:** Vectorscope (stereo placement)
   - **Focus Range:** 200Hz-10kHz (vocal range)
   - **FFT Size:** 8192 (high resolution for vocal detail)

### Step 2: Vocal Presence Analysis (5 minutes)
1. **Focus on critical vocal frequencies:**
   - **Intelligibility:** 2-5kHz clarity zone
   - **Body:** 200-500Hz warmth
   - **Air:** 6-12kHz presence and sparkle
2. **Analyze vocal character:**
   - **Lead clarity:** Prominent 2-4kHz presence
   - **Professional polish:** Clean frequency response
   - **No harshness:** Avoid peaks 3-8kHz
3. **Optimize vocal presence:**
   - **If lost:** Boost 3kHz for intelligibility
   - **If harsh:** Cut 3-5kHz, use de-esser
   - **If dull:** Add air 8-12kHz with EQ

### Step 3: Frequency Masking Check (4 minutes)
1. **Check for instrumental masking:**
   - **Vocal protection:** Ensure 2-5kHz clarity
   - **Instrument carving:** Create space for vocals
   - **Lead vocal priority:** Vocals should dominate presence zone
2. **Create vocal space:**
   - **Instrument EQ cuts:** Reduce competing frequencies
   - **Sidechain processing:** Duck instruments when vocals present
   - **Arrangement:** Choose appropriate instrument register

### Step 4: Vocal Stereo Analysis (3 minutes)
1. **Switch to Vectorscope mode**
2. **Analyze vocal stereo character:**
   - **Lead placement:** Nearly centered (80%+ center)
   - **Background vocals:** Can be wider
   - **Phase safety:** Strong mono compatibility
3. **Optimize vocal stereo:**
   - **If too wide:** Narrow stereo image
   - **If mono:** Add subtle stereo for interest
   - **If phase issues:** Check stereo processing

### Step 5: Dynamic Range & Transients (3 minutes)
1. **Return to Spectrum for dynamic analysis**
2. **Check vocal dynamics:**
   - **Consistent levels:** Stable perceived loudness
   - **Natural expression:** Preserved dynamic variation
   - **Compression artifacts:** No over-compression signs
3. **Validate with Wave Candy:**
   - **Controlled dynamics:** Consistent presence without squashing
   - **Natural peaks:** Some variation remains
   - **Professional levels:** Appropriate loudness without clipping

## Starting Settings

### Vocal Frequency Analysis
```
Mode: Spectrum
FFT Size: 8192 (high vocal resolution)
Frequency Scale: Logarithmic
Amplitude Range: -54dB to +12dB (vocal-focused)
Display Type: Grayscale (vocal precision)
Focus: 200Hz-10kHz (vocal range)
Smoothing: High (stable vocal display)
Peak Hold: On (3 seconds)
```

### Vocal Stereo Analysis
```
Mode: Vectorscope
Zoom: 1.0x
Persistence: Medium-High (stable vocal pattern)
Reference Lines: On (phase checking)
Scope Speed: Medium (musical response)
Channels: L/R (stereo image)
```

### Vocal Transient Analysis
```
Mode: Oscilloscope
Time Scale: 30ms (vocal transients)
Amplitude Scale: Auto
Trigger Level: Auto
Display Type: Line (clear waveform)
```

## Vocal-Specific Mini Recipes

### Recipe 1: Modern Hip-Hop Vocal
**Goal:** Present, clear, competitive vocal
**Wave Candy Targets:**
- **Presence:** Strong 2-4kHz without harshness
- **Body:** Controlled 200-500Hz warmth
- **Air:** Professional 8-12kHz polish
- **Stereo:** Centered 80%+ for focus

**Processing Moves:**
- **EQ:** Boost 3kHz presence, cut 300Hz mud
- **Compression:** 3:1 ratio, medium attack
- **De-esser:** Control 5-8kHz sibilance
- **Stereo:** Lead centered, vocals in effects

### Recipe 2: Smooth R&B Vocal
**Goal:** Warm, intimate, sophisticated vocal
**Wave Candy Targets:**
- **Warmth:** Rich 200-400Hz content
- **Sophistication:** Clean 2-6kHz presence
- **Air:** Gentle 8-10kHz enhancement
- **Integration:** Blends with instruments smoothly

**Processing Moves:**
- **Warmth EQ:** Boost 300Hz for body
- **Clarity EQ:** Gentle 2.5kHz boost
- **Compression:** 2:1 ratio, slower attack
- **Effects:** Smooth reverb, subtle delay

### Recipe 3: Aggressive Rap Vocal
**Goal:** Punchy, aggressive, cutting vocal
**Wave Candy Targets:**
- **Cutting power:** Strong 3-5kHz presence
- **Impact:** Controlled 200-400Hz weight
- **Edge:** Bright 6-10kHz content
- **Forward placement:** Present in mix

**Processing Moves:**
- **Aggressive EQ:** Boost 4kHz, high-pass 100Hz
- **Compression:** 4:1 ratio, fast attack
- **Saturation:** Add character and edge
- **Effects:** Tight delay, minimal reverb

### Recipe 4: Intimate Moody Vocal
**Goal:** Close, emotional, intimate vocal
**Wave Candy Targets:**
- **Intimacy:** Strong midrange 500Hz-2kHz
- **Darkness:** Rolled high frequencies above 10kHz
- **Presence:** Controlled 2-4kHz without harshness
- **Atmosphere:** Subtle stereo effects for space

**Processing Moves:**
- **Close-mic EQ:** Strong midrange presence
- **High-pass:** Gentle 100Hz for proximity effect
- **Compression:** Medium compression for intimacy
- **Effects:** Atmospheric reverb, creative processing

## Parameter Moves for Vocals

### Critical Vocal Frequencies
- **200-400Hz:** Vocal body and warmth
- **400-800Hz:** Vocal presence and character
- **800Hz-2kHz:** Vocal intelligibility and clarity
- **2-4kHz:** Vocal presence and cut-through
- **4-6kHz:** Vocal edge and definition
- **6-12kHz:** Vocal air and sibilance zone

### Common Vocal EQ Moves
- **High-pass 80-120Hz:** Remove rumble, add intimacy
- **Bell 300Hz:** Add body or cut mud
- **Bell 1kHz:** Add presence or reduce nasal
- **Bell 3kHz:** Enhance intelligibility
- **Bell 6kHz:** Add air or reduce harshness
- **De-esser 5-8kHz:** Control sibilance

### Compression Settings
- **Attack:** 2-15ms (preserve consonants)
- **Ratio:** 2:1-4:1 (musical control)
- **Release:** 100-250ms (natural decay)
- **Threshold:** -12 to -20dB (moderate control)

## Automation Ideas

### 1. Vocal Expression
- **Volume automation:** Consistent perceived level
- **EQ automation:** Presence changes per phrase
- **Compression automation:** More control in dense sections

### 2. Effects Automation
- **Reverb sends:** More space in emotional sections
- **Delay throws:** Highlighting important words
- **Filter automation:** Creative filter effects

## Vibe Mapping

### Moody Vocals
- **Character:** Intimate, emotional, close
- **Wave Candy:** Strong mids, rolled highs, centered
- **Processing:** Close-mic character, atmospheric effects

### Upbeat Vocals
- **Character:** Energetic, bright, present
- **Wave Candy:** Bright presence, strong 2-6kHz
- **Processing:** Bright EQ, minimal heavy effects

### Psychedelic Vocals
- **Character:** Experimental, processed, evolving
- **Wave Candy:** Complex harmonics, movement, automation
- **Processing:** Heavy effects, modulation, experimentation

### Jazzy Vocals
- **Character:** Natural, warm, expressive
- **Wave Candy:** Natural harmonics, organic dynamics
- **Processing:** Minimal processing, character preservation

### Vibey Vocals
- **Character:** Polished, modern, confident
- **Wave Candy:** Professional presence, clean response
- **Processing:** Modern polish, competitive loudness

## Vocal-Instrument Separation

### Creating Vocal Space
1. **Instrument EQ Carving:** Reduce 2-5kHz on competing instruments
2. **Sidechain Compression:** Duck instruments when vocals present
3. **Arrangement:** Choose appropriate instrument registers
4. **Frequency Planning:** Map frequency slots for each element

### Vocal Protection Strategies
- **Dynamic EQ:** Automatically protect vocal frequencies
- **Multi-band Compression:** Separate processing for vocal vs non-vocal
- **Volume Automation:** Manual vocal priority in busy sections

## Troubleshooting Common Vocal Issues

### Vocals Lost in Mix
- **Wave Candy shows:** Weak 2-5kHz presence
- **Fix:** Boost vocal presence, reduce instrument masking

### Harsh/Sibilant Vocals
- **Wave Candy shows:** Sharp spikes 5-10kHz
- **Fix:** De-esser, cut harsh frequencies, use saturation

### Nasal Vocals
- **Wave Candy shows:** Peak around 1kHz
- **Fix:** Cut 800Hz-1.2kHz, adjust mic technique if possible

### Thin Vocals
- **Wave Candy shows:** Weak low-mid content
- **Fix:** Boost 200-500Hz, add saturation for body

### Inconsistent Vocal Levels
- **Wave Candy shows:** Varying overall levels
- **Fix:** Volume automation, compression, gain staging

## Genre-Specific Vocal Targets

### Hip-Hop/Rap
- **Focus:** Clarity and cut-through
- **Presence:** Strong 2-4kHz
- **Body:** Controlled low-mid
- **Effects:** Minimal reverb, focused delays

### R&B/Soul
- **Focus:** Warmth and sophistication
- **Presence:** Smooth 1-4kHz
- **Body:** Rich 200-500Hz
- **Effects:** Smooth reverb, warm delays

### Pop-Hip-Hop
- **Focus:** Commercial polish and presence
- **Presence:** Competitive 2-5kHz
- **Air:** Professional 8-12kHz
- **Effects:** Modern processing, competitive loudness

## Professional Vocal Validation

### Final Vocal Checklist
- [ ] Lead vocal clear 2-4kHz presence
- [ ] No harsh peaks 5-10kHz (unless intentional)
- [ ] Appropriate warmth 200-500Hz
- [ ] Centered stereo placement (80%+ center)
- [ ] Good mono compatibility
- [ ] Consistent perceived level
- [ ] Natural expression preserved
- [ ] Competitive loudness without harshness

Remember: Vocals are usually the most important element in hip-hop/R&B. Wave Candy helps you achieve professional vocal clarity while maintaining musical character and emotional impact.