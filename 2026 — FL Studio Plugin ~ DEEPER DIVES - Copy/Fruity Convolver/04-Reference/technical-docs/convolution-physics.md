# The Science of Convolution

## What is Convolution?
Convolution is a mathematical operation on two functions (signals) that produces a third function. In audio, it's the process of multiplying the input signal by the **Impulse Response (IR)** of a space or system.

## The Impulse Response (IR)
An IR is a recording of how a system responds to a "Delta Function" (an infinitely short, infinitely loud spike of sound).
- **In Rooms:** The IR captures the reflections, echoes, and frequency absorptions of the walls.
- **In Gear:** The IR captures the EQ curves and subtle phase shifts of the circuitry.

## FFT Processing
Fruity Convolver uses **Fast Fourier Transform** to perform convolution.
- **Time Domain vs. Frequency Domain:** Calculating convolution in the time domain is incredibly CPU-intensive. By converting the signals to the Frequency Domain (FFT), the math becomes a simple multiplication, which is much faster.
- **Linear Phase:** Because convolution is inherently a linear phase process, it doesn't suffer from the phase rotation issues of standard IIR reverbs.

## Limitations
- **Non-Linearity:** Convolution cannot capture distortion or compression (dynamic changes). It only captures the static frequency and time response.
- **Modulation:** Standard IRs are static. They don't "move" like the chorus-based modulation in algorithmic reverbs (like Fruity Reeverb 2).
