# UI Map And Signal Flow: Fruity 7 Band EQ

## UI Tour
The interface is a simple horizontal row of faders. [SRC: IL-MAN]

### 1. The Frequency Faders (The "Seven")
- **63**: Sub-bass and deep kick "thump."
- **250**: Low-mid warmth and snare "body."
- **500**: Mid-range "woodiness" and vocal weight.
- **1500**: Upper-mid clarity and guitar/keys definition.
- **3000**: Presence, pick noise, and vocal "bite."
- **5000**: Brilliance and percussion crispness.
- **8000**: High-end "Air" and cymbal sizzle.

### 2. Output Control
- **Output Gain**: Adjusts the final level. 
- **Important**: If you boost multiple EQ bands, the signal will get much louder. Use this knob to "Gain Stage" so the track doesn't clip.

## Signal Flow
1. **Input**: Stereo audio signal enters.
2. **Parallel Filter Bank**: The signal is split into seven parallel peaking filters.
3. **Gain Adjustment**: Each filter applies a boost or cut based on fader position (typically +/- 12dB).
4. **Summing**: The seven signals are recombined.
5. **Output Gain**: Master volume is applied.
6. **Output**: The processed signal leaves the plugin.

## Things Beginners Misunderstand
- **"The frequencies are wrong"**: You cannot change the center frequency of these bands. They are fixed at standard musical intervals. If you need a split at 100Hz instead of 63Hz, use a Parametric EQ.
- **Q-Factor**: The "width" of each band is fixed. Boosting one band will subtly affect the frequencies surrounding it, creating a natural, overlapping curve.
- **Digital vs Analog**: This is a standard digital IIR EQ. It is clean and transparent at neutral settings.
