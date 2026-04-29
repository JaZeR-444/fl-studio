# Fruity Send: Core Techniques And Best Practices

## Core Techniques (12 Essential Methods)

### 1. Pre-Fader Reverb/Delay Send
**Purpose:** Maintain constant reverb/delay level during track fader automation

**Setup:**
1. Source track (e.g., vocals): Load Fruity Send in Slot 1
2. Target track (reverb bus): Load reverb plugin at 100% wet
3. Sidechain target to source
4. Fruity Send settings: Dry=100%, Volume=-6dB, Pan=center
5. Automate source track fader (vocals fade out, reverb stays constant)

**What to listen for:**
- Vocal volume decreases (fader automation working)
- Reverb tail volume stays constant (not affected by fader)
- Smooth, professional fade-out transition

**Common pitfall:** Loading reverb on source track instead of target track (defeats the purpose)
**Fix:** Reverb must be on TARGET track to remain independent of source fader

---

### 2. Parallel Compression (NY Style)
**Purpose:** Add density/punch while preserving original transients

**Setup:**
1. Source track (drums): Load Fruity Send in Slot 1
2. Target track (parallel comp): Load Fruity Compressor with aggressive settings
   - Ratio: 6:1 to 10:1
   - Threshold: -20 to -25 dB
   - Attack: 1-5 ms (fast)
   - Release: 50-100 ms (medium-fast)
3. Fruity Send settings: Dry=100%, Volume=0dB, Pan=center
4. Target track fader: -8 to -15 dB (blend to taste)

**What to listen for:**
- Original transients preserved (punchy, clear attack)
- Added sustain and density (from compressed layer)
- Fuller, more "glued" sound without losing dynamics

**Common pitfall:** Over-blending parallel compression (target fader too loud) = pumping/squashing
**Fix:** Start with target fader at -15dB, slowly increase until you hear subtle density (not obvious compression)

---

### 3. Parallel Saturation (808 / Bass)
**Purpose:** Add harmonics/grit to bass while preserving clean sub

**Setup:**
1. Bass track: Slot 1 = Fruity Send (→ Saturation Bus)
2. Bass track continues clean (no saturation on main chain)
3. Saturation Bus: Slot 1 = High-pass filter (80-100Hz), Slot 2 = Fruity Waveshaper/Blood Overdrive
4. Fruity Send settings: Dry=100%, Volume=0dB
5. Saturation Bus fader: -8 to -12 dB

**What to listen for:**
- Clean sub-bass on main track (below 80Hz)
- Saturated harmonics on saturation bus (80Hz+)
- Blend creates "fat bass" (clean low + gritty high)

**Hip-hop context:** Metro Boomin/Southside 808 technique (clean sub + distorted mids)

**Common pitfall:** Saturating the sub (muddiness, phase issues)
**Fix:** Always high-pass the saturation bus to protect sub frequencies

---

### 4. DI Extraction (Clean Signal Preservation)
**Purpose:** Grab clean/minimally-processed signal for re-routing or safety

**Setup:**
1. Guitar track: Slot 1 = Amp Sim, Slot 2 = Fruity Send (→ Clean DI track, Dry=0%)
2. Clean DI track receives post-amp signal (but not subsequent FX)
3. Continue Guitar track with reverb, delay, etc. in Slots 3+
4. Clean DI track can be routed to different amp/FX or kept for later use

**What to listen for:**
- Main guitar track: Full processed sound (amp + reverb + delay)
- Clean DI track: Amp'd guitar without time-based FX (for creative re-routing)

**Common pitfall:** Setting Dry=100% (signal continues down both paths, causing doubling)
**Fix:** Use Dry=0% for extraction (original path stops, only send continues)

---

### 5. Vocal "Throw" to Delay (Automated Send)
**Purpose:** Rhythmic delay throws on specific beats (modern hip-hop/trap)

