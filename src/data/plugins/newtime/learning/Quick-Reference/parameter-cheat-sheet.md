# Parameter Cheat Sheet: Newtime

The audio warping and quantization reference. [SRC: IL-MAN]

---

## 🕒 Warping & Timeline
- **Markers (White Bars):** These represent "anchors" in the audio. Drag them to stretch the audio between them.
- **Quantize (Magnet Icon):** Automatically snaps markers to the nearest grid line.
- **Groove Template:** Applies a specific swing or feel to the markers.

## 🎛️ Global Processing
- **Time:** Multiplies the overall length of the audio clip (Stretch).
- **Pitch:** Transposes the audio in semitones (-24 to +24).
- **Formant (Toggle):** When ON, keeps the vocal character (the "throat") the same while shifting pitch. Essential for vocals.
- **Fine (Cents):** Precise pitch tuning.

## ⚙️ Algorithm Selector
- **Slices:** Best for drums and percussion. Preserves transient "hit" sharpess.
- **Tones:** Best for vocals and lead instruments. Maintains clear harmonic pitch.
- **Tonal:** Best for complex polyphonic sounds (pads, full mixes). Preserves harmonic structure.

## 📐 Quality & Edit
- **Draft / High / Ultra:** Sets the processing resolution. High/Ultra is recommended for final renders.
- **Marker Smoothing:** Blurs the transition between stretched sections to avoid "clicks."
- **Center Focus:** Keeps the selection in the middle of the screen during playback.

---

## 🎯 Quick Mastery Tips
- **Perfect Loop:** Trim the sample to an exact bar length in the Playlist *before* sending it to Newtime.
- **Transparent Transpose:** Use **Tones** mode with **Formant** ON for the most natural vocal pitch shifting.
- **Heavy Quantize:** Use the **Alt + Q** shortcut to bring up the quantization menu for rapid timing correction.
