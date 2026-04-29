# Bass

## Overview
Use Wave Candy to analyze and optimize bass elements for hip-hop/rap/R&B production. Focus on sub-bass presence, low-mid control, frequency separation from kick, and mono compatibility.

## Step-by-Step Bass Analysis Workflow

### Step 1: Bass Track Setup (3 minutes)
1. **Add Wave Candy** to bass track or bass bus
2. **Configure for bass analysis:**
   - **Primary Mode:** Spectrum (low-frequency focus)
   - **Secondary Mode:** Vectorscope (mono compatibility)
   - **Oscilloscope:** For waveform shape (optional)
   - **Spectrum Settings:** 8192 FFT, Focus 20-200Hz

### Step 2: Sub-Bass Analysis (5 minutes)
1. **Focus Spectrum on 20-60Hz region**
2. **Analyze sub-bass character:**
   - **Fundamental presence:** Strong 20-50Hz content
   - **Clean sub content:** No distortion or artifacts
   - **Consistent level:** Stable sub presence across notes
3. **Optimize sub character:**
   - **If weak:** Boost 30-50Hz with sine layer
   - **If distorted:** Check for clipping, reduce level
   - **If inconsistent:** Use compression for evenness

### Step 3: Low-Mid Body Control (4 minutes)
1. **Focus on 60-250Hz region**
2. **Analyze low-mid character:**
   - **Body without mud:** Controlled 80-200Hz
   - **Separation from kick:** Frequency slot optimization
   - **Musical tone:** Balanced harmonic content
3. **Optimize low-mid character:**
   - **If muddy:** Cut 150-250Hz
   - **If thin:** Boost 80-120Hz
   - **If conflicting:** Create space from kick frequencies

### Step 4: Mono Compatibility Check (3 minutes)
1. **Switch to Vectorscope mode**
2. **Check mono characteristics:**
   - **Center density:** Strong vertical pattern
   - **Phase correlation:** Good mono compatibility
   - **Stereo content:** Minimal for low frequencies
3. **Fix mono issues:**
   - **If weak center:** Sum low frequencies to mono
   - **If phase problems:** Check stereo processing
   - **If width issues:** Reduce stereo enhancement

### Step 5: Harmonic Content Analysis (3 minutes)
1. **Analyze harmonic content 200Hz-2kHz**
2. **Check bass character:**
   - **Musical harmonics:** Rich overtones for definition
   - **Controlled mids:** Not competing with vocals
   - **Clear note definition:** Distinct pitch information
3. **Optimize harmonics:**
   - **If undefined:** Gentle boost 800Hz-2kHz
   - **If competing:** Cut overlapping frequencies
   - **If harsh:** Reduce excessive harmonics

## Starting Settings

### Bass Low-Frequency Analysis
```
Mode: Spectrum
FFT Size: 8192 (high resolution for lows)
Frequency Scale: Logarithmic
Amplitude Range: -60dB to +12dB
Display Type: Grayscale (serious bass work)
Frequency Zoom: 20-200Hz (low-frequency focus)
Smoothing: High (stable low-frequency display)
```

### Bass Mono Check
```
Mode: Vectorscope
Zoom: 1.0x
Persistence: Medium
Reference Lines: On
Scope Speed: Medium
Channels: L+R (mono sum)
```

### Bass Waveform Analysis
```
Mode: Oscilloscope
Time Scale: 100ms (long waveform view)
Amplitude Scale: Auto
Trigger Level: Auto
Display Type: Solid (filled waveform)
```

## Bass-Specific Mini Recipes

### Recipe 1: Hip-Hop 808 Bass
**Goal:** Modern trap 808 with sub presence and character
**Wave Candy Targets:**
- **Sub:** Strong 20-60Hz fundamental
- **Body:** Controlled 80-150Hz content
- **Harmonics:** Rich overtones for definition
- **Mono:** Strong center density

**Processing Moves:**
- **Sub layer:** Pure sine 20-50Hz
- **Distortion:** Saturation for harmonics
- **Compression:** 4:1 ratio, 50ms attack
- **EQ:** Low-pass 2kHz, boost 80Hz

### Recipe 2: R&B Electric Bass
**Goal:** Smooth, musical bass with warmth and clarity
**Wave Candy Targets:**
- **Warmth:** Rich 100-250Hz content
- **Definition:** Clear 800Hz-2kHz presence
- **Integration:** Blends with kick without mud
- **Musicality:** Natural harmonic character

**Processing Moves:**
- **Warmth boost:** Gentle 150Hz boost
- **Definition:** Bell boost 1.5kHz
- **Compression:** 2:1 ratio, medium attack
- **Tone control:** Preserve natural character

### Recipe 3: EDM Synth Bass
**Goal:** Aggressive, electronic bass with modern edge
**Wave Candy Targets:**
- **Attack:** Sharp transient presence
- **Harmonics:** Rich overtone content
- **Width:** Some stereo movement possible
- **Impact:** Strong low-mid presence

