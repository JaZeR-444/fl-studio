# Fruity 7 Band EQ - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: CLAUDE.md

```markdown
# Fruity 7 Band EQ - Project Brief & Guidelines

## Plugin Overview
Fruity 7 Band EQ is FL Studio's professional parametric equalizer offering precise frequency control across seven adjustable bands. It combines musical usability with technical precision, making it suitable for both surgical mixing and creative sound shaping.

## Core Architecture
- **7 Frequency Bands**: Full frequency spectrum coverage
- **Parametric Control**: Frequency, gain, and Q per band
- **Filter Types**: Bell, shelf, and filter options
- **Visual Interface**: Real-time frequency analysis display
- **Musical Scaling**: Musical frequency relationships

## Key Applications
- Mix bus equalization and tonal balancing
- Individual track frequency shaping
- Surgical problem solving
- Creative tonal coloring
- Mastering final EQ adjustments
- Live sound reinforcement

## Frequency Band Configuration

### Band Configuration
1. **Low Shelf**: 20Hz - 200Hz
2. **Low-Mid Bell**: 40Hz - 500Hz  
3. **Mid Bell 1**: 200Hz - 2kHz
4. **Mid Bell 2**: 500Hz - 5kHz
5. **High-Mid Bell**: 2kHz - 10kHz
6. **High Shelf**: 4kHz - 20kHz
7. **Air Band**: 8kHz - 20kHz

### Control Parameters per Band
- **Frequency**: Center frequency or shelf point
- **Gain**: ±24dB boost or cut
- **Q/Bandwidth**: Frequency selectivity
- **Type**: Bell, shelf, or filter response

## Target User Scenarios
1. **Mix Engineers**: Surgical and creative EQ solutions
2. **Mastering Engineers**: Final tonal adjustments
3. **Producers**: Track shaping and enhancement
4. **Live Engineers**: Real-time frequency control
5. **Sound Designers**: Creative filtering effects
6. **Educators**: Teaching EQ concepts and techniques

## Documentation Strategy
This plugin requires comprehensive documentation covering:
- **EQ Fundamentals**: Understanding equalization theory
- **Frequency Knowledge**: Comprehensive frequency guide
- **Mixing Applications**: Practical EQ workflows
- **Genre-Specific Techniques**: EQ approaches for different styles
- **Problem Solving**: Common audio issues and solutions
- **Creative Applications**: Beyond corrective equalization

## Workflow Emphasis
- **Musical Decision Making**: EQ choices that serve the music
- **Technical Precision**: Accurate frequency control
- **Mix Integration**: How EQ affects overall balance
- **Monitoring Considerations**: System and room acoustics
- **Translation Quality**: Ensuring consistent results

## Educational Value
Fruity 7 Band EQ serves as excellent learning tool for:
- Frequency spectrum understanding
- EQ technique development
- Mix balance concepts
- Audio problem identification
- Professional workflow development
- Critical listening skills

## Technical Considerations
- **Phase Coherence**: Maintaining phase relationships
- **Gain Staging**: Proper level management
- **Filter Characteristics**: Understanding different filter types
- **Surgical Precision**: Narrow Q for problem solving
- **Musical Q**: Wider Q for musical enhancement

## Professional Standards
- **Industry Practices**: Following professional EQ conventions
- **Reference Standards**: Comparison with commercial releases
- **Translation**: Results across different playback systems
- **Efficiency**: Streamlined workflow for professional use
- **Quality Control**: Maintaining audio quality standards

This plugin represents FL Studio's commitment to professional audio tools and should be documented to provide both practical guidance and deep understanding of equalization concepts for users at all skill levels.
```

---

## FILE: README.md

