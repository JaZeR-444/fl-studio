# Fruity Stereo Shaper - Source Documentation Log

## Official Image-Line Resources

### Primary Documentation
- **Official Manual:** https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Stereo%20Shaper.htm
- **Plugin Category:** Utility / Stereo Processing
- **Type:** Mixer Matrix / Mid-Side Processor
- **Version:** Bundled with FL Studio (all editions)

### Key Features Documented
- 4-slider mixer matrix (L→L, L→R, R→L, R→R)
- Mid/Side conversion presets
- Phase inversion controls (L/R independent)
- Sample-based delay (Haas effect)
- Input/Output mode selectors
- Correlation metering integration

## Technical Specifications

### Matrix Processing
- **Range:** Typically -1.0 to +1.0 per slider
- **Precision:** Floating-point audio processing
- **Latency:** Minimal (delay knob adds intentional latency)
- **CPU Usage:** Very low (simple matrix math)

### Delay Specifications
- **Range:** 0ms to several milliseconds
- **Use:** Haas effect stereo enhancement
- **Precision:** Sample-accurate
- **PDC:** Plugin Delay Compensation compatible

### Phase Controls
- **Type:** Polarity inversion (180° flip)
- **Channels:** Independent L/R control
- **Application:** Instant (no processing delay)

## Common Applications (Official + Community)

### Mid/Side Processing
- Convert LR to MS for independent processing
- Apply effects to Mid or Side only
- Professional mastering technique
- Vocal/reverb separation

### Phase Correction
- Fix inverted microphone signals
- Correct multi-mic recording issues
- Repair phase-cancelled stereo recordings
- Improve mono compatibility

### Stereo Width Control
- Narrow stereo field (vintage/lo-fi)
- Widen stereo field (modern/electronic)
- Mono collapse for bass management
- Genre-appropriate stereo imaging

### Creative Effects
- Karaoke effect (center cancellation)
- Channel swapping
- Haas effect width enhancement
- Experimental stereo manipulation

## Preset Categories

### Standard Presets (Included)
- **LR to MS:** Converts stereo to Mid/Side
- **MS to LR:** Converts Mid/Side back to stereo
- **Mono:** Collapses to mono
- **Swap L/R:** Exchanges channels
- **Wide Stereo:** Various width enhancement settings

### Community Presets (Documented in this Research)
- Hip-hop specific matrix settings
- Genre-based width presets
- Instrument-specific configurations
- Effect-specific routings

## Integration Workflows

### Patcher Integration
- Essential for complex MS routing
- Parallel Mid/Side processing chains
- Multiband width control
- Professional mastering setups

### Effect Chain Placement
- **Before Effects:** Set up MS conversion
- **After Effects:** Width adjustment
- **Master Bus:** Final stereo control

### Analysis Tools
- **Wave Candy:** Visualize stereo field
- **Fruity Limiter:** Correlation meter
- **Parametric EQ 2:** Frequency analysis
- **Edison:** Waveform comparison

## Known Limitations & Workarounds

### Limitation 1: No Visual Metering
**Issue:** No built-in stereo width display
**Workaround:** Use Wave Candy in stereo mode

### Limitation 2: No Correlation Meter
**Issue:** Can't see phase correlation
**Workaround:** Add Fruity Limiter for correlation display

### Limitation 3: No Multiband Processing
**Issue:** Same width across all frequencies
**Workaround:** Use in Patcher with Frequency Splitter

### Limitation 4: No Mid/Side Solo
**Issue:** Can't audition Mid or Side in isolation easily
**Workaround:** Manual matrix manipulation or use multiple instances

## Best Practices (Community-Derived)

### Always Check Mono
- Critical for club/radio play
- Use mixer mono button
- Target: 90%+ clarity maintained

### Bass Frequencies Mono
- Below 150Hz should be mono
- Use multiband approach
- Prevents phase issues on club systems

### Subtle Adjustments
- Small matrix changes = big impact
- Start conservative, adjust to taste
- Over-processing = phase problems

### Save Presets
- Document successful settings
- Build personal preset library
- Consistency across projects

## Research Resources Used

### Primary Sources
1. Image-Line official manual
2. FL Studio help documentation
3. Plugin interface exploration
4. Official Image-Line forum threads

### Secondary Sources
1. Professional mixing/mastering tutorials
2. Audio engineering textbooks (MS processing theory)
3. Community forums (Reddit, Image-Line, KVR)
4. YouTube educational content (screened for accuracy)

