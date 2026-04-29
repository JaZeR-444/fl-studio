# Best Settings & Starting Points - Fruity Spectroman

## Recommended Default Settings

### General Purpose Analysis

**Use Case:** Standard mixing and balance checking

**Settings:**
- **FFT Size:** Medium (2048-4096 samples)
- **Decay/Release Time:** Medium (balanced response)
- **Display Mode:** Spectrum Analyzer (top) + Vectorscope (bottom)
- **Peak Hold:** ON
- **Averaging:** Light averaging for smoother display
- **Frequency Range:** Full (20 Hz - 20 kHz)
- **Color Scheme:** Default (usually optimal for visibility)

**Why These Settings:**
- Medium FFT balances detail and CPU usage
- Medium decay shows trends without being too slow or twitchy
- Peak hold reveals momentary peaks you might miss
- Full range gives complete picture

**Best For:**
- General mixing tasks
- Periodic balance checks
- Learning how different elements look spectrally

---

### Settings by Task

#### **1. Low-End Monitoring**

**Situation:** Checking bass, kick, 808s, sub content

**Optimized Settings:**
- **FFT Size:** Large (4096-8192) - More detail in low frequencies
- **Frequency Zoom:** 20-500 Hz (focus on bass range)
- **Decay Time:** Slow - See sustained low-end content
- **Peak Hold:** ON - Catch transient kick peaks

**How to Use:**
1. Play section with bass/kick
2. Focus on 40-100 Hz range for fundamental
3. Check for content below 30 Hz (rumble to cut)
4. Verify kick and bass don't overlap excessively

**Target Visual:**
- Strong red/yellow at 50-80 Hz (kick)
- Moderate red/yellow at 60-120 Hz (bass notes)
- Minimal content below 30 Hz
- Clean separation between kick and bass frequencies

---

#### **2. Mix Balance Verification**

**Situation:** Overall frequency distribution check

**Optimized Settings:**
- **FFT Size:** Medium (2048)
- **Frequency Range:** Full (20 Hz - 20 kHz)
- **Decay Time:** Medium to Slow - Averaged view
- **Averaging:** ON - Smooth out fluctuations
- **Peak Hold:** OFF - See average energy

**How to Use:**
1. Play full mix at consistent volume
2. Observe overall spectral shape
3. Look for imbalances (heavy buildup in one zone)
4. Compare to mental reference of balanced mix

**Target Visual:**
- Presence across most of spectrum
- No single zone dominates (unless genre-appropriate)
- Gradual roll-off in highs
- Controlled low-end

---

#### **3. Reference Track Comparison**

**Situation:** A/B your mix vs. professional reference

**Optimized Settings:**
- **FFT Size:** Medium (2048-4096)
- **Decay Time:** Slow - See sustained character
- **Averaging:** ON - Reduce moment-to-moment variation
- **Peak Hold:** OFF - Compare average energy distribution
- **Volume Matching:** CRITICAL - Match LUFS before comparing