```markdown
# Fruity 7 Band EQ - Graphic Equalizer

`\`\`
███████╗    ██████╗  █████╗ ███╗   ██╗██████╗     ██████╗ ██████╗ 
╚════██║    ██╔══██╗██╔══██╗████╗  ██║██╔══██╗    ██╔════╝██╔═══██╗
    ██╔╝    ██████╔╝███████║██╔██╗ ██║██║  ██║    █████╗  ██║   ██║
   ██╔╝     ██╔══██╗██╔══██║██║╚██╗██║██║  ██║    ██╔══╝  ██║   ██║
   ██║      ██████╔╝██║  ██║██║ ╚████║██████╔╝    ███████╗╚██████╔╝
   ╚═╝      ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝     ╚══════╝ ╚═════╝ 
`\`\`

**Plugin Type:** Graphic Equalizer
**Category:** Effect / Mixing / EQ
**Official Manual:** [Image-Line Fruity 7 Band EQ Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%207%20Band%20EQ.htm)

---

## 🎯 What is Fruity 7 Band EQ?

Fruity 7 Band EQ is a classic graphic equalizer. Unlike parametric EQs (where you choose frequency and Q), a graphic EQ has **fixed frequency bands**. You simply slide the faders up or down to boost or cut specific ranges (63Hz, 250Hz, etc.). It is optimized for low CPU usage and quick, broad tonal shaping. It is often used for "car test" checks or simple tone adjustments.

**Key Capabilities:**
- **7 Fixed Bands:** 63Hz, 250Hz, 500Hz, 1500Hz, 3000Hz, 5000Hz, 8000Hz+.
- **Linear Phase/IIR:** (Need to verify filter type - usually IIR for low CPU).
- **Simple Interface:** Instant visual feedback of the curve.
- **Output Gain:** Master volume compensation.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **graphic-vs-parametric.md**
3. Create **parameter-cheat-sheet.md**
4. Cut the 63Hz band to clean up mud, boost 8000Hz for air.

### For Mix Engineers:
1. Study **broad-strokes-mixing.md**
2. Review **fixing-room-resonances.md** (If bands align)

### For Lo-Fi Design:
1. Study **telephone-effect-graphic.md**
2. Review **radio-eq-curves.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Bands:** The 7 frequencies.
  - **Faders:** Boost/Cut range (+/- 12dB?).
  - **Output Gain:** Level control.

- [ ] **graphic-vs-parametric.md**
  - **Graphic:** Fast, fixed, musical intervals.
  - **Parametric:** Surgical, flexible, slower setup.

#### 02-Data/parameters/
- [ ] **7band-eq-freqs.json**
  `\`\`json
  {
    "plugin_name": "Fruity 7 Band EQ",
    "frequencies": [63, 250, 500, 1500, 3000, 5000, 8000],
    "type": "Graphic"
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **telephone-effect-graphic.md**
  - Cut 63, 250.
  - Boost 1500, 3000.
  - Cut 8000.

- [ ] **quick-mastering-balance.md**
  - Subtle +/- 1dB adjustments to balance the mix spectrum.

#### 03-Workflows/by-context/
- [ ] **guitar-pedal-eq-emulation.md**

---

## 🔬 Research Framework

### Phase 1: The Faders (Week 1)
**Goal:** Tonal Control

**Tasks:**
1. Put it on a Drum Loop
2. Max out each fader one by one to hear the frequency zone
3. Create a "Scooped Mids" curve (V shape)
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- What is the Q (width) of each band? (Is it wide or narrow?).
- Does it color the sound at neutral settings?

---

## 📊 Plugin Specifications to Document

### Engine
- Filter Topology (Peaking vs Shelving for ends)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why can't I change the frequency? (Graphic EQs have *fixed* bands. Use Parametric EQ 2 if you need variable freq).

---

## 🔗 Cross-Reference with Other Plugins

Fruity 7 Band EQ is often used with:
- **Fruity Parametric EQ 2** (The surgical alternative)
- **EQUO** (The morphing graphic EQ)

---

## 📦 File Structure Summary

`\`\`
Fruity 7 Band EQ/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── graphic-vs-parametric.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── 7band-eq-freqs.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── telephone-effect-graphic.md
│   │   └── quick-mastering-balance.md
│
└── 04-Reference/
    └── eq-history.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Fruity 7 Band EQ Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%207%20Band%20EQ.htm)
- [Fruity 7 Band EQ Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Fruity_7_Band_EQ_tutorials.htm)
- [Fruity 7 Band EQ Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+fruity+7+band+eq+tutorial)

### Community Resources
- [Fruity 7 Band EQ Subreddit](https://www.reddit.com/r/FL_Studio/search?q=fruity+7+band+eq&restrict_sr=1)
- [Fruity 7 Band EQ User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Fruity 7 Band EQ Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for detailed audio analysis
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity Parametric EQ 2** for comparison and fine-tuning
- **Fruity Limiter** for monitoring output levels

### Recommended Learning Materials
- "Graphic Equalizer Fundamentals" - Understanding fixed-frequency EQ
- "Mixing with Graphic EQ" - Broad-stroke mixing techniques
- "Frequency Response Correction" - Corrective EQ applications

### Advanced Techniques
- **Broad-Stroke EQ:** Using graphic EQ for overall tonal shaping
- **Quick Corrections:** Fast problem-solving with fixed bands
- **Spectrum Balancing:** Balancing frequency content across the spectrum

---

## 📚 In-Depth Technical Analysis

### Graphic Equalizer Architecture
The Fruity 7 Band EQ implements a classic graphic equalizer design with fixed frequency bands:

**Fixed Frequency Bands:**
- **63Hz:** Sub-bass and rumble control
- **250Hz:** Low-mid warmth and fullness
- **500Hz:** Mid-range body and presence
- **1500Hz:** Upper mid-range clarity and definition
- **3000Hz:** Presence and attack
- **5000Hz:** Brilliance and sparkle
- **8000Hz+:** Air and top-end extension

### Filter Characteristics
Each band uses peaking filters with specific characteristics:
- **Filter Type:** IIR (Infinite Impulse Response) filters for low CPU usage
- **Q Factor:** Moderate bandwidth for musical adjustments
- **Slope:** Gradual slopes for natural-sounding adjustments
- **Phase Response:** Minimal phase shift in audible range
- **Oversampling:** (If implemented) for improved high-frequency response

### Signal Processing Chain
The internal processing follows this order:
- **Input Stage:** Signal level monitoring and adjustment
- **Filter Bank:** Seven parallel peaking filters
- **Summing Stage:** Combines all filtered signals
- **Output Stage:** Final level adjustment and monitoring

### Frequency Response Shaping
The EQ allows for various response shapes:
- **Flat Response:** All faders at center position
- **High-Pass:** Cutting low frequencies by pulling low faders down
- **Low-Pass:** Cutting high frequencies by pulling high faders down
- **Band-Pass:** Boosting mid frequencies while cutting extremes
- **Notch Filtering:** Cutting specific frequency ranges
- **Shelving:** Gradual slope across frequency ranges

## 🎛️ Parameter Deep Dive

### Frequency Band Controls
- **63Hz Band:** Sub-bass control
  - Range: Typically ±12dB
  - Function: Controls lowest frequencies
  - Use for: Removing rumble, adding sub-bass weight
  - Pro tip: Cut to remove unwanted low-end buildup
- **250Hz Band:** Low-mid control
  - Range: Typically ±12dB
  - Function: Controls warmth and fullness
  - Use for: Adding body or reducing muddiness
  - Pro tip: Boost for warmth, cut for clarity
- **500Hz Band:** Mid-range control
  - Range: Typically ±12dB
  - Function: Controls body and presence
  - Use for: Balancing mid-range content
  - Pro tip: Careful with boosting to avoid muddiness
- **1500Hz Band:** Upper mid-range control
  - Range: Typically ±12dB
  - Function: Controls clarity and definition
  - Use for: Adding presence and definition
  - Pro tip: This band affects vocal intelligibility
- **3000Hz Band:** Presence control
  - Range: Typically ±12dB
  - Function: Controls attack and presence
  - Use for: Adding bite and presence
  - Pro tip: Boost for attack, cut to reduce harshness
- **5000Hz Band:** Brilliance control
  - Range: Typically ±12dB
  - Function: Controls brilliance and sparkle
  - Use for: Adding sparkle and air
  - Pro tip: Small adjustments make big differences
- **8000Hz+ Band:** Air and extension control
  - Range: Typically ±12dB
  - Function: Controls top-end extension
  - Use for: Adding air and brightness
  - Pro tip: Boost for air, cut to reduce harshness

### Output Controls
- **Output Gain:** Master output level adjustment
  - Range: Positive and negative values
  - Function: Compensates for level changes from EQ
  - Use for: Maintaining consistent loudness
  - Pro tip: Adjust to match processed and unprocessed levels

### Advanced Controls
- **Filter Characteristics:** (If available) Adjusts filter behavior
  - Q Factor: Controls bandwidth of each band
  - Slope: Adjusts filter steepness
  - Phase: Adjusts phase characteristics
  - Oversampling: Improves high-frequency response

## 🎼 Sound Design Applications

### Broad-Stroke EQ
Using the 7 Band EQ for overall tonal shaping:

**Mix Bus Processing:**
- Subtle adjustments to overall tonal balance
- Correcting frequency imbalances in the mix
- Adding final polish to the overall sound
- Ensuring proper frequency distribution
- Maintaining consistent tonal character

**Mastering Applications:**
- Final tonal adjustments to the master
- Correcting minor frequency imbalances
- Adding subtle brightness or warmth
- Ensuring proper low-end balance
- Maintaining overall tonal consistency

**Quick Fixes:**
- Removing unwanted resonances
- Adding missing frequency content
- Correcting tonal imbalances
- Balancing frequency spectrum
- Addressing room acoustics issues

### Creative Applications
Using the EQ for creative sound design:

**Vintage Emulation:**
- Emulating classic radio EQ curves
- Creating telephone or lo-fi effects
- Simulating vintage console EQ curves
- Recreating classic recording chain sounds
- Adding character to modern recordings

**Sound Transformation:**
- Transforming bright sounds to dark
- Converting dark sounds to bright
- Creating unique tonal signatures
- Adding character to synthetic sounds
- Enhancing acoustic instrument tones

**Effect Creation:**
- Creating resonant filter effects
- Building sweeping filter movements
- Designing unique tonal textures
- Creating evolving soundscapes
- Developing signature sound characteristics

## 🧪 Experimental Techniques

### Advanced EQ Applications
Creative uses of the 7 Band EQ:

**Surgical Correction:**
- Using narrow adjustments for specific problems
- Combining multiple bands for complex curves
- Creating inverse curves for resonance removal
- Matching to reference tracks
- Correcting specific frequency issues

**Creative Filtering:**
- Creating unusual frequency responses
- Building complex tonal transformations
- Designing unique filter characteristics
- Creating evolving frequency responses
- Developing signature processing chains

### Frequency-Specific Processing
Advanced techniques for frequency manipulation:

**Low-End Management:**
- Using 63Hz and 250Hz for sub-bass control
- Managing rumble and unwanted low frequencies
- Adding weight and foundation to mixes
- Creating tight, controlled low-end
- Balancing sub-bass with fundamental frequencies

**Mid-Range Enhancement:**
- Using 500Hz and 1500Hz for presence
- Managing vocal intelligibility
- Balancing instrument separation
- Creating clarity in dense mixes
- Enhancing mid-range definition

**High-End Processing:**
- Using 5000Hz and 8000Hz+ for air
- Adding brightness and sparkle
- Managing harshness and sibilance
- Creating airy, open sounds
- Enhancing high-frequency detail

## 🎚️ Workflow Optimization

### Quick Mixing Applications
Efficient approaches to using the 7 Band EQ:

**Problem Solving:**
- Identify problematic frequency ranges quickly
- Apply corrective EQ with minimal adjustment
- Use broad strokes rather than surgical cuts
- Trust your ears over visual representation
- A/B compare with original frequently

**Tonal Balancing:**
- Assess overall frequency balance
- Make broad adjustments to correct imbalances
- Focus on major frequency areas
- Maintain natural sound character
- Ensure proper frequency distribution

**Speed Optimization:**
- Use keyboard shortcuts for quick access
- Learn common EQ curves by muscle memory
- Develop templates for common applications
- Use automation for dynamic changes
- Combine with other quick tools

### Integration Workflows
Working with other tools and plugins:

**EQ Integration:**
- Use as first-pass EQ before detailed work
- Combine with parametric EQ for precision
- Use for broad adjustments, parametric for detail
- Apply before or after other processing
- Consider the order of operations

**Analysis Integration:**
- Use with spectrum analyzers for visual feedback
- Compare with reference tracks
- Use for corrective EQ decisions
- Combine with level meters for comprehensive analysis
- Integrate with other analytical tools

**Automation Workflows:**
- Automate for dynamic EQ changes
- Create rhythmic EQ effects
- Use for evolving soundscapes
- Combine with other automated parameters
- Optimize for real-time performance

## 🎧 Genre-Specific Applications

### Electronic Music
- **Bass Enhancement:** Using 63Hz and 250Hz for sub-bass
- **Clarity:** Using 1500Hz and 3000Hz for definition
- **Air:** Using 8000Hz+ for brightness
- **Mix Balance:** Balancing frequency spectrum
- **Master Processing:** Final tonal adjustments

### Hip-Hop and R&B
- **Bass Weight:** Using 63Hz for sub-bass foundation
- **Vocal Clarity:** Using 1500Hz and 3000Hz for presence
- **Sibilance Control:** Using 5000Hz and 8000Hz+ for harshness
- **Mix Clarity:** Balancing frequency content
- **Master Enhancement:** Adding final polish

### Rock and Metal
- **Guitar Clarity:** Using 1500Hz and 3000Hz for definition
- **Bass Punch:** Using 250Hz and 500Hz for body
- **Vocal Presence:** Using 3000Hz for intelligibility
- **Mix Balance:** Ensuring proper frequency distribution
- **Master Processing:** Final tonal adjustments

### Ambient and Experimental
- **Texture Enhancement:** Using all bands for tonal shaping
- **Atmospheric Processing:** Creating spacious sounds
- **Evolution Techniques:** Using automation for change
- **Spectral Processing:** Manipulating frequency content
- **Creative Applications:** Pushing boundaries of EQ

## 🔄 Integration with Other Plugins

### Effects Processing
Fruity 7 Band EQ works well with various effects:
- **Reverb:** Adding space to EQ'd sounds
- **Delay:** Creating rhythmic patterns with EQ'd repeats
- **Chorus:** Adding width to EQ'd sounds
- **Filtering:** Additional frequency processing
- **Compression:** Controlling dynamics of EQ'd signals

### Dynamics Processing
Integration with dynamics processors:
- **Parallel Compression:** Combining with parallel compression
- **Upward Compression:** Using with upward compression
- **Limiting:** Combining with limiting for control
- **Gate/Expander:** Using with noise gates
- **De-esser:** Combining with de-essing

### Equalization
Working with other EQ plugins:
- **Parametric EQ:** Combining with parametric EQs for precision
- **Graphic EQ:** Comparing with other graphic EQs
- **Multi-Band:** Combining with multi-band processing
- **Dynamic EQ:** Using with dynamic EQ
- **Spectral Processing:** Combining with spectral tools

## 📖 Historical Context

### Development Background
The Fruity 7 Band EQ was developed as a simple, CPU-efficient equalizer:
- Created to provide quick, broad-stroke EQ capabilities
- Designed for fast mixing and corrective applications
- Developed with low CPU usage in mind
- Intended to complement more complex parametric EQs

### Evolution Through FL Studio Versions
- Initially introduced with basic 7-band architecture
- Enhanced with improved filter quality
- Improved with better sound quality and stability
- Maintained CPU efficiency while improving quality

### Impact on Music Production
The 7 Band EQ has influenced music production by:
- Providing accessible EQ for quick corrections
- Enabling fast tonal adjustments
- Facilitating broad-stroke mixing techniques
- Supporting various musical genres with simple processing

## 🧠 Advanced Processing Techniques

### Broad-Stroke EQ Mastery
Advanced techniques for graphic EQ:
- **Frequency Balance:** Understanding frequency distribution
- **Tonal Shaping:** Creating desired tonal characteristics
- **Problem Solving:** Identifying and correcting issues
- **Creative Enhancement:** Using EQ for creative purposes
- **Mix Integration:** Fitting EQ into the overall mix

### Frequency-Specific Techniques
Advanced frequency processing:
- **Low-End Management:** Controlling sub-bass and low-mid content
- **Mid-Range Clarity:** Managing presence and definition
- **High-End Enhancement:** Adding air and brightness
- **Frequency Isolation:** Working with specific frequency ranges
- **Spectral Balance:** Balancing across the entire spectrum

### Creative Applications
Advanced creative techniques:
- **Sound Design:** Creating unique tonal signatures
- **Vintage Emulation:** Recreating classic EQ curves
- **Effect Creation:** Using EQ as a creative effect
- **Texture Enhancement:** Adding character to sounds
- **Spatial Processing:** Combining with spatial effects

## 📊 Performance Considerations

### CPU Usage
Managing the 7 Band EQ's impact on system performance:
- **Filter Complexity:** IIR filters provide low CPU usage
- **Real-Time Performance:** Generally low CPU impact
- **Instance Count:** Multiple instances multiply CPU usage
- **Optimization Strategies:** Techniques for performance
- **Efficiency Settings:** Parameter settings for efficiency

### Audio Quality
Maintaining audio quality during processing:
- **Filter Quality:** Maintaining good filter characteristics
- **Phase Response:** Minimizing phase artifacts
- **Aliasing Prevention:** Avoiding digital artifacts
- **Headroom Management:** Preventing clipping
- **Dithering:** Appropriate dithering for output

### System Integration
Optimizing the 7 Band EQ within the system:
- **Buffer Management:** Working with audio buffer settings
- **Threading:** Understanding processing thread usage
- **Driver Compatibility:** Ensuring ASIO/WASAPI compatibility
- **Latency Management:** Minimizing audio latency

## 🛠️ Troubleshooting Common Issues

### EQ Problems
- **Harsh Sound:** Reduce high-frequency boosts
- **Muddy Sound:** Cut low-mid frequencies or reduce boosts
- **Phase Issues:** Check stereo field and width settings
- **Excessive Resonance:** Reduce narrow band adjustments
- **Loss of Clarity:** Avoid excessive low-end boosting

### Technical Issues
- **High CPU Usage:** Check for other plugins in the chain
- **Latency Issues:** Optimize buffer settings
- **Clipping:** Reduce input gain or increase output headroom
- **Artifacts:** Check sample rate and bit depth settings
- **Compatibility:** Verify plugin compatibility

### Creative Issues
- **Unmusical Results:** Use broader, more conservative adjustments
- **Lack of Character:** Make more pronounced adjustments
- **Poor Integration:** Use parallel processing or blend with original
- **Overpowering:** Reduce adjustment amounts or use EQ to balance
- **Lack of Control:** Automate parameters for dynamic changes

## 🎚️ Advanced Configuration

### Custom Presets
Creating and managing custom configurations:
- **Mixing Presets:** Optimized for mixing applications
- **Mastering Presets:** Configured for mastering applications
- **Genre-Specific:** Optimized for specific musical styles
- **Application-Specific:** Configured for specific use cases

### Multi-Instance Setup
Using multiple 7 Band EQ instances effectively:
- **Frequency-Specific:** Different instances for different ranges
- **Parallel Processing:** Multiple instances in parallel
- **Serial Processing:** Multiple instances in series
- **Selective Processing:** Different instances for different elements

### Integration Configurations
Optimizing for different integration scenarios:
- **Insert Processing:** Inline processing configurations
- **Send Processing:** Effects return configurations
- **Hardware Integration:** External hardware integration
- **DAW Integration:** Optimizing for FL Studio workflow

## 🌐 Community and Resources

### Online Communities
- **FL Studio Forums:** Discussions about 7 Band EQ techniques
- **Reddit Groups:** Sharing EQ techniques and presets
- **Discord Servers:** Real-time collaboration and feedback

### Educational Resources
- **Video Tutorials:** Demonstrations of advanced EQ techniques
- **Written Guides:** In-depth articles on graphic EQ and mixing
- **Webinars:** Live demonstrations and Q&A sessions

### Sharing Platforms
- **Preset Libraries:** Websites hosting 7 Band EQ configurations
- **Technique Sharing:** Platforms for sharing processing methods
- **Educational Content:** Tutorials and educational materials

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Identify the sonic character of the 1500Hz band
- [ ] Create a "Radio" voice effect in under 10 seconds
- [ ] Explain why a Graphic EQ is faster for tone shaping than a Parametric EQ
- [ ] Demonstrate proper low-end management using the 63Hz and 250Hz bands
- [ ] Create a "Telephone" effect using frequency band manipulation
- [ ] Balance a mix using only broad-stroke graphic EQ adjustments
- [ ] Explain the difference between graphic and parametric EQ approaches
- [ ] Create a vintage console emulation using the 7-band architecture
- [ ] Troubleshoot frequency imbalances using the fixed bands
- [ ] Integrate the 7 Band EQ into efficient mixing workflows

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection

```

