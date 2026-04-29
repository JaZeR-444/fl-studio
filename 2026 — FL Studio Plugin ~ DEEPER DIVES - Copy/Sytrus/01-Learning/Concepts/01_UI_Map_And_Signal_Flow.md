# 01: UI Map and Signal Flow

## UI Sections Tour
Sytrus uses a tab-based interface to manage its extreme depth. [SRC: IL-MAN-09]

### 1. Main Tab
- **Unison:** Up to 9 voices with Sub, Detune, and Pan controls.
- **Master Effects:** Global LFO depth, Pitch, and X-Y controller mapping.
- **Oversampling:** Settings for real-time and render quality (Critical for FM).

### 2. Operator Tabs (OP 1-6)
- **Osc:** Harmonic partial editor (Additive engine).
- **Freq:** Frequency ratios and offsets.
- **Envelopes (INS):** Dedicated Articulator for Volume, Pitch, Filter, etc.

### 3. Filter Tabs (F1-F3)
- **State Variable Filters:** 13+ filter types (Vanilla, Mango, Lime, etc.).
- **Waveshaper:** Built-in distortion per filter unit.

### 4. The Matrix (The Heart)
- **Rows:** Modulators (Operators 1-6).
- **Columns:** Carriers (Operators 1-6), Filters (F1-F3), and Output (OUT).
- **Knobs:** Adjust the amount of modulation or volume routing.

### 5. FX Tab
- **Chorus / Delay / Reverb:** High-quality built-in spatial effects.

## Signal Flow
`Operators (Additive/Osc) -> Matrix Routing (FM/RM) -> Filters 1/2/3 -> Master FX -> Output`

## Things Beginners Misunderstand
- **"Why is it silent?":** On the Matrix, you must turn up a knob in the **OUT** column for at least one operator or filter.
- **Frequency Ratios:** A ratio of "2.000" means the operator is playing 1 octave higher. "0.500" is 1 octave lower.
- **The "Lock" Button:** If the lock icon is on in the envelope editor, moving one point moves the whole curve.
    