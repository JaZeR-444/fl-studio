# EQUO - Workflow Recipes

## 6-10 Recipes Combining EQUO with Other FL Studio Tools

### Recipe 1: EQUO + Fruity Convolver for Morphing Reverb Spaces
**Goal**: Create evolving reverb spaces that morph between different acoustic environments

**Step-by-step setup inside FL Studio**:
1. Insert EQUO on a track with interesting harmonic content (vocals, pads, or guitars)
2. Set EQUO to VOL mode with Banks 1-4 configured for different frequency responses:
   - Bank 1: Emphasize low-mids (200-500Hz) for room-like response
   - Bank 2: Emphasize highs (5-10kHz) for hall-like brightness
   - Bank 3: Emphasize lows (50-150Hz) for cavernous effect
   - Bank 4: Flat response for neutral baseline
3. Send EQUO output to a dedicated return track
4. Insert Fruity Convolver on the return track
5. Load a large hall impulse response
6. Set Convolver to 100% wet signal
7. Use the X/Y pad on EQUO to morph between different frequency responses
8. This changes which frequencies are sent to the reverb, creating morphing spatial characteristics
9. Add Fruity Limiter on the return track to control any level changes
10. Use automation to create evolving spatial morphs throughout the track

**Routing notes**:
- Use post-fader sends to maintain consistent reverb levels regardless of EQUO output
- The EQUO processes the dry signal before it's sent to the reverb
- This creates frequency-dependent reverb characteristics

**How to control it quickly**:
- Map the X/Y pad to a MIDI controller for real-time morphing
- Use automation clips for complex morphing patterns
- Create macro controls for quick access to different spatial characters

**Performance tips**:
- Use conservative EQUO settings to avoid extreme frequency changes
- Monitor the reverb return level to prevent overwhelming the mix
- Use high-pass filtering on the reverb return to prevent low-end buildup

### Recipe 2: EQUO + Fruity Peak Controller for Dynamic Filtering
**Goal**: Create dynamic filtering that responds to the input signal's level

**Step-by-step setup inside FL Studio**:
1. Insert Fruity Peak Controller on a track before EQUO
2. Set Peak Controller to compress with a 2:1 ratio, fast attack, medium release
3. Insert EQUO after Peak Controller
4. Configure EQUO Banks 1-3 with different EQ curves:
   - Bank 1: Emphasize lows and highs (V-shaped curve)
   - Bank 2: Flat response
   - Bank 3: Emphasize mids (dip lows and highs)
5. Set X/Y pad to morph between these banks based on the Peak Controller's gain reduction
6. Use Peak Controller's output to modulate the X/Y position via automation modulation
7. Adjust the Peak Controller's curve to determine when different EQ curves are activated
8. Set EQUO Mix to 80-90% to maintain some original character
9. Add Fruity Parametric EQ 2 after for final tonal adjustment
10. Use Fruity Limiter at the end to control any level changes

**Routing notes**:
- Peak Controller affects the signal level which then influences the EQUO morphing
- The dynamic response comes from the Peak Controller's gain changes
- EQUO morphs based on the level changes from Peak Controller

**How to control it quickly**:
- Adjust Peak Controller's threshold to change the activation point
- Use Peak Controller's ratio to control the intensity of morphing
- Map Peak Controller's parameters to macros for easy adjustment

**Performance tips**:
- Use moderate compression settings to avoid over-processing
- Check for artifacts when the morphing occurs rapidly
- Use the Peak Controller's smooth response settings to prevent clicks

### Recipe 3: EQUO + Edison for Analysis-Based Enhancement
**Goal**: Use Edison to analyze a reference track and apply similar characteristics with EQUO

**Step-by-step setup inside FL Studio**:
1. Insert Edison on a reference track that has the tonal character you want to match
2. Use Edison's FFT analysis to identify key frequency characteristics
3. Insert EQUO on the target track
4. Create Banks in EQUO that emphasize similar frequency ranges as identified in Edison:
   - Bank 1: Based on the reference track's low-end characteristics
   - Bank 2: Based on the reference track's mid-range characteristics
   - Bank 3: Based on the reference track's high-end characteristics
5. Use Edison's spectrum analyzer while adjusting EQUO to match the reference
6. Set EQUO Mix to 70-80% to blend processed and original
7. Use the X/Y pad to morph between different "reference" characteristics
8. Compare the processed track with the reference using Edison's AB comparison
9. Fine-tune the EQUO curves to match the reference's spectral profile
10. Save the EQUO settings as a preset for future use

