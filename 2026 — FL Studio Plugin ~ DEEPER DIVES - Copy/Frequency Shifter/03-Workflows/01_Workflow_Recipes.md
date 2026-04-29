# Frequency Shifter - Workflow Recipes

## 6-10 Recipes Combining Frequency Shifter with Other FL Studio Tools

### Recipe 1: Frequency Shifter + Fruity Convolver for Metallic Reverb
**Goal**: Create metallic, bell-like reverbs using frequency shifting on reverb returns

**Step-by-step setup inside FL Studio**:
1. Insert your source track (pad, synth, or vocal) in the Channel Rack
2. Create a return track for reverb processing
3. Insert Fruity Convolver on the return track
4. Load a hall or room impulse response (2.5-4s decay, 70% mix initially)
5. Insert Frequency Shifter on the same return track after Convolver
6. Set Frequency Shifter to +100Hz to +300Hz for metallic character
7. Set Mix to 80-90% to maintain reverb character
8. Keep Feedback at 0-10% to avoid instability
9. Route your source track to the reverb return with an appropriate send level
10. Add Fruity Parametric EQ 2 after the Frequency Shifter to shape the metallic reverb
11. Use gentle high-pass filtering around 100Hz to clean up low-end
12. Apply gentle low-pass filtering around 8kHz to tame harshness

**Routing notes**:
- Use post-fader sends to maintain consistent reverb levels regardless of track faders
- The Frequency Shifter processes the already-reverberated signal
- This creates metallic characteristics in the reverb tail
- Consider using multiple reverb returns with different shift amounts

**How to control it quickly**:
- Map Frequency Shifter amount to a macro for real-time metallic character control
- Use automation to change metallic character during different sections
- Create multiple reverb presets with different frequency shift amounts
- Use FL Studio's performance mode for live manipulation

**Performance tips**:
- Use moderate frequency shift amounts to avoid harsh metallic reverb
- Check mono compatibility of the metallic reverb effect
- The effect works best with longer reverb decays
- Use spectrum analysis to ensure the metallic character enhances rather than clashes

### Recipe 2: Frequency Shifter + Fruity Peak Controller for Dynamic Enhancement
**Goal**: Use Peak Controller to dynamically modulate Frequency Shifter parameters based on input level

**Step-by-step setup inside FL Studio**:
1. Insert Fruity Peak Controller on a track before Frequency Shifter
2. Set Peak Controller to respond to input dynamics (Ratio: 3:1, Attack: 5ms, Release: 150ms)
3. Insert Frequency Shifter after Peak Controller
4. Set Frequency Shifter to moderate settings (+100Hz, 40% Mix, 0% Feedback)
5. Use Peak Controller's output to modulate Frequency Shifter's frequency parameter
6. When the input signal is loud, the Peak Controller increases the frequency shift amount
7. When the input signal is quiet, the frequency shift returns to base value
8. Add Fruity Parametric EQ 2 after Frequency Shifter to shape the dynamic enhancement
9. Insert Fruity Limiter at the end to control any level changes
10. Fine-tune Peak Controller settings for desired dynamic response

**Routing notes**:
- Peak Controller affects the signal level before frequency shifting
- This creates dynamic response where louder signals get more frequency shifting
- The Frequency Shifter processes the already-dynamic-controlled signal
- This creates compound dynamic processing

**How to control it quickly**:
- Adjust Peak Controller's threshold to change activation point
- Use Peak Controller's ratio to control intensity of frequency shift response
- Map Peak Controller's parameters to macros for easy adjustment
- Use automation to change the dynamic response over time

**Performance tips**:
- Use moderate Peak Controller settings to avoid over-processing before Frequency Shifter
- Check for artifacts when both processors are active
- The combination creates responsive dynamic processing
- Use spectrum analysis to ensure the dynamic processing is musical

### Recipe 3: Frequency Shifter + Edison for Analysis-Based Enhancement
**Goal**: Use Edison's analysis to inform Frequency Shifter processing decisions

