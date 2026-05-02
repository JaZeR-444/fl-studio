# Fruity Video Player - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# Fruity Video Player - A/V Synchronization

`\`\`
███████╗██████╗ ██╗   ██╗██╗████████╗██╗   ██╗    ██╗   ██╗██╗██████╗ ███████╗ ██████╗ 
██╔════╝██╔══██╗██║   ██║██║╚══██╔══╝╚██╗ ██╔╝    ██║   ██║██║██╔══██╗██╔════╝██╔═══██╗
█████╗  ██████╔╝██║   ██║██║   ██║    ╚████╔╝     ██║   ██║██║██║  ██║█████╗  ██║   ██║
██╔══╝  ██╔══██╗██║   ██║██║   ██║     ╚██╔╝      ╚██╗ ██╔╝██║██║  ██║██╔══╝  ██║   ██║
██║     ██║  ██║╚██████╔╝██║   ██║      ██║        ╚████╔╝ ██║██████╔╝███████╗╚██████╔╝
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝   ╚═╝      ╚═╝         ╚═══╝  ╚═╝╚═════╝ ╚══════╝ ╚═════╝ 

██████╗ ██╗      █████╗ ██╗   ██╗███████╗██████╗ 
██╔══██╗██║     ██╔══██╗╚██╗ ██╔╝██╔════╝██╔══██╗
██████╔╝██║     ███████║ ╚████╔╝ █████╗  ██████╔╝
██╔═══╝ ██║     ██╔══██║  ╚██╔╝  ██╔══╝  ██╔══██╗
██║     ███████╗██║  ██║   ██║   ███████╗██║  ██║
╚═╝     ╚══════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═╝
`\`\`

**Plugin Type:** Video Playback Engine
**Category:** Utility / Video / Post-Production
**Official Manual:** [Image-Line Fruity Video Player Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Video%20Player.htm)

---

## 🎯 What is Fruity Video Player?

Fruity Video Player is a specialized plugin designed to synchronize video files with the FL Studio timeline. It is essential for **film scoring**, **foley work**, and **sound design for video**. It allows you to watch a movie or clip while you compose, ensuring that every transition and sound effect hits the exact frame. It uses the FFmpeg engine for broad format support and includes professional features like SMPTE timecode.

**Key Capabilities:**
- **Precise Synchronization:** Video follows the FL Studio playhead perfectly.
- **Broad Format Support:** Handles .avi, .mov, .mpeg, .wmv, and more via FFmpeg.
- **SMPTE Time Display:** View exact frame numbers for professional alignment.
- **Audio Extraction:** Route video audio to a mixer track or mute it.
- **Detachable Window:** Float the video on a second monitor while you work.
- **A/V Looping:** Set custom start and end points for scoring specific scenes.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **supported-video-formats.md**
3. Create **parameter-cheat-sheet.md**
4. Load a short clip, press Play in FL Studio, and verify the video tracks the cursor.

### For Film Composers:
1. Study **syncing-audio-to-frames.md** (SMPTE)
2. Review **managing-foley-hits.md**
3. Learn **multiple-monitor-setup.md**

### For Remixers:
1. Study **sampling-audio-from-video.md**
2. Review **matching-video-bpm.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Open:** Loading files.
  - **Volume:** Internal audio control.
  - **Audio Output:** Mixer routing selector.
  - **Time Display:** SMPTE vs Seconds.
  - **Slave Mode:** Timeline sync toggle.

- [ ] **smpte-basics-guide.md**
  - Understanding `HH:MM:SS:FF` (Hours:Minutes:Seconds:Frames).
  - Standard frame rates (24, 25, 29.97, 30, 60 fps).

#### 02-Data/parameters/
- [ ] **video-player-specs.json**
  `\`\`json
  {
    "plugin_name": "Fruity Video Player",
    "decoder": "FFmpeg",
    "features": ["SMPTE", "Pre-roll", "Detachable GUI"]
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **scoring-a-short-film.md**
  - Dragging video to the playlist vs loading in plugin.
  - Using markers in the FL Studio timeline to identify "Hit Points."
  - Exporting the final audio to hand back to the editor.

- [ ] **ripping-video-audio.md**
  - Setting the Audio Output track.
  - Recording the video's audio into Edison for sampling.

- [ ] **aspect-ratio-management.md**
  - Keeping original vs Stretching to window.

#### 03-Workflows/by-context/
- [ ] **youtube-content-scoring.md**
- [ ] **game-trailer-sound-design.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **performance-optimization-video.md**
  - Using proxy files (lower resolution) for better DAW performance.
  - Recommended codecs for smooth playback (ProRes, DNxHD).

---

## 🔬 Research Framework

### Phase 1: The Link (Week 1)
**Goal:** Timing

**Tasks:**
1. Load a high-res video
2. Test "Fast Forward" and "Rewind" within FL
3. Switch between SMPTE and Time modes
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- Does it support 4K video?
- How do I mute the video's audio?

### Phase 2: The Score (Week 2)
**Goal:** Precision

**Tasks:**
1. Create a "Hit" sound exactly on frame 120
2. Loop a specific 5-second scene
3. Practice detaching the window to a second screen
4. Create smpte-basics-guide.md

---

## 📊 Plugin Specifications to Document

### Engine
- Codec Library (FFmpeg)
- Max Frame Rate

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is the video not playing? (Check if "Slave to host" is enabled or if the codec is unsupported).
2. Can I render the video *out* of FL Studio? (Generally no; FL Studio is for *audio* post-production. You export the audio and combine it in a video editor like Premiere/Resolve).

---

## 🔗 Cross-Reference with Other Plugins

Fruity Video Player is often used with:
- **Edison** (For recording video audio)
- **ZGameEditor Visualizer** (Creating *new* video instead of scoring *existing* video)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
Fruity Video Player/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── smpte-basics-guide.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── video-player-specs.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── scoring-a-short-film.md
│   │   └── ripping-video-audio.md
│
└── 04-Reference/
    └── performance-optimization-video.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Fruity Video Player Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Video%20Player.htm)
- [Fruity Video Player Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Fruity_Video_Player_tutorials.htm)
- [Fruity Video Player Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+fruity+video+player+tutorial)

### Community Resources
- [Fruity Video Player Subreddit](https://www.reddit.com/r/FL_Studio/search?q=fruity+video+player&restrict_sr=1)
- [Fruity Video Player User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Fruity Video Player Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for detailed audio analysis
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity Parametric EQ 2** for tone shaping
- **Fruity Limiter** for monitoring output levels

### Recommended Learning Materials
- "Video Scoring Fundamentals" - Understanding film composition
- "SMPTE Timecode Systems" - Professional timecode standards
- "Audio-Visual Synchronization" - Aligning audio with video frames

### Advanced Techniques
- **Frame-Accurate Scoring:** Understanding precise frame alignment
- **SMPTE Management:** Mastering timecode systems
- **Video Codec Optimization:** Managing performance with different codecs

---

## 📚 In-Depth Technical Analysis

### Video Playback Architecture
Fruity Video Player implements sophisticated video playback:
- **FFmpeg Integration:** Uses FFmpeg for broad format support
- **Timeline Synchronization:** Precise sync with FL Studio timeline
- **Frame-Accurate Playback:** Ensures frame-perfect alignment
- **Real-time Processing:** Immediate response to timeline changes
- **Multi-threaded Architecture:** Separate threads for video and audio

### Codec Support System
The plugin supports various video formats through FFmpeg:
- **Container Formats:** AVI, MOV, MP4, MKV, WMV, MPG, and more
- **Video Codecs:** H.264, H.265, ProRes, DNxHD, VP8, VP9
- **Audio Codecs:** AAC, MP3, PCM, AC3, DTS
- **Frame Rates:** 24, 25, 29.97, 30, 60 fps (and others)
- **Resolution Support:** Up to 4K and potentially higher

### SMPTE Timecode System
The SMPTE timecode implementation includes:
- **Format Display:** HH:MM:SS:FF (Hours:Minutes:Seconds:Frames)
- **Frame Rate Support:** Different frame rate standards
- **Precision Timing:** Frame-accurate positioning
- **Professional Standards:** Industry-standard timecode formats
- **Sync Capabilities:** Synchronization with video timeline

### Audio Extraction System
The audio extraction capabilities include:
- **Internal Audio Routing:** Route video audio to mixer tracks
- **Volume Control:** Independent volume control for video audio
- **Muting Options:** Mute video audio while keeping video
- **Channel Management:** Handle stereo and multi-channel audio
- **Quality Preservation:** Maintain original audio quality

### Signal Processing Chain
The internal architecture processes video and audio as follows:
- **Input Stage:** Video file loading and decoding
- **Timeline Sync:** Synchronization with FL Studio timeline
- **Video Processing:** Frame rendering and display
- **Audio Processing:** Audio extraction and routing
- **Output Stage:** Video display and audio routing to mixer

### Performance Optimization
The plugin includes performance considerations:
- **Proxy Support:** Lower-resolution proxies for better performance
- **Buffer Management:** Efficient video buffering for smooth playback
- **Codec Optimization:** Different performance characteristics for different codecs
- **Resolution Scaling:** Performance vs quality trade-offs
- **Memory Management:** Efficient memory usage for video files

## 🎛️ Parameter Deep Dive

### Video Controls
- **File Loading:**
  - **Function:** Opens video files for playback
    - Range: Any supported video format
    - Effect: Loads video into the player
    - Use for: Loading video content for scoring
    - Pro tip: Use for film scoring and video synchronization
  - **Behavior:**
    - Supports multiple file formats via FFmpeg
    - Maintains sync with FL Studio timeline
    - Pro tip: Verify file compatibility before loading
  - **Applications:**
    - Film scoring: Load movie files for scoring
    - Video synchronization: Sync audio to video frames
    - Foley work: Align sound effects to video
    - Creative applications: Use for A/V projects
    - Pro tip: Use for professional video scoring

### Audio Output Controls
- **Function:** Routes video audio to mixer tracks
  - Range: Any available mixer track
  - Effect: Determines where video audio appears in mixer
  - Use for: Audio extraction and routing
  - Pro tip: Essential for extracting audio from video
- **Behavior:**
  - Select specific mixer track for routing
  - Maintains original audio quality
  - Pro tip: Use for audio extraction workflows
- **Applications:**
  - Audio extraction: Route to Edison for sampling
  - Mixer integration: Route to appropriate tracks
  - Foley work: Route to foley processing chains
  - Creative extraction: Extract for sampling
  - Pro tip: Use for professional audio extraction

### SMPTE Display Controls
- **Function:** Shows precise timecode information
  - Format: HH:MM:SS:FF (Hours:Minutes:Seconds:Frames)
  - Effect: Displays exact frame position in video
  - Use for: Professional frame-accurate scoring
  - Pro tip: Essential for professional video work
- **Behavior:**
  - Updates in real-time with timeline position
  - Shows exact frame numbers for precision
  - Pro tip: Use for frame-accurate alignment
- **Applications:**
  - Frame accuracy: Precise frame alignment
  - Professional scoring: Industry-standard timecode
  - Hit point identification: Exact timing for effects
  - Collaboration: Standardized timecode for teams
  - Pro tip: Use for professional video scoring

### Slave Mode Control
- **Function:** Toggles timeline synchronization
  - Range: On/Off (binary)
  - Effect: Determines if video follows FL Studio playhead
  - Use for: Synchronization control
  - Pro tip: Essential for timeline sync
- **Behavior:**
  - On: Video follows FL Studio timeline
  - Off: Video plays independently
  - Pro tip: Keep enabled for scoring applications
- **Applications:**
  - Timeline sync: Keep video in sync with project
  - Independent playback: For preview purposes
  - Professional scoring: Essential for sync
  - Creative applications: Variable sync options
  - Pro tip: Use for precise synchronization

### Volume Control
- **Function:** Controls internal video audio level
  - Range: 0-100% (typically)
  - Effect: Adjusts volume of extracted video audio
  - Use for: Audio level management
  - Pro tip: Use for balancing video audio
- **Behavior:**
  - 0%: Mute video audio
  - 100%: Unity gain for video audio
  - Pro tip: Use for level matching
- **Applications:**
  - Audio balancing: Balance video audio with other tracks
  - Muting: Mute video audio when not needed
  - Level matching: Match to other audio levels
  - Creative control: Adjust for artistic purposes
  - Pro tip: Use for appropriate audio balance

### Aspect Ratio Controls
- **Function:** Manages video display aspect ratio
  - Options: Keep original, Stretch to window, Letterbox
  - Effect: Controls how video fits in display window
  - Use for: Proper video display
  - Pro tip: Use "Keep original" for proper aspect ratio
- **Behavior:**
  - Keep original: Maintains original aspect ratio
  - Stretch: Stretches video to fill window
  - Letterbox: Adds black bars to maintain aspect
  - Pro tip: Use original aspect for professional work
- **Applications:**
  - Professional display: Keep original aspect ratio
  - Space optimization: Stretch for maximum display
  - Creative display: Variable aspect ratios
  - Monitor optimization: Fit to screen space
  - Pro tip: Use original aspect for accuracy

## 🎼 Video Scoring Applications

### Film Scoring
Using Fruity Video Player for professional film scoring:

**Scene Analysis:**
- **Hit Point Identification:** Finding exact moments for musical cues
  - Use SMPTE display to identify frame-accurate hit points
  - Essential for professional scoring
  - Perfect for precise cue placement
  - Pro tip: Mark hit points in FL Studio timeline

- **Emotional Timing:** Aligning musical phrases with emotional beats
  - Watch video to identify emotional moments
  - Place musical phrases to match emotional timing
  - Essential for effective scoring
  - Perfect for emotional impact
  - Pro tip: Use markers for important moments

- **Cue Planning:** Planning musical cues in advance
  - Analyze video for cue placement
  - Plan musical transitions and themes
  - Essential for organized scoring
  - Perfect for professional workflow
  - Pro tip: Create detailed cue sheets

### Foley Work
Using Video Player for sound effect synchronization:

**Sound Effect Placement:**
- **Footstep Sync:** Aligning footsteps with on-screen action
  - Use frame-accurate timing for footstep placement
  - Essential for realistic foley
  - Perfect for walking scenes
  - Pro tip: Use slow motion for precision

- **Door Sound Sync:** Matching door sounds to visual action
  - Align door sounds with visual door movements
  - Essential for realistic sound design
  - Perfect for scene transitions
  - Pro tip: Use multiple takes for variety

- **Object Interaction:** Matching object sounds to visual action
  - Align object sounds with visual interactions
  - Essential for realistic sound design
  - Perfect for prop sounds
  - Pro tip: Use for detailed sound design

### Creative Applications
Using Video Player for experimental applications:

**Audio Extraction:**
- **Sample Creation:** Extracting audio from video for sampling
  - Route video audio to Edison for recording
  - Create samples from video content
  - Essential for creative sampling
  - Perfect for unique samples
  - Pro tip: Use for authentic sound samples

- **Audio Analysis:** Analyzing video audio content
  - Extract audio for detailed analysis
  - Use for reference and comparison
  - Essential for informed decisions
  - Perfect for audio study
  - Pro tip: Use for reference material

- **Creative Sampling:** Using video audio for creative purposes
  - Extract unusual sounds from video
  - Use for experimental music
  - Essential for creative sound design
  - Perfect for unique textures
  - Pro tip: Look for interesting audio elements

### Post-Production Applications
Using Video Player for post-production workflows:

**Audio Sync:**
- **ADR Preparation:** Preparing for automated dialogue replacement
  - Use video to identify dialogue timing
  - Essential for ADR workflows
  - Perfect for dialogue replacement
  - Pro tip: Use for precise timing

- **Music Sync:** Synchronizing music with video
  - Align musical elements with video timing
  - Essential for professional scoring
  - Perfect for synchronized music
  - Pro tip: Use for professional results

- **Sound Design:** Creating sound design for video
  - Design sounds that match video content
  - Essential for immersive experiences
  - Perfect for atmospheric design
  - Pro tip: Use for detailed sound design

## 🧪 Experimental Techniques

### Advanced Video Applications
Creative uses of Video Player's capabilities:

**Multi-Monitor Workflows:**
- **Detached Window Setup:** Using floating video window on second monitor
  - Detach video window for dedicated viewing
  - Use on second monitor for better workflow
  - Perfect for professional video scoring
  - Essential for efficient video work
  - Useful for focused video viewing

**Frame-Accurate Automation:**
- **Precise Automation:** Creating automation that aligns with specific frames
  - Use SMPTE display for frame-accurate automation
  - Create automation that matches video events
  - Perfect for precise synchronization
  - Essential for professional results
  - Useful for detailed automation

**Video-Based Composition:**
- **Visual Composition:** Composing based on visual elements
  - Use video as inspiration for musical composition
  - Align musical elements with visual pacing
  - Perfect for visual composers
  - Essential for video-responsive music
  - Useful for visual-musical integration

### Creative Parameter Manipulation
Advanced techniques for parameter control:

**SMPTE Automation:**
- **Timecode-Based Automation:** Using SMPTE for precise automation
  - Create automation based on specific timecodes
  - Use for frame-accurate parameter changes
  - Perfect for precise synchronization
  - Essential for professional video work
  - Use for exact timing control

**Audio Extraction Techniques:**
- **Selective Extraction:** Extracting specific audio elements
  - Use volume control to isolate specific elements
  - Combine with other processing for extraction
  - Create isolated audio elements
  - Perfect for detailed audio work
  - Use for focused extraction

**Multi-Stage Processing:**
- **Complex Video Integration:** Multiple processing stages for sophisticated effects
  - Create multi-stage video integration
  - Apply different processing to different stages
  - Build sophisticated video processing chains
  - Perfect for advanced video scoring
  - Use for complex video workflows

## 🎚️ Workflow Optimization

### Video Scoring Workflows
Efficient approaches to using Video Player for video scoring:

**Project Setup:**
- **Video Loading:** Efficient video file loading workflows
  - Verify video compatibility before loading
  - Use proxy files for better performance
  - Essential for smooth workflow
  - Pro tip: Use high-performance codecs for editing

- **Timeline Preparation:** Setting up timeline for video scoring
  - Mark important hit points in timeline
  - Set appropriate tempo for video
  - Essential for organized scoring
  - Pro tip: Use markers for important moments

**Scoring Techniques:**
- **Frame-Accurate Scoring:** Creating precise musical cues
  - Use SMPTE display for frame accuracy
  - Align musical elements with video events
  - Essential for professional scoring
  - Pro tip: Use for precise synchronization

### Integration Workflows
Working with other plugins and tools:

**Effects Integration:**
- **Pre-Effects:** Using before other effects
  - Apply before reverb for spatial effects
  - Use before delay for rhythmic patterns
  - Essential for proper signal flow
  - Pro tip: Use for tone preparation

- **Post-Effects:** Using after other effects
  - Apply after reverb for processed spatial effects
  - Use after delay for processed rhythmic patterns
  - Essential for final processing
  - Pro tip: Use for final tone shaping

**Analysis Integration:**
- **Spectrum Analysis:** Using with spectrum analyzers for feedback
  - Monitor frequency changes in real-time
  - Compare with reference tracks
  - Essential for informed parameter control
  - Pro tip: Use for visual feedback

## 🎧 Genre-Specific Applications

### Film and Television
- **Cinematic Scoring:** Creating film scores with precise timing
- **TV Themes:** Creating television theme music with video sync
- **Commercial Music:** Creating commercial music with video timing
- **Energy Management:** Using music for video energy
- **Build-up Effects:** Creating tension with video-synced music

### Video Games
- **Game Trailer Scoring:** Creating music for game trailers
- **Interactive Music:** Creating music that responds to video
- **Atmospheric Design:** Creating ambient game music
- **Energy Management:** Using music for game energy
- **Build-up Effects:** Creating tension with game music

### YouTube and Content Creation
- **Content Scoring:** Creating music for video content
- **Sync Points:** Aligning music with content timing
- **Creative Effects:** Adding unique character to content
- **Mix Enhancement:** Using music for content clarity
- **Creative Effects:** Adding unique character to videos

### Experimental and Artistic
- **Video Art:** Creating music for video art installations
- **Multimedia Projects:** Creating music for multimedia presentations
- **Experimental Integration:** Pushing boundaries of video-music integration
- **Evolution Techniques:** Using automation for change
- **Spatial Processing:** Combining with spatial effects

## 🔄 Integration with Other Plugins

### Effects Processing
Fruity Video Player works with various effects:
- **Reverb:** Adding space to video-synced sounds
- **Delay:** Creating rhythmic patterns with video timing
- **Chorus:** Adding width to video-synced sounds
- **Filtering:** Additional frequency processing
- **Compression:** Controlling dynamics of video-synced signals

### Dynamics Processing
Integration with dynamics processors:
- **Parallel Compression:** Combining with parallel compression
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
Fruity Video Player was developed as a video synchronization tool:
- Created to provide video scoring capabilities in FL Studio
- Designed for film and video post-production
- Developed with professional video work in mind
- Intended to complement other audio tools with video capabilities

### Evolution Through FL Studio Versions
- Initially introduced with basic video playback
- Enhanced with SMPTE timecode support
- Improved with better codec compatibility
- Expanded with more sophisticated video features

### Impact on Music Production
Fruity Video Player has influenced music production by:
- Providing accessible video scoring tools
- Enabling frame-accurate synchronization
- Facilitating video post-production workflows
- Supporting multimedia projects with video integration

## 🧠 Advanced Processing Techniques

### Video Synchronization Mastery
Advanced techniques for video sync:
- **Frame Accuracy:** Understanding frame-accurate timing
- **SMPTE Standards:** Managing different timecode formats
- **Timeline Integration:** Synchronizing with project timeline
- **Professional Standards:** Meeting industry requirements
- **Creative Applications:** Using sync for unique effects

### Audio Extraction Mastery
Advanced audio extraction techniques:
- **Selective Extraction:** Extracting specific audio elements
- **Quality Preservation:** Maintaining audio quality during extraction
- **Channel Management:** Handling multi-channel audio
- **Format Conversion:** Managing different audio formats
- **Creative Applications:** Using extraction for unique purposes

### Creative Applications
Advanced creative techniques:
- **Sound Design:** Creating unique video-synced textures
- **Atmospheric Processing:** Building ambient video-synced effects
- **Rhythmic Effects:** Creating rhythmic video-synced patterns
- **Spatial Manipulation:** Creating immersive video-synced environments
- **Experimental Processing:** Pushing boundaries of video-audio integration

## 📊 Performance Considerations

### CPU Usage
Managing Video Player's impact on system performance:
- **Video Decoding:** Different codecs have different CPU demands
- **Resolution Impact:** Higher resolution increases CPU usage
- **Real-Time Performance:** Generally optimized for live playback
- **Instance Count:** Multiple instances multiply resource usage
- **Optimization Strategies:** Techniques for performance

### Video Quality
Maintaining video quality during playback:
- **Codec Compatibility:** Ensuring proper codec support
- **Frame Rate Matching:** Matching video frame rate to project
- **Resolution Management:** Balancing quality with performance
- **Buffer Management:** Working with video buffer settings
- **Display Optimization:** Optimizing for different monitors

### System Integration
Optimizing Video Player within the system:
- **Graphics Acceleration:** Working with GPU acceleration
- **Threading:** Understanding video processing threads
- **Driver Compatibility:** Ensuring graphics driver compatibility
- **Latency Management:** Minimal video latency

## 🛠️ Troubleshooting Common Issues

### Video Problems
- **No Video Display:** Check codec compatibility and installation
- **Audio/Video Sync:** Verify sample rate and frame rate settings
- **Frame Drops:** Reduce resolution or use proxy files
- **Unsupported Format:** Convert to supported format
- **Performance Issues:** Use lower resolution or different codec

### Technical Issues
- **High CPU Usage:** Use proxy files or reduce resolution
- **Latency Issues:** Check buffer settings
- **Clipping:** Reduce video audio gain
- **Artifacts:** Check video file integrity
- **Compatibility:** Verify with current FL Studio version

### Creative Issues
- **Sync Problems:** Verify timeline synchronization settings
- **Audio Quality:** Check extraction and routing settings
- **Poor Integration:** Verify proper video file preparation
- **Overpowering:** Reduce video audio level or use EQ to balance
- **Lack of Control:** Use automation for dynamic changes

## 🎚️ Advanced Configuration

### Custom Video Setups
Creating and managing custom video configurations:
- **Film Scoring Setups:** Optimized for film scoring applications
- **Foley Setups:** Configured for sound effect work
- **Creative Setups:** Set up for video art applications
- **Genre-Specific:** Configured for specific video styles

### Multi-Monitor Setup
Using multiple monitors effectively:
- **Video Window:** Dedicated monitor for video display
- **Timeline View:** Separate monitor for timeline
- **Plugin Interface:** Separate monitor for plugin controls
- **Performance Optimization:** Managing multiple displays
- **Creative Applications:** Combining different monitor uses

### Integration Configurations
Optimizing for different integration scenarios:
- **Post-Production:** Optimizing for video post-production
- **Film Scoring:** Optimizing for professional scoring
- **Content Creation:** Optimizing for content workflows
- **DAW Integration:** Optimizing for FL Studio workflow

## 🌐 Community and Resources

### Online Communities
- **FL Studio Forums:** Discussions about Video Player techniques
- **Reddit Groups:** Sharing video scoring techniques and workflows
- **Discord Servers:** Real-time collaboration and feedback

### Educational Resources
- **Video Tutorials:** Demonstrations of advanced video scoring techniques
- **Written Guides:** In-depth articles on video-audio synchronization
- **Webinars:** Live demonstrations and Q&A sessions

### Sharing Platforms
- **Video Libraries:** Websites hosting video scoring resources
- **Technique Sharing:** Platforms for sharing video workflows
- **Educational Content:** Tutorials and educational materials

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Score a 30-second scene where every sound effect aligns perfectly with a specific frame
- [ ] Extract clean audio from a `.mp4` file directly into the FL mixer
- [ ] Explain the benefit of SMPTE timecode for professional collaboration
- [ ] Demonstrate a dual-monitor setup with a floating video window
- [ ] Create a frame-accurate musical cue that hits a specific visual moment
- [ ] Set up proper video proxy files for optimal performance
- [ ] Use SMPTE timecode for precise synchronization with video
- [ ] Route video audio to specific mixer tracks for processing
- [ ] Troubleshoot video playback and sync issues effectively
- [ ] Integrate Video Player into efficient video scoring workflows
- [ ] Create professional video scoring setups with proper timecode
- [ ] Optimize video settings for minimal CPU usage while maintaining quality
- [ ] Use Video Player for creative video art applications
- [ ] Set up advanced video routing for complex post-production projects
- [ ] Apply Video Player in live performance scenarios with video
- [ ] Create experimental video-music integration effects
- [ ] Combine Video Player with other effects for layered processing
- [ ] Integrate Video Player with other automation tools seamlessly
- [ ] Create custom video scoring workflows for specific creative needs
- [ ] Use Video Player effectively in large, complex video projects

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection

```

