# Core Techniques & Best Practices

## 💎 The Golden Techniques

### 1. The "Universal Arp"
*   **Context:** Adding rhythmic movement to a static synth (like Serum or a one-shot Sampler).
*   **Move:**
    1.  Open Wrapper Settings (Gear).
    2.  Click **Wrench** tab.
    3.  Under "Arpeggiator", click an arrow (Up, Down, etc.).
    4.  **Result:** The plugin now arpeggiates, even if it has no internal arp.

### 2. The "Slide" Enabler
*   **Context:** Making 3rd Party VSTs slide like FL Native plugins.
*   **Move:**
    1.  Open Wrapper Settings (Gear).
    2.  Click **Wrench** tab.
    3.  Enable **Mono** mode.
    4.  Set **Slide** time.
    5.  **Result:** You can now create glide/portamento effects on any instrument. (Note: This is different from Piano Roll slide notes, which only work on Native plugins).

### 3. Smart Disable (CPU Saver)
*   **Context:** Your project is crackling.
*   **Move:**
    1.  Tools -> Macros -> **Switch smart disable for all plugins**.
    2.  **Result:** The Wrapper now completely shuts off any plugin that isn't making sound. This can save 50%+ CPU.

## 👂 What to Listen For
*   **Clicks/Pops when starting playback:**
    *   *Fix:* This might be "Smart Disable" waking up plugins too slowly. If a specific reverb clicks, go to its Wrapper settings and turn Smart Disable **OFF** for just that plugin.

## 🛑 Common Pitfalls
1.  **The "Hidden" Buffer:** Some plugins add latency. The Wrapper reports this to FL Studio (PDC). If you mess with the "Latency" manual offset in the Wrapper settings, you will de-sync your track. Leave it on Auto unless you are a scientist.
