# Rules: Mobile-to-Desktop Reliability

Guidelines for a seamless cross-platform production experience. [SRC: IL-KB]

## 1. The Sample Path Rule
- **Rule**: Never use samples located in temporary download folders on your phone.
- **Why**: When you transfer the project, FL Studio Desktop won't know where to look for "Download_123.wav."
- **Action**: Always move your custom samples into the `FLM User Files/My Samples` folder before using them in a project.

## 2. Tempo Consistency
- **Rule**: Ensure the project tempo is finalized *before* doing heavy audio recording.
- **Why**: FL Studio Mobile uses real-time time-stretching, but extreme tempo shifts after recording can introduce artifacts that are harder to fix on the desktop.

## 3. Instrument Compatibility
- **Rule**: Only use instruments found in the internal "Mobile" list.
- **Action**: Do not attempt to use "Wrapper" presets from the desktop inside the mobile plugin; they will simply be ignored or silenced.

## 4. Transfer Failure Mode: Wi-Fi
- **Issue**: PC doesn't show up in the "Direct Share" list on the phone.
- **Fix 1**: Ensure both devices are on the same SSID (2.4GHz vs 5GHz can sometimes cause isolation).
- **Fix 2**: Check PC Windows Firewall -> "Allow an app through firewall" -> Ensure "FL Studio" is checked for Private and Public.

## 5. Mono-Compatibility Mandate
- **Rule**: Kicks and Basses must be set to 0% Stereo Width inside the Mobile Mixer.
- **Action**: Mobile speaker systems often have fake "stereo widening" that masks phase issues. Setting them to Mono early ensures they hit correctly on professional studio monitors.
