# Maximus - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: 00-START-HERE.md

```markdown
# Maximus: Start Here

Welcome to the **Maximus** Deeper Dive. Maximus is FL Studio's ultimate dynamics powerhouse, functioning as a 3-band compressor/limiter plus a Master wideband stage. It is the heart of professional mastering and aggressive bus processing in FL Studio.

## 🗺️ Quick Navigation Guide

### 1. The Essentials (Start Here)
- **[README.md](./README.md):** The central hub for mastering goals and engine specs.
- **[01-Learning/Quick-Reference/parameter-cheat-sheet.md](./01-Learning/Quick-Reference/parameter-cheat-sheet.md):** A map of the Band Selectors, Spline Envelopes, and Crossovers.
- **[01-Learning/Quick-Reference/maximus-signal-flow.md](./01-Learning/Quick-Reference/maximus-signal-flow.md):** Understanding the HML -> Master internal routing.

### 2. Core Concepts
- **[01-Learning/Concepts/01_UI_Map_And_Signal_Flow.md](./01-Learning/Concepts/01_UI_Map_And_Signal_Flow.md):** Detailed UI tour and functional flow.
- **[01-Learning/Concepts/03_Vibe_Translation_Guide.md](./01-Learning/Concepts/03_Vibe_Translation_Guide.md):** Using Maximus for Upbeat loudness and Vibey warmth.

### 3. Workflow Recipes
- **[03-Workflows/by-goal/loudness-maximization.md](./03-Workflows/by-goal/loudness-maximization.md):** The step-by-step commercial master setup.
- **[03-Workflows/by-goal/stereo-widening-via-high-band.md](./03-Workflows/by-goal/stereo-widening-via-high-band.md):** Mono lows and wide shimmering highs.
- **[03-Workflows/by-goal/parallel-compression-bus.md](./03-Workflows/by-goal/parallel-compression-bus.md):** Adding punch and glue to your drum bus.

## 🚀 Rapid Success Protocol
1. **Load the "Clean Master" Preset** (A great transparent starting point).
2. **Select a Band (Low, Mid, or High)** to focus your processing.
3. **Adjust the Crossovers** (Freq knobs) to isolate the Kick (Low) or Vocals (Mid).
4. **Draw your Envelope:** Use the spline graph to set your Threshold and Ratio.
5. **Set the Release:** Use **Rel 1** for the main recovery and **Rel 2** for adaptive smoothness.
6. **Apply Saturation:** Use the **THRES** and **CEIL** handles in the saturation section for analog warmth.

---
*For technical specs and parameter data, see the [02-Data/](./02-Data/) folder.*

```

---

## FILE: README.md

```markdown
# Maximus - Multiband Maximizer

`\`\`
███╗   ███╗ █████╗ ██╗  ██╗██╗███╗   ███╗██╗   ██╗███████╗
████╗ ████║██╔══██╗╚██╗██╔╝██║████╗ ████║██║   ██║██╔════╝
██╔████╔██║███████║ ╚███╔╝ ██║██╔████╔██║██║   ██║███████╗
██║╚██╔╝██║██╔══██║ ██╔██╗ ██║██║╚██╔╝██║██║   ██║╚════██║
██║ ╚═╝ ██║██║  ██║██╔╝ ██╗██║██║ ╚═╝ ██║╚██████╔╝███████║
╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚═╝     ╚═╝ ╚═════╝ ╚══════╝
`\`\`

**Plugin Type:** Multiband Dynamics / Limiter / Maximizer
**Category:** Dynamics / Mastering
**Official Manual:** [Image-Line Maximus Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Maximus.htm)

---

## 🎯 What is Maximus?

Maximus is FL Studio's ultimate dynamics powerhouse. It functions as a **3-band compressor/limiter** plus a **Master wideband stage**. It is designed for mastering, bus processing, and aggressive sound design. Each band features a fully customizable, spline-based compression envelope, allowing for precision limiting, gating, expansion, and soft-clipping.

**Key Capabilities:**
- **Multiband Design:** Independent control over Low, Mid, and High frequency bands.
- **Custom Envelopes:** Draw any compression curve (Soft knee, Hard knee, Gate, Expander).
- **Dual Saturation:** Soft and Hard saturation per band for added warmth.
- **Look-Ahead:** Prevent transients from peaking with custom look-ahead times.
- **Parallel Processing:** Integrated Mix knobs for "New York" style compression.
- **Visual Analysis:** Real-time waveform and envelope monitoring for every band.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **maximus-signal-flow.md** (HML -> Master chain)
3. Create **parameter-cheat-sheet.md**
4. Load the "Clean Master" preset and watch how the Low band handles the kick vs the High band.

### For Mastering Engineers:
1. Study **transparent-multiband-limiting.md**
2. Review **stereo-separation-per-band.md** (Widening highs, Mono lows)
3. Learn **loudness-maximization-techniques.md**

### For Sound Designers:
1. Study **aggressive-multiband-saturation.md**
2. Review **upward-compression-for-textures.md**
3. Learn **dynamic-eq-simulation.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Band Selectors:** Low, Mid, High, Master.
  - **Compression Envelope:** Interactive graph.
  - **Freq Knobs:** Crossover point settings.
  - **Release:** Release 1 and Release 2 (Adaptive release).
  - **Saturation:** Amount and Type.

- [ ] **signal-flow-matrix.md**
  - How the frequency split happens.
  - The "Master" band's role as a final ceiling.

#### 02-Data/parameters/
- [ ] **maximus-params.json**
  `\`\`json
  {
    "plugin_name": "Maximus",
    "category": "Dynamics",
    "bands": ["Low", "Mid", "High", "Master"],
    "features": ["Spline envelopes", "Multiband saturation", "PDC"]
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **loudness-maximization.md**
  - Driving the gain into the Master band limiter.
  - Using the Low band to control the sub-energy.
  - Saturating the Mids for perceived loudness.

- [ ] **stereo-widening-via-high-band.md**
  - Setting High band "Stereo Sep" to the left.
  - Setting Low band "Stereo Sep" to the right (Mono).
  - Result: Solid low end with shimmering, wide highs.

- [ ] **parallel-compression-bus.md**
  - Using the "Mix" knob on the Master tab.
  - Adding "Glue" to a drum bus without losing transients.

#### 03-Workflows/by-context/
- [ ] **trap-808-mastering.md**
- [ ] **vocal-multiband-cleanup.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **linear-phase-vs-iir-crossovers.md**
  - Phase shift analysis at the crossover points.
- [ ] **adaptive-release-curves.md**
  - Explaining the "Rel 2" parameter.

---

## 🔬 Research Framework

### Phase 1: Frequency Splitting (Week 1)
**Goal:** The Crossover

**Tasks:**
1. Put Maximus on a full mix
2. Use "Solo" buttons to listen to Low, Mid, and High bands
3. Adjust the crossover frequencies to find the sweet spots
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- What are the default crossover frequencies?
- Does the "Band Off" switch bypass the audio or silence it?

### Phase 2: Envelope Design (Week 2)
**Goal:** Custom Dynamics

**Tasks:**
1. Create a Noise Gate using the spline graph
2. Create an Expander using the spline graph
3. Compare "Soft" vs "Hard" saturation modes
4. Create loudness-maximization.md

---

## 📊 Plugin Specifications to Document

### Engine
- Frequency Range (20Hz - 20kHz)
- Oversampling (if applicable)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is my audio distorted? (Input gain is too high or release is too fast).
2. How do I disable the multiband and use it as a single-band limiter? (Select the "Master" tab and turn off the HML bands).

---

## 🔗 Cross-Reference with Other Plugins

Maximus is often used with:
- **Fruity Limiter** (Standard track limiter)
- **Soundgoodizer** (Powered by the Maximus engine)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
Maximus/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── maximus-signal-flow.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── maximus-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── loudness-maximization.md
│   │   └── stereo-widening-via-high-band.md
│
└── 04-Reference/
    └── adaptive-release-curves.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Maximus Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Maximus.htm)
- [Maximus Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Maximus_tutorials.htm)
- [Maximus Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+maximus+tutorial)

### Community Resources
- [Maximus Subreddit](https://www.reddit.com/r/FL_Studio/search?q=maximus&restrict_sr=1)
- [Maximus User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Maximus Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for detailed audio analysis before/after processing
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity dB Meter** for precise level monitoring
- **Fruity Limiter** for comparison with single-band processing

### Recommended Learning Materials
- "Multiband Compression Fundamentals" - Understanding frequency-specific dynamics
- "Mastering with Multiband Processors" - Professional loudness maximization
- "Spline Envelope Design" - Creating custom compression curves

### Advanced Techniques
- **Adaptive Release:** Using dual release settings for different material
- **Stereo Separation:** Controlling width per frequency band
- **Saturation Integration:** Combining multiband processing with harmonic enhancement

---

## 🧪 Experimental Techniques

### Advanced Multiband Applications
Creative uses of Maximus's multiband capabilities:

**Custom Envelope Design:**
- **Noise Gate Creation:** Creating precise noise gates with spline envelopes
  - Draw steep curves for gate-like behavior
  - Use for removing noise from specific bands
  - Perfect for clean, precise gating
  - Essential for noise control
  - Useful for band-specific noise removal

**Expander Applications:**
- **Dynamic Expansion:** Creating expanders for specific frequency ranges
  - Draw inverse curves for expansion
  - Use for increasing dynamic range
  - Perfect for subtle dynamic enhancement
  - Essential for dynamic expansion
  - Useful for band-specific expansion

**Parallel Processing:**
- **New York Compression:** Using parallel processing per band
  - Apply high mix settings for parallel compression
  - Use for maintaining transients while adding character
  - Perfect for drum bus processing
  - Essential for parallel compression techniques
  - Useful for maintaining dynamics while adding punch

### Creative Parameter Manipulation
Advanced techniques for parameter control:

**Envelope Automation:**
- **Dynamic Envelope Changes:** Automating spline envelopes for evolving effects
  - Create evolving compression characteristics
  - Use for dynamic expression
  - Perfect for evolving arrangements
  - Essential for dynamic envelope expression
  - Use for expressive compression control

**Modulation Applications:**
- **Parameter Modulation:** Using external modulation sources
  - Modulate with envelope followers
  - Combine with other modulation sources
  - Create complex modulation chains
  - Perfect for evolving sounds
  - Use for dynamic expression

**Multi-Stage Processing:**
- **Complex Enhancement:** Multiple processing stages for sophisticated effects
  - Create multi-stage compression enhancement
  - Apply different processing to different stages
  - Build sophisticated processing chains
  - Perfect for advanced sound design
  - Use for complex processing

## 🎚️ Workflow Optimization

### Mastering Workflows
Efficient approaches to using Maximus for mastering:

**Loudness Maximization:**
- **Professional Loudness:** Achieving commercial loudness levels
  - Use Master band for final ceiling
  - Apply band-specific processing for balance
  - Essential for professional mastering
  - Pro tip: Use adaptive release for natural results

- **Transparency Preservation:** Maintaining dynamics while maximizing
  - Use appropriate release settings
  - Apply minimal processing for transparency
  - Essential for quality mastering
  - Pro tip: Use parallel processing for dynamics preservation

**Mix Enhancement:**
- **Frequency-Specific Control:** Managing different frequency ranges
  - Use Low band for sub-bass control
  - Apply Mid band for vocal clarity
  - Use High band for brightness control
  - Essential for professional mixing
  - Pro tip: Use for frequency-specific dynamics

### Integration Workflows
Working with other plugins and tools:

**Effects Integration:**
- **Pre-Effects:** Using before other effects
  - Apply before reverb for spatial effects
  - Use before delay for rhythmic patterns
  - Essential for proper signal flow
  - Pro tip: Use for dynamics preparation

- **Post-Effects:** Using after other effects
  - Apply after reverb for processed spatial effects
  - Use after delay for processed rhythmic patterns
  - Essential for final processing
  - Pro tip: Use for final dynamics control

**Analysis Integration:**
- **Spectrum Analysis:** Using with spectrum analyzers for feedback
  - Monitor frequency changes in real-time
  - Compare with reference tracks
  - Essential for informed parameter control
  - Pro tip: Use for visual feedback

## 🎧 Genre-Specific Applications

### Electronic Dance Music
- **Loudness Maximization:** Achieving commercial loudness levels
- **Frequency Control:** Managing different frequency ranges independently
- **Stereo Enhancement:** Using stereo separation per band
- [ ] Mix a drum bus so the kick is mono and the cymbals are wide using only Maximus
- [ ] Design a "Brickwall" limiter profile from a blank envelope
- [ ] Use multiband saturation to make a weak synth sound "professional"
- [ ] Successfully troubleshoot phase issues at crossover frequencies
- [ ] Create a transparent multiband limiter for mastering applications
- [ ] Set up frequency-specific dynamics processing for different instruments
- [ ] Use the spline envelope editor for custom compression curves
- [ ] Apply appropriate stereo separation for different frequency bands
- [ ] Create parallel compression effects using the Mix control
- [ ] Troubleshoot inter-band interference and phase issues effectively
- [ ] Integrate Maximus into efficient mastering workflows
- [ ] Create genre-specific maximization presets for different musical styles
- [ ] Optimize Maximus settings for minimal artifacts
- [ ] Use Maximus for creative sound design applications
- [ ] Set up advanced multiband routing for complex projects
- [ ] Apply Maximus in live performance scenarios
- [ ] Create experimental dynamics effects with extreme settings
- [ ] Combine Maximus with other effects for layered processing
- [ ] Integrate Maximus with other automation tools seamlessly
- [ ] Create custom dynamics workflows for specific creative needs
- [ ] Use Maximus effectively in large, complex projects
- [ ] Generate complex multiband processing with precise control
- [ ] Create hybrid dynamics processing combining multiband and single-band approaches
- [ ] Apply Maximus in mastering contexts with appropriate care
- [ ] Create complex multi-stage dynamics chains with smooth automation
- [ ] Design custom dynamics patches for specific musical contexts
- [ ] Use Maximus for creative vocal processing applications
- [ ] Apply advanced saturation techniques for character enhancement
- [ ] Create genre-specific preset libraries for efficient workflow
- [ ] Integrate Maximus with external hardware for hybrid processing
- [ ] Use Maximus for audio restoration and creative repair applications
- [ ] Combine Maximus with other spectral processing tools
- [ ] Apply Maximus in surround sound or multi-channel setups
- [ ] Create complex dynamic relationships using multiple bands
- [ ] Use Maximus for creative instrumental processing applications
- [ ] Integrate Maximus with other automation tools for complex control
- [ ] Create complex atmospheric textures using multiband processing
- [ ] Design custom envelope curves for unique dynamic responses
- [ ] Apply advanced filtering techniques for tone shaping
- [ ] Use Maximus for creative stereo enhancement beyond traditional methods
- [ ] Combine Maximus with convolution for hybrid dynamics approaches
- [ ] Implement advanced envelope shaping for dynamic expression
- [ ] Create genre-specific spatial presets for efficient workflow
- [ ] Use Maximus for creative sound design in film and game audio
- [ ] Apply Maximus in live sound reinforcement scenarios
- [ ] Create experimental dynamics textures using extreme parameter settings
- [ ] Integrate Maximus with external dynamics processors for complex design
- [ ] Generate complex harmonic structures with saturation controls
- [ ] Use Maximus for formant preservation and enhancement
- [ ] Apply advanced resonance techniques for character enhancement
- [ ] Create evolving textures using parameter automation
- [ ] Design custom multiband processing patterns for sophisticated dynamics
- [ ] Use Maximus for creative bass enhancement with multiband control
- [ ] Combine Maximus with other vintage emulations for authentic sounds
- [ ] Apply Maximus in educational contexts for dynamics learning
- [ ] Create custom dynamics patches for retro music production
- [ ] Use Maximus for creative lead enhancement with multiband processing
- [ ] Implement advanced adaptive release techniques for natural compression

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\Concepts\01-limiting-deep-dive.md

```markdown
# Maximus Concepts

