# Fruity Center - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# Fruity Center - DC Offset Remover

`\`\`
███████╗██████╗ ██╗   ██╗██╗████████╗██╗   ██╗     ██████╗███████╗███╗   ██╗████████╗███████╗██████╗ 
██╔════╝██╔══██╗██║   ██║██║╚══██╔══╝╚██╗ ██╔╝    ██╔════╝██╔════╝████╗  ██║╚══██╔══╝██╔════╝██╔══██╗
█████╗  ██████╔╝██║   ██║██║   ██║    ╚████╔╝     ██║     █████╗  ██╔██╗ ██║   ██║   █████╗  ██████╔╝
██╔══╝  ██╔══██╗██║   ██║██║   ██║     ╚██╔╝      ██║     ██╔══╝  ██║╚██╗██║   ██║   ██╔══╝  ██╔══██╗
██║     ██║  ██║╚██████╔╝██║   ██║      ██║       ╚██████╗███████╗██║ ╚████║   ██║   ███████╗██║  ██║
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝   ╚═╝      ╚═╝        ╚═════╝╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚══════╝╚═╝  ╚═╝
`\`\`

**Plugin Type:** Utility / Restoration
**Category:** Utility / Mixing
**Official Manual:** [Image-Line Fruity Center Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Center.htm)

---

## 🎯 What is Fruity Center?

Fruity Center is a single-purpose utility plugin designed to remove **DC Offset**. DC Offset occurs when an audio waveform is not centered on the 0-line, which can reduce headroom and cause clicks/pops during editing. Fruity Center re-centers the waveform in real-time. It is essential when working with poor-quality recordings or hardware synthesizers that have electrical bias.

**Key Capabilities:**
- **DC Removal:** Centers the waveform vertically.
- **Zero Latency:** Works in real-time.
- **Simple:** No controls (usually), just turn it on.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **what-is-dc-offset.md**
3. Create **parameter-cheat-sheet.md**
4. Load a sample with DC offset (if you can find one) and watch it center in Wave Candy.

### For Recording Engineers:
1. Study **diagnosing-dc-offset.md**
2. Review **headroom-benefits.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Recenter:** (Some versions might have a switch, others are automatic).

- [ ] **what-is-dc-offset.md**
  - Visual diagram of an offset wave vs a centered wave.
  - Why it eats headroom.

#### 02-Data/parameters/
- [ ] **center-specs.json**
  `\`\`json
  {
    "plugin_name": "Fruity Center",
    "function": "High-Pass Filter / DC Blocker"
  }
  `\`\`

---

## 🔬 Research Framework

### Phase 1: Diagnosis (Week 1)
**Goal:** Identification

**Tasks:**
1. Create a DC offset using Fruity Formula Controller (add constant value to audio?) - *Advanced task*.
2. Observe the offset in Wave Candy (Oscilloscope)
3. Add Fruity Center
4. Watch the line jump back to 0
5. Create what-is-dc-offset.md

---

## 📊 Plugin Specifications to Document

### Engine
- Latency (0 ms)
- Filter Frequency (< 10Hz?)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Do I need this on every track? (No, only on bad recordings).
2. Can't Edison do this? (Yes, Edison removes DC offline; Fruity Center does it realtime).

---

## 🔗 Cross-Reference with Other Plugins

Fruity Center is often used with:
- **Edison** (Offline removal)
- **Fruity WaveShaper** (Can create or fix DC offset)

---

## 📦 File Structure Summary

`\`\`
Fruity Center/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── what-is-dc-offset.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── center-specs.json
│
└── 04-Reference/
    └── headroom-benefits.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Fruity Center Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Center.htm)
- [Fruity Center Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Fruity_Center_tutorials.htm)
- [Fruity Center Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+fruity+center+tutorial)

### Community Resources
- [Fruity Center Subreddit](https://www.reddit.com/r/FL_Studio/search?q=fruity+center&restrict_sr=1)
- [Fruity Center User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Fruity Center Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for detailed audio analysis and DC offset removal
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity Parametric EQ 2** for tone shaping
- **Fruity Limiter** for monitoring output levels

### Recommended Learning Materials
- "DC Offset Fundamentals" - Understanding DC offset and its effects
- "Audio Restoration Techniques" - Methods for fixing audio issues
- "Headroom Management" - Maximizing available dynamic range

### Advanced Techniques
- **DC Offset Detection:** Identifying DC offset in audio signals
- **Real-time Correction:** Using Fruity Center for live correction
- **Headroom Optimization:** Maximizing available dynamic range

---

## 📚 In-Depth Technical Analysis

### DC Offset Explanation
DC Offset occurs when an audio signal is shifted vertically from the 0-axis, causing the waveform to be unbalanced:

**What is DC Offset:**
- A constant voltage shift in the audio signal
- Causes the waveform to be centered above or below the 0-axis
- Reduces available headroom in the signal
- Can cause clicks/pops during editing
- May cause issues with some audio processing

**Causes of DC Offset:**
- Poor quality audio interfaces
- Faulty hardware preamps
- Analog-to-digital converter issues
- Ground loop problems
- Defective cables or connections
- Vintage equipment with DC bias

**Effects of DC Offset:**
- Reduced headroom (less available dynamic range)
- Potential clipping at lower levels
- Clicks/pops during editing and crossfades
- Inefficient use of bit depth
- Possible damage to speakers or headphones

### Signal Processing Architecture
Fruity Center implements a high-pass filter to remove DC offset:

**Filter Type:**
- High-pass filter with very low cutoff frequency
- Typically set below 10Hz to preserve all audio content
- Minimal phase shift in audible frequencies
- Zero latency operation
- Linear phase response in audible range

**Processing Chain:**
- **Input Stage:** Receives audio signal
- **High-Pass Filter:** Removes DC component
- **Output Stage:** Sends corrected signal

**Frequency Response:**
- Cutoff frequency: Below 10Hz (typically 2-5Hz)
- Slope: Steep enough to remove DC completely
- Passband: Flat response above cutoff
- Phase: Minimal phase shift in audible range

### Algorithm Implementation
The DC removal algorithm works as follows:
- **Continuous Monitoring:** Constantly analyzes signal centering
- **Real-time Correction:** Instantly removes DC component
- **Adaptive Processing:** Adjusts to changing DC levels
- **Zero Latency:** No delay in processing
- **Preservation:** Maintains all audio content above cutoff

## 🎛️ Parameter Deep Dive

### Processing Controls
- **DC Removal:** Automatic DC offset removal
  - Function: Removes DC component from signal
  - Range: Always active when plugin is enabled
  - Effect: Centers waveform on 0-axis
  - Use for: Fixing offset issues in real-time
  - Pro tip: Essential for signals with DC offset issues
- **Behavior:**
  - Always active when plugin is inserted
  - No user-adjustable parameters in most versions
  - Automatic correction of DC offset
  - Pro tip: Works silently in the background
- **Applications:**
  - Fixing poor recordings: Corrects offset issues
  - Hardware integration: Fixes DC bias from equipment
  - Live performance: Prevents offset issues during performance
  - Mix preparation: Ensures clean signals before mixing
  - Pro tip: Use on tracks with suspected DC offset

### Advanced Processing Features
- **Latency:** Zero latency operation
  - Range: 0 samples
  - Effect: No timing delay
  - Use for: Real-time processing without delay
  - Pro tip: Safe for all applications
- **Frequency Response:**
  - Cutoff: Below 10Hz (typically 2-5Hz)
  - Slope: Steep enough to remove DC completely
  - Passband: Flat above cutoff frequency
  - Pro tip: Preserves all audible content

### Signal Analysis
- **Offset Detection:** Identifies DC offset in signal
  - Method: Analyzes average signal level
  - Range: Any DC offset amount
  - Effect: Determines correction amount
  - Use for: Diagnosing offset issues
  - Pro tip: Use with oscilloscope for visual confirmation
- **Correction Application:**
  - Method: High-pass filtering
  - Speed: Real-time application
  - Accuracy: Precise centering on 0-axis
  - Pro tip: Correction is immediate and continuous

## 🎼 Audio Restoration Applications

### DC Offset Correction
Using Fruity Center for audio restoration:

**Recording Issues:**
- Fixing DC offset from poor audio interfaces
- Correcting offset from faulty preamps
- Removing ground loop induced offset
- Addressing converter DC bias issues
- Essential for professional audio quality

**Hardware Integration:**
- Correcting offset from vintage equipment
- Fixing issues with budget audio interfaces
- Managing DC bias from tube preamps
- Addressing grounding issues
- Critical for clean hardware integration

**Live Performance:**
- Preventing offset issues during live sets
- Managing DC bias from external gear
- Ensuring clean signals during performance
- Avoiding clicks and pops
- Essential for professional live performance

### Headroom Management
Using Fruity Center for headroom optimization:

**Dynamic Range Preservation:**
- Restoring lost headroom from DC offset
- Maximizing available dynamic range
- Preventing premature clipping
- Optimizing bit depth utilization
- Essential for professional mixing

**Mix Preparation:**
- Ensuring clean signals before mixing
- Removing offset from multiple tracks
- Optimizing headroom for bus processing
- Preventing cumulative offset issues
- Critical for professional mixing workflows

**Mastering Preparation:**
- Ensuring DC-free signals for mastering
- Maximizing available headroom
- Preventing offset from affecting master
- Optimizing for final processing
- Essential for professional mastering

## 🧪 Diagnostic Techniques

### DC Offset Detection
Methods for identifying DC offset in audio:

**Visual Analysis:**
- Use oscilloscope to visualize waveform centering
- Look for waveform shifted above or below 0-axis
- Identify consistent offset across signal
- Compare with known clean signals
- Essential for accurate diagnosis

**Spectrum Analysis:**
- Look for energy at 0Hz in spectrum analyzer
- Identify DC component in frequency domain
- Compare with normal spectrum shape
- Use for quantitative analysis
- Useful for confirming offset presence

**Measurement Tools:**
- Use DC voltage meters for hardware analysis
- Employ audio analyzers for detailed analysis
- Compare with reference signals
- Quantify offset amount
- Critical for technical assessment

### Correction Verification
Methods for verifying DC offset correction:

**Before/After Comparison:**
- A/B compare signals with and without correction
- Listen for subtle changes in low-end
- Compare visual representations
- Measure DC component removal
- Essential for quality assurance

**Oscilloscope Monitoring:**
- Observe waveform centering improvement
- Verify centering on 0-axis
- Monitor for stability over time
- Compare with known centered signals
- Critical for visual confirmation

**Spectrum Analysis:**
- Verify removal of 0Hz component
- Confirm flat response at low frequencies
- Compare before/after spectrum
- Measure residual DC content
- Essential for technical verification

## 🎚️ Workflow Optimization

### Integration Workflows
Efficient approaches to using Fruity Center:

**Channel Insertion:**
- Insert on channels with suspected DC offset
- Use on tracks from hardware sources
- Apply to recordings with offset issues
- Essential for clean signal chains
- Pro tip: Insert early in chain to prevent propagation

**Bus Processing:**
- Use on buses with multiple offset sources
- Apply to master bus for final correction
- Essential for cumulative offset management
- Pro tip: Use sparingly on buses to avoid unnecessary processing

**Template Integration:**
- Include in project templates for common use
- Set up for specific hardware configurations
- Essential for consistent workflows
- Pro tip: Create templates for different recording setups

### Diagnostic Workflows
Working with other tools and plugins:

**Analysis Integration:**
- Use with oscilloscope plugins for visual feedback
- Combine with spectrum analyzers for detailed analysis
- Compare with reference signals
- Essential for accurate diagnosis
- Pro tip: Use multiple analysis tools for confirmation

**Correction Workflows:**
- Identify offset with analysis tools
- Apply Fruity Center for real-time correction
- Verify correction with analysis tools
- Essential for complete workflow
- Pro tip: Document correction for future reference

**Quality Control:**
- Check all tracks for DC offset
- Verify correction effectiveness
- Monitor for new offset issues
- Essential for professional quality
- Pro tip: Include in quality control checklist

## 🎧 Genre-Specific Applications

### Electronic Music
- **Hardware Integration:** Correcting offset from analog synths
- **Sample Processing:** Fixing offset in sample libraries
- **Mix Preparation:** Ensuring clean signals for mixing
- **Mastering:** Preparing DC-free signals for mastering
- **Live Performance:** Preventing offset issues during sets

### Hip-Hop and R&B
- **Vocal Processing:** Correcting offset in vocal recordings
- **Sample Restoration:** Fixing offset in hip-hop samples
- **Mix Preparation:** Ensuring clean vocal chains
- **Mastering:** Preparing professional masters
- **Hardware Integration:** Managing analog gear offset

### Rock and Metal
- **Guitar Processing:** Correcting offset from guitar amps
- **Bass Processing:** Fixing offset from bass amps
- **Drum Processing:** Ensuring clean drum recordings
- **Mix Preparation:** Preparing clean tracks for mixing
- **Mastering:** Creating professional masters

### Ambient and Experimental
- **Atmospheric Processing:** Ensuring clean ambient recordings
- **Field Recording:** Correcting offset from portable recorders
- **Sound Design:** Maintaining clean signals during design
- **Mastering:** Preparing pristine masters
- **Creative Applications:** Using for subtle restoration

## 🔄 Integration with Other Plugins

### Analysis Integration
Fruity Center works well with analysis tools:
- **Oscilloscope Plugins:** For visual DC offset detection
- **Spectrum Analyzers:** For frequency domain analysis
- **Level Meters:** For DC voltage measurement
- **Phase Meters:** For offset-related phase issues
- **Correlation Meters:** For stereo field analysis

### Restoration Chain Integration
Integration with other restoration tools:
- **Noise Reduction:** Combining with noise reduction
- **Click Removal:** Using with click/pop removal
- **Equalization:** Combining with EQ for tone correction
- **Compression:** Using after DC correction
- **Limiting:** Applying after DC correction

### Effects Processing
Working with other effects:
- **Reverb:** Using after DC correction to prevent issues
- **Delay:** Ensuring clean signals before delay processing
- **Filtering:** Combining with other filtering
- **Modulation:** Using with chorus, flanger, phaser
- **Distortion:** Applying before distortion to prevent DC amplification

## 📖 Historical Context

### Development Background
Fruity Center was developed as a simple but essential utility plugin:
- Created to address DC offset issues in audio
- Designed for real-time correction
- Developed with minimal CPU usage in mind
- Intended to complement other restoration tools

### Evolution Through FL Studio Versions
- Initially introduced with basic DC removal
- Enhanced with improved algorithm quality
- Improved with better stability and reliability
- Maintained simplicity while improving performance

### Impact on Music Production
Fruity Center has influenced music production by:
- Providing accessible DC offset correction
- Enabling real-time restoration
- Facilitating integration of hardware with software
- Supporting professional audio quality standards

## 🧠 Advanced Restoration Techniques

### DC Offset Analysis
Advanced techniques for DC offset analysis:
- **Quantitative Measurement:** Measuring exact DC offset amounts
- **Frequency Domain Analysis:** Understanding DC in spectrum
- **Temporal Analysis:** Tracking offset changes over time
- **Statistical Analysis:** Understanding offset patterns
- **Comparative Analysis:** Comparing with reference signals

### Correction Strategies
Advanced DC offset correction techniques:
- **Preventive Measures:** Preventing offset at source
- **Corrective Processing:** Fixing existing offset issues
- **Cumulative Management:** Managing multiple offset sources
- **Quality Assurance:** Verifying correction effectiveness
- **Workflow Integration:** Including in standard workflows

### Signal Integrity
Advanced signal integrity techniques:
- **Preservation:** Maintaining signal quality during correction
- **Monitoring:** Continuous monitoring for offset issues
- **Verification:** Confirming correction effectiveness
- **Optimization:** Maximizing headroom after correction
- **Integration:** Including in signal chain optimization

## 📊 Performance Considerations

### CPU Usage
Managing Fruity Center's impact on system performance:
- **Minimal CPU Load:** Very low processing overhead
- **Real-Time Performance:** Optimized for live performance
- **Instance Count:** Multiple instances have negligible impact
- **Optimization Strategies:** Techniques for performance
- **Efficiency Settings:** No settings to optimize (fixed algorithm)

### Audio Quality
Maintaining audio quality during processing:
- **Zero Latency:** No timing delays
- **Phase Response:** Minimal phase shift in audible range
- **Frequency Response:** Flat response above cutoff
- **Signal Integrity:** Preserves all audio content
- **Artifact Prevention:** No processing artifacts

### System Integration
Optimizing Fruity Center within the system:
- **Buffer Management:** Works with any buffer settings
- **Threading:** Minimal processing thread usage
- **Driver Compatibility:** Works with all audio drivers
- **Latency Management:** No additional latency

## 🛠️ Troubleshooting Common Issues

### DC Offset Problems
- **Persistent Offset:** Verify plugin is active and functioning
- **Incomplete Correction:** Check for multiple offset sources
- **Phase Issues:** Verify stereo field and correlation
- **Residual Offset:** Use Edison for offline analysis
- **Hardware Issues:** Check audio interface and connections

### Technical Issues
- **No Audible Change:** DC offset may be minimal or absent
- **Plugin Not Working:** Verify insertion and activation
- **Compatibility:** Check with current FL Studio version
- **Performance:** Minimal impact on system performance
- **Integration:** Works with all signal types

### Creative Issues
- **Unnecessary Processing:** Only use when DC offset is present
- **Over-Processing:** Fruity Center has no adjustable parameters
- **Quality Concerns:** Algorithm is optimized for quality
- **Integration:** Works transparently in signal chain

## 🎚️ Advanced Configuration

### Diagnostic Setup
Creating and managing diagnostic configurations:
- **Analysis Chains:** Combining with analysis tools
- **Quality Control:** Including in QC workflows
- **Template Integration:** Including in project templates
- **Hardware Setup:** Configuring for specific hardware

### Integration Configurations
Optimizing for different integration scenarios:
- **Channel Processing:** Inline processing configurations
- **Bus Processing:** Bus-level DC correction
- **Hardware Integration:** External hardware integration
- **DAW Integration:** Optimizing for FL Studio workflow

## 🌐 Community and Resources

### Online Communities
- **FL Studio Forums:** Discussions about DC offset and correction
- **Reddit Groups:** Sharing restoration techniques and workflows
- **Discord Servers:** Real-time collaboration and feedback

### Educational Resources
- **Video Tutorials:** Demonstrations of DC offset detection and correction
- **Written Guides:** In-depth articles on audio restoration
- **Webinars:** Live demonstrations and Q&A sessions

### Sharing Platforms
- **Restoration Techniques:** Platforms for sharing audio restoration methods
- **Workflow Sharing:** Sharing DC offset detection workflows
- **Educational Content:** Tutorials and educational materials

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Visually identify DC offset in an oscilloscope display
- [ ] Explain how DC offset removal increases available headroom
- [ ] Diagnose DC offset issues in audio signals
- [ ] Correctly apply Fruity Center for real-time offset removal
- [ ] Verify DC offset correction effectiveness
- [ ] Integrate DC offset detection into quality control workflows
- [ ] Explain the difference between real-time and offline correction
- [ ] Identify common causes of DC offset in recordings
- [ ] Troubleshoot DC offset issues effectively
- [ ] Optimize signal chains for DC offset prevention

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection

```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What It Is And When To Use: Fruity Center

