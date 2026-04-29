# Frequency Shifter - UI Tour And Core Concepts

## UI Tour

### Main Interface Layout

Frequency Shifter presents a focused interface designed for precise frequency manipulation. The interface is organized into several key areas:

#### Top Section
- **Title Bar**: Shows the plugin name and version
- **Preset Browser**: For loading and saving frequency shift settings
- **Global Controls**: Including bypass and mix controls
- **Frequency Display**: Shows current shift amount in Hz

#### Central Area - Frequency Control
The main area contains the core frequency shifting parameters:

**Main Shift Control**:
- **Frequency Knob**: The primary frequency shift parameter
- **Range**: Typically ±2000Hz or more (depending on sample rate)
- **Function**: Shifts all frequencies by the specified amount in Hz
- **Visual Feedback**: Large numeric display showing exact Hz value

**Stereo Controls**:
- **Left Channel**: Independent frequency shift for left channel
- **Right Channel**: Independent frequency shift for right channel
- **Link Button**: Links/unlinks left and right channel controls
- **Swap Button**: Swaps left and right channel settings

#### Right Panel - Advanced Controls
- **Feedback Control**: Amount of output fed back to input
- **Start Phase Control**: Adjusts phase relationship to reduce artifacts
- **Mix Control**: Dry/wet blend between original and processed signals
- **Output Level**: Final output gain control

#### Bottom Section
- **Parameter Value Displays**: Numeric readouts for precise control
- **Active State Indicators**: Showing which parameters are being adjusted
- **Audio Activity Meters**: Visual representation of input/output levels

### Visual Feedback Elements

Frequency Shifter provides visual feedback through:
- **Parameter Value Displays**: Large numeric readouts for frequency values
- **Active State Indicators**: Showing which parameters are being adjusted
- **Audio Activity Meters**: Input and output level meters
- **Frequency Response Visualization**: Shows the shift effect on the spectrum
- **Phase Relationship Indicator**: Shows current start phase setting

## Core Concepts and Terminology

### Frequency Shifting Fundamentals

**Linear Frequency Shift**: Unlike pitch shifting which multiplies frequencies by a ratio, frequency shifting adds or subtracts a fixed value in Hz from all frequencies. This means harmonic relationships are broken.

**Harmonic Relationship Breaking**: When a 100Hz fundamental is shifted +100Hz to 200Hz, its harmonic at 200Hz becomes 300Hz (not 400Hz as in pitch shifting), breaking the 2:1 harmonic relationship.

**Inharmonic Texture Creation**: The breaking of harmonic relationships creates bell-like, metallic, or robotic textures that are distinctly different from pitch-shifted sounds.

**Positive vs Negative Shift**: Positive shifts move all frequencies up, negative shifts move them down. At extreme settings, negative shifts can create interesting downward sweeping effects.

### Key Parameters Explained

**Frequency**: The main parameter that controls the Hz amount by which all frequencies are shifted. This is the core of the frequency shifting effect.

**Feedback**: Controls how much of the output is fed back to the input, creating evolving, spiraling textures when used with frequency shifting.

**Start Phase**: Adjusts the phase relationship of the shifted signal to reduce clicks, pops, or other artifacts that might occur during shifting.

**Mix**: Controls the blend between the original (dry) and processed (wet) signals, allowing for parallel processing.

**Stereo Separation**: The ability to shift left and right channels by different amounts, creating unique stereo effects.

### Parameter Interactions

Understanding how parameters interact is crucial for effective use:

- **Frequency + Feedback**: Higher feedback with frequency shifting creates more dramatic evolving textures
- **Frequency + Mix**: Lower mix values reduce the intensity of the frequency shift effect
- **Start Phase + Frequency**: Different start phase values may be needed for different frequency shift amounts to minimize artifacts
- **Left/Right Channels**: Independent control allows for complex stereo field manipulation

### Core Terminology

**Frequency Shift**: Moving all frequencies by a fixed Hz amount (not ratio-based)
**Pitch Shift**: Multiplying all frequencies by a ratio (maintains harmonic relationships)
**Inharmonic**: Sounds where harmonic relationships are broken or altered
**Harmonic**: Sounds where frequency relationships follow integer multiples
**Feedback**: Routing output back to input for evolving effects
**Start Phase**: Phase alignment control to reduce artifacts
**Dry/Wet Mix**: Blend between original and processed signals
**Spectrum Translation**: Moving the entire frequency spectrum by a fixed amount
**Phase Vocoder**: The underlying technology used for frequency shifting
**Ring Modulation**: Related technique that creates sum and difference frequencies
**Upward/Downward Shift**: Direction of frequency movement
**Spectral Displacement**: The effect of moving the spectrum without maintaining ratios

## Typical Starting Workflow (the first 5 minutes)

1. **Load Frequency Shifter**: Insert Frequency Shifter into a channel in the Channel Rack or as an insert effect

2. **Set Basic Parameters**: Start with moderate frequency shift (e.g., 100Hz)

3. **Adjust Mix**: Set Mix to around 30-50% to blend processed and original signals

4. **Test with Audio**: Play a simple melodic or harmonic sound to hear the effect

5. **Try Positive and Negative Shifts**: Test both +100Hz and -100Hz to hear the difference

6. **Experiment with Stereo**: Try different values for left and right channels

7. **Add Feedback**: Try small amounts of feedback (10-20%) for evolving textures

8. **Adjust Start Phase**: Fine-tune to minimize any artifacts

9. **Save as Starting Point**: Save this basic preset for future use

## Common Beginner Traps (what people misunderstand)

1. **Thinking it's a pitch shifter**: Many users expect it to work like a pitch shifter, but it shifts frequencies linearly rather than maintaining harmonic relationships.

2. **Extreme settings**: Setting frequency shift to extreme values can create harsh, metallic sounds that might be mistaken for malfunction.

3. **Not understanding inharmonic results**: The broken harmonic relationships create non-musical results, which can be surprising to new users.

4. **Stereo confusion**: Not realizing that left and right channels can be shifted independently.

5. **Feedback artifacts**: Using too much feedback can create unstable or harsh results.

6. **Phase issues**: Not adjusting Start Phase appropriately can cause clicking or other artifacts.

7. **Mix control importance**: Not using the Mix control to blend processed and unprocessed signals for more musical results.

8. **Sample rate dependency**: The maximum possible shift is limited by the sample rate, which might confuse users at extreme settings.

9. **Negative frequency effects**: Not understanding that negative shifts create different sonic characteristics than positive shifts.

10. **Harmonic relationship expectation**: Expecting shifted harmonics to maintain musical relationships like with pitch shifters.

11. **Mono compatibility**: Forgetting to check how the stereo frequency shifting affects mono playback.

12. **CPU misconceptions**: Assuming it uses more CPU than pitch shifters when it's actually quite efficient.