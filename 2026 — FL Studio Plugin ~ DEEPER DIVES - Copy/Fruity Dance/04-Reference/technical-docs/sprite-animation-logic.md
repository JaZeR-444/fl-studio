# Sprite-Based Animation in FL Studio

## Animation Logic
Fruity Dance is a **Sprite-Sheet Player**. It does not perform 3D rendering or complex physics.
- **Sprite Sheet:** A single large image containing multiple "frames" of animation.
- **Framerate:** The speed at which Fruity Dance cycles through these frames is tied to the **Project BPM**.

## BPM Synchronization
When in **Auto Mode**:
- The internal counter follows the transport playhead.
- `1.0x Speed` means the animation cycle completes in one bar (usually).
- **Inertia:** The transitions between animations are handled via a simple fade or jump-cut to ensure zero latency.

## Memory Management
Because the mascot is composed of low-resolution 2D bitmaps, the memory footprint is negligible (usually <5MB). 
- **Legacy:** This plugin is a nod to FL Studio's roots and the "FL Chan" mascot culture, providing a lighthearted visual element to the otherwise technical DAW environment.
