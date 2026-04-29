# Common Workflows: DirectWave

## 1. The "CPU Saver" (Bouncing VSTs)

Your project is crackling because you have 5 instances of Diva.

1.  **Identify:** Find a heavy chord progression.
2.  **Automate:** Right-click the Diva Channel -> **Create DirectWave instrument**.
3.  **Config:**
    *   range: C2 to C6.
    *   Zone spacing: 1 note (Chromatic) for max quality.
4.  **Replace:** Delete Diva. Load the `.dwp` file.
5.  **Benefit:** CPU usage drops from 40% to 1%.

## 2. Using SoundFonts (.sf2)

DirectWave is the native SF2 player of FL Studio.

1.  **Load:** Drag a `.sf2` file from the Browser onto DirectWave.
2.  **Bank:** It automatically maps all zones, velocity layers, and release samples.
3.  **Tweak:** Often SF2 files are dry.
    *   Go to the **Zone** tab.
    *   Enable **Reverb** (Global FX).
    *   Increase **Release** (Amp Envelope) if the strings cut off too abruptly.

## 3. Multi-Timbral Setup (16 Instruments)

DirectWave can play 16 different instruments on one instance.

1.  **Programs:** On the left "Browser" list, you see 1 through 16.
2.  **Load:**
    *   Click Slot 1: Load Piano.
    *   Click Slot 2: Load Bass.
    *   Click Slot 3: Load Strings.
3.  **MIDI Channels:**
    *   Give DirectWave a Port (e.g., 10) in Wrapper Settings.
    *   Add **MIDI Out** channels in the Channel Rack.
    *   Configure MIDI Out 1 to Channel 1 (Piano).
    *   Configure MIDI Out 2 to Channel 2 (Bass).
4.  **Outputs:** Go to the "Mix" tab in DirectWave and assign different **Output Offsets** per Program to route them to separate Mixer Tracks.

## 4. The "Round Robin" Humanizer

1.  **Concept:** Play a different sample every time you hit the same key (Machine Gun effect killer).
2.  **Zones:** Load 4 variations of a Snare sample on the same Key (C5).
3.  **Trigger Group:** Set all 4 zones to **Group 1**.
4.  **Type:** Set the Group Type to **"Cycle"** or **"Random"**.
5.  **Result:** DirectWave cycles through the samples automatically.
