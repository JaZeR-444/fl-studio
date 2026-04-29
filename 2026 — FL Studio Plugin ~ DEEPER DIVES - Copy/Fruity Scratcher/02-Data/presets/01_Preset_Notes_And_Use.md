# Fruity Scratcher - Preset Notes And Use

## How to Use Scratcher "Presets"

Since Fruity Scratcher lacks a traditional preset browser, this guide explains how to effectively use **channel states, templates, and documented parameter combinations** as "presets."

---

## Channel State Presets

### What They Are
FL Studio channel state files (`.fst`) that save:
- Scratcher parameter values (SPD, ACC, SEN)
- Insert FX chain (if any)
- Channel routing
- **Does NOT save:** Loaded sample, automation clips, MIDI links

[SRC: FL-STUDIO documentation on channel states]

### How to Save

1. Configure Scratcher with desired settings
2. Add FX to insert slots (optional)
3. Right-click channel button → **Save channel state as...**
4. Choose location:
   - `FL Studio\Data\Patches\Channel presets\Fruity Scratcher\` (for global access)
   - Your project folder (for project-specific presets)
5. Name descriptively: `Scratcher - [Vibe] - [Use Case].fst`

**Example names:**
- `Scratcher - Moody - Dark Tape Stop.fst`
- `Scratcher - Upbeat - Rapid Cuts.fst`
- `Scratcher - Psychedelic - FX Chain.fst`

### How to Load

1. Add Scratcher to a channel
2. Right-click channel button → **Browse channel presets**
3. Navigate to saved `.fst` file
4. **Important:** Load your sample manually after loading preset

### When to Use

- ✅ Quick setup for recurring workflows (e.g., "boom-bap vocal scratch")
- ✅ Consistent FX chains (e.g., psychedelic = Scratcher + Reverb + Delay + Phaser)
- ✅ Genre-specific starting points
- ❌ NOT for saving complete scratch performances (use project saves instead)

---

## Template Projects

### What They Are
Pre-configured FL Studio projects (`.flp`) with multiple Scratcher instances set up for specific workflows.

### Recommended Templates

#### 1. Live Scratch Performance Template
**Contents:**
- 4 Scratcher channels (Vocal, Drum, FX, Bass)
- Each set to ACC = 85%, SEN = 65% (responsive)
- MIDI mapping slots ready (platter → CC1 or jog wheel)
- Output routed to Fruity Limiter (master insert)
- Mixer tracks color-coded

**When to use:** Live DJ sets in FL Studio, scratch practice sessions

**Setup time saved:** ~15 minutes per session

#### 2. Vibe Production Template
**Contents:**
- 5 Scratcher instances (Moody, Upbeat, Psychedelic, Jazzy, Vibey)
- Each with vibe-specific FX chains pre-inserted
- Send routing configured (parallel reverb/delay)
- Automation clips pre-created (empty, ready to draw)
- Mixer groups organized

**When to use:** Vibe-focused production sessions

**Setup time saved:** ~20 minutes per project

#### 3. Tape Stop Toolkit Template
**Contents:**
- 3 Scratcher instances:
  - "Gradual Stop" (ACC = 30%, automation clip ready)
  - "Quick Stop" (ACC = 90%, automation clip ready)
  - "Reverse Start" (ACC = 50%, automation clip ready)
- Insert routing slots open (drag source to Scratcher channel)
- Output limiter

**When to use:** Transition effects, breakdown creation

**Setup time saved:** ~10 minutes per project

#### 4. Sample Flip Station Template
**Contents:**
- 2 Scratcher instances for parallel processing
- Edison on output (record scratch performances)
- FX chain: Scratcher → Reverb 2 → Delay 3 → Parametric EQ 2 → Limiter
- Automation clips for creative parameter movement

**When to use:** Creative sample flipping, loop manipulation

**Setup time saved:** ~15 minutes per flip session

### How to Create Templates

1. Build a project with desired Scratcher setups
2. **Remove all samples** from Scratcher instances (leave parameters set)
3. Delete any specific audio clips or completed automation
4. Save as: File → **Save as template**
5. Name descriptively: `Scratcher - [Workflow Type]`
6. Access later via: File → **Templates** → [Your Template]

### Template Best Practices

- ✅ Use placeholder/dummy samples for layout (delete before saving as template)
- ✅ Leave automation clips empty but linked to parameters
- ✅ Include routing but no specific audio content
- ✅ Add text comments in piano roll explaining setup
- ❌ Don't save templates with specific samples (licensing/file size)
- ❌ Don't save templates with automation (templates should be blank slates)

---

## Documented Parameter Presets

### What They Are
Written documentation of parameter combinations (like this guide). Not actual saved files, but **reference settings to dial in manually**.

### How to Use

1. Open this guide or related quick-reference files
2. Find desired vibe/technique
3. Manually set Scratcher parameters to match
4. Load appropriate sample type
5. Optionally save as channel state for future use

### Key Reference Files

| File | Use Case |
|------|----------|
| `01-Learning/Quick-Reference/02_Best_Settings_Starting_Points.md` | General starting points |
| `01-Learning/Quick-Reference/03_Vibe_Starting_Points_Moody.md` | Moody vibe presets |
| `01-Learning/Quick-Reference/04_Vibe_Starting_Points_Upbeat_Psychedelic_Jazzy_Vibey.md` | Other vibes |
| `02-Data/presets/02_Vibe_Preset_Shortlist.md` | Quick vibe preset table |

### When to Use

- ✅ Learning phase (understanding what each parameter does)
- ✅ Experimentation (tweaking from a known starting point)
- ✅ Sharing settings with others (text is universal)
- ❌ NOT for speed (channel states are faster once created)

---

## Vibe Preset Shortlist (Quick Reference)

### Moody Presets

**Dark Tape Stop**
- SPD: 1x → 0x (6-8 beats)
- ACC: 25%
- Sample: Full beat, 808, or pad
- FX: Reverb 2 (50% mix, 4-sec decay)

**Haunting Reverse Vocal**
- SPD: -0.7x
- ACC: 45%
- Sample: Vocal phrase (3-5 sec)
- FX: Reverb 2 (60% mix)

**Pitch-Down Scratch**
- SPD: 0.6x to 0.8x
- ACC: 65%
- SEN: 55%
- Sample: Vocal stab (1-2 sec)

---

### Upbeat Presets

**Rapid Vocal Cuts**
- SPD: 1.1x
- ACC: 90%
- SEN: 70%
- Sample: Bright vocal (0.5-1.5 sec)

**Quick Tape Stop**
- SPD: 1x → 0x (1 beat)
- ACC: 90%
- Sample: Drum loop or full beat

**Syncopated Scratch**
- SPD: 1x
- ACC: 85%
- SEN: 75%
- Sample: Drum hit or vocal (< 1 sec)

---

### Psychedelic Presets

**Warped Pitch Bend**
- SPD: 0.5x ↔ 1.5x (curved automation)
- ACC: 50%
- Sample: Vocal or synth (2-5 sec)
- **Critical FX:** Reverb 2 (50%) + Delay 3 (30%) + Phaser

**Glitch Reverse**
- SPD: Rapid -1x / -0.5x / 0x jumps
- ACC: 80%
- Sample: Drum loop or vocal

---

### Jazzy Presets

**Lazy Tape Stop**
- SPD: 1x → 0.7x (4 beats, doesn't reach 0x)
- ACC: 30%
- Sample: Jazz loop or full beat

**Swung Vocal Scratch**
- SPD: 0.95x to 1.05x
- ACC: 60%
- SEN: 55%
- Sample: Warm vocal (1-2 sec)
- Technique: Swung timing (not straight 16ths)

**Texture Warble**
- SPD: 0.92x ↔ 1.08x (slow sine automation)
- ACC: 35%
- Sample: Jazz loop or piano (4-8 bars)
- FX: Effector (vinyl mode)

---

### Vibey Presets

**Sustained Reverse Texture**
- SPD: -0.7x
- ACC: 45%
- Sample: Pad or vocal hum (5-10 sec)
- FX: Reverb 2 (60% mix, long decay)

**Slow Pitch Drift**
- SPD: 0.95x → 1.05x (8-bar automation)
- ACC: 40%
- Sample: Pad or synth (4-8 sec)

**Minimal Vocal Flutter**
- SPD: 1x with occasional 0.9x dips (1/8-note)
- ACC: 55%
- Sample: Vocal phrase (2-4 sec)

---

## FX Chain Presets

### Psychedelic FX Chain
**Purpose:** Transform Scratcher into psychedelic texture machine.

**Chain:**
1. **Scratcher** (SPD varies, ACC = 50%)
2. **Fruity Reverb 2** (50% mix, 3-5 sec decay, low damping)
3. **Fruity Delay 3** (ping-pong mode, 30% mix, 1/4 note)
4. **Fruity Phaser** (rate = slow, depth = 70%)
5. **Fruity Parametric EQ 2** (slight high cut at 10 kHz)
6. **Fruity Limiter** (-3 dB ceiling)

**Save as:** Channel state "Scratcher - Psychedelic FX Chain"

---

### Lo-Fi FX Chain
**Purpose:** Jazzy/vibey dusty texture.

**Chain:**
1. **Scratcher** (SPD wobble 0.9x-1.1x, ACC = 35%)
2. **Fruity Parametric EQ 2** (low-pass at 6 kHz, boost 300 Hz)
3. **Effector** (Vinyl mode, 30% mix)
4. **Fruity Reeverb** (small room, 25% mix)
5. **Fruity Soft Clipper** (gentle saturation)

**Save as:** Channel state "Scratcher - Lo-Fi Jazzy"

---

### Moody FX Chain
**Purpose:** Dark, spacious atmosphere.

**Chain:**
1. **Scratcher** (SPD slow/reverse, ACC = 30%)
2. **Fruity Parametric EQ 2** (low-pass at 5 kHz, boost 200-400 Hz, cut 8 kHz+)
3. **Fruity Reverb 2** (60% mix, 4-6 sec decay, high damping)
4. **Fruity Delay 3** (1/8 note, 20% mix, low-pass filter in delay)
5. **Fruity Limiter** (-6 dB ceiling for headroom)

**Save as:** Channel state "Scratcher - Moody Dark"

---

### Upbeat FX Chain
**Purpose:** Bright, energetic scratches.

**Chain:**
1. **Scratcher** (SPD 1x-1.3x, ACC = 90%)
2. **Fruity Parametric EQ 2** (boost 3-5 kHz for presence)
3. **Fruity Stereo Enhancer** (widen scratches, 30-40%)
4. **Fruity Limiter** (0 dB ceiling, prevent clipping)

**Save as:** Channel state "Scratcher - Upbeat Bright"

---

## Preset Usage Workflows

### Workflow 1: Quick Vibe Deploy
1. Load vibe-specific channel state (e.g., "Scratcher - Moody Dark")
2. Load appropriate sample (e.g., dark pad or vocal)
3. Perform/automate scratching
4. Done in < 1 minute

### Workflow 2: Template-Based Production
1. Open vibe production template
2. Load samples into each Scratcher instance (5 vibes)
3. Draw automation clips for each vibe's scratch patterns
4. Mix and render
5. Saves 20+ minutes of setup time

### Workflow 3: Manual Reference Setup
1. Open documented parameter preset (this guide)
2. Manually dial in SPD, ACC, SEN
3. Add FX chain as described
4. Tweak to taste
5. Save as channel state for future use

---

## Preset Maintenance

### Organizing Your Preset Library

**Folder structure:**
```
FL Studio\Data\Patches\Channel presets\Fruity Scratcher\
├── Vibes\
│   ├── Moody\
│   ├── Upbeat\
│   ├── Psychedelic\
│   ├── Jazzy\
│   └── Vibey\
├── Techniques\
│   ├── Tape Stops\
│   ├── Scratches\
│   └── Pitch FX\
└── FX Chains\
    ├── Psychedelic\
    ├── Lo-Fi\
    └── Clean\
