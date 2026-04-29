# Common Mistakes: Fruity Dance

- **Misreading MIDI:** Thinking the character produces sound. It doesn't. It only listens to MIDI to change its visuals.
- **Wrong Speed:** Thinking "Speed = 2.0" means it's still in sync. **Fix:** Keep Speed at `1.0` if you want the "downbeat" of the dance to match the "downbeat" of your kick drum.
- **Ignoring Transparency:** Using a JPEG for custom characters. **Fix:** Only use **PNG-24** with an alpha channel, or the background will be a solid white box.
- **Forgetting the .txt:** Loading a custom PNG without its matching text definition file. The plugin won't know where the frames are.
- **Overcrowding:** Leaving the window open during a heavy mixing session. It eats up small amounts of GPU resources. Close it when not in use. [SRC: REPUTABLE]
