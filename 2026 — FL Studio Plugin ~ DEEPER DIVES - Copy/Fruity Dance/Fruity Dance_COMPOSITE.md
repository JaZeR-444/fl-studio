# Fruity Dance - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# Fruity Dance - Visual Animation Plugin

`\`\`
███████╗██████╗ ██╗   ██╗██╗████████╗██╗   ██╗    ██████╗  █████╗ ███╗   ██╗ ██████╗███████╗
██╔════╝██╔══██╗██║   ██║██║╚══██╔══╝╚██╗ ██╔╝    ██╔══██╗██╔══██╗████╗  ██║██╔════╝██╔════╝
█████╗  ██████╔╝██║   ██║██║   ██║    ╚████╔╝     ██║  ██║███████║██╔██╗ ██║██║     █████╗  
██╔══╝  ██╔══██╗██║   ██║██║   ██║     ╚██╔╝      ██║  ██║██╔══██║██║╚██╗██║██║     ██╔══╝  
██║     ██║  ██║╚██████╔╝██║   ██║      ██║       ██████╔╝██║  ██║██║ ╚████║╚██████╗███████╗
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝   ╚═╝      ╚═╝       ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝╚══════╝
`\`\`

**Plugin Type:** Visual Animator / Mascot
**Category:** Visual / Misc
**Official Manual:** [Image-Line Fruity Dance Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Dance.htm)

---

## 🎯 What is Fruity Dance?

Fruity Dance is a unique animation plugin that displays a dancing character (defaulting to **FL Chan**, the FL Studio mascot) that syncs with your project's tempo. While primarily a fun visual addition, it can be controlled via the Piano Roll to perform specific dance moves, making it an interactive visual metronome or a creative addition to live stream setups.

**Key Capabilities:**
- **Synchronized Animation:** Character dances in time with the project BPM.
- **Piano Roll Control:** Trigger specific dance moves using different MIDI notes.
- **Custom Sprites:** Load your own character sprite sheets (PNG format).
- **Desktop Mode:** Keep the character visible even when FL Studio is minimized.
- **Visual Effects:** Built-in "Wave Candy" style effects like spectrums and levels.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **triggering-dance-moves.md** (MIDI note mapping)
3. Create **parameter-cheat-sheet.md**
4. Load the plugin and change the character's visibility or speed.

### For Streamers/Content Creators:
1. Study **loading-custom-characters.md**
2. Review **desktop-mode-setup.md**
3. Learn **sprite-sheet-requirements.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Dance Selection:** Manual move overrides.
  - **Speed:** Tempo multiplier.
  - **Reflect:** Visual floor reflection level.
  - **Keep in Front:** Window layering.

- [ ] **dance-move-note-chart.md**
  - Which MIDI note triggers which move (Held, Dance, Jump, etc.).

#### 02-Data/parameters/
- [ ] **fruity-dance-params.json**
  `\`\`json
  {
    "plugin_name": "Fruity Dance",
    "character": "FL Chan",
    "features": ["Piano roll control", "Custom sprites", "Always on top"]
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **creating-custom-dancers.md**
  - How to create a sprite sheet in Photoshop/GIMP.
  - Using the required 8-frame layout.
  - Setting up the `.txt` definition file.

- [ ] **interactive-visual-metronome.md**
  - Automating dance moves to match song sections (Verse vs Chorus energy).

#### 03-Workflows/by-context/
- [ ] **live-stream-mascot-setup.md**
- [ ] **custom-branding-visuals.md**

---

## 🔬 Research Framework

### Phase 1: Basic Movement (Week 1)
**Goal:** Grid Sync

**Tasks:**
1. Put Fruity Dance on any track
2. Open Piano Roll and place a note at C5
3. See how the character reacts
4. Change the "Speed" slider and note the sync
5. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- Can I use animated GIFs? (No, sprite sheets only).
- How do I make the background transparent? (Handled by the PNG alpha).

### Phase 2: Customization (Week 2)
**Goal:** Personalization

**Tasks:**
1. Download a custom sprite sheet from the FL community
2. Load it into the plugin
3. Verify the "Sync Changes" behavior
4. Create loading-custom-characters.md

---

## 📊 Plugin Specifications to Document

### Engine
- Sprite Format (PNG)
- Frame Limit (8 per row?)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. How do I stop her from dancing? (Set move to "Held" or "None").
2. Why is she behind my other windows? (Toggle "Keep in Front").

---

## 🔗 Cross-Reference with Other Plugins

Fruity Dance is often used with:
- **Wave Candy** (For matching visual styles)
- **ZGameEditor Visualizer** (Embedding characters in videos)

---

## 📦 File Structure Summary

`\`\`
Fruity Dance/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── dance-move-note-chart.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── fruity-dance-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── creating-custom-dancers.md
│   │   └── interactive-visual-metronome.md
│
└── 04-Reference/
    └── sprite-sheet-requirements.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Fruity Dance Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Dance.htm)
- [Fruity Dance Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Fruity_Dance_tutorials.htm)
- [Fruity Dance Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+fruity+dance+tutorial)

### Community Resources
- [Fruity Dance Subreddit](https://www.reddit.com/r/FL_Studio/search?q=fruity+dance&restrict_sr=1)
- [Fruity Dance User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Fruity Dance Character Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for detailed audio analysis
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity Parametric EQ 2** for tone shaping
- **Fruity Limiter** for monitoring output levels

### Recommended Learning Materials
- "Visual Animation in Music Production" - Understanding animated visuals in DAWs
- "Sprite Sheet Creation" - Creating custom character animations
- "MIDI Control of Visual Elements" - Controlling visuals with MIDI

### Advanced Techniques
- **Sprite Sheet Design:** Creating custom character animations
- **MIDI Note Mapping:** Understanding dance move triggers
- **Visual Performance:** Using for live streaming and performance

---

## 📚 In-Depth Technical Analysis

### Animation Engine
Fruity Dance implements a sophisticated sprite-based animation system:
- **Sprite Sheet Format:** Uses PNG format with alpha channel support
- **Frame Layout:** 8 frames arranged in a single row
- **Animation Sequence:** Cycles through frames based on tempo
- **MIDI Integration:** Different notes trigger different animations
- **Synchronization:** Syncs animation to project tempo

### Character System
The character system includes several components:
- **Default Character:** FL Chan (the FL Studio mascot)
- **Custom Characters:** User-loaded sprite sheets
- **Animation Frames:** 8 different poses per animation
- **Visual Effects:** Reflection, transparency, and lighting
- **Layer Management:** Controls for character positioning

### MIDI Control Architecture
Fruity Dance uses MIDI notes to trigger different dance moves:
- **Note Mapping:** Each MIDI note corresponds to a specific animation
- **Velocity Sensitivity:** Some animations respond to velocity
- **Hold vs Trigger:** Different behaviors for held vs struck notes
- **Polyphony:** Multiple simultaneous animations possible
- **Real-time Control:** Immediate response to MIDI input

### Visual Processing Chain
The visual processing follows this order:
- **Sprite Loading:** Character sprite sheet processing
- **Animation Engine:** Frame cycling and sequencing
- **MIDI Processing:** Note-to-animation mapping
- **Visual Effects:** Reflection and transparency
- **Window Management:** Display and positioning

### Synchronization System
The tempo synchronization system includes:
- **BPM Detection:** Reads project tempo automatically
- **Beat Matching:** Aligns animation to musical timing
- **Speed Control:** Multiplies tempo for faster/slower animation
- **Phase Alignment:** Synchronizes to specific beats
- **Time Signature Awareness:** Adapts to different time signatures

## 🎛️ Parameter Deep Dive

### Animation Controls
- **Dance Selection:** Manual override for animation type
  - Options: Held, Dance, Jump, various move types
  - Function: Overrides MIDI-triggered animations
  - Use for: Manual animation control
  - Pro tip: Use for specific visual moments
- **Behavior:**
  - Held: Character remains static when no MIDI input
  - Dance: Generic dance animation
  - Jump: Character performs jumping animation
  - Pro tip: Combine with MIDI for complex sequences
- **Applications:**
  - Visual metronome: Use Held for consistent timing
  - Performance: Use Dance for general movement
  - Emphasis: Use Jump for accent moments
  - Custom sequences: Combine different moves
  - Pro tip: Use automation for evolving animations

### Speed Controls
- **Speed:** Tempo multiplier for animation
  - Range: 0.1x to 4.0x (typically)
  - Effect: Changes animation speed relative to tempo
  - Use for: Adjusting animation intensity
  - Pro tip: Higher values create more energetic animation
- **Behavior:**
  - Low values: Slower, more relaxed animation
  - Medium values: Matched to project tempo
  - High values: Faster, more energetic animation
  - Pro tip: Match to musical energy level
- **Applications:**
  - Slow ballads: Low speed settings
  - Energetic tracks: High speed settings
  - Creative effects: Extreme speed settings
  - Performance: Adjust to match energy
  - Pro tip: Automate for dynamic changes

### Visual Effects Controls
- **Reflection:** Floor reflection intensity
  - Range: 0-100% (typically)
  - Effect: Adds mirror-like reflection below character
  - Use for: Adding visual depth and polish
  - Pro tip: Use sparingly for realistic effect
- **Behavior:**
  - 0%: No reflection
  - Medium: Subtle reflection
  - High: Strong reflection
  - Pro tip: Lower values for more natural look
- **Applications:**
  - Polished look: Medium reflection
  - Minimal effect: Low reflection
  - Artistic effect: High reflection
  - Performance: Adjust to venue lighting
  - Pro tip: Match to visual environment

### Window and Display Controls
- **Keep in Front:** Window layering control
  - Options: On/Off
  - Effect: Forces character window to stay on top
  - Use for: Live streaming and performance
  - Pro tip: Essential for streaming applications
- **Behavior:**
  - On: Character stays visible above other windows
  - Off: Character can be obscured by other windows
  - Pro tip: Use during live streams
- **Applications:**
  - Streaming: Keep character visible to viewers
  - Performance: Maintain visual during live sets
  - Monitoring: Keep visible during mixing
  - Pro tip: Toggle as needed during sessions

### MIDI Integration Controls
- **Note Mapping:** MIDI note to animation mapping
  - Range: MIDI notes 0-127
  - Effect: Different notes trigger different animations
  - Use for: Complex choreography
  - Pro tip: Map to piano roll for precise timing
- **Behavior:**
  - Each note triggers specific animation
  - Velocity affects animation intensity
  - Polyphony allows multiple animations
  - Pro tip: Use step sequencer for patterns
- **Applications:**
  - Choreographed sequences: Map specific notes to moves
  - Rhythmic patterns: Use step sequencer for timing
  - Live performance: Play notes in real-time
  - Pro tip: Create custom patterns for each section

## 🎼 Visual Design Applications

### Live Performance Enhancement
Using Fruity Dance for live performance:

**Streaming Setup:**
- Position character prominently for viewers
- Use Keep in Front for visibility
- Map animations to song sections
- Create engaging visual performance
- Essential for live streaming

**DJ Performance:**
- Sync animations to track changes
- Use for energy visualization
- Create visual drops and builds
- Engage audience with visual element
- Perfect for electronic music performance

**Visual Metronome:**
- Use for visual timing reference
- Create dance-based timing cues
- Help with complex time signatures
- Essential for live performance
- Useful for ensemble playing

### Content Creation
Using Fruity Dance for content creation:

**YouTube Videos:**
- Add character to music production videos
- Create visual interest during audio
- Use for branding and identity
- Essential for music production channels
- Perfect for tutorial content

**Social Media Content:**
- Create animated music posts
- Add visual element to audio clips
- Use for platform-specific content
- Essential for engagement
- Perfect for short-form content

**Promotional Materials:**
- Add character to promotional videos
- Create branded visual elements
- Use for social media promotion
- Essential for artist branding
- Perfect for music promotion

### Creative Animation
Using Fruity Dance for creative applications:

**Character Storytelling:**
- Map animations to musical narrative
- Create visual story with dance moves
- Use for conceptual music videos
- Perfect for experimental music
- Essential for visual storytelling

**Visual Rhythm:**
- Create rhythmic visual patterns
- Sync animations to musical phrases
- Use for visual rhythm exercises
- Essential for music education
- Perfect for rhythmic training

## 🧪 Experimental Techniques

### Advanced Animation Applications
Creative uses of Fruity Dance's capabilities:

**MIDI Sequencing:**
- Create complex animation sequences
- Use piano roll for precise timing
- Develop rhythmic animation patterns
- Perfect for visual performance
- Useful for complex choreography

**Automation Integration:**
- Automate dance parameters over time
- Create evolving animation patterns
- Use for dynamic visual changes
- Perfect for evolving compositions
- Useful for long-form pieces

**Visual Effects:**
- Combine with screen recording
- Use for live performance videos
- Create animated music videos
- Perfect for promotional content
- Useful for social media

### Custom Character Development
Advanced techniques for custom characters:

**Sprite Sheet Creation:**
- Design 8-frame animation sequences
- Create custom character designs
- Develop unique animation styles
- Perfect for branding
- Essential for personalization

**Animation Programming:**
- Program specific animation responses
- Create character-specific moves
- Develop unique animation personalities
- Perfect for character development
- Useful for visual identity

**Integration Techniques:**
- Combine with other visual plugins
- Use with video processing tools
- Integrate with streaming software
- Perfect for multimedia projects
- Essential for visual production

## 🎚️ Workflow Optimization

### Streaming Workflows
Efficient approaches to using Fruity Dance for streaming:

**Setup Optimization:**
- Position character for optimal visibility
- Configure window settings for streaming
- Set up MIDI mapping for performance
- Optimize for streaming software capture
- Pro tip: Use green screen for integration

**Performance Integration:**
- Map animations to musical sections
- Create engaging visual performance
- Plan animation sequences in advance
- Optimize for audience engagement
- Pro tip: Practice sequences before streaming

**Technical Optimization:**
- Configure for minimal performance impact
- Optimize capture settings for quality
- Plan for different streaming platforms
- Test with audience feedback
- Pro tip: Monitor performance during streams

### Content Creation Workflows
Working with other tools and plugins:

**Video Integration:**
- Use with screen recording software
- Combine with video editing tools
- Integrate with streaming platforms
- Optimize for different aspect ratios
- Pro tip: Plan for mobile viewing

**Audio Integration:**
- Sync animations to musical timing
- Use with other visual plugins
- Combine with spectrum analyzers
- Integrate with audio analysis
- Pro tip: Match to musical energy

**Social Media Optimization:**
- Format for different platforms
- Optimize for mobile viewing
- Create platform-specific content
- Plan for engagement metrics
- Pro tip: Test different animation styles

## 🎧 Genre-Specific Applications

### Electronic Dance Music
- **Build-ups:** Increasing animation intensity
- **Drops:** Using jump animations for impact
- **Breakdowns:** Subtle animations for quiet sections
- **Energy Visualization:** Matching animation to track energy
- **Performance:** Engaging audience during sets

### Hip-Hop and R&B
- **Beat Visualization:** Syncing animations to beats
- **Vocal Emphasis:** Animating during vocal sections
- **Hook Emphasis:** Highlighting chorus sections
- **Rhythmic Patterns:** Creating visual rhythm
- **Performance:** Adding visual element to sets

### Rock and Metal
- **Rhythmic Animation:** Syncing to drum patterns
- **Energy Matching:** Adjusting animation to song energy
- **Break Emphasis:** Highlighting instrumental breaks
- **Performance Enhancement:** Adding visual element
- **Audience Engagement:** Creating visual interest

### Ambient and Experimental
- **Atmospheric Animation:** Subtle, evolving animations
- **Texture Visualization:** Representing ambient textures
- **Evolution Techniques:** Using automation for change
- **Visual Meditation:** Creating calming animations
- **Experimental Applications:** Pushing visual boundaries

## 🔄 Integration with Other Plugins

### Visual Integration
Fruity Dance works well with visual plugins:
- **Wave Candy:** Combining with spectrum visualization
- **ZGameEditor Visualizer:** Embedding in video projects
- **Spectrum Analyzers:** Adding character to analysis
- **Video Players:** Integrating with video content
- **Visual Effects:** Combining with other visual tools

### MIDI Integration
Working with other MIDI tools:
- **Piano Roll:** Sequencing animations precisely
- **Step Sequencers:** Creating rhythmic animation patterns
- **MIDI Controllers:** Real-time animation control
- **Automation:** Dynamic parameter changes
- **Synchronization:** Syncing with other MIDI devices

### Effects Integration
Combining with audio effects:
- **Reverb:** Adding space to audio with visual
- **Delay:** Creating rhythmic patterns with visual
- **Filtering:** Adding movement to both audio and visual
- **Compression:** Controlling dynamics with visual feedback
- **Modulation:** Adding movement to both domains

## 📖 Historical Context

### Development Background
Fruity Dance was developed as a fun, visual addition to FL Studio:
- Created to add personality and visual interest
- Designed for entertainment and engagement
- Developed with streaming and performance in mind
- Intended to complement the music-making experience

### Evolution Through FL Studio Versions
- Initially introduced with basic animation capabilities
- Enhanced with MIDI control features
- Improved with better visual effects
- Expanded with custom character support

### Impact on Music Production
Fruity Dance has influenced music production by:
- Adding visual element to music creation
- Facilitating live streaming of music production
- Encouraging creative performance elements
- Supporting content creation for social media

## 🧠 Advanced Animation Techniques

### MIDI Sequencing Mastery
Advanced techniques for MIDI-controlled animation:
- **Complex Patterns:** Creating intricate animation sequences
- **Polyphonic Animation:** Multiple simultaneous animations
- **Velocity Expression:** Using velocity for animation intensity
- **Rhythmic Programming:** Creating rhythmic animation patterns
- **Musical Sync:** Perfect synchronization with musical elements

### Visual Performance
Advanced visual performance techniques:
- **Engagement Strategies:** Keeping audience interested
- **Narrative Animation:** Telling stories through animation
- **Energy Matching:** Synchronizing to musical energy
- **Interactive Performance:** Responding to audience
- **Brand Integration:** Using for artist identity

### Character Development
Advanced character development techniques:
- **Personality Animation:** Giving characters unique traits
- **Emotional Expression:** Conveying emotion through animation
- **Style Development:** Creating unique animation styles
- **Identity Creation:** Developing character identity
- **Recognition Building:** Creating memorable characters

## 📊 Performance Considerations

### CPU Usage
Managing Fruity Dance's impact on system performance:
- **Visual Processing:** Graphics rendering overhead
- **Real-Time Animation:** Frame rate considerations
- **MIDI Processing:** Note handling efficiency
- **Window Management:** Layering and positioning overhead
- **Optimization Strategies:** Techniques for performance

### Visual Quality
Maintaining visual quality during processing:
- **Frame Rate:** Maintaining smooth animation
- **Resolution:** Supporting different display resolutions
- **Transparency:** Managing alpha channel effects
- **Effects Quality:** Maintaining visual effect quality
- **Display Compatibility:** Working with different displays

### System Integration
Optimizing Fruity Dance within the system:
- **Window Management:** Working with OS window systems
- **Graphics Acceleration:** Using hardware acceleration
- **Driver Compatibility:** Ensuring graphics driver compatibility
- **Streaming Integration:** Working with streaming software

## 🛠️ Troubleshooting Common Issues

### Animation Problems
- **Jittery Animation:** Check system performance and frame rate
- **Desynced Animation:** Verify tempo synchronization
- **Missing Animations:** Check MIDI note mapping
- **Performance Issues:** Optimize graphics settings
- **Visual Artifacts:** Check graphics driver compatibility

### Technical Issues
- **High CPU Usage:** Reduce visual effects or animation complexity
- **Display Problems:** Optimize graphics settings
- **MIDI Issues:** Verify MIDI routing and mapping
- **Window Problems:** Check OS window management
- **Compatibility:** Verify with current FL Studio version

### Creative Issues
- **Unengaging Animation:** Try different animation patterns
- **Poor Integration:** Adjust animation to match music
- **Visibility Issues:** Use Keep in Front setting
- **Overpowering:** Reduce animation intensity
- **Lack of Control:** Use MIDI sequencing for precision

## 🎚️ Advanced Configuration

### Custom Characters
Creating and managing custom character configurations:
- **Sprite Sheets:** Creating 8-frame animation sequences
- **Character Design:** Designing unique character appearances
- **Animation Programming:** Creating custom animation responses
- **Style Integration:** Matching character to music style

### Multi-Instance Setup
Using multiple Fruity Dance instances effectively:
- **Character Variety:** Different characters for different tracks
- **Animation Layers:** Multiple animations simultaneously
- **Performance Optimization:** Managing multiple instances
- **Creative Applications:** Complex visual arrangements

### Integration Configurations
Optimizing for different integration scenarios:
- **Streaming Setup:** Configuring for live streaming
- **Performance Setup:** Optimizing for live performance
- **Content Creation:** Setting up for video production
- **Social Media:** Optimizing for different platforms

## 🌐 Community and Resources

### Online Communities
- **FL Studio Forums:** Discussions about Fruity Dance techniques
- **Reddit Groups:** Sharing animation techniques and characters
- **Discord Servers:** Real-time collaboration and feedback

### Educational Resources
- **Video Tutorials:** Demonstrations of advanced animation techniques
- **Written Guides:** In-depth articles on visual performance
- **Webinars:** Live demonstrations and Q&A sessions

### Sharing Platforms
- **Character Libraries:** Websites hosting custom character designs
- **Technique Sharing:** Platforms for sharing animation methods
- **Educational Content:** Tutorials and educational materials

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Successfully load a custom character with working dance moves
- [ ] Trigger a specific "Breakdance" move at exactly the song's drop
- [ ] Explain the layout of a Fruity Dance character definition file
- [ ] Create a complex animation sequence using MIDI notes
- [ ] Set up Fruity Dance for live streaming performance
- [ ] Design a custom sprite sheet with 8 animation frames
- [ ] Synchronize animations to complex musical arrangements
- [ ] Troubleshoot animation synchronization issues effectively
- [ ] Integrate Fruity Dance into content creation workflows
- [ ] Optimize performance for real-time animation

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection

```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What It Is And When To Use: Fruity Dance

