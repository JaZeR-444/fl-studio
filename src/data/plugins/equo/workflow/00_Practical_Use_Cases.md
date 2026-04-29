# EQUO - Practical Use Cases

## 8-12 Real Use Cases with Step-by-Step Setup

### Use Case 1: Morphing Filter Sweep for Build-ups
**Goal**: Create a morphing filter sweep that transitions between different EQ curves for tension and release

**Step-by-step setup inside FL Studio**:
1. Insert EQUO on a track with a sustained pad or chord progression
2. In Bank 1, draw a low-pass filter curve (high frequencies attenuated)
3. In Bank 2, draw a flat response curve (all frequencies at 0dB)
4. In Bank 3, draw a high-pass filter curve (low frequencies attenuated)
5. Set the X/Y pad to Bank 1 position initially (bottom-left)
6. Create an automation clip for the X/Y pad position
7. Draw a path from Bank 1 to Bank 2 over 8 bars for a build-up
8. Add a return from Bank 2 to Bank 1 for the drop/release
9. Adjust Mix to 80-90% for effective morphing
10. Fine-tune the morphing path for smooth transitions

**Recommended starting settings/ranges**:
- Banks 1-3: Different EQ curves for morphing
- Mix: 80-95% for effective morphing
- Bandwidth: 50-70% for smooth transitions
- Shift: 0-20% to avoid frequency misalignment

**Why it works / what to listen for**:
- The morphing creates smooth transitions between different EQ states
- Different frequency responses create tension and release
- Listen for smooth, musical transitions between EQ curves
- The physical modeling of the morphing creates natural-sounding transitions

**Variations**:
1. **Vowel Formant Morphing**: Create vowel shapes in different banks (A, E, I, O, U) for talking effects
2. **Rhythmic Morphing**: Use step automation to create rhythmic filter changes
3. **All 8 Banks**: Create complex morphing paths through all 8 banks for evolving textures

**Pitfalls + quick fixes**:
- Pitfall: Morphing creates harsh artifacts
  - Fix: Increase bandwidth to 60-70% and ensure curves in banks are not too extreme
- Pitfall: Sweep doesn't align with musical timing
  - Fix: Use grid-aligned automation and match to bar/beat divisions

### Use Case 2: Creative Vowel Filtering for Vocal-like Effects
**Goal**: Use EQUO to create vowel-like filtering effects similar to a vocoder

**Step-by-step setup inside FL Studio**:
1. Insert EQUO on a vocal track or a carrier signal (sawtooth wave works well)
2. In Bank 1, create a formant filter shape that resembles an "A" vowel
3. In Bank 2, create a formant filter shape for "E" vowel
4. In Bank 3, create a formant filter shape for "I" vowel
5. In Bank 4, create a formant filter shape for "O" vowel
6. In Bank 5, create a formant filter shape for "U" vowel
7. Set X/Y pad to interpolate between these vowel banks
8. Use moderate Mix (70-80%) to preserve vocal clarity
9. Apply light compression after EQUO to even out dynamics
10. Add subtle reverb for spatial enhancement

**Recommended starting settings/ranges**:
- Banks 1-5: Vowel formant shapes
- Mix: 70-85% for vocal clarity
- Bandwidth: 40-60% for natural formant response
- Shift: 0-10% to maintain natural pitch relationships

**Why it works / what to listen for**:
- The formant filtering emphasizes specific frequency regions that mimic vocal tract resonances
- Different vowel shapes emphasize different frequency bands
- Listen for vowel-like character in the processed sound
- The morphing between vowels creates talking or singing effects

**Variations**:
1. **Consonant Effects**: Add sharp attacks in some banks to simulate consonants
2. **Melodic Morphing**: Map vowel banks to MIDI notes for melodic vowel changes
3. **Carrier Modulation**: Use different carrier signals (sawtooth, square, complex tones)

**Pitfalls + quick fixes**:
- Pitfall: Vowel sounds are unclear or indistinct
  - Fix: Make formant peaks more pronounced and use appropriate bandwidth
- Pitfall: Effect sounds too synthetic
  - Fix: Reduce Mix to 60-70% and add more natural-sounding source material

### Use Case 3: Stereo Enhancement with Frequency-Based Panning
**Goal**: Use EQUO's PAN mode to create frequency-dependent stereo enhancement