**Step-by-step setup inside FL Studio**:
1. Insert Edison on a track with interesting harmonic content
2. Use Edison's FFT analysis to identify frequency characteristics of the source
3. Insert Frequency Shifter after Edison
4. Based on Edison's analysis, set Frequency Shifter to enhance or modify specific frequency ranges
5. If the source has strong low-end, consider positive frequency shift to brighten
6. If the source has harsh high-end, consider negative frequency shift to darken
7. Set Mix to 50-70% to blend processed and original
8. Use Edison's AB comparison to compare original with frequency-shifted versions
9. Fine-tune Frequency Shifter settings based on spectral analysis
10. Apply Fruity Parametric EQ 2 after to compensate for any unwanted changes
11. Use Fruity Limiter to control output levels
12. Save the optimized settings as a template for similar sources

**Routing notes**:
- Use Edison to analyze the original signal before processing
- Apply Frequency Shifter based on analysis findings
- Use Edison after processing to verify results
- This creates analysis-informed frequency shifting

**How to control it quickly**:
- Use Edison's snapshot feature to save reference spectra
- Create Frequency Shifter presets based on different analysis results
- Map Frequency Shifter parameters to macros for quick adjustment
- Use Edison's real-time analysis while adjusting Frequency Shifter

**Performance tips**:
- Use Edison's smoothing settings to get clearer frequency analysis
- Apply Frequency Shifter adjustments gradually to avoid over-processing
- The combination creates frequency-aware processing
- Use spectrum analysis to verify the combined effect

### Recipe 4: Frequency Shifter + Fruity Formula Controller for Complex Modulation
**Goal**: Use Formula Controller to create complex, evolving modulation patterns for Frequency Shifter

**Step-by-step setup inside FL Studio**:
1. Insert Fruity Formula Controller on an automation track
2. Create a formula that generates complex patterns (e.g., LFO1*sin(LFO2*time) for evolving modulation)
3. Insert Frequency Shifter on the target track
4. Set base Frequency Shifter parameters (+150Hz, 60% Mix, 15% Feedback)
5. Use MIDI learn to map Formula Controller's output to Frequency Shifter's Frequency parameter
6. Adjust formula parameters to create interesting evolving patterns
7. Use the formula's period settings to sync with musical timing if desired
8. Add Fruity Parametric EQ 2 after Frequency Shifter to shape the evolving sound
9. Insert Fruity Limiter at the end to control any level fluctuations
10. Use automation to adjust formula parameters over time
11. Monitor with spectrum analyzer to visualize the evolving frequency content
12. Fine-tune the formula for desired evolution characteristics

**Routing notes**:
- Formula Controller generates complex modulation patterns
- Map formula output to Frequency Shifter parameters
- The mathematical patterns create evolving, non-repetitive processing
- This creates algorithmic frequency shifting changes

**How to control it quickly**:
- Adjust formula parameters to change the modulation pattern
- Use different mathematical functions for different modulation behaviors
- Map formula variables to macros for real-time control
- Use automation to change formula parameters over time

**Performance tips**:
- Start with simple formulas and gradually increase complexity
- Monitor for artifacts when using complex modulation patterns
- Use the formula's period settings to sync with musical timing
- The combination creates evolving, generative frequency shifting

### Recipe 5: Frequency Shifter + Patcher for Advanced Routing
**Goal**: Use Patcher to create complex routing with Frequency Shifter and other effects

**Step-by-step setup inside FL Studio**:
1. Insert Patcher on a track that needs complex processing
2. Inside Patcher, route the main signal to Frequency Shifter
3. Configure Frequency Shifter with interesting settings (+200Hz, 70% Mix, 25% Feedback)
4. Create a parallel path with Fruity Fast Dist for saturation
5. Create another parallel path with Fruity Convolver for reverb
6. Use Fruity Balance to control the mix between paths
7. Add Fruity Limiter at the end of Patcher for level control
8. Use Fruity Formula Controller within Patcher for parameter modulation
9. Map parameters to Patcher's macro controls
10. Create a comprehensive processing chain with Frequency Shifter as the centerpiece
11. Use Fruity Parametric EQ 2 after Patcher for final tonal adjustment
12. Fine-tune the balance between processing paths

