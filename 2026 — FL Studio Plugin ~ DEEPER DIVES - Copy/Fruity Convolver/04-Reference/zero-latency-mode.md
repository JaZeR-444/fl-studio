# Reference: Zero Latency Mode (Physics)

Convolution is one of the most CPU-heavy processes in digital audio.

## 1. The Delay Problem
Normally, convolution has to "wait" for the whole IR to be calculated before it plays. This creates a delay (Latency).

## 2. Zero Latency (Partitioning)
Fruity Convolver uses **Partitions** to break the calculation into smaller pieces.
- **Benefit:** You can play live without feeling a lag.
- **Cost:** This uses more CPU power.

## 3. When to use "Use Latency"
- **Mixing:** If you are finished recording and just need to save CPU, turn "Use Latency" **ON**.
- **Recording:** If you are playing a MIDI keyboard through Convolver, turn "Use Latency" **OFF** to avoid lag. [SRC: IL-MAN]
