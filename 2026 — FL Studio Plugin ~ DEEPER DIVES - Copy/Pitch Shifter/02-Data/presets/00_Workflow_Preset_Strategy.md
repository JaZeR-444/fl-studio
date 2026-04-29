# Workflow & Preset Strategy: Pitch Shifter

## 💾 The Patcher Strategy
Pitch Shifter is powerful, but it's even better inside **Patcher**.
Why? Because you can EQ the shifting path separately.

### 1. "Clean Shift" Preset (Patcher)
*   **Routing:** Input -> Pitch Shifter (100% Wet) -> Parametric EQ 2 (Low Cut / High Cut) -> Output.
*   **Why:** Pitch shifting introduces digital aliasing in the highs and mud in the lows. EQing the wet signal cleans this up.

### 2. "Double Track" Preset (Patcher)
*   **Routing:**
    *   Path A: Dry.
    *   Path B: Pitch Shifter (+12 Cents) Pan Left.
    *   Path C: Pitch Shifter (-12 Cents) Pan Right.
*   **Result:** A massive, wide vocal widener.

## 🎛️ Standard Presets (Plugin State)
Save these as FL Plugin Presets:
1.  **The Drop:** Pitch -12, Voice Mode, Mix 100%. (Ready for automation).
2.  **The Riser:** Pitch +12, Feedback 80%, Delay 100ms. (Ready for transitions).
