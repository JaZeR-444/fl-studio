# FL Studio Mobile Rack - Workflow Recipes

## 6-10 Recipes Combining FL Studio Mobile Rack with Other FL Studio Tools

### Recipe 1: Mobile Rack + Fruity Convolver for Enhanced Spatial Processing
**Goal**: Combine mobile rack processing with desktop convolution for advanced spatial effects

**Step-by-step setup inside FL Studio**:
1. Insert FL Studio Mobile Rack on a track (vocals, pads, or drums)
2. Add "Leveller" module to enhance quiet details (Amount: 40%, Drive: 25%, Time: 50%)
3. Add "Vox Filter" module for formant processing (Formant: A-E sweep, Character: 50%)
4. Route the output of Mobile Rack to a dedicated return track
5. Insert Fruity Convolver on the return track
6. Load a high-quality hall impulse response (4-6 seconds decay)
7. Set Convolver Mix to 35% for subtle enhancement
8. Add Fruity Parametric EQ 2 after Convolver to shape the reverb
9. Apply gentle high-shelf around 8kHz (1-2dB) for air
10. Use automation to vary the Vox Filter formant settings over time

**Routing notes**:
- Use post-fader sends from Mobile Rack to Convolver return
- This allows independent control of dry Mobile Rack processing and wet reverb
- The Mobile Rack processes the signal before reverb is applied
- This creates frequency-dependent reverb characteristics

**How to control it quickly**:
- Map Vox Filter formant to a macro for real-time vowel morphing
- Use automation clips for evolving spatial characteristics
- Create channel rack patterns for different spatial settings
- Use FL Studio's performance mode for live manipulation

**Performance tips**:
- Use conservative Mobile Rack settings to avoid over-processing before reverb
- Check for phase issues when combining Mobile Rack with stereo reverb
- Monitor the combined effect on the spectrum analyzer
- Use the Convolver's freeze function to reduce CPU when not changing settings

### Recipe 2: Mobile Rack + Fruity Peak Controller for Dynamic Enhancement
**Goal**: Use Peak Controller to dynamically modulate Mobile Rack parameters based on input signal

**Step-by-step setup inside FL Studio**:
1. Insert Fruity Peak Controller before FL Studio Mobile Rack
2. Set Peak Controller to respond to input dynamics (Ratio: 2:1, Attack: 5ms, Release: 100ms)
3. Insert FL Studio Mobile Rack after Peak Controller
4. Add "Leveller" module to slot 1 (Amount: 30%, Drive: 20%, Time: 55%)
5. Add "Compressor" module to slot 2 (Ratio: 3:1, Threshold: -12dB)
6. Use Peak Controller's output to modulate Mobile Rack parameters via automation
7. Map Peak Controller's gain reduction to Leveller Amount parameter
8. Add Fruity Parametric EQ 2 after Mobile Rack for tonal adjustment
9. Insert Fruity Limiter at the end for level control
10. Fine-tune the Peak Controller settings to taste

**Routing notes**:
- Peak Controller affects the signal level before Mobile Rack processing
- This creates dynamic response where louder signals trigger more enhancement
- The Mobile Rack processes the already-dynamic-controlled signal
- This creates compound dynamic processing

**How to control it quickly**:
- Adjust Peak Controller's threshold to change activation point
- Use Peak Controller's ratio to control intensity of Mobile Rack response
- Map Peak Controller's parameters to macros for easy adjustment
- Use automation to change the dynamic response over time

**Performance tips**:
- Use moderate Peak Controller settings to avoid over-compression before Mobile Rack
- Check for pumping artifacts when both processors are active
- The combination creates very responsive dynamic processing
- Use spectrum analysis to ensure the dynamic processing is musical

### Recipe 3: Mobile Rack + Edison for Analysis-Based Enhancement
**Goal**: Use Edison's analysis to inform Mobile Rack processing decisions

**Step-by-step setup inside FL Studio**:
1. Insert Edison on a track with problematic frequency content
2. Use Edison's FFT analysis to identify frequency issues or characteristics
3. Insert FL Studio Mobile Rack after Edison (or on the same track)
4. Add "EQ" module to slot 1 in Mobile Rack
5. Create an inverse curve based on Edison's analysis to correct issues
6. Add "Leveller" module to slot 2 to enhance remaining content (Amount: 40%)
7. Use Fruity Formula Controller to create parameter modulation
8. Map Formula Controller output to EQ parameters based on analysis
9. Add Fruity Parametric EQ 2 after Mobile Rack for fine-tuning
10. Compare before/after using Edison's AB comparison feature