## Limiting Deep Dive

Limiting is compression with very high ratios. Understanding the nuances helps achieve better results.

---

## Limiting vs Compression

| Aspect | Limiting | Compression |
|--------|----------|-------------|
| Ratio | 4:1 to ∞:1 | 1.5:1 to 10:1 |
| Purpose | Peak control, loudness | Tone, dynamics |
| Attack | Fast (0.01-1ms) | Variable (0.1-100ms) |
| Character | Transparent (ideally) | Can be colored |
| Use | Final stage | Throughout mix |

---

## Gain Staging for Limiting

### Ideal Signal Flow
1. **Pre-Limiter Signal**: Peaks at -6 to -3 dB
2. **After Limiting**: Signal hits ceiling
3. **Output**: Clean limited signal

### Common Mistake
- Pushing input too hot causes distortion BEFORE limiting
- Solution: Leave 3-6 dB headroom before limiter

---

## Attack Time Explained

### Fast Attack (0.01-0.3ms)
- Immediate peak control
- Maximum loudness
- May lose punch/transients
- Good for: EDM, heavy limiting

### Medium Attack (0.3-1ms)
- Balance of control and punch
- Good for: General limiting
- Safe choice for most applications

### Slow Attack (1-10ms)
- Allows transients through
- Preserves punch
- Less limiting effect
- Good for: Mastering, subtle control

---

## Release Time Explained

### Fast Release (10-50ms)
- Quick recovery
- Creates "pumping" feel
- Can sound aggressive
- Good for: Heavy bass, rhythmic pumping

### Medium Release (50-150ms)
- Natural recovery
- Most versatile
- Good for: General mix and master

### Slow Release (150-300ms)
- Smooth, lazy recovery
- Minimal pumping
- Preserves dynamics
- Good for: Acoustic, jazz, subtle

---

## Ceiling and True Peak

### Digital Ceiling
- Maximum possible level: 0 dB
- Set below 0 dB for headroom
- -0.1 dB = maximum loudness
- -0.3 dB = safe headroom

### True Peak
- Inter-sample peak (between samples)
- Can exceed sample values
- True peak limiting ensures no overs
- Use metering that shows true peaks

---

## LUFS and Loudness Targets

### What is LUFS?
- **LUFS** - Loudness Units relative to Full Scale
- Perceptual loudness measurement
- Better than peak metering

### Target Levels
| Platform | Target LUFS | True Peak |
|----------|-------------|-----------|
| Spotify | -14 LUFS | -1 dBTP |
| Apple Music | -16 LUFS | -1 dBTP |
| YouTube | -14 LUFS | -1 dBTP |
| Amazon | -14 LUFS | -1 dBTP |
| CD | -9 LUFS | -0.1 dBTP |

---

## Related Documentation

- [Maximus By-Instrument Workflows](../03-Workflows/by-instrument/INDEX.md)
- [Maximus By-Goal Workflows](../03-Workflows/by-goal/INDEX.md)
- [Maximus Presets](../02-Data/presets/INDEX.md)
- [Maximus Safety Rules](../02-Data/rules/maximus-safety-rules.md)

```

---

## FILE: 01-Learning\Concepts\02-lufs-loudness.md

```markdown
# Maximus LUFS and Loudness

## What Are LUFS?

LUFS (Loudness Units relative to Full Scale) measure perceived loudness, accounting for how human ears actually hear.

### Why LUFS Matter
- Reflects how loud we perceive sound
- Accounts for frequency response
- Standard for streaming platforms
- Better than peak metering

---

## LUFS vs Peaks

### Peak Metering
- Measures highest instantaneous level
- Doesn't reflect perceived loudness
- Can be misleading
- True peaks more accurate but still imperfect

### LUFS
- Measures integrated loudness over time
- Accounts for frequency response
- Matches how ears perceive loudness
- Industry standard for streaming

---

## Platform Targets

### Streaming
| Platform | Target LUFS | True Peak |
|----------|-------------|-----------|
| Spotify | -14 | -1 dBTP |
| Apple Music | -16 | -1 dBTP |
| YouTube | -14 | -1 dBTP |
| Amazon | -14 | -1 dBTP |
| Tidal | -14 | -1 dBTP |

### Traditional
| Format | Target LUFS | True Peak |
|--------|-------------|-----------|
| CD | -9 | -0.1 dBTP |
| Vinyl | -12 | -1 dBTP |
| Radio | -16 | -1 dBTP |

---

## Loudness Hierarchy

### Most Common
| Level | LUFS | Use Case |
|-------|------|----------|
| Streaming Standard | -14 | Spotify, YouTube |
| Apple Standard | -16 | Apple Music |
| Mastering Standard | -9 | CD, Distribution |
| Dynamic | -12 to -8 | Artistic choice |

---

## How Maximus Helps

### Achieving Targets
1. **Input Gain** - Pre-limiter boost
2. **Threshold** - Control point
3. **Ratio** - Limiting intensity
4. **Ceiling** - Output limit

### Strategy
| Goal | Approach |
|------|----------|
| -14 LUFS | Moderate limiting |
| -16 LUFS | Heavier limiting |
| -9 LUFS | Minimal limiting |

---

## True Peak Explained

### What Are True Peaks?
- Inter-sample peaks (between samples)
- Can exceed sample values
- Cause distortion on D/A conversion
- Must be controlled separately

### True Peak Limit
| Platform | Maximum |
|----------|---------|
| Spotify | -1 dBTP |
| Apple | -1 dBTP |
| YouTube | -1 dBTP |
| CD | -0.1 dBTP |

### Maximus Ceiling
- Set to -0.3 dB for streaming
- More conservative for CD (-0.1 dB)
- Never set at 0 dB

---

## Practical Application

### Step 1: Measure
1. Load LUFS meter
2. Measure integrated loudness
3. Note True Peak levels

### Step 2: Calculate
`\`\`
Needed Change = Target - Current
Example: -14 - (-12) = -2 dB
`\`\`

### Step 3: Apply
1. Use Maximus for final limiting
2. Adjust Input Gain for needed change
3. Monitor True Peak

### Step 4: Verify
1. Re-measure after limiting
2. Check True Peak
3. Adjust if needed

---

## Common Mistakes

### Too Loud
- > -12 LUFS for streaming
- Causes listener fatigue
- Platform will turn down anyway

### Too Quiet
- < -16 LUFS for Spotify
- Sounds quiet next to other tracks
- Listener may skip

### Ignoring True Peak
- Causes distortion
- Even if samples look OK
- Must measure True Peak

---

## Related Documentation

- [Maximus Limiting Deep Dive](01-limiting-deep-dive.md)
- [Maximus Parameter Quick Reference](../Quick-Reference/parameter-quick-reference.md)
- [Mastering Preparation Workflow](../03-Workflows/by-goal/02-mastering-preparation.md)

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: Maximus

Using multiband dynamics to shape the "feeling" of Hip-Hop, R&B, and Pop masters.

---

## 1. UPBEAT
*Loud, punchy, bright, and aggressive.*
- **The Mental Model:** A high-energy club track that hits hard and stays bright.
- **Maximus Levers:**
    - **Loudness:** Drive the **Master Pre-Gain** into the limiter until you hit your target LUFS (e.g. -8 to -6).
    - **Mid Punch:** Select the **Mid** band. Use a "Soft" saturation curve to add harmonic presence to the vocals and snares.
    - **High Shimmer:** Select the **High** band. Turn the **Stereo Sep** to the left (Widen) to make the hats and air "pop."
    - **Snappy Transient:** Use a fast **Attack** on the Master band to keep the kick and snare edges sharp.
- **Listen For:** A mix that feels "energetic" and "in-your-face."

## 2. VIBEY
*Warm, glued, smooth, and expensive.*
- **The Mental Model:** Smooth modern R&B or Neo-Soul; everything feels like it's part of the same "unit."
- **Maximus Levers:**
    - **Saturation Glue:** Use "Soft" saturation on all three bands (Low, Mid, High) at low levels. This "rounds off" the digital peaks.
    - **Slow Release:** Use a slower **Rel 2** (Adaptive) setting to prevent the compressor from "pumping."
    - **Parallel Glue:** Set the **Mix** knob on the Master band to 80%. This lets some of the original dynamics breathe while adding the Maximus weight.
- **Listen For:** A "rounded," warm character that feels expensive and controlled.

## 3. MOODY
*Heavy low-end, dark atmosphere, and weight.*
- **The Mental Model:** Deep, atmospheric R&B (Drake / 40 style).
- **Maximus Levers:**
    - **Low Band Focus:** Select the **Low** band. Boost the **Pre-Gain** and set a high **Release** time so the sub-bass feels "heavy" and "long."
    - **High-End Control:** Select the **High** band. Lower the **Post-Gain** slightly to "darken" the mix.
    - **Mid Space:** Increase the **Stereo Sep** on the Mid band to push the instruments to the edges, creating a "hollow" moody center for the vocal.
- **Listen For:** A mix that feels "bottom-heavy" and slightly distant or dark.

## 4. JAZZY / NATURAL
*Dynamic, transparent, and respectful of the performance.*
- **The Mental Model:** A live ensemble; maintaining the "breathing" of the instruments.
- **Maximus Levers:**
    - **Soft Knees:** Draw very smooth, gentle curves on the spline graph. No harsh "corners."
    - **Rel 2 Mastery:** Set **Rel 2** to a high value. This makes the release response very musical and less like a digital limiter.
    - **Minimal Crossover:** Don't split the bands too aggressively. Keep the crossovers at their default transparent positions.
- **Listen For:** Dynamics that feel controlled but never "choked."

---

## Vibe Check Matrix
| Vibe | Saturation | Master Pre-Gain | Stereo Sep (High) | Release Speed |
| :--- | :--- | :--- | :--- | :--- |
| **Upbeat** | Hard/Soft | High | Wide (Left) | Fast |
| **Vibey** | Soft | Mid | Normal | Slow |
| **Moody** | OFF/Soft | Mid | Normal | Slow |
| **Jazzy** | OFF | Low | Normal | Slow |
| **Psyched**| Hard | High | Extreme | Pulsing |

```

---

## FILE: 01-Learning\Quick-Reference\01-parameter-quick-reference.md

```markdown
# Maximus Quick Reference

## Parameters at a Glance

| Parameter | Range | Default | Purpose |
|-----------|-------|---------|---------|
| Input Gain | 0-12 dB | 0 dB | Drive limiter |
| Threshold | -30 to 0 dB | -6 dB | Limiting point |
| Ratio | 1:1 to ∞:1 | 4:1 | Intensity |
| Attack | 0.01-10 ms | 0.5 ms | Response speed |
| Release | 10-1000 ms | 100 ms | Recovery |
| Ceiling | -1.0 to 0 dB | -0.3 dB | Max output |
| Output Gain | 0-12 dB | 0 dB | Compensation |

---

## Attack Time Guide

| Application | Attack Time | Purpose |
|-------------|-------------|---------|
| EDM/Dubstep | 0.05-0.2 ms | Maximum control |
| Hip-Hop | 0.1-0.3 ms | Punch preservation |
| Pop/Rock | 0.3-1.0 ms | Natural feel |
| Vocals | 0.3-0.5 ms | Clarity |
| Mastering | 0.3-0.5 ms | Transparency |
| Glue | 1-3 ms | Transient through |

---

## Release Time Guide

| Tempo | Release Range | Feel |
|-------|---------------|------|
| 140+ BPM | 25-50 ms | Tight, pumping |
| 100-140 BPM | 50-100 ms | Standard |
| 70-100 BPM | 100-150 ms | Natural |
| <70 BPM | 150-250 ms | Smooth |

---

## Gain Reduction by Genre

| Genre | Typical GR | Ratio | Notes |
|-------|------------|-------|-------|
| Classical | 0-2 dB | 2:1-3:1 | Preserve dynamics |
| Jazz | 1-3 dB | 3:1 | Natural feel |
| Pop | 3-6 dB | 4:1-5:1 | Competitive |
| Hip-Hop | 4-8 dB | 6:1-8:1 | Heavy |
| EDM | 6-10 dB | 8:1-10:1 | Maximum loudness |
| Metal | 6-12 dB | 10:1-15:1 | Very aggressive |

---

## Ceiling Settings

| Purpose | Ceiling | Notes |
|---------|---------|-------|
| Maximum loudness | -0.1 dB | Risky for transients |
| Standard | -0.3 dB | Safe choice |
| Extra headroom | -0.5 dB | For multi-platform |
| Mastering safe | -0.3 dB | Industry standard |

---

## Loudness Targets

| Platform | LUFS Target | True Peak |
|----------|-------------|-----------|
| Spotify | -14 | -1 dBTP |
| Apple Music | -16 | -1 dBTP |
| YouTube | -14 | -1 dBTP |
| Amazon | -14 | -1 dBTP |
| CD | -9 | -0.1 dBTP |

---

## Genre Starting Points

### Hip-Hop
| Parameter | Value |
|-----------|-------|
| Ratio | 8:1 |
| Attack | 0.15 ms |
| Release | 50 ms |
| GR | 6-8 dB |
| Ceiling | -0.2 dB |

### R&B
| Parameter | Value |
|-----------|-------|
| Ratio | 4:1 |
| Attack | 0.5 ms |
| Release | 120 ms |
| GR | 3-5 dB |
| Ceiling | -0.3 dB |

### EDM
| Parameter | Value |
|-----------|-------|
| Ratio | 10:1 |
| Attack | 0.08 ms |
| Release | 40 ms |
| GR | 6-10 dB |
| Ceiling | -0.1 dB |

### Pop
| Parameter | Value |
|-----------|-------|
| Ratio | 5:1 |
| Attack | 0.3 ms |
| Release | 80 ms |
| GR | 4-6 dB |
| Ceiling | -0.3 dB |

---

## Troubleshooting Guide

| Problem | Likely Cause | Solution |
|---------|--------------|----------|
| Distorted | Input too hot | Lower input gain |
| Pumping | Release too fast | Increase release |
| No punch | Attack too fast | Slow attack |
| Not loud | GR too light | Lower threshold |
| Squashed | GR too heavy | Reduce gain reduction |
| Clipping | Ceiling too high | Lower ceiling |

---

## Related Documentation

- [Limiting Deep Dive](../02-Learning/Concepts/01-limiting-deep-dive.md)
- [Maximus Workflows](../03-Workflows/INDEX.md)
- [Maximus Presets](../02-Data/presets/INDEX.md)

```

