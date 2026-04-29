# Dashboard Parameter Cheat Sheet

## Overview
Dashboard is FL Studio's comprehensive visual monitoring plugin that provides real-time feedback on audio levels, spectrum, and performance metrics. This cheat sheet details all parameters and their applications in hip-hop, rap, and R&B production.

## Display Mode Parameters

### Main Display Types
- **Scope Mode**: Real-time waveform visualization
  - Shows amplitude over time
  - Essential for detecting transients and clipping
  - Great for identifying kick/snare attack characteristics
  - Use for checking vocal dynamics and breath control

- **Spectrum Mode**: Frequency domain visualization
  - Displays amplitude across frequency spectrum
  - Critical for identifying frequency conflicts between 808s and kicks
  - Essential for ensuring vocals cut through the mix
  - Use to identify harsh frequencies in synths and samples

- **Meter Mode**: Level metering for amplitude monitoring
  - Peak and RMS measurements
  - Clip detection and prevention
  - Stereo field monitoring
  - Use for maintaining consistent loudness in verses/chrous

- **Peak Mode**: Maximum level monitoring
  - Hold indicators for peak detection
  - Useful for broadcast compliance in mastered tracks
  - Helps prevent clipping in aggressive hip-hop mixes

### Display Configuration Parameters

#### Scale Settings
- **dB Range**: Adjusts the dynamic range display
  - Typical values: -60dB to 0dB, -48dB to +6dB
  - Use wider range (-72dB) for detailed low-level content analysis
  - Use compressed range (-24dB) for focusing on louder elements
  - Hip-hop tip: Use -48dB to +6dB for trap productions with aggressive kicks

- **Frequency Range** (Spectrum mode):
  - Full spectrum: 20Hz to 20kHz
  - Low-end focus: 20Hz to 200Hz (perfect for 808 analysis)
  - Mid-range focus: 200Hz to 5kHz (vocal clarity analysis)
  - High-end focus: 5kHz to 20kHz (hi-hat and sizzle monitoring)

#### Refresh Rate Controls
- **Update Speed**: Controls how frequently the display refreshes
  - Slow (15 fps): Lower CPU usage, sufficient for general monitoring
  - Medium (30 fps): Good balance of responsiveness and efficiency
  - Fast (60 fps): Highest CPU usage, best for detailed transient analysis
  - Hip-hop tip: Use Medium for mixing, Fast when analyzing complex 808 layers

#### Color Customization
- **Waveform Color**: Changes the color of scope displays
- **Spectrum Color**: Adjusts spectrum analyzer color scheme
- **Meter Color**: Customizes meter appearance
- **Grid Color**: Sets grid/overlay colors
- Hip-hop tip: Use high-contrast colors for quick visual identification of problem areas

## Metering Parameters

### Peak Hold Settings
- **Hold Duration**: How long peak indicators remain visible
  - Short (0.5s): Good for detecting momentary peaks
  - Medium (2s): Ideal for general monitoring
  - Long (5s): Best for identifying consistent overages
  - Infinite: Permanently holds highest peak until reset
  - Hip-hop tip: Use Medium hold for vocal tracking, Infinite for checking master output

### Meter Response Characteristics
- **Ballistics**: How meters respond to level changes
  - Fast: Immediate response, good for transients
  - Medium: Balanced response, ideal for general use
  - Slow: Averaged response, good for program levels
  - Hip-hop tip: Use Fast for drums, Medium for vocals, Slow for overall mix

### Reference Level Markers
- **0dB Reference**: Sets the main reference point
- **Warning Markers**: Customizable warning thresholds
- **Clip Point**: Visual indication of clipping level
- Hip-hop tip: Set warning markers at -6dB for mastering, -3dB for mixing

## Spectrum Analysis Parameters

### Resolution Settings
- **FFT Size**: Determines frequency resolution
  - 512 points: Lower resolution, faster response
  - 1024 points: Standard resolution
  - 2048 points: Higher resolution, slower response
  - 4096 points: Highest resolution, best for detailed analysis
  - Hip-hop tip: Use 1024 for general mixing, 2048 for 808/sub-bass analysis

### Window Type
- **Rectangular**: Sharpest frequency resolution
- **Hann**: Good balance of frequency and amplitude accuracy
- **Hamming**: Reduced spectral leakage
- **Blackman**: Excellent for general analysis
- Hip-hop tip: Hann window works best for general mixing applications

### Smoothing
- **Off**: Raw spectrum display
- **Light**: Slight averaging for smoother display
- **Medium**: Moderate smoothing
- **Heavy**: Highly averaged display
- Hip-hop tip: Use Light smoothing for general work, Off for detailed analysis

## Stereo Field Parameters

### Phase Correlation
- **Phase Meter**: Shows stereo field integrity
  - Values from -1.0 (fully out of phase) to +1.0 (fully in phase)
  - Center values (+0.5 to +1.0) indicate good mono compatibility
  - Side values (-0.5 to -1.0) show wide stereo elements
  - Hip-hop tip: Keep vocals and kicks near +1.0 for mono playback safety