## Purpose & Identity
Fruity Dance is a **visual animation engine** embedded within FL Studio. While many see it as a mascot plugin (featuring FL Chan), its technical identity is an **interactive visual metronome**. It translates tempo and MIDI data into choreographed movement, providing a rhythmic visual anchor for producers and performers. [SRC: IL-MAN]

## 60-Second Mental Model
Think of it as a "Digital Conductor." It doesn't make sound, but it "feels" the beat. By placing notes in the Piano Roll, you can tell the character exactly how to dance, making it a reactive part of your project's arrangement.

## Hip-Hop / R&B Context
In the booth or on a livestream, vibe is visual as much as it is auditory.
- **Rhythmic Anchor:** Use the character's movement to help a rapper find the "pocket" of a complex swing beat.
- **Livestream Branding:** Use custom sprite sheets to place your own logo or mascot inside the DAW during "Making Of" videos.
- **Energy Cue:** Automate the "Jump" move to signify the transition into a high-energy hook.

## When To Use
- When you want a **visual representation of the beat** that is more expressive than a clicking metronome.
- When **live streaming** music production and needing an interactive mascot.
- When you want to **time-align transitions** based on visual cues.

## When NOT To Use
- **CPU Intensive Mixing:** While light, any moving graphics use some GPU/CPU. Disable it during final master exports if you are on a weak machine.
- **Professional Video Editing:** For complex 3D music videos, use **ZGameEditor Visualizer** instead. Fruity Dance is for simple 2D sprite animation.

