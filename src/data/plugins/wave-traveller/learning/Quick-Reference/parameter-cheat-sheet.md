# Wave Traveller - Parameter Cheat Sheet

**Plugin Type:** Vinyl Scratch Simulator & Sample Manipulator
**Category:** Creative Effect / DJ Tool
**Official Manual:** [Wave Traveller](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Wave%20Traveller.htm)

---

## Main Controls

| Parameter | Range | Function | Quick Tip |
|-----------|-------|----------|-----------|
| **Position** | 0-100% | Playback position in sample | Automate for scratch effects |
| **Speed** | -200% to +200% | Playback speed/direction | 100% = normal, negative = reverse |
| **Crossfade** | 0-100ms | Smooths position jumps | Higher = smoother, lower = more aggressive |
| **Loop Mode** | Off/Forward/Ping-Pong | Playback looping behavior | Ping-pong for back-and-forth scratching |

---

## Scratch Modes

| Mode | Description | Use Case |
|------|-------------|----------|
| **Manual** | User controls position directly | Automation or MIDI control |
| **Auto Scratch** | Built-in scratch patterns | Quick scratch effects |
| **Follow Speed** | Scratching follows speed changes | Realistic turntable behavior |

---

## Sample Loading

| Control | Function | Tip |
|---------|----------|-----|
| **Load Sample** | Import audio file | WAV, MP3, OGG supported |
| **Sample Start** | Beginning trim point | Skip intro silence |
| **Sample End** | Ending trim point | Cut off tail |
| **Sample Root** | Reference pitch | Match to project key |

---

## Vinyl Simulation

| Parameter | Range | Function | Authenticity |
|-----------|-------|----------|--------------|
| **Vinyl Noise** | 0-100% | Adds crackle and pop | 20-40% for subtle vintage vibe |
| **Wow & Flutter** | 0-100% | Pitch instability | Simulates worn turntable |
| **Motor Lag** | 0-100% | Spin-up/spin-down time | Realistic start/stop behavior |

---

## Quick Start Techniques

| Technique | Settings | Automation |
|-----------|----------|------------|
| **Baby Scratch** | Manual mode, moderate crossfade | Position: back-and-forth |
| **Chirp Scratch** | Fast crossfade, follow speed | Position: quick forward jumps |
| **Crab Scratch** | Very fast crossfade | Position: rapid staccato movements |
| **Transform Scratch** | Loop mode, position automation | Speed: rhythmic on/off |
| **Vinyl Stop** | Motor lag 60%+ | Speed: 100% to 0% |

---

## Scratch Pattern Guide

### Baby Scratch (Beginner)
- **Movement:** Slow back-and-forth
- **Position Range:** 40-60%
- **Speed:** Constant 100%
- **Crossfade:** 30ms

### Scribble Scratch
- **Movement:** Fast random position jumps
- **Position Range:** Full range (0-100%)
- **Speed:** Varies
- **Crossfade:** 5-10ms (tight)

### Transformer
- **Movement:** On/off rhythmic cuts
- **Position:** Fixed or slowly moving
- **Speed:** 0% (cut) / 100% (play)
- **Crossfade:** Very low (0-5ms)

---

## BPM Sync & Timing

| Feature | Function | Use Case |
|---------|----------|----------|
| **Sync to Host** | Lock playback to project tempo | Time-stretched loops |
| **Manual BPM** | Set sample's original BPM | Accurate time-stretching |
| **Stretch Mode** | Time-stretch algorithm | High quality for melodic, low for drums |

---

## DJ Techniques Simulation

### Vinyl Stop Effect
1. **Speed:** 100%
2. **Automate:** Speed to 0% over 1-2 bars
3. **Motor Lag:** 70-80%
4. **Result:** Realistic turntable slowdown

### Backspin
1. **Speed:** Start at 100%
2. **Automate:** Speed to -100% quickly
3. **Motor Lag:** Low (20%)
4. **Result:** Rewind effect

### Chop/Stutter
1. **Position:** Automate to repeat small section
2. **Loop Mode:** Forward
3. **Crossfade:** 5-15ms
4. **Result:** Rhythmic sample chopping

---

## Sample Source Ideas

### Drum Loops
- **Use:** Create scratch patterns with drums
- **Tip:** Use snare or cymbal hits for punchy scratches

### Vocal Samples
- **Use:** Classic DJ scratch vocals ("Fresh!", "Ah yeah!")
- **Tip:** Short, punchy words work best

