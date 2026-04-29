# Troubleshooting Matrix - Fruity Send

**Format:** Problem → Check → Diagnosis → Solution

---

## No Sound from Send

**Check:**
- Is Fruity Send enabled/bypassed?
- Is send level above 0%?
- Does destination track have an effect?
- Is destination track muted?

**Diagnosis:**
Send is bypassed, level is 0%, or routing is incorrect

**Solution:**
1. Enable Fruity Send
2. Set send level to 30%
3. Verify destination track has effect loaded
4. Unmute destination track
5. Check mixer routing

---

## Effect Too Loud/Overwhelming

**Check:**
- What's the send level?
- What's the destination track fader level?

**Diagnosis:**
Send level or destination level too high

**Solution:**
1. Lower send level (try 20-30%)
2. Lower destination track fader
3. Balance dry/wet ratio
4. Start low and increase gradually

---

## Effect Too Quiet/Not Noticeable

**Check:**
- Send level high enough?
- Destination track fader up?
- Effect actually loaded on destination?

**Diagnosis:**
Insufficient send or destination level

**Solution:**
1. Increase send level (try 40-50%)
2. Raise destination track fader
3. Verify effect is loaded and active
4. Check effect wet/dry mix

---

## Muddy Mix After Adding Sends

**Check:**
- Are you sending bass/low-end to reverb?
- Too many tracks sent to same bus?
- Send levels too high across the board?

**Diagnosis:**
Excessive low-frequency reverb or over-processing

**Solution:**
1. Remove reverb sends from bass/808/kick
2. Lower send levels globally (20-30% max)
3. High-pass reverb bus at 200-300 Hz
4. Be selective about what gets sent

---

## Reverb/Delay Changes with Track Volume

**Check:**
- Is send set to pre-fader or post-fader?

**Diagnosis:**
Post-fader send when it should be pre-fader

**Solution:**
1. Switch send to pre-fader mode
2. Reverb/delay will now stay consistent regardless of track fader
3. Use pre-fader for all time-based effects

---

## Thin Sound in Mono

**Check:**
- Stereo reverb/delay causing phase issues?
- Wide sends on low-end?

**Diagnosis:**
Phase cancellation from stereo processing

**Solution:**
1. Switch to mono playback to verify
2. Reduce stereo width on reverb/delay
3. Keep bass/kick sends mono or remove entirely
4. Use narrower reverb settings
5. Check phase correlation

---

## Feedback/Runaway Signal

**Check:**
- Is destination track sending back to source?
- Send loop created?

**Diagnosis:**
Routing feedback loop

**Solution:**
1. Immediately stop playback
2. Bypass all sends
3. Check mixer routing for loops
4. Never send Track A to B if B sends to A
5. Clear feedback path

---

## CPU Overload from Sends

**Check:**
- How many sends are active?
- Are destination effects CPU-heavy?

**Diagnosis:**
Too many send buses with heavy effects

**Solution:**
1. Consolidate sends (fewer buses)
2. Use lighter reverb/delay plugins
3. Freeze/render send tracks
4. Disable unused sends
5. Optimize effect settings

---

## Effect Doesn't Match Vibe

**Check:**
- Is effect type appropriate?
- Are send levels right for the vibe?

**Diagnosis:**
Wrong effect or settings for target vibe

**Solution:**
- **Moody:** Use darker reverb, lower sends
- **Upbeat:** Use brighter effects, moderate sends
- **Psychedelic:** Use heavy, experimental sends
- **Jazzy:** Use natural, subtle sends
- **Vibey:** Use lush, smooth sends

---

## Kick/Bass Lost Punch

**Check:**
- Are kick/bass sent to reverb?
- Parallel compression too heavy?

**Diagnosis:**
Low-end elements losing definition

**Solution:**
1. Remove reverb sends from kick/bass
2. Use lighter parallel compression
3. Keep low-end dry and centered
4. Send only mid/high frequencies if needed

---

## Vocals Buried After Adding Sends

**Check:**
- Too much reverb/delay?
- Competing with other sent elements?

**Diagnosis:**
Excessive processing or frequency masking

**Solution:**
1. Lower vocal send levels (start 25%)
2. Reduce sends on competing elements
3. High-pass reverb to clear low-mids
4. Check vocal level in dry mix first

---

## Stereo Image Too Wide

**Check:**
- Stereo reverb/delay on everything?
- Pan settings on sends?

**Diagnosis:**
Over-widened stereo field

**Solution:**
1. Use narrower reverb settings
2. Keep bass/kick mono (no sends)
3. Reduce stereo delay width
4. Check mono compatibility
5. Pan sends to center if needed

---

## Different Results on Different Systems

**Check:**
- Phase issues?
- Bass heavy on some systems?

**Diagnosis:**
Mix translation problems, often phase-related

**Solution:**
1. Check in mono (phase check)
2. Reduce stereo width on sends
3. High-pass reverb to avoid mud
4. Test on multiple systems
5. Reference professional tracks

---

## Automation Not Working

**Check:**
- Is send level automated?
- Is automation enabled?
- Correct parameter automated?

**Diagnosis:**
Automation not recorded or disabled

**Solution:**
1. Verify automation lane exists
2. Enable automation playback
3. Check you're automating send level, not volume
4. Re-record automation if needed

---

## Clipping on Destination Track

**Check:**
- Too many sources sent to same bus?
- Send levels too high?
- Effect output too hot?

**Diagnosis:**
Gain staging issue on destination

**Solution:**
1. Lower send levels on source tracks
2. Lower input gain on destination effect
3. Use limiter on destination bus
4. Balance multiple sends feeding same bus

---

## Quick Troubleshooting Checklist

### No Sound:
- [ ] Send enabled?
- [ ] Send level > 0%?
- [ ] Destination track has effect?
- [ ] Destination track unmuted?

### Too Loud:
- [ ] Lower send level (20-30%)
- [ ] Lower destination fader

### Too Quiet:
- [ ] Raise send level (40-50%)
- [ ] Raise destination fader
- [ ] Check effect wet/dry

### Muddy:
- [ ] Remove bass sends to reverb
- [ ] Lower overall send levels
- [ ] High-pass reverb bus

### Phase Issues:
- [ ] Check mono playback
- [ ] Reduce stereo width
- [ ] Keep low-end mono

### Feedback Loop:
- [ ] Stop playback immediately
- [ ] Check for send loops
- [ ] Clear routing conflicts

---

## The Bottom Line

**Most send problems come from incorrect pre/post-fader settings, too-high send levels, or sending low-end to reverb.** If reverb changes with track volume, switch to pre-fader. If mix is muddy, remove bass sends and lower levels. If thin in mono, reduce stereo width. If feedback occurs, check for routing loops. If effect is too loud, start at 20% and increase. If too quiet, boost to 40-50%. Always test in mono, keep bass/kick dry, and use pre-fader for reverb/delay.

**Most Common Fix:** Lower send levels and switch to pre-fader for time-based FX.
