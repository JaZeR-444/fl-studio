# FPC - Workflow Recipes

## 6-10 Recipes Combining FPC with Other FL Studio Tools

### Recipe 1: FPC + Fruity Convolver for Professional Drum Reverb
**Goal**: Create realistic drum reverb using FPC's individual pad routing with Fruity Convolver

**Step-by-step setup inside FL Studio**:
1. Insert FPC and set up a basic drum kit (kick, snare, hi-hats, toms)
2. Enable individual mixer routing for each pad (Route each pad to its own mixer track)
3. On the kick pad's mixer track, insert Fruity Convolver
4. Load a tight room impulse (short decay, 0.8-1.2s)
5. Set the send level to 15-20% for subtle reverb
6. On the snare pad's mixer track, insert Fruity Convolver
7. Load a plate reverb impulse (2.5-3.5s decay)
8. Set the send level to 30-40% for more snare reverb
9. On the hi-hat pad's mixer track, insert Fruity Convolver
10. Load a bright room impulse (1.5-2s decay)
11. Set the send level to 25-35% for appropriate hi-hat space
12. Group all drum mixer tracks to a single return for overall control
13. Add Fruity Limiter on the group track for level control
14. Use Fruity Parametric EQ 2 to shape the overall reverb character

**Routing notes**:
- Individual pad routing allows for per-drum reverb processing
- Different reverb types for different drum elements
- Group return track for overall reverb control
- This creates realistic drum mixing with appropriate spaces for each element

**How to control it quickly**:
- Map individual send levels to macros for quick reverb adjustment
- Use automation to change reverb levels during different song sections
- Create mixer track presets for different reverb approaches
- Group reverb controls to a single macro for overall adjustment

**Performance tips**:
- Use conservative reverb amounts to avoid washing out the drums
- Different reverb types per drum element create more realistic spaces
- Group control allows for reverb automation during builds/drops
- Check mono compatibility of the reverb settings

### Recipe 2: FPC + Fruity Peak Controller for Dynamic Drum Processing
**Goal**: Use Peak Controller to dynamically modulate FPC parameters based on input level

**Step-by-step setup inside FL Studio**:
1. Insert Fruity Peak Controller on the master track or a drum bus
2. Set Peak Controller to respond to the overall mix level (Ratio: 3:1, Attack: 10ms, Release: 200ms)
3. Insert FPC on a drum track or bus after Peak Controller
4. Configure FPC with interesting velocity layers (kick with 3 layers, snare with 3 layers)
5. Use Peak Controller's output to modulate FPC's Global Decay parameter
6. When the mix gets louder, the Peak Controller reduces decay to prevent muddiness
7. Add Fruity Parametric EQ 2 after FPC to compensate for level changes
8. Insert Fruity Limiter at the end for final level control
9. Use automation to adjust Peak Controller's threshold for different sections
10. Fine-tune the modulation amount for natural response

**Routing notes**:
- Peak Controller affects the signal level before FPC processing
- This creates dynamic response where louder sections trigger different FPC behavior
- The FPC processes the already-dynamic-controlled signal
- This creates compound dynamic processing

**How to control it quickly**:
- Adjust Peak Controller's threshold to change activation point
- Use Peak Controller's ratio to control intensity of FPC response
- Map Peak Controller's parameters to macros for easy adjustment
- Use automation to change the dynamic response over time

**Performance tips**:
- Use moderate Peak Controller settings to avoid over-compression before FPC
- Check for pumping artifacts when both processors are active
- The combination creates very responsive dynamic processing
- Use spectrum analysis to ensure the dynamic processing is musical

### Recipe 3: FPC + Edison for Sample Analysis and Enhancement
**Goal**: Use Edison's analysis to inform FPC pad settings and sample selection

**Step-by-step setup inside FL Studio**:
1. Insert Edison on a drum sample you want to analyze
2. Use Edison's FFT analysis to identify frequency characteristics of the sample
3. Insert FPC and load the same sample to a pad
4. Based on Edison's analysis, adjust FPC's pad filter settings to enhance or tame specific frequencies
5. If the sample has strong low-end, use FPC's filter to adjust the low-frequency content
6. If the sample has harsh high-end, use FPC's filter to tame it
7. Use Edison's pitch analysis to tune the FPC pad appropriately
8. Compare the original and FPC-processed versions using Edison's AB comparison
9. Fine-tune FPC settings based on the spectral analysis
10. Save the optimized pad settings as a preset

