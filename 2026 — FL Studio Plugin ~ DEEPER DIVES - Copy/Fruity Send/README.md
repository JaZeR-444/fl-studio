# Fruity Send - Precision Routing Utility

```
███████╗██████╗ ██╗   ██╗██╗████████╗██╗   ██╗    ███████╗███████╗███╗   ██╗██████╗ 
██╔════╝██╔══██╗██║   ██║██║╚══██╔══╝╚██╗ ██╔╝    ██╔════╝██╔════╝████╗  ██║██╔══██╗
█████╗  ██████╔╝██║   ██║██║   ██║    ╚████╔╝     ███████╗█████╗  ██╔██╗ ██║██║  ██║
██╔══╝  ██╔══██╗██║   ██║██║   ██║     ╚██╔╝      ╚════██║██╔══╝  ██║╚██╗██║██║  ██║
██║     ██║  ██║╚██████╔╝██║   ██║      ██║       ███████║███████╗██║ ╚████║██████╔╝
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝   ╚═╝      ╚═╝       ╚══════╝╚══════╝╚═╝  ╚═══╝╚═════╝ 
```

**Plugin Type:** Routing / Signal Extraction
**Category:** Utility / Mixing
**Official Manual:** [Image-Line Fruity Send Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Send.htm)

---

## 🎯 What is Fruity Send?

Fruity Send is a specialized routing plugin that allows you to "extract" audio from a specific point in a mixer track's effect chain and send it to another track. Unlike standard mixer sends (which happen at the end of the chain), Fruity Send can be placed *anywhere* (e.g., send to reverb *before* the distortion). It is the only way to perform **Pre-Fader Sends** within the FL Studio mixer effects slots.

**Key Capabilities:**
- **Pre-Fader Routing:** Send signal before it hits the track volume fader.
- **Chain Extraction:** Send audio from Slot 1, while Slot 2-10 continue processing.
- **Dry Control:** Choose whether to pass audio through or silence it after the send.
- **Pan/Volume:** Independent control over the sent signal's properties.
- **Feedback Prevention:** Intelligently restricts routing to prevent loops.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **how-sends-work.md** (Mixer routing vs Plugin routing)
3. Create **parameter-cheat-sheet.md**
4. Sidechain Track 1 to Track 2. Load Fruity Send on Track 1 and select Track 2 in the dropdown.

### For Mix Engineers:
1. Study **pre-fader-reverb-setup.md**
2. Review **parallel-processing-without-patcher.md**
3. Learn **dynamic-send-automation.md**

### For Patcher Power Users:
1. Study **signal-splitting-techniques.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Send To:** Target mixer track selector.
  - **Dry:** Level of signal continuing down the current track.
  - **Volume:** Level of signal being sent.
  - **Pan:** Panning of the sent signal.

- [ ] **pre-vs-post-fader.md**
  - Why standard Mixer sends are affected by the volume slider.
  - Why Fruity Send stays constant even if you mute the channel.

#### 02-Data/parameters/
- [ ] **fruity-send-params.json**
  ```json
  {
    "plugin_name": "Fruity Send",
    "category": "Utility",
    "parameters": [
      {
        "name": "Send To",
        "type": "selector",
        "description": "Destination mixer track index",
        "pro_tip": "The target track must be sidechained to the host track first."
      }
    ]
  }
  ```

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **pre-fader-reverb.md**
  - Use case: You want a vocal to fade out, but the reverb tail to stay loud.
  - Setup: Place Fruity Send in Slot 1 -> Send to Reverb Track. Fader automation on Vocal track now doesn't kill the reverb.

- [ ] **extracting-clean-di.md**
  - Use case: Distorted Guitar on Track 1.
  - Setup: Slot 1 (Fruity Send) sends to Track 2 (Clean). Slot 2 (Distortion). Track 2 now has the clean DI for re-amping.

#### 03-Workflows/by-context/
- [ ] **vocal-throw-automation.md**
- [ ] **drum-parallel-compression-bus.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **feedback-loop-restrictions.md**
  - Why some tracks don't appear in the list.
  - FL Studio's protection against infinite audio loops.

