# Template & State Strategy: Fruity Phase Inverter

Since Phase Inverter is a technical utility, use these states for troubleshooting your sessions.

## 1. The "Low-End Health Check" State
- **Placement:** Mixer Slot 1 on every Bass/Drum layer.
- **Logic:** Start with both switches OFF. Toggle them ON/OFF during the "Rough Mix" stage to ensure no phase-fighting is happening between the Kick and Sub.

## 2. The "Pseudo-Stereo" Wrapper
- **Placement:** Used inside **Patcher** on a mono source.
- **Routing:** Split mono signal -> Left path (Normal) / Right path (Phase Inverter ON).
- **Result:** A reusable "Mega-Width" module for ad-libs.

## 3. The "Phase Flip" Bus
- **Placement:** On a parallel compression bus.
- **Reason:** Sometimes parallel compression can cause slight phase shifts when blended back. Use Phase Inverter to see if the "inverted" blend sounds more punchy. [SRC: REPUTABLE]