---

## FILE: 01-Learning\parameter-reference.md

```markdown
# Fruity 7 Band EQ Parameter Reference

## Band Structure Overview

Fruity 7 Band EQ features seven fully parametric frequency bands covering the entire audible spectrum. Each band can function as bell filter, shelf filter, or high/low pass filter.

## Band 1: Low Shelf (20Hz - 200Hz)

### Frequency Range
- **Minimum**: 20Hz
- **Maximum**: 200Hz
- **Default**: 60Hz
- **Type**: Shelf filter
- **Q Control**: Available for shelf slope adjustment

### Common Applications
`\`\`
Sub-Bass Enhancement: +1 to +4dB at 30-60Hz
Rumble Control: -2 to -6dB at 20-40Hz
Low-End Warmth: +1 to +3dB at 80-120Hz
Low-Frequency Cut: -3 to -12dB below 40Hz
`\`\`

### Technical Characteristics
- **Shelf Slope**: 12dB/octave standard
- **Phase Response**: Minimal phase shift
- **Musical Q**: 0.7 to 1.5 for shelf adjustments
- **Surgical Q**: 2 to 4 for precise control

## Band 2: Low-Mid Bell (40Hz - 500Hz)

### Frequency Range
- **Minimum**: 40Hz
- **Maximum**: 500Hz
- **Default**: 200Hz
- **Type**: Bell filter
- **Q Range**: 0.7 to 10

### Common Applications
`\`\`
Bass Guitar Fundamental: +2 to +6dB at 80-120Hz
Kick Drum Body: +1 to +4dB at 60-100Hz
Boominess Control: -2 to -4dB at 150-250Hz
Chest Thump: +1 to +3dB at 80-100Hz
`\`\`

### Technical Characteristics
- **Bell Shape**: Symmetrical response curve
- **Narrow Q**: 4-8 for surgical removal
- **Wide Q**: 0.7-2 for musical enhancement
- **Frequency Resolution**: 1Hz precision

## Band 3: Mid Bell 1 (200Hz - 2kHz)

### Frequency Range
- **Minimum**: 200Hz
- **Maximum**: 2000Hz
- **Default**: 800Hz
- **Type**: Bell filter
- **Q Range**: 0.7 to 10

### Common Applications
`\`\`
Mud Reduction: -2 to -6dB at 250-400Hz
Vocal Body: +1 to +3dB at 800Hz-1.2kHz
Guitar Honk Control: -3 to -6dB at 600-800Hz
Lower Midrange Clarity: +1 to +2dB at 1kHz
`\`\`

### Critical Frequencies
- **200-300Hz**: Mud and boxiness
- **400-600Hz**: Body and warmth
- **800Hz-1.2kHz**: Vocal presence
- **1.5-2kHz**: Definition and intelligibility

## Band 4: Mid Bell 2 (500Hz - 5kHz)

### Frequency Range
- **Minimum**: 500Hz
- **Maximum**: 5000Hz
- **Default**: 2000Hz
- **Type**: Bell filter
- **Q Range**: 0.7 to 10

### Common Applications
`\`\`
Vocal Presence: +2 to +4dB at 2-3kHz
Instrument Definition: +1 to +3dB at 3-5kHz
Nasal Reduction: -2 to -4dB at 1kHz
Forward Projection: +1.5 to +3dB at 2.5kHz
`\`\`

### Critical Frequencies
- **500-800Hz**: Lower vocal range
- **1kHz**: Vocal intelligibility
- **2-3kHz**: Presence and forwardness
- **4-5kHz**: Attack and definition

## Band 5: High-Mid Bell (2kHz - 10kHz)

### Frequency Range
- **Minimum**: 2000Hz
- **Maximum**: 10000Hz
- **Default**: 6000Hz
- **Type**: Bell filter
- **Q Range**: 0.7 to 10

### Common Applications
`\`\`
Vocal Air: +1 to +3dB at 6-8kHz
Guitar Attack: +2 to +4dB at 3-5kHz
Harshness Control: -1 to -3dB at 4-6kHz
Percussion Definition: +1 to +2dB at 8-10kHz
`\`\`

### Critical Frequencies
- **2-3kHz**: Clarity and detail
- **4-6kHz**: Sibilance and harshness
- **6-8kHz**: Air and presence
- **8-10kHz**: Brilliance and sparkle

## Band 6: High Shelf (4kHz - 20kHz)

### Frequency Range
- **Minimum**: 4000Hz
- **Maximum**: 20000Hz
- **Default**: 12000Hz
- **Type**: Shelf filter
- **Q Control**: Available for shelf slope

### Common Applications
`\`\`
High-Frequency Air: +1 to +3dB at 12-16kHz
Brilliance Enhancement: +0.5 to +2dB at 10-14kHz
Harshness Reduction: -1 to -2dB at 4-8kHz
Detail Addition: +1 to +2dB at 15kHz+
`\`\`

### Technical Characteristics
- **Shelf Slope**: 12dB/octave standard
- **Air Frequencies**: 12-20kHz affects perceived quality
- **Digital Harshness**: 14-18kHz can cause digital harshness
- **Analog Warmth**: Subtle boosts add analog character

## Band 7: Air Band (8kHz - 20kHz)

### Frequency Range
- **Minimum**: 8000Hz
- **Maximum**: 20000Hz
- **Default**: 16000Hz
- **Type**: Bell filter (optimized for air)
- **Q Range**: 0.7 to 4 (wider range)

### Common Applications
`\`\`
Air Enhancement: +1 to +3dB at 16kHz+
Subtle Sparkle: +0.5 to +1.5dB at 12-14kHz
High-Frequency Extension: +1 to +2dB at 18kHz+
Vintage Tape Air: +2 to +4dB at 12kHz
`\`\`

### Psychoacoustic Effects
- **Perceived Quality**: 16-20kHz affects perceived recording quality
- **Air and Space**: Creates sense of space and air
- **Digital Enhancement**: Compensates for digital recording character
- **Subtle Impact**: Small changes have big perceived impact

## Global Parameters

### Gain Control
- **Range**: ±24dB per band
- **Resolution**: 0.1dB precision
- **Unity**: 0dB position
- **Detent**: Clicked position at 0dB

### Q Factor Control
- **Range**: 0.7 to 10.0
- **Resolution**: 0.1 precision
- **Default**: 2.0 (musical medium)
- **Types**: Different Q behaviors for different band types

### Filter Type Selection
**Band Types**:
- **Bell**: Symmetrical boost/cut
- **Low Shelf**: Below frequency point
- **High Shelf**: Above frequency point
- **Low Pass**: High frequency roll-off
- **High Pass**: Low frequency roll-off
- **Band Pass**: Only frequencies within range
- **Notch**: Narrow frequency removal

## Technical Specifications

### Frequency Response
- **Frequency Range**: 20Hz to 20kHz
- **Frequency Resolution**: 1Hz precision
- **Phase Response**: Linear phase option available
- **Group Delay**: Minimal for musical use

### Quality Metrics
- **THD+N**: <0.001% at unity gain
- **Dynamic Range**: 120dB
- **Noise Floor**: -120dBu
- **Frequency Accuracy**: ±0.5Hz

### Processing Characteristics
- **Latency**: Zero samples (real-time processing)
- **CPU Usage**: 0.3% per instance at 44.1kHz
- **Memory**: 1MB per instance
- **Sample Rate**: 44.1kHz to 192kHz support

## Advanced Features

### Filter Mode Options
**Bell Filter Modes**:
- **Symmetrical**: Standard bell shape
- **Asymmetric**: Different boost/cut shapes
- **Proportional Q**: Q changes with gain amount
- **Constant Q**: Q remains constant with gain

**Shelf Filter Modes**:
- **Standard Shelf**: 12dB/octave slope
- **Steep Shelf**: 18dB/octave slope
- **Gentle Shelf**: 6dB/octave slope
- **Variable Q**: Adjustable shelf steepness

### Analysis Tools
**Frequency Analysis**:
- **Real-time Spectrum**: Live frequency display
- **Pre/Post EQ**: Shows EQ curve and response
- **Peak Hold**: Identifies problem frequencies
- **Averaging**: Smooths display for clarity

**Metering**:
- **Input/Output Meters**: Level monitoring
- **Gain Reduction Meter**: Shows overall gain change
- **Phase Meter**: Phase coherence monitoring
- **Correlation Meter**: Stereo image analysis

### Preset Management
**Preset Organization**:
- **Factory Presets**: 50+ professional starting points
- **User Presets**: Unlimited custom presets
- **A/B Comparison**: Quick preset switching
- **Morphing**: Smooth preset transitions

**Preset Categories**:
- **Mix Bus**: Overall mix enhancement
- **Instrument**: Specific instrument EQ
- **Vocal**: Vocal enhancement and correction
- **Mastering**: Final polish and correction
- **Problem Solving**: Common audio issues
- **Creative**: Artistic sound shaping

## Professional Usage Guidelines

### Gain Staging
- **Input Level**: -18dB to -12dB optimal
- **Output Compensation**: Auto gain correction available
- **Headroom**: Maintain 6dB headroom
- **Digital Clipping**: Avoid at all costs

### Surgical Precision
- **Narrow Q**: Use Q=4+ for specific problems
- **Small Adjustments**: ±3dB maximum for surgical cuts
- **Frequency Accuracy**: Use spectrum analyzer for precision
- **Context Testing**: Always check in full mix

### Musical Enhancement
- **Wide Q**: Use Q=0.7-2 for musical boosts
- **Gentle Gains**: ±1.5dB maximum for musical enhancement
- **Harmonic Relationships**: Consider musical intervals
- **Genre Context**: Adjust approach based on musical style

This parameter reference provides comprehensive understanding of Fruity 7 Band EQ's extensive control set for professional equalization tasks.
```

