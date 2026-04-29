# Sakura - 00 START HERE

## Purpose
Sakura is a physical modeling string instrument. The sound is built from a five-stage model: **Touch**, **Vibration**, **String Interaction**, **Resonance**, and **Acoustics**. This guide defines a rigorous research workflow and required documentation outputs.

---

## Research Goals
- Identify which controls define **attack**, **sustain**, **body**, and **space**.
- Establish repeatable patch recipes for plucked, bowed, and prepared strings.
- Capture how the resonator bands emulate body size and material.
- Map interaction controls (Mix, Spread, S2 Ratio) to stereo and beating behavior.

---

## 10–15 Minute Orientation
1. Load a factory preset; play single notes across octaves.
2. Touch: move Click/Noise to compare pluck vs bow energy.
3. Vibration: adjust Decay and Damping for sustain/brightness.
4. Interaction: adjust Mix and Stereo Spread for width.
5. Resonance: increase Feedback and retune 2–3 bands.
6. Acoustics: add short room reverb and compare dry vs wet.

---

## Required File Coverage
```
Sakura/
├── 01-Learning/
│   ├── Concepts/
│   │   ├── overview.md
│   │   └── signal-flow.md
│   └── Quick-Reference/
│       ├── parameter-cheat-sheet.md
│       ├── hanami-process-explained.md
│       └── quick-start.md
├── 02-Data/
│   ├── parameters/sakura-params.json
│   ├── presets/sakura-preset-archetypes.json
│   └── rules/sakura-rules.json
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── creating-realistic-guitars.md
│   │   ├── bowed-string-synthesis.md
│   │   └── broken-piano-fx.md
│   └── by-instrument/
│       ├── koto-shamisen.md
│       └── prepared-strings.md
└── 04-Reference/
    └── string-interaction-physics.md
```

---

## A/B Test Log (Fill During Research)
| Test | Control | Setting A | Setting B | Audible Difference | Notes |
|---|---|---|---|---|---|
| 01 |  |  |  |  |  |
| 02 |  |  |  |  |  |
| 03 |  |  |  |  |  |
| 04 |  |  |  |  |  |
| 05 |  |  |  |  |  |
| 06 |  |  |  |  |  |
| 07 |  |  |  |  |  |
| 08 |  |  |  |  |  |
| 09 |  |  |  |  |  |
| 10 |  |  |  |  |  |
| 11 |  |  |  |  |  |
| 12 |  |  |  |  |  |
| 13 |  |  |  |  |  |
| 14 |  |  |  |  |  |
| 15 |  |  |  |  |  |
| 16 |  |  |  |  |  |
| 17 |  |  |  |  |  |
| 18 |  |  |  |  |  |
| 19 |  |  |  |  |  |
| 20 |  |  |  |  |  |
| 21 |  |  |  |  |  |
| 22 |  |  |  |  |  |
| 23 |  |  |  |  |  |
| 24 |  |  |  |  |  |
| 25 |  |  |  |  |  |
| 26 |  |  |  |  |  |
| 27 |  |  |  |  |  |
| 28 |  |  |  |  |  |
| 29 |  |  |  |  |  |
| 30 |  |  |  |  |  |
| 31 |  |  |  |  |  |
| 32 |  |  |  |  |  |
| 33 |  |  |  |  |  |
| 34 |  |  |  |  |  |
| 35 |  |  |  |  |  |
| 36 |  |  |  |  |  |
| 37 |  |  |  |  |  |
| 38 |  |  |  |  |  |
| 39 |  |  |  |  |  |
| 40 |  |  |  |  |  |
| 41 |  |  |  |  |  |
| 42 |  |  |  |  |  |
| 43 |  |  |  |  |  |
| 44 |  |  |  |  |  |
| 45 |  |  |  |  |  |
| 46 |  |  |  |  |  |
| 47 |  |  |  |  |  |
| 48 |  |  |  |  |  |
| 49 |  |  |  |  |  |
| 50 |  |  |  |  |  |
| 51 |  |  |  |  |  |
| 52 |  |  |  |  |  |
| 53 |  |  |  |  |  |
| 54 |  |  |  |  |  |
| 55 |  |  |  |  |  |
| 56 |  |  |  |  |  |
| 57 |  |  |  |  |  |
| 58 |  |  |  |  |  |
| 59 |  |  |  |  |  |
| 60 |  |  |  |  |  |

---

## Parameter Interaction Checklist
- Click/Noise vs Hi Cut brightness
- Decay vs Damping sustain profile
- S2 Ratio offset vs beating depth
- Resonator FB vs perceived body size
- Stereo Spread vs mono stability

---

## Common Pitfalls
- Excess feedback rings and masks attack.
- Wide spread causes mono collapse.
- Over-bright exciter masks body tone.

---

## Deliverable Expectations
Each file must include:
- Core explanation of the controls
- At least one workflow or experiment
- Troubleshooting notes
- Success criteria and validation steps

Last Updated: February 3, 2026

## Deep Dive: Building a mental model
Sakura behaves like an instrument builder. The exciter is your hand, the string is the vibrating medium, and the resonator is the body. If a patch is not working, always identify which of these three is wrong. The exciter defines the gesture, so fix the attack first. The string defines sustain and brightness, so fix decay and damping second. The resonator defines projection and body size, so fix body formants third. Effects are last.