---

## FILE: 01-Learning\Concepts\performance-optimization.md

```markdown
# Performance Optimization for Fruity Video Player

## Understanding Video Playback Performance

### CPU Load Factors
1. **Video Resolution**: Higher = more processing
2. **Codec Complexity**: H.265 > H.264 > MJPEG
3. **Frame Rate**: 60fps > 30fps > 24fps
4. **File Location**: SSD > HDD > Network

### Memory Considerations
- Video playback uses **RAM buffering**
- Higher resolution = more RAM usage
- Multiple videos = multiplied RAM needs

## Optimization Strategies

### Pre-Production Setup

#### Video Preparation
1. **Convert to optimized format** before importing
   - Use H.264 MP4 for balance
   - Use MJPEG AVI for lowest CPU
   - Avoid H.265/HEVC during production

2. **Resolution guidelines**
   - **Draft work**: 480p-720p
   - **Fine-tuning**: 1080p
   - **Final review**: Native resolution

3. **Frame rate matching**
   - Match video FPS to project needs
   - Lower frame rate = less processing
   - 24-30fps sufficient for most work

#### File Storage
- **Best**: Internal SSD
- **Good**: External SSD (USB 3.0+)
- **Avoid**: HDD, network drives, slow USB

### During Production

#### Buffer Settings
- **Increase buffer length** in Audio Settings
- More buffering = smoother playback
- Trade-off: Slightly increased latency

#### Playback Quality
- **Lower quality** during intensive editing
- **Full quality** for final review/export
- Toggle as needed for workflow

#### Multi-Monitor Setup
- **Detach video** to second monitor
- Reduces main screen rendering load
- Improves overall UI responsiveness

### Project Settings

#### Audio Settings Optimization
`\`\`
Buffer Length: 512-1024 samples (video playback)
Sample Rate: 44.1kHz or 48kHz (match video)
Mixing: Async (for video sync)
`\`\`

#### CPU Management
- **Close unused plugins** during video work
- **Disable visualizers** (except video player)
- **Freeze tracks** not currently editing

## Workflow-Specific Tips

### Music Video Sync Workflow
1. Use **720p proxy** during beat arrangement
2. Switch to **1080p** for final timing adjustments
3. **Disable video** during intensive mixing
4. **Re-enable** for final review

### Film Scoring Workflow
1. Import **full-resolution video** for reference
2. Create **markers** at key scenes
3. **Disable video** during composition
4. **Enable at markers** to check sync

### Live Performance Prep
1. Test with **actual resolution** you'll use live
2. Use **same codec** as performance system
3. Monitor **CPU usage** during playback
4. Have **backup lower-resolution** version ready

### Sample Extraction
1. Use **minimum needed resolution** (audio is goal)
2. Mark **sample points** with video visible
3. **Disable video** during chopping/editing
4. **Re-enable** to verify timing

## Troubleshooting Performance Issues

### Video Stuttering
**Symptoms**: Choppy playback, dropped frames
**Solutions**:
1. Lower video resolution
2. Convert to simpler codec (MJPEG)
3. Increase buffer size
4. Close background applications
5. Move video to faster storage

### Audio/Video Desync
**Symptoms**: Audio and video drift apart
**Solutions**:
1. Use constant frame rate (CFR) video
2. Check offset parameter settings
3. Verify sample rate matches
4. Re-export video with correct settings

### High CPU Usage
**Symptoms**: System slowdown, crackling audio
**Solutions**:
1. Use lower resolution proxy
2. Switch to more efficient codec
3. Reduce frame rate
4. Close other applications
5. Freeze CPU-heavy tracks

### Crashes/Freezing
**Symptoms**: FL Studio unresponsive, crashes
**Solutions**:
1. Update video codecs (K-Lite, LAV Filters)
2. Reduce video resolution drastically
3. Check video file integrity
4. Update FL Studio to latest version
5. Increase system RAM if possible

## Hardware Recommendations

### Minimum for 1080p Playback
- **CPU**: Quad-core 2.5GHz+
- **RAM**: 8GB
- **Storage**: SATA SSD
- **GPU**: Integrated graphics okay

### Recommended for Smooth Workflow
- **CPU**: 6-8 core 3.0GHz+
- **RAM**: 16GB+
- **Storage**: NVMe SSD
- **GPU**: Dedicated GPU (helps some codecs)

### Optimal for 4K/Multiple Videos
- **CPU**: 8+ core 3.5GHz+
- **RAM**: 32GB+
- **Storage**: High-speed NVMe SSD
- **GPU**: Modern dedicated GPU with hardware decoding

## Best Practices Summary

1. **Pre-convert** videos to optimized formats
2. **Use proxies** during heavy production work
3. **Store videos** on fast SSD storage
4. **Increase buffer** size if needed
5. **Toggle video** on/off as workflow requires
6. **Monitor CPU** usage and adjust accordingly
7. **Update codecs** regularly
8. **Test performance** before important sessions

```

