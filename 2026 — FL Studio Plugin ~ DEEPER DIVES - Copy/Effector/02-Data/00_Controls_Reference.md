# Effector - Controls Reference

## Parameter List with Descriptions

### Effect Selection Controls

**Effect Buttons (12 total)**
- **Distortion**: Adds harmonic saturation and overdrive
- **Lo-Fi**: Emulates vintage digital equipment with bit depth and sample rate reduction
- **Flanger**: Creates jet-plane swooshing effects using short delay times with modulation
- **Phaser**: Creates whooshing, sweeping effects using all-pass filters for phase shifting
- **Filter**: Classic low-pass, high-pass, or band-pass filtering for tone shaping
- **Delay**: Time-based echo effects with feedback and time controls
- **Reverb**: Simulates acoustic spaces and adds depth and dimension
- **Stereo**: Controls stereo field characteristics and width/separation
- **Trans (Trance Gate)**: Creates rhythmic gating effects popular in trance and electronic music
- **Grain**: Granular synthesis effects for stutter and time-stretching
- **Vox**: Creates vocal-like formant filtering with vowel simulation
- **Ring**: Ring modulation effects for metallic, bell-like tones

### X/Y Pad Controls

**X-Axis Control**
- **Description**: Horizontal parameter control that varies by selected effect
- **Range**: 0-100% (typically)
- **Effect**: Controls primary parameter of the active effect
- **Use for**: Primary effect parameter manipulation
- **Pro tip**: Use for the most impactful parameter change

**Y-Axis Control**
- **Description**: Vertical parameter control that varies by selected effect
- **Range**: 0-100% (typically)
- **Effect**: Controls secondary parameter of the active effect
- **Use for**: Secondary effect parameter manipulation
- **Pro tip**: Use for fine-tuning and character adjustments

### Effect-Specific Parameters

**For Filter Effect:**
- **X-Axis**: Cutoff Frequency (controls filter position)
- **Y-Axis**: Resonance/Peak (controls emphasis at cutoff point)

**For Delay Effect:**
- **X-Axis**: Feedback/Repeats (controls number of echoes)
- **Y-Axis**: Time/Delay Amount (controls delay interval)

**For Reverb Effect:**
- **X-Axis**: Size/Room Type (controls space simulation)
- **Y-Axis**: Decay/Time (controls reverb duration)

**For Stereo Effect:**
- **X-Axis**: Width/Separation (controls stereo field width)
- **Y-Axis**: Position/Placement (controls stereo positioning)

**For Trans (Trance Gate) Effect:**
- **X-Axis**: Speed/Gate Rate (controls gating speed)
- **Y-Axis**: Depth/Intensity (controls gating depth)

**For Grain Effect:**
- **X-Axis**: Grain Size/Time (controls grain duration)
- **Y-Axis**: Density/Pitch (controls grain density and pitch)

**For Vox Effect:**
- **X-Axis**: Vowel Formant (controls vowel sounds A-E-I-O-U)
- **Y-Axis**: Character/Resonance (controls resonance characteristics)

**For Ring Effect:**
- **X-Axis**: Frequency/Rate (controls modulation rate)
- **Y-Axis**: Depth/Intensity (controls modulation depth)

**For Phaser/Flanger Effects:**
- **X-Axis**: Feedback/Intensity (controls effect intensity)
- **Y-Axis**: Rate/Speed (controls modulation speed)

**For Distortion Effect:**
- **X-Axis**: Drive/Amount (controls saturation level)
- **Y-Axis**: Tone/Character (controls saturation character)

**For Lo-Fi Effect:**
- **X-Axis**: Bit Depth Reduction (controls quantization)
- **Y-Axis**: Sample Rate Reduction (controls aliasing)

### Global Controls

**Dry/Wet Mix**
- **Description**: Blends processed and unprocessed signals
- **Range**: 0-100% (0% = dry, 100% = wet)
- **Effect**: Controls the balance between original and effected signal
- **Use for**: Setting the intensity of the effect
- **Pro tip**: Use for subtle effect applications

**Gain Controls**
- **Input Gain**: Adjusts signal level before effects
  - Range: Negative to positive values
  - Effect: Optimizes signal level for effects
  - Use for: Preventing clipping
  - Pro tip: Use to optimize signal for effect processing
