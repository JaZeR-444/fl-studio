# Technical Reference: Mobile vs Desktop FX Logic

Understanding the behavioral differences between the two engines. [SRC: IL-MAN]

## 1. Autoduck vs. Fruity Limiter
- **Mobile Autoduck**: A preset-based volume envelope synced to the beat. It is much easier to use but lacks the precision of a true sidechain trigger.
- **Desktop Strategy**: If you need precise sidechaining (e.g., ducking only when the snare hits), you must record the stem to the desktop and use **Fruity Limiter**.

## 2. Auto-Pitch vs. Pitcher
- **Mobile Auto-Pitch**: Optimized for low-latency touch performance. It has fewer parameters than the desktop "Pitcher" or "Newtone."
- **Effect**: It sounds more "robotic" and aggressive by default, which is actually a popular aesthetic in modern Hip-Hop.

## 3. Reverb & Delay (Resource Management)
- Mobile Reverb uses a **fixed-point algorithm** to save battery life. It sounds slightly more "metallic" and "grainy" than the desktop Fruity Reverb 2.
- **Pro Tip**: If you want your mobile project to sound high-end, turn OFF the mobile reverbs before transferring and replace them with **LuxeVerb** on the desktop.

## 4. Automation Resolution
- Mobile automation is recorded at a lower resolution (lower PPQ) than desktop automation to keep project files small.
- **Verification**: If you see "steps" in your mobile filter sweeps, use the Desktop's **Automation Clip** smoothing tool after importing.
