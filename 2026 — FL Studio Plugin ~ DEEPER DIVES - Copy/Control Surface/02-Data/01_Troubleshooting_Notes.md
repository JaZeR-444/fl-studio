# Troubleshooting Notes

## Symptom: "The knob controls the wrong thing."
-   **Cause:** You likely reused a Control Surface or Patcher preset and the "Internal Controller" links got scrambled or re-assigned.
-   **Fix:** Right-click the target parameter > "Link to controller" > Verify the "Internal controller" dropdown matches the exact name of the Control Surface knob.
-   **Prevention:** Always rename your Control Surface knobs *immediately* after adding them (e.g., "Filter Cutoff" instead of "Knob 7"). FL Studio uses these names in the link dialog.

## Symptom: "The control moves the parameter, but the range is wrong."
-   **Cause:** The Control Surface outputs 0.0 to 1.0. Your target parameter might need 20Hz to 20kHz, or -inf dB to +6dB.
-   **Fix:**
    1.  **Simple:** In the "Link to controller" settings, use the "Mapping formula". (e.g., `Input * 0.5` limits it to 50%).
    2.  **Visual:** In Control Surface Edit Mode, right-click knob > Properties > Set Min/Max values (less common, usually better to handle at the link stage).

## Symptom: "I can't delete a control."
-   **Cause:** You are pressing "Delete" on your keyboard, but keyboard focus might be elsewhere.
-   **Fix:** In Edit Mode, Right-click the control > Delete.

## Symptom: "My custom knob graphics look blurry."
-   **Cause:** The `.ilcontrol` file or the source image strip might be low resolution, or you scaled the knob up too large in Control Surface.
-   **Fix:** Design knobs at the maximum size you intend to use them in Control Creator. Downscaling looks fine; upscaling looks bad.

## Symptom: "Patcher: The Control Surface tab is missing."
-   **Cause:** You might have deleted the Control Surface plugin from the Patcher Map.
-   **Fix:** In Patcher Map tab, Add Plugin > Control Surface. Patcher *requires* a Control Surface instance to show the Surface tab.
