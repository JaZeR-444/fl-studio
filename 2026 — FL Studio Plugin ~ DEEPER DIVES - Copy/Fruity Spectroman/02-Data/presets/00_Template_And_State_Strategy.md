# Fruity Spectroman - Template & State Strategy

## Overview

Unlike synthesis or effects plugins, **Fruity Spectroman** is an **analysis and visualization tool** that doesn't process audio or have traditional "presets." Instead, this guide covers **display configurations** and **analysis states** you can save and recall for different monitoring tasks.

---

## Why Templates Matter for Analysis Tools

### Analysis Tool Templates Are Different

**Traditional Presets:**
- Sound character (synth patches, effect settings)
- Audio processing configurations

**Analysis Templates:**
- Display configurations for specific tasks
- Visual settings optimized for different goals
- Monitoring setups for various production stages

**Value:**
- Quickly switch between monitoring contexts
- Consistent analysis approach across sessions
- Optimize for specific diagnostic tasks

---

## Core Template Categories

### 1. **General Mixing Monitor**

**Purpose:** Default configuration for everyday mixing work

**Settings:**
- FFT Size: 2048 (balanced detail and response)
- Decay Time: Medium (readable but responsive)
- Peak Hold: ON (catch transient peaks)
- Averaging: Light (smooth without lag)
- Frequency Range: Full (20 Hz - 20 kHz)
- Display Mode: Spectrum + Vectorscope

**When to Use:**
- General mixing sessions
- Periodic balance checks
- Learning phase (seeing how elements look)
- Multi-purpose monitoring

**Why These Settings:**
- Balanced between detail and responsiveness
- Shows full picture without specialization
- CPU-friendly for background monitoring
- Catches most issues without micro-detail

---

### 2. **Low-End Analysis**

**Purpose:** Deep bass and sub-bass monitoring

**Settings:**
- FFT Size: 8192 (maximum bass detail)
- Decay Time: Slow (see sustained low-end)
- Peak Hold: ON (catch kick transients)
- Averaging: ON (smooth bass reading)
- Frequency Range: Zoomed 20-500 Hz
- Amplitude Range: Adjusted to highlight bass content

**When to Use:**
- Mixing 808s and sub-bass
- Kick drum tuning and placement
- Bass guitar frequency checking
- Club/speaker translation verification
- EDM and hip-hop bass work

**Why These Settings:**
- Large FFT provides fine frequency resolution in bass
- Slow decay shows sustained bass character
- Zoom focuses on critical bass zone
- Averaging smooths out fluctuations for clearer reading

---

### 3. **Reference Comparison**

**Purpose:** A/B comparison with professional mixes

**Settings:**
- FFT Size: 2048-4096
- Decay Time: Slow (average spectral character)
- Peak Hold: OFF (see average energy)
- Averaging: ON Heavy (smoothest comparison)
- Frequency Range: Full
- Level Matching: CRITICAL (use LUFS meter)

**When to Use:**
- Learning from professional tracks
- Verifying mix balance against references
- Genre-appropriate frequency distribution check
- Final mix verification

**Why These Settings:**
- Slow decay and heavy averaging show overall character
- Peak hold OFF focuses on average energy, not peaks
- Full range for complete comparison
- Smooth display makes differences clearer

---

### 4. **Mastering Quality Control**

**Purpose:** Final mix analysis before export

**Settings:**
- FFT Size: 4096-8192 (maximum detail)
- Decay Time: Slow (overall balance view)
- Peak Hold: ON (catch any harsh peaks)
- Averaging: ON (smooth, averaged view)
- Frequency Range: Full
- Multiple checks across frequency zones

**When to Use:**
- Pre-export final check
- Master bus processing verification
- Frequency balance confirmation
- Professional delivery preparation

**Why These Settings:**
- Large FFT reveals subtle frequency imbalances
- Slow decay shows sustained spectral character
- Peak hold reveals any problematic resonances
- Overall smooth view for big-picture verification

---

### 5. **Problem Frequency Identification**

**Purpose:** Diagnosing specific frequency issues

**Settings:**
- FFT Size: 8192 (maximum detail)
- Decay Time: Slow (hold problem frequencies)
- Peak Hold: ON (show peaks clearly)
- Averaging: OFF (see exact peaks)
- Frequency Range: Zoomed to problem area
  - Mud: 200-500 Hz
  - Harshness: 2-5 kHz
  - Sibilance: 6-10 kHz

**When to Use:**
- Mix sounds muddy, harsh, or sibilant
- Finding exact resonance frequencies
- Surgical EQ guidance
- Problem-solving specific issues

