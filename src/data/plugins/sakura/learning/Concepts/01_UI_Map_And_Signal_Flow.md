# 01: UI Map and Signal Flow

## UI Sections Tour
Sakura's interface is divided into the **Hanami** stages, following a left-to-right flow. [SRC: IL-MAN-01]

### 1. Exciter (The Contact)
- **Source Type:** Choose from Pluck, Bow, Scrape, etc.
- **Amount:** Controls the "force" of the hit.
- **Position:** Where the string is hit (Bridge vs. Middle).

### 2. String (The Vibration)
- **String 1 & 2:** You can blend two separate physical models.
- **Damp:** Controls how quickly high frequencies disappear.
- **Decay:** Controls how long the volume lasts.
- **Tension:** Modulates the pitch slightly during the attack (Physical "snap").

### 3. Interaction (The Mix)
- **Mix Slider:** Balance between String 1 and String 2.
- **Phasing:** How the two strings interact (creates chorusing or cancellation).

### 4. Resonator (The Body)
- **Material:** Box, Small, Medium, Large, Plate, etc.
- **Resonance:** The "hollow" quality of the body.
- **Low/High Cut:** Shapes the tone of the resonance.

### 5. Acoustics (The Room)
- **Reverb & Delay:** High-quality built-in effects tailored for string modeling.

## Signal Flow
`Exciter (Input Signal) -> String 1/2 (Waveguide) -> Interaction (Inter-string coupling) -> Resonator (Body Filter Bank) -> Acoustics (Effects) -> Output`

## Key Interactions
- **Right-Click:** Most knobs can be linked to controllers or automated.
- **Wheel Scroll:** Fine-tune parameter values.
- **Alt + Click:** Reset to default value.

## Things Beginners Misunderstand
- **"It's too quiet":** Physical modeling often has a low "Exciter" level by default. Turn up the Exciter or the Resonator gain.
- **"The Decay doesn't work":** If the **Damp** is too high, the sound will die immediately regardless of the Decay setting.
- **Resonator is not just a Reverb:** It is a series of delay lines simulating a physical object. It changes the *timbre*, not just the space.