---

## FILE: 01-Learning\Concepts\video-sync-fundamentals.md

```markdown
# Video Sync Fundamentals

## Understanding Video Synchronization in FL Studio

### Frame Rate vs. Tempo
- **Frame Rate**: Video playback speed (24, 30, 60 fps)
- **Tempo**: Musical timing (BPM)
- **Sync**: Aligning video frames with musical beats

### Why Sync Matters
1. **Music Videos**: Beats hit on visual edits
2. **Film Scoring**: Music matches scene changes
3. **Live Performance**: Visuals sync with drops/transitions
4. **Sampling**: Extract audio aligned to video

## Core Sync Concepts

### Time Base Alignment
`\`\`
Video Timeline (seconds) → FL Studio Timeline (bars/beats)
00:00 → Bar 1
00:02 → Bar 2 (at 120 BPM)
00:04 → Bar 3 (at 120 BPM)
`\`\`

### Frame-Accurate Editing
- **Video frame**: Single image in video (1/30th second at 30fps)
- **FL Studio step**: Single grid position in pattern
- **Alignment**: Match important video frames to musical grid

### Offset Correction
- **Pre-roll**: Video starts before beat 1
- **Offset parameter**: Shift video timing forward/backward
- **Fine-tuning**: Adjust by frames or milliseconds

## Hip-Hop Video Sync Applications

### Music Video Production
1. **Import rough cut** of music video
2. **Mark video edits** with playlist markers
3. **Align beats** to visual cuts
4. **Adjust timing** for perfect sync
5. **Export final** audio mix

### Sample-Based Production
1. **Load video** with source material
2. **Mark sample points** using video reference
3. **Extract audio** at precise timings
4. **Chop samples** matching visual cues

### Performance Preparation
1. **Create backing track** with video reference
2. **Sync visuals** to drops and transitions
3. **Test timing** with live playback
4. **Adjust for** display lag/latency

## Common Sync Challenges

### Audio/Video Drift
- **Cause**: Different clock rates
- **Solution**: Use constant frame rate video
- **Prevention**: Pre-process video files

### Latency Issues
- **Cause**: Video decoding delay
- **Solution**: Lower resolution or simpler codec
- **Workaround**: Offset parameter adjustment

### Performance Drops
- **Cause**: High-resolution video, complex codec
- **Solution**: Use proxy video during production
- **Final render**: Swap to high-quality video

## Best Practices

1. **Use constant frame rate** (CFR) video files
2. **Match project tempo** to video if possible
3. **Add markers** at key video moments
4. **Test sync** throughout the project
5. **Keep video files** on fast storage (SSD)

## Advanced Techniques

### Beat-Matched Video Editing
- Edit video to musical grid in advance
- Import pre-synced video
- Make minor timing adjustments in FL Studio

### Multi-Camera Sync
- Load different camera angles
- Sync all to same master timeline
- Switch between angles for different sections

### Visual Automation
- Automate mixer/effect parameters based on video
- Create reactive visuals synced to audio
- Use video as creative reference for production

```

---

## FILE: 01-Learning\Quick-Reference\parameter-cheat-sheet.md

```markdown
# Fruity Video Player - Parameter Cheat Sheet

## Core Controls

### File Operations
- **Open File:** Load video files for playback
  - Supports: .avi, .mov, .mp4, .mkv, .wmv, .mpg, .flv
  - FFmpeg decoder for broad compatibility
  - Pro tip: Use H.264 or ProRes for best performance

- **Reload:** Refresh video file if changed externally
  - Useful for proxy workflow updates
  - Pro tip: Use when switching between proxy and full-res

### Playback Controls
- **Slave to Host:** Enable/disable timeline synchronization
  - ON: Video follows FL Studio playhead (default)
  - OFF: Video plays independently
  - Pro tip: Keep enabled for scoring work

- **Pre-roll:** Set frames to play before timeline start
  - Range: 0-1000 frames
  - Use for: Context before cue point
  - Pro tip: Set to 24-48 frames for smooth starts

### Time Display
- **SMPTE Mode:** Shows HH:MM:SS:FF format
  - Industry standard for professional work
  - Frame-accurate positioning
  - Pro tip: Essential for collaboration with editors

- **Time Mode:** Shows seconds.milliseconds
  - Easier for music-based timing
  - Pro tip: Use for beat-based alignment

### Audio Controls
- **Volume:** Internal video audio level (0-100%)
  - 0%: Mute video audio
  - 100%: Unity gain
  - Pro tip: Set to 50-70% for reference mixing

- **Audio Output:** Route video audio to mixer track
  - Select any mixer insert
  - Pro tip: Route to dedicated track for processing

### Display Controls
- **Aspect Ratio:**
  - Keep Original: Maintains proper aspect ratio (recommended)
  - Stretch to Window: Fills window, may distort
  - Letterbox: Adds black bars to maintain aspect
  - Pro tip: Always use "Keep Original" for professional work

- **Detach Window:** Float video on second monitor
  - Pro tip: Essential for dual-monitor workflows

- **Always on Top:** Keep video above other windows
  - Pro tip: Use when working with multiple applications

## Quick Reference Table

| Parameter | Range | Default | Hip-Hop Use |
|-----------|-------|---------|-------------|
| File Format | Various | N/A | MP4 (H.264) for music videos |
| Slave Mode | On/Off | On | Keep enabled for sync |
| Pre-roll | 0-1000 frames | 0 | 24-48 frames for smooth starts |
| Volume | 0-100% | 100% | 60-70% for reference |
| Audio Output | Mixer tracks | None | Dedicated track for video audio |
| Aspect Ratio | 3 modes | Keep Original | Always keep original |
| SMPTE/Time | 2 modes | SMPTE | SMPTE for pro work |

## Frame Rate Standards

| Frame Rate | Use Case | Genre Application |
|------------|----------|-------------------|
| 23.976 fps | Cinema films | Film scoring |
| 24 fps | Cinema/digital | Music videos (cinematic) |
| 25 fps | PAL video | European broadcasts |
| 29.97 fps | NTSC video | US broadcasts/YouTube |
| 30 fps | Digital video | Music videos (standard) |
| 60 fps | High frame rate | High-quality music videos |

## Keyboard Shortcuts

- **Space:** Play/pause video (when plugin focused)
- **Home:** Jump to video start
- **End:** Jump to video end
- **Detach:** Ctrl+D (custom)
- **Reload:** Ctrl+R (custom)

## Workflow Quick Tips

### Music Video Scoring
1. Load music video file
2. Enable Slave Mode
3. Set SMPTE display
4. Mark hit points in timeline
5. Route audio to reference track

### Sample Extraction
1. Load video with audio
2. Route audio to Edison track
3. Set volume to 100%
4. Record region to Edison
5. Process extracted audio

### Film Scoring
1. Load scene/film file
2. Enable SMPTE display
3. Set pre-roll to 48 frames
4. Mark cue points with markers
5. Score to exact frame numbers

### Foley Work
1. Load video scene
2. Enable frame display
3. Loop specific section
4. Create sounds in exact sync
5. Use markers for hits

## Pro Tips by Genre

### Trap/Hip-Hop Videos
- Mark 808 hits to visual impacts
- Sync hi-hat rolls to camera movements
- Align drops to scene changes
- Use video audio for ambient texture

### Melodic Rap Videos
- Sync melody to lip movements
- Align chord changes to scene transitions
- Use video pacing for musical structure
- Extract dialogue for creative sampling

### Music Video Production
- Use SMPTE for precise edits
- Mark chorus sections clearly
- Sync effects to visual effects
- Extract reference audio for timing

### Content Creation
- Align beats to visual cuts
- Use video audio for context
- Mark important moments with markers
- Sync music to on-screen action

## Common Issues & Solutions

| Issue | Cause | Solution |
|-------|-------|----------|
| Video not playing | Codec unsupported | Convert to H.264 MP4 |
| Audio out of sync | Wrong sample rate | Match project sample rate |
| Choppy playback | High resolution | Use proxy files |
| No audio | Not routed | Set Audio Output track |
| Wrong frame rate | Mismatch | Verify video frame rate |
| Video stutters | High CPU | Lower resolution or codec |

## Essential Codec Info

### Best Performance
- **H.264 MP4:** Best compatibility
- **ProRes:** Best quality (Mac)
- **DNxHD:** Best quality (Windows)

### Avoid
- **H.265/HEVC:** High CPU usage
- **VP9:** Compatibility issues
- **Uncompressed:** Massive file sizes

## SMPTE Format Guide

**Format:** HH:MM:SS:FF
- **HH:** Hours (00-23)
- **MM:** Minutes (00-59)
- **SS:** Seconds (00-59)
- **FF:** Frames (00-29 for 30fps)

**Example:** 01:23:45:12 = 1 hour, 23 minutes, 45 seconds, 12 frames

**Frame Math:**
- At 30 fps: 1 second = 30 frames
- At 24 fps: 1 second = 24 frames
- Pro tip: Use frame count for precise timing calculations

```

---

## FILE: 01-Learning\Quick-Reference\quick-start.md

```markdown
# Fruity Video Player - Quick Start Guide

## 5-Minute Setup

### 1. Load the Plugin
1. Open **Mixer** (F9)
2. Select empty mixer track
3. Click **slot** in effects chain
4. Navigate to **Fruity Video Player**

### 2. Load Video File
1. Click **folder icon** in plugin
2. Browse to **video file**
3. Select and **open**
4. Video appears in plugin window

### 3. Basic Playback
- Press **Play** in FL Studio (Space)
- Video syncs automatically
- Press **Stop** to halt playback

### 4. Position Video Window
- **Right-click** video window
- Select **Detach** for separate window
- **Resize** as needed
- Check **Always on Top** if desired

### 5. Adjust Sync (if needed)
- Use **Offset** parameter to shift timing
- Positive = video plays later
- Negative = video plays earlier

## Common Tasks

### Sync Video to Beat
1. Load video file
2. Play and observe sync
3. Adjust **Offset** parameter
4. Fine-tune until aligned

### Extract Audio Reference
1. Load video
2. Note timing/moments to sample
3. Use FL Studio's recording or import video audio separately
4. Mark positions with **playlist markers**

### Multi-Monitor Display
1. **Detach** video window
2. Drag to **second monitor**
3. Check **Always on Top**
4. Maximize or resize as needed

### Performance Mode
- Use **lower resolution** during editing
- Switch to **full quality** for final review
- Toggle video **on/off** as needed

## Quick Tips

- **Supported formats**: MP4, AVI, WMV, MOV
- **Best format**: MP4 (H.264) for balance
- **Storage**: Use SSD for best performance
- **Sync tool**: Use playlist markers for key moments
- **Workflow**: Disable video during heavy CPU tasks

## Next Steps

- Explore **video formats** reference
- Learn **performance optimization**
- Read **video sync fundamentals**
- Check **hip-hop workflows** for genre-specific tips

```

