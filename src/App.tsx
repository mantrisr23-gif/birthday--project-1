import React from 'react';
import { CorporateRoast } from './components/CorporateRoast';

/**
 * App.tsx
 * The entry-level orchestration component for the Birthday Bloom application.
 * Manages the global layout and the Corporate Troll mode wrapper.
 */

function App() {
  return (
    <div className="corporate-troll-mode min-h-screen bg-background text-foreground transition-colors duration-300">
      <main className="container mx-auto px-4 py-12 md:py-20 max-w-4xl flex flex-col items-center">
        
        {/* Header Section */}
        <header className="mb-12 text-center animate-in fade-in zoom-in duration-700">
          <h1 className="text-5xl md:text-7xl font-display font-black text-primary tracking-tighter mb-4">
            Birthday Bloom
          </h1>
          <p className="text-muted-foreground text-lg uppercase tracking-widest">
            Junior Roast System 2.0
          </p>
        </header>

        {/* Core Content Area */}
        <div className="w-full">
          <CorporateRoast />
        </div>

        {/* Footer */}
        <footer className="mt-24 text-[10px] text-muted-foreground uppercase tracking-widest opacity-60">
          Powered by Corporate Troll Logic © 2026
        </footer>
      </main>
    </div>
  );
}

export default App;
