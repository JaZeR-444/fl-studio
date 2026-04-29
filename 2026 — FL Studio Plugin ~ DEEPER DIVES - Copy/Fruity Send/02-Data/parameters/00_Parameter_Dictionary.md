# Parameter Dictionary - Fruity Send

## Overview

Fruity Send is a utility plugin for routing audio to different mixer tracks (send channels). It's a simple but essential tool for parallel processing, effect sends, and creative routing.

---

## Core Parameters

### Send Level
**Type:** Slider (0% to 100%)  
**Default:** 100%  
**Range:** 0% (silent) to 100% (full level)

**What It Does:**
Controls how much signal is sent to the destination track.

**Usage:**
- 100%: Full signal sent to destination
- 50%: Half the signal level sent
- 0%: No signal sent (effectively bypasses the send)

**Common Settings:**
- **Parallel Compression:** 30-50% (blend compressed with dry)
- **Reverb Send:** 20-40% (add space without drowning)
- **Delay Send:** 10-30% (subtle repeats)
- **Heavy Effect:** 50-100% (prominent effect)

**Tips:**
- Start low and increase to taste
- Too high can make mix muddy
- Use automation for dynamic sends

---

### Send To (Destination Track)
**Type:** Dropdown/Selector  
**Options:** Any available mixer track (1-125)

**What It Does:**
Selects which mixer track receives the sent signal.

**Usage:**
- Route to track with reverb
- Route to track with delay
- Route to parallel compression bus
- Route to creative effect chain

**Common Configurations:**
- **Send 1:** Reverb bus
- **Send 2:** Delay bus
- **Send 3:** Parallel compression
- **Send 4:** Creative effects

**Tips:**
- Name your destination tracks clearly
- Organize sends consistently across projects
- Use color coding for send destinations

---

### Dry/Wet Mix (if applicable)
**Note:** Fruity Send typically sends at 100% wet by default. The "mix" is controlled by the send level and the destination track's fader.

**Workflow:**
- Fruity Send sends signal to destination
- Destination track processes with effect
- Destination track fader controls effect level in mix
- Source track continues with dry signal

---

### Pan (Send Pan)
**Type:** Knob (-100% Left to +100% Right)  
**Default:** Center (0%)

**What It Does:**
Pans the sent signal before it reaches the destination.

**Usage:**
- Send left to one effect, right to another
- Create stereo-separated effects
- Experimental routing techniques

**Common Settings:**
- **Center (0%):** Standard send (most common)
- **Hard Left/Right:** Stereo effect separation
- **Slight Pan:** Subtle stereo widening

**Tips:**
- Usually keep at center for normal use
- Creative panning for unique effects
- Be careful with mono compatibility

---

### Volume (Pre-Send Level)
**Type:** Knob  
**Default:** 0 dB (unity gain)

**What It Does:**
Adjusts the level of the signal before it's sent to the destination.

**Usage:**
- Boost quiet signals before send
- Reduce hot signals to prevent clipping
- Match levels for consistent processing

**Common Settings:**
- **0 dB:** Unity gain (no change)
- **-6 to -3 dB:** Subtle reduction
- **+3 to +6 dB:** Boost for more effect

**Tips:**
- Watch levels on destination track
- Avoid clipping the effect processor
- Use gain staging principles

---

## Additional Controls

### Enable/Bypass
**Type:** On/Off Switch

**What It Does:**
Enables or disables the send without removing the plugin.

**Usage:**
- Quick A/B comparison
- Disable send during certain sections
- Troubleshooting signal flow

---

### Mute
**Type:** Button

**What It Does:**
Silences the send temporarily.

**Usage:**
- Similar to bypass
- Quick muting for testing

---

## Advanced Features

### Pre/Post Fader
**Options:** Pre-Fader / Post-Fader

**What It Does:**
Determines when in the signal chain the send occurs.

**Pre-Fader:**
- Send happens BEFORE the channel fader
- Send level independent of channel volume
- Use for reverb/delay (consistent effect regardless of instrument level)

**Post-Fader:**
- Send happens AFTER the channel fader
- Send level follows channel volume changes
- Use when effect should scale with instrument level

**Common Usage:**
- **Reverb/Delay:** Pre-fader (consistent space)
- **Parallel Compression:** Post-fader (follows dynamics)
- **Creative FX:** Depends on desired behavior

---

## Parameter Interaction

### Send Level + Destination Fader
**Relationship:** Both control overall effect amount

**Workflow:**
1. Set Send Level (how much signal goes to effect)
2. Set Destination Fader (how much processed signal returns to mix)
3. Balance for desired effect intensity

**Example:**
- Send Level: 50%
- Destination Fader: -6 dB
- Result: Subtle effect blend

---

### Volume + Send Level
**Relationship:** Combined gain staging

**Workflow:**
1. Volume adjusts signal before send
2. Send Level controls amount sent
3. Together determine level hitting the effect

**Example:**
- Volume: +3 dB (boost quiet signal)
- Send Level: 30% (moderate send)
- Result: Boosted signal with controlled send amount

---

## Parameter Cheat Sheet

| Parameter | Typical Range | Purpose | Common Use |
|-----------|---------------|---------|------------|
| **Send Level** | 20-50% | Effect amount | Reverb, Delay |
| **Send To** | Track 10-20 | Destination | Effect buses |
| **Pan** | Center (0%) | Stereo position | Usually centered |
| **Volume** | 0 dB | Pre-send gain | Level matching |
| **Pre/Post** | Pre-Fader | Send timing | Consistent FX |

---

## Common Parameter Combinations

### Subtle Reverb Send
- Send Level: 20-30%
- Send To: Reverb bus
- Pre-Fader: ON
- Volume: 0 dB

### Parallel Compression
- Send Level: 50-100%
- Send To: Compression bus
- Post-Fader: ON
- Volume: 0 dB

### Creative Delay
- Send Level: 30-50%
- Send To: Delay bus
- Pre-Fader: ON
- Volume: +3 dB (for more delay presence)

### Heavy Effect Send
- Send Level: 80-100%
- Send To: Effect bus
- Pan: Center or creative
- Volume: Adjust as needed

---

## The Bottom Line

**Fruity Send is all about routing and level control.** Send Level controls how much signal goes to the destination, Send To selects where it goes, Pre/Post Fader determines when the send happens, and Volume adjusts the level before sending. Use low send levels (20-40%) for subtle effects like reverb, higher levels (50-100%) for parallel compression or heavy effects. Pre-fader sends keep effects consistent regardless of track volume, post-fader sends follow the track's dynamics.

**Essential Combo:** Send Level + Destination Fader = Total effect amount in mix.