---

## 🔬 Research Framework

### Phase 1: Basic Operation (Week 1)
**Goal:** Successful Routing

**Tasks:**
1. Create Track 1 (Source) and Track 2 (FX)
2. Right-click Track 2's send icon on Track 1 -> Sidechain to this track
3. Load Fruity Send on Track 1
4. Select Track 2 in the "Send To" box
5. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- What happens if I set "Dry" to 0%? (The source track goes silent, but the send track keeps playing).
- Can I send to more than one track? (Use multiple instances of Fruity Send).

### Phase 2: Complex Chains (Week 2)
**Goal:** Chain Extraction

**Tasks:**
1. Put an EQ on Slot 1, Fruity Send on Slot 2, and a heavy Distortion on Slot 3
2. Verify the sent signal has EQ but NO distortion
3. Create pre-fader-reverb.md

**Key Questions to Answer:**
- Does Fruity Send work on the Master track? (No).

---

## 📊 Plugin Specifications to Document

### Engine
- Latency (0 ms)
- Number of targets (1 per instance)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is the "Send To" list empty? (You haven't sidechained any tracks to the current one).
2. Is Fruity Send the same as the knobs at the bottom of the mixer? (No, those are post-fader/post-FX. This is insert-position dependent).

---

## 📝 Documentation Standards

### For Each Workflow:
- **Slot Position:** Where in the chain
- **Target Track:** Name/Number
- **Dry Setting:** 0% or 100%

---

## 🔗 Cross-Reference with Other Plugins

Fruity Send is often used with:
- **Patcher** (For even more complex internal routing)
- **Fruity Mute 2** (To cut the send input dynamically)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

```
Fruity Send/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── pre-vs-post-fader.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── fruity-send-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── pre-fader-reverb.md
│   │   └── extracting-clean-di.md
│
└── 04-Reference/
    └── feedback-loop-restrictions.md
```

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Fruity Send Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Send.htm)
- [Fruity Send Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Fruity_Send_tutorials.htm)
- [Fruity Send Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+fruity+send+tutorial)