**Setup:**
1. Vocal track: Slot 1 = Fruity Send (→ Delay Throw Bus, Dry=100%)
2. Delay Throw Bus: Fruity Delay 3 (1/4 note, feedback=40%, mix=100%)
3. Fruity Send Volume: Start at -∞ dB (no send)
4. Automate Volume:
   - Bar 4, Beat 4: -∞ dB → 0 dB (instant throw)
   - Bar 5, Beat 1: 0 dB → -∞ dB (return to dry)
5. Repeat automation pattern on desired beat hits

**What to listen for:**
- Dry vocal (no delay most of the time)
- Sudden delay throws on automated beats (rhythmic effect)
- Delay tail decays naturally after throw

**Hip-hop context:** Common in trap/drill for ad-lib throws ("Yeah!" + delay throw on snare hits)

**Common pitfall:** Automating Dry instead of Volume (mutes original vocal during throws)
**Fix:** Always automate Volume (send level), keep Dry at 100%

---

### 6. Multi-Stage Parallel Processing
**Purpose:** Multiple parallel effects from same source (compression + saturation + reverb)

**Setup:**
1. Source track (vocals): 
   - Slot 1: Fruity Send (→ Parallel Comp)
   - Slot 2: Fruity Send (→ Parallel Saturation)
   - Slot 3: Fruity Send (→ Reverb Bus)
   - All set to Dry=100%, Volume=0dB
2. Each target track has different processing
3. Blend all three target track faders to taste

**What to listen for:**
- Source track: Clean, unprocessed signal
- Parallel Comp: Adds density
- Parallel Saturation: Adds grit
- Reverb Bus: Adds space
- Combined: Rich, layered vocal sound

**Common pitfall:** Over-blending (too many parallel layers = muddy mix)
**Fix:** Use parallel processing sparingly (1-2 effects max for most sources)

---

### 7. Frequency-Specific Parallel Processing
**Purpose:** Apply parallel compression only to specific frequency range

**Setup:**
1. Source track (full-range drums): Slot 1 = Fruity Send (→ Mid-Range Comp, Dry=100%)
2. Mid-Range Comp track: 
   - Slot 1: Fruity Parametric EQ 2 (high-pass 200Hz, low-pass 5kHz)
   - Slot 2: Fruity Compressor (aggressive settings)
3. Blend Mid-Range Comp fader to add midrange punch without affecting sub or air

**What to listen for:**
- Original drums: Full frequency range preserved
- Parallel compression: Only affects 200Hz-5kHz (mids/upper-mids)
- Result: Midrange density without sub/air compression artifacts

**Common pitfall:** Compressing full-range parallel (destroys transients + sub-bass relationship)
**Fix:** Always filter parallel compression to target specific frequency ranges

---

### 8. Stereo Width Enhancement (Haas Effect)
**Purpose:** Create stereo width using short delays on sent signal

**Setup:**
1. Source track (vocal): Slot 1 = Fruity Send (→ Width Bus, Dry=100%, Pan=hard right)
2. Width Bus: 
   - Slot 1: Fruity Delay 2 (10-20ms delay, no feedback, mix=100%)
   - Slot 2: Pitch shift +5 cents (subtle detuning)
   - Pan: Hard left (opposite of send pan)
3. Width Bus fader: -15 to -20 dB (very subtle blend)

