# Extracting Audio from Video - Complete Guide

## Overview

Fruity Video Player allows you to extract high-quality audio from video files for sampling, reference, or creative purposes. This is essential for hip-hop producers working with video content, dialogue sampling, and creative audio extraction.

## Why Extract Audio from Video?

### Hip-Hop Applications
- **Dialogue Sampling:** Extract movie dialogue for creative samples
- **Ambient Textures:** Capture ambient sounds from video content
- **Reference Audio:** Use video audio as production reference
- **Vintage Sounds:** Sample old film and TV audio
- **Creative Sampling:** Find unique sounds in unexpected video sources

### Professional Applications
- **ADR Reference:** Extract dialogue for replacement work
- **Foley Reference:** Capture original sounds for matching
- **Music Reference:** Extract music from video for analysis
- **Audio Analysis:** Study original audio for mixing decisions

## Essential Setup

### 1. Prepare Video File
**Before Loading:**
- Verify video has audio track
- Check audio codec compatibility (AAC, MP3, PCM supported)
- Note sample rate of video audio (usually 48kHz)
- Ensure video quality is good enough for your needs

### 2. Configure Fruity Video Player
**Optimal Settings for Extraction:**
- Slave Mode: ON (for timeline control)
- Time Display: Time mode (easier for audio work)
- Pre-roll: 0 frames (start exactly at beginning)
- Volume: 100% (maximum quality)
- Audio Output: Dedicated mixer track

### 3. Set Up FL Studio Project
**Project Configuration:**
- Sample Rate: Match video audio (usually 48kHz)
- Buffer Size: 512 or higher for stability
- Create dedicated audio extraction track
- Insert Edison on extraction track

## Basic Extraction Workflow

### Method 1: Direct Recording to Edison (Recommended)

**Step-by-Step:**
1. Load video in Fruity Video Player
2. Set Audio Output to empty mixer track
3. Insert Edison on that mixer track
4. Set video player Volume to 100%
5. Enable record in Edison
6. Play timeline to record section
7. Stop and save from Edison

**Edison Recording Setup:**
- Source: Mixer track (not Input)
- Mode: "On input" or "Auto"
- Quality: Maximum (24-bit recommended)
- Format: WAV for uncompressed

**Example Timeline:**
```
00:00 - Load video file
00:15 - Set up routing to Edison track
00:30 - Mark region to extract (e.g., 01:23 - 02:45)
00:45 - Enable Edison recording
01:00 - Play marked region
02:00 - Stop, save audio from Edison
```

### Method 2: Full Video Audio Extraction

**For Entire Audio Track:**
1. Load video in Fruity Video Player
2. Route audio to mixer track with Edison
3. Set volume to 100%
4. Set timeline length to match video duration
5. Record entire playback to Edison
6. Export from Edison as WAV

**Pro Tips:**
- Use WAV format for lossless quality
- Save at video's native sample rate (usually 48kHz)
- Keep 24-bit depth for maximum quality
- Name files clearly (e.g., "VideoName_FullAudio_48kHz.wav")

### Method 3: Selective Region Extraction

**For Specific Sections:**
1. Watch video and identify sections to extract
2. Mark regions with timeline markers
3. Set loop points around region
4. Record looped section to Edison
5. Save individual sections separately

**Workflow Example:**
```
Region 1: Dialogue (00:32 - 00:47)
Region 2: Ambient (01:15 - 01:45)
Region 3: Music (02:30 - 03:00)
```

## Hip-Hop Sampling Applications

### Dialogue Sampling

**Finding Good Dialogue:**
- Classic movies with iconic lines
- Documentaries with interesting narration
- Old TV shows with unique character voices
- News broadcasts for authentic atmosphere
- Interviews for conversational texture

**Extraction Technique:**
1. Load movie/TV show video file
2. Scan through for interesting dialogue
3. Mark each good line with timeline marker
4. Extract each dialogue snippet separately
5. Clean up audio in Edison (trim, normalize)

**Example Dialogue Sources:**
- Scarface, Godfather, Pulp Fiction (classic movie quotes)
- Nature documentaries (ambient narration)
- Old news broadcasts (vintage atmosphere)
- Stand-up comedy (unique vocal textures)
- Anime/cartoons (creative character voices)

**Processing After Extraction:**
- Trim silence before and after dialogue
- Normalize to -6dB to -3dB
- Remove background noise if needed
- Pitch shift for creative effect
- Add lo-fi effect for vintage vibe

### Ambient Sound Extraction

**Types of Ambient Sounds:**
- City atmospheres (traffic, crowds, urban ambience)
- Nature sounds (rain, wind, birds, water)
- Indoor ambience (room tone, echo, reverb)
- Mechanical sounds (engines, machines, tech)
- Atmospheric textures (sci-fi, horror, abstract)

**Extraction Workflow:**
1. Find video with good ambient sound
2. Identify clean sections without dialogue/music
3. Extract 30-60 second ambient loops
4. Process for seamless looping if needed
5. Use as atmosphere layers in productions