**Step-by-step setup inside FL Studio**:
1. Insert EQUO on a mono track that needs stereo enhancement
2. Switch to PAN mode (instead of VOL mode)
3. In Bank 1, create a flat curve (all frequencies centered)
4. In Bank 2, create a curve that pans low frequencies center, mids left, highs right
5. In Bank 3, create a curve that pans low frequencies center, mids right, highs left
6. Set Mix to 70-80% to blend original with enhanced stereo
7. Use X/Y pad to morph between different stereo imaging approaches
8. Add a spectrum analyzer to monitor stereo field changes
9. Fine-tune the morphing for musical stereo enhancement
10. Check mono compatibility regularly

**Recommended starting settings/ranges**:
- Mode: PAN for frequency-based panning
- Banks 1-3: Different stereo imaging curves
- Mix: 70-85% for natural enhancement
- Bandwidth: 50-65% for smooth transitions

**Why it works / what to listen for**:
- Different frequencies are positioned differently in the stereo field
- Creates natural-sounding stereo enhancement without phase issues
- Listen for wider, more immersive stereo image
- The morphing allows for dynamic stereo field changes

**Variations**:
1. **Wide Mix Enhancement**: Use for adding width to dense mixes
2. **Rhythmic Stereo**: Create rhythmic stereo changes with automation
3. **Mono-Compatible**: Ensure extreme settings maintain mono compatibility

**Pitfalls + quick fixes**:
- Pitfall: Stereo enhancement causes phase cancellation in mono
  - Fix: Reduce the extreme panning in high frequencies and check mono regularly
- Pitfall: Stereo sounds unnatural or artificial
  - Fix: Reduce Mix to 60-70% and use more subtle panning curves

### Use Case 4: Frequency-Dependent Effects Routing
**Goal**: Use EQUO's SEND mode to route different frequencies to different effects

**Step-by-step setup inside FL Studio**:
1. Insert EQUO in SEND mode on a track with complex frequency content
2. In Bank 1, create a curve that sends lows to one return track and highs to another
3. In Bank 2, create a curve that emphasizes mid frequencies to a third return
4. Create three return tracks with different effects:
   - Return 1: Reverb for low frequencies
   - Return 2: Delay for high frequencies
   - Return 3: Chorus for mid frequencies
5. Route EQUO's SEND output to these return tracks
6. Adjust the EQ curves to control how much of each frequency range goes to each effect
7. Use X/Y pad to morph between different routing approaches
8. Use Mix to blend processed and unprocessed signals
9. Fine-tune the routing for optimal effect distribution
10. Monitor the individual return tracks to ensure balanced processing

**Recommended starting settings/ranges**:
- Mode: SEND for frequency-dependent routing
- Banks 1-2: Different routing curves
- Mix: 80-90% for effective routing
- Bandwidth: 40-60% for controlled frequency separation

**Why it works / what to listen for**:
- Different frequency ranges are processed by different effects
- Creates complex, evolving textures as frequencies morph between effects
- Listen for frequency-specific processing that changes over time
- The morphing allows for dynamic routing changes

**Variations**:
1. **Genre-Specific Routing**: Route frequencies to genre-appropriate effects
2. **Rhythmic Routing**: Create rhythmic changes in routing with automation
3. **Creative Combinations**: Combine with other effects for unique results

**Pitfalls + quick fixes**:
- Pitfall: Effects overwhelm the original signal
  - Fix: Reduce Mix to 60-70% and adjust return track levels
- Pitfall: Frequency separation is too obvious or unnatural
  - Fix: Increase bandwidth to 60-70% for smoother transitions between frequency bands

### Use Case 5: Dynamic EQ Alternative
**Goal**: Use EQUO as a creative alternative to dynamic EQ with morphing capabilities

**Step-by-step setup inside FL Studio**:
1. Insert EQUO on a track that needs dynamic EQ treatment
2. In Bank 1, create an EQ curve that addresses one set of frequency issues
3. In Bank 2, create an EQ curve for a different section with different needs
4. In Bank 3, create a flat curve for untreated sections
5. Use the X/Y pad to morph between different EQ treatments as the song progresses
6. Apply moderate Mix (70-80%) to blend treatments
7. Use automation to change the morph position during different song sections
8. Add a spectrum analyzer to visualize the changes
9. Fine-tune the curves to address specific frequency problems
10. Save the configuration as a template for similar applications

**Recommended starting settings/ranges**:
- Banks 1-3: Different EQ treatments for different sections
- Mix: 70-85% for transparent treatment
- Bandwidth: 50-70% for natural transitions
- Shift: 0-15% to maintain frequency relationships