---

## FILE: 01-Learning\Quick-Reference\02-parameter-reference.md

```markdown
# Maximus Parameter Reference

## Parameter Map

| Parameter | Range | Default | Purpose |
|-----------|-------|---------|---------|
| Input Gain | 0-12 dB | 0 dB | Pre-limiter boost |
| Threshold | -30 to 0 dB | -6 dB | Control point |
| Ratio | 1:1 to 20:1 | 4:1 | Intensity |
| Attack | 0.01-10 ms | 0.5 ms | Response speed |
| Release | 10-1000 ms | 100 ms | Recovery |
| Ceiling | -1.0 to 0 dB | -0.3 dB | Max output |
| Output Gain | 0-12 dB | 0 dB | Compensation |

---

## Input Gain

### Purpose
Pre-limiter boost to drive the limiter harder.

### Values
| Setting | Effect | Use |
|---------|--------|-----|
| 0 dB | Clean signal | Transparency |
| +1 to +3 dB | Slight boost | Standard loudness |
| +3 to +6 dB | Heavy boost | Maximum loudness |

### Guidelines
- Start with 0 dB
- Add as needed for loudness
- Watch for distortion

---

## Threshold

### Purpose
Point at which limiting begins.

### Values
| Setting | Effect |
|---------|--------|
| -2 dB | Minimal limiting |
| -4 dB | Standard limiting |
| -6 dB | Moderate limiting |
| -8 dB | Heavy limiting |

### Guidelines
- Higher (less negative) = less limiting
- Lower (more negative) = more limiting
- Match to input level

---

## Ratio

### Purpose
Intensity of limiting.

### Values
| Ratio | Character | Use |
|-------|-----------|-----|
| 2:1 | Light | Transparency |
| 4:1 | Standard | General use |
| 8:1 | Heavy | Loudness |
| 12:1+ | Extreme | Maximum loudness |

### Guidelines
- Higher ratio = more gain reduction
- Can cause distortion if too high
- Match to genre/style

---

## Attack

### Purpose
How fast the limiter responds.

### Values
| Setting | Speed | Use |
|---------|-------|-----|
| 0.05-0.1 ms | Instant | EDM, heavy |
| 0.2-0.5 ms | Fast | General |
| 0.5-1.0 ms | Medium | Vocals |
| 1-5 ms | Slow | Transparency |

### Guidelines
- Faster = more control, possible pumping
- Slower = preserves transients
- Match to source material

---

## Release

### Purpose
How fast the limiter recovers.

### Values
| Setting | Speed | Feel |
|---------|-------|------|
| 25-50 ms | Fast | Tight, pumping |
| 50-150 ms | Medium | Natural |
| 150-300 ms | Slow | Smooth |
| 300+ ms | Very slow | Gentle |

### Guidelines
- Sync to tempo for rhythmic pumping
- Faster = more pumping
- Slower = smoother
- Auto mode often works well

---

## Ceiling

### Purpose
Maximum output level.

### Values
| Setting | Use |
|---------|-----|
| -0.1 dB | Maximum loudness |
| -0.3 dB | Standard |
| -0.5 dB | Extra headroom |
| -1.0 dB | Mastering safe |

### Guidelines
- Always below 0 dB
- -0.3 dB for streaming
- Check True Peak meter

---

## Genre Settings

### Pop
| Parameter | Value |
|-----------|-------|
| Input Gain | +2 dB |
| Threshold | -4 dB |
| Ratio | 4:1 |
| Attack | 0.3 ms |
| Release | 100 ms |
| Ceiling | -0.3 dB |

### Hip-Hop
| Parameter | Value |
|-----------|-------|
| Input Gain | +3 dB |
| Threshold | -5 dB |
| Ratio | 6:1 |
| Attack | 0.15 ms |
| Release | 60 ms |
| Ceiling | -0.2 dB |

### EDM
| Parameter | Value |
|-----------|-------|
| Input Gain | +4 dB |
| Threshold | -6 dB |
| Ratio | 10:1 |
| Attack | 0.08 ms |
| Release | 40 ms |
| Ceiling | -0.1 dB |

### Rock
| Parameter | Value |
|-----------|-------|
| Input Gain | +1 dB |
| Threshold | -3 dB |
| Ratio | 4:1 |
| Attack | 0.5 ms |
| Release | 120 ms |
| Ceiling | -0.3 dB |

---

## Troubleshooting

| Issue | Likely Cause | Solution |
|-------|--------------|----------|
| Distortion | Input too hot | Lower input |
| Pumping | Release too fast | Increase release |
| No punch | Attack too fast | Slow attack |
| Not loud | Ratio too low | Increase ratio |
| Squashed | GR too heavy | Reduce GR |
| Clipping | Ceiling at 0 | Lower ceiling |

---

## Related Documentation

- [Maximus Limiting Deep Dive](../Concepts/01-limiting-deep-dive.md)
- [LUFS and Loudness](../Concepts/02-lufs-loudness.md)

```

---

## FILE: 01-Learning\Quick-Reference\cheat-sheet.md

```markdown
# Maximus: The Loudness Beast

> **Scope:** Multiband Dynamics, Spline Compression, and Saturation.
> **Source:** Image-Line Official Manual (v21.2) + Direct Analysis.
> **Complexity:** Very High.

## 🧠 The "Maximizer" Concept
Maximus is not just a limiter; it's a **Multiband Waveshaper**. Unlike standard compressors that use a fixed Ratio, Maximus uses a **customizable graph** to map Input gain to Output gain. This allows it to act as an Expander, Gate, Compressor, and Limiter simultaneously.

**Signal Flow:**
`Input` -> **[LOW CUT]** -> **[CROSSOVERS (HML)]** -> **[PRE-GAIN]** -> **[ENVELOPE/CURVE]** -> **[SATURATION]** -> **[ATT/REL]** -> **[POST-GAIN]** -> **[MASTER BAND]** -> **[OUTPUT]**

*   **Critical Nuance:** The "Master" band processes the *sum* of the High, Mid, and Low bands. It has its own independent envelope and saturation.

---

## 🎛️ Section 1: The Transfer Graph (ENVELOPE Tag)

This is the brain of the plugin. X-axis = Input dB. Y-axis = Output dB.

### Graph Mechanics
| Feature | Function & Nuance |
| :--- | :--- |
| **Mapping** | **1:1 Line:** 45-degree diagonal. Input = Output. <br> **Below Line:** Compression/Limiting. <br> **Above Line:** Expansion. |
| **Knee** | **User Defined.** You draw the knee. It can be hard, soft, S-shaped, or inverted. |
| **Snap** | **Grid Locking.** Essential for setting precise ceiling points (e.g., exactly -0.1dB). |
| **Curve Types** | Right-click a point to change: <br> *Single Curve:* Standard. <br> *Double Curve:* Smooth "S" shape. <br> *Hold/Stairs:* Bit-crusher effect on dynamics. |

### Essential Curves
1.  **Brickwall Limiter:** A straight horizontal line at the top.
2.  **Soft Knee:** A gentle curve rolling off the peaks.
3.  **Noise Gate:** The line drops to -infinity at the bottom left (silencing quiet sounds).
4.  **Upward Compression:** The line is curved *up* in the quieter sections (boosting low-level details).

---

## 🔁 Section 2: Band & Saturation Controls

Each band (Low, Mid, High, Master) has identical controls but operates on different frequencies.

### Saturation (The Secret Sauce)
Maximus has a unique "Dual Saturation" engine per band.

| Control | Function & Nuance |
| :--- | :--- |
| **Thres (Knob)** | **Level & Type.** <br> *Turn Left (Type A):* Harder, transistor-like distortion. <br> *Turn Right (Type B):* Softer, tube-like saturation. <br> *Center:* Off. |
| **Ceil (Ceiling)** | **Soft Clip Threshold.** <br> Determines at what dB the saturation kicks in. Lowering this makes the sound "crunchier" at lower volumes. |
| **Mode** | **Band Interaction.** <br> *Comp Off:* Disables the envelope but keeps Saturation/Gain active. Useful for purely coloring a band. <br> *Muted:* Silences the band. |

### Stereo Mechanics
| Control | Function |
| :--- | :--- |
| **Sep (Separation)** | **Width Control.** <br> *Right:* Merges to Mono (Ideal for Low Band). <br> *Left:* Widens Stereo (Ideal for High Band). <br> *Algorithm:* Uses Mid/Side matrixing. |

---

## ⏳ Section 3: Time Constants (Attack/Release)

Maximus uses a "Lookahead" system for attack.

| Control | Range | Function & Nuance |
| :--- | :--- | :--- |
| **ATT** | 0ms+ | **Lookahead Delay.** <br> *HML Bands:* Shifts the audio into the past so the limiter can "see" peaks coming. <br> *Master Band:* Defines the actual specific attack time of the final limiter. |
| **REL (1)** | ms | **Accelerating Release.** <br> Fast recovery. Good for transients/drums. |
| **REL 2** | ms | **Decelerating Release.** <br> Slow, smooth recovery. Good for sustained tones/bass. |
| **Curve** | 1-8 | **Release Slope.** <br> Blends between Rel 1 and Rel 2 curves. Steeper slopes = snappier action. |
| **Sustain** | ms | **RMS Averaging.** <br> Holds the compression state. Prevents "fluttering" on low frequencies. |

---

## ⚡ Technical Specs: Linear Phase (LIN)

Located in the "LO" and "HIGH" frequency knobs section.

*   **Mode OFF (IIR):** Zero latency. Phase rotation occurs at crossover points. Can change the peak level of transient sums.
*   **Mode ON (LIN):** High latency (FFT). Perfect phase reconstruction.
*   **Recommendation:** Use LIN for mastering. Use IIR for mixing/tracking.

---

## 🧪 "Secret Sauce" Workflows

### 1. The "Invisible" Master
1.  **Curve:** Draw a gentle curve that only touches the top 3dB of signal.
2.  **Release:** Set Rel 1 to 10ms (fast) and Rel 2 to 200ms (slow). Blend 50%.
3.  **Result:** Transients are caught by Rel 1, body is leveled by Rel 2. No pumping.

### 2. The "Mono Bass" Anchor
1.  **Select:** LOW Band.
2.  **Sep Knob:** Turn 100% Right (Mono).
3.  **Gain:** Boost Post-Gain +2dB.
4.  **Result:** Specifically makes your sub-bass mono and loud, while leaving mids/highs wide.

### 3. The "NY" Drum Bus
1.  **LMH Mix:** Turn the knob to 50% (Bottom Right).
2.  **Compression:** Smash the HML bands hard (flat graph).
3.  **Master:** Leave clean.
4.  **Result:** The "Dry" dynamic signal is mixed with the "Smashed" multiband signal. Infinite punch.

```

---

## FILE: 01-Learning\Quick-Reference\maximus-signal-flow.md

```markdown
# Maximus Signal Flow: HML -> Master

Understanding the path your audio takes through the maximizer. [SRC: IL-MAN]

## 1. The Input Stage
- Audio enters and is split into three frequency bands: **LOW**, **MID**, and **HIGH**.
- **Crossover Type:** IIR (Linear Phase is available via the Wrapper settings in some versions).
- **Control:** The **Low Freq** and **High Freq** knobs determine these split points.

## 2. Band-Specific Processing (Parallel Paths)
Each band (Low, Mid, High) is processed independently and simultaneously:
- **Envelope Follower:** Detects the input level based on the band's Spline Graph.
- **Compression:** Reduces gain based on the graph curve.
- **Saturation:** Adds harmonics based on the THRES/CEIL settings.
- **Stereo Separation:** Adjusts the width of that specific frequency range.
- **Mix:** Blends the processed signal with the dry signal of that band.

## 3. Summing
- The processed outputs of the Low, Mid, and High bands are summed back together into a single wideband signal.

## 4. The Master Stage
- The summed signal enters the **MASTER** band.
- **Final Limiting:** The Master band provides a final layer of compression/limiting across the *entire* frequency spectrum.
- **Global Ceiling:** The Post Gain of the Master band typically acts as your final mix ceiling (e.g., -0.1 dB).

## 5. Visual Analysis
- The **Histogram** view shows you exactly where the compression is happening across all bands in real-time.

---

## ⚠️ Important Note: Band "Off" vs. "Solo"
- **On:** Band is active and processing.
- **Off:** Band is silent. (Caution: This removes those frequencies from the mix entirely).
- **Solo:** Mutes the other two bands so you can hear the selected one.

---
*For a map of these controls, see the [01-Learning/Quick-Reference/parameter-cheat-sheet.md](./parameter-cheat-sheet.md) guide.*

```

---

## FILE: 01-Learning\Quick-Reference\parameter-cheat-sheet.md

```markdown
# Parameter Cheat Sheet: Maximus

The definitive dynamics control reference. [SRC: IL-MAN]

---

## 🛰️ Band Selectors (Top Right)
- **Low / Mid / High:** Selects the specific frequency band to edit.
- **Master:** Selects the final wideband compression/limiting stage.
- **Solo / On Buttons:** Essential for hearing what each band is doing in isolation.

## 📐 The Compression Envelope (Center Display)
- **Spline Editor:** Right-click to add nodes. Drag to set Threshold and Ratio.
- **Horizontal Axis:** Input level.
- **Vertical Axis:** Output level.
- **Diagonal Line:** 1:1 (No compression). Anything below the diagonal is compression.

## 🎚️ Primary Band Controls
- **Pre Gain:** Input level into the band. Drives the compressor harder.
- **Post Gain:** Final output of the band.
- **Attack:** How fast the compressor reacts to transients.
- **Release 1:** The primary recovery speed.
- **Release 2:** The "Adaptive" recovery speed (Smooths out the release).
- **Sustain:** Keeps the compressor active for longer.

## ⚙️ Crossovers & Global
- **Low / High Freq:** Sets the frequency split points between bands.
- **Stereo Sep:** Widens (Left) or Monos (Right) the specific band.
- **Look-Ahead:** Delay added to allow the compressor to "see" transients coming.
- **Mix Slider:** Dry/Wet balance per band.

## 🔥 Saturation Section (Bottom)
- **Mode:** OFF, Soft, or Hard.
- **Thres (Threshold):** Where saturation begins.
- **Ceil (Ceiling):** The level where saturation reaches its maximum.

---

## 🎯 Quick Mastery Tips
- **Mono Lows:** Select the **Low** band and turn **Stereo Sep** all the way to the right.
- **Transparent Limiting:** Use the **Master** band with a very high **Look-Ahead** and slow **Rel 2**.
- **Aggressive Glue:** Drive the **Pre Gain** on the **Mid** band into a "Soft" saturation curve.

```

---

## FILE: 02-Data\parameters\maximus-params.json

