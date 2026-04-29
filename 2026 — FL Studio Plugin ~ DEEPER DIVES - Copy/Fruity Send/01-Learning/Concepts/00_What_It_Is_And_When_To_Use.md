# Fruity Send: What It Is And When To Use

## 60-Second Mental Model

Fruity Send is a **routing extraction tool** that pulls audio from anywhere in your mixer's effect chain and sends it to another track. Unlike standard mixer sends (which happen *after* all effects and the fader), Fruity Send lets you **route from the exact plugin slot** where you place it—making it the only way to achieve true pre-fader sends and mid-chain signal extraction in FL Studio. [SRC: IL-MAN]

**Core concept:** Place Fruity Send at slot position X → it grabs audio at that exact point → sends copy to target track → optionally continues original signal down the chain. Perfect for parallel compression, pre-fader reverb sends, DI extraction from processed signals, and creative routing workflows. [SRC: IL-MAN]

---

## Plugin Identity

**What it is:**
- Insert-position signal router (taps audio from specific effect chain location)
- Pre-fader send enabler (unlike standard mixer sends which are post-fader)
- Parallel processing facilitator (dry/wet blending without Patcher complexity)
- Signal extraction utility (grab clean signal before heavy processing)

**What it is NOT:**
- Not a standard send/return (those are at bottom of mixer, post-everything)
- Not an audio effect (doesn't process sound, only routes it)
- Not a replacement for Patcher (Patcher offers more complex routing)
- Not a gain plugin (use Fruity Balance for simple level control)

---

## Where It Fits in FL Studio

**Signal chain position:**
1. **Insert slot routing:** Load in any mixer track insert slot (1-10)
2. **Chain extraction:** Signal at that exact slot position gets sent to target
3. **Dry continuation:** Original signal can continue down rest of chain (or stop)
4. **Target routing:** Routed signal appears on target track's input

**Mixer workflow prerequisite:**
- **CRITICAL:** Target track MUST be sidechained to source track first [SRC: IL-MAN]
- Right-click target track's routing button on source track → "Sidechain to this track"
- Only then will target appear in Fruity Send's dropdown menu

---

## When to Use Fruity Send

### ✅ USE IT FOR:

**1. Pre-Fader Sends (Reverb/Delay Independence)**
- Send vocals to reverb track from slot 1 (before EQ, compression, fader)
- Fade vocal track to silence while reverb tail stays at full volume
- Essential for professional fade-outs and automation control
- **Hip-hop use:** Vocal throws that sustain when main vocal ducks [SRC: REPUTABLE]

**2. Parallel Processing Without Patcher**
- Slot 1: Fruity Send (Dry=100%, send to Parallel Comp track)
- Slot 2-10: Continue with normal effects
- Parallel track: Heavy compression, blend with original
- **Hip-hop use:** NY-style drum bus compression without destroying transients

**3. Mid-Chain Signal Extraction**
- Guitar: Slot 1 (Amp Sim) → Slot 2 (Fruity Send, Dry=0%) → Slot 3 (Reverb)
- Fruity Send grabs post-amp, pre-reverb signal for re-routing
- **Use case:** Send clean-ish guitar to different reverb than main chain uses

**4. DI / Clean Signal Preservation**
- Bass: Slot 1 (Fruity Send to "Clean Bass" track) → Slot 2 (heavy distortion)
- "Clean Bass" track receives unprocessed bass for parallel blending
- **Hip-hop use:** Preserve 808 sub while destroying mids/highs with saturation

**5. Creative Routing / Send Automation**
- Automate "Send To" destination for dynamic routing changes [UNVERIFIED: test if "Send To" parameter is automatable]
- Automate Volume knob for "throw" effects (sudden send spikes)
- **Hip-hop use:** Automated vocal throws to delay on beat hits

---

### ❌ DON'T USE IT FOR:

**1. Standard Reverb/Delay Sends**
- Use **mixer's built-in sends** (bottom of mixer channels) for post-fader sends
- Fruity Send adds complexity unless you specifically need pre-fader or mid-chain routing
- **Exception:** When you need send to stay constant during fader automation

**2. Simple Gain Adjustment**
- Use **Fruity Balance** for straightforward volume control
- Fruity Send is routing-focused, not a gain utility

**3. Complex Multi-Path Routing**
- Use **Patcher** for sophisticated routing scenarios (multiple splits, merges, feedback)
- Fruity Send handles one-directional, single-destination routing only

**4. Effects Processing**
- Fruity Send does NOT color/process audio (it's a pure router)
- Use actual FX plugins for tone shaping

---

## Typical Roles in a Session

### Role 1: **Pre-Fader Reverb Send**
Vocal track fades out with automation, but reverb tail stays loud for smooth transition.

**Chain:**
```
Vocal Track:
  Slot 1: Fruity Send (→ Reverb Track, Dry=100%, Volume=80%)
  Slot 2: EQ
  Slot 3: Compressor
  Fader: Automated to 0dB → -∞ dB

Reverb Track:
  Slot 1: Fruity Reeverb 2
  Fader: Stays at 0dB (receives constant send from Slot 1)
```

### Role 2: **Parallel Drum Compression**
Drums hit Fruity Send in slot 1 → routed to heavy compression track → blended back for punch + density.

**Chain:**
```
Drum Bus:
  Slot 1: Fruity Send (→ Parallel Drum Comp, Dry=100%, Volume=100%)
  Slot 2: Light EQ
  
Parallel Drum Comp Track:
  Slot 1: Fruity Compressor (Ratio 8:1, Threshold -20dB, fast attack/release)
  Fader: -6dB to -12dB (blend to taste)
```

### Role 3: **Clean DI Extraction**
Bass goes through heavy distortion on main track, but clean signal is extracted beforehand for sub preservation.

**Chain:**
```
Bass Track:
  Slot 1: Fruity Send (→ Clean Bass DI, Dry=100%, Volume=100%)
  Slot 2: Fruity Waveshaper (heavy saturation)
  Slot 3: High-pass filter at 80Hz
  
Clean Bass DI Track:
  Slot 1: Low-pass filter at 100Hz (keep only sub)
  Fader: Blend to preserve sub-bass presence
```

### Role 4: **Vocal Throw to Delay**
Automate Fruity Send volume to create rhythmic vocal throws to delay track on specific beats.

**Chain:**
```
Vocal Track:
  Slot 1: Fruity Send (→ Delay Throw Track, Dry=100%, Volume=automated)
  
Delay Throw Track:
  Slot 1: Fruity Delay 3 (1/4 note, feedback=40%, mix=100%)
  
Automation:
  Bar 8, Beat 4: Fruity Send Volume = 0% → 100% (instant throw)
  Bar 9, Beat 1: Volume = 100% → 0% (return to normal)
```

---

## Hip-Hop/R&B Context

### Why Hip-Hop/R&B Producers Need This:

**Parallel Saturation:** Drive 808s hard on parallel track while keeping clean sub intact (Metro Boomin/Southside technique)
**Vocal Throws:** Automated send spikes to delay/reverb for rhythmic ad-lib effects (modern trap/drill)
**Pre-Fader Automation:** Fade vocals out while reverb sustains (smooth R&B transitions)
**Bus Routing:** Route multiple elements to shared processing buses without Patcher (organized mixing)

### Modern Hip-Hop/R&B Applications:

1. **Trap/Drill:** Parallel saturation on 808s (clean sub + distorted harmonics)
2. **Boom-Bap:** NY compression on drum bus via parallel routing
3. **R&B/Pop-Hip-Hop:** Pre-fader reverb sends for smooth vocal automation
4. **Lo-Fi Hip-Hop:** Extract clean signal before lo-fi degradation for selective processing

---

## Quick Decision Tree

**Need reverb to stay loud when track fades?** → ✅ Use Fruity Send (pre-fader send)
**Need parallel compression without Patcher?** → ✅ Use Fruity Send (slot 1, Dry=100%)
**Need to grab signal before heavy FX?** → ✅ Use Fruity Send (before FX slot, Dry=100%)
**Need simple post-fader reverb send?** → ❌ Use mixer's standard sends
**Need complex multi-routing?** → ❌ Use Patcher
**Need to process audio?** → ❌ Use actual FX plugins

---

## Technical Requirements

**CPU:** Negligible (pure routing, no processing)
**Latency:** 0 samples (real-time routing)
**Routing setup:** Target track must be sidechained to source track FIRST
**Automation:** Volume and Dry knobs are automatable; "Send To" may not be [UNVERIFIED]

**How to verify sidechain requirement:**
1. Create two mixer tracks (e.g., Track 1 = source, Track 2 = target)
2. Right-click Track 2's routing button on Track 1's routing panel
3. Select "Sidechain to this track"
4. Load Fruity Send on Track 1 → Track 2 should now appear in "Send To" dropdown
5. If dropdown is empty, sidechain connection is missing

---

## Common Beginner Misconceptions

**Myth 1:** "Fruity Send is the same as the mixer send knobs"
**Reality:** Mixer sends are post-fader, post-FX. Fruity Send routes from exact slot position (pre-fader capable).

**Myth 2:** "I can send to any track"
**Reality:** Target must be sidechained to source first. FL Studio enforces this to prevent feedback loops. [SRC: IL-MAN]

**Myth 3:** "Dry=0% means no audio output"
**Reality:** Dry=0% stops original signal from continuing down the chain, but send still works. Useful for "extract and replace" routing.

**Myth 4:** "Fruity Send processes the audio"
**Reality:** It's a pure router. No EQ, no color, no nothing. What goes in = what goes out (to both dry and send).

**Myth 5:** "I need Fruity Send for all sends"
**Reality:** Use standard mixer sends for 90% of cases (post-fader reverb/delay). Fruity Send is for special routing needs.

---

## Version Notes
- **FL Studio version:** Works in all modern FL versions (20+)
- **Known limitations:** Can only send to one destination per instance (use multiple instances for multi-send)
- **Sidechain requirement:** Mandatory for routing (prevents feedback loops)

---

**Last Updated:** 2026-02-03  
**Source Priority:** [IL-MAN], [REPUTABLE]  
**Verification Status:** Core routing verified, automation capabilities require testing