### Stereo Width Measurement
- **Width Display**: Shows stereo field width
- **Mid/Side Ratio**: Balance between center and side information
- Hip-hop tip: Use for checking if 808s are too wide (can cause mono issues)

### Correlation Markers
- **Safe Zone**: Indicates acceptable phase correlation
- **Warning Zone**: Shows potentially problematic correlation
- **Danger Zone**: Indicates severe phase issues
- Hip-hop tip: Keep kicks and 808s in safe zone for club playback

## Performance Monitoring Parameters

### System Resource Display
- **CPU Usage**: Shows processor load
- **Memory Usage**: Displays RAM consumption
- **Buffer Status**: Indicates audio buffer health
- **Latency Display**: Shows system response time
- Hip-hop tip: Monitor during complex sessions with many samples and plugins

### Performance Optimization
- **Display Efficiency**: Reduces visual processing load
- **Background Processing**: Optimizes resource usage
- Hip-hop tip: Use efficiency settings during CPU-intensive sessions

## Genre-Specific Parameter Sets

### Hip-Hop/Rap Mixing Setup
- Display Mode: Spectrum (for frequency analysis)
- dB Range: -48dB to +6dB
- FFT Size: 2048 points
- Window: Hann
- Refresh Rate: Medium
- Phase Correlation: Enabled
- Peak Hold: Medium duration
- Warning Markers: -3dB for clipping prevention

### R&B Vocal Production Setup
- Display Mode: Meter (for level consistency)
- dB Range: -60dB to 0dB
- Refresh Rate: Fast
- Ballistics: Medium
- Peak Hold: Long (for catching vocal peaks)
- Warning Markers: -6dB for headroom

### Trap/808 Production Setup
- Display Mode: Spectrum (low-end focus: 20Hz-200Hz)
- FFT Size: 4096 points
- Window: Blackman
- Phase Correlation: Critical monitoring
- Warning Markers: -1dB for aggressive limiting

### Mastering Setup
- Display Mode: Combined (Meter + Spectrum)
- dB Range: -72dB to +6dB
- Peak Hold: Infinite
- Warning Markers: -1dB for true peak limiting
- Refresh Rate: Medium (balance accuracy and CPU)

## Workflow Applications

### Low-End Management (Hip-Hop Focus)
1. Set Spectrum mode with 20Hz-200Hz range
2. Use 2048-point FFT with Hann window
3. Monitor for frequency conflicts between kick and 808
4. Look for buildup around 60-80Hz that might muddy the mix
5. Use phase correlation to ensure mono compatibility

### Vocal Clarity Enhancement
1. Use Spectrum mode to identify frequency range of lead vocals
2. Look for competing elements in 1-5kHz range
3. Use Meter mode to maintain consistent vocal levels
4. Monitor for clipping during ad-libs and aggressive rap delivery
5. Check stereo positioning with correlation meter

### Stereo Imaging Control
1. Use correlation meter to check mono compatibility
2. Monitor stereo width of different elements
3. Ensure kicks and bass are centered (high correlation)
4. Verify wide elements don't cause phase issues
5. Use spectrum view to check for stereo imbalances

## Troubleshooting Parameters

### When to Use Each Display Mode
- **Scope Mode**: Detecting transients, checking for clipping, analyzing waveform shape
- **Spectrum Mode**: EQ decisions, frequency conflict resolution, harmonic analysis
- **Meter Mode**: Level consistency, clip prevention, loudness monitoring
- **Peak Mode**: True peak detection, broadcast compliance, mastering

### Common Issues and Solutions
- **Display Lag**: Reduce refresh rate or FFT size
- **Inconsistent Readings**: Check sample rate compatibility
- **High CPU Usage**: Use lower resolution or slower refresh
- **Confusing Visuals**: Simplify display by disabling grid overlays

## Integration with Hip-Hop Production Chain

### With Compressors
- Monitor gain reduction visually
- Check for pumping artifacts
- Verify consistent vocal levels

### With EQs
- Compare before/after spectrum analysis
- Identify over-EQed frequencies
- Validate surgical cuts

### With Limiters
- Monitor true peak levels
- Check for inter-sample peaks
- Ensure broadcast compliance

## Quick Reference for Session Start

### Standard Hip-Hop Setup
1. Spectrum mode: 20Hz-20kHz, 1024pt FFT, Hann window
2. Meter mode: Medium ballistics, medium peak hold
3. Phase correlation enabled
4. Warning markers at -3dB
5. Refresh rate: Medium

### 808/SUB Focus Setup
1. Spectrum mode: 20Hz-200Hz, 2048pt FFT, Blackman window
2. Phase correlation: Critical monitoring
3. Warning markers: -1dB
4. Refresh rate: Medium

### Vocal Focus Setup
1. Meter mode: Fast ballistics, long peak hold
2. Spectrum mode: 1kHz-8kHz focus
3. Warning markers: -6dB
4. Refresh rate: Fast

---

**Last Updated**: February 2026
**Focus**: Hip-Hop, Rap, R&B Production Applications
**Primary Use Cases**: Mixing, Mastering, Low-End Management, Stereo Imaging