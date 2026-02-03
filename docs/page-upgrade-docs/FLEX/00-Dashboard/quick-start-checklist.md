# FLEX Quick Start Checklist

Fast-track guide to getting productive with FLEX in under 30 minutes. Follow these checklists for immediate results.

---

## Table of Contents

1. [First-Time Setup (5 Minutes)](#first-time-setup-5-minutes)
2. [Your First Sound (5 Minutes)](#your-first-sound-5-minutes)
3. [Essential Shortcuts (2 Minutes)](#essential-shortcuts-2-minutes)
4. [Quick Wins Checklist (10 Minutes)](#quick-wins-checklist-10-minutes)
5. [Genre-Specific Quick Starts](#genre-specific-quick-starts)
6. [Troubleshooting Quick Fixes](#troubleshooting-quick-fixes)
7. [Daily Workflow Checklist](#daily-workflow-checklist)

---

## First-Time Setup (5 Minutes)

### Step 1: Load FLEX (30 seconds)

```
☐ Open FL Studio
☐ Press F8 or click "+" button in Channel Rack
☐ Select "FLEX" from plugin list
☐ FLEX window opens
☐ Preset browser visible at bottom
```

**If FLEX doesn't appear:**
- Check if FL Studio All Plugins Bundle is activated
- Restart FL Studio
- Verify installation in Plugin Manager (F10)

### Step 2: Configure Master Volume (30 seconds)

```
☐ Locate Master Volume slider (bottom right)
☐ Adjust to comfortable listening level (~70%)
☐ Click padlock icon below volume slider
☐ Volume now locked across all presets
```

**Why:** Prevents ear-blasting volume jumps when browsing presets.

### Step 3: Download Essential Packs (2 minutes)

```
☐ Click "Packs" tab in preset browser
☐ Look for cloud download icons
☐ Download at minimum:
  ☐ Essential Keyboards
  ☐ Essential 808s
  ☐ Essential Strings (if doing cinematic work)
☐ Wait for downloads to complete
```

**Note:** Internet connection required. If offline, download via Image-Line account and place in `Documents\Image-Line\FLEX\Packs`.

### Step 4: Enable Panel Locks (30 seconds)

```
☐ Double-click FLEX logo (top left)
☐ Select "Show panel locks"
☐ Padlock icons appear below parameters
☐ Close menu
```

**Why:** Allows locking parameters while browsing (advanced feature, optional for beginners).

### Step 5: Set Buffer Size (1 minute)

```
☐ Open FL Studio Options (F10)
☐ Go to Audio Settings
☐ Set Buffer Length:
  ☐ 512 samples (good balance)
  ☐ Or 1024 samples if CPU struggles
☐ Click Apply
☐ Close Options
```

**Why:** Prevents audio crackling and CPU overload.

---

## Your First Sound (5 Minutes)

### Beginner Path: Play a Piano (2 minutes)

```
☐ Step 1: Load Piano Preset
  ☐ Click "Packs" → "Essential Keyboards"
  ☐ Browse to piano presets
  ☐ Click any grand piano preset

☐ Step 2: Play Notes
  ☐ Click on piano roll or use MIDI keyboard
  ☐ Sound should play immediately
  ☐ ✅ Success! You're making sound.

☐ Step 3: Adjust Tone
  ☐ Move Macro 1 slider (usually "Tone")
  ☐ Sound gets brighter (right) or darker (left)
  ☐ Experiment with other macros

☐ Step 4: Add Reverb
  ☐ Locate Reverb section (bottom middle)
  ☐ Adjust "Mix" knob to ~20%
  ☐ Sound now has space/ambience
```

### Intermediate Path: Make an 808 Bass (3 minutes)

```
☐ Step 1: Load 808 Preset
  ☐ Click "Packs" → "Essential 808s"
  ☐ Select any 808 preset
  ☐ Play low note (C2 or below)

☐ Step 2: Critical Settings
  ☐ Check Vectorscope (click diamond icon)
  ☐ Should show VERTICAL LINE (mono)
  ☐ If not, lower "Width" or "Unison" macro to 0%
  ☐ Set Reverb Mix to 0% (no reverb on bass!)

☐ Step 3: Shape the 808
  ☐ Macro 1 (Tone): 50-60% (smooth but defined)
  ☐ Macro 2 (Sub): 80-95% (maximum power)
  ☐ Envelope Release (R): 300-500ms (tail length)
  ☐ Test: Play single note, should thump then decay

☐ Step 4: Add Warmth
  ☐ Limiter dropdown: Select "Warming"
  ☐ Pre knob: 25-30%
  ☐ Instant analog character
```

---

## Essential Shortcuts (2 Minutes)

### Must-Know Keyboard Shortcuts

```
☐ Learn these first (commit to memory):
  ☐ Ctrl + Up/Down - Browse presets (faster than clicking)
  ☐ Alt + Click - Reset parameter to default
  ☐ Shift + F - Favorite current preset
  ☐ F10 - Open/close preset browser
```

### Secondary Shortcuts (learn as needed)

```
☐ Right-Click on parameter - Create automation clip
☐ Ctrl + Right-Click - Link to MIDI controller
☐ Hold Alt while dragging - Fine control (cents, small adjustments)
☐ Double-Click FLEX logo - Cycle themes / Show panel locks
```

### MIDI Controller Setup (optional)

```
☐ Right-click any macro slider
☐ Select "Link to controller"
☐ Move physical knob on MIDI controller
☐ Link established
☐ Repeat for all 8 macros
```

**Result:** Real-time macro control during performance/recording.

---

## Quick Wins Checklist (10 Minutes)

### Quick Win #1: Lock Master Volume (30 seconds)

```
☐ Problem: Presets jump all over in volume
☐ Solution:
  ☐ Adjust Master Volume slider to comfortable level
  ☐ Click padlock icon below it
  ☐ Now ALL presets stay this volume
☐ Result: Consistent browsing experience
```

### Quick Win #2: Reset Macros (10 seconds)

```
☐ Problem: Preset sounds weird or extreme
☐ Solution:
  ☐ Alt + Click each Macro slider (1-8)
  ☐ Returns to designer's intended default
☐ Result: Preset sounds as intended
```

### Quick Win #3: Check Bass is Mono (15 seconds)

```
☐ Problem: Bass disappears on club systems/phones
☐ Solution:
  ☐ Load bass/808 preset
  ☐ Click Vectorscope (diamond icon)
  ☐ Should show VERTICAL LINE (not wide ball)
  ☐ If wide → Lower "Width" or "Unison" macro to 0%
☐ Result: Mono-compatible bass
```

### Quick Win #4: Add Instant Warmth (20 seconds)

```
☐ Problem: Preset sounds cold/digital/harsh
☐ Solution:
  ☐ Set Limiter to "Warming"
  ☐ Increase Pre knob to 30%
  ☐ Instant analog character
☐ Result: Warm, vintage vibe
```

### Quick Win #5: High Pass for Clarity (25 seconds)

```
☐ Problem: Mix sounds muddy, bass unclear
☐ Solution: For NON-BASS sounds only:
  ☐ Enable Master Filter (bottom left)
  ☐ Type: High Pass 12dB
  ☐ Cutoff: 180Hz
  ☐ Res: 0%
☐ Result: Clear space for bass, cleaner mix
```

### Quick Win #6: Lock Reverb While Browsing (30 seconds)

```
☐ Problem: Want all presets to have same reverb
☐ Solution:
  ☐ Double-click FLEX logo
  ☐ Select "Show panel locks"
  ☐ Set Reverb Mix to desired level (e.g., 20%)
  ☐ Click padlock below Reverb Mix
  ☐ Now locked across all presets
☐ Result: Consistent spatial processing
```

### Quick Win #7: Disable Unwanted Arpeggios (5 seconds)

```
☐ Problem: Preset has rhythmic pattern, want static chords
☐ Solution:
  ☐ Click Arpeggiator icon (make it grey/disabled)
☐ Result: Static chords, no arp pattern
```

### Quick Win #8: Quick Slapback Delay (30 seconds)

```
☐ Problem: Sound too dry, needs space
☐ Solution:
  ☐ Enable Delay section
  ☐ Time: 100ms (or 1/16 sync)
  ☐ Feedback: 10%
  ☐ Mix: 20%
☐ Result: Instant vintage character
```

---

## Genre-Specific Quick Starts

### Trap / Hip Hop (5 minutes)

```
☐ Step 1: Load 808
  ☐ Packs → Essential 808s
  ☐ Select any 808 preset

☐ Step 2: Critical Bass Settings
  ☐ Macro 2 (Sub): 85-95%
  ☐ Width: 0% (MONO!)
  ☐ Master Filter: OFF
  ☐ Reverb: 0%
  ☐ Limiter: "Heating" mode

☐ Step 3: Load Melody
  ☐ New FLEX instance
  ☐ Load dark keys or bell preset
  ☐ High Pass @ 180Hz
  ☐ Reverb: 10-15%

☐ Step 4: Verify Mix
  ☐ 808 on vectorscope = vertical line
  ☐ Melody can be wider
  ☐ High pass everything except 808

☐ Done: Ready for trap beat
```

### Lo-Fi Hip Hop (5 minutes)

```
☐ Step 1: Load Lo-Fi Keys
  ☐ Essential Keyboards → Lo-Fi presets
  ☐ Or regular piano → darken with Macro 1

☐ Step 2: Add Lo-Fi Character
  ☐ Macro 1 (Tone): 35-45% (dark)
  ☐ Master Filter: Low Pass @ 6kHz
  ☐ Limiter: "Warming", Pre=35%
  ☐ Reverb: Short (Decay=20%, Mix=15%)

☐ Step 3: Detune Slightly
  ☐ Pitch: -5 to -10 cents
  ☐ Adds vintage wobble

☐ Done: Dusty, warm lo-fi vibe
```

### Techno (5 minutes)

```
☐ Step 1: Load Acid Bass
  ☐ Essential Keyboards → Bass presets
  ☐ Select something bright/resonant

☐ Step 2: Automation Setup
  ☐ Right-click Macro 1 (Filter)
  ☐ Create automation clip
  ☐ Draw 8-bar filter sweep (0% → 100%)

☐ Step 3: Effects
  ☐ Delay: Time=1/8, Feedback=40%, Mix=25%
  ☐ Reverb: Decay=30%, Mix=20%

☐ Step 4: Load Pad
  ☐ New FLEX instance
  ☐ Atmospheric pad preset
  ☐ High Pass @ 180Hz
  ☐ Reverb: 35%

☐ Done: Hypnotic techno elements
```

### Cinematic / Film Scoring (5 minutes)

```
☐ Step 1: Load Strings
  ☐ Packs → Essential Strings
  ☐ String ensemble preset

☐ Step 2: Expression Setup
  ☐ Macro 1 (Expression): Ready for automation
  ☐ Macro 2 (Vibrato): 30%
  ☐ Width: 50% (natural)

☐ Step 3: Epic Reverb
  ☐ Reverb:
    ☐ Decay: 65%
    ☐ Size: 75%
    ☐ Mix: 35%
  ☐ Limiter: "Soft Tape Saturation"

☐ Step 4: Prepare Automation
  ☐ Right-click Macro 1
  ☐ Create automation clip
  ☐ Ready for dynamic performance

☐ Done: Epic cinematic strings
```

---

## Troubleshooting Quick Fixes

### Problem: No Sound Output

```
☐ Check Master Volume (not at 0%)
☐ Check FL Studio Mixer (FLEX channel not muted)
☐ Verify preset loaded (name visible in browser)
☐ Test MIDI input (piano roll or keyboard)
☐ Check audio interface connection
```

### Problem: Sound Too Bright/Harsh

```
☐ Lower Cutoff knob (left = darker)
☐ Or: Enable Master Filter
  ☐ Type: Low Pass 12dB
  ☐ Cutoff: 8kHz
  ☐ (The "Anti-Fizz" filter)
```

### Problem: Sound Too Dark/Dull

```
☐ Raise Cutoff knob (right = brighter)
☐ Increase Macro 1 (usually Brightness)
☐ Check Master Filter not cutting highs
```

### Problem: Sound Never Stops

```
☐ Lower Release (R) to 5-15%
☐ Or: Lower Sustain (S) to 0-50%
☐ Check reverb not set to 100%
```

### Problem: Unwanted Rhythm/Pattern

```
☐ Click Arpeggiator icon to disable (grey it out)
☐ Check no automation clips active
```

### Problem: Bass Not Mono

```
☐ Click Vectorscope (diamond icon)
☐ Should show vertical line
☐ If wide ball: Lower Width/Unison macro to 0%
```

### Problem: Using Too Much CPU

```
☐ Lower Unison/Voices macro (if present)
☐ Increase buffer size (F10 → Audio Settings)
☐ Disable visualizers (right-click display)
☐ Freeze tracks to audio
```

### Problem: Clicking/Popping Sounds

```
☐ Increase Attack to 5-10ms
☐ Increase buffer size (F10 → Audio Settings → 1024)
☐ Close background applications
```

---

## Daily Workflow Checklist

### Starting a New Project

```
☐ Before Loading Presets:
  ☐ Lock Master Volume at comfortable level
  ☐ Set FL Studio tempo
  ☐ Enable metronome

☐ When Selecting Sounds:
  ☐ Use Tags filter (Dark, Bright, Soft, etc.)
  ☐ Browse with Ctrl+Up/Down (faster)
  ☐ Favorite useful presets (Shift+F)
  ☐ Reset macros before editing (Alt+Click all)

☐ While Sound Designing:
  ☐ Start with Macro 1-2 (biggest impact)
  ☐ Adjust envelope if needed (AHDSR)
  ☐ Add effects last (Delay, Reverb)
  ☐ Save variations if you'll reuse

☐ During Arrangement:
  ☐ Create automation clips early
  ☐ Layer multiple FLEX instances for depth
  ☐ Color-code tracks by type
  ☐ Label channels clearly
```

### Bass Production Checklist (Every Time)

```
☐ Load bass/808 preset
☐ Check vectorscope: MUST be vertical line
☐ Set Width/Unison to 0% (mono)
☐ Master Filter: OFF (no high pass!)
☐ Reverb: 0% (always dry)
☐ Limiter: "Warming" or "Heating" for character
☐ Envelope:
  ☐ Attack: 0-5ms
  ☐ Decay: 200-800ms
  ☐ Sustain: 0%
  ☐ Release: 100-300ms
☐ Test on different speakers/headphones
```

### Mixing Checklist

```
☐ For All NON-BASS Elements:
  ☐ Master Filter: High Pass 12dB @ 180Hz
  ☐ Check stereo width on vectorscope
  ☐ Appropriate reverb amounts

☐ For Bass Elements:
  ☐ No high pass filter
  ☐ No reverb
  ☐ Mono only

☐ Final Checks:
  ☐ No clipping (check waveform display)
  ☐ Balanced spectrum (check histogram)
  ☐ Mono compatibility (check vectorscope)
```

### Before Rendering/Exporting

```
☐ Bounce complex FLEX instances to audio (optional)
☐ Check all FLEX channels not clipping
☐ Disable visualizers for CPU efficiency
☐ Save project
☐ Render/export
```

---

## One-Page Quick Reference

### Interface Quick Map

```
┌─────────────────────────────────────────┐
│  VISUALIZERS (Waveform/Spectrum/Etc)    │ ← Analysis Display
├─────────────────────────────────────────┤
│  8 MACROS │ PITCH │ FILTER │ ENVELOPE   │ ← Main Controls
├─────────────────────────────────────────┤
│  MASTER FILTER │ DELAY │ REVERB │ LIM   │ ← Effects Chain
├─────────────────────────────────────────┤
│  PRESET BROWSER (Packs/All/Favorites)   │ ← Bottom Bar
└─────────────────────────────────────────┘
```

### Most Important Parameters

| Parameter | What It Does | Quick Setting |
|-----------|--------------|---------------|
| **Macro 1** | Tone/Brightness | 50% (balanced) |
| **Macro 2** | Character/Timbre | 50% (neutral) |
| **Cutoff** | Filter brightness | 60% (slightly open) |
| **Resonance** | Filter emphasis | 20% (subtle) |
| **Attack** | Fade-in time | 0-20ms (quick) |
| **Release** | Fade-out time | 300-500ms (natural) |
| **Reverb Mix** | Space amount | 15-25% (present) |
| **Limiter** | Output character | "Warming" mode |

### Critical Rules (Never Forget)

```
✅ ALWAYS: Bass must be mono (vectorscope = vertical line)
✅ ALWAYS: Lock Master Volume for consistent browsing
✅ ALWAYS: Reset macros (Alt+Click) before editing
✅ ALWAYS: High Pass non-bass sounds @ 180Hz

❌ NEVER: Add reverb to bass/808s
❌ NEVER: Use Master Filter (High Pass) on bass
❌ NEVER: Leave presets static (automate!)
❌ NEVER: Search for "perfect" preset (reshape instead)
```

---

## Next Steps

### After This Checklist (Choose Your Path)

**Beginner Path:**
```
☐ Read: 00-START-HERE.md
☐ Study: parameter-cheat-sheet.md
☐ Practice: Managing-packs.md workflow
☐ Goal: Comfortable loading and playing presets
```

**Intermediate Path:**
```
☐ Master: sound-design-macros.md
☐ Study: master-effects-modes.md
☐ Practice: creative-automation.md
☐ Goal: Reshaping presets into custom sounds
```

**Advanced Path:**
```
☐ Deep-dive: synthesis-engine.md
☐ Study: routing-rules.md
☐ Practice: Genre-specific workflows
☐ Goal: Professional production with FLEX
```

---

## Emergency Quick Fixes

### "I broke something!" Checklist

```
☐ Alt+Click ALL macros (reset to defaults)
☐ Reload preset (Ctrl+Up then Ctrl+Down)
☐ Check Master Volume not at 0%
☐ Disable Master Filter (might be cutting too much)
☐ Set Reverb to 0% (might be 100%)
☐ Disable Arpeggiator (grey it out)
☐ Still broken? Load different preset and start over
```

---

## Printable Daily Checklist

```
□ Lock Master Volume
□ Reset macros before editing
□ Check bass is mono (vectorscope)
□ High pass non-bass @ 180Hz
□ No reverb on bass (0%)
□ Create automation clips
□ Save variations
□ Label tracks clearly
□ Check for clipping
□ Verify mono compatibility
```

---

## Related Documentation

**Essential Reading:**
- [`00-START-HERE.md`](../../00-START-HERE.md) - Choose your learning path
- [`parameter-cheat-sheet.md`](./parameter-cheat-sheet.md) - All controls reference
- [`one-page-reference.md`](./one-page-reference.md) - Printable desk reference

**Workflow Guides:**
- [`sound-design-macros.md`](../../03-Workflows/by-goal/sound-design-macros.md) - Macro workflow
- [`preset-surfing-locks.md`](../../03-Workflows/by-goal/preset-surfing-locks.md) - Efficient browsing
- [`managing-packs.md`](../../03-Workflows/by-goal/managing-packs.md) - Pack management

**Instrument-Specific:**
- [`mixing-808s.md`](../../03-Workflows/by-instrument/mixing-808s.md) - Bass production
- [`realistic-pianos.md`](../../03-Workflows/by-instrument/realistic-pianos.md) - Piano workflow

**Concepts:**
- [`concepts-and-best-uses.md`](../Concepts/concepts-and-best-uses.md) - When to use FLEX
- [`master-effects-modes.md`](../Concepts/master-effects-modes.md) - Effects chain guide

---

**Version:** 1.0
**Created:** 2026-02-01
**Based on:** Official Image-Line FLEX Manual & Beginner Feedback

---

**Ready? Let's make music!** 🎵

*Print this checklist and keep it next to your workstation for quick reference.*
