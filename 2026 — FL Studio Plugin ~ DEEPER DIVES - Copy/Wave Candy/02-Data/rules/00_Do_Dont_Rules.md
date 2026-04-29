# Do Don't Rules

## Core Analysis Rules

### ✅ DO: Listen First, Analyze Second
**Rule:** Always identify problems by ear before using Wave Candy
**Why:** Visual feedback is diagnostic, not prescriptive
**Example:** Don't boost 2kHz just because Spectrum shows a dip - listen to confirm it actually needs improvement

### ❌ DON'T: Make Visual-Only Decisions
**Rule:** Never make mix decisions based solely on what Wave Candy shows
**Why:** Visual patterns can be misleading without audio context
**Example:** A wide Vectorscope pattern might look good but could indicate phase issues

### ✅ DO: Use Reference Tracks
**Rule:** Always analyze commercial reference tracks in Wave Candy
**Why:** Provides targets for frequency balance, stereo width, and dynamics
**Example:** Load a similar genre track and screenshot its Spectrum for comparison

### ❌ DON'T: Ignore Your Ears
**Rule:** Never trust Wave Candy over your own hearing
**Why:** Visual analysis tools can't judge musicality or emotional impact
**Example:** If it sounds right but looks "wrong" on Wave Candy, trust the sound

## Mode Selection Rules

### ✅ DO: Use Right Mode for Task
**Rule:** Select appropriate mode for specific analysis needs
**Why:** Each mode has specific strengths and optimal use cases
**Example:** Use Spectrum for frequency work, Oscilloscope for transients, Vectorscope for stereo

### ❌ DON'T: Use One Mode for Everything
**Rule:** Don't rely on single display mode for all analysis
**Why:** Missing critical information from other modes
**Example:** Using only Spectrum for stereo work misses phase correlation data

### ✅ DO: Combine Modes for Complete Picture
**Rule:** Use multiple modes simultaneously when possible
**Why:** Different modes reveal different aspects of the audio
**Example:** Spectrum + Vectorscope for frequency and stereo analysis

### ❌ DON'T: Misinterpret Mode Information
**Rule:** Understand what each mode is actually showing
**Why:** Misinterpretation leads to wrong processing decisions
**Example:** Vectorscope horizontal line doesn't mean "wide stereo" - it means out of phase

## Settings and Configuration Rules

### ✅ DO: Optimize Settings for Task
**Rule:** Adjust Wave Candy settings based on what you're analyzing
**Why:** Default settings aren't optimal for all situations
**Example:** Use larger FFT size for precise frequency work, smaller for transient analysis

### ❌ DON'T: Use Wrong FFT Size
**Rule:** Don't use inappropriate FFT size for analysis type
**Why:** FFT size affects resolution vs response time tradeoff
**Example:** Using 16384 FFT for transient work gives slow, unresponsive display

### ✅ DO: Adjust Scales Appropriately
**Rule:** Set amplitude and frequency scales to show relevant information
**Why:** Wrong scales hide important details
**Example:** Increase amplitude range if display is clipped, decrease if too quiet

### ❌ DON'T: Ignore Display Scaling
**Rule:** Don't leave default scales if they don't show what you need
**Why:** You might miss critical information that's off-screen
**Example:** Not seeing low-frequency buildup because amplitude range is too high

## Workflow and Process Rules

### ✅ DO: Document with Screenshots
**Rule:** Take screenshots at key mix stages
**Why:** Creates reference material and tracks progress
**Example:** Screenshot before/after major EQ moves for learning

### ❌ DON'T: Skip A/B Testing
**Rule:** Always bypass processing to confirm improvements
**Why:** Can't verify if changes actually helped without comparison
**Example:** Apply EQ, watch Wave Candy change, but bypass to confirm it sounds better

### ✅ DO: Use Multi-Instance Setup
**Rule:** Run multiple Wave Candy instances for comprehensive analysis
**Why:** Allows simultaneous monitoring of different aspects
**Example:** Master channel Spectrum + current track Oscilloscope

### ❌ DON'T: Overload CPU
**Rule:** Monitor CPU usage with multiple instances
**Why:** Too many instances can cause audio glitches
**Example:** Running 5+ instances on older system might cause dropouts

## Genre and Vibe Rules

### ✅ DO: Understand Genre Characteristics
**Rule:** Know what different genres should look like on Wave Candy
**Why:** Different genres have different frequency and stereo characteristics
**Example:** Hip-hop needs strong low-mid presence, acoustic jazz needs natural balance

### ❌ DON'T: Apply Same Standards to All Genres
**Rule:** Don't expect all music to look the same on analysis tools
**Why:** Genre diversity requires different visual targets
**Example:** Electronic music might have wider stereo than acoustic jazz

