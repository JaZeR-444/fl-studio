# Technical Reference: Math Function Library

A deep look at the supported functions in the Fruity Formula engine. [SRC: IL-MAN]

## 1. periodic Functions
- **Sin(x)**: Outputs a smooth oscillation between -1 and 1.
- **Cos(x)**: Identical to Sin, but shifted by 90 degrees.
- **Tan(x)**: Creates a periodic "spike" that stretches to infinity.

## 2. Threshold & Selection
- **IfG(test, threshold, if_true, if_false)**: "If Greater".
- **IfL(test, threshold, if_true, if_false)**: "If Less".
- **Min(a, b)**: Keeps the output capped at the value of B.
- **Max(a, b)**: Prevents the output from falling below the value of B.

## 3. Power & Curves
- **Abs(x)**: Removes the negative sign.
- **Pow(base, exp)**: Essential for logarithmic curves. `a^2` stays low; `a^0.5` stays high.
- **Log(x)**: Natural logarithm. Used for scaling volume/human hearing perceptions.

## 4. Probability
- **Rand()**: A new random number every sample. If used for automation, it looks like "White Noise."
- **SeededRand(seed)**: If the seed is `Round(SongTime)`, it creates a new random number every beat, but repeats the same sequence if you restart the song. [SRC: REPUTABLE]

## 5. Global Constants
- **SongTime**: Increments by 1 every beat.
- **Pi**: ~3.14159. Used to sync Sin waves to beats: `Sin(SongTime * Pi)` creates a 2-beat period.
