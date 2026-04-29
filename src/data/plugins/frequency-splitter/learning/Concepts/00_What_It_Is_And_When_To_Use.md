# What It Is And When To Use: Frequency Splitter

## Purpose and Identity
**Frequency Splitter** is a dedicated crossover utility designed to divide an audio signal into 2 or 3 independent frequency bands (Low, Mid, High). Its primary mission is to enable **multi-band effects processing**. By splitting the audio, you can process the bass, mids, and highs with completely different effects (e.g., distorting the mids while keeping the sub clean). [SRC: IL-MAN]

## 60-Second Mental Model
Imagine a single water pipe (audio) being split into three separate faucets. 
- Faucet 1 only drips cold water (Bass).
- Faucet 2 only drips warm water (Mids).
- Faucet 3 only drips hot water (Highs).
You can now add soap only to the hot water faucet without making the cold water soapy. Frequency Splitter is the set of valves that controls exactly which frequencies go to which faucet.

## Typical Roles In A Session
- **Signal Router**: Sending the bass of a synth to Mixer Track 10 and the lead part to Mixer Track 11.
- **Precision Cleaner**: Isolating and muting problematic low-mid "mud" without affecting the high-end air.
- **Multiband Master**: Building custom multiband compressors or saturators in **Patcher**.

## Hip-Hop/R&B Context
- **808/Kick Separation**: Splitting an 808 so you can sidechain only the sub-frequencies to the kick, while the harmonic "grit" stays untouched.
- **Vocal Air Spread**: Splitting a vocal at 5kHz and adding a wide stereo chorus ONLY to the air frequencies.
- **Sample Focus**: Splitting a messy soul sample to mono-ize the low end while keeping the melodic mids wide and vibey.

## When to Use vs When NOT to Use
| Use It When... | Avoid It When... |
| :--- | :--- |
| You want to process different frequencies with different plugins. | You just want to EQ a track (use Parametric EQ 2). |
| You need high-fidelity Linear Phase splitting for mastering. | You are low on CPU (Linear Phase mode is demanding). |
| You are building complex routing in **Patcher**. | You need more than 3 bands (use Maximus or multiple instances). |
