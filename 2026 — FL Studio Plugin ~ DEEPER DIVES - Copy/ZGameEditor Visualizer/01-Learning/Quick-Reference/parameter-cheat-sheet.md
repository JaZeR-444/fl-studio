# ZGameEditor Visualizer - Parameter Cheat Sheet

**Plugin Type:** Audio-Reactive Visualization Engine
**Category:** Visual Effects / Live Performance / Video Creation
**Official Manual:** [ZGameEditor Visualizer](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/ZGameEditor%20Visualizer.htm)

---

## Core Concept

**ZGameEditor Visualizer** = Programmable visual effects that react to audio in real-time
- **Audio Reactive:** Visuals respond to music's frequency, amplitude, and rhythm
- **Customizable:** Extensive preset library + user programming capability
- **Render to Video:** Export visuals as video files for YouTube, social media

---

## Main Display Window

| Element | Function | Use |
|---------|----------|-----|
| **3D Viewport** | Main visualization display | Shows real-time visuals |
| **Preset Browser** | Access built-in visualizations | 100+ factory presets |
| **Layer System** | Stack multiple effects | Combine visuals for complexity |
| **Performance Monitor** | FPS and CPU usage | Optimize for smooth playback |

---

## Preset Categories

| Category | Description | Example Presets |
|----------|-------------|-----------------|
| **Audio Spectrum** | Frequency-based bars/circles | Classic spectrum analyzer |
| **Particles** | Particle systems synced to audio | Particle explosions, trails |
| **Tunnels** | 3D tunnel effects | Retro tunnel flying |
| **Fractals** | Mathematical patterns | Mandelbrot, Julia sets |
| **Waves** | Waveform displays | Oscilloscope-style |
| **Abstract** | Artistic visual effects | Kaleidoscopes, morphing shapes |
| **Retro** | 80s/90s style visualizations | Winamp-inspired effects |

---

## Audio Reactivity Parameters

| Parameter | Range | Function | Quick Tip |
|-----------|-------|----------|-----------|
| **Bass Reactivity** | 0-200% | Low frequency response | Kick drum triggering |
| **Mid Reactivity** | 0-200% | Mid frequency response | Snare, vocals |
| **High Reactivity** | 0-200% | High frequency response | Hi-hats, cymbals |
| **Peak Sensitivity** | 0-100% | Transient detection | Quick hits vs sustained |
| **Smoothing** | 0-100% | Audio analysis smoothing | Lower = more responsive, higher = smoother |

---

## Visual Customization

| Control | Function | Creative Use |
|---------|----------|--------------|
| **Color Palette** | Set visual color scheme | Match branding, mood |
| **Camera Controls** | Position, rotation, FOV | Cinematic movements |
| **Particle Count** | Density of particle effects | More = detailed but CPU heavy |
| **Layer Opacity** | Blend multiple layers | Create complex composites |
| **Blur/Glow** | Post-processing effects | Add atmosphere |

---

## Quick Start Presets by Genre

| Genre | Recommended Preset Types |
|-------|--------------------------|
| **EDM** | Particles, spectrum bars, neon tunnels |
| **Hip-Hop** | Bass-reactive particles, waveforms |
| **Ambient** | Slow-moving fractals, waves |
| **Rock** | Spectrum analyzer, oscilloscope |
| **Techno** | Minimal geometric shapes, tunnels |
| **Lo-Fi** | Retro VHS effects, soft particles |

---

## Rendering to Video

### Export Settings

| Parameter | Recommended | Notes |
|-----------|-------------|-------|
| **Resolution** | 1920x1080 (1080p) | Standard YouTube/social |
| **Frame Rate** | 60 FPS | Smooth motion |
| **Codec** | H.264/MP4 | Universal compatibility |
| **Bitrate** | 10-20 Mbps | Quality vs file size |

### Render Workflow
1. **Prepare Project:** Finalize audio mix
2. **Choose Preset:** Select/customize visualization
3. **Set Export Range:** Start/end points
4. **Configure Settings:** Resolution, FPS, codec
5. **Render:** File > Export > Video
6. **Monitor:** Watch for dropped frames

---

## Performance Optimization

| Issue | Solution |
|-------|----------|
| **Low FPS** | Reduce particle count, lower resolution |
| **Stuttering** | Increase buffer size, close other apps |
| **High CPU** | Use simpler presets, disable anti-aliasing |
| **Render Crashes** | Export in smaller sections, increase RAM allocation |

**Target:** 60 FPS for smooth real-time playback

---

## Layer System

### How Layers Work
- **Stack Multiple Effects:** Up to 8 layers
- **Blend Modes:** Add, multiply, screen, etc.
- **Independent Parameters:** Each layer customizable
- **Opacity Control:** Fade layers in/out

### Layer Strategy
1. **Background Layer:** Base color or gradient
2. **Main Effect:** Primary visualization (e.g., spectrum)
3. **Accent Layers:** Particles, overlays
4. **Post FX Layer:** Glow, blur, color grading

---

## Audio Analysis Targets

| Frequency Band | Typical Instrument | Visual Mapping |
|----------------|-------------------|----------------|
| **Sub (20-60Hz)** | Kick drum, sub bass | Size, scale, position |
| **Bass (60-250Hz)** | Bass guitar, low synth | Primary movement |
| **Mid (250Hz-2kHz)** | Vocals, snare, guitar | Color shifts, rotation |
| **High (2kHz-8kHz)** | Hi-hats, cymbals | Particle emission, flicker |
| **Presence (8kHz+)** | Sibilance, air | Brightness, glow |

---

## Camera Controls

