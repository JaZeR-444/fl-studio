# Configuration Notes & Analysis Use - Fruity Spectroman

## Overview

Fruity Spectroman is a **visual analysis tool** rather than an audio processor, so this document covers **analysis configurations** and **display setups** rather than traditional preset notes.

---

## Display Configuration Library

### Configuration 1: "Standard Mix Monitor"

**Purpose:** Always-on background monitoring during mixing

**Settings:**
- FFT: 2048
- Decay: Medium
- Peak Hold: ON
- Averaging: Light

**When to Use:**
- General mixing work
- Background monitoring (second screen)
- Learning what different elements look like

**Notes:**
- CPU-friendly for long sessions
- Balanced view without specialization
- Good starting point for beginners

---

### Configuration 2: "Bass Detective"

**Purpose:** Deep dive into low-end content

**Settings:**
- FFT: 8192 (maximum bass detail)
- Decay: Slow
- Zoom: 20-500 Hz
- Peak Hold: ON

**When to Use:**
- Mixing 808s, sub-bass, kick drums
- Checking bass vs kick relationship
- Verifying sub-bass content

**Notes:**
- Shows fine frequency detail in bass
- Can identify exact kick/bass frequencies
- Essential for bass-heavy genres (trap, EDM, dubstep)

**Visual Targets:**
- Kick: Strong peak at 50-80 Hz
- 808: Peak at 40-60 Hz
- Bass guitar: 60-120 Hz (note-dependent)
- Minimal content below 30 Hz (rumble)

---

### Configuration 3: "Reference Match"

**Purpose:** A/B comparison with professional tracks

**Settings:**
- FFT: 2048-4096
- Decay: Slow (averaged view)
- Peak Hold: OFF (average energy)
- Averaging: Heavy

**When to Use:**
- Comparing your mix to references
- Learning genre spectral profiles
- Final balance verification

**Critical Setup:**
- **Match levels before comparing** (use LUFS meter)
- Louder tracks always look "better"
- Compare similar sections (verse to verse, chorus to chorus)

**Notes:**
- Don't chase exact match - look for overall profile
- Genre matters: trap looks different from jazz
- Multiple references better than one

---

### Configuration 4: "Mud Hunter"

**Purpose:** Identify and eliminate muddy frequencies

**Settings:**
- FFT: 4096-8192
- Zoom: 200-500 Hz (mud zone)
- Peak Hold: ON
- Decay: Medium-Slow

**When to Use:**
- Mix sounds muddy or boomy
- Low-mids are unclear
- Need to identify exact mud frequency

**Visual Indicators:**
- Heavy red at 250-400 Hz = likely mud
- Compare to reference in same zone
- Often too much warmth becomes mud

**Action Steps:**
1. Identify peak frequency in 200-500 Hz
2. Use Parametric EQ 2 to cut identified frequency
3. Verify in Spectroman after cut
4. Re-check with full mix

---

### Configuration 5: "Harshness Finder"

**Purpose:** Locate and fix harsh/piercing frequencies

**Settings:**
- FFT: 4096-8192
- Zoom: 2-6 kHz (harshness zone)
- Peak Hold: ON
- Decay: Slow

**When to Use:**
- Mix sounds harsh or fatiguing
- Vocals are piercing
- Cymbals or synths are too bright

**Visual Indicators:**
- Sharp red peaks at 3-5 kHz
- May also see issues at 6-8 kHz (sibilance)

**Action Steps:**
1. Find exact harsh frequency (usually 2.5-5 kHz)
2. Use narrow Q cut (-2 to -4 dB)
3. Verify harshness reduced in Spectroman
4. Trust your ears - visual confirms what you hear

---

### Configuration 6: "Stereo Phase Check"

**Purpose:** Verify stereo imaging and phase correlation

**Settings:**
- Display: Vectorscope prominent
- Decay: Fast to Medium (see movement)
- FFT: Medium (less critical for phase)

**When to Use:**
- After stereo widening effects
- Checking mono compatibility
- Ensuring bass is centered

**Visual Indicators:**

**Good Stereo:**
- Bass/kick: Vertical line (mono/centered)
- Pads/synths: Oval pattern (width)
- Overall: Circular/oval shape

**Phase Problems:**
- Horizontal line: Over-widened, phase issues
- Diagonal tilt: Phase cancellation risk
- Disappears in mono: Serious phase problem

**Action Steps:**
1. Check vectorscope pattern
2. Switch to mono playback
3. If level drops significantly = phase problem
4. Reduce stereo width or check polarity

---

### Configuration 7: "Mastering Final Check"

**Purpose:** Pre-export quality verification

**Settings:**
- FFT: 8192 (maximum detail)
- Decay: Slow (overall balance)
- Peak Hold: ON
- Averaging: ON
- Full frequency range

**When to Use:**
- Before exporting final mix
- After mastering chain
- Client delivery preparation

**Verification Checklist:**
- [ ] No excessive content below 30 Hz
- [ ] Balanced low-mid zone (200-500 Hz)
- [ ] Clear presence (2-5 kHz)
- [ ] Extended but not harsh highs (8-15 kHz)
- [ ] Stereo field appropriate for genre
- [ ] Compares favorably to references

