# Live Performance Setup with Dashboard

## Overview
Dashboard is an essential tool for live hip-hop, rap, and R&B performances, providing real-time visual feedback on audio levels, frequency content, and system performance. This workflow details how to configure and use Dashboard effectively during live shows.

## Prerequisites
- FL Studio with Dashboard plugin
- Adequate CPU resources for live performance
- Proper audio interface setup
- Tested performance configuration
- Backup plans for technical issues

## Setup Configuration

### 1. Master Bus Installation (5 minutes)
1. Insert Dashboard on the master bus in FL Studio
2. Position it as the last plugin in the master chain
3. Configure for minimal CPU impact:
   - Set refresh rate to "Slow" or "Medium"
   - Disable unnecessary visual elements
   - Use 512-point FFT for faster response
4. Ensure Dashboard doesn't alter the audio signal

### 2. Performance Mode Configuration (10 minutes)
1. Select "Meters" display mode for quick level monitoring
2. Set dB range to -48dB to +6dB for performance monitoring
3. Enable phase correlation display to monitor stereo field
4. Set peak hold to "Medium" duration for catching issues
5. Configure warning markers at -3dB for safety headroom

### 3. Screen Layout Optimization (10 minutes)
1. Position Dashboard window for easy viewing during performance
2. Resize to show essential information clearly
3. Use high-contrast color scheme for visibility
4. Disable grid overlay to reduce visual clutter
5. Pin Dashboard window to stay on top during performance

## Performance Monitoring Workflows

### Pre-Performance Checks (15 minutes)
1. **System Health Verification**:
   - Check CPU usage stays below 70% during complex sections
   - Verify Dashboard isn't causing performance issues
   - Test all audio outputs for proper levels
   - Confirm phase correlation is stable

2. **Level Calibration**:
   - Play reference material to verify meter accuracy
   - Set warning markers appropriately for venue
   - Test peak detection with known signals
   - Verify stereo field monitoring works correctly

3. **Signal Path Verification**:
   - Confirm all tracks route properly to master
   - Test mute/solo functions don't break monitoring
   - Verify sends and returns are monitored correctly
   - Check that automation doesn't affect Dashboard

### During Performance Monitoring (Ongoing)

#### Level Management
1. **Watch for Clipping**:
   - Monitor red overload indicators constantly
   - Pay special attention during drops and builds
   - Watch for inter-sample peaks in aggressive sections
   - Maintain consistent levels between songs

2. **Dynamic Range Awareness**:
   - Ensure rap vocals maintain presence during loud sections
   - Monitor 808 levels for consistent low-end impact
   - Check that quiet verses don't get lost
   - Verify snare hits cut through busy sections

#### Frequency Content Monitoring
1. **Low-End Management**:
   - Watch for 808/kick conflicts during bass-heavy sections
   - Monitor for low-end buildup that could overwhelm system
   - Ensure 808s remain tight and defined
   - Check for frequency cancellation in stereo 808s

2. **Vocal Clarity**:
   - Monitor presence range (2-5kHz) for rap clarity
   - Watch for frequency masking during dense sections
   - Ensure vocals cut through instrumental during hooks
   - Check for harsh frequencies during aggressive rap delivery

#### Stereo Field Monitoring
1. **Phase Correlation**:
   - Monitor phase correlation during stereo-heavy sections
   - Watch for elements that might cause mono issues
   - Ensure kicks and 808s remain mono-compatible
   - Verify wide elements don't cause phase problems

2. **Stereo Width**:
   - Monitor overall stereo width during different sections
   - Check that wide elements don't overwhelm center content
   - Verify spatial elements translate well to different systems
   - Watch for stereo imbalance between left/right

### Post-Performance Analysis (10 minutes)
1. **Review Peak History**:
   - Check for any clipping incidents during performance
   - Note sections that approached warning levels
   - Identify consistent level issues
   - Document any monitoring insights

2. **System Performance**:
   - Review CPU usage patterns during performance
   - Note any Dashboard-related performance issues
   - Assess the effectiveness of monitoring setup
   - Plan improvements for future performances

## Genre-Specific Performance Considerations

### Hip-Hop Performance Setup
1. **Low-End Focus**:
   - Emphasize monitoring of 40-100Hz range for 808s
   - Watch for kick/808 frequency conflicts
   - Monitor for low-end buildup during bass-heavy sections
   - Ensure club system compatibility

2. **Energy Management**:
   - Monitor level consistency between energetic sections
   - Watch for dynamic range preservation in conscious rap
   - Ensure aggressive sections don't clip the system
   - Maintain punch in boom-bap productions

### Rap Performance Setup
1. **Vocal Clarity**:
   - Focus on 1-5kHz range for vocal presence
   - Monitor for frequency conflicts with vocals
   - Ensure rap lyrics remain intelligible
   - Watch for sibilance issues during fast delivery

