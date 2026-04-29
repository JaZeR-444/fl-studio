# Fruity Vocoder: Do / Don't Rules

## DO: Best Practices

### Routing

✅ **DO: Pan sources hard L/R**
- Modulator hard-left, carrier hard-right
- Ensures proper channel separation
- Prevents mixed signals before processing

✅ **DO: Verify routing before troubleshooting**
- Solo L channel (should hear modulator)
- Solo R channel (should hear carrier)
- Both on = vocoded output

✅ **DO: Use dedicated vocoder tracks**
- Avoid placing on Master
- Minimize other effects on vocoder track
- Place vocoder early in chain if other effects present

✅ **DO: Swap L/R if needed**
- Click L/R labels to troubleshoot routing issues
- Quick fix for reversed signals

### Carrier Selection

✅ **DO: Use harmonically rich carriers**
- Sawtooth, square, white noise mix
- Full-range pads
- Avoid pure sines (no harmonics to vocode)

✅ **DO: Add white noise for speech clarity**
- 10-20% white noise in carrier
- Recovers "S" and "T" sounds [SRC: IL-MAN]
- Essential for clear speech

✅ **DO: Match carrier to vibe**
- Bright for upbeat/energetic
- Warm for moody/jazzy
- Experimental for psychedelic

### Modulator Preparation

✅ **DO: Use light compression on modulator**
- 2-4dB reduction
- Consistent level for vocoder tracking
- Don't over-compress [SRC: IL-MAN]

✅ **DO: De-ess sibilant vocals**
- Apply before vocoder
- Prevents harsh artifacts
- Especially important with INV mode

✅ **DO: Gate breath/room noise**
- Cleaner vocoding
- Reduces artifacts
- Better intelligibility

### Parameter Settings

✅ **DO: Start with 16-32 bands**
- Good balance of quality/CPU
- Increase for speech clarity
- Decrease for effect

✅ **DO: Use appropriate bandwidth**
- 40-60% for most applications
- Higher for clarity
- Lower for smoothness

✅ **DO: Match attack to content**
- Fast (5-20ms) for rap/trap
- Medium (50-100ms) for R&B
- Slow (150ms+) for ambient

✅ **DO: Limit frequency range appropriately**
- 100Hz-8kHz for vocals
- 60Hz-12kHz for drums
- Narrower = better quality in that range

✅ **DO: Use logarithmic scale for vocals**
- Hearing-matched band distribution
- Better speech intelligibility
- Linear for noise/drums only

### Mix Integration

✅ **DO: Use parallel processing as default**
- 20-40% wet for most applications
- Preserves original vocal clarity
- Safer gain staging

✅ **DO: Check in mix context**
- Don't judge in solo only
- Vocoder often needs to be louder than expected
- Ensure it serves the song

✅ **DO: Post-process the vocoded layer**
- EQ to fit in mix
- Reverb for space
- Compression for glue

✅ **DO: Manage sibilance post-vocoder**
- Additional de-essing if needed
- High-band reduction in vocoder display

### Creative Use

✅ **DO: Automate HOLD for effects**
- Stutter patterns
- Sustained pads
- Rhythmic gating

✅ **DO: Experiment with formant shifting**
- Subtle for character (±0.1-0.3)
- Extreme for effect (±0.5+)
- Automate for evolving sounds

✅ **DO: Try invert mode for character**
- Robot voices
- Alien textures
- Sci-fi effects

✅ **DO: Use drum vocoding creatively**
- Rhythmic harmonic textures
- Break transitions
- Unusual percussion

✅ **DO: Freeze and resample**
- Render vocoded ideas to audio
- Manipulate further (slice, stretch)
- Free up CPU

### Performance/CPU

✅ **DO: Reduce bands when possible**
- 16 bands often sufficient
- Lower CPU usage
- Increase only when needed

✅ **DO: Render vocoded tracks**
- Freeze to audio when finished
- Free up CPU for other processing
- Commit to the sound

✅ **DO: Use one instance with automation**
- Instead of multiple instances
- More efficient
- Easier to manage

---

## DON'T: Common Pitfalls

### Routing

❌ **DON'T: Leave sources panned to center**
- Both signals mix together
- Vocoder can't separate them
- Results in silence or failure

