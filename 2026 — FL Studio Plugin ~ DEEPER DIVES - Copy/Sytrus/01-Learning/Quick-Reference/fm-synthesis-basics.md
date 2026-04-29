# FM Synthesis Basics for Sytrus

## Introduction to FM Synthesis

Frequency Modulation (FM) synthesis is a method of generating sound by modulating the frequency of one oscillator (the "carrier") with another oscillator (the "modulator"). This creates complex harmonic content that can range from bell-like tones to harsh, metallic sounds.

### The Core Concept

In FM synthesis:
- The **carrier** is the oscillator whose frequency is being modulated and whose output we hear
- The **modulator** is the oscillator that changes the frequency of the carrier
- The relationship between the modulator's amplitude and frequency determines the harmonic complexity

### Mathematical Foundation

The harmonic content of an FM sound is determined by the **modulation index**, which is the ratio of the modulator's amplitude to its frequency. A low modulation index produces simple, harmonic sounds, while a high modulation index produces complex, inharmonic sounds.

## Sytrus FM Architecture

### Operators

Sytrus features 6 operators that can function as either carriers or modulators depending on the selected algorithm. Each operator has:

- **Waveform**: Sine, triangle, sawtooth, square, or noise
- **Frequency**: Either ratio-based (follows played note) or fixed (constant frequency)
- **Level**: Output volume that determines modulation strength
- **Fine tune**: Small pitch adjustments
- **Pan**: Stereo positioning
- **Phase**: Starting phase of the oscillator

### Algorithms

The 64 algorithms in Sytrus determine how the 6 operators interact with each other. These algorithms define which operators modulate which other operators and which operators contribute to the final output.

- **Algorithm 1**: Simplest - Operator 1 modulates Operator 2, which modulates Operator 3, etc., with Operator 6 as the output
- **Higher algorithms**: More complex routing with parallel paths, feedback, and multiple outputs
- **Parallel algorithms**: Multiple operators output simultaneously
- **Feedback algorithms**: Operators modulate themselves

## Creating Musical FM Sounds

### Warm Bass Sounds

To create warm, musical bass sounds in Sytrus:

1. **Select Algorithm 1-5**: Simple algorithms produce more musical results
2. **Set Operator 6 as the carrier**: This is typically the output operator
3. **Use sine or triangle waveforms**: These produce warmer, less harsh sounds
4. **Keep modulation levels moderate**: Operator levels of 20-50% for modulators
5. **Use ratio frequencies**: So the sound tracks properly with your bassline
6. **Shape with envelopes**: Use medium attack and decay for expressive basses

### Bell-Like Leads

For bell-like, crystalline lead sounds:

1. **Choose Algorithm 10-20**: These algorithms provide good harmonic complexity
2. **Use sine waveforms**: Essential for bell-like harmonics
3. **Set high modulation index**: Higher operator levels for modulators
4. **Use fast envelopes**: Quick attack and decay to mimic bell striking
5. **Add reverb**: Enhances the bell-like character
6. **Consider fixed frequencies**: For unpitched bell harmonics

### Evolving Pad Sounds

For atmospheric, evolving pad sounds:

1. **Select Complex Algorithms (20-40)**: These create evolving harmonic content
2. **Use slower envelopes**: Long attack and release times
3. **Apply LFO modulation**: Modulate operator levels for harmonic movement
4. **Use triangle or sawtooth waves**: For richer harmonic content
5. **Add reverb and chorus**: Enhances the atmospheric quality
6. **Consider multiple carriers**: Parallel algorithms can create rich textures

## Hip-Hop and R&B Applications

### Hip-Hop Bass Design

FM synthesis is excellent for creating distinctive bass sounds in hip-hop:

- **Trap Bass**: Use complex algorithms with high modulation indices for aggressive, harmonically rich basses
- **Boom Bap**: Use simpler algorithms with warm, musical settings for vintage sounds
- **Modern Hip-Hop**: Combine FM bass with analog-style filtering for hybrid sounds

### R&B Lead Sounds

FM synthesis can create expressive lead sounds perfect for R&B:

