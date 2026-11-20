import React, { useState } from 'react';
import { TOP_ASSUMPTIONS, REFLECTION_NOTES } from '../data/ventureData';
import { CheckCircle2, AlertTriangle, Clock, MessageSquare, Plus, Check } from 'lucide-react';

export const EvidenceBoard: React.FC = () => {
  const [assumptions, setAssumptions] = useState(TOP_ASSUMPTIONS);
  const [userNotes, setUserNotes] = useState<Record<string, string>>({
    'assump-1': 'Pilot Instagram test reached 1,200 trekking group members. Received 8 direct DMs asking about Kafni trail permits & room photos.',
    'assump-2': 'Survey of 24 Delhi-NCR university trekkers showed 78% willing to pay ₹2,500/night when local dinner and route guide briefing are included.',
    'assump-3': 'Every tested traveler cited coordinating separate taxi from Bageshwar as their biggest headache—bundled pickup scored 9.4/10 desire.',
  });
  const [activeNoteInput, setActiveNoteInput] = useState<string | null>(null);
  const [tempNoteText, setTempNoteText] = useState('');

  const cycleStatus = (id: string) => {
    setAssumptions((prev) =>
      prev.map((a) => {
        if (a.id !== id) return a;
        const nextStatus =
          a.defaultStatus === 'Needs Evidence'
            ? 'In Testing'
            : a.defaultStatus === 'In Testing'
            ? 'Validated'
            : 'Needs Evidence';
        return { ...a, defaultStatus: nextStatus };
      })
    );
  };

  const handleSaveNote = (id: string) => {
    if (!tempNoteText.trim()) return;
    setUserNotes((prev) => ({
      ...prev,
      [id]: tempNoteText.trim(),
    }));
    setActiveNoteInput(null);
    setTempNoteText('');
  };

  return (
    <div className="bg-white rounded-2xl border border-stone-200/80 p-6 md:p-8 shadow-xs space-y-8">
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-1">
          <Clock className="w-4 h-4" />
          <span>Mission 11 & 12 — Evidence Review & Venture Plan Reflections</span>
        </div>
        <h3 className="text-xl font-semibold text-stone-900 font-display">
          Top Assumptions Validation & Operational Reflection
        </h3>
        <p className="text-xs text-stone-500 mt-1">
          Tracking the 3 make-or-break hypotheses that govern the venture before allocating full capital expenditure.
        </p>
      </div>

      {/* Assumptions Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {assumptions.map((item, index) => {
          const status = item.defaultStatus;
          const statusColor =
            status === 'Validated'
              ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
              : status === 'In Testing'
              ? 'bg-amber-50 text-amber-800 border-amber-200'
              : 'bg-stone-100 text-stone-700 border-stone-200';

          return (
            <div
              key={item.id}
              className="p-5 rounded-xl border border-stone-200/90 bg-stone-50/50 flex flex-col justify-between space-y-4 hover:shadow-xs transition-shadow"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-stone-400">
                    Assumption 0{index + 1}
                  </span>
                  <button
                    onClick={() => cycleStatus(item.id)}
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border cursor-pointer transition-all ${statusColor}`}
                    title="Click to cycle status"
                  >
                    {status === 'Validated' && '✓ Validated'}
                    {status === 'In Testing' && '⏳ In Testing'}
                    {status === 'Needs Evidence' && '⚠ Needs Evidence'}
                  </button>
                </div>

                <h4 className="text-sm font-semibold text-stone-900 leading-snug">
                  &ldquo;{item.assumption}&rdquo;
                </h4>

                <div className="space-y-2 text-xs text-stone-600">
                  <div>
                    <strong className="text-stone-800 block text-[11px]">Why It Matters:</strong>
                    <p className="mt-0.5 leading-relaxed">{item.whyItMatters}</p>
                  </div>
                  <div>
                    <strong className="text-stone-800 block text-[11px]">Test Mechanism:</strong>
                    <p className="mt-0.5 leading-relaxed">{item.howToTest}</p>
                  </div>
                  <div className="pt-1 text-[11px] text-stone-500">
                    <strong className="text-stone-700">Evidence Required:</strong> {item.evidenceNeeded}
                  </div>
                </div>
              </div>

              {/* Founder / Field Note */}
              <div className="pt-3 border-t border-stone-200/60">
                {userNotes[item.id] ? (
                  <div className="p-2.5 bg-white rounded-lg border border-stone-200/60 text-[11px] text-stone-700">
                    <div className="flex items-center justify-between text-stone-400 mb-1">
                      <span className="font-semibold text-stone-600 flex items-center gap-1">
                        <MessageSquare className="w-3 h-3 text-emerald-700" />
                        <span>Validation Log</span>
                      </span>
                      <button
                        onClick={() => {
                          setActiveNoteInput(item.id);
                          setTempNoteText(userNotes[item.id]);
                        }}
                        className="text-[10px] hover:text-stone-900"
                      >
                        Edit
                      </button>
                    </div>
                    <p className="italic text-stone-800">{userNotes[item.id]}</p>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setActiveNoteInput(item.id);
                      setTempNoteText('');
                    }}
                    className="flex items-center gap-1 text-[11px] text-emerald-800 font-medium hover:text-emerald-950"
                  >
                    <Plus className="w-3 h-3" />
                    <span>Log Pilot Evidence</span>
                  </button>
                )}

                {activeNoteInput === item.id && (
                  <div className="mt-2 space-y-2">
                    <textarea
                      value={tempNoteText}
                      onChange={(e) => setTempNoteText(e.target.value)}
                      placeholder="Enter field interview or survey quote..."
                      rows={2}
                      className="w-full text-xs p-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-1 focus:ring-emerald-700"
                    />
                    <div className="flex justify-end gap-2 text-xs">
                      <button
                        onClick={() => setActiveNoteInput(null)}
                        className="px-2 py-1 text-stone-500 hover:text-stone-800"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => handleSaveNote(item.id)}
                        className="px-2.5 py-1 bg-stone-900 text-white rounded text-[11px] font-medium"
                      >
                        Save Note
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Mission 12 Reflection Dossier */}
      <div className="p-6 rounded-2xl bg-stone-900 text-stone-100 space-y-4">
        <div className="flex items-center justify-between border-b border-stone-800 pb-3">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400">
              Mission 12 — Venture Plan Synthesis & Reflection
            </span>
          </div>
          <span className="text-xs text-stone-400 font-mono">DBS Global University Review Ready</span>
        </div>

        <p className="text-stone-200 text-sm leading-relaxed font-serif italic">
          &ldquo;{REFLECTION_NOTES.summary}&rdquo;
        </p>

        <div className="pt-2">
          <span className="text-xs font-semibold text-stone-300 uppercase tracking-wider block mb-2">
            Immediate Next Operational Milestones
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {REFLECTION_NOTES.nextMilestones.map((m, idx) => (
              <div key={idx} className="flex items-start gap-2 bg-stone-800/70 p-2.5 rounded-lg border border-stone-700/50">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-stone-200">{m}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
