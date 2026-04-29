# FL Studio Mobile Rack - Controls Reference

## Parameter List with Descriptions

### Rack Management Controls

**Add Module (+ Button)**
- **Description**: Adds a new module to the rack
  - Opens module selection menu
  - Allows insertion of mobile-specific modules
  - Can add instruments or effects
- **Range**: Multiple module types available
- **Effect**: Adds new processing stage to the rack
- **Use for**: Expanding the processing chain
- **Pro tip**: Consider signal flow order when adding modules

**Module Selection Menu**
- **Description**: Menu showing available mobile modules
  - Instruments: MiniSynth, SuperSaw, GMS, Transistor Bass
  - Effects: Leveller, Compressor, Limiter, Spacer, Stereoizer, etc.
  - Filters: Vox Filter, Parametric EQ, Graphic EQ, etc.
  - Modulation: Chorus, Phaser, Flanger, Tremolo, etc.
- **Range**: 20+ different module types
- **Effect**: Changes which module is inserted in the selected slot
- **Use for**: Choosing specific processing for each slot
- **Pro tip**: Use complementary modules for best results

**Remove Module**
- **Description**: Removes selected module from the rack
  - Reduces processing chain length
  - Maintains order of remaining modules
- **Range**: N/A (binary action)
- **Effect**: Removes processing stage from the rack
- **Use for**: Simplifying the processing chain
- **Pro tip**: Remove modules that aren't contributing to the sound

### Module Controls

**Module Enable/Disable**
- **Description**: Toggles individual module processing
  - Enabled: Module processes audio
  - Disabled: Module is removed from processing chain
- **Range**: On/Off per module
- **Effect**: Adds/removes module from signal path
- **Use for**: Controlling which modules are active
- **Pro tip**: Disable unused modules to save CPU

**Module Bypass**
- **Description**: Bypasses individual module processing
  - Bypassed: Module is effectively removed from chain
  - Active: Module processes audio normally
- **Range**: On/Off per module
- **Effect**: Temporarily removes module from signal path
- **Use for**: A/B comparison of individual modules
- **Pro tip**: Use for quick comparison of module contributions

**Module Reordering**
- **Description**: Changes the order of modules in the rack
  - Drag and drop modules to reorder
  - Changes signal flow direction
- **Range**: 1-8 positions (depending on number of modules)
- **Effect**: Changes processing order and final result
- **Use for**: Optimizing signal flow for best results
- **Pro tip**: Place dynamics before EQ for optimal results

### Global Controls

**Input Gain**
- **Description**: Controls the input level to the entire rack
  - Low values: Reduce input level
  - High values: Increase input level
  - Center: Unity gain
- **Range**: Usually ±12dB or more
- **Effect**: Adjusts level before any processing occurs
- **Use for**: Optimizing input level for processing
- **Pro tip**: Match to prevent clipping in subsequent modules

**Output Level**
- **Description**: Controls the final output level of the rack
  - Low values: Reduce output level
  - High values: Increase output level
  - Center: Unity gain
- **Range**: Usually ±12dB or more
- **Effect**: Adjusts final output after all processing
- **Use for**: Matching levels in the mix
- **Pro tip**: Use for gain staging in your project

**Master Bypass**
- **Description**: Bypasses the entire rack
  - When bypassed: Signal passes through unchanged
  - When active: Full rack processing is applied
- **Range**: On/Off
- **Effect**: Completely bypasses all rack processing
- **Use for**: A/B comparison of entire rack
- **Pro tip**: Use for comparing processed and unprocessed signals

**Mix Control**
- **Description**: Controls dry/wet blend of the entire rack
  - 0%: Fully dry (original signal)
  - 50%: Equal parts dry and wet
  - 100%: Fully wet (processed signal)
- **Range**: 0-100%
- **Effect**: Blends original and processed signals
- **Use for**: Controlling intensity of rack processing
- **Pro tip**: Use for parallel processing and transparency

### Module-Specific Parameters

Each module has its own parameter set that appears when the module is selected:

**Leveller Module Parameters**:
- **Amount**: Controls enhancement intensity
- **Drive**: Controls harmonic saturation
- **Time**: Controls release characteristics
- **Effect**: Upward compression with saturation