### Sound Effects
- **Use:** Scratch siren, horn, or laser sounds
- **Tip:** Harmonic content scratches better than noise

### Music Loops
- **Use:** Full instrumental loops for mixing
- **Tip:** Match BPM to project for seamless integration

---

## Automation Strategies

### MIDI Control
- **Position:** Map to mod wheel or pitch bend
- **Speed:** Map to fader or knob
- **Crossfade:** Map to expression controller
- **Result:** Real-time scratch performance

### Pattern Automation
- **Draw Curves:** Create scratch patterns in automation clips
- **LFO:** Use LFO tool for rhythmic scratching
- **Step Sequences:** Stutter and chop effects

---

## Mixing Integration

### EQ Suggestions
- **High-Pass:** 80-100Hz to remove low-end rumble from scratching
- **Boost:** 2-5kHz for scratch clarity and cut-through
- **Cut:** 200-400Hz if muddy

### Compression
- **Ratio:** 3:1 to 6:1
- **Attack:** Fast (catch transients)
- **Release:** Medium
- **Why:** Scratching has extreme dynamics

### Effects After Wave Traveller
- **Reverb:** For space (use sparingly)
- **Delay:** Echo scratch patterns
- **Distortion:** Add aggression to scratches

---

## Genre Applications

| Genre | Typical Use |
|-------|-------------|
| **Hip-Hop** | Classic DJ scratching, vocal chops |
| **Turntablism** | Complex scratch routines |
| **EDM** | Build-up vinyl stops, drops |
| **Glitch Hop** | Chopped and screwed vocals |
| **Experimental** | Abstract sample manipulation |

---

## Famous Scratch Sounds

### Classic Scratch Samples
- **"Ah" / "Fresh"** - Vocal scratches (Fab 5 Freddy)
- **"Ahhhhhh"** - Long scream/siren scratch
- **Cymbal Crash** - Percussive scratch element
- **Horn Stab** - Melodic scratch sound

### Reference Artists
- **DJ Qbert** - Turntablist pioneer
- **Mix Master Mike** - Beastie Boys DJ
- **DJ Shadow** - Sampling and scratching innovator
- **Cut Chemist** - Creative sample manipulation

---

## Performance Tips

### Live Scratching
1. **Map Position to Controller:** Fader or XY pad
2. **Practice Patterns:** Start with baby scratch
3. **Use Headphones:** Monitor cue point
4. **Record Takes:** Capture best performance

### Programmed Scratching
1. **Draw Automation:** Precise control
2. **Use Step Sequencer:** Rhythmic scratches
3. **Layer Scratches:** Multiple Wave Traveller instances
4. **Quantize:** Snap to grid for tight timing

---

## CPU & Performance

- **CPU Usage:** Low to moderate
- **Latency:** Minimal (suitable for live use)
- **Sample Loading:** RAM-based (entire sample loaded)
- **Realtime Safe:** Yes

---

## Common Mistakes to Avoid

1. **Too Much Crossfade:** Makes scratches mushy (use 10-30ms max)
2. **No Sample Trimming:** Unwanted silence affects scratch timing
3. **Improper BPM Sync:** Time-stretched samples sound wrong
4. **Excessive Vinyl Noise:** Over 50% sounds unrealistic
5. **Static Position:** Automate position for actual scratching effect

---

## Creative Uses Beyond Scratching

### Sample Browsing
- Scrub through long samples to find interesting sections
- Use as creative preview tool

### Vocal Chopping
- Chop vocals into rhythmic patterns
- Create stutter effects

### Textural Sound Design
- Slow, subtle position changes on ambient sounds
- Granular-like effects at low crossfade times

### Build-Ups
- Automate speed from 0% to 100% for tension
- Combine with filter sweeps

---

## Workflow Integration

### As Insert Effect
- Load on individual sample track
- Direct scratch manipulation
- Automate for specific sections

### As Creative Tool
- Offline processing: Render scratched audio
- Build scratch sample library
- Export unique textures

---

## Related Plugins

- **Fruity Scratcher** - Alternative scratcher plugin
- **Gross Beat** - Time manipulation and scratching
- **Effector** - Multi-effect with scratch-like capabilities
- **Transporter** - Loop manipulation (different approach)

---

**Last Updated:** February 3, 2026
**Status:** Complete reference material
