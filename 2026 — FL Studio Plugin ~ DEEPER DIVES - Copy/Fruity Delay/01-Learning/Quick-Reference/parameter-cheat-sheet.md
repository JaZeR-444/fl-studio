# Fruity Delay: The Complete Parameter Encyclopedia (Expert Edition)

**Plugin Architecture:** Foundational Digital Buffer Delay
**Internal Logic:** Sample-Accurate Memory Pointer Management
**Target Genres:** Clean R&B, Boom Bap, Glitch-Hop, Industrial Rap

---

## 1. THE TEMPORAL ENGINE (Memory Control)
The original Fruity Delay uses a discrete memory-addressing system designed for absolute rhythmic stability.

### 1.1 Time Knob (The Step Clock)
- **Technical Range:** 0 to 16 Units (1 Full Bar).
- **The Step-Based Interface:** Unlike milliseconds, this knob moves in **Step Units**. 
- **The Calculation:** 1 Unit = 4 Steps in the FL Studio Step Sequencer.
    - **1:00** = 4 Steps (1/4 Note).
    - **0:50** = 2 Steps (1/8 Note).
- **Master Strategy:** For "Upbeat" rhythmic hi-hats, set Time to **0:25** (1/16 note). This adds a "shadow" to every hat hit that makes the rhythm feel double-timed and high-energy.

### 1.2 OFS (Stereo Offset)
- **Technical Logic:** Delays the Right channel relative to the Left.
- **Physics of Width:** 
    - **0%:** Perfect Mono. 
    - **1-5%:** Psychoacoustic Widener. (The Haas Effect zone).
    - **100%:** Maximum Offset. 
- **R&B Secret:** Set OFS to **5%** and Time to **0:00**. This makes a mono synth lead sound wide and expensive without any "muddy" reverb tail.

---

## 2. THE REGENERATION MODULE (The Feedback)
### 2.1 FB (Feedback) Knob
- **Technical Range:** 0% to 100%.
- **Linear Logic:** Every repeat is a direct volume-percentage of the previous repeat.
    - **50%:** Each echo is half the volume of the previous one.
    - **100%:** The echo repeats at full volume forever. 
- **The "Safety" Tip:** Because this is a digital plugin, 100% feedback will never "saturate" or "distort" on its own—it will stay perfectly clean until it hits your Master Limiter.

---

## 3. THE MIX & GAIN MODULE (Output)
### 3.1 VOL (Wet Level)
- **Linear Scaling:** Controls the amplitude of the delayed signal.
- **The "Insert" Rule:** If you put this directly on a vocal track, set VOL to 20-30%.
- **The "Send" Rule:** If you use a mixer Send track, set VOL to 100% and use the Mixer Send slider to control the mood.

---

## 4. PERFORMANCE & VISUALIZATION
### 4.1 The Step-Sync Indicator
- **Feedback:** The numbers shown on the knob correspond exactly to the bar count in the Playlist. 
- **Zero Latency:** This foundational plugin is the lightest in FL Studio. It uses zero CPU cycles when idle and has **0 samples** of PDC latency. It is the "Safest" plugin to use during a live-streamed production session.

---

## 5. HIDDEN WRAPPER ROUTING (The Expert Trick)
### 5.1 External Filtering
Because the original Fruity Delay has no internal filters, professional producers use the **Mixer Chain** to create their own.
- **Workflow:** 
    1. Insert Fruity Delay in Slot 1.
    2. Insert **Fruity Parametric EQ 2** in Slot 2.
    3. Use the EQ to cut the highs/lows of the delay.
- **The Benefit:** This gives you far more control than the limited filters in Delay 2 or 3. You can use a surgical EQ to make the delay "wrap around" your lead vocal.

---

## 6. TROUBLESHOOTING THE CLICKS
- **Issue:** "I hear a click every time I change the delay time."
- **The Logic:** This is because the read-head is jumping to a new part of the audio memory instantly.
- **The Solution:** Automate the **VOL** knob to go to 0% for a few milliseconds while you change the **Time** knob, then bring it back up. This is how pro "Glitch" engineers perform clean rhythmic switches.

---

## 7. SUMMARY: THE "VIBE" PRESETS
- **THE "BOOM BAP" SHADOW:** Time 0:25, OFS 0%, FB 10%, VOL 15%. (Adds subtle timing weight to snares).
- **THE "WIDE SOUL" LEAD:** Time 0:00, OFS 10%, FB 0%, VOL 100% (Mix 50% in Mixer).
- **THE "RHYTHMIC STUTTER":** Time 0:50, OFS 0%, FB 60%, VOL 40%. (Classic upbeat echo).

---
**Document Version:** 2.5 (Encyclopedia Master)
**Status:** COMPLETE RESEARCH
**Keywords:** Fruity Delay, Digital Buffer, Step Units, Haas Effect, R&B Engineering, FL Studio Foundations.
