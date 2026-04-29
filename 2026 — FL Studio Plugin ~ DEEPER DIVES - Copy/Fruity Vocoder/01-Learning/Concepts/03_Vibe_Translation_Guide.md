# Fruity Vocoder: Vibe Translation Guide

## Production Vibe Framework

This guide translates emotional/atmospheric targets ("vibes") into concrete parameter moves and routing decisions. Each vibe includes:
- **Production Levers:** Specific settings and techniques
- **What to Listen For:** Quality checks and red flags
- **Don't Do This:** Common pitfalls that kill the vibe

---

## Vibe 1: Moody

**Definition:** Dark, brooding, atmospheric, melancholic, nocturnal

### Production Levers

| Parameter | Setting/Move | Why It Works |
|-----------|--------------|--------------|
| **FORM** | -0.3 to -0.6 | Darker, masculine formants add weight and seriousness |
| **Min/Max** | 80Hz - 5kHz | Narrow range focuses on "body" frequencies, removes air |
| **Attack** | Slow (100-300ms) | Softens transients, creates pillowy/underwater quality |
| **Decay** | Slow (200-500ms) | Sustains spectral content, adds wash |
| **BW** | 30-40% | Softer bands, less edge, more blend |
| **HOLD** | Automate for sustained drones | Freeze spectrum for ambient beds |
| **Carrier** | Warm pad (sawtooth with LPF) | Rich lows, rolled-off highs |

**Routing Strategy:**
- Send track (parallel) at 40-60% wet
- Heavy post-processing: Reverb (long tail), delay (dotted 8th), EQ roll-off above 8kHz

**What to Listen For:**
- [ ] Dark, weighty character without mud
- [ ] Smooth transitions (no harsh gates)
- [ ] Sustained spectral content between phrases
- [ ] Blends into mix as "texture" not "effect"

