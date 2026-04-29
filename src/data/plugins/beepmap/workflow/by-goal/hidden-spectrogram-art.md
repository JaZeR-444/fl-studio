# Hidden Spectrogram Art

**Goal:** Embed a visual image into your audio stream.

### Step 1: Image Preparation
- Create a **Black** background image.
- Add **White** text or a logo.
- Use high contrast. Grey areas will create "ghost" noise.

### Step 2: BeepMap Configuration
- **Scale:** Set to **Linear (Hz)**. Spectrograms in plugins like Wave Candy or Edison usually display a linear frequency scale.
- **Length:** Adjust based on how fast you want the logo to scroll.
- **Widen:** Set to 0% for a clean mono image, or 100% to put the image in the side channels.

### Step 3: Verification
- Place **Wave Candy** on the mixer track.
- Set mode to **Spectrum**.
- Adjust the Wave Candy "Range" and "Scale" to match BeepMap's **FREQ** knob.
- Play a note and watch your logo appear in the rainbow frequencies.