**Why it works / what to listen for**:
- Different EQ curves can be applied to different sections of a song
- Morphing allows for smooth transitions between different treatments
- Listen for appropriate EQ treatment that changes with the music
- The visual interface makes EQ adjustments more intuitive

**Variations**:
1. **Vocal Treatment**: Different EQ for verse/chorus sections
2. **Instrument Evolution**: Change EQ character throughout a piece
3. **Mix Enhancement**: Different EQ for different mix sections

**Pitfalls + quick fixes**:
- Pitfall: EQ changes are too abrupt or obvious
  - Fix: Use smoother curves and higher bandwidth settings
- Pitfall: Morphing creates unwanted artifacts
  - Fix: Ensure similar gain levels across banks and use appropriate bandwidth

### Use Case 6: Creative Sound Design with Extreme Morphing
**Goal**: Use EQUO for creative sound design with extreme morphing between banks

**Step-by-step setup inside FL Studio**:
1. Insert EQUO on a sound design track with interesting harmonic content
2. In Bank 1, create a radical EQ curve (extreme cuts and boosts)
3. In Bank 2, create an opposite curve (boosts where Bank 1 cuts)
4. In Bank 3, create a comb-filter effect with alternating cuts/boosts
5. In Bank 4, create a narrow bandpass filter effect
6. Set X/Y pad to morph between these extreme curves
7. Use high Mix (90-100%) to fully hear the processing
8. Add automation to create evolving morphing patterns
9. Experiment with different morphing paths through the banks
10. Record the morphing automation for complex evolving textures

**Recommended starting settings/ranges**:
- Banks 1-4: Extreme, contrasting EQ curves
- Mix: 90-100% for full effect
- Bandwidth: 30-50% for more dramatic transitions
- Shift: 0-25% for additional frequency manipulation

**Why it works / what to listen for**:
- Extreme morphing creates unique, evolving textures
- Contrasting curves create interesting harmonic interactions
- Listen for complex, evolving timbral changes
- The morphing creates movement that static EQ cannot achieve

**Variations**:
1. **Rhythmic Morphing**: Sync morphing to tempo for rhythmic effects
2. **Random Morphing**: Use random automation for aleatoric textures
3. **Resonance Effects**: Create metallic, resonant textures with extreme settings

**Pitfalls + quick fixes**:
- Pitfall: Sound becomes too harsh or fatiguing
  - Fix: Reduce Mix to 70-80% and moderate the extreme EQ settings
- Pitfall: Morphing creates unwanted artifacts
  - Fix: Increase bandwidth to 50-60% for smoother transitions

### Use Case 7: Bass Enhancement with Morphing Character
**Goal**: Enhance bass with morphing character changes for dynamic low-end

**Step-by-step setup inside FL Studio**:
1. Insert EQUO on a bass track
2. In Bank 1, create a curve that emphasizes fundamental frequencies
3. In Bank 2, create a curve that emphasizes harmonic content and attack
4. In Bank 3, create a curve that adds sub-bass enhancement
5. Use VOL mode for amplitude changes
6. Set Mix to 75-85% to maintain bass foundation
7. Use X/Y pad to morph between different bass characters
8. Apply light compression after EQUO to control dynamics
9. Use automation to change bass character during different sections
10. Monitor with spectrum analyzer to ensure balanced low-end

**Recommended starting settings/ranges**:
- Banks 1-3: Different bass enhancement approaches
- Mix: 75-85% for natural enhancement
- Bandwidth: 50-65% for musical transitions
- Shift: 0-10% to maintain fundamental relationships

**Why it works / what to listen for**:
- Different EQ curves emphasize different aspects of the bass sound
- Morphing allows for dynamic character changes
- Listen for enhanced bass presence and character
- The morphing adds movement to sustained bass lines

**Variations**:
1. **Sub-Bass Enhancement**: Emphasize frequencies below 100Hz in specific banks
2. **Attack Enhancement**: Highlight note attacks and transients
3. **Harmonic Enhancement**: Bring out upper harmonics for more character

**Pitfalls + quick fixes**:
- Pitfall: Bass becomes too boomy or undefined
  - Fix: Reduce low-frequency boosts and ensure fundamental frequencies are not over-emphasized
- Pitfall: Morphing affects bass foundation negatively
  - Fix: Keep fundamental frequencies consistent across banks and use moderate changes

### Use Case 8: Acoustic Space Simulation
**Goal**: Use EQUO to simulate different acoustic spaces by morphing EQ curves

