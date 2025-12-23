import { useState } from 'react';
import { aiService } from '@/services/aiService';
import { AIHistoryItem, SparkResult } from '@/types';

export const AIAssistantSection = () => {
  const [activeTab, setActiveTab] = useState('guru');
  const [guruInput, setGuruInput] = useState('');
  const [guruHistory, setGuruHistory] = useState<AIHistoryItem[]>([
    { id: 1, text: 'Hello! Ask me about shortcuts, routing, or plugins.', isUser: false }
  ]);
  const [soundInput, setSoundInput] = useState('');
  const [recipeOutput, setRecipeOutput] = useState('');
  const [recipeLoading, setRecipeLoading] = useState(false);
  const [sparkInput, setSparkInput] = useState('');
  const [sparkResult, setSparkResult] = useState<SparkResult>({ title: '', bpm: '', key: '', constraint: '' });
  const [sparkLoading, setSparkLoading] = useState(false);

  // Handle AI tab switching
  const switchAiTab = (tab: string) => {
    setActiveTab(tab);
  };

  // Handle guru question submission
  const askGuru = async () => {
    if (!guruInput.trim()) return;

    // Add user message to history
    const userQuestion: AIHistoryItem = { id: Date.now(), text: guruInput, isUser: true };
    setGuruHistory(prev => [...prev, userQuestion]);

    // Call AI service
    const response = await aiService.callGemini(
      guruInput,
      "You are an expert FL Studio Instructor. Keep it short."
    );

    if (response) {
      const aiResponse: AIHistoryItem = { id: Date.now() + 1, text: response, isUser: false };
      setGuruHistory(prev => [...prev, aiResponse]);
    }

    setGuruInput('');
  };

  // Handle sound recipe generation
  const generateRecipe = async () => {
    if (!soundInput.trim()) return;

    setRecipeLoading(true);
    setRecipeOutput('');

    // Call AI service
    const response = await aiService.callGemini(
      `Recipe for: ${soundInput}`,
      "You are a sound designer. Recommend 1 stock plugin and bullet steps. Use HTML."
    );

    if (response) {
      setRecipeOutput(response);
    }

    setRecipeLoading(false);
  };

  // Handle idea generation for spark
  const generateSpark = async () => {
    if (!sparkInput.trim()) return;

    setSparkLoading(true);

    // Call AI service
    const response = await aiService.callGemini(
      sparkInput,
      `Output JSON: {title, bpm, key, constraint}`,
      true
    ) as string | null;

    if (response) {
      try {
        const data: SparkResult = JSON.parse(response);
        setSparkResult(data);
      } catch (error) {
        console.error('Error parsing AI response:', error);
        // Fallback to default if JSON parsing fails
        setSparkResult({
          title: 'Creative Spark',
          bpm: '120',
          key: 'D Minor',
          constraint: 'Use unconventional sound sources'
        });
      }
    }

    setSparkLoading(false);
  };

  return (
    <section id="ai-assistant" className="page-section">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
          <span className="text-gradient">AI Studio</span> Assistant <span className="text-lg ml-2">✨</span>
        </h2>
        <p className="text-purple-primary-300 mb-6">
          Stuck on a workflow or need creative inspiration?
        </p>

        {/* AI Tool Selector */}
        <div className="flex space-x-2 mb-6 overflow-x-auto">
          <button
            onClick={() => switchAiTab('guru')}
            id="ai-tab-guru"
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
              activeTab === 'guru'
                ? 'btn-gradient'
                : 'glass-card text-purple-primary-300 border border-purple-primary-600/30 hover:bg-purple-primary-900/30'
            }`}
          >
            FL Guru
          </button>
          <button
            onClick={() => switchAiTab('chef')}
            id="ai-tab-chef"
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
              activeTab === 'chef'
                ? 'btn-gradient'
                : 'glass-card text-purple-primary-300 border border-purple-primary-600/30 hover:bg-purple-primary-900/30'
            }`}
          >
            Sound Chef
          </button>
          <button
            onClick={() => switchAiTab('spark')}
            id="ai-tab-spark"
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
              activeTab === 'spark'
                ? 'btn-gradient'
                : 'glass-card text-purple-primary-300 border border-purple-primary-600/30 hover:bg-purple-primary-900/30'
            }`}
          >
            Idea Spark ⚡
          </button>
        </div>

        <div className="h-[550px] relative">

          {/* Tool 1: The FL Guru */}
          <div
            id="ai-view-guru"
            className={`ai-view absolute inset-0 content-card overflow-hidden flex flex-col z-10 ${
              activeTab === 'guru'
                ? 'block'
                : 'hidden'
            }`}
          >
            <div className="bg-purple-primary-900/40 p-4 border-b border-purple-primary-600/30 flex items-center justify-between">
              <h3 className="font-bold text-purple-primary-200 flex items-center">
                <span className="text-xl mr-2">🎓</span> FL Guru
              </h3>
            </div>
            <div
              id="guru-history"
              className="flex-1 p-4 overflow-y-auto space-y-4 bg-purple-primary-900/20"
            >
              {guruHistory.map((msg) => (
                <div
                  key={msg.id}
                  className={`max-w-[90%] ${msg.isUser ? 'ml-auto' : 'mr-auto'} p-3 rounded-lg ${
                    msg.isUser
                      ? 'bg-gradient-to-r from-purple-primary-600 to-purple-primary-500 text-white'
                      : 'glass-card border border-purple-primary-600/30 text-purple-primary-200'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
              ))}
            </div>
            <div className="p-4 bg-purple-primary-900/30 border-t border-purple-primary-600/30">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={guruInput}
                  onChange={(e) => setGuruInput(e.target.value)}
                  placeholder="e.g. How do I sidechain?"
                  className="flex-1 p-2 border border-purple-primary-600/30 bg-purple-primary-900/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-primary-500 text-sm placeholder-purple-primary-400"
                  onKeyPress={(e) => e.key === 'Enter' && askGuru()}
                />
                <button
                  onClick={askGuru}
                  className="btn-gradient px-4 py-2 rounded-lg font-medium text-sm"
                >
                  Ask
                </button>
              </div>
            </div>
          </div>

          {/* Tool 2: Sound Design Chef */}
          <div
            id="ai-view-chef"
            className={`ai-view absolute inset-0 content-card overflow-hidden flex flex-col ${
              activeTab === 'chef'
                ? 'block'
                : 'hidden'
            }`}
          >
            <div className="bg-purple-primary-900/40 p-4 border-b border-purple-primary-600/30 flex items-center justify-between">
              <h3 className="font-bold text-purple-primary-200 flex items-center">
                <span className="text-xl mr-2">🍳</span> Sound Design Chef
              </h3>
            </div>
            <div className="p-6 overflow-y-auto flex-1 bg-purple-primary-900/20">
              <div className="flex space-x-2 mb-6">
                <input
                  type="text"
                  value={soundInput}
                  onChange={(e) => setSoundInput(e.target.value)}
                  placeholder="e.g. Dark Reese Bass"
                  className="flex-1 p-3 border border-purple-primary-600/30 bg-purple-primary-900/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-primary-500 placeholder-purple-primary-400"
                  onKeyPress={(e) => e.key === 'Enter' && generateRecipe()}
                />
                <button
                  onClick={generateRecipe}
                  className="btn-gradient px-4 py-2 rounded-lg font-bold"
                >
                  Cook It
                </button>
              </div>

              {recipeOutput && (
                <div id="recipe-output" className="animate-fade">
                  <h4 className="font-bold text-white border-b border-purple-primary-600/30 pb-2 mb-3">Your Recipe:</h4>
                  <div id="recipe-content" className="text-sm text-purple-primary-300 space-y-3 leading-relaxed">
                    {recipeOutput.split('\n').map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              )}

              {recipeLoading && (
                <div id="recipe-loader" className="flex flex-col items-center justify-center py-10">
                  <div className="flex space-x-2 mb-2">
                    <div className="w-3 h-3 bg-purple-primary-400 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-purple-primary-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-3 h-3 bg-purple-primary-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                  <p className="text-purple-primary-300 mt-2">Cooking your sound recipe...</p>
                </div>
              )}
            </div>
          </div>

          {/* Tool 3: Idea Spark */}
          <div
            id="ai-view-spark"
            className={`ai-view absolute inset-0 content-card overflow-hidden flex flex-col ${
              activeTab === 'spark'
                ? 'block'
                : 'hidden'
            }`}
          >
            <div className="bg-purple-primary-900/40 p-4 border-b border-purple-primary-600/30 flex items-center justify-between">
              <h3 className="font-bold text-purple-primary-200 flex items-center">
                <span className="text-xl mr-2">⚡</span> Idea Spark
              </h3>
            </div>
            <div className="p-6 flex-1 flex flex-col bg-purple-primary-900/20 overflow-y-auto">
              <div className="text-center mb-8">
                <p className="text-purple-primary-300 mb-4 text-sm">Enter a genre to start.</p>
                <div className="flex max-w-md mx-auto space-x-2">
                  <input
                    type="text"
                    value={sparkInput}
                    onChange={(e) => setSparkInput(e.target.value)}
                    placeholder="e.g. Cyberpunk"
                    className="flex-1 p-3 border border-purple-primary-600/30 bg-purple-primary-900/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-primary-500 placeholder-purple-primary-400"
                    onKeyPress={(e) => e.key === 'Enter' && generateSpark()}
                  />
                  <button
                    onClick={generateSpark}
                    className="btn-gradient px-6 py-2 rounded-lg font-bold"
                  >
                    Spark
                  </button>
                </div>
              </div>

              {sparkResult.title && (
                <div
                  id="spark-result"
                  className="max-w-md mx-auto w-full glass-card border border-purple-primary-600/30 p-6 space-y-4 animate-fade"
                >
                  <div>
                    <span className="text-xs font-bold text-purple-primary-400 uppercase tracking-wide">Track Title</span>
                    <h2 id="spark-title" className="text-2xl font-bold text-purple-primary-200">{sparkResult.title}</h2>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-xs font-bold text-purple-primary-400 uppercase tracking-wide">BPM</span>
                      <p id="spark-bpm" className="text-white font-mono">{sparkResult.bpm}</p>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-purple-primary-400 uppercase tracking-wide">Key</span>
                      <p id="spark-key" className="text-white font-mono">{sparkResult.key}</p>
                    </div>
                  </div>
                  <div className="bg-purple-primary-900/40 p-3 rounded-lg border border-purple-primary-600/30">
                    <span className="text-xs font-bold text-purple-primary-300 uppercase tracking-wide block mb-1">Constraint</span>
                    <p id="spark-constraint" className="text-sm text-purple-primary-200 font-medium">{sparkResult.constraint}</p>
                  </div>
                </div>
              )}

              {sparkLoading && (
                <div id="spark-loader" className="flex-1 flex flex-col items-center justify-center">
                  <div className="flex space-x-2 mb-2">
                    <div className="w-3 h-3 bg-purple-primary-400 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-purple-primary-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-3 h-3 bg-purple-primary-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                  <p className="text-purple-primary-300 mt-2">Generating your creative spark...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};