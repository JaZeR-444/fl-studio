# Legacy Time Stretching

Before audio clips had advanced time-stretching algorithms (e3 generic, etc.), Granulizer was the king of tempo matching.

## The Workflow
1. Load a vocal loop that is 100bpm.
2. Your project is 128bpm.
3. Open Granulizer.
4. Right-click the **Root Key** on the piano keyboard (C5) and select "Autodetect".
5. OR simply use the **Time Stretching** knobs (Pitch/Mul) on the SMP tab, but Granulizer offers a texture that standard stretching doesn't.
6. **Key Feature**: Turn the **Wave Spacing** to 100%. This locks the playback speed to the original sample speed. If you lower it, the sample plays slower *without* changing pitch (if Grain Spacing is set correctly).

## The "Freeze" Effect
1. Set **Wave Spacing** to 0%.
2. Now the sample is frozen at the **Start** point.
3. Automate the **Start** knob to scrub through the audio manually.
