# FL Studio Template Creation Guide

This guide explains how to create professional FL Studio templates for the Master Hub download system.

## Quick Start

1. **Create** your template in FL Studio
2. **Save** it with the correct filename in `/public/templates/`
3. **Test** the download on the website
4. **Commit** to the repository

---

## Template Creation Workflow

### Step 1: Plan Your Template

Before opening FL Studio, reference the template specification from the Templates section:

- **Genre**: EDM, Trap, Hip-Hop, Lo-Fi, Pop, Rock, R&B
- **BPM**: Set according to genre standards
- **Key**: Choose an appropriate key signature
- **Layers**: Plan instrument categories (drums, bass, melody, etc.)

### Step 2: Set Up FL Studio Project

#### Project Settings
```
File → New → From Template → Empty
```

1. Set BPM (F → Project General Settings)
2. Set Time Signature
3. Set Key (Tools → Macros → Set Root Note)

#### Color Scheme
Use consistent color coding:
- 🔴 **Drums**: Red shades
- 🔵 **Bass**: Blue shades
- 🟢 **Melody**: Green shades
- 🟡 **Vocals/FX**: Yellow/Orange
- 🟣 **Pads/Atmosphere**: Purple shades

### Step 3: Create Channel Rack Layout

For each template layer, add the appropriate plugins:

#### Example: EDM Progressive House Template

**Drums** (Red):
- Kick: Use native Kick 2 or sampled kick
- Clap/Snare: Layer samples
- Hi-Hats: Closed + Open samples
- Percussion: Shakers, tambourine

**Bass** (Blue):
- Sub Bass: 3xOSC (sine wave)
- Mid Bass: Sytrus (FM synthesis)

**Melody** (Green):
- Lead: FLEX or Sytrus
- Pluck: 3xOSC
- Arp: Any native synth

**Pads** (Purple):
- Pad: Harmless or Sytrus
- Strings: FLEX

**FX** (Yellow):
- Risers: Use Harmor + automation
- Impacts: Layered samples

### Step 4: Mixer Setup

#### Routing Structure
```
Master Track
├── Drums Bus (Track 10)
│   ├── Kick (Track 1)
│   ├── Snare (Track 2)
│   ├── Hi-Hats (Track 3)
│   └── Percussion (Track 4)
├── Bass Bus (Track 11)
│   ├── Sub (Track 5)
│   └── Mid Bass (Track 6)
├── Melody Bus (Track 12)
│   └── Leads/Plucks (Tracks 7-9)
└── FX Bus (Track 13)
```

#### Insert Effects (Minimal)
- **Drums Bus**: Light compression (Fruity Limiter)
- **Bass Bus**: EQ (Parametric EQ 2) - High-pass at 30Hz
- **Master**: None (let producers add their own)

**Important**: Keep effects minimal - templates should be starting points, not finished mixes.

### Step 5: Create Starter Patterns

Add 1-2 basic patterns to demonstrate the template:

#### Pattern 1: Basic Beat
- 4-bar drum loop
- Simple bass line
- Minimal melody

#### Pattern 2: Full Arrangement (Optional)
- All instruments playing
- Shows how layers work together

### Step 6: Playlist Arrangement Markers

Add arrangement markers for common song structure:

```
0:00 - Intro
0:16 - Verse
0:32 - Build-Up
0:48 - Drop/Chorus
1:04 - Breakdown
1:20 - Drop/Chorus
1:36 - Outro
```

Right-click playlist → Add Marker → Name according to above

### Step 7: Save Your Template

#### File Naming Convention
```
{genre}-{name-slug}.flp
```

Examples:
- `edm-progressive-house.flp`
- `trap-dark-trap.flp`
- `lofi-chill-beats.flp`

**Location**: Save to `/public/templates/` directory

### Step 8: Test Your Template

1. Close FL Studio
2. Open your saved template
3. Verify:
   - ✅ All routing is correct
   - ✅ Colors are applied
   - ✅ BPM and key are set
   - ✅ All plugins load correctly
   - ✅ No missing samples

### Step 9: Export Template Metadata