**Step-by-step setup inside FL Studio**:
1. Insert EQUO on a track that needs acoustic space simulation
2. In Bank 1, create an EQ curve that simulates a small room (boosts in mid-frequencies)
3. In Bank 2, create an EQ curve for a medium hall (specific frequency resonances)
4. In Bank 3, create an EQ curve for a large space (different resonance pattern)
5. In Bank 4, create an EQ curve for an outdoor space (high-frequency roll-off)
6. Use VOL mode for amplitude-based EQ changes
7. Set Mix to 60-75% to blend original with "acoustic" simulation
8. Use X/Y pad to morph between different acoustic simulations
9. Add subtle reverb after EQUO to enhance the space simulation
10. Fine-tune the curves to match the desired acoustic characteristics

**Recommended starting settings/ranges**:
- Banks 1-4: Different acoustic space simulations
- Mix: 60-75% for natural simulation
- Bandwidth: 50-65% for realistic transitions
- Shift: 0-15% to maintain natural frequency relationships

**Why it works / what to listen for**:
- Different spaces have characteristic frequency responses
- Morphing between spaces creates evolving acoustic environments
- Listen for changes in the perceived acoustic environment
- The morphing allows for dynamic space changes

**Variations**:
1. **Room Tone**: Simulate different room tone characteristics
2. **Venue Simulation**: Create different venue acoustic signatures
3. **Environmental Changes**: Simulate movement through different spaces

**Pitfalls + quick fixes**:
- Pitfall: Acoustic simulation sounds artificial
  - Fix: Use more subtle EQ changes and reference actual room impulse responses
- Pitfall: Morphing between spaces is too obvious
  - Fix: Use smoother curves and higher Mix settings to blend better

### Use Case 9: Creative Rhythmic Filtering
**Goal**: Use EQUO with automation to create rhythmic filtering effects

**Step-by-step setup inside FL Studio**:
1. Insert EQUO on a track with rhythmic content
2. Create simple but contrasting EQ curves in Banks 1 and 2
3. Set up an automation clip for the X/Y pad position
4. Create a rhythmic pattern that alternates between the two banks
5. Sync the automation to the project tempo (eighth or sixteenth notes)
6. Use moderate Mix (70-80%) to maintain rhythmic content
7. Adjust the timing to create syncopated or straight rhythmic patterns
8. Add slight variations to make the pattern more interesting
9. Fine-tune the EQ curves to create the desired rhythmic filtering effect
10. Consider using different rhythmic patterns for different song sections

**Recommended starting settings/ranges**:
- Banks 1-2: Contrasting but musical EQ curves
- Mix: 70-80% for rhythmic clarity
- Bandwidth: 40-60% for rhythmic definition
- Automation: Tempo-synced rhythmic patterns

**Why it works / what to listen for**:
- Rhythmic changes in EQ create interesting filtering effects
- The morphing happens in time with the music
- Listen for rhythmic filtering that enhances the groove
- The visual interface makes rhythmic automation more intuitive

**Variations**:
1. **Syncopated Patterns**: Create off-beat rhythmic filtering
2. **Polyrhythmic**: Use different subdivisions for complex rhythms
3. **Fill Patterns**: Create rhythmic fills with morphing automation

**Pitfalls + quick fixes**:
- Pitfall: Rhythmic filtering competes with other rhythmic elements
  - Fix: Use more subtle EQ differences between banks
- Pitfall: Pattern is too repetitive or predictable
  - Fix: Add variations and slight timing adjustments to the automation

### Use Case 10: Mix Enhancement and Glue
**Goal**: Use EQUO on a group bus to enhance mix cohesion with subtle morphing

**Step-by-step setup inside FL Studio**:
1. Route multiple tracks to a group bus
2. Insert EQUO on the group bus
3. In Bank 1, create a subtle enhancement curve (gentle boosts/cuts)
4. In Bank 2, create a different enhancement curve for contrast
5. Use conservative settings to maintain mix balance
6. Set Mix to 90-95% for mostly processed signal
7. Use X/Y pad to make subtle morphing adjustments
8. Add to the mix subtly without overwhelming the original balance
9. Use automation sparingly for gentle changes during the song
10. A/B compare frequently to ensure enhancement is beneficial

**Recommended starting settings/ranges**:
- Banks 1-2: Subtle enhancement curves
- Mix: 90-95% for mostly processed signal
- Bandwidth: 55-70% for smooth transitions
- Shift: 0-5% to maintain natural relationships