2. **Dynamic Range**:
   - Monitor the wide dynamic range typical in rap
   - Ensure quiet ad-libs remain audible
   - Watch for compression artifacts during aggressive delivery
   - Maintain vocal presence during loud instrumental sections

### R&B Performance Setup
1. **Smooth Transitions**:
   - Monitor for smooth level transitions between sections
   - Watch for harsh frequencies in smooth R&B vocals
   - Ensure harmonic content remains rich and full
   - Maintain spatial depth during performance

2. **Vocal Processing**:
   - Monitor effects sends and returns during performance
   - Watch for vocal processing artifacts
   - Ensure harmony stacks remain balanced
   - Check for natural vocal tone preservation

## Troubleshooting Common Performance Issues

### High CPU Usage
1. **Symptoms**: Dashboard causing audio dropouts or lag
2. **Solutions**:
   - Reduce refresh rate to "Slow"
   - Lower FFT size to 512 points
   - Disable smoothing and persistence
   - Close other visual plugins temporarily

### Inaccurate Readings
1. **Symptoms**: Meters showing incorrect levels or clipping
2. **Solutions**:
   - Verify sample rate matches project settings
   - Check for plugin ordering issues
   - Test with known reference material
   - Recalibrate warning markers

### Visual Distractions
1. **Symptoms**: Dashboard display too busy during performance
2. **Solutions**:
   - Disable unnecessary visual elements
   - Use simpler display modes (Meters vs. Spectrum)
   - Increase warning marker visibility
   - Simplify color scheme

### Phase Issues
1. **Symptoms**: Phase correlation showing problems during stereo content
2. **Solutions**:
   - Check stereo track routing
   - Verify no polarity inversions
   - Monitor during stereo-specific sections
   - Prepare fallback mono versions if needed

## Advanced Performance Techniques

### Multi-Instance Monitoring
1. **Setup**: Use multiple Dashboard instances for different purposes
2. **Applications**:
   - Master bus monitoring for overall levels
   - Drum bus monitoring for punch and clarity
   - Vocal bus monitoring for presence and clarity
   - Reference monitoring for consistency

2. **Configuration**:
   - Use different display modes for each instance
   - Optimize each for specific monitoring needs
   - Manage CPU usage across all instances
   - Organize screen layout efficiently

### Automation Integration
1. **Dashboard Parameters**: Automate certain Dashboard parameters during performance
2. **Applications**:
   - Switch display modes during different sections
   - Adjust warning markers for different songs
   - Modify refresh rate based on complexity
   - Change color schemes for visibility

### Reference Comparison
1. **Setup**: Use Dashboard to compare live performance to reference tracks
2. **Applications**:
   - Match energy levels to commercial releases
   - Verify frequency balance matches references
   - Compare stereo imaging to professional tracks
   - Ensure dynamic range is appropriate

## Performance Optimization Tips

### CPU Management
- Use lower resolution settings during performance
- Disable unnecessary visual features
- Consider using Dashboard only on critical tracks
- Monitor overall system performance continuously

### Visual Clarity
- Use high-contrast settings for stage visibility
- Position Dashboard for easy viewing angle
- Minimize visual clutter during performance
- Focus on essential monitoring information

### Reliability
- Test Dashboard extensively before performance
- Have backup monitoring methods available
- Verify Dashboard doesn't interfere with audio
- Prepare for potential plugin failures

## Integration with Performance Setup

### Hardware Controllers
- Map Dashboard parameters to hardware controls
- Use faders for adjusting monitoring parameters
- Assign buttons to switch display modes
- Integrate with performance pad controllers

### Lighting Integration
- Use Dashboard data for synchronized lighting
- Trigger lights based on peak levels
- Sync lighting to frequency content
- Create visual feedback for audience

### Recording Integration
- Record Dashboard data for post-performance analysis
- Capture meter readings for later review
- Document performance parameters
- Create reference for future performances

## Success Metrics

### During Performance
- [ ] No clipping incidents during performance
- [ ] Consistent level management throughout
- [ ] Clear monitoring of critical elements
- [ ] Effective identification of issues
- [ ] Smooth operation without performance impact

### Post-Performance
- [ ] All monitoring objectives met
- [ ] No technical issues caused by Dashboard
- [ ] Valuable data collected for improvement
- [ ] Audience feedback on audio quality
- [ ] Successful identification of improvement areas

## Conclusion

Dashboard is an invaluable tool for live hip-hop, rap, and R&B performances when properly configured. By following this workflow, performers can maintain audio quality, prevent technical issues, and deliver consistent performances. Regular practice with Dashboard monitoring will improve performance quality and provide confidence during live shows.

Remember to test all configurations extensively before live performance and always have backup plans in case of technical issues. The goal is to enhance performance quality while maintaining reliability and audience satisfaction.

---

**Created**: February 2026  
**Focus**: Live Performance for Hip-Hop, Rap, and R&B  
**Skill Level**: Intermediate to Advanced  
**Estimated Setup Time**: 45 minutes