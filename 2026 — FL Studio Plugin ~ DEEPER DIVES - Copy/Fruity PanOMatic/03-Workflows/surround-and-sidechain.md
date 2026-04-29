# Workflow: Surround Simulation

PanOMatic was originally designed for basic surround panning before FL Studio had advanced routing.

## The Circle Pan
1. Use **Pan LFO** set to Sine.
2. Use **Vol LFO** set to Cosine (offset by 90 degrees).
3. **Result**: The sound appears to rotate around the listener's head (louder when centered, quieter when panned hard, or vice versa depending on phase).

## Sidechain Hack
- If you don't want to set up routing for a simple sidechain:
  1. Load PanOMatic.
  2. Set **Vol LFO** to a Saw wave (Ramp Down).
  3. Sync speed to 1/4 beat.
  4. Invert the phase if needed.
  5. **Result**: A "4-on-the-floor" volume ducking effect (Pseudo-Sidechain).
