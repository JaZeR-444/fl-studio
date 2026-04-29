# Concepts: Ready-To-Use Patterns

Mathematical recipes for instant musical movement.

---

## 1. The "Variable Tension" Bounce
- **Formula**: `Abs(Sin(SongTime * Pi))^a`
- **What it does**: Creates a "bouncing ball" effect.
- **Control**: Use Knob A to change the "sharpness" of the bounce. 0.1 = Rounded; 10 = Sharp Thump.
- **Verification**: Link to Volume. You should hear a rhythmic pulse that gets snappier as you turn A up.

## 2. Probabilistic Ear-Candy
- **Formula**: `IfG(a, Rand(), 1, 0)`
- **What it does**: A "dice roll" gate.
- **Control**: Knob A is the "Probability." At 0.1, the output is almost always 0. At 0.9, it's almost always 1.
- **Verification**: Link to a high-feedback Delay. Only specific notes will "trigger" the delay.

## 3. The "Lofi Clock" (Time Quantizer)
- **Formula**: `Round(SongTime * a) / a`
- **What it does**: Quantizes time itself.
- **Control**: Knob A controls the "Bit-rate." High values = smooth; Low values = chunky steps.
- **Verification**: Link to a Filter. The filter will jump between positions rather than sliding.

## 4. The "Inverter with Offset"
- **Formula**: `b + (1 - b) * (1 - a)`
- **What it does**: Inverts Input A, but uses Input B as a "floor" or minimum value.
- **Control**: Knob A = Movement; Knob B = Minimum limit.
- **Verification**: Useful for mapping a mod-wheel so it never fully closes a filter.

## 5. Sine-Saw Hybrid
- **Formula**: `(Sin(SongTime*Pi) + (SongTime % 1)) / 2`
- **What it does**: Blends a smooth curve with a sharp ramp.
- **Verification**: Link to a Panning knob for a "swirl-and-jump" stereo effect.