**Routing notes**:
- Use Patcher to split signal into multiple processing paths
- Frequency Shifter processes the main signal path
- Parallel paths add additional processing layers
- Patcher allows for complex routing and macro control

**How to control it quickly**:
- Use Patcher's macro controls to adjust multiple parameters simultaneously
- Map Frequency Shifter parameters to Patcher macros for centralized control
- Create multiple macro configurations for different processing approaches
- Use Patcher's interface to adjust balance between processing paths

**Performance tips**:
- Use moderate processing in each path to avoid over-processing
- Check for phase issues between parallel paths
- The combination allows for complex, nuanced processing
- Use spectrum analysis to ensure the combined effect is balanced

### Recipe 6: Frequency Shifter + Fruity Fast Dist for Character Enhancement
**Goal**: Combine Frequency Shifter with Fast Dist for added character and harmonic enhancement

**Step-by-step setup inside FL Studio**:
1. Insert Fruity Fast Dist on a track (for initial saturation)
2. Set Fast Dist to moderate settings (Drive: 20-30%, Tone: 50%, Mix: 70-80%)
3. Insert Frequency Shifter after Fast Dist
4. Set Frequency Shifter to +100Hz to +300Hz for character enhancement
5. Set Frequency Shifter Mix to 60-80% for effective processing
6. Keep Feedback low (0-15%) to avoid instability with distortion
7. The saturation from Fast Dist provides rich harmonics for frequency shifting
8. Add Fruity Parametric EQ 2 after Frequency Shifter to shape the enhanced harmonics
9. Insert Fruity Limiter at the end for level control
10. Use automation to change both Fast Dist and Frequency Shifter parameters simultaneously
11. Fine-tune the balance between saturation and frequency shifting
12. Check for harshness and adjust parameters accordingly

**Routing notes**:
- Fast Dist adds saturation before frequency shifting
- Frequency Shifter processes the already-saturated signal
- This creates frequency shifting of saturated harmonics
- The order affects the character of the enhancement

**How to control it quickly**:
- Map Fast Dist Drive and Frequency Shifter Amount to a macro for character control
- Use automation to change both simultaneously for consistent results
- Create presets that combine specific Fast Dist settings with appropriate Frequency Shifter settings
- Use the Mix controls on both plugins to blend appropriately

**Performance tips**:
- Start with moderate Fast Dist settings to avoid harshness when frequency shifted
- The combination can create very musical character enhancement
- Monitor for clipping when both enhancement and saturation are high
- Use spectrum analysis to ensure the combined effect is musical

### Recipe 7: Frequency Shifter + Fruity Delay 3 for Rhythmic Enhancement
**Goal**: Use Frequency Shifter to enhance rhythmic elements before delay processing

**Step-by-step setup inside FL Studio**:
1. Insert Frequency Shifter on a rhythmic track (drums, percussion, or rhythmic synth)
2. Set Frequency Shifter to +50Hz to +200Hz for subtle enhancement
3. Set Mix to 70-80% to maintain rhythmic clarity
4. Keep Feedback low (0-10%) to avoid instability with delay
5. Insert Fruity Delay 3 after Frequency Shifter
6. Set Delay 3 to tempo-synced settings (1/8th or 1/16th notes)
7. Use moderate feedback (20-30%) and pan delays for width
8. The Frequency Shifter enhances the dry signal before delay
9. Delay processes the frequency-shifted signal
10. This creates enhanced transients in both dry and delayed signals
11. Add Fruity Fast Dist after delay for saturation of delayed signals
12. Use Fruity Limiter at the end for level control

**Routing notes**:
- Frequency Shifter enhances the dry signal before delay
- Delay processes the frequency-shifted signal
- This creates frequency-shifted content in both dry and delayed signals
- The enhancement affects the entire rhythmic pattern including repeats

