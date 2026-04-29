# Hanami Process Explained: The 5 Stages of Sakura

The Hanami model is a "Digital Waveguide" implementation of physical modeling. It simulates the physics of sound moving through a medium. [SRC: IL-MAN-01]

## Stage 1: Contact (The Exciter)
- **What it is:** The initial impulse that starts the vibration.
- **Research Note:** Unlike a synth oscillator, this is a short burst of noise or a "one-shot" physical model. 
- **Control Lever:** The **Position** slider. 
  - *Bridge (5%):* Mimics a strike near the bridge (high tension, thin harmonics).
  - *Center (50%):* Mimics a strike in the middle (round, fundamental-heavy).

## Stage 2: Vibration (The Dual Strings)
- **What it is:** Two independent waveguides (String 1 and 2).
- **Research Note:** **Damping** simulates the material of the string. High damping = Nylon/Gut; Low damping = Steel/Silver.
- **Technical Lever:** **Tension.** This is a pitch envelope tied to the "strike force." Real strings sharpen when hit hard and settle into pitch.

## Stage 3: Interaction (The Coupling)
- **What it is:** How the two strings "talk" to each other.
- **Research Note:** In a real instrument (like a 12-string guitar), the vibration of one string influences the other.
- **Technical Lever:** **Phasing.** Adjusting this creates "comb filtering" and "phase cancellation," which is how Sakura creates organic width without a Chorus effect.

## Stage 4: Resonance (The Body)
- **What it is:** A series of feedback delay lines simulating a hollow cavity.
- **Research Note:** The **Material** selector changes the distribution of resonant peaks.
  - **Box:** Small, rectangular (High-mid focus).
  - **Large Wood:** Massive cavity (Low-mid focus, deep).
  - **Plate:** Flat metal (High-frequency "shimmer").

## Stage 5: Acoustics (The Space)
- **What it is:** The final "Room" simulation.
- **Best Practice:** Use the **Acoustics** section primarily for "Glue." Use external high-end reverbs (like LuxeVerb) for the "Vibe."
