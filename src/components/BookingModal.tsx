import React, { useState } from 'react';
import { X, Calendar, Users, Compass, Check, MessageSquare, IndianRupee, ShieldCheck } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPackage?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, defaultPackage = 'standard' }) => {
  const [roomType, setRoomType] = useState<string>('pine-cottage');
  const [nights, setNights] = useState<number>(2);
  const [guests, setGuests] = useState<number>(2);
  const [includeMeals, setIncludeMeals] = useState<boolean>(true);
  const [trekSupport, setTrekSupport] = useState<boolean>(true);
  const [transportAssistance, setTransportAssistance] = useState<boolean>(true);
  const [guestName, setGuestName] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [travelDate, setTravelDate] = useState<string>('2026-10-15');

  if (!isOpen) return null;

  // Rate calculation matching Mission 7
  // Base room: ₹1,800/night (up to 2 guests)
  // Attic Glacier View: ₹2,400/night
  // Trekker Dorm: ₹900/night per person
  let roomRate = 1800;
  if (roomType === 'attic-glacier') roomRate = 2400;
  if (roomType === 'trekker-bunk') roomRate = 900 * guests;

  const mealCostPerGuestPerDay = 450; // Kumaoni breakfast + traditional dinner
  const mealTotal = includeMeals ? mealCostPerGuestPerDay * guests * nights : 0;
  const trekFee = trekSupport ? 1200 * Math.max(1, Math.ceil(nights / 2)) : 0;
  const transportFee = transportAssistance ? 1500 : 0; // Pickup from Bageshwar / Bharadi market

  const totalRoomCost = roomRate * nights;
  const grandTotal = totalRoomCost + mealTotal + trekFee + transportFee;
  const perPersonCost = Math.round(grandTotal / guests);

  const generateWhatsAppMessage = () => {
    const text = `*Pine & Peaks Homestay Booking Enquiry (Kafni Glacier)*
Name: ${guestName || 'Traveler'}
Phone: ${guestPhone || 'Not specified'}
Arrival Date: ${travelDate}
Duration: ${nights} Night(s) | Guests: ${guests}
Room: ${roomType === 'pine-cottage' ? 'Pine & Stone Cottage' : roomType === 'attic-glacier' ? 'Attic Glacier View Suite' : 'Trekker Bunk'}
Kumaoni Meals: ${includeMeals ? 'Yes (Bhatt ki Churkani & Mandua Roti included)' : 'No'}
Kafni Trek Support: ${trekSupport ? 'Yes (Local certified guide & permits)' : 'No'}
Bageshwar Pickup: ${transportAssistance ? 'Yes (Taxi assistance)' : 'No'}
Estimated Package Total: ₹${grandTotal.toLocaleString('en-IN')} (approx ₹${perPersonCost.toLocaleString('en-IN')}/person)`;

    return encodeURIComponent(text);
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const encoded = generateWhatsAppMessage();
    // Use simulated WhatsApp link or direct intent
    window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-stone-900 text-stone-100 p-6 flex items-start justify-between">
          <div>
            <span className="text-[11px] font-mono uppercase text-emerald-400 font-semibold tracking-wider">
              Mission 10 MVP Booking Prototype
            </span>
            <h3 className="text-xl font-bold font-display text-white mt-1">
              Enquire & Reserve at The Pine and Peaks
            </h3>
            <p className="text-xs text-stone-300 mt-1">
              Bageshwar District, Uttarakhand • Base for Kafni & Pindari Glacier Treks
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-white p-1 rounded-lg hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Form */}
        <form onSubmit={handleWhatsAppSubmit} className="p-6 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Full Name</label>
              <input
                type="text"
                required
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="e.g. Aarav Sharma"
                className="w-full text-xs px-3 py-2 border border-stone-300 rounded-lg focus:ring-1 focus:ring-emerald-700 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">WhatsApp Mobile Number</label>
              <input
                type="tel"
                required
                value={guestPhone}
                onChange={(e) => setGuestPhone(e.target.value)}
                placeholder="e.g. +91 98765 43210"
                className="w-full text-xs px-3 py-2 border border-stone-300 rounded-lg focus:ring-1 focus:ring-emerald-700 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Expected Date</label>
              <input
                type="date"
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
                className="w-full text-xs px-2.5 py-2 border border-stone-300 rounded-lg focus:ring-1 focus:ring-emerald-700 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Nights</label>
              <select
                value={nights}
                onChange={(e) => setNights(Number(e.target.value))}
                className="w-full text-xs px-2.5 py-2 border border-stone-300 rounded-lg focus:ring-1 focus:ring-emerald-700 focus:outline-none"
              >
                <option value={1}>1 Night</option>
                <option value={2}>2 Nights (Recommended)</option>
                <option value={3}>3 Nights</option>
                <option value={5}>5 Nights (Full Kafni Trek)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Guests</label>
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full text-xs px-2.5 py-2 border border-stone-300 rounded-lg focus:ring-1 focus:ring-emerald-700 focus:outline-none"
              >
                <option value={1}>1 Solo Trekker</option>
                <option value={2}>2 Guests / Couple</option>
                <option value={3}>3 Guests</option>
                <option value={4}>4 Guests Group</option>
                <option value={6}>6+ Group</option>
              </select>
            </div>
          </div>

          {/* Accommodation Selection */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-2">Choose Stay Configuration</label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setRoomType('pine-cottage')}
                className={`p-3 rounded-xl border text-left transition-all ${
                  roomType === 'pine-cottage'
                    ? 'border-emerald-600 bg-emerald-50/50 ring-1 ring-emerald-600'
                    : 'border-stone-200 hover:bg-stone-50'
                }`}
              >
                <div className="font-semibold text-xs text-stone-900">Pine Stone Cottage</div>
                <div className="text-[11px] font-mono text-stone-600 mt-0.5">₹1,800 / night</div>
                <div className="text-[10px] text-stone-500 mt-1">Cozy cedar room & veranda</div>
              </button>

              <button
                type="button"
                onClick={() => setRoomType('attic-glacier')}
                className={`p-3 rounded-xl border text-left transition-all ${
                  roomType === 'attic-glacier'
                    ? 'border-emerald-600 bg-emerald-50/50 ring-1 ring-emerald-600'
                    : 'border-stone-200 hover:bg-stone-50'
                }`}
              >
                <div className="font-semibold text-xs text-stone-900">Attic Glacier Suite</div>
                <div className="text-[11px] font-mono text-stone-600 mt-0.5">₹2,400 / night</div>
                <div className="text-[10px] text-stone-500 mt-1">Panoramic peak vistas</div>
              </button>

              <button
                type="button"
                onClick={() => setRoomType('trekker-bunk')}
                className={`p-3 rounded-xl border text-left transition-all ${
                  roomType === 'trekker-bunk'
                    ? 'border-emerald-600 bg-emerald-50/50 ring-1 ring-emerald-600'
                    : 'border-stone-200 hover:bg-stone-50'
                }`}
              >
                <div className="font-semibold text-xs text-stone-900">Trekker Alpine Dorm</div>
                <div className="text-[11px] font-mono text-stone-600 mt-0.5">₹900 / pers / night</div>
                <div className="text-[10px] text-stone-500 mt-1">Warm bunk & gear locker</div>
              </button>
            </div>
          </div>

          {/* Value-Add Experiences & Support Checkboxes */}
          <div className="space-y-2 pt-1 border-t border-stone-100">
            <span className="block text-xs font-semibold text-stone-700">Add Integrated Bundles</span>

            <label className="flex items-center justify-between p-2.5 rounded-lg border border-stone-200 hover:bg-stone-50 cursor-pointer">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={includeMeals}
                  onChange={(e) => setIncludeMeals(e.target.checked)}
                  className="rounded text-emerald-700 accent-emerald-700"
                />
                <span className="text-xs text-stone-800">
                  Authentic Kumaoni Home Dinners & Breakfasts (Bhatt ki Churkani & Mandua Rotis)
                </span>
              </div>
              <span className="text-xs font-mono text-stone-600 font-medium">₹450/day</span>
            </label>

            <label className="flex items-center justify-between p-2.5 rounded-lg border border-stone-200 hover:bg-stone-50 cursor-pointer">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={trekSupport}
                  onChange={(e) => setTrekSupport(e.target.checked)}
                  className="rounded text-emerald-700 accent-emerald-700"
                />
                <span className="text-xs text-stone-800">
                  Certified Local Guide for Kafni Glacier / Trail Orientation
                </span>
              </div>
              <span className="text-xs font-mono text-stone-600 font-medium">+₹1,200</span>
            </label>

            <label className="flex items-center justify-between p-2.5 rounded-lg border border-stone-200 hover:bg-stone-50 cursor-pointer">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={transportAssistance}
                  onChange={(e) => setTransportAssistance(e.target.checked)}
                  className="rounded text-emerald-700 accent-emerald-700"
                />
                <span className="text-xs text-stone-800">
                  Shared 4x4 Mountain Taxi Assistance from Bageshwar / Kathgodam
                </span>
              </div>
              <span className="text-xs font-mono text-stone-600 font-medium">+₹1,500</span>
            </label>
          </div>

          {/* Pricing Estimation Summary */}
          <div className="p-4 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-between">
            <div>
              <span className="text-[11px] text-stone-500 uppercase font-semibold">Estimated Total Cost</span>
              <div className="text-xl font-bold font-mono text-stone-900 mt-0.5">
                ₹{grandTotal.toLocaleString('en-IN')}
              </div>
              <span className="text-[11px] text-stone-500">
                (Approx ₹{perPersonCost.toLocaleString('en-IN')} per person for {nights} nights)
              </span>
            </div>

            <button
              type="submit"
              className="flex items-center gap-2 px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send WhatsApp Enquiry</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-[11px] text-stone-500">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>Mission 10 MVP: Zero advance payment required until dates and guide are verified.</span>
          </div>
        </form>
      </div>
    </div>
  );
};
