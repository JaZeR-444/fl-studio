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
```
Video Timeline (seconds) → FL Studio Timeline (bars/beats)
00:00 → Bar 1
00:02 → Bar 2 (at 120 BPM)
00:04 → Bar 3 (at 120 BPM)
```

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
