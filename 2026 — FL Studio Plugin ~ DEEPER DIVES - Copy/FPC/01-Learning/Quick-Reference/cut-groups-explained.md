# Quick Reference: Cut Groups Explained

How to manage "Choking" and "Muting" logic in FPC. [SRC: IL-MAN]

## 1. What is a Cut Group?
A Cut Group tells FPC: "If I play a note in this group, immediately stop all other notes currently playing in this same group."

## 2. Standard "Hi-Hat" Setup
- **Closed Hat (Pad 4)**: Set **Cut** to 1 and **Cut By** to 1.
- **Open Hat (Pad 3)**: Set **Cut** to 1 and **Cut By** to 1.
- **Result**: Every time you hit the Closed Hat, it will "choke" the Open Hat tail. This mimics how a real drummer uses their foot pedal.

## 3. Advanced "Vocal Chop" Logic
- Assign all your vocal pads (1-16) to **Cut: 2** and **Cut By: 2**.
- **Result**: You can play complex vocal stutters without the audio files overlapping and creating a "muddy" mess. Only one vocal slice will play at a time.

## 4. The "Cut By" Secret
- **Cut**: The group this pad *belongs* to.
- **Cut By**: The group that *triggers* this pad to stop.
- **Strategy**: You can make a Kick drum (Cut By: 1) stop a long Bass note (Cut: 1) without the Bass stopping the Kick!

---
**Pro Tip**: Use "--" (None) if you want a pad to ring out freely regardless of other hits (standard for Kicks and Snares).