**Vox Filter Module Parameters**:
- **Formant**: Controls vowel-like filtering (A-E-I-O-U)
- **Character**: Controls resonance and emphasis
- **Width**: Controls stereo width of effect
- **Effect**: Formant filtering for vocal-like effects

**Spacer Module Parameters**:
- **Amount**: Controls stereo widening intensity
- **Mode**: Different stereo enhancement algorithms
- **Effect**: Frequency-dependent stereo enhancement

**Wow & Flutter Module Parameters**:
- **Wow**: Low-frequency pitch modulation
- **Flutter**: High-frequency pitch modulation
- **Amount**: Controls modulation intensity
- **Effect**: Analog tape modulation effects

## Default Values and Safe Starting Ranges

### Rack Defaults
- **Empty Rack**: No modules initially loaded
- **Input Gain**: 0dB (unity gain)
- **Output Level**: 0dB (unity gain)
- **Mix Control**: 100% (fully wet)

### Module Defaults (when added)
- **Leveller**: Amount 50%, Drive 30%, Time 50%
- **Vox Filter**: Formant at center, Character 50%, Width 50%
- **Spacer**: Amount 50%, Mode at default
- **Wow & Flutter**: Wow 30%, Flutter 40%, Amount 35%

### Safe Starting Ranges
- **Input Gain**: -6dB to +6dB for safe operation
- **Output Level**: -6dB to +6dB to prevent clipping
- **Mix Control**: 50-100% for effective processing
- **Module Parameters**: 30-70% for most modules as starting points

## Special Behaviors, Hidden Interactions, Right-Click Options, Integration Points

### Parameter Interactions
- **Module Order**: The order of modules significantly affects the final sound
- **Input Gain + First Module**: Input gain affects how the first module responds
- **Output Level + Last Module**: Output level affects the final result after all processing
- **Mix + All Modules**: Mix affects the blend of all module processing

### Hidden Interactions
- **Module Dependencies**: Some modules may interact with others in the chain
- **CPU Accumulation**: Multiple modules increase CPU usage cumulatively
- **Latency Accumulation**: Each module may add to the total latency
- **Parameter Smoothing**: Internal smoothing prevents parameter jumps causing artifacts

### Right-Click Options
- **Parameter Reset**: Right-clicking on module parameters resets them to default
- **MIDI Learn**: Right-clicking on parameters reveals MIDI learn options
- **Module Bypass**: Right-clicking on module header bypasses that module
- **Module Remove**: Right-clicking on module header may provide removal option

### Integration Points
- **MIDI Control**: Module parameters can be mapped to MIDI CC messages
- **FL Studio Automation**: All parameters can be automated using FL Studio's automation system
- **Analyzer Integration**: Works with FL Studio's built-in spectrum analyzer for visual feedback
- **Mixer Integration**: Properly integrates with FL Studio's mixer routing
- **Patcher Compatibility**: Can be used within Patcher for complex routing

## MIDI/automation notes and gotchas

### MIDI Implementation
- **Module Parameters**: Individual module parameters can be mapped to MIDI CC messages
- **Rack Controls**: Global rack controls (input gain, output level, mix) can be MIDI-mapped
- **Module Selection**: Module selection typically cannot be MIDI-controlled in real-time
- **Parameter Smoothing**: The plugin likely applies smoothing to prevent parameter jumps

### Automation Notes
- **Per-Module Automation**: Each module's parameters can be automated independently
- **Rack-Wide Automation**: Global rack parameters can be automated
- **Module Enable/Disable Automation**: Module enable/disable states can potentially be automated
- **Smooth Automation**: The rack likely applies smoothing to prevent parameter jumps causing audio artifacts

### Gotchas
- **Module Order Changes**: Changing module order during playback may cause audio discontinuities
- **Parameter Extremes**: Setting module parameters to extreme values may cause unexpected behavior
- **CPU Accumulation**: Each added module increases CPU usage, which can accumulate quickly
- **Signal Flow Confusion**: Beginners may not understand how module order affects the sound
- **Module Compatibility**: Not all mobile modules may work optimally in all orders
- **Latency Issues**: Multiple modules may introduce cumulative latency
- **Clipping Risk**: Multiple gain stages in the rack can lead to unexpected clipping
- **Bypass Behavior**: Individual module bypass may not always behave as expected in complex chains