## Deep Dive: What a "good" patch feels like
- The transient is clear and intentional (pluck, bow, strike, scrape).
- The sustain decays at a believable rate.
- The body resonance supports the tone without ringing.
- The patch responds to velocity or modulation in a musical way.

## A/B reference workflow
1. Load a reference sound (real instrument or a known synth patch).
2. Build Sakura with the same pitch range and articulation.
3. Match the attack shape first, then sustain, then body size.
4. Keep a notes log of each change and what it fixes.

## Patch note template (recommended)
- Goal and reference:
- Exciter settings:
- Hi Cut ADSR and cutoff:
- String decay and damping:
- Resonator bands and feedback:
- Modulation routes:
- Effects:
- What still feels wrong:

## Practice Lab
- Build three versions (pluck, bow, strike) and keep notes on the exact changes.
- For each, adjust only one parameter at a time and record the audible effect.
- Keep a short A/B checklist so you can reproduce the result later.

## Practice Lab
- Build three versions (pluck, bow, strike) and keep notes on the exact changes.
- For each, adjust only one parameter at a time and record the audible effect.
- Keep a short A/B checklist so you can reproduce the result later.

## Practice Lab
- Build three versions (pluck, bow, strike) and keep notes on the exact changes.
- For each, adjust only one parameter at a time and record the audible effect.
- Keep a short A/B checklist so you can reproduce the result later.

## Practice Lab
- Build three versions (pluck, bow, strike) and keep notes on the exact changes.
- For each, adjust only one parameter at a time and record the audible effect.
- Keep a short A/B checklist so you can reproduce the result later.

## Practice Lab
- Build three versions (pluck, bow, strike) and keep notes on the exact changes.
- For each, adjust only one parameter at a time and record the audible effect.
- Keep a short A/B checklist so you can reproduce the result later.

## Practice Lab
- Build three versions (pluck, bow, strike) and keep notes on the exact changes.
- For each, adjust only one parameter at a time and record the audible effect.
- Keep a short A/B checklist so you can reproduce the result later.

## Practice Lab
- Build three versions (pluck, bow, strike) and keep notes on the exact changes.
- For each, adjust only one parameter at a time and record the audible effect.
- Keep a short A/B checklist so you can reproduce the result later.

## Practice Lab
- Build three versions (pluck, bow, strike) and keep notes on the exact changes.
- For each, adjust only one parameter at a time and record the audible effect.
- Keep a short A/B checklist so you can reproduce the result later.

## Practice Lab
- Build three versions (pluck, bow, strike) and keep notes on the exact changes.
- For each, adjust only one parameter at a time and record the audible effect.
- Keep a short A/B checklist so you can reproduce the result later.

## Practice Lab
- Build three versions (pluck, bow, strike) and keep notes on the exact changes.
- For each, adjust only one parameter at a time and record the audible effect.
- Keep a short A/B checklist so you can reproduce the result later.

## Practice Lab
- Build three versions (pluck, bow, strike) and keep notes on the exact changes.
- For each, adjust only one parameter at a time and record the audible effect.
- Keep a short A/B checklist so you can reproduce the result later.

## Practice Lab
- Build three versions (pluck, bow, strike) and keep notes on the exact changes.
- For each, adjust only one parameter at a time and record the audible effect.
- Keep a short A/B checklist so you can reproduce the result later.

## Practice Lab
- Build three versions (pluck, bow, strike) and keep notes on the exact changes.
- For each, adjust only one parameter at a time and record the audible effect.
- Keep a short A/B checklist so you can reproduce the result later.

## Practice Lab
- Build three versions (pluck, bow, strike) and keep notes on the exact changes.
- For each, adjust only one parameter at a time and record the audible effect.
- Keep a short A/B checklist so you can reproduce the result later.

## Practice Lab
- Build three versions (pluck, bow, strike) and keep notes on the exact changes.
- For each, adjust only one parameter at a time and record the audible effect.
- Keep a short A/B checklist so you can reproduce the result later.

## Practice Lab
- Build three versions (pluck, bow, strike) and keep notes on the exact changes.
- For each, adjust only one parameter at a time and record the audible effect.
- Keep a short A/B checklist so you can reproduce the result later.

## Practice Lab
- Build three versions (pluck, bow, strike) and keep notes on the exact changes.
- For each, adjust only one parameter at a time and record the audible effect.
- Keep a short A/B checklist so you can reproduce the result later.

## Practice Lab
- Build three versions (pluck, bow, strike) and keep notes on the exact changes.
- For each, adjust only one parameter at a time and record the audible effect.
- Keep a short A/B checklist so you can reproduce the result later.

## Practice Lab
- Build three versions (pluck, bow, strike) and keep notes on the exact changes.
- For each, adjust only one parameter at a time and record the audible effect.
- Keep a short A/B checklist so you can reproduce the result later.

## Practice Lab
- Build three versions (pluck, bow, strike) and keep notes on the exact changes.
- For each, adjust only one parameter at a time and record the audible effect.
- Keep a short A/B checklist so you can reproduce the result later.

## Practice Lab
- Build three versions (pluck, bow, strike) and keep notes on the exact changes.
- For each, adjust only one parameter at a time and record the audible effect.
- Keep a short A/B checklist so you can reproduce the result later.
