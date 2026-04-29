# Masterclass: The "Moody Underwater" Vocal Aesthetic in Fruity Delay 3

## 1. Executive Summary: The "Drake" and "PartyNextDoor" Vibe
The "Underwater" sound is more than just a low-pass filter. It is a psychoacoustic illusion designed to make the listener feel like they are submerged in a liquid environment—isolated, intimate, and moody. This aesthetic is the cornerstone of Toronto R&B and Melodic Trap. In this guide, we will break down the precise engineering required to achieve this using **Fruity Delay 3** as our primary spatial engine.

---

## 2. Theoretical Foundation: The Liquid Physics of Sound
### 2.1 Frequency Absorption in Water
In physical water, high frequencies are absorbed almost instantly. Only low-frequency energy (the "body") travels over distance.
- **The Engineering Goal:** We need to aggressively eliminate the "Air" (10kHz+) and the "Presence" (3k-5kHz) from our delay tail while preserving the melodic fundamental.

### 2.2 Temporal Smearing
Water doesn't have sharp, reflective surfaces like concrete. It has "soft" boundaries.
- **The Engineering Goal:** We must use the **Diffusion** and **Smear** modules to blur the repeats until they lose their rhythmic "edge" and become a smooth, flowing wash.

---

## 3. The Step-by-Step Technical Setup

### 3.1 Initial Signal Routing
1. **The Lead Vocal:** Should be dry, compressed, and centered.
2. **The Send:** Do NOT put this effect directly on the vocal track. Create a dedicated **Vocal FX Send** track.
3. **Fruity Delay 3:** Insert it on the Send track. Set **Dry** to 0% and **Wet** to 100%.

### 3.2 The Core Timing (The Pulse)
- **Time:** Set to **1/2 beat** or **1/4 beat**.
- **The "Toronto" Offset:** Set the **Offset** knob to **+5%**. This makes the right channel arrive slightly later than the left, creating a "dizzy" wide image that feels like the water is moving around the head.
- **Model:** Set to **Analog**. This allows for the "resampling" texture which is more organic than digital.

### 3.3 The "Underwater" Filtering (The Muffle)
- **High-Pass (HP):** Set to **450Hz**. We want to remove the muddy sub-rumble, but keep the "warmth."
- **Low-Pass (LP):** This is the most critical knob. Set it to **1800Hz**. 
- **The Slope Logic:** If the filter sounds too sharp, increase the **Resonance** to 10% to add a tiny "bubble" of energy at the cutoff point.

### 3.4 Feedback and Saturation (The Warmth)
- **Feedback:** Set to **65%**. We want a long tail that lasts for at least 2 bars.
- **Saturation:** Set to **40%**. This adds "harmonics" to the low-mids, making the muffled sound feel "expensive" and "thick" rather than just broken.

### 3.5 The Diffusion Module (The Liquification)
- **Diffusion:** Set to **85%**. This smears the transients.
- **Smear:** Set to **60%**. This spectral smoothing removes the "digital particles" and makes the sound feel like a singular liquid mass.

### 3.6 The Bitcrush Section (The Grain)
- **Sample Rate Redux:** Lower this to **15kHz**. This adds a subtle "sandiness" to the tail, mimicking the texture of a vintage low-bit sampler (like the ASR-10 used by Kanye West).

---

## 4. Advanced Dynamics: The Sidechain Ducker
This is what separates professional mixes from amateur ones.

- **Threshold:** Lower this until the delay is silent whenever the rapper/singer is performing.
- **Release:** Set to **500ms**. 
- **The Magic:** As soon as the singer stops a phrase, the "underwater world" should slowly rise up (bloom) to fill the space. This prevents the "muffle" from covering up the lyrics while they are being sung.

---

## 5. Layering: The "Deep Space" Chain
To truly master this vibe, you must look at the plugins *surrounding* Fruity Delay 3.

### 5.1 Pre-FX (Before Delay 3)
- **Fruity Fast Dist (Type A):** Add 10% saturation before the delay. This ensures the delay has "something to work with" in the harmonic spectrum.

### 5.2 Post-FX (After Delay 3)
- **Fruity Chorus:** Set to a very slow rate (0.1Hz). This makes the underwater delay feel like it's drifting in a current.
- **Fruity Convolver:** Load a **Dark Plate** IR. This adds a layer of "depth" to the delay, making it sound 3D.

---

## 6. Genre-Specific Variations

### 6.1 The "Psychedelic Trap" Variation (Travis Scott Vibe)
- **Action:** Automate the **Vibrato Depth** from 0% to 40% over the course of a bar.
- **Result:** The underwater sound will start to "wobble" and "bend," creating a trippy, drug-like sensation.

### 6.2 The "Melodic Rap" Variation (Juice WRLD Vibe)
- **Action:** Increase the **LP Filter** to 3500Hz (less muffled) and set Time to **1/8 beat**.
- **Result:** A more energetic, rhythmic version of the underwater sound that fits faster lyrical flows.

---

## 7. Mathematical Calibration Table
Use this table to sync your "blooms" to the project tempo.

| BPM | 1/2 Beat (ms) | 1/4 Beat (ms) | Ducker Release (ms) |
|-----|---------------|---------------|----------------------|
| 90  | 666ms         | 333ms         | 600ms                |
| 120 | 500ms         | 250ms         | 450ms                |
| 140 | 428ms         | 214ms         | 400ms                |
| 160 | 375ms         | 187ms         | 350ms                |

---

## 8. Troubleshooting the Vibe
- **Issue:** "It just sounds like a muffled mess."
- **Fix:** Increase the **High-Pass Filter** to 600Hz. Usually, the "mess" is in the low-mids clashing with the 808.
- **Issue:** "I can't hear the delay at all."
- **Fix:** Lower the **Ducker Threshold** or increase the **Saturation**. Saturation makes the sound "percieved" louder.

---

## 9. Conclusion: The Master of the Deep
The "Moody Underwater" sound is a game of subtraction. By removing the brightness and the rhythm, you create a psychological space for the listener's imagination to fill. Fruity Delay 3, with its combination of Analog modeling, Diffusion, and Ducking, is the ultimate tool for this art form.

---
**Document Version:** 1.0 (Masterclass Edition)
**Keywords:** Vocal Mixing, Underwater Sound, Toronto Vibe, R&B Production, FL Studio Workflow.