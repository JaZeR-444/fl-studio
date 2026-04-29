# Rules: Transition Timing (Effector)

Tags: transitions | timing | automation-safety

## 1. The "Bypass" Rule
- **Rule:** Never automate the X/Y pad without *also* automating the **Bypass** button.
- **Why:** Effector can introduce subtle noise or "clicks" even when the X/Y pad is at zero if the bypass is OFF. Always ensure the effect is bypassed until the exact moment you need it.

## 2. Stutter Timing Rule (TRANS Mode)
- **Rule:** Always set your project tempo *before* automating the Stutter.
- **Why:** Effector calculates its stutter rates (1/4, 1/8, etc.) based on the project BPM. If you change the BPM, your automation clips for stutter speed will no longer align with the grid.

## 3. The "Phase Reset" Safety
- **Rule:** If using **FLANG** or **PHAZ**, ensure the transition starts at the beginning of a bar.
- **Why:** Modulation effects have a cycle. Starting them in the middle of a bar can sound "offset" and "clumsy," ruining the groove of a soulful R&B track.

## 4. "Avoid" List
- **Avoid "Full Wet" Delay on Master:** If using Effector on the Master bus, keep the "Mix" knob (if available via Patcher/Mixer slot) at **50% or less**. A 100% wet delay on the master will kill the transient impact of your kick.
- **Avoid Fast VOX Sweeps:** The VOX formant filter is "jumpy." Sweeping it too fast sounds like digital noise rather than a human voice. Slow, deliberate sweeps work best.
