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
```
ProjectName_AudioMix_Version_Date.wav

Examples:
MusicVideo_FinalMix_v3_20260204.wav
ShortFilm_Score_v1_20260204.wav
Commercial_Audio_Final_20260204.wav
```

### Include Sync Documentation
Create a text file with sync information:
```
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
```

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
