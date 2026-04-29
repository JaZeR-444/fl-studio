# Rules: Destructive Editing Safety (Edison)

Tags: sampling | workflow-safety | destructive-editing

## 1. The "Safety Save" Rule
Edison is a **Destructive** editor. Any changes you make (Blur, Pitch, Reverse) are applied directly to the audio data in RAM.
- **Rule:** Before applying a heavy effect (like Blur or Time Stretch), press **Ctrl+S** or "Save sample as" to a temp folder.
- **Why:** FL Studio's "Undo" history for Edison is separate from the main project undo. If you run out of undo levels in Edison, your original sample is gone forever.

## 2. Zero-Crossing Rule
- **Rule:** Always enable **"Snap to Zero Crossing" (Shift+S)** before making a cut or a slice.
- **Why:** Cutting audio in the middle of a waveform cycle creates a "click" or "pop." Snapping to zero ensures the waveform starts and ends at 0dB silence.

## 3. High-Resolution Export Rule
- **Rule:** Always record and edit at **32-bit Float**.
- **Why:** Hip-hop/Trap production often involves extreme gain changes (e.g., normalizing a quiet 808). 32-bit Float prevents digital noise and artifacts when pushing volume to the limit.

## 4. "Avoid" List
- **Avoid Over-Normalizing:** Don't normalize every single chop. Normalize the *entire* loop first, then chop. Normalizing individual chops separately ruins their relative volume levels.
- **Avoid 100% De-noising:** When using "Acquire noise profile," only apply it at **50-70%**. 100% de-noising usually adds "robotic" artifacts that ruin the soulful texture of R&B vocals.
