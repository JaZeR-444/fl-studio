# Professional Gain Staging Workflow

## Goal
Set up a healthy signal flow throughout your project to prevent digital distortion and ensure your plugins are working in their optimal range.

## The Rule of -18dB
In the analog world, gear is designed to work at "0 VU", which is approximately **-18dBFS** in the digital world. Many modern analog-emulation plugins (like those from Waves, Slate, or Softube) still follow this logic.

## Steps
1. **The Source**: Start with your raw sample or VST.
2. **Insert dB Meter**: Place it as slot #1 on the mixer track.
3. **Check the Level**: Play the loudest part of the sound.
4. **Adjust Input**: 
   - If the meter shows -3dB, use the **Clip Gain** in the sampler or the **Master Vol** in the VST to bring it down.
   - Aim for the peak to be around **-12dB** and the average to be around **-18dB**.
5. **Add Effects**: Now you can add compressors or EQs.
6. **Level Match**: After each effect, add another dB Meter (or check the plugin's internal meters) to ensure the volume hasn't jumped up.
7. **The Fader**: Now use the Mixer Fader to balance this track against others.

## Result
A clean, high-headroom mix that mastering plugins will love. No more "crunchy" or "thin" sounds caused by digital clipping between plugins.