## Purpose & Identity
Fruity Center is a dedicated **DC Offset removal utility**. Its sole function is to identify if an audio waveform is "lopsided" (not centered on the 0-line) and shift it back to the vertical center in real-time. It acts as a specialized high-pass filter with an extremely low cutoff frequency (near 0Hz). [SRC: IL-MAN]

## 60-Second Mental Model
Imagine a wave drawn on a piece of paper. If you slide the whole paper up by an inch, the wave is no longer in the middle. Fruity Center is the invisible hand that slides the paper back down so the wave is perfectly balanced. 

## Hip-Hop / R&B Context
Technical perfection is the foundation of high-end urban production.
- **Cleaning Hardware Inputs:** Many analog synths and cheap audio interfaces introduce a constant electrical "bias" (DC Offset). Fruity Center fixes this before it reaches your compressors.
- **Headroom Recovery:** In a competitive "Loud" rap master, DC offset is wasted energy. Removing it allows your Kick drum to hit harder without hitting the digital ceiling early.
- **Restoration:** Fixing old, poorly recorded R&B samples that have "lopsided" waveforms which cause clicks when you chop them.

## When To Use
- When you see a waveform in an oscilloscope (**Wave Candy**) that isn't centered.
- When you hear **clicks or pops** at the start/end of audio clips even when you have fades.
- When your meters show volume activity even when the sound is "silent."

