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
