# 02: Core Techniques and Best Practices

## 1. Manual "Micro-Chops"
Auto-slice often misses the very beginning of a transient. Always zoom in and move your markers a few milliseconds **before** the waveform starts to avoid "clicking." [SRC: REPUTABLE-05]

## 2. Layering via Deck B
1. Load an acoustic drum break into **Deck A**.
2. Load a heavy 808/Trap kit into **Deck B**.
3. Align the markers.
4. Now, every time you hit a "Kick" note, you get the organic texture of Deck A and the power of Deck B.

## 3. The "Infinite" Vocal Lead
1. Slice a vocal "Ah" or "Oh."
2. Set the Region mode to **Loop**.
3. Use **Articulator 1** to apply a slow Volume Envelope (Release).
- *Result:* The vocal slice will loop indefinitely as long as you hold the key, turning it into a playable instrument.

## 4. Choke Groups (The MPC Way)
To prevent messy overlapping drums:
1. Select all Hi-Hat slices.
2. Set their **Cut** to 1 and **Cut By** to 1.
3. Now, the Closed Hat will instantly stop the Open Hat sound, creating a tight groove.

## 5. Reverse Chops for "Vibe"
Select a melodic slice (like a piano chord). Go to the editor menu and select **Tools -> Reverse**. Route this slice to a separate mixer track with heavy reverb. This is the "secret sauce" for **Psychedelic** and **Moody** textures.

## 6. Velocity-Sensitive Filtering
In the Articulator section:
1. Select **Filter Cutoff**.
2. Select the **MOD** tab.
3. Map **Velocity** to Cutoff with an upward slope.
- *Result:* Playing the pads harder makes the sample brighter, adding "human" expression to your beats.

## Common Pitfalls + Fixes
- **Pitfall:** "Clicking" at the end of a slice.
  - **Fix:** Add a tiny **Release** (5-10ms) in the Articulator Volume Envelope.
- **Pitfall:** Sample is out of key.
  - **Fix:** Use the **Master Pitch** knob or the "Tune" tool in the Wave Editor.
- **Pitfall:** MIDI notes are all the same.
  - **Fix:** Ensure you haven't accidental enabled "Single Note" mode in the settings.
