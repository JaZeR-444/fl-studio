# Parallel Multiband Processing Workflow

## Goal
Process the bass and high frequencies of a loop differently using Patcher or multiple mixer tracks.

## Steps
1. **Insert Frequency Splitter**: Place it as the first effect on your track.
2. **Configure Bands**: Set to **3-band mode** for maximum control.
3. **Set Crossovers**: 
    - Low/Mid: ~200Hz (to isolate the kick/bass).
    - Mid/High: ~3.5kHz (to isolate the snap/air).
4. **Route Outputs**: In the wrapper settings, route each band to a separate mixer track.
5. **Apply Effects**:
    - **Low Band**: Monofy and apply light distortion/saturation.
    - **Mid Band**: Apply compression to glue the rhythmic elements.
    - **High Band**: Apply stereo widening or reverb for "air".

## Pro Tip
Use **Linear Phase** mode when the splitter is on a master or sub-mix bus to ensure no phase rotation at the crossover points.
