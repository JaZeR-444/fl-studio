# Fruity Vibrator - Mixing Rules & Best Practices

## Core Principles

### 1. **Frequency Selection Based on Musical Context**
- **Vocals (Lead)**: 4-6.5 Hz for natural vibrato
- **Vocals (Background)**: 3-5 Hz for subtle movement
- **Synth Leads**: 5-8 Hz for expressive modulation
- **Pads/Ambient**: 0.2-2 Hz for slow drift
- **Bass**: 0.5-2 Hz only (risk of losing low-end power)
- **Percussion/Bells**: 7-12 Hz for shimmer

### 2. **Depth Management**
- **Subtle**: 5-15% (imperceptible enhancement)
- **Natural**: 20-35% (traditional vibrato)
- **Obvious**: 40-60% (creative effect)
- **Extreme**: 70-100% (sound design/FX)

**Rule**: Start at 20% and increase until effect is noticeable, then reduce by 5-10%

### 3. **Genre-Specific Guidelines**

#### Boom Bap / Classic Hip-Hop
- Minimal vibrato on drums (breaks authenticity)
- Subtle on samples (15-25% depth) to add movement
- Use on synth leads with 5-7 Hz at 25-30% depth

#### Trap
- **Vocals**: 5 Hz, 20-25% depth (works with auto-tune)
- **808s**: Avoid or use < 10% depth (maintains sub punch)
- **Hi-Hats**: Never (destroys transients)
- **Synths**: 4-6 Hz, 30-40% depth for melodic elements

#### Lo-Fi Hip-Hop
- **Everything**: 0.3-2 Hz random shape for tape warble
- **Pads**: 0.5 Hz, 40-50% depth, wide stereo
- **Drums**: 0.2 Hz on full mix for vinyl effect
- Mix at 60-80% to preserve dry character

#### Moody/Emo Rap
- **Vocals**: 4-5 Hz, 30-40% depth with 200-400ms attack
- **Guitar/Strings**: 5-6 Hz, 25% depth for expression
- **Pads**: 1-2 Hz, 50% depth, stereo spread

#### Electronic/Experimental
- No rules - use extreme settings (10-20 Hz, 70-100% depth)
- Random waveforms for unpredictability
- Stereo widths of 80-100%

### 4. **Stereo Field Rules**

**Mono Sources (Lead Vocals, Bass, Kick)**
- Keep stereo at 0% to maintain center focus
- Exception: Backup vocals can use 20-40% stereo

**Stereo Sources (Pads, Synths, Guitars)**
- Use 30-70% stereo for movement
- Avoid 100% stereo (can cause phase issues)

**Stereo Pair Technique**
- Duplicate track
- First instance: Stereo +50%, Phase 0°
- Second instance: Stereo -50%, Phase 180°
- Creates wide, evolving stereo image

### 5. **Attack Time Application**

| Attack Time | Use Case | Genre |
|-------------|----------|-------|
| 0-50ms | Immediate vibrato, electronic sounds | Trap, Electronic |
| 100-300ms | Natural vocal delay | R&B, Pop Rap |
| 400-1000ms | Expressive build, sustained notes | Soul, Ballads |
| 1500-5000ms | Evolving pads, long notes | Ambient, Experimental |

**Rule**: Longer attack times sound more natural on vocals and acoustic instruments

### 6. **Mix Control Strategy**

**Parallel Processing**
- Send signal to Fruity Vibrator on separate track
- Blend with mix control or fader
- Preserves transient integrity

**Mix Percentages by Source**
- **Lead Vocals**: 80-100% (primary effect)
- **Background Vocals**: 60-80% (subtle blend)
- **Synth Leads**: 90-100% (full expression)
- **Pads**: 100% (constant movement)
- **Bass**: 30-60% (preserve low-end)
- **Bells/Plucks**: 40-70% (enhancement)

### 7. **Waveform Shape Selection**

| Shape | Character | Best For |
|-------|-----------|----------|
| Sine | Smooth, musical | Vocals, natural instruments |
| Triangle | Slightly sharper | Synths, electronic leads |
| Square | Trill-like, abrupt | Effects, glitch textures |
| Sawtooth | Rising sweep | Transitions, SFX |
| Random | Organic, unpredictable | Lo-fi, vintage emulation |

### 8. **CPU & Performance**

**Optimization Rules**
- Bounce vibrato-processed vocals to audio if not automating
- Use on groups/buses rather than individual tracks when possible
- Disable when not in use (can add latency)

**Rendering**
- Always render at project sample rate
- Check for aliasing at extreme settings (>15 Hz, >80% depth)

### 9. **Common Mistakes to Avoid**

❌ **Too much vibrato on vocals** (>40% depth sounds artificial)
❌ **Fast vibrato on bass** (destroys low-end solidity)
❌ **Vibrato on drums** (ruins transients and groove)
❌ **100% stereo on mono sources** (phase cancellation)
❌ **No attack time on vocals** (sounds robotic)
❌ **Random shape on everything** (unprofessional)

### 10. **Automation Strategies**

**Dynamic Vibrato**
- Automate depth 0% → 30% on long notes
- Creates natural expressive swell

**Frequency Sweeps**
- Automate frequency from 1 Hz → 8 Hz during build-ups
- Adds tension and energy

**Mix Automation**
- Vibrato on chorus (100%), off on verses (0%)
- Creates contrast and interest

**Stereo Movement**
- Automate stereo 0% → 60% through song
- Builds width as track progresses

### 11. **Genre Combination Matrix**

| Element | Boom Bap | Trap | Lo-Fi | Moody | Electronic |
|---------|----------|------|-------|-------|------------|
| Lead Vox | 5Hz/25% | 5Hz/20% | 5Hz/30% | 4Hz/35% | 6Hz/40% |
| Pads | 1Hz/30% | 2Hz/40% | 0.5Hz/50% | 1Hz/45% | 3Hz/60% |
| Synths | 6Hz/25% | 5Hz/35% | 7Hz/20% | 5Hz/30% | 8Hz/70% |
| Bass | Avoid | <10% | 0.5Hz/20% | 1Hz/15% | 2Hz/50% |

### 12. **Phase Offset Creative Uses**

**Multiple Instances**
- Use different phase offsets on layered instruments
- Creates complex, evolving modulation
- Example: 0°, 90°, 180°, 270° on four pad layers

**Stereo Widening**
- Left channel: Phase 0°
- Right channel: Phase 180°
- Creates pseudo-stereo from mono source

---

## Golden Rules Summary

1. **Less is more** - Start subtle, increase only if needed
2. **Respect the low-end** - Minimal vibrato on bass/kick
3. **Match the genre** - Each style has expectations
4. **Use attack time** - Delayed vibrato sounds more natural
5. **Preserve transients** - Never on drums unless intentional
6. **Blend with dry** - Mix control is your friend
7. **Mind the stereo field** - Keep mono sources centered
8. **Automate for movement** - Static vibrato gets boring
9. **Choose appropriate shapes** - Sine for natural, random for vintage
10. **Always A/B test** - Compare with vibrato on/off