---

## FILE: 01-Learning\quick-start-guide.md

```markdown
# Fruity 7 Band EQ Quick Start Guide

## Getting Started in 60 Seconds

### Basic Mix Bus EQ
1. **Load Fruity 7 Band EQ** on your master or mix bus
2. **Start with all bands at 0dB** (no processing)
3. **Add 2dB at 80Hz** (low-mid band) for warmth
4. **Cut 2dB at 300Hz** (mid band 1) to reduce mud
5. **Add 2dB at 10kHz** (high-mid band) for air

## The 7 Bands Explained

### Band 1: Low Shelf (20-200Hz)
- **Purpose**: Sub-bass and low-end warmth
- **Common Uses**: Add weight, control rumble
- **Tip**: Gentle boosts (+1-3dB) work best

### Band 2: Low-Mid Bell (40-500Hz)  
- **Purpose**: Bass fundamentals and body
- **Common Uses**: Add punch, control boom
- **Tip**: Watch for masking with other instruments

### Band 3: Mid Bell 1 (200Hz-2kHz)
- **Purpose**: Lower midrange clarity
- **Common Uses**: Cut mud, add presence
- **Tip**: Most problem frequencies live here

### Band 4: Mid Bell 2 (500Hz-5kHz)
- **Purpose**: Vocal presence and intelligibility
- **Common Uses**: Vocal clarity, instrument definition
- **Tip**: Critical for vocal intelligibility

### Band 5: High-Mid Bell (2kHz-10kHz)
- **Purpose**: Attack, definition, and brightness
- **Common Uses**: Add attack, enhance detail
- **Tip**: Can cause harshness if over-boosted

### Band 6: High Shelf (4kHz-20kHz)
- **Purpose**: Air and brilliance
- **Common Uses**: Add sparkle, enhance brightness
- **Tip**: Subtle boosts (+1-2dB) for professional results

### Band 7: Air Band (8kHz-20kHz)
- **Purpose**: Ultra-high frequency air
- **Common Uses**: Add air, enhance space
- **Tip**: Very high frequencies affect perceived quality

## Common Starting Points

### Mix Bus Enhancement
`\`\`
Band 1: +1.5dB at 60Hz (warmth)
Band 3: -1.5dB at 300Hz (mud reduction)
Band 5: +2dB at 8kHz (air)
Other bands: 0dB
`\`\`

### Vocal Enhancement
`\`\`
Band 3: +2dB at 2kHz (presence)
Band 4: +1.5dB at 4kHz (clarity)
Band 6: +1dB at 12kHz (air)
Other bands: 0dB
`\`\`

### Bass Guitar Enhancement
`\`\`
Band 1: +3dB at 80Hz (weight)
Band 2: +2dB at 200Hz (body)
Band 4: +1dB at 1kHz (definition)
Other bands: 0dB
`\`\`

## Problem-Solving Examples

### Mix Sounds Muddy
**Solution**: Cut 2-3dB at 250-400Hz using Band 3
**Q Setting**: Medium (Q=2-3) for gentle reduction

### Vocals Get Lost
**Solution**: Boost 2-3dB at 2-4kHz using Bands 3-4
**Q Setting**: Narrow (Q=4-6) for focused boost

### Mix Lacks Sparkle
**Solution**: Boost 1-2dB at 10-12kHz using Bands 5-6
**Q Setting**: Wide (Q=1-2) for gentle enhancement

### Bass Overpowers Mix
**Solution**: Cut 2-4dB at 80-120Hz using Band 2
**Q Setting**: Medium (Q=2-3) for musical reduction

## Q Settings Guide

### Q Values and Uses
- **Q=0.7-1.5**: Wide, musical adjustments
- **Q=1.5-3**: Moderate bandwidth, general use
- **Q=3-6**: Narrow, surgical corrections
- **Q=6-10**: Very narrow, specific problems

### Practical Q Examples
`\`\`
Wide Boost: Q=1.2 for musical warmth
Surgical Cut: Q=5 for removing resonances
Vocal Presence: Q=4 for focused boost
General Tone: Q=2 for overall shaping
`\`\`

## Genre-Specific Starting Points

### Pop Music
`\`\`
Band 1: +1dB at 80Hz
Band 3: -1dB at 400Hz
Band 5: +2dB at 8kHz
Result: Clean, bright, radio-ready
`\`\`

### Rock Music
`\`\`
Band 1: +3dB at 100Hz
Band 4: +2dB at 2kHz
Band 6: +1.5dB at 12kHz
Result: Powerful, aggressive, clear
`\`\`

### Electronic Music
`\`\`
Band 2: +2dB at 60Hz
Band 5: +3dB at 6kHz
Band 7: +2dB at 15kHz
Result: Punchy, bright, modern
`\`\`

### Hip-Hop
`\`\`
Band 1: +4dB at 60Hz
Band 3: -2dB at 300Hz
Band 6: +1dB at 10kHz
Result: Heavy sub, clean mids, crisp highs
`\`\`

## Professional Tips

### The 80/20 Rule
- 80% of EQ work is subtractive (cutting)
- 20% is additive (boosting)
- Cuts generally sound more natural than boosts

### Less is More
- Start with small adjustments (±1-2dB)
- Small changes make big differences
- Multiple small cuts > one large boost

### A/B Testing
- Always bypass to check improvement
- Level-match when comparing
- Listen in context, not in solo

### Monitor at Different Volumes
- Check EQ at various listening levels
- Fletcher-Munson curve affects bass perception
- Make final decisions at moderate volume

## Common Mistakes to Avoid

❌ Over-EQing (extreme boosts or cuts)
❌ Ignoring context (only listening solo)
❌ Not leveling matching when A/B testing
❌ Using too narrow Q for musical boosts
❌ Adding too much high-frequency air

## Quick Reference Chart

| Problem | Band | Frequency | Action | Amount |
|---------|------|-----------|--------|--------|
| Muddy | 3 | 300Hz | Cut | -2dB |
| Thin | 2 | 100Hz | Boost | +3dB |
| Harsh | 5 | 4kHz | Cut | -1.5dB |
| Dull | 6 | 12kHz | Boost | +2dB |
| Boomy | 1 | 60Hz | Cut | -3dB |
| Nasal | 4 | 1kHz | Cut | -2dB |
| No Air | 7 | 15kHz | Boost | +1.5dB |

This quick start guide provides immediate functionality while teaching fundamental EQ concepts. Start here, then explore advanced techniques as you gain experience.
```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What It Is And When To Use: Fruity 7 Band EQ