```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map And Signal Flow: Fruity Dance

## UI Tour
Fruity Dance features a minimalist control set:

1.  **Character Window:** The main area where the animation plays.
2.  **Dance Selector (Top):** Manually choose a move (e.g., Held, Dance, Jump, DJ). [SRC: IL-MAN]
3.  **Speed Slider:** Multiplies the animation rate (0.1x to 4x).
4.  **Reflect Slider:** Adds a mirror-like floor reflection.
5.  **Option Menu:** Includes "Keep in Front" and character loading settings.

## Functional Flow
1.  **Tempo Sync:** The plugin reads the project's BPM from the FL Studio engine.
2.  **MIDI Input:** It monitors MIDI notes played on its channel.
3.  **Frame Calculation:** It picks the correct frame from the **8-frame sprite row** based on the current beat position.
4.  **Transformation:** It scales and reflects the character based on UI settings.
5.  **Display:** The character is rendered on screen (supports alpha transparency).

## Things Beginners Misunderstand
- **Piano Roll Triggers:** The different dance moves are mapped to different MIDI notes (e.g., C5 is standard dance). You can "sequence" a dance just like a drum pattern. [SRC: REPUTABLE]
- **Sprite Sheet Format:** You can't just drag in a GIF. You must use a specific PNG layout with a `.txt` definition file.
- **"Auto-Dance":** If no MIDI is playing, the character will perform the move selected in the top dropdown. If MIDI is playing, the dropdown is ignored.

```

---

## FILE: 01-Learning\Concepts\02_Core_Techniques_And_Best_Practices.md

```markdown
# Core Techniques And Best Practices: Fruity Dance

## 1. The "Booth Buddy" Metronome
- **Technique:** Place Fruity Dance on a dedicated track. Resize it to be large.
- **Execution:** Set the move to "Dance." Move it to the artist's second monitor.
- **Benefit:** Provides a silent, rhythmic cue that helps the artist stay in time without the "ear fatigue" of a loud metronome click in their headphones.

## 2. Section-Based Choreography
- **Technique:** Use the Piano Roll to change energy.
- **Execution:** 
  - **Verse:** Use MIDI note **C5** (Standard Dance).
  - **Bridge:** Use MIDI note **D5** (Held/Sway).
  - **Chorus:** Use MIDI note **E5** (Jump/High Energy).
- **Result:** The visual energy of the project matches the musical energy, which is great for "Vibey" session feedback. [SRC: REPUTABLE]

## 3. Custom Branding (Mascot Loading)
- **Technique:** Create your own 8-frame sprite sheet.
- **Execution:** Name it `Dancer.png` and create a matching `Dancer.txt`.
- **Benefit:** Turns the mascot into your own brand logo, making your FL Studio session look unique during social media "cookup" videos.

## 4. "Print to Audio" Inspiration
- **Technique:** Record the character's movement using a screen recorder.
- **Creative Use:** Use the visual "bounces" of the character to inspire where you place your percussive ghost notes. It’s an unconventional "Vibe" mapping technique.

## Common Pitfalls + Fixes
- **Pitfall:** "Character is behind the Playlist."
  - **Fix:** Right-click the plugin header and select **Detached** + enable **Keep in Front** in the plugin options.
- **Pitfall:** "Animation is too fast."
  - **Fix:** Move the **Speed** slider to `1.0`. Any other setting will drift from the actual project tempo. [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: Fruity Dance

Fruity Dance provides **Visual Energy Synchronization**.

## 1. Moody (Slow, Still, Minimal)
- **Concept:** "The Statue."
- **Levers:**
  - **Selection:** Set move to "Held."
  - **Speed:** 0.1x.
- **Listen For:** The character's lack of movement emphasizes the space and emptiness of a moody R&B track.
- **Don't Do This:** Avoid frantic dancing; keep the visuals "static" to match the emotional weight.

## 2. Upbeat (Hectic, High-Energy, Pop)
- **Concept:** "The Rave."
- **Levers:**
  - **Selection:** "Jump" or "Dance."
  - **MIDI:** High-speed note patterns (1/16th notes) to switch moves.
- **Listen For:** How the fast-moving visuals encourage a more "Upbeat" drum programming style.

## 3. Psychedelic (Glitched, Evolving, Liquid)
- **Concept:** Visual Glitching.
- **Levers:**
  - **Automation:** Link the **Speed** slider to a fast LFO.
- **Listen For:** The character moving at "unnatural" rates, which complements trippy sound design and warped synth textures.

## 4. Jazzy (Swinging, Groovy, Human)
- **Concept:** "The Sway."
- **Levers:**
  - **Speed:** 0.5x.
  - **MIDI:** Use notes that trigger side-to-side sways.
- **Listen For:** How the slower, more organic visual pace matches a jazz-hop swing or boom-bap pocket.

## 5. Vibey (Smooth, Polished, Aesthetic)
- **Concept:** "The Phantom."
- **Levers:**
  - **Reflect:** High (100%).
  - **Opacity:** Use a video editor later to make the character 50% transparent.
- **Listen For:** A sense of "dreamy" background accompaniment that doesn't distract from the main production. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Concepts\animation-bpm-sync.md

```markdown
# The Master's Guide to Animation, BPM Sync, and Mascot Culture in Fruity Dance

