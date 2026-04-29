# Troubleshooting Notes

## Symptom: "It just sounds like white noise."
-   **Cause:** The image is too detailed (like a photograph of a city). There are pixels at every frequency height, so it triggers all sine waves at once = Noise.
-   **Fix:**
    1.  Use simple geometric images (lines, circles).
    2.  Use an image editor to increase contrast (make background pure black).
    3.  Lower the **Max Bitmap Height** to reduce resolution.

## Symptom: "The sound is too loud/clipping."
-   **Cause:** Many bright pixels summing together creates huge amplitude.
-   **Fix:** Turn down the **Vol** knob in BeepMap, or darken the image.

## Symptom: "I can't hear any stereo separation."
-   **Cause:** The image might be Black and White (Grayscale).
-   **Fix:** Grayscale = R+G+B equal values = Center Pan. You need **Color** (Red/Green) to hear stereo.

## Symptom: "The project file is huge."
-   **Cause:** BeepMap saves the bitmap data *inside* the FLP file.
-   **Fix:** Don't load 4K uncompressed bitmaps if you don't need to. Resize images to small dimensions (e.g., 500x500) before loading; you rarely hear the difference in resolution above that.
