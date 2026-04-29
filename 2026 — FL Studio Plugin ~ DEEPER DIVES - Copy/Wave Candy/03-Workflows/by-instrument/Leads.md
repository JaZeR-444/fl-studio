# Leads

## Overview
Use Wave Candy to analyze and optimize lead instruments for hip-hop/rap/R&B production. Focus on presence, clarity, frequency separation from vocals, and appropriate stereo imaging.

## Step-by-Step Lead Analysis Workflow

### Step 1: Lead Track Setup (3 minutes)
1. **Add Wave Candy** to lead track or instrument bus
2. **Configure for lead analysis:**
   - **Primary Mode:** Spectrum (frequency balance)
   - **Secondary Mode:** Oscilloscope (transient character)
   - **Focus Range:** 200Hz-12kHz (typical lead range)
   - **FFT Size:** 4096 (good balance of detail vs speed)

### Step 2: Presence & Clarity Analysis (4 minutes)
1. **Focus on 1-6kHz presence zone**
2. **Analyze lead character:**
   - **Vocal separation:** Clear frequency slot from vocals
   - **Cut-through power:** Enough presence without harshness
   - **Musical tone:** Balanced harmonic content
3. **Optimize presence:**
   - **If lost:** Boost 2-4kHz for cut-through
   - **If harsh:** Cut 3-5kHz, check for masking
   - **If dull:** Add gentle high-frequency air

### Step 3: Frequency Competition Check (4 minutes)
1. **Check for masking conflicts:**
   - **Vocal competition:** 2-5kHz overlap
   - **Other instruments:** Frequency crowding
   - **Spectral clarity:** Each element has space
2. **Create frequency separation:**
   - **EQ carving:** Remove competing frequencies
   - **Dynamic EQ:** Frequency-aware volume control
   - **Arrangement solutions:** Re-register or edit parts

### Step 4: Stereo Imaging Analysis (3 minutes)
1. **Switch to Vectorscope mode**
2. **Analyze lead stereo character:**
   - **Stereo placement:** Position in stereo field
   - **Phase relationship:** Good mono compatibility
   - **Width appropriateness:** Not too wide/narrow
3. **Optimize stereo placement:**
   - **If too wide:** Reduce stereo enhancement
   - **If mono:** Add subtle stereo interest
   - **If phase issues:** Check stereo processing

### Step 5: Transient & Dynamic Analysis (3 minutes)
1. **Switch to Oscilloscope mode**
2. **Analyze lead transient character:**
   - **Attack clarity:** Clear note beginnings
   - **Sustain control:** Appropriate note length
   - **Dynamic variation:** Musical expression
3. **Optimize transients:**
   - **If soft:** Add transient designer or compression
   - **If harsh:** Reduce attack speed, add soft clipper
   - **If flat:** Add dynamic processing for expression

## Starting Settings

### Lead Frequency Analysis
```
Mode: Spectrum
FFT Size: 4096 (responsive detail)
Frequency Scale: Logarithmic
Amplitude Range: -60dB to +12dB
Display Type: Rainbow
Focus: 200Hz-12kHz (lead instrument range)
Smoothing: Medium
Peak Hold: On (2 seconds)
```

### Lead Stereo Analysis
```
Mode: Vectorscope
Zoom: 1.0x
Persistence: Medium
Reference Lines: On
Scope Speed: Fast (responsive to lead changes)
```

### Lead Transient Analysis
```
Mode: Oscilloscope
Time Scale: 20-40ms (musical transient detail)
Amplitude Scale: Auto
Trigger Level: Auto
Display Type: Line (clear note definition)
```

## Lead-Specific Mini Recipes

### Recipe 1: Hip-Hop Synth Lead
**Goal:** Cutting synth lead that works with vocals
**Wave Candy Targets:**
- **Presence:** Strong 2-4kHz without vocal masking
- **Body:** Controlled 500Hz-1kHz content
- **Air:** Gentle 8-12kHz sparkle
- **Stereo:** Controlled width for mix space

**Processing Moves:**
- **EQ:** Cut 2.5kHz (vocal range), boost 4kHz
- **Compression:** 4:1 ratio, medium attack
- **Stereo:** Subtle widener, chorus for movement
- **Effects:** Delay/reverb for space

### Recipe 2: R&B Keyboard Lead
**Goal:** Smooth, musical keyboard lead with warmth
**Wave Candy Targets:**
- **Warmth:** Rich 200-500Hz content
- **Clarity:** Clean 1-3kHz presence
- **Sophistication:** Controlled high-frequency content
- **Integration:** Blends with vocals without competing

**Processing Moves:**
- **Warmth EQ:** Boost 300Hz for body
- **Clarity EQ:** Gentle 2kHz boost for definition
- **Compression:** 2:1 ratio, slow attack for sustain
- **Stereo:** Natural stereo image from source

### Recipe 3: Electronic Pluck Lead
**Goal:** Modern, articulate pluck with impact
**Wave Candy Targets:**
- **Attack:** Sharp transient, clear note onset
- **Body:** Quick decay, controlled sustain
- **Harmonics:** Rich overtones for interest
- **Presence:** Bright character without harshness

