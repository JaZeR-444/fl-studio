# Common Mistakes

## Critical Analysis Mistakes

### ❌ 1. Visual-Only Decision Making
**Mistake:** Making mix decisions based solely on what Wave Candy shows
**Why It's Wrong:** Visual feedback is diagnostic, not prescriptive

**Correct Approach:**
1. **Listen first** - Identify the problem by ear
2. **Visualize second** - Use Wave Candy to understand what you're hearing
3. **Fix third** - Apply solution based on both audio and visual confirmation

**Example:** Don't boost 2kHz just because Spectrum shows a dip - listen to confirm it actually needs improvement.

### ❌ 2. Wrong Mode for the Task
**Mistake:** Using Spectrum for transient work, Oscilloscope for frequency analysis
**Why It's Wrong:** Each mode has specific strengths

**Mode Selection Guide:**
- **Frequency issues** → Spectrum mode
- **Transient shaping** → Oscilloscope mode  
- **Stereo/phase** → Vectorscope mode
- **Level monitoring** → Peak Meter mode

### ❌ 3. Inappropriate FFT Settings
**Mistake:** Using wrong FFT size for analysis type
**Why It's Wrong:** FFT size affects resolution vs. response time [SRC: IL-MAN]

**FFT Size Rules:**
- **Transient analysis:** 512-2048 (fast response)
- **General mixing:** 4096-8192 (good balance)
- **Precise frequency work:** 16384+ (high resolution)
- **Real-time monitoring:** 1024-2048 (responsive)

### ❌ 4. Ignoring Scale Settings
**Mistake:** Not adjusting amplitude/frequency scales
**Why It's Wrong:** Wrong scale hides important information

**Scale Optimization:**
- **Amplitude:** Adjust so relevant information is visible
- **Frequency:** Linear for precise work, Log for general mixing
- **Display:** Ensure critical information isn't off-screen

## Interface and Setup Mistakes

### ❌ 5. Display Placement Problems
**Mistake:** Wave Candy covering important workflow areas
**Why It's Wrong:** Disrupts creative flow and decision making

**Solutions:**
- **Always on Top:** Yes, but position strategically
- **Transparency:** 70-80% opacity for visibility without obstruction
- **Size:** Large enough to read, small enough to stay out of way
- **Multiple instances:** Place them logically, not randomly

### ❌ 6. Single-Mode Limitation
**Mistake:** Using only one mode for all analysis
**Why It's Wrong:** Missing critical information from other modes

**Multi-Mode Strategy:**
- **Master channel:** Spectrum + Vectorscope (frequency + stereo)
- **Drum editing:** Oscilloscope + Spectrum (transients + frequency)
- **Sound design:** All modes as needed
- **Final check:** Briefly check all modes

### ❌ 7. Ignoring CPU Impact
**Mistake:** Running too many instances without monitoring CPU
**Why It's Wrong:** Can cause audio glitches and dropouts [UNVERIFIED]

**CPU Management:**
- **One instance:** ~2-3% CPU usage
- **Three instances:** ~6-10% CPU usage
- **Monitor CPU** during intensive sessions
- **Close unused instances** when possible

## Analysis Interpretation Mistakes

### ❌ 8. Over-Interpreting Small Details
**Mistake:** Focusing on tiny spectral variations or minor visual anomalies
**Why It's Wrong:** Perfectionism leads to wasted time and unnatural results

**Focus on Meaningful Information:**
- **3dB+ changes** in Spectrum are usually audible
- **Obvious stereo width** differences in Vectorscope
- **Clear transient problems** in Oscilloscope
- **Significant level differences** in Peak Meter

### ❌ 9. Misreading Vectorscope Patterns
**Mistake:** Interpreting Vectorscope patterns incorrectly
**Why It's Wrong:** Leads to wrong stereo decisions

**Common Misinterpretations:**
- **Tall narrow ≠ Bad:** Often means good mono compatibility
- **Wide pattern ≠ Good:** Could indicate phase issues
- **Horizontal ≠ Wide:** Actually indicates out-of-phase content
- **Center ≠ Mono:** Could be dual-mono content

**Correct Reading:**
- **Vertical line:** Perfect mono (L = R exactly)
- **Wide circle:** Good stereo width, proper phase
- **Figure-8:** Out-of-phase content (problematic)
- **Scattered pattern:** Phase instability

