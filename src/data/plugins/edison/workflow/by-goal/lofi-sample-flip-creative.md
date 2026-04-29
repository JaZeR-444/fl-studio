# Workflow: Creative Lo-Fi Sample Flipping
**Goal:** Transform generic loops into unique, textured "Moody" or "Jazzy" foundations using Edison's internal tools.

## 1. The "Old Record" Texture (Blur & Pitch)
- **Blur Tool (Ctrl+B):** Select a small melodic portion of your sample. Apply Blur with a high "Decay" setting (~500ms). This creates an ethereal, pad-like tail out of any sound.
- **Pitch Manipulation:** 
    - Use the **Time Stretch/Pitch Shift (Alt+T)** tool.
    - Set the "Pitch" to **-1200 cents** (1 octave down) but keep "Time" at 100%. This creates a deep, grimy texture common in Dark R&B.
    - Alternatively, shift it **+7 semitones** for a "chipmunk" soulful vocal feel.

## 2. The "Perfect Chop" Prep
1. **Auto-detect Regions:** Use `Regions > Auto-detect regions` to find transients.
2. **Manual Fine-tuning:** Zoom in to the sample start. Ensure the marker is exactly at the zero-crossing to avoid clicks.
3. **The Fade-In/Out (Ctrl+F):** Apply a micro-fade (2-5ms) to the beginning and end of your chops to ensure they "sit" better when triggered fast in Fruity Slicer or Sampler.

## 3. Harmonic Destruction (Bitcrushing)
1. **Sample Rate Reduction:** Go to `Tools > Format > Edit Properties`.
2. Reduce the **Sample Rate** from 44100 to **22050** or **11025**.
3. **The Result:** Instant high-end "grit" and aliasing that defines the "Boom Bap" 12-bit sound (SP-1200 style).

## 4. Reverse & Reverb "Ghost" Loops
1. Select a melodic hit (e.g., a bell or piano chord).
2. **Reverse it (Alt+Left).**
3. Apply a large reverb (external or via Edison's "Acquire Noise Profile" hack).
4. **Reverse it again.**
5. **Result:** You now have a "Ghostly" swell that leads perfectly into the next chord hit, essential for Moody Trap Soul.
