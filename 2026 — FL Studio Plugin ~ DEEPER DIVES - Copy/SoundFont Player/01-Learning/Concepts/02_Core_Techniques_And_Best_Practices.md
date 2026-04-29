# 02: Core Techniques and Best Practices

## 1. The "Lo-Fi" Aliasing Trick
Switch the **Resampling Mode** to **Crunchy**. This uses a lower-quality interpolation method that creates "aliasing" artifacts when you play notes outside of their original range. This is the "secret sauce" for 90s-style hip-hop and house. [SRC: REPUTABLE-06]

## 2. Realistic Vibrato (The Human Touch)
Most SoundFonts are static. To make a violin or flute sound "alive":
1. Enable the **LFO**.
2. Set **LFO Freq** to around 5Hz.
3. Set **LFO Amp** to a very low value (2-5%).
4. Automate the **LFO Amp** so it only increases at the *end* of a long held note.

## 3. Layering for "Cinema" Trap
SoundFonts are small. You can load 5 instances of SoundFont Player with the same violin patch.
1. Detune each one by 2-5 cents.
2. Pan them differently across the stereo field.
- *Result:* You turn a thin solo violin into a massive, lush string section.

## 4. Overriding "Buzzy" Samples
If a SoundFont has too much high-end noise:
1. Enable the **Filter Override**.
2. Turn the **Cut** (Cutoff) slider down until the hiss disappears.
3. Add a little **Mod** (Envelope) to let the "hit" of the note stay bright.

## 5. Drum Kit "Individual Outs"
Many SoundFonts contain full drum kits.
1. Load a Drum SoundFont.
2. Since SFP only has one stereo output, use **Patcher**.
3. Load multiple SFPs in Patcher, each set to the same bank but a different MIDI note/channel.
- *Result:* You can now process the SF2 Kick and SF2 Snare on separate mixer tracks.

## 6. External Editing
If a SoundFont is "almost" perfect but the loop points are bad:
1. Click the **Edit** button in SFP.
2. Link this to **Polyphone** (Free external editor).
3. Fix the loops in Polyphone and save. SFP will update the sound instantly.

## Common Pitfalls + Fixes
- **Pitfall:** "The sound is too quiet."
  - **Fix:** Check the **Master Vol** and the **Velocity** in the Piano Roll. Many SoundFonts are velocity-sensitive by default.
- **Pitfall:** "The reverb sounds 'cheap'."
  - **Fix:** Turn off the internal **Reverb** and use `Fruity Reeverb 2` or `LuxeVerb` on the mixer track.
- **Pitfall:** "Can't find the .sf2 file."
  - **Fix:** Ensure you are looking in the correct directory. SFP only sees `.sf2`, not `.sfz` or `.wav`.
