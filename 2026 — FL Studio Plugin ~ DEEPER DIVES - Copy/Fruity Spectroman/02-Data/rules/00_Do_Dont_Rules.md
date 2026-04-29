# Do/Don't Rules - Fruity Spectroman

## Core Usage Rules

### DO: Use Spectroman for Visual Confirmation ✅

**Rule:** Use Spectroman to **confirm what you hear**, not to dictate what you should do.

**Why:**
- Your ears are the ultimate judge of music quality
- Spectrum shows objective data, not subjective musicality
- Visual can be misleading without listening context

**How to Apply:**
1. Listen first, make mix decision
2. Check Spectroman to verify decision worked
3. If visual and ears agree → confidence boost
4. If visual and ears disagree → trust ears

**Example:**
- You boost 200 Hz for warmth, sounds great
- Spectroman shows "too much" red at 200 Hz
- Trust your ears - warmth is the goal

---

### DON'T: Mix with Your Eyes ❌

**Rule:** Never make EQ or mix decisions based purely on what Spectroman shows.

**Why:**
- What looks "balanced" may sound wrong
- Visual doesn't account for genre, vibe, or context
- You'll lose musical feel chasing visual perfection

**How to Avoid:**
- Close Spectroman during creative mixing
- Open only for problem-solving or verification
- Make decisions by ear, confirm with eyes

**Example of Mistake:**
- Spectroman shows heavy bass, so you cut it
- Now track sounds thin and weak
- The "too much" bass was actually the vibe

---

### DO: Compare at Matched Levels ✅

**Rule:** Always level-match when comparing your mix to reference tracks.

**Why:**
- Louder always looks "better" in spectrum
- Loudness creates illusion of more frequency content
- Comparison is meaningless at different volumes

**How to Apply:**
1. Load reference track
2. Use Fruity Limiter to check LUFS
3. Adjust reference or your mix to match (within 0.5 LUFS)
4. Now compare in Spectroman

**Measurement:**
- Use RMS or LUFS matching
- Perceived equal loudness minimum
- Exact match ideal

---

### DON'T: Chase a "Flat" Spectrum ❌

**Rule:** Don't try to make your spectrum perfectly balanced with equal energy across all frequencies.

**Why:**
- Music is naturally unbalanced
- Genres have characteristic spectral profiles
- Flat spectrum usually sounds lifeless
- Professional mixes have peaks and valleys

**How to Avoid:**
- Study reference tracks in YOUR genre
- Accept genre-appropriate imbalances
- Bass-heavy genres SHOULD look bass-heavy
- Moody vibes SHOULD look dark

**Examples:**
- Trap should be heavy at 40-80 Hz (808s)
- Jazz should emphasize 200 Hz - 5 kHz (instruments)
- Lo-fi should lack high-frequency extension

---

### DO: Use Appropriate Settings for Task ✅

**Rule:** Adjust FFT size, decay time, and zoom based on what you're analyzing.

**Why:**
- Different tasks need different display configurations
- Large FFT for bass detail, small FFT for transients
- Slow decay for averaging, fast decay for attack

**Task-Based Settings:**

| Task | FFT Size | Decay | Zoom |
|------|----------|-------|------|
| General mixing | 2048 | Medium | Full |
| Bass analysis | 8192 | Slow | 20-500 Hz |
| Reference comparison | 2048-4096 | Slow | Full |
| Transient analysis | 512-1024 | Fast | Full |
| Problem-solving | 8192 | Slow | Problem zone |

---

### DON'T: Ignore Genre Context ❌

**Rule:** Never apply the same spectral "ideal" to all genres.

**Why:**
- Hip-hop has strong sub-bass (40-80 Hz)
- Jazz emphasizes warm mid-range
- EDM has extended highs (12-16 kHz)
- Rock has mid-range punch

**How to Avoid:**
- Load reference tracks in YOUR specific genre
- Study multiple references to see patterns
- Accept that target spectrum is genre-dependent

**Example of Mistake:**
- Comparing your trap beat to a jazz reference
- Cutting 808's sub-bass because jazz doesn't have it
- Your trap track needs that sub-bass

---

### DO: Check Both Spectrum and Vectorscope ✅

**Rule:** Monitor both frequency content (spectrum) and stereo field (vectorscope).

**Why:**
- Spectrum shows frequency balance
- Vectorscope shows stereo width and phase
- Both are essential for complete picture

**What to Check:**

**Spectrum:**
- Frequency balance
- Bass content
- Presence zone
- High-frequency extension

**Vectorscope:**
- Bass is centered (vertical)
- Stereo elements show width (oval)
- No extreme width (horizontal line)
- Mono compatibility (switch to mono, check level)

---

### DON'T: Leave Spectroman Running Continuously ❌

**Rule:** Don't run Spectroman throughout entire mixing session.

**Why:**
- Wastes CPU on background analysis
- Encourages mixing with eyes
- Constant visual distraction
- Reduces creative flow

**When to Open:**
- Periodic balance checks
- Problem diagnosis
- Reference comparison
- Final verification

