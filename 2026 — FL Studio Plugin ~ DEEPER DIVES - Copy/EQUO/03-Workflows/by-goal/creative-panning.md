# Goal Workflow: Creative Panning (3D Presence)

*Goal: Transform a flat mono instrument into a wide, frequency-staggered stereo image.*

## 🎛️ Routing Context
- **Routing**: Instrument (Synth/Piano) -> Mixer Track -> EQUO.
- **Mix Status**: 100% Wet.

## 🚶 Step-by-Step Setup
1. **Mode Selection**: Click the **PAN** button on the UI.
2. **Bank Setup**: Select **Bank 1**.
3. **The Staircase**: Using the **Pencil** tool, draw a jagged pattern alternating between top (Right) and bottom (Left).
   - *Example*: 100Hz (Center), 500Hz (Left), 1kHz (Right), 3kHz (Left), 8kHz (Right).
4. **Smoothing**: Select the **Curve** tool and drag it across the tops of your pencil marks to soften the jumps.
5. **Morphing Movement**: Select **Bank 2**. Right-click the display and select **Flip Horizontally**.
6. **Automation**: Create an automation clip for the **Morph knob**. Set it to a slow 4-bar Sine LFO.
7. **Mono Check**: Switch your Master track to Mono. Ensure the tonal balance hasn't shifted drastically.

## 🔄 Variations
- **The "High-End Cloud"**: Only pan frequencies above 5kHz to create a wide "shimmer" while keeping the body centered.
- **The "808 Growl"**: Pan the low-mid frequencies (200Hz - 500Hz) hard to add "movement" to a distorted bass.

## ⚠️ Pitfalls & Fixes
- **Problem**: The sound feels "hollow" in the middle.
- **Fix**: Reduce the **Morph** range or lower the height of the drawings in the grid to bring frequencies closer to the center.
