# MIDI Port vs. Channel: The "Wire & Instrument" Model

Understanding the routing logic of MIDI Out. [SRC: IL-KB]

## 1. The Port (The Virtual Wire)
Imagine you have 10 different hardware synthesizers on your desk. Each one needs its own physical cable.
- **Port = Cable.**
- In FL Studio, a **Port** is a unique identification number (0–255) that routes MIDI data to a specific destination.
- **Internal VST Example:** If you set **Serum** to Input Port **5**, and **MIDI Out** to Port **5**, they are now connected by a "Virtual Wire."

## 2. The Channel (The Instrument ID)
Now imagine one of those cables is plugged into a "Multitimbral" synth (like a Roland Fantom or a VST like Kontakt). That single synth can play 16 different sounds at the same time.
- **Channel = Sound Slot.**
- Standard MIDI has **16 Channels**.
- If you want MIDI Out to play the "Piano" sound in slot 1 of Kontakt, use **Channel 1**.
- If you want it to play the "String" sound in slot 2, use **Channel 2**.

---

## 3. How to Route Hardware
1. **Physical Connect:** Plug your synth into your MIDI interface.
2. **FL Settings:** Go to `Options -> MIDI Settings`.
3. **Assign Port:** Locate your MIDI Interface output in the list and set the **Port number** (e.g. 10).
4. **MIDI Out Plugin:** Set the **Port** in the MIDI Out plugin to **10**.
5. **Result:** Notes played in the MIDI Out Piano Roll will travel out through Port 10 to your hardware.

## 4. How to Route VSTs
1. **VST Wrapper:** Click the gear icon on the top left of your VST window.
2. **Set Port:** In the "Settings" tab, look for **Input Port**. Set it to a number (e.g. 20).
3. **MIDI Out Plugin:** Set the **Port** in MIDI Out to **20**.
4. **Result:** MIDI Out is now the "sequencer" for that VST.

---

## 🏁 Summary Checklist
- **Same Port?** -> Data will move between them.
- **Same Channel?** -> The specific sound will play.
- **Conflicts?** -> Avoid using the same Port for different hardware units unless they are "Daisy Chained."
