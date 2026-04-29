# Fruity Dance: The Complete Parameter Encyclopedia (Expert Edition)

**Plugin Architecture:** 2D Bitmap Sprite Animation Sequencer
**Internal Logic:** Transport-Linked Frame-Pointer Logic
**Target Genres:** All (Aesthetic Utility for Live-Streaming and Lo-Fi Production)

---

## 1. THE MODE MODULE (Logic Control)
Fruity Dance operates in two distinct mathematical states.

### 1.1 Auto Mode (The Rhythmic Slave)
- **Technical Logic:** The plugin reads the **BPM and Playhead Position** from FL Studio. It calculates the current animation frame based on the Song Position.
- **The "Vibe" Hack:** If your track is at 140 BPM (standard Trap), the mascot will move twice as fast as at 70 BPM. This ensures she always hits the "Downbeat" correctly.

### 1.2 Manual Mode (The Performance Master)
- **Technical Logic:** The transport sync is disconnected. The animation is now triggered via **MIDI Notes**.
- **The Power of Control:** This allows you to choreograph the mascot to your music. You can make her stay perfectly still during an atmospheric verse and only start dancing when the 808 hits.

---

## 2. THE ANIMATION LIBRARY (The Moves)
### 2.1 Animation Selector
- **Technical Feature:** A dropdown menu containing several pre-baked sequences.
- **The "Vibe" List:**
    - **Idle / Breathe:** Slow, vertical movement. Ideal for atmospheric pads and moody intros.
    - **Dance 1 / 2:** Rhythmic, full-body moves. Ideal for main drum grooves.
    - **Jump / Kick:** High-energy vertical frames. Essential for marking the "Drop" or snare hits.
    - **Wave:** A friendly greeting move. Used by streamers to welcome new followers during a set.

### 2.2 Speed Knob
- **Range:** 0.1x to 4.0x.
- **The Math of Speed:** 
    - **1.0x:** Standard sync (one full loop every 1 or 2 bars).
    - **0.5x:** Half-time. Makes the mascot feel "relaxed" or "heavy." Perfect for Moody R&B.
    - **2.0x:** Double-time. Makes her feel "hyped" or "agitated." Perfect for high-energy Drill beats.

---

## 3. THE SPATIAL MODULE (Visual Presence)
### 3.1 Size Knob
- **Technical Logic:** Vector-scaling of the bitmap sprite. 
- **The Benefit:** Because the artwork is high-resolution, you can scale her from a tiny corner mascot to a full-screen background character without major pixelation artifacts.
- **Master Rule:** Set size to **25%** for a professional, non-distracting production environment. Set to **100%** for video exports or live-streams.

---

## 4. HIDDEN MIDI MAPPING (Manual Mode Only)
When the plugin is in **Manual Mode**, specific MIDI notes in the Piano Roll correspond to specific frames.

| MIDI Note | Animation Sequence | Use Case |
|-----------|--------------------|----------|
| **C5**    | Idle / Breathe     | Verses, slow intros. |
| **D5**    | Dance 1            | Main rhythmic section. |
| **E5**    | Dance 2            | Transition energy. |
| **F5**    | Jump / Kick        | Snare hits, drum fills. |
| **G5**    | Wave / Greet       | Streamer interactions. |
| **A5**    | Performance 1      | Special moves. |

---

## 5. WRAPPER-LEVEL MASTER OPTIONS
This is where the "Cool" factor is actually activated.

### 5.1 "Stay on Top"
- **Workflow:** Right-click the top bar of the plugin window.
- **The Logic:** This ensures the mascot is never hidden by other windows. 
- **Why it matters:** In a professional R&B workflow, you might be buried in the Piano Roll for 30 minutes. Having the mascot visible keeps you "anchored" to the beat.

### 5.2 "Detached"
- **Workflow:** Right-click wrapper -> Detached.
- **The Benefit:** You can move the mascot to a second monitor or position her over the FL Studio transport clock.

---

## 6. TECHNICAL ARTISTRY: CUSTOM SPRITES
### 6.1 The Sprite Sheet Protocol
Fruity Dance reads its art from a specific folder in your FL Studio installation.
- **The Hack:** If you replace the default `.png` file with your own custom sprite sheet (using the same pixel dimensions and frame count), you can have **YOUR OWN MASCOT** inside FL Studio. This is the ultimate branding tool for "Type Beat" YouTube channels.

---

## 7. TROUBLESHOOTING
- **Issue:** "She isn't moving."
- **Fix:** You are likely in **Manual Mode** without any MIDI notes in the Piano Roll. Switch back to **Auto**.
- **Issue:** "She is blurry."
- **Fix:** Ensure your 'UI Scaling' in FL Studio general settings is set to 'System' or '100%'.

---

## 8. SUMMARY: THE "VIBE" CHEAT SHEET
- **THE "LO-FI" COMPANION:** Mode Auto, Speed 0.5x, Size 30%, Animation: Breathe.
- **THE "TRAP" HYPE-MAN:** Mode Auto, Speed 2.0x, Size 60%, Animation: Dance 1.
- **THE "STREAMING" PRO:** Mode Manual, Size 100%, Animation: MIDI-Mapped to Snare/Kick.

---
**Document Version:** 2.5 (Encyclopedia Master)
**Status:** COMPLETE RESEARCH
**Keywords:** Fruity Dance, FL Chan, Sprite Animation, MIDI Mapping, DAW Aesthetics, Live-Streaming Utility.