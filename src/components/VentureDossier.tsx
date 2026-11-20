import React, { useState } from 'react';
import {
  VENTURE_INFO,
  MISSION_0,
  MISSION_1,
  MISSION_2,
  MISSION_3,
  MISSION_4,
  VENTURE_POSITIONING,
  MVP_FEATURES,
  REFLECTION_NOTES,
} from '../data/ventureData';
import { FinancialCalculator } from './FinancialCalculator';
import { CompetitorMatrix } from './CompetitorMatrix';
import { MarketVisualizer } from './MarketVisualizer';
import { GTMTracker } from './GTMTracker';
import { EvidenceBoard } from './EvidenceBoard';
import {
  FileText,
  Compass,
  Briefcase,
  AlertCircle,
  Target,
  Users,
  Award,
  Layers,
  Rocket,
  CheckCircle,
  Printer,
  ExternalLink,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

interface VentureDossierProps {
  onSwitchToMVP: () => void;
}

export const VentureDossier: React.FC<VentureDossierProps> = ({ onSwitchToMVP }) => {
  const [activeTab, setActiveTab] = useState<
    'all' | 'thesis' | 'positioning' | 'economics' | 'gtm' | 'mvp' | 'evidence'
  >('all');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Institutional Academic Header (Matching DGU Venture Quest front matter) */}
      <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 sm:p-8 shadow-md border border-stone-800">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-stone-800">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold tracking-wider uppercase">
              <Award className="w-4 h-4" />
              <span>DBS Global University • Entrepreneurship & Innovation</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
              {VENTURE_INFO.title}
            </h1>
            <p className="text-sm text-stone-300 font-medium">
              {VENTURE_INFO.subtitle} — <span className="text-emerald-400 font-semibold">{VENTURE_INFO.ventureName}</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <button
              onClick={() => window.print()}
              className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium rounded-xl border border-stone-700 transition-colors flex items-center gap-1.5 no-print"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Export PDF</span>
            </button>
            <button
              onClick={onSwitchToMVP}
              className="px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors flex items-center gap-1.5 no-print"
            >
              <span>Launch Live Homestay MVP</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Academic Metadata Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 text-xs font-mono">
          <div>
            <span className="text-stone-400 block text-[10px] uppercase">Candidate</span>
            <span className="text-white font-semibold">{VENTURE_INFO.studentName}</span>
          </div>
          <div>
            <span className="text-stone-400 block text-[10px] uppercase">DGU Email</span>
            <span className="text-white truncate block">{VENTURE_INFO.studentEmail}</span>
          </div>
          <div>
            <span className="text-stone-400 block text-[10px] uppercase">Venture Entity</span>
            <span className="text-emerald-400 font-semibold">{VENTURE_INFO.ventureName}</span>
          </div>
          <div>
            <span className="text-stone-400 block text-[10px] uppercase">Plan Generated</span>
            <span className="text-white">{VENTURE_INFO.generatedDate}</span>
          </div>
        </div>
      </div>

      {/* Segmented Filter Navigation Bar (Adhering to anti-slop guidelines: functional buttons) */}
      <div className="flex items-center gap-1 p-1 bg-stone-200/80 rounded-xl overflow-x-auto no-print text-xs font-medium">
        <button
          onClick={() => setActiveTab('all')}
          className={`px-3 py-2 rounded-lg whitespace-nowrap transition-colors ${
            activeTab === 'all'
              ? 'bg-white text-stone-900 shadow-xs font-semibold'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          All 12 Missions
        </button>
        <button
          onClick={() => setActiveTab('thesis')}
          className={`px-3 py-2 rounded-lg whitespace-nowrap transition-colors ${
            activeTab === 'thesis'
              ? 'bg-white text-stone-900 shadow-xs font-semibold'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          M0–M4: Venture & Jobs
        </button>
        <button
          onClick={() => setActiveTab('positioning')}
          className={`px-3 py-2 rounded-lg whitespace-nowrap transition-colors ${
            activeTab === 'positioning'
              ? 'bg-white text-stone-900 shadow-xs font-semibold'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          M5–M6: Competitors & 2×2
        </button>
        <button
          onClick={() => setActiveTab('economics')}
          className={`px-3 py-2 rounded-lg whitespace-nowrap transition-colors ${
            activeTab === 'economics'
              ? 'bg-white text-stone-900 shadow-xs font-semibold'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          M7–M8: Financials & Market
        </button>
        <button
          onClick={() => setActiveTab('gtm')}
          className={`px-3 py-2 rounded-lg whitespace-nowrap transition-colors ${
            activeTab === 'gtm'
              ? 'bg-white text-stone-900 shadow-xs font-semibold'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          M9: 30-Day GTM Sprint
        </button>
        <button
          onClick={() => setActiveTab('mvp')}
          className={`px-3 py-2 rounded-lg whitespace-nowrap transition-colors ${
            activeTab === 'mvp'
              ? 'bg-white text-stone-900 shadow-xs font-semibold'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          M10: MVP Scope
        </button>
        <button
          onClick={() => setActiveTab('evidence')}
          className={`px-3 py-2 rounded-lg whitespace-nowrap transition-colors ${
            activeTab === 'evidence'
              ? 'bg-white text-stone-900 shadow-xs font-semibold'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          M11–M12: Assumptions & Synthesis
        </button>
      </div>

      {/* SECTION 1: CORE VENTURE THESIS (M0 - M4) */}
      {(activeTab === 'all' || activeTab === 'thesis') && (
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-stone-200 pb-3">
            <h2 className="text-xl font-bold font-display text-stone-900">
              Part I: Venture Definition & Customer Jobs (Missions 0 – 4)
            </h2>
            <span className="text-xs font-mono text-stone-500">M0 • M1 • M2 • M3 • M4</span>
          </div>

          {/* Mission 0 Card */}
          <div className="bg-white rounded-2xl border border-stone-200/80 p-6 md:p-8 shadow-xs space-y-5">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <span className="text-xs font-mono font-semibold text-emerald-800 uppercase tracking-wider">
                Mission 0 — Your Venture
              </span>
              <span className="text-xs text-stone-400 font-mono">Entity: Pine and Peaks</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-stone-700">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-stone-900 text-sm">Venture Idea</h4>
                  <p className="mt-1 leading-relaxed text-stone-600">{MISSION_0.ventureIdea}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 text-sm">Why Chosen</h4>
                  <p className="mt-1 leading-relaxed text-stone-600">{MISSION_0.whyChosen}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-stone-900 text-sm">Initial Customer</h4>
                  <p className="mt-1 leading-relaxed text-stone-600">{MISSION_0.initialCustomer}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 text-sm">Problem Solved</h4>
                  <p className="mt-1 leading-relaxed text-stone-600">{MISSION_0.problemSolved}</p>
                </div>
                <div className="pt-1">
                  <span className="font-semibold text-stone-900">Primary Geography:</span>{' '}
                  <span className="text-stone-600">{MISSION_0.geography}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mission 1 & 2: Friction & Jobs to be Done */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mission 1 */}
            <div className="bg-white rounded-2xl border border-stone-200/80 p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-stone-100 pb-2.5">
                <span className="text-xs font-mono font-semibold text-emerald-800 uppercase tracking-wider">
                  Mission 1 — Customer Friction
                </span>
                <span className="text-xs font-mono text-stone-400">ID: {MISSION_1.primaryFrictionId}</span>
              </div>

              <div className="p-3.5 bg-rose-50/60 border border-rose-200/70 rounded-xl text-xs text-rose-950 leading-relaxed font-medium">
                &ldquo;{MISSION_1.frictionStatement}&rdquo;
              </div>

              <div className="space-y-3 text-xs text-stone-600">
                <div>
                  <strong className="text-stone-900 block text-xs">Why Current Workaround Is Unsatisfactory:</strong>
                  <p className="mt-0.5 leading-relaxed">{MISSION_1.whyWorkaroundUnsatisfactory}</p>
                </div>
                <div>
                  <strong className="text-stone-900 block text-xs">Current Workaround:</strong>
                  <p className="mt-0.5 leading-relaxed">{MISSION_1.currentWorkaround}</p>
                </div>
                <div>
                  <strong className="text-stone-900 block text-xs">Who Experiences & When Occurs:</strong>
                  <p className="mt-0.5 leading-relaxed">
                    {MISSION_1.whoExperiences} ({MISSION_1.whenOccurs})
                  </p>
                </div>
              </div>
            </div>

            {/* Mission 2 */}
            <div className="bg-white rounded-2xl border border-stone-200/80 p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-stone-100 pb-2.5">
                <span className="text-xs font-mono font-semibold text-emerald-800 uppercase tracking-wider">
                  Mission 2 — Jobs To Be Done (JTBD)
                </span>
                <span className="text-xs font-mono text-stone-400">Functional / Emotional / Social</span>
              </div>

              {/* Primary JTBD Formula */}
              <div className="p-3.5 bg-emerald-50/60 border border-emerald-200/80 rounded-xl text-xs text-emerald-950 space-y-1">
                <div className="font-semibold text-[11px] uppercase tracking-wider text-emerald-800">
                  Primary JTBD Framework
                </div>
                <p>
                  <strong>When:</strong> {MISSION_2.primaryJTBD.situation}
                </p>
                <p>
                  <strong>I want to:</strong> {MISSION_2.primaryJTBD.motivationAction}
                </p>
                <p>
                  <strong>So that:</strong> {MISSION_2.primaryJTBD.desiredOutcome}
                </p>
              </div>

              <div className="space-y-2 text-xs text-stone-600">
                <div>
                  <strong className="text-stone-900">Functional Job:</strong> {MISSION_2.functionalJob}
                </div>
                <div>
                  <strong className="text-stone-900">Emotional Job:</strong> {MISSION_2.emotionalJob}
                </div>
                <div>
                  <strong className="text-stone-900">Social Job:</strong> {MISSION_2.socialJob}
                </div>
              </div>
            </div>
          </div>

          {/* Mission 3 & 4: Beachhead & CVP */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mission 3 */}
            <div className="bg-white rounded-2xl border border-stone-200/80 p-6 shadow-xs space-y-4">
              <span className="text-xs font-mono font-semibold text-emerald-800 uppercase tracking-wider block border-b border-stone-100 pb-2.5">
                Mission 3 — Customer & Beachhead
              </span>

              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/70 text-xs">
                <span className="font-mono text-[10px] text-stone-400 uppercase block font-semibold">
                  Beachhead Segment
                </span>
                <p className="font-semibold text-stone-900 mt-0.5">{MISSION_3.beachheadSegment}</p>
              </div>

              <div className="space-y-2.5 text-xs text-stone-600">
                <div>
                  <strong className="text-stone-900">Demographics & Profile:</strong> {MISSION_3.demographicsRole}
                </div>
                <div>
                  <strong className="text-stone-900">Buying Behaviour:</strong> {MISSION_3.buyingBehaviour}
                </div>
                <div>
                  <strong className="text-stone-900">Willingness To Pay:</strong> {MISSION_3.willingnessToPay}
                </div>
                <div>
                  <strong className="text-stone-900">Reach Strategy:</strong> {MISSION_3.reachStrategy}
                </div>
              </div>
            </div>

            {/* Mission 4 */}
            <div className="bg-white rounded-2xl border border-stone-200/80 p-6 shadow-xs space-y-4">
              <span className="text-xs font-mono font-semibold text-emerald-800 uppercase tracking-wider block border-b border-stone-100 pb-2.5">
                Mission 4 — Value Proposition
              </span>

              <div className="p-3 bg-stone-900 text-stone-100 rounded-xl text-xs space-y-1">
                <span className="text-[10px] font-mono uppercase text-emerald-400 font-semibold block">
                  Customer Value Proposition (CVP) Statement
                </span>
                <p className="italic leading-relaxed">{MISSION_4.cvpStatement}</p>
              </div>

              <div className="space-y-2.5 text-xs text-stone-600">
                <div>
                  <strong className="text-stone-900">Main Benefit:</strong> {MISSION_4.mainBenefit}
                </div>
                <div>
                  <strong className="text-stone-900">Desired Gain:</strong> {MISSION_4.desiredGain}
                </div>
                <div>
                  <strong className="text-stone-900">Why Choose Over Doing Nothing:</strong>{' '}
                  {MISSION_4.whyChooseOverDoingNothing}
                </div>
                <div>
                  <strong className="text-stone-900">Reason To Believe:</strong> {MISSION_4.reasonToBelieve}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 2: COMPETITORS & POSITIONING (M5 - M6) */}
      {(activeTab === 'all' || activeTab === 'positioning') && (
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-stone-200 pb-3">
            <h2 className="text-xl font-bold font-display text-stone-900">
              Part II: Competitor Battlefield & Strategic Positioning (Missions 5 & 6)
            </h2>
            <span className="text-xs font-mono text-stone-500">M5 • M6</span>
          </div>

          <CompetitorMatrix />

          {/* Mission 6 Positioning Text */}
          <div className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-xs space-y-3">
            <span className="text-xs font-mono font-semibold uppercase text-emerald-800 tracking-wider">
              Mission 6 Formal Positioning Lockup
            </span>
            <blockquote className="text-sm font-serif italic text-stone-800 bg-stone-50 p-4 rounded-xl border border-stone-200/70">
              &ldquo;{VENTURE_POSITIONING.positioningStatement}&rdquo;
            </blockquote>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1 text-stone-600">
              <div>
                <strong className="text-stone-800 block">Category:</strong>
                {VENTURE_POSITIONING.category}
              </div>
              <div>
                <strong className="text-stone-800 block">Main Alternative:</strong>
                {VENTURE_POSITIONING.mainAlternative}
              </div>
              <div>
                <strong className="text-stone-800 block">Main Differentiation:</strong>
                {VENTURE_POSITIONING.mainDifferentiation}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 3: FINANCIALS & MARKET (M7 - M8) */}
      {(activeTab === 'all' || activeTab === 'economics') && (
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-stone-200 pb-3">
            <h2 className="text-xl font-bold font-display text-stone-900">
              Part III: Revenue, Pricing & Market Sizing (Missions 7 & 8)
            </h2>
            <span className="text-xs font-mono text-stone-500">M7 • M8</span>
          </div>

          <FinancialCalculator />
          <MarketVisualizer />
        </section>
      )}

      {/* SECTION 4: GTM ROADMAP (M9) */}
      {(activeTab === 'all' || activeTab === 'gtm') && (
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-stone-200 pb-3">
            <h2 className="text-xl font-bold font-display text-stone-900">
              Part IV: Go-To-Market & 30-Day Validation Experiment (Mission 9)
            </h2>
            <span className="text-xs font-mono text-stone-500">M9</span>
          </div>

          <GTMTracker />
        </section>
      )}

      {/* SECTION 5: MVP SCOPE (M10) */}
      {(activeTab === 'all' || activeTab === 'mvp') && (
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-stone-200 pb-3">
            <h2 className="text-xl font-bold font-display text-stone-900">
              Part V: Minimum Viable Product (MVP) Scope (Mission 10)
            </h2>
            <span className="text-xs font-mono text-stone-500">M10</span>
          </div>

          <div className="bg-white rounded-2xl border border-stone-200/80 p-6 md:p-8 shadow-xs space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-stone-100 gap-4">
              <div>
                <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider font-mono">
                  Mission 10 — MVP Scope Specification
                </span>
                <h3 className="text-xl font-semibold text-stone-900 font-display mt-0.5">
                  Lean Feature Scope & Deliberate Exclusions
                </h3>
              </div>
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs">
                <span className="text-emerald-800 font-bold block text-[11px] uppercase">MVP Success Metric:</span>
                <span className="text-emerald-950 font-semibold">
                  ≥ 10 qualified enquiries & 3–5 paid/confirmed bookings during initial pilot test
                </span>
              </div>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Must-Haves */}
              <div className="space-y-3">
                <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4" />
                  <span>4 Must-Have Core Deliverables</span>
                </div>

                <div className="space-y-3">
                  {MVP_FEATURES.filter((f) => f.priority === 'Must Have').map((feat, index) => (
                    <div key={feat.id} className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2 text-xs">
                      <div className="flex items-center justify-between font-semibold text-stone-900">
                        <span>
                          0{index + 1}. {feat.name}
                        </span>
                        <span className="text-[10px] font-mono bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                          Must Have
                        </span>
                      </div>
                      <p className="text-stone-600 leading-relaxed">{feat.whyNeeded}</p>
                      <div className="pt-1 text-[11px] text-stone-500 border-t border-stone-200/60">
                        <strong className="text-stone-700">Need Solved:</strong> {feat.customerNeed}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliberately Excluded */}
              <div className="space-y-3">
                <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-stone-400" />
                  <span>Deliberately Excluded in MVP (Disciplined Focus)</span>
                </div>

                <div className="space-y-3">
                  {MVP_FEATURES.filter((f) => f.priority === 'Deliberately Excluded').map((feat) => (
                    <div
                      key={feat.id}
                      className="p-4 rounded-xl bg-stone-50/50 border border-stone-200/60 space-y-2 text-xs"
                    >
                      <div className="flex items-center justify-between font-medium text-stone-700">
                        <span>{feat.name}</span>
                        <span className="text-[10px] font-mono bg-stone-200 text-stone-600 px-2 py-0.5 rounded">
                          Excluded
                        </span>
                      </div>
                      <p className="text-stone-500 leading-relaxed">{feat.whyNeeded}</p>
                      <div className="pt-1 text-[11px] text-stone-400 border-t border-stone-200/40">
                        <strong className="text-stone-600">Strategic Rationale:</strong> {feat.evidenceReason}
                      </div>
                    </div>
                  ))}

                  <div className="p-4 rounded-xl bg-stone-900 text-stone-100 space-y-3">
                    <div className="text-xs font-semibold text-emerald-400">Launch the Functional MVP Now</div>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      Experience the live customer interface developed to fulfill this exact MVP scope, complete with
                      integrated WhatsApp booking and route planning.
                    </p>
                    <button
                      onClick={onSwitchToMVP}
                      className="w-full py-2 px-4 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Explore Live Homestay Portal</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 6: EVIDENCE & SYNTHESIS (M11 - M12) */}
      {(activeTab === 'all' || activeTab === 'evidence') && (
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-stone-200 pb-3">
            <h2 className="text-xl font-bold font-display text-stone-900">
              Part VI: Evidence Review & Venture Reflections (Missions 11 & 12)
            </h2>
            <span className="text-xs font-mono text-stone-500">M11 • M12</span>
          </div>

          <EvidenceBoard />
        </section>
      )}
    </div>
  );
};