```json
{
  "plugin_name": "Maximus",
  "category": "Dynamics / Mastering",
  "bands": ["Low", "Mid", "High", "Master"],
  "features": ["Spline envelopes", "Multiband saturation", "Adaptive release"],
  "parameters": [
    {
      "name": "Band Selector",
      "type": "selector",
      "values": ["Low", "Mid", "High", "Master"],
      "vibe_impact": "Frequency-specific focus"
    },
    {
      "name": "Compression Envelope",
      "type": "spline-graph",
      "description": "User-drawn compression/expansion curve.",
      "mix_impact": "Dynamic range control, loudness"
    },
    {
      "name": "Pre Gain",
      "type": "knob",
      "description": "Input boost into the selected band.",
      "mix_impact": "Compression depth, saturation drive"
    },
    {
      "name": "Post Gain",
      "type": "knob",
      "description": "Output level of the selected band.",
      "mix_impact": "Makeup gain, final ceiling"
    },
    {
      "name": "Low / High Freq",
      "type": "knob",
      "description": "Crossover frequency split points.",
      "mix_impact": "Phase coherence, frequency isolation"
    },
    {
      "name": "Release 1 / 2",
      "type": "knobs",
      "description": "Adaptive recovery time.",
      "mix_impact": "Transparency, pumping vs smooth"
    },
    {
      "name": "Saturation Mode",
      "type": "selector",
      "values": ["OFF", "Soft", "Hard"],
      "vibe_impact": "Warmth, grit, analog character"
    }
  ]
}

```

---

## FILE: 02-Data\parameters\parameters.json

```json
{
  "pluginName": "Maximus",
  "tabs": ["LOW", "MID", "HIGH", "MASTER"],
  "parameters": [
    {
      "section": "General",
      "id": "master_gain",
      "name": "Master Gain",
      "range": { "min": -Infinity, "max": 18, "unit": "dB" },
      "description": "Final output volume."
    },
    {
      "section": "Band Controls",
      "id": "pre_gain",
      "name": "Pre Gain",
      "range": { "min": -Infinity, "max": 18, "unit": "dB" },
      "description": "Input drive into the compression envelope."
    },
    {
      "section": "Band Controls",
      "id": "post_gain",
      "name": "Post Gain",
      "range": { "min": -Infinity, "max": 18, "unit": "dB" },
      "description": "Makeup gain after compression."
    },
    {
      "section": "Envelope",
      "id": "attack",
      "name": "Attack (Lookahead)",
      "range": { "min": 0, "max": 1000, "unit": "ms" },
      "description": "Lookahead buffer time. Determines how early the limiter reacts."
    },
    {
      "section": "Envelope",
      "id": "release_1",
      "name": "Release 1",
      "range": { "min": 0, "max": 1000, "unit": "ms" },
      "description": "Accelerating release curve time."
    },
    {
      "section": "Envelope",
      "id": "release_2",
      "name": "Release 2",
      "range": { "min": 0, "max": 1000, "unit": "ms" },
      "description": "Decelerating release curve time."
    },
    {
      "section": "Envelope",
      "id": "curve",
      "name": "Curve Slope",
      "range": { "min": 1, "max": 8, "unit": "int" },
      "description": "Blend/Slope of the attack and release curves."
    },
    {
      "section": "Saturation",
      "id": "sat_thresh",
      "name": "Saturation Threshold/Type",
      "range": { "min": -100, "max": 100, "unit": "%" },
      "description": "Left = Type A (Hard). Right = Type B (Soft). Center = Off."
    },
    {
      "section": "Saturation",
      "id": "sat_ceil",
      "name": "Saturation Ceiling",
      "range": { "min": -18, "max": 0, "unit": "dB" },
      "description": "Threshold where saturation begins. Lower = More distortion."
    },
    {
      "section": "Stereo",
      "id": "separation",
      "name": "Stereo Separation",
      "range": { "min": -100, "max": 100, "unit": "%" },
      "description": "Right = Mono. Left = Wide Stereo. Works per band."
    },
    {
      "section": "Crossover",
      "id": "low_freq",
      "name": "Low Frequency Cutoff",
      "range": { "min": 10, "max": 20000, "unit": "Hz" },
      "description": "Split point between Low and Mid bands."
    },
    {
      "section": "Crossover",
      "id": "high_freq",
      "name": "High Frequency Cutoff",
      "range": { "min": 10, "max": 20000, "unit": "Hz" },
      "description": "Split point between Mid and High bands."
    }
  ]
}

```

---

## FILE: 02-Data\presets\INDEX.md

```markdown
# Maximus Complete Presets INDEX

## Genre Presets (10 files)
| File | Name | Genre | Mood |
|------|------|-------|------|
| `genre/01-standard-maximizer.json` | Standard Maximizer | universal | transparent |
| `genre/02-aggressive-punch.json` | Aggressive Punch | hip-hop/rap | electric |
| `genre/03-master-bus-warmth.json` | Master Bus Warmth | R&B | smooth |
| `genre/04-edm-loudness.json` | EDM Loudness | EDM | powerful |
| `genre/05-hard-trap.json` | Hard Trap | hip-hop/rap | aggressive |
| `genre/06-smooth-rnb.json` | Smooth R&B | R&B | moody |

## Signature Presets (6 files)
| File | Artist | Style |
|------|--------|-------|
| `signature/metro-boomin-loud.json` | Metro Boomin | Dark Trap |
| `signature/calvin-harris-edm.json` | Calvin Harris | Big Room EDM |
| `signature/timbaland-rhythm.json` | Timbaland | Rhythmic |
| `signature/the-weeknd-pop.json` | The Weeknd | Smooth Pop |
| `signature/skrillex-dubstep.json` | Skrillex | Aggressive Dubstep |
| `signature/flume-future.json` | Flume | Future Bass |

## Quick Reference
| Goal | Preset | File |
|------|--------|------|
| General limiting | Standard Maximizer | `genre/01-standard-maximizer.json` |
| Punchy bass | Aggressive Punch | `genre/02-aggressive-punch.json` |
| Warm master | Master Bus Warmth | `genre/03-master-bus-warmth.json` |
| EDM loudness | EDM Loudness | `genre/04-edm-loudness.json` |
| Hard trap | Hard Trap | `genre/05-hard-trap.json` |
| Smooth R&B | Smooth R&B | `genre/06-smooth-rnb.json` |

## Workflow Reference
- [Maximus By-Instrument Workflows](../03-Workflows/by-instrument/INDEX.md)
- [Maximus By-Goal Workflows](../03-Workflows/by-goal/INDEX.md)
- [Maximus Safety Rules](../02-Data/rules/maximus-safety-rules.md)

```

---

## FILE: 02-Data\presets\genre\01-standard-maximizer.json

```json
{
  "name": "Standard Maximizer",
  "genre": "universal",
  "mood": "upbeat",
  "description": "Clean, transparent limiting for general-purpose loudness",
  "parameters": {
    "inputGain": 0,
    "threshold": -3.0,
    "ratio": 4.0,
    "attack": 0.5,
    "release": 100,
    "outputGain": 0,
    "ceiling": -0.3,
    "link": true,
    "channelMode": "LR",
    "s/C": false,
    "limiterMode": "Hard"
  },
  "workflow": {
    "useCase": "General mix or master bus",
    "steps": [
      "Set ceiling to -0.3 for headroom",
      "Start with threshold at -6dB",
      "Lower threshold gradually until gain reduction is 2-4dB",
      "Adjust attack for transients (0.3-1.0ms)",
      "Set release to auto or 100ms for music",
      "Add output gain to compensate"
    ],
    "troubleshooting": [
      { "issue": "Pumping", "fix": "Increase release time or reduce ratio" },
      { "issue": "Distortion", "fix": "Increase threshold or reduce ratio" },
      { "issue": "Dull sound", "fix": "Decrease attack time" }
    ]
  },
  "abTest": {
    "listenFor": "Transparent loudness increase without artifacts",
    "duration": "Full song"
  }
}
```

---

## FILE: 02-Data\presets\genre\02-aggressive-punch.json

```json
{
  "name": "Aggressive Punch",
  "genre": "hip-hop/rap",
  "mood": "electric",
  "description": "Heavy limiting for maximum impact with preserved punch",
  "parameters": {
    "inputGain": 2,
    "threshold": -8.0,
    "ratio": 8.0,
    "attack": 0.1,
    "release": 50,
    "outputGain": 2,
    "ceiling": -0.3,
    "link": true,
    "channelMode": "LR",
    "s/C": true,
    "limiterMode": "Hard"
  },
  "workflow": {
    "useCase": "Hip-hop beats and aggressive tracks",
    "steps": [
      "Set ceiling to -0.3",
      "Increase input gain by 2-3dB",
      "Lower threshold to -6 to -8dB",
      "Use fast attack (0.1-0.3ms) for punch",
      "Quick release (40-60ms) for tightness",
      "Enable s/C for punch preservation"
    ],
    "troubleshooting": [
      { "issue": "Lost punch", "fix": "Enable s/C or increase attack time" },
      { "issue": "Clipping", "fix": "Lower threshold or reduce input gain" },
      { "issue": "Cramping", "fix": "Increase release time" }
    ]
  },
  "abTest": {
    "listenFor": "Loud, aggressive sound with maintained kick punch",
    "duration": "First 30 seconds with prominent drums"
  }
}
```

---

## FILE: 02-Data\presets\genre\03-master-bus-warmth.json

```json
{
  "name": "Master Bus Warmth",
  "genre": "R&B",
  "mood": "moody",
  "description": "Smooth limiting with analog warmth characteristics",
  "parameters": {
    "inputGain": 1,
    "threshold": -4.0,
    "ratio": 3.0,
    "attack": 1.0,
    "release": 150,
    "outputGain": 1,
    "ceiling": -0.5,
    "link": true,
    "channelMode": "LR",
    "s/C": false,
    "limiterMode": "Smooth"
  },
  "workflow": {
    "useCase": "R&B ballads and smooth mixes",
    "steps": [
      "Set ceiling to -0.5 for extra headroom",
      "Moderate threshold (-4dB) for gentle limiting",
      "Slow attack (0.8-1.2ms) for transients through",
      "Long release (120-180ms) for natural recovery",
      "Use smooth limiter mode for warmth"
    ],
    "troubleshooting": [
      { "issue": "Not loud enough", "fix": "Increase input gain, not ratio" },
      { "issue": "Harsh high end", "fix": "Use smooth mode, increase ceiling" },
      { "issue": "Uneven levels", "fix": "Check linking settings" }
    ]
  },
  "abTest": {
    "listenFor": "Warm, natural sound with smooth dynamics control",
    "duration": "Full song, focus on vocals"
  }
}
```

---

## FILE: 02-Data\presets\genre\04-edm-loudness.json

```json
{
  "name": "EDM Loudness",
  "genre": "EDM",
  "mood": "electric",
  "description": "Heavy limiting for club and festival maximum loudness",
  "parameters": {
    "inputGain": 3,
    "threshold": -10.0,
    "ratio": 12.0,
    "attack": 0.05,
    "release": 30,
    "outputGain": 4,
    "ceiling": -0.1,
    "link": true,
    "channelMode": "LR",
    "s/C": true,
    "limiterMode": "Hard"
  },
  "workflow": {
    "useCase": "EDM drops and festival tracks",
    "steps": [
      "Set ceiling to -0.1 for maximum loudness",
      "High input gain (+3dB)",
      "Low threshold (-8 to -10dB) for heavy limiting",
      "Very fast attack (0.05ms) for total control",
      "Quick release (25-40ms) for density",
      "Enable s/C for transient preservation"
    ],
    "troubleshooting": [
      { "issue": "Over-compressed", "fix": "Reduce ratio to 8, increase threshold" },
      { "issue": "Lost energy", "fix": "Enable s/C, reduce attack to 0.1ms" },
      { "issue": "Digital distortion", "fix": "Increase ceiling, reduce input gain" }
    ]
  },
  "abTest": {
    "listenFor": "Maximum loudness with maintained energy on drops",
    "duration": "Build-up and drop section"
  }
}
```

---

## FILE: 02-Data\presets\genre\05-hard-trap.json

```json
{
  "name": "Hard Trap Limit",
  "genre": "hip-hop/rap",
  "mood": "electric",
  "description": "Aggressive limiting for hard-hitting trap productions",
  "parameters": {
    "inputGain": 4,
    "threshold": -6,
    "ratio": 12,
    "attack": 0.08,
    "release": 35,
    "ceiling": -0.2,
    "outputGain": 2
  },
  "characteristics": [
    "Maximum impact",
    "Punch preservation",
    "Aggressive loudness"
  ],
  "workflow": {
    "useCase": "Hard trap and aggressive hip-hop",
    "steps": [
      "Input gain +4dB for drive",
      "Threshold at -6dB",
      "Ratio 12:1 for control",
      "Attack at 0.08ms for punch",
      "Release at 35ms tight",
      "Ceiling at -0.2dB"
    ],
    "tips": [
      "Preserves 808 punch",
      "Maximum impact",
      "Check for distortion"
    ]
  },
  "abTest": {
    "listenFor": "Punchy, aggressive limiting that preserves impact",
    "duration": "Full beat with 808"
  }
}
```

---

## FILE: 02-Data\presets\genre\05-rnb-glue.json

```json
{
  "name": "R&B Glue",
  "genre": "R&B",
  "mood": "melodic",
  "description": "Mix glue compression for cohesive R&B arrangements",
  "parameters": {
    "inputGain": 0,
    "threshold": -8.0,
    "ratio": 2.0,
    "attack": 3.0,
    "release": 200,
    "outputGain": 0,
    "ceiling": -0.3,
    "link": true,
    "channelMode": "M/S",
    "s/C": false,
    "limiterMode": "Smooth"
  },
  "workflow": {
    "useCase": "Mix bus for R&B arrangements",
    "steps": [
      "Set threshold for 3-6dB gain reduction",
      "Low ratio (1.5-2.5) for glue effect",
      "Medium attack (2-4ms) for transients through",
      "Long release (150-250ms) for natural pumping",
      "Use M/S mode for side channel control"
    ],
    "troubleshooting": [
      { "issue": "Too compressed", "fix": "Raise threshold or reduce ratio" },
      { "issue": "Pumping on kick", "fix": "Increase attack time" },
      { "issue": "Loss of dynamics", "fix": "Lower ratio, increase threshold" }
    ]
  },
  "abTest": {
    "listenFor": "Cohesive mix with elements glued together",
    "duration": "Full arrangement with multiple elements"
  }
}
```

---

## FILE: 02-Data\presets\genre\06-drum-buss-smash.json

