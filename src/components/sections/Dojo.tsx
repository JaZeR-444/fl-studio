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
        <h2 className="text-3xl font-bold text-white mb-2">Shortcut <span className="text-gradient">Dojo</span> 🥋</h2>
        <p className="text-purple-primary-300">Master the keyboard to speed up your workflow. Click the card to flip.</p>
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
          <div className="absolute w-full h-full content-card border-2 border-purple-primary-600/30 flex flex-col items-center justify-center p-6 backface-hidden">
            <span className="text-xs font-bold text-purple-primary-400 uppercase tracking-widest mb-4">Action</span>
            <h3 id="dojo-action" className="text-2xl font-bold text-white text-center">
              {currentCard.action}
            </h3>
            <p className="text-xs text-purple-primary-400 mt-8">(Click to reveal shortcut)</p>
          </div>
          {/* Back */}
          <div className="absolute w-full h-full bg-gradient-button rounded-xl flex flex-col items-center justify-center p-6 backface-hidden rotate-y-180 shadow-purple-glow-lg">
            <span className="text-xs font-bold text-purple-primary-200 uppercase tracking-widest mb-4">Shortcut</span>
            <h3 id="dojo-key" className="text-4xl font-mono font-bold text-white text-center glow-text">
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
          className="btn-glass px-6 py-3"
        >
          Skip
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            nextCard();
          }}
          className="btn-gradient px-6 py-3 shadow-purple-glow"
        >
          Next Card
        </button>
      </div>
    </section>
  );
};