---

## Genre-Specific Configuration Notes

### Hip-Hop / Trap Configuration

**Key Settings:**
- Focus on 40-100 Hz (808/sub-bass zone)
- Large FFT for bass detail
- Check 2-5 kHz for vocal clarity

**Visual Targets:**
- Heavy red at 40-80 Hz (808s)
- Controlled 200-500 Hz (clean low-mids)
- Present 2-5 kHz (vocals)
- Moderate highs (hi-hats)

**Common Issues:**
- Too much sub-bass (below 30 Hz) - high-pass filter
- Muddy low-mids (200-400 Hz) - cut for clarity
- Thin vocals (lacking 2-4 kHz) - boost presence

---

### Electronic / EDM Configuration

**Key Settings:**
- Full range monitoring (20 Hz - 20 kHz)
- Check stereo width (vectorscope)
- Verify extended highs

**Visual Targets:**
- Strong kick (50-60 Hz)
- Clear bass line (80-120 Hz, note-dependent)
- Extended highs (content to 15+ kHz)
- Wide stereo on pads/synths

**Common Issues:**
- Kick and bass competing (60-100 Hz)
- Lacking air (nothing above 12 kHz)
- Over-widened bass (phase issues)

---

### Rock / Pop Configuration

**Key Settings:**
- Mid-range focus (200 Hz - 6 kHz)
- Check guitar vs vocal clarity
- Moderate stereo width

**Visual Targets:**
- Moderate bass (60-100 Hz)
- Strong mids (500 Hz - 3 kHz) for instruments
- Vocal clarity (2-5 kHz)
- Natural high-end roll-off

---

### Jazz / Acoustic Configuration

**Key Settings:**
- Natural spectral balance
- Slow decay (capture dynamics)
- Light averaging

**Visual Targets:**
- Natural bass (not boosted sub)
- Prominent 200 Hz - 5 kHz (instruments)
- Smooth, gradual roll-off
- Not artificially enhanced

---

## Common Analysis Workflows

### Workflow 1: "New Mix Initial Analysis"

**Steps:**
1. Load "Standard Mix Monitor" config
2. Play full mix, observe overall shape
3. Note obvious imbalances
4. Switch to "Bass Detective" - check low-end
5. Switch to "Reference Match" - compare to pro track
6. List issues found
7. Address with EQ/processing
8. Re-check in Spectroman

---

### Workflow 2: "Problem-Solving"

**Scenario:** Mix sounds muddy

**Steps:**
1. Load "Mud Hunter" config
2. Zoom to 200-500 Hz
3. Identify peak frequency (usually 250-400 Hz)
4. Use Parametric EQ 2 to cut at identified frequency
5. Verify in Spectroman (less red in mud zone)
6. Switch back to "Standard Mix Monitor"
7. Verify overall balance improved

---

### Workflow 3: "Reference Learning"

**Steps:**
1. Load 3-5 reference tracks in your genre
2. Use "Reference Match" config
3. Match levels (LUFS)
4. Play each reference, note spectral profile
5. Identify common patterns across references
6. Play your mix
7. Note differences (don't try to copy exactly)
8. Make targeted adjustments
9. Re-compare

---

## Configuration Best Practices

### DO:
✅ Save screenshots of your configurations  
✅ Write down settings for quick recall  
✅ Match levels when comparing to references  
✅ Use appropriate config for specific task  
✅ Combine with critical listening

### DON'T:
❌ Use same config for all tasks  
❌ Compare at mismatched volumes  
❌ Chase "perfect" flat spectrum  
❌ Mix with eyes instead of ears  
❌ Ignore genre-specific norms

---

## Integration with Other Tools

### Spectroman + Parametric EQ 2

**Workflow:**
1. Spectroman identifies problem frequency range
2. Parametric EQ 2's built-in analyzer finds exact frequency
3. Make EQ adjustment
4. Verify in Spectroman

**Why Both:**
- Spectroman = big picture overview
- Parametric EQ 2 = surgical precision

### Spectroman + Fruity Limiter

**Workflow:**
1. Fruity Limiter provides LUFS reading
2. Match reference track to your mix level
3. Use Spectroman for fair comparison

**Why Both:**
- Limiter ensures equal loudness
- Spectroman compares frequency balance

---

## The Bottom Line

**Fruity Spectroman configurations are analysis strategies, not sonic presets.** Save configurations for different tasks - standard monitoring, bass analysis, reference comparison, problem-solving, stereo checking, and mastering verification. Match your configuration to your current goal: general mixing uses balanced settings, bass work needs large FFT and zoom, reference comparison requires slow decay and averaging, problem-solving demands maximum detail. Think of configurations as diagnostic modes you switch between as your mixing focus changes.

**Essential Configs to Set Up:**
1. Standard Mix Monitor - general use
2. Bass Detective - low-end work
3. Reference Match - A/B comparison
4. Problem Solver (mud/harshness) - diagnosis