### Community Resources
- [Fruity Send Subreddit](https://www.reddit.com/r/FL_Studio/search?q=fruity+send&restrict_sr=1)
- [Fruity Send User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Fruity Send Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for detailed audio analysis
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity Parametric EQ 2** for tone shaping
- **Fruity Limiter** for monitoring output levels

### Recommended Learning Materials
- "Audio Routing Fundamentals" - Understanding signal flow in DAWs
- "Pre vs Post Fader Sends" - When to use each approach
- "Parallel Processing Techniques" - Advanced mixing workflows

### Advanced Techniques
- **Pre-Fader Routing:** Understanding pre-fader vs post-fader sends
- **Chain Extraction:** Extracting signals from specific points in chains
- **Feedback Prevention:** Managing routing to prevent loops

---

## 📚 In-Depth Technical Analysis

### Routing Architecture
Fruity Send implements a sophisticated routing system:
- **Insert Position Routing:** Can be placed anywhere in the effect chain
- **Pre-Fader Operation:** Maintains send level regardless of track fader
- **Signal Extraction:** Extracts audio from current position in chain
- **Independent Processing:** Sent signal can be processed separately
- **Dry/Wet Control:** Controls amount of signal continuing in original chain

### Signal Processing Chain
The internal architecture handles signal routing:
- **Input Stage:** Signal level monitoring and routing
- **Chain Position:** Extracts signal from current position in effect chain
- **Send Processing:** Volume and pan adjustment for sent signal
- **Destination Routing:** Routes to selected mixer track
- **Dry Control:** Determines signal continuation in original chain
- **Output Stage:** Final routing to destination track

### Pre-Fader vs Post-Fader Sends
Understanding the difference between send types:
- **Standard Mixer Sends:** Post-fader, affected by track volume
- **Fruity Send:** Pre-fader when placed before fader control
- **Volume Independence:** Send level unaffected by track fader
- **Automation Independence:** Send level unaffected by volume automation
- **Creative Applications:** Different uses for each approach

### Feedback Prevention System
Fruity Send includes intelligent feedback prevention:
- **Loop Detection:** Identifies potential routing loops
- **Restriction Algorithm:** Prevents infinite audio feedback
- **Safe Routing:** Ensures stable audio routing
- **Error Prevention:** Blocks unsafe routing configurations
- **System Protection:** Maintains system stability

### Sidechain Integration
The plugin integrates with FL Studio's sidechain system:
- **Track Sidechaining:** Requires target track to be sidechained first
- **Routing Validation:** Ensures proper routing setup
- **Dynamic Updates:** Responds to mixer changes
- **Connection Management:** Maintains routing connections
- **System Integration:** Works with FL Studio's routing architecture

## 🎛️ Parameter Deep Dive

### Send Destination Control
- **Send To:** Selects target mixer track
  - Range: Available mixer tracks (excluding current track)
  - Effect: Routes extracted signal to selected track
  - Use for: Routing to effects buses or other channels
  - Pro tip: Target track must be sidechained first
- **Behavior:**
  - Only shows sidechained tracks in dropdown
  - Prevents routing to same track (feedback prevention)
  - Updates dynamically when sidechain connections change
  - Pro tip: Use for routing to reverb, delay, or other effect buses
- **Applications:**
  - Effects routing: Send to reverb or delay buses
  - Parallel processing: Send to parallel compression tracks
  - Creative routing: Send to unusual destinations
  - Mix organization: Route to appropriate buses
  - Pro tip: Plan routing before setting up sends

### Dry Control
- **Function:** Controls signal continuation in original chain
  - Range: 0-100% (typically)
  - Effect: Determines how much signal continues past the send
  - Use for: Muting original signal or maintaining it
  - Pro tip: 0% = mute original, 100% = maintain original
- **Behavior:**
  - 0%: Original signal muted after send
  - 100%: Original signal continues unchanged
  - Values in between: Partial continuation of original signal
  - Pro tip: Use for signal extraction without duplication
- **Applications:**
  - Signal extraction: 0% to extract signal completely
  - Parallel processing: 100% to maintain original signal
  - Creative routing: Variable dry for unique effects
  - Mix control: Adjust for appropriate balance
  - Pro tip: Use for creating DI signals from processed tracks

### Volume Control
- **Function:** Controls level of sent signal
  - Range: 0-200% (typically)
  - Effect: Adjusts volume of signal sent to destination
  - Use for: Setting appropriate send level
  - Pro tip: Higher values create stronger sends
- **Behavior:**
  - 0%: No signal sent to destination
  - 100%: Unity gain send level
  - Values above 100%: Gain boost in send
  - Pro tip: Use for precise send level control
- **Applications:**
  - Subtle sends: Low values for gentle effects
  - Strong sends: High values for pronounced effects
  - Gain staging: Adjust for appropriate destination levels
  - Creative effects: Extreme values for unique results
  - Pro tip: Use with destination track level for fine control

### Pan Control
- **Function:** Controls stereo position of sent signal
  - Range: Hard left to hard right
  - Effect: Positions sent signal in stereo field
  - Use for: Stereo positioning of sent signal
  - Pro tip: Independent of original signal's position
- **Behavior:**
  - Allows different positioning than original signal
  - Maintains independence from original pan
  - Can create stereo separation effects
  - Pro tip: Use for creative stereo positioning
- **Applications:**
  - Stereo separation: Different positioning than original
  - Creative placement: Unusual stereo positions
  - Mix positioning: Place effects in specific positions
  - Spatial effects: Create unique stereo images
  - Pro tip: Use for creative stereo manipulation

## 🎼 Sound Design Applications

### Parallel Processing
Using Fruity Send for parallel processing applications:

**Parallel Compression:**
- Route signal to separate track for compression
- Maintain original dynamics on main track
- Blend compressed and uncompressed signals
- Essential for maintaining punch while adding density
- Perfect for drum bus processing

**Parallel Reverb:**
- Send signal to reverb track with high send level
- Maintain dry signal on original track
- Blend for precise reverb amount
- Essential for vocal and instrument reverb
- Perfect for maintaining clarity while adding space

**Parallel Distortion:**
- Send signal to distortion track
- Maintain clean signal on original track
- Blend for controlled saturation
- Essential for adding grit without losing clarity
- Perfect for creative effects

### Creative Routing
Using Fruity Send for experimental applications:

**Chain Extraction:**
- Extract signal from middle of effect chain
- Route to different processing paths
- Create complex routing scenarios
- Essential for advanced sound design
- Perfect for creative signal manipulation

**Pre-FX Sends:**
- Send signal before effects processing
- Maintain original processing on main chain
- Create multiple processing paths
- Essential for complex effects routing
- Perfect for creative effects processing

**DI Extraction:**
- Extract clean signal from processed track
- Route to separate track for re-amping
- Maintain processed signal on original track
- Essential for guitar and bass processing
- Perfect for creative re-processing

### Mix Enhancement
Using Fruity Send for mixing applications:

**Bus Routing:**
- Route multiple tracks to common buses
- Apply processing to grouped elements
- Maintain individual track control
- Essential for professional mixing
- Perfect for organized mixing workflows

**Effects Management:**
- Route to dedicated effects tracks
- Maintain consistent effects processing
- Enable easy effects management
- Essential for professional mixing
- Perfect for organized effects routing

**Creative Mixing:**
- Unusual routing for creative effects
- Cross-track processing for interest
- Creative signal flow for unique sounds
- Essential for creative mixing
- Perfect for experimental mixing approaches

## 🧪 Experimental Techniques

### Advanced Routing Applications
Creative uses of Fruity Send's routing capabilities:

**Multi-Stage Processing:**
- Extract signal at multiple points in chain
- Route to different processing paths
- Create complex processing architectures
- Perfect for advanced sound design
- Essential for sophisticated processing

**Feedback Loops:**
- Create controlled feedback with multiple sends
- Use for evolving textures and effects
- Perfect for experimental music
- Essential for creative feedback processing
- Useful for unique sonic textures

**Dynamic Routing:**
- Use automation to change routing destinations
- Create evolving routing patterns
- Perfect for evolving arrangements
- Essential for dynamic routing
- Useful for creative expression

### Creative Parameter Manipulation
Advanced techniques for parameter control:

**Automation Techniques:**
- Automate send destination for dynamic routing
- Use envelope followers for responsive routing
- Combine with other automation sources
- Perfect for live performance
- Use for expressive control

**Modulation Applications:**
- Use with external modulation sources
- Combine with other modulation effects
- Create complex modulation chains
- Perfect for evolving sounds
- Use for dynamic expression

**Multi-Stage Processing:**
- Use multiple instances in sophisticated arrangements
- Create complex routing networks
- Build sophisticated processing chains
- Perfect for advanced sound design
- Use for complex processing

## 🎚️ Workflow Optimization

### Routing Workflows
Efficient approaches to using Fruity Send for routing:

**Effects Setup:**
- Create dedicated effects buses first
- Sidechain effects tracks to source tracks
- Use Fruity Send for precise routing
- Essential for organized effects routing
- Pro tip: Plan effects routing before setup

**Parallel Processing:**
- Set up parallel tracks for processing
- Route to parallel tracks with Fruity Send
- Blend with original for desired effect
- Essential for parallel processing workflows
- Pro tip: Use for maintaining dynamics while adding character

**Chain Extraction:**
- Identify extraction points in effect chains
- Use Fruity Send to extract at specific points
- Route extracted signals appropriately
- Essential for complex processing chains
- Pro tip: Use for creating DI signals from processed tracks

### Integration Workflows
Working with other plugins and tools:

**Effects Integration:**
- Use before reverb for spatial effects
- Combine with delay for rhythmic patterns
- Integrate with chorus for width
- Work with filtering for tone shaping
- Optimize for effects chains

**Dynamics Integration:**
- Use with compression for parallel processing
- Combine with limiting for safety
- Integrate with gates for noise control
- Work with expanders for dynamic range
- Optimize for dynamics processing

**Analysis Integration:**
- Use with spectrum analyzers for visual feedback
- Compare with reference tracks
- Use for corrective processing
- Combine with level meters for comprehensive analysis
- Integrate with other analytical tools

## 🎧 Genre-Specific Applications

### Electronic Dance Music
- **Parallel Compression:** Maintaining punch while adding density
- **Effects Routing:** Organizing reverb and delay sends
- **Creative Routing:** Unusual routing for unique effects
- **Energy Management:** Using routing for track energy
- **Build-up Effects:** Creating tension with routing changes

### Hip-Hop and R&B
- **Vocal Enhancement:** Parallel processing for vocal character
- **Drum Processing:** Parallel compression for drums
- **Effects Management:** Organizing reverb and delay sends
- **Mix Enhancement:** Using routing for mix clarity
- **Creative Effects:** Adding unique character to elements

### Rock and Metal
- **Guitar Processing:** Parallel processing for guitar character
- **Drum Enhancement:** Parallel compression for drums
- **Effects Routing:** Organizing guitar effects sends
- **Mix Enhancement:** Using routing for mix clarity
- **Creative Effects:** Adding unique character to instruments

### Ambient and Experimental
- **Atmospheric Routing:** Creating evolving textures through routing
- **Spatial Effects:** Complex spatial routing scenarios
- **Experimental Routing:** Pushing boundaries of signal flow
- **Evolution Techniques:** Using automation for routing changes
- **Spatial Processing:** Combining with spatial effects

## 🔄 Integration with Other Plugins

### Effects Processing
Fruity Send works well with various effects:
- **Reverb:** Routing to dedicated reverb buses
- **Delay:** Creating rhythmic patterns with routing
- **Chorus:** Adding width to routed signals
- **Filtering:** Additional frequency processing on routed signals
- **Compression:** Controlling dynamics of routed signals

### Dynamics Processing
Integration with dynamics processors:
- **Parallel Compression:** Routing for parallel compression
- **Upward Compression:** Using with upward compression
- **Limiting:** Combining with limiting for control
- **Gate/Expander:** Using with noise gates
- **De-esser:** Combining for vocal processing

### Equalization
Working with other EQ plugins:
- **Parametric EQ:** Combining with parametric EQs for precision
- **Graphic EQ:** Comparing with graphic EQs
- **Multi-Band:** Combining with multi-band processing
- **Dynamic EQ:** Using with dynamic EQ
- **Spectral Processing:** Combining with spectral tools

## 📖 Historical Context

### Development Background
Fruity Send was developed as a specialized routing utility:
- Created to provide insert-position signal extraction
- Designed for pre-fader send capabilities
- Developed with mixing and sound design in mind
- Intended to complement standard mixer sends

### Evolution Through FL Studio Versions
- Initially introduced with basic routing capabilities
- Enhanced with additional controls and features
- Improved with better integration and stability
- Expanded with more sophisticated routing options

### Impact on Music Production
Fruity Send has influenced music production by:
- Providing accessible pre-fader routing
- Enabling complex parallel processing workflows
- Facilitating creative signal routing
- Supporting various musical genres with flexible routing

## 🧠 Advanced Processing Techniques

### Routing Mastery
Advanced techniques for signal routing:
- **Insert Position Routing:** Understanding chain position effects
- **Pre-Fader Control:** Managing send independence from faders
- **Signal Extraction:** Extracting signals from specific points
- **Dry/Wet Balance:** Managing original vs sent signal balance
- **Feedback Prevention:** Understanding routing restrictions

### Parallel Processing
Advanced parallel processing techniques:
- **Dynamic Blending:** Changing parallel blend over time
- **Frequency-Specific:** Parallel processing specific frequency ranges
- **Time-Based:** Parallel processing with timing differences
- **Creative Applications:** Unusual parallel processing approaches
- **Mix Integration:** Integrating parallel processing into mixes

### Creative Applications
Advanced creative techniques:
- **Sound Design:** Creating unique routed textures
- **Atmospheric Processing:** Building ambient routed effects
- **Rhythmic Effects:** Creating rhythmic routing patterns
- **Spatial Manipulation:** Creating immersive routed environments
- **Experimental Processing:** Pushing boundaries of routing

## 📊 Performance Considerations

### CPU Usage
Managing Fruity Send's impact on system performance:
- **Low CPU Load:** Very efficient processing
- **Real-Time Performance:** Optimized for live performance
- **Instance Count:** Multiple instances have minimal impact
- **Parameter Automation:** Automated parameters have minimal CPU impact
- **Optimization Strategies:** Techniques for performance

### Audio Quality
Maintaining audio quality during routing:
- **Signal Integrity:** Preserving original signal quality
- **Phase Coherence:** Maintaining phase relationships
- **Headroom Management:** Preventing clipping
- **Dithering:** Appropriate dithering for output
- **Latency Management:** Minimal routing latency

### System Integration
Optimizing Fruity Send within the system:
- **Buffer Management:** Working with audio buffer settings
- **Threading:** Understanding processing thread usage
- **Driver Compatibility:** Ensuring ASIO/WASAPI compatibility
- **Routing Integration:** Working with FL Studio's routing system

## 🛠️ Troubleshooting Common Issues

### Routing Problems
- **No Audio:** Verify sidechain connection between tracks
- **Feedback Loops:** Check for circular routing
- **Phase Issues:** Verify stereo field and width settings
- **Silent Output:** Check Dry control settings
- **Level Mismatch:** Adjust send and destination levels

### Technical Issues
- **High CPU Usage:** Fruity Send has minimal CPU usage
- **Latency Issues:** Fruity Send has zero additional latency
- **Clipping:** Check send and destination levels
- **Artifacts:** Verify routing setup and connections
- **Compatibility:** Verify plugin compatibility

### Creative Issues
- **Unmusical Results:** Verify routing and level settings
- **Lack of Character:** Adjust send levels and destination processing
- **Poor Integration:** Use appropriate send levels for blend
- **Overpowering:** Reduce send levels or adjust destination processing
- **Lack of Control:** Use automation for dynamic routing changes

## 🎚️ Advanced Configuration

### Custom Routing Setups
Creating and managing custom routing configurations:
- **Effects Routing:** Optimized for effects bus applications
- **Parallel Processing:** Configured for parallel processing workflows
- **Creative Routing:** Set up for sound design applications
- **Genre-Specific:** Configured for specific music styles

### Multi-Instance Setup
Using multiple Fruity Send instances effectively:
- **Chain-Specific:** Different instances for different chain positions
- **Parallel Processing:** Multiple instances for parallel routing
- **Selective Routing:** Different instances for different destinations
- **Performance Optimization:** Managing multiple instances

### Integration Configurations
Optimizing for different integration scenarios:
- **Insert Processing:** Inline processing configurations
- **Send Processing:** Effects return configurations
- **Hardware Integration:** External hardware integration
- **DAW Integration:** Optimizing for FL Studio workflow

## 🌐 Community and Resources

### Online Communities
- **FL Studio Forums:** Discussions about Send techniques
- **Reddit Groups:** Sharing routing techniques and workflows
- **Discord Servers:** Real-time collaboration and feedback

### Educational Resources
- **Video Tutorials:** Demonstrations of advanced routing techniques
- **Written Guides:** In-depth articles on signal flow and routing
- **Webinars:** Live demonstrations and Q&A sessions

### Sharing Platforms
- **Routing Libraries:** Websites hosting Send configurations
- **Technique Sharing:** Platforms for sharing routing methods
- **Educational Content:** Tutorials and educational materials

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Set up a parallel processing chain without using Patcher
- [ ] Explain why a pre-fader send is necessary for "Dub" mixing
- [ ] Successfully route audio between 3 different mixer tracks using insert extraction
- [ ] Create a pre-fader reverb send that maintains reverb level during fader automation
- [ ] Extract a clean DI signal from a heavily processed guitar track
- [ ] Use Fruity Send for dynamic routing changes during automation
- [ ] Set up complex parallel compression with appropriate dry/wet balance
- [ ] Troubleshoot routing feedback and connection issues effectively
- [ ] Integrate Fruity Send into efficient mixing workflows
- [ ] Create creative routing effects using chain extraction

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection