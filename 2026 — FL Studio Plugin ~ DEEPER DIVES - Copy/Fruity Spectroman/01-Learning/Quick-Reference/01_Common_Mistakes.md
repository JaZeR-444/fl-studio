# Common Mistakes - Fruity Spectroman

## Fundamental Misuses

### 1. **Mixing with Eyes Instead of Ears**

**The Mistake:**
Adjusting EQ and levels based purely on what Spectroman shows, ignoring how the music actually sounds.

**Why It's Wrong:**
- Spectrum shows objective frequency content, not subjective musical quality
- What looks "balanced" may sound wrong for your genre or vibe
- You lose the musical feel chasing visual perfection

**How to Avoid:**
- ✅ Make mixing decisions by ear FIRST
- ✅ Use Spectroman to CONFIRM your decisions
- ✅ If it sounds good but looks "wrong," trust your ears
- ✅ Treat spectrum as diagnostic tool, not mixing guide

**Example:**
You cut 200-400 Hz because it looks "too red" in Spectroman, but now your track sounds thin and weak. The "too much" low-mid was actually warmth and body your track needed.

---

### 2. **Chasing a "Flat" or "Perfect" Spectrum**

**The Mistake:**
Trying to make your spectrum look perfectly balanced with equal energy across all frequencies.

