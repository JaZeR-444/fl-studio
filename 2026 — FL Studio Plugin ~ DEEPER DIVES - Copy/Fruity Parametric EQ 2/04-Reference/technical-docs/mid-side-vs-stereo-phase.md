# Mid/Side vs. Stereo Phase (Mono Compatibility)

When you EQ a sound, you aren't just changing volume; you are shifting **Phase**. When working in stereo, aggressive EQ can destroy your mono compatibility.

## 🌊 The Phase Problem

EQ works by delaying specific frequencies. If you EQ the Left channel differently than the Right channel (or process the Side signal aggressively), you change how those channels sum back to Mono.

### Symptoms of Phase Issues:
- **Thinning out:** The bass disappears when played on a phone or mono speaker.
- **Hollow sound:** Vocals lose their center focus.
- **Wandering image:** The sound seems to pull to one side at certain frequencies.

---

## 🛠️ Mono Compatibility Check

Always check your EQ moves in Mono.

1.  **The Mixer Toggle:** Use the "Stereo Separation" knob on the FL Studio Mixer track. Turn it all the way to the **Right** (100% Merged) to hear your mix in mono.
2.  **The Test:**
    - EQ your vocal in Stereo.
    - Toggle the mixer to Mono.
    - If the vocal disappears or sounds like it's in a tunnel, your EQ is causing **destructive interference**.

---

## ⚖️ Best Practices for Safe EQ

### 1. High Pass the Sides
The most important rule in modern production: **Keep the low-end Mono.**
- Use the [Patcher Mid/Side Setup](./mid-side-setup.md).
- Apply a **High Pass (Band 1)** to the **SIDE** EQ at 100-150 Hz.
- This ensures that kick drums and bass remain rock-solid in the center, preventing "muddy" stereo imaging.

### 2. Avoid Narrow Boosts on the Sides
- Narrow boosts (high Q/BW%) in the stereo field can cause "phasiness."
- If you want to add brightness to the sides, use a **Wide High Shelf (Band 7)**.
- Wide moves are more phase-coherent and sound more natural.

### 3. Use Linear Phase (LIN) for Mastering
If you are doing surgical EQ on the Master bus:
- Enable **LIN** mode in PEQ2.
- Linear Phase EQ ensures that the phase relationship between L/R remains constant, even with aggressive moves.
- _Note: Use only for mastering, as it introduces latency._

---

## 📏 Using the Vectorscope (Wave Candy)

To truly see what your EQ is doing to your stereo image, use **Wave Candy** (Vectorscope mode) after your EQ.

- **Vertical Line:** Perfect Mono (No phase issues).
- **Horizontal Spread:** Wide Stereo.
- **Blurred "Cloud":** Good Stereo balance.
- **Anti-Phase (Out of bounds):** Your EQ is too aggressive; this will disappear in Mono.

---

## 🎯 The "Mono-Safe" Workflow

1.  **EQ for Tone** in Stereo.
2.  **Switch Mixer to Mono.**
3.  **Adjust EQ** until the sound is still clear and present in Mono.
4.  **Switch back to Stereo.**
5.  **Enjoy** a mix that sounds huge on speakers but clear on phones.
