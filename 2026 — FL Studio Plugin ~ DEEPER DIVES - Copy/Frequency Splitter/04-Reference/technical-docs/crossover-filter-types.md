# Crossover Filter Types & Phase Response

## Minimum Phase (IIR)
- **Latency**: Near zero.
- **Phase**: Causes phase rotation around the crossover frequency.
- **Usage**: Live performances, individual tracks where phase matching isn't critical.

## Linear Phase
- **Latency**: High (compensates by delaying the whole signal).
- **Phase**: Zero phase shift. The impulse response is symmetrical.
- **Usage**: Mastering, parallel processing where the split signals are recombined later.

## Slope Impact
- **Shallow (6-12 dB)**: Natural transition, more overlap between bands.
- **Steep (48-96 dB)**: Surgical separation, can introduce "ringing" artifacts near the cutoff.