**Routing notes**:
- Use Edison to analyze samples before loading into FPC
- Apply FPC processing based on analysis findings
- Use Edison after processing to verify results
- This creates analysis-informed drum programming

**How to control it quickly**:
- Use Edison's snapshot feature to save reference spectra
- Create FPC presets based on different analysis results
- Map FPC's filter parameters to macros for quick adjustment
- Use Edison's real-time analysis while adjusting FPC

**Performance tips**:
- Use Edison's smoothing settings to get clearer frequency analysis
- Apply FPC adjustments gradually to avoid over-processing
- The combination creates frequency-aware drum programming
- Use spectrum analysis to verify the combined effect

### Recipe 4: FPC + Fruity Formula Controller for Complex Modulation
**Goal**: Use Formula Controller to create complex, evolving modulation patterns for FPC parameters

**Step-by-step setup inside FL Studio**:
1. Insert Fruity Formula Controller on an automation track
2. Create a formula that generates complex patterns (e.g., LFO1*sin(LFO2*time) for evolving modulation)
3. Insert FPC on a track with interesting rhythmic content
4. Use MIDI learn to map Formula Controller's output to FPC's Global Tune parameter
5. Set up another formula to modulate the Global Decay parameter
6. Adjust formula parameters to create interesting evolving patterns
7. Use FPC's internal pattern sequencer to create rhythmic content that interacts with the modulation
8. Add Fruity Convolver after for spatial enhancement of evolving textures
9. Use Fruity Parametric EQ 2 to shape the evolving sound
10. Apply Fruity Limiter to control any level fluctuations

**Routing notes**:
- Formula Controller generates complex modulation patterns
- Map different formulas to different FPC parameters
- The mathematical patterns create evolving, non-repetitive processing
- This creates algorithmic drum enhancement changes

**How to control it quickly**:
- Adjust formula parameters to change the modulation pattern
- Use different mathematical functions for different modulation behaviors
- Map formula variables to macros for real-time control
- Use automation to change formula parameters over time

**Performance tips**:
- Start with simple formulas and gradually increase complexity
- Monitor for artifacts when using complex modulation patterns
- Use the formula's period settings to sync with musical timing if desired
- The combination creates evolving, generative drum processing

### Recipe 5: FPC + Patcher for Advanced Drum Routing
**Goal**: Use Patcher to create complex routing with FPC and other effects for professional drum processing

**Step-by-step setup inside FL Studio**:
1. Insert Patcher on a drum bus that contains FPC tracks
2. Inside Patcher, route the main FPC output to multiple processing paths:
   - Path 1: Direct to output (for clarity)
   - Path 2: Through Fruity Fast Dist for saturation
   - Path 3: Through Fruity Convolver for reverb
   - Path 4: Through Fruity Delay for rhythmic effects
3. Use Fruity Balance inside Patcher to control the mix between paths
4. Add Fruity Limiter at the end of Patcher for level control
5. Use Fruity Formula Controller within Patcher for parameter modulation
6. Map FPC parameters to Patcher's macro controls
7. Create multiple macro configurations for different processing approaches
8. Use Patcher's interface to adjust balance between processing paths
9. Route the Patcher output back to the main mixer
10. Fine-tune the balance between processing paths

**Routing notes**:
- Use Patcher to split FPC signal into multiple processing paths
- Each path can have different effects processing
- Patcher allows for complex routing and macro control
- This creates professional, multi-path drum processing

**How to control it quickly**:
- Use Patcher's macro controls to adjust multiple parameters simultaneously
- Map FPC parameters to Patcher macros for centralized control
- Create multiple macro configurations for different processing approaches
- Use Patcher's interface to adjust balance between processing paths

**Performance tips**:
- Use moderate processing in each path to avoid over-processing
- Check for phase issues between parallel paths
- The combination allows for complex, nuanced drum processing
- Use spectrum analysis to ensure the combined effect is balanced

### Recipe 6: FPC + Fruity Limiter for Controlled Drum Dynamics
**Goal**: Use FPC for dynamic enhancement before controlled limiting

