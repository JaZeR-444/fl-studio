# Unique Phaser System

## Frequency-Based Phasing

Harmless's phaser is **fundamentally different** from traditional phasers. Instead of modulating all-pass filters, it modulates the **frequency positions of individual harmonics**.

### The Science

Traditional phaser: Shifts phase of entire signal through all-pass filters
Harmless phaser: **Shifts each harmonic's frequency** by small amounts

This creates:
- **Pitch shifting effects** at high rates
- **Additive chorusing** at moderate rates
- **Harmonic dance** as harmonics move independently

## Parameters

### Rate (Hz)
Controls modulation speed:
- **0.1-0.5 Hz**: Slow evolving textures
- **1-3 Hz**: Classic phaser sweep
- **5-10 Hz**: Vibrato territory
- **15+ Hz**: Ring modulation, pitch effects

### Depth (0-100%)
How far harmonics shift:
- **Low (10-30%)**: Subtle widening
- **Medium (40-60%)**: Classic phaser effect
- **High (70-100%)**: Extreme pitch modulation

### Feedback (0-100%)
How much output feeds back into input:
- **Low**: Gentle effect
- **Medium (40-70%)**: Resonant peaks
- **High**: Notchy, ringing character

### Center Frequency
Sets which harmonics are most affected:
- **Low**: Bass-heavy phasing
- **Mid**: Full spectrum effect
- **High**: Treble shimmer

## The Pitch-Shifting Trick

At high rates (20+ Hz) with moderate depth:
- Harmonics shift so fast they create **sidebands**
- This sounds like **frequency shifting** or "alien" pitch bending
- Unlike vibrato (pitch up/down), this creates **inharmonic intervals**

### Creating "Alien Leads"
1. Set Phaser Rate to 30-50 Hz
2. Depth to 60-80%
3. Play high notes with sawtooth mask
4. Result: Sci-fi pitch artifacts

## Combining with Unison

When Phaser + Unison are active together:
- Each unison voice has independent phaser position
- Creates massive stereo width
- Harmonics move in stereo field

## CPU Note

The phaser is CPU-intensive because it recalculates all 512 harmonics every modulation cycle. Disable for CPU-constrained projects.

## Pro Tip

Use phaser at slow rates (0.2 Hz) with high depth on pads to create evolving "breathing" textures - harmonics slowly shift in and out of phase relationships.

[SRC: IL-MAN - Harmless FX Section]
