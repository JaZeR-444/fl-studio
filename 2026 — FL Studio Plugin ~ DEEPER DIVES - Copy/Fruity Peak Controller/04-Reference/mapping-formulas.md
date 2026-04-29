# Mapping Formulas Reference: Fruity Peak Controller

When using the "Link to Controller" window, these formulas allow you to reshape the signal from Peak Controller.

## 1. The Inverter: `1-Input`
- **Use Case:** Creating a sidechain duck when the **VOL** knob in Peak Controller is positive.
- **Action:** If the kick hits (Input = 1), the result is 0 (Silence).

## 2. The Scaler: `Input*0.5`
- **Use Case:** Taming an overly aggressive modulation.
- **Action:** Reduces the total range of movement by half.

## 3. The Limiter: `min(Input,0.8)`
- **Use Case:** Preventing a filter from opening too wide.
- **Action:** The value will never go above 80%.

## 4. The Offset: `Input+0.2`
- **Use Case:** Ensuring a fader never drops to absolute zero.
- **Action:** Adds a 20% "floor" to the modulation.

## 5. The Logarithmic: `Log(Input)`
- **Use Case:** More natural volume response for human hearing. [SRC: REPUTABLE]
