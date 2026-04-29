# Fruity Send: Vibe Translation Guide

## Understanding Vibes in Routing Context

Fruity Send doesn't generate sound—it **routes** sound to processing destinations. Therefore, vibe translation focuses on **which effects you route to** and **how you blend parallel processing** to achieve each vibe. The "vibe" comes from the routing strategy and effect choices, not from Fruity Send itself. [SRC: Production context]

---

## Vibe 1: MOODY

### Production Translation
**Moody** in hip-hop/R&B context means: dark, introspective, melancholic, spacious but not bright, filtered/muffled tonality, slow-moving textures, intimate yet distant.

### Routing Levers for MOODY (via Fruity Send)

1. **Dark Reverb Sends (Low-Passed, Long Decay)**
   - **Routing:** Source → Fruity Send (Slot 1) → Dark Reverb Bus
   - **Dark Reverb Bus FX:** Fruity Reeverb 2 (Decay=3-6s, Damping=high, High Cut=4-6kHz)
   - **Send settings:** Volume=-8dB, Dry=100%
   - **What to listen for:** Reverb tail feels dark/muffled, not sparkly. Creates distance without brightness.
   - **Why it works:** Low-passed reverb removes energy, creates "underwater" / nocturnal feel.

2. **Parallel Saturation (Dark, Warm)**
   - **Routing:** Bass/Keys → Fruity Send → Warm Saturation Bus
   - **Saturation Bus FX:** Fruity Waveshaper (Soft clip curve) + Low-pass filter (5-7kHz)
   - **Send settings:** Volume=0dB, Dry=100%, blend saturation bus at -12dB
   - **What to listen for:** Warmth without aggression, rounded harmonics.
   - **Why it works:** Warm saturation + filtering = analog/tape-like darkness.

3. **Filtered Parallel Compression (Midrange Focus)**
   - **Routing:** Vocals/Guitar → Fruity Send → Filtered Comp Bus
   - **Filtered Comp Bus:** Band-pass filter (300Hz-3kHz) + moderate compression (4:1 ratio)
   - **Send settings:** Volume=0dB, Dry=100%, blend at -10 to -15dB
   - **What to listen for:** Midrange intimacy without harshness, "close but veiled" feel.
   - **Why it works:** Filtering before compression creates "telephone" / lo-fi character (moody intimacy).

4. **Pre-Fader Sends for Fading Into Darkness**
   - **Routing:** Lead vocal → Fruity Send (Slot 1) → Dark Reverb Bus
   - **Automation:** Fade lead vocal fader to -∞dB, dark reverb sustains
   - **Send settings:** Volume=-6dB, Dry=100%
   - **What to listen for:** Vocal disappears into dark reverb cloud.
   - **Why it works:** Creates "dissolving into the void" transitions (very moody).

5. **Subtle Chorus/Doubling (Detuned, Dark)**
   - **Routing:** Keys/Pads → Fruity Send → Detuned Double Bus
   - **Detuned Double Bus:** Fruity Chorus (slow rate, deep depth) + pitch shift (-7 cents) + low-pass (6kHz)
   - **Send settings:** Pan=opposite of dry signal, Volume=0dB, blend at -18dB
   - **What to listen for:** Subtle thickness, slightly disorienting (moody uncertainty).
   - **Why it works:** Detuning + filtering = dreamlike, unstable character.

6. **Long Delay with Filtering (Tape Delay Emulation)**
   - **Routing:** Vocals/Guitar → Fruity Send → Tape Delay Bus
   - **Tape Delay Bus:** Fruity Delay 3 (1/2 or 1 bar delays, feedback=50-70%, tone control=-20%)
   - **Send settings:** Volume=-10dB, Dry=100%
   - **What to listen for:** Delays feel distant, degraded (moody nostalgia).
   - **Why it works:** Long delays + tone degradation = "echoes from the past" vibe.

### What NOT to Do (Moody Pitfalls)

1. **DON'T:** Route to bright, short reverbs (kills moody vibe, adds energy)
   - **Fix:** Use dark, long reverbs with high damping + low-pass filtering.

