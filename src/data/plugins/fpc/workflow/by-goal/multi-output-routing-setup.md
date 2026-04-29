# Goal Workflow: Multi-Output Routing Setup (The Mix Prep)

*Goal: Separating your drum elements so you can EQ and compress them independently in the mixer.*

## 🎛️ Routing Context
- **Setup**: FPC Plugin on Mixer Insert 10.

## 🚶 Step-by-Step Setup
1. **Identify the Core**: Choose your 4 main elements: Kick, Snare, Hats, Perc.
2. **Assign the Offsets**:
   - **Kick Pad**: Set **Output** to **0**. (Target: Mixer Track 10).
   - **Snare Pad**: Set **Output** to **1**. (Target: Mixer Track 11).
   - **Hats Pad**: Set **Output** to **2**. (Target: Mixer Track 12).
   - **Perc Pad**: Set **Output** to **3**. (Target: Mixer Track 13).
3. **Verify in Mixer**:
   - Play your drum pattern.
   - You should see the Kick meter moving on Track 10 and the Snare meter moving on Track 11.
4. **Mixer Processing**:
   - Track 10 (Kick): Add a **Fruit Kick** layer or heavy EQ.
   - Track 11 (Snare): Add a **LuxeVerb** send.
   - Track 12 (Hats): Add a **Frequency Shifter** for texture.
5. **The Glue**:
   - Route Tracks 10-13 to a single "DRUM BUS" mixer track.
   - Add a **Fruity Limiter** to the bus to glue the processed elements together.

## 🔄 Variations
- **The "Sub-Mix"**: Route all hats and shakers to the same offset (e.g. Output 2) to process all high-frequency elements together.
- **The "Dry/Wet" Split**: Send the dry pad to Output 0 and a heavily distorted layer of the same pad to Output 1.

## ⚠️ Pitfalls & Fixes
- **Problem**: Changing the FPC mixer track moves everything.
- **Fix**: Remember that FPC's Output is an **OFFSET**. If you move FPC to Mixer Track 20, the Snare (Offset 1) will automatically move to Track 21.
