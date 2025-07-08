
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [currentQuote, setCurrentQuote] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const wisdomQuotes = [
    "Knowing yourself is the beginning of all wisdom. — Aristotle",
    "The unexamined life is not worth living. — Socrates", 
    "Happiness depends upon ourselves. — Aristotle",
    "To live is the rarest thing in the world. Most people exist, that is all. — Oscar Wilde",
    "You must be the change you wish to see in the world. — Mahatma Gandhi",
    "The only true wisdom is in knowing you know nothing. — Socrates",
    "In the middle of difficulty lies opportunity. — Albert Einstein",
    "It is during our darkest moments that we must focus to see the light. — Aristotle",
    "The journey of a thousand miles begins with one step. — Lao Tzu",
    "Yesterday is history, tomorrow is a mystery, today is a gift. — Eleanor Roosevelt"
  ];

  const revealThought = async () => {
    setIsLoading(true);
    
    // Simulate API call delay for authentic feel
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const randomIndex = Math.floor(Math.random() * wisdomQuotes.length);
    setCurrentQuote(wisdomQuotes[randomIndex]);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-yellow-50 to-amber-100 relative overflow-hidden">
      {/* Parchment texture overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJwYXJjaG1lbnQiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzkyNjQzMyIgZmlsbC1vcGFjaXR5PSIwLjAzIi8+CjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEuNSIgZmlsbD0iIzkyNjQzMyIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+CjwvcGF0dGVybj4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhcmNobWVudCkiLz4KPC9zdmc+')] pointer-events-none"></div>
      
      {/* Classical column borders */}
      <div className="absolute left-0 top-0 w-8 h-full bg-gradient-to-r from-amber-900/20 to-transparent opacity-60"></div>
      <div className="absolute right-0 top-0 w-8 h-full bg-gradient-to-l from-amber-900/20 to-transparent opacity-60"></div>
      
      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4 max-w-4xl mx-auto">
        
        {/* Ornamental top border */}
        <div className="w-full max-w-2xl mb-8">
          <div className="h-1 bg-gradient-to-r from-transparent via-amber-800 to-transparent opacity-60"></div>
          <div className="flex justify-center my-2">
            <div className="w-16 h-16 border-4 border-amber-800 rounded-full flex items-center justify-center bg-gradient-to-br from-amber-100 to-amber-200 shadow-lg">
              <span className="text-2xl">🏛️</span>
            </div>
          </div>
          <div className="h-1 bg-gradient-to-r from-transparent via-amber-800 to-transparent opacity-60"></div>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-amber-900 text-center mb-12 leading-tight tracking-wide">
          Words of Wisdom
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-amber-800 text-center mb-12 font-serif italic opacity-80 max-w-2xl">
          "Discover timeless insights from history's greatest minds"
        </p>

        {/* Reveal button */}
        <div className="mb-16">
          <Button
            onClick={revealThought}
            disabled={isLoading}
            className="px-12 py-6 text-xl font-serif font-semibold bg-gradient-to-b from-amber-700 via-amber-800 to-amber-900 hover:from-amber-600 hover:via-amber-700 hover:to-amber-800 text-amber-50 border-2 border-amber-900 rounded-lg shadow-2xl transition-all duration-500 hover:shadow-3xl hover:scale-105 active:scale-95 relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-3">
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-amber-200 border-t-transparent rounded-full animate-spin"></div>
                  Revealing...
                </>
              ) : (
                <>
                  <span>⚡</span>
                  Reveal Thought
                </>
              )}
            </span>
            {/* Bronze shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </Button>
        </div>

        {/* Quote display area */}
        {currentQuote && (
          <div className="w-full max-w-3xl animate-fade-in">
            {/* Ornamental quote box */}
            <div className="relative bg-gradient-to-br from-amber-50 to-yellow-50 border-4 border-amber-800 rounded-lg shadow-2xl p-8 md:p-12">
              {/* Corner ornaments */}
              <div className="absolute top-2 left-2 w-6 h-6 border-t-4 border-l-4 border-amber-800 opacity-60"></div>
              <div className="absolute top-2 right-2 w-6 h-6 border-t-4 border-r-4 border-amber-800 opacity-60"></div>
              <div className="absolute bottom-2 left-2 w-6 h-6 border-b-4 border-l-4 border-amber-800 opacity-60"></div>
              <div className="absolute bottom-2 right-2 w-6 h-6 border-b-4 border-r-4 border-amber-800 opacity-60"></div>
              
              {/* Opening quote mark */}
              <div className="absolute -top-4 left-8 text-6xl text-amber-800 font-serif opacity-60">"</div>
              
              {/* Quote content */}
              <blockquote className="relative text-xl md:text-2xl lg:text-3xl font-serif text-amber-900 leading-relaxed text-center italic pt-4">
                {currentQuote}
              </blockquote>
              
              {/* Closing quote mark */}
              <div className="absolute -bottom-8 right-8 text-6xl text-amber-800 font-serif opacity-60 rotate-180">"</div>
            </div>
          </div>
        )}

        {/* Bottom ornamental border */}
        <div className="w-full max-w-2xl mt-16">
          <div className="h-1 bg-gradient-to-r from-transparent via-amber-800 to-transparent opacity-60"></div>
          <div className="flex justify-center my-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-amber-800 rounded-full opacity-60"></div>
              <div className="w-3 h-3 bg-amber-800 rounded-full opacity-60"></div>
              <div className="w-3 h-3 bg-amber-800 rounded-full opacity-60"></div>
            </div>
          </div>
          <div className="h-1 bg-gradient-to-r from-transparent via-amber-800 to-transparent opacity-60"></div>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-amber-700 font-serif text-sm opacity-70">
          <p>Timeless wisdom for the modern soul</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
