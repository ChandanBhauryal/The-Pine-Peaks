import React from 'react';
import { Mountain, Printer, ExternalLink } from 'lucide-react';

interface NavbarProps {
  currentView: 'dossier' | 'portal';
  onViewChange: (view: 'dossier' | 'portal') => void;
  onNavigateSection?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onViewChange, onNavigateSection }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80 px-6 py-4 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => onViewChange('dossier')}
          className="text-lg font-bold tracking-tight text-stone-900 font-display hover:text-emerald-800 transition-colors whitespace-nowrap"
        >
          The Pine and Peaks
        </button>

        {/* Zone 2: 4–5 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-stone-600">
          <button
            onClick={() => onViewChange('dossier')}
            className={`hover:text-stone-900 transition-colors ${
              currentView === 'dossier' ? 'text-stone-900 font-semibold' : ''
            }`}
          >
            Venture Plan
          </button>
          <button
            onClick={() => {
              onViewChange('dossier');
            }}
            className="hover:text-stone-900 transition-colors"
          >
            Market & Unit Economics
          </button>
          <button
            onClick={() => {
              onViewChange('dossier');
            }}
            className="hover:text-stone-900 transition-colors"
          >
            GTM Strategy
          </button>
          <button
            onClick={() => onViewChange('portal')}
            className={`hover:text-stone-900 transition-colors ${
              currentView === 'portal' ? 'text-stone-900 font-semibold' : ''
            }`}
          >
            Live Homestay MVP
          </button>
        </nav>

        {/* Zone 3: 1–2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => window.print()}
            title="Print DGU Academic Plan"
            className="p-2 text-stone-500 hover:text-stone-900 border border-stone-200 rounded-lg hover:bg-stone-50 transition-colors no-print"
          >
            <Printer className="w-4 h-4" />
          </button>

          {currentView === 'dossier' ? (
            <button
              onClick={() => onViewChange('portal')}
              className="px-4 py-2 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-700 rounded-lg transition-colors whitespace-nowrap shadow-xs"
            >
              Explore Live Stay
            </button>
          ) : (
            <button
              onClick={() => onViewChange('dossier')}
              className="px-4 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors whitespace-nowrap shadow-xs"
            >
              View Full Venture Plan
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