## 1. Introduction: The Soul of the DAW
In the often clinical and cold world of digital audio workstations, Fruity Dance represents the "Human" and "Playful" heart of FL Studio. More than just a visual gimmick, the mascot (historically known as FL Chan) is a tool for **Rhythmic Anchoring**. For modern Hip-Hop and R&B producers, who often work long, isolated hours, having a visual representation of the beat provides a psychological "vibe" that can actually improve the groove of your drum programming.

---

## 2. Theoretical Foundation: Sprite-Based Mathematics
### 2.1 The 2D Bitmap Engine
Fruity Dance does not use 3D polygons or GPU-intensive rendering. It operates on a **2D Sprite Sheet**.
- **The Sprite Sheet:** A single large image file containing every frame of every animation (Dance, Jump, Wave).
- **The Frame Pointer:** The plugin selects which part of the image to display at any given millisecond.
- **The Advantage:** This uses virtually zero CPU and GPU power, allowing the mascot to stay active even in projects with hundreds of heavy VSTs.

### 2.2 BPM Sync Logic (The Temporal Hook)
The mascot's movement is mathematically tied to the **Global Transport Clock**.
- **Bar-Sync:** A "1.0x Speed" animation is designed to complete a full cycle (e.g., one dance move) exactly every 1 or 2 bars.
- **Temporal Resolution:** At 120 BPM, one bar is 2000ms. If a dance animation has 8 frames, each frame is displayed for exactly 250ms.
- **The "Groove" Factor:** Because the mascot hits her "downbeat" exactly when your kick hits, it provides a visual confirmation of your track's rhythmic integrity.

---

## 3. The History of Mascot Culture in Production
### 3.1 From Vocaloid to FL Studio
The concept of a visual character associated with music software has deep roots in the **Japanese Vocaloid** scene (Hatsune Miku). 
- **The "FL Chan" Legacy:** Created as a community-driven mascot, FL Chan became the face of the "Fruity Loops" identity. 
- **The "Cool" Factor:** In modern "Type Beat" culture and Lo-Fi streaming, having a mascot present in your screen-captures adds a layer of "Aesthetic" and "Branding" that sets your content apart from generic screen-shares.

---

## 4. The Psychology of Visual Rhythm
### 4.1 Anchoring the Internal Clock
Producing "Upbeat" Trap or "Moody" R&B requires a strong internal sense of time. 
- **The Metronome Paradox:** A clicking metronome can be annoying and fatiguing.
- **The Visual Solution:** Fruity Dance acts as a **Silent Metronome**. Your brain processes the movement of the mascot subconsciously, allowing you to "feel" the beat while you are tweaking a synth or arranging vocals without the "tick-tick-tick" of a standard metronome.

---

## 5. Genre-Specific Production Strategies
### 5.1 Lo-Fi / Moody R&B (The "Breathe" Vibe)
- **The Technique:** Slow temporal scaling.
- **The Action:** Set the animation to 'Breathe' or 'Idle' and the speed to 0.5x.
- **The Result:** The mascot moves in a slow, hypnotic way that matches the "relaxed" and "lazy" feel of a Lo-Fi Hip-Hop track.

### 5.2 High-Energy Rap (The "Jump" Sync)
- **The Technique:** MIDI Triggering.
- **The Action:** Use **Manual Mode**. Place a MIDI note at the start of every 8-bar "Drop."
- **The Result:** The mascot will stay still during the atmospheric verse and "Jump" exactly when the beat drops, providing a visual payoff for the listener during live-streams.

---

## 6. Technical Nuance: The "Manual" override
### 6.1 Bypassing the Clock
In 'Manual Mode', Fruity Dance stops listening to the BPM and starts listening to **MIDI Note Data**.
- **Note Mapping:** Specific notes trigger specific sequences (e.g., C5 = Idle, D5 = Dance).
- **Master Strategy:** You can treat the mascot as a **Visual Instrument**. Record a "choreography" into the Piano Roll that perfectly matches the energy of your melodic lead.

---

## 7. Mathematical Vibe Table for Fruity Dance
Adjust these settings to match your genre's energy:

| Genre / Vibe | Animation | Speed | Mode | Size |
|--------------|-----------|-------|------|------|
| **Lo-Fi / Chill** | Breathe   | 0.5x  | Auto | 25% (Small) |
| **Moody R&B** | Sway      | 1.0x  | Auto | 50% (Medium)|
| **Trap / Drill** | Dance 1   | 2.0x  | Auto | 75% (Large) |
| **Experimental** | Manual    | N/A   | MIDI | 100% (Full) |

---

## 8. Conclusion: The Producer's Guardian
Mastering Fruity Dance is about **Visual Context**. It doesn't change the sound, but it changes the **Mindset** of the person making the sound. Whether she is acting as a silent metronome for your R&B chords or a reactive "hype-man" for your Trap drums, the mascot is a critical part of the "Aesthetic Production" workflow. It is the ultimate tool for the producer who understands that music is not just something you hear—it's something you experience.

---
**Document Version:** 2.0 (Master Tier)
**Author:** AI Research Specialist
**Keywords:** Sprite Animation, BPM Sync, Mascot Culture, FL Chan, Visual Metronome, Hip-Hop Aesthetics.
```

---

## FILE: 01-Learning\Concepts\visual-beat-sync-neurology.md

```markdown
# Technical Deep-Dive: Visual Beat-Sync Neurology and Cross-Modal Perception

## 1. Introduction: The Multimodal Mind
The human brain does not process audio and video in isolation. Our internal clock is a **Multimodal System**. When we see a visual event (like a mascot jumping) at the exact same time we hear an audio event (like a kick drum), the brain performs **Cross-Modal Integration**. This guide explores the neurology of why **Fruity Dance** is a powerful tool for increasing the "Perceived Impact" of your beats, and how to exploit this for high-value production branding.

---

## 2. Theoretical Foundation: Temporal Binding
### 2.1 The Integration Window
If a visual cue and an audio cue occur within **80ms** of each other, the brain "Binds" them into a single unified event.
- **The "Groove" Physics:** When Fruity Dance is synced to your BPM, the mascot's downbeat hits exactly within this 80ms window.
- **The Perception:** The kick drum actually **Sounds Louder and Harder** to the viewer because the brain's visual cortex is reinforcing the auditory cortex. This is known as the **McGurk Effect** variant for rhythm.

### 2.2 Neural Entrainment (The Visual Hook)
- **The Science:** Seeing a rhythmic movement causes neurons in the motor cortex to fire in time with the music.
- **The "Cool" Factor:** This is why "Type Beat" visualizers are so successful. The moving mascot triggers a physical "Head-nod" response in the viewer before they have even consciously decided if they like the beat.

---

## 3. Engineering "Narrative" Impact
### 3.1 Visual Dynamic Range
Just as we use compression to control audio dynamics, we use **Fruity Dance's Size knob** to control "Visual Dynamics."
- **The Master Move:** Link the **Size** knob to your **Master Peak Controller**.
- **The Logic:** In the Verse, the mascot is small (Low energy). In the Chorus, she pulses to 100% size.
- **The Neurology:** The brain interprets the "Expanding" visual as a "Closer" and "More Powerful" sound. This mimics the biological response to an object physically approaching the listener.

---

## 4. The "Uncanny Valley" of Desync
### 4.1 The Physics of Latency
If your visual mascot is more than 100ms out of sync with your audio (e.g. due to plugin latency), the "Binding" breaks.
- **The Result:** The viewer feels "Anxious" or "Uncomfortable." The beat sounds "Weak" or "Off-Grid."
- **The Fix:** Always ensure **PDC (Plugin Delay Compensation)** is handled correctly. If you use a heavy "Look-ahead" limiter on your master, the mascot will appear to jump *early*. 
- **The Engineering Hack:** Add a 10ms - 20ms **Look-ahead** to your automation clips for Fruity Dance to perfectly align the visual transient with the audible transient.

---

## 5. Table of Cross-Modal Triggers

| Visual Event | Audio Event | Brain Response | Subjective Vibe |
|--------------|-------------|----------------|-----------------|
| **Fast Jump**| Sharp Snare | Alertness / Adrenaline.| High-Energy Trap.|
| **Slow Sway**| Dark Pad    | Serotonin / Calm.      | Moody R&B / Soul.|
| **Random Jitter**| Glitch FX | Confusion / Curiosity. | Psychedelic / IDM.|
| **Pulsing Size**| Sustained 808| Visceral / Weight.     | Heavy Drill.     |