❌ **DON'T: Place vocoder on Master track**
- Processes entire mix
- No proper modulator/carrier separation
- Creates chaotic results [SRC: IL-MAN]

❌ **DON'T: Assume routing is correct**
- Always verify L/R assignment
- Check that vocoder is processing
- Test with solo buttons

### Carrier Selection

❌ **DON'T: Use pure sine waves**
- No harmonics to vocode
- Results in thin/partial output
- Use at least triangle (some harmonics)

❌ **DON'T: Use heavily filtered carriers**
- Missing frequency content
- Can't vocode in absent bands
- Use full-range sources

❌ **DON'T: Ignore carrier dynamics**
- Loud carrier can mask issues
- Consistent level is important
- But don't over-compress

### Modulator Preparation

❌ **DON'T: Over-compress modulator**
- Destroys dynamic information
- Harsh, distorted vocoding
- Use light compression only [SRC: IL-MAN]

❌ **DON'T: Ignore modulator sibilance**
- Creates harsh artifacts
- Fatiguing to listen to
- De-ess before vocoder

❌ **DON'T: Use clipped/distorted modulator**
- Artifacts transfer to output
- Poor intelligibility
- Clean source = clean vocoding

### Parameter Settings

❌ **DON'T: Always use maximum bands**
- Wastes CPU unnecessarily
- Diminishing returns above 64
- Match bands to need

❌ **DON'T: Use extreme BW (10% or 90%+)**
- Too narrow = phasey/watery
- Too wide = harsh/artifacts
- Stay in 40-70% sweet spot

❌ **DON'T: Set attack too slow for rhythm**
- Misses transients
- Sounds behind the beat
- Match to content speed

❌ **DON'T: Leave Min/Max at extremes**
- Wastes bands on unused frequencies
- Reduces quality in used range
- Narrow to content spectrum

❌ **DON'T: Forget to check scale setting**
- Log for vocals (usually)
- Linear for noise/drums
- Wrong setting = poor results

### Mix Integration

❌ **DON'T: Use 100% wet on lead vocals (usually)**
- Loses clarity
- Robotic instead of enhanced
- Use parallel for leads

❌ **DON'T: Layer without phase check**
- Can cause cancellation
- Thin, weak sound
- Use send/return or check correlation

❌ **DON'T: Ignore output levels**
- Vocoding can increase loudness
- Watch for clipping
- Use gain staging

❌ **DON'T: Solo-only judgment**
- Sounds great solo
- Disappears in mix
- Always check in context

### Creative Use

❌ **DON'T: Overuse invert mode**
- Fatiguing if constant
- Special effect, not main sound
- Use sparingly for impact

❌ **DON'T: Static settings for entire song**
- Boring, predictable
- Automate for interest
- FORM, HOLD, INV can all move

❌ **DON'T: Forget about the listener**
- Extreme effects tire ears
- Musical context matters
- Serve the song, not the effect

### Performance/CPU

❌ **DON'T: Use 8 instances at 128 bands**
- Will crash or glitch
- Very high CPU usage
- Render to audio instead

❌ **DON'T: Leave unused vocoders active**
- Wastes CPU
- Mute or disable
- Clean up project

❌ **DON'T: Automate band count**
- Can cause glitches
- Set per section/clip instead
- Or crossfade between instances

---

## Quick Reference Card

### Immediate DOs
| Situation | DO This |
|-----------|---------|
| Setting up | Pan hard L/R, verify routing |
| Carrier dead | Use sawtooth + white noise |
| Speech unclear | Raise bands to 32-48, BW to 60% |
| Needs clarity | Parallel send, 20-30% wet |
| Creative effect | Automate HOLD, try INV |

### Immediate DON'Ts
| Situation | DON'T Do This |
|-----------|---------------|
| No sound | Pan sources to center |
| CPU high | Use 128 bands everywhere |
| Lead vocal | Go 100% wet |
| Harsh sound | Ignore sibilance |
| Rhythm off | Use 200ms+ attack on rap |

---

**Source:** IL-MAN (Image-Line Manual), REPUTABLE (production practices)
**Last Updated:** 2026-02-03
