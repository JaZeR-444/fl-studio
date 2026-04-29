# Fruity Scratcher - Do & Don't Rules

## Universal Rules

### DO: Fundamental Best Practices

1. **DO normalize samples before loading**
   - Target: -6 to -3 dB peak level
   - Why: Scratcher doesn't have built-in gain control; loud samples clip, quiet samples are weak
   - How: Use Edison or sample editor to normalize

2. **DO use short samples (0.5-10 seconds)**
   - Why: Long samples (> 30 sec) cause lag and performance issues
   - Exception: Continuous playback (non-scratching) can use longer samples

3. **DO automate SPD for repeatable tape effects**
   - Why: Manual dragging is imprecise and not repeatable
   - How: Right-click SPD → Create automation clip

4. **DO adjust ACC for different effect types**
   - Tape stops: ACC = 20-40% (gradual)
   - Live scratching: ACC = 70-90% (responsive)
   - Creative FX: ACC = 40-60% (balanced)

5. **DO match SEN to your controller**
   - High-DPI mouse: SEN = 30-45%
   - Standard mouse: SEN = 50-60%
   - MIDI jog wheel: SEN = 65-80%

6. **DO use visual waveform for precision**
   - Click directly on transient peaks for accurate scratching
   - Use waveform to find "hit" points in samples

7. **DO save scratch performances to audio**
   - Route to mixer track → Record to this track
   - Or use Edison on output to capture performance

8. **DO use Fruity Limiter on Scratcher channels**
   - Prevents clipping during fast scratches
   - Set ceiling to -3 dB for headroom

---

### DON'T: Critical Mistakes to Avoid

1. **DON'T use Scratcher for pitch correction**
   - Why: SPD links speed and pitch (analog vinyl behavior)
   - Use instead: Pitcher or Newtone for independent pitch/time control

2. **DON'T insert Scratcher on the Master bus**
   - Why: Will scratch your entire mix (unintentional)
   - Use instead: Individual channels or submix buses

3. **DON'T forget to check the Hold button**
   - If Scratcher is silent, Hold may be ON (platter frozen)
   - Hold should be OFF for normal scratching

4. **DON'T use copyrighted samples without clearing**
   - Legal issue, not technical
   - Use royalty-free sample packs or original recordings

5. **DON'T skip FX chains for psychedelic vibe**
   - Scratcher alone is NOT psychedelic—requires reverb/delay/phaser
   - Dry Scratcher = performance tool, not psychedelic FX

6. **DON'T use straight-line automation for creative effects**
   - Sounds robotic and predictable
   - Use curved automation (Bezier curves) for organic feel

7. **DON'T set SEN too high initially**
   - Causes "twitchy" uncontrollable scratching
   - Start at 40-50%, adjust up if needed

8. **DON'T ignore mono compatibility for stereo scratches**
   - If using Stereo Enhancer on Scratcher channel, check mono fold-down
   - Wide scratches may disappear in mono playback

---

## Parameter-Specific Rules

### SPD (Speed) Rules

**DO:**
- ✅ Automate SPD for tape stops, spin-ups, pitch bends
- ✅ Use 0x for complete stop (silence)
- ✅ Use negative values for reverse playback
- ✅ Use 1x as default for normal playback
- ✅ Combine SPD automation with ACC adjustment for effect character

**DON'T:**
- ❌ Set SPD to extreme values (< -2x or > 2x) without FX chain (sounds harsh)
- ❌ Automate SPD with straight lines for creative effects (use curves)
- ❌ Forget to reset SPD to 1x after automated effects
- ❌ Use SPD for subtle pitch correction (use Pitcher instead)

---

### ACC (Acceleration) Rules

**DO:**
- ✅ Lower ACC (20-40%) for realistic turntable feel and gradual tape stops
- ✅ Raise ACC (70-95%) for responsive scratching and quick effects
- ✅ Adjust ACC to match the "motor feel" of real turntables
- ✅ Automate ACC for dynamic effect transitions [UNVERIFIED: experimental]

**DON'T:**
- ❌ Leave ACC at extreme 0% or 100% without reason (0% = infinite drift, 100% = no inertia)
- ❌ Use high ACC (> 70%) for moody tape stops (breaks emotional weight)
- ❌ Use low ACC (< 40%) for upbeat scratching (feels sluggish)
- ❌ Forget ACC exists—it's critical for effect character

---

### SEN (Sensitivity) Rules

**DO:**
- ✅ Adjust SEN to match your physical controller sensitivity
- ✅ Test SEN by dragging platter 1 inch—should rotate 1-2 times
- ✅ Lower SEN for high-DPI mice or sensitive MIDI controllers
- ✅ Raise SEN for low-DPI mice or resistant controllers

