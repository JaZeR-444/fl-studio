# Live Glitch Performance with Transporter

**Difficulty:** Intermediate
**Time Required:** 20-30 minutes
**Goal:** Set up Transporter for expressive live performance control
**Genre:** Glitch, IDM, Live Electronic

---

## Prerequisites

- Transporter loaded on mixer track or send
- MIDI controller with knobs/faders (optional but recommended)
- Understanding of FL Studio automation and MIDI mapping
- Audio source playing (drum loop, vocals, or full mix)

---

## Workflow Steps

### Step 1: Initial Routing Setup

1. **Create Send Track:**
   - Add Transporter to mixer Send track (e.g., Send 1)
   - Send ~30% of your main drum bus to this track
   - *Why:* Parallel processing keeps original signal intact

2. **Set Initial Mix:**
   - Transporter **Dry/Wet:** 100% wet
   - Send **Volume:** -6dB
   - *Why:* Control effect intensity via send level, not dry/wet

---

### Step 2: Core Performance Parameters

3. **Map Loop Length to Controller:**
   - Right-click **Loop Length** > Link to Controller
   - Assign to knob/fader
   - *Why:* Real-time loop size changes are essential for glitch
   - *Range:* Focus on 1/64 to 1/4 range

4. **Map Loop Position to Second Controller:**
   - Assign to another knob/fader or XY pad
   - *Why:* Dynamic loop repositioning creates variation
   - *Tip:* Use mod wheel or ribbon controller for smooth sweeps

5. **Map Freeze to Button/Pad:**
   - Assign to MIDI note or button
   - *Why:* Instant loop capture for builds and fills
   - *Tip:* Use toggle mode for sustained freezes

---

### Step 3: Transient Detection Configuration

6. **Set Transient Sensitivity:** ~60%
   - *Why:* Middle ground for most drum material
   - *Adjust:* Higher for sparse drums, lower for dense mixes

7. **Enable Snap to Transients:**
   - Turn **ON**
   - *Why:* Keeps loops musical and in-time
   - *Note:* Can disable for smooth, non-rhythmic sources

---

### Step 4: Stutter Effect Setup

8. **Stutter Rate:** Set to **1/16**
   - *Why:* Classic glitch stutter rate
   - *Alternatives:* 1/32 for faster, 1/8 for slower

9. **Stutter Steps:** Start at **4**
   - *Why:* Creates rhythmic 4-hit stutter
   - *Map to Controller:* For variable stutter lengths

10. **Map Stutter On/Off:**
    - Assign to button or pad
    - *Why:* Engage stutter only when needed
    - *Performance Tip:* Hit on fill moments

---

### Step 5: Advanced Performance Controls

11. **Speed Control:**
    - Keep at **100%** normally
    - *Performance Move:* Drop to 50% for half-time breakdowns
    - *Map to Fader:* For vinyl-stop style effects

12. **Direction Toggle:**
    - Set up button for Forward/Reverse switch
    - *Why:* Instant reverse effects for builds
    - *Tip:* Combine with freeze for reversed loop layers

13. **Crossfade Time:** Set to **25-40ms**
    - *Why:* Smooth enough to avoid clicks, tight enough for glitch
    - *Adjust:* Lower for aggressive cuts, higher for smooth transitions

---

### Step 6: LFO Modulation (Optional Advanced)

14. **LFO Rate:** Sync to **1/4** or **1/8**
    - *Why:* Rhythmic automatic loop position movement
    - *When:* Use during sustained sections for auto-variation

15. **LFO Depth:** Start at **30%**
    - *Why:* Subtle automatic wobble
    - *Increase:* Up to 70% for chaotic movement

16. **LFO Target:** Set to **Loop Position**
    - *Why:* Creates auto-scanning through loop buffer
    - *Alternatives:* Try on Loop Length for rhythmic size changes

---

### Step 7: Performance Technique Practice

17. **Practice These Moves:**

**Move 1: Build-Up**
- Start with loop length at 1/4
- Gradually reduce to 1/64 over 4 bars
- Increase send level simultaneously
- Freeze on last beat before drop
- Release all on drop

**Move 2: Glitch Fill**
- Enable stutter during last bar of phrase
- Sweep loop position while stutter is active
- Disable stutter on downbeat

**Move 3: Reverse Build**
- Freeze current loop
- Switch to reverse direction
- Reduce speed from 100% to 50%
- Switch back to forward on drop

**Move 4: Position Scan**
- Loop length at 1/8
- Rapidly sweep loop position back and forth
- Creates "scrubbing" effect