---

## 6. Conclusion: The Master of Attention
Mastering Fruity Dance is about **Owning the Listener's Full Attention.** By understanding the neurology of temporal binding and neural entrainment, you move beyond "Music" and start designing **Multi-Sensory Events.** This is the definitive guide for the producer who wants their content to command attention on social media and streaming platforms. Follow these neurological protocols to ensure your beats are seen, felt, and heard with maximum professional impact.

---
**Document Version:** 1.0 (Neuro-Sonic Tier)
**Author:** Multimodal Neurology Lead
**Keywords:** Visual Sync, Cross-Modal Perception, Neural Entrainment, Temporal Binding, DAW Aesthetics, Fruity Dance Physics.

```

---

## FILE: 01-Learning\Quick-Reference\00_Quickstart_5_Minutes.md

```markdown
# Quickstart: Fruity Dance (5 Minutes)

1.  **Insert:** Load **Fruity Dance** onto any track.
2.  **Mascot:** FL Chan will appear.
3.  **Basic Sync:** Press Play. She will dance in time with your project tempo.
4.  **Choreograph:** Open the **Piano Roll** for the Fruity Dance channel.
5.  **Notes:** 
    - **C5:** Starts the standard dance.
    - **D5:** Changes to a different move.
    - **Experiment:** Try notes from C0 to C10 to discover hidden animations.
6.  **Tip:** Use the **Reflect** slider to make it look like she's dancing on a shiny floor. [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Quick-Reference\01_Common_Mistakes.md

```markdown
# Common Mistakes: Fruity Dance

- **Misreading MIDI:** Thinking the character produces sound. It doesn't. It only listens to MIDI to change its visuals.
- **Wrong Speed:** Thinking "Speed = 2.0" means it's still in sync. **Fix:** Keep Speed at `1.0` if you want the "downbeat" of the dance to match the "downbeat" of your kick drum.
- **Ignoring Transparency:** Using a JPEG for custom characters. **Fix:** Only use **PNG-24** with an alpha channel, or the background will be a solid white box.
- **Forgetting the .txt:** Loading a custom PNG without its matching text definition file. The plugin won't know where the frames are.
- **Overcrowding:** Leaving the window open during a heavy mixing session. It eats up small amounts of GPU resources. Close it when not in use. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\dance-move-note-chart.md

```markdown
# Dance Move Note Chart: Fruity Dance

Note: The exact animation depends on the loaded character sheet. This chart refers to the default **FL Chan** mascot.

| MIDI Note | Animation Type | Energy Level | Vibe Match |
| :--- | :--- | :--- | :--- |
| **C5 (60)** | Standard Dance | Medium | Upbeat / Vibey |
| **C#5 (61)** | Side Step | Medium | Jazzy / Groovy |
| **D5 (62)** | High Jump | High | Upbeat / Aggressive|
| **D#5 (63)** | Held Pose | Zero | Moody / Dark |
| **E5 (64)** | DJ Scratch | Medium | Boom Bap / Hip-Hop |
| **F5 (65)** | Slow Sway | Low | R&B / Smooth |

