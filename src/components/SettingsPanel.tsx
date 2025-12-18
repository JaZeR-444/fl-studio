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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-xl border border-stone-200 dark:border-zinc-700 w-full max-w-md">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-stone-900 dark:text-white">Settings</h3>
            <button 
              onClick={onClose}
              className="text-stone-500 hover:text-stone-700 dark:text-zinc-400 dark:hover:text-zinc-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-stone-700 dark:text-zinc-300 mb-2">
                Gemini API Key
              </label>
              <div className="flex space-x-2">
                <input
                  type={showApiKey ? "text" : "password"}
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="Enter your Gemini API key"
                  className="flex-1 p-3 border border-stone-300 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                  type="button"
                  onClick={() => setShowApiKey(!showApiKey)}
                  className="px-4 py-2 border border-stone-300 dark:border-zinc-600 rounded-lg text-sm font-medium text-stone-700 dark:text-zinc-300 hover:bg-stone-50 dark:hover:bg-zinc-700"
                >
                  {showApiKey ? 'Hide' : 'Show'}
                </button>
              </div>
              <p className="mt-2 text-xs text-stone-500 dark:text-zinc-400">
                Your API key is stored locally and never sent to any server except Google's Gemini API.
              </p>
            </div>

            {aiService.hasApiKey() && (
              <div className="p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
                <p className="text-sm text-amber-700 dark:text-amber-300">
                  API key is currently configured. You can clear it to disable API calls.
                </p>
              </div>
            )}

            <div className="flex justify-end space-x-3 pt-4">
              {aiService.hasApiKey() && (
                <button
                  onClick={handleClear}
                  className="px-4 py-2 border border-stone-300 dark:border-zinc-600 rounded-lg text-sm font-medium text-stone-700 dark:text-zinc-300 hover:bg-stone-50 dark:hover:bg-zinc-700"
                >
                  Clear Key
                </button>
              )}
              <button
                onClick={handleSave}
                disabled={saveStatus === 'saving'}
                className={`px-4 py-2 rounded-lg text-sm font-medium text-white ${
                  saveStatus === 'saving' 
                    ? 'bg-orange-400' 
                    : 'bg-orange-600 hover:bg-orange-700'
                }`}
              >
                {saveStatus === 'saving' ? 'Saving...' : 'Save Key'}
              </button>
            </div>

            {saveStatus === 'saved' && (
              <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <p className="text-sm text-green-700 dark:text-green-300">
                  API key saved successfully! The AI Assistant will now use the real Gemini API.
                </p>
              </div>
            )}

            {saveStatus === 'error' && (
              <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <p className="text-sm text-red-700 dark:text-red-300">
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