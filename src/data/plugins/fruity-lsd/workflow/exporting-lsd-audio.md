# Workflow: Exporting LSD Audio

Since Fruity LSD generates audio from the Windows OS, it behaves differently during rendering.

## Real-Time Rendering
- Historically, DLS synthesis required "Real-time" rendering mode in the export dialog to capture the audio properly.
- **Modern Workflow**: It is safer to use Edison to record the output of the Fruity LSD track *before* rendering the final project. This ensures the audio is captured exactly as heard, bypassing any OS-level rendering glitches.