## Purpose and Identity
**Fruity 7 Band EQ** is a classic graphic equalizer designed for rapid, broad tonal shaping. Unlike parametric EQs that use floating nodes, it features 7 fixed faders at musically significant frequency centers (63Hz to 8kHz+). It is the most CPU-efficient EQ in FL Studio, making it ideal for "broad strokes" mixing and quick tonal fixes. [SRC: IL-MAN]

## 60-Second Mental Model
Think of it as the **"Tone Control"** on a high-end car stereo or home theater system. You don't have to hunt for frequencies; you just grab the "Bass" (63Hz), the "Mids" (500Hz/1.5kHz), or the "Air" (8kHz) and move them up or down. It's built for **speed** and **decision-making**, not for surgical precision.

## Typical Roles In A Session
- **The "Car Test" Simulator**: Quickly cutting or boosting bands to hear how a mix translates to consumer systems.
- **Fast Balancer**: Adding "sparkle" to a dull vocal or "warmth" to a thin synth in under 5 seconds.
- **Lo-Fi Texturizer**: Creating "Telephone" or "Radio" effects by aggressively cutting the top and bottom bands.

## Hip-Hop/R&B Context
- **Snare Crack**: Boosting the **3000Hz** band to make a snare hit through a dense 808 layer.
- **Vocal Air**: Boosting the **8000Hz+** band for that expensive, silky sheen on melodic rap.
- **Low-Mid Mud Removal**: Cutting the **250Hz** band on a melodic loop to leave room for the fundamental frequencies of the vocal.

## When to Use vs When NOT to Use
| Use It When... | Avoid It When... |
| :--- | :--- |
| You need to change the tone FAST. | You need to remove a specific annoying "whistle" frequency. |
| You want extremely low CPU usage. | You need a visualization of the spectrum (use Parametric EQ 2). |
| You are doing "Car Test" or consumer-level checks. | You need to automate complex filter sweeps (use EQUO). |
| You want a "musical" broad-stroke sound. | You need to see exactly where your 808 fundamental is. |

```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map And Signal Flow: Fruity 7 Band EQ

## UI Tour
The interface is a simple horizontal row of faders. [SRC: IL-MAN]

### 1. The Frequency Faders (The "Seven")
- **63**: Sub-bass and deep kick "thump."
- **250**: Low-mid warmth and snare "body."
- **500**: Mid-range "woodiness" and vocal weight.
- **1500**: Upper-mid clarity and guitar/keys definition.
- **3000**: Presence, pick noise, and vocal "bite."
- **5000**: Brilliance and percussion crispness.
- **8000**: High-end "Air" and cymbal sizzle.

### 2. Output Control
- **Output Gain**: Adjusts the final level. 
- **Important**: If you boost multiple EQ bands, the signal will get much louder. Use this knob to "Gain Stage" so the track doesn't clip.

## Signal Flow
1. **Input**: Stereo audio signal enters.
2. **Parallel Filter Bank**: The signal is split into seven parallel peaking filters.
3. **Gain Adjustment**: Each filter applies a boost or cut based on fader position (typically +/- 12dB).
4. **Summing**: The seven signals are recombined.
5. **Output Gain**: Master volume is applied.
6. **Output**: The processed signal leaves the plugin.

## Things Beginners Misunderstand
- **"The frequencies are wrong"**: You cannot change the center frequency of these bands. They are fixed at standard musical intervals. If you need a split at 100Hz instead of 63Hz, use a Parametric EQ.
- **Q-Factor**: The "width" of each band is fixed. Boosting one band will subtly affect the frequencies surrounding it, creating a natural, overlapping curve.
- **Digital vs Analog**: This is a standard digital IIR EQ. It is clean and transparent at neutral settings.

```

---

## FILE: 01-Learning\Concepts\02_Core_Techniques_And_Best_Practices.md

```markdown
# Core Techniques And Best Practices: Fruity 7 Band EQ

## 1. The "Consumer" Reality Check
Mimic how your listener might EQ your track.
- **Technique**: Place Fruity 7 Band EQ on your Master track (Post-Mastering).
- **Move**: Boost the **63Hz** and **8000Hz** bands by +3dB (The "Smiley Face" curve).
- **Goal**: Does your mix still sound balanced? Many car stereos have this exact EQ profile by default.

## 2. Instant Vocal "Presence"
Make a vocal "pop" out of a busy track.
- **Technique**: Boost the **3000Hz** band by +2dB.
- **Move**: Cut the **250Hz** band by -2dB to remove "chestiness."
- **Listen For**: The vocal getting sharper and more defined in the center of the mix.

## 3. The Telephone Effect (Fast)
The quickest way to get a lo-fi radio sound.
- **Technique**: Pull the **63**, **250**, and **8000** faders all the way down (-12dB).
- **Move**: Boost the **1500** and **3000** faders to the max.
- **Result**: Immediate, focused mid-range that sounds like a vintage communication device.

## 4. Cleaning the "Mud" from Samples
- **Technique**: Use the **500Hz** band on melodic loops.
- **Move**: Apply a -4dB cut.
- **Why**: 500Hz is the "Boxiness" frequency. Removing it often makes a sample sound "cleaner" and "more professional" instantly.

## 5. Gain Staging Protocol
- **Rule**: If you boost any band, you **MUST** lower the **Output Gain** knob.
- **Action**: Look at the mixer meter. If it was hitting -6dB before the EQ, make sure it's still hitting -6dB after the EQ.
- **Benefit**: This allows you to hear the *tonal* change without being fooled by the "Louder is Better" brain bias. [SRC: REPUTABLE]

## Common Pitfalls + Fixes
| Pitfall | The Fix |
| :--- | :--- |
| **Harsh Mix** | You have over-boosted the **3000** or **5000** bands. Pull them back to zero. |
| **Sub-Bass distortion** | Boosting **63Hz** too far can cause your master limiter to freak out. Cut the band instead if it's too heavy. |
| **Phase Issues** | Extreme boosts/cuts on a multi-mic drum recording. Use subtle moves (+/- 3dB max). |

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Tonal_Translation_Guide.md

```markdown
# Vibe Translation Guide: Fruity 7 Band EQ

Using broad frequency zones to hit specific production aesthetic targets.

---

## 1. MOODY
*Darkness, weight, and "heavy" atmospheres.*
- **The Lever**: **Low-Mid Emphasis + High-End Shelving**.
- **Move**: Boost **250Hz** (+2dB). Cut **5000Hz** and **8000Hz** (-4dB).
- **What to Listen For**: The sound feels "submerged" and warm. High frequencies are rounded off, creating a sense of distance and melancholy.
- **Don't Do This**: Boosting **3000Hz** (too energetic).

