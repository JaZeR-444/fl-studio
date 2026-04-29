# Master Bus

## Overview
Use Wave Candy for final master bus analysis and validation. Focus on overall frequency balance, stereo field integrity, competitive loudness, and technical quality control.

## Step-by-Step Master Bus Analysis Workflow

### Step 1: Master Bus Setup (2 minutes)
1. **Add Wave Candy** to Master channel (final position)
2. **Configure for mastering analysis:**
   - **FFT Size:** 16384 (maximum frequency resolution)
   - **Amplitude Range:** -96dB to +12dB (full dynamic range)
   - **Display Type:** Grayscale (clinical analysis)
   - **Smoothing:** High (stable master display)

### Step 2: Overall Frequency Balance (5 minutes)
1. **Analyze full frequency spectrum:**
   - **Low-end foundation:** 20-200Hz balance
   - **Midrange clarity:** 200Hz-4kHz presence
   - **High-frequency content:** 4-20kHz brightness
2. **Check frequency characteristics:**
   - **Natural curve:** Smooth frequency response
   - **No resonances:** No sharp peaks or dips
   - **Genre-appropriate balance:** Target curve for style
3. **Validate with reference:**
   - **Reference comparison:** Similar genre commercial track
   - **Competitive analysis:** Match industry standards
   - **Artistic intent:** Serve musical goals

### Step 3: Stereo Field Analysis (4 minutes)
1. **Switch to Vectorscope mode**
2. **Check stereo integrity:**
   - **Phase correlation:** Good mono compatibility
   - **Stereo width:** Appropriate for genre
   - **Center strength:** Strong center content
3. **Validate stereo characteristics:**
   - **Mono compatibility:** Elements remain in mono
   - **Stereo interest:** Engaging but not excessive
   - **Phase safety:** No cancellation issues

### Step 4: Dynamic Range & Loudness (4 minutes)
1. **Switch to Peak Meter mode**
2. **Analyze loudness characteristics:**
   - **Peak levels:** Below -1dBFS true peak
   - **Dynamic range:** Appropriate compression level
   - **Loudness targets:** -14 to -8 LUFS for streaming
3. **Validate with Spectrum:**
   - **Compression artifacts:** No over-compression signs
   - **Dynamic expression:** Some variation preserved
   - **Competitive levels:** Match streaming standards

### Step 5: Technical Quality Check (3 minutes)
1. **Return to Spectrum for technical analysis**
2. **Check for technical issues:**
   - **Clipping:** No digital clipping indicators
   - **Noise floor:** Acceptable noise level
   - **Frequency problems:** No technical artifacts
3. **Final validation:**
   - **Professional standards:** Meet industry requirements
   - **Platform compatibility:** Good for all playback systems
   - **Artistic goals:** Serve creative intent

## Starting Settings

### Mastering Frequency Analysis
```
Mode: Spectrum
FFT Size: 16384 (maximum detail)
Frequency Scale: Logarithmic
Amplitude Range: -96dB to +12dB (full range)
Display Type: Grayscale (clinical analysis)
Smoothing: High (stable display)
Peak Hold: On (5 seconds)
```

### Master Stereo Analysis
```
Mode: Vectorscope
Zoom: 1.0x
Persistence: Medium-High
Reference Lines: On
Scope Speed: Slow (stable pattern)
Channels: L/R
```

### Master Level Analysis
```
Mode: Peak Meter
Scale: dBFS
Ballistics: Fast
Hold Time: 5 seconds
Reference Level: 0dBFS
Clip Warning: On
Channels: L/R + summed
```

## Master Bus Mini Recipes

### Recipe 1: Hip-Hop Master
**Goal:** Competitive hip-hop loudness with clarity
**Wave Candy Targets:**
- **Low-end:** Strong 20-80Hz presence
- **Mids:** Controlled 500Hz-4kHz
- **Highs:** Bright 8-12kHz without harshness
- **Loudness:** -10 to -8 LUFS streaming

**Processing Moves:**
- **Low-end control:** Multi-band for sub management
- **Midrange clarity:** Gentle presence enhancement
- **High-frequency polish:** Air and sparkle
- **Loudness maximizer:** Competitive levels

### Recipe 2: R&B Master
**Goal:** Sophisticated warmth with vocal focus
**Wave Candy Targets:**
- **Warmth:** Rich 100-300Hz content
- **Vocal presence:** Clear 2-5kHz zone
- **Air:** Gentle 8-14kHz enhancement
- **Dynamics:** Natural but controlled

**Processing Moves:**
- **Warmth enhancement:** Analog-style saturation
- **Vocal protection:** Dynamic EQ for vocal clarity
- **Smooth compression:** 2:1 ratio for glue
- **Stereo enhancement:** Natural width without phase issues

### Recipe 3: Electronic Master
**Goal:** Powerful electronic impact with energy
**Wave Candy Targets:**
- **Full spectrum:** Strong 20Hz-20kHz presence
- **High-energy:** Bright, engaging character
- **Wide stereo:** Maximum width without phase issues
- **Competitive loudness:** -9 to -7 LUFS

