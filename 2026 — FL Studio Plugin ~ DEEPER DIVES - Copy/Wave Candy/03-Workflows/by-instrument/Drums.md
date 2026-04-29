# Drums

## Overview
Use Wave Candy to analyze, optimize, and enhance drum elements for professional hip-hop/rap/R&B production. Focus on transient clarity, frequency separation, and drum mix cohesion.

## Step-by-Step Drum Analysis Workflow

### Step 1: Drum Bus Setup (3 minutes)
1. **Route all drums to Drum Bus** (or analyze individually)
2. **Add Wave Candy** to Drum Bus
3. **Configure for drum analysis:**
   - **Primary Mode:** Oscilloscope (transient focus)
   - **Secondary Mode:** Spectrum (frequency analysis)
   - **Oscilloscope Settings:** 15-20ms time scale, Line display
   - **Spectrum Settings:** 4096 FFT, Log scale, -48dB to +12dB

### Step 2: Kick Analysis & Optimization (4 minutes)
1. **Solo kick drum** and analyze:
   - **Oscilloscope:** Look for sharp attack, clean decay
   - **Spectrum:** Check 40-80Hz fundamental, 2-4kHz click
2. **Optimize kick character:**
   - **If soft:** Add gentle boost 2-4kHz for click
   - **If muddy:** Cut 200-400Hz, tighten 60-120Hz
   - **If weak:** Boost 60-120Hz for impact
3. **Validate with Wave Candy:**
   - **Oscilloscope:** Sharp attack, controlled decay
   - **Spectrum:** Clear low-frequency fundamental, clean presence

### Step 3: Snare/Clap Analysis (4 minutes)
1. **Solo snare** and analyze:
   - **Oscilloscope:** Fast attack, quick decay
   - **Spectrum:** 200-400Hz body, 1-3kHz crack
2. **Optimize snare character:**
   - **If thin:** Boost 200-400Hz for body
   - **If weak:** Boost 2-4kHz for crack
   - **If harsh:** Cut 3-5kHz, check 1kHz honk
3. **Validate with Wave Candy:**
   - **Oscilloscope:** Clear attack, fast decay
   - **Spectrum:** Balanced body and crack

### Step 4: 808/Sub Analysis (4 minutes)
1. **Solo 808** and analyze:
   - **Oscilloscope:** Clean, sustained waveform
   - **Spectrum:** 20-60Hz dominant, controlled harmonics
   - **Vectorscope:** Near-mono presentation
2. **Optimize 808 character:**
   - **If weak:** Boost 30-60Hz for sub presence
   - **If muddy:** Cut 80-150Hz, focus on pure sub
   - **If harsh:** Reduce high harmonics above 200Hz
3. **Validate with Wave Candy:**
   - **Oscilloscope:** Clean sine-like waveform
   - **Spectrum:** Strong sub content, controlled harmonics

### Step 5: Hi-Hat/Percussion Analysis (3 minutes)
1. **Solo hi-hats** and analyze:
   - **Spectrum:** 8-12kHz sizzle, 4-8kHz definition
   - **Oscilloscope:** Fast transients, quick decay
2. **Optimize hi-hat character:**
   - **If dull:** Boost 8-12kHz for air
   - **If harsh:** Cut 5-8kHz, check 10kHz peaks
   - **If lost:** Boost 4-6kHz for presence
3. **Validate with Wave Candy:**
   - **Spectrum:** Bright but not harsh
   - **Oscilloscope:** Sharp, clean transients

### Step 6: Full Drum Bus Analysis (3 minutes)
1. **Unmute all drums** and analyze full kit
2. **Check for frequency conflicts:**
   - **Kick vs 808:** Competition in 60-120Hz
   - **Snare vs instruments:** Competition in 1-3kHz
   - **Hi-hats vs vocals:** Competition in 8-12kHz
3. **Stereo field check:**
   - **Vectorscope:** Width without phase issues
   - **Mono compatibility:** Check center density

## Starting Settings

### Drum Transient Analysis
```
Mode: Oscilloscope
Time Scale: 15-20ms (transient detail)
Amplitude Scale: Auto
Trigger Level: Auto
Display Type: Line
Persistence: Low (clear transients)
```

### Drum Frequency Analysis
```
Mode: Spectrum
FFT Size: 4096 (responsive detail)
Frequency Scale: Logarithmic
Amplitude Range: -48dB to +12dB
Display Type: Rainbow
Smoothing: Low-Medium
Peak Hold: On (2 seconds)
```

### Drum Stereo Analysis
```
Mode: Vectorscope
Zoom: 1.0x
Persistence: Medium
Reference Lines: On
Scope Speed: Fast (responsive)
```

## Drum-Specific Mini Recipes

### Recipe 1: Punchy Hip-Hop Drums
**Goal:** Aggressive, modern hip-hop drum impact
**Wave Candy Targets:**
- **Kick:** Sharp attack, 40-80Hz impact
- **Snare:** Fast crack, 2-4kHz presence
- **808:** Strong sub, tight harmonics
- **Hi-Hats:** Bright, clean transients

