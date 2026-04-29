# Core Techniques & Best Practices - Fruity Spectroman

## Fundamental Techniques

### 1. **Mix Balance Analysis**

#### The "At-a-Glance" Method
**Purpose:** Quick mix evaluation without deep analysis

**Technique:**
1. Load Spectroman on Master channel
2. Play your mix at consistent volume
3. Observe overall spectral shape
4. Look for these patterns:
   - Balanced distribution across frequency range
   - No single dominant area (unless intentional)
   - Gradual roll-off in highs and lows
   - Consistent energy in mids (500 Hz - 5 kHz)

**What You Should See:**
```
Good Mix Profile (general):
20-60 Hz:    Moderate presence (kick/bass fundamental)
60-250 Hz:   Solid but controlled (bass/low harmonics)
250-500 Hz:  Moderate (warmth without mud)
500-2k Hz:   Strong presence (musical body)
2k-5k Hz:    Clear and present (vocal/lead clarity)
5k-20k Hz:   Gradual roll-off (air and space)
```

#### Red Flags to Watch For:
- **Heavy red below 40 Hz:** Wasted energy, won't translate to most speakers
- **Dark zone at 2-5 kHz:** Mix will lack clarity and presence
- **Excessive red at 200-500 Hz:** Muddy, boomy mix
- **All blue above 8 kHz:** Dull, lifeless top end

---

### 2. **Reference Track Comparison**

#### A/B Spectral Matching
**Purpose:** Learn from professional mixes and calibrate your ears

**Setup:**
1. Load reference track in FL Studio (separate channel)
2. Match playback level (LUFS/RMS matching preferred)
3. Place Spectroman on Master
4. Route reference through Master or use separate instance

**Comparison Process:**
1. **Play reference track** - Study spectral profile for 30 seconds
2. **Mental snapshot** - Note overall shape and balance
3. **Play your mix** - Compare immediately
4. **Identify differences** - Don't try to match exactly, look for:
   - Overall spectral tilt (bright vs. warm)
   - Low-end extension and control
   - Mid-range density
   - High-frequency air and presence

**Common Findings:**
- Amateur mixes often have too much 200-400 Hz (mud)
- Professional mixes have cleaner low-end (below 40 Hz)
- Reference tracks often have more controlled 3-5 kHz (less harshness)
- Pro mixes show better separation between bass and kick (60-100 Hz region)

**Action Steps:**
- Don't copy exactly - understand the differences
- Make targeted EQ moves based on comparison
- Re-check after adjustments

---

### 3. **Low-End Monitoring & Control**

#### Sub-Bass Verification
**Purpose:** Ensure low frequencies translate to all playback systems

**Critical Zones:**
```
20-40 Hz:  Sub-harmonic rumble (remove unless intentional)
40-60 Hz:  Deep sub-bass (808s, sub synths)
60-100 Hz: Kick fundamental, bass guitar root notes
100-200 Hz: Bass harmonics, low-end warmth
```

**Monitoring Technique:**
1. **Focus on 20-60 Hz region** - This is your deep bass zone
2. **Check for red content below 30 Hz:**
   - If red/yellow: Likely wasted energy or rumble
   - Action: High-pass at 30-40 Hz unless specific reason
3. **Verify 40-80 Hz presence** (for bass-heavy genres):
   - Should show moderate to strong presence
   - Not overwhelming other frequencies

**808/Sub-Bass Check:**
- 808s should show clear energy at 40-60 Hz
- If peaking at 80-100 Hz instead, may lack low-end weight
- Use EQ or pitch to adjust fundamental frequency

**Kick vs. Bass Relationship:**
- Kick fundamental: Usually 50-80 Hz
- Bass fundamental: Usually 60-100 Hz
- They should be **offset**, not competing:
  - Kick at 60 Hz → Bass at 80-100 Hz
  - Kick at 80 Hz → Bass at 60 Hz or 100+ Hz

---

### 4. **Frequency Masking Detection**

#### Identifying Competing Elements
**Purpose:** Find instruments fighting for same frequency space

**Method:**
1. **Solo two potentially competing elements** (e.g., vocals + guitar)
2. **Monitor spectrum while both play**
3. **Look for overlap zones:**
   - Both showing red/yellow in same frequency range
   - Indicates masking/competition

**Common Masking Pairs:**
- **Kick & Bass** (60-100 Hz) - Most common issue
- **Vocals & Guitar** (1-3 kHz) - Clarity zone competition
- **Snare & Piano** (200-500 Hz) - Low-mid congestion
- **Hi-hats & Vocals** (6-10 kHz) - Sibilance zone clash

**Resolution Strategy:**
1. **Identify the primary element** (usually vocals, kick, or bass)
2. **Give it priority in contested zone:**
   - EQ boost primary element
   - EQ cut competing element in same zone
3. **Verify in Spectroman:**
   - Primary element should dominate the frequency range
   - Secondary element reduced in that zone

**Example: Vocal/Guitar Masking at 2-3 kHz**
- Boost vocal at 2.5 kHz (+2-3 dB)
- Cut guitar at 2.5 kHz (-2-3 dB)
- Result: Vocals sit "in front" of guitar

---

### 5. **Harmonic Content Analysis**

#### Understanding Overtone Distribution
**Purpose:** Verify instruments have proper harmonic character

**What to Look For:**

**Fundamental + Harmonics Pattern:**
- **Kick Drum:**
  - Fundamental: 50-80 Hz (strong red)
  - 2nd harmonic: 100-160 Hz (moderate)
  - Higher harmonics: Gradually decreasing
  
- **Bass Guitar:**
  - Fundamental: 60-120 Hz (note-dependent)
  - Even harmonics: Add warmth (120-250 Hz)
  - Odd harmonics: Add brightness (300-600 Hz)

