# Drumpad - Practical Use Cases

## 8-12 Real Use Cases with Step-by-Step Setup

### Use Case 1: Expressive Acoustic Kick Drum
**Goal**: Create a realistic, expressive kick drum that responds naturally to velocity changes

**Step-by-step setup inside FL Studio**:
1. Insert Drumpad into a new channel in the Channel Rack
2. Set Membrane parameters: Stiffness to 30%, Mass to 80%, Tension to 20%, Damping to 60%
3. Set Mallet parameters: Amplitude to 85%, Noise to 10%, Decay to 40%
4. Set Filter parameters: Low Filter to 70%, Mid Filter to 40%
5. Map to MIDI note C1 for kick drum
6. Adjust Output Level to match your mix requirements
7. Add slight compression on the mixer track if needed for consistency

**Recommended starting settings/ranges**:
- Stiffness: 20-40% (softer for deeper tone)
- Mass: 70-90% (higher for deeper fundamental)
- Tension: 10-30% (lower for deeper pitch)
- Damping: 50-70% (medium-high for controlled decay)

**Why it works / what to listen for**:
- The low tension and high mass create a deep fundamental frequency typical of kick drums
- The moderate damping prevents excessive ringing while maintaining punch
- The physical modeling responds naturally to velocity, providing realistic dynamics

**Variations**:
1. **Tight Kick**: Increase tension to 40%, decrease mass to 60%, increase damping to 80%
2. **808-style Kick**: Decrease stiffness to 15%, increase mass to 95%, lower damping to 30%

**Pitfalls + quick fixes**:
- Pitfall: Kick sounds too soft or lacks punch
  - Fix: Increase mallet amplitude to 90-95% and slightly increase stiffness to 40-50%
- Pitfall: Kick rings too long or sounds boomy
  - Fix: Increase damping to 70-85% and decrease mass slightly

### Use Case 2: Realistic Snare Drum with Expressive Rolls
**Goal**: Create a snare drum that works well for both single hits and expressive rolls

**Step-by-step setup inside FL Studio**:
1. Insert Drumpad into a new channel in the Channel Rack
2. Set Membrane parameters: Stiffness to 70%, Mass to 40%, Tension to 60%, Damping to 50%
3. Set Mallet parameters: Amplitude to 75%, Noise to 65%, Decay to 60%
4. Set Filter parameters: Low Filter to 40%, Mid Filter to 70%
5. Map to MIDI note D1 for snare drum
6. Add a touch of reverb (short plate, 30-40% mix) on the mixer track
7. Adjust Output Level appropriately

**Recommended starting settings/ranges**:
- Stiffness: 60-80% (higher for brighter tone)
- Mass: 30-50% (medium for balanced response)
- Tension: 50-70% (medium-high for standard pitch)
- Mallet Noise: 50-80% (high for snare wire simulation)

**Why it works / what to listen for**:
- The high stiffness creates the bright, cutting tone characteristic of snares
- The high mallet noise simulates the sound of snare wires rattling
- The physical modeling provides natural velocity response for expressive rolls

**Variations**:
1. **Fat Snare**: Increase mass to 60%, decrease stiffness to 50%, increase mallet noise to 80%
2. **Crack Snare**: Increase stiffness to 85%, decrease mass to 25%, add more mallet noise

**Pitfalls + quick fixes**:
- Pitfall: Snare sounds too synthetic or lacks character
  - Fix: Increase mallet noise to 70-85% and adjust stiffness to taste
- Pitfall: Snare is too harsh or piercing
  - Fix: Reduce stiffness to 50-60% and decrease mallet noise to 40-50%

### Use Case 3: Tight Tom Toms (Set of 3)
**Goal**: Create a matched set of tom toms with consistent character but different tunings

**Step-by-step setup inside FL Studio**:
1. Create three Drumpad instances (one for each tom)
2. For Floor Tom (F2): Stiffness 50%, Mass 60%, Tension 40%, Damping 50%
3. For Low-Mid Tom (D2): Stiffness 55%, Mass 50%, Tension 50%, Damping 45%
4. For High-Mid Tom (A2): Stiffness 60%, Mass 40%, Tension 60%, Damping 40%
5. Set all with similar mallet settings: Amplitude 70%, Noise 25%, Decay 55%
6. Map to appropriate MIDI notes (F2, D2, A2)
7. Group the mixer tracks and apply light compression to the group