**Routing notes**:
- Use Edison to analyze the original signal
- Apply Mobile Rack processing based on analysis findings
- Use Edison after processing to verify results
- This creates analysis-informed enhancement

**How to control it quickly**:
- Use Edison's snapshot feature to save reference spectra
- Create Mobile Rack presets based on different analysis results
- Map Mobile Rack parameters to macros for quick adjustment
- Use Edison's real-time analysis while adjusting Mobile Rack

**Performance tips**:
- Use Edison's smoothing settings to get clearer frequency analysis
- Apply corrective EQ gradually to avoid over-correction
- The Leveller will enhance whatever frequencies remain after EQ
- Use spectrum analysis to verify the combined effect

### Recipe 4: Mobile Rack + Fruity Formula Controller for Complex Modulation
**Goal**: Use Formula Controller to create complex, evolving modulation patterns for Mobile Rack

**Step-by-step setup inside FL Studio**:
1. Insert FL Studio Mobile Rack on a track
2. Add "Vox Filter" module to slot 1 (for formant morphing)
3. Add "Chorus" module to slot 2 (for movement)
4. Insert Fruity Formula Controller on a separate automation track
5. Create a formula that generates complex morphing patterns (e.g., LFO1*sin(LFO2*time))
6. Use MIDI learn to map Formula Controller outputs to Mobile Rack parameters
7. Map one formula output to Vox Filter formant position
8. Map another formula output to Chorus rate
9. Adjust formula parameters to create interesting morphing patterns
10. Add Fruity Convolver after for spatial enhancement of evolving textures

**Routing notes**:
- Formula Controller generates complex modulation patterns
- Map different formula outputs to different Mobile Rack parameters
- The mathematical patterns create evolving, non-repetitive processing
- This creates algorithmic enhancement changes

**How to control it quickly**:
- Adjust formula parameters to change the morphing pattern
- Use different mathematical functions for different morphing behaviors
- Map formula variables to macros for real-time control
- Use automation to change formula parameters over time

**Performance tips**:
- Start with simple formulas and gradually increase complexity
- Monitor for artifacts when using complex modulation patterns
- Use the formula's period settings to sync with musical timing if desired
- The combination creates evolving, generative processing

### Recipe 5: Mobile Rack + Patcher for Advanced Routing
**Goal**: Use Patcher to create complex routing with Mobile Rack and other effects

**Step-by-step setup inside FL Studio**:
1. Insert Patcher on a track that needs complex processing
2. Inside Patcher, route the main signal to FL Studio Mobile Rack
3. Configure Mobile Rack with "Leveller" and "EQ" modules for enhancement
4. Create a parallel path with Fruity Fast Dist for saturation
5. Create another parallel path with Fruity Convolver for reverb
6. Use Fruity Balance to control the mix between paths
7. Add Fruity Limiter at the end of Patcher for level control
8. Use Fruity Formula Controller within Patcher for parameter modulation
9. Map parameters to Patcher's macro controls
10. Create a comprehensive processing chain with Mobile Rack as the centerpiece

**Routing notes**:
- Use Patcher to split signal into multiple processing paths
- Mobile Rack processes the main signal path
- Parallel paths add additional processing layers
- Patcher allows for complex routing and macro control

**How to control it quickly**:
- Use Patcher's macro controls to adjust multiple parameters simultaneously
- Map Mobile Rack parameters to Patcher macros for centralized control
- Create multiple macro configurations for different processing approaches
- Use Patcher's interface to adjust balance between processing paths

**Performance tips**:
- Use moderate processing in each path to avoid over-processing
- Check for phase issues between parallel paths
- The combination allows for complex, nuanced processing
- Use spectrum analysis to ensure the combined effect is balanced

### Recipe 6: Mobile Rack + Fruity Limiter for Enhanced Limiting
**Goal**: Use Mobile Rack for dynamic enhancement before final limiting

**Step-by-step setup inside FL Studio**:
1. Insert FL Studio Mobile Rack on a track or bus
2. Add "Leveller" module to enhance quiet details (Amount: 35%, Drive: 20%, Time: 50%)
3. Add "EQ" module to shape the enhanced signal (if needed)
4. Add "Compressor" module for gentle bus compression (if needed)
5. Insert Fruity Limiter after Mobile Rack
6. Set Limiter to conservative settings (Ceiling: -0.1dB, Amount: 20-30%)
7. Use the Limiter to catch peaks from Mobile Rack enhancement
8. Add Fruity Parametric EQ 2 after Limiter for final tonal adjustment
9. Use Fruity Meter 2 at the end to monitor levels and limiting
10. Fine-tune the balance between Mobile Rack enhancement and Limiter control

