# Automation Best Practices: Fast LP

Fruity Fast LP is built for movement. Follow these rules for professional results.

## 1. The "L" Curve
When automating a "Bloom" or "Reveal," use a **Bezier curve** that starts slow and accelerates at the end. This mimics the way we naturally perceive brightness.

## 2. Linking to LFOs
If linking to **Fruity Peak Controller**, set the "Base" value to `50%` and the "Amount" to `20%`. This keeps the filter oscillating in the most musical range (the mid-range).

## 3. High-Speed Gating
Fast LP can handle 1/32 note automation without "clicking." This makes it better for "Wobble" and "Growl" sounds than most 3rd-party EQ plugins.

## 4. Phase Safe
Because it is a simple 2-pole filter, it has minimal phase shift compared to complex 8-band EQs. It is "safer" to automate on a drum bus than a full Parametric EQ 2. [SRC: REPUTABLE]
