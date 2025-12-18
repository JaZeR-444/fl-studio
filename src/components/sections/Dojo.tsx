import { useState, useEffect } from 'react';
import { Flashcard } from '@/types';

export const DojoSection = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Dojo flashcard data
  const flashcards: Flashcard[] = [
    { action: "Open Mixer", key: "F9" },
    { action: "Open Playlist", key: "F5" },
    { action: "Open Channel Rack", key: "F6" },
    { action: "Piano Roll", key: "F7" },
    { action: "Duplicate Selection", key: "Ctrl + B" },
    { action: "Link to Mixer Track", key: "Ctrl + L" },
    { action: "Quantize", key: "Ctrl + Q" },
    { action: "Strum Notes", key: "Alt + S" },
    { action: "Chop Notes", key: "Alt + U" },
    { action: "Select All", key: "Ctrl + A" },
    { action: "Deselect", key: "Ctrl + D" },
    { action: "Quick Render (Audio)", key: "Ctrl + Alt + C" }
  ];

  const currentCard = flashcards[currentCardIndex];

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const nextCard = () => {
    // Reset flip
    setIsFlipped(false);
    
    // Move to next card
    setTimeout(() => {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    }, 200);
  };

  return (
    <section id="dojo" className="page-section">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-stone-900 dark:text-white mb-2">Shortcut Dojo 🥋</h2>
        <p className="text-stone-600 dark:text-zinc-400">Master the keyboard to speed up your workflow. Click the card to flip.</p>
      </div>

      <div 
        className="max-w-md mx-auto perspective h-64 cursor-pointer" 
        onClick={flipCard}
      >
        <div 
          id="flashcard-inner" 
          className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
        >
          {/* Front */}
          <div className="absolute w-full h-full bg-white dark:bg-zinc-800 border-2 border-stone-200 dark:border-zinc-600 rounded-xl flex flex-col items-center justify-center p-6 backface-hidden shadow-lg">
            <span className="text-xs font-bold text-stone-400 dark:text-zinc-500 uppercase tracking-widest mb-4">Action</span>
            <h3 id="dojo-action" className="text-2xl font-bold text-stone-800 dark:text-white text-center">
              {currentCard.action}
            </h3>
            <p className="text-xs text-stone-400 mt-8">(Click to reveal shortcut)</p>
          </div>
          {/* Back */}
          <div className="absolute w-full h-full bg-orange-500 rounded-xl flex flex-col items-center justify-center p-6 backface-hidden rotate-y-180 shadow-lg">
            <span className="text-xs font-bold text-orange-200 uppercase tracking-widest mb-4">Shortcut</span>
            <h3 id="dojo-key" className="text-4xl font-mono font-bold text-white text-center">
              {currentCard.key}
            </h3>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-4 mt-8">
        <button 
          onClick={(e) => {
            e.stopPropagation();
            nextCard();
          }}
          className="px-6 py-3 bg-stone-200 dark:bg-zinc-700 text-stone-600 dark:text-zinc-300 rounded-lg font-bold hover:bg-stone-300 dark:hover:bg-zinc-600 transition-colors"
        >
          Skip
        </button>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            nextCard();
          }}
          className="px-6 py-3 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-700 transition-colors shadow-lg shadow-orange-500/30"
        >
          Next Card
        </button>
      </div>
    </section>
  );
};