**DON'T:**
- ❌ Automate SEN (rarely useful, creates unpredictable control)
- ❌ Set SEN > 80% (causes hair-trigger instability)
- ❌ Set SEN < 20% (requires excessive movement for response)
- ❌ Use same SEN for mouse and MIDI controller (adjust per input type)

---

### Hold Button Rules

**DO:**
- ✅ Use Hold for "freeze" effects (pause at current position)
- ✅ Use Hold + scratching for transformer scratch technique
- ✅ Toggle Hold OFF for normal scratching
- ✅ Check Hold first if Scratcher is silent

**DON'T:**
- ❌ Leave Hold ON accidentally (causes silence/unresponsiveness)
- ❌ Automate Hold rapidly without purpose (creates glitchy stutters—intentional for some genres)

---

### REV (Reverse) Button Rules

**DO:**
- ✅ Use REV for backspin DJ technique
- ✅ Combine REV with scratching for reverse scratches
- ✅ Use REV + SPD automation for reverse swells

**DON'T:**
- ❌ Confuse REV with negative SPD values (they do the same thing)
- ❌ Forget REV is ON if sample sounds backwards unintentionally

---

## Sample Selection Rules

### DO: Sample Best Practices

1. **Use dry samples (no reverb/delay baked in)**
   - Add FX in FL Studio for control

2. **Use normalized samples (-6 to -3 dB peak)**
   - Prevents clipping and ensures consistent volume

3. **Use short samples for scratching (0.5-3 sec)**
   - Longer samples = more lag and artifacts

4. **Use transient-rich samples for percussive scratching**
   - Vocals with clear "hits" (e.g., "Hey!", "Fresh!")
   - Drum hits with strong attack

5. **Use sustained samples for texture effects**
   - Pads, ambient sounds, vocal hums
   - Good for reverse textures and pitch wobbles

### DON'T: Sample Mistakes

1. **Don't use low-quality samples (< 44.1 kHz, 16-bit)**
   - Causes digital artifacts during pitch shifts

2. **Don't use stereo-widened samples for scratching**
   - Can cause phase issues; prefer mono or centered stereo

3. **Don't use full songs (> 30 seconds)**
   - Causes performance issues and lag

4. **Don't use copyrighted acapellas without clearance**
   - Legal risk

5. **Don't use samples with heavy compression**
   - Scratching already stresses dynamics; pre-compressed samples distort easily

---

## Workflow Rules

### DO: Efficient Workflows

1. **Save channel states for recurring setups**
   - E.g., "Scratcher - Boom Bap Vocal"
   - Saves time on future projects

2. **Create template projects for live performance**
   - 4-5 Scratcher instances with different samples ready
   - MIDI mappings pre-configured

3. **Use automation clips for repeatable effects**
   - Tape stops, pitch bends, reverse swells
   - More precise than manual control

4. **Record scratch performances to audio**
   - Commit creative scratches to audio clips
   - Frees up CPU and allows further editing

5. **Document your favorite parameter combinations**
   - Build a personal "Scratcher settings log"

### DON'T: Workflow Anti-Patterns

1. **Don't manually drag platter for every tape stop**
   - Inconsistent results; use automation

2. **Don't skip saving channel states**
   - You'll forget your best settings

3. **Don't over-scratch every project**
   - Scratching is a spice, not the main ingredient

4. **Don't forget to bounce scratch performances**
   - Real-time scratching is CPU-intensive

5. **Don't use Scratcher for tasks better suited to other plugins**
   - Slicing → Fruity Slicer
   - Pitch correction → Pitcher
   - Time stretching → Edison or Newtone

---

## Genre-Specific Rules

### Hip-Hop/Boom-Bap

**DO:**
- ✅ Use classic vocal stabs ("Hey!", "Fresh!", "Yeah!")
- ✅ Set ACC = 75-85% (direct-drive turntable feel)
- ✅ Scratch on downbeats or between kick/snare
- ✅ Keep scratching minimal and intentional

**DON'T:**
- ❌ Over-scratch (breaks groove)
- ❌ Use bright/EDM samples (wrong aesthetic)
- ❌ Ignore classic scratch techniques (baby scratch, chirp, transformer)

---

### Trap/Modern Hip-Hop

**DO:**
- ✅ Use tape stops on 808s and hi-hats
- ✅ Use quick tape stops (ACC = 85-95%) for builds
- ✅ Automate SPD for dramatic pitch drops before drops