**Why It's Wrong:**
- Music is naturally imbalanced - different instruments occupy different ranges
- Genres have characteristic spectral profiles (hip-hop isn't the same as jazz)
- Flat spectrum often sounds lifeless and unmusical
- Professional mixes have peaks and valleys - it's intentional

**How to Avoid:**
- ✅ Study reference tracks in YOUR genre
- ✅ Understand your genre's typical spectrum shape
- ✅ Accept that bass-heavy genres will show more low-end
- ✅ Recognize that moody tracks should look darker

**Example:**
You EQ everything to achieve flat spectrum, but now your trap beat has no punch (weak bass) and sounds harsh (over-boosted highs). Trap SHOULD be bass-heavy spectrally.

---

### 3. **Comparing at Mismatched Volumes**

**The Mistake:**
A/B comparing your mix to a reference track without level-matching first.

**Why It's Wrong:**
- Louder tracks ALWAYS look "better" in spectrum analyzer
- Loudness creates perception of more energy across all frequencies
- Comparison is meaningless if levels don't match
- You'll chase the wrong target

**How to Avoid:**
- ✅ Match LUFS or RMS levels before comparing
- ✅ Use Fruity Limiter to check loudness
- ✅ Roughly equal perceived volume is minimum
- ✅ Ideally, match to within 0.5 LUFS

**Example:**
Reference track is -8 LUFS, your mix is -14 LUFS. Reference looks fuller and more present in Spectroman, but that's just because it's 6 dB louder. When matched, the difference is much smaller.

---

### 4. **Ignoring Genre Context**

**The Mistake:**
Using the same spectral "ideal" for all genres without considering genre-specific norms.

**Why It's Wrong:**
- Hip-hop has strong sub-bass (40-80 Hz dominant)
- Jazz emphasizes mid-range warmth (200-800 Hz)
- EDM has extended high-frequency content (12-16 kHz)
- Rock has mid-range punch (500 Hz - 3 kHz)

**How to Avoid:**
- ✅ Load reference tracks in YOUR SPECIFIC genre
- ✅ Study multiple references to see patterns
- ✅ Accept that your target spectrum is genre-dependent
- ✅ Don't compare trap to jazz spectrally

**Example:**
You cut your 808's sub-bass because it looks "too much" compared to a jazz reference. Of course it's too much - jazz doesn't have 808s. Your trap track NEEDS that sub-bass.

---

## Analysis Mistakes

### 5. **Not Using Peak Hold**

**The Mistake:**
Watching real-time spectrum without peak hold enabled, missing transient peaks.

**Why It's Wrong:**
- Transients (snare hits, kick attacks) happen too fast to see clearly
- Important frequency peaks may be momentary
- You miss problematic resonances and spikes

**How to Avoid:**
- ✅ Enable peak hold mode (if available)
- ✅ Watch for held peaks to identify resonances
- ✅ Use slow decay time for sustained analysis

---

### 6. **Forgetting Room Acoustics Affect Hearing**

**The Mistake:**
Mixing in untreated room and trusting what you hear over what Spectroman shows.

**Why It's Wrong:**
- Room modes boost/cut certain frequencies in what YOU hear
- Spectroman shows the actual signal, your room colors it
- You may over-compensate for room issues
- What shows balanced in Spectroman may sound wrong in your room

**How to Avoid:**
- ✅ Use Spectroman to verify what you're hearing
- ✅ Test mixes on multiple playback systems
- ✅ Consider room treatment or headphones for mixing
- ✅ Compare Spectroman reading to how it sounds elsewhere

**Example:**
Your room has bass mode at 80 Hz (room boost). You cut 80 Hz because it sounds too loud in your room. Spectroman shows very little 80 Hz content. Everywhere else, your mix sounds thin. You over-corrected for your room.

---

### 7. **Analyzing Only the Master**

**The Mistake:**
Only checking Spectroman on the Master channel, never on individual elements.

**Why It's Wrong:**
- Can't identify which specific element is causing frequency issues
- Masking problems aren't visible when all elements play together
- Hard to diagnose specific instrument problems

**How to Avoid:**
- ✅ Put Spectroman on Master for overview
- ✅ Solo individual elements to diagnose issues
- ✅ Check bass, kick, vocals, leads individually
- ✅ Compare soloed elements to see frequency overlap

**Example:**
Master spectrum shows huge peak at 2.5 kHz, making mix harsh. You can't tell if it's vocals, guitar, or synth. Soloing each reveals it's the synth. You'd never find this checking Master only.

---

## Technical Mistakes

### 8. **Not Understanding FFT Size/Resolution**

**The Mistake:**
Using default FFT settings without understanding the trade-off between detail and CPU.

**Why It's Wrong:**
- Large FFT = more detail but slower response and higher CPU
- Small FFT = faster response but less frequency detail
- Wrong setting for task leads to poor analysis

**How to Avoid:**
- ✅ **Mixing:** Medium FFT, medium decay
- ✅ **Mastering:** Large FFT, slow decay (detail)
- ✅ **Sound Design:** Small FFT, fast decay (transients)
- ✅ Adjust based on CPU availability

---

### 9. **Relying on Spectroman for Surgical EQ**

**The Mistake:**
Using Spectroman to find exact frequencies to cut/boost with narrow Q.

**Why It's Wrong:**
- Spectroman shows overall spectrum, not precise peaks
- Parametric EQ 2 has built-in spectrum analyzer for this
- Spectroman is for overview, not surgical work

**How to Avoid:**
- ✅ Use Spectroman for big-picture analysis
- ✅ Use Parametric EQ 2's analyzer for surgical cuts
- ✅ Sweep with EQ to find exact problem frequencies
- ✅ Verify overall balance in Spectroman after EQ

---

### 10. **Ignoring Stereo Field (Vectorscope)**

**The Mistake:**
Only watching the frequency spectrum, never checking the vectorscope for stereo/phase issues.

**Why It's Wrong:**
- Phase problems can make mixes disappear in mono (clubs, phones, radio)
- Over-widening causes thin sound on mono playback
- Centered bass is crucial for power and impact

**How to Avoid:**
- ✅ Check vectorscope for stereo width
- ✅ Verify bass/kick are centered (vertical line)
- ✅ Test mono compatibility by switching to mono
- ✅ Look for diagonal tilt (phase issues)

**Example:**
Your mix sounds wide and spacious in stereo but thin and weak in mono. Vectorscope shows horizontal line (extreme width). Bass is out of phase and cancels in mono. Reduce stereo enhancement on low-end.

---

## Workflow Mistakes

### 11. **Leaving Spectroman Open All the Time**

**The Mistake:**
Running Spectroman continuously throughout entire mixing session.

**Why It's Wrong:**
- Wastes CPU on background analysis
- Encourages mixing with eyes, not ears
- Constant visual distraction from creative flow

**How to Avoid:**
- ✅ Open when you need to diagnose issue
- ✅ Use for periodic checks, not constant monitoring
- ✅ Close during creative mixing phases
- ✅ Open for final balance verification

---

### 12. **Not Comparing to Multiple References**

**The Mistake:**
Using only one reference track, or no references at all.

**Why It's Wrong:**
- Single reference may not represent genre average
- Every mix is unique - one reference isn't enough
- Multiple references reveal patterns and norms

**How to Avoid:**
- ✅ Use 3-5 reference tracks minimum
- ✅ Choose well-produced tracks in your genre
- ✅ Note common spectral characteristics across references
- ✅ Aim for the average of references, not exact match to one

---

## The Bottom Line

**Most Spectroman mistakes come from using it as a primary mixing tool instead of a diagnostic assistant.** Your ears make the music, Spectroman helps you understand what you're hearing. Avoid mixing by visuals, chasing flat spectrum, comparing at mismatched levels, and ignoring genre context. Use it strategically: check periodically, confirm suspicions, diagnose problems, and learn from references - but always trust your ears first.

**Golden Rule:** If your instinct says trust your ears, and Spectroman says something different - **trust your ears.**
