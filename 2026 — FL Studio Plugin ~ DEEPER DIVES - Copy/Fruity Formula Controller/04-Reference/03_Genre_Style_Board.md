# Reference: Genre Style Board (Math Automation)

Sourced applications of logical control in Hip-Hop, Rap, and R&B.

## 1. West Coast G-Funk / Neo-Soul Flutter
- **Source**: Dr. Dre / Terrace Martin style.
- **Application**: `0.5 + (Rand() - 0.5) * 0.02` applied to fine pitch.
- **Goal**: Mimicking the organic instability of analog synth oscillators.

## 2. Experimental / Psychedelic Glitch
- **Source**: Flying Lotus / Kaytranada.
- **Application**: `IfG(Rand(), a, 1, 0)` applied to a Bitcrusher or Distortion Mix.
- **Goal**: Random, rhythmic "bursts" of texture that follow the energy of Input A.

## 3. Dark R&B Sidechain
- **Source**: 40 (Noah Shebib) / PARTYNEXTDOOR.
- **Application**: Using `Min(1, Abs(Sin(SongTime*Pi))^2)` to create a precise "tension" based volume ducking.
- **Goal**: A rhythmic "breathing" that is perfectly locked to the tempo.

## 4. Modern Trap "Euclidean" Hat Jitter
- **Source**: Wondagurl / Southside.
- **Application**: Using `Round` and `Modulo` to shift the volume of specific hat triplets.
- **Goal**: Creating rhythmic complexity that feels mechanical but intricate.
