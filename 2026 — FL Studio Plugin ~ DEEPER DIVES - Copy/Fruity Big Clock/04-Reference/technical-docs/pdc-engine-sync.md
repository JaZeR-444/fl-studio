# PDC & Engine Sync Logic

## How Big Clock Stays Accurate
Unlike a simple stopwatch, Fruity Big Clock is tied to the **Internal Transport Clock** of FL Studio. 

### Latency & PDC (Plugin Delay Compensation)
If you use plugins that introduce latency (like Linear Phase EQs or heavy compressors), FL Studio delays all other tracks to keep them in sync.
- **The Engine Time:** The internal count of samples processed.
- **The Audible Time:** The time at which the audio actually reaches your ears.
- **Fruity Big Clock** shows the **Audible Time**. It compensates for the master latency, ensuring that when the clock hits `01:00`, you are actually hearing the one-minute mark of the audio.

## Sample Rate Sensitivity
In **Samples Mode**, the display is an absolute count. 
- If your Project Sample Rate is **44,100Hz**, one second = 44,100 samples.
- If your Project Sample Rate is **96,000Hz**, one second = 96,000 samples.
- **Usage:** This is used by engineers to detect "phase offsets" between microphones. If a drum hit is offset by 200 samples between the kick mic and the overheads, Big Clock helps calculate the exact distance.

## Vector Engine
The display uses the same vector engine as the FL Studio GUI. This means it doesn't use bitmaps. It renders the fonts dynamically, which is why it uses virtually zero GPU or CPU regardless of size.
