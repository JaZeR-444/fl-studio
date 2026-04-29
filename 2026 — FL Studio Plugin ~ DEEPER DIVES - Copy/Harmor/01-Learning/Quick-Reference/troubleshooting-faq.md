# Troubleshooting FAQ

Common Harmor issues and solutions.

[SRC: IL-MAN]

---

## Performance & CPU Issues

### Q: Why is Harmor using so much CPU?

**A:** Harmor's 516 partials per voice is powerful but demanding. Solutions:

1. **Reduce unison voices**: Use 3-4 instead of 9
2. **Lower polyphony**: 8-16 voices instead of 32-64
3. **Disable unused effects**: Turn off Prism/Blur if not needed
4. **Freeze the channel**: Right-click → Freeze
5. **Render to audio**: Right-click channel → Render to wave file
6. **Use single engine**: Mix to 0% or 100% instead of blended

### Q: Audio glitches/stuttering when playing?

**A:** CPU overload or buffer issues:

- Increase FL Studio buffer size (Options → Audio Settings)
- Enable "Multi-threaded generator processing" in wrapper settings
- Freeze complex Harmor channels
- Use fewer simultaneous Harmor instances

### Q: "Out of memory" errors when loading samples?

**A:** Large samples or many resynthesis instances:

- Use shorter samples for resynthesis
- Render resynthesized sounds to audio
- Close other memory-heavy applications
- Consider using 64-bit FL Studio for more RAM access

---

## Sound Quality Issues

### Q: My resynthesized sample sounds "metallic" or "ringing"

**A:** Phase coherence issue in high frequencies:

**Solutions:**
1. Increase **Blending** (ADV tab) to 60-80%
2. Add **Blur** effect (20-30%)
3. Use **custom filter** to roll off highest frequencies
4. Try larger **Window** size in ADV tab
5. Add slight **Strum** (10-20%) to randomize phase

### Q: Transients sound "soft" or "smeared"

**A:** Losing attack detail in analysis:

**Solutions:**
1. Use **smaller Window** size (ADV tab)
2. Increase **Precision**
3. Reduce **Blending**
4. Keep **Phase Randomize** low (0-10%)
5. Use Pluck effect to sharpen decay

### Q: Sound is muddy or "underwater"

**A:** Too much low-mid energy:

**Solutions:**
1. Reduce **Sub Timbre** level
2. Use custom **filter** to scoop 200-500Hz
3. Increase **Pluck** amount (faster decay)
4. Check if both A and B engines are filling same frequency range

### Q: Getting clicks/pops when notes change

**A:** Polyphony or envelope issues:

**Solutions:**
1. Increase **polyphony** (MISC tab)
2. Add slight **Release** time to envelopes
3. Enable **Legato** mode (MISC tab) for smoother transitions
4. Use **Slide** (portamento) for pitch changes

---

## Resynthesis Issues

### Q: Can't drag audio into Harmor

**A:** File or interface issue:

**Check:**
1. File format supported (WAV, AIFF, MP3, FLAC, OGG)
2. Drag directly onto Harmor window (not just the channel)
3. Try right-clicking in Harmor → "Open sample"
4. Check if sample is corrupted (play in Edison first)

### Q: Time-stretched sample sounds "wobbly"

**A:** Speed/time mismatch:

**Solutions:**
1. Lock Speed to musical values (25%, 50%, 100%, 200%)
2. Avoid values like 47% or 63%
3. Use Time automation with smooth ramps
4. Increase **Precision** in ADV tab

### Q: Pitch doesn't change when I transpose MIDI notes

**A:** Check these settings:

1. **Speed** knob in ADV tab - if at 0%, pitch won't change
2. **Formant** lock - might be compensating
3. **Channel pitch** vs **Harmor pitch** - check both
4. Resynthesis may have captured fixed pitch content

### Q: Image synthesis (PNG) sounds nothing like I expected

**A:** Image interpretation issues:

**Tips:**
1. **White = loud**, black = silent
2. Vertical position = frequency (bottom = low, top = high)
3. Horizontal = time (left = start, right = end)
4. Start with simple shapes (horizontal lines = tones)
5. Check image dimensions (power of 2 works best)

### Q: Formant shifting sounds unnatural

**A:** Formant shifting has limits:

**Solutions:**
1. Keep shifts within ±6 semitones for natural sound
2. Larger shifts (+12, -12) create "effect" sounds
3. Combine with Blur for smoother results
4. Try shifting before resynthesis instead

---

## A/B Engine Issues

### Q: Sound gets quieter when I mix A and B

**A:** Phase cancellation:

**Solutions:**
1. Shift phase of one engine (Phase knob, 0-360°)
2. Use different filter shapes on A and B
3. Change harmonic content (Sub/Main balance)
4. Pan A and B to different stereo positions

### Q: Can't hear Engine B at all

**A:** Check these:

1. **Mix knob** - might be at 0% (A only)
2. **Engine B volume** - check per-engine level
3. **Engine B timbre** - might all be set to 0%
4. **Filter** - might be cutting all frequencies
5. **Mute** - check if B is accidentally muted

### Q: How do I copy settings from A to B?

**A:** Right-click options:

1. Click the **B** button to select Engine B
2. Right-click anywhere in the Harmor interface
3. Select "Copy A to B" or "Copy B to A"
4. Or copy specific sections (timbre, filter, etc.)

---

## Filter Drawing Issues

### Q: Filter curve looks jagged/unstable

**A:** Too many control points:

**Solutions:**
1. Use "Smooth" function (right-click → Smooth)
2. Delete unnecessary points (right-click point → Delete)
3. Draw broader curves instead of tight zigzags
4. Use fewer, well-placed points

### Q: Filter doesn't seem to be doing anything

**A:** Check these:

1. **Filter EG Amount** - might be at 0%
2. **Envelope** - might be at zero sustain
3. **Timbre content** - might not have frequencies in filtered range
4. **Mix** - might be bypassed by A/B settings

### Q: How do I reset filter to flat?

**A:** Multiple ways:

1. Right-click filter display → Clear
2. Draw flat line at 0dB
3. Copy flat preset from other engine
4. Initialize patch and start over

---

## Modulation Issues

### Q: LFO isn't affecting anything

**A:** Check the routing:

1. **LFO Amount** - must be above 0%
2. **Destination** - must be assigned to a parameter
3. **Rate** - must be above 0%
4. **Sync** - if on, check sync rate selection
5. **Retrig** - if off, LFO might be between cycles

### Q: Envelope doesn't sound right

**A:** ADSR understanding:

- **Attack**: Time to reach peak (0 = instant)
- **Decay**: Time to fall to sustain level
- **Sustain**: Level held while note is held
- **Release**: Time to fall to zero after note release

**Check:**
1. If sustain is 0%, sound will decay to silence
2. Long release can overlap with next notes
3. Amount controls how much the envelope affects the target

### Q: Mod Wheel isn't working

**A:** Check MISC tab:

1. Open **MISC** tab
2. Set **Mod Wheel** destination
3. Common choices: Filter, Timbre, Prism
4. Ensure destination parameter is accessible

---

## Workflow Issues

### Q: How do I save a resynthesized patch?

**A:** Normal preset save:

1. **File → Save preset as** (or Ctrl+S)
2. Preset includes partial data
3. Save as .fnp file
4. Sample not needed after saving (embedded)

### Q: Can I export the IMG spectrogram as image?

**A:** Yes:

1. In IMG tab, right-click
2. Select "Export image" or similar
3. Saves as PNG/BMP
4. Can re-import or edit externally

### Q: How do I make a riser/sweep effect?

**A:** Multiple methods:

**Method 1 - Filter Sweep:**
1. Draw low-pass filter
2. EG1 → Filter with negative amount
3. Long attack on EG1

**Method 2 - Prism:**
1. Set Prism to 0%
2. EG1 → Prism, +100%
3. Long attack
4. Sound "opens up" over time

**Method 3 - Time Automation:**
1. Resynthesize a texture
2. Automate Time knob
3. Speed at 0%
4. Move Time from 0% to 100%

### Q: Best way to create 808-style bass?

**A:** Synthesis approach:

1. **Sub Timbre**: High level, simple shape
2. **Main Timbre**: Low level, few harmonics
3. **Pluck**: 60% for fast decay
4. **Filter**: Low-pass at 100-200Hz
5. **Envelope**: Short-medium decay, 0% sustain
6. Optional: Add click with Engine B

---

## Image Synthesis Issues

### Q: PNG won't load into Harmor

**A:** Format/Size issues:

**Requirements:**
- Format: PNG or BMP
- Mode: Grayscale or RGB (RGB used for phase)
- Size: Power of 2 recommended (256, 512, 1024)
- Height: Typically 256-512 pixels
- Width: Flexible (time dimension)

### Q: Image sounds too "harsh" or "digital"

**A:** Image characteristics:

**Solutions:**
1. Apply **Blur** in image editor before importing
2. Use gradients instead of hard edges
3. Add **Blur** effect in Harmor (40-60%)
4. Filter out highest frequencies
5. Use **Pluck** to shape decay

### Q: How do I convert a photo to sound?

**A:** Creative process:

1. Open photo in image editor
2. Convert to grayscale
3. Resize to 512x512 or 1024x256
4. Apply blur/smoothing
5. Save as PNG
6. Drag into Harmor IMG tab
7. Experiment with different photos

---

## Integration Issues

### Q: Harmor sounds different after exporting/rendering

**A:** Check these:

1. **Oversampling**: Set to at least 2x (4x recommended)
2. **Quality settings**: Match project sample rate
3. **Frozen tracks**: Unfreeze before render for consistency
4. **Plugin delay compensation**: Ensure enabled

### Q: MIDI notes not triggering Harmor

**A:** Routing check:

1. Verify channel is armed for input (orange button)
2. Check MIDI channel matches (MISC tab)
3. Ensure no other plugins are blocking MIDI
4. Try clicking Harmor's virtual keyboard

### Q: Automation isn't recording

**A:** Setup check:

1. Right-click parameter → "Create automation clip"
2. Or: Right-click → "Link to controller" → "Auto detect"
3. Ensure track is armed for automation
4. Check that parameter is automatable (most are)

---

## Still Having Issues?

### Check These First:

1. **Latest version**: Update to newest FL Studio
2. **Plugin integrity**: Try resetting Harmor to init patch
3. **Project settings**: Check sample rate (44.1k or 48k)
4. **Audio settings**: Verify buffer size and driver

### Useful Resources:

- Image-Line forums: forum.image-line.com
- FL Studio manual: image-line.com/fl-studio-learning/
- Harmor manual section: Plugins → Harmor

### Reset Everything:

**Nuclear option** if nothing works:
1. Save project
2. Right-click Harmor channel
3. "Init preset" or "Reset"
4. Rebuild patch from scratch
5. Often fixes hidden parameter issues

---

**Version:** 1.0  
**Last Updated:** 2026-02-03