**Processing Moves:**
- **Transient Designer:** Enhance attack
- **EQ:** High-pass 200Hz, boost 8kHz for air
- **Compression:** Fast attack for punch
- **Stereo:** Subtle stereo delay for space

### Recipe 4: Guitar Lead (Rock/Pop)
**Goal:** Electric guitar with appropriate rock presence
**Wave Candy Targets:**
- **Edge:** Controlled 2-5kHz presence
- **Body:** Rich 200-800Hz content
- **Air:** Natural 8-12kHz content
- **Power:** Strong mids without harshness

**Processing Moves:**
- **Amp Simulation:** Appropriate amp character
- **EQ:** Cut mud 300Hz, enhance presence 3kHz
- **Compression:** 3:1 ratio for sustain
- **Stereo:** Doubled guitars for width

## Parameter Moves for Leads

### Frequency Zones
- **200-500Hz:** Body and warmth
- **500Hz-1kHz:** Note definition and character
- **1-2kHz:** Presence and cut-through
- **2-4kHz:** Edge and clarity (watch vocal overlap)
- **4-8kHz:** Air and definition
- **8-16kHz:** Sparkle and sizzle

### Common EQ Adjustments
- **High-pass 200Hz:** Remove mud, create space
- **Bell 800Hz:** Add note body
- **Bell 2kHz:** Enhance presence
- **Cut 2.5kHz:** Vocal protection (if needed)
- **High Shelf 10kHz:** Add air and sparkle

### Compression Settings
- **Attack:** 5-20ms (preserve note attack)
- **Ratio:** 2:1-4:1 (musical control)
- **Release:** 100-300ms (natural decay)
- **Threshold:** -10 to -18dB (moderate control)

## Automation Ideas

### 1. Expressive Processing
- **Filter automation:** Sweeps and movement
- **EQ automation:** Presence changes per section
- **Distortion automation:** More grit in climactic sections

### 2. Spatial Movement
- **Pan automation:** Subtle movement for interest
- **Stereo width automation:** Dynamic space changes
- **Send automation:** Effects for dramatic moments

## Vibe Mapping

### Moody Leads
- **Character:** Dark, emotional, sustained
- **Wave Candy:** Rolled highs, warm mids, narrow stereo
- **Processing:** Darker patches, reverb for atmosphere

### Upbeat Leads
- **Character:** Bright, energetic, rhythmic
- **Wave Candy:** Bright presence, sharp transients, engaging stereo
- **Processing:** Bright patches, compression for punch

### Psychedelic Leads
- **Character:** Experimental, evolving, textural
- **Wave Candy:** Complex harmonics, automation, movement
- **Processing:** Effects chains, modulation, experimental patches

### Jazzy Leads
- **Character:** Sophisticated, warm, expressive
- **Wave Candy:** Natural harmonics, organic transients
- **Processing:** Vintage-style effects, character preservation

### Vibey Leads
- **Character:** Polished, modern, confident
- **Wave Candy:** Professional presence, clean harmonics
- **Processing:** Modern sounds, professional polish

## Lead-Vocal Integration Strategies

### Frequency Protection
- **Vocal protection zone:** 2-5kHz careful management
- **Dynamic EQ:** Automatically duck when vocals present
- **Arrangement solutions:** Lead plays during vocal gaps

### Stereo Placement
- **Lead center-left/right:** Create vocal space
- **Vocal center:** Keep vocals centered for focus
- **Stereo contrast:** Different widths for separation

## Troubleshooting Common Lead Issues

### Lost in Mix
- **Wave Candy shows:** Weak presence 1-6kHz
- **Fix:** Boost presence frequencies, reduce competition

### Harsh/Ear Fatiguing
- **Wave Candy shows:** Spikes 3-8kHz
- **Fix:** Cut harsh frequencies, add saturation

### Competing with Vocals
- **Wave Candy shows:** Overlap 2-5kHz with vocal
- **Fix:** EQ carving, dynamic EQ, arrangement changes

### Mono Issues
- **Wave Candy shows:** Phase problems on Vectorscope
- **Fix:** Check stereo processing, ensure mono compatibility

### Boring Character
- **Wave Candy shows:** Flat, uninteresting spectrum
- **Fix:** Add harmonics, effects, automation for interest

## Genre-Specific Considerations

### Hip-Hop Leads
- **Focus:** Cutting through dense beats
- **Avoid:** Masking vocals
- **Emphasize:** Presence and clarity
- **Stereo:** Controlled width for mix cohesion

### R&B Leads
- **Focus:** Smooth, musical character
- **Emphasize:** Warmth and sophistication
- **Avoid:** Harshness that distracts from vocals
- **Stereo:** Natural, realistic imaging

### Electronic Leads
- **Focus:** Modern, cutting character
- **Emphasize:** Bright presence and articulation
- **Stereo:** Creative use of stereo effects
- **Effects:** Modern processing appropriate

Remember: Leads should complement, not compete with vocals. Wave Candy helps you find the perfect frequency balance where both vocals and leads can shine together in the mix.