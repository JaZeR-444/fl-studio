// components/SettingsPanel.tsx
import { useState } from 'react';
import { aiService } from '@/services/aiService';

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SettingsPanel = ({ isOpen, onClose }: SettingsPanelProps) => {
  const [apiKey, setApiKey] = useState('');
  const [showApiKey, setShowApiKey] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');

  if (!isOpen) return null;

  const handleSave = () => {
    if (!apiKey.trim()) {
      setSaveStatus('error');
      return;
    }

    try {
      setSaveStatus('saving');
      aiService.setApiKey(apiKey);
      setSaveStatus('saved');
      setTimeout(() => {
        setSaveStatus('idle');
        onClose();
      }, 1500);
    } catch (error) {
      setSaveStatus('error');
      console.error('Error saving API key:', error);
    }
  };

  const handleClear = () => {
    aiService.removeApiKey();
    setApiKey('');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="content-card w-full max-w-md shadow-purple-glow-lg">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-white">Settings</h3>
            <button
              onClick={onClose}
              className="text-purple-primary-300 hover:text-purple-primary-100 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-purple-primary-200 mb-2">
                Gemini API Key
              </label>
              <div className="flex space-x-2">
                <input
                  type={showApiKey ? "text" : "password"}
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="Enter your Gemini API key"
                  className="flex-1 p-3 border border-purple-primary-600/30 bg-purple-dark-800/30 text-white placeholder-purple-primary-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-primary-500"
                />
                <button
                  type="button"
                  onClick={() => setShowApiKey(!showApiKey)}
                  className="btn-glass px-4 py-2"
                >
                  {showApiKey ? 'Hide' : 'Show'}
                </button>
              </div>
              <p className="mt-2 text-xs text-purple-primary-400">
                Your API key is stored locally and never sent to any server except Google's Gemini API.
              </p>
            </div>

            {aiService.hasApiKey() && (
              <div className="p-3 bg-purple-primary-700/20 border border-purple-primary-600/30 rounded-lg">
                <p className="text-sm text-purple-primary-200">
                  API key is currently configured. You can clear it to disable API calls.
                </p>
              </div>
            )}

            <div className="flex justify-end space-x-3 pt-4">
              {aiService.hasApiKey() && (
                <button
                  onClick={handleClear}
                  className="btn-glass px-4 py-2"
                >
                  Clear Key
                </button>
              )}
              <button
                onClick={handleSave}
                disabled={saveStatus === 'saving'}
                className={`btn-gradient px-4 py-2 ${
                  saveStatus === 'saving' ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {saveStatus === 'saving' ? 'Saving...' : 'Save Key'}
              </button>
            </div>

            {saveStatus === 'saved' && (
              <div className="p-3 bg-green-500/20 border border-green-500/30 rounded-lg">
                <p className="text-sm text-green-300">
                  API key saved successfully! The AI Assistant will now use the real Gemini API.
                </p>
              </div>
            )}

            {saveStatus === 'error' && (
              <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
                <p className="text-sm text-red-300">
                  Please enter a valid API key.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};