**Pitfalls (Don't Do This):**

| Don't... | Why It Kills the Vibe | Instead... |
|----------|----------------------|------------|
| Fast attack/decay | Creates choppy, rhythmic gating—too aggressive | Slow both for sustained wash |
| Bright formant shift | Loses the dark character | Keep FORM negative or neutral |
| Full spectrum | Too bright and open for moody | Limit MAX to 5-8kHz |
| Solo vocoded track | Too prominent, loses atmospheric role | Blend as parallel layer |

---

## Vibe 2: Upbeat

**Definition:** Energetic, bright, punchy, forward-moving, optimistic

### Production Levers

| Parameter | Setting/Move | Why It Works |
|-----------|--------------|--------------|
| **FORM** | +0.1 to +0.3 | Brighter formants add energy and presence |
| **Min/Max** | 150Hz - 10kHz | Full range for clarity and air |
| **Attack** | Fast (5-20ms) | Catches transients, tight and punchy |
| **Decay** | Medium-Fast (50-150ms) | Responsive, doesn't linger |
| **BW** | 50-70% | Sharper definition for clarity |
| **Bands** | 32-64 | High resolution for intelligibility |
| **Carrier** | Bright synth (saw+square mix, bright filter) | Cut-through quality |

**Routing Strategy:**
- Insert or high-level parallel send (60-80% wet)
- Light post-processing: Short plate reverb, subtle chorus

**What to Listen For:**
- [ ] Clear, punchy attacks on each syllable
- [ ] Bright, present character that cuts through mix
- [ ] Rhythmic tightness (not washed out)
- [ ] Excitement and energy without harshness

**Pitfalls (Don't Do This):**

| Don't... | Why It Kills the Vibe | Instead... |
|----------|----------------------|------------|
| Slow attack | Blunts the punch and energy | Use fast attack for transient bite |
| Dark carrier | Muddy, lacks energy | Use bright sawtooth or add white noise |
| Low band count | Muffled, unclear | Use 32+ bands for speech clarity |
| Heavy reverb | Washes out the energy | Keep effects tight and subtle |

---

## Vibe 3: Psychedelic

**Definition:** Experimental, mind-bending, surreal, otherworldly, disorienting

### Production Levers

| Parameter | Setting/Move | Why It Works |
|-----------|--------------|--------------|
| **FORM** | Automation: -0.5 to +0.5 sweep | Morphing gender creates disorientation |
| **INV** | ON | Alien frequency inversion |
| **Min/Max** | Extreme settings (40Hz-16kHz or 1kHz-4kHz) | Full alien or telephone-band strangeness |
| **Attack** | Extreme automation | Swinging from 1ms to 500ms |
| **HOLD** | Heavy automation | Stuttering freeze effects |
| **Carrier** | Unusual sources (FM synthesis, noise, self-modulation) | Unpredictable timbres |
| **SCALE** | Toggle between Lin/Log | Changes band distribution mid-phrase |

**Routing Strategy:**
- Full wet, heavy post-processing: Phaser, flanger, long reverb with freeze
- Multiple vocoders in series for extreme processing
- Sidechain modulation from drums for rhythmic weirdness

**What to Listen For:**
- [ ] Unpredictable, evolving character
- [ ] "Wrongness" that feels intentional and artistic
- [ ] Spatial disorientation (where is this coming from?)
- [ ] Moments of clarity within chaos

**Pitfalls (Don't Do This):**

| Don't... | Why It Kills the Vibe | Instead... |
|----------|----------------------|------------|
| Static settings | Predictable, boring | Automate everything: FORM, INV, HOLD |
| Natural carriers | Too familiar, not strange | Use noise, FM, or processed carriers |
| Conservative BW | Too clean, lacks edge | Push BW extremes (very narrow or very wide) |
| Blend with dry | Grounds it in reality | Full wet for otherworldliness |

---

## Vibe 4: Jazzy

**Definition:** Smooth, sophisticated, vintage warmth, laid-back, improvisational

### Production Levers

| Parameter | Setting/Move | Why It Works |
|-----------|--------------|--------------|
| **FORM** | Subtle (-0.1 to +0.1) | Natural, human quality |
| **Min/Max** | 100Hz - 8kHz | Vintage "radio" bandwidth |
| **Attack** | Medium-Slow (50-150ms) | Relaxed, not aggressive |
| **Decay** | Medium (100-300ms) | Natural note length |
| **BW** | 40-50% | Smooth, not clinical |
| **Bands** | 16-24 | Vintage vocoder character (classic units had few bands) |
| **Carrier** | Warm analog-style pad (tri+saw with gentle filter) | Vintage synth warmth |

**Routing Strategy:**
- Parallel send at 30-40% wet
- Post-processing: Tape emulation, subtle compression, warm EQ (boost 200-400Hz)
- Subtle modulation: Auto-pan, very slow chorus

**What to Listen For:**
- [ ] Smooth, relaxed vocal quality
- [ ] Warmth in low-mids (200-400Hz)
- [ ] Natural, not "robotic" intelligibility
- [ ] Sophisticated, "lounge" character

**Pitfalls (Don't Do This):**

| Don't... | Why It Kills the Vibe | Instead... |
|----------|----------------------|------------|
| Fast attack | Too aggressive for jazzy | Relax the attack for smoothness |
| High band count | Too modern/digital | Limit to 16-24 for vintage feel |
| Extreme formant shift | Loses human quality | Keep FORM near center |
| Bright carrier | Too modern/aggressive | Use warm, filtered pads |

---

## Vibe 5: Vibey

**Definition:** Groove-focused, feel-good, head-nodding, spacey-but-grounded, modern alternative

### Production Levers

| Parameter | Setting/Move | Why It Works |
|-----------|--------------|--------------|
| **FORM** | Slight positive (+0.1 to +0.2) | Air and brightness without harshness |
| **Min/Max** | 80Hz - 12kHz | Full range with air |
| **Attack** | Fast (10-30ms) | Catches groove transients |
| **Decay** | Medium (100-200ms) | Sustains through groove pocket |
| **BW** | 45-55% | Balance of clarity and smoothness |
| **Bands** | 24-32 | Sweet spot for musicality |
| **Carrier** | Rich pad with subtle movement (chorus, slight detune) | Depth and width |

**Routing Strategy:**
- Parallel send at 25-35% wet
- Sidechain: Light compression sidechained to kick for groove pumping
- Post-processing: Subtle stereo widening, plate reverb (short-medium)

**What to Listen For:**
- [ ] Groove alignment (vocoding follows the pocket)
- [ ] Space and depth without getting lost
- [ ] Modern " alternative R&B" character
- [ ] Sits in the "vibe layer" between lead and background

**Pitfalls (Don't Do This):**

| Don't... | Why It Kills the Vibe | Instead... |
|----------|----------------------|------------|
| Too much effect | Becomes gimmicky, not vibey | Subtle blend, let it support not dominate |
| Aggressive settings | Breaks the chill | Smooth, medium settings throughout |
| Full wet | Loses connection to source | Blend with dry for familiar-yet-strange |
| Static processing | Lifeless | Subtle automation for movement |

---

## Quick Vibe Comparison Table

| Vibe | FORM | Attack | Decay | BW | Bands | Key Technique |
|------|------|--------|-------|----|-----|---------------|
| **Moody** | -0.4 | Slow | Slow | 35% | 16 | HOLD for drones |
| **Upbeat** | +0.2 | Fast | Fast | 60% | 48 | Bright carrier |
| **Psychedelic** | Auto | Auto | Auto | 80% | 8-128 | INV + automation |
| **Jazzy** | 0.0 | Medium | Medium | 45% | 20 | Vintage bandwidth |
| **Vibey** | +0.15 | Fast | Medium | 50% | 28 | Sidechain + width |

## Genre-Specific Vibe Mapping

### Hip-Hop

| Subgenre | Primary Vibe | Secondary Vibe | Application |
|----------|--------------|----------------|-------------|
| **Trap** | Upbeat | Psychedelic (ad-libs) | Stutter hooks |
| **Boom Bap** | Jazzy | Moody | Sample textures |
| **Drill** | Moody | Vibey | Dark atmospheres |
| **Cloud Rap** | Psychedelic | Vibey | Experimental hooks |
| **Alt R&B** | Vibey | Moody | Background layers |

### R&B

| Subgenre | Primary Vibe | Key Moves |
|----------|--------------|-----------|
| **Traditional** | Jazzy | Warm, subtle, sophisticated |
| **Alt/Contemporary** | Vibey | Modern, spacious, blended |
| **Neo-Soul** | Moody | Dark, held textures, warm |
| **Experimental** | Psychedelic | Extreme processing, artistic |

## Automation Strategies by Vibe

### Moody Automation
- **HOLD:** Freeze on phrase endings for sustained tails
- **FORM:** Slow LFO ±0.2 for evolving darkness
- **Mix Level:** Fade in during choruses for added weight

### Upbeat Automation
- **Attack:** Snap faster on hooks for punch
- **Return Level:** Boost 20% on choruses
- **FORM:** Slight positive shift on high-energy sections

### Psychedelic Automation
- **FORM:** 1-bar ramp -0.8 to +0.8 and back
- **INV:** Toggle every 2 beats for alien stutter
- **HOLD:** Random 1/16th note freezes
- **Scale:** Toggle Lin/Log on section changes

### Jazzy Automation
- **Min/Max:** Slow drift for vintage radio effect
- **Mix Level:** Very subtle 10% variation
- **FORM:** Almost imperceptible ±0.1 sway

### Vibey Automation
- **FORM:** 4-bar LFO ±0.1 for gentle movement
- **Mix:** Pump with kick sidechain
- **Decay:** Extend on held notes for flow

---

**Source IDs:** IL-MAN (Image-Line Manual), REPUTABLE (common production practices)
**Verification Status:** Vibe mappings are interpretive based on vocoder capabilities
**Last Updated:** 2026-02-03
