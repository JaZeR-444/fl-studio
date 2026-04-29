# Fruity Formula Controller: The Math Engine

> **Scope:** Logic Gates, Complex LFOs, and Automation Processing.
> **Source:** Image-Line Official Manual (v21.2) + Direct Analysis.
> **Complexity:** High (Programming).

## 🧠 The "Algebra" Concept
This plugin does not generate sound. It generates **Data**.
*   **Inputs:** `a`, `b`, `c`. (Knobs you can link to other things).
*   **Engine:** Processes these inputs using a math formula.
*   **Output:** A single value (0.0 to 1.0) that you link to a target parameter.

**Signal Flow:**
`Input Knobs (a,b,c)` -> **[FORMULA EVALUATOR]** -> **[CLAMP 0-1]** -> **[OUTPUT]**

---

## 🎛️ Section 1: Core Syntax

The syntax is based on Delphi/Pascal math.
*   `+` (Add), `-` (Sub), `*` (Mult), `/` (Div).
*   `^` (Power). Example: `a^2` (Exponential curve).
*   `Sin(x)`, `Cos(x)`: Oscillators.
*   `Abs(x)`: Absolute value (Rectifier).
*   `Max(a,b)`: Output the larger value.
*   `Min(a,b)`: Output the smaller value.
*   `Int(x)`: Integer part.
*   `Frac(x)`: Decimal part.

---

## 🔁 Section 2: Logic (If/Then)

Essential for Sidechaining and Gates.
*   **Function:** `Iff(condition, true_value, false_value)`.
    *   *Note:* It might be case-sensitive depending on version. Usually `If(c, t, f)` or `Iff(c, t, f)`.
*   **Example:** `Iff(a > 0.5, 1, 0)` produces a **Square Wave** output from a linear input.

---

## ⚡ Technical Specs: The 0-1 Clamp

*   **Rule:** The output is *always* clipped between 0.0 and 1.0.
*   **Consequence:**
    *   If your formula outputs `1.5`, the controller sends `1.0`.
    *   If your formula outputs `-0.5`, the controller sends `0.0`.
*   **Workaround:** You must scale your formula to fit this range.
    *   *Sine Wave:* `Sin(SongTime)` goes -1 to +1.
    *   *Fix:* `Sum(SongTime)*0.5 + 0.5` shifts it to 0 to 1.

---

## 🧪 "Secret Sauce" Workflows

### 1. The Crossfader (Inverter)
1.  **Formula:** `1 - a`
2.  **Use:** Link Input `a` to Volume A. Link Formula Output to Volume B.
3.  **Result:** When you turn knob `a` up, Volume A goes up, and Volume B goes down.

### 2. Audio Follower (Peak Controller Helper)
1.  **Formula:** `a * b`
2.  **Input a:** Peak Controller output (Audio level).
3.  **Input b:** A manual knob (Sensitivity).
4.  **Result:** A scalable sidechain signal where Knob `b` adjusts the depth of the ducking without changing the compressor threshold.

### 3. Quantizer (Stepped LFO)
1.  **Formula:** `Int(a * 8) / 8`
2.  **Input a:** Triangle LFO.
3.  **Result:** The smooth LFO is chopped into 8 discrete steps. Perfect for Chiptune pitch modulation.
