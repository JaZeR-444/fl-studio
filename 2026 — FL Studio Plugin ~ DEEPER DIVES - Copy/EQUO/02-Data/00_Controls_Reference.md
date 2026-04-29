# EQUO - Controls Reference

## Parameter List with Descriptions

### EQ Bank Controls

**Bank Selectors (1-8)**
- **Description**: Selects which of the 8 EQ banks to edit or activate
  - Each bank stores a complete EQ curve configuration
  - Banks can be morphed between using the X/Y pad
  - Useful for storing different EQ shapes for different sections
- **Range**: 1-8 (fixed)
- **Effect**: Changes which EQ configuration is active or being edited
- **Use for**: Storing different EQ curves for morphing
- **Pro tip**: Use different banks for different frequency responses (e.g., low-pass, high-pass, band-pass)

**X/Y Morph Pad**
- **Description**: Controls interpolation between different EQ banks
  - X-axis typically controls morphing between banks 1-4
  - Y-axis typically controls morphing between banks 5-8
  - Allows real-time morphing between different EQ curves
- **Range**: X: 0-100%, Y: 0-100%
- **Effect**: Interpolates between stored EQ curves based on pad position
- **Use for**: Real-time EQ curve morphing and automation
- **Pro tip**: Use with automation for evolving filter sweeps

### Drawing Tools

**Pencil Tool**
- **Description**: Allows freehand drawing of EQ curves
  - Creates organic, irregular EQ shapes
  - Good for subtle, musical EQ adjustments
- **Effect**: Enables freehand EQ curve drawing
- **Use for**: Organic EQ shaping and subtle adjustments
- **Pro tip**: Use for creating natural-sounding EQ curves

**Line Tool**
- **Description**: Draws straight line segments between points
  - Creates angular, precise EQ shapes
  - Good for surgical EQ adjustments
- **Effect**: Enables linear EQ curve drawing
- **Use for**: Precise EQ shaping and surgical adjustments
- **Pro tip**: Use for creating sharp filter cutoffs

**Curve Tool**
- **Description**: Draws smooth, curved segments
  - Creates musical, smooth EQ shapes
  - Good for natural-sounding EQ adjustments
- **Effect**: Enables smooth curve EQ drawing
- **Use for**: Musical EQ shaping and smooth transitions
- **Pro tip**: Use for creating musical-sounding EQ curves

### Processing Mode Controls

**VOL (Volume) Mode**
- **Description**: Standard volume-based EQ processing
  - Adjusts amplitude at different frequencies
  - Traditional EQ behavior
- **Effect**: Applies gain adjustments to frequency bands
- **Use for**: Standard EQ applications
- **Pro tip**: Use for traditional EQ tasks

**PAN (Panning) Mode**
- **Description**: Frequency-based panning
  - Adjusts stereo position of different frequencies
  - Creates stereo imaging effects
- **Effect**: Pans different frequencies to different positions in stereo field
- **Use for**: Stereo enhancement and imaging
- **Pro tip**: Use for creating wide, immersive stereo fields

**SEND Mode**
- **Description**: Frequency-dependent send levels
  - Sends different frequencies to different destinations
  - Useful for frequency-specific effects routing
- **Effect**: Routes different frequencies to different outputs
- **Use for**: Frequency-specific effects processing
- **Pro tip**: Use for routing different frequencies to different effects

### Core Parameter Controls

**Shift Knob**
- **Description**: Frequency shifting control
  - Shifts entire EQ curve left or right
  - Creates phaser-like or pitch-shifting effects
- **Range**: Negative to positive values (typically -100% to +100%)
- **Effect**: Moves all frequency bands by the same amount
- **Use for**: Creating pitch-shift or phaser-like effects
- **Pro tip**: Use with automation for doppler-style effects

**Bandwidth Knob**
- **Description**: Controls interaction between adjacent bands
  - Low values create comb-filter effects
  - High values create smooth curves
- **Range**: 0-100% (typically)
- **Effect**: Adjusts how much adjacent bands affect each other
- **Use for**: Creating comb-filter effects or smooth curves
- **Pro tip**: Use low values for metallic, resonant effects

**Mix Knob**
- **Description**: Dry/Wet blend control
  - 0%: Completely dry (original signal)
  - 100%: Completely wet (processed signal)
- **Range**: 0-100%
- **Effect**: Blends original and processed signals
- **Use for**: Controlling intensity of processing
- **Pro tip**: Use for parallel processing and transparency

### Analysis Function

**Analyze Button**
- **Description**: Analyzes input signal and creates matching EQ curve
  - Creates inverse curve to flatten frequency response
  - Creates matching curve to match reference
