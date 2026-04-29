# Speech File Format (.SPEECH): The Data Sampler

## What is a .SPEECH file?
When you render a phrase in Speech Synthesizer, FL Studio saves it as a `.SPEECH` file. This is a unique format developed by Image-Line that is more than just audio. [SRC: IL-KB-06]

## Embedded Metadata
A `.SPEECH` file contains:
1. **Audio Data:** The phonetic synthesis output.
2. **Text Data:** The original typed text used to create the sample.
3. **Marker Data:** Automatically generated markers at the start of every word.

## Why the Format Matters:
- **Slicex Integration:** When you load a `.SPEECH` file into Slicex or Fruity Slicer, the plugin "reads" the embedded markers. You don't have to auto-slice it; the words are already perfectly isolated and named.
- **Searchability:** You can search your sample browser for keywords used *inside* the speech files.
- **Customization:** Because the text is embedded, you can often "see" what the sample is saying without having to listen to it.

## Where else can I use it?
- **Fruity Granulizer:** Perfect for stretching the phonetics of the file.
- **Fruity Scratcher:** Use the markers to "scratch" specific words using a MIDI controller.
- **DirectWave:** Map different words to different velocity layers effortlessly.