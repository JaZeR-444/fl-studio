# Maximus - Multiband Maximizer

```
███╗   ███╗ █████╗ ██╗  ██╗██╗███╗   ███╗██╗   ██╗███████╗
████╗ ████║██╔══██╗╚██╗██╔╝██║████╗ ████║██║   ██║██╔════╝
██╔████╔██║███████║ ╚███╔╝ ██║██╔████╔██║██║   ██║███████╗
██║╚██╔╝██║██╔══██║ ██╔██╗ ██║██║╚██╔╝██║██║   ██║╚════██║
██║ ╚═╝ ██║██║  ██║██╔╝ ██╗██║██║ ╚═╝ ██║╚██████╔╝███████║
╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚═╝     ╚═╝ ╚═════╝ ╚══════╝
```

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
  ```json
  {
    "plugin_name": "Maximus",
    "category": "Dynamics",
    "bands": ["Low", "Mid", "High", "Master"],
    "features": ["Spline envelopes", "Multiband saturation", "PDC"]
  }
  ```

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

```
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
```

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