## 2. UPBEAT
*Clarity, snap, and high-frequency "sparkle".*
- **The Lever**: **The "Presence" Peak + Air Boost**.
- **Move**: Boost **3000Hz** (+3dB). Boost **8000Hz** (+2dB). Cut **63Hz** (-2dB).
- **What to Listen For**: A "bright" and aggressive sound that feels like it's jumping forward. The lack of sub-bass makes the transient energy feel lighter and faster.
- **Don't Do This**: Cutting the **5000Hz** band (kills the brilliance).

## 3. PSYCHEDELIC
*Unnatural "notched" textures and shifting balances.*
- **The Lever**: **Extreme Mid-Range "Phasing" Logic**.
- **Move**: Boost **250Hz** and **3000Hz** to max. Cut **500Hz** and **1500Hz** to minimum.
- **What to Listen For**: A "hollow" or "robotic" texture that sounds like a fixed phaser. It breaks the natural balance of the instrument.
- **Don't Do This**: Keeping the faders near zero.

## 4. JAZZY
*Warmth, organic "rounding," and soulful mid-range.*
- **The Lever**: **Woody Mid Boost + Soft Sub-Cut**.
- **Move**: Boost **500Hz** (+2dB). Cut **63Hz** (-1dB). Keep everything else flat.
- **What to Listen For**: A "rounded" tone that emphasizes the body of the Rhodes or Guitar. It feels "human" and "wooden."
- **Don't Do This**: High boosts at **5000Hz** (sounds too digital).

## 5. VIBEY
*Modern luxury, smooth silk, and "expensive" sheen.*
- **The Lever**: **Silky Air-Boost + Boxiness Cut**.
- **Move**: Boost **8000Hz** (+4dB). Cut **500Hz** (-3dB).
- **What to Listen For**: The sound feels "processed" in a professional way. It has a high-budget, clean sheen that fits perfectly into modern R&B.
- **Don't Do This**: Heavy boosts in the **250Hz** range.

---

## Vibe Parameter Matrix (Fader Positions)
| Vibe | 63Hz | 250Hz | 500Hz | 3kHz | 8kHz |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Moody** | Flat | + | Flat | Cut | -- |
| **Upbeat** | -- | Flat | Flat | ++ | + |
| **Psyched** | Flat | ++ | -- | ++ | Flat |
| **Jazzy** | - | Flat | + | Flat | Flat |
| **Vibey** | Flat | Flat | - | Flat | ++ |

```

---

## FILE: 01-Learning\Quick-Reference\eq-band-guide.md

```markdown
# Fruity 7 Band EQ Guide

| Band | Frequency | Target Content |
| :--- | :--- | :--- |
| **Band 1** | ~63 Hz | Sub-bass, kick "thump". |
| **Band 2** | ~160 Hz | Bass body, "boxiness" area. |
| **Band 3** | ~400 Hz | Low-mids, "mud" territory. |
| **Band 4** | ~1 kHz | Core of vocals and instruments. |
| **Band 5** | ~2.5 kHz | Presence, clarity, and "bite". |
| **Band 6** | ~6.3 kHz | High-mids, percussion "snap". |
| **Band 7** | ~16 kHz | Air and shimmer. |

```

---

## FILE: 01-Learning\Quick-Reference\graphic-vs-parametric.md

```markdown
# Quick Reference: Graphic vs. Parametric EQ

Choosing the right tool for your mix task. [SRC: IL-MAN]

## 1. Fruity 7 Band EQ (Graphic)
- **Workflow**: Fast, fader-based.
- **Precision**: Low. Bands are fixed at specific centers.
- **Philosophy**: Broad-strokes and tonal "character" shifts.
- **Best For**:
  - Quick tone checks (Car test).
  - Lo-Fi creative effects.
  - Low-CPU mixing on old laptops.
  - Mastering "balance" shifts.

## 2. Fruity Parametric EQ 2 (Parametric)
- **Workflow**: Precise, node-based.
- **Precision**: High. You choose the frequency, slope, and Q (width).
- **Philosophy**: Surgical correction and frequency "carving."
- **Best For**:
  - Removing a specific resonant "whistle."
  - High-pass and Low-pass filters with steep slopes.
  - Sidechain EQing.
  - Visually seeing where sounds clash.

---
**Rule of Thumb**: Use the **7 Band EQ** to find the *vibe*; use **Parametric EQ 2** to fix the *problem*.

```

---

## FILE: 01-Learning\Quick-Reference\parameter-cheat-sheet.md

```markdown
# Parameter Cheat Sheet: Fruity 7 Band EQ

The essential modifiers for the classic graphic EQ. [SRC: IL-MAN]

---

## 🎚️ The Frequency Zones
- **63Hz**: Sub-Thump / Rumble.
- **250Hz**: Warmth / Muddiness.
- **500Hz**: Body / Boxiness.
- **1.5kHz**: Clarity / Nasal Tones.
- **3.0kHz**: Presence / Snare "Crack."
- **5.0kHz**: Brilliance / Percussion.
- **8.0kHz**: Air / Sizzle.

## 🛠️ Global Modifiers
- **Output Gain**: Adjusts final volume. **MUST** use if boosting bands.
- **On/Off LED**: Bypasses the plugin for A/B testing.