Create a text file with your template details for reference:

**Example**: `edm-progressive-house-info.txt`
```
Template: Progressive House
Genre: EDM
BPM: 128
Key: C Minor
Difficulty: Intermediate

Plugins Used:
- 3xOSC (Bass)
- FLEX (Leads)
- Harmless (Pads)
- Kick 2 (Drums)
- Fruity Limiter (Mastering)

Mixing Tips:
- Sidechain bass to kick at -4dB
- High-pass everything except kick/bass above 100Hz
- Use stereo separation on leads above 200Hz
```

---

## Template Quality Checklist

Before committing, ensure your template meets these standards:

### ✅ Technical Requirements
- [ ] All native FL Studio plugins (no third-party)
- [ ] Sample paths are relative (no absolute paths)
- [ ] File size under 5MB
- [ ] Compatible with FL Studio 20.8+
- [ ] No demo/trial plugin limitations

### ✅ Organization
- [ ] Consistent color coding
- [ ] Logical mixer routing
- [ ] Proper channel naming
- [ ] Clean playlist layout
- [ ] Arrangement markers present

### ✅ Audio Quality
- [ ] No clipping on master
- [ ] Balanced levels (peaks at -6dB max)
- [ ] Clean low-end (no muddy bass)
- [ ] Proper stereo imaging

### ✅ User Experience
- [ ] Easy to understand structure
- [ ] Beginner-friendly (if marked as beginner)
- [ ] Includes starter patterns
- [ ] Ready to extend/modify

---

## Adding Templates to the Repository

### Option A: Direct Upload (Recommended)

1. Create your template following the guide above
2. Save to `/public/templates/{filename}.flp`
3. Test the download button on the website
4. Commit to Git:

```bash
git add public/templates/your-template.flp
git commit -m "Add {genre} - {name} template"
git push
```

### Option B: Large File Hosting

If templates exceed GitHub's 100MB limit:

1. Upload to cloud storage (Google Drive, Dropbox, etc.)
2. Get a direct download link
3. Update the template manifest to include external URL
4. Modify download function to redirect to external link

---

## Troubleshooting

### Template Won't Download
- Check filename matches exactly: `{genre}-{name-slug}.flp`
- Verify file is in `/public/templates/` directory
- Clear browser cache and rebuild Next.js

### Missing Samples
- Use only FL Studio stock samples
- Avoid external sample packs
- Check Samples → Find in Database Browser

### File Too Large
- Remove unused patterns
- Bounce complex synths to audio
- Clean up unused mixer tracks
- Consider splitting into multiple templates

---

## Template Ideas

Here are suggested templates to create:

### High Priority
- [ ] EDM - Progressive House (128 BPM)
- [ ] Trap - Modern Trap (140 BPM)
- [ ] Lo-Fi - Chill Beats (85 BPM)
- [ ] Hip-Hop - Boom Bap (90 BPM)

### Medium Priority
- [ ] EDM - Future Bass (150 BPM)
- [ ] EDM - Melodic Dubstep (140 BPM)
- [ ] Trap - Dark Trap (145 BPM)
- [ ] Pop - Modern Pop (120 BPM)

### Advanced Templates
- [ ] Rock - Alternative Rock (140 BPM)
- [ ] R&B - Contemporary R&B (80 BPM)
- [ ] Ambient - Atmospheric (90 BPM)
- [ ] Drum & Bass - Liquid DnB (174 BPM)

---

## Best Practices

1. **Keep It Simple**: Templates should be starting points, not finished tracks
2. **Use Native Only**: Stick to stock FL Studio plugins
3. **Document Everything**: Add notes in the template or external docs
4. **Test Thoroughly**: Open on a fresh FL Studio installation
5. **Version Control**: Use Git to track template changes
6. **Get Feedback**: Share with producers and iterate

---

## Resources

- [FL Studio Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/)
- [FL Studio Forum - Templates](https://forum.image-line.com/viewforum.php?f=100)
- [Template Best Practices](https://www.image-line.com/fl-studio-learning/)

---

**Questions?** Open an issue on GitHub or check the FL Studio Master Hub documentation.