*Note: You can overlap notes to create "glitchy" transitions between moves.* [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Quick-Reference\parameter-cheat-sheet.md

```markdown
# Fruity Dance: The Complete Parameter Encyclopedia (Expert Edition)

**Plugin Architecture:** 2D Bitmap Sprite Animation Sequencer
**Internal Logic:** Transport-Linked Frame-Pointer Logic
**Target Genres:** All (Aesthetic Utility for Live-Streaming and Lo-Fi Production)

---

## 1. THE MODE MODULE (Logic Control)
Fruity Dance operates in two distinct mathematical states.

### 1.1 Auto Mode (The Rhythmic Slave)
- **Technical Logic:** The plugin reads the **BPM and Playhead Position** from FL Studio. It calculates the current animation frame based on the Song Position.
- **The "Vibe" Hack:** If your track is at 140 BPM (standard Trap), the mascot will move twice as fast as at 70 BPM. This ensures she always hits the "Downbeat" correctly.

### 1.2 Manual Mode (The Performance Master)
- **Technical Logic:** The transport sync is disconnected. The animation is now triggered via **MIDI Notes**.
- **The Power of Control:** This allows you to choreograph the mascot to your music. You can make her stay perfectly still during an atmospheric verse and only start dancing when the 808 hits.

---

## 2. THE ANIMATION LIBRARY (The Moves)
### 2.1 Animation Selector
- **Technical Feature:** A dropdown menu containing several pre-baked sequences.
- **The "Vibe" List:**
    - **Idle / Breathe:** Slow, vertical movement. Ideal for atmospheric pads and moody intros.
    - **Dance 1 / 2:** Rhythmic, full-body moves. Ideal for main drum grooves.
    - **Jump / Kick:** High-energy vertical frames. Essential for marking the "Drop" or snare hits.
    - **Wave:** A friendly greeting move. Used by streamers to welcome new followers during a set.

### 2.2 Speed Knob
- **Range:** 0.1x to 4.0x.
- **The Math of Speed:** 
    - **1.0x:** Standard sync (one full loop every 1 or 2 bars).
    - **0.5x:** Half-time. Makes the mascot feel "relaxed" or "heavy." Perfect for Moody R&B.
    - **2.0x:** Double-time. Makes her feel "hyped" or "agitated." Perfect for high-energy Drill beats.

---

## 3. THE SPATIAL MODULE (Visual Presence)
### 3.1 Size Knob
- **Technical Logic:** Vector-scaling of the bitmap sprite. 
- **The Benefit:** Because the artwork is high-resolution, you can scale her from a tiny corner mascot to a full-screen background character without major pixelation artifacts.
- **Master Rule:** Set size to **25%** for a professional, non-distracting production environment. Set to **100%** for video exports or live-streams.

---

## 4. HIDDEN MIDI MAPPING (Manual Mode Only)
When the plugin is in **Manual Mode**, specific MIDI notes in the Piano Roll correspond to specific frames.

| MIDI Note | Animation Sequence | Use Case |
|-----------|--------------------|----------|
| **C5**    | Idle / Breathe     | Verses, slow intros. |
| **D5**    | Dance 1            | Main rhythmic section. |
| **E5**    | Dance 2            | Transition energy. |
| **F5**    | Jump / Kick        | Snare hits, drum fills. |
| **G5**    | Wave / Greet       | Streamer interactions. |
| **A5**    | Performance 1      | Special moves. |

---

## 5. WRAPPER-LEVEL MASTER OPTIONS
This is where the "Cool" factor is actually activated.

### 5.1 "Stay on Top"
- **Workflow:** Right-click the top bar of the plugin window.
- **The Logic:** This ensures the mascot is never hidden by other windows. 
- **Why it matters:** In a professional R&B workflow, you might be buried in the Piano Roll for 30 minutes. Having the mascot visible keeps you "anchored" to the beat.

### 5.2 "Detached"
- **Workflow:** Right-click wrapper -> Detached.
- **The Benefit:** You can move the mascot to a second monitor or position her over the FL Studio transport clock.

---

## 6. TECHNICAL ARTISTRY: CUSTOM SPRITES
### 6.1 The Sprite Sheet Protocol
Fruity Dance reads its art from a specific folder in your FL Studio installation.
- **The Hack:** If you replace the default `.png` file with your own custom sprite sheet (using the same pixel dimensions and frame count), you can have **YOUR OWN MASCOT** inside FL Studio. This is the ultimate branding tool for "Type Beat" YouTube channels.

---

## 7. TROUBLESHOOTING
- **Issue:** "She isn't moving."
- **Fix:** You are likely in **Manual Mode** without any MIDI notes in the Piano Roll. Switch back to **Auto**.
- **Issue:** "She is blurry."
- **Fix:** Ensure your 'UI Scaling' in FL Studio general settings is set to 'System' or '100%'.

---

## 8. SUMMARY: THE "VIBE" CHEAT SHEET
- **THE "LO-FI" COMPANION:** Mode Auto, Speed 0.5x, Size 30%, Animation: Breathe.
- **THE "TRAP" HYPE-MAN:** Mode Auto, Speed 2.0x, Size 60%, Animation: Dance 1.
- **THE "STREAMING" PRO:** Mode Manual, Size 100%, Animation: MIDI-Mapped to Snare/Kick.

---
**Document Version:** 2.5 (Encyclopedia Master)
**Status:** COMPLETE RESEARCH
**Keywords:** Fruity Dance, FL Chan, Sprite Animation, MIDI Mapping, DAW Aesthetics, Live-Streaming Utility.
```

---

## FILE: 02-Data\parameters\00_Parameter_Dictionary.md

```markdown
# Parameter Dictionary: Fruity Dance

| Parameter | Type | Range | Default | Vibe Impact | Mix Impact | Description |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Speed** | Slider | 0.1x to 4x | 1.0x | **Psychedelic**| **None** | Animation tempo multiplier. |
| **Reflect** | Slider | 0 to 100% | 0% | **Vibey** (Polish)| **None** | Floor reflection intensity. |
| **Dance** | Switch | Manual List | Auto | **Moody/Upbeat**| **None** | Manual move selection. |
| **Keep in Front**| Toggle | On / Off | Off | **Livestream** | **None** | Forces window to stay on top. |

- **Vibe Impact Tag (Tempo):** Speed automation creates "Warpped" visual energy.
- **Mix Impact Tag (Inspiration):** Used as a silent metronome to improve "Human" feel in drum programming. [SRC: IL-MAN]

```

---

## FILE: 02-Data\parameters\dance-specs.json

```json
{
  "plugin": {
    "name": "Fruity Dance",
    "category": "Visual",
    "type": "Animation Utility",
    "officialManual": "https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Dance.htm"
  },
  "modes": ["Auto", "Manual"],
  "controls": [
    {"id": "animation", "name": "Animation Sequence"},
    {"id": "speed", "name": "Playback Speed"},
    {"id": "size", "name": "Scale Factor"}
  ],
  "midiMapping": "Note-based triggering of sprite sequences in Manual mode."
}

```

---

## FILE: 02-Data\presets\dance-archetypes.json

```json
{
  "archetypes": [
    {
      "name": "The Head-Banger",
      "settings": {
        "animation": "Dance 1",
        "speed": "2.0x"
      },
      "useCase": "High-energy rock or metal projects."
    },
    {
      "name": "The Lo-Fi Companion",
      "settings": {
        "animation": "Breathe",
        "speed": "0.5x"
      },
      "useCase": "Chill, atmospheric, or lo-fi sessions."
    }
  ]
}

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B (Fruity Dance)

## 1. The "Booth Buddy" Rule
- **Rule:** When recording rappers, the visuals should be a guide, not a distraction.
- **Application:** Use a simple "Held" or "Sway" move for melodic verses. Only switch to "Dance" for high-energy hooks.

## 2. Branding Discipline
- **Rule:** If using custom mascots for social media videos, keep them relevant to the genre.
- **Application:** A minimalist logo or a character wearing "Hip-Hop" style attire increases the professional vibe of your content.

## 3. Resample & Treat Rule
- **Rule:** Visuals can inspire audio. 
- **Application:** Record the animation. Identify where the character's feet hit the ground. Place your 808s and snares on those exact moments to create a unique "Visual Groove."

## 4. CPU/GPU Safety
- **Rule:** Disable "Keep in Front" during heavy rendering. 
- **Reason:** Rendering audio while the GPU is redraw-heavy can occasionally cause audio buffer underruns on lower-end systems.

## 5. Mono-Check
- **Rule:** Fruity Dance has zero impact on audio phase.
- **Application:** It is the only plugin you can safely "Abuse" without worrying about the final mix quality. [SRC: REPUTABLE]

```

---

## FILE: 02-Data\rules\animation-rules.json

```json
{
  "rules": [
    {
      "goal": "Performance Visuals",
      "action": "Enable 'Always on Top' and link the 'Animation' parameter to a MIDI knob for real-time control."
    },
    {
      "goal": "Rhythmic Jumping",
      "action": "Use Manual mode and place MIDI note F5 on every downbeat of the bar."
    }
  ]
}

```

---

## FILE: 02-Data\rules\visual-storytelling-logic.json

```json
{
  "visualStorytellingRules": {
    "narrativeStages": [
      {
        "stage": "The Introduction (The Hook)",
        "logic": {
          "animation": "Breathe",
          "speed": "0.5x",
          "size": "25%",
          "narrative": "The mascot is waking up. The music is sparse. This builds curiosity and establishes the 'Mood' without being distracting."
        }
      },
      {
        "stage": "The Build-up (The Tension)",
        "logic": {
          "animation": "Idle",
          "speed": "1.0x",
          "size": "Automate 25% -> 50%",
          "narrative": "As the filters open and the risers increase, the mascot physically grows. This provides a visual cue that energy is accumulating."
        }
      },
      {
        "stage": "The Climax (The Drop)",
        "logic": {
          "animation": "Dance 1 / Jump",
          "speed": "2.0x",
          "size": "75%",
          "narrative": "Total rhythmic explosion. The mascot matches the energy of the 808. This is the visual 'Payoff' for the listener."
        }
      },
      {
        "stage": "The Aftermath (The Outro)",
        "logic": {
          "animation": "Wave / Breathe",
          "speed": "0.2x",
          "size": "Fade to 0%",
          "narrative": "The journey is ending. The mascot says goodbye and dissolves into the background."
        }
      }
    ],
    "rhythmicSyncrules": [
      {
        "event": "Snare Ghost Notes",
        "action": "Trigger Frame 13 (Small Kick) using MIDI note F5 at 20% velocity."
      },
      {
        "event": "Psychedelic Melodic Fluctuation",
        "action": "Link mascot 'Speed' to the filter cutoff of the lead synth. As the sound gets brighter, the dance gets faster."
      }
    ]
  }
}

```

---

## FILE: 03-Workflows\by-goal\00_Goal_Quick_Result.md

```markdown
# Goal: Loading Custom Characters (Fruity Dance)

## Routing Context
- **Utility:** Visual Personalization.
- **Workflow:** **Sprite Sheet** Integration.

## Step-by-Step Setup
1.  **Design:** Create a PNG image with 8 equal frames arranged in a row (e.g., a 256x32 strip).
2.  **Naming:** Save the file as `MyMascot.png`.
3.  **The Definition:** Create a text file named `MyMascot.txt`.
4.  **Formatting:** Inside the text file, define the frames. 
    - *Example:* `8` (telling the plugin there are 8 frames).
5.  **Loading:** In Fruity Dance, click the gear icon -> **Load** -> select your PNG.
6.  **Result:** Your own custom brand logo or character is now dancing in time with your project.

## Vibe Check
- **Vibey/Professional:** Using a custom-branded mascot during studio sessions or livestreams makes your production environment feel curated and unique.

## Variation
- **Logo Flip:** Use a 3D version of your logo spinning. Each frame is a different angle of the spin.

## Pitfalls + Fixes
- **Pitfall:** "The character looks stretched."
  - **Fix:** Ensure each frame is exactly the same width and height. The plugin expects perfectly divided squares or rectangles. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-goal\01_Goal_Mix_Validation.md

```markdown
# Goal: Interactive Visual Metronome (Fruity Dance)

## The Concept
Using the character's movement to guide the rhythmic pocket of a song instead of an annoying "Click" sound.

## Step-by-Step Setup
1.  Load **Fruity Dance** on a dedicated track.
2.  Set move to **Dance** (Note C5).
3.  Set **Speed** to `1.0`.
4.  **The Pocket:** If you are working on a "Swing" or "Drunk" beat, adjust the character's speed slightly (e.g., `0.95`) manually during recording.
5.  **Visual Cues:** 
    - At the end of every 8 bars, place a MIDI note for **Jump** (Note D5).
    - This provides a visual "Turnaround" cue for the artist.

## Result
- A more organic recording experience. Performers naturally synchronize with moving visuals better than abstract sounds, leading to a better "Vibe" in the final recording.

## Vibe Check
- **Upbeat:** The rhythmic jumping and dancing keeps the studio energy high during intense vocal sessions.

## Automation Idea
- Automate the **Reflect** slider to increase during the chorus, making the visual space feel "grander" as the music expands. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-goal\03_Goal_Creative_Effect.md

```markdown
# Workflow: Print to Audio Inspiration (Dance)

## The Concept
Using the random or choreographed movement of the character to "Generate" new rhythmic drum patterns.

## Step-by-Step
1.  Set **Fruity Dance** to a complex move like "Breakdance."
2.  Use a screen recorder to capture 4 bars of the animation.
3.  Import the video/frames into your brain.
4.  **Mapping:**
    - Character Jumps = **Snare/Kick**.
    - Character Spins = **Hi-Hat Rolls**.
    - Character Poses = **Bass notes**.
5.  **Result:** You have created a rhythm based on visual physics rather than standard musical theory.

## Vibe Check
- **Psychedelic/Experimental:** This breaks your usual drum programming habits and leads to "trippy" syncopation.

## Pitfalls
- **Over-Complexity:** Don't try to map every frame. Focus on the "Peak" movements for the main drum hits. [SRC: UNVERIFIED]

```

---

## FILE: 03-Workflows\by-goal\mascot-choreography.md

```markdown
# Synchronizing Mascot to Melodic Rhythms Workflow

## Goal
Make the Fruity Dance mascot perform specific moves in time with a complex melody or drum pattern.

## Steps
1. **Insert Fruity Dance**: Place it on any mixer track.
2. **Switch to Manual Mode**: Change the setting from **Auto** to **Manual**.
3. **Piano Roll Programming**:
   - Open the **Piano Roll** for Fruity Dance.
   - Look at the MIDI mapping reference (C5 = Idle, D5 = Dance, F5 = Jump).
4. **Matching the Beat**:
   - Place a `D5` note on the 2nd and 4th beats of your pattern (the Snare hits).
   - Place an `F5` note on the 1st beat (the Kick hit).
5. **Playback**:
   - Play your project.
   - The mascot will now jump on the kick and dance on the snare.

## Result
A customized visual experience that reacts dynamically to your music's structure.

```

---

## FILE: 03-Workflows\by-goal\narrative-visual-sync-automation.md

```markdown
# Masterclass: Narrative Visual-Sync Automation in Fruity Dance

## 1. Executive Summary: The "Visual Storyteller"
In the modern digital landscape (Instagram Reels, TikTok, YouTube Shorts), your beat is not just a sound—it's a **Video**. A static image of your DAW is "Dead Air." **Fruity Dance**, when automated correctly, becomes a **Narrative Tool** that visualizes the "Energy Curve" of your production. This guide will show you how to move beyond "Auto Mode" and use complex automation to tell a story with your mascot, turning your beat-making sessions into professional visual content.

---

## 2. Phase 1: Temporal Scripting (The Song Structure)

### 2.1 Mapping the Narrative
To tell a story, the mascot must change state as the song progresses.
1. **The Intro (Searching):** Set animation to **Breathe** and speed to **0.5x**.
    - *The Vibe:* The character is "Waiting" for the energy to arrive.
2. **The Build-up (Anticipation):** Automate the **Speed** from **0.5x to 1.5x**.
    - *The Vibe:* The character is getting "Hyped" as the snare rolls increase.
3. **The Drop (The Climax):** Set to **Manual Mode**. Use MIDI note **F5** (Jump) on every downbeat.
    - *The Vibe:* Total rhythmic synchronization.
4. **The Outro (Fading Away):** Automate the **Size** knob from **50% down to 0%**.
    - *The Vibe:* The mascot "Dissolves" as the mood darkens.

---

## 3. Phase 2: Reactive Physics (Peak Interaction)

### 3.1 The "808 Bounce" Workflow
Make the mascot physically react to the weight of your bass.
- **The Link:** Link the **Size** knob to a **Fruity Peak Controller** on your 808 track.
- **The Formula:** `0.4 + (Input * 0.3)`.
- **The Result:** Every time the 808 hits, the mascot "Pulses" larger. This provides a visual confirmation of the "Heavy" low-end, making the beat *look* harder to the viewer.

---

## 4. Phase 3: Emotional Color Palettes

### 4.1 Cyberpunk Narrative Sync
- **The Move:** Link the **Hue** of a video overlay (or use a **Fruity Color Enhancer** window capture) to the **Song Energy**.
- **The Setup:** When the beat is "Moody" (Verse), the mascot's environment is **Dark Blue/Purple**. When the beat is "Upbeat" (Chorus), the environment shifts to **Bright Pink/Cyan**.
- **The Psychology:** This "Color Storytelling" is used in high-budget music videos to subconsciously guide the listener's emotions.

---

## 5. Phase 4: Performance Choreography (Piano Roll)

### 5.1 Advanced MIDI Patterns
In **Manual Mode**, you can "Perform" the mascot like a drum machine.
- **The Stutter:** Place a rapid 1/32 note sequence of MIDI note **D5** (Dance).
- **The Effect:** The mascot will "Glitch" in place, perfectly matching an industrial rap or glitch-hop melodic stutter.
- **The "Look-At-Me" Wave:** Use note **G5** only when your producer tag plays. This creates a psychological "Signature" for your brand.

---

## 6. Visual Narrative Calibration Table

| Song Section | Animation | Speed | Reactivity | Narrative Goal |
|--------------|-----------|-------|------------|----------------|
| **Intro**    | Breathe   | 0.5x  | None       | Establish the "Mood".|
| **Verse**    | Sway      | 1.0x  | Subtle     | Keep the focus on the vocal.|
| **Pre-Hook** | Idle      | 1.5x  | Rising Size| Build tension/Anticipation.|
| **Hook**     | Dance 1   | 2.0x  | Max Pulse  | The "Explosion" of energy.|
| **Outro**    | Breathe   | 0.2x  | Fading     | Emotional resolution.|

---

## 7. Troubleshooting the Narrative
- **Issue:** "The mascot looks too jerky."
- **Fix:** Increase the **Smoothing** knob in the Peak Controller. Visual motion needs at least **50ms - 100ms** of smoothing to look "Professional" and not "Digital."
- **Issue:** "I can't see the mascot over the plugin windows."
- **Fix:** Ensure **'Stay on Top'** is enabled in the wrapper settings.

---

## 8. Conclusion: The Master of the Screen
Visual storytelling in Fruity Dance is about **Emotional Congruence.** When the visual movement of the mascot perfectly matches the technical energy of the audio, you achieve a "Flow State" for your audience. This is the difference between a "Beat Tape" and a **"Brand."** Follow this masterclass to turn your FL Studio screen into a high-value marketing asset that commands attention on social media.

---
**Document Version:** 1.0 (Masterclass Edition)
**Keywords:** Visual Narrative, Streaming Workflow, Fruity Dance Automation, Rhythmic Sync, Branding, FL Studio.

```

---

## FILE: 03-Workflows\by-goal\streaming-visual-companion.md

```markdown
# Masterclass: Designing a Reactive Streaming Visual Companion in Fruity Dance

## 1. Executive Summary: The "Branded Visual" Aesthetic
In the competitive world of Beat-Making streams, "Type Beat" YouTube channels, and live Twitch production (think producers like Kenny Beats or Nick Mira), the visual presentation is almost as important as the audio. A static screen is boring. A "Reactive Mascot" adds a professional, high-energy layer to your stream. This guide will show you how to turn **Fruity Dance** into a fully autonomous, audio-reactive visual companion that "bounces" and "dances" to your specific drums and melodies.

---

## 2. Phase 1: Logic Synchronization (The Rhythmic Link)

### 2.1 The "Pulse" Engine (Fruity Peak Controller)
To make the mascot "feel" the music, she needs to listen to the peak energy of your track.
1. **The Setup:** Insert a **Fruity Peak Controller** on your **Drum Bus** (or your Master track).
2. **The Goal:** We want to extract the "energy" of the Kick and Snare.
3. **The Tuning:** Adjust the **Base** and **Vol** knobs in Peak Controller so the white peak line "jumps" clearly with every drum hit.

### 2.2 Linking the Size (The Physical Bounce)
- **Action:** Go to Fruity Dance. Right-click the **Size** knob -> **Link to controller**.
- **Internal Controller:** Select **'Peak Controller - Peak'**.
- **The Formula:** Use `Input*0.2 + 0.4`.
- **The Result:** The mascot will now sit at 40% size by default and "pulse" up to 60% size every time your drums hit. This creates an incredible sense of "life" and "reactivity" for your viewers.

---

## 3. Phase 2: Rhythmic Choreography (The Performance)

### 3.1 The "Drop" Transition
You want the mascot to change her energy when the beat drops.
- **Workflow:** Set Fruity Dance to **Manual Mode**.
- **Piano Roll Logic:**
    - **Verse:** Place a long `C5` note. (Mascot just breathes slowly).
    - **The Fill:** Place four fast `F5` notes. (Mascot performs a rapid kick/jump sequence).
    - **The Hook:** Place a sustained `D5` note. (Mascot enters full-body Dance mode).
- **The "Cool" Factor:** Because this is programmed into your Playlist, the mascot will perform the exact same choreography every time you play the track, making your stream feel highly rehearsed and professional.

---

## 4. Phase 3: Visual Branding (The Aesthetic)

### 4.1 The Cyberpunk Overlay (Color Mapping)
Fruity Dance has a fixed color scheme, but we can "remap" her to match the repository's "Deep Space Cyberpunk" theme.
- **Action:** Place a **Fruity Color Enhancer** or **Fruity Fast Dist (Type A)** *after* Fruity Dance in the mixer.
- **The Hack:** Use the **Fruity Color Enhancer** to shift the hue towards **Purple and Cyan**.
- **The Result:** The mascot now glows with the same neon energy as your project, creating a cohesive brand identity.

---

## 5. Phase 4: Integration with OBS/Streaming Software

### 5.1 The "Green Screen" Technique
If you want to place the mascot over your webcam or a background, you need a "Transparent" window.
1. **FL Studio Setup:** Move Fruity Dance to a corner of the screen. Right-click wrapper -> **Detached** and **Stay on Top**.
2. **OBS Setup:**
    - Add a **'Window Capture'** source. Select the Fruity Dance window.
    - Add a **'Color Key'** filter to the capture.
    - Select the background color of the FL Studio window to make it transparent.
3. **The Result:** The mascot is now "floating" on your stream, reacting to your music in real-time.

---

## 6. Mathematical Reactivity Table
Use these formulas in the "Link to Controller" window to customize the bounce:

| Desired Movement | Mapping Formula | Vibe |
|------------------|-----------------|------|
| **Subtle Pulse** | `Input*0.1 + 0.5` | Moody / Chill |
| **Aggressive Bounce**| `Input*0.4 + 0.3` | Trap / High-Energy |
| **Inverse Pulse** | `0.8 - Input*0.3` | Psychedelic / Weird |
| **Stepped Pulse** | `Round(Input*4)/4` | Glitch / Robotic |

---

## 7. Troubleshooting the Mascot
- **Issue:** "She is bouncing too much and it's distracting."
- **Fix:** In Peak Controller, increase the **Decay** knob. This makes the bounce "smoother" and slower.
- **Issue:** "The mascot is lagging behind the music."
- **Fix:** Ensure you are not using heavy "Look-ahead" plugins on your Master bus. These add latency that can desync the visual from the audio.

---

## 8. Conclusion: The Master of the Stream
The reactive mascot is the "final 1%" of a professional producer's brand. By linking the mascot's physical size to your audio peak and her animation to your song structure, you move from "making a beat" to "putting on a show." Fruity Dance, combined with the power of internal controllers, is the easiest and most "cool" way to add high-value visual engagement to your production sessions.

---
**Document Version:** 1.0 (Masterclass Edition)
**Keywords:** Streaming Setup, OBS Integration, Reactive Visuals, Fruity Dance Workflow, Brand Identity, FL Studio.
```

---

## FILE: 03-Workflows\by-instrument\breakbeat-syncing.md

```markdown
# Syncing Mascot to Breakbeats Workflow

## Goal
Make the mascot perform complex, rhythmic jumps and moves that perfectly match an old-school jungle or industrial breakbeat.

## Steps
1. **Analyze the Break**: Identify the most important hits (Kick, Snare, Ghost notes).
2. **Insert Fruity Dance**: Set to **Manual**.
3. **Midi Programming**:
   - For every **Kick**: Place an `F5` (Jump) note.
   - For every **Snare**: Place a `D5` (Dance) note.
   - For every **Ghost Note**: Place a `C5` (Idle/Breathe) note.
4. **Visual Feedback**:
   - Play the breakbeat.
   - The mascot will now move with the same erratic, high-energy rhythm as the drums.
5. **The Finishing Touch**:
   - Link the **Size** knob to a **Peak Controller** on the drum track.
   - Now the mascot will physically pulse or "bounce" with the volume of the drums.

## Result
A highly reactive, customized visual companion that brings your complex drum programming to life.

```

---

## FILE: 04-Reference\00_Source_Log.md

```markdown
# Source Log: Fruity Dance

## Source ID: [SRC: IL-MAN]
- **Source:** Image-Line Official Manual - Fruity Dance.
- **Key Info:** Default character (FL Chan), MIDI note mapping for dance moves, speed and reflection parameter definitions.

## Source ID: [SRC: REPUTABLE]
- **Source:** FL Studio Mascot Community / Forums.
- **Key Info:** Sprite sheet dimensions (typically multiples of 8), creating custom `.txt` character definitions, and using the plugin as a silent metronome for rappers.

## Source ID: [SRC: UNVERIFIED]
- **Source:** Independent Producer Workflows.
- **Key Info:** Using visual "physics" to inspire drum programming and using the plugin for livestream branding.

## Coverage Checklist
- [x] MIDI Note Move Map
- [x] Custom Sprite Sheet Setup
- [x] Visual Metronome Workflow
- [x] Livestream Branding Strategy
- [x] 5 Vibe Targets
- [x] Always-on-top Visibility Rules
- [x] Resampling / Pattern Inspiration

```

---

## FILE: 04-Reference\03_Genre_Style_Board.md

```markdown
# Genre Style Board: Fruity Dance

## 1. The "Booth Buddy"
- **Mix Decision:** Silent visual conducter for the artist.
- **Vibe:** Focused/Professional.
- **Tooling:** Slow "Held" or "Sway" poses.

## 2. The "Twitch/YouTube" Branding
- **Mix Decision:** Interactive mascot for stream overlay.
- **Vibe:** Engaging/Unique.
- **Tooling:** Custom 8-frame Logo Sprite.

## 3. The "Abstract Metronome"
- **Mix Decision:** Using high-speed glitches to inspire hi-hat rolls.
- **Vibe:** Psychedelic/Glitchy.
- **Tooling:** Automated Speed slider + Random MIDI.

## 4. The "Rave" Build-up
- **Mix Decision:** Character jumps faster as the snare roll accelerates.
- **Vibe:** Upbeat/Hyper.
- **Tooling:** Automated Speed + "Jump" MIDI notes.

```

---

## FILE: 04-Reference\sprite-sheet-requirements.md

```markdown
# Reference: Sprite Sheet Requirements (Fruity Dance)

To create a functional character for Fruity Dance, your assets must follow these strict technical rules.

## 1. The Image File
- **Format:** PNG-24 or PNG-32.
- **Alpha:** Must have a transparent background.
- **Layout:** A horizontal strip of 8 frames.
- **Total Size:** 8x the width of a single frame.

## 2. The Frame Count
- Fruity Dance loops through exactly **8 frames** per row.
- Each row in the PNG represents a different "Dance Move" triggered by a different MIDI note.

## 3. The Definition File (.txt)
- Must be named identical to the image (e.g., `Ninja.txt` for `Ninja.png`).
- First line: The total number of animations (rows).
- Following lines: Names of the animations.

## 4. Scaling
- Use a power of 2 for frame width (e.g., 32, 64, 128 pixels). This ensures the cleanest rendering within the DAW. [SRC: REPUTABLE]

```

---

## FILE: 04-Reference\technical-docs\custom-sprite-development.md

```markdown
# Technical Manual: Developing Custom Sprite Sheets for Fruity Dance

## 1. Introduction: Owning the Visual Brand
In the era of "Type Beat" YouTube channels and Twitch production streams, your visual identity is as important as your tag. Fruity Dance is not locked to its default mascot (FL Chan). By understanding the **Sprite Sheet Protocol**, you can replace the default animation with your own custom branded character—a 2D version of yourself, a logo, or a psychedelic creature. This guide provides the exact technical specifications required to rebuild the visual heart of FL Studio.

---

## 2. Technical Specifications: The Sprite Matrix
Fruity Dance reads animation data from a single large `.png` file. This file is a **Grid** of frames.

### 2.1 Image Dimensions
- **Total Canvas Size:** 512 x 512 pixels (Standard) or 1024 x 1024 (High-Def).
- **Frame Size:** Each individual animation frame must be exactly **128 x 128 pixels**.
- **The Grid:** A 512x512 canvas allows for a **4x4 Grid** (16 total frames).

### 2.2 Color and Transparency
- **Format:** 32-bit PNG.
- **Transparency:** The background must be **Alpha-Transparent**.
- **Color Depth:** Standard RGB. Avoid using semi-transparent "glows" at the very edges of the 128px frame, as the scaling engine can sometimes create "halos" or "artifacts" during fast movement.

---

## 3. The Animation Logic (Frame Ordering)
The plugin "reads" the grid from top-left to bottom-right. To ensure your custom character moves correctly, you must follow the default sequence:

| Frame Index | Row / Col | Logic / Move |
|-------------|-----------|--------------|
| **0 - 3**   | Row 1     | **Breathe / Idle:** Soft vertical motion. |
| **4 - 7**   | Row 2     | **Dance 1:** Rhythmic side-to-side body movement. |
| **8 - 11**  | Row 3     | **Dance 2:** High-energy movement / Arm waves. |
| **12 - 15** | Row 4     | **Jump / Kick:** Vertical displacement frames. |

---

## 4. Deployment: The File Path
To activate your custom mascot, you must replace the internal asset.
- **Windows Path:** `C:\Program Files\Image-Line\FL Studio 21\Plugins\Fruity\Generators\Fruity Dance\Artwork\dance.png`
- **Master Strategy:** Do NOT overwrite the original. Rename the original to `dance_backup.png` and save your new sheet as `dance.png`.
- **The Wrapper Trick:** You can also change the **Background Color** of the plugin window by right-clicking the UI, allowing your custom mascot to "Pop" against a Cyberpunk neon or Deep Space purple background.

---

## 5. Rhythmic Calibration (BPM Sync)
Once your mascot is loaded, you must test the **Temporal Alignment**.
- **The 1.0x Rule:** At 1.0x speed, the plugin completes one full 4-frame "Breathe" cycle every 2 bars (at 120 BPM).
- **The High-Speed Hack:** If you want your custom mascot to move like a "Drill" dancer, design your 4-frame loop to happen in half the physical space, then set Fruity Dance to **2.0x Speed**.

---

## 6. Artistic Recommendations for Hip-Hop
- **The "Cool" Factor:** Give your mascot **Clothing Physics**. In the "Breathe" frames, make their jacket or hair move slightly. 
- **The "Psych" Factor:** Use vibrant, contrasting colors (Cyan/Pink) so the mascot is visible even when the viewer is watching on a small mobile screen.
- **The "Soul" Factor:** Make the "Dance" frames slightly **Off-Grid** (move the character 2 pixels early in the frame). This creates a "Swung" or "Drunken" visual groove that matches R&B timing.

---

## 7. Conclusion: The Visual Signature
Developing custom sprites for Fruity Dance is the ultimate way to **White-Label your DAW.** By replacing the generic mascot with a character that represents your unique "Sound DNA," you transform your production screen into a professional marketing asset. Follow these technical protocols, and your visual brand will be as tight and professional as your mix.

---
**Document Version:** 1.0 (Technical Blueprint)
**Keywords:** Custom Sprite Sheets, Fruity Dance Assets, Branded DAW, Graphic Design, Animation Math, FL Studio.

```

---

## FILE: 04-Reference\technical-docs\sprite-animation-logic.md

```markdown
# Sprite-Based Animation in FL Studio

## Animation Logic
Fruity Dance is a **Sprite-Sheet Player**. It does not perform 3D rendering or complex physics.
- **Sprite Sheet:** A single large image containing multiple "frames" of animation.
- **Framerate:** The speed at which Fruity Dance cycles through these frames is tied to the **Project BPM**.

## BPM Synchronization
When in **Auto Mode**:
- The internal counter follows the transport playhead.
- `1.0x Speed` means the animation cycle completes in one bar (usually).
- **Inertia:** The transitions between animations are handled via a simple fade or jump-cut to ensure zero latency.

## Memory Management
Because the mascot is composed of low-resolution 2D bitmaps, the memory footprint is negligible (usually <5MB). 
- **Legacy:** This plugin is a nod to FL Studio's roots and the "FL Chan" mascot culture, providing a lighthearted visual element to the otherwise technical DAW environment.

```

---