## When NOT To Use
- **Standard Mixing:** If your waveform is already centered, Fruity Center does nothing. 
- **Sub-Bass Removal:** Use **Fruity Parametric EQ 2** if you want to cut audible low-end (e.g., 20Hz-30Hz). Fruity Center only targets the inaudible "zero-frequency" DC.

```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map And Signal Flow: Fruity Center

## UI Tour
Fruity Center has no knobs or sliders in its standard interface. It is a "Set and Forget" tool.

1.  **Status Indicator:** (Some versions) shows if DC offset is being detected and corrected.
2.  **Logo/Header:** Minimalist legacy design.

## Functional Flow
1.  **Input:** Audio signal enters the slot.
2.  **Averaging Engine:** The plugin calculates the "Mean" value of the signal over a short window of time. [SRC: UNVERIFIED - common DSP practice]
3.  **DC Detection:** If the average value is not zero, the plugin identifies a DC Offset.
4.  **Correction Filter:** A high-pass filter with a cutoff near **1Hz to 5Hz** is applied to block the constant DC voltage while letting all audible sound (even sub-bass) pass through.
5.  **Output:** Re-centered audio is passed to the next mixer slot.

## Things Beginners Misunderstand
- **"I can't hear a difference":** DC offset is inaudible by itself. You won't "hear" Fruity Center working, but you will **see** the results in your meters and feels the extra headroom.
- **Placement:** It should almost always be the **FIRST plugin** in your chain. If you distort a signal with DC offset (using **Blood Overdrive**), the offset gets amplified and much harder to fix later. [SRC: REPUTABLE]
- **Edison vs Fruity Center:** Edison is for "fixing" a file forever. Fruity Center is for fixing a signal *live* as it plays.

```

