# Quick Reference: Grain Mechanics Visualized

Understanding the "Guts" of the Granulizer engine. [SRC: IL-MAN]

## 1. What is a Grain?
A grain is a tiny "window" into your audio.
- `[---Audio Sample---]`
- `   [Grain 1]`
- `      [Grain 2]`
- `         [Grain 3]`

## 2. Attack (ATT) vs. Hold (HOLD)
- **HOLD**: The width of the window. `[HOLD]`
- **ATT**: The "curtain" at the edges of the window.
  - `0% ATT`: `[#######]` (Sharp edges = Clicks)
  - `50% ATT`: `[/#####\]` (Smoothed edges = Lush)

## 3. Wave Spacing (W.SPACING)
The "Step Size" between the start of Grain 1 and Grain 2.
- **Positive**: `G1 -> G2 -> G3` (Forward)
- **Zero**: `G1, G1, G1` (Frozen in place)
- **Negative**: `G3 -> G2 -> G1` (Backward)

## 4. Grain Spacing (G.SPACING)
The "Spawn Rate" of new grains.
- **Low Values**: Grains are triggered rapidly (creates a smooth, dense "Cloud").
- **High Values**: Grains are triggered slowly (creates distinct rhythmic "Steps").

## 5. Density vs. CPU
- Higher density (Low G.SPACING + Long HOLD) = **High CPU**.
- Lower density (High G.SPACING + Short HOLD) = **Low CPU**.
