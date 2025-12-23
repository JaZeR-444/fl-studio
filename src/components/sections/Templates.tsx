import { useState } from 'react';
import { SongTemplate } from '@/types';

export const TemplatesSection = () => {
  const [currentFilter, setCurrentFilter] = useState('all');

  // Song templates data
  const songTemplates: SongTemplate[] = [
    // EDM TEMPLATES
    {
      id: 1,
      genre: 'edm',
      name: 'Progressive House',
      bpm: 128,
      key: 'A Minor',
      description: 'Melodic progressive house with layered synths and emotional builds',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Four-on-Floor Kick', 'Clap (on 2 & 4)', 'Open Hi-Hat (offbeat)', 'Closed Hi-Hat', 'Crash Cymbals', 'Ride Cymbal']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Sub Bass', 'Bass Synth (filtered)']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Lead Synth', 'Pluck Sequence', 'Piano Melody']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Lush Pad', 'Chord Stabs', 'Atmospheric Synth']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['White Noise Build', 'Downlifter', 'Reverb Tail', 'Risers']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Vocal Chops', 'Main Vocal Line']
        }
      ]
    },
    {
      id: 2,
      genre: 'edm',
      name: 'Future Bass',
      bpm: 128,
      key: 'A Minor',
      description: 'Melodic progressive house with layered synths',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Four-on-Floor Kick', 'Clap (on 2 & 4)', 'Open Hi-Hat (offbeat)', 'Closed Hi-Hat', 'Crash Cymbals', 'Ride Cymbal']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Sub Bass', 'Bass Synth (filtered)']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Lead Synth', 'Pluck Sequence', 'Piano Melody']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Lush Pad', 'Chord Stabs', 'Atmospheric Synth']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['White Noise Build', 'Downlifter', 'Reverb Tail', 'Risers']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Vocal Chops', 'Main Vocal Line']
        }
      ]
    },
    {
      id: 3,
      genre: 'edm',
      name: 'Deep House',
      bpm: 122,
      key: 'G Major',
      description: 'Groovy deep house with soulful vocals and warm basslines',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Deep Kick', 'Soft Clap', 'Open/Closed Hi-Hats', 'Shaker', 'Rim Click', 'Crash']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Deep Sub Bass', 'Rhodes Bass', 'Filtered Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Rhodes Piano', 'Vocal Sample', 'Muted Guitar']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Warm Pad', 'String Stabs', 'Organ Chords']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Vinyl Hiss', 'Reverb Tail', 'Filter Automation']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Soulful Vocal Sample', 'Vocal Chops', 'Background Hums']
        }
      ]
    },
    // TRAP TEMPLATES
    {
      id: 4,
      genre: 'trap',
      name: 'Modern Trap',
      bpm: 140,
      key: 'C Minor',
      description: 'Hard-hitting trap with 808s and rapid hi-hats',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['808 Kick', 'Punchy Snare/Clap', 'Rapid Hi-Hats (32nd/64th)', 'Percussion Rolls', 'Rim Shots']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['808 Bass (Tuned)', 'Sub Bass Layer']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Bell Lead', 'Vocal Chops', 'Arp Synth']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Dark Pad', 'String Layer']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Riser Sweeps', 'Impact Hits', 'Vinyl Crackle', 'Reverse Cymbal']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Lead Vocal', 'Ad-libs', 'Vocal FX']
        }
      ]
    },
    {
      id: 5,
      genre: 'trap',
      name: 'Melodic Trap',
      bpm: 145,
      key: 'D Minor',
      description: 'Emotional trap with guitar melodies and atmospheric pads',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['808 Kick', 'Layered Snare/Clap', 'Rolled Hi-Hats', 'Open Hat', 'Cymbal']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Melodic 808', 'Sub Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Guitar Melody', 'Piano Lead', 'Synth Arp', 'Flute']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Lush Pad', 'Strings', 'Ambient Synth']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Riser', 'Downlifter', 'Impact', 'Reverse Melody']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Autotuned Vocal', 'Vocal Layers', 'Ad-libs']
        }
      ]
    },
    {
      id: 6,
      genre: 'trap',
      name: 'Dark Trap',
      bpm: 138,
      key: 'F# Minor',
      description: 'Aggressive dark trap with heavy distortion',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Distorted 808 Kick', 'Hard Clap', 'Triplet Hi-Hats', 'Snare Rolls', 'Crash']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Distorted 808', 'Growl Sub Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Dark Bell', 'Dissonant Synth', 'Reversed Samples']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Dark Drone', 'Distorted Pad', 'Horror Strings']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Gunshot', 'Siren', 'Metal Clang', 'Distortion Riser']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Pitched-Down Vocal', 'Screams', 'Vocal Chops']
        }
      ]
    },
    // HIP HOP TEMPLATES
    {
      id: 7,
      genre: 'hiphop',
      name: 'Boom Bap Hip Hop',
      bpm: 90,
      key: 'E Minor',
      description: 'Classic boom bap with vinyl samples',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Punchy Kick', 'Snappy Snare', 'Hi-Hat Pattern', 'Crash', 'Shaker/Tambourine']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Deep Sub Bass', 'Walking Bass Line']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Sampled Loop', 'Piano Stabs', 'Guitar Lick']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Jazz Chords', 'Organ Background', 'String Section']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Vinyl Crackle', 'Scratch Samples', 'Record Stop', 'Tape Hiss']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Rap Vocal', 'Vocal Sample Chops', 'Ad-libs']
        }
      ]
    },
    {
      id: 8,
      genre: 'hiphop',
      name: 'Trap Hip Hop',
      bpm: 150,
      key: 'B♭ Minor',
      description: 'Modern hip hop with trap influence and bouncy flow',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Punchy Kick', 'Layered Snare', 'Rapid Hi-Hats', '808 Rolls', 'Open Hat']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['808 Bass', 'Sub Layer']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Piano Loop', 'Bell Pattern', 'Synth Lead']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Pad', 'String Shots', 'Vocal Sample']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Riser', 'Impact', 'Vinyl Noise', 'Transition FX']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Rap Vocal', 'Ad-libs', 'Vocal Chops']
        }
      ]
    },
    {
      id: 9,
      genre: 'hiphop',
      name: 'Lo-fi Boom Bap',
      bpm: 88,
      key: 'A Minor',
      description: 'Chill lo-fi boom bap with dusty drums and jazz samples',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Dusty Kick', 'Vintage Snare', 'Brushed Hi-Hat', 'Shaker', 'Vinyl Noise Layer']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Upright Bass', 'Sub Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Jazz Sample', 'Rhodes Piano', 'Guitar Lick', 'Sax Sample']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Jazz Chords', 'String Sample', 'Warm Pad']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Vinyl Crackle', 'Tape Hiss', 'Lo-fi Filter', 'Bit Crusher']
        },
        {
          category: 'Ambient',
          color: 'bg-indigo-500',
          elements: ['Rain', 'Cafe Sounds', 'Record Noise']
        }
      ]
    },
    // POP TEMPLATES
    {
      id: 10,
      genre: 'pop',
      name: 'Modern Pop',
      bpm: 120,
      key: 'G Major',
      description: 'Radio-ready pop production with catchy hooks',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Tight Kick', 'Clap/Snare', 'Hi-Hat Pattern', 'Tambourine', 'Finger Snaps', 'Hand Claps']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Synth Bass', 'Sub Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Piano Hook', 'Synth Lead', 'Guitar Riff', 'Bells/Mallets']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Pad Chords', 'Synth Stabs', 'Guitar Chords', 'String Section']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Riser', 'Impact', 'Sweep', 'Vinyl Stop']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Lead Vocal', 'Harmonies', 'Background Vocals', 'Ad-libs']
        }
      ]
    },
    {
      id: 11,
      genre: 'pop',
      name: 'Dance Pop',
      bpm: 128,
      key: 'C Major',
      description: 'Upbeat dance pop with four-on-floor energy',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Four-on-Floor Kick', 'Clap', 'Hi-Hat (16ths)', 'Shaker', 'Crash', 'Tambourine']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Pumping Side-Chain Bass', 'Sub Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Synth Hook', 'Vocal Chops', 'Arp Synth']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Supersaw Pad', 'Piano Chords', 'Brass Stabs']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Riser', 'Downlifter', 'Impact', 'White Noise']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Lead Vocal', 'Vocal Harmonies', 'Vocal Chops', 'Talk Box']
        }
      ]
    },
    {
      id: 12,
      genre: 'pop',
      name: 'Indie Pop',
      bpm: 115,
      key: 'D Major',
      description: 'Organic indie pop with live instruments and warm production',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Live Kick', 'Live Snare', 'Hi-Hat', 'Tambourine', 'Shaker', 'Finger Snaps']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Electric Bass', 'Synth Bass Layer']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Acoustic Guitar', 'Electric Guitar Lead', 'Piano', 'Glockenspiel']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Acoustic Guitar Chords', 'Synth Pad', 'String Section']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Reverb Tail', 'Delay Throw', 'Tape Stop']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Natural Lead Vocal', 'Gang Vocals', 'Harmonies', 'Whistling']
        }
      ]
    },
    // ROCK TEMPLATES
    {
      id: 13,
      genre: 'rock',
      name: 'Alternative Rock',
      bpm: 140,
      key: 'D Major',
      description: 'Energetic alternative rock arrangement',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Live Kick', 'Live Snare', 'Tom Fills', 'Hi-Hat', 'Ride Cymbal', 'Crash Cymbal']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Electric Bass Guitar', 'Bass Octave Doubling']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Lead Guitar', 'Guitar Lick', 'Vocal Melody']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Rhythm Guitar (Distorted)', 'Clean Guitar Arpeggios', 'Organ/Keys']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Guitar Feedback', 'Delay Throw', 'Reverb Tail']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Lead Vocal', 'Harmony Vocals', 'Gang Vocals']
        }
      ]
    },
    {
      id: 14,
      genre: 'rock',
      name: 'Hard Rock',
      bpm: 130,
      key: 'E Minor',
      description: 'Heavy rock with powerful riffs and driving drums',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Double Bass Kick', 'Powerful Snare', 'Crash Cymbals', 'Hi-Hat', 'China Cymbal', 'Tom Fills']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Distorted Bass Guitar', 'Pick Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Guitar Solo', 'Lead Riff', 'Pinch Harmonics']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Power Chords', 'Rhythm Guitar (Heavy Distortion)', 'Breakdown Riff']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Guitar Feedback', 'Wah Pedal', 'Amp Noise']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Gritty Lead Vocal', 'Scream/Growl', 'Backing Vocals']
        }
      ]
    },
    {
      id: 15,
      genre: 'rock',
      name: 'Indie Rock',
      bpm: 135,
      key: 'A Major',
      description: 'Jangly indie rock with clean guitars and melodic vocals',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Punchy Kick', 'Snare', 'Hi-Hat', 'Ride', 'Crash', 'Tom Fills']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Melodic Bass Guitar', 'Picked Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Jangly Guitar Lead', 'Clean Guitar Melody', 'Keyboard Line']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Clean Rhythm Guitar', 'Arpeggiated Guitar', 'Organ', 'Synth Pad']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Reverb', 'Delay', 'Tremolo', 'Chorus']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Melodic Lead Vocal', 'Harmonies', 'Gang Vocals', 'Falsetto']
        }
      ]
    },
    // LO-FI TEMPLATES
    {
      id: 16,
      genre: 'lofi',
      name: 'Lo-fi Hip Hop',
      bpm: 85,
      key: 'C Minor',
      description: 'Chill lo-fi beats with vinyl texture',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Soft Kick', 'Dusty Snare', 'Rim Shot', 'Brush Hi-Hat', 'Shaker']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Warm Sub Bass', 'Upright Bass Sample']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Electric Piano', 'Guitar Loop', 'Music Box', 'Flute/Sax Sample']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Jazz Chords', 'Rhodes Piano', 'Warm Pad']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Vinyl Crackle', 'Rain Sounds', 'Tape Hiss', 'Record Pop', 'Filter Automation']
        },
        {
          category: 'Ambient',
          color: 'bg-indigo-500',
          elements: ['Cafe Ambience', 'Nature Sounds', 'Vocal Hums']
        }
      ]
    },
    {
      id: 17,
      genre: 'lofi',
      name: 'Lo-fi Study Beats',
      bpm: 78,
      key: 'F Major',
      description: 'Minimal lo-fi for studying and focus',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Soft Kick', 'Rimshot', 'Minimal Hi-Hat', 'Shaker']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Deep Sub Bass', 'Muted Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Piano Loop', 'Guitar Pluck', 'Kalimba', 'Harp']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Soft Pad', 'String Texture', 'Ambient Synth']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Vinyl Noise', 'Tape Warble', 'Lo-fi Filter']
        },
        {
          category: 'Ambient',
          color: 'bg-indigo-500',
          elements: ['White Noise', 'Fire Crackle', 'Wind Chimes']
        }
      ]
    },
    {
      id: 18,
      genre: 'lofi',
      name: 'Jazzhop',
      bpm: 92,
      key: 'B♭ Major',
      description: 'Jazz-influenced lo-fi with complex chords',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Swing Kick', 'Jazz Snare', 'Brush Cymbals', 'Ride Pattern']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Walking Jazz Bass', 'Sub Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Jazz Guitar', 'Trumpet Sample', 'Rhodes Solo', 'Vibraphone']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Jazz 7th Chords', 'Piano Comping', 'String Ensemble']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Vinyl Crackle', 'Tape Saturation', 'Room Reverb']
        },
        {
          category: 'Ambient',
          color: 'bg-indigo-500',
          elements: ['City Ambience', 'Night Sounds', 'Record Noise']
        }
      ]
    },
    // R&B TEMPLATES
    {
      id: 19,
      genre: 'rnb',
      name: 'R&B/Soul',
      bpm: 75,
      key: 'E♭ Major',
      description: 'Smooth R&B with rich harmonies',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Soft Kick', 'Snare (with ghost notes)', 'Hi-Hat (swing feel)', 'Rim Shot', 'Tambourine']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Deep Sub Bass', 'Synth Bass (filtered)', 'Electric Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Electric Piano Riff', 'Guitar Lick', 'Synth Lead']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Rhodes Chords', 'Lush Strings', 'Warm Pad', 'Organ']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Vinyl Noise', 'Tape Stop', 'Reverse Vocal']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Lead Vocal', 'Vocal Harmonies', 'Background Vocals', 'Vocal Runs']
        }
      ]
    },
    {
      id: 20,
      genre: 'rnb',
      name: 'Alternative R&B',
      bpm: 80,
      key: 'A Minor',
      description: 'Modern alternative R&B with electronic elements',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Punchy Kick', 'Clap/Snare', 'Hi-Hat Pattern', 'Percussion Loops', 'Rim Clicks']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['808 Bass', 'Synth Bass', 'Sub Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Synth Lead', 'Vocal Chops', 'Guitar Ambience', 'Keys']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Atmospheric Pad', 'Ambient Synth', 'Dark Chords']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Riser', 'Downlifter', 'Glitch Effects', 'Reverse FX']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Processed Lead Vocal', 'Vocal Layers', 'Pitched Vocals', 'Ad-libs']
        }
      ]
    },
    {
      id: 21,
      genre: 'rnb',
      name: 'Neo-Soul',
      bpm: 90,
      key: 'D Minor',
      description: 'Neo-soul with live instrumentation and organic grooves',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Live Kick', 'Live Snare (with ghost notes)', 'Open Hi-Hat', 'Shaker', 'Tambourine', 'Percussion']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Live Electric Bass', 'Upright Bass', 'Sub Layer']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Rhodes Piano', 'Guitar Licks', 'Organ Lead', 'Horn Section']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Jazz Chords (Rhodes)', 'String Arrangement', 'Wurlitzer', 'Pad']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Tape Warmth', 'Analog Saturation', 'Room Reverb']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Soulful Lead Vocal', 'Harmonies', 'Background Vocals', 'Vocal Runs', 'Ad-libs']
        }
      ]
    },
    // Additional templates (EDM, Trap, etc.)
    {
      id: 22,
      genre: 'edm',
      name: 'Dubstep',
      bpm: 140,
      key: 'G Minor',
      description: 'Heavy dubstep with wobble bass and half-time drums',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Sub Kick', 'Snare (half-time)', 'Hi-Hats', 'Snare Rolls', 'Crash']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Wobble Bass', 'Sub Bass', 'Growl Bass', 'Scream Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Atmospheric Lead', 'Arp Synth']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Dark Pad', 'Drone', 'Cinematic Strings']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Riser Build', 'Downsweep', 'Impact Hit', 'Vocal Chop FX', 'Gunshot/Laser']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Vocal Samples', 'Vocal Chops']
        }
      ]
    },
    {
      id: 23,
      genre: 'edm',
      name: 'Tech House',
      bpm: 126,
      key: 'A Minor',
      description: 'Groovy tech house with minimal elements and rolling basslines',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Tight Kick (Four-on-Floor)', 'Crisp Clap', 'Shaker Loop', 'Percussion Hits', 'Open Hi-Hat']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Rolling Bassline', 'Sub Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Minimal Synth Stab', 'Vocal Sample Chop']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Atmospheric Pad', 'Chord Stab']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Whoosh', 'Vinyl Effect', 'Filter Sweep']
        },
        {
          category: 'Groove Elements',
          color: 'bg-orange-500',
          elements: ['Cowbell', 'Bongo', 'Conga', 'Wood Block']
        }
      ]
    },
    {
      id: 24,
      genre: 'edm',
      name: 'Trance',
      bpm: 138,
      key: 'C# Minor',
      description: 'Uplifting trance with arpeggiated leads and epic breakdowns',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Punchy Kick', 'Clap', 'Rolling Hi-Hat (16ths)', 'Crash', 'Open Hat']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Pulsing Bassline', 'Sub Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Arp Lead', 'Pluck Melody', 'Synth Lead']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Supersaw Chords', 'Trance Pad', 'String Layer']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Long Riser', 'Gate Effect', 'Downlifter', 'Impact']
        }
      ]
    },
    {
      id: 25,
      genre: 'edm',
      name: 'Drum & Bass',
      bpm: 174,
      key: 'A Minor',
      description: 'High-energy drum & bass with complex breakbeats',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Punchy Kick', 'Layered Snare', 'Amen Break', 'Reese Drums', 'Cymbal Crashes']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Reese Bass', 'Sub Bass', 'Modulated Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Arp Synth', 'Vocal Chops', 'Atmospheric Lead']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Dark Pad', 'Ambient Texture']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Riser', 'Downlifter', 'Impact', 'Glitch FX']
        }
      ]
    },
    {
      id: 26,
      genre: 'trap',
      name: 'Rage Trap',
      bpm: 155,
      key: 'E Minor',
      description: 'Aggressive high-energy trap with distorted 808s',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Clipping Kick', 'Distorted Clap', 'Rapid Hi-Hats', 'Tom Rolls']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Distorted 808', 'Overdriven Sub']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Electric Guitar Riff', 'Distorted Synth Lead', 'Siren']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Power Chords', 'Dissonant Pad']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Guitar Feedback', 'Impact', 'Scream Sample']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Aggressive Vocal', 'Pitched Vocal', 'Screams']
        }
      ]
    },
    {
      id: 27,
      genre: 'hiphop',
      name: 'UK Drill',
      bpm: 140,
      key: 'D Minor',
      description: 'Dark UK drill with sliding 808s',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Punchy Kick', 'Layered Snare', 'Rapid Hi-Hats (32nd)', 'Percussion Rolls']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Sliding 808 Bass', 'Sub Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Piano Melody', 'Dark Synth', 'String Stabs']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Dark Pad', 'Ominous Strings', 'Choir']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Gunshot', 'Siren', 'Riser', 'Impact']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['UK Rap Vocal', 'Ad-libs', 'Vocal Chops']
        }
      ]
    },
    {
      id: 28,
      genre: 'pop',
      name: 'K-Pop',
      bpm: 125,
      key: 'B♭ Major',
      description: 'High-energy K-pop with dense production',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Punchy Kick', 'Layered Snare/Clap', 'Hi-Hat', 'Percussion Fills']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Synth Bass', 'Side-Chain Bass', 'Sub Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Synth Lead', 'Piano', 'Guitar Riff', 'Brass Hits']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Supersaw Pad', 'Chord Stabs', 'String Section']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Riser', 'Impact', 'Sweep', 'Glitch']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Lead Vocal', 'Rap Section', 'Harmonies', 'Ad-libs']
        }
      ]
    },
    {
      id: 29,
      genre: 'rock',
      name: 'Punk Rock',
      bpm: 180,
      key: 'A Major',
      description: 'Fast-paced punk rock with raw energy',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Fast Kick', 'Snare (on 2 & 4)', 'Hi-Hat (8ths)', 'Crash']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Picked Bass Guitar', 'Root Notes']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Guitar Riff', 'Simple Solo']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Power Chords', 'Distorted Rhythm Guitar']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Feedback', 'Amp Noise']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Shouted Vocal', 'Gang Vocals']
        }
      ]
    },
    {
      id: 30,
      genre: 'lofi',
      name: 'Chillhop',
      bpm: 90,
      key: 'D Minor',
      description: 'Relaxing chillhop with smooth jazz samples',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Soft Kick', 'Dusty Snare', 'Hi-Hat', 'Shaker']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Upright Bass', 'Sub Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Rhodes Piano', 'Jazz Guitar', 'Trumpet Sample']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Jazz Chords', 'Warm Pad']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Vinyl Crackle', 'Tape Hiss']
        },
        {
          category: 'Ambient',
          color: 'bg-indigo-500',
          elements: ['Cafe Sounds', 'Rain']
        }
      ]
    },
    {
      id: 31,
      genre: 'rnb',
      name: 'Trap Soul',
      bpm: 68,
      key: 'F Minor',
      description: 'Modern trap soul with 808s and emotional vocals',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['808 Kick', 'Snare/Clap', 'Hi-Hat Rolls', 'Rim Click']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['808 Bass', 'Sub Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Rhodes Piano', 'Guitar', 'Synth Lead']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Pad', 'Strings', 'Ambient Synth']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Riser', 'Vinyl Noise', 'Reverse Vocal']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Lead Vocal', 'Vocal Layers', 'Harmonies', 'Ad-libs']
        }
      ]
    }
  ];

  const genres = ['all', 'edm', 'trap', 'hiphop', 'pop', 'rock', 'lofi', 'rnb'];
  
  const filteredTemplates = currentFilter === 'all' 
    ? songTemplates 
    : songTemplates.filter(t => t.genre === currentFilter);

  return (
    <section id="templates" className="page-section">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Song <span className="text-gradient">Templates</span> 🎵</h2>
        <p className="text-purple-primary-300 mb-6">
          Production templates showing the essential layers and elements for different genres. Each template breaks down the drums, bass, melody, harmony, FX, and vocal components you need to build professional-sounding tracks.
        </p>

        {/* Genre Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setCurrentFilter(genre)}
              className={`template-filter px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                currentFilter === genre
                  ? 'bg-purple-primary-700/40 text-purple-primary-200 shadow-purple-glow'
                  : 'bg-purple-primary-700/20 text-purple-primary-300 hover:bg-purple-primary-700/30 hover:text-purple-primary-100'
              }`}
            >
              {genre === 'all' ? 'All Templates' : genre.charAt(0).toUpperCase() + genre.slice(1)}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div id="templates-container" className="space-y-8">
          {filteredTemplates.map((template) => (
            <div key={template.id} className="content-card overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-button p-6 shadow-purple-glow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white glow-text">{template.name}</h3>
                    <p className="text-purple-primary-200 text-sm mt-1 uppercase tracking-wide">{template.genre}</p>
                    <p className="text-purple-primary-200 text-sm mt-2 opacity-90">{template.description}</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                      <span className="text-purple-primary-200 text-xs">BPM</span>
                      <div className="text-white font-mono text-2xl font-bold">{template.bpm}</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                      <span className="text-purple-primary-200 text-xs">Key</span>
                      <div className="text-white font-bold">{template.key}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Production Layers */}
              <div className="p-6">
                <h4 className="text-xs font-bold text-purple-primary-400 uppercase mb-4">Production Elements</h4>
                <div className="space-y-4">
                  {template.layers.map((layer, index) => (
                    <div key={index} className="border border-purple-primary-600/30 rounded-lg overflow-hidden">
                      {/* Category Header */}
                      <div className={`${layer.color} px-4 py-3 flex items-center justify-between`}>
                        <h5 className="font-bold text-white uppercase tracking-wide text-sm">{layer.category}</h5>
                        <span className="text-white/80 text-xs font-mono">{layer.elements.length} elements</span>
                      </div>

                      {/* Elements List */}
                      <div className="p-4 bg-purple-dark-800/30">
                        <div className="flex flex-wrap gap-2">
                          {layer.elements.map((element, idx) => (
                            <span key={idx} className="badge badge-purple">
                              {element}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Color Legend */}
      <div className="mt-12 content-card">
        <h3 className="font-bold text-white mb-4">Category Color Guide</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-red-500 shadow-sm"></div>
            <span className="text-sm text-purple-primary-300">Drums</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-purple-500 shadow-sm"></div>
            <span className="text-sm text-purple-primary-300">Bass</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-blue-500 shadow-sm"></div>
            <span className="text-sm text-purple-primary-300">Melody</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-green-500 shadow-sm"></div>
            <span className="text-sm text-purple-primary-300">Harmony</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-yellow-500 shadow-sm"></div>
            <span className="text-sm text-purple-primary-300">FX / Effects</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-pink-500 shadow-sm"></div>
            <span className="text-sm text-purple-primary-300">Vocals</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-indigo-500 shadow-sm"></div>
            <span className="text-sm text-purple-primary-300">Ambient</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-purple-primary-600 shadow-sm"></div>
            <span className="text-sm text-purple-primary-300">Groove Elements</span>
          </div>
        </div>
      </div>
    </section>
  );
};