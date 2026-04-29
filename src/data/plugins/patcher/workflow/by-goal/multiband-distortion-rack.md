# Multiband Distortion Rack (Patcher)

## Goal
Apply different types of distortion to Low, Mid, and High frequencies without phase issues.

## Technical Steps
1. **Splitting:**
   - Add **Frequency Splitter** inside the Map.
   - Connect "From FL Studio" to the Input of Frequency Splitter.
2. **Processing Paths:**
   - **Low Branch:** Connect Low out to `Fruity WaveShaper` (Soft clipping).
   - **Mid Branch:** Connect Mid out to `Distructor` (Tube saturation).
   - **High Branch:** Connect High out to `Fruity Blood Overdrive` (Hard clipping).
3. **Summing:**
   - Connect the outputs of all three distortion plugins to the "To FL Studio" node.
4. **Control:**
   - Add a **Control Surface**.
   - Create a knob labeled "Crossover".
   - Map it to the Frequency Splitter's "Low/Mid" crossover frequency.

## Why it works
Distorting high frequencies often ruins the clarity of the bass. By splitting the signal, you can keep the low end solid and clean while making the high end aggressive.