```

### Preset Naming Best Practices

**Format:** `Scratcher - [Category] - [Descriptor] - [Version].fst`

**Examples:**
- `Scratcher - Moody - Dark Tape Stop - v1.fst`
- `Scratcher - Upbeat - Rapid Cuts - Clean.fst`
- `Scratcher - Psychedelic - FX Chain - Heavy.fst`

**Version tags:**
- `v1`, `v2`, `v3` for iterative improvements
- `Clean` for no FX chains
- `FX` for with FX chains
- `Minimal` for basic setups

### Regular Preset Audits

**Monthly review:**
1. Test each channel state preset (still works?)
2. Delete unused presets (free up space)
3. Update documentation with new favorites
4. Back up preset folder

---

## Troubleshooting Presets

**Preset loads but sounds wrong:**
- **Cause:** Sample wasn't saved with preset
- **Fix:** Load appropriate sample type

**Preset loads with wrong FX:**
- **Cause:** FX plugins missing or renamed
- **Fix:** Re-add FX or use FL Studio's plugin database repair

**Template doesn't work:**
- **Cause:** Saved with specific samples or automation
- **Fix:** Re-create template without samples/automation

**Channel state breaks between FL Studio versions:**
- **Cause:** FL Studio internal format change
- **Fix:** Rare; re-save channel state in new version

---

## Next Steps

1. Build your first 3-5 channel state presets for common workflows
2. Create 1-2 template projects for recurring production tasks
3. Document your favorite parameter combinations
4. Share presets with collaborators (`.fst` files + documentation)

**Related files:**
- `00_Preset_Taxonomy.md` — Full preset system overview
- `02_Vibe_Preset_Shortlist.md` — Quick vibe preset reference
- `01-Learning/Quick-Reference/02_Best_Settings_Starting_Points.md` — Parameter starting points

---

**Version:** 1.0  
**Last Updated:** 2026-02-03  
**Sources:** [IL-MAN], [FL-STUDIO], [REPUTABLE]
