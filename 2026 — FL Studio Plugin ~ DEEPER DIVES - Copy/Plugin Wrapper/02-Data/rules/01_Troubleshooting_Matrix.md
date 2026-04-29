# Troubleshooting Matrix

| Symptom | Probable Cause | The Fix |
| :--- | :--- | :--- |
| **"Plugin is tiny / huge"** | High-DPI Scaling mismatch. | Wrapper Settings -> Processing -> Check/Uncheck "DPI Awareness". If that fails: "Make Bridged" + "External Window". |
| **"Crackling / Glitching"** | Buffer Underrun in plugin. | Wrapper Settings -> Processing -> Enable **"Use fixed size buffers"**. |
| **"Audio cuts out"** | Demo mode or Smart Disable? | Check if Smart Disable is killing the Reverb tail. If so, turn it off for that plugin. |
| **"Notes hang forever"** | MIDI loop or sustain pedal. | Double click the **Stop** button in FL Studio transport (Panic). |
| **"Automation won't link"** | VST parameter hiding. | Move the knob in the interface. Tools -> Last Tweaked -> Create Automation Clip. |