**Why These Settings:**
- Large FFT pinpoints exact frequencies
- Peak hold makes peaks obvious
- No averaging shows raw peaks
- Zoom focuses on problem zone

---

### 6. **Stereo Field Analysis**

**Purpose:** Checking stereo width and phase

**Settings:**
- Display Mode: Vectorscope prominent
- FFT Size: Medium (not critical for this task)
- Decay Time: Fast to Medium (see stereo movement)
- Focus: Vectorscope pattern

**When to Use:**
- Verifying stereo enhancement effects
- Checking mono compatibility
- Ensuring bass is centered
- Diagnosing phase issues

**Why These Settings:**
- Vectorscope is primary tool for stereo analysis
- Faster decay shows stereo movement and variation
- Spectrum is secondary for this task

---

### 7. **Sound Design / Transient Analysis**

**Purpose:** Monitoring synthesizer harmonic content and transients

**Settings:**
- FFT Size: 512-1024 (fast response)
- Decay Time: Fast (see attacks clearly)
- Peak Hold: ON (catch transient peaks)
- Averaging: OFF (real-time response)
- Frequency Range: Full or focused on instrument range

**When to Use:**
- Designing synth patches
- Analyzing harmonic content of sounds
- Checking filter sweep effects
- Transient shaping verification

**Why These Settings:**
- Small FFT responds immediately to changes
- Fast decay shows transient detail
- No averaging for real-time feedback
- Can see effect of filter/envelope changes instantly

---

## Template Recall Strategy

### Manual Template Switching

Since FL Studio doesn't natively save Spectroman "presets," use this workflow:

**Method 1: Mental Templates**
- Memorize the key settings for each template
- Manually adjust when switching tasks
- Takes 5-10 seconds per switch

**Method 2: Screenshot Reference**
- Screenshot each template configuration
- Keep in reference folder
- Refer when needed

**Method 3: Written Quick Reference Card**
- Keep this document open
- Reference template settings when switching tasks

---

## State-Based Usage Patterns

### Production Phase Templates

#### **Early Mix (Rough Balance)**
Template: General Mixing Monitor  
Focus: Overall balance, no deep analysis

#### **Mid Mix (Detail Work)**
Template: Switch between Low-End and Problem Frequency  
Focus: Addressing specific issues

#### **Late Mix (Polish)**
Template: Reference Comparison  
Focus: Matching professional standard

#### **Pre-Export (Final Check)**
Template: Mastering Quality Control  
Focus: Final verification

---

## Template Combinations

### Multi-Instance Strategy

If CPU allows, run multiple Spectroman instances:

**Instance 1 (Master):** General Mixing Monitor  
**Instance 2 (Bass Group):** Low-End Analysis  
**Instance 3 (Vocal Channel):** Problem Frequency Identification

**Benefit:**
- Simultaneous monitoring of different aspects
- No need to switch templates
- Comprehensive real-time analysis

**Drawback:**
- Higher CPU usage
- More screen space needed

---

## Saving Custom Configurations

### FL Studio Project Template Method

**Setup:**
1. Configure Spectroman with desired template settings
2. Save FL Studio project as template
3. Load template project when you need that configuration

**Benefit:**
- Persistent across sessions
- Includes routing and placement

**Use For:**
- Recurring analysis tasks
- Client work with consistent needs
- Genre-specific monitoring setups

---

## Template Selection Guide

**Quick Decision Tree:**

**What's your goal?**

→ **General mixing?**  
Use: General Mixing Monitor

→ **Bass/low-end focus?**  
Use: Low-End Analysis

→ **Comparing to reference?**  
Use: Reference Comparison

→ **Finding specific problem frequency?**  
Use: Problem Frequency Identification

→ **Checking stereo width/phase?**  
Use: Stereo Field Analysis

→ **Final quality check before export?**  
Use: Mastering Quality Control

→ **Designing synth sounds?**  
Use: Sound Design / Transient Analysis

---

## The Bottom Line

**Fruity Spectroman templates are display configurations optimized for specific analysis tasks.** Instead of traditional presets, you're switching between monitoring "states" - general mixing uses balanced settings, low-end work uses large FFT and zoomed view, reference comparison uses slow decay and heavy averaging, problem-solving uses maximum detail with peak hold. Memorize these core templates and switch between them as your mixing focus changes. This strategic approach turns Spectroman from a passive display into an active diagnostic tool tailored to your current task.

**Core Templates to Remember:**
1. General Mixing - balanced, always-on monitoring
2. Low-End Analysis - zoomed, detailed bass work
3. Reference Comparison - smooth, averaged for A/B
4. Problem Solving - maximum detail, peak hold ON
