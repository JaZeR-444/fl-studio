# Workflow: Print-to-Audio and Treat (Modernizing Lo-Fi)

*Goal: Transform a "cheap" MIDI sound into a professional, heavy texture.*

## 🎛️ Routing Context
- **Routing**: MIDI Out -> Fruity LSD -> Mixer -> Edison.

## 🚶 Step-by-Step Setup
1. **The Source**: Choose a GM sound that has a lot of mid-range character, like Patch 20 (**Church Organ**) or Patch 22 (**Harmonica**).
2. **MIDI Sequence**: Record a 4-bar melodic loop.
3. **Print**: Use **Edison** or **Playlist Recording** to convert the LSD output to an actual `.wav` file.
4. **Saturation**: Add **Fruity Blood Overdrive** or **Soundgoodizer** to the recorded audio.
   - *Why*: This adds harmonics that the original Windows soundcard couldn't produce.
5. **Pitch Warp**: Use the "Stretch" mode in the sampler to pitch the loop down -5 semitones while keeping the same length.
6. **Depth**: Apply a ping-pong Delay.
7. **Result**: You've used the "bad" MIDI sound as a unique spectral seed for a modern, textured sound that nobody else has.

## 🔄 Variations
- **The "8-Bit Crunch"**: Down-sample the audio to 11kHz in Edison before processing.
- **The "Reverse Bloom"**: Reverse the recorded audio, add Reverb, then reverse it back.

## ⚠️ Pitfalls & Fixes
- **Problem**: Inherent background hiss from the Windows synth.
- **Fix**: Use a **Gate** or a De-noising tool in Edison before adding saturation.
