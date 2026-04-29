# Fruity Delay 2: The Complete Parameter Encyclopedia (Expert Edition)

**Plugin Architecture:** Step-Sequenced Digital Buffer Delay
**Internal Logic:** Integer-Based Clock Multiplication
**Target Genres:** Moody R&B, Upbeat Rap, Neo-Soul, Boom Bap

---

## 1. THE TIME MODULE (The Rhythm Clock)
Fruity Delay 2 uses a unique "Step" based interface that is hard-wired to the FL Studio Playlist.

### 1.1 Time Knob (The Main Clock)
- **Technical Range:** 0 to 16 Steps (1 Full Bar).
- **The "Whole Number" Logic:** 
    - **4:00** = 1/4 Note (The Standard Echo).
    - **2:00** = 1/8 Note (The High-Energy Bounce).
    - **1:00** = 1/16 Note (The Rhythmic Stutter).
- **Master Tip:** For "Upbeat" Hip-Hop, set the time to **3:00** (Dotted 1/8 note). This creates a "swing" rhythm that perfectly matches triplets.

### 1.2 Offset (The Psychoacoustic Widener)
- **Technical Logic:** Delays the Right channel relative to the Left.
- **Physics of Width:** 
    - **0%:** Pure Mono. Both channels hit at the same time.
    - **10-30%:** The "Haas" Zone. Adds massive width to vocals or guitars.
    - **100%:** Full "Ping-Pong." The first repeat is in the Left, the second in the Right.
- **R&B Hack:** Set Offset to **15%** and Time to **0:00**. This makes a mono vocal sound like it was recorded in a wide, high-end studio.

---

## 2. THE FEEDBACK MODULE (The Tail)
### 2.1 Feedback (FB) Knob
- **Technical Range:** 0% to 100%.
- **Digital Safety:** This plugin is strictly linear. If you set Feedback to 100%, the sound will loop at full volume forever. 
- **The "Fade" Rule:** For a professional "Moody" fade-out, set Feedback to 65%. The repeats will gracefully disappear over 4-5 bars.

---

## 3. THE FILTER SECTION (Tonal Sculpting)
Fruity Delay 2 includes a specialized filter inside the feedback loop.

### 3.1 Cut (Cutoff)
- **Type:** 12dB/oct Low-Pass Filter.
- **Internal Math:** Every time the sound repeats, it passes through the filter again.
- **The "Dub" Effect:** Set the Cutoff to 50%. The first repeat will be slightly muffled, the second very muffled, and the third almost silent. This is the hallmark of professional "Dark" Hip-Hop echoes.

### 3.2 Resonance (Res)
- **Behavior:** Boosts the volume at the cutoff point.
- **Creative Use:** Use high resonance on a dark filter to create a "Whistling" echo that adds a psychedelic character to a melodic lead.

---

## 4. THE PHASE MODULE (Spatial Logic)
### 4.1 Invert (Inv) Button
- **Technical Logic:** Inverts the polarity of the wet signal (Left and/or Right).
- **Physics of Inversion:** This causes specific frequencies to cancel out when mixed with the dry signal.
- **Master Strategy:** If your widening (Offset) makes the vocal sound "thin" or "nasal," toggle the **Inv** button. This shifts the phase interference, often restoring the "Body" of the vocal.

---

## 5. MIX & OUTPUT
### 5.1 Volume (Wet)
- **Linear Scaling:** Controls the amplitude of the repeats.
- **The 100% Wet Rule:** Always set this to 100% if the plugin is on a **Send track**. Set to 30-50% if it is a direct **Insert** on the instrument track.

---

## 6. PERFORMANCE & OPTIMIZATION
### 6.1 Zero Latency Architecture
- **Technical Fact:** Fruity Delay 2 reports 0 samples of latency. It is ideal for live performance and tracking.
- **Memory Footprint:** Uses a very small ring-buffer in RAM (~2MB). It is the most "CPU-Safe" delay in FL Studio.

---

## 7. HIDDEN MENUS & SHORTCUTS
- **Right-Click Time Knob:** Allows you to 'Set' specific values. 
- **Automation Formula:** Link the Time knob to a peak controller with an inverted formula (`1-Input`) to create a delay that speeds up as the sound gets quieter.

---

## 8. TROUBLESHOOTING
- **Issue:** "The delay sounds hollow or thin."
- **Fix:** You are experiencing **Phase Cancellation**. Toggle the **Inv** switch or change the **Offset** by ±2%.
- **Issue:** "I can't get triplets."
- **Fix:** Set the Time knob to **2:66** or use the **Sync** options in the wrapper menu.

---

## 9. SUMMARY: THE "VIBE" PRESETS
- **THE "WEEKND" SLAP:** Time 1:00, Offset 10%, Feedback 0%, Cutoff 2kHz. (Intimate, wide, dark).
- **THE "TRAVIS" PING-PONG:** Time 4:00, Offset 100%, Feedback 75%, Cutoff 5kHz. (Wide rhythmic bounce).
- **THE "DRE" 1/4 ECHO:** Time 4:00, Offset 0%, Feedback 40%, Cutoff 8kHz. (Clean, rhythmic, solid).

---
**Document Version:** 2.5 (Encyclopedia Master)
**Status:** COMPLETE RESEARCH
**Keywords:** Fruity Delay 2, Haas Effect, Step Sequencer, Feedback Filter, Phase Inversion, R&B Sound Design.