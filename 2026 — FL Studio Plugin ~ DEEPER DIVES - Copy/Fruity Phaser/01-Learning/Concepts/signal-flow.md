# Signal Flow: Fruity Phaser

Phasing is created by shifting the *phase* of the audio at specific frequencies using All-Pass Filters.

```mermaid
graph LR
    Input[Input Audio] --> Split{Splitter}
    Split --> Dry[Dry Signal]
    Split --> FilterChain[Chain of All-Pass Filters]
    
    LFO[LFO Modulator] -- Moves Filter Peaks --> FilterChain
    
    FilterChain --> Wet[Wet Phase-Shifted Signal]
    Wet -- Feedback --> FilterChain
    
    Dry --> Mix[Mixer Sum]
    Wet --> Mix
    Mix --> Output[Output Audio]
```

### Stages
1.  **Split**: Audio is copied.
2.  **All-Pass Filters**: These filters do not cut volume, but they change the *timing* (phase) of specific frequencies.
3.  **LFO**: Moves the frequencies affected by the All-Pass filters up and down.
4.  **Mix**: When the "Phase Shifted" signal is mixed with the "Dry" signal, frequencies that are out of phase cancel each other out, creating moving notches in the spectrum.