**Recommended starting settings/ranges**:
- Tension: Varies by desired pitch (lower for deeper, higher for higher)
- Mass: 40-65% (adjust opposite to tension for consistent feel)
- Stiffness: 50-65% (consistent across all toms for matching character)

**Why it works / what to listen for**:
- Consistent stiffness across all toms provides matching tonal character
- Varying tension creates different pitches while maintaining similar harmonic content
- The physical modeling provides natural interaction between parameters

**Variations**:
1. **Jazz Toms**: Softer settings with lower stiffness (30-40%) and higher damping (60-70%)
2. **Rock Toms**: Brighter settings with higher stiffness (65-75%) and lower damping (30-45%)

**Pitfalls + quick fixes**:
- Pitfall: Toms don't sound like a matched set
  - Fix: Ensure stiffness is consistent across all instances, only vary tension and mass
- Pitfall: Toms sound too similar despite different tunings
  - Fix: Increase the gap between tension settings for more distinct pitches

### Use Case 4: Synthetic Electronic Percussion
**Goal**: Create unique electronic percussion sounds using Drumpad's physical modeling

**Step-by-step setup inside FL Studio**:
1. Insert Drumpad into a new channel in the Channel Rack
2. Set Membrane parameters: Stiffness to 90%, Mass to 20%, Tension to 80%, Damping to 30%
3. Set Mallet parameters: Amplitude to 60%, Noise to 80%, Decay to 80%
4. Set Filter parameters: Low Filter to 20%, Mid Filter to 80%
5. Add a short delay (1/16th note, 20% feedback) on the mixer track
6. Map to MIDI note G#1 for electronic percussion
7. Process with light distortion if desired for more character

**Recommended starting settings/ranges**:
- Stiffness: 80-95% (very high for metallic tones)
- Mass: 10-30% (very low for quick response)
- Tension: 70-90% (high for bright pitch)
- Mallet Noise: 70-90% (high for synthetic character)

**Why it works / what to listen for**:
- Extreme settings create inharmonic partials that sound synthetic
- The physical modeling algorithms produce unique textures when pushed beyond acoustic norms
- High mallet noise adds complexity to the attack

**Variations**:
1. **Bell-like**: Increase stiffness to 95%, decrease mass to 10%, increase tension to 90%
2. **Glass-like**: High stiffness, medium-low mass, high tension, lots of mallet noise

**Pitfalls + quick fixes**:
- Pitfall: Sound is too harsh or metallic
  - Fix: Reduce stiffness to 70-80% and decrease mallet noise to 50-60%
- Pitfall: Sound lacks definition or is too soft
  - Fix: Increase mallet amplitude to 70-80% and boost mid filter to 85-95%

### Use Case 5: Hi-Hat Simulation (Open and Closed)
**Goal**: Create both open and closed hi-hat sounds using Drumpad's modeling capabilities

