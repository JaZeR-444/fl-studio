# Parameter Dictionary

## Display Mode Parameters

### Oscilloscope Mode

#### Time Scale
- **Range:** 0.1ms - 1000ms [SRC: IL-MAN]
- **Default:** 20ms
- **Vibe Impact:** 
  - Moody: 50-100ms (smooth, sustained)
  - Upbeat: 10-30ms (sharp, detailed)
  - Psychedelic: 30-80ms (complex waveforms)
  - Jazzy: 40-60ms (organic, natural)
  - Vibey: 20-40ms (controlled, polished)
- **Mix Impact:** transient, motion
- **Description:** Controls time window displayed. Shorter = more transient detail, longer = more waveform context.

#### Amplitude Scale
- **Range:** -60dB to +12dB
- **Default:** Auto
- **Vibe Impact:** Affects visibility of quiet vs loud elements
- **Mix Impact:** loudness, punch
- **Description:** Vertical scaling of waveform display. Auto adjusts to input level.

#### Trigger Level
- **Range:** -60dB to 0dB
- **Default:** Auto
- **Vibe Impact:** Determines what triggers display update
- **Mix Impact:** motion, transient
- **Description:** Signal level that triggers oscilloscope refresh. Auto mode finds optimal level.

#### Trigger Mode
- **Options:** Auto, Manual, External
- **Default:** Auto
- **Vibe Impact:** Affects display stability
- **Mix Impact:** motion
- **Description:** How oscilloscope triggering is controlled. Auto for stable display, Manual for specific triggering.

#### Display Type
- **Options:** Line, Dot, Solid
- **Default:** Line
- **Vibe Impact:** Visual character of display
- **Description:** How waveform is rendered. Line for clarity, Solid for filled view, Dot for vintage look.

### Spectrum Mode

#### FFT Size
- **Range:** 256 - 32768 samples [SRC: IL-MAN]
- **Default:** 4096
- **Vibe Impact:** 
  - Moody/Jazzy: 8192-16384 (detailed, smooth)
  - Upbeat/Psychedelic: 2048-4096 (responsive, dynamic)
  - Vibey: 4096-8192 (balanced)
- **Mix Impact:** brightness, depth, motion
- **Description:** Frequency resolution vs response time tradeoff. Larger FFT = better frequency resolution but slower response.

#### Frequency Scale
- **Options:** Linear, Logarithmic
- **Default:** Logarithmic
- **Vibe Impact:** 
  - Psychedelic: Linear (reveals harmonic detail)
  - Others: Logarithmic (musical perception)
- **Mix Impact:** brightness, depth
- **Description:** How frequency axis is scaled. Logarithmic matches human hearing, Linear shows precise frequency relationships.

#### Amplitude Range
- **Range:** -96dB to +12dB
- **Default:** -60dB to +12dB
- **Vibe Impact:** Controls visible dynamic range
- **Mix Impact:** loudness, depth
- **Description:** Vertical scale of frequency display. Wider range shows more detail, narrower range focuses on relevant levels.

#### Smoothing
- **Range:** Off - High
- **Default:** Medium
- **Vibe Impact:** 
  - Moody/Jazzy: High (stable, smooth)
  - Upbeat/Psychedelic: Low-Medium (responsive, dynamic)
  - Vibey: Medium (professional balance)
- **Mix Impact:** motion, depth
- **Description:** Averaging applied to spectrum display. More smoothing = more stable display, less responsive to changes.

#### Peak Hold
- **Options:** Off, 1-10 seconds
- **Default:** 3 seconds
- **Vibe Impact:** Shows sustained elements vs transients
- **Mix Impact:** motion, transient
- **Description:** How long frequency peaks remain visible. Useful for identifying resonances and sustained elements.

### Vectorscope Mode

#### Zoom
- **Range:** 0.5x - 3.0x
- **Default:** 1.0x
- **Vibe Impact:** 
  - Psychedelic: 1.5-2.0x (detail emphasis)
  - Others: 1.0x (standard view)
- **Mix Impact:** width
- **Description:** Magnification of vectorscope display. Higher zoom shows more stereo detail.

#### Persistence
- **Range:** Off - High
- **Default:** Medium
- **Vibe Impact:** 
  - Psychedelic: High (trails and movement)
  - Moody/Jazzy: Medium-High (stable patterns)
  - Upbeat: Medium (dynamic but clear)
  - Vibey: Medium (professional look)
- **Mix Impact:** width, motion
- **Description:** How long previous patterns remain visible. Creates trails showing stereo movement over time.

#### Scope Speed
- **Options:** Slow, Medium, Fast
- **Default:** Medium
- **Vibe Impact:** Display responsiveness
- **Mix Impact:** motion, width
- **Description:** How quickly vectorscope updates to changes. Fast for responsive display, Slow for stable patterns.

#### Reference Lines
- **Options:** Off, On (+/- 45°)
- **Default:** On
- **Vibe Impact:** Visual guidance for stereo interpretation
- **Mix Impact:** width
- **Description:** Shows reference lines at 45° angles for phase correlation assessment.

