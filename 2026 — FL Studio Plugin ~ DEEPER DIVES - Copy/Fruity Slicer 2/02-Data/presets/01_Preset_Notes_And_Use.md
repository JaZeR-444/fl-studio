# Fruity Slicer 2 - Preset Notes And Use

## How to Use Presets in Fruity Slicer 2

Fruity Slicer 2 uses **FL Studio's Channel Preset system**, not a built-in preset browser. This guide explains how to save, load, and organize your slice configurations.

[SRC: FL Studio Channel Preset system documentation]

---

## Saving a Preset

### Method 1: Via Channel Settings Menu
1. Configure Slicer 2 (slices, chromatic mode, envelopes, pitch, etc.)
2. Click the **plugin header** (top-left corner with plugin name)
3. Select **"Save preset as..."**
4. Name your preset (use taxonomy naming convention)
5. Choose save location (organize by vibe, source, or function)
6. Click **Save**

**Result**: `.fsc` file saved [UNVERIFIED - confirm extension] containing all plugin settings

### Method 2: Via Channel Rack (Right-Click)
1. Right-click the **Slicer 2 channel** in Channel Rack
2. Select **"Save channel state as..."**
3. Follow naming/saving steps above

**Note**: This saves the entire channel state, including routing, volume, pan—not just Slicer 2 settings.

---

## Loading a Preset

### Method 1: Via Plugin Header
1. Click plugin header → **"Load preset..."**
2. Navigate to saved preset location
3. Select `.fsc` file
4. Click **Open**

**Result**: All Slicer 2 settings restored (slices, envelopes, pitch, chromatic mode)

**Important**: The source sample is NOT included in the preset. You must load the same sample or a similar one.

### Method 2: Drag-and-Drop (if supported) [UNVERIFIED]
1. Drag `.fsc` preset file from file browser
2. Drop onto Slicer 2 plugin window

---

## What's Saved in a Preset

✅ **Included**:
- Chromatic mode toggle (ON/OFF)
- Global pitch setting
- Time-stretch mode (Elastique Pro, Efficient, etc.)
- Per-slice envelope settings (Attack, Release, Filter, Volume, Pan)
- Slice reverse toggles
- BPM setting
- Master volume

❌ **NOT Included**:
- The source audio sample itself
- Mixer routing (track assignment)
- Effects chain (reverb, delay added after Slicer 2)

**Workaround for Samples**: Document the source sample in the preset name or create a companion text file.

---

## Preset Use Cases

### Use Case 1: Consistent Vocal Chop Settings Across Projects
**Scenario**: You always want the same "dark vocal pad" settings for moody beats  
**Solution**:
1. Create "Dark_Vocal_Pad_Minus12.fsc" preset
2. Load any vocal sample into Slicer 2
3. Load the preset → instant dark vocal pad settings
4. Adjust pitch/filter per sample if needed

### Use Case 2: Quick Breakbeat Flipping
**Scenario**: You flip drum breaks often and want consistent slice settings  
**Solution**:
1. Create "Breakbeat_Flip_Tight.fsc" preset (0ms attack, 50ms release, auto-detect ON)
2. Load any drum loop
3. Load preset → slices auto-detected with tight settings
4. Re-order slices for custom groove

### Use Case 3: Rapid Experimentation
**Scenario**: You want to A/B test different envelope/filter settings  
**Solution**:
1. Save multiple presets: "Long_Release_800ms.fsc," "Short_Release_100ms.fsc," "Filter_Sweep.fsc"
2. Load sample once
3. Swap presets rapidly to hear differences

### Use Case 4: Genre Templates
**Scenario**: You produce multiple genres and want genre-specific slice settings  
**Solution**:
1. Create folder structure: `Presets/HipHop/`, `Presets/Trap/`, `Presets/RnB/`
2. Save genre-optimized presets in each folder
3. Load appropriate preset per project style

---

## Organizing Presets

### Recommended Folder Structure

```
FL Studio\Presets\Plugin presets\Fruity\Fruity Slicer 2\
├── Moody/
│   ├── Dark_Vocal_Pad_Minus12.fsc
│   ├── Reverse_Texture_Long_Release.fsc
│   └── Stretched_Minor_Chord.fsc
├── Upbeat/
│   ├── Bounce_Stutter_Plus5.fsc
│   ├── Rapid_Vocal_Stabs.fsc
│   └── Bright_Percussion_Chops.fsc
├── Psychedelic/
│   ├── Warp_Zone_Extreme_Stretch.fsc
│   ├── Glitch_Random_Pan.fsc
│   └── Atonal_Chaos.fsc
├── Jazzy/
│   ├── Rhodes_Swing_58.fsc
│   ├── Upright_Bass_Natural.fsc
│   └── Brass_Stabs_Dynamic.fsc
├── Vibey/
│   ├── Atmosphere_Pad_BandPass.fsc
│   ├── Texture_Loop_Washy.fsc
│   └── Vinyl_Crackle_Background.fsc
└── Breakbeats/
    ├── Amen_Flip_Tight.fsc
    ├── Funky_Drummer_Loose.fsc
    └── Breakbeat_Glitch.fsc
```

### Naming Convention (Repeated from Taxonomy)

**Format**: `[Function]_[Vibe]_[KeySetting]_[Notes].fsc`

**Examples**:
- `Chromatic_Moody_Minus12_LongRelease.fsc`
- `Rhythmic_Upbeat_Plus5_TightStutter.fsc`
- `Chromatic_Jazzy_Swing58_RhodesChords.fsc`