---

## FILE: 02-Data\parameters\video-player-specs.json

```json
{
  "pluginName": "Fruity Video Player",
  "category": "Utility",
  "subCategory": "Video",
  "version": "Latest",
  "type": "Video Playback Engine",
  
  "videoEngine": {
    "decoder": "FFmpeg",
    "maxResolution": "4K and above",
    "hardwareAcceleration": "Supported (GPU-dependent)",
    "colorDepth": "8-bit, 10-bit (format-dependent)"
  },
  
  "supportedFormats": {
    "containers": [
      ".avi",
      ".mov",
      ".mp4",
      ".mkv",
      ".wmv",
      ".mpg",
      ".mpeg",
      ".flv",
      ".webm",
      ".m4v"
    ],
    "videoCodecs": [
      "H.264/AVC",
      "H.265/HEVC",
      "ProRes",
      "DNxHD",
      "VP8",
      "VP9",
      "MPEG-2",
      "MPEG-4"
    ],
    "audioCodecs": [
      "AAC",
      "MP3",
      "PCM",
      "AC3",
      "DTS",
      "Opus",
      "Vorbis"
    ]
  },
  
  "frameRates": {
    "supported": [
      23.976,
      24,
      25,
      29.97,
      30,
      50,
      59.94,
      60
    ],
    "recommended": {
      "cinema": 24,
      "broadcast": 29.97,
      "web": 30,
      "highQuality": 60
    }
  },
  
  "features": {
    "timelineSync": {
      "enabled": true,
      "slavMode": true,
      "description": "Synchronizes video playback with FL Studio timeline"
    },
    "smpteTimecode": {
      "enabled": true,
      "format": "HH:MM:SS:FF",
      "description": "Industry-standard timecode display"
    },
    "audioExtraction": {
      "enabled": true,
      "routing": "Mixer tracks",
      "description": "Route video audio to any mixer insert"
    },
    "detachableWindow": {
      "enabled": true,
      "multiMonitor": true,
      "description": "Float video window on second monitor"
    },
    "preRoll": {
      "enabled": true,
      "range": [0, 1000],
      "unit": "frames",
      "description": "Frames to play before timeline start"
    },
    "aspectRatio": {
      "modes": [
        "Keep Original",
        "Stretch to Window",
        "Letterbox"
      ],
      "default": "Keep Original"
    }
  },
  
  "controls": {
    "fileOperations": {
      "open": "Load video file",
      "reload": "Refresh current video",
      "close": "Unload video"
    },
    "playbackControls": {
      "slaveMode": {
        "type": "toggle",
        "default": true,
        "description": "Enable timeline synchronization"
      },
      "preRoll": {
        "type": "numeric",
        "range": [0, 1000],
        "unit": "frames",
        "default": 0
      }
    },
    "audioControls": {
      "volume": {
        "type": "percentage",
        "range": [0, 100],
        "unit": "%",
        "default": 100
      },
      "output": {
        "type": "selector",
        "options": "Mixer tracks",
        "default": "None"
      }
    },
    "displayControls": {
      "timeDisplay": {
        "type": "toggle",
        "modes": ["SMPTE", "Time"],
        "default": "SMPTE"
      },
      "aspectRatio": {
        "type": "selector",
        "options": ["Keep Original", "Stretch", "Letterbox"],
        "default": "Keep Original"
      },
      "detachWindow": {
        "type": "button",
        "action": "Float window"
      },
      "alwaysOnTop": {
        "type": "toggle",
        "default": false
      }
    }
  },
  
  "performance": {
    "cpuUsage": {
      "h264_1080p": "Low-Medium",
      "h264_4k": "Medium",
      "h265_1080p": "Medium-High",
      "h265_4k": "High",
      "prores_1080p": "Medium",
      "prores_4k": "Medium-High"
    },
    "optimization": {
      "proxyFiles": "Recommended for 4K",
      "codec": "H.264 for best balance",
      "resolution": "1080p for editing, 4K for final"
    }
  },
  
  "workflows": {
    "filmScoring": {
      "description": "Score music to video frames",
      "keyFeatures": ["SMPTE", "Frame accuracy", "Markers"]
    },
    "foleyWork": {
      "description": "Sync sound effects to video",
      "keyFeatures": ["Frame display", "Looping", "Precise timing"]
    },
    "musicVideos": {
      "description": "Score music for video content",
      "keyFeatures": ["Beat sync", "Scene markers", "Audio extraction"]
    },
    "audioExtraction": {
      "description": "Extract audio from video",
      "keyFeatures": ["Audio routing", "Quality preservation", "Edison integration"]
    }
  },
  
  "integration": {
    "edison": "Record extracted audio",
    "mixer": "Route video audio to tracks",
    "timeline": "Sync with project timeline",
    "markers": "Mark important video moments"
  },
  
  "hipHopApplications": {
    "musicVideos": {
      "description": "Score hip-hop music videos",
      "techniques": [
        "Sync 808s to visual impacts",
        "Align hi-hats to camera movements",
        "Match drops to scene changes",
        "Extract dialogue for samples"
      ]
    },
    "sampling": {
      "description": "Extract audio from video for samples",
      "techniques": [
        "Record video audio to Edison",
        "Extract dialogue snippets",
        "Sample ambient sounds",
        "Create unique textures"
      ]
    },
    "livePerformance": {
      "description": "Video playback for live shows",
      "techniques": [
        "Sync video to live performance",
        "Visual cues for transitions",
        "Stage visuals sync",
        "Multi-screen setups"
      ]
    }
  },
  
  "troubleshooting": {
    "videoNotPlaying": "Check codec compatibility, install FFmpeg codecs",
    "audioOutOfSync": "Match project sample rate to video",
    "choppyPlayback": "Use proxy files or lower resolution",
    "noAudio": "Set Audio Output to mixer track",
    "highCpu": "Use H.264 codec or lower resolution"
  },
  
  "proTips": [
    "Use H.264 MP4 for best compatibility",
    "Enable SMPTE for professional work",
    "Route audio to dedicated mixer track",
    "Use proxy files for 4K editing",
    "Detach window for dual-monitor setup",
    "Mark hit points with timeline markers",
    "Set pre-roll to 24-48 frames for context",
    "Keep aspect ratio on 'Keep Original'",
    "Use frame numbers for precise sync",
    "Export audio separately from video editor"
  ]
}

```

---

## FILE: 02-Data\presets\video-scoring-setups.json

```json
{
  "presetCategory": "Video Scoring Setups",
  "version": "1.0",
  "description": "Optimized configurations for different video scoring scenarios",
  
  "presets": [
    {
      "name": "Hip-Hop Music Video",
      "category": "Music Videos",
      "description": "Optimized for scoring hip-hop music videos with beat sync",
      "settings": {
        "slaveMode": true,
        "timeDisplay": "SMPTE",
        "preRoll": 48,
        "volume": 65,
        "audioOutput": "Track 1 (Reference)",
        "aspectRatio": "Keep Original",
        "detachWindow": false
      },
      "workflow": "Load music video, mark chorus/verse transitions, sync beat drops to visual cuts",
      "useCase": "Trap, drill, melodic rap videos",
      "hipHopGenres": ["Trap", "Drill", "Melodic Rap", "Cloud Rap"],
      "keyTechniques": [
        "Sync 808 hits to visual impacts",
        "Align hi-hat rolls to camera movements",
        "Match beat drops to scene changes",
        "Use video audio for ambient texture"
      ]
    },
    
    {
      "name": "Short Film Scoring",
      "category": "Film Scoring",
      "description": "Professional film scoring with frame-accurate timing",
      "settings": {
        "slaveMode": true,
        "timeDisplay": "SMPTE",
        "preRoll": 96,
        "volume": 50,
        "audioOutput": "Track 2 (Reference)",
        "aspectRatio": "Keep Original",
        "detachWindow": true
      },
      "workflow": "Load film, identify cue points, mark emotional beats, score to exact frames",
      "useCase": "Independent films, short films, documentaries",
      "keyTechniques": [
        "Mark hit points with SMPTE timecode",
        "Use pre-roll for musical context",
        "Detach window for dual-monitor work",
        "Create cue sheets with exact timecodes"
      ]
    },
    
    {
      "name": "Foley Sound Design",
      "category": "Sound Design",
      "description": "Frame-accurate foley work and sound effects",
      "settings": {
        "slaveMode": true,
        "timeDisplay": "SMPTE",
        "preRoll": 24,
        "volume": 0,
        "audioOutput": "None",
        "aspectRatio": "Keep Original",
        "detachWindow": false
      },
      "workflow": "Loop specific sections, create sounds in exact sync with visual actions",
      "useCase": "Footsteps, door sounds, object interactions",
      "keyTechniques": [
        "Use frame numbers for exact timing",
        "Loop short sections for repetitive sounds",
        "Mute video audio to focus on created sounds",
        "Use markers for multiple hit points"
      ]
    },
    
    {
      "name": "Audio Extraction",
      "category": "Sampling",
      "description": "Extract high-quality audio from video files",
      "settings": {
        "slaveMode": true,
        "timeDisplay": "Time",
        "preRoll": 0,
        "volume": 100,
        "audioOutput": "Track 3 (Edison)",
        "aspectRatio": "Keep Original",
        "detachWindow": false
      },
      "workflow": "Route to Edison, record specific sections, process extracted audio",
      "useCase": "Dialogue sampling, ambient extraction, creative sampling",
      "hipHopGenres": ["Sample-based Hip-Hop", "Boom Bap", "Lo-Fi"],
      "keyTechniques": [
        "Route to Edison for recording",
        "Set volume to 100% for clean extraction",
        "Mark regions for specific samples",
        "Process extracted audio for creative use"
      ]
    },
    
    {
      "name": "YouTube Content Scoring",
      "category": "Content Creation",
      "description": "Fast workflow for YouTube and content creation",
      "settings": {
        "slaveMode": true,
        "timeDisplay": "Time",
        "preRoll": 24,
        "volume": 60,
        "audioOutput": "Track 1 (Reference)",
        "aspectRatio": "Keep Original",
        "detachWindow": false
      },
      "workflow": "Quick video loading, mark key moments, score background music",
      "useCase": "Vlogs, tutorials, montages, intros/outros",
      "keyTechniques": [
        "Use time display for beat-based timing",
        "Mark key transitions with markers",
        "Keep reference audio at moderate level",
        "Quick turnaround workflow"
      ]
    },
    
    {
      "name": "Live Performance Video",
      "category": "Live Performance",
      "description": "Sync video for live hip-hop performances",
      "settings": {
        "slaveMode": true,
        "timeDisplay": "Time",
        "preRoll": 120,
        "volume": 0,
        "audioOutput": "None",
        "aspectRatio": "Stretch to Window",
        "detachWindow": true
      },
      "workflow": "Detach to projection screen, sync performance audio to video visuals",
      "useCase": "Stage performances, live shows, festivals",
      "hipHopGenres": ["All Hip-Hop Subgenres"],
      "keyTechniques": [
        "Detach window for projection",
        "Large pre-roll for stage cues",
        "Mute video audio for live sound",
        "Stretch to fill stage screens"
      ]
    },
    
    {
      "name": "Trap Beat Video Sync",
      "category": "Music Videos",
      "description": "Optimized for trap beat music videos with heavy 808s",
      "settings": {
        "slaveMode": true,
        "timeDisplay": "SMPTE",
        "preRoll": 48,
        "volume": 70,
        "audioOutput": "Track 1 (Reference)",
        "aspectRatio": "Keep Original",
        "detachWindow": false
      },
      "workflow": "Mark 808 hit points, sync hi-hat rolls to visual effects, align drops to cuts",
      "useCase": "Modern trap, drill, rage beats",
      "hipHopGenres": ["Trap", "Drill", "Rage"],
      "keyTechniques": [
        "Sync 808 slides to slow-motion effects",
        "Align hi-hat rolls to rapid cuts",
        "Match snare hits to visual impacts",
        "Use video effects timing for creative elements"
      ]
    },
    
    {
      "name": "Boom Bap Sample Extraction",
      "category": "Sampling",
      "description": "Extract vintage samples from old videos and films",
      "settings": {
        "slaveMode": false,
        "timeDisplay": "Time",
        "preRoll": 0,
        "volume": 100,
        "audioOutput": "Track 4 (Sampling)",
        "aspectRatio": "Keep Original",
        "detachWindow": false
      },
      "workflow": "Find interesting audio moments, extract to Edison, chop and process",
      "useCase": "Old movies, documentaries, vintage footage",
      "hipHopGenres": ["Boom Bap", "Lo-Fi Hip-Hop", "Sample-based"],
      "keyTechniques": [
        "Disable slave mode for manual scrubbing",
        "Extract dialogue and ambient sounds",
        "Route to dedicated sampling track",
        "Use for authentic vintage textures"
      ]
    },
    
    {
      "name": "Melodic Rap Video",
      "category": "Music Videos",
      "description": "Score melodic rap videos with emotional timing",
      "settings": {
        "slaveMode": true,
        "timeDisplay": "SMPTE",
        "preRoll": 72,
        "volume": 60,
        "audioOutput": "Track 1 (Reference)",
        "aspectRatio": "Keep Original",
        "detachWindow": false
      },
      "workflow": "Sync melodies to lip movements, align chord changes to scene transitions",
      "useCase": "Melodic rap, emo rap, alternative hip-hop",
      "hipHopGenres": ["Melodic Rap", "Emo Rap", "Alternative Hip-Hop"],
      "keyTechniques": [
        "Match vocal melodies to visual pacing",
        "Sync chord progressions to emotional beats",
        "Use longer pre-roll for melodic context",
        "Align instrument changes to scene changes"
      ]
    },
    
    {
      "name": "Multi-Camera Edit Sync",
      "category": "Advanced",
      "description": "Sync music to multi-camera music video edits",
      "settings": {
        "slaveMode": true,
        "timeDisplay": "SMPTE",
        "preRoll": 96,
        "volume": 50,
        "audioOutput": "Track 1 (Reference)",
        "aspectRatio": "Keep Original",
        "detachWindow": true
      },
      "workflow": "Mark camera angle changes, sync music to edit rhythm, align to visual flow",
      "useCase": "Professional music videos with multiple cameras",
      "hipHopGenres": ["All Professional Productions"],
      "keyTechniques": [
        "Use SMPTE for precise edit timing",
        "Mark each camera cut with timeline marker",
        "Detach for better editing view",
        "Sync musical elements to edit rhythm"
      ]
    }
  ],
  
  "workflowTemplates": {
    "musicVideoScoring": {
      "steps": [
        "1. Load music video file (H.264 MP4 recommended)",
        "2. Enable Slave Mode and SMPTE display",
        "3. Set pre-roll to 48 frames for context",
        "4. Route audio to reference track at 60-70% volume",
        "5. Watch through and mark key moments with timeline markers",
        "6. Identify beat drop points and scene changes",
        "7. Score music to align with visual rhythm",
        "8. Fine-tune timing using frame numbers",
        "9. Export audio for video editing"
      ]
    },
    "audioExtraction": {
      "steps": [
        "1. Load video with desired audio content",
        "2. Route Audio Output to track with Edison inserted",
        "3. Set volume to 100% for clean extraction",
        "4. Mark region to extract with timeline markers",
        "5. Record to Edison during playback",
        "6. Save extracted audio from Edison",
        "7. Process extracted audio as needed"
      ]
    },
    "filmScoring": {
      "steps": [
        "1. Load film/scene file",
        "2. Enable SMPTE display for frame accuracy",
        "3. Set pre-roll to 96 frames for musical context",
        "4. Detach window to second monitor if available",
        "5. Watch through and identify cue points",
        "6. Mark hit points with SMPTE timecodes",
        "7. Create cue sheet with exact timecodes",
        "8. Score to exact frame numbers",
        "9. Export with timecode reference"
      ]
    }
  },
  
  "genreSpecificTips": {
    "trap": {
      "focus": "Heavy bass and hi-hat sync",
      "videoElements": "Visual impacts, slow motion, rapid cuts",
      "syncPoints": "808 hits, hi-hat rolls, snare hits, beat drops",
      "recommendedSettings": "SMPTE display, 48-frame pre-roll, 65% reference volume"
    },
    "melodicRap": {
      "focus": "Vocal melody and emotional timing",
      "videoElements": "Lip sync, emotional scenes, transitions",
      "syncPoints": "Melody changes, chord progressions, vocal runs",
      "recommendedSettings": "SMPTE display, 72-frame pre-roll, 60% reference volume"
    },
    "boomBap": {
      "focus": "Sample-based production and vintage aesthetic",
      "videoElements": "Old footage, film grain, vintage clips",
      "syncPoints": "Drum breaks, sample chops, scratch patterns",
      "recommendedSettings": "Time display for manual scrubbing, 100% volume for extraction"
    },
    "drill": {
      "focus": "Dark atmosphere and sliding 808s",
      "videoElements": "Urban environments, night scenes, dramatic cuts",
      "syncPoints": "808 slides, hi-hat patterns, aggressive cuts",
      "recommendedSettings": "SMPTE display, 48-frame pre-roll, 70% reference volume"
    },
    "loFiHipHop": {
      "focus": "Chill atmosphere and ambient textures",
      "videoElements": "Animated loops, chill visuals, ambient scenes",
      "syncPoints": "Loop points, atmospheric changes, vinyl crackle",
      "recommendedSettings": "Time display, minimal pre-roll, focus on texture extraction"
    }
  }
}

```