**Routing notes**:
- Mobile Rack enhances dynamics and adds character
- Limiter catches any peaks from the enhancement
- This creates density without harsh limiting artifacts
- The order ensures enhancement happens before peak limiting

**How to control it quickly**:
- Adjust Mobile Rack enhancement and Limiter threshold as a pair
- Use Limiter's auto-release to adapt to Mobile Rack's dynamic changes
- Map both Mobile Rack Amount and Limiter Amount to a macro for density control
- Use automation to change both simultaneously for consistent results

**Performance tips**:
- Use conservative Mobile Rack settings to avoid over-compression by Limiter
- The combination creates density and loudness without harsh artifacts
- Monitor gain reduction on both Mobile Rack and Limiter
- Use this approach for master bus density enhancement

### Recipe 7: Mobile Rack + Fruity Fast Dist for Character Enhancement
**Goal**: Combine Mobile Rack enhancement with saturation for added character

**Step-by-step setup inside FL Studio**:
1. Insert Fruity Fast Dist on a track (for initial saturation)
2. Set Fast Dist to moderate settings (Drive: 30%, Tone: 50%, Mix: 80%)
3. Insert FL Studio Mobile Rack after Fast Dist
4. Add "Leveller" module to enhance the saturated signal (Amount: 40%, Drive: 15%)
5. Add "EQ" module to shape the saturated/enhanced signal
6. Boost presence around 5-8kHz to enhance the saturation character
7. Add "Compressor" module if additional glue is needed
8. Use gentle compression (2:1 ratio, medium attack/release)
9. Insert Fruity Limiter at the end for level control
10. Fine-tune the balance between saturation and enhancement

**Routing notes**:
- Saturation comes first, then enhancement
- Mobile Rack processes the already-saturated signal
- This creates enhancement of saturated harmonics
- The order affects the character of the enhancement

**How to control it quickly**:
- Map Fast Dist Drive and Mobile Rack Amount to a macro for character control
- Use automation to change both simultaneously for consistent results
- Create presets that combine specific saturation and enhancement settings
- Use the Mix controls on both plugins to blend appropriately

**Performance tips**:
- Start with moderate saturation to avoid harshness when enhanced
- The combination can create very musical character enhancement
- Monitor for clipping when both enhancement and saturation are high
- Use spectrum analysis to ensure the combined effect is musical

### Recipe 8: Mobile Rack + Fruity Delay 3 for Rhythmic Enhancement
**Goal**: Use Mobile Rack to enhance the rhythmic elements before delay processing

**Step-by-step setup inside FL Studio**:
1. Insert FL Studio Mobile Rack on a rhythmic track (drums, percussion, etc.)
2. Add "Leveller" module to enhance transients (Amount: 45%, Drive: 25%, Time: 40%)
3. Add "EQ" module to shape the enhanced transients (boost 2-5kHz for attack)
4. Insert Fruity Delay 3 after Mobile Rack
5. Set Delay 3 to tempo-synced settings (1/8th or 1/16th notes)
6. Use moderate feedback (20-30%) and pan delays for width
7. Add Fruity Fast Dist after delay for saturation of delayed signals
8. Use low Drive (15-20%) to add character to delays without harshness
9. Insert Fruity Limiter at the end for level control
10. Use automation to vary Mobile Rack enhancement during different sections

**Routing notes**:
- Mobile Rack enhances the dry signal before delay
- Delay processes the enhanced signal
- This creates enhanced transients in both dry and delayed signals
- The enhancement affects the entire rhythmic pattern including repeats

**How to control it quickly**:
- Map Mobile Rack Amount to control transient enhancement
- Use delay feedback to control how much enhancement is repeated
- Create automation patterns that change enhancement during builds/drops
- Use FL Studio's step sequencer to program rhythmic enhancement changes

**Performance tips**:
- Use moderate Mobile Rack settings to avoid over-enhancement of delay repeats
- The combination creates rhythmic interest in both dry and delayed signals
- Sync delay times to project tempo for musical results
- Use this approach for creating rhythmic complexity and interest