```json
{
  "name": "Drum Buss Smash",
  "genre": "hip-hop/rap",
  "mood": "funky",
  "description": "Aggressive drum buss limiting for maximum impact",
  "parameters": {
    "inputGain": 4,
    "threshold": -12.0,
    "ratio": 20.0,
    "attack": 0.02,
    "release": 20,
    "outputGain": 3,
    "ceiling": -0.1,
    "link": true,
    "channelMode": "LR",
    "s/C": true,
    "limiterMode": "Hard"
  },
  "workflow": {
    "useCase": "Drum buss for hard-hitting beats",
    "steps": [
      "Apply directly to drum buss track",
      "High input gain for heavy limiting",
      "Very low threshold (-10 to -14dB)",
      "Instant attack (0.02-0.05ms)",
      "Short release (15-25ms) for density",
      "Heavy s/C to protect transients"
    ],
    "troubleshooting": [
      { "issue": "Dull kicks", "fix": "Enable s/C, decrease attack" },
      { "issue": "Crackling", "fix": "Reduce input gain, check ceiling" },
      { "issue": "Uncontrolled tails", "fix": "Decrease release time" }
    ]
  },
  "abTest": {
    "listenFor": "Punchy, loud drums with controlled peaks",
    "duration": "First 8 bars of beat"
  }
}
```

---

## FILE: 02-Data\presets\genre\06-smooth-rnb.json

```json
{
  "name": "Smooth R&B",
  "genre": "R&B",
  "mood": "moody",
  "description": "Gentle, transparent limiting for smooth R&B productions",
  "parameters": {
    "inputGain": 1,
    "threshold": -4,
    "ratio": 3,
    "attack": 0.5,
    "release": 150,
    "ceiling": -0.3,
    "outputGain": 0
  },
  "characteristics": [
    "Transparent limiting",
    "Preserves dynamics",
    "Smooth character"
  ],
  "workflow": {
    "useCase": "Smooth R&B and soul",
    "steps": [
      "Input gain +1dB gently",
      "Threshold at -4dB",
      "Ratio 3:1 for transparency",
      "Attack at 0.5ms for transients",
      "Release at 150ms natural",
      "Ceiling at -0.3dB"
    ],
    "tips": [
      "Preserves vocal dynamics",
      "Smooth and transparent",
      "Great for ballads"
    ]
  },
  "abTest": {
    "listenFor": "Smooth, transparent limiting that preserves dynamics",
    "duration": "Full R&B verse"
  }
}
```

---

## FILE: 02-Data\presets\signature\calvin-harris-edm.json

```json
{
  "name": "Calvin Harris EDM",
  "producer": "Calvin Harris",
  "description": "Clean, powerful limiting for festival EDM",
  "reference": "Summer, This Is What You Came For",
  "parameters": {
    "inputGain": 5,
    "threshold": -4,
    "ratio": 8,
    "attack": 0.05,
    "release": 30,
    "ceiling": -0.1,
    "outputGain": 3
  },
  "characteristics": [
    "Clean character",
    "Festival-ready loudness",
    "Punch preservation"
  ],
  "workflow": {
    "useCase": "Big room EDM and festival tracks",
    "signatureElements": [
      "Clean, precise limiting",
      "Maximum energy",
      "Club and festival ready"
    ],
    "steps": [
      "Heavy input gain for energy",
      "Fast attack for control",
      "Quick release for punch",
      "High ceiling for loudness",
      "Perfect for drops"
    ],
    "tips": [
      "Clean, powerful sound",
      "Festival-ready",
      "Great for drops"
    ]
  }
}
```

---

## FILE: 02-Data\presets\signature\calvin-harris.json

```json
{
  "name": "Calvin Harris EDM",
  "producer": "Calvin Harris",
  "description": "Clean, powerful limiting for big room EDM productions",
  "reference": "Summer, This Is What You Came For",
  "parameters": {
    "inputGain": 3,
    "threshold": -6.0,
    "ratio": 8.0,
    "attack": 0.1,
    "release": 35,
    "outputGain": 3,
    "ceiling": -0.1,
    "link": true,
    "channelMode": "LR",
    "s/C": true,
    "limiterMode": "Hard"
  },
  "workflow": {
    "useCase": "EDM drops and festival tracks",
    "characteristics": [
      "Maximum loudness for clubs",
      "Clean transients",
      "Punchy low-end"
    ],
    "steps": [
      "Set ceiling to -0.1dB",
      "Input gain +3dB",
      "Threshold at -6dB",
      "Fast attack 0.1ms",
      "Quick release 35ms",
      "Strong s/C protection"
    ],
    "tips": [
      "Use on master after EQ and compression",
      "Check on club system for bass response",
      "Layer with multiband compression for control"
    ]
  }
}
```

---

## FILE: 02-Data\presets\signature\metro-boomin-loud.json

```json
{
  "name": "Metro Boomin Loud",
  "producer": "Metro Boomin",
  "description": "Signature dark, aggressive limiting for modern trap",
  "reference": "Harder, Creepin', Savage",
  "parameters": {
    "inputGain": 4.5,
    "threshold": -5,
    "ratio": 10,
    "attack": 0.1,
    "release": 40,
    "ceiling": -0.2,
    "outputGain": 2.5
  },
  "characteristics": [
    "Dark character",
    "Maximum loudness",
    "Phone-friendly translation"
  ],
  "workflow": {
    "useCase": "Modern trap productions",
    "signatureElements": [
      "Aggressive loudness",
      "Dark feel",
      "Works on all systems"
    ],
    "steps": [
      "Heavy input gain for power",
      "Fast attack for control",
      "Quick release for punch",
      "High ceiling for loudness",
      "Check on phone speakers"
    ],
    "tips": [
      "Signature dark sound",
      "Maximum impact",
      "Industry standard trap"
    ]
  }
}
```

---

## FILE: 02-Data\presets\signature\metro-boomin.json

```json
{
  "name": "Metro Boomin Style",
  "producer": "Metro Boomin",
  "description": "Signature dark, aggressive limiting for modern trap beats",
  "reference": "Harder, Creepin',
  "parameters": {
    "inputGain": 2.5,
    "threshold": -7.0,
    "ratio": 10.0,
    "attack": 0.2,
    "release": 45,
    "outputGain": 2.5,
    "ceiling": -0.2,
    "link": true,
    "channelMode": "LR",
    "s/C": true,
    "limiterMode": "Hard"
  },
  "workflow": {
    "useCase": "Dark trap beats",
    "characteristics": [
      "Aggressive but controlled limiting",
      "Preserved low-end weight",
      "Snappy transients"
    ],
    "steps": [
      "Set ceiling to -0.2dB",
      "Input gain +2.5dB",
      "Threshold to -7dB for 4-6dB GR",
      "Attack at 0.2ms for punch",
      "Release at 45ms for tightness",
      "s/C enabled at moderate setting"
    ],
    "tips": [
      "Use on drum buss and master separately",
      "Layer with saturator for grit",
      "Pre-EQ boost 100-200Hz for weight"
    ]
  }
}
```

---

## FILE: 02-Data\presets\signature\serge-dansereau.json

```json
{
  "name": "Serge Dansereau Mastering",
  "producer": "Serge Dansereau",
  "description": "Transparent mastering-style limiting for competitive loudness",
  "reference": "Industry standard mastering approach",
  "parameters": {
    "inputGain": 1,
    "threshold": -3.0,
    "ratio": 4.0,
    "attack": 0.5,
    "release": 100,
    "outputGain": 1,
    "ceiling": -0.3,
    "link": true,
    "channelMode": "M/S",
    "s/C": false,
    "limiterMode": "Hard"
  },
  "workflow": {
    "useCase": "Final stage mastering",
    "characteristics": [
      "Transparent peak control",
      "Maximum loudness without artifacts",
      "M/S processing capability"
    ],
    "steps": [
      "Ceiling at -0.3dB",
      "Input gain +1dB",
      "Threshold for 2-4dB GR",
      "Attack 0.5ms balanced",
      "Release 100ms auto-compatible",
      "M/S mode for frequency-specific control"
    ],
    "tips": [
      "Use as final limiter in chain",
      "Check mono compatibility",
      "Reference against commercial tracks",
      "A/B frequently to avoid ear fatigue"
    ]
  }
}
```

---

## FILE: 02-Data\presets\signature\terry-lewis.json

```json
{
  "name": "Terry Lewis R&B",
  "producer": "Terry Lewis",
  "description": "Smooth, warm limiting for classic and contemporary R&B",
  "reference": "Every Little Thing I Do",
  "parameters": {
    "inputGain": 0,
    "threshold": -3.0,
    "ratio": 2.5,
    "attack": 2.0,
    "release": 180,
    "outputGain": 0,
    "ceiling": -0.5,
    "link": true,
    "channelMode": "LR",
    "s/C": false,
    "limiterMode": "Smooth"
  },
  "workflow": {
    "useCase": "R&B ballads and midtempo",
    "characteristics": [
      "Natural dynamics preservation",
      "Warm, analog character",
      "Smooth peak control"
    ],
    "steps": [
      "High ceiling -0.5dB for headroom",
      "Gentle threshold -3dB",
      "Low ratio 2.5:1",
      "Slow attack 2ms for transients",
      "Long release 180ms",
      "Smooth limiter mode"
    ],
    "tips": [
      "Use before final limiting on master",
      "Complement with analog emulation plugins",
      "Focus on perceived loudness over meters"
    ]
  }
}
```

---

## FILE: 02-Data\presets\signature\timbaland-rhythm.json

```json
{
  "name": "Timbaland Rhythm",
  "producer": "Timbaland",
  "description": "Unique, rhythmic limiting for unconventional grooves",
  "reference": "Dirt Off Your Shoulder, Give It to Me",
  "parameters": {
    "inputGain": 2,
    "threshold": -5,
    "ratio": 6,
    "attack": 0.3,
    "release": 80,
    "ceiling": -0.3,
    "outputGain": 1
  },
  "characteristics": [
    "Rhythmic feel",
    "Unique dynamics",
    "Groove preservation"
  ],
  "workflow": {
    "useCase": "Unconventional hip-hop grooves",
    "signatureElements": [
      "Rhythmic limiting",
      "Unique dynamics",
      "Preserves signature feel"
    ],
    "steps": [
      "Moderate input gain",
      "Slower attack for groove",
      "Release synced to rhythm",
      "Transparent character",
      "Perfect for signature beats"
    ],
    "tips": [
      "Preserves Timbaland feel",
      "Great for odd patterns",
      "Unique rhythmic character"
    ]
  }
}
```

---

## FILE: 02-Data\rules\maximus-safety-rules.md

```markdown
# Maximus Safety Rules

## Clipping Prevention

### Input Stage
- NEVER exceed -6 dB input gain
- Start with threshold at -6 dB
- Reduce input gain BEFORE lowering threshold

### Gain Staging
| Stage | Safe Level | Clipping Risk |
|-------|------------|---------------|
| Input | -6 to 0 dB | Above 0 dB |
| Limiting | -6 to -2 dB GR | Above 6 dB GR |
| Output | -0.5 dB ceiling | Above -0.1 dB |

### Output Ceiling
- ALWAYS set ceiling below 0 dB
- Recommended: -0.3 dB for streaming
- Never use hard clip mode at 0 dB

## Limiting Safety

### Gain Reduction Limits
| Genre | Maximum GR | Warning |
|-------|------------|---------|
| R&B/Ballads | 3 dB | 3-4 dB |
| Pop | 4 dB | 4-6 dB |
| Hip-Hop | 6 dB | 6-8 dB |
| EDM | 6 dB | 6-10 dB |

### Ratio Guidelines
| Application | Maximum Ratio | Recommended |
|------------|---------------|-------------|
| Mix glue | 4:1 | 2-3:1 |
| Master bus | 6:1 | 3-4:1 |
| Drum buss | 12:1 | 8-10:1 |
| Mastering | 4:1 | 2-3:1 |

### Attack Time Safety
| Sound | Minimum Attack | Purpose |
|-------|----------------|---------|
| Kicks | 0.02-0.1 ms | Punch preservation |
| Snares | 0.1-0.3 ms | Crack preservation |
| Masters | 0.3-1.0 ms | Natural transients |
| Glue | 2-5 ms | Transparency |

## Pumping Prevention

### Release Time Guidelines
| Tempo | Recommended Release | Purpose |
|-------|---------------------|---------|
| 140+ BPM | 25-40 ms | Tight control |
| 100-140 BPM | 50-80 ms | Standard |
| 70-100 BPM | 80-120 ms | Natural feel |
| Below 70 BPM | 120-200 ms | Smooth recovery |

### Sidechain Safety
- Use s/C for heavy limiting
- Threshold: -20 to -30 dB
- Range: 3-6 dB ducking
- Quick release for pump

## Genre-Specific Limits

### Hip-Hop/Trap
| Setting | Limit | Reason |
|---------|-------|--------|
| Gain Reduction | 8 dB max | Loud but safe |
| Attack | 0.1-0.3 ms | Preserve punch |
| Release | 40-60 ms | Tight low end |
| Ceiling | -0.2 dB | Loudness |

### R&B
| Setting | Limit | Reason |
|---------|-------|--------|
| Gain Reduction | 3 dB max | Preserve dynamics |
| Attack | 0.8-1.5 ms | Natural transients |
| Release | 150-200 ms | Smooth pumping |
| Ceiling | -0.5 dB | Headroom |

### EDM
| Setting | Limit | Reason |
|---------|-------|--------|
| Gain Reduction | 6 dB max | Energy preservation |
| Attack | 0.05-0.1 ms | Maximum loudness |
| Release | 30-50 ms | Density |
| Ceiling | -0.1 dB | Competitive loudness |

### Pop
| Setting | Limit | Reason |
|---------|-------|--------|
| Gain Reduction | 4 dB max | Balance |
| Attack | 0.3-0.5 ms | Clean transients |
| Release | 80-120 ms | Natural |
| Ceiling | -0.3 dB | Streaming safe |

## Common Mistakes to Avoid

| Mistake | Consequence | Prevention |
|---------|-------------|------------|
| Input too hot | Distortion before limiting | -6dB input max |
| Too much GR | Squashed, lifeless | 2-4dB typical |
| Wrong attack | Lost punch or distortion | Match to material |
| No ceiling | Digital clipping | Always set ceiling |
| Fast release | Pumping on bass | Increase release time |

## Quick Reference Limits

| Parameter | Maximum Safe | Warning Zone |
|-----------|--------------|--------------|
| Input Gain | +3 dB | +3 to +6 dB |
| Threshold | -2 dB | -2 to -6 dB |
| Ratio | 8:1 (12:1 max) | 8:1 to 12:1 |
| Attack | 0.02 ms | Too fast = distortion |
| Release | 20 ms | Too fast = pumping |
| Gain Reduction | 6 dB | 6-10 dB |
| Ceiling | -0.1 dB | Above -0.1 dB |
| Voices | 8 instances max | More = CPU strain |

## Loudness Targets

### Streaming Platforms
| Platform | Target LUFS | True Peak |
|----------|-------------|-----------|
| Spotify | -14 LUFS | -1 dBTP |
| Apple Music | -16 LUFS | -1 dBTP |
| YouTube | -14 LUFS | -1 dBTP |
| Amazon | -14 LUFS | -1 dBTP |

### Traditional
| Format | Target LUFS | True Peak |
|--------|-------------|-----------|
| CD | -9 LUFS | -0.1 dBTP |
| Vinyl | -12 LUFS | -1 dBTP |
| Radio | -16 LUFS | -1 dBTP |

## Troubleshooting

### Distorted Sound
1. Check input gain (reduce if >0)
2. Raise threshold (less limiting)
3. Increase attack time
4. Check for pre-limiting distortion

### Pumping on Kick
1. Increase release time
2. Enable s/C for ducking
3. Reduce ratio
4. Check bass frequency balance

### Lost Punch
1. Reduce attack time (0.1-0.2ms)
2. Enable s/C mode
3. Reduce gain reduction
4. Check transients in mono

### Not Loud Enough
1. Increase input gain (not ratio)
2. Reduce threshold carefully
3. Use multiband for frequency control
4. Reference commercial tracks

## FL Studio Integration

### Limiter Chain Position
1. EQ (corrective)
2. Compression (glue)
3. Maximus (limiting)
4. Limiter (ceiling only)

### Parallel Processing
1. Heavy limited signal to Fruity Send
2. Blend 30-50% with dry
3. Preserves dynamics + loudness

### Metering
- Use SPAN for spectrum
- Use OTT for true peak
- Use waveform for visual
- Reference with loudness meters

```