**Routing notes**:
- Use Edison's analysis to inform EQUO's curve shapes
- A/B compare using Edison to match tonal characteristics
- Use Edison's FFT display to visualize the changes

**How to control it quickly**:
- Use Edison's snapshot feature to save reference spectra
- Create EQUO presets that match different reference tracks
- Map EQUO's X/Y pad to a controller for real-time morphing between reference characteristics

**Performance tips**:
- Use Edison's smoothing settings to get clearer frequency analysis
- Compare the processed signal with the reference in both spectrum and time domains
- Use moderate EQUO settings to avoid over-processing

### Recipe 4: EQUO + Fruity Formula Controller for Complex Modulation
**Goal**: Create complex, mathematically-derived modulation patterns for EQUO morphing

**Step-by-step setup inside FL Studio**:
1. Insert Fruity Formula Controller on a blank automation track
2. Create a formula that generates complex morphing patterns (e.g., sine waves with different frequencies)
3. Insert EQUO on the target track
4. Configure EQUO Banks 1-4 with dramatically different EQ curves:
   - Bank 1: Low-pass filter shape
   - Bank 2: High-pass filter shape
   - Bank 3: Band-pass filter shape
   - Bank 4: Notch filter shape
5. Use MIDI learn to map Formula Controller's output to EQUO's X and Y parameters
6. Set one formula output to control X axis, another to control Y axis
7. Adjust the formula parameters to create interesting morphing patterns
8. Use EQUO's Mix control at 85-95% for effective processing
9. Add Fruity Parametric EQ 2 after EQUO for final tonal adjustment
10. Use Fruity Limiter to control any level fluctuations

**Routing notes**:
- Formula Controller generates complex modulation patterns
- Map different formula outputs to X and Y axes for 2D morphing
- The mathematical patterns create evolving, non-repetitive morphing

**How to control it quickly**:
- Adjust formula parameters to change the morphing pattern
- Use different mathematical functions for different morphing behaviors
- Map formula variables to macros for real-time control

**Performance tips**:
- Start with simple formulas and gradually increase complexity
- Monitor for artifacts when using complex morphing patterns
- Use the formula's period settings to sync with musical timing if desired

### Recipe 5: EQUO + Patcher for Advanced Routing
**Goal**: Use Patcher to create complex routing with multiple EQUO instances for different frequency bands

**Step-by-step setup inside FL Studio**:
1. Insert Patcher on a track that needs complex frequency-dependent processing
2. Inside Patcher, create three routing paths using Fruity Formula Controller:
   - Low band: Frequencies below 200Hz
   - Mid band: Frequencies 200Hz-2kHz
   - High band: Frequencies above 2kHz
3. Insert a separate EQUO instance on each frequency band
4. Configure each EQUO instance with appropriate banks for its frequency range:
   - Low EQUO: Banks emphasizing different low-end characteristics
   - Mid EQUO: Banks emphasizing different mid-range characteristics
   - High EQUO: Banks emphasizing different high-end characteristics
5. Route the outputs of all three EQUOs back to Patcher's output
6. Use the X/Y pads on each EQUO independently for different morphing per band
7. Add Fruity Limiter at the end of Patcher to control overall level
8. Use Fruity Parametric EQ 2 after Patcher for final tonal balance
9. Adjust the crossover points in Formula Controller for smooth band separation
10. Fine-tune each EQUO's Mix setting for appropriate band blending

**Routing notes**:
- Use Patcher to split the signal into frequency bands
- Process each band with its own EQUO instance
- Recombine the bands after processing
- This allows for independent morphing per frequency range

**How to control it quickly**:
- Create macros in Patcher to control multiple EQUO instances simultaneously
- Map different controllers to different EQUO instances for per-band control
- Use Patcher's interface to adjust crossover points

**Performance tips**:
- Use gentle crossover slopes to avoid phase issues between bands
- Monitor the combined output for phase coherence
- Check for level imbalances between frequency bands

### Recipe 6: EQUO + Fruity Soft Clipper for Harmonic Enhancement
**Goal**: Use EQUO for dynamic EQ followed by soft clipping for harmonic enhancement

**Step-by-step setup inside FL Studio**:
1. Insert EQUO on a track that needs harmonic enhancement (bass, synths, or drums)
2. Configure EQUO Banks 1-3 with curves that emphasize different harmonic regions:
   - Bank 1: Emphasize fundamentals and first harmonics
   - Bank 2: Emphasize mid-range harmonics (2-5kHz)
   - Bank 3: Emphasize high harmonics (5-10kHz)