**Processing Moves:**
- **Distortion:** Aggressive saturation
- **Multi-band:** Separate processing for lows/mids/highs
- **Stereo processing:** Subtle width for interest
- **Compression:** Fast attack for punch

### Recipe 4: Acoustic/Upright Bass
** Goal:** Natural, organic bass character
**Wave Candy Targets:**
- **Natural tone:** Balanced frequency response
- **Body:** Rich 100-300Hz content
- **Definition:** Natural 1-2kHz presence
- **Transients:** Organic attack character

**Processing Moves:**
- **Minimal EQ:** Preserve natural character
- **Light compression:** 2:1 ratio, natural character
- **Natural reverb:** Room simulation
- **Preserve dynamics:** Maintain natural variation

## Parameter Moves for Bass

### Frequency Analysis
- **20-40Hz:** Pure sub content, club systems
- **40-80Hz:** Sub impact and warmth
- **80-150Hz:** Low-mid body and weight
- **150-300Hz:** Potential mud zone, control carefully
- **300Hz-1kHz:** Definition and note clarity
- **1-2kHz:** Harmonic content and presence

### Common EQ Moves
- **Low Shelf 40Hz:** Add sub impact
- **Bell 80Hz:** Low-mid warmth
- **Bell 150Hz:** Cut for mud reduction
- **Bell 800Hz:** Add note definition
- **High Shelf 1kHz:** Add presence and clarity

### Compression Settings
- **Attack:** 20-100ms (preserve attack, control sustain)
- **Ratio:** 2:1-4:1 (musical control)
- **Release:** 200-500ms (natural decay)
- **Threshold:** -8 to -15dB (gentle to moderate control)

## Automation Ideas

### 1. Bass Expression
- **Filter automation:** Growls and sweeps
- **Distortion automation:** More grit in choruses
- **EQ automation:** Frequency presence per section

### 2. Dynamic Control
- **Volume automation:** Consistent perceived level
- **Compression automation:** More control in busy sections
- **Send automation:** Effects for dramatic sections

## Vibe Mapping

### Moody Bass
- **Character:** Deep, sustained, emotional
- **Wave Candy:** Strong low-mid, rolled highs, mono
- **Processing:** Heavy compression, saturation, sustained notes

### Upbeat Bass
- **Character:** Punchy, rhythmic, driving
- **Wave Candy:** Sharp transients, balanced spectrum
- **Processing:** Fast compression, transient enhancement

### Psychedelic Bass
- **Character:** Experimental, evolving, textural
- **Wave Candy:** Complex harmonics, movement, automation
- **Processing:** Effects chains, modulation, experimental

### Jazzy Bass
- **Character:** Natural, organic, expressive
- **Wave Candy:** Acoustic-like patterns, natural dynamics
- **Processing:** Minimal processing, character preservation

### Vibey Bass
- **Character:** Polished but powerful, modern
- **Wave Candy:** Clean low-end, professional harmonics
- **Processing:** Professional polish with character

## Bass-Kick Separation Strategies

### Frequency Separation
- **Kick fundamental:** 60-80Hz
- **808 fundamental:** 20-50Hz
- **Kick body:** 100-200Hz
- **808 harmonics:** 80-200Hz (controlled)

### Dynamic Separation
- **Sidechain compression:** Kick ducking bass
- **Parallel processing:** Separate processing paths
- **Volume automation:** Alternating emphasis

## Mono Compatibility Rules

### Sub-Bass Mono Requirements
- **20-80Hz should be mono** for club systems [SRC: REPUTABLE]
- **Vectorscope:** Strong vertical pattern below 100Hz
- **Phase correlation:** Near +1 correlation in low frequencies

### Testing Mono Compatibility
1. **Check Vectorscope** for strong center density
2. **Sum to mono** and listen for cancellation
3. **Verify club translation** by checking mono performance
4. **Test on different systems** if possible

## Troubleshooting Common Bass Issues

### No Sub Presence
- **Wave Candy shows:** Weak below 60Hz
- **Fix:** Add sub layer, boost 30-50Hz, check speakers

### Muddy Low-Mids
- **Wave Candy shows:** Peak 150-300Hz
- **Fix:** Cut 250Hz, create separation from kick

### Lost on Small Speakers
- **Wave Candy shows:** Only sub content, no mids
- **Fix:** Boost 800Hz-2kHz for definition

### Phase Issues
- **Wave Candy shows:** Weak Vectorscope center
- **Fix:** Sum low frequencies to mono, check stereo processing

### Inconsistent Levels
- **Wave Candy shows:** Varying sub levels across notes
- **Fix:** Compression, MIDI velocity adjustment

Remember: Bass needs to work on all systems - from tiny phone speakers to massive club systems. Wave Candy helps you achieve that balance by showing exactly what's happening in the critical low-frequency regions.