---

## FILE: 02-Data\rules\video-audio-sync-rules.md

```markdown
# Video Audio Sync Best Practices

## Core Principles

1. **Always Enable Slave Mode:** Video must follow FL Studio timeline
2. **Use SMPTE for Professional Work:** Frame-accurate timing is essential
3. **Set Appropriate Pre-roll:** Give musical context before cue points
4. **Match Sample Rates:** FL Studio project must match video audio
5. **Document Everything:** Create sync notes for collaboration

## Sample Rate Matching

### Why It Matters
Mismatched sample rates cause audio/video sync drift over time.

### Standard Video Sample Rates
- **48 kHz:** Professional video standard (most common)
- **44.1 kHz:** Music/CD standard (less common in video)
- **96 kHz:** High-resolution video (rare)

### Workflow
1. Check video audio sample rate (MediaInfo or video editor)
2. Set FL Studio project to match
3. Verify before starting any work
4. Never change mid-project

## Frame Rate Standards

### Common Frame Rates
- **23.976 fps:** Cinema standard (film look)
- **24 fps:** Digital cinema
- **25 fps:** PAL video (Europe, Australia)
- **29.97 fps:** NTSC video (USA, Japan)
- **30 fps:** Digital video standard
- **60 fps:** High frame rate video

### Critical for Sync
Frame rate determines how SMPTE timecode is calculated. Mismatched frame rates cause sync errors.

## Timeline Sync Rules

### Slave Mode Settings
- **ON:** Video follows FL Studio playhead (required for scoring)
- **OFF:** Video plays independently (only for manual preview)

### Pre-roll Configuration
- **0 frames:** No context, immediate start
- **24 frames:** One second at 24fps
- **48 frames:** Two seconds at 24fps (recommended)
- **96 frames:** Four seconds at 24fps (for complex cues)

### When to Adjust Pre-roll
- **Short:** Sound effects, impacts (0-24 frames)
- **Medium:** Musical cues, transitions (48-72 frames)
- **Long:** Complex musical passages (96+ frames)

## SMPTE Workflow

### Reading SMPTE Format
**HH:MM:SS:FF** = Hours:Minutes:Seconds:Frames

Example: `01:23:45:12`
- 1 hour
- 23 minutes  
- 45 seconds
- 12 frames into the next second

### Using SMPTE for Sync Points
1. Identify visual moment needing sync
2. Note exact SMPTE timecode
3. Convert to FL Studio timeline position if needed
4. Place audio at exact frame
5. Verify frame-by-frame

### Frame Math Examples

**At 30 fps:**
- 1 second = 30 frames
- 0.5 seconds = 15 frames
- 0.1 seconds = 3 frames

**At 24 fps:**
- 1 second = 24 frames
- 0.5 seconds = 12 frames
- 0.1 seconds = 2.4 frames (round to 2)

## Audio Routing Guidelines

### Video Audio Reference
- **Purpose:** Hear original audio while scoring
- **Volume:** 50-70% (lower than working tracks)
- **Routing:** Dedicated reference track
- **Mute:** During final mix, unmute for sync verification

### When to Mute Video Audio
- During composition (use for reference only)
- During final mixing (focus on your audio)
- Live performance (use only your audio)
- Foley work (hear only your created sounds)

### When to Keep Video Audio
- Initial scoring and sync
- Dialogue sync verification
- ADR timing reference
- Audio extraction workflows

## Export Guidelines

### Audio Export Settings
**For Video Editors:**
- Format: WAV 24-bit
- Sample Rate: Match video (usually 48kHz)
- Start Time: 00:00:00:00 (same as video start)
- Length: Exact video duration
- Channels: Stereo or as required

### Naming Convention
`\`\`
ProjectName_AudioMix_Version_Date.wav

Examples:
MusicVideo_FinalMix_v3_20260204.wav
ShortFilm_Score_v1_20260204.wav
Commercial_Audio_Final_20260204.wav
`\`\`

### Include Sync Documentation
Create a text file with sync information:
`\`\`
Project: Music Video Title
Video Duration: 00:03:42:00
Frame Rate: 30 fps
Sample Rate: 48 kHz
BPM: 140

Critical Sync Points:
00:00:15:12 - Intro 808 hit
00:00:31:24 - First beat drop
00:01:02:08 - Chorus start
00:02:15:16 - Final drop
00:03:38:00 - Outro fade start
`\`\`

## Collaboration Best Practices

### Working with Video Editors

**Provide:**
- Audio file at correct sample rate
- Sync point documentation
- BPM and timing information
- Version notes and changes
- FL Studio project file (backup)

**Request:**
- Video at edit-ready resolution (1080p or proxy)
- Exact frame rate specification
- Audio sample rate confirmation
- Reference audio track if available
- Timecode or frame number for sync points

### Multi-Person Workflow

**For Team Projects:**
1. Establish sample rate and frame rate standard
2. Use consistent SMPTE format
3. Share timecode reference document
4. Version all files clearly
5. Document every change

## Common Sync Issues

### Audio Drifts Over Time
**Cause:** Sample rate mismatch
**Solution:** Match FL Studio to video sample rate exactly

### Video Doesn't Follow Timeline
**Cause:** Slave Mode disabled
**Solution:** Enable Slave Mode in Fruity Video Player

### Frame Numbers Don't Match
**Cause:** Frame rate mismatch or different SMPTE standard
**Solution:** Verify matching frame rates, use same timecode standard

### Choppy Video Playback
**Cause:** High CPU usage from video decoding
**Solution:** Use proxy files, increase buffer size, close other apps

## Quality Assurance Checklist

### Before Starting Project
- [ ] Verify video frame rate
- [ ] Check video audio sample rate
- [ ] Set FL Studio sample rate to match
- [ ] Load video in Fruity Video Player
- [ ] Enable Slave Mode
- [ ] Set SMPTE display
- [ ] Configure appropriate pre-roll
- [ ] Route video audio to reference track
- [ ] Test playback sync

### During Project
- [ ] Mark all critical sync points with markers
- [ ] Document timecodes for key moments
- [ ] Test sync at different playback speeds
- [ ] Verify no latency compensation issues
- [ ] Check sync periodically throughout video
- [ ] Save project versions regularly

### Before Export
- [ ] Play through entire video at normal speed
- [ ] Check all critical sync points frame-by-frame
- [ ] Verify no audio clipping
- [ ] Confirm proper mix balance
- [ ] Test at 0.5x speed (slow motion)
- [ ] Test at 2x speed (fast forward)
- [ ] Mute video audio and verify your mix
- [ ] Create sync documentation
- [ ] Export at correct settings

## Advanced Sync Techniques

### Latency Compensation
FL Studio plugins add latency. For critical sync:
1. Note plugin latency in mixer
2. Shift audio earlier by latency amount
3. Or disable plugin latency compensation temporarily
4. Verify sync after compensation

### Multi-Video Sync
For projects with multiple video sources:
1. Use multiple Fruity Video Player instances
2. Ensure all use same SMPTE reference
3. Sync all to same timeline position
4. Document each video source separately

### Live Performance Sync
For stage projection and live shows:
1. Test sync extensively before show
2. Use detached window for projection
3. Have backup timing markers
4. Account for audio interface latency
5. Rehearse with full setup

```

---

## FILE: 03-Workflows\by-goal\extracting-audio-from-video.md

