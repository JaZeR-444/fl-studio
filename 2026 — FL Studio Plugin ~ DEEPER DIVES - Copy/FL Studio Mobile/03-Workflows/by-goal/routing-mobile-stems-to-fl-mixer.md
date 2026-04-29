# Goal Workflow: Routing Mobile Stems to FL Mixer (Multi-Track Prep)

*Goal: Separating your mobile tracks so they can be processed by high-end desktop VSTs like FabFilter or Soundtoys.*

## 🎛️ Routing Context
- **Setup**: FL Studio Mobile Plugin -> Multiple Mixer Tracks.

## 🚶 Step-by-Step Setup
1. **Solo Audition**:
   - Inside the mobile plugin, go to the **Mixer View**.
   - Solo the first track (e.g., "Main Vocal").
2. **Assign Desktop Track**:
   - In the Desktop Mixer, assign the FL Studio Mobile plugin to **Insert 1**.
3. **Print to Audio**:
   - Right-click the record button on the Desktop Mixer Insert 1.
   - Press **Alt+R** to render the soloed mobile track to an audio clip.
4. **Repeat for all tracks**:
   - Mute the "Main Vocal" inside the mobile plugin.
   - Solo the "Bass" track.
   - Record to **Insert 2** on the Desktop Mixer.
5. **Clean Sweep**:
   - Once all tracks are recorded as WAVs, you can delete or bypass the FL Studio Mobile plugin.
   - *Result*: You now have individual audio stems for every mobile track, ready for professional mixing.

## 🔄 Variations
- **The "Multi-Instance" Method**: Load 4 separate instances of the FL Studio Mobile plugin. Inside each instance, load the same project but solo a different instrument.
- **The "Export Stems" Tool**: Use the internal Mobile menu: **Save -> MP3/WAV -> Split Mixer Tracks**.

## ⚠️ Pitfalls & Fixes
- **Problem**: Delay/Offset.
- **Fix**: Check the "Plugin Delay Compensation" (PDC) in the Desktop Mixer. Ensure all recordings line up perfectly with the grid.