**Processing Moves:**
- **Multi-band compression:** Separate frequency control
- **Stereo enhancement:** Maximum width control
- **High-frequency exciter:** Add energy and air
- **Loudness maximizer:** Competitive streaming levels

### Recipe 4: Acoustic Master
**Goal:** Natural acoustic character with polish
**Wave Candy Targets:**
- **Natural balance:** Acoustic-like frequency response
- **Realistic stereo:** Natural imaging without artifacts
- **Preserved dynamics:** Natural expression maintained
- **Gentle loudness:** -12 to -10 LUFS for dynamic range

**Processing Moves:**
- **Minimal EQ:** Gentle corrections only
- **Gentle compression:** 1.5:1 ratio for glue
- **Natural reverb:** Subtle space enhancement
- **Conservative loudness:** Preserve dynamics

## Parameter Moves for Mastering

### Frequency Control
- **Low Shelf:** Control overall low-end balance
- **Bell EQ:** Target frequency corrections
- **High Shelf:** Control overall brightness
- **Multi-band:** Separate frequency processing

### Dynamic Control
- **Compression:** Overall mix glue (1.5:1-3:1)
- **Limiting:** Final peak control
- **Multi-band compression:** Frequency-aware dynamics
- **Parallel compression:** Maintain punch while controlling

### Stereo Control
- **Width enhancement:** Controlled stereo widening
- **Mid/Side processing:** Separate mid and side control
- **Phase correction:** Ensure mono compatibility
- **Stereo EQ:** Different EQ for mid vs side

## Master Validation Process

### Technical Validation
1. **Frequency Response:** Smooth, natural curve
2. **Stereo Imaging:** Good phase correlation
3. **Dynamic Range:** Appropriate for genre
4. **Peak Levels:** No digital clipping
5. **Loudness:** Competitive streaming levels

### Musical Validation
1. **Artistic Intent:** Serves creative goals
2. **Genre Standards:** Meets audience expectations
3. **Emotional Impact:** Preserves or enhances mood
4. **Competitive Quality:** Matches commercial releases

### Platform Validation
1. **Streaming:** Good at -14 LUFS reference
2. **Club Systems:** Strong low-end translation
3. **Mobile Devices:** Sounds good on small speakers
4. **Hi-Fi Systems:** Maintains quality on good systems

## Automation Ideas

### 1. Master Evolution
- **Loudness automation:** Subtle level changes
- **EQ automation:** Frequency balance per section
- **Stereo automation:** Width changes for dynamics

### 2. Creative Master Processing
- **Filter automation:** Master filter sweeps
- **Effects automation:** Creative master effects
- **Dynamic processing:** Section-based processing

## Genre-Specific Master Targets

### Hip-Hop/Rap
- **Loudness:** -10 to -8 LUFS streaming
- **Low-end:** Strong sub and kick presence
- **Mids:** Vocal-focused 2-5kHz
- **Highs:** Bright but not harsh

### R&B/Soul
- **Loudness:** -12 to -9 LUFS streaming
- **Warmth:** Rich low-mid presence
- **Vocals:** Clear and present
- **Air:** Gentle high-frequency polish

### Electronic/EDM
- **Loudness:** -9 to -7 LUFS streaming
- **Energy:** Bright, engaging character
- **Stereo:** Maximum width without issues
- **Impact:** Strong transient punch

### Acoustic/Jazz
- **Loudness:** -14 to -11 LUFS streaming
- **Naturalness:** Acoustic-like character
- **Dynamics:** Preserved expression
- **Stereo:** Realistic imaging

## Master Troubleshooting

### Too Loud/Overcompressed
- **Wave Candy shows:** Flat spectrum, no dynamics
- **Fix:** Reduce compression, lower loudness target

### Harsh Highs
- **Wave Candy shows:** Sharp peaks 5-15kHz
- **Fix:** Cut harsh frequencies, reduce exciter

### Muddy Low-Mids
- **Wave Candy shows:** Peak 200-400Hz
- **Fix:** Cut low-mids, tighten low-end

### Phase Issues
- **Wave Candy shows:** Weak Vectorscope center
- **Fix:** Check stereo processing, ensure mono compatibility

### Inconsistent Levels
- **Wave Candy shows:** Varying overall levels
- **Fix:** Volume automation, consistent processing

## Final Master Checklist

### Before Export
- [ ] No clipping on Peak Meter (-1dBFS max)
- [ ] Appropriate loudness for genre/streaming
- [ ] Good phase correlation on Vectorscope
- [ ] Smooth frequency response on Spectrum
- [ ] Competitive with reference tracks
- [ ] Translates to mono properly
- [ ] Sounds good on multiple systems
- [ ] Serves artistic and commercial goals

### Reference Comparison
1. **Load reference track** in separate project
2. **Analyze with Wave Candy** settings
3. **Compare frequency curves** and stereo imaging
4. **Match characteristics** while maintaining your identity

Remember: The master bus is the final quality control point. Wave Candy helps you ensure your mix meets professional standards while preserving the artistic intent and emotional impact you've created throughout the mixing process.