3. Insert Fruity Soft Clipper after EQUO
4. Set Soft Clipper to add subtle saturation (20-30% Drive)
5. Use the X/Y pad to morph between different harmonic emphasis approaches
6. Set EQUO Mix to 75-85% for effective processing with natural blend
7. Adjust Soft Clipper's output to match the input level
8. Add Fruity Parametric EQ 2 after for final harmonic balance
9. Use Fruity Limiter if the combination creates unwanted level changes
10. Fine-tune the balance between EQUO's EQ morphing and Soft Clipper's saturation

**Routing notes**:
- EQUO processes the EQ before harmonic enhancement
- Soft Clipper adds saturation to the already EQ'd signal
- This creates frequency-dependent harmonic enhancement

**How to control it quickly**:
- Map EQUO's X/Y pad and Soft Clipper's Drive to different controller axes
- Use automation to change both EQ morphing and saturation simultaneously
- Create presets that combine specific EQUO banks with appropriate clipper settings

**Performance tips**:
- Use conservative saturation settings to avoid harshness
- The combination of EQ morphing and saturation creates complex harmonic evolution
- Check for clipping when both EQUO and Soft Clipper are set to high values

### Recipe 7: EQUO + Fruity Fast Dist for Creative Distortion Morphing
**Goal**: Morph between different distortion characteristics using EQUO's frequency selection

**Step-by-step setup inside FL Studio**:
1. Insert Fruity Fast Dist on a track (set to moderate drive, 30-40%)
2. Insert EQUO after Fast Dist
3. Configure EQUO Banks 1-4 to emphasize different aspects of the distorted signal:
   - Bank 1: Emphasize low-end clarity in the distorted signal
   - Bank 2: Emphasize mid-range presence in the distorted signal
   - Bank 3: Emphasize high-end harmonics in the distorted signal
   - Bank 4: Create a "de-emphasized" version for cleaner sections
4. Set EQUO to VOL mode with Mix at 80-90%
5. Use the X/Y pad to morph between different frequency emphases in the distorted signal
6. Add Fruity Parametric EQ 2 after EQUO to fine-tune the distorted character
7. Insert Fruity Limiter to control any level changes from the morphing
8. Use automation to create evolving distortion characteristics
9. Adjust Fast Dist's drive based on which EQUO bank is most prominent
10. Save the combination as a preset for future use

**Routing notes**:
- Distortion comes first, then frequency morphing
- EQUO shapes the frequency content of the already-distorted signal
- This allows for morphing between different distorted tonal characters

**How to control it quickly**:
- Map EQUO's X/Y pad to a controller for real-time morphing of distortion character
- Use Fast Dist's Drive parameter as a macro to control overall intensity
- Create automation patterns that combine distortion drive changes with EQUO morphing

**Performance tips**:
- Be careful with extreme settings as distortion + EQ morphing can create harsh artifacts
- Use the Mix control to blend processed and unprocessed for smoother transitions
- Monitor for clipping when emphasizing already-distorted harmonics

### Recipe 8: EQUO + Fruity Balance for Stereo Enhancement
**Goal**: Use EQUO in PAN mode combined with Fruity Balance for dynamic stereo enhancement

**Step-by-step setup inside FL Studio**:
1. Insert EQUO on a stereo track
2. Set EQUO to PAN mode (this maps frequency to stereo position)
3. Configure Banks 1-3 with different stereo enhancement approaches:
   - Bank 1: Low frequencies center, highs wide (traditional approach)
   - Bank 2: Mid frequencies center, lows and highs wide (vocal-friendly)
   - Bank 3: All frequencies wide (maximum width)
4. Insert Fruity Balance after EQUO
5. Use Fruity Balance to adjust the overall stereo width and balance
6. Use the X/Y pad to morph between different stereo imaging approaches
7. Set EQUO Mix to 70-80% to maintain some original stereo character
8. Add Fruity Stereo Enhancer after if additional stereo processing is needed
9. Use Fruity Limiter to control any level changes from the stereo processing
10. Check mono compatibility regularly during the morphing process

**Routing notes**:
- EQUO in PAN mode maps frequency to stereo position
- Fruity Balance provides overall stereo control after frequency-based panning
- This creates dynamic stereo imaging that changes with frequency content

**How to control it quickly**:
- Map EQUO's X/Y pad for real-time stereo morphing
- Use Fruity Balance's controls for overall stereo adjustment
- Create automation for evolving stereo landscapes

**Performance tips**:
- Always check mono compatibility when using stereo enhancement
- Use conservative settings to avoid phase issues
- The PAN mode in EQUO creates frequency-dependent stereo positioning