**Step-by-step setup inside FL Studio**:
1. Create two Drumpad instances for open and closed hi-hats
2. For Closed Hi-Hat (F#1): Stiffness 85%, Mass 15%, Tension 85%, Damping 85%
3. For Open Hi-Hat (B1): Stiffness 75%, Mass 25%, Tension 70%, Damping 40%
4. Set both with high mallet settings: Amplitude 80%, Noise 90%, Decay 70%
5. Use the same filter settings: Low Filter 15%, Mid Filter 85%
6. Map closed hi-hat to F#1 and open to B1
7. Add light reverb to open hi-hat only (more space)

**Recommended starting settings/ranges**:
- Closed: High damping (70-95%) for short decay
- Open: Lower damping (30-50%) for longer sustain
- High stiffness and tension for bright, metallic character
- High mallet noise for the "chick" sound of hi-hats

**Why it works / what to listen for**:
- High damping creates the tight, short sound of closed hi-hats
- Lower damping allows for the longer sustain of open hi-hats
- The physical modeling captures the metallic nature of hi-hats

**Variations**:
1. **Dark Hi-Hats**: Lower stiffness (50-60%), increase mass (40-50%), reduce mallet noise (60-70%)
2. **Trashy Hi-Hats**: Very high stiffness (90-95%), high mallet noise (90-95%), medium damping

**Pitfalls + quick fixes**:
- Pitfall: Hi-hats sound too synthetic or not like hi-hats
  - Fix: Adjust mallet noise to 70-85% and ensure high stiffness/tension settings
- Pitfall: No distinction between open and closed
  - Fix: Increase damping difference (closed 80-95%, open 20-40%)

### Use Case 6: Ethnic Percussion (Simulated Djembe)
**Goal**: Create a djembe-like sound with both bass and slap tones

**Step-by-step setup inside FL Studio**:
1. Create two Drumpad instances for bass and slap tones
2. For Djembe Bass (C2): Stiffness 25%, Mass 70%, Tension 30%, Damping 40%
3. For Djembe Slap (E2): Stiffness 60%, Mass 30%, Tension 65%, Damping 35%
4. Set both with medium mallet settings: Amplitude 70%, Noise 40%, Decay 50%
5. Use similar filter settings: Low Filter 60%, Mid Filter 50%
6. Map bass to C2 and slap to E2
7. Add subtle reverb with early reflections emphasized

**Recommended starting settings/ranges**:
- Bass tone: Low stiffness and tension, high mass
- Slap tone: Medium-high stiffness and tension, lower mass
- Moderate damping for natural decay
- Medium mallet noise for authentic attack

**Why it works / what to listen for**:
- The bass setting mimics the deep, warm tone of a djembe when struck in the center
- The slap setting recreates the sharp, high-pitched tone when struck near the rim
- The physical modeling captures the complex harmonic interactions of a real djembe

**Variations**:
1. **Cajon**: Lower stiffness (15-25%), higher damping (50-65%), moderate mass (50-60%)
2. **Talking Drum**: Very low tension (10-20%), medium stiffness (40-50%), high mass (70-80%)

**Pitfalls + quick fixes**:
- Pitfall: Sounds too synthetic, not like ethnic percussion
  - Fix: Reduce stiffness differences between bass and slap, add more natural decay
- Pitfall: Bass tone is too boomy or undefined
  - Fix: Increase damping to 50-60% and slightly increase stiffness to 30-35%

### Use Case 7: Industrial/Rhythmic Percussion
**Goal**: Create mechanical, industrial percussion sounds for electronic music

**Step-by-step setup inside FL Studio**:
1. Insert Drumpad into a new channel in the Channel Rack
2. Set Membrane parameters: Stiffness to 95%, Mass to 10%, Tension to 90%, Damping to 25%
3. Set Mallet parameters: Amplitude to 85%, Noise to 95%, Decay to 90%
4. Set Filter parameters: Low Filter to 10%, Mid Filter to 95%
5. Add a short reverb (small room, 15% mix) and light distortion
6. Map to MIDI note A#1 for industrial percussion
7. Process with a high-pass filter around 100Hz to remove rumble

**Recommended starting settings/ranges**:
- Maximum stiffness (90-95%) for metallic tones
- Minimum mass (10-20%) for quick response
- High tension (85-95%) for bright, cutting tones
- High mallet noise (90-95%) for mechanical character

**Why it works / what to listen for**:
- Extreme settings push the physical model beyond acoustic norms
- Creates inharmonic, clangorous tones that sound mechanical
- The algorithm produces unique textures that sound like industrial impacts

**Variations**:
1. **Machine Gun Rhythm**: Use very short decay (10-20%) and high amplitude for staccato hits
2. **Steam Pipe Hits**: Medium decay (40-50%), add pitch envelope for steam release effect

**Pitfalls + quick fixes**:
- Pitfall: Sound is too harsh or grating
  - Fix: Reduce stiffness to 80-85% and decrease mallet noise to 70-80%
- Pitfall: Sound lacks body or presence
  - Fix: Increase mass slightly to 15-25% and boost low filter to 20-30%

### Use Case 8: Subtle Texture Enhancement
**Goal**: Use Drumpad to add subtle textural elements to existing drum tracks

**Step-by-step setup inside FL Studio**:
1. Insert Drumpad on an audio track as a generator
2. Set Membrane parameters: Stiffness to 40%, Mass to 50%, Tension to 50%, Damping to 60%
3. Set Mallet parameters: Amplitude to 30%, Noise to 45%, Decay to 45%
4. Set Filter parameters: Low Filter to 50%, Mid Filter to 55%
5. Set output level very low (-20dB or lower) to blend subtly
6. Use automation to bring in the effect during specific sections
7. Pan slightly differently from the main drum elements

**Recommended starting settings/ranges**:
- Low amplitude (20-40%) for subtle enhancement
- Moderate parameters (40-60%) for natural-sounding additions
- High-pass filter around 200Hz to avoid muddying low end

**Why it works / what to listen for**:
- The low amplitude keeps it in the background as a texture enhancer
- The physical modeling adds natural variance that complements existing drums
- Subtle parameter changes create evolving textures without dominating

**Variations**:
1. **Ride Enhancement**: Use higher settings to add shimmer to ride cymbals
2. **Snare Tail**: Add subtle texture to snare decays with appropriate timing

**Pitfalls + quick fixes**:
- Pitfall: Added texture is too prominent or distracting
  - Fix: Reduce amplitude further to -25dB or lower and check panning
- Pitfall: Texture clutters the mix or adds mud
  - Fix: Apply high-pass filter around 300Hz and reduce low-end content

### Use Case 9: Glitchy/Experimental Percussion
**Goal**: Create unpredictable, glitchy percussion elements for experimental music

**Step-by-step setup inside FL Studio**:
1. Insert Drumpad into a new channel in the Channel Rack
2. Set Membrane parameters: Stiffness to 70%, Mass to 80%, Tension to 20%, Damping to 90%
3. Set Mallet parameters: Amplitude to 95%, Noise to 60%, Decay to 10%
4. Set Filter parameters: Low Filter to 80%, Mid Filter to 20%
5. Automate several parameters randomly using freehand drawing
6. Map to MIDI note G1 and program with irregular rhythms
7. Add a granular reverb for extra unpredictability

**Recommended starting settings/ranges**:
- Contrasting parameters (high mass, low tension) for unusual harmonics
- Extreme damping/decay differences for unpredictable responses
- Random parameter automation for constantly changing textures

**Why it works / what to listen for**:
- Opposing parameter values create unstable, evolving sounds
- The physical modeling algorithms produce unexpected results when parameters conflict
- Random automation keeps the listener engaged with constant change

**Variations**:
1. **Bit-Glitch**: Add sample rate reduction effect after Drumpad
2. **Temporal Glitch**: Use FL's slicex to chop up the output and rearrange

**Pitfalls + quick fixes**:
- Pitfall: Sounds too chaotic or uncontrolled
  - Fix: Reduce automation range and focus on 1-2 parameters instead of all
- Pitfall: Glitch elements don't fit with the rest of the track
  - Fix: Use sidechain compression keyed to the main kick to duck glitches on strong beats

### Use Case 10: Vintage Drum Machine Emulation
**Goal**: Recreate the character of classic drum machines using Drumpad's modeling

**Step-by-step setup inside FL Studio**:
1. Create multiple Drumpad instances for different drum machine sounds
2. For 808 Kick: Stiffness 15%, Mass 95%, Tension 10%, Damping 25%, Noise 85%
3. For 909 Kick: Stiffness 25%, Mass 85%, Tension 20%, Damping 40%, Noise 75%
4. For 808 Snare: Stiffness 65%, Mass 35%, Tension 75%, Damping 60%, Noise 85%
5. Process with appropriate EQ and light saturation to match vintage character
6. Use pitch envelopes to recreate the pitch sweep characteristics
7. Group and bus appropriately for cohesive vintage drum machine sound

**Recommended starting settings/ranges**:
- 808-style: Very low stiffness and tension, very high mass
- 909-style: Low stiffness and tension, high mass
- High mallet noise to simulate analog circuitry character
- Specific damping values to match decay characteristics

**Why it works / what to listen for**:
- The physical modeling can approximate the harmonic content of analog drum machines
- Parameter combinations can recreate the tuning relationships of classic machines
- The algorithm's response mimics the non-linear characteristics of analog circuits

**Variations**:
1. **LinnDrum Emulation**: Medium parameters with specific ratios to match LinnDrum character
2. **TR-707 Emulation**: Higher noise settings and specific decay characteristics

**Pitfalls + quick fixes**:
- Pitfall: Doesn't sound like the target drum machine
  - Fix: Research the specific tuning relationships and adjust parameters accordingly
- Pitfall: Too clean compared to vintage machines
  - Fix: Add analog-style saturation, slight pitch modulation, and tape-style compression

### Use Case 11: Melodic Percussion (Tuned Bell/Triangle)
**Goal**: Create melodic percussion sounds that can play actual melodies

**Step-by-step setup inside FL Studio**:
1. Insert Drumpad into a new channel in the Channel Rack
2. Set Membrane parameters: Stiffness to 80%, Mass to 30%, Tension to 75%, Damping to 45%
3. Set Mallet parameters: Amplitude to 70%, Noise to 20%, Decay to 80%
4. Set Filter parameters: Low Filter to 30%, Mid Filter to 85%
5. Enable legato mode if available, or use monophonic setting
6. Map to MIDI keys across a 2-octave range (C3 to C5)
7. Add a plate reverb with long decay (2-3 seconds) for sustain

**Recommended starting settings/ranges**:
- High tension and stiffness for clear pitch
- Low noise for pure tones
- High decay for sustained notes
- Medium mass for balanced harmonic content

**Why it works / what to listen for**:
- High tension and stiffness create harmonic partials that suggest pitch
- Low noise maintains clarity for melodic content
- The physical modeling creates natural-sounding harmonic relationships
- Long decay allows for sustained melodic phrases

**Variations**:
1. **Marimba**: Lower stiffness (50-60%), higher mass (40-50%), longer decay (90%+)
2. **Vibraphone**: Medium stiffness (60-70%), add tremolo or auto-pan for characteristic wobble

**Pitfalls + quick fixes**:
- Pitfall: Pitch is unclear or indistinct
  - Fix: Increase tension to 80-90% and stiffness to 80-90%, reduce noise
- Pitfall: Sounds too much like a synthesizer, not percussion
  - Fix: Add slight mallet noise (25-35%) and ensure attack is clearly defined

### Use Case 12: Sound Design for Film/TV (Impact Sounds)
**Goal**: Create impact and foley sounds for film and television production

**Step-by-step setup inside FL Studio**:
1. Insert Drumpad into a new channel in the Channel Rack
2. Set Membrane parameters: Stiffness to 85%, Mass to 40%, Tension to 70%, Damping to 65%
3. Set Mallet parameters: Amplitude to 90%, Noise to 75%, Decay to 50%
4. Set Filter parameters: Low Filter to 45%, Mid Filter to 75%
5. Add a touch of analog-style saturation and a fast-release gate
6. Map to MIDI note D#2 and program with varying velocities
7. Process with EQ to remove unwanted frequencies for the specific impact needed

**Recommended starting settings/ranges**:
- High amplitude for strong impacts
- Moderate to high noise for texture
- Medium damping for controlled decay
- High stiffness for bright attack

**Why it works / what to listen for**:
- The physical modeling creates natural-sounding impacts with harmonic complexity
- Parameter variations allow for a wide range of impact types
- The algorithm responds dynamically to velocity changes, adding realism

**Variations**:
1. **Punch Impacts**: Increase amplitude to 95%, boost low filter to 60-70%
2. **Object Falls**: Lower amplitude to 60-70%, increase decay to 70-80%, add reverb tail

**Pitfalls + quick fixes**:
- Pitfall: Impact sounds too synthetic or "plug-in-y"
  - Fix: Add analog-style saturation and slight pitch modulation to add character
- Pitfall: Not impactful enough for the intended use
  - Fix: Increase mallet amplitude to 95-100% and add a sub-octave synthesizer layer