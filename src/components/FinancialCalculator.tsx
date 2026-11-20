import React, { useState } from 'react';
import { SCENARIOS, Scenario } from '../data/ventureData';
import { Calculator, TrendingUp, IndianRupee, PieChart, RefreshCw } from 'lucide-react';

export const FinancialCalculator: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState<'base' | 'ambitious' | 'conservative' | 'custom'>('base');

  const baseConfig = SCENARIOS.base;
  const [sellingPrice, setSellingPrice] = useState<number>(baseConfig.sellingPrice);
  const [variableCost, setVariableCost] = useState<number>(baseConfig.variableCost);
  const [fixedCost, setFixedCost] = useState<number>(baseConfig.monthlyFixedCost);
  const [customers, setCustomers] = useState<number>(baseConfig.customers);
  const [purchasesPerCustomer, setPurchasesPerCustomer] = useState<number>(baseConfig.purchasesPerCustomer);

  const applyScenario = (key: 'base' | 'ambitious' | 'conservative') => {
    const sc = SCENARIOS[key];
    setActiveScenario(key);
    setSellingPrice(sc.sellingPrice);
    setVariableCost(sc.variableCost);
    setFixedCost(sc.monthlyFixedCost);
    setCustomers(sc.customers);
    setPurchasesPerCustomer(sc.purchasesPerCustomer);
  };

  // Calculations
  const totalSalesUnits = Math.round(customers * purchasesPerCustomer * 10) / 10;
  const monthlyRevenue = Math.round(totalSalesUnits * sellingPrice);
  const totalVariableCost = Math.round(totalSalesUnits * variableCost);
  const contributionPerSale = sellingPrice - variableCost;
  const contributionMarginPercent = Math.round((contributionPerSale / sellingPrice) * 100);
  const operatingSurplus = monthlyRevenue - totalVariableCost - fixedCost;
  const breakevenUnits = contributionPerSale > 0 ? Math.ceil(fixedCost / contributionPerSale) : 0;
  const breakevenCustomers = purchasesPerCustomer > 0 ? Math.ceil(breakevenUnits / purchasesPerCustomer) : 0;

  const isProfitable = operatingSurplus > 0;

  return (
    <div className="bg-white rounded-2xl border border-stone-200/80 p-6 md:p-8 shadow-xs">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-stone-100 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-1">
            <Calculator className="w-4 h-4" />
            <span>Interactive Unit Economics & Scenario Simulator</span>
          </div>
          <h3 className="text-xl font-semibold text-stone-900 font-display">
            Monthly Financials & Breakeven Analysis
          </h3>
          <p className="text-xs text-stone-500 mt-1">
            Modeled on Bageshwar homestay benchmark rates, local food provisioning, and seasonal occupancy.
          </p>
        </div>

        {/* Preset scenario toggle */}
        <div className="flex items-center bg-stone-100 p-1 rounded-xl self-start md:self-auto text-xs font-medium">
          <button
            onClick={() => applyScenario('base')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeScenario === 'base'
                ? 'bg-white text-stone-900 shadow-xs font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Base Case (₹2.5k)
          </button>
          <button
            onClick={() => applyScenario('ambitious')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeScenario === 'ambitious'
                ? 'bg-white text-stone-900 shadow-xs font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Peak Season (₹3.0k)
          </button>
          <button
            onClick={() => applyScenario('conservative')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeScenario === 'conservative'
                ? 'bg-white text-stone-900 shadow-xs font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Low Season (₹2.2k)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        {/* Sliders / Inputs */}
        <div className="lg:col-span-6 space-y-5">
          <div className="text-xs font-medium text-stone-500 uppercase tracking-wider mb-2">
            Unit & Operating Drivers
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1.5 font-medium">
              <span className="text-stone-700">Selling Price per Unit (Stay + Meals/Activities)</span>
              <span className="font-mono font-semibold text-stone-900">₹{sellingPrice.toLocaleString('en-IN')}</span>
            </div>
            <input
              type="range"
              min="1500"
              max="4500"
              step="100"
              value={sellingPrice}
              onChange={(e) => {
                setSellingPrice(Number(e.target.value));
                setActiveScenario('custom');
              }}
              className="w-full accent-emerald-700 cursor-pointer h-2 bg-stone-200 rounded-lg"
            />
            <div className="flex justify-between text-[11px] text-stone-400 mt-1">
              <span>Budget (₹1,500)</span>
              <span>Benchmark (₹2,500)</span>
              <span>Premium Pack (₹4,500)</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1.5 font-medium">
              <span className="text-stone-700">Variable Cost per Unit (Groceries, Laundry, Utilities)</span>
              <span className="font-mono font-semibold text-stone-900">₹{variableCost.toLocaleString('en-IN')}</span>
            </div>
            <input
              type="range"
              min="600"
              max="1600"
              step="50"
              value={variableCost}
              onChange={(e) => {
                setVariableCost(Number(e.target.value));
                setActiveScenario('custom');
              }}
              className="w-full accent-emerald-700 cursor-pointer h-2 bg-stone-200 rounded-lg"
            />
            <div className="flex justify-between text-[11px] text-stone-400 mt-1">
              <span>Frugal (₹600)</span>
              <span>Model Base (₹900)</span>
              <span>High Season (₹1,600)</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="flex justify-between text-xs mb-1.5 font-medium">
                <span className="text-stone-700">Monthly Guests</span>
                <span className="font-mono font-semibold text-stone-900">{customers}</span>
              </div>
              <input
                type="range"
                min="10"
                max="70"
                step="5"
                value={customers}
                onChange={(e) => {
                  setCustomers(Number(e.target.value));
                  setActiveScenario('custom');
                }}
                className="w-full accent-emerald-700 cursor-pointer h-2 bg-stone-200 rounded-lg"
              />
              <span className="text-[11px] text-stone-400">10 to 70 guests/mo</span>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1.5 font-medium">
                <span className="text-stone-700">Purchases / Guest</span>
                <span className="font-mono font-semibold text-stone-900">{purchasesPerCustomer.toFixed(1)}x</span>
              </div>
              <input
                type="range"
                min="1.0"
                max="2.5"
                step="0.1"
                value={purchasesPerCustomer}
                onChange={(e) => {
                  setPurchasesPerCustomer(Number(e.target.value));
                  setActiveScenario('custom');
                }}
                className="w-full accent-emerald-700 cursor-pointer h-2 bg-stone-200 rounded-lg"
              />
              <span className="text-[11px] text-stone-400">Night + guide + meals</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1.5 font-medium">
              <span className="text-stone-700">Monthly Fixed Cost (Lease, Retainers, Internet, Admin)</span>
              <span className="font-mono font-semibold text-stone-900">₹{fixedCost.toLocaleString('en-IN')}</span>
            </div>
            <input
              type="range"
              min="30000"
              max="90000"
              step="5000"
              value={fixedCost}
              onChange={(e) => {
                setFixedCost(Number(e.target.value));
                setActiveScenario('custom');
              }}
              className="w-full accent-emerald-700 cursor-pointer h-2 bg-stone-200 rounded-lg"
            />
            <div className="flex justify-between text-[11px] text-stone-400 mt-1">
              <span>₹30k (Lean)</span>
              <span>₹50k (Baseline)</span>
              <span>₹90k (Expanded)</span>
            </div>
          </div>

          <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/60 text-xs text-stone-600 leading-relaxed">
            <span className="font-semibold text-stone-800">Assumption Source:</span> Initial estimate based on food,
            housekeeping, utilities, consumables and guest-service costs; to be validated through supplier quotations and
            pilot operations (Mission 7).
          </div>
        </div>

        {/* Calculated Output Matrix */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/70">
              <span className="text-xs text-stone-500 font-medium">Unit Contribution</span>
              <div className="text-xl font-bold font-mono text-stone-900 mt-1">
                ₹{contributionPerSale.toLocaleString('en-IN')}
              </div>
              <span className="text-[11px] text-emerald-700 font-medium mt-0.5 block">
                {contributionMarginPercent}% gross margin
              </span>
            </div>

            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/70">
              <span className="text-xs text-stone-500 font-medium">Monthly Revenue</span>
              <div className="text-xl font-bold font-mono text-stone-900 mt-1">
                ₹{monthlyRevenue.toLocaleString('en-IN')}
              </div>
              <span className="text-[11px] text-stone-500 mt-0.5 block">
                From {totalSalesUnits} total unit purchases
              </span>
            </div>

            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/70">
              <span className="text-xs text-stone-500 font-medium">Breakeven Volume</span>
              <div className="text-xl font-bold font-mono text-stone-900 mt-1">
                {breakevenUnits} units
              </div>
              <span className="text-[11px] text-stone-500 mt-0.5 block">
                ~{breakevenCustomers} unique guests/mo
              </span>
            </div>

            <div
              className={`p-4 rounded-xl border ${
                isProfitable
                  ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                  : 'bg-rose-50/70 border-rose-200 text-rose-950'
              }`}
            >
              <span className="text-xs font-medium text-stone-600">Operating Surplus (Net)</span>
              <div className={`text-xl font-bold font-mono mt-1 ${isProfitable ? 'text-emerald-800' : 'text-rose-800'}`}>
                {isProfitable ? '+' : ''}₹{operatingSurplus.toLocaleString('en-IN')}
              </div>
              <span className="text-[11px] text-stone-600 mt-0.5 block">
                {isProfitable ? 'Positive cash generation' : 'Deficit under current volume'}
              </span>
            </div>
          </div>

          {/* Visual Cash Flow Waterfall */}
          <div className="p-4 rounded-xl bg-stone-900 text-stone-100 space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="text-stone-300 font-medium">Monthly Cash Flow Breakdown</span>
              <span className="font-mono text-emerald-400 font-medium">
                {activeScenario === 'base'
                  ? 'Base Case (₹22,000 Surplus)'
                  : activeScenario === 'ambitious'
                  ? 'Peak Season (High Occupancy)'
                  : activeScenario === 'conservative'
                  ? 'Off-Peak Runway'
                  : 'Custom Scenario'}
              </span>
            </div>

            <div className="space-y-1.5 text-xs font-mono">
              <div className="flex justify-between py-1 border-b border-stone-800">
                <span className="text-stone-400">Total Inflow (Gross Sales)</span>
                <span className="text-white">+₹{monthlyRevenue.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-800">
                <span className="text-stone-400">Total Variable Costs ({totalSalesUnits} units × ₹{variableCost})</span>
                <span className="text-stone-300">-₹{totalVariableCost.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-800">
                <span className="text-stone-400">Total Fixed Costs (Homestay Operations)</span>
                <span className="text-stone-300">-₹{fixedCost.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between pt-1 font-bold text-sm">
                <span className="text-stone-200">Net Operating Surplus</span>
                <span className={isProfitable ? 'text-emerald-400' : 'text-rose-400'}>
                  ₹{operatingSurplus.toLocaleString('en-IN')} / mo
                </span>
              </div>
            </div>
          </div>

          {activeScenario === 'custom' && (
            <button
              onClick={() => applyScenario('base')}
              className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-medium text-stone-600 hover:text-stone-900 border border-stone-200 rounded-lg hover:bg-stone-50 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset to DGU Base Plan (₹22k Surplus)</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
