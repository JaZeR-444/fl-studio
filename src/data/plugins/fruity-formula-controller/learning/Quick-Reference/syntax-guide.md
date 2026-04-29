# Syntax Guide: Fruity Formula Controller

A dictionary of mathematical operators and functions. [SRC: IL-MAN]

## 1. Constants & Variables
- `a, b, c`: The three input knobs (0 to 1.0).
- `SongTime`: Number of beats passed since start of song.
- `Time`: System time in seconds.
- `Tempo`: Current BPM.
- `Pi`: 3.14159...
- `E`: 2.71828...

## 2. Basic Operators
- `+`, `-`, `*`, `/`: Add, Subtract, Multiply, Divide.
- `^`: Power (e.g., `a^2` is A squared).
- `%`: Modulo (Remainder after division).

## 3. Trigonometry
- `Sin(x)`, `Cos(x)`, `Tan(x)`: Basic waves.
- `ArcSin(x)`, `ArcCos(x)`, `ArcTan(x)`: Inverse waves.

## 4. Logic & Conditionals
- `IfG(x, y, a, b)`: If **x > y**, output **a**, else **b**.
- `IfL(x, y, a, b)`: If **x < y**, output **a**, else **b**.
- `IfE(x, y, a, b)`: If **x = y**, output **a**, else **b**. [UNVERIFIED: Floating point precision issues].
- `Min(x, y)`: Output the smaller of the two.
- `Max(x, y)`: Output the larger of the two.

## 5. Rounding & Conversion
- `Abs(x)`: Converts negative to positive (Rectification).
- `Round(x)`: Rounds to the nearest integer.
- `Floor(x)`: Rounds down.
- `Ceil(x)`: Rounds up.
- `Log(x)`, `Exp(x)`: Logarithmic and Exponential curves.

## 6. Randomness
- `Rand()`: Outputs a random value between 0 and 1 every sample.
- `SeededRand(seed)`: Random but repeatable if the seed is constant.