**Processing Moves:**
- **Kick:** Boost 60Hz, gentle shelf 2kHz, parallel compression
- **Snare:** Boost 200Hz and 3kHz, transient designer
- **808:** Sine sub layer, saturation for harmonics
- **Hi-Hats:** High-pass 8kHz, gentle air boost

### Recipe 2: Smooth R&B Drums
**Goal:** Groovy, smooth drum character
**Wave Candy Targets:**
- **Kick:** Warm impact, controlled transients
- **Snare:** Body-focused, moderate crack
- **808:** Smooth, musical sustain
- **Hi-Hats:** Integrated, not overly bright

**Processing Moves:**
- **Kick:** Gentle 80Hz boost, slower attack compression
- **Snare:** Boost 300Hz body, moderate 2kHz presence
- **808:** Subtle saturation, smooth envelope shaping
- **Hi-Hats:** Roll off 12kHz+, blend with reverb

### Recipe 3: Electronic EDM Drums
**Goal:** Hard-hitting, electronic drum character
**Wave Candy Targets:**
- **Kick:** Sharp attack, full spectrum presence
- **Snare/Clap:** Aggressive, bright character
- **808/Bass:** Strong harmonics, electronic texture
- **Hi-Hats:** Very bright, cutting through mix

**Processing Moves:**
- **Kick:** Distortion layer, aggressive compression
- **Snare:** Layer with noise, boost 5-8kHz
- **808:** Heavy processing, harmonic enhancement
- **Hi-Hats:** Exciter, aggressive high-frequency boost

### Recipe 4: Acoustic Jazz Drums
**Goal:** Natural, organic drum character
**Wave Candy Targets:**
- **Kick:** Natural acoustic character, balanced spectrum
- **Snare:** Realistic transient, natural body
- **Hi-Hats:** Acoustic metallic character, natural decay
- **Overall:** Minimal processing artifacts

**Processing Moves:**
- **Minimal EQ:** Gentle corrections only
- **Light Compression:** 2:1 ratio, natural character
- **Natural Reverb:** Room simulation, not obvious
- **Preserve Transients:** Fast attack, slow release

## Parameter Moves for Drums

### EQ Parameter Adjustments
- **Low Shelf 60Hz:** Add kick impact
- **Bell 250Hz:** Snare body control
- **Bell 2kHz:** Snare crack, vocal clarity
- **Bell 5kHz:** Hi-hat definition
- **High Shelf 10kHz:** Air and sparkle

### Compression Parameter Adjustments
- **Attack:** 1-10ms (preserve transients)
- **Ratio:** 2:1-4:1 (musical control)
- **Release:** 100-300ms (natural decay)
- **Threshold:** -6 to -12dB (gentle control)

### Stereo Parameter Adjustments
- **Width:** 80-120% for drums (natural enhancement)
- **Pan:** Create space and separation
- **Send Effects:** Reverb/delay for space

## Automation Ideas

### 1. Dynamic Drum Processing
- **Compression automation:** More control in busy sections
- **EQ automation:** Frequency presence per section
- **Send automation:** More effects in breakdowns

### 2. Sectional Drum Changes
- **Filter automation:** Drum sweeps and builds
- **Distortion automation:** More grit in choruses
- **Stereo automation:** Width changes for dynamics

## Vibe Mapping

### Moody Drums
- **Character:** Soft, controlled transients
- **Wave Candy:** Rounded attacks, smooth Spectrum
- **Processing:** Slower attack, gentle compression

### Upbeat Drums
- **Character:** Sharp, aggressive transients
- **Wave Candy:** Sharp attacks, bright Spectrum
- **Processing:** Fast attack, parallel compression

### Psychedelic Drums
- **Character:** Experimental, unusual textures
- **Wave Candy:** Complex waveforms, evolving patterns
- **Processing:** Effects chains, experimental processing

### Jazzy Drums
- **Character:** Natural, organic transients
- **Wave Candy:** Acoustic-like patterns, natural Spectrum
- **Processing:** Minimal, character preservation

### Vibey Drums
- **Character:** Polished but punchy
- **Wave Candy:** Clean transients, professional Spectrum
- **Processing:** Professional polish with character preserved

## Troubleshooting Common Drum Issues

### Kick Issues
- **No impact:** Spectrum shows weak 40-80Hz content
- **Muddy kick:** Peak around 150-250Hz
- **Clicky kick:** Spike 2-4kHz overwhelming

### Snare Issues
- **Lost in mix:** Weak 1-3kHz presence
- **Boxy snare:** Peak 300-500Hz
- **Harsh snare:** Spike 3-5kHz

### 808 Issues
- **Disappears in mono:** Weak center on Vectorscope
- **Muddy 808:** Too much 80-150Hz content
- **No sub:** Weak below 60Hz on Spectrum

### Hi-Hat Issues
- **Harsh hi-hats:** Sharp spikes 8-12kHz
- **Lost hi-hats:** Weak 4-8kHz presence
- **Metallic:** Resonance around 10kHz

Remember: Wave Candy shows you exactly what's happening with your drums. Use it to identify problems precisely, apply targeted fixes, and validate that your processing is actually improving the drum sound without creating new issues.