**How to control it quickly**:
- Map Frequency Shifter Amount to control rhythmic enhancement
- Use delay feedback to control how much enhancement is repeated
- Create automation patterns that change enhancement during builds/drops
- Use FL Studio's step sequencer to program rhythmic enhancement changes

**Performance tips**:
- Use moderate Frequency Shifter settings to avoid over-enhancement of delay repeats
- The combination creates rhythmic interest in both dry and delayed signals
- Sync delay times to project tempo for musical results
- Use this approach for creating rhythmic complexity and interest

### Recipe 8: Frequency Shifter + Fruity Limiter for Controlled Enhancement
**Goal**: Use Frequency Shifter for dynamic enhancement before controlled limiting

**Step-by-step setup inside FL Studio**:
1. Insert Frequency Shifter on a track that needs character enhancement
2. Set Frequency Shifter to +100Hz to +300Hz for character addition
3. Set Mix to 60-80% for effective enhancement
4. Keep Feedback low (0-15%) to maintain stability with limiting
5. Insert Fruity Limiter after Frequency Shifter
6. Set Limiter to conservative settings (Ceiling: -0.1dB, Amount: 20-30%)
7. Use the Limiter to catch peaks from Frequency Shifter enhancement
8. Add Fruity Parametric EQ 2 after Limiter for final tonal adjustment
9. Use Fruity Meter 2 at the end to monitor levels and limiting
10. Fine-tune the balance between Frequency Shifter enhancement and Limiter control
11. Adjust Limiter's release to preserve any transients from the frequency shifting
12. Use automation to vary both parameters for dynamic results

**Routing notes**:
- Frequency Shifter adds character and enhancement
- Limiter catches any peaks from the enhancement
- This creates character without harsh limiting artifacts
- The order ensures enhancement happens before peak limiting

**How to control it quickly**:
- Adjust Frequency Shifter enhancement and Limiter threshold as a pair
- Use Limiter's auto-release to adapt to Frequency Shifter's dynamic changes
- Map both Frequency Shifter Amount and Limiter Amount to a macro for density control
- Use automation to change both simultaneously for consistent results

**Performance tips**:
- Use conservative Frequency Shifter settings to avoid over-compression by Limiter
- The combination creates character and loudness without harsh artifacts
- Monitor gain reduction on both Frequency Shifter and Limiter
- Use this approach for track character enhancement with controlled output

### Recipe 9: Frequency Shifter + Fruity Parametric EQ 2 for Surgical Enhancement
**Goal**: Use EQ before and after Frequency Shifter for precise frequency control

**Step-by-step setup inside FL Studio**:
1. Insert Fruity Parametric EQ 2 on a track (for input shaping)
2. Apply high-pass filter around 80Hz to clean up low-end before processing
3. Insert Frequency Shifter after the input EQ
4. Set Frequency Shifter to +150Hz with 70% Mix and 20% Feedback
5. Insert another Fruity Parametric EQ 2 after Frequency Shifter
6. Use the post-Frequency Shifter EQ to shape the enhanced harmonics
7. Apply gentle high-shelf around 8kHz (1-2dB) to enhance the brightness
8. Use notch filtering to tame any harsh frequencies created by shifting
9. Add Fruity Limiter after the final EQ for level control
10. Use spectrum analyzer to visualize the before/after frequency response
11. Fine-tune both EQs to complement the frequency shifting effect
12. Save the complete chain as a template for similar applications

**Routing notes**:
- Pre-EQ shapes the input before frequency shifting
- Post-EQ shapes the enhanced output
- This allows for surgical control of both input and output
- The combination creates precise frequency enhancement

**How to control it quickly**:
- Map key EQ bands and Frequency Shifter parameters to macros
- Use automation to change both EQ and shifting simultaneously
- Create presets that combine specific EQ settings with Frequency Shifter configurations
- Use spectrum analyzer for visual feedback during adjustments

**Performance tips**:
- Use gentle EQ settings to avoid over-processing
- The combination allows for very precise frequency control
- Check for phase issues when using multiple EQs
- Use spectrum analysis to ensure the combined effect is musical