**Benefits**:
- Quick visual scan of preset purpose
- Search-friendly (search "Moody" to find all moody presets)
- Self-documenting (settings visible in name)

---

## Preset Workflow Tips

### Tip 1: Save Variations, Not Just One Setting
Don't just save "Vocal Pad.fsc"—save:
- `Vocal_Pad_Short_Release_200ms.fsc`
- `Vocal_Pad_Long_Release_800ms.fsc`
- `Vocal_Pad_Filter_Sweep.fsc`

**Why**: Quickly A/B test subtle variations without manually adjusting every time.

### Tip 2: Document Sample Requirements
Create a companion `.txt` file for each preset:
```
Dark_Vocal_Pad_Minus12.fsc.txt

Recommended Sample Type: Sustained vocal phrase with clear vowel (e.g., "ahhh," "ohhh")
Sample Length: 1-3 seconds
Best Results: Alto or baritone vocals (lower register)
Avoid: Short syllables, consonant-heavy samples

Example Samples:
- Acapella pack: "VocalRun_Ahhh_C3.wav"
- Sample library: Splice "R&B Vocal Chops" pack
```

### Tip 3: Create "Base" and "FX" Presets
**Base Preset**: Clean slice settings, no extreme FX  
**FX Preset**: Extreme settings for creative use

**Example**:
- `Vocal_Base_Chromatic.fsc` → clean vocal chop for melodic use
- `Vocal_Warp_Psychedelic.fsc` → same source, extreme stretch + filter for FX

### Tip 4: Version Your Presets
As you refine settings, save versions:
- `Bounce_Stutter_v1.fsc`
- `Bounce_Stutter_v2_BrighterFilter.fsc`
- `Bounce_Stutter_v3_TighterRelease.fsc`

**Why**: You can always revert if a "better" version doesn't work in context.

### Tip 5: Share Presets with Collaborators
**What to Include**:
1. The `.fsc` preset file
2. A companion `.txt` file with settings explanation
3. Example MIDI file showing how to trigger the preset
4. (Optional) The source sample (if legally shareable)

**Format for Sharing**:
```
Bounce_Stutter_Pack/
├── Bounce_Stutter_Plus5.fsc
├── README.txt (settings explanation)
├── Example_Pattern.mid
└── (optional) Example_Sample_VocalYeah.wav
```

---

## Common Preset Pitfalls

### Pitfall 1: Forgetting the Source Sample
**Problem**: You save a preset but forget which sample you used. Preset loads but sounds wrong with a different sample.  
**Fix**: Document sample type in preset name or companion file.

### Pitfall 2: Overwriting Presets by Accident
**Problem**: You load a preset, tweak it, then save over the original.  
**Fix**: Use "Save preset as..." and add "_v2" or "_Custom" to create a new version.

### Pitfall 3: Not Testing in Mix Context
**Problem**: Preset sounds great solo, terrible in full mix.  
**Fix**: Before saving, test preset with drums, bass, and other elements playing.

### Pitfall 4: Too Many Generic Presets
**Problem**: You save "Vocal Chop 1," "Vocal Chop 2," "Vocal Chop 3"—which is which?  
**Fix**: Use descriptive names with key settings included.

---

## Preset Maintenance

### Monthly Preset Audit
1. **Review unused presets**: Delete or archive presets you never use
2. **Consolidate duplicates**: Merge similar presets
3. **Update documentation**: Add notes to presets you use frequently
4. **Test old presets**: Confirm they still work with current FL Studio version

### Backup Strategy
- **Weekly**: Backup FL Studio presets folder to external drive or cloud
- **Before major FL Studio update**: Full backup of all presets
- **After creating new presets**: Immediate backup if preset took >30 minutes to create

---

## Advanced Preset Techniques

### Technique 1: Layered Preset Chains
1. Save a "Base" Slicer 2 preset
2. Duplicate channel → load "FX" Slicer 2 preset on same sample
3. Blend dry/FX via mixer levels

**Use Case**: Clean vocal chop (Base) + warped/glitchy version (FX) for depth

### Technique 2: Preset + MIDI Clip Bundles
1. Save Slicer 2 preset
2. Save MIDI clip showing how to trigger it (e.g., chord progression, stutter pattern)
3. Store both in same folder

**Use Case**: "Rhodes_Jazz_Cmaj7_Progression.fsc" + "Rhodes_Jazz_MIDIPattern.mid"

### Technique 3: Macro-Controlled Presets [UNVERIFIED]
If Slicer 2 supports macro assignment:
1. Assign Attack, Release, Filter Cutoff to macros
2. Save preset with macro mappings
3. Use single macro to morph between settings

**Example**: Macro 1 = "Pad Mode" (long attack/release) vs "Stab Mode" (short attack/release)

---

## Verification Checklist

**How to verify preset system in FL Studio:**
1. ✅ Save a test preset → close FL Studio → reopen → load preset → confirm settings match
2. ⚠️ Check if presets are project-specific or global
3. ⚠️ Test if loading a preset changes mixer routing (should NOT)
4. ✅ Rename a preset file → confirm new name appears in load menu
5. ⚠️ Test drag-and-drop preset loading (if supported)

---

**Last Updated**: 2026-02-03  
**Source**: FL Studio preset system, user workflow  
**Unverified**: Preset file extension, macro assignment support, drag-and-drop loading