### Peak Meter Mode

#### Scale Type
- **Options:** dBFS, dBVU, dB various
- **Default:** dBFS
- **Vibe Impact:** Visual character and target levels
- **Mix Impact:** loudness
- **Description:** What scale is used for level measurement. dBFS for digital, dBVU for analog-style metering.

#### Ballistics
- **Options:** Fast, Medium, Slow
- **Default:** Fast
- **Vibe Impact:** Meter response character
- **Mix Impact:** loudness, transient
- **Description:** How quickly meters respond to level changes. Fast for peak detection, Slow for VU-style averaging.

#### Hold Time
- **Range:** Off - 10 seconds
- **Default:** 2 seconds
- **Vibe Impact:** Shows peak duration
- **Mix Impact:** loudness, transient
- **Description:** How long peak indicators remain at maximum level before resetting.

#### Reference Level
- **Range:** -20dB to 0dB
- **Default:** 0dBFS
- **Vibe Impact:** Target level setting
- **Mix Impact:** loudness
- **Description:** What level corresponds to 0 on the meter scale. Useful for setting target levels.

## Global Interface Parameters

### Transparency
- **Range:** 0% - 100%
- **Default:** 0% (opaque)
- **Vibe Impact:** Workspace integration
- **Description:** Makes Wave Candy interface transparent so you can see FL Studio through it.

### Always on Top
- **Options:** On, Off
- **Default:** Off
- **Vibe Impact:** Workflow convenience
- **Description:** Keeps Wave Candy visible above other windows.

### Display Size
- **Range:** Minimum to Maximum window size
- **Default:** Medium
- **Vibe Impact:** Visibility vs screen space
- **Description:** Physical size of Wave Candy window.

### Multi-Instance
- **Capability:** Yes [SRC: IL-MAN]
- **CPU Impact:** ~2-5% per instance [UNVERIFIED]
- **Vibe Impact:** Simultaneous analysis capabilities
- **Description:** Ability to run multiple Wave Candy instances simultaneously.

## Recording/Export Parameters

### Screenshot Format
- **Options:** PNG, BMP, JPEG
- **Default:** PNG
- **Description:** File format for saved screenshots.

### Screenshot Quality
- **Range:** Low - High
- **Default:** High
- **Description:** Image quality/compression level for saved screenshots.

### Auto-Filename
- **Options:** On, Off
- **Default:** On
- **Description:** Automatically generates filenames with timestamps for screenshots.

## Advanced Technical Parameters

### Buffer Size Interaction
- **Dependency:** FL Studio audio buffer size
- **Impact:** Display responsiveness
- **Description:** Wave Candy responsiveness is affected by FL Studio's audio buffer setting. Smaller buffers = more responsive display.

### Sample Rate Support
- **Range:** Up to 192kHz [SRC: IL-MAN]
- **Impact:** Frequency analysis range
- **Description:** Supports high sample rates for high-resolution frequency analysis.

### Channel Selection
- **Options:** L, R, L+R, Mono
- **Default:** L+R
- **Vibe Impact:** What audio is analyzed
- **Mix Impact:** width, depth
- **Description:** Which channels are analyzed. L+R for stereo sum, individual channels for detailed analysis.

## Parameter Interaction Guidelines

### FFT Size vs Smoothing
- **High FFT + High Smoothing:** Very stable, detailed display (good for Jazzy/Moody)
- **Low FFT + Low Smoothing:** Very responsive, dynamic display (good for Upbeat/Psychedelic)
- **Balanced settings:** Good all-around performance (good for Vibey)

### Time Scale vs Trigger
- **Short Time + Auto Trigger:** Detailed transient view
- **Long Time + Manual Trigger:** Sustained waveform analysis
- **Medium Time + Auto Trigger:** General purpose use

### Persistence vs Scope Speed
- **High Persistence + Slow Speed:** Maximum movement trails
- **Low Persistence + Fast Speed:** Most responsive display
- **Balanced settings:** Professional appearance with good responsiveness

## Parameter Automation Notes

### Automatable Parameters
- All display parameters can be automated [SRC: IL-MAN]
- Useful for creating evolving visual displays
- Can respond to music for visual performances

### Creative Automation Ideas
- **FFT Size automation:** Creates changing frequency resolution
- **Persistence automation:** Evolving stereo trails
- **Smoothing automation:** Transition between stable/dynamic displays

## CPU Optimization Guidelines

### Light Settings (CPU < 3%)
- FFT Size: 1024-2048
- Smoothing: Low
- Persistence: Low
- One instance only

### Standard Settings (CPU 5-8%)
- FFT Size: 4096
- Smoothing: Medium
- Persistence: Medium
- Up to two instances

### Heavy Settings (CPU 10-15%)
- FFT Size: 8192+
- Smoothing: High
- Persistence: High
- Multiple instances

Remember: These parameters affect display only, not audio. Experiment to find what works best for your workflow and visual preferences.