```markdown
# Extracting Audio from Video - Complete Guide

## Overview

Fruity Video Player allows you to extract high-quality audio from video files for sampling, reference, or creative purposes. This is essential for hip-hop producers working with video content, dialogue sampling, and creative audio extraction.

## Why Extract Audio from Video?

### Hip-Hop Applications
- **Dialogue Sampling:** Extract movie dialogue for creative samples
- **Ambient Textures:** Capture ambient sounds from video content
- **Reference Audio:** Use video audio as production reference
- **Vintage Sounds:** Sample old film and TV audio
- **Creative Sampling:** Find unique sounds in unexpected video sources

### Professional Applications
- **ADR Reference:** Extract dialogue for replacement work
- **Foley Reference:** Capture original sounds for matching
- **Music Reference:** Extract music from video for analysis
- **Audio Analysis:** Study original audio for mixing decisions

## Essential Setup

### 1. Prepare Video File
**Before Loading:**
- Verify video has audio track
- Check audio codec compatibility (AAC, MP3, PCM supported)
- Note sample rate of video audio (usually 48kHz)
- Ensure video quality is good enough for your needs

### 2. Configure Fruity Video Player
**Optimal Settings for Extraction:**
- Slave Mode: ON (for timeline control)
- Time Display: Time mode (easier for audio work)
- Pre-roll: 0 frames (start exactly at beginning)
- Volume: 100% (maximum quality)
- Audio Output: Dedicated mixer track

### 3. Set Up FL Studio Project
**Project Configuration:**
- Sample Rate: Match video audio (usually 48kHz)
- Buffer Size: 512 or higher for stability
- Create dedicated audio extraction track
- Insert Edison on extraction track

## Basic Extraction Workflow

### Method 1: Direct Recording to Edison (Recommended)

**Step-by-Step:**
1. Load video in Fruity Video Player
2. Set Audio Output to empty mixer track
3. Insert Edison on that mixer track
4. Set video player Volume to 100%
5. Enable record in Edison
6. Play timeline to record section
7. Stop and save from Edison

**Edison Recording Setup:**
- Source: Mixer track (not Input)
- Mode: "On input" or "Auto"
- Quality: Maximum (24-bit recommended)
- Format: WAV for uncompressed

**Example Timeline:**
`\`\`
00:00 - Load video file
00:15 - Set up routing to Edison track
00:30 - Mark region to extract (e.g., 01:23 - 02:45)
00:45 - Enable Edison recording
01:00 - Play marked region
02:00 - Stop, save audio from Edison
`\`\`

### Method 2: Full Video Audio Extraction

**For Entire Audio Track:**
1. Load video in Fruity Video Player
2. Route audio to mixer track with Edison
3. Set volume to 100%
4. Set timeline length to match video duration
5. Record entire playback to Edison
6. Export from Edison as WAV

**Pro Tips:**
- Use WAV format for lossless quality
- Save at video's native sample rate (usually 48kHz)
- Keep 24-bit depth for maximum quality
- Name files clearly (e.g., "VideoName_FullAudio_48kHz.wav")

### Method 3: Selective Region Extraction

**For Specific Sections:**
1. Watch video and identify sections to extract
2. Mark regions with timeline markers
3. Set loop points around region
4. Record looped section to Edison
5. Save individual sections separately

**Workflow Example:**
`\`\`
Region 1: Dialogue (00:32 - 00:47)
Region 2: Ambient (01:15 - 01:45)
Region 3: Music (02:30 - 03:00)
`\`\`

## Hip-Hop Sampling Applications

### Dialogue Sampling

**Finding Good Dialogue:**
- Classic movies with iconic lines
- Documentaries with interesting narration
- Old TV shows with unique character voices
- News broadcasts for authentic atmosphere
- Interviews for conversational texture

**Extraction Technique:**
1. Load movie/TV show video file
2. Scan through for interesting dialogue
3. Mark each good line with timeline marker
4. Extract each dialogue snippet separately
5. Clean up audio in Edison (trim, normalize)

**Example Dialogue Sources:**
- Scarface, Godfather, Pulp Fiction (classic movie quotes)
- Nature documentaries (ambient narration)
- Old news broadcasts (vintage atmosphere)
- Stand-up comedy (unique vocal textures)
- Anime/cartoons (creative character voices)

**Processing After Extraction:**
- Trim silence before and after dialogue
- Normalize to -6dB to -3dB
- Remove background noise if needed
- Pitch shift for creative effect
- Add lo-fi effect for vintage vibe

### Ambient Sound Extraction

**Types of Ambient Sounds:**
- City atmospheres (traffic, crowds, urban ambience)
- Nature sounds (rain, wind, birds, water)
- Indoor ambience (room tone, echo, reverb)
- Mechanical sounds (engines, machines, tech)
- Atmospheric textures (sci-fi, horror, abstract)

**Extraction Workflow:**
1. Find video with good ambient sound
2. Identify clean sections without dialogue/music
3. Extract 30-60 second ambient loops
4. Process for seamless looping if needed
5. Use as atmosphere layers in productions

**Example Sources:**
- Nature documentaries (pristine nature sounds)
- City footage (urban atmospheres)
- Sci-fi movies (futuristic ambiences)
- Horror films (dark atmospheres)
- Industrial videos (mechanical textures)

### Music Sampling (Creative Use)

**Legal Note:** Only sample music you have rights to use, or for educational/reference purposes only.

**Sampling Approach:**
1. Load music video or performance video
2. Find interesting musical sections
3. Extract loops, chord progressions, or hits
4. Chop and rearrange in Edison
5. Process heavily to create new sounds

**What to Sample:**
- Unique chord progressions
- Interesting drum patterns
- Melodic phrases or riffs
- Vocal phrases or ad-libs
- Transition effects

### Vintage Texture Extraction

**Finding Vintage Sources:**
- Old film footage (1940s-1980s)
- VHS tape recordings
- Old TV commercials
- Vintage documentaries
- Public domain films

**Characteristics to Extract:**
- Film grain audio texture
- Vintage compression artifacts
- Analog warmth and saturation
- Tape hiss and noise
- Unique frequency characteristics

**Processing Vintage Samples:**
1. Extract audio from old video source
2. Embrace the lo-fi quality
3. Add additional lo-fi processing if desired
4. Use for authentic vintage hip-hop vibe
5. Layer with modern production

## Advanced Extraction Techniques

### Multi-Track Extraction

**For Videos with Different Audio Elements:**
1. Create multiple instances of Fruity Video Player
2. Load same video in each instance
3. Route each to different mixer tracks
4. Extract different frequency ranges or elements
5. Reconstruct audio with separation

**Example Use Case:**
- Instance 1: Extract full audio
- Instance 2: Apply low-pass filter, extract bass
- Instance 3: Apply high-pass filter, extract highs
- Create pseudo-stems for more control

### Automated Batch Extraction

**For Multiple Videos:**
1. Create template project with extraction setup
2. Load first video, extract, save
3. Replace with second video, repeat
4. Continue for all videos in batch
5. Organize extracted files by source

**Naming Convention:**
`\`\`
SourceVideo_AudioType_SampleRate.wav

Examples:
Scarface_Dialogue01_48kHz.wav
Documentary_Ambient_48kHz.wav
OldMovie_Texture_48kHz.wav
`\`\`

### Quality Preservation

**Maintaining Maximum Quality:**
1. Match FL Studio sample rate to video audio
2. Set Edison to 24-bit recording
3. Use WAV format (never MP3 for extraction)
4. Keep volume at 100% during extraction
5. Avoid unnecessary processing before saving

**Quality Checklist:**
- [ ] Video audio sample rate verified
- [ ] FL Studio project sample rate matched
- [ ] Edison set to 24-bit WAV recording
- [ ] Volume at 100% for extraction
- [ ] No unnecessary effects on extraction track
- [ ] Clean file naming for organization

## Genre-Specific Sampling

### Boom Bap Hip-Hop

**Ideal Sources:**
- 1970s soul and funk videos
- Jazz performance recordings
- Vintage TV show themes
- Old movie soundtracks
- Classic R&B performances

**Extraction Focus:**
- Drum breaks from live performances
- Warm bass lines
- Smooth chord progressions
- Vocal phrases and ad-libs
- Vinyl crackle and texture

**Processing Approach:**
- Keep warm, organic quality
- Add subtle vinyl crackle
- Use minimal processing
- Preserve dynamic range
- Embrace imperfections

### Lo-Fi Hip-Hop

**Ideal Sources:**
- Anime soundtracks and scenes
- Old jazz recordings on video
- Nature documentaries
- Vintage instructional videos
- Public domain film archives

**Extraction Focus:**
- Jazzy chord progressions
- Ambient nature sounds
- Nostalgic dialogue snippets
- Tape hiss and noise
- Mellotron and vintage synths

**Processing Approach:**
- Add tape saturation
- Include vinyl crackle
- Reduce high frequencies
- Add gentle compression
- Create nostalgic vibe

### Sample-Based Production

**Ideal Sources:**
- Rare music performances
- Obscure documentaries
- Foreign films
- Vintage commercials
- Educational films

**Extraction Focus:**
- Unique musical phrases
- Unusual instrument timbres
- Interesting vocal deliveries
- Rare sound effects
- Unexpected textures

**Processing Approach:**
- Chop creatively
- Pitch shift for originality
- Layer multiple sources
- Create new arrangements
- Heavy manipulation

### Trap/Modern Hip-Hop

**Ideal Sources:**
- Action movie sound effects
- Sci-fi movie audio
- Video game footage
- Modern music videos
- Urban environment videos

**Extraction Focus:**
- Impact sounds (explosions, hits)
- Atmospheric pads
- Vocal ad-libs from videos
- Modern sound design
- Urban ambience

**Processing Approach:**
- Heavy processing encouraged
- Add effects and distortion
- Layer with modern production
- Use as creative elements
- Experimental manipulation

## Edison Post-Processing

### Editing Extracted Audio

**Essential Edison Tools:**
- **Trim:** Remove silence and unwanted sections
- **Normalize:** Maximize volume without clipping
- **Fade In/Out:** Smooth starts and endings
- **EQ:** Remove unwanted frequencies
- **Noise Reduction:** Clean up background noise

**Basic Cleanup Workflow:**
1. Open extracted audio in Edison
2. Zoom in and trim exact start/end points
3. Apply fade in (10-50ms) and fade out (50-200ms)
4. Normalize to -6dB to -3dB
5. Apply gentle EQ if needed
6. Save as new processed file

### Creating Seamless Loops

**For Ambient Extractions:**
1. Extract longer section than needed
2. Find natural loop points
3. Use Edison crossfade loop feature
4. Test loop for seamless playback
5. Trim to exact loop length

**Loop Length Guidelines:**
- Ambient: 4-8 bars (trap/hip-hop)
- Musical: Match musical phrase length
- Texture: 1-2 bars for subtle layers

### Sample Chopping

**In Edison:**
1. Load extracted audio
2. Identify chop points (transients, beats, phrases)
3. Use slice markers for divisions
4. Send slices to sampler channel
5. Arrange and play as new pattern

**Chopping Techniques:**
- Rhythmic chopping (on beat divisions)
- Melodic chopping (by pitch/phrase)
- Random chopping (experimental)
- Transient chopping (on hits/attacks)

## File Organization

### Folder Structure

**Recommended Organization:**
`\`\`
Extracted Audio/
├── Dialogue/
│   ├── Movies/
│   ├── TV Shows/
│   ├── Documentaries/
│   └── Interviews/
├── Ambient/
│   ├── Nature/
│   ├── Urban/
│   ├── Indoor/
│   └── Atmospheric/
├── Music/
│   ├── Vintage/
│   ├── Modern/
│   ├── World/
│   └── Instrumental/
└── Textures/
    ├── Lo-Fi/
    ├── Vintage/
    ├── Digital/
    └── Experimental/
`\`\`

### Metadata and Tagging

**Essential Information:**
- Source video name
- Extraction date
- Sample rate and bit depth
- Original timecode location
- Processing applied
- Usage notes

**File Naming Example:**
`\`\`
SourceName_Type_Description_SampleRate_Date.wav

Scarface_Dialogue_SayHelloToMyLittleFriend_48kHz_20260204.wav
NatureDoc_Ambient_RainForest_48kHz_20260204.wav
OldJazz_Music_PianoChords_48kHz_20260204.wav
`\`\`

## Legal and Ethical Considerations

### Copyright Awareness
- Only extract from content you have rights to use
- Public domain films are safe sources
- Use royalty-free video content when possible
- Educational and reference use may have different rules
- Check local copyright laws

### Ethical Sampling
- Credit original sources when possible
- Transform samples significantly for originality
- Don't just lift entire musical sections unchanged
- Consider fair use principles
- When in doubt, seek legal advice

### Safe Sources
- Public domain films (pre-1928 in US)
- Creative Commons licensed videos
- Your own video content
- Licensed sample libraries
- Royalty-free video websites

## Troubleshooting

### No Audio Extracted
**Problem:** Edison records silence
**Solutions:**
- Verify Audio Output is set to Edison track
- Check Volume is not at 0%
- Verify video actually has audio track
- Check Edison is set to correct input source

### Audio Quality is Poor
**Problem:** Extracted audio sounds degraded
**Solutions:**
- Increase Volume to 100%
- Match sample rates (FL Studio and video)
- Use WAV format instead of MP3
- Check video source quality
- Avoid multiple resampling

### Audio is Out of Sync
**Problem:** Extracted audio doesn't match video
**Solutions:**
- Ensure Slave Mode is enabled
- Check for plugin latency issues
- Record longer than needed, trim in Edison
- Use longer buffer size for stability

### File Size Too Large
**Problem:** Extracted WAV files are huge
**Solutions:**
- Extract only needed sections, not full video
- Consider 16-bit instead of 24-bit for final use
- Compress to MP3 or OGG after extraction
- Use appropriate sample rate (48kHz vs 96kHz)

## Pro Tips

### Workflow Efficiency
- Create extraction template project
- Use consistent folder structure
- Name files immediately and clearly
- Keep source video reference notes
- Back up extracted samples regularly

### Creative Techniques
- Reverse extracted audio for unique textures
- Pitch shift dialogue for creative effects
- Layer multiple ambient extractions
- Chop music samples into new rhythms
- Combine dialogue with musical elements

### Quality Control
- Always preview extracted audio before deleting video
- Keep original unprocessed versions
- Document processing for future reference
- Test samples in actual production context
- Verify no digital clipping occurred

### Time-Saving Shortcuts
- Mark multiple regions before batch extracting
- Use Edison's region saving feature
- Create keyboard macros for repeated tasks
- Use project templates for extraction
- Organize as you go, not later

```

---

## FILE: 03-Workflows\by-goal\scoring-music-videos.md

