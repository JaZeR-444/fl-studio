# Signal Flow: Fruity Soft Clipper

The architecture of Fruity Soft Clipper is simple but effective for gaining loudness.

```mermaid
graph LR
    Input[Input Audio] --> Thres[Threshold / Soft Knee]
    Thres -- Saturation Applied --> Post[Post Gain]
    Post -- Volume Boost --> Output[Output Audio]
```

### Stages
1.  **Input**: Audio enters the plugin.
2.  **Threshold**: Signals exceeding the threshold are rounded off (soft clipped) instead of chopped (hard clipped). This creates harmonic distortion (warmth) rather than digital noise.
3.  **Post Gain**: The processed signal is amplified.
4.  **Output**: Final signal sent to the mixer track.
