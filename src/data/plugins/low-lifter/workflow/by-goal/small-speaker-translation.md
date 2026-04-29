# Workflow: Small Speaker Translation (The Pro Mix)

*Goal: Ensuring your sub-bass is audible and impactful on devices with limited low-frequency response (Phones, Laptops, Bluetooth speakers).*

## Vibe Mapping
- **Upbeat:** ⭐⭐⭐⭐⭐ (Primary)
- **Vibey:** ⭐⭐⭐⭐
- **Moody:** ⭐⭐⭐ (Hardest to translate; requires careful balancing)

## 🎛️ Routing Context
- **Preferred:** Insert on the Bass Bus or the Master Channel (Master requires very subtle settings).
- **Parallel:** Not recommended (Plugin has built-in dry/wet balance via the Boost fader).

## 🚶 Step-by-Step Setup
1. **Identify the Target:** What is your most important secondary device?
   - Phone: Set Crossover to **160Hz**.
   - Laptop: Set Crossover to **120Hz**.
2. **Setup the Monitor:** Switch your DAW output to a small monitor or phone (using an app like Audiomovers or similar) if possible.
3. **The Boost:** Increase the **Boost** fader in Low Lifter until you can clearly distinguish the pitch of the bass notes on the small speaker.
4. **Naturalize (Diffusion):** Set **Diffusion** to **30–50%**. This makes the added harmonics sound like they belong to the bass rather than being a separate "hiss" or distortion.
5. **Clean the Mud (Slope):** Set **Slope** to a higher value (Steeper). This ensures the harmonics don't bleed too far into the 300Hz–500Hz range, which would muddy your vocals.
6. **Check the Big Speakers:** Switch back to your studio monitors. The bass should sound "fuller" and "more present" but not "distorted."
7. **Final Energy management:** Set **Low Cut** to **35Hz** to save headroom for the master limiter.

## 🔄 Variations
- **The "Club Prep":** Set Crossover to **60Hz** and use high **Diffusion** to make the club subs feel "massive" and "thick."
- **The "Radio Ready":** Use **Multi-Band ON** for the most transparent translation possible.

## ⚠️ Pitfalls & Fixes
- **Problem:** The bass sounds "hollow" in the mids.
- **Fix:** You might have phase cancellation. Toggle the **Invert Polarity (Ø)** button.
- **Problem:** Added harmonics are causing the Master to clip.
- **Fix:** Increase the **Low Cut** frequency or lower the **Boost** fader.

## 🎚️ Automation Ideas
- **Verse-to-Chorus Expand:** Increase the **Boost** and **Diffusion** during the chorus to make the low-end feel "bigger" when the hook hits.
- **Intro Filter:** Start with a very high **Low Cut** and slowly automate it down to 30Hz for a dramatic "bass entry."
