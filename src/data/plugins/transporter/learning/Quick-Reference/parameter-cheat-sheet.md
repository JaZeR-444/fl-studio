# Transporter - Parameter Cheat Sheet

**Plugin Type:** Realtime Relooping Effect
**Category:** Creative Effect / Beat Mangler
**Official Manual:** [Transporter](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Transporter.htm)

---

## Main Loop Controls

| Parameter | Range | Function | Quick Tip |
|-----------|-------|----------|-----------|
| **Loop Length** | 1/64 - 4 bars | Size of the looped buffer | Shorter = glitchy, longer = rhythmic loops |
| **Loop Position** | 0-100% | Where in the buffer to start loop | Automate for dynamic repositioning |
| **Freeze** | On/Off | Locks current loop content | Use for building static layers |
| **Transient Sensitivity** | 0-100% | Detection threshold for beats/hits | Higher = only strong transients trigger |
| **Snap to Transients** | On/Off | Quantizes loop points to detected hits | Creates cleaner, more musical loops |

---

## Transport & Timing

| Parameter | Range | Function | When to Use |
|-----------|-------|----------|-------------|
| **Speed** | 0.5x - 2x | Playback speed multiplier | Create half-time or double-time effects |
| **Direction** | Forward/Reverse | Loop playback direction | Reverse for creative reversed effects |
| **Stutter** | Off/1-16 steps | Repeats loop segment rhythmically | Add rhythmic stutter fills |
| **Stutter Rate** | 1/64 - 1 bar | Length of each stutter repeat | Sync to tempo for musical results |

---

## Mix & Effects

| Parameter | Range | Function | Practical Use |
|-----------|-------|----------|---------------|
| **Dry/Wet Mix** | 0-100% | Balance between original and effected signal | 100% for complete transformation |
| **Output Gain** | -inf to +6dB | Overall output level | Compensate for level changes |
| **Crossfade Time** | 0-100ms | Smoothness of loop transitions | Increase to reduce clicks/pops |

---

## Modulation Section

| Parameter | Function | Automation Ideas |
|-----------|----------|------------------|
| **LFO Rate** | Modulation speed | Sync to tempo for rhythmic loop position changes |
| **LFO Depth** | Modulation intensity | Subtle wobble or extreme position jumping |
| **LFO Target** | Loop Position/Length/Speed | Choose what the LFO affects |

---

## Quick Start Presets

| Use Case | Settings |
|----------|----------|
| **Glitch Stutter** | Loop: 1/16, Snap: On, Stutter: 4 steps at 1/32 |
| **Vinyl Stop** | Speed: Automate from 100% to 0%, Crossfade: 50ms |
| **Beat Repeat** | Loop: 1/4, Freeze: On, Position: Automate |
| **Reverse Build** | Direction: Reverse, Loop: 1 bar, Speed: 0.5x |
| **Transient Gate** | Sensitivity: 80%, Loop: 1/64, Snap: On |

---

## Transient Detection Tips

1. **Percussive Material:** Use high sensitivity (70-90%) for clean detection
2. **Dense Mixes:** Lower sensitivity (30-50%) to avoid over-triggering
3. **Snap to Transients:** Always enable for rhythmic material
4. **Manual Override:** Disable for smooth, non-rhythmic sources

---

## Live Performance Tricks

### Build-Up Effect
1. Set loop length to 1/8
2. Gradually decrease loop length while increasing transient sensitivity
3. Freeze at peak moment
4. Release freeze on the drop

### Breakdown Fill
1. Freeze current loop at bar end
2. Set stutter to 8 steps at 1/16
3. Reverse direction
4. Decrease speed to 0.5x over 2 bars

### Glitch Out
1. Very short loop (1/64 or 1/32)
2. Automate loop position rapidly
3. High crossfade time (75ms+)
4. Mix at 50% with dry signal

---

## BPM Sync Behavior

- **Auto-Sync:** Transporter automatically syncs to project tempo
- **Loop Lengths:** All musical (1/4, 1/8, etc.) values sync to BPM
- **Tempo Changes:** Plugin adjusts loop timing in realtime
- **Stutter Rates:** Also tempo-synced when using musical divisions

---

## Common Mistakes to Avoid

1. **Too Long Crossfade:** Makes loops mushy and undefined
2. **Extreme Sensitivity:** Can miss intended transients or over-trigger
3. **No Freeze Control:** Learn to freeze loops strategically, not randomly
4. **Ignoring Dry/Wet:** Often 30-70% mix sounds better than 100% wet
5. **Fixed Loop Position:** Automate position for dynamic movement

---

## CPU & Performance

- **CPU Usage:** Low to moderate (depends on loop length)
- **Buffer Size:** Shorter loops = less memory usage
- **Realtime Safe:** Yes - suitable for live performance
- **Latency:** Minimal (based on transient lookahead)

---

## Genre Applications

| Genre | Typical Settings |
|-------|------------------|
| **Glitch Hop** | Short loops (1/16-1/32), high stutter rate |
| **IDM** | Variable loop lengths, position automation |
| **Techno** | Longer loops (1/2-1 bar), freeze on builds |
| **Dubstep** | Stutter on snare hits, reverse effects |
| **Hip-Hop** | Beat repeat (1/4 loops), transient-snapped |

---

## Routing Suggestions

### Send Effect
- Place on send track for parallel processing
- Mix dry drums with glitched version
- Control effect intensity via send level

### Insert Effect
- Direct loop manipulation of single track
- 100% wet for complete transformation
- Automate freeze for specific sections

### Sidechain Input
- Route different source for transient detection
- Loop one signal based on rhythm of another
- Creative cross-rhythmic effects

---

## Related Plugins

- **Gross Beat** - Alternative loop/stutter effect with more presets
- **Fruity Scratcher** - Manual loop manipulation
- **Fruity Granulizer** - Grain-based loop processing
- **Effector** - Multi-effect with loop capabilities

---

**Last Updated:** February 3, 2026
**Status:** Complete reference material