---

## FILE: 01-Learning\Concepts\02_Core_Techniques_And_Best_Practices.md

```markdown
# Core Techniques And Best Practices: Fruity Center

## 1. Visual Diagnosis (Wave Candy)
- **Technique:** Always keep a **Wave Candy** instance open in "Oscilloscope" mode on your master or selected track.
- **Execution:** If the waveform line stays above or below the center horizontal line during "silence," you have DC offset.
- **Fix:** Immediately load Fruity Center as Slot 1.

## 2. Headroom Recovery for 808s
- **Technique:** Some 808 samples are poorly processed and have a "bias."
- **Execution:** Check your 808 Mixer Track. If it's hitting -3dB but looks "small" in the waveform, load Fruity Center.
- **Result:** The wave centers, potentially giving you back 1-2dB of "real" headroom to make the bass louder. [SRC: REPUTABLE]

## 3. The "Post-Distortion" Check
- **Technique:** Extreme distortion or waveshaping (e.g., **Fruity WaveShaper**) can actually *create* DC offset by asymmetry.
- **Execution:** Place Fruity Center *after* your most aggressive distortion units.
- **Result:** Re-stabilizes the signal before it hits the rest of your mix bus.

## 4. Hardware Recording Insurance
- **Technique:** If you are recording a vocal or a synth through analog gear.
- **Execution:** Make Fruity Center part of your "Input FX" chain.
- **Why:** Prevents electrical noise from your interface from becoming part of your permanent recording.

## Common Pitfalls + Fixes
- **Pitfall:** "Thinking it's a sub-bass cut."
  - **Fix:** Don't rely on Fruity Center to clean up your low-end mud. It doesn't cut 40Hz. You still need an EQ for that.
- **Pitfall:** "Using it unnecessarily."
  - **Fix:** Modern high-end VSTs (like Serum or Sytrus) rarely produce DC offset. Only use Fruity Center if you have a confirmed diagnostic reason to do so. [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: Fruity Center

Note: As a technical restoration tool, Fruity Center enables "Vibes" by **ensuring signal integrity**.

## 1. Moody (Clean, Deep, Quiet)
- **Concept:** Removing the "Hidden Noise."
- **Levers:**
  - **Restoration:** Use on dark, filtered pads that were recorded from analog gear. 
- **Listen For:** Total silence during the gaps. Without DC removal, moody silences can sometimes feel "pressurized" or heavy in an unnatural way.
- **Don't Do This:** Don't ignore offset in quiet sections; it makes the track feel "broken."

## 2. Upbeat (Loud, Punchy, Competitive)
- **Concept:** Headroom Optimization.
- **Levers:**
  - **Peak Management:** Centers your Kicks and Snares.
- **Listen For:** The extra 1dB of loudness you can squeeze out of the Master Limiter because your signals aren't "pushing" the ceiling asymmetrically.
- **Don't Do This:** Don't let DC offset eat your headroom; upbeat tracks need every bit of energy.

## 3. Psychedelic (Complex, Warped, Modular)
- **Concept:** Fixing Asymmetric Destruction.
- **Levers:**
  - **Post-Waveshaping:** Use after extreme modular synth patches.
- **Listen For:** Stability in the speakers. Psychedelic sounds can get very "lopsided"—Fruity Center keeps them from damaging your playback system.

## 4. Jazzy (Organic, Transparent, Close)
- **Concept:** Preserving the "Wood."
- **Levers:**
  - **Analog Path Cleanup:** Use on upright bass recordings.
- **Listen For:** A natural low-end that doesn't "jump" when the player stops.

## 5. Vibey (Polished, Shimmering, Professional)
- **Concept:** The "Radio Ready" Signal.
- **Levers:**
  - **Vocal Chain Polish:** Slot 1 on every lead vocal.
- **Listen For:** A mix that feels "expensive" because there are no technical artifacts like pops or asymmetrical clipping. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\00_Quickstart_5_Minutes.md

```markdown
# Quickstart: Fruity Center (5 Minutes)

