# Core Techniques And Best Practices — Fruity Scratcher

## 8-12 Unique Techniques

### 1. **The Baby Scratch** (Foundation Technique)
**What:** Simple forward-backward platter movement  
**How:** Click and drag platter left-right rhythmically  
**Settings:** ACC 40-60%, SEN 50%, SPD 1.0x  
**Listen For:** Clean start/stop of sample without clicks  
**Pitfall:** Too high ACC = robotic; too low = muddy overlap  
**Fix:** Adjust ACC until it feels "elastic" but responsive  
[SRC: IL-MAN, Turntablism Guides]

---

### 2. **Tape Stop Effect** (Production Staple)
**What:** Gradual slowdown at end of phrase  
**How:** Automate SPD from 1.0x → 0.0x over 1-4 beats  
**Settings:** ACC 20-40% for smooth deceleration  
**Listen For:** Natural-sounding wind-down, no abrupt stops  
**Pitfall:** Forgetting to automate SPD *back* up for next section  
**Fix:** Use automation clips with clear start/end points  
[SRC: IL-MAN, Production Tutorials]

---

### 3. **Spin-Up Riser** (Build-Up Tool)
**What:** Gradual acceleration from stopped to full speed  
**How:** Automate SPD from 0.0x → 1.0x over 2-8 beats before drop  
**Settings:** ACC 30-50% for energetic ramp-up  
**Listen For:** Tension building, pitch rising smoothly  
**Pitfall:** Starting spin-up too late (sounds rushed)  
**Fix:** Place automation 4-8 beats before target drop point  
[SRC: Production Tutorials, EDM Techniques]

---

### 4. **Chirp Scratch** (Rhythmic Punctuation)
**What:** Quick forward-back-forward scratch pattern  
**How:** Rapid platter drag in "V" shape motion  
**Settings:** ACC 60-80% (needs responsiveness), SEN 60-70%  
**Listen For:** Distinct "chirp" sound on the return drag  
**Pitfall:** Unclear start point = muddy chirp  
**Fix:** Use samples with sharp transients (snare hits, vocal "Ahs")  
[SRC: Turntablism Guides, DJ Technique Manuals]

---

### 5. **Reverse Stutter** (Glitch Effect)
**What:** Rapid forward-reverse toggling for glitchy texture  
**How:** Toggle Reverse button while scratching OR automate Reverse  
**Settings:** ACC 70-90% (tight response), use short samples  
**Listen For:** Stuttering, broken-up texture  
**Pitfall:** Sample too long = incoherent noise  
**Fix:** Use 0.5-2 second samples max; focus on rhythmic transients  
[SRC: Electronic Music Production, Glitch Techniques]

---

### 6. **Transformer Scratch** (Advanced Rhythm)
**What:** Cutting sample in/out with Hold button  
**How:** Drag platter while tapping Hold rhythmically  
**Settings:** ACC 50%, precise Hold timing  
**Listen For:** Choppy, rhythmic sample cuts  
**Pitfall:** Hold timing not synced to tempo = off-beat feel  
**Fix:** Practice with metronome; use step automation for Hold  
[SRC: Turntablism Guides, DJ Q-Bert Techniques]

---

### 7. **DVS Integration** (Live Performance)
**What:** Control Scratcher with real turntable + timecode vinyl  
**How:** Route turntable output to FL audio input, enable DVS mode  
**Settings:** Low buffer (128 samples), SEN matched to turntable weight  
**Listen For:** Zero latency between physical touch and sound  
**Pitfall:** High latency = unplayable lag  
**Fix:** Optimize audio driver settings, use ASIO  
[SRC: IL-MAN DVS Section, Live Performance Guides]

---

### 8. **MIDI Jog Wheel Mapping** (Controller Workflow)
**What:** Map hardware jog wheel to Speed parameter  
**How:** Right-click SPD → "Link to controller" → move jog wheel  
**Settings:** SEN adjusted to wheel resistance  
**Listen For:** Smooth speed changes matching physical wheel movement  
**Pitfall:** Jog wheel jumps = sudden pitch shifts  
**Fix:** Use relative mode on controller (if available) or smooth CC values  
[SRC: IL-MAN MIDI, Controller Mapping Guides]

---

### 9. **Multi-Sample Switching** (Live Scratch Solo)
**What:** Load different samples on different MIDI notes  
**How:** Use multiple Scratcher instances OR switch samples via automation  
**Settings:** Keep ACC/SEN consistent across samples for muscle memory  
**Listen For:** Seamless transition between scratch samples  
**Pitfall:** Samples at different volumes = uneven performance  
**Fix:** Normalize samples before loading; use mixer faders  
[SRC: Live Performance Guides, DJ Workflow Tips]

---

### 10. **Automation Curve Shapes** (Tape Stop Artistry)
**What:** Different SPD automation curves = different deceleration feels  
**How:** Experiment with linear, exponential, S-curve automation  
**Settings:** 
  - Linear = constant deceleration
  - Exponential = fast start, slow end
  - S-curve = natural "braking" feel  
**Listen For:** Realism vs stylization in the slowdown  
**Pitfall:** Wrong curve = unnatural physics  
**Fix:** Reference real tape stops; match curve to source material energy  
[SRC: Production Tutorials, Automation Design Guides]

---

