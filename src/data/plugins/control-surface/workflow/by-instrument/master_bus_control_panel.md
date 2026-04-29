# Instrument Workflow: Master Bus Control Panel (The Finisher)

*Goal: Creating a consolidated dashboard for your final mastering chain.*

## 🎛️ Routing Context
- **Setup**: Link to parameters on your Master Mixer Track (Slot 1-10).

## 🚶 Step-by-Step Setup
1. **The Core Controls**:
   - Create a Knob for **DRIVE** (Link to Soft Clipper or Saturation).
   - Create a Slider for **LOUDNESS** (Link to Limiter Ceiling/Gain).
   - Create a Knob for **WIDTH** (Link to Stereo Enhancer).
2. **The "Check" Buttons**:
   - Create a Button (Toggle mode).
   - Label it **MONO CHECK**.
   - Link it to the **Separation** knob on the Master Track. (Formula: `Input*(-1)` to make it 100% mono when clicked).
3. **The Visual Logic**:
   - Arrange the controls in the order they appear in your mixer chain (Drive -> Width -> Loudness).
4. **The Benefits**:
   - You can now "master" your track from a clean, focused window without having to look at 5 different plugin UIs.
5. **The Performance**:
   - Use the **MONO CHECK** button frequently during your mix-down to ensure the low-end is solid.

## 🔄 Variations
- **The "Vibe" Switcher**: A button that toggles between two different EQ curves (e.g. "Club" vs "Radio").
- **The "Reference" A/B**: A slider that crossfades between your track and a reference track (requires two mixer tracks).

## ⚠️ Pitfalls & Fixes
- **Problem**: The button doesn't stay down.
- **Fix**: Right-click the button in Edit Mode and change its type from **Momentary** to **Toggle**.