**Example Sources:**
- Nature documentaries (pristine nature sounds)
- City footage (urban atmospheres)
- Sci-fi movies (futuristic ambiences)
- Horror films (dark atmospheres)
- Industrial videos (mechanical textures)

### Music Sampling (Creative Use)

**Legal Note:** Only sample music you have rights to use, or for educational/reference purposes only.

**Sampling Approach:**
1. Load music video or performance video
2. Find interesting musical sections
3. Extract loops, chord progressions, or hits
4. Chop and rearrange in Edison
5. Process heavily to create new sounds

**What to Sample:**
- Unique chord progressions
- Interesting drum patterns
- Melodic phrases or riffs
- Vocal phrases or ad-libs
- Transition effects

### Vintage Texture Extraction

**Finding Vintage Sources:**
- Old film footage (1940s-1980s)
- VHS tape recordings
- Old TV commercials
- Vintage documentaries
- Public domain films

**Characteristics to Extract:**
- Film grain audio texture
- Vintage compression artifacts
- Analog warmth and saturation
- Tape hiss and noise
- Unique frequency characteristics

**Processing Vintage Samples:**
1. Extract audio from old video source
2. Embrace the lo-fi quality
3. Add additional lo-fi processing if desired
4. Use for authentic vintage hip-hop vibe
5. Layer with modern production

## Advanced Extraction Techniques

### Multi-Track Extraction

**For Videos with Different Audio Elements:**
1. Create multiple instances of Fruity Video Player
2. Load same video in each instance
3. Route each to different mixer tracks
4. Extract different frequency ranges or elements
5. Reconstruct audio with separation

**Example Use Case:**
- Instance 1: Extract full audio
- Instance 2: Apply low-pass filter, extract bass
- Instance 3: Apply high-pass filter, extract highs
- Create pseudo-stems for more control

### Automated Batch Extraction

**For Multiple Videos:**
1. Create template project with extraction setup
2. Load first video, extract, save
3. Replace with second video, repeat
4. Continue for all videos in batch
5. Organize extracted files by source

**Naming Convention:**
```
SourceVideo_AudioType_SampleRate.wav

Examples:
Scarface_Dialogue01_48kHz.wav
Documentary_Ambient_48kHz.wav
OldMovie_Texture_48kHz.wav
```

### Quality Preservation

**Maintaining Maximum Quality:**
1. Match FL Studio sample rate to video audio
2. Set Edison to 24-bit recording
3. Use WAV format (never MP3 for extraction)
4. Keep volume at 100% during extraction
5. Avoid unnecessary processing before saving

**Quality Checklist:**
- [ ] Video audio sample rate verified
- [ ] FL Studio project sample rate matched
- [ ] Edison set to 24-bit WAV recording
- [ ] Volume at 100% for extraction
- [ ] No unnecessary effects on extraction track
- [ ] Clean file naming for organization

## Genre-Specific Sampling

### Boom Bap Hip-Hop

**Ideal Sources:**
- 1970s soul and funk videos
- Jazz performance recordings
- Vintage TV show themes
- Old movie soundtracks
- Classic R&B performances

**Extraction Focus:**
- Drum breaks from live performances
- Warm bass lines
- Smooth chord progressions
- Vocal phrases and ad-libs
- Vinyl crackle and texture

**Processing Approach:**
- Keep warm, organic quality
- Add subtle vinyl crackle
- Use minimal processing
- Preserve dynamic range
- Embrace imperfections

### Lo-Fi Hip-Hop

**Ideal Sources:**
- Anime soundtracks and scenes
- Old jazz recordings on video
- Nature documentaries
- Vintage instructional videos
- Public domain film archives

**Extraction Focus:**
- Jazzy chord progressions
- Ambient nature sounds
- Nostalgic dialogue snippets
- Tape hiss and noise
- Mellotron and vintage synths

**Processing Approach:**
- Add tape saturation
- Include vinyl crackle
- Reduce high frequencies
- Add gentle compression
- Create nostalgic vibe

### Sample-Based Production

**Ideal Sources:**
- Rare music performances
- Obscure documentaries
- Foreign films
- Vintage commercials
- Educational films

**Extraction Focus:**
- Unique musical phrases
- Unusual instrument timbres
- Interesting vocal deliveries
- Rare sound effects
- Unexpected textures

**Processing Approach:**
- Chop creatively
- Pitch shift for originality
- Layer multiple sources
- Create new arrangements
- Heavy manipulation

### Trap/Modern Hip-Hop

**Ideal Sources:**
- Action movie sound effects
- Sci-fi movie audio
- Video game footage
- Modern music videos
- Urban environment videos

**Extraction Focus:**
- Impact sounds (explosions, hits)
- Atmospheric pads
- Vocal ad-libs from videos
- Modern sound design
- Urban ambience

**Processing Approach:**
- Heavy processing encouraged
- Add effects and distortion
- Layer with modern production
- Use as creative elements
- Experimental manipulation