### 11. **Sensitivity as Performance Tool** (Dynamic Scratching)
**What:** Automate SEN to change scratch "difficulty" mid-performance  
**How:** Automate SEN from 30% (easy) to 80% (touchy) during intense sections  
**Settings:** Requires skill—high SEN = hair-trigger scratching  
**Listen For:** Intentional control changes = expressive performance variation  
**Pitfall:** Accidental SEN changes = chaos  
**Fix:** Use sparingly; practice with stable SEN first  
[SRC: Advanced Turntablism, [UNVERIFIED: Creative SEN automation—experimental technique]]

---

### 12. **Comb-Filtered Scratches** (Textural Effect)
**What:** Scratch a sample with strong harmonic content for robotic tone  
**How:** Use sustained synth pad or vowel sound as scratch source  
**Settings:** ACC 50%, slow scratch speed to emphasize pitch bends  
**Listen For:** Formant-like resonances, vocal-esque quality  
**Pitfall:** Non-harmonic samples = just sounds like noise  
**Fix:** Use tonal sources: synth pads, sung vowels, clean guitar notes  
[SRC: Sound Design Techniques, Experimental Scratching]

---

## What to Watch In Meters

- **Waveform Display:** Verify playback position is moving smoothly
- **Mixer Peak Meter:** Watch for clipping during aggressive scratches
- **Correlation Meter:** If scratching stereo samples, check for phase issues
- **MIDI Activity:** Confirm MIDI controller input is being received

[SRC: IL-MAN, FL Studio Metering Guidelines]

---

## Common Pitfalls + Fixes

| **Pitfall** | **Symptom** | **Fix** |
|-------------|-------------|---------|
| **Clicking at scratch start** | Audible pops | Increase ACC slightly OR use samples with smooth attacks |
| **Scratch feels sluggish** | Delayed response | Increase ACC and/or SEN |
| **Scratch feels too touchy** | Uncontrollable | Decrease SEN; practice with lower values first |
| **Tape stop sounds abrupt** | Not smooth | Lower ACC; use curved automation instead of linear |
| **Sample cuts off mid-scratch** | Truncation | Check sample length; ensure it's long enough for your scratch pattern |
| **DVS latency too high** | Lag between turntable and sound | Lower buffer size to 128 samples; use ASIO driver |
| **MIDI jog wheel jumps** | Sudden pitch changes | Use relative mode OR filter CC data with smooth plugin |

[SRC: IL-MAN Troubleshooting, Community Forums]

---

## Hip-Hop / R&B Best Practices

### **Boom-Bap Context:**
- **Use short vocal chops:** "Ahh", "Fresh", "Yeah"—1-2 seconds max
- **Scratch every 4-8 bars:** Don't overuse; let beats breathe
- **Match scratch timing to snare:** Scratch on 2 and 4 for groove alignment
- **EQ the scratch channel:** Cut lows below 150Hz to avoid mud
- [SRC: Hip-Hop Production Guides]

### **Trap / Modern Rap:**
- **Tape stops on transitions:** End of verse → pre-chorus
- **Spin-ups before drops:** 2-4 beats of SPD automation before 808 hits
- **Glitch scratches on hi-hats:** Experimental reverse stutters for texture
- [SRC: Modern Production Analysis]

### **R&B / Pop-Hip-Hop:**
- **Subtle on vocals:** Use low ACC (20-30%) for gentle tape effects
- **Vibrato scratches:** Rapid small SPD changes = warble/vibrato
- **Automate out of the way:** Don't compete with lead vocals; use in breaks
- [SRC: R&B Production Techniques]

---

## Advanced Workflow Tips

1. **Pre-Render Scratches for CPU Relief:** Record scratch solo to audio, commit to arrangement
2. **Use Color-Coding:** Different scratch channels = different colors in mixer for organization
3. **Save Presets by Genre:** "Boom-Bap Scratch" vs "Trap Tape Stop" presets
4. **Practice with Metronome:** Scratching is rhythmic—sync to grid first, humanize later
5. **Reference Real Scratches:** Study DJ Qbert, DJ Shadow for authentic technique

[SRC: Production Best Practices, FL Studio Workflow Guides]

---

## Sources

- **[IL-MAN]** Image-Line Fruity Scratcher Official Manual
- **[Turntablism Guides]** DJ technique and scratch pattern documentation
- **[Production Tutorials]** Tape stop and spin-up effect workflows
- **[EDM Techniques]** Build-up and riser creation methods
- **[Electronic Music Production]** Glitch and stutter effect techniques
- **[DJ Technique Manuals]** Advanced scratch patterns (Chirp, Transformer, etc.)
- **[DJ Q-Bert Techniques]** Professional turntablism methods
- **[Live Performance Guides]** DVS and controller integration workflows
- **[Controller Mapping Guides]** MIDI hardware integration best practices
- **[Automation Design Guides]** Effective automation curve design
- **[Hip-Hop Production Guides]** Genre-specific scratch techniques
- **[Modern Production Analysis]** Contemporary scratch usage patterns
- **[R&B Production Techniques]** Modern R&B scratch applications
- **[Sound Design Techniques]** Experimental scratching methods
- **[FL Studio Metering Guidelines]** Signal monitoring best practices
- **[FL Studio Workflow Guides]** DAW integration and optimization
- **[UNVERIFIED]** Creative SEN automation as performance tool—experimental technique requiring validation