**Why it works / what to listen for**:
- Subtle EQ changes can enhance mix cohesion
- The morphing allows for gentle changes during the song
- Listen for improved mix clarity and cohesion
- The enhancement should be felt more than heard

**Variations**:
1. **Subtle Enhancement**: Very minimal EQ changes for transparency
2. **Character Enhancement**: Slightly more pronounced changes for character
3. **Section Enhancement**: Different enhancement for different song sections

**Pitfalls + quick fixes**:
- Pitfall: Enhancement becomes too obvious or changes the mix balance
  - Fix: Reduce Mix to 60-70% and use more conservative EQ curves
- Pitfall: Morphing creates unwanted artifacts in the mix
  - Fix: Use higher bandwidth settings and ensure similar gain levels across banks

### Use Case 11: Creative Pitch-Shift Alternative
**Goal**: Use EQUO's Shift parameter with morphing to create pitch-like effects

**Step-by-step setup inside FL Studio**:
1. Insert EQUO on a melodic track or chord progression
2. Set up different banks with different Shift amounts:
   - Bank 1: Shift 0% (original pitch)
   - Bank 2: Shift 20% (slight pitch shift)
   - Bank 3: Shift 40% (more pronounced shift)
3. Use the Shift parameter to create pitch-like effects without actual pitch shifting
4. Set Mix to 80-90% to blend original with shifted content
5. Use X/Y pad to morph between different shift amounts
6. Add light reverb to mask any artifacts
7. Fine-tune the shift amounts for musical results
8. Use automation for evolving pitch-like effects
9. Monitor for artifacts that might occur with extreme shifting
10. Compare with original to ensure musicality is maintained

**Recommended starting settings/ranges**:
- Shift Amount: 0-50% for musical results
- Banks 1-3: Different shift amounts
- Mix: 80-90% for effective blending
- Bandwidth: 50-65% for smooth transitions

**Why it works / what to listen for**:
- The Shift parameter moves the entire frequency spectrum
- Creates pitch-like effects without actual pitch shifting algorithms
- Listen for pitch-like movement that maintains timing
- The morphing allows for dynamic pitch-like changes

**Variations**:
1. **Subtle Pitch**: Small shift amounts for detune-like effects
2. **Dramatic Shift**: Larger amounts for more obvious pitch effects
3. **Rhythmic Shifting**: Sync morphing to tempo for rhythmic pitch changes

**Pitfalls + quick fixes**:
- Pitfall: Shift creates metallic or artificial artifacts
  - Fix: Reduce shift amounts and use more conservative settings
- Pitfall: Effect doesn't sound like pitch shifting
  - Fix: Understand that Shift is frequency shifting, not pitch shifting (harmonics don't maintain relationships)

### Use Case 12: Parallel Processing with Morphing
**Goal**: Use EQUO in a parallel processing chain with morphing capabilities

**Step-by-step setup inside FL Studio**:
1. Create a send track from your source
2. Insert EQUO on the send track
3. In Bank 1, create an aggressive EQ curve for parallel enhancement
4. In Bank 2, create a different aggressive curve for contrast
5. Set EQUO Mix to 100% (fully processed)
6. Control the amount of effect through the send level
7. Use the X/Y pad to morph between different parallel processing approaches
8. Blend the parallel signal back with the dry signal
9. Use automation to change the morphing during different sections
10. Fine-tune the send level to balance the parallel processing

**Recommended starting settings/ranges**:
- Banks 1-2: Aggressive curves for parallel processing
- Mix: 100% (since parallel processing controls the blend)
- Bandwidth: 45-65% for parallel processing transitions
- Send Level: 10-30% of original signal

**Why it works / what to listen for**:
- Parallel processing allows for aggressive processing without affecting the original
- Morphing between different aggressive curves creates dynamic enhancement
- Listen for enhanced elements that don't lose their original character
- The morphing adds movement to the parallel-processed signal

**Variations**:
1. **Subtle Parallel**: Gentle curves for transparent enhancement
2. **Aggressive Parallel**: Extreme curves for dramatic enhancement
3. **Rhythmic Parallel**: Sync morphing to rhythm for dynamic changes

**Pitfalls + quick fixes**:
- Pitfall: Parallel signal overwhelms the original mix
  - Fix: Reduce send level and/or use more conservative curves
- Pitfall: Morphing in parallel chain creates phase issues
  - Fix: Check phase alignment and consider using mono-compatible settings