1.  **Diagnose:** Open **Wave Candy** on your master track and select the **Oscilloscope** view.
2.  **Observe:** Look for a waveform that is shifted vertically off the center line.
3.  **Insert:** Load **Fruity Center** into the first slot of the problematic track.
4.  **Confirm:** Watch Wave Candy. The waveform should instantly "snap" back to the vertical center.
5.  **Listen:** You will hear no difference, but your mix now has more headroom. [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Quick-Reference\01_Common_Mistakes.md

```markdown
# Common Mistakes: Fruity Center

- **Using as a Low-Pass Filter:** Expecting Fruity Center to change the "Tone" of the bass. It doesn't. **Fix:** Use an EQ for tonal changes.
- **Placing it at the End:** Putting Fruity Center after a compressor or saturator. **Fix:** Move it to **Slot 1**. Fixing the offset *before* dynamics processing is much more effective.
- **Ignoring the Visuals:** Not checking the oscilloscope and assuming every track needs Fruity Center. **Fix:** Only use it where an offset is visible to save CPU (even if the load is tiny).
- **Misidentifying Peaks:** Thinking an asymmetrical vocal (which is common and natural) is "DC Offset." **Fix:** If the waveform *returns* to 0 during silence, it’s not DC Offset. If it *stays* high/low during silence, it IS offset. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\02_Best_Settings_Starting_Points.md

```markdown
# Best Settings Starting Points: Fruity Center

| Target Scenario | Version Mode | Position | Expected Vibe |
| :--- | :--- | :--- | :--- |
| **Analog Synth Rec** | Default (Auto) | Input FX / Slot 1 | Stable, clean low-end. |
| **Poor Sample Rip** | Default (Auto) | Slot 1 | Click-free chopping. |
| **Post-Aggressive Dist**| Default (Auto) | Post-Distortion | Balanced headroom. |
| **Master Bus Safety** | Default (Auto) | Master Slot 1 | Maximum loudness floor. |

*Note: Since Fruity Center is automatic, "Settings" refer to your placement strategy.* [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Quick-Reference\03_Vibe_Starting_Points_Moody.md

```markdown
# Vibe Starting Points: Moody (Fruity Center)

- **The Goal:** Achieving "True Digital Silence" in a sparse R&B arrangement.
- **Recipe:**
  1. Record your dark analog synths or noisy vintage mics.
  2. Load Fruity Center into **Slot 1**.
  3. Load a Noise Gate into **Slot 2**.
- **Result:** Fruity Center removes the electrical bias (DC), which makes the Noise Gate work much more effectively. This creates a "total vacuum" between notes, emphasizing the moody, isolated feeling of the track.
- **Vibe Lever:** The "Contrast." Silence feels much more dramatic when the signal path is technically perfect. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\04_Vibe_Starting_Points_Upbeat_Psychedelic_Jazzy_Vibey.md

```markdown
# Vibe Starting Points: Upbeat, Psychedelic, Jazzy, Vibey

## Upbeat (The "Loudness Floor")
- **Strategy:** Center every drum layer. 
- **Benefit:** When the Kick hits, it hits the 0dB ceiling with a perfectly symmetrical wave, giving you the loudest possible "thwack."

## Psychedelic (The "Post-Warp" Anchor)
- **Strategy:** Use after extreme **Fruity WaveShaper** or **Distructor** settings.
- **Benefit:** Prevents the "offset" that happens when you distort only one side of a wave, keeping the sound immersive rather than broken.

## Jazzy (The "Invisible Hand")
- **Strategy:** Use on live bass recordings.
- **Benefit:** Preserves the natural sub-frequencies of an upright bass while removing any "hum" or DC bias from the preamp.

## Vibey (The "Polished Chain")
- **Strategy:** Lead Vocal -> Fruity Center -> Auto-tune.
- **Benefit:** Some pitch-correction algorithms perform better when the input wave is perfectly centered. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\mid-side-basics.md

```markdown
# Fruity Center - Parameter Cheat Sheet

**Plugin Type:** Stereo/Mid-Side Utility
**Category:** Utility
**Official Manual:** [Fruity Center](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Center.htm)

---

## 🎚️ Mid-Side Control Parameters

| Parameter | Range | Function | Quick Tip |
|-----------|-------|----------|-----------|
| **Center (Mid)** | 0 - 100% | Volume of the mono/centered content | Lower to remove vocals or center-panned instruments |
| **Side** | 0 - 100% | Volume of the stereo/difference content | Boost for extra width; lower to check mono compatibility |

---

## 🎛️ Common Utility Scenarios

| Problem | Fruity Center Solution |
|---------|------------------------|
| **Vocal Removal** | Vocals are usually centered. Cut the **Center** knob to attenuate them for karaoke. |
| **Muddy Reverb** | Reverb is often stereo-heavy. Lower the **Side** knob to make the reverb more "focused" and mono. |
| **Narrow Mix** | Boost the **Side** knob relative to the **Center** to increase the perceived stereo image. |
| **Mono Check** | Set **Side** to 0% to hear exactly what will be lost on mono playback systems (like club PAs). |

---

## 🔧 Technical Engine Data

- **Type:** Sum-Difference Processor (Mid-Side Matrix)
- **Math:** 
  - `Mid = (L + R) / 2`
  - `Side = (L - R) / 2`
- **Latency:** 0 samples
- **CPU:** Near-zero

---

## 🎯 Quick Start Workflows

### The "Instant Width"
1. **Center:** 80%
2. **Side:** 100%
3. **Action:** By slightly dipping the center, you allow the side-panned elements to feel more prominent, increasing width.

### The "Surgical Mono"
1. **Center:** 100%
2. **Side:** 0%
3. **Action:** Converts any stereo signal to a perfect mono signal. Essential for ensuring your sub-bass is 100% phase-aligned.

---

## ⚡ Pro Tips

1. **Phase Cancellation Risks:** If you boost the **Side** knob too much, you may introduce phase issues that make the sound disappear when played in Mono. Always toggle between Stereo and Mono (Side @ 0%) to check.
2. **Post-EQ is Key:** After removing the Center, the remaining Side signal often lacks low end (since kicks/bass are usually centered). Use an EQ to boost the lows of the Side signal if it sounds too thin.
3. **Creative Panning:** Automate the **Center** knob during a transition to "suck the air" out of a sound before a drop, then bring it back for full impact.

---

**Last Updated:** February 3, 2026
**Status:** ⭐ HIGH PRIORITY - Elaborated Reference
```

---

## FILE: 02-Data\parameters\00_Parameter_Dictionary.md

```markdown
# Parameter Dictionary: Fruity Center

| Parameter | Type | Range | Default | Vibe Impact | Mix Impact | Description |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Enabled** | Toggle | On / Off | On | **None** | **Headroom** | Toggles the high-pass DC blocking filter. |

- **Vibe Impact Tag (Stability):** Ensures low-frequency textures don't "wander" or cause mechanical clicks.
- **Mix Impact Tag (Headroom):** Increases the available peak-to-peak voltage for the final master. [SRC: IL-MAN]

```

---

## FILE: 02-Data\parameters\center-params.json

```json
{
  "plugin": {
    "name": "Fruity Center",
    "category": "Utility",
    "type": "Mid-Side Matrix",
    "officialManual": "https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Center.htm"
  },
  "parameters": {
    "center": {
      "id": "center",
      "name": "Center (Mid)",
      "range": "0-100%",
      "description": "Adjusts the level of correlated (identical) L/R audio."
    },
    "side": {
      "id": "side",
      "name": "Side",
      "range": "0-100%",
      "description": "Adjusts the level of uncorrelated (difference) L/R audio."
    }
  },
  "math": {
    "midCalculation": "L + R",
    "sideCalculation": "L - R"
  }
}
```

---

## FILE: 02-Data\presets\00_Template_And_State_Strategy.md

```markdown
# Template & State Strategy: Fruity Center

## 1. The "Restoration" State
- **Placement:** Mixer Slot 1.
- **State:** Always ON.
- **Use:** Part of a custom "Import Sample" chain that automatically cleans up old records or field recordings.

## 2. The "Analog Synth" State
- **Placement:** On any hardware input channel.
- **State:** Always ON.
- **Use:** Fixes the DC bias common in budget-friendly analog hardware (e.g., Korg Volca series or older Behringer units).

## 3. The "Heavy Drive" State
- **Placement:** After **Blood Overdrive** or **WaveShaper**.
- **State:** Only enabled if the waveform is visibly lopsided in Wave Candy. [SRC: REPUTABLE]

```

---

## FILE: 02-Data\presets\center-boost-presence.json

```json
{
  "presetName": "Center Boost Presence",
  "plugin": "Fruity Center",
  "description": "Focuses the energy on the center channel while slightly dipping the sides.",
  "settings": {
    "center": 1.2,
    "side": 0.8,
    "lowCut": 100.0,
    "highCut": 15000.0
  },
  "usage": "Use on a kick or lead vocal to make it sound more centered and authoritative."
}

```

---

## FILE: 02-Data\presets\side-only-monitor.json

```json
{
  "presetName": "Side Only Monitor",
  "plugin": "Fruity Center",
  "description": "Isolates the side (stereo) information for analysis.",
  "settings": {
    "center": 0.0,
    "side": 1.0,
    "lowCut": 20.0,
    "highCut": 20000.0
  },
  "usage": "Essential for checking if your reverb or delay is too wide or has phase issues."
}

```

---

## FILE: 02-Data\presets\vocal-remover-basic.json

```json
{
  "presetName": "Vocal Remover Basic",
  "plugin": "Fruity Center",
  "description": "Cuts the center channel to remove centered vocals/instruments.",
  "settings": {
    "center": 0.0,
    "side": 1.0,
    "lowCut": 200.0,
    "highCut": 20000.0
  },
  "usage": "Use to create karaoke tracks or to isolate side-panned elements from a stereo file."
}

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B (Fruity Center)

## 1. Headroom is King
- **Rule:** Every 0.1dB of headroom matters in a modern rap master. 
- **Application:** If your kick drum has a 1% DC offset, you are losing valuable volume. Center it.

## 2. Diagnosis over Prescription
- **Rule:** Don't put Fruity Center on every track "just in case."
- **Reason:** While light, any filter introduces a tiny amount of phase shift. Only fix what is broken. [SRC: REPUTABLE]

## 3. The "Silent Meter" Rule
- **Rule:** If your track is stopped but the Mixer Meters show a tiny bit of green, you have DC Offset.
- **Application:** Load Fruity Center. If the meter drops to zero, the problem is solved.

## 4. Vocal Symmetry
- **Rule:** Human voices are naturally asymmetrical. 
- **Application:** Don't freak out if a vocal waveform has more "peaks" on the top than the bottom. This is NOT DC offset. Only use Fruity Center if the "zero line" itself has shifted.

## 5. Mono-Check
- **Rule:** DC offset is a mono problem.
- **Application:** Always fix DC offset on mono tracks before adding stereo effects like Chorus or Delay. [SRC: IL-MAN]

```

---

## FILE: 03-Workflows\by-goal\00_Goal_Quick_Result.md

```markdown
# Goal: Headroom Recovery (Fruity Center)

## Routing Context
- **Target:** A synthesized 808 or heavy Kick.
- **Position:** Slot 1 (Start of chain).

## Step-by-Step Setup
1.  On the 808 mixer track, load **Wave Candy** (Oscilloscope mode).
2.  Play the 808. Observe the waveform. 
    - *Is the horizontal line jumping "up" or "down" and staying there?*
3.  Load **Fruity Center** into **Slot 1**.
4.  Observe the waveform again. 
    - *It should now be perfectly centered on the 0-axis.*
5.  Check your **Mixer Peak Meter**. 
    - *Often, the peak volume will drop by 0.5dB to 1.5dB without changing the sound.*

## Result
- You have just "found" 1dB of extra volume. You can now turn the 808 up by that same amount, resulting in a louder, more competitive mix.

## Vibe Check
- **Upbeat:** This is how you get those "wall-of-sound" rap masters that hit hard but don't distort.

## Pitfalls + Fixes
- **Pitfall:** "The sound changed tone."
  - **Fix:** You might have extremely low sub-frequencies (under 10Hz). Fruity Center acts as a high-pass. If your 808 is purely a 5Hz sine wave (unlikely), it will be quieted. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-goal\01_Goal_Mix_Validation.md

```markdown
# Workflow: Post-Distortion Stability (Fruity Center)

## The Concept
Extreme asymmetry in waveshaping can shift the whole sound off-center. Fruity Center fixes the "Lean."

## Step-by-Step
1.  Apply heavy distortion using **Fruity WaveShaper** (asymmetrical curve).
2.  Notice in your mixer that the track is hitting the "Red" on only one side of the meter (if using a dual meter).
3.  Place **Fruity Center** immediately after the distortion.
4.  **Result:** The "leaning" signal is centered, allowing following compressors or limiters to respond to the peaks symmetrically.

## Vibe Check
- **Psychedelic:** Keeps trippy, distorted textures from feeling "broken" or unstable.

## Automation Idea
- Don't automate this plugin. It should be a constant, silent guardian of your signal path. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-goal\isolating-stereo-effects.md

```markdown
# Isolating Stereo Effects Workflow

## Goal
Extract only the reverb or stereo effects from a dry vocal or instrument track.

## Steps
1. **The Setup**: You have a vocal track that was recorded with "baked-in" stereo reverb that you want to isolate or process separately.
2. **Insert Fruity Center**: Place it on the mixer track.
3. **Isolate the Sides**: Turn the **Center** knob all the way down to **0%**.
4. **Listen**: What remains is only the "Side" information. Since most dry vocals are mono (centered), they will disappear, leaving behind only the stereo reverb tail and any double-tracking.
5. **Process the Effect**:
   - Now you can add a **Fruity Chorus** or **Fruity Flanger** *after* Fruity Center to process only the reverb without affecting the dry vocal.
   - You can also EQ the sides to remove low-end rumble from the reverb.
6. **Parallel Blend**: Use the Mixer Slot Mix level to bring back the "Center" information as much as needed.

## Result
You have successfully separated the dry source from its stereo environment, allowing for surgical processing of the spatial elements of the sound.

```

---

## FILE: 03-Workflows\by-goal\removing-vocals-from-master.md

```markdown
# Removing Vocals (Karaoke Style) Workflow

## Goal
Attenuate the center-panned vocals from a stereo master to create a backing track.

## Steps
1. **Insert Fruity Center**: Place it on the mixer track containing the stereo audio.
2. **Listen to Side Only**: Turn the **Center** knob all the way to **0%**. 
    - You will likely hear the drums, reverb, and side-panned instruments.
    - The vocals should be significantly quieter or gone.
3. **Find the Balance**: Slowly bring the **Center** knob back up until you have enough of the kick and snare (which are also usually centered) without the vocals becoming too loud.
4. **Post-Processing**: Use an EQ to boost the low end (since the kick was attenuated) and the high end to compensate for the loss of center energy.

## Warning
This process works best on professional studio recordings. If the vocals have a lot of stereo reverb or are double-tracked and panned, Fruity Center will only remove the "dry" center portion.

```

---

## FILE: 03-Workflows\by-instrument\master-bus.md

```markdown
# Instrument: Master Bus

Using Fruity Center for final stereo image correction.

## Narrowing the Low End
- Use the **Low Cut** knob in Fruity Center (if available) or chain it with a mid-side EQ.
- **Goal**: Ensure that everything below 150Hz is mono (Center only) to avoid phase cancellation in club systems.

## Adding "Air" to the Sides
1. Place Fruity Center on your master bus.
2. Set the **Side** knob to 110%.
3. Set the **High Cut** to about 5kHz.
4. **Result**: This gently boosts the stereo information in the high-mids and highs, making the mix feel wider and more professional.

## Checking Mono Compatibility
- Temporarily turn the **Side** knob to 0%.
- If your mix completely disappears or sounds extremely thin, you have phase issues that need to be fixed at the source.

```

---

## FILE: 03-Workflows\by-instrument\synth-layers.md

```markdown
# Instrument: Synth Layers

Creating separation between multiple synth parts.

## The Lead Synth
- Boost the **Center** channel by 10%.
- **Goal**: Keeps the lead focused and prominent in the middle of the mix.

## The Ambient Pad
- Turn the **Center** channel down to 40%.
- Turn the **Side** channel up to 120%.
- **Goal**: Pushes the pad to the edges of the speakers, leaving a "hole" in the middle for the lead synth and vocals.

## Arpeggios
- Use an automation clip on the **Side** knob to make the arpeggio grow wider during the chorus and narrow during the verse.
- **Result**: Adds dynamic movement to the stereo field.

```

---

## FILE: 04-Reference\00_Source_Log.md

```markdown
# Reference: Source Log & Style Board

## Source ID: [SRC: IL-MAN]
- **Source:** Image-Line Official Manual - Fruity Center.
- **Key Info:** Description of DC Offset removal, zero-latency operation, and technical utility classification.

## Source ID: [SRC: REPUTABLE]
- **Source:** Sound On Sound - "The DC Offset Problem."
- **Key Info:** Causes of DC offset (electrical bias, asymmetric clipping), and how removal restores lost headroom and prevents clicks during editing.

## Source ID: [SRC: UNVERIFIED]
- **Source:** DSP Analysis Forums.
- **Key Info:** Estimated high-pass cutoff of ~2Hz to 5Hz.

## Genre Style Board: Fruity Center

| Vibe | Key Use | Effect |
| :--- | :--- | :--- |
| **Moody** | Analog Synth Recs | Silent, clean gaps. |
| **Upbeat** | Kick/808 Polish | +1dB extra headroom. |
| **Psychedelic**| Post-Waveshaper | Waveform stability. |
| **Jazzy** | Live Bass Fix | Natural low-end core. |
| **Vibey** | Vocal Chain Slot 1 | Artifact-free autotune. |

## Coverage Checklist
- [x] DC Offset Definition
- [x] Visual Diagnosis Steps
- [x] Headroom Recovery Workflow
- [x] 5 Vibe Targets
- [x] Mono Safety Rules
- [x] Hardware Integration Tips

```

---

## FILE: 04-Reference\headroom-benefits.md

```markdown
# Reference: Headroom Benefits (DC Removal)

## The Math of the "Lean"
Digital audio has a hard limit: **0dBFS**. 
- A symmetrical wave can go to +1 and -1 (Full range).
- A wave with 10% DC offset can only go to +0.9 and -1.1.
- But since -1.1 is impossible, it clips at -1.0.
- **The Result:** Your sound is "capped" at 90% of its potential volume.

## Why Removal is "Free Volume"
By shifting that 10% offset back to center, the wave can once again reach +1.0. You have gained 10% of your dynamic range back without changing the tone of the sound.

## When to check
- After importing samples from unknown sources.
- After using "asymmetric" distortion.
- After recording from hardware. [SRC: REPUTABLE]

```

---

## FILE: 04-Reference\technical-docs\mid-side-matrix-theory.md

```markdown
# Mid-Side Matrix Theory

## Decoding the Signal
Standard stereo audio uses **Intensity Panning** (Level differences between Left and Right) to create an image. Mid-Side (MS) is a different way of looking at that same data.

### The Sum (Mid)
`M = L + R`
When you add L and R together, the signals that are the same in both channels reinforce each other. The signals that are different partly cancel out. This is the **Mono** component of the sound.

### The Difference (Side)
`S = L - R`
By inverting the phase of the Right channel and adding it to the Left, we cancel out everything that is identical. What remains is the **Stereo Difference**. 

## Why Fruity Center is special
Many MS plugins are complex and introduce latency. Fruity Center is a "Pure Matrix":
- **No Phase Shift:** It performs the math in the time domain without filtering.
- **Perfect Reconstruction:** If both Center and Side are at 100%, the output is bit-perfectly identical to the input.
- **Dynamic Range:** It has massive internal headroom, so you can boost the Side signal significantly without digital clipping (as long as you bring the Post-Gain down later).

## Mono Compatibility Warning
Boosting the `Side` knob increases the amplitude of the phase-inverted information. 
- **The Risk:** When played back on a Mono system (where L and R are summed), the "Side" information will mathematically cancel to zero.
- **The Lesson:** A mix that sounds wide in Fruity Center might sound "thin" or "empty" in Mono. Always check your Center/Side balance.

```

---

## FILE: 04-Reference\technical-docs\stereo-cancellation-logic.md

```markdown
# Stereo Cancellation Logic

## Mid Signal Calculation
The Mid (Center) signal is calculated as:
`M = (L + R) / 2`
By attenuating this, you are effectively performing phase cancellation on the parts of the signal that are correlated between the two channels.

## Side Signal Calculation
The Side signal is calculated as:
`S = (L - R) / 2`
By attenuating this, you remove the uncorrelated energy, leaving a perfectly Mono signal.

## Relationship to Stereo Width
Standard stereo audio is just `Left` and `Right`. Mid-Side (MS) is an alternative representation. Fruity Center performs the conversion to MS internally, applies the gain adjustments, and then converts back to LR for the output.

```

---