- **Snare:**
  - Fundamental: 150-250 Hz (body)
  - Harmonics: 500 Hz - 5 kHz (snap and brightness)
  - Attack: 3-6 kHz (stick/rim attack)

**Analyzing Synth Patches:**
1. Solo the synth
2. Play sustained note
3. Observe harmonic distribution:
   - **Saw wave:** Full harmonic series (many overtones)
   - **Square wave:** Odd harmonics only
   - **Sine wave:** Fundamental only (single frequency)
   - **Triangle wave:** Weak odd harmonics

**Using This Knowledge:**
- Identify missing harmonics (dull sound)
- Spot excessive harmonics (harsh sound)
- Adjust filter cutoff and resonance to shape harmonics
- Add harmonic saturation to enhance character

---

## Best Practices

### DO's ✅

#### 1. **Use Spectroman as Confirmation, Not Primary Tool**
- Trust your ears first
- Use Spectroman to confirm what you hear
- Visual analysis supplements listening, doesn't replace it

#### 2. **Monitor at Consistent Volume**
- Spectrum changes with playback level
- Use the same monitoring volume for comparisons
- Prevents misleading visual information

#### 3. **Check Multiple Sources**
- Analyze on Master for overall balance
- Check individual channels to diagnose specific issues
- Compare groups (drums, vocals, synths) separately

#### 4. **Use Peak Hold for Transient Analysis**
- Enable peak hold to see momentary peaks
- Useful for identifying transient-heavy content
- Helps spot resonances and spikes

#### 5. **Cross-Reference with Metering**
- Use alongside Fruity Limiter for loudness
- Verify low-end with separate bass metering
- Combine with stereo imager for width analysis

#### 6. **Learn Genre-Specific Profiles**
- Study reference tracks in your genre
- Build mental library of "good" spectral shapes
- Understand your genre's frequency priorities:
  - Hip-hop: Strong 40-80 Hz, controlled mids
  - EDM: Extended sub-bass, bright top end
  - Rock: Strong mids, moderate bass
  - Jazz: Balanced, natural roll-off

---

### DON'Ts ❌

#### 1. **Don't Chase "Flat" Spectrum**
- Music is naturally unbalanced
- Different genres have different profiles
- A "flat" mix usually sounds wrong

#### 2. **Don't Mix with Spectroman as Primary Guide**
- You'll end up mixing with your eyes, not ears
- Visual can be misleading without context
- Trust the vibe, use spectrum for problem-solving

#### 3. **Don't Ignore Room Acoustics**
- Spectroman shows the signal, not what you hear
- Room modes affect what you hear, not what it shows
- Use in conjunction with proper monitoring

#### 4. **Don't Over-Analyze**
- Can lead to paralysis by analysis
- Small differences often don't matter musically
- Focus on glaring issues, not micro-details

#### 5. **Don't Compare at Different Volumes**
- Louder always looks "better" spectrally
- Level-match before comparisons
- Use LUFS/RMS meters to ensure equal loudness

#### 6. **Don't Use as Solo Mixing Tool**
- Combine with EQ, compressor metering
- Use frequency meters for surgical work
- Spectroman is overview, not precision tool

---

## Advanced Techniques

### Stereo Field Analysis (Vectorscope)

#### Phase Correlation Checking
**What to Look For:**
- **Vertical line:** Mono or center-heavy mix
- **Circular/oval:** Good stereo spread
- **Horizontal:** Over-widened, potential phase issues
- **Diagonal tilt:** Phase correlation problems

**Action Steps:**
1. Check vectorscope while playing mix
2. Verify bass/kick are centered (vertical component)
3. Confirm stereo elements show width (horizontal spread)
4. Test mono compatibility:
   - Switch to mono playback
   - If level drops significantly, you have phase issues
   - Reduce stereo widening or check polarity

#### Identifying Mono-Incompatible Elements
- Load mix, engage mono switch
- Watch for elements that disappear
- These are phase-cancelled in mono
- Fix by:
  - Reducing stereo width
  - Checking L/R polarity
  - Avoiding extreme stereo enhancement

---

### Frequency-Specific Isolation

#### Surgical Analysis Workflow
**When you need to focus on specific range:**

1. **Set Spectroman to zoom mode** (if available)
2. **Focus on problem range:**
   - Sub-bass check: 20-100 Hz
   - Mud check: 200-500 Hz
   - Clarity check: 2-5 kHz
   - Air check: 10-20 kHz

3. **Use alongside Parametric EQ 2:**
   - Sweep with narrow Q boost
   - Watch Spectroman for peak location
   - Cut problematic resonance

---

## Practical Mixing Workflow

### Real-World Integration

**Step 1: Initial Mix**
- Mix by ear without Spectroman
- Get 80% there using only listening

**Step 2: Visual Analysis**
- Open Spectroman on Master
- Identify obvious imbalances

**Step 3: Targeted Fixes**
- Address frequency buildups with EQ
- Verify low-end with sub-bass check
- Confirm changes in Spectroman

**Step 4: Reference Comparison**
- Load reference track
- A/B spectral profiles
- Make final balance adjustments

**Step 5: Final Check**
- One last visual sweep
- Trust your ears for final call
- Close Spectroman and listen fresh

---

## The Bottom Line

**Spectroman is most powerful when used strategically** - not as a constant visual crutch, but as a diagnostic tool to confirm suspicions, identify problems, and learn from reference tracks. Master the fundamentals (balance analysis, low-end monitoring, masking detection), avoid common pitfalls (chasing flat spectrum, mixing with eyes), and integrate it into a balanced workflow that prioritizes your ears while using visual feedback for validation and problem-solving.

**Golden Rule:** If it sounds good, it is good - Spectroman should confirm that, not dictate it.