**What to listen for:**
- Subtle stereo widening (vocal feels wider)
- Mono compatibility: Check in mono (shouldn't disappear or phase out)

**Common pitfall:** Delay too long (>30ms) = obvious doubling instead of width
**Fix:** Keep delay 10-20ms for Haas effect, not rhythmic delay

**Mono compatibility rule:** Always check in mono before finalizing stereo width tricks

---

### 9. Pre-FX Send for Creative Routing
**Purpose:** Send clean signal to creative FX while continuing normal processing on main track

**Setup:**
1. Synth track: Slot 1 = Fruity Send (→ Creative FX Bus, Dry=100%)
2. Synth track: Slot 2-10 = Normal effects (EQ, compression, reverb)
3. Creative FX Bus: Extreme processing (granular reverb, pitch shifting, distortion)
4. Blend Creative FX Bus subtly under main synth

**What to listen for:**
- Main synth: Clean, polished, "normal"
- Creative FX Bus: Weird, experimental, atmospheric
- Combined: Adds interest without destroying main sound

**Common pitfall:** Creative FX too loud (overpowering main signal)
**Fix:** Blend creative FX at -18 to -25 dB (should be felt more than heard)

---

### 10. Drum Bus Routing Organization
**Purpose:** Route multiple drum elements to shared processing bus

**Setup:**
1. Kick track: Slot 1 = Fruity Send (→ Drum Bus, Dry=100%)
2. Snare track: Slot 1 = Fruity Send (→ Drum Bus, Dry=100%)
3. Hi-hat track: Slot 1 = Fruity Send (→ Drum Bus, Dry=100%)
4. Drum Bus: Shared processing (light compression, EQ, saturation)
5. Individual tracks: Keep individual processing (separate from bus)

**What to listen for:**
- Individual drums: Maintain unique character
- Drum Bus: "Glues" drums together with shared processing
- Result: Cohesive drum mix

**Common pitfall:** Over-processing drum bus (destroys individual character)
**Fix:** Use gentle compression on bus (2:1 to 4:1 ratio, slow attack to preserve transients)

---

### 11. Automated Routing Changes (Dynamic Destinations)
**Purpose:** Change send destination during song for evolving effects

**Setup (UNVERIFIED - test if "Send To" is automatable):**
1. Source track: Fruity Send with automation on "Send To" parameter
2. Verse: Send to "Short Reverb"
3. Chorus: Automate Send To → "Large Reverb"
4. Bridge: Automate Send To → "Delay + Reverb"

**If "Send To" is NOT automatable:**
- Use multiple Fruity Send instances in different slots
- Automate Volume on each send to switch between destinations
- Example: Slot 1 (Short Reverb), Slot 2 (Large Reverb), automate volumes

**What to listen for:**
- Song sections have different spatial characteristics
- Evolving mix without manual plugin swapping

---

### 12. Safety / Backup Signal Routing
**Purpose:** Route clean signal to safety track before destructive processing

**Setup:**
1. Source track: Slot 1 = Fruity Send (→ Safety Backup track, Dry=100%, Volume=0dB)
2. Source track: Slots 2-10 = Experimental/destructive processing
3. Safety Backup track: Set fader to -∞ dB (muted, but recording signal)
4. If Source track processing fails, unmute Safety Backup and use that instead

**What to listen for:**
- Safety Backup track should receive clean signal (before all processing)
- Muted by default (not audible in mix)

**Production workflow:** Especially useful when experimenting with heavy processing (saturation, bit-crushing, etc.)

---

## Best Practices Summary

### Gain Staging
1. **Send Volume:** Start at 0dB (unity gain), adjust based on target processing
2. **Target Track Fader:** Start at -12dB for parallel processing, blend to taste
3. **Check for clipping:** Monitor target track meters (red = bad)

### Routing Organization
1. **Name target tracks clearly:** "Vocal Reverb", "Drum Para Comp", "Bass Saturation"
2. **Color code routing:** Use mixer track colors to identify routing relationships
3. **Document sidechain connections:** FL Studio doesn't visually show sidechain routing clearly

### Mono Compatibility
1. **Check stereo width tricks in mono:** Any Haas effect/stereo send should survive mono fold-down
2. **Pan sends carefully:** Extreme panning can cause phase issues
3. **Test in mono before finalizing:** Especially for bass/kick parallel processing

### CPU Management
1. **Fruity Send uses negligible CPU:** Safe to use many instances
2. **Target tracks consume CPU:** Heavy reverb/compression on targets adds up
3. **Freeze target tracks if needed:** Render to audio to save CPU

### Automation Best Practices
1. **Automate Volume for throws:** Create rhythmic send effects
2. **Automate Dry for morphing:** Transition between clean and sent signals
3. **Automate Pan for movement:** Evolving stereo send positions
4. **Use automation clips:** Easier to visualize and edit than envelope-based automation

---

## Common Pitfalls + Fixes

### Pitfall 1: Empty "Send To" Dropdown
**Symptom:** Can't select destination track
**Cause:** Target track not sidechained to source
**Fix:** Right-click target's routing button on source → "Sidechain to this track"

### Pitfall 2: No Audio on Target Track
**Symptom:** Send appears to be working but target is silent
**Causes:**
- Target track muted
- Target track fader at -∞ dB
- FX on target track is set to 0% wet
**Fix:** Check target track mute status, fader position, and FX wet/dry settings

### Pitfall 3: Doubling/Phasing Artifacts
**Symptom:** Audio sounds hollow or doubled
**Causes:**
- Both dry and sent signals reaching output at similar levels
- No differentiation between dry and sent paths
**Fix:** 
- Reduce target track fader
- Or process sent signal differently (EQ, reverb, delay) to differentiate it
- Or check mono compatibility (phase cancellation in mono)

### Pitfall 4: Feedback Loop / Crackling
**Symptom:** Loud feedback, crackling, or system freeze
**Cause:** Circular routing (Track A sends to Track B, Track B sends back to Track A)
**Fix:** FL Studio prevents this with sidechain restrictions, but check routing panel for circular connections

### Pitfall 5: Latency Issues with Parallel Processing
**Symptom:** Parallel tracks sound delayed/out-of-time
**Cause:** PDC (Plugin Delay Compensation) not working correctly, or target track has high-latency plugins
**Fix:** 
- Check target track for high-latency plugins (some reverbs/amp sims add latency)
- Enable PDC in FL Studio settings (should be on by default)
- Manually align target track if PDC fails (use Edison to measure latency offset)

---

## Genre-Specific Best Practices

### Hip-Hop / Trap
- **Parallel saturation on 808s:** Clean sub + distorted harmonics
- **Vocal throws to delay:** Automate Volume on beat hits
- **Drum bus parallel compression:** NY-style for punch without destroying transients

### R&B / Pop
- **Pre-fader reverb on vocals:** Smooth fade-outs with sustaining reverb
- **Parallel compression on vocals:** Add density without losing intimacy
- **Stereo width on keys/pads:** Haas effect sends for wider soundstage

### Boom-Bap / Lo-Fi Hip-Hop
- **Parallel tape saturation:** Add warmth to drums/samples
- **Pre-FX sends to lo-fi processing:** Keep clean signal while adding degradation
- **Drum bus routing:** Glue drums with shared processing

### Electronic / EDM
- **Multi-stage parallel processing:** Compression + saturation + reverb on leads
- **Frequency-specific parallel compression:** Midrange punch on drums
- **Automated routing changes:** Evolving spatial characteristics through song sections

---

## What to Listen For (Quality Control Checks)

### For Parallel Compression:
- ✅ **Transients preserved:** Original attack should be clear, not squashed
- ✅ **Subtle density:** Should sound "fuller" but not obviously compressed
- ❌ **Pumping/breathing:** If audible, parallel compression is too loud or too aggressive

### For Parallel Saturation:
- ✅ **Clean sub:** Below 80-100Hz should remain clean
- ✅ **Harmonic richness:** Midrange should feel warmer/grittier
- ❌ **Mud/phase issues:** If bass disappears in mono, saturation bus is affecting sub

### For Pre-Fader Reverb:
- ✅ **Consistent reverb level:** Reverb stays constant during fader automation
- ✅ **Smooth transitions:** Fade-outs feel natural, not abrupt
- ❌ **Reverb overpowering:** If reverb dominates after fade, reduce send volume

### For Vocal Throws:
- ✅ **Rhythmic precision:** Throws hit exactly on beat
- ✅ **Tail decay:** Delay/reverb tail decays naturally before next throw
- ❌ **Cluttered mix:** If throws overlap messily, reduce throw frequency or delay feedback

---

**Last Updated:** 2026-02-03  
**Source Priority:** [REPUTABLE], [IL-MAN]  
**Verification Status:** Core techniques verified, automated routing requires testing