---

### Step 8: Safety Nets & Backup

18. **Create Snapshots:**
    - Save multiple Transporter preset states
    - Name them: "Reset", "Glitch", "Stutter", "Reverse"
    - *Why:* Quick recall if you get lost during performance

19. **Set Up Kill Switch:**
    - Map send level to fader
    - Pull to 0 to instantly remove effect
    - *Why:* Emergency reset for live situations

---

## Performance Workflow Example (16-Bar Section)

```
Bars 1-4:   Normal playback (send at 10%)
Bars 5-6:   Gradually increase send to 40%
Bar 7:      Sweep loop position, length at 1/8
Bar 8:      Freeze loop, enable stutter (4 steps at 1/16)
Bar 9-12:   Hold freeze, stutter builds tension
Bar 13:     Disable stutter, reverse direction
Bar 14:     Reduce speed to 50%
Bar 15:     Release freeze, forward direction, speed back to 100%
Bar 16:     Pull send back to 10%, reset loop length to 1/4
```

---

## MIDI Controller Mapping Template

### Essential Mappings
| Control | Assignment | Range |
|---------|------------|-------|
| Knob 1 | Loop Length | 1/64 - 1/2 |
| Knob 2 | Loop Position | 0-100% |
| Knob 3 | Transient Sensitivity | 40-80% |
| Knob 4 | Crossfade Time | 10-100ms |
| Fader 1 | Send Level | 0-100% |
| Fader 2 | Speed | 0.5x - 2x |
| Pad 1 | Freeze Toggle | On/Off |
| Pad 2 | Stutter Enable | On/Off |
| Pad 3 | Direction Toggle | Fwd/Rev |
| Pad 4 | Snap to Transients | On/Off |

---

## Advanced Variations

### Variation 1: Dual Transporter Setup
- Load two Transporters on separate send tracks
- One for short glitches (1/64-1/16)
- One for long loops (1/4-1 bar)
- Crossfade between them for dynamic range

### Variation 2: Source Switching
- Route multiple sources to Transporter send
- Switch which tracks are sent during performance
- Glitch drums, then switch to vocals, then synths

### Variation 3: Post-Effect Chain
- Add distortion after Transporter (on send track)
- Add reverb for glitch ambience
- Use filter for frequency-based glitch variations

---

## Genre-Specific Techniques

### Glitch Hop
- Focus on 1/16 and 1/32 loop lengths
- Heavy stutter use on snare hits
- Combine with pitch-shifted drums

### IDM
- Variable loop lengths (1/64 to 1 bar)
- Extensive loop position automation
- Combine freeze with reverse for abstract textures

### Techno (Live Sets)
- Longer loops (1/2 to 1 bar)
- Use freeze sparingly for build-ups
- Stutter on hi-hats for energy boosts

### Bass Music
- Short loops on bass hits (1/32)
- Reverse effects before drops
- Combine with distortion for aggression

---

## Troubleshooting Live Performance

### Issue: Clicks and Pops
- **Solution:** Increase crossfade time to 40-60ms
- Check that snap to transients is enabled

### Issue: Effect Too Harsh
- **Solution:** Reduce send level, don't use 100% wet
- Add slight reverb after Transporter to smooth

### Issue: Lost in the Effect
- **Solution:** Use your kill switch (send fader)
- Load "Reset" preset snapshot

### Issue: Loops Don't Sync
- **Solution:** Verify project BPM is set correctly
- Check that loop lengths are using musical divisions

---

## Recording Your Performance

1. **Record to Playlist:**
   - Arm mixer track with Transporter
   - Record all parameter movements
   - Edit/refine automation afterwards

2. **Export Individual Glitch Sections:**
   - Solo Transporter send track
   - Export loops as audio samples
   - Build custom glitch library

3. **Freeze Favorite Moments:**
   - When you hit a great glitch texture, freeze it
   - Record that frozen loop separately
   - Use as one-shot sample later

---

## Next Steps

After mastering live Transporter performance:

1. **Combine with Gross Beat** for enhanced time manipulation
2. **Layer multiple Transporters** on different frequency ranges
3. **Create macro controls** in Patcher for complex multi-parameter moves
4. **Build custom glitch presets** based on your performance style

---

**Related Workflows:**
- [Glitch Drum Processing](./glitch-drum-processing.md)
- [Vocal Stutter Effects](./vocal-stutter-effects.md)
- [Build-Up and Fill Creation](./buildup-fill-creation.md)

---

**Last Updated:** February 3, 2026
**Status:** Complete workflow
