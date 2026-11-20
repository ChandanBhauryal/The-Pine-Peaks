import React, { useState } from 'react';
import { MARKET_SIZE } from '../data/ventureData';
import { BarChart3, HelpCircle, Layers, Users, IndianRupee } from 'lucide-react';

export const MarketVisualizer: React.FC = () => {
  const [activeTier, setActiveTier] = useState<'tam' | 'sam' | 'som'>('som');

  return (
    <div className="bg-white rounded-2xl border border-stone-200/80 p-6 md:p-8 shadow-xs">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-stone-100 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-1">
            <Layers className="w-4 h-4" />
            <span>Mission 8 — Market Sizing, Demand & Critical Assumptions</span>
          </div>
          <h3 className="text-xl font-semibold text-stone-900 font-display">
            Himalayan Tourism Market Opportunity (TAM / SAM / SOM)
          </h3>
          <p className="text-xs text-stone-500 mt-1">
            Standard annual spend benchmark: ₹7,500 per customer (stay, meals & expedition services).
          </p>
        </div>

        {/* Tier switcher buttons */}
        <div className="flex items-center bg-stone-100 p-1 rounded-xl text-xs font-medium self-start md:self-auto">
          <button
            onClick={() => setActiveTier('som')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTier === 'som'
                ? 'bg-white text-emerald-950 font-bold shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            SOM (₹22.5 Lakhs)
          </button>
          <button
            onClick={() => setActiveTier('sam')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTier === 'sam'
                ? 'bg-white text-emerald-950 font-bold shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            SAM (₹15.0 Cr)
          </button>
          <button
            onClick={() => setActiveTier('tam')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTier === 'tam'
                ? 'bg-white text-emerald-950 font-bold shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            TAM (₹75.0 Cr)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        {/* Visual concentric tiers */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-3">
          {/* TAM Card */}
          <div
            onClick={() => setActiveTier('tam')}
            className={`p-4 rounded-xl border transition-all cursor-pointer ${
              activeTier === 'tam'
                ? 'bg-stone-900 text-white border-stone-800 shadow-md ring-2 ring-emerald-500/50'
                : 'bg-stone-50/70 text-stone-800 border-stone-200/80 hover:bg-stone-100/60'
            }`}
          >
            <div className="flex items-center justify-between text-xs font-semibold mb-1">
              <span className={activeTier === 'tam' ? 'text-emerald-400' : 'text-stone-500'}>
                TAM • TOTAL ADDRESSABLE MARKET
              </span>
              <span className="font-mono text-sm font-bold">₹75,00,00,000</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="text-xs opacity-80">100,000 Total Potential Trekkers & Kumaon Tourists</span>
              <span className="text-[11px] font-mono opacity-70">100k × ₹7,500</span>
            </div>
          </div>

          {/* SAM Card */}
          <div
            onClick={() => setActiveTier('sam')}
            className={`p-4 rounded-xl border ml-4 transition-all cursor-pointer ${
              activeTier === 'sam'
                ? 'bg-stone-900 text-white border-stone-800 shadow-md ring-2 ring-emerald-500/50'
                : 'bg-stone-50/70 text-stone-800 border-stone-200/80 hover:bg-stone-100/60'
            }`}
          >
            <div className="flex items-center justify-between text-xs font-semibold mb-1">
              <span className={activeTier === 'sam' ? 'text-emerald-400' : 'text-stone-500'}>
                SAM • SERVICEABLE ADDRESSABLE MARKET
              </span>
              <span className="font-mono text-sm font-bold">₹15,00,00,000</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="text-xs opacity-80">20,000 Young North Indian Trekking Travellers (20–35)</span>
              <span className="text-[11px] font-mono opacity-70">20k × ₹7,500</span>
            </div>
          </div>

          {/* SOM Card */}
          <div
            onClick={() => setActiveTier('som')}
            className={`p-4 rounded-xl border ml-8 transition-all cursor-pointer ${
              activeTier === 'som'
                ? 'bg-stone-900 text-white border-stone-800 shadow-md ring-2 ring-emerald-500/50'
                : 'bg-emerald-50/80 text-emerald-950 border-emerald-200 hover:bg-emerald-100/60'
            }`}
          >
            <div className="flex items-center justify-between text-xs font-semibold mb-1">
              <span className={activeTier === 'som' ? 'text-emerald-400' : 'text-emerald-800'}>
                SOM • SERVICEABLE OBTAINABLE MARKET (Year 1–3)
              </span>
              <span className="font-mono text-sm font-bold">₹22,50,000</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="text-xs opacity-90 font-medium">300 Target Homestay Guests per Year</span>
              <span className="text-[11px] font-mono opacity-80">300 × ₹7,500</span>
            </div>
          </div>
        </div>

        {/* Selected Tier Deep-Dive & Assumption Box */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
          <div className="p-5 rounded-xl bg-stone-50 border border-stone-200/80 space-y-3">
            <div className="flex items-center justify-between border-b border-stone-200/60 pb-3">
              <div>
                <span className="text-[11px] font-mono uppercase text-emerald-800 font-semibold">
                  Evidence & Methodology Drill-down
                </span>
                <h4 className="text-base font-bold text-stone-900 mt-0.5">
                  {activeTier === 'tam' && 'Total Addressable Market (TAM) Validation'}
                  {activeTier === 'sam' && 'Serviceable Addressable Market (SAM) Segment'}
                  {activeTier === 'som' && 'Serviceable Obtainable Market (SOM) Target'}
                </h4>
              </div>
              <span className="text-xs font-mono font-bold bg-white px-2.5 py-1 rounded border border-stone-200">
                {activeTier === 'tam' && '100,000 Travellers'}
                {activeTier === 'sam' && '20,000 Qualified Segment'}
                {activeTier === 'som' && '300 Guests (Year 1-3)'}
              </span>
            </div>

            <p className="text-xs text-stone-700 leading-relaxed">
              {activeTier === 'tam' && MARKET_SIZE.tamEvidence}
              {activeTier === 'sam' && MARKET_SIZE.samEvidence}
              {activeTier === 'som' && MARKET_SIZE.somEvidence}
            </p>

            <div className="pt-2 text-[11px] text-stone-500 border-t border-stone-200/50">
              <strong className="text-stone-700">Annual Spend Calculation:</strong> {MARKET_SIZE.annualSpendEvidence}
            </div>
          </div>

          {/* Most Urgent Assumption Callout */}
          <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-stone-900 space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-900">
              <HelpCircle className="w-4 h-4 text-amber-700" />
              <span>DGU Most Urgent Strategic Assumption</span>
            </div>
            <p className="text-xs text-amber-950 font-medium italic leading-relaxed">
              &ldquo;{MARKET_SIZE.mostUrgentAssumption}&rdquo;
            </p>
            <p className="text-[11px] text-amber-800 pt-1">
              → This assumption is directly stress-tested in Mission 9 (30-day GTM) and Mission 10 (MVP WhatsApp booking pipeline).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