2. **DON'T:** Parallel compression with fast attack (destroys transients, adds aggression)
   - **Fix:** Use slow attack (20-30ms) for gentle parallel compression (maintains intimacy).

---

## Vibe 2: UPBEAT

### Production Translation
**Upbeat** in hip-hop/R&B context means: energetic, bright, punchy, forward-moving, clear transients, present/in-your-face, rhythmic emphasis, lively spatial effects.

### Routing Levers for UPBEAT (via Fruity Send)

1. **Parallel Compression (NY Style, Fast & Punchy)**
   - **Routing:** Drums/Bass → Fruity Send (Slot 1) → Parallel Comp Bus
   - **Parallel Comp Bus:** Fruity Compressor (8:1 ratio, -25dB threshold, attack=1-3ms, release=50ms)
   - **Send settings:** Volume=0dB, Dry=100%, blend at -8 to -12dB
   - **What to listen for:** Drums feel punchier, more present, "in your face".
   - **Why it works:** Fast parallel compression adds density without killing transients (upbeat energy).

2. **Bright Reverb Sends (Short Decay, High-Passed)**
   - **Routing:** Snare/Claps → Fruity Send → Bright Plate Reverb Bus
   - **Bright Reverb Bus:** Plate reverb (decay=0.8-1.5s, damping=low, high-pass=200Hz to remove mud)
   - **Send settings:** Volume=-10dB, Dry=100%
   - **What to listen for:** Snare has sparkle/shimmer, not dark tail.
   - **Why it works:** Bright, short reverb adds energy without washing out the mix.

3. **Parallel Saturation (Bright, Aggressive)**
   - **Routing:** Bass/Synths → Fruity Send → Bright Saturation Bus
   - **Bright Saturation Bus:** Fruity Blood Overdrive or Waveshaper (hard clip) + high-shelf boost (+3dB at 8kHz)
   - **Send settings:** Volume=0dB, Dry=100%, blend at -10dB
   - **What to listen for:** Adds grit and brightness, aggressive harmonics.
   - **Why it works:** Bright saturation creates forward-moving energy (upbeat aggression).

4. **Vocal Throws to Bright Delay (Automated)**
   - **Routing:** Vocals → Fruity Send (Slot 1) → Bright Delay Bus
   - **Bright Delay Bus:** Fruity Delay 3 (1/8 note, feedback=30%, high-shelf +2dB at 6kHz)
   - **Send Volume:** Automate spikes on beat hits (sudden throws)
   - **What to listen for:** Rhythmic delay throws that add momentum.
   - **Why it works:** Bright, short delays on beat hits create upbeat rhythmic drive.

5. **Stereo Width Sends (Haas Effect for Brightness)**
   - **Routing:** Hi-hats/Percussion → Fruity Send → Stereo Width Bus
   - **Stereo Width Bus:** 15ms delay + pitch shift (+8 cents) + high-shelf boost
   - **Send settings:** Pan=hard opposite of dry signal, Volume=0dB, blend at -15dB
   - **What to listen for:** Hi-hats feel wider, brighter, more "open".
   - **Why it works:** Stereo width + brightness = upbeat spaciousness.

6. **Multi-Stage Parallel Processing (Comp + Saturation)**
   - **Routing:** Lead vocals → Two Fruity Sends (Slot 1 & 2)
     - Send 1 → Parallel Comp (fast, punchy)
     - Send 2 → Parallel Saturation (bright, aggressive)
   - **Blend both buses** at -10 to -12dB each
   - **What to listen for:** Vocals sound thick, present, forward, energetic.
   - **Why it works:** Layered parallel processing maximizes upbeat presence.

### What NOT to Do (Upbeat Pitfalls)

1. **DON'T:** Route to dark, long reverbs (kills energy, adds moodiness)
   - **Fix:** Use bright, short reverbs (plate, room) with fast decay times.

2. **DON'T:** Over-compress parallel buses (creates pumping, saps energy)
   - **Fix:** Use moderate compression (6:1 ratio) on parallel buses, blend subtly.

