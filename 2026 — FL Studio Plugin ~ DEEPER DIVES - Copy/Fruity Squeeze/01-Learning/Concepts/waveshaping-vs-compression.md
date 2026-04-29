# Waveshaping vs. Traditional Compression

## Core Difference

**Traditional Compressor**: Analyzes signal level → Reduces gain over time  
**Waveshaper (Fruity Squeeze)**: Reshapes waveform amplitude directly

## How Traditional Compressors Work

### Envelope Detection
1. Signal enters compressor
2. Envelope follower tracks signal level
3. When level exceeds threshold, gain reduction begins
4. Attack/release times smooth the gain changes
5. Output = input × gain reduction amount

### Time-Based Response
- **Attack**: How quickly compression starts (1–100 ms typical)
- **Release**: How quickly compression stops (50–500 ms typical)
- **Natural pumping**: Compression tracks dynamics over time

## How Waveshapers Work

### Direct Waveform Manipulation
1. Signal enters waveshaper
2. Transfer function maps input amplitude to output amplitude
3. Any sample above threshold is immediately reshaped
4. No time-based smoothing—instant, sample-accurate response

### Mathematical Transformation
```
If input > threshold:
    output = threshold + (input - threshold) / ratio
Else:
    output = input
```

## Key Differences

| Feature | Traditional Compressor | Waveshaper (Squeeze) |
|---------|----------------------|----------------------|
| Response time | Attack/release (ms) | Instant (0 ms) |
| Dynamics tracking | RMS or peak detection | Direct amplitude |
| Harmonic distortion | Minimal (clean) | Audible (adds harmonics) |
| Pumping/breathing | Common artifact | Not possible |
| Transparency | Can be very clean | Always colors sound |
| CPU usage | Moderate | Low |

## When to Use Each

### Use Traditional Compressor For:
- ✅ Smooth, transparent dynamic control
- ✅ Musical pumping effects (sidechain, glue)
- ✅ Preserving tonal character
- ✅ Gentle ratio control (2:1–4:1)
- ✅ Time-based envelope shaping

### Use Waveshaper (Fruity Squeeze) For:
- ✅ Fast transient control (drums, percussion)
- ✅ Adding harmonic excitement
- ✅ Aggressive limiting/squashing
- ✅ Instant brick-wall limiting
- ✅ Lo-fi/distorted compression effects
- ✅ Multiband tonal shaping

## Sonic Character Differences

### Traditional Compressor
- **Clean**: Minimal harmonic addition
- **Smooth**: Gradual gain changes
- **Natural**: Mimics analog compression behavior
- **Musical pumping**: Rhythmic gain reduction
- **Examples**: 1176, LA-2A, SSL Bus Compressor

### Waveshaper (Fruity Squeeze)
- **Colored**: Adds odd-order harmonics
- **Aggressive**: Instant, hard response
- **Gritty**: Audible when pushed hard
- **No pumping**: Instant on/off
- **Examples**: Digital clipping, saturation, hard limiting

## Harmonic Content

### Traditional Compressor
- Adds **even-order harmonics** (if analog-modeled)
- Warm, pleasing distortion at high ratios
- Generally transparent at moderate settings

### Waveshaper
- Adds **odd-order harmonics** (3rd, 5th, 7th)
- Creates "edge," "bite," or "harshness"
- Always audible to some degree when active

## Practical Sound Examples

### Kick Drum

**Traditional compressor**:
- Smooth, punchy attack
- Controlled sustain with natural decay
- Clean low-end thump

**Fruity Squeeze**:
- Instant transient clipping
- Aggressive, clicky attack
- Harmonics in mid-range (adds "click")

### Vocals

**Traditional compressor**:
- Even loudness across phrases
- Natural breath dynamics
- Transparent at 3:1–4:1 ratio

**Fruity Squeeze**:
- Hard-limited peaks (sibilance control)
- Less natural dynamic feel
- Adds edge/presence via harmonics

### Bass Guitar

**Traditional compressor**:
- Sustained, even notes
- Warm, round tone
- Smooth pick/finger attack

**Fruity Squeeze**:
- Fast, aggressive attack control
- Adds brightness and grit
- More "modern" compressed bass tone

## Attack & Release Implications

### No Attack/Release in Fruity Squeeze

**Advantages**:
- Zero latency response
- Perfect for fast transients (drums, plucks)
- Predictable, consistent behavior
- No phase smearing from lookahead

**Disadvantages**:
- Can't create smooth, musical pumping
- No control over compression "feel"
- Always sounds "instant"
- Less forgiving on complex material

## Multiband Context

### Why Waveshaping Works in Multiband

- **Per-band coloration**: Harmonics in one band don't affect others
- **Crossover isolation**: Each band's distortion stays contained
- **Tonal sculpting**: Use harmonic addition as a mixing tool
- **Fast response**: Great for controlling specific frequency ranges instantly

### Traditional Multiband Compressors

- Examples: Waves C6, FabFilter MB
- More transparent, musical compression
- Better for mastering and subtle dynamics
- Slower, more CPU-intensive

## Hybrid Approach

Many engineers use **both**:

1. **Traditional compressor** → Smooth overall dynamics
2. **Fruity Squeeze** → Fast transient control + coloration

Example: Compress vocals with a standard compressor, then use Fruity Squeeze on highs to tame sibilance with harmonic edge.

## Bottom Line

- **Fruity Squeeze = Fast, colored, aggressive multiband waveshaping**
- **Traditional compressor = Musical, transparent, time-based dynamics**
- Neither is "better"—they're different tools for different jobs
