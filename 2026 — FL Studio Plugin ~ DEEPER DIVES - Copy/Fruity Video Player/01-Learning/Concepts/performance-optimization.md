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
```
Buffer Length: 512-1024 samples (video playback)
Sample Rate: 44.1kHz or 48kHz (match video)
Mixing: Async (for video sync)
```

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