---

## Vibe 3: PSYCHEDELIC

### Production Translation
**Psychedelic** in hip-hop/R&B context means: disorienting, warped, pitched/detuned, glitchy, evolving/unstable, heavily effected, surreal spatial movement, unconventional textures.

### Routing Levers for PSYCHEDELIC (via Fruity Send)

1. **Multi-Stage Delay Routing (Feedback Loops)**
   - **Routing:** Synth/Vocal → Fruity Send (Slot 1) → Delay Bus 1 → (Delay Bus 1 sends to Delay Bus 2 via another Fruity Send) → Delay Bus 2
   - **Delay Bus 1:** 1/16 note delay, feedback=80%, pitch shift +12 cents
   - **Delay Bus 2:** 1/8 note delay, feedback=70%, pitch shift -7 cents
   - **What to listen for:** Cascading, pitch-warped delay trails (psychedelic echo spirals).
   - **Why it works:** Multi-stage delays with pitch shifting = disorienting, evolving textures.

2. **Parallel Pitch Shifting (Detuned Layers)**
   - **Routing:** Vocals → Fruity Send → Pitch Shift Bus
   - **Pitch Shift Bus:** Pitcher (+7 semitones, formant shift on) + reverb
   - **Send settings:** Volume=0dB, Dry=100%, blend at -12dB
   - **What to listen for:** Vocal has weird, detuned layer (psychedelic doubling).
   - **Why it works:** Pitch shifting creates "alien" / surreal character.

3. **Automated Routing Changes (Dynamic Destinations)**
   - **Routing:** Use 3 Fruity Send instances (Slot 1, 2, 3) sending to different FX buses
     - Send 1 → Short Reverb
     - Send 2 → Pitch-Shifted Delay
     - Send 3 → Granular Reverb
   - **Automation:** Automate each send's Volume to switch between FX throughout song
   - **What to listen for:** Constantly evolving spatial characteristics (psychedelic instability).
   - **Why it works:** Changing effect destinations creates disorienting, morphing soundscape.

4. **Reverse Reverb via Routing**
   - **Routing:** Vocal → Fruity Send (Slot 1, Dry=0%) → Reverb Bus → Render reverb bus to audio → Reverse audio in playlist
   - **Reverb Bus:** Long decay (5-8s), 100% wet
   - **What to listen for:** Reverse reverb builds into vocal (psychedelic pre-echo).
   - **Why it works:** Reverse reverb is classic psychedelic effect (Beatles-style).
   - **Note:** Requires rendering to audio (not real-time with Fruity Send alone).

5. **Parallel Granular/Glitch Processing**
   - **Routing:** Drums/Samples → Fruity Send → Glitch Bus
   - **Glitch Bus:** Fruity Granulizer (short grain size, high randomness) or Gross Beat (glitch presets)
   - **Send settings:** Volume=0dB, Dry=100%, blend at -15 to -20dB
   - **What to listen for:** Glitchy, stuttering layer under clean drums.
   - **Why it works:** Glitch processing adds psychedelic unpredictability.

6. **Stereo Panning Automation on Send**
   - **Routing:** Keys/Pads → Fruity Send → Reverb Bus
   - **Fruity Send Pan:** Automate from hard left → hard right over 4-8 bars
   - **What to listen for:** Reverb swirls around stereo field (psychedelic movement).
   - **Why it works:** Moving spatial effects = disorienting, trippy stereo image.

### What NOT to Do (Psychedelic Pitfalls)

1. **DON'T:** Keep sends static (psychedelic requires movement/evolution)
   - **Fix:** Automate send volumes, pan, or use multiple sends with changing blends.

2. **DON'T:** Use clean, unprocessed sends (too "normal" for psychedelic)
   - **Fix:** Route to heavily processed buses (pitch shift, granular, reverse reverb, glitch).

---

## Vibe 4: JAZZY

### Production Translation
**Jazzy** in hip-hop context means: warm, organic, vintage/lo-fi, swing-influenced, room/ambience (not large halls), tape-like saturation, relaxed dynamics, "dusty" textures.

