// services/aiService.ts
import { getThemeColors } from '../utils/chartUtils';

interface AIResponse {
  text: string;
}

interface SparkResponse {
  title: string;
  bpm: string;
  key: string;
  constraint: string;
}

class AIService {
  private apiKey: string | undefined;

  constructor() {
    this.apiKey = typeof window !== 'undefined' ? localStorage.getItem('gemini_api_key') || undefined : undefined;
  }

  async callGemini(prompt: string, systemContext: string, jsonMode: boolean = false): Promise<string | null> {
    if (!this.apiKey) {
      // Fallback to mock responses if no API key is provided
      return this.getMockResponse(prompt, systemContext, jsonMode);
    }

    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${this.apiKey}`;
      const payload: any = { 
        contents: [{ 
          parts: [{ 
            text: systemContext + "\n\nUser Query: " + prompt 
          }] 
        }] 
      };
      
      if (jsonMode) {
        payload.generationConfig = { responseMimeType: "application/json" };
      }

      const response = await fetch(url, { 
        method: 'POST', 
        headers: { 
          'Content-Type': 'application/json' 
        }, 
        body: JSON.stringify(payload) 
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text || null;
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      return jsonMode ? null : "Error connecting to AI service.";
    }
  }

  private getMockResponse(prompt: string, systemContext: string, jsonMode: boolean): string | null {
    // Mock responses for FL Studio related queries
    if (jsonMode) {
      // Mock responses for creative sparks
      const genre = prompt.toLowerCase();
      const genres: Record<string, SparkResponse> = {
        'electronic': { title: 'Digital Rain', bpm: '128', key: 'F# Minor', constraint: 'Use only synthesized sounds' },
        'hip hop': { title: 'Urban Dreams', bpm: '90', key: 'C Minor', constraint: 'Use only vinyl samples' },
        'rock': { title: 'Midnight Drive', bpm: '130', key: 'E Major', constraint: 'Use only guitar and drums' },
        'pop': { title: 'Neon Lights', bpm: '110', key: 'A Major', constraint: 'Use only 80s-style sounds' },
        'lofi': { title: 'Study Time', bpm: '85', key: 'G Major', constraint: 'Use only warm, analog sounds' },
      };
      
      return JSON.stringify(genres[genre] || { 
        title: 'Creative Spark', 
        bpm: '120', 
        key: 'D Minor', 
        constraint: 'Use unconventional sound sources' 
      });
    } else {
      // Mock responses for other queries
      if (systemContext.includes("FL Studio Instructor")) {
        return `I'm a simulation of an FL Studio assistant. In a real implementation, I would provide specific guidance for: "${prompt}". To get real AI assistance, please set your Gemini API key in the settings.`;
      } else if (systemContext.includes("sound designer")) {
        const recipes: Record<string, string> = {
          'dark reese bass': 'For a dark Reese bass: Start with Saw 1 & Saw 2 in Sytrus. Detune Saw 2 by +5 cents. Use the Reese preset. Apply a low-pass filter (cutoff 2000Hz, resonance 0.7). Add a short release (0.2s) and medium decay (0.5s). Route through a distortion unit with drive at 25%.',
          'bright pluck': 'For a bright pluck: Use Direct One with a bright preset. Apply a fast attack (0.001s) and medium decay (0.3s). Add a high-pass filter at 120Hz. Apply a touch of chorus and delay for spatial width.',
          'ambient pad': 'For an ambient pad: Start with a simple sine wave. Layer with a filtered white noise. Use a slow attack (1.5s) and long release (2s). Apply a reverb with a large room size and long decay time.',
          'punchy kick': 'For a punchy kick: Use Morphine with a sub-bass oscillator. Set the pitch envelope to drop from 100Hz to 50Hz over 0.1s. Add a transient designer to emphasize the initial attack. Apply a high-pass filter at 30Hz and a low-pass at 100Hz.',
        };
        
        return recipes[prompt.toLowerCase()] || recipes['bright pluck'];
      }
    }
    
    return "This is a mock response. To get real AI assistance, please set your Gemini API key in the settings.";
  }

  // Method to set the API key
  setApiKey(key: string) {
    this.apiKey = key;
    if (typeof window !== 'undefined') {
      localStorage.setItem('gemini_api_key', key);
    }
  }

  // Method to remove the API key
  removeApiKey() {
    this.apiKey = undefined;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('gemini_api_key');
    }
  }

  // Check if API key is available
  hasApiKey(): boolean {
    return !!this.apiKey;
  }
}

export const aiService = new AIService();