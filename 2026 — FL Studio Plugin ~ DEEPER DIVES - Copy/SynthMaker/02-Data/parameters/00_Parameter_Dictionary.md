# Parameter Dictionary

## Common Components (Variables)
| Component | Type | Description | Vibe Impact |
| :--- | :--- | :--- | :--- |
| **Prim Float** | Static | A fixed number (e.g., 0.5). | N/A |
| **Prim Stream** | Dynamic | A high-speed audio signal. | All |
| **Module Knob** | UI | A graphic knob that outputs a value (0 to 1). | All |

## DSP Primitives
| Parameter | Type | Description | Vibe Impact |
| :--- | :--- | :--- | :--- |
| **Oscillator** | Stream | Tone generation (Sine, Saw, etc.). | All |
| **Filter** | Stream | Frequency cutting (LP, HP, BP). | Moody/Upbeat |
| **Quantize** | Stream | Reduces bit-depth. | Moody/Lo-Fi |
| **Wave Player** | Stream | Loads and plays external .wav files. | All |

## Logic & Control
| Parameter | Type | Description | Vibe Impact |
| :--- | :--- | :--- | :--- |
| **ADSR** | Module | Envelope generation for Vol/Filter. | Upbeat/Jazzy |
| **LFO** | Module | Low-frequency modulation source. | Psychedelic/Vibey |
| **JoyStick** | Event | Receives input from HID controllers. | Psychedelic |
| **MidiToPoly** | Module | Manages voice allocation. | Vibey |
