# How Multiband Compression Works in Fruity Squeeze

## Overview
Fruity Squeeze is a multiband waveshaper that divides your audio into 3 frequency bands and applies independent compression/limiting to each band.

## Signal Flow

1. **Input Signal** → Crossover Filter (splits into 3 bands)
2. **Low Band** → Threshold + Ratio → Waveshaping
3. **Mid Band** → Threshold + Ratio → Waveshaping  
4. **High Band** → Threshold + Ratio → Waveshaping
5. **Mixed Bands** → Output

## Key Concepts

### Frequency Splitting
- Uses **crossover filters** to divide spectrum into Low/Mid/High
- Crossover points are adjustable (default: 250 Hz and 2 kHz)
- Each band processes independently without affecting others

### Waveshaping vs. Traditional Compression
- **Traditional compressor**: Gain reduction based on envelope follower
- **Waveshaper**: Directly reshapes waveform amplitude
- Result: Faster, more aggressive compression with harmonic coloration
- No attack/release controls—instant response

### Per-Band Controls

#### Threshold
- Sets the level where compression begins
- Lower threshold = more compression
- Range: -∞ to 0 dB

#### Ratio
- Controls compression intensity
- Higher ratio = more aggressive squashing
- ∞:1 = hard limiting

#### Volume
- Post-compression output level for each band
- Compensate for gain reduction
- Shape tonal balance

## Why Multiband?

### Tonal Control
- Compress bass without affecting highs
- Tame harsh highs without dulling the mix
- Bring up quieter frequency ranges independently

### Mixing Applications
- **Kick/Bass**: Heavy low compression, light mid/high
- **Vocals**: Smooth mid compression, gentle high limiting
- **Master**: Glue bands together with different ratios

## Waveshaping Character

### Harmonic Addition
- Waveshaping adds harmonics (especially odd-order)
- Creates "warmth" or "grit" depending on settings
- More aggressive than clean compression

### Transparency vs. Color
- **Light ratios (2:1–4:1)**: Relatively transparent
- **Heavy ratios (10:1+)**: Audible distortion/coloration
- **Limiter mode (∞:1)**: Hard clipping with artifacts

## Practical Understanding

### Level Management
1. Signal exceeds threshold → waveshaping activates
2. Ratio determines how much level is reduced
3. Volume knob compensates for lost loudness
4. Result: Controlled dynamics with tonal shaping

### Crossover Interaction
- Bands overlap slightly at crossover points
- Smooth transition prevents phase issues
- Adjust crossovers to match your source material

## Common Misconceptions

❌ **"It's just a limiter"** → It's a multiband waveshaper with compression characteristics  
❌ **"No attack/release = bad"** → Instant response is intentional and useful  
❌ **"Only for heavy limiting"** → Works great for subtle dynamic control too

✅ **Fast, colored multiband dynamics**  
✅ **Tonal shaping via band-specific compression**  
✅ **Adds harmonics and character to sound**
