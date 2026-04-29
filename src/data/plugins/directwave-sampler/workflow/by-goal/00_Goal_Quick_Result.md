# Goal: Converting Heavy VSTs to DirectWave (Upbeat)

## The Concept
Turning a CPU-heavy melodic synth into a lightweight, stable sampler bank so you can finish your arrangement without lag.

## Step-by-Step Setup
1.  Open the **Heavy VST** (e.g., Serum, Kontakt) and pick your preset.
2.  In the FL Studio Browser, right-click the plugin name under **Generators**.
3.  Select **Create DirectWave instrument**.
4.  **Sampling Settings:**
    - **Note Range:** C2 to C7.
    - **Layers:** 1 (if it's a simple synth) or 3 (if it has velocity dynamics).
    - **Stride:** 3 (samples every 3rd note to save memory).
5.  Press **Start**. FL Studio will automatically "Play" and "Record" every note of the synth into a new DirectWave bank.

## Result
- You now have a custom `.dwp` file that sounds identical to the expensive VST but uses almost zero CPU.

## Vibe Check
- **Upbeat/Productive:** This allows you to stack 50+ instruments in a high-energy track without the DAW crashing.

## Pitfalls
- **Looping:** If the original synth had a long sustain, you will need to set **Loop Points** manually in DirectWave afterward. [SRC: REPUTABLE]
