# Designing FM Bell Tones Workflow

## Goal
Create a classic "E-Piano" or "Church Bell" sound using FM synthesis.

## Steps
1. **Initial Setup**:
   - Set **Waveform** to Sine.
   - Set **Modulation** to 0% (Clean Sine).
2. **The Harmonic Foundation**:
   - Set **Coarse** to **2.0**. (This is one octave above the fundamental).
3. **Adding the "Chime"**:
   - Slowly increase **Modulation** until you hear the sound becoming "metallic". ~60% is usually good.
4. **Inharmonicity**:
   - Adjust **Fine** tuning. Moving it slightly away from 0 will create the "beating" or "clashing" frequencies typical of physical metal bells.
5. **Enveloping**:
   - Set **Decay** to ~20%. Bells should have a sharp attack and a medium-short fade.
6. **Refinement**:
   - Add a bit of **LFO** to the pitch for a "drifting" feel.

## Pro Tip
FM bells sound amazing with a lot of reverb. Follow DX10 with **Fruity Convolver** (Large Hall) for an ethereal sound.