**When to Close:**
- Creative mixing phases
- Sound design work
- Arrangement and composition
- When CPU is struggling

---

### DO: Use Peak Hold for Transient Analysis ✅

**Rule:** Enable peak hold when analyzing transient-heavy content or finding resonances.

**Why:**
- Transients happen too fast to see without hold
- Resonances may be momentary
- Peak hold reveals brief but important peaks

**When to Use:**
- Finding harsh resonant frequencies
- Analyzing kick/snare attack
- Identifying sibilance peaks
- Problem-solving specific frequency issues

**When to Disable:**
- Reference comparison (want average energy)
- General monitoring (can be cluttered)
- Smooth overview needed

---

### DON'T: Rely Solely on Spectroman for EQ Decisions ❌

**Rule:** Use Parametric EQ 2's built-in analyzer for surgical EQ work.

**Why:**
- Spectroman is for overview, not precision
- Parametric EQ 2 has analyzer designed for EQ work
- Direct visual feedback while adjusting

**Workflow:**
1. Spectroman identifies general problem range
2. Parametric EQ 2 finds exact frequency
3. Make EQ adjustment in Parametric EQ 2
4. Verify overall balance in Spectroman

---

### DO: Test Mono Compatibility ✅

**Rule:** Always check how your mix sounds (and looks) in mono.

**Why:**
- Clubs, phones, radios often play in mono
- Phase issues disappear content in mono
- Bass MUST be strong in mono

**How to Test:**
1. Check vectorscope in stereo (should show width)
2. Switch to mono playback
3. Watch for level drop (indicates phase issues)
4. Bass should remain strong (vertical vector component)

**Red Flags:**
- Significant level drop in mono
- Bass disappears in mono
- Horizontal vectorscope pattern (over-widened)

---

### DON'T: Over-Analyze ❌

**Rule:** Don't obsess over small spectral differences that don't matter musically.

**Why:**
- Paralysis by analysis
- Micro-differences often inaudible
- Waste time on irrelevant details
- Lose sight of big picture

**Focus On:**
- Glaring imbalances (huge peaks or valleys)
- Obvious issues (excessive mud, harshness)
- Genre-inappropriate balance
- Reference comparison major differences

**Ignore:**
- Tiny variations in spectrum
- Perfect smoothness
- Exact frequency-by-frequency matching
- Minor discrepancies with reference

---

### DO: Cross-Reference with Other Meters ✅

**Rule:** Use Spectroman alongside other analysis tools.

**Why:**
- Spectroman shows frequency balance
- Limiter shows loudness
- Phase meter shows correlation
- Combined view is complete

**Essential Combinations:**

**Spectroman + Fruity Limiter:**
- Limiter provides LUFS for level matching
- Spectroman provides frequency comparison

**Spectroman + Parametric EQ 2:**
- Spectroman shows big picture
- Parametric EQ 2 for surgical work

**Spectroman + Your Ears:**
- Most important combination
- Ears judge music, Spectroman confirms

---

### DON'T: Forget Room Acoustics Affect What You Hear ❌

**Rule:** Remember Spectroman shows the signal, not what you hear in your room.

**Why:**
- Room modes boost/cut frequencies
- What you hear ≠ what Spectroman shows
- May over-compensate for room issues

**How to Account:**
- Use Spectroman to see actual signal
- Test on multiple playback systems
- Consider headphones for mixing
- Get room treatment if possible

**Example:**
- Room boosts 80 Hz (mode)
- You cut 80 Hz because it sounds loud
- Spectroman shows very little 80 Hz
- Mix sounds thin everywhere else

---

### DO: Learn from Multiple References ✅

**Rule:** Use 3-5 reference tracks, not just one.

**Why:**
- Single reference may not represent average
- Every mix is unique
- Multiple references reveal patterns

**How to Apply:**
1. Choose 3-5 well-produced tracks in your genre
2. Analyze each in Spectroman
3. Note common characteristics
4. Aim for average of references, not exact match to one

---

### DON'T: Use Default Settings for All Tasks ❌

**Rule:** Don't stick with default Spectroman settings regardless of task.

**Why:**
- Default is compromise, not optimized for anything
- Different tasks need different configurations
- Optimized settings provide better insight

**Solution:**
- Learn core configurations (general, bass analysis, reference, etc.)
- Switch configurations based on current task
- Takes 5 seconds, provides much better analysis

---

## The Bottom Line

**Fruity Spectroman rules center on using it as a diagnostic assistant, not a primary mixing tool.** Do use it for visual confirmation, reference comparison, and problem diagnosis - but don't mix with your eyes, chase flat spectrum, or ignore genre context. Always level-match for comparisons, use appropriate settings for each task, and cross-reference with your ears and other meters. The spectrum should confirm your musical decisions, not dictate them.

**Golden Rules:**
1. Ears first, eyes second
2. Match levels before comparing
3. Genre context matters
4. Use right configuration for task
5. Visual confirms, doesn't dictate