- **Vintage Electric Piano**: Use Algorithm 8-12 with triangle waveforms and moderate modulation
- **Smooth Synth Leads**: Use Algorithm 15-25 with evolving envelopes and subtle LFO modulation
- **Ethnic/Ethereal Sounds**: Use complex algorithms with evolving parameters for unique textures

### Atmospheric Textures

FM synthesis excels at creating atmospheric sounds:

- **Ambient Pads**: Use complex algorithms with slow envelopes and LFO modulation
- **Sound Effects**: Use noise operators and fast envelopes for unique textures
- **Transitions**: Use evolving parameters to create build-ups and breakdowns

## Troubleshooting Common FM Issues

### Harsh, Metallic Sounds

If your FM sound is too harsh:

1. **Reduce modulation index**: Lower the operator levels of modulators
2. **Use simpler algorithms**: Start with lower-numbered algorithms
3. **Change waveforms**: Use sine or triangle instead of sawtooth or square
4. **Apply filtering**: Use the built-in filter or external EQ to tame harsh frequencies
5. **Adjust envelopes**: Use smoother envelope shapes

### Unmusical or Dissonant Sounds

If your sound lacks musicality:

1. **Use harmonic ratios**: Keep frequency ratios simple (1:1, 1:2, 2:1, etc.)
2. **Start with simple algorithms**: Complex algorithms can create dissonance
3. **Reduce modulation**: High modulation indices can create inharmonic content
4. **Listen critically**: Compare to reference sounds to guide your adjustments

### Too Quiet Output

If your sound is too quiet:

1. **Increase carrier levels**: Make sure output operators have sufficient level
2. **Check algorithm routing**: Verify operators are routed to output
3. **Verify note range**: Very high notes may be less effective with some algorithms
4. **Add distortion**: Sometimes adds presence and volume

## Advanced FM Techniques

### Spectral Evolution

One of FM synthesis's greatest strengths is creating sounds that evolve dramatically over time:

- **Different envelope shapes**: Use different ADSR settings for different operators
- **LFO modulation**: Modulate operator levels or frequencies over time
- **Algorithm automation**: Change algorithm parameters for dramatic shifts
- **Multi-stage envelopes**: Create complex amplitude evolutions

### Feedback Effects

Some Sytrus algorithms include feedback paths where operators modulate themselves:

- **Creates chaos**: Can produce noisy, unpredictable sounds
- **Aggressive textures**: Useful for modern, harsh sounds
- **Control with caution**: Small changes can have dramatic effects
- **Great for basses**: Adds growl and character to bass sounds

### Ratio vs Fixed Frequencies

Understanding when to use ratio vs fixed frequencies:

- **Ratio**: Use for pitched sounds that need to track with your bassline
- **Fixed**: Use for unpitched sounds, percussion, or when you want constant frequencies
- **Combination**: Mix both for complex, evolving sounds
- **Harmonic relationships**: Fixed frequencies can create specific harmonic relationships

## Practical Exercises

### Exercise 1: Warm Bass
1. Load Algorithm 1
2. Set all operators to sine waves
3. Set Operator 6 (output) to a moderate level
4. Set Operator 5 to modulate Operator 6 with a moderate level
5. Adjust envelopes for a bass sound (fast attack, medium decay)
6. Add slight chorus for warmth

### Exercise 2: Bell Sound
1. Load Algorithm 10
2. Set all operators to sine waves
3. Set Operator 6 to output
4. Set Operators 1-5 as modulators with high levels
5. Use fast attack and decay envelopes
6. Add reverb to enhance the bell character

### Exercise 3: Evolving Pad
1. Load Algorithm 30
2. Use triangle waveforms
3. Set slow attack and release on all envelopes
4. Apply LFO modulation to Operator levels
5. Add chorus and reverb
6. Automate algorithm parameters for evolution

## Conclusion

FM synthesis in Sytrus opens up a world of complex, evolving sounds that are perfect for hip-hop and R&B production. The key to success is understanding the relationship between operators, algorithms, and modulation. Start simple and gradually add complexity as you become more comfortable with the concepts.

Remember that FM synthesis is as much about exploration as it is about applying formulas. Don't be afraid to experiment with different algorithms and settings to discover unique sounds that fit your musical vision.