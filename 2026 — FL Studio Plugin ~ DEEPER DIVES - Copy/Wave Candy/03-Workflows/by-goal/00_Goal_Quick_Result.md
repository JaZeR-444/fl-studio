# Goal: Quick Result

## Overview
Get immediate visual feedback on your mix using Wave Candy's most efficient analysis setup. Perfect for quick checks and identifying obvious mix issues.

## Routing Context
- **Master Channel:** Primary Wave Candy instance
- **Audio Source:** Full mix output
- **Plugin Position:** End of master chain
- **Secondary:** Optional instance on current working track

## Step-by-Step Setup

### Step 1: Add and Position (1 minute)
1. **Add Wave Candy** to Master channel
2. **Set "Always on Top"** (right-click interface)
3. **Position** upper-right corner
4. **Set transparency** to 80%

### Step 2: Quick Configuration (2 minutes)
1. **Switch to Spectrum mode**
2. **Set FFT Size:** 4096
3. **Set Scale:** Logarithmic
4. **Set Amplitude:** -60dB to +12dB
5. **Set Display:** Rainbow

### Step 3: Baseline Analysis (2 minutes)
1. **Play your track** at normal mixing level
2. **Observe frequency balance** in Spectrum
3. **Look for obvious issues:**
   - Sharp peaks (resonances)
   - Missing areas (holes)
   - Excessive buildups
   - Clipping indicators

### Step 4: Quick Fixes (3 minutes)
Based on what you see:

#### If Too Bright
- **Add EQ:** High-shelf cut -3dB at 8kHz
- **Watch Spectrum:** High frequencies should reduce
- **Listen:** Should sound less harsh

#### If Too Dark
- **Add EQ:** High-shelf boost +2dB at 10kHz
- **Watch Spectrum:** High frequencies should rise
- **Listen:** Should gain clarity and air

#### If Low-Mid Mud
- **Add EQ:** Cut -3dB at 250Hz
- **Watch Spectrum:** 200-400Hz region should flatten
- **Listen:** Should clean up low-mid buildup

#### If Vocals Lost
- **Add EQ:** Boost +2dB at 3kHz
- **Watch Spectrum:** 2-5kHz should rise
- **Listen:** Vocals should cut through mix

## Starting Settings

### Spectrum Quick Analysis
```
Mode: Spectrum
FFT Size: 4096
Frequency Scale: Logarithmic
Amplitude Range: -60dB to +12dB
Display Type: Rainbow
Smoothing: Medium
Peak Hold: On (2 seconds)
```

### What to Listen For
- **Overall Balance:** Does mix sound balanced?
- **Clarity:** Can you hear all elements?
- **Harshness:** Any painful frequencies?
- **Low-End:** Too much or too little bass?

### What to Look For
- **Smooth Curve:** Natural frequency response
- **No Spikes:** No sharp resonances
- **Balanced Mids:** Good presence without harshness
- **Controlled Highs:** Air without harshness

## Variations

### Variation 1: Stereo Quick Check
1. **Switch to Vectorscope**
2. **Play full mix**
3. **Check for:**
   - Good center density (mono compatibility)
   - Appropriate width (not too wide/narrow)
   - No phase issues (avoid horizontal patterns)

### Variation 2: Transient Quick Check
1. **Switch to Oscilloscope**
2. **Focus on drums section**
3. **Look for:**
   - Sharp attack transients
   - Clean waveform shapes
   - No clipping (flat-topped waves)

## Pitfalls & Fixes

### Pitfall: Display Too Crowded
**Problem:** Too much information, hard to read
**Fix:** Increase amplitude range or zoom frequency range

### Pitfall: Can't See Issues
**Problem:** Display looks fine but mix sounds wrong
**Fix:** Adjust amplitude range to focus on problem areas

### Pitfall: Over-Processing
**Problem:** Keep EQing based on visuals, mix gets worse
**Fix:** Trust your ears more than eyes, make smaller moves

### Pitfall: Wrong Analysis Mode
**Problem:** Using Spectrum when you need stereo information
**Fix:** Switch to appropriate mode for the task

## Automation Ideas

### 1. Frequency Focus Automation
- **Automate frequency zoom** to focus on different ranges
- **Use during mix review** to examine each frequency area

### 2. Display Type Switching
- **Automate between Rainbow/Grayscale** for different perspectives
- **Use Rainbow for energy**, **Grayscale for detail**

## Quick Decision Tree

```
See Problem in Spectrum?
├── Sharp Peak → Find frequency → Narrow EQ cut
├── Missing Area → Find hole → Gentle EQ boost  
├── Too Bright → High-shelf cut
├── Too Dark → High-shelf boost
└── Looks Good → Trust ears, move on
```

## Time-Saving Tips

### Use Presets
- **Save "Quick Analysis" preset** with optimal settings
- **Load instantly** for any project

### Keyboard Shortcuts
- **Space:** Pause/Resume display
- **R:** Reset to default
- **S:** Screenshot current state

### Multi-Instance Setup
- **Instance 1:** Master (always on)
- **Instance 2:** Current track (when needed)

## Success Indicators

### You're Successful When:
- ✅ Mix sounds better after visual-guided changes
- ✅ Can identify frequency issues quickly
- ✅ Spectrum shows smooth, balanced curves
- ✅ Analysis took less than 10 minutes
- ✅ Changes made were 1-3dB maximum

### Stop When:
- Mix sounds good visually and audibly
- Obvious problems are solved
- Further changes make minimal difference
- You're overthinking small visual details

## Next Steps

After Quick Result:
1. **Document with screenshot** if important change made
2. **Move to detailed analysis** if major issues remain
3. **Continue with vibe-specific workflows** for character
4. **Use Reference Analysis** to match professional standards

Remember: The goal of "Quick Result" is fast, effective improvement. Small, targeted changes based on clear visual feedback work better than major overhauls. Trust your ears to confirm that visual improvements actually sound better.