### Routing Levers for JAZZY (via Fruity Send)

1. **Parallel Tape Saturation (Warm, Vintage)**
   - **Routing:** Drums/Bass → Fruity Send → Tape Saturation Bus
   - **Tape Saturation Bus:** Fruity Waveshaper (soft curve) + low-pass (8kHz) + vinyl crackle sample (very quiet)
   - **Send settings:** Volume=0dB, Dry=100%, blend at -10dB
   - **What to listen for:** Warm, rounded tonality (analog/tape vibe).
   - **Why it works:** Tape saturation = classic jazz/soul recording aesthetic.

2. **Room Reverb Sends (Small, Natural)**
   - **Routing:** Instruments → Fruity Send → Room Reverb Bus
   - **Room Reverb Bus:** Small room preset (decay=0.8-1.5s, no pre-delay)
   - **Send settings:** Volume=-8dB, Dry=100%
   - **What to listen for:** Instruments sound like they're in same room together (cohesive jazz ensemble feel).
   - **Why it works:** Small room reverb = organic jazz club/studio ambience.

3. **Pre-Fader Sends for Vintage Fade-Outs**
   - **Routing:** Horn samples → Fruity Send (Slot 1) → Room Reverb
   - **Automation:** Fade horn track fader, room reverb sustains
   - **What to listen for:** Horns fade like old jazz record ending.
   - **Why it works:** Smooth fade with sustaining ambience = vintage jazz aesthetic.

4. **Parallel Compression (Gentle, Vintage-Style)**
   - **Routing:** Drum bus → Fruity Send → Gentle Comp Bus
   - **Gentle Comp Bus:** Fruity Compressor (3:1 ratio, slow attack 20-30ms, slow release 200-300ms)
   - **Send settings:** Volume=0dB, Dry=100%, blend at -12dB
   - **What to listen for:** Drums feel "glued" but not squashed (relaxed dynamics).
   - **Why it works:** Gentle compression maintains dynamic range (jazz feel, not EDM pumping).

5. **Filtered Parallel Processing (Lo-Fi Character)**
   - **Routing:** Sample chops → Fruity Send → Lo-Fi Bus
   - **Lo-Fi Bus:** Band-pass filter (200Hz-6kHz) + subtle bit reduction + tape saturation
   - **Send settings:** Volume=0dB, Dry=100%, blend at -15dB
   - **What to listen for:** "Dusty", vintage, sampler-like texture.
   - **Why it works:** Filtering + degradation = classic jazz-hop/lo-fi hip-hop aesthetic.

6. **Subtle Chorus on Keys/Rhodes**
   - **Routing:** Electric piano → Fruity Send → Chorus Bus
   - **Chorus Bus:** Fruity Chorus (slow rate, medium depth, vintage mode if available)
   - **Send settings:** Volume=0dB, Dry=100%, blend at -12dB
   - **What to listen for:** Warm, vintage Rhodes/Wurlitzer character.
   - **Why it works:** Chorus = classic jazz/soul keyboard sound.

### What NOT to Do (Jazzy Pitfalls)

1. **DON'T:** Use bright, aggressive saturation (too modern/harsh for jazzy)
   - **Fix:** Use warm, soft saturation (tape emulation, subtle overdrive).

2. **DON'T:** Use large hall reverbs (too "grand" for jazz club vibe)
   - **Fix:** Use small room reverbs (studio/club ambience, not concert halls).

---

## Vibe 5: VIBEY

### Production Translation
**Vibey** in hip-hop/R&B context means: atmospheric, textured, spacious but not cold, gentle movement, immersive, relaxed, "feels good" energy, smooth/flowing.

### Routing Levers for VIBEY (via Fruity Send)

1. **Subtle Reverb Sends (Medium Decay, Warm)**
   - **Routing:** All instruments → Fruity Send → Vibe Reverb Bus
   - **Vibe Reverb Bus:** Medium hall (decay=2-3s, damping=medium, subtle pre-delay 20-30ms)
   - **Send settings:** Volume=-10 to -12dB, Dry=100%
   - **What to listen for:** Instruments sit in cohesive, warm space (not dry, not drowning).
   - **Why it works:** Subtle reverb creates immersive atmosphere without washing out mix.

