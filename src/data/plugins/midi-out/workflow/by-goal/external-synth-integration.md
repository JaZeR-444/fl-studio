# Workflow: External Synth Integration (Hardware Bridge)

*Goal: Connecting a physical hardware synthesizer to FL Studio so you can play and automate it just like a plugin.*

## Vibe Mapping
- **Vibey:** ⭐⭐⭐⭐⭐ (Primary)
- **Moody:** ⭐⭐⭐⭐
- **Jazzy:** ⭐⭐⭐⭐

## 🚶 Step-by-Step Setup
1. **The Physical Connection:**
   - Plug the **MIDI OUT** of your computer's interface into the **MIDI IN** of the synth.
   - Plug the **Audio Output** of the synth into the **Audio Input** of your computer's interface.
2. **The FL MIDI Config:**
   - Go to `Options -> MIDI Settings`.
   - Find your interface in the "Output" list.
   - Set the **Port** number (e.g., **Port 1**).
3. **The MIDI Out Setup:**
   - Load **MIDI Out** in the Channel Rack.
   - Set its **Port** to **1**.
   - Set **Channel** to **1** (unless your synth is set to a different one).
4. **The Audio In (Mixer):**
   - Go to an empty Mixer track (e.g., Track 10).
   - Label it "SYNTH AUDIO."
   - Select the correct physical **Input** from your interface (e.g., Input 1/2).
   - *Result:* You can now play the MIDI Out Piano Roll and hear the synth's audio coming into the Mixer.
5. **Managing Latency:**
   - Because hardware takes time to process, you may hear a delay.
   - Go to the Mixer track "SYNTH AUDIO."
   - Click the "Track Latency" icon (the small clock) at the bottom.
   - Use **Manual Offset** to shift the audio until it matches the project metronome.

## 🔄 Variations
- **The "Multitimbral" Beast:** If using a workstation (like a Fantom or Montage), load 4 MIDI Out instances, all on Port 1, but using Channels 1, 2, 3, and 4 to play 4 different sounds at once.
- **The "Daisy Chain":** Use the MIDI THRU port on your first synth to connect a second synth. Give the second synth a different MIDI Channel (e.g. Channel 2).

## ⚠️ Pitfalls & Fixes
- **Problem:** No sound.
- **Fix:** Ensure the synth's local control is OFF (if it has a keyboard) and check the Audio Input in the Mixer.
- **Problem:** Stuck notes.
- **Fix:** Click the **Reset** button in the MIDI Out UI to send an "All Notes Off" message.

## 🎚️ Automation Ideas
- **Filter Sweep:** Configure Knob 1 to **CC 74**. Right-click and "Create automation clip." You are now automating the real analog filter of your hardware!
- **Patch Flip:** Automate the **Patch** number to change sounds instantly during a song transition.
