# Technical Manual: Developing Custom Sprite Sheets for Fruity Dance

## 1. Introduction: Owning the Visual Brand
In the era of "Type Beat" YouTube channels and Twitch production streams, your visual identity is as important as your tag. Fruity Dance is not locked to its default mascot (FL Chan). By understanding the **Sprite Sheet Protocol**, you can replace the default animation with your own custom branded character—a 2D version of yourself, a logo, or a psychedelic creature. This guide provides the exact technical specifications required to rebuild the visual heart of FL Studio.

---

## 2. Technical Specifications: The Sprite Matrix
Fruity Dance reads animation data from a single large `.png` file. This file is a **Grid** of frames.

### 2.1 Image Dimensions
- **Total Canvas Size:** 512 x 512 pixels (Standard) or 1024 x 1024 (High-Def).
- **Frame Size:** Each individual animation frame must be exactly **128 x 128 pixels**.
- **The Grid:** A 512x512 canvas allows for a **4x4 Grid** (16 total frames).

### 2.2 Color and Transparency
- **Format:** 32-bit PNG.
- **Transparency:** The background must be **Alpha-Transparent**.
- **Color Depth:** Standard RGB. Avoid using semi-transparent "glows" at the very edges of the 128px frame, as the scaling engine can sometimes create "halos" or "artifacts" during fast movement.

---

## 3. The Animation Logic (Frame Ordering)
The plugin "reads" the grid from top-left to bottom-right. To ensure your custom character moves correctly, you must follow the default sequence:

| Frame Index | Row / Col | Logic / Move |
|-------------|-----------|--------------|
| **0 - 3**   | Row 1     | **Breathe / Idle:** Soft vertical motion. |
| **4 - 7**   | Row 2     | **Dance 1:** Rhythmic side-to-side body movement. |
| **8 - 11**  | Row 3     | **Dance 2:** High-energy movement / Arm waves. |
| **12 - 15** | Row 4     | **Jump / Kick:** Vertical displacement frames. |

---

## 4. Deployment: The File Path
To activate your custom mascot, you must replace the internal asset.
- **Windows Path:** `C:\Program Files\Image-Line\FL Studio 21\Plugins\Fruity\Generators\Fruity Dance\Artwork\dance.png`
- **Master Strategy:** Do NOT overwrite the original. Rename the original to `dance_backup.png` and save your new sheet as `dance.png`.
- **The Wrapper Trick:** You can also change the **Background Color** of the plugin window by right-clicking the UI, allowing your custom mascot to "Pop" against a Cyberpunk neon or Deep Space purple background.

---

## 5. Rhythmic Calibration (BPM Sync)
Once your mascot is loaded, you must test the **Temporal Alignment**.
- **The 1.0x Rule:** At 1.0x speed, the plugin completes one full 4-frame "Breathe" cycle every 2 bars (at 120 BPM).
- **The High-Speed Hack:** If you want your custom mascot to move like a "Drill" dancer, design your 4-frame loop to happen in half the physical space, then set Fruity Dance to **2.0x Speed**.

---

## 6. Artistic Recommendations for Hip-Hop
- **The "Cool" Factor:** Give your mascot **Clothing Physics**. In the "Breathe" frames, make their jacket or hair move slightly. 
- **The "Psych" Factor:** Use vibrant, contrasting colors (Cyan/Pink) so the mascot is visible even when the viewer is watching on a small mobile screen.
- **The "Soul" Factor:** Make the "Dance" frames slightly **Off-Grid** (move the character 2 pixels early in the frame). This creates a "Swung" or "Drunken" visual groove that matches R&B timing.

---

## 7. Conclusion: The Visual Signature
Developing custom sprites for Fruity Dance is the ultimate way to **White-Label your DAW.** By replacing the generic mascot with a character that represents your unique "Sound DNA," you transform your production screen into a professional marketing asset. Follow these technical protocols, and your visual brand will be as tight and professional as your mix.

---
**Document Version:** 1.0 (Technical Blueprint)
**Keywords:** Custom Sprite Sheets, Fruity Dance Assets, Branded DAW, Graphic Design, Animation Math, FL Studio.