### ❌ 10. Spectrum Display Type Errors
**Mistake:** Using wrong Spectrum display for the task
**Why It's Wrong:** Different displays show different information

**Display Selection:**
- **Rainbow:** Easiest to read general information
- **Grayscale:** Better for precise frequency analysis
- **Heatmap:** Shows energy concentration over time
- **Bar/Line:** Personal preference, both show frequency data

## Workflow and Process Mistakes

### ❌ 11. No Reference Comparison
**Mistake:** Analyzing your mix without reference tracks
**Why It's Wrong:** No target to aim for, working blind

**Reference Strategy:**
1. **Load reference track** (same genre)
2. **Analyze with Wave Candy** 
3. **Screenshot reference state**
4. **Compare your mix** to reference visuals
5. **Target reference characteristics**

### ❌ 12. Before/After Ignoring
**Mistake:** Not bypassing plugins to confirm improvements
**Why It's Wrong:** Can't verify if your changes actually helped

**A/B Process:**
1. **Note current state** in Wave Candy
2. **Apply processing**
3. **Observe change** in Wave Candy
4. **Bypass processing** - does it get worse?
5. **Confirm improvement** both visually and audibly

### ❌ 13. Screenshot Documentation Missing
**Mistake:** Not documenting mix states with screenshots
**Why It's Wrong:** Lose valuable reference material for learning

**Screenshot Strategy:**
- **Initial state:** Before processing
- **After major changes:** EQ, compression, stereo work
- **Reference tracks:** Target characteristics
- **Final mix:** Completion state
- **Before mastering:** Pre-master reference

## Technical and Configuration Mistakes

### ❌ 14. Wrong Buffer Settings
**Mistake:** FL Studio buffer size affecting Wave Candy responsiveness
**Why It's Wrong:** Can cause display lag or stuttering

**Buffer Guidelines:**
- **512 samples:** Good balance of responsiveness and stability
- **128-256 samples:** Most responsive (for precise work)
- **1024+ samples:** May cause display lag in Wave Candy

### ❌ 15. Plugin Chain Order Issues
**Mistake:** Wave Candy in wrong position in plugin chain
**Why It's Wrong:** Analyzing wrong signal point

**Correct Placement:**
- **Master Channel:** End of chain (final mix analysis)
- **Individual Tracks:** End of chain (after all processing)
- **Send/Return:** On return channel (after effects)
- **Before/After:** Place Wave Candy before and after plugins to compare

### ❌ 16. Multiple Instance Confusion
**Mistake:** Multiple instances analyzing same thing, or wrong tracks
**Why It's Wrong:** Wasted CPU and confusing information

**Multi-Instance Strategy:**
- **Instance 1:** Master channel (overall mix)
- **Instance 2:** Current working track (focused analysis)
- **Instance 3:** Reference track (target comparison)
- **Label each instance** clearly in FL Studio

## Genre-Specific Mistakes

### ❌ 17. Hip-Hop Low-End Mismanagement
**Mistake:** Treating 808s like regular bass in analysis
**Why It's Wrong:** 808s have different frequency characteristics

**Hip-Hop Low-End Guidelines:**
- **808s:** Check 20-60Hz region (not 60-100Hz)
- **Kick vs 808:** Look for frequency overlap and masking
- **Sub information:** Use Spectrum zoom for 20-80Hz region
- **Mono compatibility:** Subs should be nearly mono (Vectorscope)

### ❌ 18. Vocal Analysis in Dense Mixes
**Mistake:** Expecting clear vocal frequency representation
**Why It's Wrong:** Dense mixes mask vocal frequency information

**Dense Mix Strategy:**
- **Isolate vocals** temporarily for analysis
- **Focus on 2-5kHz region** for vocal presence
- **Compare with/without vocals** to see masking
- **Use EQ to create space** if vocal is masked

## Recovery and Correction

### If You Made These Mistakes:

1. **Stop and listen** - Reset your ears
2. **Reset Wave Candy** settings to defaults
3. **Load reference track** for comparison
4. **Document current state** with screenshots
5. **Make one change at a time** with A/B verification

### Prevention Strategies:
1. **Always listen first, analyze second**
2. **Use reference tracks religiously**
3. **Document your work** with screenshots
4. **Question visual decisions** with ear confirmation
5. **Start simple** - one instance, basic settings

Remember: Wave Candy is a tool to help you hear better, not replace your hearing. The best results come from using your ears and eyes together effectively.