import React, { useState } from 'react';
import { GTM_CHANNELS, GTM_SPRINTS } from '../data/ventureData';
import { Rocket, Calendar, CheckSquare, Square, Share2, Users, Handshake, Target, ArrowRight } from 'lucide-react';

export const GTMTracker: React.FC = () => {
  const [completedSprints, setCompletedSprints] = useState<Record<number, boolean>>({
    1: true,
    2: false,
    3: false,
    4: false,
  });

  const [activeChannelId, setActiveChannelId] = useState<string>('ch-1');

  const toggleSprint = (week: number) => {
    setCompletedSprints((prev) => ({
      ...prev,
      [week]: !prev[week],
    }));
  };

  const totalBudget = GTM_CHANNELS.reduce((acc, c) => acc + c.budget, 0);
  const totalLeads = GTM_CHANNELS.reduce((acc, c) => acc + c.expectedLeads, 0);
  const totalCustomers = GTM_CHANNELS.reduce((acc, c) => acc + c.expectedCustomers, 0);
  const blendedCAC = Math.round(totalBudget / totalCustomers);

  const activeChannel = GTM_CHANNELS.find((c) => c.id === activeChannelId) || GTM_CHANNELS[0];

  return (
    <div className="bg-white rounded-2xl border border-stone-200/80 p-6 md:p-8 shadow-xs">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-stone-100 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-1">
            <Rocket className="w-4 h-4" />
            <span>Mission 9 — Go-To-Market & 30-Day Validation Experiment</span>
          </div>
          <h3 className="text-xl font-semibold text-stone-900 font-display">
            Multi-Channel Acquisition & 4-Week Validation Sprint
          </h3>
          <p className="text-xs text-stone-500 mt-1">
            Core Campaign Message: “Stay close to the Himalayas with authentic Kumaoni hospitality, local food and
            reliable support for your Kafni Glacier adventure.”
          </p>
        </div>

        {/* Aggregated Pilot Stats */}
        <div className="flex items-center gap-3 bg-stone-50 p-2 rounded-xl border border-stone-200/60 text-xs">
          <div>
            <span className="text-stone-400 block text-[10px] uppercase font-semibold">Test Budget</span>
            <span className="font-mono font-bold text-stone-900">₹{totalBudget.toLocaleString('en-IN')}</span>
          </div>
          <span className="text-stone-300">|</span>
          <div>
            <span className="text-stone-400 block text-[10px] uppercase font-semibold">Target Leads</span>
            <span className="font-mono font-bold text-stone-900">{totalLeads}</span>
          </div>
          <span className="text-stone-300">|</span>
          <div>
            <span className="text-stone-400 block text-[10px] uppercase font-semibold">Bookings</span>
            <span className="font-mono font-bold text-emerald-700">{totalCustomers}</span>
          </div>
          <span className="text-stone-300">|</span>
          <div>
            <span className="text-stone-400 block text-[10px] uppercase font-semibold">Blended CAC</span>
            <span className="font-mono font-bold text-stone-900">₹{blendedCAC}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        {/* Channel Breakdown */}
        <div className="lg:col-span-6 space-y-4">
          <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
            3-Channel Allocation Strategy
          </div>

          <div className="space-y-3">
            {GTM_CHANNELS.map((ch) => {
              const isSelected = activeChannelId === ch.id;
              return (
                <div
                  key={ch.id}
                  onClick={() => setActiveChannelId(ch.id)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-emerald-50/70 border-emerald-300 shadow-xs'
                      : 'bg-stone-50/60 border-stone-200/70 hover:bg-stone-100/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {ch.id === 'ch-1' && <Share2 className="w-4 h-4 text-emerald-700" />}
                      {ch.id === 'ch-2' && <Users className="w-4 h-4 text-emerald-700" />}
                      {ch.id === 'ch-3' && <Handshake className="w-4 h-4 text-emerald-700" />}
                      <span className="font-semibold text-sm text-stone-900">{ch.name}</span>
                    </div>
                    <span className="font-mono text-xs font-bold text-stone-700 bg-white px-2 py-0.5 rounded border border-stone-200">
                      ₹{ch.budget.toLocaleString('en-IN')} Budget
                    </span>
                  </div>

                  <p className="text-xs text-stone-600 line-clamp-2">{ch.whyFits}</p>

                  <div className="grid grid-cols-3 gap-2 mt-3 pt-2 border-t border-stone-200/60 text-[11px] font-mono">
                    <div>
                      <span className="text-stone-400 block text-[10px]">Leads</span>
                      <span className="font-semibold text-stone-800">{ch.expectedLeads}</span>
                    </div>
                    <div>
                      <span className="text-stone-400 block text-[10px]">Conversions</span>
                      <span className="font-semibold text-emerald-800">{ch.expectedCustomers} guests</span>
                    </div>
                    <div>
                      <span className="text-stone-400 block text-[10px]">Channel CAC</span>
                      <span className="font-semibold text-stone-800">₹{ch.cac} / guest</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-3.5 bg-stone-100 rounded-xl text-xs text-stone-600 border border-stone-200/60 leading-relaxed">
            <strong className="text-stone-800">Evidence Basis:</strong> {activeChannel.evidenceReason}
          </div>
        </div>

        {/* 30-Day / 4-Week Experiment Roadmap */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
              30-Day Sequential Experiment Roadmap
            </span>
            <span className="text-xs text-stone-500">
              {Object.values(completedSprints).filter(Boolean).length} of 4 sprints executed
            </span>
          </div>

          <div className="space-y-3">
            {GTM_SPRINTS.map((sprint) => {
              const isDone = completedSprints[sprint.week];
              return (
                <div
                  key={sprint.week}
                  className={`p-4 rounded-xl border transition-all ${
                    isDone
                      ? 'bg-stone-50/80 border-stone-200'
                      : 'bg-white border-stone-200/90 shadow-xs'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <button
                      onClick={() => toggleSprint(sprint.week)}
                      className="mt-0.5 text-stone-400 hover:text-emerald-700 transition-colors"
                      title={isDone ? 'Mark sprint incomplete' : 'Mark sprint complete'}
                    >
                      {isDone ? (
                        <CheckSquare className="w-4 h-4 text-emerald-700" />
                      ) : (
                        <Square className="w-4 h-4 text-stone-400" />
                      )}
                    </button>

                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono font-semibold uppercase text-emerald-800">
                          Week {sprint.week} • {sprint.channel}
                        </span>
                        <span className="text-[11px] font-mono text-stone-500 bg-stone-100 px-2 py-0.5 rounded">
                          {sprint.responsibility}
                        </span>
                      </div>

                      <h4 className={`text-sm font-semibold ${isDone ? 'text-stone-500 line-through' : 'text-stone-900'}`}>
                        {sprint.title}
                      </h4>

                      <p className="text-xs text-stone-600 leading-relaxed pt-1">{sprint.action}</p>

                      <div className="mt-2.5 pt-2 border-t border-stone-100 space-y-1 text-xs">
                        <div className="flex items-baseline justify-between text-[11px]">
                          <span className="text-stone-500 font-medium">Core Learning Question:</span>
                          <span className="text-stone-700 font-mono text-right">{sprint.metric}</span>
                        </div>
                        <p className="text-stone-700 italic text-[11px] bg-stone-50 p-1.5 rounded">
                          &ldquo;{sprint.learningQuestion}&rdquo;
                        </p>
                        <div className="text-[11px] font-semibold text-emerald-800 pt-0.5">
                          Target Goal: {sprint.target}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