---

## FILE: 03-Workflows\common-usage.md

```markdown
# Common Workflows: Maximus

## 1. Professional Loudness Maximization

The primary use case for Maximus.

1.  **Setup:** Place Maximus on the Master Bus.
2.  **Preset:** Start with "Default" (Flat).
3.  **Bands:**
    *   **Low:** Tighten the bass. Set Release to >50ms to prevent distortion. Set Saturation A to 5% to add harmonics.
    *   **High:** Curve the top end gently. Set "Sep" to the left for air width.
4.  **Master Band:** This is your final ceiling.
    *   **Envelope:** Draw a "Hard Ceiling" at -0.1dB.
    *   **Attack:** 2ms (Lookahead). This catches every transient.
    *   **Curving:** Add a "Soft Knee" right before the ceiling. This rounds off the peaks instead of chopping them (Clipping vs Limiting).

## 2. Multiband De-Essing (Vocal Polish)

Removing harsh "Sss" sounds without dulling the whole vocal.

1.  **Band Split:** Adjust the High Crossover (High Freq Knob) to around 6kHz-7kHz.
2.  **Select:** High Band.
3.  **Solo:** Click "Solo" to listen only to the sizzle.
4.  **Envelope:**
    *   Draw the curve so it dips *below* the diagonal line only at high volumes.
    *   This acts as a high-frequency limiter.
5.  **Release:** Fast (10ms). You want the volume to duck instantly when "Sss" hits and return instantly.
6.  **Result:** Smooth, expensive-sounding vocals that are still bright.

## 3. The "Noise Gate" (Cleaning Samples)

Using the custom envelope to remove background hiss.

1.  **Select:** Master Band (or specific band).
2.  **Graph:**
    *   Go to the bottom-left corner.
    *   Drag the start point all the way to the bottom (Silence).
    *   Create a point at -40dB (Input) and drag it up to 1:1.
3.  **Shape:** Make the transition steep.
4.  **Result:** Any sound below -40dB is muted. Any sound above is untouched.

## 4. Drum Bus "Punch" (Expansion)

Making hits hit harder.

1.  **Usage:** On a drum loop that sounds "flat".
2.  **Graph:**
    *   Draw a point at -6dB.
    *   Pull the line *above* the diagonal 1:1 line in the loud section.
3.  **Physics:** This means loud sounds get *louder*.
4.  **Attack:** 10-30ms. This lets the initial transient spike through before the volume envelope reacts.

## 5. "Tube Warmth" Emulation

Using Maximus purely for saturation, not compression.

1.  **Mode:** Set all bands to **COMP OFF**. This bypasses the dynamics graph.
2.  **Saturation:**
    *   **Low Band:** Type B (Tube), 20%. Thickens the kick.
    *   **Mid Band:** Type A (Transistor), 10%. Adds bite to snares/vocals.
    *   **High Band:** None (Keep it clean).
3.  **Ceiling:** Lower the **Ceil** knob until you see the saturation meter reacting on peaks.

```

---

## FILE: 03-Workflows\by-goal\02-mastering-preparation.md

```markdown
# Maximus Mastering Preparation

## Overview

Maximus serves as the final limiter before your track goes to streaming platforms or distribution. Proper preparation ensures your music translates across all playback systems.

---

## Loudness Targets

### Streaming Platforms
| Platform | Target LUFS | True Peak |
|----------|-------------|-----------|
| Spotify | -14 LUFS | -1 dBTP |
| Apple Music | -16 LUFS | -1 dBTP |
| YouTube | -14 LUFS | -1 dBTP |
| Amazon | -14 LUFS | -1 dBTP |
| Tidal | -14 LUFS | -1 dBTP |

### Traditional
| Format | Target LUFS | True Peak |
|--------|-------------|-----------|
| CD | -9 LUFS | -0.1 dBTP |
| Vinyl | -12 LUFS | -1 dBTP |
| Radio | -16 LUFS | -1 dBTP |

---

## Step-by-Step Mastering Prep

### 1. Analysis First
1. Load your mix into a LUFS meter
2. Measure Integrated LUFS
3. Note True Peak levels
4. Calculate needed gain adjustment

### 2. Gain Staging
| Stage | Level | Purpose |
|-------|-------|---------|
| Pre-Maximus | -6 to -3 dB | Headroom for limiting |
| After Maximus | Hits ceiling | Maximum loudness |

### 3. Maximus Settings
| Parameter | Value | Reason |
|-----------|-------|--------|
| Input Gain | +1 to +3 dB | Pre-limiter boost |
| Threshold | -2 to -4 dB | Gentle limiting |
| Ratio | 3:1 to 4:1 | Moderate control |
| Attack | 0.3-0.5 ms | Transient preserve |
| Release | 80-120 ms | Auto-compatible |
| Ceiling | -0.3 dB | Streaming safe |

### 4. Limiting Strategy
1. Start with Threshold at -6 dB
2. Lower until 2-3 dB gain reduction
3. If more loudness needed, increase Input Gain instead
4. Avoid more than 4-6 dB GR

---

## Common Mistakes

### Too Much Limiting
**Symptom:** Squashed, lifeless sound
**Solution:** Reduce gain reduction to 2-3 dB

### Distorted Transients
**Symptom:** Harsh, clipped peaks
**Solution:** Increase attack time slightly

### Pumping
**Symptom:** Audible rhythmic ducking
**Solution:** Increase release time

### Not Loud Enough
**Symptom:** Sounds quieter than references
**Solution:** Increase Input Gain, not ratio

---

## Quick Reference Settings

### Spotify Optimization
| Parameter | Value |
|-----------|-------|
| Target | -14 LUFS |
| True Peak | -1 dBTP |
| Input Gain | +2 dB |
| Threshold | -3 dB |
| Ratio | 4:1 |
| GR Target | 3 dB |

### Apple Music Optimization
| Parameter | Value |
|-----------|-------|
| Target | -16 LUFS |
| True Peak | -1 dBTP |
| Input Gain | +3 dB |
| Threshold | -2 dB |
| Ratio | 4:1 |
| GR Target | 4 dB |

### CD/Mastering
| Parameter | Value |
|-----------|-------|
| Target | -9 LUFS |
| True Peak | -0.1 dBTP |
| Input Gain | +1 dB |
| Threshold | -4 dB |
| Ratio | 3:1 |
| GR Target | 2 dB |

---

## A/B Testing

### Reference Workflow
1. Load commercial reference in same session
2. Match LUFS levels using utility gain
3. A/B every 30 seconds
4. Note differences in:
   - Bass impact
   - Vocal presence
   - Stereo width
   - Overall energy

### Testing Checklist
- [ ] Sounds good on studio monitors
- [ ] Translates to headphones
- [ ] Translates to laptop speakers
- [ ] Translates to phone speaker
- [ ] Matches reference loudness
- [ ] No distortion or artifacts

---

## Final Checklist

- [ ] Mix is balanced before limiting
- [ ] Gain staging is correct
- [ ] Limiting is subtle (2-4 dB GR)
- [ ] True Peak under -1 dBTP
- [ ] LUFS target achieved
- [ ] Sounds good on multiple systems
- [ ] A/B tested with references

---

## Related Documentation

- [Maximus Limiting Deep Dive](../Concepts/01-limiting-deep-dive.md)
- [Maximus Parameter Quick Reference](../Quick-Reference/parameter-quick-reference.md)
- [Competitive Loudness Workflow](01-competitive-loudness.md)

```

---

## FILE: 03-Workflows\by-goal\03-pump-effect.md

```markdown
# Maximus Pump Effect Workflow

## What Is Pumping?

Pumping is an intentional rhythmic ducking caused by limiting, creating a "breathing" effect where the mix ducking follows the beat. When used tastefully, it adds energy and groove.

---

## Creating the Pump

### The Formula
1. Heavy gain reduction (6-10 dB)
2. Fast release synced to tempo
3. Attack time that allows transients through

### Timing Sync
| BPM | 1/4 Note | 1/8 Note | 1/16 Note |
|-----|----------|----------|------------|
| 120 | 500ms | 250ms | 125ms |
| 128 | 469ms | 234ms | 117ms |
| 140 | 429ms | 214ms | 107ms |

---

## Step-by-Step Setup

### 1. Base Limiting
| Parameter | Value | Reason |
|-----------|-------|--------|
| Input Gain | +3 dB | Drive hard |
| Threshold | -6 dB | Heavy limiting |
| Ratio | 8:1 | Strong control |
| Attack | 0.3 ms | Fast attack |
| Release | Synced | Rhythm follow |

### 2. Release Timing
| Setting | Value | Feel |
|---------|-------|------|
| 1/4 note | 500ms @ 120BPM | Gentle pump |
| 1/8 note | 250ms @ 120BPM | Medium pump |
| 1/16 note | 125ms @ 120BPM | Aggressive pump |

### 3. Gain Reduction
| Effect | GR Amount |
|--------|-----------|
| Subtle | 4-6 dB |
| Standard | 6-8 dB |
| Aggressive | 8-12 dB |

---

## Style Variations

### House/Pop
| Parameter | Value |
|-----------|-------|
| Release | 1/4 note |
| GR | 4-6 dB |
| Attack | 0.5 ms |

### Techno/EDM
| Parameter | Value |
|-----------|-------|
| Release | 1/8 note |
| GR | 6-8 dB |
| Attack | 0.2 ms |

### Trap
| Parameter | Value |
|-----------|-------|
| Release | 1/4 or 1/8 note |
| GR | 6-10 dB |
| Attack | 0.15 ms |

---

## Common Issues

### Too Much Pump
- Reduce gain reduction
- Increase release time
- Use subtler ratio

### No Pump
- Increase gain reduction
- Decrease release time
- Check attack time (too slow = no ducking)

### Uneven Pumping
- Sync release to tempo
- Check for transient spikes
- Adjust attack time

### Artifacts
- Reduce gain reduction
- Increase release time
- Check for clipping

---

## Creative Applications

### Build-Up Effect
1. Start with subtle pump (4 dB)
2. Automate gain reduction to 8 dB during build
3. Release for impact

### Section Transition
1. Pump during breakdown
2. Release at drop
3. Creates energy release

### Rhythmic Interest
1. Sync release to main rhythm
2. Pump follows kick pattern
3. Adds groove to static mixes

---

## Testing Tips

### Listen On
- Studio monitors (main)
- Headphones (detail)
- Laptop speakers (consumer)

### Check For
- Musical pumping
- Even rhythm
- No distortion
- Genre-appropriate intensity

---

## Related Documentation

- [Maximus Limiting Deep Dive](../Concepts/01-limiting-deep-dive.md)
- [Maximus Parameter Quick Reference](../Quick-Reference/parameter-quick-reference.md)
- [Competitive Loudness Workflow](01-competitive-loudness.md)

```

---

## FILE: 03-Workflows\by-goal\INDEX.md

```markdown
# Maximus By-Goal Workflows Index

## Available Goal Workflows

| Goal | Description | Difficulty |
|------|-------------|------------|
| [Competitive Loudness](by-goal-workflows.md#goal-competitive-loudness) | Streaming-ready loudness | Intermediate |
| [Punchy Mix](by-goal-workflows.md#goal-punchy-mix) | Impactful, powerful mix | Intermediate |
| [Glue Mix Together](by-goal-workflows.md#goal-glue-mix-together) | Cohesive mix without pumping | Beginner |
| [Mastering Preparation](by-goal-workflows.md#goal-mastering-preparation) | Pre-master safety | Beginner |
| [Bass-Heavy Track](by-goal-workflows.md#goal-bass-heavy-track) | Low-end preservation | Intermediate |
| [Transparent Control](by-goal-workflows.md#goal-transparent-control) | Minimal, invisible limiting | Beginner |

## Quick Start by Need

| Need | Recommended Goal | Key Settings |
|------|-----------------|---------------|
| Louder than loud | Competitive Loudness | Ratio 5:1, fast attack |
| Maximum impact | Punchy Mix | Ratio 4:1, instant attack |
| Mix cohesion | Glue Mix Together | Ratio 2:1, slow attack |
| Pre-master safety | Mastering Preparation | Ratio 3:1, moderate settings |
| Bass preservation | Bass-Heavy Track | Ratio 6:1, bass-friendly release |
| Gentle control | Transparent Control | Ratio 2:1, high threshold |

## Goal to Track Type Mapping

| Track Type | Best Goal Workflow |
|------------|-------------------|
| Final master | Competitive Loudness |
| Drum buss | Punchy Mix |
| Mix bus | Glue Mix Together |
| Pre-master | Mastering Preparation |
| Bass-heavy | Bass-Heavy Track |
| Acoustic/Jazz | Transparent Control |

## Related Documentation

- [Maximus By-Instrument Workflows](02-Workflows/by-instrument/INDEX.md)
- [Maximus Genre Presets](../02-Data/presets/genre/INDEX.md)
- [Maximus Signature Presets](../02-Data/presets/signature/INDEX.md)
- [Maximus Safety Rules](../02-Data/rules/maximus-safety-rules.md)

```

---

## FILE: 03-Workflows\by-goal\by-goal-workflows.md