```markdown
# Scoring Music Videos with Fruity Video Player

## Overview

This guide covers the complete workflow for scoring music to hip-hop music videos using Fruity Video Player. Learn how to sync beats, align visual cuts, and create professional video-music synchronization.

## Essential Setup

### 1. Video Preparation
**Before Loading:**
- Convert video to H.264 MP4 for best compatibility
- Verify frame rate (usually 24, 30, or 60 fps)
- Check video resolution (1080p recommended for editing)
- Create proxy files for 4K videos if needed

**In Fruity Video Player:**
- Open video file
- Enable Slave Mode for timeline sync
- Set SMPTE display for frame accuracy
- Set pre-roll to 48 frames for context
- Route audio to reference track at 60-70% volume

### 2. FL Studio Project Setup
**Timeline Configuration:**
- Set project tempo to match music (usually 60-180 BPM for hip-hop)
- Enable snap to grid for precise placement
- Show time in both beats and SMPTE
- Create marker track for video cues

**Mixer Setup:**
- Route video audio to Track 1 (Reference)
- Create separate tracks for music elements
- Set up monitoring for video audio reference
- Keep video audio lower than working tracks

## Hip-Hop Music Video Workflow

### Phase 1: Analysis and Marking

**Watch Through (First Pass):**
1. Play video start to finish without editing
2. Note major scene changes and transitions
3. Identify visual impacts and effects
4. Mark emotional beats and intensity changes
5. Note lip sync requirements if applicable

**Mark Key Points:**
- **Scene Changes:** Use timeline markers for major cuts
- **Visual Impacts:** Mark explosions, effects, impacts
- **Beat Drop Points:** Identify where drops should hit
- **Chorus Sections:** Mark repeated visual themes
- **Camera Movements:** Note pans, zooms, rapid cuts

**Create Marker Types:**
- Red markers: Beat drop points
- Blue markers: Scene transitions
- Green markers: Visual impacts
- Yellow markers: Emotional moments
- Purple markers: Lip sync points

### Phase 2: Rough Sync

**Establish Basic Timing:**
1. Place main beat pattern in timeline
2. Align first downbeat to video start or cue point
3. Check if beat aligns naturally with visual rhythm
4. Adjust tempo if needed for better alignment
5. Verify chorus sections match visual repetitions

**Identify Sync Points:**
- **808 Hits:** Should align with visual impacts, bass drops
- **Snare Hits:** Match to cuts, transitions, effects
- **Hi-Hat Patterns:** Sync to rapid cuts, camera movements
- **Melody Changes:** Align with scene changes
- **Beat Drops:** Must hit major visual moments perfectly

### Phase 3: Genre-Specific Approaches

#### Trap Music Videos
**Visual Elements to Sync:**
- **808 Slides:** Slow-motion effects, dramatic moments
- **Hi-Hat Rolls:** Rapid camera cuts, fast movements
- **Snare Hits:** Visual impacts, explosions, effects
- **Beat Drops:** Major scene changes, climactic moments

**Technique:**
1. Mark all major visual impacts with red markers
2. Place 808 hits on visual impacts using frame numbers
3. Sync hi-hat rolls to rapid cut sequences
4. Align beat drops to biggest visual moments
5. Use slow-motion sections for 808 slides and effects

**Example Timing:**
`\`\`
00:00:15:12 - Intro visual effect → 808 hit
00:00:23:08 - First rapid cut sequence → Hi-hat roll start
00:00:31:24 - Major visual impact → Beat drop
00:00:47:16 - Slow-motion section → 808 slide with reverb
`\`\`

#### Melodic Rap Videos
**Visual Elements to Sync:**
- **Vocal Melody:** Lip sync, emotional expressions
- **Chord Changes:** Scene transitions, color changes
- **Vocal Runs:** Camera movements, emotional moments
- **Hook Repetitions:** Visual theme repetitions

**Technique:**
1. Mark lip sync points with purple markers
2. Align vocal melody to artist lip movements
3. Match chord changes to scene transitions
4. Sync vocal runs to camera movements
5. Use longer pre-roll for melodic context

**Example Timing:**
`\`\`
00:00:20:04 - Artist begins singing → Vocal melody start
00:00:32:18 - Scene change to new location → Chord change
00:00:45:22 - Emotional close-up → Vocal run with emotion
00:01:02:14 - Hook visual repeat → Hook section repeat
`\`\`

#### Drill Videos
**Visual Elements to Sync:**
- **Dark Atmosphere:** Establish mood with low-end
- **808 Slides:** Aggressive visual cuts, impacts
- **Hi-Hat Patterns:** Rapid edits, movement
- **Aggressive Cuts:** Snare and 808 hits

**Technique:**
1. Establish dark, aggressive mood immediately
2. Sync 808 slides to dramatic visual moments
3. Match hi-hat patterns to rapid cut sequences
4. Align aggressive snares to harsh visual cuts
5. Use tension buildup for dramatic moments

**Example Timing:**
`\`\`
00:00:08:19 - First aggressive cut → 808 hit
00:00:16:27 - Rapid cut sequence → Complex hi-hat pattern
00:00:28:11 - Visual impact → 808 slide down
00:00:42:05 - Tension moment → Ambient breakdown
`\`\`

### Phase 4: Frame-Accurate Refinement

**Using SMPTE for Precision:**
1. Zoom in on timeline to see individual frames
2. Use SMPTE display to identify exact frame numbers
3. Nudge audio elements to exact frame alignment
4. Verify each major sync point frame-by-frame
5. Test playback at 0.5x speed for verification

**Frame-by-Frame Workflow:**
1. Select sync point in video using SMPTE
2. Note exact frame number (e.g., 00:01:23:15)
3. Place audio element at exact frame in timeline
4. Verify alignment by stepping through frames
5. Fine-tune using frame nudge (+ or - keys)

**Critical Sync Points (Priority Order):**
1. **Beat Drops:** Must be perfectly aligned (±0 frames)
2. **Visual Impacts:** Very tight alignment (±1 frame)
3. **Scene Changes:** Tight alignment (±2 frames)
4. **Emotional Moments:** Good alignment (±3-4 frames)
5. **Ambient Elements:** Approximate alignment (±5-10 frames)

### Phase 5: Advanced Techniques

**Layering with Visual Rhythm:**
- **Fast Cuts → Fast Hi-Hats:** Match editing pace
- **Slow Motion → Stretched 808s:** Match time feel
- **Zoom In → Rising Pitch:** Match visual movement
- **Zoom Out → Falling Pitch:** Match visual expansion

**Creative Audio-Visual Sync:**
1. **Reverse Visual:** Use reversed audio elements
2. **Glitch Effect:** Add glitch sounds or stutters
3. **Color Change:** Sync to chord or key change
4. **Camera Shake:** Add distortion or impact sound
5. **Freeze Frame:** Use stop time effect or silence

**Building Tension:**
- Use rising sounds during visual buildup
- Match crescendo to visual intensity increase
- Sync release to visual payoff
- Create anticipation before major moments

## Specific Instrument Workflows

### 808 Bass Sync
**Visual Targets:**
- Explosions and visual impacts
- Camera shakes and movements
- Scene changes and cuts
- Slow-motion sections

**Technique:**
1. Identify all major visual impacts
2. Place 808 hits at exact impact frames
3. Use longer 808s for slow-motion sections
4. Add 808 slides for dramatic moments
5. Match 808 volume to visual intensity

**Frame Accuracy:**
- Critical: Must be ±0-1 frames
- Use frame zoom for precision
- Test at slow playback speed

### Hi-Hat Pattern Sync
**Visual Targets:**
- Rapid camera cuts
- Fast movements
- Editing rhythm
- Visual effects sequences

**Technique:**
1. Count visual cuts in sequence
2. Create hi-hat pattern matching cut rhythm
3. Sync pattern start to first cut frame
4. Verify each hi-hat aligns with cut
5. Adjust pattern timing if needed

**Pattern Examples:**
- 4 rapid cuts → 16th note hi-hat pattern
- 8 cuts with acceleration → Hi-hat roll
- Alternating cuts → Off-beat hi-hat pattern

### Melody Sync
**Visual Targets:**
- Lip sync points
- Emotional moments
- Scene transitions
- Color or mood changes

**Technique:**
1. Identify melodic anchor points in video
2. Align main melody notes to visual cues
3. Match melody contour to visual flow
4. Sync melody changes to scene changes
5. Use melody to enhance emotional beats

### Vocal Sample Sync
**Visual Targets:**
- Dialogue moments
- Character actions
- Specific objects or events
- Creative punctuation

**Technique:**
1. Extract relevant dialogue from video audio
2. Place vocal samples at appropriate visual moments
3. Sync vocal chops to visual rhythm
4. Use pitch-shifted vocals for creative effects
5. Match sample timing to lip movements if applicable

## Genre-Specific Timing Guidelines

### Trap (140 BPM)
**Typical Video Rhythm:**
- Scene change every 4-8 bars
- Visual impacts on downbeats
- Rapid cuts during hi-hat rolls
- Beat drop at major visual moment

**Sync Priority:**
1. Beat drop to major visual (±0 frames)
2. 808 hits to impacts (±1 frame)
3. Hi-hat rolls to rapid cuts (±2 frames)
4. Snares to transitions (±2-3 frames)

### Melodic Rap (80-120 BPM)
**Typical Video Rhythm:**
- Longer scenes (8-16 bars)
- Emotional close-ups
- Smooth transitions
- Lip sync focus

**Sync Priority:**
1. Vocal melody to lip sync (±1 frame)
2. Chord changes to scenes (±3-5 frames)
3. Vocal runs to emotional moments (±2 frames)
4. Hook to visual theme (±5 frames)

### Drill (140-150 BPM)
**Typical Video Rhythm:**
- Dark, aggressive cuts
- Rapid editing
- Urban environments
- Tension and release

**Sync Priority:**
1. 808 slides to aggressive cuts (±0-1 frames)
2. Hi-hats to rapid edits (±1-2 frames)
3. Snares to harsh cuts (±1 frame)
4. Atmosphere to mood (less critical)

## Export and Delivery

### Final Checks
**Before Export:**
- [ ] Play through entire video at normal speed
- [ ] Check all critical sync points frame-by-frame
- [ ] Verify no audio clipping or distortion
- [ ] Confirm proper mix balance
- [ ] Test at 0.5x and 2x speed for verification

### Export Settings
**For Video Editor:**
- Format: WAV (24-bit, 48kHz) or MP3 (320kbps)
- Length: Match exact video duration
- Start Time: 00:00:00:00 (same as video)
- Include: Timecode reference document

**Timecode Reference Document:**
`\`\`
Project: [Video Title]
BPM: 140
Frame Rate: 30 fps
Sample Rate: 48kHz

Key Sync Points:
00:00:15:12 - Intro 808 hit
00:00:31:24 - First beat drop
00:01:02:08 - Chorus section
00:01:47:16 - Final drop
`\`\`

### Delivery Checklist
- [ ] Final audio stems (WAV format)
- [ ] Full mix (WAV and MP3)
- [ ] Timecode reference document
- [ ] Sync notes for editor
- [ ] BPM and project info
- [ ] FL Studio project file (backup)

## Pro Tips

### Workflow Efficiency
- **Use Markers Extensively:** Color-code different sync point types
- **Work in Sections:** Score one section at a time for focus
- **Save Often:** Create versions at major milestones
- **Use Templates:** Create project templates for repeated workflows

### Creative Techniques
- **Reverse Engineer:** Start with video audio reference, build around it
- **Sample Video Audio:** Extract interesting sounds for creative use
- **Match Editing Rhythm:** Let video editing inform musical rhythm
- **Build Tension Together:** Sync audio and visual tension curves

### Common Mistakes to Avoid
- ❌ Not using SMPTE for critical sync points
- ❌ Ignoring video audio reference during composition
- ❌ Forgetting to account for pre-roll
- ❌ Not testing at different playback speeds
- ❌ Rushing the frame-accurate refinement phase
- ❌ Not creating sync point documentation
- ❌ Exporting at wrong sample rate for video

### Time-Saving Shortcuts
- Use Ctrl+M to quickly add markers
- Use +/- keys for frame nudging
- Use Alt+Scroll for timeline zoom
- Use Space for quick play/pause
- Use Home/End for section navigation

## Troubleshooting

### Video Not Syncing
**Problem:** Video playback doesn't follow timeline
**Solution:** Enable Slave Mode in Fruity Video Player

### Audio Ahead/Behind Video
**Problem:** Audio and video are out of sync
**Solution:** 
1. Check project sample rate matches video
2. Verify no plugin latency compensation issues
3. Adjust using frame nudge

### Choppy Video Playback
**Problem:** Video stutters during playback
**Solution:**
1. Create proxy file at lower resolution
2. Use H.264 codec for better performance
3. Increase audio buffer size
4. Close unnecessary background applications

### Frame Numbers Don't Match
**Problem:** Your frames don't align with editor's frames
**Solution:**
1. Verify matching frame rates (24, 30, 60 fps)
2. Confirm same SMPTE standard
3. Check video file hasn't been re-encoded
4. Provide clear timecode reference document

## Advanced Applications

### Multi-Video Sync
For videos with multiple camera angles or cuts:
1. Create separate instances of Fruity Video Player
2. Use same SMPTE reference for all
3. Mark angles changes in timeline
4. Export with detailed sync notes

### Live Performance Video
For stage projection and live shows:
1. Detach video window to projection monitor
2. Set large pre-roll (120 frames) for stage cues
3. Mute video audio completely
4. Use stretch mode for stage screens
5. Test thoroughly before live performance

### Interactive Video
For video that responds to music dynamically:
1. Create automation for video parameters
2. Sync automation to musical elements
3. Test all interactive points
4. Document automation for editor

```

---

## FILE: 03-Workflows\by-instrument\vocals-rap-sync.md

