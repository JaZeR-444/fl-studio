# Sakura Overview and Modeling Concepts

## Identity
Sakura is a physical modeling string instrument built around a five-stage process (Touch, Vibration, Interaction, Resonance, Acoustics). Unlike sample-based instruments, it derives tone from simulated string behavior and body resonances.

---

## Five-Stage Model
1. **Touch** – exciter impulse (pluck/bow/scrape) defines articulation.
2. **Vibration** – dual-string model shapes sustain and pitch stability.
3. **Interaction** – string mixing, panning, and envelope shaping.
4. **Resonance** – 8-band resonator models instrument body.
5. **Acoustics** – chorus/delay/reverb adds space.

---

## Key Concepts
- **Exciter dominance:** attack character is primarily determined by exciter settings.
- **Dual-string beating:** small S2 Ratio offsets create natural motion.
- **Body resonance:** feedback + band tuning simulate physical body size.

---

## Deep Research Prompts
- How does reflection phase affect metallic vs warm tone?
- Which resonator bands correspond to guitar vs violin body size?
- At what Damping values does sustain shift from natural to synthetic?

---

## Structured Observation Template
| Stage | Control | Change | Expected | Actual | Notes |
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

## Validation Checklist
- Can you recreate a plucked guitar with realistic decay?
- Can you create a bowed string with smooth sustain?
- Can you create a prepared string with unstable resonance?

Last Updated: February 3, 2026

## Deep Dive: Energy transfer
Sakura is about energy transfer. The exciter adds energy. The string holds and releases it. The resonator shapes it into a recognizable body. Any patch that feels wrong usually has too much energy at the wrong stage or not enough energy in the correct stage. Use this lens to debug quickly.

## Deep Dive: Damping as tone control
Damping is not just volume control. It is your main brightness and realism knob. If you want a brighter instrument, reduce damping or lower damping sharpness. If you want a darker instrument, increase damping or raise sharpness. Pair this with the hi-cut envelope so the brightness changes over time.

## Interaction tricks
- Slightly detune String 2 (S2 Ratio) for natural beating.
- Increase spread slowly and check mono often.
- Add minimal saturation only after the attack feels correct.

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
