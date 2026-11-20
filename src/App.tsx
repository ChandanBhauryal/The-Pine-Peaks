import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { VentureDossier } from './components/VentureDossier';
import { HomestayPortal } from './components/HomestayPortal';

export default function App() {
  const [currentView, setCurrentView] = useState<'dossier' | 'portal'>('dossier');

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans selection:bg-emerald-900 selection:text-emerald-100">
      <Navbar
        currentView={currentView}
        onViewChange={(view) => {
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      <main className="flex-1">
        {currentView === 'dossier' ? (
          <VentureDossier
            onSwitchToMVP={() => {
              setCurrentView('portal');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ) : (
          <HomestayPortal
            onSwitchToDossier={() => {
              setCurrentView('dossier');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}
      </main>
    </div>
  );
}
