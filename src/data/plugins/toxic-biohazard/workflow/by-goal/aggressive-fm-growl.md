# Workflow: Aggressive FM Growl (Toxic Biohazard)

Tags: growl | dubstep | edm-bass | aggressive

## Goal: Create a "Growling" Bass for Hybrid Trap or EDM
This workflow uses the "Modulation Matrix" to create movement and grit.

## 1. Starting Moves
- **Osc 1 (Carrier):** Sawtooth | Level 80%.
- **Osc 2 (Modulator):** Sine | Level 0% (Matrix value).
- **Ratio Setup:** Set Osc 1 to 1.00 and Osc 2 to 0.50 (one octave down).

## 2. The Growl Engine
- **FM Matrix:** Slowly increase Osc 2 -> Osc 1 until you hear the "Growl." 
- **The Sweet Spot:** Usually around **40-60%**.
- **Filter Setup:** Use **LP (Low Pass)** | Cutoff 30% | Resonance 40%.

## 3. Creating the Movement
- **LFO Mapping:** Link **LFO 1** to the **FM Amount** (Osc 2 -> Osc 1).
- **LFO Speed:** Set to 1/4 or 1/8 bar.
- **Envelope Mapping:** Link the **Filter Cutoff** to an Envelope with a "Slightly slow" Attack.

## 4. A/B Test
- **A:** Static Sawtooth bass.
- **B:** FM Growl bass with LFO movement.
- **Listen for:** "Snarl" and "Texture." Does it sound like a machine breathing?

## 5. Quick Fix Path
- **Too thin?** Increase Osc 1 Master Level.
- **Too noisy?** Decrease FM Mod Amount.
- **Too "reedy"?** Change Modulator (Osc 2) back to a Sine wave.
