# Technical Reference: Latency Offset Calculations

Ensuring 100% rhythmic alignment when using MIDI Out with hardware. [SRC: IL-MAN]

## 1. The Latency Chain
When you use MIDI Out, there are three types of delay:
1. **MIDI Transmission Delay:** The time it takes for data to travel through the cable (~1ms).
2. **Hardware Processing Delay:** The time it takes for your synth to turn that MIDI into sound (varies, ~5-20ms).
3. **Audio Interface Buffer:** The time it takes for the synth's audio to travel back into your DAW.

## 2. How to Measure Offset
To get perfectly timed hardware recordings:
1. Load a simple "Click" or "Blip" sound into your hardware synth.
2. In the FL Piano Roll, place a note exactly on the start of every bar.
3. Record the audio into an Edison or a Playlist track.
4. **Compare:** Zoom in on the recorded waveform. Look at the distance between the bar line and the start of the audio peak.
5. **The Math:** If the peak is **450 samples** late, you need to compensate for that.

## 3. Applying the Fix
There are two ways to fix this in FL Studio:

### A. The "Manual Offset" Method (Preferred)
1. Go to the Mixer track where the hardware audio is coming in.
2. Click the **Track Latency** (clock icon) at the bottom.
3. Select **Set in ms...** (or samples).
4. Enter the amount you measured (e.g., -15ms).
- *Note:* Use a negative value to shift the audio "back in time" to match the grid.

### B. The "PDC" Method
If you have **Automatic PDC** (Plugin Delay Compensation) enabled, FL will try to handle this, but it often fails with external hardware because FL doesn't know how slow your hardware synth is. Manual offset is always safer for hardware.

---

## 4. MIDI Clock Sync Latency
If you are using **Master Sync** to drive a hardware sequencer or arpeggiator:
- Go to `Options -> MIDI Settings`.
- Select your Output device.
- Look for **Synchronization Offset**.
- Adjust this value (usually a small negative number) until the hardware sequencer hits at the same time as the FL Studio metronome.

---
*For a quick guide on connecting devices, see the [01-Learning/Quick-Reference/midi-port-vs-channel.md](../01-Learning/Quick-Reference/midi-port-vs-channel.md) guide.*