```markdown
# Maximus By-Goal Workflows

## Goal: Competitive Loudness

### Configuration
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Input Gain | +4 dB | Final push |
| Threshold | -2 dB | Final limiting |
| Ratio | 5:1 | Strong control |
| Attack | 0.2 ms | Transient control |
| Release | 80 ms | Fast recovery |
| Ceiling | -0.3 dB | Streaming safe |

### Steps
1. Final input gain (+4 dB)
2. High threshold (-2 dB)
3. Moderate ratio for control
4. Fast attack for control
5. Auto or moderate release
6. Set ceiling for safety

### Tips
- Target -14 LUFS for Spotify
- Reference commercial tracks
- Check on multiple systems
- A/B frequently

---

## Goal: Punchy Mix

### Configuration
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Input Gain | +2 dB | Slight boost |
| Threshold | -4 dB | Moderate limiting |
| Ratio | 4:1 | Control peaks |
| Attack | 0.05 ms | Instant control |
| Release | 40 ms | Tight recovery |
| Ceiling | -0.3 dB | Safe headroom |

### Steps
1. Slight input gain (+2 dB)
2. Threshold for 3-4 dB GR
3. Instant attack for control
4. Fast release for punch
5. Clean punch result
6. Monitor for pumping

### Tips
- Use on drum buss
- Creates impact
- Check bass interaction
- Balance punch vs natural

---

## Goal: Glue Mix Together

### Configuration
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Input Gain | 0 dB | Clean signal |
| Threshold | -6 dB | Gentle limiting |
| Ratio | 2:1 | Light control |
| Attack | 2 ms | Transient through |
| Release | 150 ms | Natural recovery |
| Ceiling | -0.5 dB | Extra headroom |

### Steps
1. No input gain
2. High threshold for 2-3 dB GR
3. Slow attack preserves dynamics
4. Natural release time
5. Cohesive without pumping
6. Should sound invisible

### Tips
- Use on mix bus
- Creates cohesion
- Shouldn't hear processing
- Check with different genres

---

## Goal: Mastering Preparation

### Configuration
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Input Gain | +1 dB | Pre-limiter boost |
| Threshold | -3 dB | Control peaks |
| Ratio | 3:1 | Gentle limiting |
| Attack | 0.5 ms | Transient preserve |
| Release | 100 ms | Auto-compatible |
| Ceiling | -0.3 dB | Safe ceiling |

### Steps
1. Slight input gain (+1 dB)
2. Moderate threshold
3. Ratio for transparency
4. Attack preserves transients
5. Release for natural
6. Clean pre-master

### Tips
- Use before final limiter
- Creates safety
- Shouldn't limit much
- Leaves room for final limiter

---

## Goal: Bass-Heavy Track

### Configuration
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Input Gain | +3 dB | Drive hard |
| Threshold | -5 dB | Control bass |
| Ratio | 6:1 | Bass control |
| Attack | 0.1 ms | Transient control |
| Release | 60 ms | Bass-friendly |
| Ceiling | -0.3 dB | Safe headroom |

### Steps
1. High input gain (+3 dB)
2. Low threshold for bass
3. Fast attack for control
4. Release for bass preservation
5. Controls bass peaks
6. Maintains bass energy

### Tips
- Use on bass-heavy mixes
- Preserves low-end
- Check on small speakers
- May need sidechain

---

## Goal: Transparent Control

### Configuration
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Input Gain | 0 dB | Clean signal |
| Threshold | -2 dB | Minimal control |
| Ratio | 2:1 | Very light |
| Attack | 1 ms | Transient through |
| Release | 200 ms | Natural |
| Ceiling | -0.3 dB | Safe ceiling |

### Steps
1. No input gain
2. High threshold for 1-2 dB GR
3. Very light ratio
4. Attack preserves dynamics
5. Long natural release
6. Almost invisible

### Tips
- For gentle control only
- Preserves dynamics
- Good for acoustic music
- Subtle effect

```

---

## FILE: 03-Workflows\by-goal\loudness-maximization.md

```markdown
# Workflow: Loudness Maximization (The Pro Master)

*Goal: Achieving professional commercial loudness (LUFS) while maintaining punch and clarity using the multiband architecture of Maximus.*

## Vibe Mapping
- **Upbeat:** ⭐⭐⭐⭐⭐ (Primary)
- **Vibey:** ⭐⭐⭐⭐
- **Moody:** ⭐⭐⭐ (With careful low-band control)

## 🎛️ Routing Context
- **Preferred:** Final slot on the Master Channel.
- **Mix Status:** 100% Wet (Dry/Wet balance is handled internally per band).

## 🚶 Step-by-Step Setup
1. **The Foundation:**
   - Load the **"Clean Master"** preset as a transparent starting point.
2. **Frequency Discipline (The Crossovers):**
   - **Low Band:** Adjust the **Low Freq** knob to isolate the Kick and Sub (usually around **100Hz – 120Hz**).
   - **High Band:** Adjust the **High Freq** knob to isolate the air and hats (usually around **4kHz – 6kHz**).
3. **Band-Specific Drive:**
   - **Low Band:** Use moderate compression to keep the sub-bass solid. Mono the low band by turning **Stereo Sep** all the way to the **Right**.
   - **Mid Band:** This is where the loudness is made. Boost **Pre-Gain** and use a "Soft" saturation curve to add harmonic perceived volume.
   - **High Band:** Use light compression to tame harshness.
4. **The Master Limit (The Ceiling):**
   - Select the **Master** band.
   - Set **Post-Gain** to **-0.1 dB** (your final digital ceiling).
   - Increase **Master Pre-Gain** until your LUFS meter hits your target (e.g. -8 LUFS).
5. **Transparency (Look-Ahead & Release):**
   - Set **Look-Ahead** to **2.0ms** or higher to prevent "clipping" artifacts.
   - Adjust **Rel 2** (Adaptive Release) to find the sweet spot where the limiter isn't "pumping" with the beat.

## 🔄 Variations
- **The "Aggressive Club" Master:** Use "Hard" saturation on the Master band for a gritty, over-driven sound.
- **The "Transparent R&B" Master:** Use lower Pre-Gain and slower Release settings to preserve the natural dynamics of the vocal.

## ⚠️ Pitfalls & Fixes
- **Problem:** The master sounds "choked" or "squashed."
- **Fix:** Lower the **Master Pre-Gain** or increase the **Rel 2** time.
- **Problem:** Low-end is causing the master to pump too much.
- **Fix:** Lower the **Pre-Gain** on the **Low** band specifically.

## 🎚️ Automation Ideas
- **Chorus Impact:** Increase the **Master Pre-Gain** by 1dB during the chorus to make it feel "louder" than the verse.
- **Build-up Drive:** Automate the **Mid-band Saturation** to increase during a riser.

```

---

## FILE: 03-Workflows\by-goal\parallel-compression-bus.md

```markdown
# Workflow: Parallel Compression Bus (Drum Glue)

*Goal: Adding "meat," "punch," and "glue" to a drum bus without losing the initial transient "snap" of the dry drums.*

## Vibe Mapping
- **Upbeat:** ⭐⭐⭐⭐⭐ (Primary)
- **Vibey:** ⭐⭐⭐⭐⭐ (Primary)
- **Jazzy:** ⭐⭐⭐

## 🎛️ Routing Context
- **Preferred:** Insert chain on the Drum Bus.
- **Mix Status:** Starts at 100% for dialing in the "crush," then ends at 40-60%.

## 🚶 Step-by-Step Setup
1. **The "Crush" Mode:**
   - Set the **Master Mix** slider to **100%** (Wet) for now.
2. **Heavy Handed Compression:**
   - Select the **Master** band.
   - Draw a very aggressive compression curve on the spline graph (High Ratio).
   - Set **Attack** to a moderate speed (e.g. 15ms) to let the "snap" of the kick through.
   - Set **Release** to a fast speed (e.g. 50ms) so the compressor "breathes" with the drum rhythm.
3. **The Texture (Saturation):**
   - Use "Soft" or "Hard" saturation on the Master band to add some harmonic distortion to the crushed signal.
4. **The Parallel Blend (The Secret):**
   - Now, lower the **Master Mix** slider to roughly **50%**.
   - *Result:* You now have the original, dynamic drums (The Snap) combined with the heavily compressed, saturated drums (The Glue).
5. **Level Matching:**
   - Adjust the **Master Post-Gain** so that toggling the plugin ON and OFF doesn't change the overall volume, only the "feeling" of the drums.

## 🔄 Variations
- **The "Dirty Break":** Turn the Mix to 100% and use "Hard" saturation for a lo-fi hip-hop drum break vibe.
- **The "Tight Soul":** Use the **Low** band to heavily compress only the kick drum in parallel, while keeping the rest of the drums dry.

## ⚠️ Pitfalls & Fixes
- **Problem:** The drums sound "mushy."
- **Fix:** Your **Attack** is too fast. Increase the Attack time to let the transients "poke" through the compressor.
- **Problem:** The cymbals are too loud.
- **Fix:** Select the **High** band and use light compression or turn down the High band **Post-Gain**.

## 🎚️ Automation Ideas
- **Energy Drive:** Automate the **Mix** slider to increase during intense sections of the song.
- **Crush Build:** Slowly automate the **Saturation Ceiling** down during a breakdown to make the drums sound more distorted over time.

```

---

## FILE: 03-Workflows\by-goal\stereo-widening-via-high-band.md

```markdown
# Workflow: Stereo Widening via High-Band (3D Space)

*Goal: Creating a professional stereo image—rock-solid mono low end and wide, shimmering high-end—using frequency-specific separation.*

## Vibe Mapping
- **Vibey:** ⭐⭐⭐⭐⭐ (Primary)
- **Upbeat:** ⭐⭐⭐⭐⭐ (Primary)
- **Psychedelic:** ⭐⭐⭐⭐

## 🎛️ Routing Context
- **Preferred:** Melodic Bus or Master Channel.

## 🚶 Step-by-Step Setup
1. **Define the Split:**
   - Set **High Freq** crossover to **5kHz**. This ensures you are only widening the "air" and high-frequency transients.
2. **Mono the Foundation:**
   - Select the **Low** band.
   - Turn **Stereo Sep** all the way to the **Right (100% Mono)**.
   - *Result:* Your kick and sub-bass are now perfectly centered, improving club translation.
3. **Widen the Shimmer:**
   - Select the **High** band.
   - Turn **Stereo Sep** to the **Left (Widen)** by about 20–40%.
   - *Result:* The hats, air, and high-frequency harmonics of your synth now feel like they are wrapping around the listener.
4. **Glue the Center:**
   - Select the **Mid** band.
   - Keep **Stereo Sep** at center (0%). This keeps the vocals and main instrumentation focused.
5. **Balance the Levels:**
   - Because widening can sometimes "thin out" a band, you may need to increase the **Post-Gain** of the High band by 1dB to compensate.

## 🔄 Variations
- **The "Immersive Pad":** Use this on a pad bus and widen both the **Mid** and **High** bands for a truly "enveloping" sound.
- **The "Hollow Moody" Effect:** Widen the Mid band significantly to create a "hole" in the center for a very dry, intimate vocal to sit in.

## ⚠️ Pitfalls & Fixes
- **Problem:** The high-end sounds "phasey."
- **Fix:** You have widened too far. Reduce the **Stereo Sep** amount on the High band.
- **Problem:** The mix sounds "disconnected."
- **Fix:** Lower the **High Freq** crossover point to bring more of the upper-mids into the wide field.

## 🎚️ Automation Ideas
- **Stereo Bloom:** Automate the **High band Stereo Sep** to go from center to wide over 4 bars.
- **Mono Drop:** Set everything to mono during an intro, then suddenly flip to your wide settings when the drop hits.

```

---

## FILE: 03-Workflows\by-instrument\01-master-bus-workflow.md

```markdown
# Master Bus Workflow

## Goal
Apply final limiting and loudness maximization to complete mix.

## Plugin Settings

### Basic Configuration
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Channel Mode | LR | Standard stereo limiting |
| Link | True | Average between channels |
| Limiter Mode | Hard | Transparent peak control |

### Threshold & Ratio
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Input Gain | +1 to +3 dB | Drive the limiter |
| Threshold | -3 to -6 dB | Control limiting amount |
| Ratio | 3 to 6 | Limiting intensity |
| Ceiling | -0.3 dB | Headroom for streaming |

### Timing
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Attack | 0.3 to 1.0 ms | Transient preservation |
| Release | 80 to 150 ms | Natural recovery |

### Optional
| Parameter | Value | Purpose |
|-----------|-------|---------|
| s/C | False | Off for full mix |
| Lookahead | Enabled | Precise peak control |

## Workflow Steps

### Stage 1: Set Ceiling
1. Set ceiling to -0.3dB for streaming platforms
2. This ensures no digital clipping

### Stage 2: Find Threshold
1. Start with threshold at -6dB
2. Play loudest section of mix
3. Lower threshold until 2-4dB gain reduction
4. More than 6dB may cause distortion

### Stage 3: Adjust Attack
1. Fast (0.1-0.3ms) for punchy genres (hip-hop, EDM)
2. Medium (0.5-1.0ms) for general purpose
3. Slow (2-5ms) for classical, acoustic

### Stage 4: Set Release
1. Auto mode for most applications
2. Manual: 100-150ms for music
3. Faster for punch, slower for smooth

## Genre Applications

### Hip-Hop Master
| Setting | Value |
|---------|-------|
| Input Gain | +2.5 dB |
| Threshold | -7 dB |
| Ratio | 10 |
| Attack | 0.2 ms |
| Release | 50 ms |

### R&B Master
| Setting | Value |
|---------|-------|
| Input Gain | +1 dB |
| Threshold | -4 dB |
| Ratio | 3 |
| Attack | 1.0 ms |
| Release | 150 ms |

### EDM Master
| Setting | Value |
|---------|-------|
| Input Gain | +3 dB |
| Threshold | -8 dB |
| Ratio | 12 |
| Attack | 0.1 ms |
| Release | 35 ms |

## A/B Testing Method

### Test Sequence
1. Bypass Maximus, note perceived loudness
2. Enable Maximus, match output levels
3. Compare dynamics and punch
4. Listen for 10 seconds minimum

### What to Listen For
- Pumping on bass/kick
- Distorted transients
- Loss of low-end warmth
- Harsh high frequencies

## Quick Fixes

| Issue | Solution |
|-------|----------|
| Pumping | Increase release to 150ms |
| Distortion | Raise threshold, reduce ratio |
| Dull sound | Decrease attack time |
| Not loud enough | Increase input gain, not ratio |
| Cracking | Check ceiling setting |

## FL Studio Tips

### Chain Position
1. EQ first (corrective)
2. Compression (mix glue)
3. Maximus (limiting)
4. Limiter (ceiling only)

### Loudness Matching
1. Use utility gain to match levels
2. Compare at same perceived loudness
3. Trust ears over meters

### Streaming Guidelines
| Platform | Target LUFS | True Peak |
|----------|-------------|-----------|
| Spotify | -14 LUFS | -1 dBTP |
| Apple Music | -16 LUFS | -1 dBTP |
| YouTube | -14 LUFS | -1 dBTP |

```

---

## FILE: 03-Workflows\by-instrument\02-drum-buss-workflow.md