```markdown
# Scoring for Vocals and Rap - Video Sync Guide

## Overview

Scoring music to vocal performances and rap videos requires precise timing for lip sync, emotional delivery, and visual-audio alignment. This guide covers techniques specific to hip-hop vocal videos.

## Lip Sync Fundamentals

### Frame Accuracy for Lip Sync
Lip sync requires extreme precision:
- **Perfect Sync:** ±0-1 frames (33-16ms at 30fps)
- **Acceptable Sync:** ±2-3 frames (66-100ms at 30fps)
- **Noticeable Drift:** ±4+ frames (133ms+ at 30fps)

### Visual Cues for Timing
- **Lip Opening:** First visible lip movement
- **Jaw Drop:** Major vowel sounds
- **Lip Closure:** Consonants (B, P, M sounds)
- **Tongue Movement:** T, D, L sounds
- **Facial Expression:** Emotional delivery changes

## Vocal Recording Sync

### Recording to Existing Video

**Setup:**
1. Load music video in Fruity Video Player
2. Enable Slave Mode and SMPTE display
3. Set pre-roll to 96 frames for breath prep
4. Route video audio to reference track at 50-60%
5. Create new vocal recording track

**Recording Workflow:**
1. Watch video several times to learn timing
2. Mark verse, chorus, and bridge sections
3. Practice vocal delivery with video
4. Record vocals while watching video sync
5. Fine-tune timing in post-production

**Timing Tips:**
- Lead vocals: Sync exactly to lip movements (±1 frame)
- Ad-libs: Can be looser (±3-5 frames)
- Background vocals: Match to visual presence
- Harmonies: Sync to primary vocal timing

### Recording Video to Existing Vocal

**Setup:**
1. Load instrumental with recorded vocals
2. Set up video camera or recording device
3. Play track and video camera simultaneously
4. Performer lip syncs to recorded vocal
5. Import video for editing and final sync

**Sync Verification:**
1. Load recorded video in Fruity Video Player
2. Enable Slave Mode
3. Compare lip movements to vocal track
4. Note any timing discrepancies
5. Provide notes to video editor for correction

## Rap Vocal Sync Techniques

### Fast Rap Patterns

**Challenges:**
- Rapid syllable delivery
- Complex rhythmic patterns  
- Tongue twisters and speed sections
- Breath points between phrases

**Sync Approach:**
1. Mark primary downbeats and strong syllables
2. Use SMPTE for exact timing
3. Focus on phrase starts and ends
4. Allow slight looseness in middle of phrases
5. Sync to visual energy and intensity

**Visual Markers:**
- Head nods on downbeats
- Hand gestures on emphasis points
- Body movement matching flow
- Facial expression changes with delivery

### Melodic Rap/Singing

**Characteristics:**
- Sustained notes requiring longer sync
- Melodic phrases with vibrato
- Emotional delivery and expression
- Smoother, less percussive delivery

**Sync Approach:**
1. Mark phrase beginnings precisely (±1 frame)
2. Match melodic contour to visual expression
3. Sync emotional peaks to facial expressions
4. Allow natural sustain on held notes
5. Focus on musical phrase structure

**Visual Cues:**
- Mouth opening width for vowel sustain
- Eye expression for emotional delivery
- Body sway matching melodic movement
- Hand gestures following melodic phrases

### Ad-libs and Background Vocals

**Types:**
- **Call and Response:** Dialogue between main and background
- **Emphasis Ad-libs:** "Yeah!" "Uh!" "Let's go!"
- **Melodic Background:** Harmonies and supporting melodies
- **Atmospheric Vocals:** Distant, ambient vocal textures

**Sync Priority:**
1. Main Vocal: Critical sync (±1 frame)
2. Call/Response: Tight sync (±2 frames)
3. Emphasis Ad-libs: Good sync (±3 frames)
4. Background Melodies: Moderate sync (±4-5 frames)
5. Atmospheric: Loose sync acceptable

**Visual Placement:**
- Main rapper on screen: Main vocal sync critical
- Multiple rappers: Each needs own sync
- Solo shots: Tightest sync required
- Group shots: Can be slightly looser
- No rapper visible: Sync less critical

## Genre-Specific Approaches

### Trap Rap Vocals

**Characteristics:**
- Often melodic with autotune
- Slower, more sustained delivery
- Heavy use of ad-libs and layers
- Triplet flows common

**Video Style:**
- Slow-motion sections
- Visual effects on beat
- Multiple camera angles
- Performance and lifestyle footage

**Sync Technique:**
1. Mark main vocal phrases to lip sync
2. Sync autotune pitch changes to visual
3. Place ad-libs on visual impacts
4. Match triplet flows to visual rhythm
5. Use slow-motion for 808 moments

**Example Sync Points:**
`\`\`
00:00:15:12 - Main vocal starts, artist lip opens
00:00:23:08 - "Yeah!" ad-lib, artist gesture
00:00:31:24 - Hook melody starts, emotional expression
00:00:47:16 - Slow-mo section, pitched vocal effect
`\`\`

### Drill Rap Vocals

**Characteristics:**
- Aggressive, percussive delivery
- Fast, complex flows
- Dark, intense energy
- UK drill often has unique cadence

**Video Style:**
- Dark cinematography
- Urban environments
- Aggressive cuts and edits
- High-energy performance

**Sync Technique:**
1. Sync to aggressive, staccato delivery
2. Match syllable attacks to lip movements
3. Align aggressive delivery to visual cuts
4. Sync flow changes to camera moves
5. Match intensity to visual energy

**Example Sync Points:**
`\`\`
00:00:08:19 - Aggressive delivery starts, tight lip sync
00:00:16:27 - Fast flow section, rapid visual cuts
00:00:28:11 - Flow switch, camera angle change
00:00:42:05 - Breakdown, visual intensity shift
`\`\`

### Melodic/Emo Rap

**Characteristics:**
- Singing and melodic delivery
- Emotional, vulnerable lyrics
- Sustained notes and vibrato
- Often slower, more expressive

**Video Style:**
- Emotional cinematography
- Softer lighting and colors
- Introspective visuals
- Performance and storytelling

**Sync Technique:**
1. Precise sync for melodic phrase starts
2. Match sustained notes to expression
3. Sync emotion changes to visual mood
4. Align vibrato to visual nuance
5. Focus on emotional delivery

**Example Sync Points:**
`\`\`
00:00:20:04 - Melodic verse starts, mouth opens
00:00:32:18 - Emotional peak, facial expression change
00:00:45:22 - Vocal run, camera push-in
00:01:02:14 - Hook repeat, visual callback
`\`\`

### Boom Bap/Conscious Rap

**Characteristics:**
- Clear, articulate delivery
- Focus on lyrics and wordplay
- Steady, on-beat flow
- Storytelling emphasis

**Video Style:**
- Performance-focused
- Clear, well-lit shots
- Focus on artist
- Lyric visualization

**Sync Technique:**
1. Tight sync for all main vocals
2. Match wordplay to visual wordplay
3. Sync storytelling to visual narrative
4. Align rhyme schemes to visual rhythm
5. Focus on clarity and precision

**Example Sync Points:**
`\`\`
00:00:12:08 - Verse one starts, clear lip sync
00:00:28:16 - Wordplay moment, visual emphasis
00:00:44:20 - Storytelling section, visual narrative
00:01:05:12 - Hook, visual motif repeat
`\`\`

## Multi-Vocal Sync

### Multiple Rappers/Vocalists

**Challenges:**
- Different artists visible at different times
- Call and response between artists
- Group shots with multiple people
- Solo vs. group sections

**Approach:**
1. Identify who is visible when
2. Mark each artist's sections separately
3. Sync each artist to their visual appearance
4. Handle call/response carefully
5. Group shots allow slightly looser sync

**Color-Coded Markers:**
- Red: Artist A solo sections
- Blue: Artist B solo sections
- Green: Both artists together
- Yellow: Group/ensemble shots

### Layered Vocals

**Vocal Stack Components:**
- Main lead vocal (top layer)
- Double/harmony vocals
- Ad-libs and emphasis
- Background vocals
- Atmospheric layers

**Sync Priority:**
1. Lead vocal: Critical precision
2. Double vocal: Match lead exactly
3. Harmonies: Tight sync to lead
4. Ad-libs: Good sync to visual
5. Background: Moderate sync
6. Atmosphere: Loose sync acceptable

**Visual Mapping:**
- Artist's mouth → Lead vocal
- Facial expression → Emotional delivery
- Hand gestures → Ad-libs and emphasis
- Body movement → Overall energy
- Environment → Atmospheric elements

## Advanced Vocal Sync Techniques

### Syllable-Level Precision

**When Required:**
- Professional music videos
- High-visibility content
- Close-up performance shots
- Slow-motion sequences

**Technique:**
1. Zoom timeline to individual frames
2. Mark each major syllable with micro-marker
3. Align syllable attacks to lip openings
4. Verify frame-by-frame
5. Test at slow playback speed

**Syllable Types:**
- Plosives (P, B, T, D): Match lip closure/release
- Vowels (A, E, I, O, U): Match mouth opening width
- Fricatives (S, F, TH): Match subtle mouth movements
- Nasals (M, N, NG): Match lip closure

### Emotional Sync

**Beyond Lip Movements:**
- Facial expressions match emotion
- Body language supports delivery
- Environment reflects mood
- Camera movement matches energy
- Color grading supports feeling

**Mapping Emotion to Visuals:**
1. Identify emotional arc of vocals
2. Match to visual emotional arc
3. Sync peaks and valleys
4. Align transitions in both
5. Create cohesive emotional journey

**Example Emotional Sync:**
`\`\`
Verse 1: Introspective, soft delivery
→ Visuals: Muted colors, slow camera movement

Chorus: Energetic, powerful delivery
→ Visuals: Vibrant colors, dynamic movement

Verse 2: Aggressive, intense delivery
→ Visuals: Harsh lighting, rapid cuts

Bridge: Vulnerable, emotional delivery
→ Visuals: Close-ups, soft focus
`\`\`

### Call and Response Sync

**Structure:**
- Lead: "Where you at?"
- Response: "Right here!"
- Lead: "Let's go!"
- Response: "Let's go!"

**Visual Sync:**
1. Lead vocal when lead artist visible
2. Response vocal when response artist visible
3. Camera cuts between artists
4. Sync vocals to visual presence
5. Match energy between call/response

**Timing Considerations:**
- Allow natural spacing between call/response
- Sync camera cuts to vocal switches
- Match visual energy to vocal energy
- Keep call/response rhythm consistent

## Workflow Example: Complete Music Video

### Pre-Production
1. Receive music video from artist/director
2. Load in Fruity Video Player
3. Verify frame rate and sample rate
4. Enable SMPTE and Slave Mode
5. Watch through completely without editing

### Analysis Phase
1. Mark verse/chorus/bridge sections
2. Identify all vocal parts (lead, ad-libs, background)
3. Note camera angle changes
4. Mark critical sync points
5. Create sync priority list

### Sync Phase
1. Start with main lead vocal
2. Sync to exact lip movements (±1 frame)
3. Add ad-libs and emphasis parts
4. Place background vocals and harmonies
5. Add atmospheric vocal layers

### Refinement Phase
1. Watch full video with all vocals
2. Check each critical sync point frame-by-frame
3. Adjust any drift or timing issues
4. Test at 0.5x and 2x playback speed
5. Final verification at normal speed

### Export Phase
1. Mute video audio completely
2. Export audio at video sample rate (48kHz)
3. Create sync documentation
4. Provide to video editor
5. Review final edit for verification

## Troubleshooting Vocal Sync

### Vocals Sound Late
**Cause:** Plugin latency or buffer delay
**Solution:** 
- Check mixer plugin latency
- Shift vocals earlier by latency amount
- Or disable plugin delay compensation

### Lip Sync Drifts Over Time
**Cause:** Sample rate mismatch
**Solution:**
- Match FL Studio to video sample rate
- Verify no tempo automation causing drift

### Multiple Takes Don't Match
**Cause:** Inconsistent performance timing
**Solution:**
- Use best take as reference
- Comp other takes to match timing
- Use time-stretching carefully if needed

### Ad-libs Feel Off
**Cause:** Wrong placement or too loud
**Solution:**
- Check visual timing for placement
- Adjust volume to support, not dominate
- Verify sync to visual gestures/cues

## Pro Tips

### Efficiency
- Create vocal sync template projects
- Use color-coded markers for different vocalists
- Save sync checkpoints frequently
- Document as you work, not later

### Creative Techniques
- Slightly early vocals can feel more energetic
- Slightly late vocals can feel more laid-back
- Match vocal timing to visual editing rhythm
- Use vocal placement for creative effect

### Quality Control
- Always verify sync at multiple playback speeds
- Check on different monitoring systems
- Get feedback from video editor
- Test final product before delivery

```

---

## FILE: 04-Reference\keyboard-shortcuts.md

```markdown
# Fruity Video Player - Keyboard Shortcuts

## Video Playback Control

| Shortcut | Action |
|----------|--------|
| **Space** | Play/Pause (when plugin focused) |
| **Home** | Jump to start |
| **End** | Jump to end |

## Window Management

| Shortcut | Action |
|----------|--------|
| **Alt + F4** | Close video window |
| **F9** | Toggle mixer window |
| **F12** | Close all plugin windows |

## Video Window Controls

### Right-Click Menu Options
- **Detach**: Opens video in separate window
- **Always on Top**: Keeps video window above other windows
- **Full Screen**: Expands video to full screen
- **Aspect Ratio**: Lock/unlock proportions

## Integration Shortcuts

| Shortcut | Action |
|----------|--------|
| **Ctrl + L** | Link to controller |
| **Ctrl + R** | Rename plugin |
| **F2** | Rename in mixer |

## Workflow Tips

1. **Detached mode**: Use for dual-monitor setups
2. **Always on top**: Keep reference visible while working
3. **Full screen**: Review complete video edits
4. **Lock aspect ratio**: Prevent video distortion

## Producer Shortcuts

- Use **playlist markers** (F8) to mark video sections
- Use **pattern clips** synced to video timing
- Use **automation clips** for video-synced effects

```

---

## FILE: 04-Reference\official-manual-link.md

```markdown
# Fruity Video Player - Official Manual

## Official Documentation
- [FL Studio Manual - Fruity Video Player](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Video%20Player.htm)

## Quick Access
The official manual contains:
- Complete interface documentation
- Video format support details
- Synchronization parameters
- Performance optimization tips
- Video codec compatibility guide

```

---

## FILE: 04-Reference\video-formats.md

```markdown
# Fruity Video Player - Supported Video Formats

## Recommended Formats for Music Production

### AVI (Audio Video Interleave)
- **Best for**: Uncompressed/lightly compressed video
- **Pros**: Wide compatibility, low CPU usage
- **Cons**: Large file sizes
- **Use case**: High-quality reference videos

### MP4 (H.264)
- **Best for**: General purpose, balanced quality/size
- **Pros**: Good compression, broad support
- **Cons**: Moderate CPU usage for decoding
- **Use case**: Most common workflow choice

### WMV (Windows Media Video)
- **Best for**: Windows-optimized playback
- **Pros**: Native Windows support, efficient
- **Cons**: Limited cross-platform compatibility
- **Use case**: Windows-only projects

### MOV (QuickTime)
- **Best for**: High-quality professional video
- **Pros**: Professional standard, quality codecs
- **Cons**: Larger files, requires QuickTime codecs
- **Use case**: Film scoring, professional video sync

## Performance Considerations

### Low CPU Usage (Recommended)
- **Codecs**: MJPEG, DV, uncompressed
- **Resolution**: 720p or lower
- **Frame Rate**: 24-30 fps

### Moderate CPU Usage
- **Codecs**: H.264, MPEG-4
- **Resolution**: 1080p
- **Frame Rate**: 30-60 fps

### High CPU Usage (Use with caution)
- **Codecs**: H.265/HEVC, ProRes
- **Resolution**: 4K+
- **Frame Rate**: 60+ fps

## Hip-Hop Production Workflows

### Music Video Production
- **Format**: MP4 (H.264)
- **Resolution**: 1080p
- **Use**: Sync beats to video edits, create visual references

### Live Performance Sync
- **Format**: AVI (MJPEG) or MP4
- **Resolution**: 720p-1080p
- **Use**: Performance visuals, stage displays

### Reference Material
- **Format**: Any supported format
- **Resolution**: Match source
- **Use**: Film scoring, remix video sync, samples

## Optimization Tips

1. **Pre-convert videos** to optimized formats before importing
2. **Lower resolution** for drafting/sketching
3. **Use proxy files** for 4K content during production
4. **Export final** at full quality after mix completion
5. **Keep videos** on fast SSD storage for best performance

```

---