**DON'T:**
- ❌ Overuse tape stops (loses impact)
- ❌ Use low ACC for tape stops (trap wants aggressive, not lazy)

---

### R&B/Pop-Hip-Hop

**DO:**
- ✅ Use vocal ad-lib scratches ("Yeah," "Ooh")
- ✅ Automate SPD for creative pitch drops on hooks
- ✅ Keep scratching subtle and vibe-focused

**DON'T:**
- ❌ Use aggressive turntablist scratching (breaks R&B vibe)
- ❌ Scratch lead vocals (too distracting)

---

### Lo-Fi/Chillhop/Jazzy

**DO:**
- ✅ Use texture wobble (SPD = 0.9x to 1.1x)
- ✅ Set ACC = 30-50% (loose, analog feel)
- ✅ Pair with Effector (vinyl mode)
- ✅ Use "lazy tape stops" (1x → 0.7x, not full stop)

**DON'T:**
- ❌ Use high ACC (breaks lo-fi vibe)
- ❌ Use bright, clean samples (needs warmth/vintage tone)
- ❌ Scratch aggressively (jazzy is laid-back)

---

### Psychedelic/Experimental

**DO:**
- ✅ Use wide SPD range (0.5x to 1.8x)
- ✅ Automate with curves and random values
- ✅ ALWAYS pair with FX chain (reverb, delay, phaser)
- ✅ Experiment with feedback routing [UNVERIFIED]

**DON'T:**
- ❌ Use dry signal (not psychedelic without FX)
- ❌ Use predictable automation (breaks trippy vibe)
- ❌ Forget to limit output (psychedelic FX can spike loudly)

---

## Mix Integration Rules

### DO: Mixing Best Practices

1. **Monitor in mono during scratch sessions**
   - Ensures scratches work in all playback contexts

2. **Use subtractive EQ on Scratcher channel**
   - Cut problem frequencies (e.g., harsh 3-5 kHz on scratches)

3. **Apply gentle compression to scratch bus**
   - Evens out dynamic scratches

4. **Use parallel processing for heavy FX**
   - Send Scratcher to reverb/delay return, blend with dry

5. **Check headroom on Scratcher channel**
   - Fast scratches can cause brief peaks—leave -3 to -6 dB headroom

### DON'T: Mix Mistakes

1. **Don't scratch the entire mix**
   - Scratcher is for individual elements or buses, not master

2. **Don't skip limiting/compression on Scratcher channels**
   - Scratching creates dynamic spikes

3. **Don't bury scratches in the mix**
   - If using scratches, make them audible (or don't use them)

4. **Don't over-process scratches**
   - Reverb/delay can mud up scratches—use sparingly except for psychedelic

5. **Don't ignore phase issues with stereo enhancement**
   - Wide scratches may cancel in mono

---

## Performance/Live Rules

### DO: Live Performance Best Practices

1. **Map Scratcher platter to MIDI jog wheel**
   - Right-click platter → Link to controller

2. **Use multiple Scratcher instances with different samples**
   - Quick access to different sounds

3. **Pre-load samples before performance**
   - Don't browse samples during a live set

4. **Test MIDI latency before performance**
   - Adjust buffer size for minimal lag

5. **Use limiter on Scratcher outputs**
   - Prevents clipping from aggressive live scratching

### DON'T: Live Performance Mistakes

1. **Don't rely on mouse for live performance**
   - MIDI controller is more expressive and reliable

2. **Don't forget to save MIDI mappings**
   - Re-mapping mid-set is a disaster

3. **Don't over-complicate live setups**
   - Keep it simple: 3-5 Scratcher instances max

4. **Don't skip soundcheck with Scratcher**
   - Test all MIDI mappings and sample loading

---

## Technical Rules

### DO: Technical Best Practices

1. **Use 44.1 kHz or 48 kHz sample rate**
   - Matches FL Studio project settings

2. **Keep CPU usage low**
   - Bounce scratch performances to audio when possible

3. **Back up channel states and templates**
   - Scratcher setups take time to build

4. **Document MIDI mappings**
   - Save controller configurations

5. **Organize sample library**
   - Dedicated "Scratcher Samples" folder

### DON'T: Technical Mistakes

1. **Don't use mismatched sample rates**
   - Causes pitch shifts and artifacts

2. **Don't run multiple Scratcher instances on low-end systems**
   - CPU-intensive; bounce to audio instead

3. **Don't forget to update FL Studio**
   - Bug fixes and performance improvements

4. **Don't ignore latency compensation**
   - Enable in FL Studio audio settings

---

**Version:** 1.0  
**Last Updated:** 2026-02-03  
**Sources:** [IL-MAN], [REPUTABLE]