2. **Parallel Saturation (Warm, Gentle)**
   - **Routing:** Bass/Keys → Fruity Send → Warm Saturation Bus
   - **Warm Saturation Bus:** Fruity Waveshaper (soft curve) + slight low-shelf boost (+1dB at 100Hz)
   - **Send settings:** Volume=0dB, Dry=100%, blend at -15dB
   - **What to listen for:** Warmth and thickness without aggression.
   - **Why it works:** Gentle saturation adds vibe without harshness.

3. **Stereo Width Sends (Gentle Haas)**
   - **Routing:** Pads/Keys → Fruity Send → Width Bus
   - **Width Bus:** 12-18ms delay + subtle chorus
   - **Send settings:** Pan=opposite of dry, Volume=0dB, blend at -18dB
   - **What to listen for:** Pads feel wider, more "enveloping" (vibey immersion).
   - **Why it works:** Stereo width = spacious, atmospheric vibe.

4. **Pre-Fader Delay Sends (Ambient Tails)**
   - **Routing:** Guitars/Vocals → Fruity Send (Slot 1) → Delay + Reverb Bus
   - **Delay + Reverb Bus:** 1/4 note delay (feedback=40%) into medium reverb
   - **Send settings:** Volume=-10dB, Dry=100%
   - **What to listen for:** Instruments have subtle rhythmic delay tails (vibey texture).
   - **Why it works:** Delay + reverb combo = dreamy, atmospheric vibe.

5. **Parallel Compression (Gentle, Smooth)**
   - **Routing:** Vocal → Fruity Send → Smooth Comp Bus
   - **Smooth Comp Bus:** Fruity Compressor (4:1 ratio, slow attack 15-20ms, medium release 150ms)
   - **Send settings:** Volume=0dB, Dry=100%, blend at -12dB
   - **What to listen for:** Vocal feels fuller, more present, but still relaxed.
   - **Why it works:** Gentle parallel compression adds body without aggression (vibey smoothness).

6. **Automated Send Swells (Dynamic Atmosphere)**
   - **Routing:** Lead elements → Fruity Send → Reverb Bus
   - **Automation:** Gradually increase send Volume from -∞dB to -6dB over 8-16 bars
   - **What to listen for:** Mix feels like it's "opening up" spatially (vibey evolution).
   - **Why it works:** Dynamic reverb sends create evolving atmosphere.

### What NOT to Do (Vibey Pitfalls)

1. **DON'T:** Use harsh, aggressive processing (kills relaxed vibe)
   - **Fix:** Use gentle saturation, compression, and filtering (smooth, not harsh).

2. **DON'T:** Over-dry mix (no reverb/delay sends = no vibe)
   - **Fix:** Use subtle reverb/delay sends on most elements (creates cohesive atmosphere).

---

## Cross-Vibe Comparison Table

| Vibe | Reverb Type | Compression Style | Saturation | Delay Type | Stereo Approach |
|------|-------------|-------------------|------------|------------|-----------------|
| **Moody** | Dark, long decay, low-passed | Slow, gentle, filtered | Warm, dark, soft | Long, degraded | Subtle, intimate |
| **Upbeat** | Bright, short decay | Fast, punchy, aggressive | Bright, hard clip | Short, bright | Wide, present |
| **Psychedelic** | Weird (granular, reverse) | Varied/glitchy | Extreme/detuned | Multi-stage, pitched | Automated movement |
| **Jazzy** | Small room, natural | Gentle, slow | Warm tape emulation | Subtle/rare | Mono-centric, organic |
| **Vibey** | Medium, warm | Smooth, balanced | Warm, gentle | Medium, atmospheric | Gentle width |

---

**Last Updated:** 2026-02-03  
**Source Priority:** [Production context], [REPUTABLE]  
**Verification Status:** Routing strategies verified, specific FX settings are production guidelines