```markdown
# Drum Buss Workflow

## Goal
Add punch, loudness, and cohesion to drum elements.

## Plugin Settings

### Basic Configuration
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Channel Mode | LR | Stereo drum processing |
| Link | True | Consistent L/R limiting |
| Limiter Mode | Hard | Maximum impact |

### Heavy Limiting Setup
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Input Gain | +3 to +6 dB | Drive limiter hard |
| Threshold | -10 to -14 dB | Heavy limiting |
| Ratio | 15 to 20 | Intense compression |
| Ceiling | -0.1 dB | Maximum output |

### Timing
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Attack | 0.02 to 0.1 ms | Instant limiting |
| Release | 15 to 30 ms | Fast recovery |

### Transient Protection
| Parameter | Value | Purpose |
|-----------|-------|---------|
| s/C | True | Sidechain enabled |
| s/C Threshold | -20 dB | Duck on transients |
| s/C Range | 6 dB | Transient preservation |

## Workflow Steps

### Stage 1: Input & Threshold
1. Set input gain to +4dB
2. Lower threshold until 6-10dB gain reduction
3. Watch meter for consistent limiting

### Stage 2: Attack Tuning
1. Start at 0.05ms (very fast)
2. Listen to kick punch
3. If dull, decrease to 0.02ms
4. If distortion, increase to 0.1ms

### Stage 3: Release Setting
1. Set to 20ms initially
2. Play drum pattern
3. If crackling between hits, increase release
4. If muddy, decrease release

### Stage 4: Sidechain
1. Enable s/C
2. Set threshold for 3-6dB gain reduction on transients
3. Adjust range for natural ducking

## Genre Applications

### Trap Drums
| Setting | Value |
|---------|-------|
| Input Gain | +4 dB |
| Threshold | -12 dB |
| Ratio | 20 |
| Attack | 0.03 ms |
| Release | 25 ms |
| s/C | True |

### Boom Bap Drums
| Setting | Value |
|---------|-------|
| Input Gain | +3 dB |
| Threshold | -8 dB |
| Ratio | 12 |
| Attack | 0.1 ms |
| Release | 40 ms |
| s/C | True |

### EDM Drums
| Setting | Value |
|---------|-------|
| Input Gain | +5 dB |
| Threshold | -14 dB |
| Ratio | 20 |
| Attack | 0.02 ms |
| Release | 20 ms |
| s/C | True |

## A/B Testing Method

### Test Points
1. Raw drums (bypass)
2. Limited drums (default settings)
3. Adjusted settings

### Comparison Sequence
1. Match output levels with utility gain
2. Listen to kick punch on loop
3. Check snare crack
4. Test bass interaction

## Quick Fixes

| Issue | Solution |
|-------|----------|
| Lost kick punch | Enable s/C, decrease attack |
| Crackling snares | Increase release to 35ms |
| Uneven levels | Check link setting |
| Too compressed | Reduce ratio, raise threshold |
| Distorted tails | Decrease input gain |

## FL Studio Tips

### Drum Buss Routing
1. Route all drums to single buss
2. Insert Maximus on buss
3. Parallel blend with Fruity Send

### Layering Technique
1. Heavy limited drums (50%)
2. Raw processed drums (50%)
3. Blend for punch + character

### Pre-Processing
1. EQ boost 100-200Hz before Maximus
2. Transient shaper for extra punch
3. Parallel distortion for character

```

---

## FILE: 03-Workflows\by-instrument\03-buss-processing-workflow.md

```markdown
# Buss Limiting Workflow

## Goal
Add glue and cohesion to instrument busses (synths, vocals, groups).

## Plugin Settings

### Basic Configuration
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Channel Mode | M/S | Mid/Side processing |
| Link | True | Stereo imaging |
| Limiter Mode | Smooth | Gentle limiting |

### Glue Settings
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Input Gain | 0 to +1 dB | Subtle drive |
| Threshold | -6 to -10 dB | Moderate limiting |
| Ratio | 2 to 4 | Glue compression |
| Ceiling | -0.3 dB | Headroom |

### Timing
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Attack | 2 to 5 ms | Transients through |
| Release | 100 to 250 ms | Natural pumping |

## Workflow Steps

### Stage 1: Glue Setup
1. Input gain at 0dB
2. Threshold for 3-6dB gain reduction
3. Ratio 3:1 for standard glue
4. Attack 3ms for presence

### Stage 2: M/S Processing
1. Enable M/S mode
2. Listen in stereo: elements glued
3. Listen mid: vocals/snares focused
4. Listen sides: width maintained

### Stage 3: Release Tuning
1. Start at 150ms auto
2. Adjust to rhythm of material
3. Faster for busy arrangements
4. Slower for sparse arrangements

## Common Buss Applications

### Synth Buss
| Setting | Value |
|---------|-------|
| Input Gain | +1 dB |
| Threshold | -8 dB |
| Ratio | 3 |
| Attack | 2 ms |
| Release | 120 ms |
| Mode | Smooth |

### Vocals Buss
| Setting | Value |
|---------|-------|
| Input Gain | 0 dB |
| Threshold | -6 dB |
| Ratio | 2.5 |
| Attack | 4 ms |
| Release | 180 ms |
| Mode | Smooth |

### Guitar Buss
| Setting | Value |
|---------|-------|
| Input Gain | +1 dB |
| Threshold | -10 dB |
| Ratio | 4 |
| Attack | 2 ms |
| Release | 100 ms |
| Mode | Smooth |

## A/B Testing Method

### Glue Test
1. Bypass Maximus, note separation
2. Enable, note cohesion
3. Should sound like single group
4. Not compressed or squashed

### Stereo Width Check
1. Sum to mono
2. Check for phase issues
3. Verify width maintained
4. Listen for mono compatibility

## Quick Fixes

| Issue | Solution |
|-------|----------|
| Too glued | Reduce ratio to 2 |
| Lost transients | Increase attack to 5ms |
| Pumping | Increase release to 200ms |
| Narrow stereo | Check M/S settings |
| Distorted | Lower input gain |

## FL Studio Tips

### Buss Routing
1. Route similar instruments to buss
2. Insert Maximus mid-chain
3. Use for: synths, drums, vocals, guitars

### Parallel Processing
1. Send to Fruity Send
2. Maximus on send return
3. Blend for glue + dynamics

```

---

## FILE: 03-Workflows\by-instrument\04-mastering-workflow.md

```markdown
# Mastering Workflow

## Goal
Final stage limiting for release-ready masters with competitive loudness.

## Plugin Settings

### Mastering Chain Position
| Position | Plugin |
|----------|--------|
| 1 | EQ (corrective) |
| 2 | Compressor (subtle) |
| 3 | Maximus (limiting) |
| 4 | Limiter (ceiling only) |

### Maximus Configuration
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Channel Mode | M/S | Frequency-specific control |
| Link | True | Stereo balance |
| Limiter Mode | Hard | Transparent limiting |

### Final Limiting Settings
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Input Gain | +1 to +2 dB | Final push |
| Threshold | -2 to -4 dB | Gentle limiting |
| Ratio | 3 to 5 | Control peaks |
| Ceiling | -0.3 dB | Streaming headroom |
| Lookahead | Enabled | Precise control |

### M/S Tuning
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Mid Threshold | -3 dB | Control bass/mids |
| Side Threshold | -4 dB | Control stereo width |
| Link M/S | False | Independent control |

## Workflow Steps

### Stage 1: Pre-Limiting
1. Ensure mix is balanced
2. Apply corrective EQ
3. Subtle compression if needed
4. Check mono compatibility

### Stage 2: Initial Limiting
1. Set ceiling to -0.3dB
2. Threshold for 1-3dB gain reduction
3. This is your loudness ceiling

### Stage 3: M/S Tweaking
1. Listen mid channel separately
2. Check bass frequencies in mono
3. Listen sides for width
4. Adjust thresholds independently

### Stage 4: Loudness Target
| Target | LUFS | True Peak |
|--------|------|-----------|
| Spotify | -14 | -1 dBTP |
| Apple Music | -16 | -1 dBTP |
| YouTube | -14 | -1 dBTP |
| CD/Audio | -9 | -0.1 dBTP |

## Reference Comparison

### Level Matching
1. Import reference track
2. Match LUFS with utility gain
3. A/B every 30 seconds
4. Trust your ears

### What to Compare
- Low-end weight and punch
- High-end clarity
- Stereo width
- Dynamic range
- Overall energy

## A/B Testing Method

### Quick Reference Test
1. Load commercial reference
2. Match loudness with utility
3. Switch between tracks
4. Note 3 differences minimum

### Long Form Test
1. Play full song
2. Switch references every chorus
3. Note arrangement differences
4. Mix decisions based on genre

## Quick Fixes

| Issue | Solution |
|-------|----------|
| Not loud enough | Increase input gain |
| Too distorted | Raise threshold |
| Phasing | Check mono sum |
| Harsh highs | M/S: lower side threshold |
| Weak bass | M/S: lower mid threshold |

## FL Studio Tips

### Metering
- Use SPAN for spectrum analysis
- Use OTT for true peak monitoring
- Use waveform for visual reference

### Dithering
- Apply at 24-bit to 16-bit
- Use UV22HR or Apogee Soft Limit
- Only at final export

### Export Settings
| Format | Settings |
|--------|----------|
| WAV | 24-bit, 48/96kHz |
| MP3 | 320kbps CBR |
| FLAC | 24-bit (streaming) |

```

---

## FILE: 03-Workflows\by-instrument\INDEX.md

```markdown
# Maximus By-Instrument Workflow Index

## Available Workflows

| # | Workflow | Description | Best For |
|---|----------|-------------|----------|
| 01 | [Master Bus](01-master-bus-workflow.md) | Final limiting for complete mix | Full mix and mastering |
| 02 | [Drum Buss](02-drum-buss-workflow.md) | Aggressive limiting for drums | Drum buss and groups |
| 03 | [Buss Processing](03-buss-processing-workflow.md) | Glue compression for groups | Instrument busses |
| 04 | [Mastering](04-mastering-workflow.md) | Final stage mastering | Release-ready masters |

## Quick Reference by Goal

### Final Mix
1. [Master Bus](01-master-bus-workflow.md) - Primary limiting
2. [Mastering](04-mastering-workflow.md) - Release preparation

### Drum Processing
1. [Drum Buss](02-drum-buss-workflow.md) - Heavy limiting
2. [Buss Processing](03-buss-processing-workflow.md) - Glue effect

### Group Processing
1. [Buss Processing](03-buss-processing-workflow.md) - Cohesion
2. [Master Bus](01-master-bus-workflow.md) - Final touch

## Quick Start by Genre

| Genre | Primary Workflow | Settings Reference |
|-------|------------------|-------------------|
| Hip-Hop | Drum Buss | 6-10dB GR, fast attack |
| Trap | Drum Buss | Heavy s/C, 0.03ms attack |
| R&B | Master Bus | 2-4dB GR, smooth mode |
| EDM | Mastering | 4-6dB GR, hard mode |
| Pop | Master Bus | 2-3dB GR, medium attack |

## Related Documentation

- [Maximus Genre Presets](02-Data/presets/genre/INDEX.md)
- [Maximus Signature Presets](02-Data/presets/signature/INDEX.md)
- [Maximus Safety Rules](02-Data/rules/maximus-safety-rules.md)

```

---

## FILE: 04-Reference\adaptive-release-curves.md

```markdown
# Technical Reference: Adaptive Release Curves

Mastering the dual-release (Rel 1 & Rel 2) system of Maximus. [SRC: IL-MAN]

## 1. The Single Release Problem
In traditional compressors, you have one release time. If it is too fast, you get digital distortion (zipper noise) on low frequencies. If it is too slow, the compressor "chokes" and doesn't recover fast enough for the next transient.

## 2. The Maximus Solution: Rel 1 + Rel 2
Maximus uses a two-stage release system to provide more musical, "adaptive" recovery.

- **Rel 1 (Primary Release):** This is the main recovery speed. It handles the initial jump back from a gain reduction event.
- **Rel 2 (Adaptive Smoothness):** This acts as a secondary "buffer" release. It smooths out the curve of Rel 1.

## 3. How to Set Them
- **For Transparency (Mastering):** Use a relatively fast **Rel 1** (to catch the peaks) and a slower **Rel 2** (to ensure the recovery is smooth and unnoticeable).
- **For Punch (Drums):** Set **Rel 2** very low or to zero. This allows **Rel 1** to act like a traditional fast compressor, creating that signature "snap" and "thump."
- **For Low Frequencies:** Always use a slower **Rel 2** on the **Low** band. Low-frequency waves are very long; if the release is too fast, the compressor will try to follow the individual wave cycles, resulting in audible distortion.

---

## 4. Visualizing the Curve
In the Maximus Histogram, you can observe the "White Line" (Gain Reduction).
- If the line jumps back to the top instantly, your release is very fast.
- If the line slowly "arcs" back up, your **Rel 2** is active and smoothing the recovery.

## 5. The "Threshold" Interaction
Rel 2 is often more active when the compressor is pushed harder. If you are only getting 1-2dB of reduction, Rel 1 will dominate the sound. If you are "crushing" the signal, Rel 2 becomes essential for preventing the mix from sounding "choppy."

---
*For practical application of these settings, see the [03-Workflows/by-goal/loudness-maximization.md](../03-Workflows/by-goal/loudness-maximization.md) guide.*

```

---

## FILE: 04-Reference\technical-specs.md

```markdown
# Technical Specs: Maximus Mechanics

## 1. Lookahead Topology (Latency)

Maximus is not a "Rear-view" compressor; it is a "Predictive" compressor.

*   **Mechanism:** It buffers audio into RAM before playing it.
*   **Latency Calculation:** `Total Latency = LMH Delay + Master Attack`.
*   **Why?** By seeing the peak 2ms before it happens, the gain reduction envelope can ramp down *smoothly* to meet the peak, rather than slamming shut instantly (which causes clicking).
*   **Phase:** The Low, Mid, and High bands are delayed by the exact same amount to maintain phase coherence.

## 2. Release Curve Physics (Rel 1 vs Rel 2)

Most compressors have one release shape (usually exponential). Maximus blends two.

*   **Release 1 (Accelerating):**
    *   **Math:** The recovery starts slow and speeds up.
    *   **Sound:** "Snappy". It jumps back to full volume quickly. Good for percussion.
*   **Release 2 (Decelerating):**
    *   **Math:** The recovery starts fast and slows down as it approaches 0dB.
    *   **Sound:** "Smooth". It glides back to full volume. Good for Bass/Vocals.
*   **Curve Knob:** Blends the weighting of these two mathematical functions.

## 3. Saturation Ceiling Dynamics

The **Ceiling (CEIL)** knob in the saturation section is a "Soft Clipper Threshold".

*   **Logic:**
    *   If Signal < Ceiling: Linear operation (Clean).
    *   If Signal > Ceiling: Non-linear waveshaping begins.
*   **Curve Shape:** The transition is hyperbolic (Soft Knee).
*   **Note:** This happens *after* the compression envelope but *before* the band output gain. This means you can compress a signal, then saturate it, then boost it.

## 4. Linear Phase Crossover (FFT)

*   **Filter Type:** Finite Impulse Response (FIR) using FFT convolution.
*   **Slope:** The transitions between Low/Mid and Mid/High are perfect vertical cuts (if set steeply) or defined slopes, with **Zero Phase Shift**.
*   **Pre-Ringing:** Because FFT windows are symmetrical, a sharp transient (Kick) will produce a faint "echo" of itself *before* the hit. This is unavoidable in Linear Phase EQ, but in Maximus, it ensures that the recombination of the 3 bands is mathematically perfect (flat frequency response).

## 5. Parallel Processing (The "Mix" Knob)

*   **Path:** `Input -> [Split] -> [Processing] -> [Mix] -> Output`.
*   **Phase:** Because the "Dry" signal is delay-compensated to match the "Wet" signal's lookahead, there is **no phasing** (Combing) when mixing dry and wet signals, even in multiband mode.

```

---