## Edison Post-Processing

### Editing Extracted Audio

**Essential Edison Tools:**
- **Trim:** Remove silence and unwanted sections
- **Normalize:** Maximize volume without clipping
- **Fade In/Out:** Smooth starts and endings
- **EQ:** Remove unwanted frequencies
- **Noise Reduction:** Clean up background noise

**Basic Cleanup Workflow:**
1. Open extracted audio in Edison
2. Zoom in and trim exact start/end points
3. Apply fade in (10-50ms) and fade out (50-200ms)
4. Normalize to -6dB to -3dB
5. Apply gentle EQ if needed
6. Save as new processed file

### Creating Seamless Loops

**For Ambient Extractions:**
1. Extract longer section than needed
2. Find natural loop points
3. Use Edison crossfade loop feature
4. Test loop for seamless playback
5. Trim to exact loop length

**Loop Length Guidelines:**
- Ambient: 4-8 bars (trap/hip-hop)
- Musical: Match musical phrase length
- Texture: 1-2 bars for subtle layers

### Sample Chopping

**In Edison:**
1. Load extracted audio
2. Identify chop points (transients, beats, phrases)
3. Use slice markers for divisions
4. Send slices to sampler channel
5. Arrange and play as new pattern

**Chopping Techniques:**
- Rhythmic chopping (on beat divisions)
- Melodic chopping (by pitch/phrase)
- Random chopping (experimental)
- Transient chopping (on hits/attacks)

## File Organization

### Folder Structure

**Recommended Organization:**
```
Extracted Audio/
├── Dialogue/
│   ├── Movies/
│   ├── TV Shows/
│   ├── Documentaries/
│   └── Interviews/
├── Ambient/
│   ├── Nature/
│   ├── Urban/
│   ├── Indoor/
│   └── Atmospheric/
├── Music/
│   ├── Vintage/
│   ├── Modern/
│   ├── World/
│   └── Instrumental/
└── Textures/
    ├── Lo-Fi/
    ├── Vintage/
    ├── Digital/
    └── Experimental/
```

### Metadata and Tagging

**Essential Information:**
- Source video name
- Extraction date
- Sample rate and bit depth
- Original timecode location
- Processing applied
- Usage notes

**File Naming Example:**
```
SourceName_Type_Description_SampleRate_Date.wav

Scarface_Dialogue_SayHelloToMyLittleFriend_48kHz_20260204.wav
NatureDoc_Ambient_RainForest_48kHz_20260204.wav
OldJazz_Music_PianoChords_48kHz_20260204.wav
```

## Legal and Ethical Considerations

### Copyright Awareness
- Only extract from content you have rights to use
- Public domain films are safe sources
- Use royalty-free video content when possible
- Educational and reference use may have different rules
- Check local copyright laws

### Ethical Sampling
- Credit original sources when possible
- Transform samples significantly for originality
- Don't just lift entire musical sections unchanged
- Consider fair use principles
- When in doubt, seek legal advice

### Safe Sources
- Public domain films (pre-1928 in US)
- Creative Commons licensed videos
- Your own video content
- Licensed sample libraries
- Royalty-free video websites

## Troubleshooting

### No Audio Extracted
**Problem:** Edison records silence
**Solutions:**
- Verify Audio Output is set to Edison track
- Check Volume is not at 0%
- Verify video actually has audio track
- Check Edison is set to correct input source

### Audio Quality is Poor
**Problem:** Extracted audio sounds degraded
**Solutions:**
- Increase Volume to 100%
- Match sample rates (FL Studio and video)
- Use WAV format instead of MP3
- Check video source quality
- Avoid multiple resampling

### Audio is Out of Sync
**Problem:** Extracted audio doesn't match video
**Solutions:**
- Ensure Slave Mode is enabled
- Check for plugin latency issues
- Record longer than needed, trim in Edison
- Use longer buffer size for stability

### File Size Too Large
**Problem:** Extracted WAV files are huge
**Solutions:**
- Extract only needed sections, not full video
- Consider 16-bit instead of 24-bit for final use
- Compress to MP3 or OGG after extraction
- Use appropriate sample rate (48kHz vs 96kHz)

## Pro Tips

### Workflow Efficiency
- Create extraction template project
- Use consistent folder structure
- Name files immediately and clearly
- Keep source video reference notes
- Back up extracted samples regularly

### Creative Techniques
- Reverse extracted audio for unique textures
- Pitch shift dialogue for creative effects
- Layer multiple ambient extractions
- Chop music samples into new rhythms
- Combine dialogue with musical elements

### Quality Control
- Always preview extracted audio before deleting video
- Keep original unprocessed versions
- Document processing for future reference
- Test samples in actual production context
- Verify no digital clipping occurred

### Time-Saving Shortcuts
- Mark multiple regions before batch extracting
- Use Edison's region saving feature
- Create keyboard macros for repeated tasks
- Use project templates for extraction
- Organize as you go, not later
