# Sidechain Ducking (Kick & Bass) Workflow

## Goal
Create space for the kick drum by automatically lowering the volume of the bass whenever the kick hits.

## Prerequisites
- A Kick drum track.
- A Bass track.

## Steps
1. **Mixer Routing:**
   - Select the Kick mixer track.
   - Right-click the 'send' arrow at the bottom of the Bass mixer track and select **Sidechain to this track**.
2. **Plugin Setup:**
   - Insert **Fruity Compressor** on the Bass track.
   - Open the plugin wrapper settings (cog icon) -> **Processing** tab.
   - Right-click the **Auto-map outputs** or manually set the **Sidechain** input to '1' (or whichever index corresponds to your kick).
3. **Compression Settings:**
   - **Ratio:** Set to **10:1** or **Inf:1** for a strong effect.
   - **Attack:** Set to **0ms** or **0.1ms** for instant ducking.
   - **Release:** Set to **50ms - 150ms** (adjust until the bass "breathes" back in time with the track).
   - **Threshold:** Lower significantly until you hear the bass dipping clearly when the kick hits.
4. **Fine-Tuning:**
   - Adjust **Release** to match the tempo. If the release is too fast, it will sound glitchy; if too slow, the bass will stay quiet for too long.

## Pro Tip
Use this same technique on reverb buses (ducking the reverb whenever the dry vocal plays) to maintain vocal clarity in a dense mix.