- **Effect**: Automatically generates EQ curve based on input
- **Use for**: Matching EQ to input signal or reference
- **Pro tip**: Use to match EQ to reference tracks or flatten problematic frequencies

### Global Controls

**Bypass**
- **Description**: Toggles processing on/off
  - When bypassed, signal passes through unchanged
  - Useful for A/B comparison
- **Effect**: Completely bypasses all processing
- **Use for**: A/B comparison and disabling processing
- **Pro tip**: Use for comparing processed and unprocessed signals

**Output Level**
- **Description**: Final output gain control
  - Adjusts overall output level
  - Compensates for level changes from processing
- **Range**: Usually ±12dB or more
- **Effect**: Adjusts final output level
- **Use for**: Gain staging and level matching
- **Pro tip**: Use for matching levels after processing

## Default Values and Safe Starting Ranges

### Bank Defaults
- **Active Bank**: 1 (usually)
- **All Banks**: Flat EQ curve (0dB across all frequencies) by default
- **Safe Range**: Banks 1-8 all available for use

### X/Y Pad Defaults
- **X Position**: 50% (center)
- **Y Position**: 50% (center)
- **Safe Range**: 20%-80% for most applications to avoid extreme settings

### Processing Mode Defaults
- **Default Mode**: VOL (Volume/Standard EQ)
- **Safe Starting Mode**: VOL for most applications
- **Alternative Modes**: PAN for stereo enhancement, SEND for routing

### Parameter Defaults
- **Shift**: 0% (no frequency shift)
- **Bandwidth**: 50% (medium interaction)
- **Mix**: 100% (fully processed)
- **Output Level**: 0dB (no gain change)

### Safe Starting Ranges
- **Shift**: -30% to +30% for subtle effects
- **Bandwidth**: 30% to 70% for musical results
- **Mix**: 50% to 100% for effective processing
- **X/Y Positions**: 30%-70% to stay in musical range

## Special Behaviors, Hidden Interactions, Right-Click Options, Integration Points

### Parameter Interactions
- **X/Y + Banks**: The X/Y pad position determines interpolation between active banks
- **Bandwidth + Morph**: Low bandwidth can create comb-filter effects during morphing
- **Shift + Morph**: Shift affects the entire curve regardless of morph position
- **Mode + EQ Curve**: Different modes interpret the EQ curve differently (volume vs panning vs send level)

### Hidden Interactions
- **Morph Smoothing**: Internal smoothing prevents clicks during morphing
- **Frequency Wrapping**: At extreme shift values, frequencies may wrap around
- **Mode Memory**: Each bank remembers its mode setting independently
- **Analysis Lock**: Analysis results can be locked to prevent real-time updates

### Right-Click Options
- **Parameter Reset**: Right-clicking on any knob resets it to default
- **MIDI Learn**: Right-clicking on parameters reveals MIDI learn options
- **Curve Copy/Paste**: Right-clicking on EQ graph allows copying/pasting curves between banks
- **Bank Operations**: Right-clicking on bank numbers may reveal additional bank operations

### Integration Points
- **MIDI Control**: All parameters can be mapped to MIDI CC messages
- **FL Studio Automation**: Full automation support for all parameters
- **Analyzer Integration**: Works with FL Studio's spectrum analyzer for visual feedback
- **Mixer Integration**: Properly integrates with FL Studio's mixer routing
- **Patcher Compatibility**: Can be used within Patcher for complex routing

## MIDI/automation notes and gotchas

### MIDI Implementation
- **X/Y Pad Control**: Can be controlled via two separate MIDI CC messages for X and Y axes
- **Bank Selection**: Banks can be switched via MIDI notes or CC messages
- **Parameter Automation**: All parameters support MIDI CC mapping and automation
- **Real-time Morphing**: X/Y pad can be controlled in real-time via MIDI controllers

### Automation Notes
- **X/Y Pad Automation**: Can be automated using XY controller automation lanes
- **Smooth Morphing**: Automation should be smoothed to avoid clicks during morphing
- **Bank Switching**: Automating bank selection can cause audible transitions
- **Parameter Interpolation**: Morphing parameters are interpolated smoothly during automation

### Gotchas
- **Extreme Morphing**: Rapid X/Y movements during automation can cause artifacts
- **Bank Switching Artifacts**: Automating bank selection may cause audible transitions
- **Parameter Range**: Some parameters have non-linear response curves
- **CPU Usage**: Complex morphing with multiple automation parameters may increase CPU usage
- **MIDI Mapping Conflicts**: Multiple parameters mapped to same CC number will interfere
- **Analysis Automation**: The analyze function may conflict with automation of EQ curves
- **Mode Changes**: Changing modes during playback may cause audible transitions
- **Bandwidth Automation**: Extreme bandwidth automation can create unexpected comb-filter effects