**Step-by-step setup inside FL Studio**:
1. Insert FPC on a drum track or bus
2. Set up FPC with velocity layers to enhance dynamic range (kick with 3 layers, snare with 3 layers)
3. Configure FPC to emphasize transients and dynamic response
4. Insert Fruity Limiter after FPC
5. Set Limiter to conservative settings (Ceiling: -0.1dB, Amount: 20-30%)
6. Use the Limiter to control peaks from FPC's enhanced dynamics
7. Adjust Limiter's release to preserve drum transients
8. Add Fruity Parametric EQ 2 after Limiter for final tonal adjustment
9. Use Fruity Meter 2 at the end to monitor levels and limiting
10. Fine-tune the balance between FPC enhancement and Limiter control

**Routing notes**:
- FPC enhances dynamics and adds character
- Limiter controls any peaks from the enhancement
- This creates dynamic drums with controlled output
- The order ensures enhancement happens before peak limiting

**How to control it quickly**:
- Adjust FPC enhancement and Limiter threshold as a pair
- Use Limiter's auto-release to adapt to FPC's dynamic changes
- Map both FPC parameters and Limiter Amount to a macro for density control
- Use automation to change both simultaneously for consistent results

**Performance tips**:
- Use conservative FPC settings to avoid over-compression by Limiter
- The combination creates dynamic drums without harsh limiting artifacts
- Monitor gain reduction on both FPC and Limiter
- Use this approach for drum bus dynamics control

### Recipe 7: FPC + Fruity Fast Dist for Character Enhancement
**Goal**: Combine FPC with Fast Dist for added character and harmonic enhancement

**Step-by-step setup inside FL Studio**:
1. Insert FPC on a track that needs character enhancement
2. Set up FPC with appropriate velocity layers for the source material
3. Insert Fruity Fast Dist after FPC
4. Set Fast Dist to moderate settings (Drive: 20-30%, Tone: 50%, Mix: 70-80%)
5. Use FPC to shape the dynamics before adding saturation
6. Use Fast Dist to add harmonic content to the dynamically-shaped signal
7. Add Fruity Parametric EQ 2 after Fast Dist to shape the saturated harmonics
8. Insert Fruity Limiter at the end for level control
9. Fine-tune the balance between FPC dynamics and Fast Dist saturation
10. Use automation to vary both FPC and Fast Dist parameters simultaneously

**Routing notes**:
- FPC processes dynamics first, then Fast Dist adds saturation
- This creates dynamic enhancement with added harmonic character
- The order affects the character of the enhancement
- The combination creates rich, dynamic sounds with character

**How to control it quickly**:
- Map FPC's Global parameters and Fast Dist's Drive to a macro for character control
- Use automation to change both simultaneously for consistent results
- Create presets that combine specific FPC settings with appropriate Fast Dist settings
- Use the Mix controls on both plugins to blend appropriately

**Performance tips**:
- Start with moderate Fast Dist settings to avoid harshness when combined with FPC
- The combination can create very musical character enhancement
- Monitor for clipping when both enhancement and saturation are high
- Use spectrum analysis to ensure the combined effect is musical

### Recipe 8: FPC + Fruity Delay 3 for Rhythmic Enhancement
**Goal**: Use FPC to enhance rhythmic elements before delay processing

**Step-by-step setup inside FL Studio**:
1. Insert FPC on a rhythmic track (drums, percussion, etc.)
2. Set up FPC to enhance the rhythmic elements (transient enhancement, velocity layers)
3. Configure FPC Banks with different enhancement approaches
4. Insert Fruity Delay 3 after FPC
5. Set Delay 3 to tempo-synced settings (1/8th or 1/16th notes)
6. Use moderate feedback (20-30%) and pan delays for width
7. Add Fruity Fast Dist after delay for saturation of delayed signals
8. Use low Drive (15-20%) to add character to delays without harshness
9. Insert Fruity Limiter at the end for level control
10. Use automation to vary FPC enhancement during different sections

**Routing notes**:
- FPC enhances the dry signal before delay
- Delay processes the enhanced signal
- This creates enhanced transients in both dry and delayed signals
- The enhancement affects the entire rhythmic pattern including repeats

**How to control it quickly**:
- Map FPC's Global parameters to control transient enhancement
- Use delay feedback to control how much enhancement is repeated
- Create automation patterns that change enhancement during builds/drops
- Use FL Studio's step sequencer to program rhythmic enhancement changes

**Performance tips**:
- Use moderate FPC settings to avoid over-enhancement of delay repeats
- The combination creates rhythmic interest in both dry and delayed signals
- Sync delay times to project tempo for musical results
- Use this approach for creating rhythmic complexity and interest