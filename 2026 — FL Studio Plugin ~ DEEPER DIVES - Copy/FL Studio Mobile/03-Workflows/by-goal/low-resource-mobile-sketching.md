# Goal Workflow: Low Resource Mobile Sketching (The CPU Saver)

*Goal: Using the Mobile engine to sketch complex arrangements when your PC is struggling with high CPU usage.*

## 🎛️ Routing Context
- **Routing**: Internal Mobile Processing only.

## 🚶 Step-by-Step Setup
1. **Empty Project**: Start a new project in FL Studio Desktop.
2. **One Instance**: Add a single instance of the **FL Studio Mobile** plugin.
3. **Internal Layering**:
   - Instead of loading 10 different VSTs in the Desktop Channel Rack, load 10 tracks *inside* the Mobile plugin.
   - Use the **Mobile GMS** and **MiniSynth** for leads and pads.
   - *Logic*: The Mobile engine is highly optimized for ARM processors and low-resource environments. It uses significantly less RAM and CPU than 10 instances of Serum or Omnisphere.
4. **Drafting the Bounce**:
   - Quantize and arrange the full 8-bar loop within the plugin.
5. **Freeze**:
   - Once the sketch is done, record the entire plugin output to a single audio clip in the Desktop Playlist.
6. **Result**: You have a rich, full-sounding arrangement using only a fraction of the resources a traditional desktop project would require.

## 🔄 Variations
- **The "Battery Saver"**: Perfect for finishing projects on a laptop without a power outlet.
- **The "Legacy Bridge"**: Use it to sketch ideas using older GMS presets that might be harder to find in the desktop versions.

## ⚠️ Pitfalls & Fixes
- **Problem**: Sound feels too "thin."
- **Fix**: Use the internal **SuperSaw** unison settings to add stereo thickness to the mobile instruments.
