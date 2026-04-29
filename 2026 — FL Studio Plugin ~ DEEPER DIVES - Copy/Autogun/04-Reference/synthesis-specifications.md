# Technical Reference: Synthesis Specifications

A detailed look at the Autogun multi-engine core. [SRC: IL-MAN]

## 1. The Multi-Engine Architecture
Autogun is a front-end for the **Ogun** synthesis engine. It reconfigures its internal nodes based on the 32-bit seed number.
- **Engine Types**: Includes Additive, Subtractive, FM, Granular, and Physical Modeling.
- **Complexity**: Some seeds utilize over 32,000 harmonic additive partials.

## 2. Parameter Interpolation
- The **Freq**, **Res**, and **AM** knobs utilize high-quality interpolation. 
- **Effect**: You can automate these knobs in real-time without hearing digital "zipper noise" or clicks.

## 3. Polyphony & Voice Stealing
- Autogun is polyphonic. The number of active voices is managed internally to prevent CPU crashes.
- **Wrapper Interaction**: You can limit polyphony or enable "Mono" mode in the Channel Wrapper settings if needed for specific lead sounds.

## 4. The "AM" Logic (Unverified)
- **The Mystery**: The "AM" knob has a different function for every engine type. 
- **Observed Behavior**: In FM-heavy seeds, it acts as a **Modulation Index**. In Granular seeds, it often acts as **Grain Density**. In Analog seeds, it acts as **Saturation/Drive**. [UNVERIFIED - Empirical observation]