- **Output Gain**: Adjusts final signal level
  - Range: Negative to positive values
  - Effect: Matches level after effects
  - Use for: Maintaining consistent mix levels
  - Pro tip: Use to match processed and unprocessed levels

**Bypass**
- **Description**: Toggles the entire effect on/off
- **Range**: On/Off
- **Effect**: Completely bypasses all processing
- **Use for**: A/B comparison
- **Pro tip**: Use for quick comparisons with original signal

## Default Values and Safe Starting Ranges

### X/Y Pad Defaults
- **X-Axis**: 50% (center position)
- **Y-Axis**: 50% (center position)
- **Safe Range**: 20%-80% for most effects to avoid extreme settings

### Mix Defaults
- **Dry/Wet Mix**: 50% (equal blend)
- **Safe Range**: 20%-80% for musical results

### Effect-Specific Safe Ranges
- **Filter**: X (Cutoff): 30%-70%, Y (Resonance): 20%-60%
- **Delay**: X (Feedback): 20%-60%, Y (Time): 30%-70%
- **Reverb**: X (Size): 40%-80%, Y (Decay): 30%-70%
- **Stereo**: X (Width): 40%-80%, Y (Position): 30%-70%
- **Trans**: X (Speed): 30%-70%, Y (Depth): 40%-80%
- **Grain**: X (Size): 30%-70%, Y (Density): 40%-80%
- **Vox**: X (Formant): 30%-70%, Y (Character): 40%-80%
- **Ring**: X (Freq): 30%-70%, Y (Depth): 40%-80%

## Special Behaviors, Hidden Interactions, Right-Click Options, Integration Points

### Parameter Interactions
- **X/Y Correlation**: Some effects have correlated parameters where X and Y interact (e.g., in Filter, cutoff and resonance interact)
- **Effect-Specific Behavior**: Each effect maps X and Y differently, so identical pad movements produce different results
- **Smooth Transitions**: The X/Y pad provides smooth parameter transitions to avoid clicks and pops

### Hidden Interactions
- **Tempo Sync**: Some effects (Delay, Trans, Grain) may sync to project tempo when available
- **Parameter Smoothing**: Internal smoothing prevents parameter jumps from causing audio artifacts
- **Effect Tail Behavior**: Some effects (Delay, Reverb) may have tails that continue after bypass

### Right-Click Options
- **Parameter Reset**: Right-clicking on X/Y pad may reset to center position
- **Fine Adjustment**: Holding Shift while moving pad allows for precise parameter adjustments
- **MIDI Learn**: Right-clicking may reveal MIDI learn options for external controller mapping

### Integration Points
- **MIDI Control**: X/Y pad can be controlled via MIDI CC messages
- **Automation**: All parameters can be automated using FL Studio's automation system
- **FL Studio Integration**: Works within FL Studio's mixer and routing system
- **Controller Mapping**: Compatible with external controllers for tactile manipulation

## MIDI/automation notes and gotchas

### MIDI Implementation
- **X/Y Pad Control**: Can be controlled via two separate MIDI CC messages for X and Y axes
- **Effect Selection**: Effect buttons can be triggered via MIDI notes or CC messages
- **Parameter Automation**: Individual effect parameters can be automated via CC mapping

### Automation Notes
- **X/Y Pad Automation**: Can be automated using XY controller automation lanes
- **Smooth Automation**: X/Y movements should be smoothed to avoid parameter jumps
- **Real-time Parameter Changes**: Parameters can be adjusted in real-time without stopping playback

### Gotchas
- **Effect Switching Automation**: Automating effect switching can cause audio discontinuities
- **Extreme Parameter Values**: Setting parameters to extreme values may cause unexpected behavior
- **X/Y Pad Jumping**: Abrupt changes in X/Y position can cause audio artifacts
- **Tempo Sync Conflicts**: Some effects may behave differently when tempo sync is enabled elsewhere
- **CPU Usage**: Some effects (especially Delay and Reverb) may have higher CPU usage
- **Parameter Mapping Changes**: When switching effects, the X/Y parameter mapping changes, which can cause unexpected results if automated