### ✅ DO: Consider Vibe in Analysis
**Rule:** Adjust analysis targets based on intended emotional impact
**Why:** Different vibes require different frequency and stereo characteristics
**Example:** Moody tracks need darker frequency balance than upbeat tracks

### ❌ DON'T: Chase "Perfect" Visual Patterns
**Rule:** Don't aim for textbook-perfect Wave Candy displays
**Why:** Musical character often comes from "imperfect" characteristics
**Example:** Slight frequency irregularities can create character and interest

## Technical and Safety Rules

### ✅ DO: Monitor System Performance
**Rule:** Watch CPU usage when running multiple instances
**Why:** Prevent audio glitches and system instability
**Example:** Close unused instances if CPU gets high

### ❌ DON'T: Ignore Buffer Settings
**Rule:** Don't forget that FL Studio buffer affects Wave Candy responsiveness
**Why:** Large buffers can cause display lag
**Example:** 1024 sample buffer might make Wave Candy feel sluggish

### ✅ DO: Verify Plugin Chain Order
**Rule:** Place Wave Candy at correct point in signal chain
**Why:** Analyzing wrong signal point gives misleading information
**Example:** Place at end of chain to analyze final processed signal

### ❌ DON'T: Assume Wave Candy Processes Audio
**Rule:** Remember Wave Candy is monitoring only, doesn't change sound
**Why:** Prevents confusion about what's actually affecting audio
**Example:** Changing Wave Candy settings won't affect your mix sound

## Professional Practice Rules

### ✅ DO: Develop Consistent Workflow
**Rule:** Create standardized Wave Candy usage patterns
**Why:** Consistency leads to better results and faster work
**Example:** Always start with Spectrum, move to Vectorscope for stereo work

### ❌ DON'T: Chase Visual Perfection
**Rule:** Don't spend hours tweaking for perfect visual patterns
**Why:** Musical results matter more than visual aesthetics
**Example:** Don't EQ just to make Spectrum look "perfect"

### ✅ DO: Learn from Reference Analysis
**Rule:** Study professional tracks to understand visual targets
**Why:** Commercial mixes provide proven frequency and stereo targets
**Example:** Analyze hit songs in your genre to see typical patterns

### ❌ DON'T: Copy Reference Patterns Blindly
**Rule:** Don't try to exactly replicate reference track visual patterns
**Why:** Your track has different content and needs
**Example:** Reference track has different instrumentation, so Spectrum will differ

## Learning and Development Rules

### ✅ DO: Use Wave Candy for Learning
**Rule:** Use Wave Candy to understand audio fundamentals
**Why:** Visual feedback helps learn frequency and stereo concepts
**Example:** Watch Spectrum while sweeping filters to see frequency response

### ❌ DON'T: Become Dependent on Visuals
**Rule:** Don't let Wave Candy become a crutch for poor monitoring
**Why:** Should enhance, not replace, good listening skills
**Example:** If you can't hear problems without Wave Candy, work on ear training

### ✅ DO: Experiment with Settings
**Rule:** Try different configurations to understand their effects
**Why:** Hands-on experience teaches more than reading about settings
**Example:** Change FFT size while playing audio to see resolution vs response tradeoff

### ❌ DON'T: Stick to Default Settings
**Rule:** Don't always use default Wave Candy configuration
**Why:** Defaults are general-purpose, not optimized for specific tasks
**Example:** Default FFT size might not be ideal for your current analysis needs

## Emergency and Troubleshooting Rules

### ✅ DO: Reset When Confused
**Rule:** Return to default settings if display doesn't make sense
**Why:** Resets any accidental configuration changes
**Example:** If Spectrum looks strange, right-click and reset to defaults

### ❌ DON'T: Ignore Display Problems
**Rule:** Don't continue working if Wave Candy display seems wrong
**Why:** Could indicate technical issues affecting your analysis
**Example:** If display freezes or shows strange patterns, restart plugin

### ✅ DO: Verify Signal Flow
**Rule:** Confirm audio is actually reaching Wave Candy
**Why:** No signal = no useful analysis
**Example:** If display is flat, check that track is routed to Wave Candy input

### ❌ DON'T: Assume Display is Accurate
**Rule:** Question Wave Candy if results don't match what you hear
**Why:** Technical issues could cause misleading displays
**Example:** If Wave Candy shows phase issues but track sounds fine, verify setup

## Remember: Wave Candy is a Tool, Not a Judge

These rules help you use Wave Candy effectively as part of a professional mixing workflow. The goal is better-sounding music, not prettier visual displays. Trust your ears first, use Wave Candy to understand what you're hearing, and make decisions based on musical impact rather than visual perfection.