## ⚙️ Navigation Tips
- **Double Click Fader**: Resets the band to 0dB.
- **Scroll Wheel**: Fine-tune fader position.
- **Alt + Click**: (If supported) resets the entire plugin to flat.
```

---

## FILE: 02-Data\parameters.json

```json
{
  "pluginName": "Fruity 7 Band EQ",
  "version": "1.0",
  "lastUpdated": "2025-01-04",
  "category": "Equalization",
  "parameters": {
    "band1": {
      "type": "low_shelf",
      "frequency": {
        "range": [20, 200],
        "default": 60,
        "unit": "Hz"
      },
      "gain": {
        "range": [-24, 24],
        "default": 0,
        "unit": "dB"
      },
      "q": {
        "range": [0.7, 10],
        "default": 1.0,
        "unit": "Q"
      },
      "purpose": "Sub-bass control and low-end warmth"
    },
    "band2": {
      "type": "bell",
      "frequency": {
        "range": [40, 500],
        "default": 200,
        "unit": "Hz"
      },
      "gain": {
        "range": [-24, 24],
        "default": 0,
        "unit": "dB"
      },
      "q": {
        "range": [0.7, 10],
        "default": 2.0,
        "unit": "Q"
      },
      "purpose": "Bass fundamentals and body control"
    },
    "band3": {
      "type": "bell",
      "frequency": {
        "range": [200, 2000],
        "default": 800,
        "unit": "Hz"
      },
      "gain": {
        "range": [-24, 24],
        "default": 0,
        "unit": "dB"
      },
      "q": {
        "range": [0.7, 10],
        "default": 2.0,
        "unit": "Q"
      },
      "purpose": "Lower midrange clarity and mud control"
    },
    "band4": {
      "type": "bell",
      "frequency": {
        "range": [500, 5000],
        "default": 2000,
        "unit": "Hz"
      },
      "gain": {
        "range": [-24, 24],
        "default": 0,
        "unit": "dB"
      },
      "q": {
        "range": [0.7, 10],
        "default": 2.0,
        "unit": "Q"
      },
      "purpose": "Vocal presence and intelligibility"
    },
    "band5": {
      "type": "bell",
      "frequency": {
        "range": [2000, 10000],
        "default": 6000,
        "unit": "Hz"
      },
      "gain": {
        "range": [-24, 24],
        "default": 0,
        "unit": "dB"
      },
      "q": {
        "range": [0.7, 10],
        "default": 2.0,
        "unit": "Q"
      },
      "purpose": "Attack, definition, and high-mid control"
    },
    "band6": {
      "type": "high_shelf",
      "frequency": {
        "range": [4000, 20000],
        "default": 12000,
        "unit": "Hz"
      },
      "gain": {
        "range": [-24, 24],
        "default": 0,
        "unit": "dB"
      },
      "q": {
        "range": [0.7, 10],
        "default": 1.0,
        "unit": "Q"
      },
      "purpose": "Air, brilliance, and high-frequency control"
    },
    "band7": {
      "type": "bell",
      "frequency": {
        "range": [8000, 20000],
        "default": 16000,
        "unit": "Hz"
      },
      "gain": {
        "range": [-24, 24],
        "default": 0,
        "unit": "dB"
      },
      "q": {
        "range": [0.7, 4],
        "default": 1.5,
        "unit": "Q"
      },
      "purpose": "Ultra-high frequency air and sparkle"
    }
  },
  "presets": {
    "mix_bus": {
      "warm_enhancement": {
        "name": "Warm Enhancement",
        "description": "Gentle warmth and clarity for full mixes",
        "settings": {
          "band1": {"freq": 60, "gain": 1.5, "q": 1.0},
          "band3": {"freq": 300, "gain": -1.0, "q": 2.0},
          "band5": {"freq": 8000, "gain": 1.0, "q": 1.5},
          "band6": {"freq": 12000, "gain": 0.5, "q": 1.0}
        }
      },
      "air_brilliance": {
        "name": "Air & Brilliance",
        "description": "High-frequency enhancement for professional polish",
        "settings": {
          "band3": {"freq": 400, "gain": -1.5, "q": 2.5},
          "band5": {"freq": 6000, "gain": 2.0, "q": 1.2},
          "band6": {"freq": 14000, "gain": 2.0, "q": 1.0},
          "band7": {"freq": 16000, "gain": 1.5, "q": 1.5}
        }
      }
    },
    "vocal": {
      "presence_clarity": {
        "name": "Vocal Presence & Clarity",
        "description": "Enhance vocal intelligibility and presence",
        "settings": {
          "band2": {"freq": 120, "gain": 1.0, "q": 1.5},
          "band3": {"freq": 800, "gain": 2.0, "q": 2.0},
          "band4": {"freq": 2500, "gain": 2.5, "q": 2.5},
          "band6": {"freq": 10000, "gain": 1.0, "q": 1.0}
        }
      },
      "de_ess": {
        "name": "De-esser",
        "description": "Reduce sibilance and harsh s-sounds",
        "settings": {
          "band5": {"freq": 5000, "gain": -3.0, "q": 8.0},
          "band6": {"freq": 7000, "gain": -2.0, "q": 6.0}
        }
      }
    },
    "instrument": {
      "bass_guitar": {
        "name": "Bass Guitar Enhancement",
        "description": "Add weight and definition to bass guitar",
        "settings": {
          "band1": {"freq": 80, "gain": 3.0, "q": 1.2},
          "band2": {"freq": 150, "gain": 2.0, "q": 1.8},
          "band4": {"freq": 1000, "gain": 1.0, "q": 2.0}
        }
      },
      "kick_drum": {
        "name": "Kick Drum Enhancement",
        "description": "Add weight and punch to kick drums",
        "settings": {
          "band1": {"freq": 60, "gain": 2.0, "q": 1.5},
          "band2": {"freq": 100, "gain": 1.5, "q": 2.0},
          "band4": {"freq": 3000, "gain": 2.0, "q": 3.0}
        }
      }
    },
    "problem_solving": {
      "mud_reducer": {
        "name": "Mud Reducer",
        "description": "Remove problematic low-mid frequencies",
        "settings": {
          "band3": {"freq": 350, "gain": -3.0, "q": 4.0}
        }
      },
      "harshness_control": {
        "name": "Harshness Control",
        "description": "Tame harsh high frequencies",
        "settings": {
          "band5": {"freq": 4000, "gain": -2.0, "q": 3.0},
          "band6": {"freq": 6000, "gain": -1.5, "q": 2.5}
        }
      }
    }
  },
  "genreApplications": {
    "pop": {
      "typicalSettings": {
        "band1": {"freq": 60, "gain": 1.0},
        "band3": {"freq": 400, "gain": -1.0},
        "band5": {"freq": 8000, "gain": 2.0},
        "band6": {"freq": 12000, "gain": 1.0}
      },
      "useCase": "Clean, bright, radio-friendly mix"
    },
    "rock": {
      "typicalSettings": {
        "band1": {"freq": 100, "gain": 3.0},
        "band4": {"freq": 2000, "gain": 2.0},
        "band6": {"freq": 12000, "gain": 1.5}
      },
      "useCase": "Powerful, aggressive, clear"
    },
    "electronic": {
      "typicalSettings": {
        "band2": {"freq": 60, "gain": 2.0},
        "band5": {"freq": 6000, "gain": 3.0},
        "band7": {"freq": 15000, "gain": 2.0}
      },
      "useCase": "Punchy, bright, modern"
    },
    "acoustic": {
      "typicalSettings": {
        "band1": {"freq": 80, "gain": 1.5},
        "band3": {"freq": 600, "gain": -1.0},
        "band6": {"freq": 10000, "gain": 0.5}
      },
      "useCase": "Natural, warm, balanced"
    }
  },
  "technicalSpecs": {
    "frequencyRange": [20, 20000],
    "gainRange": [-24, 24],
    "qRange": [0.7, 10],
    "latency": 0,
    "cpuUsage": 0.3,
    "sampleRates": [44100, 48000, 88200, 96000, 176400, 192000]
  }
}
```

---

## FILE: 02-Data\parameters\7band-eq-freqs.json

```json
{
  "plugin_name": "Fruity 7 Band EQ",
  "category": "Effect / Mixing",
  "engine": "Parallel Peaking Filter Bank",
  "bands": [
    {"hz": 63, "impact": "Sub-Bass", "vibe": "Weight"},
    {"hz": 250, "impact": "Low-Mids", "vibe": "Warmth"},
    {"hz": 500, "impact": "Mids", "vibe": "Body"},
    {"hz": 1500, "impact": "Upper-Mids", "vibe": "Nasal"},
    {"hz": 3000, "impact": "Presence", "vibe": "Aggression"},
    {"hz": 5000, "impact": "Brilliance", "vibe": "Crispness"},
    {"hz": 8000, "impact": "High-End", "vibe": "Air"}
  ],
  "specs": {
    "gain_range": "+/- 12dB",
    "cpu_impact": "Negligible",
    "latency": "Zero (IIR)"
  }
}

```

---

## FILE: 02-Data\parameters\eq-specs.json

```json
{
  "plugin": {
    "name": "Fruity 7 Band EQ",
    "category": "EQ",
    "type": "Graphic Equalizer",
    "officialManual": "https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%207%20Band%20EQ.htm"
  },
  "parameters": {
    "bands": [
      {"id": "band1", "freq": 63, "unit": "Hz", "label": "Sub"},
      {"id": "band2", "freq": 160, "unit": "Hz", "label": "Bass"},
      {"id": "band3", "freq": 400, "unit": "Hz", "label": "Mud/Low-Mid"},
      {"id": "band4", "freq": 1000, "unit": "Hz", "label": "Mids"},
      {"id": "band5", "freq": 2500, "unit": "Hz", "label": "Presence"},
      {"id": "band6", "freq": 6300, "unit": "Hz", "label": "Sibilance"},
      {"id": "band7", "freq": 16000, "unit": "Hz", "label": "Air"}
    ],
    "global": [
      {"id": "masterGain", "name": "Gain", "range": "-18 to +18 dB"}
    ]
  },
  "bestFor": [
    "Quick frequency balancing",
    "Low CPU environments",
    "Live mixing",
    "Individual drum hit shaping"
  ]
}
```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B (7 Band EQ)

## 1. Kick/808 Pocket
- **Rule**: If the kick is thin, boost **63Hz**. If the 808 is too muddy, cut **250Hz**.
- **Move**: Apply +/- 2dB shifts only.
- **Why**: These two bands define the Hip-Hop low-end relationship. Keeping them balanced is the secret to a professional "knock."

## 2. Vocal Clarity (The 3k Rule)
- **Rule**: Boost **3000Hz** on the lead vocal and cut **3000Hz** on the background melody.
- **Goal**: To carve a "hole" in the music for the vocal to sit in, ensuring the rapper's lyrics are 100% intelligible.

## 3. High-Hat premium Air
- **Rule**: Boost **8000Hz+** on the Hat Bus by 4dB.
- **Move**: Follow with a High-Shelf EQ at 12kHz for extra "sparkle."
- **Goal**: To capture the "Expensive" high-end sheen found in modern R&B and Pop-Hip-Hop.

## 4. Drum Break Boxiness
- **Rule**: Always cut **500Hz** on old soul drum samples.
- **Why**: sampled drums often have an annoying "wood-box" sound in the 500Hz range that makes them sound cheap in a modern digital mix.

```

---

## FILE: 03-Workflows\by-goal\car-test-translation-check.md

```markdown
# Goal Workflow: Car Test Translation Check (Consumer Proofing)

*Goal: Stress-testing your mix to see if it will fall apart on cheap car stereos or earbuds.*

## 🚶 Step-by-Step Setup
1. **The "Boom" Test**:
   - Boost the **63Hz** band to +6dB. 
   - *Logic*: Many car sub-woofers are "untuned" and over-emphasize the low end. 
   - *Check*: Does your mix distort or turn into a muddy mess? If so, you need to compress your 808 more on the desktop.
2. **The "Harsh" Test**:
   - Boost the **3000Hz** band to +4dB.
   - *Logic*: Cheap earbud speakers often have a "spike" in this range.
   - *Check*: Is the vocal hurting your ears? If it is, you need to de-ess the lead vocal more aggressively.
3. **The "Mono" Check**:
   - Set the Mixer track to Mono while the EQ is active.
4. **Final Decision**:
   - If your mix still sounds "okay" under these extreme conditions, it is likely ready for release.
5. **Reset**: Always disable this EQ before you do your final render!

## 🔄 Variations
- **The "Laptop" Simulation**: Cut **63Hz** and **250Hz** entirely. Can you still hear the "key" of your 808? If not, you need to add more saturation to the bass.
- **The "Mall" Simulation**: Boost **1500Hz** and add a massive Reverb tail.

## ⚠️ Pitfalls & Fixes
- **Problem**: I forgot to turn the EQ off.
- **Fix**: Label the plugin instance "!! TEST ONLY !!" in the mixer slot.

```

---

## FILE: 03-Workflows\by-goal\cleaning-up-muddiness.md

```markdown
# Cleaning Up Muddiness Workflow

## Goal
Remove excessive low-mid frequency build-up to allow the main elements of the mix to breathe.

## Steps
1. **Insert 7 Band EQ**: Place it on the track showing "muddiness" (often guitars, synths, or muddy vocals).
2. **Identify the Mud**: Usually resides in the **400Hz** region.
3. **Apply the Cut**: Lower the **400Hz** band (Band 3) by **3-6 dB**.
4. **Clean the Low End**: If the instrument doesn't need sub-frequencies, lower the **63Hz** band (Band 1).
5. **Check Balance**: If the track sounds too thin after the 400Hz cut, try boosting the **2.5kHz** band (Band 5) slightly to add clarity.

## Pro Tip
Fruity 7 Band EQ is extremely low CPU. Use it on individual tracks instead of Fruity Parametric EQ 2 if you only need simple, broad adjustments.

```