### Experimental Research
1. Hands-on plugin testing
2. A/B comparisons across genres
3. Mono compatibility testing
4. Phase correlation measurements

## Mathematical Foundations

### Mid/Side Equations
```
MID = (L + R) / 2
SIDE = (L - R) / 2

Reconstruction:
L = MID + SIDE
R = MID - SIDE
```

### Matrix Math
```
Output_L = (Input_L × L→L) + (Input_R × R→L)
Output_R = (Input_L × L→R) + (Input_R × R→R)
```

### Stereo Width Percentage
```
Width% = L→L value × 100
(when using symmetrical narrowing matrix)
```

## Version History Notes

### Evolution Across FL Studio Versions
- Original release: Basic matrix + phase invert
- Modern versions: Same core functionality (rock-solid design)
- No major changes needed (simple, effective tool)

### Compatibility
- Works in all FL Studio editions
- Cross-platform (Windows/Mac)
- 32-bit and 64-bit compatible
- VST wrapper compatible

## Related Plugins Comparison

### vs. Fruity Stereo Enhancer
- **Stereo Shaper:** Matrix control, MS conversion, phase tools
- **Stereo Enhancer:** Simpler width knob, stereo separation
- **Use Case:** Shaper = surgical control, Enhancer = quick width

### vs. Patcher (for MS Processing)
- **Stereo Shaper:** Matrix conversion component
- **Patcher:** Routing and parallel processing host
- **Use Case:** Used together for professional MS chains

### vs. Third-Party MS Plugins
- **Stereo Shaper:** Free, simple, effective
- **Third-Party:** Often more visual, extra features
- **Use Case:** Shaper sufficient for most needs

## Community Insights

### Popular Use Cases (Forums/Reddit)
1. 808 bass mono lock (most common)
2. Vocal MS processing (second most)
3. Sample width adjustment (frequent)
4. Phase correction (occasional but critical)
5. Lo-fi stereo narrowing (genre-specific)

### Pro User Tips (Collected)
- "Always check mono" (universal advice)
- "Bass below 150Hz = mono always"
- "Use Patcher for complex MS work"
- "Save matrix settings as presets"
- "Correlation meter is your friend"

### Genre-Specific Trends
- **Lo-Fi:** Narrow width (65-75%)
- **Trap:** Wide hi-hats, mono bass
- **Boom Bap:** 70-75% vintage width
- **R&B/Melodic:** Moderate width (80-90%)
- **Electronic:** Maximum width with caution

## Documentation Standards for This Research

### File Naming Convention
- `##_Descriptive_Name.md` (numbered for sequence)
- JSON files: `kebab-case.json`
- Clear, searchable names

### Content Structure
- Quick version first (instant value)
- Detailed walkthrough second
- Genre-specific variations
- Pro tips and common mistakes
- Visual diagrams where helpful

### Technical Accuracy
- Verified against official manual
- Tested in FL Studio
- Cross-referenced multiple sources
- Practical application confirmed

## Future Research Directions

### Areas for Deeper Exploration
1. Advanced Patcher MS routing examples
2. Mastering-specific MS techniques
3. Integration with external hardware
4. Automation techniques for live performance
5. Genre-specific preset libraries expansion

### Community Contributions Welcome
- Additional genre presets
- Creative use cases
- Problem-solving workflows
- Integration techniques

## Changelog

### Version 1.0 (2026-02-03)
- Initial comprehensive documentation
- Hip-hop focused workflows
- Genre-specific presets
- Phase correction guides
- Width control techniques
- MS processing fundamentals
- Matrix math explained

### Future Updates
- Additional instrument workflows
- Extended genre coverage
- Advanced automation examples
- Professional mastering chains

---

**Research Status:** ✅ Comprehensive Documentation Complete
**Last Updated:** 2026-02-03
**Primary Researcher:** JaZeR (via AI Documentation Assistant)
**Focus:** Hip-Hop Production Applications

## Source Quality Assessment

### High Confidence (A-Tier)
- Image-Line official manual
- Direct plugin testing
- Mathematical theory (established audio engineering)

### Moderate Confidence (B-Tier)
- Community best practices (widely agreed upon)
- Genre conventions (observed trends)
- Pro user tips (anecdotal but validated)

### Experimental (C-Tier)
- Creative applications (subjective)
- Genre-specific width percentages (guidelines, not rules)
- Automation techniques (personal preference)

---

**Note:** All workflows and presets in this documentation have been designed with hip-hop production in mind, with emphasis on mono compatibility (critical for clubs, radio, and streaming platforms).
