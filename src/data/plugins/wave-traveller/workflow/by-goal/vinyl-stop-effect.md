# Vinyl Stop Effect with Wave Traveller

**Difficulty:** Beginner
**Time Required:** 5 minutes
**Goal:** Create realistic turntable vinyl stop effect
**Genre:** Hip-Hop, EDM, Turntablism

---

## Prerequisites

- Wave Traveller plugin
- Audio sample loaded (drum loop or full track section)
- Understanding of automation

---

## Workflow Steps

### Step 1: Load Sample

1. **Load Wave Traveller** on track
2. **Import Sample** - Drag audio file or use Load button
3. **Set Sample Start/End** to desired section

---

### Step 2: Configure Vinyl Simulation

4. **Motor Lag:** **70-80%**
   - *Why:* Realistic turntable inertia

5. **Vinyl Noise (Optional):** **30-40%**
   - *Why:* Adds authenticity

6. **Wow & Flutter:** **20%**
   - *Why:* Natural pitch wobble during slowdown

---

### Step 3: Speed Automation

7. **Speed:** Start at **100%**
8. **Create Automation Clip** for Speed parameter
9. **Draw Curve:** 100% to 0% over 1-2 bars
   - *Curve Shape:* Exponential decay (realistic slowdown)

10. **Placement:** Trigger stop 2-4 bars before drop/change

---

### Step 4: Fine-Tuning

11. **Adjust Motor Lag** if stop is too fast/slow
12. **Crossfade:** Keep at **20-30ms**

---

## Variations

### Quick Stop (0.5 bars)
- Motor lag: 40-50%
- Abrupt, dramatic

### Slow Stop (4 bars)
- Motor lag: 85-95%
- Gradual, smooth

### Reverse Spin-Up
- Speed: 0% to 100%
- At drop/build

---

**Last Updated:** February 3, 2026
**Status:** Complete workflow
