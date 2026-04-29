# Core Techniques And Best Practices: Fruity LSD

## 1. The "Texture Layer" Stack
Don't use LSD sounds by themselves.
- **Technique**: Layer the LSD "String Ensemble" (Patch 49) at 10% volume underneath a high-end Serum string pad.
- **Listen For**: A "crusty" digital grit that gives the modern synth a nostalgic hardware feel.

## 2. Drum Kit Auditioning
Channel 10 is reserved for Percussion in General MIDI.
- **Technique**: Set a MIDI Out to Channel 10. Play different keys to hear standard GM drums (C2=Kick, D2=Snare, etc.).
- **Benefit**: Use this to quickly sketch out a rhythm without loading hundreds of MBs of drum samples.

## 3. Custom DLS Loading
Access sounds from the 90s.
- **Technique**: Search for old `.dls` banks online (often from video game soundfont archives). Load them using the **Bank** selector.
- **Goal**: Using the exact sounds from classic Nintendo or PlayStation games.

## 4. Resample and "Modernize"
Transform Windows sounds into professional textures.
- **Technique**: Record the LSD output into Edison. Normalize it. Add heavy saturation, a 24dB Low-Pass filter, and deep reverb.
- **Result**: The "cheap" source sound becomes a warm, expensive-sounding background texture.

## 5. Mono-Check Protocol
- **Protocol**: Many GM sounds are extremely narrow or mono. 
- **Action**: Check your master in Mono. If the LSD layer is the *only* thing you can hear, your modern synths might be out of phase.
- **Fix**: Use Fruity Stereo Enhancer on the LSD mixer track to push it out of the center and leave room for the main instruments.

## Common Pitfalls + Fixes
| Pitfall | The Fix |
| :--- | :--- |
| **No Sound** | Ensure **Port** in MIDI Out matches **Port** in Fruity LSD. |
| **Piano Roll is Empty** | Use a separate **MIDI Out** generator; LSD has no piano roll. |
| **Latency/Lag** | Use the "Track Latency" compensation in the Mixer to shift the track back in time. |
