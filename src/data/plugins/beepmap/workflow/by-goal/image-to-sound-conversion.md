# Goal Workflow: Image to Sound Conversion (The Scan)

*Goal: Turning a real-world photograph into a playable spectral instrument.*

## 🎛️ Routing Context
- **Routing**: BeepMap -> Mixer Insert.
- **Mixer Chain**: Fruity Stereo Shaper -> Fruity Delay 3.

## 🚶 Step-by-Step Setup
1. **Source Selection**:
   - Find a photo with high contrast (e.g., a sunset, a city skyline, or a forest).
2. **The Import**:
   - Drag the photo into BeepMap.
3. **The Tuning**:
   - Play a MIDI note. If you hear nothing but noise, increase the **Length (ms)** to 3000ms.
   - Switch to **Log** scale.
4. **Color Modulation (Blue)**:
   - Click the **Blue** button.
   - *Observe*: The blue channel in your photo will now add a subtle "grit" or "ringing" frequency modulation to the sound.
5. **The Mix**:
   - Because photos have data in all frequencies, the sound will be very wide.
   - Use **Fruity Stereo Shaper** to narrow the width if it's overwhelming the vocals.
6. **The Result**: A completely unique, non-repeating sonic landscape derived from the light data of your photograph.

## 🔄 Variations
- **The "Data-Mosh"**: Drag a non-image file (like a .zip or .dll) into BeepMap (Disclaimer: May result in extreme white noise).
- **The "Vocal Spectral"**: Take a screenshot of your vocal waveform and load it into BeepMap to hear the "ghost" of the vocal.

## ⚠️ Pitfalls & Fixes
- **Problem**: CPU Usage is 99%.
- **Fix**: Your image is too large. Resize it to under 512x512 pixels before importing.