---

## FILE: 03-Workflows\by-goal\mixing-with-your-ears.md

```markdown
# The "Mixing with Your Ears" Workflow

## Goal
Improve a track's tone without getting distracted by complex visual graphs or dozens of parameters.

## Steps
1. **Insert 7 Band EQ**: Place it on your lead instrument or vocal.
2. **The "Band Mute" Audition**: 
   - One by one, move a slider to its maximum (+18dB).
   - Listen to what *that specific frequency* does to the sound.
   - If it sounds "harsh" or "muddy", you know you need to cut there.
   - If it sounds "exciting" or "clear", you might want a small boost.
3. **Apply the Cuts First**:
   - Start with **400Hz** (Band 3). Almost every instrument benefits from a slight cut here in a busy mix.
   - Cut **63Hz** (Band 1) if the track isn't a kick or bass.
4. **Apply Subtle Boosts**:
   - Boost **16kHz** (Band 7) for vocals or hi-hats.
   - Boost **2.5kHz** (Band 5) for lead guitars or synths to help them "pop".
5. **Level Matching**: Use the **Gain** slider to ensure the volume is the same when you toggle the EQ on/off.

## Why this works
By limiting your choices to 7 fixed bands, you spend less time "fiddling" with frequency values and more time listening to the actual tonal balance of the track.

```

---

## FILE: 03-Workflows\by-goal\quick-mastering-balance.md

```markdown
# Goal Workflow: Quick Mastering Balance (The Final Polish)

*Goal: Using broad strokes to finalize the tonal balance of your full mix before export.*

## 🎛️ Routing Context
- **Routing**: Final slot on the Master Mixer track (Post-Limiter).

## 🚶 Step-by-Step Setup
1. **The Sub Check**:
   - Boost the **63Hz** band by 1dB. Does the mix feel better or worse?
   - If better, keep it. If it sounds "boomy," try a 1dB cut instead.
2. **The "Boxy" Check**:
   - Cut the **500Hz** band by 1dB. 
   - *Logic*: This usually creates a "clearing" in the middle of the mix that allows instruments to sound more separated.
3. **The Air Check**:
   - Boost the **8000Hz+** band by 1.5dB.
   - *Result*: Adds a subtle "High-Definition" sheen to the entire song.
4. **Gain Staging**:
   - After these moves, look at your output meter. 
   - If you boosted more than you cut, lower the **Output Gain** knob by 1dB to maintain your original loudness.
5. **A/B Testing**:
   - Toggle the plugin on and off quickly. The change should be subtle—if it sounds like a completely different song, you've gone too far.

## 🔄 Variations
- **The "Vibey" Master**: Boost **250Hz** by 1dB and cut **3000Hz** by 1dB for a warmer, more analog feel.
- **The "Radio" Master**: Boost **3000Hz** and **5000Hz** by 1dB to make the mix cut through car speakers.

## ⚠️ Pitfalls & Fixes
- **Problem**: The mix sounds "thin."
- **Fix**: You have likely over-cut the **250Hz** or **500Hz** bands. Bring them back toward zero.

```

---

## FILE: 03-Workflows\by-goal\telephone-effect-graphic.md

```markdown
# Goal Workflow: Telephone Effect (The Fast Route)

*Goal: Creating a focused, lo-fi vocal or melodic texture in under 10 seconds.*

## 🚶 Step-by-Step Setup
1. **Reset**: Right-click any fader to ensure the EQ is flat.
2. **Bottom Cut**: Pull the **63Hz** and **250Hz** faders all the way down (-12dB).
   - *Result*: All the weight and bass disappear.
3. **Top Cut**: Pull the **8000Hz+** fader all the way down (-12dB).
   - *Result*: The air and crispness vanish.
4. **The Focus**: Boost the **1500Hz** and **3000Hz** faders to +6dB.
   - *Result*: The sound is now nasal and "tinny."
5. **Saturation Polish**: Add a **Fruity Fast Dist** or **Fruity Blood Overdrive** *after* the EQ.
6. **Result**: A convincing telephone/radio sound that fits perfectly for intros or background ad-libs.

## 🔄 Variations
- **The "Walkie-Talkie"**: Boost **3000Hz** to the max and add a noise gate.
- **The "Small Speaker"**: Cut only the 63Hz band and boost the 500Hz band.

## ⚠️ Pitfalls & Fixes
- **Problem**: The sound is piercing.
- **Fix**: Lower the **3000Hz** fader or the Mixer track volume.

```

---

## FILE: 04-Reference\03_Genre_Style_Board.md

```markdown
# Reference: Genre Style Board (Graphic Tonal Shaping)

Sourced applications of broad-stroke EQ in modern production.

## 1. West Coast G-Funk Lead (Upbeat)
- **Source**: DJ Quik / Battlecat style.
- **Application**: Boost **3000Hz** (+4dB). Cut **500Hz** (-3dB).
- **Vibe**: Chirpy, energetic, and thin enough to sit above a heavy bass.

## 2. Dark "Toronto" Melodies (Moody)
- **Source**: 40 (Noah Shebib).
- **Application**: Cut everything above **1500Hz**. Boost **250Hz** for warmth.
- **Vibe**: Intimacy, closeness, and "underwater" atmospheric depth.

## 3. Lo-Fi Hip-Hop Guitar (Vibey)
- **Source**: J Dilla / Lofi Girl.
- **Application**: Cut **63Hz**. Boost **500Hz** and **8000Hz**.
- **Vibe**: Woody, nostalgic, and crisp enough to feel like a sampled vinyl record.

## 4. Nu-Metal / Phonk Grit (Upbeat)
- **Source**: Phonk / Trap-Metal fusion.
- **Application**: Boost **1500Hz** and **3000Hz**. Follow with heavy Distortion.
- **Vibe**: Aggression, energy, and cutting percussive pressure.

```

---

## FILE: 04-Reference\eq-history.md

```markdown
# Technical Reference: EQ History (Graphic vs. Parametric)

Understanding the evolution of the 7-band architecture. [SRC: IL-MAN]

## 1. The Heritage
Graphic Equalizers were the first type of EQs found in professional recording studios. 
- **The Design**: They were built into huge racks where every fader controlled a physical inductor/capacitor circuit.
- **The Name**: They are called "Graphic" because the physical positions of the sliders provide a **graphic representation** of the resulting frequency curve.

## 2. Fixed Bands (The Musical Choice)
The choice of **63, 250, 500, 1.5k, 3k, 5k, 8k** is not random. These are known as "ISO Standard" frequencies.
- **250Hz**: The border between "Thump" and "Body."
- **3000Hz**: The range where human hearing is most sensitive (the "Intelligibility" zone).
- **8000Hz**: The start of the "Brilliance" or "Air" range.

## 3. Why Graphic EQ is faster?
- **Cognitive Load**: In a parametric EQ, you have 3 decisions per band (Freq, Q, Gain). In a 7-band EQ, you have **one** decision: Gain.
- **Muscle Memory**: Professional mix engineers learn the "sound" of the 500Hz fader. They know that if a sound is "boxy," they just reach for that one slider without thinking.

## 4. Phase and Quality
Fruity 7 Band EQ is an **IIR (Infinite Impulse Response)** filter.
- It is zero-latency.
- It is extremely light on CPU (one of the oldest and most optimized plugins in FL Studio).
- It produces a natural "phase shift" that mimics vintage hardware EQ behavior.

```

---

## FILE: 04-Reference\technical-docs\eq-math-q-factor.md

```markdown
# Fixed Band EQ Math & Q-Factor

## Filter Design
The Fruity 7 Band EQ uses **Peaking Filters** (also known as Bell filters). 

### What is Q-Factor?
Q (Quality Factor) determines how "wide" the boost or cut is.
- **In Fruity 7 Band EQ:** The Q-factor is fixed and optimized for each frequency. 
- **The "Overlap":** Each band overlaps slightly with its neighbors. This ensures that the EQ sounds "musical" rather than "stepped" or "surgical".

## Phase Response (Minimum Phase)
Like most analog-style EQs, this plugin is **Minimum Phase**. 
- **Result:** Every time you boost a frequency, you are also delaying that specific frequency by a few micro-seconds.
- **Impact:** This is usually unnoticeable on single tracks. However, if you use it on one half of a parallel drum bus, it can cause phase cancellation.

## Gain Scaling
The sliders are **Non-Linear**. They are more sensitive near the 0dB center point, allowing for very fine adjustments of ±1-2 dB, while still allowing for extreme ±18dB adjustments at the edges.

```

---

## FILE: 04-Reference\technical-docs\fixed-bands-vs-parametric.md

```markdown
# Fixed Band EQ vs. Parametric EQ

## Fixed Band (Graphic)
- **Control**: Predetermined frequencies.
- **Workflow**: Fast and intuitive. Good for broad "color" strokes.
- **Q-Factor**: Fixed. Adjusting one band often affects adjacent frequencies in a specific, musical way.

## Parametric EQ
- **Control**: Fully adjustable frequency, gain, and Q (bandwidth).
- **Workflow**: Surgical and precise. Good for finding resonant peaks or sharp filters.

## When to use Fruity 7 Band EQ
Use it for quick frequency balancing where you don't need to hunt for specific frequencies, but rather just want to "brighten" or "de-mud" a sound quickly.

```

---

