import React, { useState } from 'react';
import { COMPETITORS, VENTURE_POSITIONING } from '../data/ventureData';
import { Target, Compass, ExternalLink, ShieldCheck, AlertCircle } from 'lucide-react';

export const CompetitorMatrix: React.FC = () => {
  const [selectedEntity, setSelectedEntity] = useState<string>('pine-peaks');

  const allEntities = [
    {
      id: 'pine-peaks',
      name: 'The Pine and Peaks (Our Venture)',
      price: '₹2,500 / day (Stay + Meals + Trek Support)',
      x: VENTURE_POSITIONING.axisX,
      y: VENTURE_POSITIONING.axisY,
      isOurVenture: true,
      tagline: 'High Convenience × Highly Customized',
      offer:
        'Combines comfortable homestay accommodation with Kumaoni food, personalized local experiences, trekking support and transportation assistance in one offering.',
      strength:
        'All-in-one base for Kafni Glacier: cozy lodging, traditional home meals, trusted local guides, and seamless transport from Bageshwar.',
      weakness: 'New market entrant needing initial trust and verified guest reviews in the first season.',
      evidenceSource: 'DGU Venture Quest Strategic Positioning (Missions 4, 5, 6)',
      evidenceStrength: 'Formative Pilot Benchmark',
    },
    ...COMPETITORS.map((c) => ({
      id: c.id,
      name: c.name,
      price: `₹${c.pricePerDay} / day`,
      x: c.axisX,
      y: c.axisY,
      isOurVenture: false,
      tagline: `${c.type} (${c.evidenceStrength} Evidence)`,
      offer: c.mainOffer,
      strength: c.strength,
      weakness: c.weakness,
      evidenceSource: c.evidenceSource,
      evidenceStrength: c.evidenceStrength,
    })),
  ];

  const current = allEntities.find((e) => e.id === selectedEntity) || allEntities[0];

  return (
    <div className="bg-white rounded-2xl border border-stone-200/80 p-6 md:p-8 shadow-xs">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-stone-100 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-1">
            <Compass className="w-4 h-4" />
            <span>Mission 5 & 6 — Competitor Battlefield & Strategic Positioning</span>
          </div>
          <h3 className="text-xl font-semibold text-stone-900 font-display">
            Strategic 2×2 Value Curve & Differentiation
          </h3>
          <p className="text-xs text-stone-500 mt-1">
            Plotting the Kumaon / Kafni Glacier accommodation ecosystem on Convenience vs Customization.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-stone-600 bg-stone-50 px-3 py-1.5 rounded-lg border border-stone-200/60">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
          <span>Pine and Peaks Target (8, 8)</span>
          <span className="w-2.5 h-2.5 rounded-full bg-stone-400 ml-2"></span>
          <span>Regional Competitors</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        {/* 2x2 Interactive Coordinate Grid */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div className="w-full relative bg-stone-50/70 border border-stone-200 rounded-xl p-6 aspect-4/3 flex flex-col justify-between">
            {/* Top Y Label */}
            <div className="text-center text-xs font-semibold text-stone-700 tracking-wide">
              ▲ HIGHLY CUSTOMIZED (Y: 10)
            </div>

            {/* Central Grid Lines */}
            <div className="absolute inset-x-6 top-1/2 border-t border-dashed border-stone-300 pointer-events-none"></div>
            <div className="absolute inset-y-6 left-1/2 border-l border-dashed border-stone-300 pointer-events-none"></div>

            {/* Quadrant Watermark Hints */}
            <div className="absolute top-8 left-8 text-[11px] font-medium text-stone-400 pointer-events-none">
              High Custom / Low Convenience
            </div>
            <div className="absolute top-8 right-8 text-[11px] font-semibold text-emerald-700/80 pointer-events-none">
              Target Sweetspot: High Custom & High Convenience
            </div>
            <div className="absolute bottom-8 left-8 text-[11px] font-medium text-stone-400 pointer-events-none">
              Standardized / Low Convenience
            </div>
            <div className="absolute bottom-8 right-8 text-[11px] font-medium text-stone-400 pointer-events-none">
              High Convenience / Standardized
            </div>

            {/* Plotted Points (Scaled from coordinates 5-10 for maximum visual clarity) */}
            <div className="relative w-full h-full my-4">
              {allEntities.map((item) => {
                // Map coordinates: X range 5-10 -> 10% to 90%, Y range 5-10 -> 90% down to 10%
                const leftPercent = 10 + ((item.x - 5) / 5) * 80;
                const topPercent = 90 - ((item.y - 5) / 5) * 80;
                const isSelected = selectedEntity === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedEntity(item.id)}
                    style={{ left: `${leftPercent}%`, top: `${topPercent}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer transition-all duration-200 z-10`}
                  >
                    <div
                      className={`relative flex items-center justify-center rounded-full transition-transform ${
                        item.isOurVenture
                          ? 'w-9 h-9 bg-emerald-700 text-white shadow-md ring-4 ring-emerald-100 hover:scale-110'
                          : 'w-7 h-7 bg-stone-700 text-white hover:bg-stone-900 shadow-xs'
                      } ${isSelected ? 'ring-4 ring-emerald-500 scale-110' : ''}`}
                    >
                      {item.isOurVenture ? (
                        <Target className="w-5 h-5 text-emerald-100" />
                      ) : (
                        <span className="text-[11px] font-mono font-bold">{item.name.charAt(0)}</span>
                      )}
                    </div>
                    {/* Tooltip badge */}
                    <div
                      className={`absolute top-full mt-1.5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] px-2 py-0.5 rounded font-medium shadow-xs pointer-events-none transition-all ${
                        isSelected
                          ? 'bg-stone-900 text-white opacity-100'
                          : 'bg-white/95 text-stone-700 border border-stone-200 opacity-90 group-hover:opacity-100'
                      }`}
                    >
                      {item.isOurVenture ? 'The Pine & Peaks (8, 8)' : `${item.name.split(' ')[0]} (${item.x}, ${item.y})`}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom Y Label */}
            <div className="text-center text-xs font-semibold text-stone-500 tracking-wide">
              ▼ STANDARDIZED (Y: 5)
            </div>

            {/* X Axis Labels */}
            <div className="flex justify-between items-center text-xs font-semibold text-stone-600 pt-2 border-t border-stone-200">
              <span>◄ LOW CONVENIENCE (X: 5)</span>
              <span className="text-stone-400 font-normal">Convenience Axis (Booking, Guidance & Transport)</span>
              <span>HIGH CONVENIENCE (X: 10) ►</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mt-3 text-xs">
            {allEntities.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedEntity(item.id)}
                className={`px-2.5 py-1 rounded-md text-xs transition-colors ${
                  selectedEntity === item.id
                    ? 'bg-stone-900 text-white font-medium'
                    : 'bg-stone-100 text-stone-600 hover:text-stone-900'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Entity Detailed Dossier */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div
            className={`p-5 rounded-xl border transition-all ${
              current.isOurVenture
                ? 'bg-emerald-50/60 border-emerald-200'
                : 'bg-stone-50 border-stone-200'
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[11px] font-semibold text-emerald-800 uppercase tracking-wider">
                  {current.tagline}
                </span>
                <h4 className="text-lg font-bold text-stone-900 mt-0.5">{current.name}</h4>
              </div>
              <span className="font-mono text-sm font-bold text-stone-900 bg-white px-2.5 py-1 rounded border border-stone-200">
                {current.price}
              </span>
            </div>

            <div className="mt-3 text-xs text-stone-700 leading-relaxed">
              <span className="font-semibold text-stone-900">Main Offer:</span> {current.offer}
            </div>

            <div className="mt-4 space-y-2.5 text-xs">
              <div className="flex items-start gap-2 bg-white/80 p-2.5 rounded-lg border border-stone-200/50">
                <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-stone-800">Core Strength:</span>
                  <p className="text-stone-600 mt-0.5">{current.strength}</p>
                </div>
              </div>

              <div className="flex items-start gap-2 bg-white/80 p-2.5 rounded-lg border border-stone-200/50">
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-stone-800">Operational Weakness / Gap:</span>
                  <p className="text-stone-600 mt-0.5">{current.weakness}</p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-200/60 flex items-center justify-between text-[11px] text-stone-500">
              <span className="truncate max-w-[240px]">
                <strong className="text-stone-700">Source:</strong> {current.evidenceSource}
              </span>
              <span className="font-medium text-stone-700 shrink-0">
                Strength: {current.evidenceStrength}
              </span>
            </div>
          </div>

          {/* Positioning Summary Quote */}
          <div className="p-4 rounded-xl bg-stone-900 text-stone-200 text-xs leading-relaxed space-y-2">
            <span className="text-emerald-400 font-semibold uppercase text-[10px] tracking-wider block">
              Strategic Takeaway (Mission 6)
            </span>
            <p className="italic">
              &ldquo;Unlike conventional stays that primarily provide accommodation alone, The Pine and Peaks provides
              an integrated one-stop Himalayan basecamp: comfortable rooms, authentic Kumaoni meals, verified glacier
              guides, and transport assistance.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