**How to Use:**
1. Load reference track
2. Match playback level (use Fruity Limiter to check LUFS)
3. Play reference for 30 seconds, observe spectrum
4. Immediately play your mix
5. Note major differences (don't micro-analyze)

**What to Compare:**
- Overall spectral tilt (bright vs. warm)
- Low-end extension (how deep?)
- Presence zone energy (2-5 kHz)
- Air and sparkle (10-15 kHz)

---

#### **4. Stereo Field Analysis**

**Situation:** Checking stereo width and phase correlation

**Optimized Settings:**
- **Display Mode:** Vectorscope visible (bottom section)
- **Decay Time:** Fast to Medium - See stereo movement
- **Focus:** Vectorscope display

**How to Use:**
1. Play mix and watch vectorscope
2. Check for mono elements (vertical line)
3. Verify stereo elements show width (oval shape)
4. Test mono compatibility (switch to mono playback)

**Target Visual:**
- **Bass/Kick:** Centered (vertical component)
- **Supporting Elements:** Oval/circular pattern (width)
- **Not Horizontal:** Extreme width indicates phase issues
- **Mono Test:** Should maintain volume in mono

---

#### **5. Problem Frequency Identification**

**Situation:** Diagnosing harsh, muddy, or resonant frequencies

**Optimized Settings:**
- **FFT Size:** Large (4096-8192) - Maximum detail
- **Decay Time:** Slow - Hold peaks for identification
- **Peak Hold:** ON - Reveal problem frequencies
- **Frequency Zoom:** Focus on problem range
  - Mud: 200-500 Hz
  - Harshness: 2-5 kHz
  - Sibilance: 6-10 kHz

**How to Use:**
1. Play problematic section
2. Look for excessive red peaks in suspected range
3. Note exact frequency of peak
4. Use Parametric EQ 2 to cut identified frequency

---

## Genre-Specific Settings

### Hip-Hop / Trap

**Visual Priority:** Low-end detail and presence

**Settings:**
- **FFT Size:** Large (focus on bass detail)
- **Frequency Zoom:** Often checking 20-200 Hz
- **Decay Time:** Medium (see 808 sustain)

**Target Spectrum:**
- Heavy red at 40-80 Hz (808/sub-bass)
- Controlled 200-500 Hz (clean low-mids)
- Present 2-5 kHz (vocal clarity)
- Moderate highs (hi-hats, percussion)

---

### Electronic / House / Techno

**Visual Priority:** Full-range energy and stereo width

**Settings:**
- **FFT Size:** Medium (balanced view)
- **Full Frequency Range:** 20 Hz - 20 kHz
- **Vectorscope:** Monitor stereo width

**Target Spectrum:**
- Strong kick at 50-60 Hz
- Clear bass line at 80-120 Hz
- Extended highs (12-16 kHz+)
- Wide stereo field on synths/pads

---

### Rock / Pop

**Visual Priority:** Mid-range balance and clarity

**Settings:**
- **FFT Size:** Medium
- **Focus:** 200 Hz - 6 kHz (instrument zone)
- **Decay Time:** Medium

**Target Spectrum:**
- Moderate bass (60-100 Hz)
- Strong mids (500 Hz - 3 kHz) - guitars, vocals
- Present highs (cymbals, vocal air)
- Natural roll-off above 12 kHz

---

### Jazz / Acoustic

**Visual Priority:** Natural balance and dynamics

**Settings:**
- **FFT Size:** Medium to Large
- **Decay Time:** Slow (average dynamic content)
- **Averaging:** ON (smooth fluctuations)

**Target Spectrum:**
- Natural low-end (not boosted)
- Prominent mids (200 Hz - 5 kHz)
- Smooth, gradual roll-off
- Not hyped or artificial looking

---

## Visual Reference Targets

### Balanced Mix (General Starting Point)

```
20-40 Hz:    Blue/minimal (rumble removed)
40-80 Hz:    Yellow/red (bass fundamental)
80-200 Hz:   Yellow/green (bass harmonics, warmth)
200-500 Hz:  Green/yellow (body, watch for mud)
500-2k Hz:   Yellow/red (core musical content)
2k-5k Hz:    Yellow/green (clarity, presence)
5k-10k Hz:   Green/cyan (brilliance)
10k-20k Hz:  Cyan/blue (air, gentle roll-off)
```

### Common Imbalances to Spot

**Muddy Mix:**
- Heavy red at 200-500 Hz
- Dark/weak 2-5 kHz
- Overall "bottom-heavy" look

**Fix:** Cut 200-400 Hz, boost 2-4 kHz

**Harsh Mix:**
- Bright red spikes at 3-5 kHz
- Often also 6-8 kHz
- Visual "peaks" that stand out

**Fix:** Identify exact frequency, cut with narrow Q

**Dull Mix:**
- Blue/black above 8 kHz
- Weak 2-5 kHz presence
- "Falls off a cliff" visually in highs

**Fix:** Boost 3-4 kHz (presence), add air shelf at 10-12 kHz

**Thin Mix:**
- Blue/weak below 200 Hz
- Lack of body in low-mids
- Top-heavy visual balance

**Fix:** Boost 80-120 Hz (bass), add warmth at 200-300 Hz

---

## CPU Optimization Settings

### For Lower CPU Usage

**Settings:**
- **FFT Size:** Small (512-1024)
- **Averaging:** OFF or minimal
- **Decay Time:** Fast (less calculation)
- **Update Rate:** Lower refresh rate (if adjustable)

**Trade-Off:**
- Less frequency detail (especially in bass)
- Faster response, more jittery display
- Adequate for general monitoring

---

### For Maximum Detail (If CPU Allows)

**Settings:**
- **FFT Size:** Large (8192+)
- **Decay Time:** Slow (smooth averaged view)
- **Averaging:** ON
- **High Refresh Rate**

**Trade-Off:**
- High CPU usage
- Maximum frequency detail
- Best for mastering and detailed analysis

---

## The Bottom Line

**Start with medium FFT, medium decay, peak hold ON, and full frequency range for general mixing.** Adjust based on specific task: large FFT for low-end work, slow decay for reference comparison, vectorscope focus for stereo analysis. Match your settings to your goal, and always prioritize what helps you make better mixing decisions over maximum visual detail. When CPU is tight, sacrifice detail for performance - your ears are still the primary tool.

**Quick Setup Guide:**
1. General mixing → Medium everything, peak hold ON
2. Low-end check → Large FFT, 20-500 Hz zoom
3. Reference comparison → Slow decay, averaging ON, matched levels
4. Problem-solving → Large FFT, peak hold ON, focus on problem range
