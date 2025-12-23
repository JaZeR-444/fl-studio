// components/sections/AudioAnalysis.tsx
import { useState, useRef, useEffect } from 'react';
import { Chart as ChartJS, BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

export const AudioAnalysisSection = () => {
  const [activeTool, setActiveTool] = useState('frequency');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [analysisResults, setAnalysisResults] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [analyser, setAnalyser] = useState<AnalyserNode | null>(null);

  // Frequency data for visualization when no file is loaded
  const frequencyData = {
    labels: ['20Hz', '60Hz', '200Hz', '600Hz', '2kHz', '6kHz', '20kHz'],
    datasets: [
      {
        label: 'Amplitude',
        data: [85, 75, 80, 70, 60, 50, 30],
        backgroundColor: [
          'rgba(249, 115, 22, 0.5)',
          'rgba(249, 115, 22, 0.5)',
          'rgba(249, 115, 22, 0.5)',
          'rgba(249, 115, 22, 0.5)',
          'rgba(249, 115, 22, 0.5)',
          'rgba(249, 115, 22, 0.5)',
          'rgba(249, 115, 22, 0.5)',
        ],
        borderColor: [
          'rgba(249, 115, 22, 1)',
          'rgba(249, 115, 22, 1)',
          'rgba(249, 115, 22, 1)',
          'rgba(249, 115, 22, 1)',
          'rgba(249, 115, 22, 1)',
          'rgba(249, 115, 22, 1)',
          'rgba(249, 115, 22, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const waveformData = {
    labels: Array.from({ length: 50 }, (_, i) => String(i + 1)),
    datasets: [
      {
        label: 'Amplitude',
        data: Array.from({ length: 50 }, () => Math.floor(Math.random() * 100)),
        backgroundColor: 'rgba(14, 165, 233, 0.5)',
        borderColor: 'rgba(14, 165, 233, 1)',
        borderWidth: 1,
      },
    ],
  };

  const spectrumData = {
    labels: ['Bass', 'Low Mid', 'Mid', 'High Mid', 'Treble'],
    datasets: [
      {
        label: 'Energy',
        data: [70, 65, 75, 60, 50],
        backgroundColor: [
          'rgba(16, 185, 129, 0.5)',
          'rgba(16, 185, 129, 0.5)',
          'rgba(16, 185, 129, 0.5)',
          'rgba(16, 185, 129, 0.5)',
          'rgba(16, 185, 129, 0.5)',
        ],
        borderColor: [
          'rgba(16, 185, 129, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(16, 185, 129, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: activeTool === 'frequency' 
          ? 'Frequency Spectrum Analysis' 
          : activeTool === 'waveform' 
            ? 'Waveform Visualization' 
            : 'Spectral Energy Distribution',
        color: '#1e293b', // text-stone-800
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: '#52525b'
        },
        ticks: {
          color: '#d4d4d4'
        }
      },
      x: {
        grid: { 
          display: false,
          color: '#52525b'
        },
        ticks: {
          color: '#d4d4d4'
        }
      }
    }
  };

  // Handle file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setAudioFile(files[0]);
      // Reset the input to allow re-uploading the same file
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  // Simulate audio analysis
  const triggerAnalysis = () => {
    if (!audioFile) return;
    
    setIsAnalyzing(true);
    
    // Simulate analysis process
    setTimeout(() => {
      // Mock analysis results
      const mockResults = {
        duration: '3:45',
        sampleRate: '44.1 kHz',
        bitDepth: '24-bit',
        fileSize: '15.7 MB',
        frequencyRange: '20 Hz - 20 kHz',
        dBFS: '-6.2 dBFS',
        rms: '0.234',
        peak: '0.987'
      };
      
      setAnalysisResults(mockResults);
      setIsAnalyzing(false);
    }, 2000);
  };

  // Get the current chart data based on active tool
  const getChartData = () => {
    switch (activeTool) {
      case 'frequency':
        return frequencyData;
      case 'waveform':
        return waveformData;
      case 'spectrum':
        return spectrumData;
      default:
        return frequencyData;
    }
  };

  // Clean up audio context on unmount
  useEffect(() => {
    return () => {
      if (audioContext) {
        audioContext.close();
      }
    };
  }, [audioContext]);

  return (
    <section id="audio-analysis" className="page-section">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-stone-900 dark:text-white mb-6">Audio Analysis Tools</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* File Upload Panel */}
          <div className="lg:col-span-1 bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-stone-200 dark:border-zinc-700 p-6">
            <h3 className="text-xl font-bold text-stone-800 dark:text-white mb-4">Upload Audio File</h3>
            
            <div 
              className="border-2 border-dashed border-stone-300 dark:border-zinc-600 rounded-lg p-8 text-center cursor-pointer hover:border-orange-500 transition-colors"
              onClick={() => fileInputRef.current?.click()}
            >
              <div className="flex flex-col items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-stone-400 dark:text-zinc-500 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-stone-600 dark:text-zinc-400">
                  {audioFile ? audioFile.name : 'Click to upload audio file'}
                </p>
                <p className="text-sm text-stone-500 dark:text-zinc-500 mt-1">
                  Supports WAV, MP3, FLAC, AIFF formats
                </p>
              </div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                accept=".wav,.mp3,.flac,.aiff,.m4a"
                className="hidden"
              />
            </div>

            <div className="mt-4 space-y-3">
              <button
                onClick={triggerAnalysis}
                disabled={!audioFile || isAnalyzing}
                className={`w-full px-4 py-2 rounded-lg font-medium transition-colors ${
                  !audioFile || isAnalyzing
                    ? 'bg-stone-200 dark:bg-zinc-700 text-stone-500 dark:text-zinc-400 cursor-not-allowed'
                    : 'bg-orange-600 hover:bg-orange-700 text-white'
                }`}
              >
                {isAnalyzing ? 'Analyzing...' : 'Analyze Audio'}
              </button>
              
              <button
                onClick={() => {
                  setAudioFile(null);
                  setAnalysisResults(null);
                  if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                  }
                }}
                disabled={!audioFile && !analysisResults}
                className={`w-full px-4 py-2 rounded-lg font-medium transition-colors ${
                  !audioFile && !analysisResults
                    ? 'bg-stone-200 dark:bg-zinc-700 text-stone-500 dark:text-zinc-400 cursor-not-allowed'
                    : 'bg-stone-200 dark:bg-zinc-700 text-stone-700 dark:text-zinc-300 hover:bg-stone-300 dark:hover:bg-zinc-600'
                }`}
              >
                Clear
              </button>
            </div>

            {audioFile && (
              <div className="mt-4 p-3 bg-stone-50 dark:bg-zinc-700/30 rounded-lg">
                <p className="text-sm text-stone-600 dark:text-zinc-400 truncate">
                  <span className="font-medium">File:</span> {audioFile.name}
                </p>
                <p className="text-sm text-stone-600 dark:text-zinc-400">
                  <span className="font-medium">Size:</span> {(audioFile.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
            )}

            {analysisResults && (
              <div className="mt-4 space-y-2">
                <h4 className="font-bold text-stone-800 dark:text-white">Analysis Results</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="p-2 bg-stone-100 dark:bg-zinc-700 rounded">
                    <p className="text-stone-500 dark:text-zinc-400">Duration</p>
                    <p className="font-medium">{analysisResults.duration}</p>
                  </div>
                  <div className="p-2 bg-stone-100 dark:bg-zinc-700 rounded">
                    <p className="text-stone-500 dark:text-zinc-400">Sample Rate</p>
                    <p className="font-medium">{analysisResults.sampleRate}</p>
                  </div>
                  <div className="p-2 bg-stone-100 dark:bg-zinc-700 rounded">
                    <p className="text-stone-500 dark:text-zinc-400">Bit Depth</p>
                    <p className="font-medium">{analysisResults.bitDepth}</p>
                  </div>
                  <div className="p-2 bg-stone-100 dark:bg-zinc-700 rounded">
                    <p className="text-stone-500 dark:text-zinc-400">Level</p>
                    <p className="font-medium">{analysisResults.dBFS}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Visualization Panel */}
          <div className="lg:col-span-2 bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-stone-200 dark:border-zinc-700 p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-stone-800 dark:text-white">Audio Visualization</h3>
              <div className="flex space-x-2">
                <button
                  onClick={() => setActiveTool('frequency')}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                    activeTool === 'frequency'
                      ? 'bg-orange-600 text-white'
                      : 'bg-stone-200 dark:bg-zinc-700 text-stone-700 dark:text-zinc-300 hover:bg-stone-300 dark:hover:bg-zinc-600'
                  }`}
                >
                  Spectrum
                </button>
                <button
                  onClick={() => setActiveTool('waveform')}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                    activeTool === 'waveform'
                      ? 'bg-orange-600 text-white'
                      : 'bg-stone-200 dark:bg-zinc-700 text-stone-700 dark:text-zinc-300 hover:bg-stone-300 dark:hover:bg-zinc-600'
                  }`}
                >
                  Waveform
                </button>
                <button
                  onClick={() => setActiveTool('spectrum')}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                    activeTool === 'spectrum'
                      ? 'bg-orange-600 text-white'
                      : 'bg-stone-200 dark:bg-zinc-700 text-stone-700 dark:text-zinc-300 hover:bg-stone-300 dark:hover:bg-zinc-600'
                  }`}
                >
                  Energy
                </button>
              </div>
            </div>
            
            <div className="h-80">
              <Bar data={getChartData()} options={chartOptions} />
            </div>
            
            <div className="mt-6">
              <h4 className="font-bold text-stone-800 dark:text-white mb-2">
                {activeTool === 'frequency' 
                  ? 'Frequency Spectrum Analysis' 
                  : activeTool === 'waveform' 
                    ? 'Waveform Visualization' 
                    : 'Spectral Energy Distribution'}
              </h4>
              
              {activeTool === 'frequency' && (
                <div className="text-stone-600 dark:text-zinc-400 text-sm">
                  <p>
                    This visualization shows the frequency content of your audio. 
                    The x-axis represents frequency range from 20Hz (bass) to 20kHz (treble), 
                    and the y-axis shows the amplitude at each frequency band.
                  </p>
                  <p className="mt-2">
                    <span className="font-semibold">Bass</span> (20Hz-250Hz): Foundation and low-end energy<br />
                    <span className="font-semibold">Low Mid</span> (250Hz-500Hz): Body of the sound<br />
                    <span className="font-semibold">Mid</span> (500Hz-2kHz): Core of the sound<br />
                    <span className="font-semibold">High Mid</span> (2kHz-6kHz): Clarity and presence<br />
                    <span className="font-semibold">Treble</span> (6kHz-20kHz): Brightness and detail
                  </p>
                </div>
              )}
              
              {activeTool === 'waveform' && (
                <div className="text-stone-600 dark:text-zinc-400 text-sm">
                  <p>
                    The waveform visualization shows the amplitude of your audio over time. 
                    Peaks represent high amplitude (loud parts) and valleys represent low amplitude (quiet parts).
                  </p>
                  <p className="mt-2">
                    Use this view to identify transients, dynamic range, and overall loudness patterns. 
                    A well-balanced mix typically shows variation in amplitude without constant peaks at maximum level.
                  </p>
                </div>
              )}
              
              {activeTool === 'spectrum' && (
                <div className="text-stone-600 dark:text-zinc-400 text-sm">
                  <p>
                    This visualization shows the energy distribution across frequency ranges. 
                    It helps identify where most of the audio energy is concentrated.
                  </p>
                  <p className="mt-2">
                    <span className="font-semibold">Bass</span> (20Hz-250Hz): Low-frequency foundation<br />
                    <span className="font-semibold">Low Mid</span> (250Hz-500Hz): Fundamental frequencies<br />
                    <span className="font-semibold">Mid</span> (500Hz-2kHz): Core musical content<br />
                    <span className="font-semibold">High Mid</span> (2kHz-6kHz): Detail and clarity<br />
                    <span className="font-semibold">Treble</span> (6kHz-20kHz): Air and brightness
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Additional Tools */}
        <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-stone-200 dark:border-zinc-700 p-6">
          <h3 className="text-xl font-bold text-stone-800 dark:text-white mb-4">Additional Analysis Tools</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-stone-50 dark:bg-zinc-700/30 rounded-lg border border-stone-200 dark:border-zinc-600">
              <h4 className="font-bold text-stone-800 dark:text-white mb-2">Dynamic Range</h4>
              <p className="text-sm text-stone-600 dark:text-zinc-400 mb-3">
                Analyze the difference between the loudest and quietest parts of your audio
              </p>
              <button className="text-sm px-3 py-1.5 bg-stone-200 dark:bg-zinc-600 text-stone-700 dark:text-zinc-300 rounded hover:bg-stone-300 dark:hover:bg-zinc-500">
                Analyze
              </button>
            </div>
            
            <div className="p-4 bg-stone-50 dark:bg-zinc-700/30 rounded-lg border border-stone-200 dark:border-zinc-600">
              <h4 className="font-bold text-stone-800 dark:text-white mb-2">Stereo Field</h4>
              <p className="text-sm text-stone-600 dark:text-zinc-400 mb-3">
                Visualize the stereo positioning and width of your audio
              </p>
              <button className="text-sm px-3 py-1.5 bg-stone-200 dark:bg-zinc-600 text-stone-700 dark:text-zinc-300 rounded hover:bg-stone-300 dark:hover:bg-zinc-500">
                Analyze
              </button>
            </div>
            
            <div className="p-4 bg-stone-50 dark:bg-zinc-700/30 rounded-lg border border-stone-200 dark:border-zinc-600">
              <h4 className="font-bold text-stone-800 dark:text-white mb-2">Loudness Meter</h4>
              <p className="text-sm text-stone-600 dark:text-zinc-400 mb-3">
                Measure integrated, momentary, and peak loudness levels
              </p>
              <button className="text-sm px-3 py-1.5 bg-stone-200 dark:bg-zinc-600 text-stone-700 dark:text-zinc-300 rounded hover:bg-stone-300 dark:hover:bg-zinc-500">
                Analyze
              </button>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-stone-200 dark:border-zinc-700">
            <h4 className="font-bold text-stone-800 dark:text-white mb-3">Analysis Tips</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span><strong>Bass frequencies</strong> (20-250Hz) provide the foundation of your mix</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span><strong>Mid frequencies</strong> (250Hz-4kHz) contain most musical information</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span><strong>Treble frequencies</strong> (4kHz-20kHz) add clarity and air</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span>Watch for frequency <strong>clashes</strong> where instruments compete</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