| Control | Function | Creative Use |
|---------|----------|--------------|
| **Position (X/Y/Z)** | Camera location | Fly-throughs, orbits |
| **Rotation** | Camera angle | Spinning, tilting |
| **Field of View** | Lens width | Wide-angle vs telephoto |
| **Automation** | Animate camera over time | Dynamic cinematics |

---

## Preset Modification

### Beginner Customization
1. **Load Preset** from factory library
2. **Adjust Colors** to match your brand
3. **Tweak Reactivity** for your audio's dynamics
4. **Save As New Preset** for future use

### Advanced Programming
- **ZGameEditor Language:** Script custom visuals
- **Community Resources:** Download user presets
- **Tutorial Videos:** Official and community guides

---

## Live Performance Setup

### VJ (Video Jockey) Workflow
1. **Load Multiple Presets** in different slots
2. **MIDI Map Preset Switching** to controller
3. **Automate Parameters** for live tweaking
4. **Output to Projector/LED Wall**

### MIDI Control
- **Map to Faders:** Reactivity, opacity, colors
- **Map to Pads:** Preset switching
- **Map to Knobs:** Camera position, effects

---

## Social Media Optimization

### YouTube
- **Resolution:** 1920x1080 or 3840x2160 (4K)
- **Aspect Ratio:** 16:9
- **FPS:** 60
- **Tip:** Add simple logo overlay

### Instagram
- **Resolution:** 1080x1080 (square) or 1080x1920 (vertical)
- **Aspect Ratio:** 1:1 or 9:16
- **Duration:** 60 seconds max (feed), unlimited (IGTV)

### TikTok
- **Resolution:** 1080x1920 (vertical)
- **Aspect Ratio:** 9:16
- **FPS:** 30-60
- **Tip:** Fast-moving visuals for engagement

---

## Genre-Specific Visual Styles

### Synthwave/Outrun
- **Colors:** Neon pink, purple, cyan
- **Effects:** Retro tunnels, grid floors
- **Camera:** Low angle, moving forward
- **Reactivity:** Moderate, smooth

### Dubstep/Bass Music
- **Colors:** Dark with bright accents
- **Effects:** Heavy bass-reactive particles
- **Camera:** Aggressive movements
- **Reactivity:** High, explosive

### Ambient/Chillout
- **Colors:** Pastels, earth tones
- **Effects:** Slow fractals, soft waves
- **Camera:** Slow drifts, static
- **Reactivity:** Low, gentle

### Minimal Techno
- **Colors:** Monochrome or limited palette
- **Effects:** Geometric shapes, simple patterns
- **Camera:** Subtle, repetitive
- **Reactivity:** Precise, quantized

---

## Common Mistakes to Avoid

1. **Over-Reactivity:** Visuals too chaotic (reduce sensitivity)
2. **Low FPS in Render:** CPU overload (simplify preset or render offline)
3. **Color Clashing:** Too many competing colors (stick to 2-3 main colors)
4. **Static Visuals:** No camera movement (automate camera for interest)
5. **No Audio Preview:** Rendering without checking audio sync (always preview first)

---

## CPU & Performance

- **CPU Usage:** Moderate to very high (depends on preset complexity)
- **GPU Acceleration:** Limited (primarily CPU-based)
- **Optimization:** Reduce particle count, disable AA, lower resolution
- **Realtime:** Suitable for live VJ work on powerful systems

---

## File Management

### Preset Storage
- **Factory Presets:** Built-in, read-only
- **User Presets:** Save custom visuals
- **Location:** Documents\Image-Line\FL Studio\Presets\Plugin presets\Effects\ZGameEditor Visualizer\

### Video Export
- **Format:** MP4, AVI, or image sequence
- **Location:** Choose output folder before rendering
- **Tip:** Use descriptive filenames (e.g., "SongName_Visual_1080p60")

---

## Automation Ideas

1. **Preset Switching:** Change presets at song sections (verse, chorus, drop)
2. **Color Shifts:** Automate color changes for builds/drops
3. **Reactivity Ramps:** Increase bass reactivity leading to drop
4. **Camera Movements:** Zoom in/out during transitions
5. **Layer Opacity:** Fade layers in/out for complexity changes

---

## Related Plugins & Tools

### FL Studio Native
- **Wave Candy** - Simple spectrum analyzer (less powerful)
- **Video Player** - Import pre-rendered video

### External Visualization Tools
- **Resolume Arena** - Professional VJ software
- **Magic Music Visuals** - Standalone visualizer
- **VSXU** - Open-source visual programming
- **Processing** - Creative coding for visuals

---

## Community & Resources

### Official Resources
- **FL Studio Manual:** Comprehensive ZGE guide
- **Image-Line Forum:** Preset sharing, troubleshooting
- **Official YouTube:** Tutorial videos

### Community Presets
- **Download:** User-created presets from forums
- **Upload:** Share your custom visuals
- **Collaborate:** Request custom visuals from community

### Learning ZGameEditor Programming
- **ZGameEditor Website:** Official language documentation
- **Tutorials:** Step-by-step programming guides
- **Examples:** Deconstructing factory presets

---

## Quick Troubleshooting

### Visuals Not Responding to Audio
- **Check:** Plugin is receiving audio input
- **Verify:** Reactivity parameters not at 0%
- **Solution:** Route audio correctly to ZGE track

### Render is Choppy
- **Solution:** Render offline (not real-time)
- **Tip:** Close all other applications during render

### Wrong Aspect Ratio
- **Check:** Resolution settings match target platform
- **Fix:** Reconfigure before rendering

---

**Last Updated:** February 3, 2026
**Status:** Complete reference material
