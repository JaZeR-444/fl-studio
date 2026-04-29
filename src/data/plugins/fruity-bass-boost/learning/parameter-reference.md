# Fruity Bass Boost Parameter Reference

## Core Parameters

### Boost (0-100%)
**Purpose**: Controls the amount of bass enhancement applied
- **0-25%**: Subtle warming and presence
- **25-50%**: Noticeable enhancement and weight
- **50-75%**: Strong impact and power
- **75-100%**: Maximum bass augmentation

**Technical**: Controls gain of the harmonic enhancement algorithm
**Best Practice**: Start low (20-30%) and increase gradually

### Freq (20-200Hz)
**Purpose**: Sets the center frequency for bass enhancement
- **20-40Hz**: Sub-bass and deep rumble
- **40-80Hz**: Bass fundamentals and body
- **80-120Hz**: Bass punch and definition
- **120-200Hz**: Upper bass warmth

**Technical**: Determines where the enhancement curve is centered
**Best Practice**: Match to fundamental frequency of target material

### Mix (0-100%)
**Purpose**: Blends processed signal with original dry signal
- **0%**: Fully dry (no effect)
- **25%**: Subtle enhancement presence
- **50%**: Equal blend of dry and processed
- **75%**: Mostly processed with some dry character
- **100%**: Fully processed signal

**Technical**: Parallel mixing for maintaining original character
**Best Practice**: Use 60-80% for musical results

### Out (-∞ to +12dB)
**Purpose**: Adjusts output level to compensate for boost
- **-∞**: Muted output
- **-12dB to 0dB**: Level reduction
- **0dB**: Unity gain (default)
- **+6dB to +12dB**: Level increase

**Technical**: Output gain stage for level matching
**Best Practice**: Match bypassed level for A/B comparison

## Parameter Interactions

### Boost + Freq Relationship
- Higher Freq settings need less Boost for same impact
- Lower Freq settings may require more Boost
- Mid-range Freq (60-100Hz) offers best balance

### Boost + Mix Balance
- High Boost + Low Mix = Controlled enhancement
- Low Boost + High Mix = Gentle warming
- High Boost + High Mix = Maximum impact (use carefully)

### Freq + Mix Interaction
- Low Freq + High Mix = Deep but clear bass
- High Freq + Low Mix = Punchy enhancement without mud

## Advanced Parameter Combinations

### **Sub-Bass Enhancement**
- Boost: 40-60%
- Freq: 30-50Hz
- Mix: 80-100%
- Out: Match level

### **Bass Guitar Definition**
- Boost: 25-40%
- Freq: 80-120Hz
- Mix: 60-80%
- Out: +2-3dB

### **Mix Bus Warmth**
- Boost: 15-25%
- Freq: 60-80Hz
- Mix: 40-60%
- Out: Unity gain

### **Mastering Polish**
- Boost: 5-15%
- Freq: 50-70Hz
- Mix: 25-50%
- Out: Match loudness

## Parameter Modulation

### LFO Applications
- Slow LFO on Freq (40-100Hz) for movement
- Medium LFO on Mix (50-80%) for pulsing
- Fast LFO on Boost (10-30%) for tremolo-like effects

### Envelope Following
- Boost controlled by input dynamics for responsive enhancement
- Freq tracking pitch for musical results
- Mix ducking during transients for clarity

## Technical Specifications

- **Frequency Range**: 20Hz - 200Hz (+/- 0.5Hz accuracy)
- **Boost Range**: +0dB to +24dB of enhancement
- **Mix Resolution**: 0.1% precision
- **Latency**: 0 samples (real-time processing)
- **CPU Usage**: Minimal (0.2% per instance at 44.1kHz)

## Parameter Memory
- Last settings auto-saved per project
- Settings persist between sessions
- Default recall: Boost 30%, Freq 80Hz, Mix 75%, Out 0dB

This plugin uses musical algorithms that maintain phase coherence and dynamic response. Adjust parameters by ear for best results.